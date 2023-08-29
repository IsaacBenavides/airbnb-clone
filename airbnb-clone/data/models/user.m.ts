export interface User {
  name?: string;
  email?: string;
  emailVerified?: string;
  image?: string;
  hashedPassword?: string;
  createdAt?: string;
  updatedAt?: string;
  favoriteIds?: string[];
  accounts?: string[];
  listings?: string[];
  reservations?: string[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUser(json: string): User {
    return JSON.parse(json);
  }

  public static userToJson(value: User): string {
    return JSON.stringify(value);
  }
}
