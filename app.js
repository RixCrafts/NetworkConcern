const app = document.getElementById('app');

function Header(props) {
    return (
        <header id="home">
            <h6>Website in progress...</h6>
            <NavBar />
            Logo
            Feature profiles
        </header>);
}

function NavBar() {
    const menuElements = ["Home", "Who we are", "Our Services", "Why us", "Blog"];

    return (
        <nav id="top-nav">
            <ul>
                {menuElements.map((element) => (<li>{element}</li>))}
            </ul>
            <button id="nav-contact-btn" type="button">
                <h3>Contact Us</h3>
            </button>
        </nav>
    );
}

function HomePage() {
    return (
        <div>
            <Header title="NetCon" />
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);