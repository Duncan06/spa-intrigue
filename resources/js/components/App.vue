<template>
    <div>
        <div class="container mx-auto">
            <header class="py-6 mb-8">
                <h1>Logo</h1>
            </header>

            <main class="flex">
                <aside class="w-1/5">
                    <section class="mb-8">
                        <h5 class="uppercase font-bold mb-4">The Brand</h5>
                        <ul class="list-reset">
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'logo' }">Logo</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'logoSymbol' }">Logo Symbol</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'colors' }">Colors</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'typography' }">Typography</router-link></li>
                        </ul>
                    </section>
                
                    <section>
                        <h5 class="uppercase font-bold mb-4">Doodles</h5>
                        <ul class="list-reset">
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'mascot' }">Mascot</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'illustrations' }">Illustrations</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'loadersAndAnimations' }">Loaders and Animations</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'wallpapers' }">Wallpapers</router-link></li>
                        </ul>
                    </section>
                </aside>

                <div class="primary flex-1">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>

</script>