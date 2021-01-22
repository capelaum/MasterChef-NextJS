import Link from "next/Link";

export default function Footer() {
    return (
        <footer className="footer">
            <Link href="https://github.com/capelaum" target="_blank">
            <a target="_blank">
                <i class="fab fa-github"></i> Capela MasterChef
            </a>
            </Link>
        </footer>
    );
}
