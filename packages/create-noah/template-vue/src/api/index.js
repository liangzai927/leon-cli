// 自动引入 modules 下面所有的 api
const modulesFiles = import.meta.globEager('./modules/*.js');

const modules = Object.keys(modulesFiles).reduce((modules, path) => {
  const moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
  modules[moduleName] = modulesFiles[path];
  return modules;
}, {});

export default modules;
