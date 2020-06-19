<template>
    <div>
        <Header header="Sort Numbers"></Header>
        <!-- MAIN SECTION -->
        <section class="mainContent full-width clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="sectionTitle text-center">
                            <h2>
                                <span class="shape shape-left bg-color-4"></span>
                                <span>Sort Numbers From 1 To 10</span>
                                <span class="shape shape-right bg-color-4"></span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <Order></Order>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/HeaderComponent.vue";
    import Order from "@/components/OrderNumberComponent.vue"
    export default {
        name: "OrderNumbers",
        data() {
            return {
                publicPath: process.env.BASE_URL
            };
        },
        components: {
            Header,
            Order
        }
    }
</script>

<style scoped>

</style>
