window.onload=function () {

 var smallList=document.querySelectorAll(".small li");

 var middleImg=document.querySelector(".middle img");
 var middleBox=document.querySelector(".middle");
 var bigImg=document.querySelector(".big img");
 var bigBox=document.querySelector(".big");

 
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


}















