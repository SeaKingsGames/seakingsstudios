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
    window.scrollTo(0, 0);
  }

  /* ---------- LOGRO PARA COMPARTIR ---------- */
  function cssVar(n, d){ const v = getComputedStyle(document.documentElement).getPropertyValue(n).trim(); return v || d; }
  function roundRect(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function achievementCanvas(o){
    const c = document.createElement('canvas'); c.width = 1080; c.height = 1080;
    const x = c.getContext('2d');
    const bg1 = cssVar('--panel', '#3d4e60'), bg2 = cssVar('--bg-2', '#1c2a3a'), acc = cssVar('--accent', '#f4cf3a'), ink = cssVar('--accent-ink', '#3a2400');
    const g = x.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, bg1); g.addColorStop(1, bg2);
    x.fillStyle = g; x.fillRect(0, 0, 1080, 1080);
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
    t.textContent = msg; t.style.opacity = '1';
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

  return { $, sfx, soundButton, ADS, loadAd, bannerAd, store, fmtTime, showScreen, result, closeModal: close, share, shareText, toast, achievementCanvas, initPWA };
})();
