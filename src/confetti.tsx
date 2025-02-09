import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  const colors = ['#7E5FF1', '#8FDFFF', '#FF5F5F', '#FFD700', '#00FF00'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.5 },
      colors: colors,
      shapes: ['circle'],
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.5 },
      colors: colors,
      shapes: ['circle'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};