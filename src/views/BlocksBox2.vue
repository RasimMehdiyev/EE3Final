<template>
    <section>
        <div @click="this.$router.push('/blocks')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div class="portal-main">
            <div class="portal-par">
                <p>
                    Have you look under the table?
                    <br>      
                    Normally in every movie there is something under the table...
                    <br>
                    But I don’t know man, you are the one in the room! 
                    Do you expect us to solve every puzzle for you?!  
                </p>
            </div>
            <img class="portal-img" src="../assets/blockshint.png" alt="">
            <div class="portal-button">
                <button @click="this.$router.push('/blocks-3')">
                    We have found them
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
        margin-top: 30px;
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