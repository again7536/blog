import styled from 'styled-components';
import { useAuth } from 'src/lib/hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ButtonProps {
  color: string;
  href: string;
  className?: string;
  children?: JSX.Element | JSX.Element[] | string;
}

const Button = styled.button.attrs((props: ButtonProps) => ({
  ...props,
  className: 'btn ' + props.className,
}))`
  color: ${props => props.theme.colors[props.color]};
  min-width: max-content;
  height: fit-content;
  max-height: 60px;
  font-size: 10pt;

  &:hover {
    background-color: ${props => props.theme.colors[props.color]};
    color: white;
  }

  &:focus,
  &:active {
    box-shadow: none;
  }

  & > * {
    color: ${props => props.theme.colors[props.color]};
    text-decoration: unset;
  }
  &:hover > * {
    color: white;
  }
`;

const LoginButton = ({ className }: { className?: string }) => {
  const { isLoading, error, data } = useAuth();

  return isLoading || !data ? (
    <Button color="red" className={'' + className}>
      <a href="/api/auth">
        <FontAwesomeIcon icon={faGithub} className="fa-lg" />
        &nbsp;Continue with Github
      </a>
    </Button>
  ) : null;
};

export { Button, LoginButton };
