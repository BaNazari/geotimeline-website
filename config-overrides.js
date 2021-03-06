const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // '@primary-color': '#ffcc00',
      '@body-background': '#f0f2f5',
      '@layout-body-background': '@body-background',
    },
  }),
);
