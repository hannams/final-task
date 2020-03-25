
  export default function getPropertyValue(obj1, dataToRetrieve) {
    return dataToRetrieve
      .split('.')
      .reduce(function(o, k) {
        return o && o[k];
      }, obj1)
  }