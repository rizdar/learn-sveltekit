<script>
  let {children} = $props();
</script>


<div class="posts">
  <aside>
    <h4>Posts</h4>
    <nav>
      <ul>
        <li>
          <a href="/posts/one">One</a>
        </li>
        <li>
          <a href="/posts/two">Two</a>
        </li>
      </ul>
    </nav>
  </aside>


  <main>
    {@render children()}
    </main>
</div>




<style>
  .posts {
    display: grid;
    gap : 2rem;
    grid-template-columns: 200px 60ch;
    margin-top: 2rem;
  }
</style>