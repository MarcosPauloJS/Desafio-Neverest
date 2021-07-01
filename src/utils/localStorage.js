export const getDataRank = () => {
  if(!process.browser) return {};
  
  try {
    const dataLocalStorage = localStorage.getItem('rank');
    if(typeof dataLocalStorage === 'string'){
      return JSON.parse(dataLocalStorage);
    }
    else {
      return {}
    }
  }
  catch(err) {
    return {}
  }
}

export const setDataRank  = (data) => {
  if(!process.browser) return;
  const stringData = JSON.stringify(data);

  localStorage.setItem('rank', stringData);
}

