<template>
    <div class="rick-modal">
        <div class="rick-modal-left">
            <div class="arrow-big-left">
                <img src="../assets/arrow-big-left.png" alt="">
            </div>
            <p>
                Damn, you are good!
                Not better than me tho.
                Do not forget that there a hell of a job to do, before you
                can get out of here.
                Try not do die *BURP*
            </p>
            <img src="../assets/Explode.png" alt="">
        </div>
        <div class="rick-modal-right">
            <img src="../assets/rickmodal.png" alt="">
        </div>
    </div>
</template>
<style>
.rick-modal{
    background-color: aliceblue;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:0 30px 0 30px;
    border: #FFBBFF 4px solid;
}
.rick-modal p{
    color: black!important;
    font-size: 18px;
    text-align: left;
    margin-left: 70px;
    width: 50%;
}
.rick-modal-right img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.rick-modal-left img{
    width: 50%;
    height: 100%;
    object-fit: cover;
    align-items: left;
    margin-top: 20px;
}
.arrow-big-left{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.arrow-big-left p{
    color:#3399FF !important;
    font-size: 12px;
    width: 100%;
    text-align: unset !important;

}
.arrow-big-left img{
    width: 30%;
    margin-top: 30px;
    margin-right: 60px;
}
</style>