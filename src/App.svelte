<script>
  import { Navigate } from "svelte-router-spa";
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import "./dist/style.css";
  function register() {
    alert(`your email is ${emailAdress} and your school is ${schoolName}`);
  }
  let schoolName;
  let emailAdress;
</script>

<div>your school name is {schoolName}</div>
<div>your email is {emailAdress}</div>
<div />
<div class="notification">
  <div class="columns">
    <div class="column">
      <div class="content">
        <h1>Easily publish your school lunch menus</h1>
        <p>we make it easy to publish you school lunch menu and blabla</p>
        <p>just set the details and click publish</p>
      </div>
    </div>

    <div class="column">
      <div class="content">
        <h3>Register now</h3>
        <div class="field">
          <label class="label"> Email Address </label>
          <div class="control">
            <input
              bind:value={emailAdress}
              type="text"
              class="input"
              placeholder="enter your email address"
            />
          </div>
        </div>
        <div class="field">
          <label class="label"> School Name </label>
          <div class="control">
            <input
              bind:value={schoolName}
              type="text"
              class="input"
              placeholder="enter your school's name"
            />
          </div>
        </div>
        <div class="control">
          <button on:click={register} class="button is-link is-outlined">
            Go
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="content" style="line-height: 30px;">
    <center>
      <span> ALready registered? </span>
      <!-- <Navigate to="/admin/manage-menus"> -->
        <button> Log in </button>
      <!-- </Navigate> -->
    </center>
  </div>
</div>

<!-- <section class="section">
  <div class="container">
    <Router {routes} />
  </div>
</section> -->
