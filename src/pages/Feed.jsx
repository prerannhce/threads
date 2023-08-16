import React, {useEffect, useState} from "react";
import { database } from "../appwriteConfig";
import Thread from "../components/Thread";

const Feed = () => {


const[threads, setThreads] = useState([])

useEffect(() =>{
  getThreads()
  },[])

const getThreads = async () => {
  const response = await database.listDocuments("64dc63a4a13abcc00a82","64dc63c52f4f648e6f84")

  setThreads(response.documents)
}

  return (
    <div className="container mx-auto max-w w-[600px]">
      {threads.map(thread => (
            <Thread key={thread.$id} thread={thread} />
        ))}
    </div>
  );
};

export default Feed;
