"use server"
import { Client } from "@notionhq/client"

const notion = new Client({ 
    auth: "secret_zgI74QrPotbxclZxsm23aSwP4AcPNmLECEp7doySxPr"
});





export async function getItems() {
    const response = await notion.databases.query({
        database_id: '4809a7d2a8ed4427899853217d65bba4',
    })

    return response.results;
}

// get block ids from page


export async function getDeveloperPage() {
    const response = await notion.blocks.children.list({
        block_id: 'e464c318359347f4aa937e8006dad20b',
    })

    return response;
}