import { fetcher } from "../../lib/fetcher";

import useUser from "../../lib/useUser";

export default function Header() {
  const { token, mutate } = useUser();

  const handleLogout = async () => {
    mutate(
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
    );
  };

  const handleLogin = async () => {
    mutate(
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
    );
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
