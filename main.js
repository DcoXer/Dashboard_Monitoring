// Animate KPI bars on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.kpi-bar').forEach(b => {
      const w = b.style.width;
      b.style.width = '0';
      setTimeout(() => { b.style.width = w; }, 300);
    });

    // Animate lead time bars
    document.querySelectorAll('.lt-bar-fill').forEach(b => {
      const w = b.style.width;
      b.style.width = '0';
      setTimeout(() => { b.style.width = w; }, 500);
    });

    // Animate PVR bars
    document.querySelectorAll('.pvr-bar').forEach(b => {
      const h = b.style.height;
      b.style.height = '0';
      setTimeout(() => { b.style.height = h; }, 600);
    });
  });

  // Live timestamp
  function updateTime() {
    const now = new Date();
    const options = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
    const time = now.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    document.querySelector('.timestamp').textContent = `${now.toLocaleDateString('id-ID', options)} — ${time} WIB`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Period button toggle
  document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Nav toggle
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
