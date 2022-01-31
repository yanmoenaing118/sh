import { fetcher } from "../../lib/fetcher";

import useUser from "../../lib/useUser";

export default function Header() {
  const { token, mutate } = useUser();

  const handleLogout = async () => {
    mutate(await fetcher(`${process.env.NEXT_PUBLIC_APP_URL}/auth/logout`));
  };

  const handleLogin = async () => {
    mutate(await fetcher(`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`));
  };
  return (
    <>
      <header>
        <div className="wrapper">
          <nav>
            <ul>
              {token && (
                <li>
                  <button onClick={handleLogout}>Log out</button>
                </li>
              )}
              {!token && (
                <li>
                  <button onClick={handleLogin}>Log in</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <style jsx>{`
        .wrapper {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
