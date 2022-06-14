# Sales (React)

Проект реализован в рамаках тестового задания, так же содержит бекенд DRF.

## В разработке применяется

- ReactJS
- docker

## Запуск

Фронтенд часть следует запускать после того как запустился бекенд на DRF.

### Docker

```
git clone git@github.com:Kannykl/Sales-React-2022.git
docker network create sales_network # если очень хочется запустить сначала фронтенд
docker run -p 3000:3000 --name sale-react --network=sales_network sale-react
```

