import {AiFillSetting} from "react-icons/ai";

interface ChatBoxItemProps {
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    iAmLastSender: boolean;
    isUnread: boolean;
}

const Sidebar = () => {
    const items : ChatBoxItemProps[] = [
        {
            name: "Alice Doe",
            lastMessage: "This is me Alice",
            lastMessageTime: "2021-10-10 12:00:00",
            iAmLastSender: true,
            isUnread: false,
        }, {
            name: "Bob Doe",
            lastMessage: "Hello Achyut",
            lastMessageTime: "2022-10-10 12:00:00",
            iAmLastSender: false,
            isUnread: false,
        }, {
            name: "Charlie Doe",
            lastMessage: "Hello Achyut, I am Charlie",
            lastMessageTime: "2023-01-23 02:54:19",
            iAmLastSender: false,
            isUnread: true,
        }, {
            name: "David Doe",
            lastMessage: "Hello Achyut, I am David",
            lastMessageTime: "2023-01-23 02:54:19",
            iAmLastSender: true,
            isUnread: false,
        }, {
            name: "Alice Doe",
            lastMessage: "This is me Alice",
            lastMessageTime: "2021-10-10 12:00:00",
            iAmLastSender: true,
            isUnread: false,
        }, {
            name: "Bob Doe",
            lastMessage: "Hello Achyut",
            lastMessageTime: "2022-10-10 12:00:00",
            iAmLastSender: false,
            isUnread: false,
        }, {
            name: "Charlie Doe",
            lastMessage: "Hello Achyut, I am Charlie",
            lastMessageTime: "2023-01-23 02:54:19",
            iAmLastSender: false,
            isUnread: true,
        }, {
            name: "David Doe",
            lastMessage: "Hello Achyut, I am David",
            lastMessageTime: "2023-01-23 02:54:19",
            iAmLastSender: true,
            isUnread: false,
        }, {
            name: "Alice Doe",
            lastMessage: "This is me Alice",
            lastMessageTime: "2021-10-10 12:00:00",
            iAmLastSender: true,
            isUnread: false,
        }, {
            name: "Bob Doe",
            lastMessage: "Hello Achyut",
            lastMessageTime: "2022-10-10 12:00:00",
            iAmLastSender: false,
            isUnread: false,
        }, {
            name: "Charlie Doe",
            lastMessage: "Hello Achyut, I am Charlie",
            lastMessageTime: "2023-01-23 02:54:19",
            iAmLastSender: false,
            isUnread: true,
        }, {
            name: "David Doe",
            lastMessage: "Hello Achyut, I am David",
            lastMessageTime: "2023-01-23 02:54:19",
            iAmLastSender: true,
            isUnread: false,
        }
    ];
    return (
        <>
            <div className="bg-white border-r-2 border-primary border-opacity-50 w-96 h-screen p-3 overflow-y-auto">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center">
                        <div className="w-20 h-20 bg-primary rounded-full"></div>
                        <div className="ml-2">
                            <h1 className="text-xl font-bold text-primary">Username</h1>
                            <h2 className="text-sm">
                                <span className="text-primary">Online</span>
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end items-center">
                        <AiFillSetting />
                    </div>
                </div>
                <hr className="mt-3" />
                <div className="mt-3">
                    <input type="text" className="w-full h-10 rounded-full border-2 border-primary border-opacity-50 p-2" placeholder="Search" />
                </div>
                <div className="mt-3 flex flex-col gap-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-row justify-start items-center border border-primary border-opacity-40 p-4 rounded-2xl">
                            <div className="w-10 h-10 bg-primary rounded-full relative">
                                {item.isUnread && (
                                    <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0 right-0"></div>
                                )}
                            </div>
                            <div className="ml-2">
                                <h1 className={`text-base ${item.isUnread ? "font-bold" : ""} text-primary`}>{item.name}</h1>
                                <h2 className={`text-sm ${item.isUnread ? "font-bold" : ""}`}>
                                    <span className="text-primary">{item.iAmLastSender ? "You: " : item.name.split(" ")[0] + ": "}</span>
                                    <span className="text-primary">{item.lastMessage}</span>
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sidebar;