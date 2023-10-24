import {anAuthFetch} from "@chatUtils/apiFetchers.ts";

const basePath = "/chatbox";

export const fetchChatBoxes = () => anAuthFetch(basePath, null, "GET");