var index={
	// 第一个参数是x轴坐标,第二个参数是后台传过来的数据是个数组
	one:function(a,b){
		var myechartone=echarts.init(document.getElementById('box1'));
		var optionone = {
			xAxis: {
				type: 'category',
				data: a
			},
			yAxis: {
				type: 'value'
			},
			series: [{
				data: b,
				type: 'line'
			}]
		};
		myechartone.setOption(optionone);	
	},
	two:function(a,b){
		var myecharttwo=echarts.init(document.getElementById('box2'));
		var optiontwo = {
			tooltip : {
				trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    	left: '3%',
    	right: '4%',
    	bottom: '3%',
    	containLabel: true
    },
    xAxis : [
    {
    	type : 'category',
    	data : a,
    	axisTick: {
    		alignWithLabel: true
    	}
    }
    ],
    yAxis : [
    {
    	type : 'value'
    }
    ],
    series : [
    {
    	name:'直接访问',
    	type:'bar',
    	barWidth: '60%',
    	data:b
    }
    ]
};
myecharttwo.setOption(optiontwo);
},
// 传入echarts外的div的id
mousedownevent:function(id){
	$(document).off('mousedown',id).on('mousedown',id,function(ev){
		var ev = ev||event; 
		var isup=true;
		var disX = ev.clientX-this.offsetLeft;  
		var disY = ev.clientY-this.offsetTop;  
		$(document).on('mousemove',function(ev){
			var ev = ev||event;  
			if(isup){
				var distanX=ev.clientX-disX;
				var distanY=ev.clientY-disY;
				distanY<-55 ?distanY=-55:distanY;
				distanY>150?distanY=150:distanY;
				distanX<-4?distanX=-4:distanX;
				distanX>980?distanX=980:distanX;
				$(id).css({
					"left":distanX+"px",
					"top":distanY+"px"
				})
			}
		})
		$(document).on('mouseup',function(ev){
			isup=false;
		})
		return false;
	})
},



};

$(function(){
	index.one(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[10, 52, 200, 334, 390, 330, 220]);
	index.two(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[10, 52, 200, 334, 390, 330, 220]);
	$(document).off('click','.numberone').on('click','.numberone',function(){
		index.one(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[10, 52, 200, 334, 390, 330, 220]);
		index.two(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[10, 52, 200, 334, 390, 330, 220]);
	})
	$(document).off('click','.numbertwo').on('click','.numbertwo',function(){
		index.one(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[10, 88, 208, 14, 373, 330, 220]);
		index.two(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[10, 88, 208, 14, 373, 330, 220]);
	})
	$(document).off('click','.numberthree').on('click','.numberthree',function(){
		index.one(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[100, 52, 300, 334, 390, 330, 20]);
		index.two(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[100, 52, 300, 334, 390, 330, 20]);
	})
	index.mousedownevent('#box1');
	index.mousedownevent('#box2');
})