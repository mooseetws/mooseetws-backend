# mooseetws-backend
Backend server for service management, and bridging.


#### Endpoints

- Mobile endpoint
    - GET
    ```
        https://mooseetws.herokuapp.com/api/mobile/v1
    ```


- PI endpoint
    - GET 
    ``` 
        https://mooseetws.herokuapp.com/api/pi/v1
    ```
    
    - Register a device
    ```
    curl --request POST \
      --url https://mooseetws.herokuapp.com/api/mobile/v1 \
      --header 'content-type: application/json' \
      --data '{"licensePlate": "1234", "registrationID": "12121#1"}'
      
    ```
