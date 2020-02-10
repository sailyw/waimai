(function(){
    //模板字符串
    var itemTmpl = '<div class ="category-item">'+
                        '<img class = "item-icon" src = $url />'+
                        '<p class = "item-name">$name</p>'+
                    '</div>';
    /**
     * 渲染类目
     */
    function initCategory(){
        $.get('../json/head.json',function(data){
            console.log(data);
            var list = data.data.primary_filter.splice(0,8);
            list.forEach(function(item,index){
                var str = itemTmpl.replace('$url',item.url)
                                .replace('$name',item.name);
                $('.category-content').append(str);
            })
        })
    }
    /**
     * 绑定点击事件
     */
    function addClick(){
        $('.category-content').on('click','.category-item',function(){
            alert(111);
        })
    }
    function init(){
        initCategory();
        addClick();
    }
    init();
})();