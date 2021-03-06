# mooseetws-backend
Backend server for service management, and bridging.



#### How to install

- Make sure we have node.js installed in the system
- Install dependencies 
``` npm install ```
- run development server 
``` npm start debug ```
- run production environment 
``` npm start ```

#### Run in docker
- Build docker
``` docker-compose build ```
- Run 
``` docker-compose up```


#### Endpoints

- Mobile endpoint

    - GET - a list of location where moose is found
    
    ```
    curl --request GET \
      --url http://localhost:3000/api/mobile/v1
    
   - Example payload 
        [
            {lat: -99,lan: 10},
            {lat: -20,lan: 5}
        ]
    ```
    
    - POST - Register a device
    
    ```
    curl --request POST \
      --url https://mooseetws.herokuapp.com/api/mobile/v1 \
      --header 'content-type: application/json' \
      --data '{"licensePlate": "1234", "registrationID": "12121#1"}'
      
    ```


- PI endpoint
    - GET 
    ``` 
        https://mooseetws.herokuapp.com/api/pi/v1
    ```
    
    - POST
    ```
    curl --request POST \
      --url https://mooseetws.herokuapp.com/api/pi/v1/ \
      --header 'content-type: application/json' \
      --data '{"objectType": "car", "confidence": 25, "poleId": 1}'
    ```
    
- Moose notification
    - GET - submit a notification from certain smart lamp post 
    ``` 
        https://mooseetws.herokuapp.com/api/lamp/v1/notify/id/{id}
    ```
    
    
