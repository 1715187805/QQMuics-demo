<template>
  <div id="app">
      <h1 style="text-align: center;">私人音乐盒</h1>
      <div class="search">
          <input type="text" v-model="value" class="input" placeholder="搜索歌曲">
          <i @click="click" class="ico"></i>
          <p style="color: #8B4513;font-size: 12px;text-align: center;	">请以此格式（歌名 - 歌手）输入</p>
      </div>

  </div>
</template>

<script>
    import {getMusic} from 'api/index'
    import   'assets/js/player'
    export default {
        name: "Cloud",
        data: () => {
            return {
                value:'',
                mid:'',//歌曲id
                player:null,//播放器
                title:'',//名字
                singer:'',//歌手
                isonly:3, //是否可播放 （QQ限制）
            }
        },
        mounted() {
            this.PlayerInit();
            // 监听事件
            window.setInterval(()=>{
                this.player.on("play",()=>{
                    console.log(1);
                })
            },5000)
        },
        methods: {
            async getdata(k){
                let res = await getMusic(k);

                if (res){
                    let arr=res.data.song.list;
                    console.log(arr);
                    this. title=arr[0].title;
                    this. singer=arr[0].singer[0].name;
                    this. isonly= arr[0].isonly;
                    let string = arr[0].url;

                    this.mid= string.split('/')[3].split('.')[0];


                    if (this.isonly === 1){
                        window.alert('此曲仅vip播放')
                    } else{
                        this.play(this.mid);
                    }




                }

            },
            click(){
                //this.play('204824131');
                this.getdata(this.value);
            },
            PlayerInit(){
                this.player = new Player({});
                // 设置 target=music 时会拉起QQ音乐客户端进行播放
            },
            play(id){
                this.player.play(id,{ target: "auto" });
            }

        },
    }
</script>

<style>
    body{
        background-color: lightseagreen;
    }
    .search{
        width:580px;
        height:50px;
        margin: 50px auto;
        vertical-align: middle;
        background-color: #fff;
        border-radius:50px ;
    }
    .input{
        width: 500px;
        height:45px;
        margin-left: 20px;
        margin-top:2px;
        border: none;
        outline: none;
        overflow: visible;
        text-shadow: none;
        color:	#FF7F50;
        font-weight: bold;
    }
    .ico{
        display: inline-block;
        margin-left: 10px;
        width:30px;
        height:30px;
        vertical-align: middle;
        background: url("assets/img/search1.png") no-repeat center;
        background-size : cover;
    }
    .ico:hover{
        background-image: url("assets/img/search2.png")
    }

</style>
