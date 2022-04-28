import regulations from '../../../assets/docs/regulamin_konkursu_WSEI_Ep.pdf'

const navigationElements = {
  register: {
    name: 'Zarejestruj się',
    path: '/register',
    type: 'link',
  },
  login: {
    name: 'Zaloguj się',
    path: '/login',
    type: 'link',
  },
  logout: {
    name: 'Wyloguj się',
    path: '/logout',
    type: 'link',
  },
  regulations: {
    name: 'Regulamin',
    path: regulations,
    type: 'anchor',
  },
  contact: {
    name: 'Kontakt',
    path: '#contact',
    type: 'anchor',
  },
  home: {
    name: 'Strona główna',
    path: '/',
    type: 'link',
  },
  elevatorPitch: {
    name: 'Elevator Pitch',
    path: '/#ep',
    type: 'anchor',
  },
  about: {
    name: 'O nas',
    path: '/#about',
    type: 'anchor',
  },
  news: {
    name: 'Aktualności',
    path: '/#news',
    type: 'anchor',
  },
  team: {
    name: 'Zespół',
    path: '/#team',
    type: 'anchor',
  },
  userSettings: {
    name: 'Ustawienia',
    path: '/user/settings',
    type: 'link',
  },
  adminSettings: {
    name: 'Ustawienia hasła',
    path: '/changePassword',
    type: 'link',
  },
  idea: {
    name: 'Wyślij pomysł',
    path: '/user/idea',
    type: 'link',
  },
  ideaList: {
    name: 'Lista pomysłów',
    path: '/admin/userList',
    type: 'link',
  },
  userDashboard: {
    name: 'Panel zespołu',
    path: '/user/dashboard',
    type: 'link',
  },
  adminDashboard: {
    name: 'Dashboard',
    path: '/admin/dashboard',
    type: 'link',
  },
}

export const landingPageNavbar = [
  navigationElements.home,
  navigationElements.elevatorPitch,
  navigationElements.about,
  // navigationElements.news,
  // navigationElements.team,
  navigationElements.contact,
  navigationElements.login,
  navigationElements.register,
]

export const userDashboardNavbar = [
  navigationElements.userDashboard,
  navigationElements.idea,
  navigationElements.userSettings,
  navigationElements.regulations,
  navigationElements.contact,
  navigationElements.logout,
]

export const adminDashboardNavbar = [
  navigationElements.adminDashboard,
  navigationElements.ideaList,
  navigationElements.adminSettings,
  navigationElements.logout,
]
const variants = { landingPageNavbar, userDashboardNavbar, adminDashboardNavbar }

export default variants
