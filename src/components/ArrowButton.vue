<template>
<div>
    <!-- Chatbot Icon -->
    <div class="chatbot-container">
        <img class="chatbot-image" :src="require('@/assets/icons/Arrow.jpg')" alt="Chatbot" @click="scrollToTop" />
    </div>
</div>
</template>

<script>
export default {
    name: "ArrowButton",
    methods: {
        scrollToTop() {
            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>

<style scoped>
/* Chatbot Icon */
.chatbot-container {
    position: fixed;
    bottom: 80px;
    right: 16px;
    z-index: 1000;
}

.chatbot-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.chatbot-image:hover {
    transform: scale(1.1);
}

/* Chat Header */
.chat-header {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
}

.chat-content button {
    align-self: flex-start;
    padding: 5px 10px;
    margin-top: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
}
</style>
