/* =====================================================
   SeaKingsGames · funciones compartidas de los juegos
   Sonido, anuncios, récords, modales, logros para compartir y PWA.
   ===================================================== */
const SK = (() => {
  const $ = id => document.getElementById(id);

  /* ---------- SONIDO ---------- */
  const sfx = {
    ctx: null,
    enabled: (() => { try { return localStorage.getItem('sk-sound') !== '0'; } catch(e) { return true; } })(),
    init(){ if (this.ctx) return; try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {} },
    tone(f, d=.1, t='sine', v=.14, delay=0){
      if (!this.enabled) return; this.init(); if (!this.ctx) return;
      const now = this.ctx.currentTime + delay, o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = t; o.frequency.value = f;
      g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(v, now + .006); g.gain.exponentialRampToValueAtTime(.0001, now + d);
      o.connect(g).connect(this.ctx.destination); o.start(now); o.stop(now + d + .02);
    },
    noise(d=.3, v=.2){
      if (!this.enabled) return; this.init(); if (!this.ctx) return;
      const n = this.ctx.sampleRate * d, buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate), ch = buf.getChannelData(0);
      for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
      const src = this.ctx.createBufferSource(), g = this.ctx.createGain();
      src.buffer = buf; g.gain.value = v; src.connect(g).connect(this.ctx.destination); src.start();
    },
    tap(){ this.tone(800, .03, 'triangle', .08); },
    good(){ this.tone(660, .08); this.tone(880, .1, 'sine', .14, .06); },
    bad(){ this.tone(180, .15, 'sawtooth', .12); },
    pop(){ this.tone(520 + Math.random() * 120, .06, 'triangle', .1); },
    win(){ [523,659,784,1047].forEach((f,i) => this.tone(f, i === 3 ? .3 : .12, 'sine', .16, i * .1)); },
    lose(){ [392,349,294,247].forEach((f,i) => this.tone(f, i === 3 ? .4 : .15, 'sawtooth', .13, i * .15)); },
    newRec(){ [659,784,1047,1319].forEach((f,i) => this.tone(f, .14, 'triangle', .15, .6 + i * .07)); },
    chime(){ [1319, 1568, 2093].forEach((f,i) => this.tone(f, .16, 'sine', .07, i * .05)); },
    thud(){ this.tone(120, .18, 'sine', .22); this.tone(70, .25, 'triangle', .14, .02); },
    glide(f1, f2, d = .5, t = 'sine', v = .12, delay = 0){
      if (!this.enabled) return; this.init(); if (!this.ctx) return;
      const now = this.ctx.currentTime + delay, o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = t; o.frequency.setValueAtTime(f1, now); o.frequency.exponentialRampToValueAtTime(f2, now + d);
      g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(v, now + .02); g.gain.exponentialRampToValueAtTime(.0001, now + d);
      o.connect(g).connect(this.ctx.destination); o.start(now); o.stop(now + d + .03);
    },
    combo(n = 0){ this.tone(440 * Math.pow(2, Math.min(n, 14) / 12), .09, 'triangle', .12); },
    whoosh(d = .32, v = .14){
      if (!this.enabled) return; this.init(); if (!this.ctx) return;
      const c = this.ctx, now = c.currentTime, n = c.sampleRate * d, buf = c.createBuffer(1, n, c.sampleRate), ch = buf.getChannelData(0);
      for (let i = 0; i < n; i++) ch[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
      f.type = 'bandpass'; f.Q.value = 1.4; f.frequency.setValueAtTime(350, now); f.frequency.exponentialRampToValueAtTime(2600, now + d);
      g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(v, now + d * .35); g.gain.exponentialRampToValueAtTime(.0001, now + d);
      src.buffer = buf; src.connect(f).connect(g).connect(c.destination); src.start(now);
    },
  };
  function soundButton(btn){
    const paint = () => btn.textContent = sfx.enabled ? '🔊' : '🔇';
    paint();
    btn.addEventListener('click', () => {
      sfx.init(); sfx.enabled = !sfx.enabled;
      try { localStorage.setItem('sk-sound', sfx.enabled ? '1' : '0'); } catch(e) {}
      paint(); if (sfx.enabled) sfx.tap();
    });
  }

  /* ---------- EFECTOS (confeti, chispas, textos flotantes, temblor, vibración) ---------- */
  const fx = (() => {
    // las páginas que no cargan comun.css (juegos viejos) reciben aquí lo mínimo para los efectos
    function ensureCss(){
      if (document.getElementById('sk-fx-css') || getComputedStyle(document.documentElement).getPropertyValue('--line').trim()) return;
      const st = document.createElement('style'); st.id = 'sk-fx-css';
      st.textContent = `.sk-float{position:fixed;z-index:160;pointer-events:none;font-weight:700;font-family:'Bagel Fat One','Fredoka',system-ui,sans-serif;transform:translate(-50%,-50%);text-shadow:0 2px 0 rgba(0,0,0,.35);white-space:nowrap;animation:skFloat ease-out forwards}
@keyframes skFloat{0%{opacity:0;transform:translate(-50%,-50%) scale(.6)}15%{opacity:1;transform:translate(-50%,-60%) scale(1.15)}30%{transform:translate(-50%,-65%) scale(1)}100%{opacity:0;transform:translate(-50%,calc(-50% + var(--dy,-60px))) scale(.95)}}
.sk-shake{animation:skShake .42s cubic-bezier(.36,.07,.19,.97)}
@keyframes skShake{10%,90%{transform:translate(calc(var(--shk,7px) * -.3),0)}20%,80%{transform:translate(calc(var(--shk,7px) * .5),1px)}30%,50%,70%{transform:translate(calc(var(--shk,7px) * -1),-1px)}40%,60%{transform:translate(var(--shk,7px),1px)}}
.sk-pop{animation:skPop .35s cubic-bezier(.34,1.56,.64,1)}@keyframes skPop{0%{transform:scale(.7)}100%{transform:scale(1)}}
.sk-flash{position:fixed;inset:0;z-index:140;pointer-events:none;animation:skFlash ease-out forwards}@keyframes skFlash{from{opacity:.55}to{opacity:0}}`;
      document.head.appendChild(st);
    }
    const reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
    let cv = null, cx = null, parts = [], raf = 0, last = 0, dpr = 1;
    const R = Math.random;
    function resize(){ if (!cv) return; dpr = Math.min(2, devicePixelRatio || 1); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; }
    function ensure(){
      if (cv) return;
      cv = document.createElement('canvas'); cv.id = 'sk-fx';
      cv.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:150';
      document.body.appendChild(cv); cx = cv.getContext('2d'); resize();
      addEventListener('resize', resize);
    }
    function star(c, r){ c.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } c.closePath(); c.fill(); }
    function loop(t){
      const dt = Math.min(.05, Math.max(.001, (t - last) / 1000)); last = t;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, innerWidth, innerHeight);
      parts = parts.filter(p => (p.life -= dt) > 0 && p.y < innerHeight + 80);
      for (const p of parts) {
        const k = Math.pow(p.drag, dt * 60);
        p.vx *= k; p.vy = p.vy * k + p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt;
        cx.globalAlpha = Math.max(0, Math.min(1, p.life / p.fade)); cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot);
        cx.fillStyle = p.color; cx.strokeStyle = p.color;
        if (p.shape === 'conf') { p.flip += p.vf * dt; cx.scale(1, Math.cos(p.flip)); cx.fillRect(-p.size / 2, -p.size * .3, p.size, p.size * .6); }
        else if (p.shape === 'star') star(cx, p.size);
        else if (p.shape === 'square') cx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        else if (p.shape === 'text') { cx.font = `${p.size}px sans-serif`; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText(p.text, 0, 0); }
        else if (p.shape === 'ring') { const q = 1 - p.life / p.max, e = 1 - Math.pow(1 - q, 3); cx.lineWidth = p.lw * (1 - q) + .5; cx.beginPath(); cx.arc(0, 0, p.r0 + (p.size - p.r0) * e, 0, Math.PI * 2); cx.stroke(); }
        else { cx.beginPath(); cx.arc(0, 0, p.size / 2, 0, Math.PI * 2); cx.fill(); }
        cx.restore();
      }
      cx.globalAlpha = 1;
      if (parts.length) raf = requestAnimationFrame(loop); else { raf = 0; cx.clearRect(0, 0, innerWidth, innerHeight); }
    }
    function add(p){
      ensure();
      parts.push(Object.assign({ x:0, y:0, vx:0, vy:0, g:0, drag:1, rot:0, vr:0, life:1, fade:.3, size:6, color:'#fff', shape:'circle', flip:0, vf:0 }, p));
      if (parts.length > 900) parts.splice(0, parts.length - 900);
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
    }
    const pt = at => {
      if (at && at.getBoundingClientRect) { const r = at.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }
      return at && at.x !== undefined ? at : { x: innerWidth / 2, y: innerHeight / 2 };
    };
    const palette = () => [cssVar('--accent', '#ffd43b'), '#ff6b6b', '#4dabf7', '#69db7c', '#f783ac', '#ffffff', '#b197fc', '#ffa94d'];
    function confetti({ n = 140, from = 'top', colors } = {}){
      if (reduce) n = Math.round(n / 4);
      const cols = colors || palette(), top = from === 'top';
      for (let i = 0; i < n; i++) add({
        shape:'conf', color: cols[i % cols.length], size: 7 + R() * 6, life: 2.6 + R() * 1.8, fade:.7,
        x: top ? R() * innerWidth : innerWidth / 2 + (R() - .5) * 120, y: top ? -20 - R() * innerHeight * .35 : innerHeight * .62,
        vx: top ? (R() - .5) * 140 : (R() - .5) * 1100, vy: top ? 60 + R() * 170 : -650 - R() * 750,
        g: top ? 230 : 950, drag: top ? .997 : .982, rot: R() * 6, vr: (R() - .5) * 10, flip: R() * 6, vf: 5 + R() * 9,
      });
    }
    function burst(at, { n = 18, colors, speed = 260, size = 6, shape = 'circle', g = 420, life = .75, emoji } = {}){
      const { x, y } = pt(at); if (reduce) n = Math.ceil(n / 3);
      const cols = colors || palette();
      for (let i = 0; i < n; i++) {
        const a = R() * Math.PI * 2, s = speed * (.35 + R() * .85);
        add({ shape: emoji ? 'text' : shape, text: Array.isArray(emoji) ? emoji[i % emoji.length] : emoji, x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - speed * .35, g, drag:.955,
          rot: R() * 6, vr: (R() - .5) * 10, size: size * (.6 + R() * .8), color: cols[i % cols.length], life: life * (.7 + R() * .6), fade:.3 });
      }
    }
    function ring(at, { color, size = 70, life = .5, width = 5 } = {}){ const { x, y } = pt(at); add({ shape:'ring', x, y, size, r0: 4, color: color || cssVar('--accent', '#ffd43b'), life, fade: life, max: life, lw: width }); }
    function sparkle(at, o = {}){ burst(at, Object.assign({ shape:'star', n: 12, speed: 190, size: 8, g: 80, life: .9 }, o)); }
    function emojiRain(emoji, n = 30){
      if (reduce) n = Math.ceil(n / 4);
      for (let i = 0; i < n; i++) add({ shape:'text', text: Array.isArray(emoji) ? emoji[i % emoji.length] : emoji, x: R() * innerWidth, y: -30 - R() * innerHeight * .6,
        vx: (R() - .5) * 50, vy: 110 + R() * 170, g: 90, rot: (R() - .5), vr: (R() - .5) * 2.5, size: 22 + R() * 18, life: 4 + R() * 1.5, fade:.6 });
    }
    function float(at, text, { color = '#fff', size = 22, dy = 64, dur = 950 } = {}){
      ensureCss();
      const { x, y } = pt(at), d = document.createElement('div');
      d.textContent = text; d.className = 'sk-float';
      d.style.cssText = `left:${x}px;top:${y}px;color:${color};font-size:${size}px;--dy:${-dy}px;animation-duration:${dur}ms`;
      document.body.appendChild(d); setTimeout(() => d.remove(), dur + 60);
    }
    function shake(el, power = 1){
      el = el || document.querySelector('.screen.active'); if (reduce || !el) return; ensureCss();
      el.style.setProperty('--shk', (power * 7) + 'px');
      el.classList.remove('sk-shake'); void el.offsetWidth; el.classList.add('sk-shake');
      clearTimeout(el._shk); el._shk = setTimeout(() => el.classList.remove('sk-shake'), 450);
    }
    function pop(el){ if (!el) return; ensureCss(); el.classList.remove('sk-pop'); void el.offsetWidth; el.classList.add('sk-pop'); }
    function flash(color = '#fff', ms = 240){ if (reduce) return; ensureCss(); const d = document.createElement('div'); d.className = 'sk-flash'; d.style.background = color; d.style.animationDuration = ms + 'ms'; document.body.appendChild(d); setTimeout(() => d.remove(), ms + 40); }
    function vibrate(p = 15){ try { if (sfx.enabled && navigator.vibrate) navigator.vibrate(p); } catch(e) {} }
    function countUp(el, to, ms = 750){
      if (reduce || !el || !(to > 1)) return;
      const t0 = performance.now(), fmt = v => Math.round(v).toLocaleString('es-MX');
      const step = t => { const q = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - q, 3); el.textContent = fmt(to * e); if (q < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }
    function celebrate(big){
      confetti({ n: big ? 220 : 140 });
      if (big) setTimeout(() => confetti({ n: 120, from:'bottom' }), 250);
      vibrate([25, 50, 25]);
    }
    return { confetti, burst, ring, sparkle, emojiRain, float, shake, pop, flash, vibrate, countUp, celebrate, reduce };
  })();

  /* ---------- ANUNCIOS (iframe con sandbox para bloquear popups) ---------- */
  const ADS = {
    banner50:  { key:'787e84f3bdee3100779130afe4802abc', width:320, height:50 },
    medium250: { key:'c2f164720365b5dc18fae25f1c594072', width:300, height:250 },
  };
  function loadAd(el, cfg){
    if (!el || el.dataset.loaded === '1') return;
    el.dataset.loaded = '1';
    const html = `<!DOCTYPE html><html><head><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}</style></head><body>
<script type="text/javascript">var atOptions=${JSON.stringify({ key:cfg.key, format:'iframe', height:cfg.height, width:cfg.width, params:{} })};<\/script>
<script type="text/javascript" src="https://www.highperformanceformat.com/${cfg.key}/invoke.js"><\/script></body></html>`;
    const ifr = document.createElement('iframe');
    ifr.srcdoc = html; ifr.width = cfg.width; ifr.height = cfg.height;
    ifr.scrolling = 'no'; ifr.setAttribute('frameborder', '0');
    ifr.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    ifr.style.cssText = 'border:0;display:block;background:transparent;max-width:100%';
    el.appendChild(ifr);
  }

  /* ---------- RÉCORDS ---------- */
  const store = {
    get(k, def = null){ try { const v = localStorage.getItem(k); return v === null ? def : JSON.parse(v); } catch(e) { return def; } },
    set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {} },
  };
  const fmtTime = s => { s = Math.max(0, s); const m = Math.floor(s / 60), x = Math.floor(s % 60); return `${m}:${String(x).padStart(2, '0')}`; };

  /* ---------- PANTALLAS ---------- */
  function showScreen(name){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(name).classList.add('active');
    document.body.dataset.screen = name;
    window.scrollTo(0, 0);
  }

  /* ---------- LOGRO PARA COMPARTIR ---------- */
  function cssVar(n, d){ const v = getComputedStyle(document.documentElement).getPropertyValue(n).trim(); return v || d; }
  function roundRect(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  // la ilustración del juego (la de arriba del menú) también sale en la imagen para compartir
  let artImg = null;
  function loadArt(){
    const h = document.querySelector('.sk-hero'); if (!h || artImg) return;
    artImg = new Image(); artImg.src = h.currentSrc || h.src;
    // fondo difuminado con la ilustración del juego
    document.body.style.setProperty('--sk-art', `url("${h.getAttribute('src')}")`); document.body.classList.add('sk-has-art');
  }
  addEventListener('DOMContentLoaded', loadArt); setTimeout(loadArt, 0);
  function achievementCanvas(o){
    const c = document.createElement('canvas'); c.width = 1080; c.height = 1080;
    const x = c.getContext('2d');
    const bg1 = cssVar('--panel', '#3d4e60'), bg2 = cssVar('--bg-2', '#1c2a3a'), acc = cssVar('--accent', '#f4cf3a'), ink = cssVar('--accent-ink', '#3a2400');
    const g = x.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, bg1); g.addColorStop(1, bg2);
    x.fillStyle = g; x.fillRect(0, 0, 1080, 1080);
    const art = artImg && artImg.complete && artImg.naturalWidth ? artImg : null;
    if (art) return artCanvas(c, x, o, art, { bg2, acc, ink });
    x.strokeStyle = acc; x.lineWidth = 18; x.strokeRect(40, 40, 1000, 1000);
    x.textAlign = 'center';
    x.font = '170px sans-serif'; x.fillText(o.emoji || '🏆', 540, 230);
    x.fillStyle = acc; x.font = 'bold 54px sans-serif'; x.fillText(o.title || '¡LOGRO!', 540, 320);
    x.fillStyle = '#fff'; x.font = 'bold 92px sans-serif'; x.fillText(o.game, 540, 425);
    x.fillStyle = 'rgba(255,255,255,.7)'; x.font = 'bold 38px sans-serif'; x.fillText(o.sub || '', 540, 490);
    if (o.big) {
      x.fillStyle = '#fff'; let fs = 76; x.font = `bold ${fs}px sans-serif`;
      while (x.measureText(o.big).width > 920 && fs > 28) { fs -= 4; x.font = `bold ${fs}px sans-serif`; }
      x.fillText(o.big, 540, 585);
    }
    x.fillStyle = acc; roundRect(x, 90, 640, 900, 240, 30); x.fill();
    const st = (o.stats || []).slice(0, 3), n = st.length || 1;
    st.forEach(([val, lbl], i) => {
      const cx = 90 + 900 * (i + .5) / n;
      x.fillStyle = ink; x.font = 'bold 84px sans-serif'; x.fillText(String(val), cx, 765);
      x.globalAlpha = .7; x.font = 'bold 26px sans-serif'; x.fillText(lbl, cx, 822); x.globalAlpha = 1;
    });
    x.fillStyle = acc; x.font = 'bold 48px sans-serif'; x.fillText('SeaKingsGames', 540, 990);
    return c;
  }
  function artCanvas(c, x, o, art, { bg2, acc, ink }){
    const H = 470, k = Math.max(1080 / art.naturalWidth, H / art.naturalHeight), w = art.naturalWidth * k, h = art.naturalHeight * k;
    x.drawImage(art, (1080 - w) / 2, (H - h) / 2, w, h);
    const f = x.createLinearGradient(0, 300, 0, H + 2); f.addColorStop(0, 'rgba(0,0,0,0)'); f.addColorStop(1, bg2);
    x.fillStyle = f; x.fillRect(0, 300, 1080, H - 298);
    x.strokeStyle = acc; x.lineWidth = 18; x.strokeRect(40, 40, 1000, 1000);
    // medallón con el emoji
    x.fillStyle = bg2; x.beginPath(); x.arc(540, 440, 78, 0, Math.PI * 2); x.fill();
    x.strokeStyle = acc; x.lineWidth = 8; x.stroke();
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = '92px sans-serif'; x.fillText(o.emoji || '🏆', 540, 446);
    x.textBaseline = 'alphabetic';
    x.fillStyle = acc; x.font = 'bold 50px sans-serif'; x.fillText(o.title || '¡LOGRO!', 540, 578);
    x.fillStyle = '#fff'; let fs = 84; x.font = `bold ${fs}px sans-serif`;
    while (x.measureText(o.game).width > 900 && fs > 40) { fs -= 4; x.font = `bold ${fs}px sans-serif`; }
    x.fillText(o.game, 540, 664);
    x.fillStyle = 'rgba(255,255,255,.7)'; x.font = 'bold 34px sans-serif'; x.fillText(o.sub || '', 540, 714);
    if (o.big) {
      x.fillStyle = '#fff'; let bs = 62; x.font = `bold ${bs}px sans-serif`;
      while (x.measureText(o.big).width > 900 && bs > 28) { bs -= 4; x.font = `bold ${bs}px sans-serif`; }
      x.fillText(o.big, 540, 790);
    }
    x.fillStyle = acc; roundRect(x, 90, 818, 900, 168, 28); x.fill();
    const st = (o.stats || []).slice(0, 3), n = st.length || 1;
    st.forEach(([val, lbl], i) => {
      const cx = 90 + 900 * (i + .5) / n;
      x.fillStyle = ink; x.font = 'bold 70px sans-serif'; x.fillText(String(val), cx, 905);
      x.globalAlpha = .7; x.font = 'bold 24px sans-serif'; x.fillText(lbl, cx, 952); x.globalAlpha = 1;
    });
    x.fillStyle = acc; x.font = 'bold 40px sans-serif'; x.fillText('SeaKingsGames', 540, 1022);
    return c;
  }
  function downloadCanvas(c, name){
    c.toBlob(blob => { const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `${name}-${Date.now()}.png`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); }, 'image/png');
  }
  function share(o){
    const c = achievementCanvas(o);
    c.toBlob(async blob => {
      const file = new File([blob], 'logro.png', { type: 'image/png' });
      try {
        if (navigator.canShare && navigator.canShare({ files: [file] })) await navigator.share({ files: [file], text: o.text });
        else if (navigator.share) await navigator.share({ text: o.text });
        else { downloadCanvas(c, o.file || 'logro'); if (navigator.clipboard) await navigator.clipboard.writeText(o.text); alert('Imagen descargada y texto copiado'); }
      } catch(e) {}
    }, 'image/png');
  }

  /* ---------- MODAL DE RESULTADO (se arma solo) ---------- */
  let modalEl = null;
  function ensureModal(){
    if (modalEl) return modalEl;
    modalEl = document.createElement('div');
    modalEl.className = 'modal-overlay'; modalEl.id = 'sk-modal';
    modalEl.innerHTML = `<div class="modal"><div class="emoji"></div><div class="nr" style="display:none"><span class="new-record">¡NUEVO RÉCORD!</span></div>
      <h2></h2><p class="txt"></p><div class="extra"></div><div class="achievement-card" style="display:none"><div class="ach-title">TU LOGRO</div><div class="ach-stats"></div></div>
      <div class="ad-label">PUBLICIDAD</div><div class="ad-slot"></div><div class="modal-btns"></div></div>`;
    document.body.appendChild(modalEl);
    return modalEl;
  }
  function result(o){
    const m = ensureModal();
    m.querySelector('.emoji').textContent = o.emoji || '🎉';
    m.querySelector('.emoji').classList.toggle('bounce', !o.lose);
    m.querySelector('.nr').style.display = o.newRecord ? 'block' : 'none';
    const h = m.querySelector('h2'); h.textContent = o.title || ''; h.classList.toggle('lose', !!o.lose);
    const t = m.querySelector('.txt'); t.textContent = o.text || ''; t.style.display = o.text ? '' : 'none';
    const ex = m.querySelector('.extra'); ex.innerHTML = ''; if (o.extra) ex.appendChild(o.extra);
    // la ilustración del juego arriba de los resultados (no en los avisos de confirmar)
    const showArt = artImg && artImg.naturalWidth && (o.share || o.celebrate || o.stats);
    let mart = m.querySelector('.modal-art');
    if (showArt) { if (!mart) { mart = document.createElement('img'); mart.className = 'modal-art'; mart.alt = ''; m.querySelector('.modal').prepend(mart); } mart.src = artImg.src; mart.style.display = ''; }
    else if (mart) mart.style.display = 'none';
    m.querySelector('.modal').classList.toggle('with-art', !!showArt);
    const card = m.querySelector('.achievement-card'), sts = m.querySelector('.ach-stats'); sts.innerHTML = '';
    if (o.stats && o.stats.length) {
      card.style.display = '';
      o.stats.forEach(([v, l]) => { const d = document.createElement('div'); d.className = 'ach-stat'; d.innerHTML = '<div class="ach-num"></div><div class="ach-lbl"></div>'; d.firstChild.textContent = v; d.lastChild.textContent = l; sts.appendChild(d); });
    } else card.style.display = 'none';
    const btns = m.querySelector('.modal-btns'); btns.innerHTML = '';
    const mk = (b) => { const e = document.createElement('button'); e.className = b.kind === 'ghost' ? 'btn-ghost' : b.kind === 'secondary' ? 'btn-secondary' : 'btn-primary'; e.textContent = b.label; e.onclick = () => { sfx.tap(); if (b.keep !== true) close(); b.onClick && b.onClick(); }; return e; };
    const list = o.buttons || [];
    if (list[0]) btns.appendChild(mk(list[0]));
    if (o.share) {
      const row = document.createElement('div'); row.className = 'btn-row';
      row.appendChild(mk({ label: '📤 Compartir', kind: 'secondary', keep: true, onClick: () => share(o.share) }));
      row.appendChild(mk({ label: '💾 Guardar', kind: 'secondary', keep: true, onClick: () => downloadCanvas(achievementCanvas(o.share), o.share.file || 'logro') }));
      btns.appendChild(row);
    }
    list.slice(1).forEach(b => btns.appendChild(mk(b)));
    m.classList.add('active');
    loadAd(m.querySelector('.ad-slot'), ADS.medium250);
    if (o.celebrate) fx.celebrate(o.celebrate === 'big' || o.newRecord);
    else if (o.lose) fx.vibrate(70);
    if (o.newRecord) setTimeout(() => fx.sparkle(m.querySelector('.nr'), { n: 18 }), 300);
    m.querySelectorAll('.ach-num').forEach(el => { const v = el.textContent.replace(/[,\s]/g, ''); if (/^\d+$/.test(v)) fx.countUp(el, +v); });
  }
  function close(){ if (modalEl) modalEl.classList.remove('active'); }

  /* ---------- PWA ---------- */
  function initPWA(appName){
    const box = document.createElement('div');
    box.className = 'install-prompt';
    box.innerHTML = `<div class="ico">📲</div><div class="txt"><b></b><br>Juega sin internet</div><button class="go">Instalar</button><button class="close">✕</button>`;
    box.querySelector('b').textContent = 'Instala ' + appName;
    document.body.appendChild(box);
    let deferred = null;
    addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; if (!store.get('sk-install-dismissed')) box.classList.add('show'); });
    box.querySelector('.go').onclick = async () => { if (!deferred) return; box.classList.remove('show'); deferred.prompt(); await deferred.userChoice; deferred = null; };
    box.querySelector('.close').onclick = () => { box.classList.remove('show'); try { localStorage.setItem('sk-install-dismissed', '1'); } catch(e) {} };
    addEventListener('appinstalled', () => box.classList.remove('show'));
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  function bannerAd(el){ addEventListener('load', () => loadAd(el, ADS.banner50)); }

  /* ---------- AVISO CORTO ---------- */
  let toastT = null;
  function toast(msg){
    let t = document.getElementById('sk-toast');
    if (!t) {
      t = document.createElement('div'); t.id = 'sk-toast';
      t.style.cssText = 'position:fixed;left:50%;top:calc(env(safe-area-inset-top) + 16px);transform:translateX(-50%);z-index:200;background:rgba(10,20,41,.95);color:#fff;padding:10px 16px;border-radius:14px;font-weight:600;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,.4);max-width:90vw;text-align:center;transition:opacity .3s;pointer-events:none';
      document.body.appendChild(t);
    }
    t.textContent = msg; t.style.opacity = '1'; t.classList.remove('sk-pop'); void t.offsetWidth; t.classList.add('sk-pop');
    clearTimeout(toastT); toastT = setTimeout(() => t.style.opacity = '0', 2600);
  }
  /* ---------- COMPARTIR TEXTO (resultado tipo Wordle) ---------- */
  async function shareText(text){
    try {
      if (navigator.share) { await navigator.share({ text }); return; }
    } catch(e) { if (e && e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(text); toast('📋 Resultado copiado, pégalo donde quieras'); }
    catch(e) { prompt('Copia tu resultado:', text); }
  }

  /* ---------- AMBIENTE: burbujitas en los menús ---------- */
  function ambient(){
    if (fx.reduce || document.getElementById('sk-amb') || !getComputedStyle(document.documentElement).getPropertyValue('--line').trim()) return;
    const box = document.createElement('div'); box.id = 'sk-amb'; box.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 14; i++) {
      const b = document.createElement('i'), sz = 6 + Math.random() * 22;
      b.style.cssText = `left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${9 + Math.random() * 10}s;animation-delay:${-Math.random() * 18}s;--sway:${(Math.random() - .5) * 60}px`;
      box.appendChild(b);
    }
    document.body.prepend(box);
    if (!document.body.dataset.screen) { const a = document.querySelector('.screen.active'); if (a) document.body.dataset.screen = a.id; }
  }
  addEventListener('DOMContentLoaded', ambient);
  if (document.readyState !== 'loading') setTimeout(ambient, 0);

  return { $, sfx, fx, soundButton, ADS, loadAd, bannerAd, store, fmtTime, showScreen, result, closeModal: close, share, shareText, toast, achievementCanvas, initPWA };
})();

window.SK = SK;
