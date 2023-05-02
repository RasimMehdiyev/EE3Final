<template>
    <section>
        <div @click="this.$router.push('/hints')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div class="portal-main">
            <div class="portal-par">
                <p>
                    Now put every block in its respective shape. And hurry up! Clock’s ticking!  
                </p>
            </div>
            <img class="portal-img" src="../assets/blocks-pic2.png" alt="">
            <div class="portal-button">
                <button @click="this.$router.push('/blocks-4')">
                    We are in trouble!
                </button>
            </div>
            <!-- <div @click="this.$router.push('/blocks-2')" class="help-button">
                <button>
                    More help
                </button>
                <p>Asking for help will deduct <span style="text-shadow: 0 0 5px #FFBBFF;color:#FFBBFF">2 minutes</span> from the remaining <span style="text-shadow: 0 0 5px #FFBBFF;color:#FFBBFF">time</span></p>
            </div> -->
        </div>

    </section>
</template>
<style>
    .portal-main{
        margin-top:50px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .portal-img{
        margin-top: 40px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .portal-par{
        width: 279px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
    }
    .portal-par p{
        color: white!important;
    }
    .portal-button{
        margin-top: 30px;
        width: 279px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button{
        width:133px;
        height: 40px;
        background: #385682;
        color: #C7DDFF;
        border: 1px solid #C7DDFF;
        border-radius: 0px;
    }
    .help-button button{
        margin-top: 30px;
        width: 75px;
        background-color: black;
        color: #00FFE0;
        border: 1px solid #00FFE0;
    }
    .help-button p{
        margin-top: 10px;
        font-size: 10px;
        color: white!important;
    }
</style>