$(document).ready(function(){

    $(window).scroll(function(){


        var sct = $(window).scrollTop();
        console.log(sct);


        if(sct >= 500){
            $('.border_1').addClass('border_active')
        } 

       
        if(sct >= 600){
            $('.title').addClass('title_active')
        } 

        
        if(sct >= 1400){
            $('.title_1').addClass('title_1_active')
        } if(sct >= 1800){
            $('.title_2').addClass('title_2_active')
        } 

        if(sct >= 4000){
            $('.title_3').addClass('title_3_active')
        } 
        if(sct >= 4200){
            $('.title_4').addClass('title_4_active')
        } if(sct >= 4600){
            $('.title_5').addClass('title_5_active')
        } 
        if(sct >= 4700){
            $('.title_6').addClass('title_6_active')
        } 





    });


});

$(function () {
   
    $(window).scroll(function () {
       
        var sct = $(window).scrollTop();
        console.log(sct)

        if (sct >= 1000) {
            $("header").addClass("on_header");
        } if(sct >= 4000) {
        $("header").removeClass("on_header");
        }

    });


 



})