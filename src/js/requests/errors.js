const STATUSES_OK = {
    200: 200,
    201: 201,
  };
  const STATUSES_ERROR = {
    400: 400,
    401: 401,
    404: 404,
  };
  
  function checkStatus(status, body) {
    switch (status) {
      case STATUSES_OK[200]:
      case STATUSES_OK[201]: {
        return {
          isSuccessful: true,
          result: body,
        };
      }
      case STATUSES_ERROR[400]: {
        return {
          isSuccessful: false,
          status: `Ошибка ${status}`,
          message: "Некорректный запрос. Пожалуйста, обратитесь к разработчику",
        };
      }
      case STATUSES_ERROR[401]: {
        return {
          isSuccessful: false,
          status: `Ошибка ${status}`,
          message: "Ошибка авторизации. Проверьте правильность введённого токена",
        };
      }
      case STATUSES_ERROR[404]: {
        return {
          isSuccessful: false,
          status: `Ошибка ${status}`,
          message: "Не удалось найти данные по запросу",
        };
      }
      default: {
        return {
          isSuccessful: false,
          status: `Ошибка ${status}`,
          message: "Пожалуйста, обратитесь к разработчику",
        };
      }
    }
  }
  
  export { checkStatus };