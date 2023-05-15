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
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'home' }">Logo</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'about' }">Logo Symbol</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'about' }">Colors</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'about' }">Typography</router-link></li>
                        </ul>
                    </section>
                
                    <section>
                        <h5 class="uppercase font-bold mb-4">Doodles</h5>
                        <ul class="list-reset">
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'home' }">Mascot</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'about' }">Illustrations</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'about' }">Loaders and Animations</router-link></li>
                            <li class="text-sm leading-loose"><router-link class="text-black" :to="{ name: 'about' }">Wallpapers</router-link></li>
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