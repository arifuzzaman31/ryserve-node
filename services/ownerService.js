exports.propertyBy = async(userData) => {
    let dataId;
      switch (userData.userType) {
        case 'CRM_EDITOR':
          dataId = 'all'
          break;
        case 'BUSINESS_OWNER':
          dataId = userData.id
          break;
        case 'BUSINESS_MANAGER':
          dataId = userData.ownerId
          break;
        case 'LISTING_MANAGER':
          dataId = userData.ownerId
          break;
        default:
          break;
      }
      return dataId;
}

exports.allPermission = async() => {
 return [
//   {
//       name: "Business",
//       permissions: [
//           {
//               "id": 1,
//               "permission_name": "Business Create",
//               "slug": "business-create",
//               "status": 1
//           },
//           {
//               "id": 2,
//               "permission_name": "Business View",
//               "slug": "business-view",
//               "status": 1
//           },
//           {
//               "id": 3,
//               "permission_name": "Business Edit",
//               "slug": "business-edit",
//               "status": 1,
//           },
//           {
//               "id": 4,
//               "permission_name": "Business Delete",
//               "slug": "business-delete",
//               "status": 1
//           }
//       ]
//   },
  {
      name: "Branch",
      permissions: [
          {
              "id": 5,
              "permission_name": "Branch Create",
              "slug": "branch-create",
              "status": 1
          },
          {
              "id": 6,
              "permission_name": "Branch View",
              "slug": "branch-view",
              "status": 1
          },
          {
              "id": 7,
              "permission_name": "Branch Edit",
              "slug": "branch-edit",
              "status": 1,
          },
          {
              "id": 8,
              "permission_name": "Branch Delete",
              "slug": "branch-delete",
              "status": 1
          }
      ]
  },
  {
      name: "Listing",
      permissions: [
          {
              "id": 9,
              "permission_name": "Listing Create",
              "slug": "listing-create",
              "status": 1
          },
          {
              "id": 10,
              "permission_name": "Listing View",
              "slug": "listing-view",
              "status": 1
          },
          {
              "id": 11,
              "permission_name": "Listing Edit",
              "slug": "listing-edit",
              "status": 1,
          },
          {
              "id": 12,
              "permission_name": "Listing Delete",
              "slug": "listing-delete",
              "status": 1
          }
      ]
  },
  {
      name: "Listing Type",
      permissions: [
          {
              "id": 13,
              "permission_name": "Listing Type Create",
              "slug": "listingtype-create",
              "status": 1
          },
          {
              "id": 14,
              "permission_name": "Listing Type View",
              "slug": "listingtype-view",
              "status": 1
          },
          {
              "id": 15,
              "permission_name": "Listing Type Edit",
              "slug": "listingtype-edit",
              "status": 1,
          },
          {
              "id": 16,
              "permission_name": "Listing Type Delete",
              "slug": "listingtype-delete",
              "status": 1
          }
      ]
  },
  {
      name: "Reservation",
      permissions: [
          {
              "id": 17,
              "permission_name": "View Reservation",
              "slug": "reservation-view",
              "status": 1
          },
          {
              "id": 18,
              "permission_name": "Add Reservation",
              "slug": "reservation-create",
              "status": 1,
          },
          {
              "id": 19,
              "permission_name": "Edit Reservation",
              "slug": "reservation-edit",
              "status": 1
          },
          {
              "id": 20,
              "permission_name": "Delete Reservation",
              "slug": "reservation-delete",
              "status": 1
          }
      ]
  },
  {
      name: "Report",
      permissions: [
          {
              "id": 33,
              "permission_name": "Report View",
              "slug": "report-view",
              "status": 1
          },
          {
              "id": 21,
              "permission_name": "Revenue Report",
              "slug": "revenue-report",
              "status": 1
          },
          {
              "id": 22,
              "permission_name": "Upcoming Report",
              "slug": "upcoming-report",
              "status": 1,
          },
          {
              "id": 23,
              "permission_name": "Complete Report",
              "slug": "complete-report",
              "status": 1
          },
          {
              "id": 24,
              "permission_name": "Cancel Report",
              "slug": "cancel-report",
              "status": 1
          }
      ]
  },
  {
      name: "Roles",
      permissions: [
          {
              "id": 25,
              "permission_name": "Role Create",
              "slug": "role-create",
              "status": 1
          },
          {
              "id": 26,
              "permission_name": "Role View",
              "slug": "role-view",
              "status": 1
          },
          {
              "id": 27,
              "permission_name": "Role Edit",
              "slug": "role-edit",
              "status": 1,
          },
          {
              "id": 28,
              "permission_name": "Role Delete",
              "slug": "role-delete",
              "status": 1
          }
      ]
  },
  {
      name: "Employee",
      permissions: [
          {
              "id": 29,
              "permission_name": "Employee Create",
              "slug": "employee-create",
              "status": 1
          },
          {
              "id": 30,
              "permission_name": "Employee View",
              "slug": "employee-view",
              "status": 1
          },
          {
              "id": 31,
              "permission_name": "Employee Edit",
              "slug": "employee-edit",
              "status": 1,
          },
          {
              "id": 32,
              "permission_name": "Employee Delete",
              "slug": "employee-delete",
              "status": 1
          }
      ]
  },
]
}