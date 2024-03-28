export const HeadingLarg = ({ children }: { children: React.ReactNode }) => (
  <h1 className=" font-bold text-2xl md:text-4xl leading-[33px] tracking-[-1px]">
    {children}
  </h1>
);

export const HeadingMedium = ({ children }: { children: React.ReactNode }) => (
  <h2 className=" font-bold text-2xl leading-[22px] tracking-[-0.75px]">
    {children}
  </h2>
);

export const HeadingSmall = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={` font-bold text-[15px] leading-[24px] tracking-[-0.25px] ${className}`}
  >
    {children}
  </h3>
);

export const HeadingSmallVariant = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <h4 className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px]">
    {children}
  </h4>
);

export const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={` font-bold text-sm leading-[18px] tracking-[-0.1px] ${className}`}
  >
    {children}
  </p>
);

export const ParagraphVariant = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={` font-bold text-sm leading-[15px] tracking-[-0.25px] ${className}`}
  >
    {children}
  </p>
);
