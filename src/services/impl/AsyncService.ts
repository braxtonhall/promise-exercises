import IAsyncService from "../IAsyncService";
import NoPromises from "./NoPromises";
import SomePromises from "./SomePromises";

/**
 * There's nothing for you to see here. Begone!
 */
const asyncService: IAsyncService = {
    ...NoPromises,
    ...SomePromises,
};

export default asyncService;
