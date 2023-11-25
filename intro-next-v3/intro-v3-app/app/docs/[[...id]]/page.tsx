type ParamsProp = {
  params: string | number;
};
const DocsPage = ({ params }: ParamsProp) => {
  console.log(params);

  return <div>Docs page</div>;
};

export default DocsPage;
