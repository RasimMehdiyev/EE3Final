<template>
    <section>
        <div @click="this.$router.push('/portal-gun-3')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div class="portal-main">
            <div class="portal-par">
                <p>
                    Oh no! That code is from the Citadel!!
                    <br>
                    <br>
                    We are completely lost, it could be any Rick from any reality, or even worst, 
                    ANY MORTY!!                    
                </p>
                <img class="portal-img" src="../assets/portalgun4.png" alt="">
                <p style="margin-top:40px;">
                    Hurry up agent! Keep solving the clues, we need to fix this as soon as possible!!
                </p>
            </div>

        </div>

    </section>
</template>
<style>
    #send-button{
        margin-top: 30px;
        width: 60px;
        height: 30px;
        display: flex;
        font-size: 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: #00FFE0;
        border: 1px solid #00FFE0;
    }
    #send-button:hover{
        transition: 0.5s;
        background-color: #00FFE0;
        color:black;
    }

    .code-input{
        margin-top: 30px;
        margin-bottom: 10px;
        width: 100px;
        height: 60px;
        background: none;
        text-align: center;
        border: 2px solid #00FFE0;
        font-size: 22px;
        color: white;
    }
    .code-input:focus{
        outline: none;
    }
    .code-input::placeholder{
        color: white;
    }

    .portal-main{
        margin-top:60px;
        margin-bottom:120px;
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
    }
    .portal-par{
        margin-top: 0px;
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