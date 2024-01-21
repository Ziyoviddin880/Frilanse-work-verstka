"use strict";

//First section
document
  .querySelector(".category-element-1")
  .addEventListener("click", function () {
    //IMG
    document.querySelector(".give--1").classList.remove("d-none");
    document.querySelector(".give--1").classList.add("d-block");
    document.querySelector(".give--2").classList.remove("d-block");
    document.querySelector(".give--3").classList.remove("d-block");
    document.querySelector(".give--4").classList.remove("d-block");
    document.querySelector(".give--5").classList.remove("d-block");
    document.querySelector(".give--6").classList.remove("d-block");

    // Active-link
    document.querySelector(".category-element-1").classList.add("active-link");
    document
      .querySelector(".category-element-2")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-3")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-4")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-5")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-6")
      .classList.remove("active-link");

    //TExt
    document.querySelector(".site-title").textContent = "короткие ссылки";
    document.querySelector(".number").textContent = "/ 01 /";
  });
document
  .querySelector(".category-element-2")
  .addEventListener("click", function () {
    document.querySelector(".give--2").classList.add("d-block");
    document.querySelector(".give--1").classList.remove("d-block");
    document.querySelector(".give--1").classList.add("d-none");
    document.querySelector(".give--3").classList.remove("d-block");
    document.querySelector(".give--4").classList.remove("d-block");
    document.querySelector(".give--5").classList.remove("d-block");
    document.querySelector(".give--6").classList.remove("d-block");
    console.log("salom-2");

    document.querySelector(".category-element-2").classList.add("active-link");
    document
      .querySelector(".category-element-1")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-3")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-4")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-5")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-6")
      .classList.remove("active-link");

    document.querySelector(".site-title").textContent = "Био-страницы";
    document.querySelector(".number").textContent = "/ 02 /";
  });
document
  .querySelector(".category-element-3")
  .addEventListener("click", function () {
    document.querySelector(".give--3").classList.add("d-block");
    document.querySelector(".give--2").classList.remove("d-block");
    document.querySelector(".give--1").classList.remove("d-block");
    document.querySelector(".give--1").classList.add("d-none");
    document.querySelector(".give--4").classList.remove("d-block");
    document.querySelector(".give--5").classList.remove("d-block");
    document.querySelector(".give--6").classList.remove("d-block");

    document.querySelector(".category-element-3").classList.add("active-link");
    document
      .querySelector(".category-element-2")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-1")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-4")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-5")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-6")
      .classList.remove("active-link");
    console.log("salom-3");

    document.querySelector(".site-title").textContent = "QR-коды";
    document.querySelector(".number").textContent = "/ 03 /";
  });
document
  .querySelector(".category-element-4")
  .addEventListener("click", function () {
    document.querySelector(".give--4").classList.add("d-block");
    document.querySelector(".give--2").classList.remove("d-block");
    document.querySelector(".give--3").classList.remove("d-block");
    document.querySelector(".give--1").classList.remove("d-block");
    document.querySelector(".give--1").classList.add("d-none");
    document.querySelector(".give--5").classList.remove("d-block");
    document.querySelector(".give--6").classList.remove("d-block");

    document.querySelector(".category-element-4").classList.add("active-link");
    document
      .querySelector(".category-element-2")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-3")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-1")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-5")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-6")
      .classList.remove("active-link");
    console.log("salom-4");

    document.querySelector(".site-title").textContent = "Vcard-ссылки";
    document.querySelector(".number").textContent = "/ 04 /";
  });
document
  .querySelector(".category-element-5")
  .addEventListener("click", function () {
    document.querySelector(".give--5").classList.add("d-block");
    document.querySelector(".give--2").classList.remove("d-block");
    document.querySelector(".give--3").classList.remove("d-block");
    document.querySelector(".give--4").classList.remove("d-block");
    document.querySelector(".give--1").classList.remove("d-block");
    document.querySelector(".give--1").classList.add("d-none");
    document.querySelector(".give--6").classList.remove("d-block");

    document.querySelector(".category-element-5").classList.add("active-link");
    document
      .querySelector(".category-element-2")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-3")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-4")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-1")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-6")
      .classList.remove("active-link");
    console.log("salom-5");

    document.querySelector(".site-title").textContent = "Ссылки на файлы";

    document.querySelector(".number").textContent = "/ 05 /";
  });
