**USERS**
| Column Name   |    Data Type  |  Constrains |
| ------------- | ------------- | ----------- |
| id  | Int| Not Null, primary key|
| firstName | String  | Not Null|
| lastName | String  | Not Null|
| email | String  | Not Null, unique|
|hashedPassword| String | Not Null|

**OWNERS**
| Column Name   |    Data Type  |  Constrains |
| ------------- | ------------- | ----------- |
| id  | Int| Not Null, primary key|
| firstName | String  | Not Null|
| lastName | String  | Not Null|
| email | String  | Not Null, unique|


**HOMES**
| Column Name   |    Data Type  |  Constrains |
| ------------- | ------------- | ----------- |
| id  | Int| Not Null, primary key|
| name| String  | Not Null|
| location | String  | Not Null, unique|
| city | String  | Not Null|
| state| String  | Not Null|
| lat| float | Not Null|
| lng | float  | Not Null|
| price | Int  | Not Null|
|description| String | Not Null|
|isAvailable| boolean| Not Null, true|
|description| String | Not Null|
| userId| int  | Not Null, foreignKey|
| ownerId| int  | Not Null, foreignKey|

**REVIEWS**
| Column Name   |    Data Type  |  Constrains |
| ------------- | ------------- | ----------- |
| id  | Int| Not Null, primary key|
| title  | String| Not Null|
| description  | String| Not Null|
| rating  | Int| Not Null|
| userId| int  | Not Null, foreignKey|
| homeId| int  | Not Null, foreignKey|

**RESERVATIONS**
| Column Name   |    Data Type  |  Constrains |
| ------------- | ------------- | ----------- |
| id  | Int| Not Null, primary key|
| homeId| int  | Not Null, foreignKey|
| userId | int| Not Null, foreignKey|
|numPeople| Int| Not Null|
|end_date |	datetime |	not null|
|start_date	|datetime	|not null|


