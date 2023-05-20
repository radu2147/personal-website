<script>
  import Icon from '@iconify/svelte';
  export let skill;
  export let textTheme;
</script>

<li class="list-inline-item mx-3">
  <span>
    <Icon
      icon={skill.class ? `${skill.class}` : `logos:${skill.name.toLowerCase()}`}
      style={`font-size: 200%; margin: 9% 5% 0 5%`} />
    <div class="text-center skills-tile">
      <i class={skill.class} style={{ fontSize: '220%' }}>
        <p class={`${textTheme}-text text-center`} style={{ fontSize: '30%', marginTop: '4px' }}>
          {skill.name}
        </p>
      </i>
    </div>
  </span>
</li>