document
  .querySelector(".category-element-6")
  .addEventListener("click", function () {
    document.querySelector(".give--6").classList.add("d-block");
    document.querySelector(".give--2").classList.remove("d-block");
    document.querySelector(".give--3").classList.remove("d-block");
    document.querySelector(".give--4").classList.remove("d-block");
    document.querySelector(".give--5").classList.remove("d-block");
    document.querySelector(".give--1").classList.remove("d-block");
    document.querySelector(".give--1").classList.add("d-none");

    document.querySelector(".category-element-6").classList.add("active-link");
    document
      .querySelector(".category-element-2")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-3")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-4")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-5")
      .classList.remove("active-link");
    document
      .querySelector(".category-element-1")
      .classList.remove("active-link");
    console.log("salom-6");

    document.querySelector(".site-title").textContent = "AI-ассистент";
    document.querySelector(".number").textContent = "/ 06 /";
  });

//Buttons

document.querySelector(".app-btn-1").addEventListener("click", function () {
  document.querySelector(".app-btn-1").classList.add("active-btn");
  document.querySelector(".app-btn-2").classList.remove("active-btn");
  document.querySelector(".app-btn-3").classList.remove("active-btn");
  document.querySelector(".app-btn-4").classList.remove("active-btn");
  document.querySelector(".app-btn-5").classList.remove("active-btn");
  document.querySelector(".app-btn-6").classList.remove("active-btn");
  document.querySelector(".bold-text").textContent = "Конструктор Био Страниц";
  document.querySelector(".bold-text-info").textContent =
    " — это интуитивно понятный инструмент для создания уникальных биографий. С его помощью можно легко описать ключевые моменты жизни или карьеры, добавить фотографии и делиться своей историей с миром. Создайте запоминающуюся и информативную биографию с помощью этого удобного инструмента.";
  document.querySelector(".rasm-1").classList.add("d-block");
  document.querySelector(".rasm-1").classList.remove("d-none");

  document.querySelector(".rasm-2").classList.remove("d-block");
  document.querySelector(".rasm-3").classList.remove("d-block");
  document.querySelector(".rasm-4").classList.remove("d-block");
  document.querySelector(".rasm-5").classList.remove("d-block");
  document.querySelector(".rasm-6").classList.remove("d-block");
});

