$("#story-reading").click(function () {
    // $(".story-container").css('height', 'auto');
    // $("#shadow-box").css('display', 'none');
    // $(".story-container").css('margin-bottom', '0');
    $(".box").toggle(function () {
        $(".story-container").css('margin-bottom', '0');
        $("#shadow-box").css('display', 'none');
    });

});