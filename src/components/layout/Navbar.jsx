const composeEmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=gandamalateja@gmail.com&su=Portfolio%20enquiry';

export default function Navbar() { return <header className="nav-wrap"><a className="logo" href="#home">TG<span>.</span></a><nav aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></nav><a className="nav-contact" href={composeEmail}>Let's talk <span>↗</span></a></header>; }
