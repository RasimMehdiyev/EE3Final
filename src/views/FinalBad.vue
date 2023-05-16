<template>
    <section class="final-good">
        <div class="first-sub">
            <img src="../assets/youlost.png" alt="">
            <div class="first-sub-div">
                <p> 
                    The Earth is destroyed, you couldn’t make it
                </p>
                <div class="first-div-div">
                    <p>
                        Good luck next time
                    </p>
                    <img src="../assets/image_40.png" alt="">
                </div>
            </div>
        </div>
        <div class="second-sub">
            <img src="../assets/partycontinue.png" alt="">
            <img src="../assets/image_39.png" alt="">
            <p>
                Don’t miss our next escape room, 
                <br>
                we’ll try to pay justice and defeat our new enemy <b style="color:red;">Evil Morty</b>
            </p>
        </div>
    </section>
</template>

<style>
.first-div-div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.first-div-div p{
    color:white!important;
    text-align: left;
    margin-left: 10px;
}

.final-good{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 0 20px;
}
.first-sub-div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.first-sub-div p{
    color:white!important;
    text-align: left;
    margin-left: 10px;
    font-size: 24px;
    margin-top: 20px;
}
.first-sub{
    margin-top: 40px;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-color: red;
    border-style: solid;
    border-width: 1px;
}
.first-sub img{
    width: 50%;
    height: 50%;
    margin-top: 20px;
}
.second-sub{
    margin-top: 30px;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FCB500;
}
.second-sub img{
    margin-top: 15px;
    width: 80%;
    height: 50%;
}
.second-sub p{
    color: white;
    text-align: left;
    margin-left: 35px;
    margin-top: 15px;
    margin-bottom: 20px;
}
</style>