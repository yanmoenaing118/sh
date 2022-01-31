import { fetcher } from "../../lib/fetcher";

import useUser from "../../lib/useUser";
import { useRouter } from "next/router";
import fetchJson from "../../lib/fetchJson";
export default function Header() {
  const { token, mutateUser } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    mutateUser(
      await fetchJson("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      })
    );
  };

  const handleLogin = async () => {
    mutateUser(
      await fetchJson("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
