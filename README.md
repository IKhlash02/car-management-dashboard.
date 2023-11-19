# car-management-dashboard.

## Entity Relationship Diagram (ERD)

Di bawah ini adalah Entity Relationship Diagram (ERD) dari struktur database:
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/erd.png" >

## API Endpoints
### [POST] http://localhost:8000/v1/cars/create
membuat daftar mobil baru.

#### request body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/request_create.png" >

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_create.png" >


### [GET] http://localhost:8000/v1/cars/:id
mendapatkan daftar mobil sesui id yang diberikan

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_getById.png" >


### [Get] http://localhost:8000/v1/cars
mendapatkan daftar semua mobil.

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_getAll.png" >


### [DELETE] http://localhost:8000/v1/cars/655555
menghapus mobil sesuai id

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_delete.png" >

### [PUT] http://localhost:8000/v1/cars/4
update data mobile

#### response body
<img src="https://github.com/IKhlash02/car-management-dashboard./blob/main/image/response_update.pngg" >
