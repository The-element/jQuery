$(document).ready(function () {
  //when the document is ready, call this function:
  $("#stream1_btn").on("click", function () {
    //Jquery, target the id "stream1_btn" when user clicks. Then call this function:
    /*
        above can also be written in the following way:
        $("#stream1_btn").click(function() {
        one can also use the .mouseenter or .mouseleave which is similar to :hover in css but it reacts to the user moving their mouse pointer in over or out of an element.
        
        */
    $(".stream1").removeClass("highlight_stream"); //Remove the class highlight_stream from the html-elemnt with the class "stream1"
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream1").addClass("highlight_stream"); //Adds the class "highlight_stream" to the html-element with the class "stream1"
  });
  $("#stream2_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream2").addClass("highlight_stream");
  });
  $("#stream3_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream3").addClass("highlight_stream");
  });

  $("p").click(function () { //When a p-element is clicked call this function:
    $("p").css("color", "red");
  });

  $("h2").hover(function () { //When a mouse hovers over a h2-element call this function:
    $("h2").css("background", "lightblue");
  });

  $(".card-panel").mouseenter(function () { //When a mouse enters over an html-element with the class of card-panel call this function:
    $("body").css("background-color", "black");
  });

  $(".card-panel").mouseleave(function () { //When a mouse leaves from hovering over an html-element with the class of card-panel call this function:
    $("body").css("background-color", "#e1e2e2");
  });

  $("#stream1_btn").on(function () { //Jquery, target the id "stream1_btn" when user clicks. Then call this function:
    $(".stream1").show(""); //shows a hidden element with the class "stream1"
    $(".stream2").show("slow"); //shows a hidden element with the class "stream1" but shows it slowly
    $(".stream3").show("medium");
    $(".stream1").show("fast");
    $(".stream1").show(1000);  //shows a hidden element with the class "stream1" but how fast is determined in milliseconds
    $(".stream1").hide("fast"); //hides the element.
    $(".stream1").toggle("fast"); //hides the element if it's shown, shows it if its already hidden.
    $(".stream1").slideDown("fast"); //slides down a hidden html-element so it becomes visible.
    $(".stream1").slideUp("fast"); //does the oposite.
    $(".stream1").slideToggle("fast"); //Its a toggle for the slide-function.
    $(".stream1").fadeIn("fast"); //Fades in a hidden element.
    $(".stream1").fadeOut("fast"); //Fades out a hidden element.
    $(".stream1").fadeToggle("fast"); //Its a toggle for the fading-function.
    $(".stream1").fadeTo(1000, 0.5); //Partely fades out or in an element thous making it transparent. It takes to arguments: the speed in milliseconds and the opacity. 0=invisable 1=no transparency.
  });
  $("#stream2_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream2").addClass("highlight_stream");
  });
  $("#stream3_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream3").addClass("highlight_stream");
  });


    // Create the slideToggle effects each of the paragraphs and
    // buttons
    $("#button_effects1").click(function(){
        $('#par1').slideToggle('1000');
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle('1000');
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle('1000');
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle('1000');
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle('1000');
    });

    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });

    $("#button_effects2").mouseenter(function(){
        $('#button_effects2').fadeTo(1000, 0.5);
    });
    $("#button_effects2").mouseleave(function(){
        $('#button_effects2').fadeTo(1000, 1);
    });

    $("#button_effects3").mouseenter(function(){
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effects3').fadeTo(1000, 1);
    });

    $("#button_effects4").mouseenter(function(){
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effects5").mouseenter(function(){
        $('#button_effects5').fadeTo(1000, 0.5);
    });
    $("#button_effects5").mouseleave(function(){
        $('#button_effects5').fadeTo(1000, 1);
    });

    $("#button_effects6").mouseenter(function(){
        $('#button_effects6').fadeTo(1000, 0.5);
    });
    $("#button_effects6").mouseleave(function(){
        $('#button_effects6').fadeTo(1000, 1);
    });

    $("#myButton").removeClass("blueBox").addClass("border"); //Two chained functions because the first returns an object the second function can work with.
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    $("a").attr("href", "http://www.example.com"); //The attr works as a getter and a setter. Here we look for the href and add the value of the written url.
    }); 
    
    // (this).method() can also be used. this refferences the element clicked upon.

    $(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
    });

    //One can also use the DOM-tree structure to target an element. 
    //If you would like to target a parent of an element you use the .parent() method, if it's a child you'd like to target you use .children().
    //If you want to target a specifik element of a parent or a child you just pass in whatever element into the method, like: $("div").children("p") for a paragraph-child of a div. 
    //Siblings can be targeted in a similar way using .next() or .prev()
});
