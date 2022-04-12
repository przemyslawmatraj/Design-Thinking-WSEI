import regulations from '../../../assets/docs/regulamin_konkursu_WSEI_Ep.docx'
const naviagationElements = {
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
    name: 'Ustawienia',
    path: '/admin/settings',
    type: 'link',
  },
  idea: {
    name: 'Wyślij pomysł',
    path: '/user/idea',
    type: 'link',
  },
  ideaList: {
    name: 'Lista pomysłów',
    path: '/admin/ideaList',
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
  naviagationElements.elevatorPitch,
  naviagationElements.about,
  naviagationElements.news,
  naviagationElements.team,
  naviagationElements.contact,
  naviagationElements.login,
  naviagationElements.register,
]

export const userDashboardNavbar = [
  naviagationElements.userDashboard,
  naviagationElements.idea,
  naviagationElements.userSettings,
  naviagationElements.regulations,
  naviagationElements.contact,
  naviagationElements.logout,
]

export const adminDashboardNavbar = [
  naviagationElements.adminDashboard,
  naviagationElements.ideaList,
  naviagationElements.adminSettings,
  naviagationElements.regulations,
  naviagationElements.logout,
]
const variants = { landingPageNavbar, userDashboardNavbar, adminDashboardNavbar }

export default variants
