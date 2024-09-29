interface Props {
  params: {
    id: string;
  };
}

export default function Product({ params }: Props) {
  const { id } = params;
  return (
    <div>
      <h1>Product #${id}</h1>
    </div>
  );
}
