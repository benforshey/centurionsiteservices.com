exports.onPostBuild = (props) => {
  console.log(props)
  return console.log('build complete (from gatsby-node.js)')
}
