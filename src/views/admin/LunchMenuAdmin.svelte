<script>
  import {user} from '../../stores'
</script>

<div>
  <!-- <h1 class="title is-4">Lunch Menu Administration / {schoolName}</h1> -->
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/admin/manage-menus">Lunch menu administration </a></li>
      <li class="is-active"><a href="/#">{$user.schoolName}</a></li>
    </ul>
  </nav>
  
  
  <h1 class="title is-4">Lunch Menu Administration /  as viewed by {$user.name}</h1>
</div>

export