<template>
    <el-menu ellipsis class="el-menu-popper-demo" mode="vertical" :popper-offset="16" style="background-color:rgb(153, 59, 59);max-width: 100%;"
    router="true"
    >
        <el-menu-item index="/myhomepage.vue"><el-icon><House /></el-icon>首页</el-menu-item>
        <el-sub-menu index="2">
            <template #title><el-icon><Menu /></el-icon>工作台</template>
            <el-menu-item index="/myapp.vue">todolist</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3" :popper-offset="8">
            <template #title><el-icon><Tools /></el-icon>常用工具</template>
            <el-menu-item index="/mycalendar.vue">日历</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
            <el-sub-menu index="3-4" :popper-offset="20">
                <template #title>override child</template>
                <el-menu-item index="3-4-1">item one</el-menu-item>
                <el-menu-item index="3-4-2">item two</el-menu-item>
                <el-menu-item index="3-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="4" disabled>Info</el-menu-item>
        <el-menu-item index="/myset.vue"><el-icon><Operation /></el-icon>设置</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup></script>
<style>

</style>