document.querySelector(".app-btn-2").addEventListener("click", function () {
  document.querySelector(".app-btn-2").classList.add("active-btn");
  document.querySelector(".app-btn-1").classList.remove("active-btn");
  document.querySelector(".app-btn-3").classList.remove("active-btn");
  document.querySelector(".app-btn-4").classList.remove("active-btn");
  document.querySelector(".app-btn-5").classList.remove("active-btn");
  document.querySelector(".app-btn-6").classList.remove("active-btn");
  document.querySelector(".bold-text").textContent = "Сервис коротких ссылок";
  document.querySelector(".bold-text-info").textContent =
    " — это эффективный инструмент для сокращения длинных URL-адресов. Создавайте более компактные ссылки, которые легко передавать и использовать в сообщениях, социальных сетях или документах, делая процесс обмена информацией более удобным и эстетичным. Этот сервис помогает сделать длинные ссылки более доступными и легкими в управлении.";
  document.querySelector(".rasm-2").classList.add("d-block");
  document.querySelector(".rasm-1").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.add("d-none");
  document.querySelector(".rasm-3").classList.remove("d-block");
  document.querySelector(".rasm-4").classList.remove("d-block");
  document.querySelector(".rasm-5").classList.remove("d-block");
  document.querySelector(".rasm-6").classList.remove("d-block");
});
document.querySelector(".app-btn-3").addEventListener("click", function () {
  document.querySelector(".app-btn-3").classList.add("active-btn");
  document.querySelector(".app-btn-2").classList.remove("active-btn");
  document.querySelector(".app-btn-1").classList.remove("active-btn");
  document.querySelector(".app-btn-4").classList.remove("active-btn");
  document.querySelector(".app-btn-5").classList.remove("active-btn");
  document.querySelector(".app-btn-6").classList.remove("active-btn");
  document.querySelector(".bold-text").textContent = "Генератор QR-кодов";
  document.querySelector(".bold-text-info").textContent =
    "  — это инструмент, который моментально создает уникальные QR коды из текста, ссылок или контактной информации. Эти многофункциональные коды могут быть использованы для быстрого доступа к веб-сайтам, передачи данных или распространения информации, облегчая коммуникацию и упрощая процессы в повседневной жизни или бизнесе.";
  document.querySelector(".rasm-3").classList.add("d-block");
  document.querySelector(".rasm-2").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.add("d-none");
  document.querySelector(".rasm-4").classList.remove("d-block");
  document.querySelector(".rasm-5").classList.remove("d-block");
  document.querySelector(".rasm-6").classList.remove("d-block");
});
document.querySelector(".app-btn-4").addEventListener("click", function () {
  document.querySelector(".app-btn-4").classList.add("active-btn");
  document.querySelector(".app-btn-2").classList.remove("active-btn");
  document.querySelector(".app-btn-3").classList.remove("active-btn");
  document.querySelector(".app-btn-1").classList.remove("active-btn");
  document.querySelector(".app-btn-5").classList.remove("active-btn");
  document.querySelector(".app-btn-6").classList.remove("active-btn");
  document.querySelector(".bold-text").textContent = "VC ссылки";
  document.querySelector(".bold-text-info").textContent =
    " — эти ссылки обеспечивают удобный способ подключиться к онлайн-встрече или мероприятию, позволяя пользователям просто перейти по ссылке и присоединиться к сессии без необходимости вводить коды или данные для входа. VC ссылки упрощают процесс подключения к видеоконференциям, делая их более доступными и удобными для участников.";
  document.querySelector(".rasm-4").classList.add("d-block");
  document.querySelector(".rasm-2").classList.remove("d-block");
  document.querySelector(".rasm-3").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.add("d-none");
  document.querySelector(".rasm-5").classList.remove("d-block");
  document.querySelector(".rasm-6").classList.remove("d-block");
});
document.querySelector(".app-btn-5").addEventListener("click", function () {
  document.querySelector(".app-btn-5").classList.add("active-btn");
  document.querySelector(".app-btn-2").classList.remove("active-btn");
  document.querySelector(".app-btn-3").classList.remove("active-btn");
  document.querySelector(".app-btn-4").classList.remove("active-btn");
  document.querySelector(".app-btn-1").classList.remove("active-btn");
  document.querySelector(".app-btn-6").classList.remove("active-btn");
  document.querySelector(".bold-text").textContent = "Ссылки на файлы";
  document.querySelector(".bold-text-info").textContent =
    " — Эти ссылки облегчают обмен файлами, позволяя передавать информацию через интернет, а также делиться документами, изображениями или другими файлами с другими людьми или устройствами. Создание ссылок на файлы упрощает распространение информации и делает ее доступной в онлайн-среде.";
  document.querySelector(".rasm-5").classList.add("d-block");
  document.querySelector(".rasm-2").classList.remove("d-block");
  document.querySelector(".rasm-3").classList.remove("d-block");
  document.querySelector(".rasm-4").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.add("d-none");
  document.querySelector(".rasm-6").classList.remove("d-block");
});
document.querySelector(".app-btn-6").addEventListener("click", function () {
  document.querySelector(".app-btn-6").classList.add("active-btn");
  document.querySelector(".app-btn-2").classList.remove("active-btn");
  document.querySelector(".app-btn-3").classList.remove("active-btn");
  document.querySelector(".app-btn-4").classList.remove("active-btn");
  document.querySelector(".app-btn-5").classList.remove("active-btn");
  document.querySelector(".app-btn-1").classList.remove("active-btn");

  document.querySelector(".bold-text").textContent = "Ai-ассистент";
  document.querySelector(".bold-text-info").textContent =
    " — Этот интеллектуальный помощник может выполнять функции от поиска информации и управления задачами до обработки данных и автоматизации повседневных задач, предоставляя персонализированную поддержку в соответствии с запросами пользователя. AI-ассистенты значительно упрощают рабочие процессы и повседневные задачи.";
  document.querySelector(".rasm-6").classList.add("d-block");
  document.querySelector(".rasm-2").classList.remove("d-block");
  document.querySelector(".rasm-3").classList.remove("d-block");
  document.querySelector(".rasm-4").classList.remove("d-block");
  document.querySelector(".rasm-5").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.remove("d-block");
  document.querySelector(".rasm-1").classList.add("d-none");
});
