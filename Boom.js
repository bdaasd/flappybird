export class Boom {
  constructor() { }
  //播放背景音乐
  playBoomMusic() {
    const Bmusic = wx.createInnerAudioContext();
    Bmusic.src = './audio/boom.mp3';
    //music.autoplay = true;//自动播放
    Bmusic.play();
  }
}