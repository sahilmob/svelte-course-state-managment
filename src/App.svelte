<script>
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from "./UI/Button.svelte";
  import timer from "./timer-store";
  import { onDestroy } from "svelte";

  let showCart = true;

  // const unsubscribe = timer.subscribe(count => {
  //   console.log("App: " + count);
  // });

  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<Button on:click={() => (showCart = !showCart)}>Toogle Cart</Button>
{#if showCart}
  <Cart />
{/if}
<Products />
