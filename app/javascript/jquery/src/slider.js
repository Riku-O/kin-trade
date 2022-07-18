{
  /* <p id="test">jQueryでーーーーーす</p>
  <p class="hoge">色を変えまーーーーーーーす</p>
  上記をテストするための記述
  */
}

$(function () {
  $("#test").css("color", "red");
  $(".hoge").css("color", "#00ff7f");
});
