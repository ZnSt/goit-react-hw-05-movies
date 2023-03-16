import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';

import { HeaderStyle, NavigationLink, Link } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <>
      <HeaderStyle>
        <NavigationLink>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </NavigationLink>
      </HeaderStyle>
      <Suspense
        fallback={
          <Oval
            height={80}
            width={80}
            color="#000000"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#000000"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
