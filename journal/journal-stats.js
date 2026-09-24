(function () {
  var box = document.querySelector("[data-views]");
  if (!box) return;

  var value = box.querySelector("[data-views-count]");
  if (!value) return;

  var script = document.createElement("script");
  script.defer = true;
  script.src = "https://events.vercount.one/js";
  document.head.appendChild(script);

  var attempts = 0;
  var timer = setInterval(function () {
    var digits = (value.textContent || "").replace(/[^\d]/g, "");
    if (digits) {
      value.textContent = Number(digits).toLocaleString("en-US");
      box.hidden = false;
      clearInterval(timer);
    } else if (++attempts > 50) {
      clearInterval(timer);
    }
  }, 200);
})();
