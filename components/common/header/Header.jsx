import HeaderSecondary from '../../HeaderSecondary';
import HeaderPrimary from './HeaderPrimary';

export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <HeaderSecondary></HeaderSecondary>
      </section>

      <section className="header-primary">
        <HeaderPrimary></HeaderPrimary>
      </section>
    </>
  );
}
