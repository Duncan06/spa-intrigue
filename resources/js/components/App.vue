<template>
    <div>
        <div class="container px-8 pb-10" style="max-width: 920px">
            <header class="py-6 mb-8">
                <h1>Logo</h1>
            </header>

            <main class="flex">
                <aside class="w-64 pt-8">
                    <div class="mb-10">
                        <h5 class="uppercase font-bold mb-5 text-base">The Brand</h5>
                        <ul class="list-reset">
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'logo' }">Logo</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'logoSymbol' }">Logo Symbol</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'colors' }">Colors</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'typography' }">Typography</router-link></li>
                        </ul>
                    </div>
                
                    <div class="mb-10">
                        <h5 class="uppercase font-bold mb-5 text-base">Doodles</h5>
                        <ul class="list-reset">
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'mascot' }">Mascot</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'illustrations' }">Illustrations</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'loadersAndAnimations' }">Loaders and Animations</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'wallpapers' }">Wallpapers</router-link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="uppercase font-bold mb-5 text-base">Stats</h5>

                        <ul class="list-reset">
                            <li class="text-sm leading-loose">
                                <router-link class="text-black" :to="{ name: 'siteStats' }">Site Stats</router-link>
                            </li>
                        </ul>
                    </div>
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