<template>
    <footer>
        <div class="pre-footer">
            <div class="pre-footer-item">
                <img src="../assets/image13.png" alt="">
                <p>Team</p>
            </div>
            <div class="pre-footer-item">
                <img src="../assets/image14.png" alt="">
                <p>Info</p>
            </div>
        </div>

        <div class="countdown-timer">
            <div class="progress-bar">
              <div class="progress-bar-inner" :style="{ width: progressBarWidth }"></div>
            </div>
            <div class="timer-label">Remaining time: {{ formattedTime }}</div>
        </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      durationInSeconds: 60 * 60,
      timeRemaining: 60 * 60,
      progressBarWidth: '100%',
    };
  },

  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
  },

  created() {
    this.startTimer();
  },

  methods: {
    startTimer() {
      const intervalId = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining--;
          this.progressBarWidth = `${(this.timeRemaining / this.durationInSeconds) * 100}%`;
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    },
  },
};
</script>