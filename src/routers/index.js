import main from '../examples/main'
import line from '../examples/line/line'
import pie from '../examples/pie/pie'
import bar from '../examples/bar/bar'
import cool from '../examples/cool/cool'

const routes = [
  {
    path: '/',
    redirect: { name: 'main' },
    meta: { title: '' },
  },
  {
    path: '/main', component: main,
    name: 'main', meta: { title: 'main', login: true },
    redirect: {
      name: 'line',
    },
    children: [{
      path: '/main/line',
      component: line,
      name: 'line',
      meta: { title: 'line' },
    }, {
      path: '/main/pie',
      component: pie,
      name: 'pie',
      meta: { title: 'pie' },
    }, {
      path: '/main/bar',
      component: bar,
      name: 'bar',
      meta: { title: 'bar' },
    }, {
      path: '/main/cool',
      component: cool,
      name: 'cool',
      meta: { title: 'cool' },
    }],
  },
]

export default routes
