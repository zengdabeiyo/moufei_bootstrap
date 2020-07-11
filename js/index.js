/**
 * Created by itcast.
 */
// 使用js动态选择不同分组的轮播图
$(function(){
	// 控制轮播图的播放速度
	 $('.carousel').carousel({interval: 2000})
	 // 获取当前所有的item
	 var items=$(".carousel-inner .item");
	// 监听屏幕大小
	$(window).on("resize",function(){
		// 1.获取当前屏幕的宽度
		var width=$(window).width();
		// 2.判断屏幕的宽度
		if(width>=768){//说明非移动端
			// 为每一个item添加子元素--遍历
			$(items).each(function(index,value){
				var item=$(this);
				// 当前自定义属性中存储的图片路径
				var imgSrc=item.data("largeImg")
				//console.log(imgSrc)
				// 添加非移动端的子元素
				item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"))
			})
		}else{
			$(items).each(function(index,value){
				var item=$(this)
				var imgSrc=item.data("smallImg");
				item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>')
			})
		}
	}).trigger("resize");
    
	
	// 移动页面标签页导航条滑动
	// 计算产品框导航项的原始宽度
	var ul=$(".index_products .nav-tabs");
	var lis=ul.find("li");  //获取ul下的子元素
	var totalWidth=0;  //总宽度
	lis.each(function(index,value){
		totalWidth=totalWidth+$(value).outerWidth(true);
		
		// 获取宽度的说明：width()只能获取元素内容的宽度，不包含padding，
		// 使用innerWidth()，能获取内容的宽度+padding
		// 使用outerWidth(),能获取内容的宽度+padding+border
		// 使用outerWidth(true),能获取元素内容的宽度+padding+border+magin
	});
	//console.log(totalWidth)
	// 获取到的lis的总宽度赋值给ul的宽度
	ul.css('width', totalWidth + "px"); 
});
