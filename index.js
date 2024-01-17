$(document).ready(function () {
  $("#more").click(function () {
    $(".downcontent").toggle();
  });
  $("#discord").click(function () {
    navigator.clipboard.writeText("kidkuda");
    alert("Discord copied to clipboard");
    console.log("holaa");
  });
});
