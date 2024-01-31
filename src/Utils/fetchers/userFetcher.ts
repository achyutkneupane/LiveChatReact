import {anAuthFetch} from "@chatUtils/apiFetchers.ts";

const basePath = "/auth/users";
export const getOtherUsers = () => anAuthFetch(basePath, null, "GET");