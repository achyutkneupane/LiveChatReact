export interface ChatBoxResponse {
    _id:             string;
    participants:    string[];
    name:            string;
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
    lastMessage:     null | string;
    lastMessageTime: Date | null;
    iAmLastSender:   boolean | null;
    isUnread:        boolean;
}
