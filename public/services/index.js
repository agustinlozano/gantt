const fullUrl = window.location.host
const subdomain = fullUrl.split('.')[0]
// const subdomain = '28'

const BASE_URL = `http://${subdomain}.bimtrazer.com/`

async function getDataInDb () {
  const res = await fetch(BASE_URL + 'api/GetDataProj/GanttDataLoad')

  return await res.json()
}

async function getLabelsFromApi (typeOfLabel) {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      ID: 'ListLabels',
      DATA: typeOfLabel
    })
  }
  const res = await fetch(BASE_URL + 'api/PostDataProj', options)

  return res.json()
}

async function storeGanttData (data) {
  console.log(data)

  const options = {
    method: 'POST',
    body: JSON.stringify({
      ID: 'GanttDataUpdate',
      DATA: data
    })
  }

  try {
    const res = await fetch(BASE_URL + 'api/PostDataProj', options)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}
