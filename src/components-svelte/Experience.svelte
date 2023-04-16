<script>
    import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent,
	} from 'svelte-vertical-timeline';
    import {theme} from '../store';

    export let experience;

    experience.jobs = experience.jobs.sort((a, b) => -a.startDate.localeCompare(b.startDate));
    
</script>
<section id="experience" class={`${$theme}-bg pb-5`}>
    <div class="col-md-12 mx-auto">
        <div class="col-md-12">
          <h1 class={`section-title title-styles ${$theme}-text`}>
            {experience.title}
          </h1>
        </div>
      </div>
    <Timeline position="alternate">
        {#each experience.jobs as job}
            <TimelineItem>
                <TimelineOppositeContent slot="opposite-content">
                    <p style={'margin-top: -1px;'} class="{`${$theme}-text`}">{job.startDatePretty} - {job.endDatePretty ?? "present"}</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={`${$theme}-bg}`}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={'height: 150px;'}>
                    <h1 class="title-styles {`${$theme}-text`}">{job.title}</h1>
                    <h3 class="{`${$theme}-text`}">{job.company}</h3>
                </TimelineContent>
            </TimelineItem>
        {/each}
    </Timeline>
</section>