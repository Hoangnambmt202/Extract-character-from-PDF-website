import HomePage from "../pages/user/HomePage"
import PDFExtractor from "../pages/user/Extract"
import ProfilePage from "../pages/user/ProfilePage"
import LoginPage from "../pages/user/LoginPage"
import NotFoundPage from "../pages/user/NotFoundPage"
import RegisterPage from "../pages/user/RegisterPage"


export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader : true
    },
    {
        path: '/extract',
        page: PDFExtractor,
        isShowHeader : true
    },
    {
        path: '/profile',
        page: ProfilePage,
        isShowHeader : true
    },
    {
        path: '/login',
        page: LoginPage,
    },
    {
        path:'/register',
        page: RegisterPage,
    },
    {
        path: '*',
        page: NotFoundPage,
    },

]
