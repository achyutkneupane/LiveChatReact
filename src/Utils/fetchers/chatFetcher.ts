import {anAuthFetch} from "@chatUtils/apiFetchers.ts";

const basePath = "/chatbox";

export const fetchChatBoxes = () => anAuthFetch(basePath, null, "GET");
export const fetchMessages = (chatBoxId: string) => anAuthFetch(`${basePath}/${chatBoxId}`, null, "GET");
export const sendMessage = (chatBoxId: string, content: string) => anAuthFetch(`${basePath}/${chatBoxId}/message`, {content}, "POST");
export const createNewBox = (receiverId: number) => anAuthFetch(`/chatbox/`, {
    participants: [receiverId]
}, "POST");

export const createNewGroupBox = (payload: {
    name: string,
    participants: number[]
}) => anAuthFetch(`/chatbox/`, payload, "POST");