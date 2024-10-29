
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires',
  loggerType: 'loggerType'
};

exports.Prisma.OwnerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  userType: 'userType',
  ownerId: 'ownerId',
  roleId: 'roleId',
  birthDate: 'birthDate',
  phoneNumber: 'phoneNumber',
  country: 'country',
  city: 'city',
  location: 'location',
  residenceAddress: 'residenceAddress',
  occupation: 'occupation',
  designation: 'designation',
  nid: 'nid',
  tin: 'tin',
  havingBusiness: 'havingBusiness',
  password: 'password',
  loggerType: 'loggerType',
  isVerify: 'isVerify',
  status: 'status',
  deletedAtAt: 'deletedAtAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  name: 'name',
  userType: 'userType',
  birthDate: 'birthDate',
  phoneNumber: 'phoneNumber',
  picture: 'picture',
  country: 'country',
  city: 'city',
  location: 'location',
  residenceAddress: 'residenceAddress',
  occupation: 'occupation',
  designation: 'designation',
  nid: 'nid',
  tin: 'tin',
  password: 'password',
  otp: 'otp',
  otpExpireAt: 'otpExpireAt',
  isVerify: 'isVerify',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RolePermissionScalarFieldEnum = {
  id: 'id',
  roleName: 'roleName',
  permissions: 'permissions',
  branchId: 'branchId',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WishListScalarFieldEnum = {
  id: 'id',
  type: 'type',
  userId: 'userId',
  propertyId: 'propertyId',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  type: 'type',
  listingName: 'listingName',
  slug: 'slug',
  title: 'title',
  subTitle: 'subTitle',
  logo: 'logo',
  image: 'image',
  description: 'description',
  terms: 'terms',
  slot: 'slot',
  offday: 'offday',
  cuisines: 'cuisines',
  reservationCategory: 'reservationCategory',
  sectSymb: 'sectSymb',
  priority: 'priority',
  optionalData: 'optionalData',
  eventStatus: 'eventStatus',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BranchScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  propertyId: 'propertyId',
  branchName: 'branchName',
  slug: 'slug',
  images: 'images',
  description: 'description',
  level: 'level',
  terms: 'terms',
  city: 'city',
  area: 'area',
  country: 'country',
  amenities: 'amenities',
  amenity: 'amenity',
  latitude: 'latitude',
  longitude: 'longitude',
  location: 'location',
  optionalData: 'optionalData',
  bookingCount: 'bookingCount',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TableScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  type: 'type',
  capacity: 'capacity',
  position: 'position',
  size: 'size',
  image: 'image',
  splitable: 'splitable',
  ryservable: 'ryservable',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SeatBedScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  type: 'type',
  roomNo: 'roomNo',
  breakfast: 'breakfast',
  image: 'image',
  accomodationCapacity: 'accomodationCapacity',
  extraBedPolicy: 'extraBedPolicy',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FoodScalarFieldEnum = {
  id: 'id',
  name: 'name',
  images: 'images',
  optionalData: 'optionalData',
  rating: 'rating',
  propertyId: 'propertyId',
  price: 'price',
  description: 'description',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SectionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  subtitle: 'subtitle',
  pattern: 'pattern',
  contains: 'contains',
  signature: 'signature',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EventsScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  branchId: 'branchId',
  location: 'location',
  mapLocation: 'mapLocation',
  address: 'address',
  capacity: 'capacity',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  branchId: 'branchId',
  tableId: 'tableId',
  seatBedId: 'seatBedId',
  ownerId: 'ownerId',
  customerId: 'customerId',
  customerName: 'customerName',
  phoneNumber: 'phoneNumber',
  startDate: 'startDate',
  endDate: 'endDate',
  slot: 'slot',
  comment: 'comment',
  customerRequest: 'customerRequest',
  cancelReason: 'cancelReason',
  guestNumber: 'guestNumber',
  amount: 'amount',
  vat: 'vat',
  discount: 'discount',
  grandTotal: 'grandTotal',
  status: 'status',
  bookingType: 'bookingType',
  optionalData: 'optionalData',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  paymentDate: 'paymentDate',
  paymentInfo: 'paymentInfo',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AmenitiesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  icon: 'icon',
  price: 'price',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CuisineScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EvbookingScalarFieldEnum = {
  id: 'id',
  username: 'username',
  phoneNumber: 'phoneNumber',
  email: 'email',
  address: 'address',
  ticketNumber: 'ticketNumber',
  person: 'person',
  price: 'price',
  amount: 'amount',
  vat: 'vat',
  payStatus: 'payStatus',
  eventDate: 'eventDate',
  eventId: 'eventId',
  status: 'status',
  optionalData: 'optionalData',
  issueAt: 'issueAt',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.SessionOrderByRelevanceFieldEnum = {
  sessionToken: 'sessionToken'
};

exports.Prisma.OwnerOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  phoneNumber: 'phoneNumber',
  country: 'country',
  city: 'city',
  location: 'location',
  residenceAddress: 'residenceAddress',
  occupation: 'occupation',
  designation: 'designation',
  nid: 'nid',
  tin: 'tin',
  password: 'password'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  name: 'name',
  phoneNumber: 'phoneNumber',
  picture: 'picture',
  country: 'country',
  city: 'city',
  location: 'location',
  residenceAddress: 'residenceAddress',
  occupation: 'occupation',
  designation: 'designation',
  tin: 'tin',
  password: 'password'
};

exports.Prisma.RolePermissionOrderByRelevanceFieldEnum = {
  roleName: 'roleName',
  permissions: 'permissions'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.PropertyOrderByRelevanceFieldEnum = {
  listingName: 'listingName',
  slug: 'slug',
  title: 'title',
  subTitle: 'subTitle',
  logo: 'logo',
  description: 'description',
  terms: 'terms',
  cuisines: 'cuisines'
};

exports.Prisma.BranchOrderByRelevanceFieldEnum = {
  branchName: 'branchName',
  slug: 'slug',
  description: 'description',
  level: 'level',
  terms: 'terms',
  city: 'city',
  area: 'area',
  country: 'country',
  amenity: 'amenity',
  latitude: 'latitude',
  longitude: 'longitude',
  location: 'location'
};

exports.Prisma.TableOrderByRelevanceFieldEnum = {
  position: 'position',
  size: 'size',
  image: 'image'
};

exports.Prisma.SeatBedOrderByRelevanceFieldEnum = {
  roomNo: 'roomNo',
  breakfast: 'breakfast',
  image: 'image',
  accomodationCapacity: 'accomodationCapacity',
  extraBedPolicy: 'extraBedPolicy'
};

exports.Prisma.FoodOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.SectionOrderByRelevanceFieldEnum = {
  title: 'title',
  slug: 'slug',
  subtitle: 'subtitle',
  pattern: 'pattern'
};

exports.Prisma.EventsOrderByRelevanceFieldEnum = {
  location: 'location',
  mapLocation: 'mapLocation',
  address: 'address'
};

exports.Prisma.BookingOrderByRelevanceFieldEnum = {
  customerName: 'customerName',
  phoneNumber: 'phoneNumber',
  slot: 'slot',
  comment: 'comment',
  customerRequest: 'customerRequest',
  cancelReason: 'cancelReason',
  bookingType: 'bookingType'
};

exports.Prisma.PaymentOrderByRelevanceFieldEnum = {
  paymentInfo: 'paymentInfo'
};

exports.Prisma.AmenitiesOrderByRelevanceFieldEnum = {
  name: 'name',
  icon: 'icon'
};

exports.Prisma.CuisineOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.EvbookingOrderByRelevanceFieldEnum = {
  username: 'username',
  phoneNumber: 'phoneNumber',
  email: 'email',
  address: 'address',
  ticketNumber: 'ticketNumber'
};
exports.loggerType = exports.$Enums.loggerType = {
  DASHBOARD_USER: 'DASHBOARD_USER',
  APPS_USER: 'APPS_USER'
};

exports.UserType = exports.$Enums.UserType = {
  CRM_EDITOR: 'CRM_EDITOR',
  BUSINESS_OWNER: 'BUSINESS_OWNER',
  BUSINESS_MANAGER: 'BUSINESS_MANAGER',
  LISTING_MANAGER: 'LISTING_MANAGER',
  CUSTOMER: 'CUSTOMER'
};

exports.BusinessCategory = exports.$Enums.BusinessCategory = {
  HOTEL: 'HOTEL',
  RESTAURANT: 'RESTAURANT',
  SERVICE_APARTMENT: 'SERVICE_APARTMENT',
  MOVIE_THEATER: 'MOVIE_THEATER',
  SPA: 'SPA',
  OTHERS: 'OTHERS'
};

exports.Category = exports.$Enums.Category = {
  ROOM: 'ROOM',
  TABLE: 'TABLE',
  TICKET: 'TICKET',
  APPOINTMENT: 'APPOINTMENT'
};

exports.compType = exports.$Enums.compType = {
  KING: 'KING',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  SINGLE: 'SINGLE',
  TWIN: 'TWIN',
  QUEEN: 'QUEEN'
};

exports.ContentType = exports.$Enums.ContentType = {
  FOOD: 'FOOD',
  PROPERTY: 'PROPERTY'
};

exports.BookingStatus = exports.$Enums.BookingStatus = {
  CONFIRMED: 'CONFIRMED',
  DEACTIVE: 'DEACTIVE',
  ON_HOLD: 'ON_HOLD',
  CANCELED: 'CANCELED',
  COMPLETED: 'COMPLETED'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  OTHER: 'OTHER'
};

exports.Prisma.ModelName = {
  Session: 'Session',
  Owner: 'Owner',
  User: 'User',
  RolePermission: 'RolePermission',
  wishList: 'wishList',
  Property: 'Property',
  Branch: 'Branch',
  Table: 'Table',
  SeatBed: 'SeatBed',
  Food: 'Food',
  Section: 'Section',
  Events: 'Events',
  Booking: 'Booking',
  Payment: 'Payment',
  Amenities: 'Amenities',
  Cuisine: 'Cuisine',
  Evbooking: 'Evbooking'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\server-74\\htdocs\\sim-ryserve\\prisma\\generated\\prisma-client-js",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "fullTextSearch",
      "prismaSchemaFolder"
    ],
    "sourceFilePath": "D:\\server-74\\htdocs\\sim-ryserve\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.20.0",
  "engineVersion": "06fc58a368dc7be9fbbbe894adf8d445d208c284",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\", \"prismaSchemaFolder\", \"fullTextSearch\"]\n  output          = \"./generated/prisma-client-js\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Session {\n  id           Int         @id @default(autoincrement())\n  sessionToken String      @unique\n  userId       Int?\n  expires      DateTime\n  loggerType   loggerType?\n}\n\nmodel Owner {\n  id               Int             @id @default(autoincrement())\n  name             String?\n  email            String?         @unique\n  userType         UserType?       @default(BUSINESS_OWNER)\n  ownerId          Int?\n  roleId           Int?\n  roles            RolePermission? @relation(fields: [roleId], references: [id])\n  branch           Branch[]\n  birthDate        DateTime?\n  phoneNumber      String?         @db.VarChar(50)\n  country          String?         @db.VarChar(50)\n  city             String?         @db.VarChar(50)\n  location         String?         @db.Text\n  residenceAddress String?\n  occupation       String?\n  designation      String?\n  nid              String?\n  tin              String?\n  havingBusiness   Boolean?        @default(false)\n  property         Property[]\n  booking          Booking[]\n  password         String?\n  loggerType       loggerType?\n  isVerify         Boolean         @default(false)\n  status           Boolean         @default(false)\n  deletedAtAt      DateTime?\n  createdAt        DateTime        @default(now())\n  updatedAt        DateTime        @updatedAt\n\n  @@index([name, email, phoneNumber, roleId])\n}\n\nmodel User {\n  id               Int       @id @default(autoincrement())\n  email            String?   @unique\n  firstName        String?\n  lastName         String?\n  name             String?\n  userType         UserType? @default(CUSTOMER)\n  birthDate        DateTime?\n  phoneNumber      String?\n  picture          String?\n  country          String?\n  city             String?\n  location         String?\n  residenceAddress String?\n  occupation       String?\n  designation      String?\n  nid              Int?\n  tin              String?\n  booking          Booking[]\n  password         String?\n  otp              Int?\n  otpExpireAt      DateTime?\n  isVerify         Boolean   @default(false)\n  status           Boolean   @default(false)\n  deletedAt        DateTime?\n  createdAt        DateTime  @default(now())\n  updatedAt        DateTime  @updatedAt\n\n  @@index([name, email, phoneNumber, city])\n}\n\nmodel RolePermission {\n  id          Int       @id @default(autoincrement())\n  roleName    String\n  permissions String[]\n  branchId    Int\n  branch      Branch    @relation(fields: [branchId], references: [id])\n  owner       Owner[]\n  status      Boolean   @default(true)\n  deletedAt   DateTime?\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n\n  @@index([roleName])\n}\n\nmodel wishList {\n  id         Int               @id @default(autoincrement())\n  type       BusinessCategory? @default(OTHERS)\n  userId     Int?\n  propertyId Int?\n  Property   Property?         @relation(fields: [propertyId], references: [id])\n  status     Boolean           @default(false)\n  deletedAt  DateTime?\n  createdAt  DateTime          @default(now())\n  updatedAt  DateTime          @updatedAt\n\n  @@index([userId, propertyId])\n}\n\nmodel Property {\n  id                  Int               @id @default(autoincrement())\n  ownerId             Int\n  owner               Owner             @relation(fields: [ownerId], references: [id])\n  type                BusinessCategory? @default(OTHERS)\n  listingName         String\n  slug                String?\n  title               String?\n  subTitle            String?\n  logo                String?\n  image               Json?\n  description         String?\n  terms               String?\n  slot                Json?\n  offday              Json?\n  cuisines            String[]\n  reservationCategory Category?\n  tables              Table[]\n  seatBed             SeatBed[]\n  booking             Booking[]\n  wishLists           wishList[]\n  food                Food[]\n  branches            Branch[]\n  event               Events[]\n  sectSymb            Int?\n  priority            Int?\n  optionalData        Json?\n  eventStatus         Boolean           @default(false)\n  status              Boolean           @default(true)\n  deletedAt           DateTime?\n  createdAt           DateTime          @default(now())\n  updatedAt           DateTime          @updatedAt\n\n  @@index([listingName, ownerId, type, reservationCategory, sectSymb])\n}\n\nmodel Branch {\n  id             Int              @id @default(autoincrement())\n  ownerId        Int\n  owner          Owner            @relation(fields: [ownerId], references: [id])\n  propertyId     Int\n  property       Property         @relation(fields: [propertyId], references: [id])\n  branchName     String?\n  slug           String?\n  images         Json?\n  description    String?\n  level          String?\n  terms          String?\n  city           String?\n  area           String?\n  country        String?\n  amenities      Json?\n  amenity        String[]\n  latitude       String?\n  longitude      String?\n  location       String?\n  optionalData   Json?\n  bookingCount   Int              @default(0)\n  booking        Booking[]\n  events         Events[]\n  rolePermission RolePermission[]\n  status         Boolean          @default(true)\n  deletedAt      DateTime?\n  createdAt      DateTime         @default(now())\n  updatedAt      DateTime         @updatedAt\n\n  @@index([branchName, propertyId, ownerId, area, city])\n}\n\nmodel Table {\n  id         Int       @id @default(autoincrement())\n  propertyId Int\n  Property   Property  @relation(fields: [propertyId], references: [id])\n  type       compType?\n  capacity   Int?\n  position   String\n  size       String\n  image      String?\n  splitable  Boolean   @default(true)\n  ryservable Boolean   @default(true)\n  status     Boolean   @default(true)\n  booking    Booking[]\n  deletedAt  DateTime?\n  createdAt  DateTime  @default(now())\n  updatedAt  DateTime  @updatedAt\n\n  @@index([propertyId, capacity])\n}\n\nmodel SeatBed {\n  id                   Int       @id @default(autoincrement())\n  propertyId           Int\n  Property             Property  @relation(fields: [propertyId], references: [id])\n  type                 compType?\n  roomNo               String\n  breakfast            String\n  image                String?\n  accomodationCapacity String\n  extraBedPolicy       String\n  status               Boolean   @default(true)\n  booking              Booking[]\n  deletedAt            DateTime?\n  createdAt            DateTime  @default(now())\n  updatedAt            DateTime  @updatedAt\n\n  @@index([propertyId, type])\n}\n\nmodel Food {\n  id           Int       @id @default(autoincrement())\n  name         String\n  images       Json?\n  optionalData Json?\n  rating       Float     @default(0.0)\n  propertyId   Int\n  property     Property  @relation(fields: [propertyId], references: [id])\n  price        Json?\n  description  String?\n  status       Boolean   @default(true)\n  deletedAt    DateTime?\n  createdAt    DateTime  @default(now())\n  updatedAt    DateTime  @updatedAt\n\n  @@index([name, propertyId])\n}\n\nmodel Section {\n  id        Int         @id @default(autoincrement())\n  title     String\n  slug      String?\n  subtitle  String?\n  pattern   String\n  contains  ContentType\n  signature Int         @default(0)\n  status    Boolean     @default(true)\n  deletedAt DateTime?\n  createdAt DateTime    @default(now())\n  updatedAt DateTime    @updatedAt\n}\n\nmodel Events {\n  id          Int         @id @default(autoincrement())\n  propertyId  Int\n  property    Property    @relation(fields: [propertyId], references: [id])\n  branchId    Int?\n  branch      Branch?     @relation(fields: [branchId], references: [id])\n  location    String?\n  mapLocation String?\n  address     String?\n  capacity    Int         @default(10)\n  startDate   DateTime\n  endDate     DateTime?\n  status      Boolean     @default(true)\n  evbooking   Evbooking[]\n  deletedAt   DateTime?\n  createdAt   DateTime    @default(now())\n  updatedAt   DateTime?\n\n  @@index([propertyId, branchId, mapLocation])\n}\n\nmodel Booking {\n  id              Int           @id @default(autoincrement())\n  propertyId      Int?\n  property        Property?     @relation(fields: [propertyId], references: [id])\n  branchId        Int\n  branch          Branch        @relation(fields: [branchId], references: [id])\n  tableId         Int?\n  table           Table?        @relation(fields: [tableId], references: [id])\n  seatBedId       Int?\n  seatBed         SeatBed?      @relation(fields: [seatBedId], references: [id])\n  ownerId         Int?\n  owner           Owner?        @relation(fields: [ownerId], references: [id])\n  customerId      Int?\n  customer        User?         @relation(fields: [customerId], references: [id])\n  customerName    String\n  phoneNumber     String?\n  startDate       DateTime\n  endDate         DateTime\n  slot            String?\n  comment         String?\n  customerRequest String?\n  cancelReason    String?\n  guestNumber     Int?          @default(value: 0)\n  amount          Int           @default(value: 0)\n  vat             Int           @default(value: 0)\n  discount        Int           @default(value: 0)\n  grandTotal      Int           @default(value: 0)\n  status          BookingStatus @default(value: ON_HOLD)\n  bookingType     String?       @default(value: \"Regular\")\n  optionalData    Json?\n  payments        Payment[]\n  deletedAt       DateTime?\n  createdAt       DateTime      @default(now())\n  updatedAt       DateTime      @updatedAt\n\n  @@index([propertyId, branchId, ownerId, customerId, phoneNumber, customerName, slot, startDate, status])\n}\n\nmodel Payment {\n  id          Int           @id @default(autoincrement())\n  bookingId   Int\n  booking     Booking       @relation(fields: [bookingId], references: [id])\n  paymentDate DateTime?\n  paymentInfo String?\n  status      PaymentStatus\n  deletedAt   DateTime?\n  createdAt   DateTime      @default(now())\n  updatedAt   DateTime      @updatedAt\n\n  @@index([bookingId, paymentDate, status])\n}\n\nmodel Amenities {\n  id        Int       @id @default(autoincrement())\n  name      String\n  icon      String?\n  price     Float     @default(0.0)\n  status    Boolean   @default(true)\n  deletedAt DateTime?\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n\n  @@index([name])\n}\n\nmodel Cuisine {\n  id        Int       @id @default(autoincrement())\n  name      String\n  status    Boolean   @default(true)\n  deletedAt DateTime?\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n\n  @@index([name])\n}\n\nmodel Evbooking {\n  id           Int           @id @default(autoincrement())\n  username     String\n  phoneNumber  String\n  email        String?\n  address      String?\n  ticketNumber String\n  person       Int           @default(1)\n  price        Int           @default(0)\n  amount       Float         @default(0.0)\n  vat          Float         @default(0.0)\n  payStatus    PaymentStatus\n  eventDate    DateTime\n  eventId      Int\n  event        Events        @relation(fields: [eventId], references: [id])\n  status       Boolean       @default(false)\n  optionalData Json?\n  issueAt      DateTime\n  deletedAt    DateTime?\n  createdAt    DateTime      @default(now())\n  updatedAt    DateTime      @updatedAt\n}\n\nenum PaymentStatus {\n  PAID\n  UNPAID\n  OTHER\n}\n\nenum ContentType {\n  FOOD\n  PROPERTY\n}\n\nenum BookingStatus {\n  CONFIRMED\n  DEACTIVE\n  ON_HOLD\n  CANCELED\n  COMPLETED\n}\n\nenum loggerType {\n  DASHBOARD_USER\n  APPS_USER\n}\n\nenum UserType {\n  CRM_EDITOR\n  BUSINESS_OWNER\n  BUSINESS_MANAGER\n  LISTING_MANAGER\n  CUSTOMER\n}\n\nenum compType {\n  KING\n  MEDIUM\n  LARGE\n  SINGLE\n  TWIN\n  QUEEN\n}\n\nenum ServiceType {\n  TABLE_RESERVATION\n  ROOM_RESERVATION\n  OTHERS\n}\n\nenum Category {\n  ROOM\n  TABLE\n  TICKET\n  APPOINTMENT\n}\n\nenum BusinessCategory {\n  HOTEL\n  RESTAURANT\n  SERVICE_APARTMENT\n  MOVIE_THEATER\n  SPA\n  OTHERS\n}\n",
  "inlineSchemaHash": "ae918285bc08c5fe58a033536af269c8ba07dde67f6e0365523b69f7e3489952",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Session\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"loggerType\",\"kind\":\"enum\",\"type\":\"loggerType\"}],\"dbName\":null},\"Owner\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userType\",\"kind\":\"enum\",\"type\":\"UserType\"},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"roleId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"roles\",\"kind\":\"object\",\"type\":\"RolePermission\",\"relationName\":\"OwnerToRolePermission\"},{\"name\":\"branch\",\"kind\":\"object\",\"type\":\"Branch\",\"relationName\":\"BranchToOwner\"},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"residenceAddress\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"occupation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"designation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tin\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"havingBusiness\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"property\",\"kind\":\"object\",\"type\":\"Property\",\"relationName\":\"OwnerToProperty\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToOwner\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"loggerType\",\"kind\":\"enum\",\"type\":\"loggerType\"},{\"name\":\"isVerify\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAtAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userType\",\"kind\":\"enum\",\"type\":\"UserType\"},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"picture\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"residenceAddress\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"occupation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"designation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"tin\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToUser\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"otp\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"otpExpireAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"isVerify\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"RolePermission\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"roleName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"permissions\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"branchId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"branch\",\"kind\":\"object\",\"type\":\"Branch\",\"relationName\":\"BranchToRolePermission\"},{\"name\":\"owner\",\"kind\":\"object\",\"type\":\"Owner\",\"relationName\":\"OwnerToRolePermission\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"wishList\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"BusinessCategory\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"propertyId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"Property\",\"kind\":\"object\",\"type\":\"Property\",\"relationName\":\"PropertyTowishList\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Property\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"owner\",\"kind\":\"object\",\"type\":\"Owner\",\"relationName\":\"OwnerToProperty\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"BusinessCategory\"},{\"name\":\"listingName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subTitle\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"logo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"terms\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slot\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"offday\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"cuisines\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"reservationCategory\",\"kind\":\"enum\",\"type\":\"Category\"},{\"name\":\"tables\",\"kind\":\"object\",\"type\":\"Table\",\"relationName\":\"PropertyToTable\"},{\"name\":\"seatBed\",\"kind\":\"object\",\"type\":\"SeatBed\",\"relationName\":\"PropertyToSeatBed\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToProperty\"},{\"name\":\"wishLists\",\"kind\":\"object\",\"type\":\"wishList\",\"relationName\":\"PropertyTowishList\"},{\"name\":\"food\",\"kind\":\"object\",\"type\":\"Food\",\"relationName\":\"FoodToProperty\"},{\"name\":\"branches\",\"kind\":\"object\",\"type\":\"Branch\",\"relationName\":\"BranchToProperty\"},{\"name\":\"event\",\"kind\":\"object\",\"type\":\"Events\",\"relationName\":\"EventsToProperty\"},{\"name\":\"sectSymb\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"priority\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"optionalData\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"eventStatus\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Branch\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"owner\",\"kind\":\"object\",\"type\":\"Owner\",\"relationName\":\"BranchToOwner\"},{\"name\":\"propertyId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"property\",\"kind\":\"object\",\"type\":\"Property\",\"relationName\":\"BranchToProperty\"},{\"name\":\"branchName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"images\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"level\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"terms\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"area\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amenities\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"amenity\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"optionalData\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"bookingCount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToBranch\"},{\"name\":\"events\",\"kind\":\"object\",\"type\":\"Events\",\"relationName\":\"BranchToEvents\"},{\"name\":\"rolePermission\",\"kind\":\"object\",\"type\":\"RolePermission\",\"relationName\":\"BranchToRolePermission\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Table\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"propertyId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"Property\",\"kind\":\"object\",\"type\":\"Property\",\"relationName\":\"PropertyToTable\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"compType\"},{\"name\":\"capacity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"position\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"size\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"splitable\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"ryservable\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToTable\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"SeatBed\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"propertyId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"Property\",\"kind\":\"object\",\"type\":\"Property\",\"relationName\":\"PropertyToSeatBed\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"compType\"},{\"name\":\"roomNo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"breakfast\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"accomodationCapacity\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"extraBedPolicy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToSeatBed\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Food\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"images\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"optionalData\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"rating\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"propertyId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"property\",\"kind\":\"object\",\"type\":\"Property\",\"relationName\":\"FoodToProperty\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Section\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subtitle\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pattern\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contains\",\"kind\":\"enum\",\"type\":\"ContentType\"},{\"name\":\"signature\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Events\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"propertyId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"property\",\"kind\":\"object\",\"type\":\"Property\",\"relationName\":\"EventsToProperty\"},{\"name\":\"branchId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"branch\",\"kind\":\"object\",\"type\":\"Branch\",\"relationName\":\"BranchToEvents\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mapLocation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"capacity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"evbooking\",\"kind\":\"object\",\"type\":\"Evbooking\",\"relationName\":\"EvbookingToEvents\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Booking\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"propertyId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"property\",\"kind\":\"object\",\"type\":\"Property\",\"relationName\":\"BookingToProperty\"},{\"name\":\"branchId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"branch\",\"kind\":\"object\",\"type\":\"Branch\",\"relationName\":\"BookingToBranch\"},{\"name\":\"tableId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"table\",\"kind\":\"object\",\"type\":\"Table\",\"relationName\":\"BookingToTable\"},{\"name\":\"seatBedId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"seatBed\",\"kind\":\"object\",\"type\":\"SeatBed\",\"relationName\":\"BookingToSeatBed\"},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"owner\",\"kind\":\"object\",\"type\":\"Owner\",\"relationName\":\"BookingToOwner\"},{\"name\":\"customerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"customer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"BookingToUser\"},{\"name\":\"customerName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"slot\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"comment\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"customerRequest\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cancelReason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"guestNumber\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"vat\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"discount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"grandTotal\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"BookingStatus\"},{\"name\":\"bookingType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"optionalData\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"payments\",\"kind\":\"object\",\"type\":\"Payment\",\"relationName\":\"BookingToPayment\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Payment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"bookingId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToPayment\"},{\"name\":\"paymentDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"paymentInfo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"PaymentStatus\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Amenities\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"icon\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Cuisine\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Evbooking\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ticketNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"person\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"vat\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"payStatus\",\"kind\":\"enum\",\"type\":\"PaymentStatus\"},{\"name\":\"eventDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"eventId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"event\",\"kind\":\"object\",\"type\":\"Events\",\"relationName\":\"EvbookingToEvents\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"optionalData\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"issueAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

