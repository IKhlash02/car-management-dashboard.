# car-management-dashboard.

## Entity Relationship Diagram (ERD)

Di bawah ini adalah Entity Relationship Diagram (ERD) dari struktur database:
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/erd.png" width="80%" >

## API Endpoints
### [POST] http://localhost:8000/v1/cars/create
membuat daftar mobil baru.

#### request body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/request_create.png" width="50%" >

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_create.png" width="50%" >


### [GET] http://localhost:8000/v1/cars/:id
mendapatkan daftar mobil sesui id yang diberikan

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_getById.png"  width="50%">


### [Get] http://localhost:8000/v1/cars
mendapatkan daftar semua mobil.

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_getAll.png" width="50%" >


### [DELETE] http://localhost:8000/v1/cars/:id
menghapus mobil sesuai id

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_delete.png" width="50%" >


### [PUT] http://localhost:8000/v1/cars/:id
update data mobil

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_update.png" width="50%" >
