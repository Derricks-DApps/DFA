import { Web3Storage, File } from 'web3.storage'
// getFilesFromPath gets it from local computer, so use File instead to create the object

function makeStorageClient() {
    return new Web3Storage({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFmYWU5ZjdCNTUxYTY1OTdmOTkxM2YzRWVkMmJiODRFNzE4YTQ4QjEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTAzNjI3MTkxMTQsIm5hbWUiOiJCTkIifQ.oMh5uEEug65jUjFLgr-FAUzIW_UvC2exc1wwvvAkYAI"
    })
}

function makeFileObjects() {
    // You can create File objects from a Buffer of binary data
    // see: https://nodejs.org/api/buffer.html
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    const obj = { hello: 'Title: Blocks and Buns \n Description: This is an FVM tutorial' }
    const buffer = Buffer.from(JSON.stringify(obj))

    const files = [
        new File(['Blocks and Buns \n Description: This is an FVM tutorial'], 'plain-utf8.txt'),
        new File([buffer], 'hello.json')
    ]
    return files
}

async function storeFiles(files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
}

const createdFiles = makeFileObjects();
storeFiles(createdFiles);
