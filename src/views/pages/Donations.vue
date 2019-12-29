<template>
<div id="donate">
    <div class="container">
        <h1 id="page-title"></h1>
        <div id="page-content"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "Donate",
    created() {
        this.$flamelinkApp.content.get({
            schemaKey: 'pages',
            entryId: 'Wq67TbsRbgWtNjkZdE6T'
        })
        .then(pageContent => {
            document.getElementById('page-title').innerText = pageContent.title;
            document.getElementById('page-content').innerHTML = pageContent.content;
        })
        .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
    }

};
</script>
