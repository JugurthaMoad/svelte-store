
<script>
  export let currentPage
  $: current = currentPage
  export let handleClick
  const path = "/cart"
</script>
<div>
    <svg
    on:click={handleClick}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1.8em"
    height="2em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 512 512"
  >
    <path
      fill={current===path ? "rgb(159,56,1)" : "white"}
      d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039H160zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Zm224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Z"
    />
  </svg>
</div>
<style>
  div:hover{
    cursor: pointer;
  }
</style>