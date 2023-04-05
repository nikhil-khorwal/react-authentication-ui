import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom"
import NotFoundPage from "../../utils/components/error-pages/status-404"
import { RoutesName } from "./route-names"


const Loader = (Component: any) => (props: any) =>
(
  <Suspense >
    <Component {...props} />
  </Suspense>
);

const OnBoardingPage = Loader(lazy(() => import('../../features/on-boarding/presentation/pages/on-boarding')));
const LoginPage = Loader(lazy(() => import('../../features/login/presentation/pages/login')));
const SignupPage = Loader(lazy(() => import('../../features/signup/presentation/pages/signup')));

const Routes: RouteObject[] = [
  {
    path: RoutesName.onboard,
    element: <OnBoardingPage />
  },
  {
    path: RoutesName.login,
    element: <LoginPage />
  },
  {
    path: RoutesName.signup,
    element: <SignupPage />
  },
  {
    path: RoutesName.notFound,
    element: <NotFoundPage />
  }
]

export default Routes