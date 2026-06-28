import {lstatSync, rmSync, opendirSync, writeFileSync} from "node:fs";
import {copySync} from "fs-extra/esm";
import path from "node:path";

rmSync("./dist", { recursive: true, force: true });
copySync("./decks", "./dist");

const folders = [];
const decks = opendirSync("./dist");
for await (const deck of decks) {

    const deckPath = path.join("./dist", deck.name);
    const deckStat = lstatSync(deckPath);
    if (!deckStat.isDirectory()) {
        continue;
    }

    const flashcards = opendirSync(deckPath);
    const fcs = [];
    for await (const fc of flashcards) {
        const flashcardPath = path.join(deckPath, fc.name)

        const stat = lstatSync(flashcardPath);
        const isDirectory = stat.isDirectory();
        if (isDirectory) {
            const content = opendirSync(flashcardPath);
            const contentFiles = [];
            for await (const c of content) {
                contentFiles.push({
                    type: 'file',
                    name: c.name
                })
            }
            fcs.push({
                    type: 'dir',
                    name: fc.name,
                    content: contentFiles
                }
            );
        } else {
            fcs.push({
                    type: 'file',
                    name: fc.name
                }
            );
        }
    }

    folders.push({
            type: 'dir',
            name: deck.name,
            flashcards: fcs
        }
    );
}

const deckFile = {
    decks: folders
}

const jsonData = JSON.stringify(deckFile, null, 2);
try {
    writeFileSync("dist/manifest.json", jsonData, 'utf8');
    console.log('Data written to file');
} catch (err) {
    console.error('Error writing to file', err);
}
