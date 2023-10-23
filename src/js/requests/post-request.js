import { checkStatus } from "./errors";

async function postRequest(path, token, id, isFavorite) {
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: id,
        favorite: isFavorite,
      }),
    });

    const body = await response.json();

    return checkStatus(response.status, body);
  } catch (error) {
    return {
      isSuccessful: false,
      status: `Ошибка ${error.name} : ${error.message}`,
      message:
        "Ошибка сервера. Проверьте подключение к сети или обратитесь к разработчику",
    };
  }
}

export { postRequest };