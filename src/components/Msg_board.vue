<template>
    <div>
        <h3>这是留言板</h3>
        <input type="text" v-model="newMsg">
        <input type="button" value="发表留言" @click="addMsg">
        <ul>
            <li v-for="(msg,index) in msgs" :key="index" v-show="showMsg">
                <span v-text="msg"></span>
                <a href="javascript:void 0" @click="delMsg(index)">删除</a>
            </li>
        </ul>
        <span v-show="isShow">留言总数量：{{msgs.length}}条</span><br>
        <input type="button" value="删除所有留言" @click="clearMsg" v-show="showButton">
        <input type="button" value="隐藏/显示所有留言" @click="isMsg">
    </div>
</template>

<script>
export default {
    name: "Msg_board",
    data:function () {
        return {
            // msgs:['你好','谢谢','不客气'],
            msgs: localStorage.msgs ? JSON.parse(localStorage.msgs) : [],
            newMsg:'',
            isShow:true,
            showMsg:true,
            showButton:true,
        }
    },
    mounted:function(){
        this.isMsgNull()
    },
    methods:{
        // 删除某条留言
        delMsg(index) {
            this.msgs.splice(index,1);
            localStorage.msgs = JSON.stringify(this.msgs);
            this.isMsgNull();
        },
        // 添加新留言
        addMsg() {
            let msg = this.newMsg
            if(msg){
                this.msgs.unshift(this.newMsg);
                localStorage.msgs = JSON.stringify(this.msgs);
                this.newMsg = '';
            }
            this.isMsgNull()
        },
        // 清空留言板
        clearMsg() {
            this.msgs = [];
            this.isMsgNull();
        },
        // 隐藏/显示留言
        isMsg() {
            this.showMsg = !this.showMsg;
            this.isShow = !this.isShow;
        },
        // 判断是否显示删除所有留言按钮
        isMsgNull() {
            if (this.msgs.length === 0){
                this.showButton = false;
            }else{
                this.showButton = true;
            }
        }
    },
}
</script>

<style scoped>

</style>
