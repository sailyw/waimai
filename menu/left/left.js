(function(){
    var itemTmpl = '<div class= "left-item">'+
                        '<div class = "item-text">$getItemContent</div>'+
                    '</div>';
    window.food_spu_tags=[];
    /**
     * 请求数据
     */
    function getList(){
        $.get('../json/food.json',function(data){
            console.log(data);
            window.food_spu_tags =data.data.food_spu_tags||[];
            initContentList(window.food_spu_tags);
        })
    }
    /**
     * 渲染item内容 
     */
    function getItemContent(data){
        if(data.icon){
            return '<img class = "item-icon" src='+data.icon+' />'+data.name;
        }else{
            return data.name;
        }
    }
    /**
     * 渲染列表内容
     */
    function initContentList(list){
        list.forEach(function(item,index){
            var str = itemTmpl.replace('$getItemContent',getItemContent(item));
            var $target = $(str);
            $target.data('itemData',item);
            $('.left-bar-inner').append($target);
        });
        $('.left-item').first().click();
    }
    function addClick(){
        $('.menu-inner').on('click','.left-item',function(e){
            var $target = $(e.currentTarget);
            $target.addClass('active');
            $target.siblings().removeClass('active');

            Right.refresh($target.data('itemData'));
        });
    }
    function init(){
        getList();
        addClick();
    }
    init();
})();