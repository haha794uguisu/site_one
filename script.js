const btn = document.querySelector('.center-ripple-btn');

btn.addEventListener('mousemove', (e) => {
  // ボタン内でのマウス座標を計算
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // CSS変数に座標をセット
  btn.style.setProperty('--x', `${x}px`);
  btn.style.setProperty('--y', `${y}px`);
});