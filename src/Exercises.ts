import AsyncService from "./services/impl/AsyncService";

/**
 * Using only AsyncService.printAndThen(..);
 * Print in order: "Hello," "class." "How are you?"
 * If there is an error, should console.error("oopsie")
 * HINT: You shouldn't need to use Promises
 */
function printAWelcome(): void {
    // TODO
    AsyncService.printAndThen("Hello,", (tmp) => tmp);
    throw new Error("Stub - Not Implemented");
}

/**
 * Turn AsyncService.printAndThen(..) into a Promise
 * that only resolves after it has printed.
 * If there is an error, reject with the error.
 * HINT: start by returning a new Promise
 * @param message
 */
function promiseToPrint(message: string): Promise<void> {
    // TODO
    return Promise.reject(new Error("Stub - Not Implemented"));
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
    // TODO
    promiseToPrint("Hello");
    promiseToPrint("Elisa.");
    promiseToPrint("I'm");
    promiseToPrint("excited");
    promiseToPrint("for");
    promiseToPrint("lecture!");
    return Promise.reject(new Error("Stub - Not Implemented"));
}

/**
 * Return a Promise that resolves with a single
 * array containing all midterm subjects
 *
 * If there is an error, should console.error("oopsie") and resolve with []
 */
function getMidtermSubjects(): Promise<string[]> {
    // TODO
    const futureMidterm1Subjects = AsyncService.getMidterm1Subjects();
    const futureMidterm2Subjects = AsyncService.getMidterm2Subjects();
    const futureMidterm3Subjects = AsyncService.getMidterm3Subjects();
    const futureMidterm4Subjects = AsyncService.getMidterm4Subjects();
    return Promise.reject(new Error("Stub - Not Implemented"));
}

export {
    printAWelcome,
    promiseToPrint,
    printAReply,
    getMidtermSubjects
};
