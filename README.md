# api-node-restful-mongo

1 - Instalar dependências do node
```  
  npm install
```  

2 - Iniciar MongoDB
```  
  sudo mongod
```  

3 - Iniciar sevidor node

```
  npm run dev
```

4  - Exemplos rotas da API

# API Estudante
```  
 GET http://localhost:3000/api/student/
```

```
POST http://localhost:3000/api/student
```

```json
{
	"name": "Eduardo Melo",
	"age": 27,
	"class": "Turma A"	
}
```

```
PUT http://localhost:3000/api/student/5b06cf0c6d0fdb7b6f876003
```
```json
{
	"name": "Eduardo Moraes de Melo",
	"age": 27,
	"class": "Turma A"	
}
```

```
DELETE http://localhost:3000/api/student/5b06cf0c6d0fdb7b6f876003
```

# API Classe

```
GET http://localhost:3000/api/class/ 
```

```
POST http://localhost:3000/api/class/ 
```

```
JSON
{
  "name": "Tuma A",
  "students": "{id: 5b06cf0c6d0fdb7b6f876003}",
  "teacher": "Loren",
}
```

```
PUT http://localhost:3000/api/class/5b06d2cd4a26310190be13c5
```

```
JSON
{
  "name": "Tuma A",
  "students": "{id: 5b06cf0c6d0fdb7b6f876003}",
  "teacher": "Stella",
}
```

```
DELETE http://localhost:3000/api/class/5b06d2cd4a26310190be13c5
```
