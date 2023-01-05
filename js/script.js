$(document).ready(function(){
    /*#mainNav*/
    var m=$('#mainNav>ul>li>a');
    var div=$('#mainNav>ul>li>ul');

    m.each(function(){
        $(this).click(function(){
            $(this).next().slideToggle(200).parent().siblings().find('ul:visible').hide();
        });
    });


    /*contentBox*/
    
    var n=$('#newProduct .newBox>.newMain>.content');
    var content=$('#newProduct .newBox>.newMain>.content>.contentBox');

    n.hover(function(){
        content.show();
    },function(){
        content.hide();
    });

    /*mainNav-m*/
    var menu_btn=$('#mainHeader #menubar>ul>li:last-child>a');
    var menu=$('#mainNav-m');
    var menu_close=$('#mainNav-m>.close>a');

    menu_btn.on('click',function(){
        menu.animate({left:0});
    });

    menu_close.on('click',function(){
        menu.animate({left:-100+'%'});
    });

    /*#mainNav*/
    var m_btn=$('#mainNav-m>.menu>li>a');
    var m_div=$('#mainNav-m>ul>li>ul');

    m_btn.each(function(){
        $(this).click(function(){
            $(this).next().slideToggle(200).parent().siblings().find('ul:visible').hide();
        });
    });
});


/*
$(document).ready(function(){
    var $header=$('#mainHeader');
    var newProduct_height=$('#newProduct').height();

    function fixed(){
        var scroll_top=$(window).scrollTop();
        console.log(scroll_top);

        if(scroll_top>newProduct_height){
            $header.hide();
        }else{
            $header.show();
        }
    }

    $(window).scroll(fixed);

});*/

/*
$(document).ready(function(){    
    var $new=$('#newProduct');
    var new_height=$('#newProduct').height();
    var menu=$('#mainHeader');

    function menu_fixed(){
        var scroll_top=$(window).scrollTop();
        
        if(scroll_top>new_height){
            menu.hide();
        }else{
            menu.show();
        }
    }

    $(window).scroll(menu_fixed);
});
*/
/*
$(document).ready(function(){    
    var $header=$('#mainHeader');
    var header_height=$('#mainHeader').height();
    

    function headerSlide(){
        var scroll_top=$(window).scrollTop();
        console.log(scroll_top);

        if(scroll_top>header_height){
            $header.addClass('fixed');
        }else{
            $header.removeClass('fixed');
        }
    }

    

    $(window).scroll(headerSlide);
});*/