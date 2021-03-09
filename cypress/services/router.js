const routes = {
  home: 'https://thedevpod.netlify.app/',
  about: 'https://thedevpod.netlify.app/about/',
}

const router = {
  resolve: (name) => routes[name],
}

module.exports = router