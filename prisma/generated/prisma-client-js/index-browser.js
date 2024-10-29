
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
