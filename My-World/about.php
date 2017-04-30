<html><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<title>关于我们</title>
	<script type="text/javascript">
	if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
		var version = parseFloat(RegExp.$1);
		if(version>2.3){
			var phoneScale = parseInt(window.screen.width)/640;
			document.write('<meta name="viewport" content="width=640, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
		}else{
			document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
		}
	}else{
		document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
	}
	</script>

	<link rel="stylesheet" type="text/css" href="about_images/global.css">
	<link rel="stylesheet" type="text/css" href="about_images/idangerous.css">
	<script type="text/javascript" src="about_images/jquery-2.js"></script>
	<script type="text/javascript" src="about_images/idangerous.js"></script>
	<script type="text/javascript">
	$(function(){
		/*// 文字效果
        function text(){
        	var time = 0;
        	$(".swiper-slide-active").find(".txt p").each(function(idx, obj){
        		$(obj).css({
        			transition: "all 0.5s linear " + time + "s",
        			opacity: 1,
        			transform: "translateY(-50px)"
        		});
        		time += 0.1;
        	});
        }
		// 页面集合
		var mySwiper = new Swiper(".pages",{
            paginationClickable: true,
            mode: "vertical",
            slideClass: "page",
            onInit: text,
            onSlideChangeStart: function(){
            	console.log("123");
            },
            onSlideChangeEnd: function(){
            	$(".txt p").removeAttr("style");
            	text();
            	console.log("456");
            }
        });
        // 底部轮播
        setInterval(function(){
        	$(".lunbo img:first").fadeOut(1000,function(){
        		$(this).appendTo(".lunbo").fadeIn(1000);
        	});
        }, 3000);*/
	});
	</script>
	<style type="text/css">
	body{overflow:hidden;}
	iframe{border:0px;}
	/*.pages{width:100%;height:100%;}
	.page{height:1188px;overflow:hidden;background-repeat:no-repeat;position:relative;background-position:top center;}
	.page .txt{margin:125px 0 0 60px;}
	.page .txt p{opacity:0;font-size:35px;color:#000;margin:15px 0 0 0;}
	.page .txt p:first-child{font-size:60px;}
	.p1{background-image:url(about_images/about_data/1.jpg);}
	.p2{background-image:url(about_images/about_data/2.jpg);}
	.p2 .txt p:first-child{color:#B20606;}
	.p3{background-image:url(about_images/about_data/3.jpg);}
	.p3 .partner{width:558px;margin:0 auto;}
	.p4{background-image:url(about_images/about_data/4.jpg);}
	.p5{background-image:url(about_images/about_data/5.jpg);}
	.p5 .txt p{color:#FFF;font-size:30px;}
	.p6{background-image:url(about_images/about_data/6.jpg);}
	.p7{background:#252422;}
	.p7 .txt{z-index:3;position:relative;}
	.p7 .txt p{color:#FFF;font-size:30px;}
	.p7 .lunbo{position:absolute;bottom:100px;left:50%;z-index:1;margin-left:-258px;width:516px;height:516px;overflow:hidden;}
	.p7 .lunbo img{position:absolute;left:0px;top:0px;}*/
	</style>
</head>

<body>
<!-- AJAX -->
<div class="ajax">
	<iframe src="about_images/about.php" frameborder="0" height="100%" width="100%"></iframe>
