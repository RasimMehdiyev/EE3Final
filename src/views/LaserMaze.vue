<template>
    <section>
        <div @click="this.$router.push('/hints')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div class="div-img">
            <img src="../assets/image_8.png" alt="">
        </div>
        <div class="div-intro-text-1">
            <p>
                Ok agent, we need to deactivate the <span class="color-torqoise">security system</span> to start investigating the deactivation code for the bomb, try to find something similar to a <span class="color-torqoise">laser maze</span>. 
                <br>
                Once you solve the maze we should be able to access to Sánchez’s communications.
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'IntoTwo',
        data() {

        },

        created() {
        },

        methods: {
            forward(){
                this.$router.push('/')
            },
            back(){
                this.$router.push('/intro')
            }
        },
    };
</script>


<style>
.title-app{
    font-family: "Get Schwifty" , sans-serif;
    font-size: 36px;
    color: #1B244C!important;
    -webkit-text-stroke: 1px #F9FF69!important;
}
.div-img{
margin-top: 60px;
}
.div-img img{
    width:390px;
    height:100%;
}
.div-intro-text-1{
    margin-top:30px;
    margin-left: 40px;
    margin-right: 20px;
}
.div-intro-text-1 p{
    color: white!important;
    text-align: left;
}
.buttons-flex button{
    width: 100px;
    height: 40px;
    background-color: black;
    font-family: "Get Schwifty", sans-serif;
    -webkit-text-stroke: #F9FF69 0.5px;
    border-radius: 10px;
    border: none;
    color: #1B244C;
    font-size: 18px;
    font-weight: 500;
}

.buttons-flex{
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 60px;
}
.color-torqoise{
    color: #00FFE0!important;
}
</style>