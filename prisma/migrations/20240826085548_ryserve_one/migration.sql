-- CreateEnum
CREATE TYPE "loggerType" AS ENUM ('DASHBOARD_USER', 'APPS_USER');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('CRM_EDITOR', 'BUSINESS_OWNER', 'BUSINESS_MANAGER', 'LISTING_MANAGER', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('TABLE_RESERVATION', 'ROOM_RESERVATION', 'OTHERS');

-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('PROPIETOR', 'PARTNERSHIP', 'LTD_COMPANY', 'OTHERS');

-- CreateEnum
CREATE TYPE "BusinessCategory" AS ENUM ('HOTEL', 'RESTAURANT', 'SERVICE_APARTMENT', 'MOVIE_THEATER', 'SPA', 'OTHERS');

-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('APARTMENT_BUILDING', 'SHARED_BUILDING', 'SHARED_FLOOR', 'OTHERS');

-- CreateEnum
CREATE TYPE "pricingType" AS ENUM ('RENTAL', 'FOOD');

-- CreateEnum
CREATE TYPE "category" AS ENUM ('ROOM', 'TABLE', 'TICKET', 'APPOINTMENT');

-- CreateEnum
CREATE TYPE "compType" AS ENUM ('KING', 'MEDIUM', 'LARGE', 'SINGLE', 'TWIN', 'QUEEN');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('CONFIRMED', 'DEACTIVE', 'ON_HOLD', 'CANCELED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PAID', 'UNPAID', 'OTHER');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" INTEGER,
    "expires" TIMESTAMP(3) NOT NULL,
    "loggerType" "loggerType",

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "userType" "UserType" DEFAULT 'BUSINESS_OWNER',
    "ownerId" INTEGER,
    "roleId" INTEGER,
    "birthDate" TIMESTAMP(3),
    "phoneNumber" TEXT,
    "country" TEXT,
    "city" TEXT,
    "location" TEXT,
    "residenceAddress" TEXT,
    "occupation" TEXT,
    "designation" TEXT,
    "nid" INTEGER,
    "tin" TEXT,
    "havingBusiness" BOOLEAN DEFAULT false,
    "password" TEXT,
    "loggerType" "loggerType",
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "name" TEXT,
    "userType" "UserType" DEFAULT 'CUSTOMER',
    "birthDate" TIMESTAMP(3),
    "phoneNumber" TEXT,
    "picture" TEXT,
    "country" TEXT,
    "city" TEXT,
    "location" TEXT,
    "residenceAddress" TEXT,
    "occupation" TEXT,
    "designation" TEXT,
    "nid" INTEGER,
    "tin" TEXT,
    "password" TEXT,
    "otp" INTEGER,
    "otpExpireAt" TIMESTAMP(3),
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolePermission" (
    "id" SERIAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    "roleName" TEXT NOT NULL,
    "permissions" TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wishList" (
    "id" SERIAL NOT NULL,
    "type" "BusinessCategory" DEFAULT 'OTHERS',
    "userId" INTEGER,
    "subAssetComponentId" INTEGER,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wishList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" SERIAL NOT NULL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" SERIAL NOT NULL,
    "businessName" TEXT NOT NULL,
    "slug" TEXT,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT,
    "businessType" "BusinessType" NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "businessCategory" "BusinessCategory" NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "locationPoint" TEXT NOT NULL,
    "managerName" TEXT,
    "managerEmail" TEXT,
    "managerPhone" TEXT,
    "managerAddress" TEXT,
    "numberOfEmployee" INTEGER,
    "tradeLicence" TEXT NOT NULL,
    "tin" TEXT NOT NULL,
    "bin" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "businessId" INTEGER NOT NULL,
    "assetType" "AssetType",
    "propertyName" TEXT NOT NULL,
    "slug" TEXT,
    "logo" TEXT,
    "country" TEXT,
    "city" TEXT,
    "area" TEXT,
    "locationPoint" TEXT,
    "geoTag" TEXT,
    "noOfRoom" INTEGER,
    "about" TEXT,
    "bookingCount" INTEGER DEFAULT 0,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingTemplate" (
    "id" SERIAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'BDT',
    "basePrice" INTEGER NOT NULL DEFAULT 0,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "type" "pricingType" NOT NULL,
    "tempName" TEXT NOT NULL,
    "pricing" JSONB NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pricing" (
    "id" SERIAL NOT NULL,
    "subAssetId" INTEGER NOT NULL,
    "subAssetCompId" INTEGER NOT NULL,
    "type" "pricingType" NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'BDT',
    "basePrice" INTEGER NOT NULL DEFAULT 0,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "pricing" JSONB NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Amenities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cuisine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cuisine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubAsset" (
    "id" SERIAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    "address" TEXT,
    "amenities" JSONB,
    "floor" INTEGER NOT NULL,
    "sqft" DOUBLE PRECISION NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubAssetComponent" (
    "id" SERIAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    "subAssetId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "type" "BusinessCategory" DEFAULT 'OTHERS',
    "listingName" TEXT,
    "image" JSONB,
    "description" TEXT,
    "terms" TEXT,
    "slot" JSONB,
    "offday" JSONB,
    "isEvent" BOOLEAN NOT NULL DEFAULT false,
    "event" JSONB,
    "cuisines" TEXT[],
    "reservationCategory" "category",
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubAssetComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table" (
    "id" SERIAL NOT NULL,
    "subAssetCompId" INTEGER NOT NULL,
    "type" "compType",
    "capacity" INTEGER,
    "position" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "image" TEXT,
    "splitable" BOOLEAN NOT NULL DEFAULT true,
    "ryservable" BOOLEAN NOT NULL DEFAULT true,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeatBed" (
    "id" SERIAL NOT NULL,
    "subAssetCompId" INTEGER NOT NULL,
    "type" "compType",
    "roomNo" TEXT NOT NULL,
    "breakfast" TEXT NOT NULL,
    "image" TEXT,
    "accomodationCapacity" TEXT NOT NULL,
    "extraBedPolicy" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeatBed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "assetId" INTEGER,
    "subAssetId" INTEGER,
    "subAssetCompId" INTEGER NOT NULL,
    "tableId" INTEGER,
    "seatBedId" INTEGER,
    "ownerId" INTEGER,
    "customerId" INTEGER,
    "customerName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "slot" TEXT,
    "comment" TEXT,
    "customerRequest" TEXT,
    "cancelReason" TEXT,
    "guestNumber" INTEGER DEFAULT 0,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "vat" INTEGER NOT NULL DEFAULT 0,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "grandTotal" INTEGER NOT NULL DEFAULT 0,
    "status" "BookingStatus" NOT NULL DEFAULT 'ON_HOLD',
    "bookingType" TEXT DEFAULT 'Regular',
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "paymentDate" TIMESTAMP(3),
    "paymentInfo" TEXT,
    "status" "PaymentStatus" NOT NULL,
    "deleted" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_email_key" ON "Owner"("email");

-- CreateIndex
CREATE INDEX "Owner_name_email_phoneNumber_roleId_idx" ON "Owner"("name", "email", "phoneNumber", "roleId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_name_email_phoneNumber_city_idx" ON "User"("name", "email", "phoneNumber", "city");

-- CreateIndex
CREATE INDEX "RolePermission_assetId_roleName_idx" ON "RolePermission"("assetId", "roleName");

-- CreateIndex
CREATE INDEX "wishList_userId_subAssetComponentId_idx" ON "wishList"("userId", "subAssetComponentId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "Business_businessName_city_ownerId_idx" ON "Business"("businessName", "city", "ownerId");

-- CreateIndex
CREATE INDEX "Asset_businessId_propertyName_area_city_idx" ON "Asset"("businessId", "propertyName", "area", "city");

-- CreateIndex
CREATE INDEX "Pricing_subAssetId_subAssetCompId_type_idx" ON "Pricing"("subAssetId", "subAssetCompId", "type");

-- CreateIndex
CREATE INDEX "Amenities_name_idx" ON "Amenities"("name");

-- CreateIndex
CREATE INDEX "Cuisine_name_idx" ON "Cuisine"("name");

-- CreateIndex
CREATE INDEX "SubAsset_assetId_idx" ON "SubAsset"("assetId");

-- CreateIndex
CREATE INDEX "SubAssetComponent_assetId_subAssetId_listingName_ownerId_ty_idx" ON "SubAssetComponent"("assetId", "subAssetId", "listingName", "ownerId", "type", "isEvent", "reservationCategory");

-- CreateIndex
CREATE INDEX "Table_subAssetCompId_capacity_idx" ON "Table"("subAssetCompId", "capacity");

-- CreateIndex
CREATE INDEX "SeatBed_subAssetCompId_type_idx" ON "SeatBed"("subAssetCompId", "type");

-- CreateIndex
CREATE INDEX "Booking_assetId_subAssetId_subAssetCompId_ownerId_customerI_idx" ON "Booking"("assetId", "subAssetId", "subAssetCompId", "ownerId", "customerId", "phoneNumber", "customerName", "slot", "startDate", "status");

-- CreateIndex
CREATE INDEX "Payment_bookingId_paymentDate_status_idx" ON "Payment"("bookingId", "paymentDate", "status");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "RolePermission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishList" ADD CONSTRAINT "wishList_subAssetComponentId_fkey" FOREIGN KEY ("subAssetComponentId") REFERENCES "SubAssetComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingTemplate" ADD CONSTRAINT "PricingTemplate_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_subAssetId_fkey" FOREIGN KEY ("subAssetId") REFERENCES "SubAsset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_subAssetCompId_fkey" FOREIGN KEY ("subAssetCompId") REFERENCES "SubAssetComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubAsset" ADD CONSTRAINT "SubAsset_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubAssetComponent" ADD CONSTRAINT "SubAssetComponent_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubAssetComponent" ADD CONSTRAINT "SubAssetComponent_subAssetId_fkey" FOREIGN KEY ("subAssetId") REFERENCES "SubAsset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubAssetComponent" ADD CONSTRAINT "SubAssetComponent_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table" ADD CONSTRAINT "Table_subAssetCompId_fkey" FOREIGN KEY ("subAssetCompId") REFERENCES "SubAssetComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeatBed" ADD CONSTRAINT "SeatBed_subAssetCompId_fkey" FOREIGN KEY ("subAssetCompId") REFERENCES "SubAssetComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_subAssetId_fkey" FOREIGN KEY ("subAssetId") REFERENCES "SubAsset"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_subAssetCompId_fkey" FOREIGN KEY ("subAssetCompId") REFERENCES "SubAssetComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_seatBedId_fkey" FOREIGN KEY ("seatBedId") REFERENCES "SeatBed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
