<script>
    import { theme } from '../store';
</script>
<section id="contact" class={`${$theme}-secondary-bg pb-5`}>
    <div class="col-md-12 mx-auto">
        <div class="col-md-12">
            <h1 class={`section-title title-styles ${$theme}-text`}>
                Contact
            </h1>
        </div>
    </div>
    <form method="POST">
        <input type="text" name="name" placeholder="Your name" required>
        <input type="text" name="_replyto" placeholder="Your email" required>
        <input type="text" name="subject" placeholder="Subject">
        <textarea name="message" placeholder="Your message" rows="6"></textarea>

        <button class={`${$theme}-bg`} type="submit">Send</button>
    </form>

</section>
<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    input, textarea{
        min-width: 400px;
        width: 50%;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border: 1px solid #cccccc;
        margin-bottom: 32px;
        padding: 10px;
    }
    button {
        width: 100px;
        padding: 10px;
        align-self: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border: 1px solid #cccccc;
        color: white;
        border-radius: 5px;
        font-weight: bold;
    }
    button:active{
        opacity: 90%;
    }
    button:hover{
        background-color: #4cae4c;
    }
</style>