import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { Error } from "../../pages";

type ProtectedLayoutProps = {
  children: JSX.Element;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const { user } = useAuthControlContext();

  if (!user) {
    return <Error />;
  }

  return children;
};

export default ProtectedLayout;
