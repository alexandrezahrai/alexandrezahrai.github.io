const closeDrawer = () => {
    const drawer = document.querySelector("#example-collapse-navbar");
    if (drawer.classList.contains("flex")) {
      drawer.classList.add("hidden");
      drawer.classList.remove("flex");
      // console.log("test");
    }
  };