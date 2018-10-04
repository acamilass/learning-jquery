$(document).ready(function(){
              
    $("p").on("click", function() {
        alert("Action is working");
    });

    $("#btn1").on("click", function(){
        alert("First button is working");
        $(this).css("color", "red");                    
    });

    $("#btn2").on("click", function(){
        alert("Second button is working");
        $(this).css("background-color", "blue");
    });

    $("#btn3").on("click", function(){
        alert("Third button is working");
        $(this).css("text-transform", "uppercase");
    });

    // $(".icon").on("mouseover", function(){
    //     $(".icon").css("opacity", 1);
    //     $(this).css("opacity", 0.3);
    // });

    $(".icon").mouseover(function(){
        $(".icon").css("opacity", 1);
        $(this).css("opacity", 0.3);
    });
});
