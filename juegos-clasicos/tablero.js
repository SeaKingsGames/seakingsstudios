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
    .die.roll{animation:dieRoll .14s linear infinite}
    @keyframes dieRoll{0%{transform:rotate(0) translateY(0)}25%{transform:rotate(-14deg) translateY(-7px) scale(1.05)}50%{transform:rotate(10deg) translateY(-2px)}75%{transform:rotate(-6deg) translateY(-6px)}100%{transform:rotate(0)}}
    .die.land{animation:dieLand .38s cubic-bezier(.34,1.56,.64,1)}
    @keyframes dieLand{0%{transform:scale(1.35) rotate(-10deg)}60%{transform:scale(.92)}100%{transform:none}}
    .tb-roll:not(:disabled){animation:tbPulse 1.3s ease-in-out infinite}
    @keyframes tbPulse{0%,100%{box-shadow:0 4px 0 var(--accent-deep),0 0 0 0 rgba(255,212,59,.55)}50%{box-shadow:0 4px 0 var(--accent-deep),0 0 0 10px rgba(255,212,59,0)}}
    .tb-banner{position:absolute;left:50%;top:50%;z-index:5;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:2px;padding:12px 22px;border-radius:20px;color:#fff;font-family:'Bagel Fat One','Fredoka',system-ui,sans-serif;font-size:24px;text-align:center;line-height:1.05;box-shadow:0 10px 30px rgba(0,0,0,.45),inset 0 0 0 3px rgba(255,255,255,.5);pointer-events:none;animation:tbBanner var(--ms,1300ms) ease-out forwards;white-space:nowrap}
    .tb-banner b{font-size:48px;line-height:1;font-family:sans-serif}
    .tb-banner b img{display:block;width:min(34vw,140px);height:min(34vw,140px);border-radius:16px;box-shadow:0 6px 16px rgba(0,0,0,.4),0 0 0 3px rgba(255,255,255,.85);margin-bottom:6px}
    .tb-banner.has-img{padding:12px 16px 14px}
    @keyframes tbBanner{0%{opacity:0;transform:translate(-50%,-50%) scale(.3) rotate(-8deg)}14%{opacity:1;transform:translate(-50%,-50%) scale(1.12) rotate(2deg)}24%{transform:translate(-50%,-50%) scale(1)}82%{opacity:1;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-62%) scale(.9)}}
    .tb-dark{position:absolute;inset:0;z-index:4;background:radial-gradient(circle,rgba(10,20,40,.35),rgba(0,0,10,.85));pointer-events:none;animation:tbDark var(--ms,1600ms) ease-in-out forwards}
    @keyframes tbDark{0%,100%{opacity:0}20%,75%{opacity:1}}
    .tb-sprite{position:absolute;z-index:6;pointer-events:none;font-size:46px;line-height:1;transform:translate(-50%,-50%)}
    .tb-msg.flash{animation:skPop .35s cubic-bezier(.34,1.56,.64,1)}
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
      const p = st.players[i], col = COLORS[p.color], lift = p.lift || 0, y = p.y - lift, sy = p.sy || 1, sx = 1 / Math.sqrt(sy), sc = p.scale == null ? 1 : p.scale;
      if (sc <= .01) return;
      const sh = Math.max(.35, 1 - lift / (r * 4));
      fctx.fillStyle = `rgba(0,0,0,${.3 * sh})`; fctx.beginPath(); fctx.ellipse(p.x, p.y + r * .75, r * .8 * sh * sc, r * .3 * sh * sc, 0, 0, Math.PI * 2); fctx.fill();
      const turn = i === st.cur && !st.over;
      fctx.save(); fctx.translate(p.x, y + r * (1 - sy) * .9); fctx.scale(sx * sc, sy * sc);
      if (cfg.drawToken) cfg.drawToken(fctx, p, r, col, turn);
      else {
        const g = fctx.createRadialGradient(-r * .35, -r * .4, r * .2, 0, 0, r);
        g.addColorStop(0, '#fff'); g.addColorStop(.25, col.c); g.addColorStop(1, col.d);
        fctx.fillStyle = g; fctx.strokeStyle = turn ? '#fff' : 'rgba(255,255,255,.75)'; fctx.lineWidth = turn ? 3 : 2;
        fctx.beginPath(); fctx.arc(0, 0, r, 0, Math.PI * 2); fctx.fill(); fctx.stroke();
        fctx.fillStyle = '#fff'; fctx.font = `700 ${Math.round(r * .9)}px Fredoka, system-ui, sans-serif`; fctx.textAlign = 'center'; fctx.textBaseline = 'middle';
        fctx.strokeStyle = 'rgba(0,0,0,.35)'; fctx.lineWidth = 3; fctx.strokeText(p.tag, 0, 1); fctx.fillText(p.tag, 0, 1);
      }
      fctx.restore();
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
  async function hop(p, to, last){
    const a = { x: p.x, y: p.y }; p.pos = to; const b = spot(p, to), r = cfg.cellSize(st.W, st.H) * .35;
    await animate(cfg.hopMs || 150, k => { p.x = a.x + (b.x - a.x) * k; p.y = a.y + (b.y - a.y) * k; p.lift = Math.sin(Math.PI * k) * r; p.sy = 1 + Math.sin(Math.PI * k) * .18; });
    p.lift = 0; sfx.tone(500 + to * 4, .04, 'triangle', .07);
    await animate(last ? 160 : 60, k => { p.sy = 1 - Math.sin(Math.PI * k) * (last ? .3 : .14); });
    p.sy = 1;
  }
  const ease = k => k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
  async function slide(p, to, ms, opt = {}){
    const a = { x: p.x, y: p.y }, from = p.pos; p.pos = to; const b = spot(p, to), s = cfg.cellSize(st.W, st.H);
    const path = opt.path && opt.path.length > 1 ? opt.path : null;
    let lens = null, total = 0;
    if (path) { lens = [0]; for (let i = 1; i < path.length; i++) { total += Math.hypot(path[i].x - path[i - 1].x, path[i].y - path[i - 1].y); lens.push(total); } }
    await animate(ms || 650, k => {
      const e = opt.linear ? k : ease(k);
      if (path) {
        const d = e * total; let i = 1; while (i < lens.length - 1 && lens[i] < d) i++;
        const q = (d - lens[i - 1]) / Math.max(1e-6, lens[i] - lens[i - 1]);
        p.x = path[i - 1].x + (path[i].x - path[i - 1].x) * q; p.y = path[i - 1].y + (path[i].y - path[i - 1].y) * q;
        if (k > .85) { const t = (k - .85) / .15; p.x += (b.x - p.x) * t; p.y += (b.y - p.y) * t; }
      } else { p.x = a.x + (b.x - a.x) * e; p.y = a.y + (b.y - a.y) * e; }
      p.lift = opt.arc ? Math.sin(Math.PI * e) * s * (opt.arc === true ? 1.6 : opt.arc) : 0;
      p.sy = opt.arc ? 1 + Math.sin(Math.PI * e) * .2 : 1;
      if (opt.wobble) p.x += Math.sin(k * Math.PI * 8) * s * .06 * (1 - k);
    });
    p.lift = 0; p.sy = 1;
    // reacomoda a todos los que comparten casilla
    st.players.forEach(q => { const c = spot(q, q.pos); q.x = c.x; q.y = c.y; });
    // efectitos genéricos: subir brilla, bajar tiembla
    if (!opt.quiet) {
      if (to > from && to !== 0) SK.fx.sparkle(pagePoint(p.x, p.y), { n: 10, size: 6 });
      else if (to < from) { SK.fx.shake($('tb-board'), .6); SK.fx.vibrate(40); }
    }
    await animate(140, k => { p.sy = 1 - Math.sin(Math.PI * k) * .25; }); p.sy = 1;
  }
  function pagePoint(x, y){ const r = $('tb-board').getBoundingClientRect(); return { x: r.left + x, y: r.top + y }; }
  function banner(ico, title, color, ms = 1300){
    const d = document.createElement('div'); d.className = 'tb-banner';
    d.style.background = color || 'linear-gradient(180deg,#ff8a5c,#e8590c)'; d.style.setProperty('--ms', ms + 'ms');
    d.innerHTML = '<b></b><span></span>'; d.lastChild.textContent = title;
    if (ico && ico.img) { const im = document.createElement('img'); im.src = ico.img; im.alt = ''; d.firstChild.appendChild(im); d.classList.add('has-img'); }
    else d.firstChild.textContent = ico;
    $('tb-board').appendChild(d); setTimeout(() => d.remove(), ms + 50);
  }
  function darken(ms = 1600){ const d = document.createElement('div'); d.className = 'tb-dark'; d.style.setProperty('--ms', ms + 'ms'); $('tb-board').appendChild(d); setTimeout(() => d.remove(), ms + 50); }
  function sprite(txt, from, to, ms = 1400, size = 46){
    const d = document.createElement('div'); d.className = 'tb-sprite'; d.textContent = txt; d.style.fontSize = size + 'px';
    d.style.left = from.x + 'px'; d.style.top = from.y + 'px'; $('tb-board').appendChild(d);
    const anim = d.animate([{ left: from.x + 'px', top: from.y + 'px', opacity: 0, transform:'translate(-50%,-50%) scale(.6)' }, { opacity: 1, offset: .15, transform:'translate(-50%,-50%) scale(1.1)' }, { opacity: 1, offset: .8 }, { left: to.x + 'px', top: to.y + 'px', opacity: 0, transform:'translate(-50%,-50%) scale(1)' }], { duration: ms * SPEED, easing:'ease-in-out' });
    return new Promise(res => { anim.onfinish = () => { d.remove(); res(); }; });
  }
  // la ficha del turno respira mientras esperas
  let idleRaf = 0;
  function idle(){
    cancelAnimationFrame(idleRaf);
    const p = st.players[st.cur]; if (!p || !st.waiting || st.over) { if (p) { p.lift = 0; p.sy = 1; } drawTokens(); return; }
    const r = cfg.cellSize(st.W, st.H) * .12, t = performance.now() / 1000;
    p.lift = Math.abs(Math.sin(t * 4)) * r; p.sy = 1 + Math.sin(t * 8) * .04;
    drawTokens(); idleRaf = requestAnimationFrame(idle);
  }
  async function moveSteps(p, steps){
    let dir = 1;
    for (let n = 0; n < steps; n++) {
      if (p.pos >= MAX) { if (!cfg.exact) break; dir = -1; }
      await hop(p, p.pos + dir, n === steps - 1);
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
    document.querySelectorAll('#tb-dice .die').forEach(d => d.classList.add('land'));
    if (n > 1 && res.every(v => v === res[0])) SK.fx.float($('tb-dice'), '¡Dobles!', { color:'#ffd43b', size: 20 });
    return res;
  }

  /* ---------- TURNOS ---------- */
  const msg = t => { const m = $('tb-msg'); m.textContent = t; m.classList.remove('flash'); void m.offsetWidth; m.classList.add('flash'); };
  function paintPlayers(){
    const box = $('tb-players'); box.innerHTML = '';
    st.players.forEach((p, i) => {
      const d = document.createElement('div'); d.className = 'tb-p' + (i === st.cur && !st.over ? ' turn' : '');
      d.innerHTML = `<i style="background:${COLORS[p.color].c}"></i><span></span><small>${p.pos ? '· ' + p.pos : ''}${p.skip ? ' ⏸' : ''}</small>`;
      d.querySelector('span').textContent = p.name;
      box.appendChild(d);
    });
  }
  function setRoll(on){ $('tb-roll').disabled = !on; st.waiting = on; if (on) idle(); else { cancelAnimationFrame(idleRaf); const p = st.players[st.cur]; if (p) { p.lift = 0; p.sy = 1; } } }
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
      if (act.banner) banner(act.banner[0], act.banner[1], act.banner[2], act.banner[3]);
      if (act.anim) await act.anim(p, api);
      if (act.to != null && act.to !== p.pos) {
        await wait(act.delay || 450);
        const to = Math.max(0, Math.min(MAX, act.to));
        await slide(p, to, act.ms, { arc: act.arc, path: act.path ? act.path(st.W, st.H) : null, wobble: act.wobble, linear: act.linear, quiet: act.quiet });
        if (act.after) await act.after(p, api);
      }
      if (act.skip) { p.skip = act.skip; p.skipWhy = act.skipWhy || ''; }
      if (act.again) again = true;
      await wait(act.pause || 900);
      act = act.chain && cfg.onLand ? await cfg.onLand(p, p.pos, api) : null;
    }
    if (run !== st.run) return;
    paintPlayers();
    if (p.pos === MAX) return finish(p);
    if (again) { msg(p.you ? '🔁 ¡Tiras otra vez!' : `🔁 ¡${p.name} tira otra vez!`); SK.fx.float(pagePoint(p.x, p.y - 20), '🔁', { size: 26 }); await wait(700); return turn(run); }
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
    const fp = pagePoint(p.x, p.y);
    SK.fx.ring(fp, { size: 90 }); SK.fx.sparkle(fp, { n: 22 }); banner('🏆', `¡${p.you ? 'Ganaste' : 'Ganó ' + p.name}!`, 'linear-gradient(180deg,#ffd43b,#e0a800)', 1100);
    setTimeout(() => SK.result({
      emoji: human ? '🏆' : '🤖', lose: solo && !human, celebrate: human || !solo ? 'big' : false,
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

  const api = { players: () => st.players, msg, wait, COLORS, banner, darken, sprite, pagePoint, center: n => cfg.cellCenter(n, st.W, st.H), cell: () => cfg.cellSize(st.W, st.H), board: () => $('tb-board'), redraw: () => layout(), animate, size: () => ({ W: st.W, H: st.H }) };
  buildMenu();
  return { start, api, st, redraw: () => { if (st.W) layout(); } };
}
