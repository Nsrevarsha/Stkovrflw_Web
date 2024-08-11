<script>
    
</script>
  
  <div class="flex justify-center p">
    <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5">
      <h2 class="text-2xl font-bold pb-5">Login In</h2>
      <form action="/" method="post">
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium" >Your email</label>
          <input
            type="email"
            id="email"
            class= "text-sm rounded-lg w-full py-2.5 px-4"
            placeholder="@gmail.com"
            required
            value=""
            name="username"
          >
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
          <input
            type="password"
            id="password"
            class="text-sm rounded-lg w-full py-2.5 px-4"
            placeholder="*********"
            required
            value=""
            name="password"
          >
        </div>
        <div class="flex items-center justify-between mb-4">
          <button
            type="submit"
            class= "btn variant-filled font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
          >
            Submit
          </button>
          
        </div>
      </form>
    </div>
  </div>
  