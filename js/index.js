(function (){
    'use strict'

    // iPhone6 导航栏点击下拉
    var iphoneHeaderBtn = document.getElementById('iphoneHeader-btn'),
        iphoneNav = document.getElementById('first-iphoneNav'),
        iphoneNavShowClassName = 'first-iphoneNav-show',
        btnActiveClassName = 'iphoneHeader-btn-active';

    iphoneHeaderBtn.addEventListener('click',iphoneNavShow,false);

    function iphoneNavShow (){
        if(iphoneNav.classList.contains(iphoneNavShowClassName)){
            iphoneNav.classList.remove(iphoneNavShowClassName);
            iphoneHeaderBtn.classList.remove(btnActiveClassName);
        }else{
            iphoneNav.classList.add(iphoneNavShowClassName);
            iphoneHeaderBtn.classList.add(btnActiveClassName);
        }
        
    }

    // ipad 点击导航栏和第二区域项切换active
    var ipadNav = document.getElementById('first-ipadNav'),
        secondContainer = document.getElementById('second-container');

    ipadNav.addEventListener('click',function (ev){
        var pattern = /(^|\s)ipadNav\-item($|\s)/,
            activeClassName = 'nav-active';
        
            handleActive(ev, this, pattern, activeClassName);
    },false);

    secondContainer.addEventListener('click',function (ev){  
        var pattern = /(^|\s)second\-item($|\s)/,
            activeClassName = 'second-active';
        
            handleActive(ev, this, pattern, activeClassName);
    },false);

    function handleActive (ev, elem, pattern, activeClassName){  //形参多的话可以用数组形式
        if(pattern.test(ev.target.className)){
            for(var i = 0; i < elem.childElementCount; i++){
                elem.children[i].classList.remove(activeClassName);
            }
        }
        if(ev.target && pattern.test(ev.target.className)){
            ev.target.classList.add(activeClassName);
        }
    }

})();