<template>
    <div>
        <div v-for="(event, index) in events" :key="index">
            <h2>{{ event.name }}</h2>
            <p><strong>Date:</strong> {{ event.date }}</p>
            <p><strong>Location:</strong> {{ event.location }}</p>
            <p><strong>Description:</strong> {{ event.description }}</p>
            <p><strong>Tags:</strong>
                <span v-for="(tag, tagIndex) in event.tags" :key="tagIndex">
                    {{ tag.name }}
                    <span v-if="tagIndex < event.tags.length - 1">, </span>
                </span>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    props: ['events'], // Definisco la prop events
    mounted() {
    }
};
</script>
