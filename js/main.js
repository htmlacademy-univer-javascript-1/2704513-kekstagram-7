// Массив описаний фотографий
const DESCRIPTIONS = [
  'Закат на море',
  'Прогулка в парке',
  'Встреча с друзьями',
  'Новый рецепт пирога',
  'Путешествие в горы',
  'Утренний кофе',
  'Кот на подоконнике',
  'Городские огни ночью',
  'Первый снег',
  'День рождения',
  'Пляжный отдых',
  'Концерт любимой группы',
  'Прогулка с собакой',
  'Новая книга',
  'Выходные за городом',
  'Цветущий сад',
  'Спортивная тренировка',
  'Вечеринка с друзьями',
  'Посещение музея',
  'Приготовление ужина',
  'Катание на велосипеде',
  'Пикник в лесу',
  'Рыбалка на озере',
  'Фотосессия в студии',
  'Поездка на море'
];

// Массив сообщений для комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Массив имён комментаторов
const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'Анна',
  'Дмитрий',
  'Елена',
  'Александр',
  'Ольга',
  'Максим',
  'Татьяна'
];

// Функция для получения случайного числа от min до max включительно
const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для получения случайного элемента массива
const getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// Функция для генерации одного комментария
let commentId = 1;
const createComment = function () {
  const comment = {
    id: commentId++,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES)
  };

  // С вероятностью 50% добавляем второе сообщение
  if (Math.random() > 0.5) {
    comment.message += ` ${getRandomElement(MESSAGES)}`;
  }

  return comment;
};

// Функция для генерации массива комментариев
const createComments = function () {
  const commentsCount = getRandomNumber(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return comments;
};

// Функция для генерации одной фотографии
const createPhoto = function (id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[id - 1],
    likes: getRandomNumber(15, 200),
    comments: createComments()
  };
};

// Функция для генерации массива из 25 фотографий
const createPhotos = function () {
  const photosArray = [];

  for (let i = 1; i <= 25; i++) {
    photosArray.push(createPhoto(i));
  }

  return photosArray;
};

// Генерируем массив фотографий
const photos = createPhotos();
