import {anAuthFetch} from "@chatUtils/apiFetchers.ts";

const basePath = "/chatbox";

export const fetchChatBoxes = () => anAuthFetch(basePath, null, "GET");
export const fetchMessages = (chatBoxId: string) => anAuthFetch(`${basePath}/${chatBoxId}`, null, "GET");