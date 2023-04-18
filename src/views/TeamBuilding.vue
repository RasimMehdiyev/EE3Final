<template>
    <!-- 4 teammates: 1st picture on the left, description on the right, then change the order of picture and text, and then change it again and change it again for each team mate
    -->
    <section class="team-building">
        <p style="margin-top: 30px;">ENTER TEAM NAME:</p>
        <input id="team" class="team-building_input" placeholder="TEAM NAME" type="text">
        <div class="team-building__container">
            <div class="member_box">
                <p style="" class="member_name">CAPTAIN</p>
                <input id="member-1" type="text" placeholder="MEMBER NAME">
                <div class="team-building__container__box">
                    <img style="width: 73.5px; height: 132px;" src="../assets/image19.png" alt="">
                    <p style="text-align:left" class="team-building__container__box__p">
                        Great leader, always thinks carefully 
                        before taking a decision, ruthless, 
                        has a great trust in the team                    
                    </p>
                </div>
            </div>
            <div class="member_box">
                <p class="member_name">GALACTIC AGENT</p>
                <input id="member-2" type="text" placeholder="MEMBER NAME">
                <div class="team-building__container__box">
                    <p style="text-align:right" class="team-building__container__box__p">
                        This agent is the brain behind the operation,
                        great at solving tough clues, the team always
                        relays on him for solving the hard enigmas                     </p>
                    <img style="width: 73.5px; height: 132px;" src="../assets/image17.png" alt="">
                </div>
            </div>
            <div class="member_box">
                <p class="member_name">EARTH SPY</p>
                <input id="member-3" type="text" placeholder="MEMBER NAME">
                <div class="team-building__container__box">
                    <img style="width: 73.5px; height: 132px;" src="../assets/earthspy.png" alt="">
                    <p style="text-align:left" class="team-building__container__box__p">
                        She used to be infiltrated in Rick Sánchez’s circle to 
                        gather information; didn’t hesitate to betray everyone.
                        Merciless, the whole team is scared of her
                    </p>
                </div>
            </div>
            <div class="member_box">
                <p class="member_name">SPECIALIST</p>
                <input id="member-4" type="text" placeholder="MEMBER NAME">
                <div class="team-building__container__box">
                    <p style="text-align:right" class="team-building__container__box__p">
                        Bravest member in the team. Used to be a hustler before being recruited.
                        Rumors say he has killed over 8400 enemies
                    </p>
                    <img style="width: 130px; height: 132px;" src="../assets/specialist.png" alt="">
                </div>
            </div>
            <div>
                <button @click="setupTeam();this.$router.push('/')">
                    CREATE TEAM
                </button>
            </div>
        </div>
    </section>
</template>

<style>

.team-building{
    max-width:390px;
}

button{
    width:100px;
    height: 40px;
    background: black;
    color: #00FFE0;
    font-size: 12px;
    border: 1px solid #00FFE0;
    border-radius: 0px;
}
</style>

<script>
export default 
{
    name: "TeamBuilding",
    data(){
        return{
            team_name: "",
            member1: "",
            member2: "",
            member3: "",
            member4: ""
        }
    },
    methods: {
        setupTeam(){
            this.team_name = document.getElementById("team").value;
            this.member1 = document.getElementById("member-1").value;
            this.member2 = document.getElementById("member-2").value;
            this.member3 = document.getElementById("member-3").value;
            this.member4 = document.getElementById("member-4").value;
            const formdata = new FormData();
            formdata.append("team", this.team_name);
            formdata.append("members", [this.member1, this.member2, this.member3, this.member4])
            fetch("https://ee3project.herokuapp.com/teams/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.team_name,
                    points:0,
                    members:[ 
                    {"name":this.member1},
                    {"name":this.member2},
                    {"name":this.member3},
                    {"name":this.member4},]
                })
            })
        }
    }  
}
</script>