<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<section class="section">
  <Router {routes} />
  <div class="container"></div>
</section>
