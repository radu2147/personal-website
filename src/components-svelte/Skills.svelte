<script>
  import Skill from './Skill.svelte';
  export let skills;
</script>

<section id="skills">
  <div class="col-md-12">
    <div class="col-md-12">
      <h1 class="section-title">
        <span class="text-white">{skills.title}</span>
      </h1>
    </div>
    <div class="col-md-12 text-center">
      <ul class="list-inline mx-auto skill-icon">
        {#each skills.tech as skill}
          <Skill {skill} textTheme="dark" />
        {/each}
      </ul>
    </div>
  </div>
</section>
