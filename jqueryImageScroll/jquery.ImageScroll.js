// 用法$(function(){
// 	var leftarrow=$(".game_btn_left");//左箭头
// 	var rightarrow=$(".game_btn_right");//右箭头
// 	var lilength=$(".gameSlide li").length;//li元素数量
// 	var liwidth=$(".gameSlide li").eq(0).width();//li元素单个宽度
// 	$(".gameSlide").ImageScroll({//gameSlide为装有li元素的父元素
// 		"leftarrow":leftarrow,
// 		"rightarrow":rightarrow,
// 		"liLength":lilength,
// 		"liwidth":liwidth,
// 		"Num":3//容器中显示的有几张
// 	})
// })
;(function($){
	$.fn.ImageScroll=function(opts){
	var leftarrow=opts.leftarrow;
	var rightarrow=opts.rightarrow;
	var Ullength=opts.liLength;
	var Liwidth=opts.liwidth;
	var gameSlideWidth=Ullength*Liwidth;
	this.css("width",gameSlideWidth);
    var _this=this;
   console.log(Ullength+","+Liwidth);
   leftarrow.click(function(){

   if (!_this.is(':animated')) {
	var curpos=_this.position().left;
	if(curpos>=0){
		curpos=0;
	}else{
	curpos=curpos+Liwidth;	
     }  

   	_this.stop(true,false).animate({"left":curpos});  
   }
   });

   rightarrow.click(function(){

   	if (!_this.is(':animated')) {

   	var curpos=_this.position().left;
   	console.log(curpos+","+Liwidth+","+opts.Num+","+gameSlideWidth);
   	if(curpos<=-(gameSlideWidth-Liwidth*opts.Num)){
		curpos=-(gameSlideWidth-Liwidth*opts.Num);
	}else{
	 	curpos=curpos-Liwidth;	
     }  
   	_this.stop(true,false).animate({"left":curpos});
   	 }  	  	
   });

	}
})(jQuery);