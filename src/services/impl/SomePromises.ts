/**
 * This file is off limits! No peeking!
 */
export default {
    // deprecated, but helpful?
    errorIf: (shouldError: boolean): Promise<void> => {
        return new Promise<void>((resolve, reject) => {
           if (shouldError) {
               return reject(new Error("You told me to error!"));
           } else {
               return resolve();
           }
        });
    },
    getMidterm1Subjects: (): Promise<string[]> => {
        return Promise.resolve(["Testing"]);
    },
    getMidterm2Subjects: (): Promise<string[]> => {
        return Promise.resolve(["Process", "History", "Requirements"]);
    },
    getMidterm3Subjects: (): Promise<string[]> => {
        return Promise.resolve(["Refactoring"]);
    },
    getMidterm4Subjects: (): Promise<string[]> => {
        return Promise.resolve(["REST", "Principles"]);
    },
};
