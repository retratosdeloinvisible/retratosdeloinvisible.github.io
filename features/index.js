function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function play2() {
    var audio = document.getElementById("audio2");
    audio.play();
}
$(function() {
    $('#gif-click').hide();

    $('#click').click(function() {
        $('#click').hide();
        $('#gif-click').show();

    });

    if ($('#click').data("clicked", true)) {
        $('#gif-click').click(function() {
            $('#click').show();
            $('#gif-click').hide();
        
        });
    }
});
$(function() {
    $('#gif-click2').hide();

    $('#click2').click(function() {
        $('#click2').hide();
        $('#gif-click2').show();

    });

    if ($('#click2').data("clicked", true)) {
        $('#gif-click2').click(function() {
            $('#click2').show();
            $('#gif-click2').hide();
        
        });
    }
});

$(function() {
    $('#gif-click3').hide();

    $('#click3').click(function() {
        $('#click3').hide();
        $('#gif-click3').show();

    });

    if ($('#click3').data("clicked", true)) {
        $('#gif-click3').click(function() {
            $('#click3').show();
            $('#gif-click3').hide();
        
        });
    }
});