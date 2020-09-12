<template>
    <div class="container">
        <div class="row chat-container">
            <div class="user">
                <div class="column">
                    <div class="title">
                        <h6>Chat</h6>
                    </div>
                    <div class="list-chat row">
                        <img src="https://cdn.pixabay.com/photo/2020/03/28/15/20/cat-4977436__340.jpg" alt="">
                        <div class="column name">
                            <h6>Regina Putri</h6>
                            <p>Permisii, mau lewat</p>
                        </div>
                    </div>
                    <!-- <div class="user-chat">
                        <p>Belum ada chat</p>
                    </div> -->
                </div>
            </div>
            <div class="chat">
                <div class="column">
                    <div class="head row">
                        <img src="https://cdn.pixabay.com/photo/2020/03/28/15/20/cat-4977436__340.jpg" alt="">
                        <h6>Regina Putri</h6>
                    </div>
                    <div class="user-chat">
                        <input type="text" class="form-control" placeholder="Type message...">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Chat'
}
</script>

<style scoped>
.chat-container {
    padding: 0px 60px;
    margin-top: 50px;
    height: 510px;
}
.user {
    border: 1px solid #8E8E93;
    width: 260px;
    margin-right: 20px;
    border-radius: 5px;
}
.chat {
    border: 1px solid #8E8E93;
    width: 740px;
    border-radius: 5px;
}
.title {
    border-bottom: 1px solid #8E8E93;
    padding: 15px;
    height: 50px;
}
.head {
    border-bottom: 1px solid #8E8E93;
    height: 50px;
    padding: 8px;
    margin-left: 0px;
    width: 740px;
}
.head img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin: 0px 15px;
}
.head h6 {
    margin-top: 6px;
}
h6 {
    font-weight: bold;
}
.user-chat {
    height: 450px;
    text-align: center;
    padding-top: 380px;
}
.user-chat input {
    margin: 18px;
    width: 700px;
    font-size: 13px;
    border-radius: 15px;
}
.list-chat {
    padding:  15px 0px;
    margin-left: 0px;
    width: 260px;
}
.list-chat img {
    width: 35px;
    height: 35px;
    border-radius: 15px;
    margin: 0px 15px;
}
.list-chat h6 {
    margin: 0;
    font-size: 14px;
}
.name p {
    margin-top: 3px;
    font-size: 12px;
    color: #8E8E93;
}
</style>
