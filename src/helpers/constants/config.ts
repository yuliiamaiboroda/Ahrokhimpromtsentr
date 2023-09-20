export const REVALIDATION_DELAY = 30;

// если вы начали выносить переменные env в этот файл, то добавте сюда REACT_APP_GOOGLE_API_KEY, а то ему одиноко в .env
// (что бы все было в одном месте, так удобней)
// еще я бы нижнюю строку написал бы так
// export const BASE_URL = process.env || 'http://api:3000';
// таким образом у тебя список переменных находиться на одном уровне, удобно когда их много
export const { BASE_URL = 'http://api:3000' } = process.env;
// 3000 - внутренний порт в докер, поэтому в докер компосе,
// если вы хотите использовать ссылку на другой имедж, нужно использовать его
// 5050 - внеший порт для использования ВНЕ контейнера, пример http://0.0.0.0:5050/api/vacancies/all
// команда docker ps
// https://monosnap.com/direct/dowZngq4Tw4WKeOchzjaaV8orbh1sP

// только не используй переменную в докере как дефолтную, потому что ты ее же пишешь в докер компосе
// лучше уже оставить ссылку на апи, которое запускается вне докера

// https://ahrokhimpromtsentr.cyclic.app
// remove
