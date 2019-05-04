# mooseetws-backend
Backend server for service management, and bridging.


#### Endpoints

- Mobile endpoint

    - GET a list of location where moose is found
    
    ```
    https://mooseetws.herokuapp.com/api/mobile/v1
    
   - Example payload 
        {
            lat: -99,
            lan: 10,
        }
    ```
    
    - Register a device
    
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
    
    
