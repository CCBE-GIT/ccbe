<template>
    <!-- Single Unified Navigation Bar -->
    <header class="cc-nav" :class="{ 'is-scrolled': scrolled }">
        <div class="cc-nav__bar">
            <!-- Brand -->
            <a href="/" class="cc-brand" aria-label="CCBE home">
                <img :src="logoPath" alt="CCBE Logo" class="cc-brand__logo" />
                <span class="cc-brand__text">
                    <span class="cc-brand__title">CCBE</span>
                    <small class="cc-brand__sub">Cambridge College of British English International Pvt Ltd</small>
                </span>
            </a>

            <!-- Desktop page links -->
            <nav class="cc-links" aria-label="Main navigation">
                <ul class="cc-links__list">
                    <li class="cc-links__item" v-for="(item, index) in secondaryNavItems" :key="index">
                        <!-- Inquiry opens the popup -->
                        <button
                            v-if="item.action === 'inquiry'"
                            type="button"
                            class="cc-link"
                            @click.prevent="openInquiryPopup"
                            @mouseenter="activateHover(index)"
                            @mouseleave="activateHover(-1)"
                        >
                            <span class="cc-link__text">{{ item.text }}</span>
                            <span class="cc-link__bar" :class="{ 'active': activeIndex === index }"></span>
                        </button>

                        <!-- Normal page link -->
                        <a
                            v-else
                            :href="item.link"
                            class="cc-link"
                            :class="{ 'is-active': isActive(item.link) }"
                            @mouseenter="activateHover(index)"
                            @mouseleave="activateHover(-1)"
                        >
                            <span class="cc-link__text">{{ item.text }}</span>
                            <span class="cc-link__bar" :class="{ 'active': activeIndex === index }"></span>
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- Desktop actions -->
            <div class="cc-actions">
                <div class="cc-search"><SearchModal /></div>

                <span class="cc-divider"></span>

                <a href="https://classroom.google.com/" target="_blank" class="cc-btn cc-btn--lms">
                    <i class="material-icons">school</i>
                    <span>LMS Portal</span>
                </a>
                <a href="https://pay.ccbe.lk/" target="_blank" class="cc-btn cc-btn--pay">
                    <i class="material-icons">credit_card</i>
                    <span>Make Payment</span>
                </a>
            </div>

            <!-- Mobile toggle -->
            <button
                class="cc-burger"
                :class="{ 'is-open': isMenuOpen }"
                :aria-expanded="isMenuOpen ? 'true' : 'false'"
                aria-label="Toggle menu"
                @click="toggleMobileMenu"
            >
                <span></span><span></span><span></span>
            </button>
        </div>

        <!-- Mobile scrim -->
        <transition name="cc-fade">
            <div v-if="isMenuOpen" class="cc-scrim" @click="closeMobileMenu"></div>
        </transition>

        <!-- Mobile drawer -->
        <aside class="cc-drawer" :class="{ 'is-open': isMenuOpen }" :aria-hidden="!isMenuOpen">
            <div class="cc-drawer__head">
                <span class="cc-drawer__brand">
                    <img :src="logoPath" alt="" class="cc-drawer__logo" />
                    <span class="cc-drawer__title">CCBE</span>
                </span>
                <button class="cc-drawer__close" aria-label="Close menu" @click="closeMobileMenu">
                    <i class="material-icons">close</i>
                </button>
            </div>

            <div class="cc-drawer__body">
                <!-- Quick actions -->
                <div class="cc-drawer__quick">
                    <a href="https://classroom.google.com/" target="_blank" class="cc-btn cc-btn--lms cc-btn--block" @click="closeMobileMenu">
                        <i class="material-icons">school</i><span>LMS Portal</span>
                    </a>
                    <a href="https://pay.ccbe.lk/" target="_blank" class="cc-btn cc-btn--pay-light cc-btn--block" @click="closeMobileMenu">
                        <i class="material-icons">credit_card</i><span>Make Payment</span>
                    </a>
                </div>

                <!-- Explore -->
                <div class="cc-drawer__section">
                    <h3 class="cc-drawer__heading">Explore</h3>
                    <ul class="cc-drawer__list">
                        <li class="cc-drawer__item" v-for="(item, index) in secondaryNavItems" :key="index">
                            <!-- Inquiry opens the popup -->
                            <a
                                v-if="item.action === 'inquiry'"
                                class="cc-drawer__link"
                                @click.prevent="openInquiryPopup(); closeMobileMenu();"
                            >
                                <i class="material-icons">{{ item.icon }}</i>
                                <span>{{ item.text }}</span>
                            </a>

                            <!-- Normal page link -->
                            <a v-else :href="item.link" class="cc-drawer__link" @click="closeMobileMenu">
                                <i class="material-icons">{{ item.icon }}</i>
                                <span>{{ item.text }}</span>
                            </a>
                        </li>
                        <SearchModal />
                    </ul>
                </div>

                <!-- Footer -->
                <div class="cc-drawer__foot">
                    <span><i class="material-icons">email</i> info@ccbe.lk</span>
                    <span><i class="material-icons">phone</i> 071 3 999 666</span>
                </div>
            </div>
        </aside>
    </header>

    <!-- Success Dialog -->
    <div class="dialog-success" v-show="successDialog">
        <div class="dialog-overlay" @click="closeSuccessDialog"></div>
        <div class="dialog-content">
            <div class="dialog-card success-card">
                <div class="success-body">
                    <div class="success-animation">
                        <div class="success-circle">
                            <i class="material-icons success-icon">check</i>
                        </div>
                    </div>
                    <h3 class="success-title">Message Sent Successfully!</h3>
                    <p class="success-message">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
                <div class="dialog-actions">
                    <div class="spacer"></div>
                    <button class="btn btn-primary action-btn-ok" @click="closeSuccessDialog">
                        Got It
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";
import SearchModal from '@/components/SearchModal.vue';

