import moment from "moment/moment";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-3 border-b-2">
        <div className="flex gap-4 items-center">
          <img
            className="w-24 -mb-5"
            src="https://i.ibb.co/vCNpxDB/person-2.png"
            alt="writer image"
          />
          <div>
            <h3 className="text-xl font-semibold">Muhammad Masum Billah</h3>
            <p className="text-lg">{moment().format("MMMM D, YYYY")}</p>
          </div>
        </div>
        <div className="flex gap-6 text-2xl mx-auto">
          <Link
            to="https://www.facebook.com/profile.php?id=100036766350727"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link to="https://github.com/masumbillah99" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/masumbillah99/" target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>{" "}
      <article className="my-5 shadow-xl p-3 md:p-10 mx-2 lg:mx-0">
        <h1 className="text-3xl font-bold my-3">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <div className="leading-8 px-10">
          <p className="">
            An access token and a refresh token are commonly used in
            authentication systems to secure and manage user sessions. A refresh
            token just helps you re-validate a user without them having to
            re-enter their login credentials multiple times. The access token is
            re-issued, provided the refresh token is a valid one requesting
            permission to access confidential resources.
          </p>
          <div className="">
            <span className="font-semibold text-xl underline">
              Access Token:
            </span>{" "}
            <br />
            <ul className="list-disc">
              <li>
                An access token is a credential that is used to authenticate and
                authorize a user to access protected resources or perform
                specific actions on behalf of the user.
              </li>
              <li>
                It is typically a long, randomly generated string that is issued
                by an authentication server after a user successfully logs in or
                authenticates.
              </li>
              <li>
                The access token is usually included in the headers or
                authorization section of API requests to identify the user and
                grant them access to the requested resources.
              </li>
              <li>
                Access tokens have an expiration time, and once they expire, the
                user needs to obtain a new access token by re-authenticating.
              </li>
            </ul>
          </div>
          <div className="">
            <span className="font-semibold text-xl underline">
              Refresh Token:
            </span>{" "}
            <br />
            <ul className="list-disc">
              <li>
                A refresh token is a special token that is used to obtain a new
                access token without requiring the user to re-enter their
                credentials.
              </li>
              <li>
                It is typically issued alongside the access token during the
                initial authentication or login process.
              </li>
              <li>
                Unlike access tokens, refresh tokens have a longer lifespan and
                are used to request a new access token when the current one
                expires.
              </li>
              <li>
                Refresh tokens are securely stored and sent to the
                authentication server to obtain a new access token when needed.
              </li>
            </ul>
          </div>
          <span className="font-semibold text-xl underline">
            Storage of Tokens on the Client-side
          </span>{" "}
          <br />
          <ul className="">
            <li>
              Access tokens: Access tokens should be stored securely on the
              client-side to prevent unauthorized access. Commonly, they are
              stored in memory (RAM) or in a secure storage mechanism provided
              by the operating system or framework.
            </li>
            <li>
              Refresh tokens: Refresh tokens are more sensitive than access
              tokens and should be stored securely. They should not be
              accessible from client-side JavaScript to mitigate the risk of
              cross-site scripting (XSS) attacks. Commonly, they are stored in
              HTTP-only cookies or in secure storage mechanisms provided by the
              operating system or framework.
            </li>
          </ul>
        </div>
      </article>
      <article className="my-5 shadow-xl p-3 md:p-10 mx-2 lg:mx-0">
        <h1 className="text-3xl font-bold my-3">
          2. Compare SQL and NoSQL databases?
        </h1>
        <div className="leading-8 px-10">
          <table className="table-auto border-collapse w-full">
            <thead className="border">
              <tr>
                <th className="border border-slate-700 ">SQL Database</th>
                <th className="border border-slate-700 ">NoSQL Database</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 ">
                  SQL(Structured Query Language) is the standard language for
                  dealing with Relational databases.
                </td>
                <td className="border border-slate-700 ">
                  NoSQL databases are non-tabular databases and store data
                  differently than relational tables.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 ">
                  SQL database or relational database is a collection of highly
                  structured tables
                </td>
                <td className="border border-slate-700 ">
                  It avoids joins and is easy to scale.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 ">
                  Each row reflects a data entity, and every column defines a
                  specific information field.
                </td>
                <td className="border border-slate-700 ">
                  The major purpose of using a NoSQL database is for distributed
                  data stores with humongous data storage needs.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 ">
                  Relational database are built using the structured query
                  language (SQL) to create, store, update and retrieve data.
                </td>
                <td className="border border-slate-700 ">
                  NoSQL databases can be document based, key-value pairs, graph
                  databases.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 ">
                  Therefore, SQL is the underlying programming language for all
                  relational database management systems(RDBMS) such as mySQL,
                  Oracle and Sybase among others.
                </td>
                <td className="border border-slate-700 ">
                  NoSQL databases use dynamic schema for unstructured data.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};

export default Blog;
