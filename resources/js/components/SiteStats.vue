<template>
    <h2 class="font-normal">Site Stats</h2>

    <ul>
        <li><strong>Total Series:</strong> {{ series }}</li>
        <li><strong>Total Lessons:</strong> {{ lessons }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            series: 0,
            lessons: 0,
        };
    },

    created() {
        axios
            .get("https://laracasts.test/api/stats")
            .then((response) => response.data)
            .then((data) => {
                this.series = data.series;
                this.lessons = data.lessons;
            })
            .catch(error => console.log(error));
    },
};
</script>
