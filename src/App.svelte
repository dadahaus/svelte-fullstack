<script>
  // import { Navigate } from "svelte-router-spa";
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes.js";
  import "./dist/style.css";
  // function register() {
  //   alert(`your email is ${emailAdress} and your school is ${schoolName}`);
  // }
  // let schoolName;
  // let emailAdress;
</script>

<section class="section">
  <div class="container">
    <Router {routes} />
  </div>
</section>