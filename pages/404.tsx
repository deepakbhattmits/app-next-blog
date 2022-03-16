/** @format */
import Link from 'next/link'
const Custom404 = () => {
  return (
    <div className="error_container">
      <div className="error_block">
        <h1>404</h1>
        <h3>Oops... Page Not Found!</h3>
        <p>Try using the button below to go to main page of the site</p>

        <Link href="/">
          <a>Go Back to Home Page</a>
        </Link>
      </div>
      <style jsx>{`
        .error_container {
          width: 100%;
          height: 100vh;
        }

        .error_block {
          width: 40%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .error_block h1 {
          font-size: 10rem;
          color: #3f3a64;
        }

        .error_block h3,
        .error_block p {
          font-size: 2rem;
          color: #3f3a64;
        }
        .error_block a {
          margin-top: 1.5rem;
          font-size: 2rem;
        }
      `}</style>
    </div>
  )
}
export default Custom404
