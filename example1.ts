interface Props {
  items: Item[];
}

interface Item {
  id: string;
  title: string;
  description: string;
}

const Component: FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => 
        <Item
          // It looks fine until we introduce reording functionality
          // Either way, passing `id` here is much better
          key={index}
          item={item}
        />
      )}
    </div>
  );
};
