// js/main.js

// 🕐 실시간 시계
function updateClock() {
  const now = new Date();
  const formatted = now.toLocaleString("ko-KR");
  document.getElementById("clock").textContent = formatted;
}
setInterval(updateClock, 1000);
updateClock();

// 💡 다크모드 토글
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ⌨️ 타이핑 애니메이션
const 타이핑문장들 = [
  "저는 영상편집자이자 디자이너입니다.",
  "웹사이트를 직접 개발합니다.",
  "당신의 아이디어를 구현해드립니다!",
];
let 문장인덱스 = 0;
let 글자순번 = 0;
const 타이핑영역 = document.getElementById("typing-text");

function 타이핑() {
  const 현재문장 = 타이핑문장들[문장인덱스];
  글자순번++;
  타이핑영역.textContent = 현재문장.slice(0, 글자순번);

  if (글자순번 === 현재문장.length) {
    setTimeout(() => {
      글자순번 = 0;
      문장인덱스 = (문장인덱스 + 1) % 타이핑문장들.length;
      setTimeout(타이핑, 1000);
    }, 2000);
  } else {
    setTimeout(타이핑, 100);
  }
}
타이핑();
