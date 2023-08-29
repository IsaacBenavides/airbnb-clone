interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({ title, subtitle, center }: Props) {
  return (
    <section className={`${center ? "text-center" : "text-start"}`}>
      <header className="text-2xl font-bold">{title}</header>
      <section className="font-light text-neutral-500 mt-2">{subtitle}</section>
    </section>
  );
}
