/* babel-plugin-macrosrc
 ** Changing the variable will show the component name in React Dev Tools and in the CSS className useful for dev.
 ** Unfortunately we cannot configure this per env currently without ejecting from create-react-app and this doesn't warrant doing that.
 */
module.exports = {
  styledComponents: {
    displayName: false
  }
};
