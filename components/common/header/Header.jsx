import HeaderSecondary from './HeaderSecondary';
import HeaderPrimary from './HeaderPrimary';

export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <HeaderSecondary></HeaderSecondary>
      </section>

      <section className="header-primary d-none d-lg-block mt-lg-5">
        <HeaderPrimary></HeaderPrimary>
      </section>
    </>
  );
}
