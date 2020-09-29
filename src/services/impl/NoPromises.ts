import {random, sleep} from "../../util/Util";

/**
 * You're not supposed to look in here. Go away!
 *
 *
 * okay yes you caught me; I implemented the NoPromises API with Promises. oopsie!
 */
export default {
    printAndThen: (message: string, callback: (error: Error | null) => void): void => {
        sleep(random(0, 50))
            .then(() => console.log(message))
            .then(() => callback(null));
    },
};
