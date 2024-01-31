import {FiEdit} from "react-icons/fi";
import {useEffect, useState} from "react";
import ModalLayout from "@chatComponents/Layouts/Modal/ModalLayout.tsx";
import {UserResponse} from "@chatTypes/response.ts";
import {getOtherUsers} from "@chatUtils/fetchers/userFetcher.ts";
import {fullName} from "@chatUtils/helpers.ts";
import toast from "react-hot-toast";
import {createNewBox} from "@chatUtils/fetchers/chatFetcher.ts";
import {useNavigate} from "react-router-dom";

const CreateChatBox = () => {
    const nav = useNavigate();

    const [showModal, setShowModal] = useState<boolean>(false);

    const [users, setUsers] = useState<UserResponse[]>([]);
    const [activeId, setActiveId] = useState<number>(0);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        showModal ? getOtherUsers().then((res : {
            data: UserResponse[];
        }) => {
            setUsers(res.data);
        }) : setActiveId(0);
    }, [showModal]);

    const createChatBox = () => {
        if(activeId == 0) {
            toast.error("Select Recipient first!");
            return;
        }
        createNewBox(activeId).then((res) => {
            closeModal();
            nav(`/${res.chatBox.id}`, {
                state: {
                    title: res.chatBox.name
                }
            });
        });
    }

    return (
        <>
            <button
                className="w-16 h-16 bg-primary bg-opacity-90 rounded-full flex justify-center items-center text-white text-3xl border-4 border-white"
                onClick={openModal}
            >
                <FiEdit className="stroke-white p-2"/>
            </button>
            {showModal && (
                <>
                    <ModalLayout closeModal={closeModal}>
                        {users?.length > 0 && users?.map((user) => (
                            <div
                                className={`flex flex-row justify-between items-center py-2 px-4 rounded-xl cursor-pointer ${activeId === user.id ? "bg-primary" : ""}`}
                                key={user.id}
                                onClick={() => setActiveId(user.id)}
                            >
                                <div className="flex flex-row justify-start items-center gap-2">
                                    <div className={`w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl ${activeId === user.id ? "bg-white" : "bg-primary"}`}>
                                        <h1 className={`text-2xl text-center ${activeId === user.id ? "text-primary" : "text-white"}`}>
                                            {user.firstName[0]}
                                        </h1>
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                        <div className={`text-xl ${activeId === user.id ? "text-white" : "text-primary"}`}>
                                            {fullName(user.firstName, user.middleName, user.lastName)}
                                        </div>
                                        <p className={`text-xs ${activeId === user.id ? "text-gray-300" : "text-gray-500"}`}>
                                            {user.username}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            className={`w-full h-10 bg-primary rounded-md text-white mt-4 ${activeId === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={activeId === 0}
                            onClick={createChatBox}
                        >
                            Start Chat
                        </button>
                    </ModalLayout>
                </>
            )}
        </>
    )
}

export default CreateChatBox;