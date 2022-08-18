
const config = {
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {

        "type": "service_account",
        "project_id": "backend-coder-9e87a",
        "private_key_id": "12e3158211fc0d5bff41b0c251becdf15bb0ef22",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1QurrpW8QCrNz\n4tOHKH1HxvIkuyPamwUFVW3dUGTMMeFS9Lsvq2BY9KZ3kvRbQKW/qWnu2ABg9ixx\n7pKReQW53DaHPhY98YpOZx+cGuc3MA02f/1WF9r7evK3sCr4Y3R7Ymgd92aF+oXX\ne/FV5mJwQVOAKFj0qsqo5iWVW8uc40nCX5+i+jjFvnDLSDo9K8B2iheRFPuCdL1m\n3qGxY9dfE55ye81cphQAbUDAlVj0Hqy0f+3/7TgZH9b2NcCl/+Q4SsAKa0CbqhGz\nZ7Lu6DpvV1rCWAKrw6tcxxmwjzg7yRRhtDHgLKFbe48C5e8PaxmEvGbAuGqaBvuy\nD36/cYgrAgMBAAECggEACcx5HvhdqtGBRk7+ngxcysALqrD+glyl/ACpxJs0z8Bp\n4g5T04MMCChgRWTe1n4GAniZ6ZeosZUtQughk+v7GMM5pBGsVHiVwEudLwGvT9Gb\nrT9kW76aD8U45iAyZSTEkRT5SZbBu+rBSIGtQrZbyki7HFmnXBai3QLlXjp3pTP2\nrLz0ZlcOQKLBgOzXOIHGaZHojsNwi6UGOcJFDZWHCzgWxX67+HszfjRSzCreB0CB\nyPOYnF+n+A2QyQ478gAy22ws2syptgKHDqsSwuvhsl+apqkTPI2ujNZKd72axIRS\nWaaiZ57Gf/LkMDYKcamY/UwnPUfoHctXWJzlomJP7QKBgQD989P+du9cPtNxTBz6\ndEIPFTTwwbBQkRdVtOR9fR8SF0SYJJFmSyIB46BVK/zDobmXR0Tve0PusxN7CCtb\nqBuFT2rAXoOMkeKJBSIUcy0UxnC4DHXTgy0BTJNl3LXjYOaJPXFqKlFh1yyc+Te4\nEJNW+9Nto3rke59aWyXZ9KAjtwKBgQC2uQ0bYEbLEBBn5bP501GCmp9dLBnk2hrH\nrqpkxAVtQHPrWImHzEq2HC//pRhe1I3VuMLiSpgi/XnCGDz5tPweMYEp1hESDuR+\nIP8+jGZ/7atYfm7OiiGlac1Qa+yD+Iplz17GuoEMeVtmcF4RopoNWqRou/5s7yaZ\ndGBoKLjHLQKBgBp5QLBWVb2YDxLQjHTPidNosowmpOrBNV2J7gfm80Y/hrcVmNLB\nIlpwEFbQrxj10xMiKt2MTBimMnGw+FQlwjizfr1vHOeajbMbBeJ730c7KKUHJ4FV\nO2vXP8Zuq8d4YpAMB7a5kqJQfCYhFN3rXHDE79WOJVGMUaBpwBhomAkhAoGBAKNc\nxPQh2ok4PoK1YnhMTwameS6S/D+YI/M9HQhkHLn1su3JxYQMyQsSHnPARg6amIho\n3Iv2xxgZaR94DiPuhK318pXV1oM/n1eI5sskOYvMkLHYr/amlrhN5IsvQlEnB41I\nnmKsYi4l3eqzMdcweezQikc9NJZuJiNyYbMeHT2tAoGBAPH826Z0P9xhODIq6iYv\neOuX7z748RykXzvp/eFMphBboBJZuq4E9XiudOaBNt/58QKZMnYjc2COjuhsQZa1\ntFp3dOAgXnrXoG0fnFs98tWiGsO74JufMbQTrrsP0sgUXLJJhpGi1raadt6ndPuh\nZjMC3IJk5VZ1Ls/CYY1TzE1B\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-cauv6@backend-coder-9e87a.iam.gserviceaccount.com",
        "client_id": "110036238776688177166",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cauv6%40backend-coder-9e87a.iam.gserviceaccount.com"

    }
}



export default config