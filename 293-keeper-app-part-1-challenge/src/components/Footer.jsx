let date = new Date();
let copyYear = date.getFullYear();

function Footer() {
    return (
        <footer>
            <p>
                &copy; Copyright {copyYear}
            </p>
        </footer>
    );
}

export default Footer;