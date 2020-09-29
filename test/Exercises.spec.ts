import {expect} from "chai";
import * as Exercises from "../src/Exercises";
import {sleep} from "../src/util/Util";

describe("Exercise Validation", function () {
    const mockConsole: {[method: string]: string[]} = {
        log: [],
        warn: [],
        error: [],
    };

    before(() => {
        Object.keys(mockConsole).forEach((method) => {
            (console as any)[method] = (...msg: any[]) => mockConsole[method].push(...msg);
        });
    });

    beforeEach(() => {
        Object.keys(mockConsole).forEach((method) => mockConsole[method] = []);
    });

    // printAWelcome
    it("Should print a welcome", function () {
        Exercises.printAWelcome();
        return sleep(200).then(() => {
            expect(mockConsole.log).to.deep.equal(["Hello,", "class.", "How are you?"]);
        });
    });

    it("Should print a welcome three times", function () {
        // There's a one in six chance that the test above just passes if not synchronized
        // This test is only 1 in 216 I think
        Exercises.printAWelcome();
        return sleep(200).then(() => {
            Exercises.printAWelcome();
            return sleep(200);
        }).then(() => {
            Exercises.printAWelcome();
            return sleep(200);
        }).then(() => {
            expect(mockConsole.log).to.deep.equal([
                "Hello,", "class.", "How are you?",
                "Hello,", "class.", "How are you?",
                "Hello,", "class.", "How are you?"
            ]);
        });
    });

    // promiseToPrint
    it("Should make a Promise to print", function () {
        const expected = "Blue Jay Way";
        return Exercises.promiseToPrint(expected).then(() => {
            expect(mockConsole.log).to.deep.equal([expected]);
        });
    });

    it("Should make a Promise to print a 10", function () {
        const expected = "Vespertine";
        return Exercises.promiseToPrint(expected).then(() => {
            expect(mockConsole.log).to.deep.equal([expected]);
        });
    });

    // printAReply
    it("Should print a response", function () {
        // 1 in 720 chance of passing even if not synchronized
        return Exercises.printAReply().then(() => {
            expect(mockConsole.log).to.deep.equal([
                "Hello", "Elisa.",
                "I'm", "excited", "for", "lecture!",
            ]);
        });
    });

    // getMidtermSubjects
    it("Should get the midterm subjects", function () {
        const expected = [
            "Testing",
            "Process", "History", "Requirements",
            "Refactoring",
            "REST", "Principles"
        ];
        return Exercises.getMidtermSubjects().then((subjects: string[]) => {
            expect(subjects).to.be.an.instanceOf(Array);
            expect(subjects).to.have.length(expected.length);
            expect(subjects).to.have.deep.members(expected);
        });
    });
});
