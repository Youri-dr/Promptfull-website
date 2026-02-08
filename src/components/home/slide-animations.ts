// Animation functions for each visual type
declare const anime: any;

export function animateVisual(visualType: string, element: HTMLElement) {
  switch (visualType) {
    case 'lightbulb':
      animateLightbulb(element);
      break;
    case 'weight':
      animateWeight(element);
      break;
    case 'flow':
      animateFlow(element);
      break;
    case 'morph':
      animateMorph(element);
      break;
    case 'coffee':
      animateCoffee(element);
      break;
    case 'heart':
      animateHeart(element);
      break;
    case 'spark':
      animateSpark(element);
      break;
    case 'gear':
      animateGear(element);
      break;
    case 'split':
      animateSplit(element);
      break;
    case 'confetti':
      animateConfetti(element);
      break;
  }
}

// 💡 Lightbulb - Flickers on
function animateLightbulb(el: HTMLElement) {
  const glass = el.querySelector('.bulb-glass');
  const rays = el.querySelector('.light-rays');

  // Flicker effect
  anime({
    targets: glass,
    opacity: [0, 1, 0, 1, 0.8, 1],
    duration: 1200,
    easing: 'easeInOutQuad',
  });

  anime({
    targets: rays,
    opacity: [0, 0, 0, 1],
    duration: 1200,
    easing: 'easeOutQuad',
    delay: 800,
  });

  // Rays scale pulse
  anime({
    targets: rays,
    scale: [0.8, 1.1, 1],
    duration: 1000,
    easing: 'easeOutElastic(1, .6)',
    delay: 1000,
  });
}

// ⚖️ Weight - Heavy to Light
function animateWeight(el: HTMLElement) {
  const heavy = el.querySelector('.weight-heavy');
  const light = el.querySelector('.weight-light');

  // Heavy drops and fades
  anime({
    targets: heavy,
    translateY: [0, 20],
    opacity: [1, 0],
    duration: 800,
    easing: 'easeInCubic',
    delay: 500,
  });

  // Light floats in
  anime({
    targets: light,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: 1000,
  });

  // Gentle floating
  anime({
    targets: light,
    translateY: [-3, 3],
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    delay: 1800,
  });
}

// 🌊 Flow - Flowing lines
function animateFlow(el: HTMLElement) {
  const lines = el.querySelectorAll('.flow-line');

  lines.forEach((line, index) => {
    anime({
      targets: line,
      strokeDashoffset: [200, 0],
      duration: 1500,
      easing: 'easeInOutQuad',
      delay: index * 200,
    });

    // Continuous wave
    anime({
      targets: line,
      translateX: [-5, 5],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
      delay: 1500 + index * 200,
    });
  });
}

// 🤖→👤 Morph - Robot to Human
function animateMorph(el: HTMLElement) {
  const robot = el.querySelector('.face-robot');
  const human = el.querySelector('.face-human');

  // Robot pulse then fade
  anime({
    targets: robot,
    scale: [1, 1.1, 1],
    duration: 600,
    easing: 'easeInOutQuad',
  });

  anime({
    targets: robot,
    opacity: [1, 0],
    scale: [1, 0.8],
    duration: 800,
    easing: 'easeInCubic',
    delay: 800,
  });

  // Human appears
  anime({
    targets: human,
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 800,
    easing: 'easeOutElastic(1, .8)',
    delay: 1200,
  });
}

// ☕ Coffee - Steaming
function animateCoffee(el: HTMLElement) {
  const steam = el.querySelectorAll('.steam path');

  steam.forEach((s, index) => {
    anime({
      targets: s,
      opacity: [0, 0.6, 0],
      translateY: [0, -20],
      duration: 2000,
      easing: 'easeOutQuad',
      loop: true,
      delay: index * 400,
    });
  });
}

// ❤️ Heart - Pulse
function animateHeart(el: HTMLElement) {
  const heart = el.querySelector('.heart-shape');
  const pulse = el.querySelector('.pulse-line');

  // Heartbeat
  anime({
    targets: heart,
    scale: [1, 1.15, 1, 1.1, 1],
    duration: 1000,
    easing: 'easeInOutQuad',
    loop: true,
  });

  // Pulse line
  anime({
    targets: pulse,
    strokeDashoffset: [200, 0],
    duration: 1500,
    easing: 'easeInOutQuad',
    delay: 300,
  });
}

// ✨ Spark - Transform to fire
function animateSpark(el: HTMLElement) {
  const initial = el.querySelector('.spark-initial');
  const fire = el.querySelector('.spark-fire');

  // Spark rotates and glows
  anime({
    targets: initial,
    rotate: [0, 180],
    scale: [1, 1.3, 1],
    duration: 1000,
    easing: 'easeInOutQuad',
  });

  // Fade out spark
  anime({
    targets: initial,
    opacity: [1, 0],
    scale: [1, 0.5],
    duration: 500,
    easing: 'easeInCubic',
    delay: 1000,
  });

  // Fire ignites
  anime({
    targets: fire,
    opacity: [0, 1],
    scale: [0.5, 1],
    duration: 600,
    easing: 'easeOutElastic(1, .8)',
    delay: 1300,
  });

  // Fire flicker
  anime({
    targets: fire,
    scaleY: [1, 1.1, 0.95, 1.05, 1],
    duration: 800,
    easing: 'easeInOutQuad',
    loop: true,
    delay: 1900,
  });
}

// ⚙️ Gear - Rotating
function animateGear(el: HTMLElement) {
  const gear = el.querySelector('.gear-rotate');

  anime({
    targets: gear,
    rotate: 360,
    duration: 3000,
    easing: 'linear',
    loop: true,
  });
}

// 📊 Split - Chaos to Order
function animateSplit(el: HTMLElement) {
  const chaos = el.querySelector('.split-chaos');
  const order = el.querySelector('.split-order');

  // Chaos shakes
  anime({
    targets: chaos,
    translateX: [-2, 2, -1, 1, 0],
    translateY: [-2, 2, -1, 1, 0],
    duration: 600,
    easing: 'easeInOutQuad',
  });

  // Chaos fades
  anime({
    targets: chaos,
    opacity: [1, 0.3],
    duration: 800,
    easing: 'easeInCubic',
    delay: 600,
  });

  // Order slides in
  anime({
    targets: order,
    opacity: [0, 1],
    translateX: [30, 0],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: 1000,
  });
}

// 🎉 Confetti - Celebration
function animateConfetti(el: HTMLElement) {
  const pieces = el.querySelectorAll('.confetti');

  pieces.forEach((piece, index) => {
    const randomX = Math.random() * 60 - 30;
    const randomRotate = Math.random() * 720 - 360;
    const randomDelay = Math.random() * 400;

    anime({
      targets: piece,
      opacity: [0, 1, 1, 0],
      translateY: [0, 100 + Math.random() * 50],
      translateX: [0, randomX],
      rotate: [0, randomRotate],
      duration: 2000 + Math.random() * 1000,
      easing: 'easeOutCubic',
      delay: randomDelay,
    });
  });
}