export default {
    components: { SearchModal },
    name: 'UnifiedNavBar',
    data() {
        return {
            // Navigation data
            isMenuOpen: false,
            activeIndex: -1,
            scrolled: false,

            // Assets
            logoPath: require("@/assets/Logo.png"),

            // Dialog states
            dialogInq: false,
            successDialog: false,
            iframeModal: false,

            // Form data
            formData: {
                name: "",
                contact: "",
                branch: "",
                source: "",
                message: "",
            },

            // Navigation items
            secondaryNavItems: [
                { text: "Home", link: "/", icon: "home" },
                { text: "Our Programmes", link: "/courses", icon: "school" },
                { text: "About Us", link: "/about", icon: "info" },
                { text: "News & Events", link: "/news", icon: "newspaper" },
                { text: "Careers", link: "/careers", icon: "work" },
                { text: "Contact", link: "/contact", icon: "phone" },
                { text: "Inquiry", link: "#", icon: "help_outline", action: "inquiry" },
                { text: "Gallery", link: "/gallery", icon: "camera" }
            ]
        };
    },
    methods: {
        isActive(link) {
            return link === '/'
                ? window.location.pathname === '/'
                : window.location.pathname.startsWith(link);
        },
        onScroll() {
            this.scrolled = window.scrollY > 10;
        },
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            if (this.isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },
        closeMobileMenu() {
            this.isMenuOpen = false;
            document.body.style.overflow = '';
        },
        activateHover(index) {
            this.activeIndex = index;
        },
        openInquiryDialog() {
            this.dialogInq = true;
            document.body.style.overflow = 'hidden';
        },
        closeInquiryDialog() {
            this.dialogInq = false;
            document.body.style.overflow = '';
        },
        closeSuccessDialog() {
            this.successDialog = false;
            document.body.style.overflow = '';
        },
        openDialog() {
            this.dialogInq = true;
        },
        closeDialog() {
            this.dialogInq = false;
        },
        openIframeModal() {
            this.iframeModal = true;
            document.body.style.overflow = 'hidden';
        },
        closeIframeModal() {
            this.iframeModal = false;
            document.body.style.overflow = '';
        },
        openInquiryPopup() {
            const url = 'https://www.admin.ccbe.in/inquiry-form';
            const w = 720;
            const h = 800;
            const left = Math.round((screen.width  - w) / 2);
            const top  = Math.round((screen.height - h) / 2);
            window.open(
                url,
                'CCBEInquiry',
                `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
            );
        },

        async sendInquiry() {
            if (!this.formData.name || !this.formData.branch || !this.formData.message || !this.formData.source) {
                alert("Please fill out all required fields.");
                return;
            }

            const branchConfig = {
                Ambalangoda: {
                    serviceId: "service_lfaw7ig",
                    templateId: "template_2qr8exc",
                    publicKey: "RrKZfdB7O-c_xrVE3",
                },
                Galle: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
                },
                Horana: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
                },
                Matara: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
                },
                Piliyandala: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
                },
                Kalutara: {
                    serviceId: "service_mg2271v",
                    templateId: "template_loig6cz",
                    publicKey: "MJPUAdls_w9W5hPaK",
                },
                Matugama: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
                },
            };

            const selectedBranchConfig = branchConfig[this.formData.branch];
            if (!selectedBranchConfig) {
                alert("Invalid branch selected.");
                return;
            }

            const templateParams = {
                name: this.formData.name,
                contact: this.formData.contact || "Not provided",
                branch: this.formData.branch,
                source: this.formData.source || "Not provided",
                message: this.formData.message,
            };

            try {
                await emailjs.send(
                    selectedBranchConfig.serviceId,
                    selectedBranchConfig.templateId,
                    templateParams,
                    selectedBranchConfig.publicKey
                );
                this.dialogInq = false;
                this.successDialog = true;
                this.clearForm();
            } catch (error) {
                console.error("Failed to send inquiry. Error details:", error);
                alert(`Failed to send inquiry. Error: ${error.text || error.message || error}`);
            }
        },

        clearForm() {
            this.formData = {
                name: "",
                contact: "",
                branch: "",
                source: "",
                message: "",
            };
        },

        onKeydown(e) {
            if (e.key === 'Escape') {
                if (this.iframeModal) {
                    this.closeIframeModal();
                }
                if (this.dialogInq) {
                    this.closeInquiryDialog();
                }
                if (this.successDialog) {
                    this.closeSuccessDialog();
                }
                if (this.isMenuOpen) {
                    this.closeMobileMenu();
                }
            }
        },
        onDocClick(e) {
            if (this.isMenuOpen && !e.target.closest('.cc-drawer') && !e.target.closest('.cc-burger')) {
                this.closeMobileMenu();
            }
        }
    },
    mounted() {
        this.onScroll();
        window.addEventListener('scroll', this.onScroll, { passive: true });
        document.addEventListener('keydown', this.onKeydown);
        document.addEventListener('click', this.onDocClick);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        document.removeEventListener('keydown', this.onKeydown);
        document.removeEventListener('click', this.onDocClick);
        document.body.style.overflow = '';
    }
};
</script>

<style>
/* Import Material Icons CSS */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* Import Poppins Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

/* Material Icons styling */
.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
}

/* Success icon color */
.success-icon {
    color: white !important;
}

/* =========================================================
   SINGLE UNIFIED NAVIGATION BAR
   ========================================================= */
.cc-nav {
    --gold: #FFD700;
    --gold-soft: #FFED4E;
    --amber: #FF6B00;
    --amber-deep: #eb8808;
    --ink: #1a1a1a;
    --ink-soft: #2c2e30;
    --muted: #666;

    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    background: transparent;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);
    transition: box-shadow .3s ease, background-color .3s ease;
}

/* Frosted background lives on its own layer so it doesn't trap the fixed mobile drawer */
.cc-nav::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
}

/* Gold ribbon along the top edge */
.cc-nav::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--amber) 0%, var(--gold) 40%, var(--gold-soft) 70%, var(--amber) 100%);
}

.cc-nav.is-scrolled {
    box-shadow: 0 10px 34px rgba(0, 0, 0, 0.14);
}

.cc-nav .material-icons {
    font-size: 20px;
    line-height: 1;
}

.cc-nav a:focus-visible,
.cc-nav button:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 2px;
}

.cc-nav__bar {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 16px;
    max-width: 1800px;
    margin: 0 auto;
    padding: 14px 24px 12px;
    transition: padding .3s ease;
}

.cc-nav.is-scrolled .cc-nav__bar {
    padding-top: 8px;
    padding-bottom: 8px;
}

/* ---------- Brand ---------- */
.cc-brand {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    flex-shrink: 0;
}

.cc-brand__logo {
    height: 76px;
    width: 100px;
    display: block;
    transition: transform .3s ease, height .3s ease;
}

.cc-nav.is-scrolled .cc-brand__logo { height: 62px; }
.cc-brand:hover .cc-brand__logo { transform: scale(1.05) rotate(2deg); }

.cc-brand__text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    padding-left: 14px;
    border-left: 2px solid var(--gold);
}

.cc-brand__title {
    font-weight: 800;
    font-size: 1.4rem;
    background: linear-gradient(135deg, var(--gold) 0%, var(--amber) 55%, var(--gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: .5px;
}

.cc-brand__sub {
    display: block;
    max-width: 200px;
    font-size: .7rem;
    font-weight: 600;
    line-height: 1.3;
    color: var(--muted);
    letter-spacing: .3px;
    margin-top: 3px;
    white-space: normal;
}

/* ---------- Page links ---------- */
.cc-links {
    flex: 1 1 auto;
    min-width: 0;
    display: flex;
    justify-content: center;
}

.cc-links__list {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 2px;
    list-style: none;
}

.cc-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 10px 13px;
    border-radius: 12px;
    color: var(--ink);
    text-decoration: none;
    font-weight: 600;
    font-size: .86rem;
    white-space: nowrap;
    transition: background-color .25s ease, color .25s ease, transform .25s ease;

    /* button reset so <button class="cc-link"> (Inquiry) looks like the links */
    border: 0;
    background: none;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
}

.cc-link:hover {
    background: rgba(255, 215, 0, 0.18);
    transform: translateY(-1px);
}

.cc-link.is-active { color: var(--amber); }

.cc-link__bar {
    position: absolute;
    left: 50%;
    bottom: 3px;
    width: 0;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, var(--amber), var(--gold));
    transform: translateX(-50%);
    transition: width .3s ease;
}

.cc-link:hover .cc-link__bar,
.cc-link__bar.active,
.cc-link.is-active .cc-link__bar { width: 60%; }

/* ---------- Actions ---------- */
.cc-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
}

.cc-ghost {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 11px;
    border: 0;
    border-radius: 12px;
    background: none;
    color: var(--ink);
    font: 600 .84rem 'Poppins', sans-serif;
    text-decoration: none;
    cursor: pointer;
    transition: background-color .25s ease, color .25s ease;
}

.cc-ghost:hover {
    background: rgba(255, 215, 0, 0.18);
    color: var(--amber);
}

.cc-search { display: flex; align-items: center; }

.cc-divider {
    width: 1px;
    height: 28px;
    margin: 0 6px;
    background: rgba(0, 0, 0, 0.12);
}

.cc-btn {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 999px;
    border: 2px solid transparent;
    font: 700 .8rem 'Poppins', sans-serif;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease;
}

.cc-btn .material-icons { font-size: 18px; }

/* shine sweep */
.cc-btn::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
    transition: left .5s ease;
}
.cc-btn:hover::before { left: 100%; }
.cc-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18); }

.cc-btn--lms {
    background: linear-gradient(135deg, var(--gold) 0%, var(--amber-deep) 100%);
    border-color: var(--gold);
    color: #000;
}

.cc-btn--pay {
    background: linear-gradient(135deg, #0f0f0f 0%, #1c1d1d 100%);
    border-color: var(--ink-soft);
    color: #fff;
}
.cc-btn--pay .material-icons { color: var(--gold); }

.cc-btn--pay-light {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff;
}
.cc-btn--pay-light .material-icons { color: var(--gold); }

.cc-btn--block { width: 100%; padding: 14px 18px; font-size: .9rem; }

/* ---------- Burger ---------- */
.cc-burger {
    display: none;
    margin-left: auto;
    flex-direction: column;
    gap: 5px;
    padding: 12px;
    border: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-soft) 100%);
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease;
}
.cc-burger:hover { transform: scale(1.05); box-shadow: 0 4px 15px rgba(255, 215, 0, 0.45); }

.cc-burger span {
    width: 24px;
    height: 3px;
    background: var(--ink);
    border-radius: 2px;
    transition: transform .3s ease, opacity .2s ease;
}
.cc-burger.is-open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.cc-burger.is-open span:nth-child(2) { opacity: 0; }
.cc-burger.is-open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* ---------- Mobile scrim ---------- */
.cc-scrim {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    z-index: 1001;
}
.cc-fade-enter-active, .cc-fade-leave-active { transition: opacity .3s ease; }
.cc-fade-enter-from, .cc-fade-leave-to { opacity: 0; }

/* ---------- Mobile drawer ---------- */
.cc-drawer {
    position: fixed;
    top: 0; right: 0; bottom: 0;
    width: min(88vw, 380px);
    display: flex;
    flex-direction: column;
    background:
        radial-gradient(circle at 100% 0%, rgba(255, 215, 0, 0.18), transparent 45%),
        #1a1a1a;
    color: #fff;
    z-index: 1002;
    overflow: hidden;
    transform: translateX(100%);
    transition: transform .4s cubic-bezier(.4, 0, .2, 1);
}
.cc-drawer.is-open { transform: translateX(0); }

.cc-drawer__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 22px;
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-soft) 100%);
}

.cc-drawer__brand { display: flex; align-items: center; gap: 10px; }
.cc-drawer__logo { height: 40px; width: auto; border-radius: 8px; }
.cc-drawer__title { font-weight: 800; font-size: 1.4rem; color: var(--ink); letter-spacing: .5px; }

.cc-drawer__close {
    display: grid;
    place-items: center;
    width: 42px; height: 42px;
    border: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.35);
    color: var(--ink);
    cursor: pointer;
    transition: background-color .25s ease, transform .25s ease;
}
.cc-drawer__close:hover { background: #fff; transform: rotate(90deg); }

.cc-drawer__body {
    flex: 1;
    overflow-y: auto;
    padding: 22px 24px 30px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.cc-drawer__quick { display: flex; flex-direction: column; gap: 10px; }

.cc-drawer__heading {
    color: var(--gold);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 215, 0, 0.3);
}

.cc-drawer__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.cc-drawer__item {
    opacity: 0;
    transform: translateX(20px);
}
.cc-drawer.is-open .cc-drawer__item {
    animation: ccSlideIn .45s ease forwards;
}
.cc-drawer__item:nth-child(1) { animation-delay: .10s; }
.cc-drawer__item:nth-child(2) { animation-delay: .15s; }
.cc-drawer__item:nth-child(3) { animation-delay: .20s; }
.cc-drawer__item:nth-child(4) { animation-delay: .25s; }
.cc-drawer__item:nth-child(5) { animation-delay: .30s; }
.cc-drawer__item:nth-child(6) { animation-delay: .35s; }
.cc-drawer__item:nth-child(7) { animation-delay: .40s; }
.cc-drawer__item:nth-child(8) { animation-delay: .45s; }

@keyframes ccSlideIn {
    to { opacity: 1; transform: translateX(0); }
}

.cc-drawer__link {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 13px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: background-color .25s ease, color .25s ease, transform .25s ease;
}
.cc-drawer__link .material-icons { color: var(--gold); transition: color .25s ease; }
.cc-drawer__link:hover {
    background: var(--gold);
    color: var(--ink);
    transform: translateX(-6px);
}
.cc-drawer__link:hover .material-icons { color: var(--ink); }

.cc-drawer__foot {
    margin-top: auto;
    padding-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: .88rem;
    color: var(--gold);
}
.cc-drawer__foot span { display: flex; align-items: center; gap: 10px; }
.cc-drawer__foot .material-icons { font-size: 18px; }

/* ---------- Responsive ---------- */

/* Large desktop (1800px+): everything shows with full labels */

/* Desktop / laptop (1280px - 1799px): compact but all buttons visible */
@media (max-width: 1799px) {
    .cc-ghost span { display: none; }          /* Contact / Inquiry become icon-only */
    .cc-ghost { padding: 10px; }
    .cc-link { padding: 10px 9px; font-size: .8rem; }
    .cc-btn { padding: 9px 14px; font-size: .74rem; }
    .cc-btn .material-icons { display: none; }
    .cc-divider { margin: 0 2px; }
}

/* Roomy laptops (1500px - 1799px): bring button icons and larger link text back */
@media (min-width: 1500px) and (max-width: 1799px) {
    .cc-link { padding: 10px 12px; font-size: .84rem; }
    .cc-btn { padding: 10px 16px; font-size: .78rem; }
    .cc-btn .material-icons { display: inline-block; }
}

/* Tablet & mobile (below 1280px): single burger + drawer */
@media (max-width: 1499px) {
    .cc-links, .cc-actions { display: none; }
    .cc-burger { display: flex; }
    .cc-brand__sub { font-size: .66rem; }
    .cc-nav__bar { padding: 10px 16px; }
    .cc-brand__logo { height: 62px; }
    .cc-nav.is-scrolled .cc-brand__logo { height: 54px; }
}

@media (max-width: 520px) {
    .cc-brand__sub { max-width: 140px; font-size: .58rem; }
    .cc-brand__logo { height: 50px; }
    .cc-nav.is-scrolled .cc-brand__logo { height: 44px; }
    .cc-brand__title { font-size: 1.25rem; }
}

/* ---------- Contact & Inquiry: shown as text menus, like the page links ---------- */
.cc-ghost {
    padding: 10px 13px;
    border-radius: 12px;
    font-size: .86rem;
}
.cc-ghost .material-icons { display: none; }
.cc-ghost span { display: inline; }
.cc-ghost:hover { transform: translateY(-1px); }

/* Laptops: tighten spacing so everything still fits on one row */
@media (min-width: 1400px) and (max-width: 1799px) {
    .cc-brand__sub { max-width: 160px; }
}
@media (min-width: 1400px) and (max-width: 1599px) {
    .cc-ghost { padding: 10px 9px; font-size: .8rem; }
    .cc-link { padding: 10px 8px; }
    .cc-btn .material-icons { display: none; }
}
@media (min-width: 1600px) and (max-width: 1799px) {
    .cc-ghost { padding: 10px 12px; font-size: .84rem; }
}

@media (prefers-reduced-motion: reduce) {
    .cc-nav *, .cc-drawer { transition-duration: .01ms !important; animation-duration: .01ms !important; }
}

/* =========================================================
   SUCCESS DIALOG (unchanged)
   ========================================================= */
.dialog-inquiry,
.dialog-success {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 1;
}

.dialog-content {
    position: relative;
    z-index: 2;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    animation: dialogFadeIn 0.3s ease;
}

@keyframes dialogFadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.dialog-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 100%;
}

.success-body {
    padding: 3rem 2rem;
    text-align: center;
}

.success-animation { margin-bottom: 1.5rem; }

.success-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #4CAF50;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: scaleIn 0.5s ease-out, pulse 2s infinite;
}

@keyframes scaleIn {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
    100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
}

.success-icon {
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
}

.success-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
    font-family: 'Poppins', sans-serif;
}

.success-message {
    color: #666;
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 2rem;
}

.dialog-actions {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    background: #f8f9fa;
    border-top: 1px solid #e0e0e0;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Poppins', sans-serif;
    min-width: 120px;
}

.btn-primary {
    background: #FFD700;
    color: #000;
    font-weight: 600;
}

.btn-primary:hover {
    background: #ffea00;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.spacer { flex: 1; }

.action-btn-ok:hover {
    background: #ffea00 !important;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

@media (max-width: 768px) {
    .dialog-actions {
        padding: 1rem;
        flex-direction: column;
        gap: 10px;
    }
    .spacer { display: none; }
    .btn { width: 100%; min-width: auto; }
    .dialog-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 2rem);
        margin: 0;
    }
}
</style>