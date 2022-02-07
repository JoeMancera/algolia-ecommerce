import NextHead from "next/head";

export const Head = ({ children, description }) => {
  return (
    <NextHead>
      <title>{children}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
