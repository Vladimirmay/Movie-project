import { checkStatus } from "./errors";

async function getRequest(path, token) {
  try {
    const response = await fetch(path, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
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

export { getRequest };