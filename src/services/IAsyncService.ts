export default interface IAsyncService {
    /**
     * Prints the message and then calls the callback.
     * Passes error = null if successful
     * Passes error = Error if not successful
     * @param message
     * @param callback
     */
    printAndThen(message: string, callback: (error: Error | null) => void): void;

    /**
     * Returns a Promise that resolves with the midterm subjects
     */
    getMidterm1Subjects(): Promise<string[]>;
    getMidterm2Subjects(): Promise<string[]>;
    getMidterm3Subjects(): Promise<string[]>;
    getMidterm4Subjects(): Promise<string[]>;
}
