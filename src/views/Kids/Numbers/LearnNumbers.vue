<template>
    <div>
        <Header header="Learn Numbers"></Header>
        <!-- MAIN SECTION -->
        <section class="mainContent full-width clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="sectionTitle text-center">
                            <h2>
                                <span class="shape shape-left bg-color-4"></span>
                                <span>Hover on number to listen to the sound</span>
                                <span class="shape shape-right bg-color-4"></span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <Numbers></Numbers>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/HeaderComponent.vue";
    import Numbers from "@/components/Numbers/NumbersComponent.vue"
    export default {
        name: "LearnNumbers",
        data() {
            return {
                publicPath: process.env.BASE_URL
            };
        },
        components: {
            Header,
            Numbers
        }
    };
</script>

<style scoped>
