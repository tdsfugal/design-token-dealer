import { createContext } from "react";
import { DesignContextType } from "../design-interfaces";

const DesignContext = createContext<DesignContextType>({});

export default DesignContext;
