<template>
<div id="rabbanim">
    <div class="container">
        <h1 id="page-title"></h1>
        <div id="page-content"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "Rabbanim",
    created() {
        this.$flamelinkApp.content.get({
            schemaKey: 'pages',
            entryId: 'l2daIjO7N1UNOfyh04KN'
        })
        .then(pageContent => {
            document.getElementById('page-title').innerText = pageContent.title;
            document.getElementById('page-content').innerHTML = pageContent.content;
        })
        .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
    }

};
</script>
