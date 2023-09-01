import NavBarMain from './PageSections/NavBarMain';

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBarMain />
      <div>{children}</div>
    </main>
  );
};

export default SiteLayout;
