import {anFetch} from "@chatUtils/apiFetchers.ts";

const basePath = "/auth";

export const loginUser = (body: any) => anFetch(basePath + "/login", body, "POST");