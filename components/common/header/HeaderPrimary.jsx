import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <nav className="nav-primary">
        <ul>
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="COSTUME">
              COSTUME
            </Link>
          </li>

          <li>
            <Link href="/" title="CAMASI">
              CAMASI
            </Link>
          </li>

          <li>
            <Link href="/" title="ACCESORII">
              ACCESORII
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="nav-secondary">
        <ul>
          <li>
            <Link href="/" title="Glamour Suits">
              Glamour Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="WEDDING SUITS">
              WEDDING SUITS
            </Link>
          </li>

          <li>
            <Link href="/" title="OFFICE SUITS">
              OFFICE SUITS
            </Link>
          </li>

          <li>
            <Link href="/" title="CUSTOMIZE YOUR SUIT">
              CUSTOMIZE YOUR SUIT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
