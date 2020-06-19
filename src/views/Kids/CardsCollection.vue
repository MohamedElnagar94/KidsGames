<template>
    <div>
        <Header header="Cards Collection"></Header>
        <!-- MAIN SECTION -->
        <section class="mainContent full-width clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="sectionTitle text-center">
                            <h2>
                                <span class="shape shape-left bg-color-4"></span>
                                <span>This collection helps you to learn how to compare between photos</span>
                                <span class="shape shape-right bg-color-4"></span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <Cards></Cards>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/HeaderComponent.vue";
    import Cards from "@/components/CardsCollectionComponent.vue";
    export default {
        name: "CardsCollection",
        data() {
            return {
                publicPath: process.env.BASE_URL
            };
        },
        components: {
            Header,
            Cards
        }
    }
</script>

<style scoped>

</style>
