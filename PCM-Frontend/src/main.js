import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from './utils/cookies'

import App from './App'

import LoginPage from './views/LoginPage'
import SignupPage from './views/SignupPage'
import ForgetPage from './views/ForgetPage'
import IndexPage from './views/IndexPage'
import MainPage from './views/MainPage'
import ApplyPage from './views/ApplyPage'
import MyPage from './views/MyPage'
import CheckRecordPage from './views/CheckRecordPage'
import QueryRoomPage from './views/QueryRoomPage'
import ApplyRecordDetailPage from './views/ApplyRecordDetailPage'
import AdminIndexPage from './views/AdminIndexPage'
import AdminLoginPage from './views/AdminLoginPage'
import AdminForgetPage from './views/AdminForgetPage'
import AdminMainPage from './views/AdminMainPage'
import AdminApprovePage from './views/AdminApprovePage'
import GetRecordPage from './views/GetRecordPage'
import AboutPage from './views/AboutPage'

Vue.use(Router)

Vue.filter('hasApproved', (record) => {
  console.log('filter2')
  return record.status != 0
})

Vue.filter('hasnApproved', (record) => {
  console.log('filter3')
  return record.status == 0
})

var router = new Router()

router.map({
  '/': {
    component: IndexPage,
    name: 'index'
  },
  '/login': {
    component: LoginPage,
    name: 'login'
  },
  '/signup': {
    component: SignupPage,
    name: 'signup'
  },
  '/forget': {
    component: ForgetPage,
    name: 'forget'
  },
  '/index': {
    component: MainPage,
    name: 'main'
  },
  '/apply': {
    component: ApplyPage,
    name: 'apply'
  },
  '/record': {
    component: CheckRecordPage,
    name: 'check'
  },
  '/record/:roomNo/:date': {
    component: GetRecordPage
  },
  '/query': {
    component: QueryRoomPage,
    name: 'query'
  },
  '/detail/:id': {
    component: ApplyRecordDetailPage,
    name: 'applyDetail'
  },
  '/admin': {
    component: AdminIndexPage,
    name: 'admin'
  },
  '/admin/login': {
    component: AdminLoginPage,
    name: 'adminLogin'
  },
  '/admin/forget': {
    component: AdminForgetPage,
    name: 'adminForget'
  },
  '/admin/index': {
    component: AdminMainPage,
    name: 'adminMain'
  },
  '/admin/approve': {
    component: AdminApprovePage,
    name: 'adminApprove'
  },
  '/admin/detail/:id': {
    component: ApplyRecordDetailPage,
    name: 'approveDetail'
  },
  '/me': {
    component: MyPage,
    name: 'me'
  },
  '/about': {
    component: AboutPage,
    name: 'about'
  }
})

var myGetCookie = function(name) {
  var cks = document.cookie.split(';')
  var ck = {}
  for (var i in cks) {
    var keyValue = cks[i].split('=')
    ck[keyValue[0].trim()] = keyValue[1].trim()
  }
  return ck[name]
}

router.beforeEach(({ to, next }) => {
  var path = to.path
  if (path == '/' || path == '/login' || path =='/signup') {
    console.log(myGetCookie('iden'))
    if (myGetCookie('iden') == 'student') {
      if (!(document.cookie == "sid=" || document.cookie == "sid")) {
        router.go({name: 'main'})
      }
    }
  }
  if (path !== '/signup' && path !== '/login' && path !== '/'
    && path !== '/admin/login' && path !== '/forget' && path !== '/admin/forget') {

    if (document.cookie == "sid=" || document.cookie == "sid") {
      console.log('未登录')
      router.go({name: 'index'})
      return
    }
    // admin
    if (path.indexOf('/admin') > -1) {
      // ck is not admin
      if (myGetCookie('iden') != 'admin') {
        router.go({name: 'main'})
        return
      }
    }


  }
  next()
})

router.start(App, '#app')