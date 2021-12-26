import { createContext } from "react";
import type { typeAppProviderValue } from "../../Types";

const defaultValue: typeAppProviderValue = {};
const AppDataContext = createContext<typeAppProviderValue>(defaultValue);

const { Provider: AppDataProvider } = AppDataContext;

export { AppDataContext };

export default AppDataProvider;
