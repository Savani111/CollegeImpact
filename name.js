$(window).on('load', function() {
 
   
$('#textbox').on('keypress', function(e){
    if(e.keyCode==13 && $("#textbox").val()!=""){
        $(".chat-box-body").append("<div class='chat-box-body-send'><p>"+$("#textbox").val()+"</p><span>12:00</span></div>")
        getanswer($("#textbox").val())
        $("#textbox").val('');
    }

})

$('.chat-box .chat-box-header').on('click' , function(){
    console.log("hello")
	$('.chat-button').css({"display": "block"});
	$('.chat-box').css({"visibility": "hidden"});
})

$("#addExtra").on("click" , function(){
		
		$(".modal").toggleClass("show-modal");
})

$(".modal-close-button").on("click" , function(){
	$(".modal").toggleClass("show-modal");
})
var getanswer=function(question){
    $(".chat-box-body").append("<div class='chat-box-body-receive'><p>"+(requestanswer(question))+"</p><span>12:00</span></div>")
}
var requestanswer=function(question){
    $.post('54.161.99.9',  
        // Replace with your endpoint URL 
        {"question": question}, 
        function(response) { // Display the response in the paragraph
             console.log(response); }).fail(
                function(xhr, status, error) { // Handle any errors
                     console.log("An error occurred: " + error); });

}
});