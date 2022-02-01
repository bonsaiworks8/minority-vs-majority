const setOffsetY = ()=> {
  var height = $("header").height() + 30;
  $(".js_headerOffsetY").css("height", height);
}

setOffsetY();
$(window).resize(setOffsetY);
