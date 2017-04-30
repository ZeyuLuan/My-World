$(document).ready(function($) {
	var myIScroll,isTouchX=true,initY=0,dy=0,touchTarget=document.getElementById("main");
	var currentPosition=0,perPosition=0,maxPosition=0;
	var $bgTimeElements = $('[data-bg]');
	var bgTimeElements = [],offsetTopArr=[];
	var tweenAD,SH=0,isBackTop=false,contentH=$('#content').height();
	var siteImgData={
		p1:'about_data/p1.jpg',	
		p2:'about_data/p2.jpg',
		p3:'about_data/p3.jpg',
		p4:'about_data/p4.jpg',
		p5:'about_data/p5.jpg',
		p6:'about_data/p6.jpg',
		p7:'about_data/tjyswl_about_p1.jpg',
		p8:'about_data/tjyswl_about_p2.jpg',
		p9:'about_data/tjyswl_about_p3.jpg'
	}
	
	function getElementsOffsetTop(){
		var len=$('#content li').length;
		for(var i=0;i<len;i++){
			var $aboutadvert=$('#content li').eq(i);
			offsetTopArr.push($aboutadvert[0].offsetTop);
		};
		maxPosition=len-1;
	}
	getElementsOffsetTop();
	
	$bgTimeElements.each(function(){
		var $view = $(this);
		var elem = new BgTimeAttribute(this);
		bgTimeElements.push( elem );
	});
	
	//"文字说明"移动时间线元素
	function BgTimeAttribute( view , options ) {
		options = options || {};
		var $view = $(view);
		this.view = $view.find('img');
		this.offsetTop=$view[0].offsetTop;
		var viewW=$view.find('img').width();
		this.width=viewW;
		this.moveVal=viewW-640;
		trace('offsetTop:'+this.offsetTop);
		//this.align = options.align || $view.attr('data-align') || 'left';
		//trace(this.moveVal);
	}
	
	//alert(offsetTopArr);
	
	var init=function(){
		resizeHandler();
		window.setTimeout(function(){
			myIScroll= new iScroll('main',{hScroll:false,vScroll:true});
			animloop();
			displayAdvert();
		},500);
		
		
	}
	
	
	// ************************************************************************************************
	//播放--相当于FLASH的帧动画
	// ************************************************************************************************
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function(/* function */ callback, /* DOMElement */ element){
			window.setTimeout(callback, 1000 / 60);
		};
	})();
	
	//序列图以缓动形式播放
	var animloop=function(){
		requestAnimFrame(animloop);
		renderTimeline();
		
	}
	
	//序列图播放
	var renderTimeline=function() {
		//页面元素位移
		//var DY=myIScroll.y;
		var reg=/\-?[0-9]+/g;
		var dArr=$('#content').css('-webkit-transform').match(reg);
		var DY=Number(dArr[5]);
		$.each(bgTimeElements,function(index,element){
			var offsetTop=element.offsetTop;
			
			var moveVal=element.moveVal;
			//var minY = -element.moveVal, maxY = SH + 500;
			
			var elemX=-(moveVal/(SH)*(offsetTop+DY));
			if(elemX<0 || elemX>moveVal){
				
			}else{
				//element.view.css({'marginLeft':-elemX});
				//element.view.css({'marginLeft':-elemX});
				element.view.css({'-webkit-transform':'translate(' + -elemX + 'px,0px) translateZ(0px)' });
				//TweenLite.to(element.view,0.1,{css:{'marginLeft':-elemX}});
			}
			
			//trace('DY:'+DY+"   "+'offsetTop:'+offsetTop);
		});
	}
	
	
	/************************************************************************************************/
	/*触摸屏事件*/
	/************************************************************************************************/
	touch.on(touchTarget, 'dragstart', function(ev){
		ev.preventDefault();
		myIScroll.isContentMove=true;
		trace('滑动方向：'+ev.direction);
		if(ev.direction=="down" || ev.direction=="up"){
			isTouchY=true;
			myIScroll.isTouchMove=true;
		}else{
			myIScroll.isTouchMove=false;
			isTouchY=false;
		}
		if(tweenAD){
			tweenAD.kill();
			tweenAD=null;
		}
		
	});
	

	
	touch.on(touchTarget, 'drag', function(ev){
		if(isTouchY){
			dx = initY + ev.y;
			//touchScroll(dx,0);
			if(ev.direction=="down" || ev.direction=='up'){
				
			}
			trace('dx:'+dx);
		}
		
	});
	
	touch.on(touchTarget, 'dragend', function(ev){
		trace('事件END！！！');
		if(isTouchY){
			initY += ev.y;
			var IX=initY;
			
			trace('initY:'+initY+"    "+"duration:"+ev.duration+"     "+"ev.y:"+ev.y);
			if(Math.abs(IX)>15){
				if(ev.direction=="up"){
					setPosition(true);
				}else{
					setPosition(false);
				}
			}
			//trace('阈值小于0.5秒，开始滚动');
			
			if(ev.duration<500){
				
			}
			
			//$('#trace').html(ev.direction+"   "+'currentPosition:'+currentPosition);
		}
		isTouchY=false;
		//trace('distance:'+ev.distance);
		
	});
	
	
	function setPosition(dijia){
		if(!isBackTop){
			if(dijia)currentPosition++;
				else currentPosition--;
			//if(currentPosition>=maxPosition)currentPosition=maxPosition;
			//if(currentPosition<=0)currentPosition=0;
			if(currentPosition<0 || currentPosition>maxPosition){
				currentPosition=currentPosition<0?0:maxPosition;
				myIScroll.isContentMove=true;
				trace('myIScroll.isContentMove=true');
			}else{
				$('#trace').html('---滚动:'+offsetTopArr[currentPosition]);
				
				myIScroll.isContentMove=false;
				trace('myIScroll.isContentMove=false----');
				var posY=currentPosition<maxPosition?-offsetTopArr[currentPosition]:-(contentH-1000);
				tweenAD=new TweenLite.to($('#content'),0.6,{'transform':'translate(0px, '+posY+'px)',ease:Cubic.easeInOut,onComplete:tweenEnd});
				
				trace('currentPosition:::'+offsetTopArr[currentPosition]);
			}
		}
		
		//myIScroll.isTouchMove=true;
		
		//alert(offsetTopArr[currentPosition]);
	}
	
	function tweenEnd(){
		//myIScroll.scrollTo(0,-offsetTopArr[currentPosition],100);
		myIScroll.stop();
		myIScroll.y=-Number(offsetTopArr[currentPosition]);
		myIScroll.refresh();
		displayAdvert();
	}
	
	
	
	/************************************************************************************************/
	/*显示广告语*/
	/************************************************************************************************/
	/*var displayAdvert=function(){
		var n=currentPosition;
		var $aboutAd=$('.aboutAd').eq(n);
		var len=$aboutAd.find('p').length;
		$aboutAd.find('p').css({'display':'none','opacity':0});
		//TweenLite.to($('.aboutAd').find('p'),0.5,{css:{'display':'block','opacity':0}});
		for(var i=0;i<len;i++){
			var $ad=$aboutAd.find('p').eq(i);
			//$ad.css('paddingTop',50);
			//TweenLite.to($ad,1,{delay:0.1*i+0.6,css:{'display':'block','paddingTop':'0','opacity':1}});
			$ad.css('-webkit-transform','translate(0px, '+(20*i+50)+'px)');
			TweenLite.to($ad,1,{delay:0.1*i+0.6,css:{'display':'block','-webkit-transform':'translate(0px, 0px)','opacity':1}});
		};
		perPosition=n;
	}*/
	
	var displayAdvert=function(){
		var n=currentPosition;
		//$('.aboutAd').hide();
		var $aboutAd=$('.aboutAd').eq(n);
		if($('.currentAboutAd')){
			$('.currentAboutAd').fadeOut('slow');
			$('.currentAboutAd').removeClass('currentAboutAd');
		}
		
		
		
		$aboutAd.addClass('currentAboutAd');
		$aboutAd.show();
		var len=$aboutAd.find('p').length;
		$aboutAd.find('p').css({'display':'none','opacity':0});
		//TweenLite.to($('.aboutAd').find('p'),0.5,{css:{'display':'block','opacity':0}});
		for(var i=0;i<len;i++){
			var $ad=$aboutAd.find('p').eq(i);
			//$ad.css('paddingTop',50);
			//TweenLite.to($ad,1,{delay:0.1*i+0.6,css:{'display':'block','paddingTop':'0','opacity':1}});
			$ad.css('-webkit-transform','translate(0px, '+(20*i+50)+'px)');
			TweenLite.to($ad,1,{delay:0.1*i,css:{'display':'block','-webkit-transform':'translate(0px, 0px)','opacity':1}});
		};
		perPosition=n;
	}
	
	$('.backTop').click(function(){
		//myIScroll.scrollTo(0,0,600);
		isBackTop=true;
		myIScroll.isContentMove=false;
		myIScroll.isTouchMove=false;
		currentPosition=0;
		TweenLite.to($('#content'),1,{'transform':'translate(0px, '+0+'px)',ease:Cubic.easeInOut,onComplete:backTopTweenEnd});
		
		myIScroll.stop();
		myIScroll.y=0;
		myIScroll.refresh();
	});
	
	
	/************************************************************************************************/
	/*图片自动切换*/
	/************************************************************************************************/
	var picAutoPlay=function(){
		var num=0,maxNum=3,preNum=maxNum-1;
		var $targetPic=$('.aboutPic img');
		window.setInterval(function(){
			if(num>=maxNum)num=0;
			$targetPic.css({'zIndex':0,'display':'none'});
			$targetPic.eq(num).css({'zIndex':2,'display':'none'});
			$targetPic.eq(preNum).css({'display':'block','zIndex':1});;
			$targetPic.eq(num).fadeIn('slow');
			
			trace('preNum:'+preNum+"   "+"num:"+num);
			preNum=num;
			
			num++;
		},3000);
	}
	picAutoPlay();
	
	
	/************************************************************************************************/
	/*返回顶部*/
	/************************************************************************************************/
	function backTopTweenEnd(){
		isBackTop=false;
		myIScroll.isContentMove=true;
		myIScroll.isTouchMove=true;
		displayAdvert();
		
		
	}
	
	/************************************************************************************************/
	/*窗口自适应*/
	/************************************************************************************************/
	function resizeHandler(){
		///window width and height;
		SH=$('#main').height();
		contentH=$('#content').height();
	}
	
	$(window).resize(function(){
		resizeHandler();
	});
	resizeHandler();
	resizeHandler();
	
	function trace(src){
		console.log(src);
		//$('#trace').html(src);
	}
	
	
	loadImages(siteImgData,init);
});
