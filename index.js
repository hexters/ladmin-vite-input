import modules from "./src/ladminViteInputs";
export default ladminViteInputs = (assets) => [...assets, ...modules()];