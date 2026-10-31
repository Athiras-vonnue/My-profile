function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {props.name} · Made with React ⚛️ and ❤️
      </p>
    </footer>
  );
}

export default Footer;
