import Datetime from './Datetime.vue'
import DatetimePopup from './DatetimePopup.vue'
function plugin (Vue) {
  Vue.component('datetime', Datetime)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'

// Export all components too
export {
  DatetimePopup,
  Datetime,
  version
}
