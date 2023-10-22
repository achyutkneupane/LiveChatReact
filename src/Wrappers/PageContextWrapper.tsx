import {FC} from "react";
import type {LayoutProps} from "@chatTypes/general.ts";
import {PageContext} from "@chatHooks/usePageTitle.ts";
import {APP_NAME} from "@chatSys/env";

const PageContextWrapper: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <PageContext.Provider value={{
                setPageTitle: (title: string) => {
                    document.title = title + " | " + APP_NAME;
                }
            }}>
                {children}
            </PageContext.Provider>
        </>
    );
};

export default PageContextWrapper;