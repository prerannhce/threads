import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64dc6155ebb67237f332');
  

    export const database = new Databases(client)

export default client; 