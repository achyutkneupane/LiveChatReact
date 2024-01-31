export interface ChatBoxResponse {
    id: number;
    participants: string[];
    name: string;
    createdAt: Date;
    updatedAt: Date;
    lastMessage: null | string;
    lastMessageTime: Date | null;
    iAmLastSender: boolean | null;
    isUnread: boolean;
}

export interface MessageResponse {
    id: number;
    sender: Partial<UserResponse>;
    senderName: string;
    content: string;
    chatBox: string;
    replyTo: null | string;
    isForwarded: boolean;
    createdAt: Date;
    updatedAt: Date;
    isMe: boolean;
}

export interface UserResponse {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
}
