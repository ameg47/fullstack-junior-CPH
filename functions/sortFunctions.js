export let locasc=function(a, b) {
    var nameA = a.items ? a.items[0].city.toUpperCase() : null; 
    var nameB = b.items ? b.items[0].city.toUpperCase() : null; 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

export let locdes=function(b, a) {
    var nameA = a.items ? a.items[0].city.toUpperCase() : null; 
    var nameB = b.items ? b.items[0].city.toUpperCase() : null; 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

export let roleasc=function(a, b) {
    var nameA = a.job_title.toUpperCase(); 
    var nameB = b.job_title.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

export let roledes=function(b, a) {
    var nameA = a.job_title.toUpperCase(); 
    var nameB = b.job_title.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

export let depasc=function(a, b) {
    var nameA = a.department.length
    var nameB = b.department.length
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

export let depdes=function(b, a) {
    var nameA = a.department.length
    var nameB = b.department.length
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

export let expasc=function(a, b) {
    var nameA = a.experience.toUpperCase(); 
    var nameB = b.experience.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

export let expdes=function(b, a) {
    var nameA = a.experience.toUpperCase(); 
    var nameB = b.experience.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

export const SortFunc={
    "roleasc":roleasc,
    "roledes": roledes,
    "expdes": expdes,
    "expasc": expasc,
    "depasc":depasc,
    "depdes": depdes,
    "locasc": locasc,
    "locdes": locdes
}