window.onload=function () {

 var smallList=document.querySelectorAll(".small li");

 var middleImg=document.querySelector(".middle img");
 var middleBox=document.querySelector(".middle");
 var bigImg=document.querySelector(".big img");
 var bigBox=document.querySelector(".big");
 var mask=document.querySelector(".mask");
 var copy=document.querySelector(".copy");

 
 // 通过小图 关联中图和大图
 for(var i=0;i<smallList.length;i++){

     smallList[i].index=i;
     smallList[i].onmouseover=function () {
         for(var j=0;j<smallList.length;j++){
             smallList[j].style.border="2px solid #000";
         }
         this.style.border="2px solid red"

         middleImg.src="imgs/middel"+(this.index+1)+".jpg";
         bigImg.src="imgs/big"+(this.index+1)+".jpg";
     }
 }
 
 // 通过中图控制大图窗口显示和隐藏

    copy.onmouseover=function () {
        bigBox.style.display="block";
        mask.style.display="block";
    }
    copy.onmouseout=function () {
        bigBox.style.display="none";
        mask.style.display="none";

    }




    //  1. 遮罩移动起来

    copy.onmousemove=function (e) {
        var ox=e.offsetX;
        var oy=e.offsetY;

        var x=ox-mask.offsetWidth/2;
        var y=oy-mask.offsetHeight/2;

        if(x<0){
            x=0;
        }
        if(y<0){
            y=0;
        }
        if(x>copy.offsetWidth-mask.offsetWidth){
            x=copy.offsetWidth-mask.offsetWidth
        }
        if(y>copy.offsetHeight-mask.offsetHeight){
            y=copy.offsetHeight-mask.offsetHeight
        }
        mask.style.left=x+"px";
        mask.style.top=y+"px";

        bigImg.style.left=-2*x+"px"
        bigImg.style.top=-2*y+"px"
    }

    // 事件流



}