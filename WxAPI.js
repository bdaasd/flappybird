export class WxAPI{
  constructor(){}
  //播放背景音乐
  playMusic(){
    const music = wx.createInnerAudioContext();
    music.src = './audio/bgm.mp3';
    music.loop = true;//循环播放
    //music.autoplay = true;//自动播放
    music.play();
  }
  //小鸟撞击的音效
  boom(){
    const music = wx.createInnerAudioContext();
    music.src = './audio/boom.mp3';
    music.play();
  }
  //获取手机的基本信息
  getSysInfo(){
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
      },
    })
  }

  //获取登录用户的信息
  getUserInfo(callback){
    if(this.userInfo){
      callback();
      return;
    }
    //创建用户信息按钮
    let button = wx.createUserInfoButton({
      type:"text",
      text:"点击授权",
      style:{
        left:100,
        top:200,
        width:150,
        height:50,
        backgroundColor:"#aabbcd",
        borderColor:"#403623",
        borderWidth:5,
        borderRadius:10,
        color:"black",
        textAlign:"center",
        lineHeight:40,
        fontSize:16
      }
    })
    //监听用户点击按钮
    button.onTap(res=>{
      console.log(res);
      if(res.userInfo){
        //有userInfo 说明已经授权过了
        this.userInfo = res.userInfo;
        button.destroy();
        callback();
      }
    })
}
//发送http请求
sendHttp(){
   wx.request({
     url: 'http://localhost:4000/sendScore?score='+120,
     success(res){
       console.log(res);
     }
   })
}

//socket连接
  socket(){
  //连接服务器
  wx.connectSocket({
    url: 'ws://localhost:4000',
    success(res){
      console.log('连接成功');
    },
    fail(err){
      console.log('连接失败');
    }
  })
  //连接成功后
  wx.onSocketOpen(function(){
    wx.sendSocketMessage({
      data: '微信小游戏发送给服务器的数据', 
    })
  })
  //接受服务器发送的数据
  wx.onSocketMessage(function(res){
    console.log(res);
  })
  }
  //下载文件
  /* downLoad() {
    wx.downloadFile({
      url:"https://new.qq.com/omn/20191217/20191217A0BYVZ00.html#p=1",
      success(res){
        let path = res.tempFilePath;//获取临时地址
        //将下载的文件保存到手机相册中
        wx.saveImageToPhotosAlbum({
          filePath: 'path',
          success(r){
            console.log(r);
          }
        })
      }
    })
  } */
}

