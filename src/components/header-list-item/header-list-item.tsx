type HeaderListItemProps = {
  name: string;
  link: string;
};

export const HeaderListItem = ({ name, link }: HeaderListItemProps) => {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
};
