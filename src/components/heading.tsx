interface HeadingProps {
  title: string;
  description: string;
  sub_title: string;
}

export const Heading = ({ title, description, sub_title }:HeadingProps) => {
  return (
    <div>
      <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
      <p className='text-muted-foreground text-sm'>{description}</p>
      <h6 className="text-red-500 text-sm">{sub_title}</h6>
    </div>
  );
};