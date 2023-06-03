<script>
  import { theme } from '../store';
  import { _ } from 'svelte-i18n';
</script>

<section id="contact" class={`${$theme}-secondary-bg pb-5`}>
  <div class="col-md-12 mx-auto">
    <div class="col-md-12">
      <h1 class={`section-title title-styles ${$theme}-text`}>Contact</h1>
    </div>
  </div>
  <form action="https://formspree.io/xjvpbkjo" method="POST" class="fs-3">
    <input type="text" name="name" placeholder={$_('section.contact.name')} required />
    <input type="email" name="_replyto" placeholder={$_('section.contact.email')} required />
    <input type="text" name="subject" placeholder={$_('section.contact.subject')} />
    <textarea name="message" placeholder={$_('section.contact.message')} rows="6" />

    <button class={`${$theme}-bg`} type="submit"
      ><h3 class={`${$theme}-text`}>{$_('section.contact.send')}</h3></button>
  </form>
</section>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input,
  textarea {
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
    padding: 10px 25px;
    align-self: center;
    border: 0px;
    border-radius: 5px;
    font-weight: bold;
  }
  button:active {
    opacity: 90%;
  }
  button:hover {
    opacity: 90%;
  }
</style>
