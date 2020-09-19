var ImportantBtn = $('#Important')
var normalBtn = $('#normal')
var restBtn = $('#rest')

ImportantBtn.click(function(){
    $("div").css("background","red")
    $("p").css("color","white")
    $("h1").css("color","#8b0000")

})
normalBtn.click(function(){
    $("div").css("background","#ADD8E6")
    $("p").css("color","#FFFFFF")
    $("h1").css("color","#00008B")

})
restBtn.click(function(){
    $("div").css("background","#FFFFFF")
    $("p").css("color","black")

})
// / when the Important button clicked! change the background color to red and text to white and heading to dark red
// when the normal button clicked! change the background color to lightblue and text to white and heading to dark blue
// when the rest button clicked! change the background white and the text to dark
