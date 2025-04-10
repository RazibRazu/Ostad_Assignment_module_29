<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { Search } from "lucide-vue-next"; // Import search icon
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import LoginModal from "@/Components/auth/LoginModal.vue"; // Import login modal component

import { useModalStore } from "@/stores/modal"; // Import modal store

const appName = import.meta.env.VITE_APP_NAME || "BlogApp"; // Get app name from .env or default
const searchInput = ref("");
const modalStore = useModalStore(); // Initialize modal store
import { Toaster } from "@/Components/ui/sonner";
import RegistrationModal from "@/Components/auth/RegistrationModal.vue";

// Function to handle search submission (implement later)
const handleSearch = () => {
    console.log("Searching for:", searchInput.value);
    // Inertia visit or other search logic here
    // router.get(route('posts.index', { search: searchInput.value }));
};
</script>

<template>
    <div
        class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
        <nav
            class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 sticky top-0 z-50"
        >
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <Link :href="route('home')">
                            <img
                                class="h-7 w-auto"
                                src="/images/blogx-logo.png"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <!-- Search Box -->
                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <form
                            @submit.prevent="handleSearch"
                            class="relative w-full max-w-xs lg:max-w-sm"
                        >
                            <Input
                                type="search"
                                placeholder="Search posts..."
                                class="pr-10"
                                v-model="searchInput"
                            />
                            <Button
                                type="submit"
                                variant="ghost"
                                size="sm"
                                class="absolute right-0 top-0 h-full px-3"
                                aria-label="Search"
                            >
                                <Search
                                    class="h-4 w-4 text-gray-500 dark:text-gray-400"
                                />
                            </Button>
                        </form>
                    </div>

                    <!-- Login/Register Links -->
                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <Button
                            class="mr-4 cursor-pointer"
                            variant="link"
                            @click="modalStore.showModal('login')"
                        >
                            Log in
                        </Button>

                        <Button
                            variant="default"
                            @click="modalStore.showModal('register')"
                            >Create Account</Button
                        >
                    </div>

                    <!-- Hamburger Menu for Mobile (Optional - Add later if needed) -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <!-- Mobile Menu Button Here -->
                        <!-- Example: Login/Register links can be shown here -->
                        <Link :href="route('login')" class="text-sm mx-2"
                            >Log in</Link
                        >
                        <Link :href="route('register')">
                            <Button variant="outline" size="sm"
                                >Register</Button
                            >
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Page Heading (Optional) -->
        <header class="bg-white dark:bg-gray-800 shadow" v-if="$slots.header">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <slot name="header" />
            </div>
        </header>

        <!-- Page Content -->
        <main class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                >
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <slot />
                        <!-- Where the page content will go -->
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer (Optional) -->
        <footer
            class="text-center py-4 text-sm text-gray-500 dark:text-gray-400"
        >
            © {{ new Date().getFullYear() }} {{ appName }}. All rights reserved.
        </footer>
    </div>

    <!-- Login Modal -->
    <LoginModal />
    <RegistrationModal />
    <Toaster />
</template>

<style scoped>
/* Add any specific styles if needed */
</style>
