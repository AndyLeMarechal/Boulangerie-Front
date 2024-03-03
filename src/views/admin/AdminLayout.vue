<template>
    <nav>
        
    </nav>
    
    <div class="admin">
        <AdminHeader />
        <AdminNav />
        <RouterView />
    </div>
    
</template>

<script>

import AdminHeader from '@/components/AdminHeader.vue';
import AdminNav from '@/components/AdminNav.vue';
export default {
    name: 'admin',
    components:{
    AdminHeader,
    AdminNav,
}
    
}
</script>