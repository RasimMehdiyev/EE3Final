<template>
    <section>
        <div @click="this.$router.push('/portal-gun-2')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div class="portal-main">
            <div class="portal-par">
                <p>
                    Ok Agent, if what Rick Sánchez says is right hat code
                </p>
                <br>
                <br>
                <p>
                    We need to identify as soon as possible the owner of the gun. 
                    In every gun, once you open a portal and travel through it, 
                    you can see the code of the place where they are coming from.
                    Can you please tell us which code do you read in the screen? 
                </p>
                <img class="portal-img" src="../assets/Group_64.png" alt="">
                <input maxlength="4" class="code-input" type="text" placeholder="CODE">
                <button id="send-button">SEND</button>
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
        margin-top: 80px;
        width: 212px;
        height: 170px;
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