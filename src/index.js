import modules from "./ladminViteInputs";
export default ladminViteInputs = (assets) => [...assets, ...modules()];