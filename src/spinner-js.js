function loader (url, loaded) {
   var   loading = document.getElementById("loading");

  loading.classList.add("load");

  fetch(url)
  .then(res => res.text())
  .then(txt => {
    main.innerHTML = txt;
    if (typeof loaded == "function") { loaded(); }
  })
  .finally(() => {
    
    window.setTimeout(()=>{
      loading.classList.remove("load");
    }, 2000);
  });
}
