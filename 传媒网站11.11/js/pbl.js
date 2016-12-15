// 瀑布流开始
$(document).ready(function() {
	$(window).on('load', function() {
		event.preventDefault();
		imgLocation();
		//滚动加载
		// 模拟网络数据开始
		var dataImg ={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]};
		// 模拟网络数据结束
		var more = document.getElementById("moreimg");
		more.onclick=function(){
			// 判断满足条件时加载
			if (scrollside()) {
				$.each(dataImg.data, function(index,val) {
					// 动态创建img
					var box = $("<div>").addClass('box').appendTo('#main');//创建的添加到#main中
					var content = $("<div>").addClass('content').appendTo(box);
					// console.log("images/" + $(val).attr("src"));
					$("<img>").attr("src","images/" + $(val).attr("src")).appendTo(content);
				});
				imgLocation();//将生成的代码也添加到瀑布流中
			}
		};
	});
});

//滚动加载
function scrollside() {
	var box=$(".box");
	var lastboxheight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentheight = $(document).width();
	var scrollheight = $(window).scrollTop();
	return (lastboxheight<scrollheight+documentheight)?true:false;
				console.log($(".box").length);
}

function imgLocation() {
	var box =  $(".box");
	var boxwidth = box.eq(0).width();
	var num = Math.floor($(window).width()/boxwidth);
	var boxArr = [];
	box.each(function(index, el) {
		// console.log(index+"--"+el);
		var boxheight = box.eq(index).height();
		if (index < num) {
			boxArr[index] = boxheight;
			// console.log(boxheight);
		} else {
			var minboxheight = Math.min.apply(null,boxArr);
			// console.log(minboxheight);
			var minboxIndex = $.inArray(minboxheight,boxArr);
			// console.log(minboxIndex);
			// console.log(el);
			$(el).css({
				"position":"absolute",
				"top":minboxheight,
				"left":box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex]+=box.eq(index).height();
			$("#main").height(minboxheight + 300)
		}
	});
	$("#main").width(num*(boxwidth+22));
}

// 瀑布流结束