/* eslint-disable no-unused-vars */
import React from 'react';
import C from '../utils';
import Arrow from '../utils/arrow';
import Ball from '../utils/ball';
class Index extends React.Component {
  mouseMove(W, H, ctx, canvas) {
    let arrow = new Arrow({
      x: W / 2,
      y: H / 2,
      w: 140,
      h: 60,
    }).render(ctx);

    let spead = 4;
    let mouse = C.getOffset(canvas);
    (function move() {
      window.requestAnimationFrame(move);

      let x = mouse.x - arrow.x;
      let y = mouse.y - arrow.y;

      // 防止抖动
      if (Math.abs(x) < 2) return;

      let angle = Math.atan2(y, x);
      let vx = spead * Math.cos(angle);
      let vy = spead * Math.sin(angle);

      ctx.clearRect(0, 0, W, H);

      arrow.x += vx;
      arrow.y += vy;
      arrow.rotation = angle;
      arrow.render(ctx);
    })();
  }
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let W = (canvas.width = 800);
    let H = (canvas.height = 600);

    let mouse = C.getOffset(canvas);

    let ball = new Ball({
      x: W / 2,
      y: H / 2,
      r: 60,
    }).render(ctx);

    let dx = 0,
      dy = 0;

    let isMouseMove = false;
    let vx = C.rp([-10, 10]),
      vy = -10;

    let g = 0.2;
    let bounce = -0.7;
    let startX = 0,
      startY = 0;

    let bounceMove = function() {
      vy += g;
      ball.x += vx;
      ball.y += vy;

      if (ball.x + ball.r >= W) {
        ball.x = W - ball.r;
        vx *= bounce;
      } else if (ball.x - ball.r <= 0) {
        ball.x = ball.r;
        vx *= bounce;
      }

      if (ball.y + ball.r >= H) {
        ball.y = H - ball.r;
        vy *= bounce;
      } else if (ball.y - ball.r <= 0) {
        ball.y = ball.r;
        vy *= bounce;
      }
    };

    let mousemoveFn = function() {
      ball.x = mouse.x - dx;
      ball.y = mouse.y - dy;
    };
    let mouseupFn = function() {
      isMouseMove = false;
      canvas.removeEventListener('mousemove', mousemoveFn);
      canvas.removeEventListener('mouseup', mouseupFn);
    };

    canvas.addEventListener('mousedown', function(e) {
      e.preventDefault();
      if (ball.isPoint(mouse)) {
        isMouseMove = true;
        dx = mouse.x - ball.x;
        dy = mouse.y - ball.y;
        startX = ball.x;
        startY = ball.y;
        canvas.addEventListener('mousemove', mousemoveFn);
        canvas.addEventListener('mouseup', mouseupFn);
      }
    });

    function setSpeed() {
      vx = ball.x - startX;
      vy = ball.y - startY;
      startX = ball.x;
      startY = ball.y;
    }

    (function move() {
      window.requestAnimationFrame(move);

      ctx.clearRect(0, 0, W, H);
      if (!isMouseMove) {
        bounceMove();
      } else {
        setSpeed();
      }
      ball.render(ctx);
    })();
  }
  render() {
    return (
      <div>
        <canvas id="canvas">您的浏览器不支持 HTML5 canvas 标签。</canvas>
      </div>
    );
  }
}

export default Index;
