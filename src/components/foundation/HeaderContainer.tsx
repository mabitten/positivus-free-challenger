interface HeaderContainerProps {
  title: string;
  children: React.ReactNode;
}

const HeaderContainer = ({ title, children }: HeaderContainerProps) => {
  return (
    <header className="flex flex-col md:flex-row justify-center gap-10 items-center md:justify-start">
      <h2 className="text-4xl md:text-[2.5rem] font-medium bg-secondary px-1.5 rounded-[.4375rem]">{title}</h2>
      <p className="text-lg text-black font-normal leading-6 text-center md:text-left">
        {children}
      </p>
    </header>
  );
};

export { HeaderContainer };