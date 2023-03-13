import { HeaderStyle, NavigationLink, Link } from './Header.styled';
export const Header = () => {
  return (
    <HeaderStyle>
      <NavigationLink>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </NavigationLink>
    </HeaderStyle>
  );
};
