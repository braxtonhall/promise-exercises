import AsyncService from "./services/impl/AsyncService";

/**
 * Using only AsyncService.printAndThen(..);
 * Print in order: "Hello," "class." "How are you?"
 * If there is an error, should console.error("oopsie")
 * HINT: You shouldn't need to use Promises
 */
function printAWelcome(): void {
    AsyncService.printAndThen("Hello,", (error) => {
        if (error === null) {
            AsyncService.printAndThen("class.", ((error1) => {
                if (error1 === null) {
                    AsyncService.printAndThen("How are you?", (error2) => {
                        if (error2 !== null) {
                            console.error("oopsie!");
                        }
                    });
                } else {
                    console.error("oopsie!");
                }
            }));
        } else {
            console.error("oopsie!");
        }
    });
}

/**
 * Turn AsyncService.printAndThen(..) into a Promise
 * that only resolves after it has printed.
 * If there is an error, reject with the error.
 * HINT: start by returning a new Promise
 * @param message
 */
function promiseToPrint(message: string): Promise<void> {
    return new Promise((resolve, reject) => {
        AsyncService.printAndThen(message, (error) => {
            if (error === null) {
                return resolve();
            } else {
                return reject(error);
            }
        });
    });
}

/**
 * Using promiseToPrint(..), make the given strings
 * print in order.
 * \footnote{Can you imagine writing this with AsyncService.printAndThen(..) ???}
 * You want to print "Hello" and _then_ print "Elisa."
 *
 * If there is an error, should console.error("oopsie")
 */
function printAReply(): Promise<void> {
    return promiseToPrint("Hello")
        .then(() => promiseToPrint("Elisa."))
        .then(() => promiseToPrint("I'm"))
        .then(() => promiseToPrint("excited"))
        .then(() => promiseToPrint("for"))
        .then(() => promiseToPrint("lecture!"))
        .catch(() => console.error("oopsie"));
}

/**
 * Return a Promise that resolves with a single
 * array containing all midterm subjects
 *
 * If there is an error, should console.error("oopsie") and resolve with []
 */
function getMidtermSubjects(): Promise<string[]> {
    const futureMidterm1Subjects = AsyncService.getMidterm1Subjects();
    const futureMidterm2Subjects = AsyncService.getMidterm2Subjects();
    const futureMidterm3Subjects = AsyncService.getMidterm3Subjects();
    const futureMidterm4Subjects = AsyncService.getMidterm4Subjects();

    const arrayOfPromises = [
        futureMidterm1Subjects,
        futureMidterm2Subjects,
        futureMidterm3Subjects,
        futureMidterm4Subjects
    ];
    return Promise.all(arrayOfPromises)
        .then((midtermSubjects: string[][]) => {
            // .concat(ms[0], ms[1] ........, ms[n - 1]);
            return [].concat(...midtermSubjects);
        }).catch(() => {
            console.error("oopsie");
            return [];
        });
}

export {
    printAWelcome,
    promiseToPrint,
    printAReply,
    getMidtermSubjects
};
