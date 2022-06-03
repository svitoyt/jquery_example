import $ from 'jquery';

$(document).ready(function() {//запустить callback функцию, только тогда, когда вся DOM структура загрузится и будет готова
    $('.list-item:first').hover(function() { //выбрали первый элем класса .list-item на стр, при наведении на него будет: 
        $(this).toggleClass('active'); //тоглим класс active
    });

    $('.list-item:eq(2)').on('click', function() {//обратились к 3ему элем на стр, по клику будет: 
       $('.image:even').fadeToggle(); //класс image все четные элем плавно скрываем
    }); 

    $('.list-item:eq(4)').on('click', function() {//обратились к 5ому элем на стр, по клику будет: 
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    }); 
}); 