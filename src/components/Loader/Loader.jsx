import { Oval } from "react-loader-spinner";

const Loader = () => (
  <div className="flex justify-center items-center h-[200px]">
    <Oval height={60} width={60} color="#36d7b7" visible={true} />
  </div>
);

export default Loader;
