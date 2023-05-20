<script>
  import { theme } from '../store';
  import ProjectCard from './ProjectCard.svelte';
  export let projects;
</script>

<section class={`${$theme}-bg`}>
  <div class="col-md-12">
    <h1 class={`section-title ${$theme}-text`}>
      <span>{projects.title}</span>
    </h1>
    <div class="col-md-12 mx-auto">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="row mx-auto">
        {#each projects.list as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  </div>
</section>
