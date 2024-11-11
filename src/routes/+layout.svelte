<script>
  let {children} = $props();
  import '../app.css'
</script>

<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/posts">Posts</a>
    </li>
  </ul>
</nav>

{@render children()}


<style>
  nav ul {
    display:  flex;
    list-style: none;
    text-decoration: none;
    gap: 2rem;

  }

</style>