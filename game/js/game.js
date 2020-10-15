function  game(startBtn) {
    this.startBtn=document.querySelector(startBtn);
    var seed="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.seedArr=seed.split("");
    this.currentLetter=[];
    this.seedArr=["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2217215217,819342428&fm=26&gp=0.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602770322641&di=c0670518b3f8760d68eb4f7a47222f51&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F330ca6659234a2ad0d0f7b1ad9385fc01c0ddf0915fda-TEq3mV_fw658","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602770322640&di=5d09dea65155a30847ff74352053b050&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7fbbd45610b1f9c397f5837b835407bafee6c67b37c13-CF6fdn_fw658","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602770322640&di=993a6ad4913e453610b4e32289fc6a4c&imgtype=0&src=http%3A%2F%2Fimgsa.baidu.com%2Fexp%2Fpic%2Fitem%2Fb853d6fcc3cec3fd21835c0cd488d43f869427cf.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602770322640&di=3ddd5dbeecdc36772e7685069206a140&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F956ff851210cf38912ca0b1531b6b934b01fa910211b1-Pwv5Mx_fw658","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602770322639&di=1f88241212ccbe99a42b553cfc1c4c08&imgtype=0&src=http%3A%2F%2Fimages.17173.com%2F2012%2Fnews%2F2012%2F05%2F28%2F11_05280936_01s.jpg"]
    this.progressBar=document.querySelector(".progress_bar");


    this.load(this.seedArr);



}
game.prototype={

    load:function (imgarr,callback) {
        var that=this;
        var num=0;
        for(var i=0;i<imgarr.length;i++){
            var im=new Image()
            im.onload=function () {
                num++;
                that.progressBar.style.width=num/imgarr.length*100+"%"
                if(num==imgarr.length){
                    that.start();
                    that.progressBar.parentElement.style.display="none"
                }
            }
            //im.src="img/A_Z/"+imgarr[i]+".png";
            im.src=imgarr[i];
        }
    },

    start:function () {

        this.startBtn.parentElement.style.opacity=1;
        var that=this;
        this.startBtn.onclick=function () {
            that.startBtn.parentElement.style.opacity=0;
            that.createLetter();

        }
    },
    getRand:function (num) {
        for(var i=0;i<num;i++) {
           this.currentLetter.push(this.seedArr[Math.floor(Math.random() * this.seedArr.length)]);
        }
    },
    createLetter:function () {
        this.getRand(5);

        for(var i=0;i<this.currentLetter.length;i++){
            var img=document.createElement("img");
            img.style.position="absolute";
            img.style.left=(document.documentElement.clientWidth-100)*Math.random()+"px";
            img.style.top=100*Math.random()+"px";
            img.src="img/A_Z/"+this.currentLetter[i]+".png";


            document.body.appendChild(img);

        }

    }
    
}