# Структура проекта
```
dist - билд файлы для прода
public - папка ассетов (картинки, модели и т.д.)
src 
├─ cases - страницы кейсов (игровые, продуктовые)
├─ components - UI компоненты
├─ constants - статичные данные для разных частей (список кейсов, соц. сети)
├─ hooks - вспомогательные функции для react'а
├─ i18n - локализация
├─ modules - более сложные UI компоненты
├─ stores - конфигурация хранения данных
├─ types - типизация
├─ utils - вспомогательные функции
```

# Установка
### Скачать пакеты
 - [NodeJS](https://nodejs.org/en)
 - [Git](https://git-scm.com)
 - [Bun](https://bun.sh)

### Склонировать репо
```bash
git clone https://github.com/BADtochka/designby4roff
```

### Открыть VSCode в папке проекта
- Открыть терминал
- Установить зависимости
```bash
bun i
```

- Запустить dev режим (локально)
```bash
bun run start:dev
```

- Билд проекта
```bash
bun run build
```

# Добавление страницы проекта
> [!NOTE]
> Для удобства лучше выполнять эти шаги по порядку

### Создание локализации для кейса
- Запустить
```bash
bun run i18n
```

- Открыть файл `i18n/ru/index.ts`
- Добавить объект под `casesList.product` или `caseList.game`:
```TS
caseName: {
  name: 'Название на русском Case Name',
  description: 'Описание на русском Case Name',
  localizedString: 'Строка на русском, можно использовать любое название',
  // . . . другая локализация
}
```

caseName - будет использоваться в дальнейшем для конфигурации и названии страницы в URL.\
Например:\
Ключ для кейса `case1`\
URL страницы будет
`domain.com/cases/product/case1`
и т.д.
> [!NOTE]
> Все поля после `description`, являются необязательными и могут называться как угодно

- Повторить то же самое для EN локализации в файле i18n/en/index.ts

### Создание и наполнение страницы
- В папке `cases/` есть папка `Case1` с файлом `index.tsx`, можно скопировать эту папку и назвать подходящим под кейс образом
- В файле `index.tsx` есть все доступные компоненты с доступными свойствами. Структура похожа на обычный html с отличием, что это JSX от React'а
- Отредактировать компоненты под нужды страницы

### Конфигурация кейса
- Открыть файл `constants/caseList.tsx`
- Добавить объект в соответствующую категорию кейса по аналогии с локализацией\
Например:\
```TS
case1: {
  image: 'card.png', // файл изображение необходимо разместить в папку public/cases/
  page: <Case1 />, // компонент страницы из папки cases/Case1
  startDate: '12.2005', // Формат даты MM.YYYY
  // CTRL + SPACE для просмотра необязательных свойств
},
```

### Тестирование
- Запустить
```bash
bun run start:dev
```
- Потыкать
- Сбилдить 
```bash
bun run build
```

# Деплой
> [!IMPORTANT]
> Перед ручным деплоем необходимо удалять старые файлы, чтобы избежать конфликтов и ошибок.

- Если нет автоматических решений, взять все файлы из папки `dist` и поместить на хост.
- При этом, важно чтобы прокси сервер отсылал все запросы в `index.html`
