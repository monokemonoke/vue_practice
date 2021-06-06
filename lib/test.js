const Counter = {
    data(){
        return{
            counter:0,
            Iscount:true,
            StopButtonText:'STOP'
        }
    },
    mounted(){
        setInterval(()=>{
            if (this.Iscount==true){
                this.counter++
            }
        },1000)
    },
    methods:{
        stop:function(){
            if(this.Iscount == false){
                this.Iscount = true
                this.StopButtonText='STOP'
            }else{
                this.Iscount = false
                this.StopButtonText='COUNT'
            }
        }
    }
}
Vue.createApp(Counter).mount("#app1")

const AttributeBinding = {
    data(){
        return{
            message:'あなたは' + new Date().toLocaleString() + "にマウスをこのテキストの上に置いています。"
        }
    }
}
Vue.createApp(AttributeBinding).mount("#app2")

const CheckKaibun = {
    data(){
        return{
            message1:'こんにちはVuejs',
            message2:'れいとうといれ'
        }
    },
    methods:{
        reverser:function(text){
            return text.split('').reverse().join('')
        },
        MakeReverse:function(){
            this.message1 = this.reverser(this.message1)
            this.message2 = this.reverser(this.message2)
        }
    }
}
Vue.createApp(CheckKaibun).mount("#app3")