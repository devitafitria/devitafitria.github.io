$(document).ready(() => {
  $("td").click(function (event) {
    alert("Sekarang Anda berada di  " + $(this).html() + "!");
  });
  $("th").click(function (event) {
    alert("Sekarang Anda berada di " + $(this).html() + "!");
  });
});
