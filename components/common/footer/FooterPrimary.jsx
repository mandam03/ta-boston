import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="INFORMATION">
              INFORMATION
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact us">
              Contact us
            </Link>
          </li>

          <li>
            <Link href="/" title="Track my order">
              Track my order
            </Link>
          </li>

          <li>
            <Link href="/" title="Shipping">
              Shipping
            </Link>
          </li>

          <li>
            <Link href="/" title="Free Returns*">
              Free Returns*
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="SERVICES">
              SERVICES
            </Link>
          </li>

          <li>
            <Link href="/" title="Ship to store">
              Ship to store
            </Link>
          </li>

          <li>
            <Link href="/" title="Gift card">
              Gift card
            </Link>
          </li>

          <li>
            <Link href="/" title="Online only">
              Online only
            </Link>
          </li>

          <li>
            <Link href="/" title="Tips & tricks">
              Tips & tricks
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="LOYALTY PROGRAMS">
              LOYALTY PROGRAMS
            </Link>
          </li>

          <li>
            <Link href="/" title="Sign up to The Simons">
              Sign up to The Simons
            </Link>
          </li>

          <li>
            <Link href="/" title="Informatii">
              Informatii
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>

          <li>
            <Link href="/" title="Conditions">
              Conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="FAQ">
              FAQ
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="CAREERS">
              CAREERS
            </Link>
          </li>

          <li>
            <Link href="/" title="About US">
              About US
            </Link>
          </li>

          <li>
            <Link href="/" title="Our Story">
              Our Story
            </Link>
          </li>

          <li>
            <Link href="/" title="Art & Culture">
              Art & Culture
            </Link>
          </li>

          <li>
            <Link href="/" title="Our private labels">
              Our private labels
            </Link>
          </li>

          <li>
            <Link href="/" title="Stores">
              Stores
            </Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact">
        <p>Thread Affair Milano</p>

        <p>
          Largo Augusto 3, Milano, 20122, Milano, IT
          <a href="tel:+078123313344" title="Call us">
            Tel: +078123313344
          </a>
          <a href="mailto:pixellab@gmail.com" title="E-mail us">
            pixellab@gmail.com
          </a>
        </p>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:+078123313344" title="Call us">
              <i className="fa-solid fa-phone"></i>
              Support
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer" title="Chat">
              <i className="fa-solid fa-comments"></i>
              Chat
            </a>
          </li>

          <li>
            <a href="mailto:pixellab@gmail.com" title="E-mail">
              <i className="fa-solid fa-envelope"></i>
              E-mail
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
