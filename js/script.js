const app = {}

app.init = () => {

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', app.init)
} else {
  app.init()
};