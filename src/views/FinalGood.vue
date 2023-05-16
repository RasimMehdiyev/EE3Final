<template>
    <section class="final-good">
        <div class="first-sub">
            <img src="../assets/youmadeit.png">
            <div class="first-sub-div">
                <p> Congratulations! You save the world.
                    <br>
                    Turns out the Galactic Federation is not so lame after all,
                    well done
                </p>
                <div class="">
                    <img src="../assets/image_27.png">
                </div>
            </div>
        </div>
        <div class="second-sub">
            <img src="../assets/partycontinue.png">
            <img src="../assets/image_39.png">
            <p>
                Don’t miss our next escape room, 
                <br>
                we’ll try to pay justice and defeat our new enemy <b style="color:red;">Evil Morty</b>
            </p>
        </div>
    </section>
</template>

<style>
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
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.first-sub-div p{
    color:black!important;
    text-align: left;
    margin-left: 10px;

}
.first-sub{
    margin-top: 40px;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
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