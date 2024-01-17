$(document).ready(function () {
  $("#more").click(function () {
    $(".downcontent").toggle();
  });
  $("#discord").click(function () {
    console.log("a");
    navigator.clipboard.writeText("kidkuda");
    alert("Discord copied to clipboard");
    console.log("holaa");
  });
});
