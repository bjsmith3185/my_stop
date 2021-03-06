

const {
  hasWhiteSpace,
  isString,
  isEmpty,
  hasLengthBetween,
  isValidState
} = require("./validateOperators");

module.exports = function validateNewEncounter(data) {
  // console.log("is it here")
  // console.log(data)

  let errors = {};
  let isValid = false;
  let validDriver = false;
  let validLocation = false;
  let validRs = false;
  let validResult = false;
  let validEncounterInfo = false;
  let validEncounterState = false;


  // check driver
  if (isEmpty(data.driver)) {
    errors.driver = "Driver is empty";
  } else if (!hasLengthBetween(data.driver, 2, 30)) {
    errors.driver = "Driver should have a min 2, max 30 characters";
  } else {
    if (isString(data.driver)) {
      validDriver = true;
    } else {
      errors.driver = "Driver must be a string";
    }
  }

  // Check location
  if (isEmpty(data.location)) {
    errors.location = "Location is empty";
  } else if (!hasLengthBetween(data.location, 2, 80)) {
    errors.location = "Location should have a min 2, max 80 characters";
  } else {
    if (isString(data.location)) {
      validLocation = true;
    } else {
      errors.location = "Location must be a string";
    }
  }

  // Check rs
  if (isEmpty(data.rs)) {
    errors.rs = "RS is empty";
  } else if (!hasLengthBetween(data.rs, 2, 1000)) {
    errors.rs = "RS should have a min 2, max 100 characters";
  } else {
    if (isString(data.rs)) {
      validRs = true;
    } else {
      errors.rs = "RS must be a string";
    }
  }

  // Check result
  if (isEmpty(data.result)) {
    errors.result = "Result is empty";
  } else if (!hasLengthBetween(data.result, 2, 50)) {
    errors.result = "Result should have a min 2, max 50 characters";
  } else {
    if (isString(data.result)) {
      validResult = true;
    } else {
      errors.result = "Result must be a string";
    }
  }

    // Check encounterInfo
    if (isEmpty(data.encounterInfo)) {
      errors.encounterInfo = "Encounter Info is empty";
    } else if (!hasLengthBetween(data.encounterInfo, 2, 1000)) {
      errors.encounterInfo = "Encounter Info should have a min 2, max 1000 characters";
    } else {
      if (isString(data.encounterInfo)) {
        validEncounterInfo = true;
      } else {
        errors.encounterInfo = "Encounter Info must be a string";
      }
    }


    // Check State
  if (isEmpty(data.encounterState)) {
    errors.encounterState = "State is empty";
  } else if (hasWhiteSpace(data.encounterState)) {
    errors.encounterState = "State can't contain spaces";
  } else if (!hasLengthBetween(data.encounterState, 2, 3)) {
    errors.encounterState = "State should have a min 2, max 2 characters";
  } else if (!isValidState(data.encounterState)) {
    errors.encounterState = "State does not exist";
  } else {
    if (isString(data.encounterState)) {
      validEncounterState = true;
    } else {
      errors.encounterState = "State must be a string";
    }
  }
   
  
  if (
    validDriver &&
    validLocation &&
    validRs &&
    validResult &&
    validEncounterInfo &&
    validEncounterState
  ) {
    isValid = true;
  }
 
  return {
    isValid: isValid,
    errors: errors
  };
};
