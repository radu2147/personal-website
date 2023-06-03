<script>
  import { theme } from '../store';
  import ProjectDetailsModal from './ProjectDetailsModal.svelte';
  export let project;
  let showModal = false;
  function toggleModal(value) {
    function changeModal() {
      showModal = value;
    }
    return changeModal;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="col-sm-12 col-md-6 col-lg-4"
  key={project.title}
  style="cursor: pointer"
  on:click={toggleModal(true)}>
  <span class="portfolio-item d-block">
    <div class="foto" onClick={() => {}}>
      <div class={` ${$theme}-secondary-bg`}>
        <img
          src={project.image.url}
          alt="projectImages"
          style="marginBottom: 0; paddingBottom: 0; position: relative; width: 290px; height: 230px;" />
        <span class={`project-date ${$theme}-third-bg`}>{project.year}</span>
        <br />
        <p class={`project-title-settings mt-3 ${$theme}-text`} id={project.title.replace(" ", "")}>
          {project.title}
        </p>
      </div>
    </div>
  </span>
  <ProjectDetailsModal data={project} show={showModal} closeModal={toggleModal(false)} />
</div>
