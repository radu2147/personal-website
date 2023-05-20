<script>
  import { theme } from '../store';
  import Icon from '@iconify/svelte';
  import Typewriter from 'svelte-typewriter';
  import Switch from 'svelte-switch';

  export let name;
  export let title;

  function handleChange(e) {
    const { checked } = e.detail;
    if (checked) {
      $theme = 'dark';
    } else {
      $theme = 'light';
    }
  }
</script>

<header id="home" class={`${$theme}-bg`}>
  <div class="row aligner" style="height: 100%">
    <div class="col-md-12">
      <div>
        <Icon class="iconify header-icon" icon="la:laptop-code" />
        <br />
        <h1 class="mb-0 {`${$theme}-text`}">
          {name}
        </h1>
        <div class="title-container">
          <Typewriter unwriteInterval={3}>
            <p class="title-styles {`${$theme}-text`}">{title}</p>
          </Typewriter>
        </div>
        <Switch
          on:change={handleChange}
          width={90}
          height={40}
          checked={false}
          offColor="#baaa80"
          onColor="#353535">
          <div class="checked" slot="unCheckedIcon" />
          <div class="checked" slot="checkedIcon" />
        </Switch>
      </div>
    </div>
  </div>
</header>

<style>
  header {
    height: calc(100vh - 140px);
  }

  .checked {
    display: 'block';
    height: '100%';
    font-size: 25;
    text-align: 'end';
    margin-left: '10px';
    color: '#353239';
  }
</style>
