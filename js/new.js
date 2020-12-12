function bd_check(){
	if(document.form1.keywords.value==''){
		alert("请先输入搜索关键词");
		document.form1.keywords.focus();
		return false;
	}
	return true;
}
var picsArr=new Array();
picsArr[0]="images/slider01.jpg";
picsArr[1]="images/slider02.jpg";
picsArr[2]="images/slider03.jpg";
picsArr[3]="images/slider04.jpg";

var index=0;
var timer;
function showPic(){
	document.getElementById('pic').src=picsArr[index];
	if(index<picsArr.length-1){
		index++;
	}else{
		index=0;
	}
	timer=setTimeout("showPic()",2000);
}

function showPrepic(){
	if(index>0){
		index--;
	}
	else{
		index=4;
	}
	document.getElementById('pic').src=picsArr[index];
		timer=setTimeout("showPic()",2000);
}
		   
function showPre(){
	clearTimeout(timer);
	showPrepic();
}
		   
function showNext(){
	clearTimeout(timer);
	showPic()();
}
var ind =0;
function changeTitle(){
	if(ind%2==0){
		document.title="来一场说走就走的旅行";
	}else{
		document.title="可能这是一个匆忙但是美丽的旅行，不如这里存下这一个美丽的瞬间";
	}
	ind++;
	setTimeout("changeTitle()",3000)
}
function f1() {
	showPic();
	changeTitle();
}
