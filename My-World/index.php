<html>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------------->
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	
	<title>天津微营销</title>

	<script type="text/javascript">
	if(/Android (\d+\.\d+)/.test(navigator.userAgent)){ // regular expression("regex"): /Android (\d+\.\d+)/ means the version of android
		var version = parseFloat(RegExp.$1);// RegExp is JS built-in object, RegExp.$1 is its attribute
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

	<link rel="stylesheet" type="text/css" href="images/global.css">
	<link rel="stylesheet" type="text/css" href="images/idangerous.css">
    
    <!--倒入需要引用的JS类库 -->  
	<script type="text/javascript" src="images/jquery-2.js"></script>
	<script type="text/javascript" src="images/imagesloaded.js"></script>
	<script type="text/javascript" src="images/isotope.js"></script>
	<script type="text/javascript" src="images/idangerous.js"></script>
	<script type="text/javascript" src="images/iscroll.js"></script>

	<script type="text/javascript">
	// 文档加载完...
	$(function(){ // jQuery, means execute after the page is loaded
		// 常用变量
		var page = 1, init = false, $list = $(".case .list");
		// 瀑布流
		$list.isotope({// Dynamic layout library:isotope
			itemSelector: ".app",
			layoutMode: "masonry"
		});

		// 加载案例数据
		function initData(){
			// 标记常量
			init = true;
			// AJAX调用
			$.getJSON("images/alist.json",{p : page},function(data){
				// 没有数据
				if(!data) {
					init = true;
					return false;
				}

				//对象个数
				var len = data.length;
				var loadCount = 12;
				var i = loadCount*(page-1);							
				if(i>=len){
					init=true;
					return ;
				}
				
				// 拼合数据
				var html = [];
				for( ; i < len && i < loadCount*page ; i++ ){
					html.push('<div class="app">');
						html.push('<div class="image"><a href="' + data[i].link + '" target="_blank"><img width="290" src="' + data[i].image + '"></a></div>');
						html.push('<div class="info">');
							html.push('<p class="name">'+ data[i].name + '</p>');
							html.push('<p class="customer">'+ data[i].customer + '</p>');
							html.push('<p class="tag">标签：'+ data[i].tag + '</p>');
						html.push('</div>');
					html.push('</div>');
				};
				var eles = html.join("");
				// 加到HTML中
				var jqEles = $(eles);
				$list.append(jqEles);
				// 图片延迟
				$list.imagesLoaded(function(){
					// 列表追加并重绘
					$list.isotope("appended", jqEles).isotope("layout");
					// 操作完成
					init = false;
					page++;
				});

			});
		}
        initData();
		
		// 窗口高度
		var winHeight = $(window).height();
		// 设置高度
		$(".home").css("height", winHeight - 100);

		// 导航、首页
		$(".nav a[nav=home]").click(function(){
			$("body,html").animate({
				scrollTop: 0
			},  400);
			return false;
		});

		// 导航、案例
		$(".nav a[nav=case]").click(function(){
			$("body,html").animate({ // animate(): execute the custom animation of the CSS attribute set
				scrollTop: winHeight - 100
			},  400);
			return false;
		});

		// 滚动条监视
		$(window).bind("scroll",function(){
			// 居上高度
			var topHeight = $(window).scrollTop();
			// 文档高度
			var docHeight = $(document.body).height();
			// 加载更多
			if(docHeight > 1500 && docHeight - topHeight < 2000 && !init){
				// 加载数据
				initData();
			}
			// 当前导航菜单状态
			if(topHeight > winHeight / 2){
				$(".nav a").removeClass("c");
				$(".nav a[nav=case]").addClass("c");
			}else{
				$(".nav a").removeClass("c");
				$(".nav a[nav=home]").addClass("c");
			}

			// 返回顶部按钮是否显示
			if (topHeight > 100) {
				$(".gotop").addClass("gotop_on");
				$(".gotop").addClass("gotop_back");
			} else {
				$(".gotop").removeClass("gotop_back");
				$(".gotop").removeClass("gotop_on");
			}
		});

		// 返回顶部
		$("body").append('<!-- 置顶 --><div class="gotop"><div class="bttbg"></div></div>');
		$(".gotop").on("click", function() {
			$("body,html").animate({
				scrollTop: 0
			},  400);
			return false;
		});

		// 焦点列表
		var LunboAuto = '';
		if(LunboAuto){
			var mySwiper = new Swiper(".home .focus",{
	            pagination: ".home .focus .point",
	            paginationClickable: true,
	            autoplay: 3000
	        });
		}else{
			var iframeLoad = function(obj){
				var idx = obj?obj.activeIndex:0;
				var iframe = $(".swiper-wrapper .swiper-slide").eq(idx).find("iframe");
				if(!$(iframe).attr("src")){
					var _src = $(iframe).attr("_src");
					$(iframe).attr("src", _src);
				}
			}
			var mySwiper = new Swiper(".home .focus",{
	            pagination: ".home .focus .point",
	            paginationClickable: true,
	            onSlideChangeStart: function(obj){
	            	iframeLoad(obj);
	            }
	        });
	        iframeLoad(null);
		}
		

        // 直接进入案例页面
        var caseVal = window.location.href.indexOf("#case");
        if(caseVal != -1){
        	$("body,html").animate({
        		scrollTop: winHeight - 100
        	},  400);
        }
	});
	</script>
</head>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------------->
<body>
<!-- 首页 -->
<div style="height: 533px;" class="home">
	<!-- Logo -->
	<div class="logo">
		<a href="http://www.tjyswl.com/"><img src="images/logo.png"></a>
	</div>
	<!-- Focus -->
	<div class="focus">
		<div class="point">
			<span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
			<span class="swiper-pagination-switch "></span>
		</div>
		<div style="width: 2698px; height: 533px; transform: translate3d(0px, 0px, 0px); transition-duration: 0s;" class="swiper-wrapper">
			<div style="width: 1349px; height: 533px;" class="image swiper-slide swiper-slide-visible swiper-slide-active">
					<a class="fore" href="http://h5.yun-app.cn/xuhui/anbeier/" target="_blank" style="background-image:url(images/55c09ed6d02a5.gif);"></a>
					<div class="back"><img src="images/55c09ed6d0741.jpg"></div>
			</div>
			<div style="width: 1349px; height: 533px;" class="image swiper-slide">
					<a class="fore" href="http://h6.yun-app.cn/xuhui/hd20150728/" target="_blank" style="background-image:url(images/55c07e536c24e.png);"></a>
					<div class="back"><img src="images/55c07db7a5125.jpg"></div>
			</div>
		</div>
	</div>
</div>
<!-- 导航 -->
<div class="nav">
	<a nav="home" class="c" href="./"><b>首页</b><i>HOME</i></a>
	<a class="" nav="case" href="#case"><b>案例</b><i>CASE</i></a>
	<a nav="about" href="about.php"><b>关于</b><i>ABOUT</i></a>
	<a nav="service" href="service.php"><b>服务</b><i>SERVICE</i></a>
	<a nav="contact" href="contact.php"><b>联系</b><i>CONTACT</i></a>
</div>

<!-- 作品 -->
<div class="case">
	<div style="position: relative; height: 3166.67px;" class="list">

    </div>
</div>
<!-- 其他 -->
<div style="">
	<!-- 微信分享 -->
	<script type="text/javascript" src="images/jweixin-1.js"></script>
	<script type="text/javascript">
	wx.yunapp = {
	    title : '域尚未来 [ 响应式网站 + 微信营销 + 121分享家 ]',
	    desc : '赢在移动互联网时代，我们为您看到、想到、更做到！',
	    link : 'index.php',
	    imgUrl : 'images/wx.png'
	}
	wx.config({
	    debug: false, // 是否开启调试模式
	    appId: 'wx1e1cb265fa7b9c6a', // 必填，公众号的唯一标识
	    timestamp: 1438766504, // 必填，生成签名的时间戳
	    nonceStr: 'epiTGEWXYmMu4lzv', // 必填，生成签名的随机串
	    signature: 'dfc91d3265144a35aa9fe3c47da623479ea763be',// 必填，签名，见附录1
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
	<script src="images/z_stat.php" language="JavaScript"></script>
	<script src="images/core.php" charset="utf-8" type="text/javascript"></script>
	<a href="http://www.cnzz.com/stat/website.php?web_id=1000303454" target="_blank" title="站长统计">站长统计</a>
</div>
</body>
</html>