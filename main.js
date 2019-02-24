let cssContent = `
.minions {
  width: 14rem;
  height: 22rem;
  border: 0.3rem solid #333;
  border-radius: 7rem 7rem 3rem 3rem;
  background-color: rgb(246, 198, 56);
  position: relative;
}

.belt {
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116%;
  margin-left: -8%;
  height: 2rem;
  background-color: #333;
  border-radius: 2rem;
}

.eye {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: #333;
  box-shadow: 0 0 0 0.6rem rgb(146, 111, 80), 0 0 0 2.4rem #fff,
    0 0 0 3rem rgb(204, 204, 204), 0 0 0 3.4rem #333;
}

.mouth {
  background: #333;
  width: 4.6rem;
  height: 2.4rem;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 2rem 2rem 8rem 8rem;
  display: flex;
  overflow: hidden;
}

.mouth .tooth {
  background-color: white;
  height: 0.5rem;
  width: 25%;
  border-radius: 0 0 0.3rem 0.3rem;
}

.hand {
  width: 2.4rem;
  background-color: inherit;
  height: 8rem;
  border: inherit;
  position: absolute;
  top: 12rem;
  border-bottom: none;
}

.hand::after {
  background-color: #333;
  content: '';
  display: block;
  width: 2.4rem;
  height: 1.8rem;
  position: absolute;
  top: 100%;
  border-radius: 0 0 1rem 1rem;
}

.hand.left {
  right: 100%;
  border-top-left-radius: 1.6rem;
}

.hand.left::after {
  left: -0.3rem;
}

.hand.right {
  left: 100%;
  border-top-right-radius: 1.6rem;
}

.hand.right::after {
  right: -0.3rem;
}

.leg {
  width: 3rem;
  background-color: inherit;
  height: 1.6rem;
  border: inherit;
  position: absolute;
  top: 100%;
  border-bottom: none;
}

.leg::after {
  content: '';
  position: absolute;
  width: 4rem;
  height: 2rem;
  background-color: #333;
  top: 100%;
}

.leg.left {
  left: 3.8rem;
}

.leg.left::after {
  right: -0.2rem;
  border-top-left-radius: 1.2rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
}

.leg.right {
  right: 3.8rem;
}

.leg.right::after {
  left: -0.2rem;
  border-top-right-radius: 1.2rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
}
`;

let speed = 30;

function writeCode(content) {
  let codeDom = document.querySelector('.code');
  let styleDom = document.querySelector('style');
  let counter = 0;
  let timer = setTimeout(function write() {
    ++counter;
    codeDom.innerHTML = Prism.highlight(
      content.substring(0, counter),
      Prism.languages.css,
      'css'
    );
    styleDom.innerHTML = content.substring(0, counter);
    if (counter >= content.length) {
      clearInterval(timer);
    }
    codeDom.scrollTop = codeDom.scrollHeight;
    setTimeout(write, speed);
  }, speed);
}

function bindBtns() {
  let btns = document.querySelectorAll('.btns > button');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e=>{
      let className = e.currentTarget.className;
      switch(className) {
        case 'slow':
          speed = 50;
          break;
        case 'medium':
          speed = 30;
          break;
        case 'fast':
          speed = 5;
          break;
      }
    })
  }
}

bindBtns();
writeCode(cssContent);
