import { 
  DashboardOutlined,
  DotChartOutlined,
  FundOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-user',
      path: `${APP_PREFIX_PATH}/dashboards/user`,
      title: 'sidenav.dashboard.user',
      icon: DotChartOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-withdraw',
      path: `${APP_PREFIX_PATH}/dashboards/withdraw`,
      title: 'sidenav.dashboard.withdraw',
      icon: FundOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-news',
      path: `${APP_PREFIX_PATH}/dashboards/news`,
      title: 'sidenav.dashboard.news',
      icon: FundOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]


const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
