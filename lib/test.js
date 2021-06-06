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