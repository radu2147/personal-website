<script> 
    import Icon from "@iconify/svelte";
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
                <li class="list-inline-item mx-3">
                    <span>
                    <Icon icon={skill.class ? `${skill.class}` : `logos:${skill.name.toLowerCase()}`} style={`font-size: 200%; margin: 9% 5% 0 5%`}/>
                    <div class="text-center skills-tile">
                        <i class={skill.class} style={{ fontSize: "220%" }}>
                            <p
                                class="text-center"
                                style={{ fontSize: "30%", marginTop: "4px" }}
                            >
                                {skill.name}
                            </p>
                        </i>
                    </div>
                    </span>
                </li>
            {/each}
        </ul>
      </div>
    </div>
</section>