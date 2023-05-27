<script>
  import About from "./components-svelte/About.svelte";
  import Header from "./components-svelte/Header.svelte";
  import Language from "./components-svelte/Language.svelte";
  import Projects from "./components-svelte/Projects.svelte";
  import Skills from "./components-svelte/Skills.svelte";
  import Experience from "./components-svelte/Experience.svelte";
  import Contact from "./components-svelte/Contact.svelte";
  import Footer from "./components-svelte/Footer.svelte";
  import { _ } from "svelte-i18n";

  async function getInfo() {
    let response = await fetch("./data.json");
    return await response.json();
  }

  let promise = getInfo();
</script>

<div>
  {#await promise}
    <!-- promise is pending -->
    <p>Loading...</p>
  {:then value}
    <!-- promise was fulfilled -->
    <Header name="Radu-Andrei Baston" title="SOFTWARE ENGINEER" />
    <Language />
    <About profile_pic="images/me.jpg"/>
    <Projects projects={value.projects} />
    <Skills skills={value.skills} />
    <Experience
      experience={value.experience}
    />
    <Contact />
    <Footer />
  {:catch error}
    <!-- promise was rejected -->
    <p>{$_('error')}: {error.message}</p>
  {/await}
</div>

<style>
  :global(.dark-bg) {
    background-color: #494949 !important;
  }
  :global(.light-bg) {
    background-color: #e9d5a1 !important;
  }
  :global(.light-secondary-bg) {
    background-color: white !important;
  }
  :global(.dark-secondary-bg) {
    background-color: #7f7f7f !important;
  }
  :global(.dark-third-bg) {
    background-color: #6d6d6d !important;
  }
  :global(.dark-text) {
    color: white !important;
  }
  :global(.light-text) {
    color: #353239 !important;
  }
</style>
