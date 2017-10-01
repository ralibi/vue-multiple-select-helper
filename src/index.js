import MultipleSelectHelper from './MultipleSelectHelper'

export default function install (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true

  Vue.component(MultipleSelectHelper.name, MultipleSelectHelper)
}
