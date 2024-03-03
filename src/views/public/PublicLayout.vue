<template>
    <nav>
        <PublicNav />
    </nav>
    <RouterView />
</template>

<script>
import PublicNav from '@/components/PublicNav.vue';
export default {
    name: 'publicLayout',
    components: {
        PublicNav
    }
}
</script>