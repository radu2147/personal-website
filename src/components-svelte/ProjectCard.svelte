<script>
    import { theme } from "../store";
    export let project;
</script>
<div
    class="col-sm-12 col-md-6 col-lg-4"
    key={project.title}
    style="cursor: pointer"
    >
    <span class="portfolio-item d-block">
        <div class="foto" onClick={() => {}}>
            <div class={` ${$theme}-secondary-bg`}>
                <img    
                src={project.images[0]}
                alt="projectImages"
                style="marginBottom: 0; paddingBottom: 0; position: relative; width: 290px; height: 230px;"
                />
                <span class={`project-date ${$theme}-third-bg`}>{project.year}</span>
                <br />
                <p class={`project-title-settings mt-3 ${$theme}-text`}>
                {project.title}
                </p>
            </div>
        </div>
    </span>
</div>