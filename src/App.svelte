<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import "./dist/style.css";
</script>

<section class="section">
  <div class="container">
    <Router {routes} />
  </div>
</section>
