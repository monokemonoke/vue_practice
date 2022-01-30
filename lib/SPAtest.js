const TODOApp = {
    data:function(){
        return{
            message:'Hello',
            TODOs = [
                {
                    title:"初めてのタスク",
                    date:'2021/6/7 12:40:00',
                    memo:"ここに詳細情報を記入"
                }
            ],
        }
    }
}

Vue.createApp(TODOApp).mount("#app")