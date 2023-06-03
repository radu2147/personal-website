<script>
  import Icon from '@iconify/svelte';
  import { theme } from '../store';
  import { _ } from 'svelte-i18n';
  export let profile_pic;
</script>

<section id="about" class={`${$theme}-secondary-bg p-5`}>
  <div class="col-md-12">
    <h1 class={`${$theme}-text`}>
      <span>{$_('section.about.title')}</span>
    </h1>
    <div class="row center mx-auto">
      <div class="col-md-4 mb-5 center">
        <div class="polaroid">
          <span class={`${$theme}-third-bg`} style="cursor: auto">
            <img height="250px" src={profile_pic} alt="Avatar placeholder" />
            <Icon icon="logos:react" style={`font-size: 400%; margin: 9% 5% 0 5%`} />
            <Icon icon="logos:python" style={`font-size: 400%; margin: 9% 5% 0 5%`} />
            <Icon icon="logos:java" style={`font-size: 400%; margin: 9% 5% 0 5%`} />
          </span>
        </div>
      </div>

      <div class="col-md-8 center">
        <div class="col-md-10">
          <div class="card">
            <div class={`card-header ${$theme}-third-bg`}>
              <Icon icon="twemoji:red-circle" />
              &nbsp;
              <Icon icon="twemoji:yellow-circle" />
              &nbsp;
              <Icon icon="twemoji:green-circle" />
            </div>
            <div
              class={`card-body font-trebuchet text-justify ml-3 mr-3 ${$theme}-third-bg`}
              style={'height: auto;  font-size: 132%; line-height: 200%'}>
              <br />
              <span class={`${$theme}-text wave`}>{$_('section.about.hello')} </span>
              <br />
              <br />
              <span class={`${$theme}-text fs-3`}> {@html $_('section.about.description')} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
</style>
