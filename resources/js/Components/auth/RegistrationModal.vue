<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogDescription,
} from "@/Components/ui/dialog";
import { useModalStore } from "@/stores/modal";

//--- Store & Toast ---
const modalStore = useModalStore(); // Import modal store
</script>

<template>
    <Dialog v-model:open="modalStore.isRegisterOpen">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create Account</DialogTitle>
                <DialogDescription>
                    Enter your details below to create a new account
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
</template>
