/* =====================================================
   SeaKingsGames · Motor para juegos de tablero con dados
   Lo usan: serpientes.html y juego-ajolote.html
   Cada juego le pasa cómo dibujar su tablero, dónde está cada
   casilla y qué pasa cuando caes en ella.
   ===================================================== */
function Tablero(cfg){
  const { $, sfx } = SK;
  const COLORS = [
    { name:'Rojo', c:'#ff5b5b', d:'#b8283a' },
    { name:'Azul', c:'#4dabf7', d:'#1c6fb8' },
    { name:'Verde', c:'#51cf66', d:'#2b8a3e' },
    { name:'Amarillo', c:'#ffd43b', d:'#b38600' },
  ];
  const CPU_NAMES = ['Lupita', 'Don Chuy', 'Pancho'];
  const MODES = [
    { id:'c1', label:'🤖 Tú contra 1 compu', humans:1, total:2 },
    { id:'c2', label:'🤖 Tú contra 2 compus', humans:1, total:3 },
    { id:'c3', label:'🤖 Tú contra 3 compus', humans:1, total:4 },
    { id:'a2', label:'👥 2 jugadores (mismo celular)', humans:2, total:2 },
    { id:'a3', label:'👥 3 jugadores', humans:3, total:3 },
    { id:'a4', label:'👥 4 jugadores', humans:4, total:4 },
  ];
  const PIPS = { 1:[4], 2:[0,8], 3:[0,4,8], 4:[0,2,6,8], 5:[0,2,4,6,8], 6:[0,2,3,5,6,8] };
  const MAX = cfg.maxCell;
  const SPEED = window.TB_SPEED || 1; // solo para pruebas automáticas
  const st = { players:[], cur:0, over:true, run:0, waiting:false, mode:null, W:0, H:0, rolls:0 };

  /* ---------- ESTILOS ---------- */
  const css = document.createElement('style');
  css.textContent = `
    .tb-players{display:flex;justify-content:center;gap:6px;padding:4px 10px;flex-wrap:wrap}
    .tb-p{display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:12px;background:rgba(255,255,255,.07);font-size:13px;font-weight:600;border:2px solid transparent;transition:transform .2s}
    .tb-p.turn{border-color:#fff;transform:scale(1.06);background:rgba(255,255,255,.14)}
    .tb-p i{width:14px;height:14px;border-radius:50%;display:inline-block;box-shadow:inset 0 -2px 0 rgba(0,0,0,.25)}
    .tb-p small{color:var(--text-dim);font-weight:600}
    .tb-board{position:relative;margin:4px auto 0;border-radius:14px;overflow:hidden;box-shadow:0 12px 30px rgba(0,0,0,.45)}
    .tb-board canvas{position:absolute;inset:0;width:100%;height:100%}
    .tb-msg{text-align:center;font-weight:600;min-height:44px;padding:8px 16px 0;font-size:15px;line-height:1.35}
    .tb-row{display:flex;align-items:center;justify-content:center;gap:14px;padding:6px 12px 16px}
    .tb-dice{display:flex;gap:8px}
    .die{width:52px;height:52px;border-radius:12px;background:#fff;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);padding:7px;box-shadow:0 4px 0 #c9cfd8,0 8px 16px rgba(0,0,0,.35)}
    .die b{width:9px;height:9px;border-radius:50%;background:#1c2a3a;margin:auto;opacity:0}
    .die b.on{opacity:1}
    .die.roll{animation:dieRoll .12s linear infinite}
    @keyframes dieRoll{50%{transform:rotate(12deg) translateY(-4px)}}
    .tb-roll{min-width:150px}
    .tb-roll:disabled{opacity:.4}
    .tb-modes{display:flex;flex-direction:column;gap:10px;width:min(380px,94vw)}
    .tb-modes .diff-btn{width:100%}
    #game > *{flex-shrink:0}
  `;
  document.head.appendChild(css);

  /* ---------- PANTALLA DE JUEGO ---------- */
  const game = $('game');
  game.innerHTML = `
    <div class="topbar">
      <button class="icon-btn" id="tb-back">‹</button>
      <div class="level-title"><div class="badge" id="tb-badge"></div><h1 id="tb-title">${cfg.title}</h1></div>
      <button class="icon-btn small" id="tb-sound">🔊</button>
      <button class="icon-btn" id="tb-restart">↻</button>
    </div>
    <div class="tb-players" id="tb-players"></div>
    <div class="tb-board" id="tb-board"><canvas id="tb-bg"></canvas><canvas id="tb-fg"></canvas></div>
    <div class="tb-msg" id="tb-msg"></div>
    <div class="tb-row"><div class="tb-dice" id="tb-dice"></div><button class="btn-primary tb-roll" id="tb-roll">🎲 Tirar</button></div>`;
  const bg = $('tb-bg'), fg = $('tb-fg'), bctx = bg.getContext('2d'), fctx = fg.getContext('2d');

  function layout(){
    const dpr = devicePixelRatio || 1;
    const maxW = Math.min(innerWidth - 16, 560), maxH = innerHeight - 290;
    let W = maxW, H = W / cfg.aspect;
    if (H > maxH) { H = Math.max(240, maxH); W = H * cfg.aspect; }
    st.W = W; st.H = H;
    const box = $('tb-board'); box.style.width = W + 'px'; box.style.height = H + 'px';
    [bg, fg].forEach(c => { c.width = W * dpr; c.height = H * dpr; });
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0); fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cfg.drawBoard(bctx, W, H);
    st.players.forEach(p => { const c = spot(p, p.pos); p.x = c.x; p.y = c.y; });
    drawTokens();
  }
  addEventListener('resize', () => { if (game.classList.contains('active')) layout(); });

  /* ---------- FICHAS ---------- */
  // si varias fichas están en la misma casilla, se acomodan alrededor
  function spot(p, pos){
    const c = cfg.cellCenter(pos, st.W, st.H);
    const same = st.players.filter(q => q.pos === pos);
    // en la salida se forman en fila
    if (pos === 0) return { x: c.x + same.indexOf(p) * cfg.cellSize(st.W, st.H) * .62, y: c.y };
    if (same.length < 2) return c;
    const k = same.indexOf(p), r = cfg.cellSize(st.W, st.H) * .2, a = k / same.length * Math.PI * 2 - Math.PI / 4;
    return { x: c.x + Math.cos(a) * r, y: c.y + Math.sin(a) * r };
  }
  function drawTokens(){
    fctx.clearRect(0, 0, st.W, st.H);
    const r = Math.max(8, cfg.cellSize(st.W, st.H) * .27);
    const order = st.players.map((p, i) => i).sort((a, b) => (a === st.cur) - (b === st.cur));
    order.forEach(i => {
      const p = st.players[i], col = COLORS[p.color], y = p.y - (p.lift || 0);
      fctx.fillStyle = 'rgba(0,0,0,.3)'; fctx.beginPath(); fctx.ellipse(p.x, p.y + r * .75, r * .8, r * .3, 0, 0, Math.PI * 2); fctx.fill();
      const g = fctx.createRadialGradient(p.x - r * .35, y - r * .4, r * .2, p.x, y, r);
      g.addColorStop(0, '#fff'); g.addColorStop(.25, col.c); g.addColorStop(1, col.d);
      fctx.fillStyle = g; fctx.strokeStyle = i === st.cur && !st.over ? '#fff' : 'rgba(255,255,255,.75)'; fctx.lineWidth = i === st.cur && !st.over ? 3 : 2;
      fctx.beginPath(); fctx.arc(p.x, y, r, 0, Math.PI * 2); fctx.fill(); fctx.stroke();
      fctx.fillStyle = '#fff'; fctx.font = `700 ${Math.round(r * .9)}px Fredoka, system-ui, sans-serif`; fctx.textAlign = 'center'; fctx.textBaseline = 'middle';
      fctx.strokeStyle = 'rgba(0,0,0,.35)'; fctx.lineWidth = 3; fctx.strokeText(p.tag, p.x, y + 1); fctx.fillText(p.tag, p.x, y + 1);
    });
  }
  function animate(ms, fn){
    return new Promise(res => {
      const t0 = performance.now(); ms *= SPEED;
      const f = now => { const k = ms <= 0 ? 1 : Math.min(1, (now - t0) / ms); fn(k); drawTokens(); if (k < 1) requestAnimationFrame(f); else res(); };
      requestAnimationFrame(f);
    });
  }
  const wait = ms => new Promise(r => setTimeout(r, ms * SPEED));
  async function hop(p, to){
    const a = { x: p.x, y: p.y }; p.pos = to; const b = spot(p, to), r = cfg.cellSize(st.W, st.H) * .35;
    await animate(cfg.hopMs || 150, k => { p.x = a.x + (b.x - a.x) * k; p.y = a.y + (b.y - a.y) * k; p.lift = Math.sin(Math.PI * k) * r; });
    p.lift = 0; sfx.tone(500 + to * 4, .04, 'triangle', .07);
  }
  async function slide(p, to, ms){
    const a = { x: p.x, y: p.y }; p.pos = to; const b = spot(p, to);
    await animate(ms || 650, k => { const e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; p.x = a.x + (b.x - a.x) * e; p.y = a.y + (b.y - a.y) * e; });
    // reacomoda a todos los que comparten casilla
    st.players.forEach(q => { const c = spot(q, q.pos); q.x = c.x; q.y = c.y; });
  }
  async function moveSteps(p, steps){
    let dir = 1;
    for (let n = 0; n < steps; n++) {
      if (p.pos >= MAX) { if (!cfg.exact) break; dir = -1; }
      await hop(p, p.pos + dir);
    }
    st.players.forEach(q => { const c = spot(q, q.pos); q.x = c.x; q.y = c.y; });
    drawTokens();
  }

  /* ---------- DADOS ---------- */
  function dieEl(v){ const d = document.createElement('div'); d.className = 'die'; for (let k = 0; k < 9; k++) { const b = document.createElement('b'); if (PIPS[v].includes(k)) b.className = 'on'; d.appendChild(b); } return d; }
  function showDice(vals, rolling){ const box = $('tb-dice'); box.innerHTML = ''; vals.forEach(v => { const d = dieEl(v); if (rolling) d.classList.add('roll'); box.appendChild(d); }); }
  async function rollDice(){
    const n = cfg.dice || 1, res = Array.from({ length:n }, () => 1 + ((Math.random() * 6) | 0));
    const t0 = performance.now();
    while (performance.now() - t0 < 620 * SPEED) { showDice(Array.from({ length:n }, () => 1 + ((Math.random() * 6) | 0)), true); sfx.tone(300 + Math.random() * 300, .03, 'square', .04); await wait(70); }
    showDice(res, false); sfx.tone(700, .06, 'triangle', .12);
    return res;
  }

  /* ---------- TURNOS ---------- */
  const msg = t => { $('tb-msg').textContent = t; };
  function paintPlayers(){
    const box = $('tb-players'); box.innerHTML = '';
    st.players.forEach((p, i) => {
      const d = document.createElement('div'); d.className = 'tb-p' + (i === st.cur && !st.over ? ' turn' : '');
      d.innerHTML = `<i style="background:${COLORS[p.color].c}"></i><span></span><small>${p.pos ? '· ' + p.pos : ''}${p.skip ? ' ⏸' : ''}</small>`;
      d.querySelector('span').textContent = p.name;
      box.appendChild(d);
    });
  }
  function setRoll(on){ $('tb-roll').disabled = !on; st.waiting = on; }
  async function turn(run){
    if (run !== st.run || st.over) return;
    const p = st.players[st.cur];
    paintPlayers(); drawTokens();
    if (p.skip > 0) {
      p.skip--; msg(p.you ? '⏸ Pierdes este turno' : `⏸ ${p.name} pierde este turno${p.skipWhy ? ' (' + p.skipWhy + ')' : ''}`);
      paintPlayers(); await wait(1300); return next(run);
    }
    if (p.cpu) { setRoll(false); msg(`🤖 Turno de ${p.name}…`); await wait(750); if (run !== st.run) return; return play(run); }
    msg(st.mode.humans > 1 ? `🎲 Turno de ${p.name} (${COLORS[p.color].name.toLowerCase()})` : '🎲 Tu turno: ¡tira el dado!');
    setRoll(true);
  }
  async function play(run){
    setRoll(false);
    const p = st.players[st.cur];
    const dice = await rollDice(); if (run !== st.run) return;
    const total = dice.reduce((a, b) => a + b, 0);
    st.rolls++;
    msg(`${p.you ? 'Sacaste' : p.name + ' sacó'} ${dice.length > 1 ? dice.join(' + ') + ' = ' : ''}${total}`);
    await moveSteps(p, total); if (run !== st.run) return;
    let again = !!(cfg.extraOnSix && total === 6 && dice.length === 1);
    let guard = 0, act = cfg.onLand ? await cfg.onLand(p, p.pos, api) : null;
    while (act && guard++ < 3) {
      if (run !== st.run) return;
      if (act.msg) msg(act.msg);
      if (act.sound === 'good') sfx.good(); else if (act.sound === 'bad') sfx.bad(); else if (act.sound === 'big') sfx.win();
      if (act.to != null && act.to !== p.pos) { await wait(act.delay || 450); await slide(p, Math.max(0, Math.min(MAX, act.to)), act.ms); }
      if (act.skip) { p.skip = act.skip; p.skipWhy = act.skipWhy || ''; }
      if (act.again) again = true;
      await wait(act.pause || 900);
      act = act.chain && cfg.onLand ? await cfg.onLand(p, p.pos, api) : null;
    }
    if (run !== st.run) return;
    paintPlayers();
    if (p.pos === MAX) return finish(p);
    if (again) { msg(p.you ? '🔁 ¡Tiras otra vez!' : `🔁 ¡${p.name} tira otra vez!`); await wait(700); return turn(run); }
    next(run);
  }
  function next(run){ if (run !== st.run || st.over) return; st.cur = (st.cur + 1) % st.players.length; turn(run); }

  /* ---------- INICIO Y FIN ---------- */
  function start(mode){
    sfx.init(); sfx.tap();
    st.mode = mode; st.run++; st.over = false; st.cur = 0; st.rolls = 0;
    st.players = Array.from({ length: mode.total }, (_, i) => {
      const human = i < mode.humans;
      const name = human ? (mode.humans === 1 ? 'Tú' : `Jugador ${i + 1}`) : CPU_NAMES[i - 1];
      return { name, cpu: !human, you: human && mode.humans === 1, color: i, pos: 0, skip: 0, x: 0, y: 0, lift: 0, tag: human ? (mode.humans === 1 ? 'TÚ' : String(i + 1)) : name[0] };
    });
    $('tb-badge').textContent = mode.humans === 1 ? `VS ${mode.total - 1} COMPU${mode.total > 2 ? 'S' : ''}` : `${mode.total} JUGADORES`;
    SK.showScreen('game'); layout(); showDice(Array(cfg.dice || 1).fill(6), false);
    paintPlayers(); turn(st.run);
  }
  function finish(p){
    st.over = true; setRoll(false); paintPlayers(); drawTokens();
    const ranking = st.players.slice().sort((a, b) => b.pos - a.pos);
    const human = !p.cpu, solo = st.mode.humans === 1;
    if (human && solo) {
      SK.store.set(`sk-${cfg.id}-wins`, SK.store.get(`sk-${cfg.id}-wins`, 0) + 1);
      sfx.win(); setTimeout(() => sfx.newRec(), 500);
    } else if (solo) sfx.lose(); else sfx.win();
    const extra = document.createElement('div');
    extra.style.cssText = 'display:flex;flex-direction:column;gap:6px;margin:6px 0 4px';
    ranking.forEach((q, k) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:12px;background:rgba(255,255,255,.07);font-weight:600';
      row.innerHTML = `<span>${['🥇', '🥈', '🥉', '4️⃣'][k]}</span><i style="width:14px;height:14px;border-radius:50%;background:${COLORS[q.color].c}"></i><span style="flex:1;text-align:left"></span><small style="color:var(--text-dim)">casilla ${q.pos}</small>`;
      row.children[2].textContent = q.name; extra.appendChild(row);
    });
    setTimeout(() => SK.result({
      emoji: human ? '🏆' : '🤖', lose: solo && !human,
      title: solo ? (human ? '¡Ganaste!' : `Ganó ${p.name}`) : `¡Ganó ${p.name}!`,
      text: `Llegó a la meta en ${st.rolls} tiradas`, extra,
      share: human && solo ? { emoji: cfg.emoji, title:'¡GANÉ!', game: cfg.title, sub: st.mode.label.replace(/^🤖 /, ''), big:'🏆 1er lugar', stats:[[st.rolls, 'TIRADAS'], [SK.store.get(`sk-${cfg.id}-wins`, 0), 'VICTORIAS']], text:`${cfg.emoji} ¡Gané en ${cfg.title}!\nJuega: SeaKingsGames`, file:`logro-${cfg.id}` } : null,
      buttons:[{ label:'Otra partida →', onClick: () => start(st.mode) }, { label:'Cambiar jugadores', kind:'ghost', onClick: toMenu }],
    }), 900);
  }
  function toMenu(){ st.run++; st.over = true; SK.closeModal(); buildMenu(); SK.showScreen('menu'); }
  function buildMenu(){
    const box = $('modes'); box.innerHTML = ''; box.className = 'tb-modes';
    const wins = SK.store.get(`sk-${cfg.id}-wins`, 0);
    MODES.forEach(m => {
      const b = document.createElement('button'); b.className = 'diff-btn';
      b.innerHTML = `<div><div>${m.label}</div></div><span class="tag ${m.humans === 1 ? 'd1' : 'd0'}">${m.total} 🎲</span>`;
      b.onclick = () => start(m); box.appendChild(b);
    });
    if ($('wins')) $('wins').textContent = wins ? `🏆 Le has ganado a la compu ${wins} ${wins === 1 ? 'vez' : 'veces'}` : '';
  }

  /* ---------- CONTROLES ---------- */
  $('tb-roll').onclick = () => { if (st.waiting && !st.over) { sfx.init(); play(st.run); } };
  document.addEventListener('keydown', e => {
    if ((e.code === 'Space' || e.key === 'Enter') && game.classList.contains('active') && st.waiting && !document.querySelector('#sk-modal.active')) { e.preventDefault(); play(st.run); }
  });
  $('tb-back').onclick = () => {
    sfx.tap();
    if (st.over) { toMenu(); return; }
    SK.result({ emoji:'🚪', title:'¿Salir de la partida?', text:'Se perderá el avance', buttons:[{ label:'Sí, salir', onClick: toMenu }, { label:'Seguir jugando', kind:'secondary' }] });
  };
  $('tb-restart').onclick = () => {
    sfx.tap();
    SK.result({ emoji:'🔄', title:'¿Empezar de nuevo?', text:'Todos regresan a la salida', buttons:[{ label:'Sí, otra vez', onClick: () => start(st.mode) }, { label:'Cancelar', kind:'secondary' }] });
  };
  SK.soundButton($('tb-sound'));

  const api = { players: () => st.players, msg, wait, COLORS };
  buildMenu();
  return { start, api, st };
}
