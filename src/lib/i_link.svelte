<script>
    export let link = "/"
</script>

<a href={link}>
<slot></slot>
</a>

<style>
    a {
        display: block;
        text-decoration: none;
        color: inherit;
    }
</style>