<script>
    import Icon from "@iconify/svelte";
</script>
<footer>
    <div class="footer_social">
        <div class="icons_list">
            <a href="https://www.linkedin.com/in/radu-baston-a99960185/" target="_blank" rel="noopener noreferrer">
                <Icon style="width: 64px; height: 64px;" icon="ph:linkedin-logo"/>
            </a>
            <a href="https://www.facebook.com/radu.baston.7/" target="_blank" rel="noopener noreferrer">
                <Icon style="width: 64px; height: 64px;" icon="ph:facebook-logo-light" />
            </a>
            <a href="https://github.com/radu2147" target="_blank" rel="noopener noreferrer">
                <Icon style="width: 64px; height: 64px;" icon="akar-icons:github-outline-fill" />
            </a>
        </div>
        <p>
            Radu Baston
        </p>
    </div>
</footer>
<style>
    .footer_social{
        display: grid;
        justify-content: center;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        justify-items: center;
        align-items: top;
        align-content: top;
        padding-top: 40px;
    }
    .footer_social p{
        grid-row: 2;
        grid-column: 1 / 6;
    }
    .icons_list {
        grid-row: 1;
        grid-column: 1 / 6;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(3, 1fr);
    }
</style>