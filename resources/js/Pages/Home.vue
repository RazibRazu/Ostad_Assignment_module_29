<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue"; // Adjust path if needed
import { Head } from "@inertiajs/vue3";

// Define the layout for this page
defineOptions({ layout: GuestLayout });

// Define props if you pass any from the controller
// defineProps({
//     canLogin: Boolean,
//     canRegister: Boolean,
//     // other props like posts...
// });
</script>

<template>
    <Head title="Home" />
    <!-- Sets the browser tab title -->

    <!-- You can optionally define a header slot content -->
    <!-- <template #header>
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Welcome
        </h2>
    </template> -->

    <!-- Main content of the Home page -->
    <div>
        <h1 class="text-2xl font-bold mb-4">Welcome to the Blog!</h1>
        <p>
            Browse public posts below or create an account to start sharing your
            thoughts.
        </p>
        <!-- You would typically list public posts here -->
        <div class="mt-6">
            <!-- Placeholder for post list -->
            <p class="text-gray-500">Public posts will appear here...</p>
        </div>
    </div>
</template>

<style scoped>
/* Add page-specific styles if needed */
</style>
