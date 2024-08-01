<template>
    <div class="container">
    <el-calendar style="background-color: rgb(145, 154, 176);">
        <template #date-cell="{ data }" >
            <p :class="data.isSelected ? 'is-selected' : ''" >
                {{ data.day.split('-').slice(1).join('-') }}
                {{ data.isSelected ? '✔️' : '' }}
            </p>
        </template>
    </el-calendar>
    </div>
</template>

<style>
.is-selected {
    color: #1989fa;
}
.container{
    width: 800px;
}
</style>
