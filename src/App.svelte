<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import './dist/style.css'
</script>

<section class="section">
  <Router {routes} />
  <div class="container"></div>
</section>
