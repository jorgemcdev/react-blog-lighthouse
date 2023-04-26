import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import (/* webpackPreload: true */ "./homepage.css");

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </main>
    </>
  );
}
