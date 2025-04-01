import { useState } from "react";

export default function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = async () => {
        const response = await fetch(
            "https://dmq5zvn1g5.execute-api.eu-south-2.amazonaws.com/test/DynamoDBManager",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ PK: firstName, SK: lastName }),
            }
        );

        if (response.ok) {
            alert("Данные успешно отправлены!");
        } else {
            alert("Ошибка при отправке данных");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80 flex flex-col items-center">
                <input
                    type="text"
                    placeholder="Имя"
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Фамилия"
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                    className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Отправить
                </button>
            </div>
        </div>
    );
}
