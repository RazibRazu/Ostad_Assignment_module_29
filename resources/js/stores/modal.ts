import { defineStore } from "pinia";

// define the modal state interface for type safety
interface IAuthModalState {
    isLoginOpen: boolean;
    isRegisterOpen: boolean;
}

export enum Modal {
    LOGIN = "login",
    REGISTER = "register",
}

type TModal = Modal.LOGIN | Modal.REGISTER;

export const useModalStore = defineStore("modal", {
    state: (): IAuthModalState => ({
        isLoginOpen: false,
        isRegisterOpen: false,
    }),

    actions: {
        showModal(modal: TModal) {
            this.isLoginOpen = modal === "login";
            this.isRegisterOpen = modal === "register";
        },

        hideModal(modal: TModal) {
            if (modal === Modal.LOGIN) {
                this.isLoginOpen = false;
            }

            if (modal === Modal.REGISTER) {
                this.isRegisterOpen = false;
            }
        },

        closeAllModals() {
            this.isLoginOpen = false;
            this.isRegisterOpen = false;
        },
    },
});
