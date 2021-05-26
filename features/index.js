
/* pagina 1 */

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}


/* pagina 2  */
function play2() {
    var audio = document.getElementById("audio2");
    audio.play();
}

/* pagina 4 */
function play3() {
    var audio = document.getElementById("audio3");
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

 /* PAGINA 1 */

$(function() {
    $('#gif-clickc').hide();

    $('#clickc').click(function() {
        $('#clickc').hide();
        $('#gif-clickc').show();

    });

    if ($('#clickc').data("clicked", true)) {
        $('#gif-clickc').click(function() {
            $('#clickc').show();
            $('#gif-clickc').hide();
        
        });
    }
});

/*PAGINA 2 */

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


$(function() {
    $('#gif-click4').hide();

    $('#click4').click(function() {
        $('#click4').hide();
        $('#gif-click4').show();

    });

    if ($('#click4').data("clicked", true)) {
        $('#gif-click4').click(function() {
            $('#click4').show();
            $('#gif-click4').hide();
        
        });
    }
});


$(function() {
    $('#gif-click5').hide();

    $('#click5').click(function() {
        $('#click5').hide();
        $('#gif-click5').show();

    });

    if ($('#click5').data("clicked", true)) {
        $('#gif-click5').click(function() {
            $('#click5').show();
            $('#gif-click5').hide();
        
        });
    }
});

/*PAGINA 6*/
function play6() {
    var audio = document.getElementById("audio6");
    audio.play();
}


$(function() {
    $('#gif-click6').hide();

    $('#click6').click(function() {
        $('#click6').hide();
        $('#gif-click6').show();

    });

    if ($('#click6').data("clicked", true)) {
        $('#gif-click6').click(function() {
            $('#click6').show();
            $('#gif-click6').hide();
        
        });
    }
});