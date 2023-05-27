<script>
  import Icon from '@iconify/svelte';
  import { theme } from '../store';
  import { locale } from 'svelte-i18n';

  function changeLanguages(lang_code) {
    locale.set(lang_code);
  }
</script>

<div class={`${$theme}-bg col-md-12 mx-auto text-center language lang-container`}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span
    on:click={() => {
      changeLanguages('en');
    }}>
    <Icon
      class="iconify language-icon mr-5"
      icon="twemoji-flag-for-flag-united-kingdom"
      id="en"
      style={`filter: brightness(${$locale == 'en' ? '40%' : '100%'})`} />
  </span>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span
    on:click={() => {
      changeLanguages('ro');
    }}>
    <Icon
      class="iconify language-icon ml-5"
      icon="twemoji-flag-for-flag-romania"
      id="ro"
      style={`filter: brightness(${$locale == 'ro' ? '40%' : '100%'})`} />
  </span>
</div>

<style>
  .lang-container {
    height: 140px;
  }
</style>