</div>
<!-- 页面
<div class="pages" id="pages">
	<div class="swiper-wrapper">
		<div class="page p1" style="height:1035px;">
			<div class="txt p1txt">
				<p><img src="about_images/about_data/11.png" /></p>
				<p><img src="about_images/about_data/12.png" /></p>
				<p><img src="about_images/about_data/13.png" /></p>
				<p><img src="about_images/about_data/14.png" /></p>
			</div>
		</div>
		<div class="page p2">
			<div class="txt">
				<p>庭愿互动</p>
				<p>2004年成立于上海</p>
				<p>是国内领先的地产网络营销服务商</p>
			</div>
		</div>
		<div class="page p3">
			<div class="txt">
				<p>多年来</p>
				<p>服务仁恒、绿地、金地、首创、城投</p>
				<p>等众多知名房地产企业</p>
			</div>
			<div class="partner">
				<img src="about_images/about_data/partner.png" />
			</div>
		</div>
		<div class="page p4">
			<div class="txt">
				<p>[ 专业+专注 ]</p>
				<p>随着微信营销时代的到来，</p>
				<p>我们因时而动。</p>
				<p>以近十年的专业积淀为基础，</p>
				<p>不断创新，</p>
				<p>开启全新的微信互动营销模式。</p>
			</div>
		</div>
		<div class="page p5">
			<div class="txt">
				<p>[ 个性+精准 ]</p>
				<p>我们不是千篇一律流水线模板作业方式，</p>
				<p>从服务的开始就一直为每一位企业</p>
				<p>提供量身定制的微信营销解决方案。</p>
				<p>我们力求在手机这块巴掌大的屏幕上</p>
				<p>把用户体验发挥到极致。</p>
			</div>
		</div>
		<div class="page p6">
			<div class="txt">
				<p>[ 感染力+分享欲 ]</p>
				<p>我们创造</p>
				<p>具有感染力和影响力的用户体验，</p>
				<p>从而激发用户的兴趣点和分享欲。</p>
			</div>
		</div>
		<div class="page p7">
			<div class="txt">
				<p>[ 自媒体+广告屏 ]</p>
				<p>微信用户已超6亿</p>
				<p>自媒体的力量已经超过原来CCTV的黄</p>
				<p>金广告时段，每个人的手机都是一块品</p>
				<p>牌传播的广告屏。</p>
				<p>不断提升扩散的深度和广度，把您的品</p>
				<p>牌传播到每一个用户的手心里是我们一</p>
				<p>直努力的目标。</p>
			</div>
			<div class="lunbo">
				<img src="about_images/about_data/71.jpg" />
				<img src="about_images/about_data/72.jpg" />
				<img src="about_images/about_data/73.jpg" />
			</div>
		</div>
	</div>
</div> -->
<!-- 导航 -->
<div class="nav">
	<a nav="home" href="index.php"><b>首页</b><i>HOME</i></a>
	<a nav="case" href="index.php#case"><b>案例</b><i>CASE</i></a>
	<a nav="about" class="c" href="about.php"><b>关于</b><i>ABOUT</i></a>
	<a nav="service" href="service.php"><b>服务</b><i>SERVICE</i></a>
	<a nav="contact" href="contact.php"><b>联系</b><i>CONTACT</i></a>
</div>

<!-- 其他 -->
<div style="display:none">
	<!-- 微信分享 -->
	<script type="text/javascript" src="about_images/jweixin-1.js"></script>
	<script type="text/javascript">
	wx.yunapp = {
	    title : '庭愿互动 ［地产 + 微信 + 互动 + 营销］',
	    desc : '赢在移动互联网时代，我们为您看到、想到、更做到！',
	    link : 'index.php',
	    imgUrl : 'images/wx.png'
	}
	wx.config({
	    debug: false, // 是否开启调试模式
	    appId: 'wx1e1cb265fa7b9c6a', // 必填，公众号的唯一标识
	    timestamp: 1439013546, // 必填，生成签名的时间戳
	    nonceStr: 'DZjvxkef1Amxyugs', // 必填，生成签名的随机串
	    signature: 'f44b37bc3c854ae3718617418110ffd98c276d91',// 必填，签名，见附录1
	    jsApiList: [
	        'onMenuShareTimeline',
	        'onMenuShareAppMessage',
	        'onMenuShareQQ',
	        'onMenuShareWeibo'
	    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	wx.ready(function(){
	    // 分享到朋友圈
	    wx.onMenuShareTimeline(wx.yunapp);
	    // 分享给朋友
	    wx.onMenuShareAppMessage(wx.yunapp);
	    // 分享到QQ
	    wx.onMenuShareQQ(wx.yunapp);
	    // 分享到微博
	    wx.onMenuShareWeibo(wx.yunapp);
	});
	</script>
	<!-- 统计代码 -->
	<script src="about_images/z_stat.php" language="JavaScript"></script>
	<script src="about_images/core.php" charset="utf-8" type="text/javascript"></script>
	<a href="http://www.cnzz.com/stat/website.php?web_id=1000303454" target="_blank" title="站长统计">站长统计</a>
</div>
</body></html>