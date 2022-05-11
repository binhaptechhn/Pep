function activeTab(obj){
    $('.choiceBar .choiceMenu a').removeClass('active');
    $(obj).addClass('active');
    let tabActived = $(obj).find('a').attr('href');
    $('.tab-pane').hide();
    $(tabActived).show();
}

$('.choiceBar .choiceMenu').click(function (){
    activeTab(this);
    return false;
});

activeTab($('.choiceBar .choiceMenu:first-child'));