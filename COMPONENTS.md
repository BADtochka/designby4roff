<details>
  <summary><h2>AboutCase - О кейсе</h2></summary>
  <img width="1175" height="592" alt="изображение" src="https://github.com/user-attachments/assets/f619d24c-a5f1-403a-b3df-faff89d8b749" />
  
Пример:
```TSX
<AboutCase title={L.caseTitle} description={L.caseDescription} noBorder>
  <AboutCaseInfo title={L.hello} description={L.name} />
  <AboutCaseInfo title={L.info1Title} description={L.info1Description} />
  <AboutCaseInfo title={L.info2Title} description={L.info2Description} url='https://google.com' />
</AboutCase>
```

| Свойство              | Описание                                     | Значение по умолчанию |
|-----------------------|----------------------------------------------|-----------------------|
| `title: string`       | Заголовок кейса                              | -                     |
| `description: string` | Основное описание кейса                      | -                     |
| `noBorder: boolean`   | Убирает границу у компонента                 | `false`               |
| `children: ReactNode` | Дочерние элементы (компоненты AboutCaseInfo) | -                     |
</details>

<details>
  <summary><h2>AboutCaseInfo - Пункты в описании о кейсе</h2></summary>
  <img width="1175" height="592" alt="изображение" src="https://github.com/user-attachments/assets/f619d24c-a5f1-403a-b3df-faff89d8b749" />

| Свойство              | Описание                          | Значение по умолчанию |
|-----------------------|-----------------------------------|-----------------------|
| `title: string`       | Заголовок информационного блока   | -                     |
| `description: string` | Описание информационного блока    | -                     |
| `url?: string`         | Ссылка для перехода              | -                     |
</details>

<details>
  <summary>
    <h2>CaseImage - Большая картинка</h2>
  </summary>
  <img 
    width="1153" 
    height="690" 
    alt="Пример компонента CaseImage" 
    src="https://github.com/user-attachments/assets/269016af-60f2-4410-9d0b-3444ad2c2aad" 
  />

  
| Свойство                  | Описание                                                  |
|---------------------------|-----------------------------------------------------------|
| `src: string`             | Путь до картинки в папке `public`                         |
| `className: string`       | Классы для стилизации (Tailwind)                          |
| `parentClassName: string` | Классы для стилизации родительского контейнера (Tailwind) |
</details>

<details>
  <summary>
    <h2>CaseImages - Универсальный блок с картинками</h2>
  </summary>
  <img 
    width="1159" 
    height="628" 
    alt="Пример компонента CaseImages - вариант 1" 
    src="https://github.com/user-attachments/assets/2ebeeced-4509-41df-872e-825c1beb094c" 
  />
  <img 
    width="1148" 
    height="622" 
    alt="Пример компонента CaseImages - вариант 2" 
    src="https://github.com/user-attachments/assets/e3f51c45-66c6-4700-b6e7-6598df5d0e95" 
  />
  <img 
    width="1164" 
    height="635" 
    alt="Пример компонента CaseImages - вариант 3" 
    src="https://github.com/user-attachments/assets/f6e127e2-58c6-45bc-9221-42b95ad6fb33" 
  />

Пример:
```TSX
<CaseImages layout='gallery'>
  <CaseImage src='/cases/card.png' />
  <CaseImage src='/cases/card.png' />
  <CaseImage src='/cases/card.png' />
</CaseImages>
```

| Свойство                      | Описание                          | Значение по умолчанию |
|-------------------------------|-----------------------------------|-----------------------|
| `layout?: 'gallery' \| 'row'` | Расположение картинок в блоке     | `'row'`               |
</details>

<details>
  <summary>
    <h2>CaseText - Универсальный блок текста</h2>
  </summary>
  <img 
    width="1121" 
    height="477" 
    alt="Пример компонента CaseText с заголовком" 
    src="https://github.com/user-attachments/assets/a3449ccd-b046-4389-a355-6eb18e96bb64" 
  />
  <img 
    width="1010" 
    height="266" 
    alt="Пример компонента CaseText без заголовка" 
    src="https://github.com/user-attachments/assets/2419f116-7773-485c-990b-798c685614bc" 
  />

Пример:
```TSX

<CaseText title={L.heading} description={L.textDescription} noBorder direction='row' />
<CaseText title={L.bigHeading} uppercase noBorder />

```

| Свойство                        | Описание                                                                | Значение по умолчанию |
|---------------------------------|-------------------------------------------------------------------------|-----------------------|
| `title: string`                 | Основной заголовок текстового блока                                     | -                     |
| `noBorder: boolean`             | Убирает границу у компонента                                            | `false`               |
| `description?: string`          | Дополнительное описание под заголовком (опционально)                    | -                     |
| `direction?: 'row' \| 'column'` | Направление расположения элементов (`row` - строка, `column` - колонка) | `'row'`               |
| `className?: string`            | Дополнительные CSS-классы для кастомизации                              | -                     |
| `uppercase?: boolean`           | Преобразование текста в верхний регистр                                 | `false`               |
</details>

<details>
  <summary>
    <h2>CaseTextImage - Текст с изображением</h2>
  </summary>
  <img 
    width="1157" 
    height="624" 
    alt="Пример компонента CaseTextImage" 
    src="https://github.com/user-attachments/assets/732a399a-9b30-4556-8935-83569782b244" 
  />

Пример:
```TSX
<CaseTextImage
  title={L.heading}
  description={L.textDescription}
  direction='column'
  src='/cases/card.png'
  noBorder
/>
```

| Свойство      | Описание                                                                | Значение по умолчанию |
|---------------|-------------------------------------------------------------------------|-----------------------|
| `title`       | Основной заголовок блока                                                | -                     |
| `noBorder`    | Убирает границу у компонента                                            | `false`               |
| `description` | Дополнительное описание под заголовком                                  | -                     |
| `direction`   | Направление расположения элементов (`row` - строка, `column` - колонка) | `'row'`               |
| `src`         | Путь к изображению                                                      | -                     |
| `reverse`     | Обратный порядок расположения текста и изображения                      | -                     |
</details>

<details>
  <summary>
    <h2>CaseVideo - Видео</h2>
  </summary>
  <img width="1154" height="692" alt="изображение" src="https://github.com/user-attachments/assets/8d06a3a9-fe2b-4b14-ac54-61c0404147dd" />

| Свойство | Описание     | Значение по умолчанию |
|----------|--------------|-----------------------|
| `src: string`    | Путь к видео | -                     |
</details>
