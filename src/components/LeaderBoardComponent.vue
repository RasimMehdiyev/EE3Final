<template>
    <section class="leaderboard">
        
        <table>
            <tr>
              <th>Ranking</th>
              <th>Team</th>
              <th>Time</th>
              <th>Points</th>
            </tr>
            <tr v-for="team in this.teams" :key="team.id">
                <td>{{teams.id}}</td>
                <td>{{teams.team_name}}</td>
                <td>{{teams.time}}</td>
                <td>{{teams.points}}</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table> 
    </section>
</template>

<script>
export default{
    name: 'LeaderBoard',
    data(){
        return{
            teams: []
        }
    },
    created(){
        fetch('https://ee3.herokuapp.com/leaderboard/')
            .then(response => response.json())
            .then(data => {
                this.teams = data
            })
    }
}
</script>