import { fetcher } from "../../lib/fetcher";
import useUser from "../../lib/useUser";
import { useRouter } from "next/router";
export default function Header() {
  const { token } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_APP_URL}/auth/logout`
    );

    console.log(result);
  };

  const handleLogin = async () => {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_APP_URL}/auth/login`
    );

    console.log(result);
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
