import MultipleSelectHelper from './MultipleSelectHelper'

module.exports = function install (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true

  Vue.component(MultipleSelectHelper.name, MultipleSelectHelper)
}
