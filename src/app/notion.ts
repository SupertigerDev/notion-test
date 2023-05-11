"use server"
import { Client } from "@notionhq/client"

export interface NotionPageResult {
    id: string;
    paragraph: {
        rich_text: {
            plain_text: string
        }[]
    }
}
export interface NotionTableResult {
    id: string;
    properties: {
        [key: string]: {
            title?: { text: { content: string } }[]
            rich_text: {
                text: {
                    content: string;
                }
            }[]
        }
    }
}

const notion = new Client({
    auth: "xxxxx"
});


export async function getItems() {
    const response = await notion.databases.query({
        database_id: '4809a7d2a8ed4427899853217d65bba4',
    })

    return response.results as NotionTableResult[];
}


export async function getDeveloperPage() {
    const response = await notion.blocks.children.list({
        block_id: 'e464c318359347f4aa937e8006dad20b',
    })

    return response.results as NotionPageResult[];
}