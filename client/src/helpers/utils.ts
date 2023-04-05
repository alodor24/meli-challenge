export const currencyFormatter = ({
  currency,
  value,
}: {
  currency: string;
  value: number;
}) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    minimumFractionDigits: 0,
    currency,
  });

  return formatter.format(value);
};
