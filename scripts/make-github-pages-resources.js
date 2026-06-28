import {lstatSync, opendirSync, rmSync, writeFileSync} from "node:fs";
import {copySync} from "fs-extra/esm";
import path from "node:path";

async function scanFolder(p) {
    const content = []

    const items = opendirSync(p);
    for await (const item of items) {
        const subPath = path.join(p, item.name);

        const stat = lstatSync(subPath);
        const isDirectory = stat.isDirectory();
        if (isDirectory) {
            content.push({
                    type: 'dir',
                    name: item.name,
                    content: await scanFolder(subPath)
                }
            );
        } else {
            content.push({
                    type: 'file',
                    name: item.name
                }
            );
        }
    }

    return content;
}

async function makeManifestFile(rootFolder) {
    const folders = await scanFolder(rootFolder);
    writeFileSync(path.join(rootFolder, "manifest.json"), JSON.stringify(folders, null, 2), 'utf8');
}

async function makeGitHubPagesResources(rootFolder) {
    try {
        rmSync(rootFolder, {recursive: true, force: true});
        copySync("./decks", rootFolder);
        await makeManifestFile(rootFolder);

        console.log('OK');
    } catch (err) {
        console.error('Error', err);
        process.exitCode = 1;
        throw err;
    }
}

await makeGitHubPagesResources("./dist");
