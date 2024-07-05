type props = {
  link: string;
  label: string;
};

export const NavigationItems = ({ link, label }: props) => {
  return <a href={link}>{label}</a>;
};
