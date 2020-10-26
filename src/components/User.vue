<template>
    <div>
        <h3>用户页面</h3>
        <table border="2">
            <tr>
                <td>id</td>
                <td>username</td>
                <td>bir</td>
                <td>content</td>
                <td>option</td>
            </tr>
            <tr v-for="(user,index) in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.bir }}</td>
                <td>{{ user.content }}</td>
                <td><a href="javascript:void 0" @click="delUser(index)">删除</a>|
                    <router-link :to="`/user_detail/${user.id}/${user.username}/${user.bir}/${user.content}`">详细信息
                    </router-link>
                </td>
            </tr>
        </table>
        <hr>
        用户名：<input type="text" v-model="username"><br>
        生日：<input type="text" v-model="bir"><br>
        个人信息：<input type="text" v-model="content">
        <input type="button" value="添加用户" @click="addUser">
<!--        <input type="button" value="test" @click="test">-->
    </div>
</template>

<script>
export default {
    name: "User",
    data: function () {
        return {
            users: [
                {'id': 1, 'username': '小黑', 'bir': '2000-1-1', 'content': '黑'},
                {'id': 2, 'username': '小白', 'bir': '3000-1-1', 'content': '白'},
                {'id': 3, 'username': '小红', 'bir': '4000-1-1', 'content': '红'},
                {'id': 4, 'username': '小绿', 'bir': '5000-1-1', 'content': '绿'},
            ],
            user_id: 5,
            username: '',
            bir: '',
            content: '',
            newUser: {},
        }
    },
    methods: {
        addUser() {
            let len = this.users.length;
            let key = ['id', 'username', 'bir', 'content'];
            let value = [this.users[len - 1] ? this.users[len - 1].id + 1 : this.user_id, this.username, this.bir, this.content]
            for (let i = 0; i < 4; i++) {
                this.$set(this.newUser, key[i], value[i])
            }
            if (value[1]) {
                this.user_id = value[0] + 1;
                this.users.push(this.newUser);
                this.newUser = {};
                this.username = '';
                this.bir = '';
                this.content = '';
            }
        },
        delUser(index) {
            this.users.splice(index, 1)
        },
        test() {
            console.log(this.users)
            if (1) {
                let a = this.users[this.users.length - 1] ? this.users[this.users.length - 1].id + 1 : 1;
                console.log(a)
            }
            console.log(this.users[this.users.length - 1])
        },
    },
}
</script>

<style scoped>

</style>
