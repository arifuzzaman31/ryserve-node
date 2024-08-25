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