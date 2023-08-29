import datetime


user_schema = {
    "required": ["reservations", "createdAt"],
    "properties": {
        "name": {"type": "string"},
        "email": {"type": "string"},
        "emailVerified": {"type": "string"},
        "image": {"type": "string"},
        "hashedPassword": {"type": "string"},
        "createdAt": {"type": "string"},
        "updatedAt": {"type": "string"},
        "favoriteIds": {"type": "array", "items": {"type": "string"}},
        "accounts": {"type": "array", "items": {"type": "string"}},
        "listings": {"type": "array", "items": {"type": "string"}},
        "reservations": {"type": "array", "items": {"type": "string"}},
    },
}


account_schema = {
    "required": ["userId", "type", "provider", "providerAccountId"],
    "properties": {
        "userId": {"type": "string"},
        "type": {"type": "string"},
        "provider": {"type": "string"},
        "providerAccountId": {"type": "string"},
        "refreshToken": {"type": "string"},
        "accessToken": {"type": "string"},
        "expireAt": {"type": "number"},
        "tokenType": {"type": "string"},
        "scope": {"type": "string"},
        "idToken": {"type": "string"},
        "sessionState": {"type": "string"},
    },
}


listing_schema = {
    "required": [
        "userId",
        "title",
        "description",
        "imageSrc",
        "createdAt",
        "category",
        "roomCount",
        "bathroomCount",
        "guestCount",
        "locationValue",
        "price",
        "reservations",
    ],
    "properties": {
        "userId": {"type": "string"},
        "title": {"type": "string"},
        "description": {"type": "string"},
        "imageSrc": {"type": "string"},
        "createdAt": {"type": "string"},
        "category": {"type": "string"},
        "roomCount": {"type": "int"},
        "bathroomCount": {"type": "int"},
        "guestCount": {"type": "int"},
        "locationValue": {"type": "string"},
        "price": {"type": "int"},
        "reservations": {"type": "array", "items": {"type": "string"}},
    },
}


reservation_schema = {
    "required": [
        "userId",
        "listingId",
        "startDate",
        "endDate",
        "totalPrice",
        "createdAt",
    ],
    "properties": {
        "userId": {"type": "string"},
        "listingId": {"type": "string"},
        "startDate": {"type": "string"},
        "endDate": {"type": "string"},
        "totalPrice": {"type": "int"},
        "createdAt": {"type": "string"},
    },
}
