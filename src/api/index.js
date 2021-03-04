
import request from './request'

export const getMusic=(data)=>{
    /*
    * n=获取的数量
    * w=关键字
    * loginUin=登录的QQ
    * 其他未知
    * */
   // let url=`/api/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=44146598750317153&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=${data}&g_tk_new_20200303=111550632&g_tk=1503976883&loginUin=2198625521&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0`;
    let url=`/api/soso/fcgi-bin/client_search_cp?new_json=1&n=10&w=${data}&g_tk_new_20200303=111550632&g_tk=1503976883&loginUin=2198625521&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&platform=yqq.json&needNewCode=1`;


    return request(url)
}