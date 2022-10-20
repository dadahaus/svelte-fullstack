<script>
  import { Route } from 'svelte-router-spa'
  import {onMount} from 'svelte'
  import {user} from '../../stores'
  export let currentRoute
  let initialized = false
  onMount(()=>{
    user.set({
      name: 'test user',
      schoolName: 'Test School',

    })
    initialized = true
  })
</script>

<div>
  {#if initialized}
  <Route {currentRoute} />
  {/if}
</div>