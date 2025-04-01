function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    fetch("https://dmq5zvn1g5.execute-api.eu-south-2.amazonaws.com/test/DynamoDBManager", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({PK: firstName, SK: lastName})
    })
        .then(response => {
            if (response.ok) {
                alert("Данные успешно отправлены!");
            } else {
                alert("Ошибка при отправке данных");
            }
        })
        .catch(error => {
            console.error("Ошибка:", error);
            alert("Ошибка сети или сервера");
        });
}