import Vue from 'vue'
import VurRouter from 'vue-router'

import routes from './routes'

Vue.use(VurRouter)

export default new VurRouter({
    mode: 'history',
    routes
})