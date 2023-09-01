import Link from 'next/link';

export interface NavItemProps {
  title: string;
  link: string;
}

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <Link href={link} replace>
      {title}
    </Link>
  );
};

export default NavItem;
