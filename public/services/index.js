async function getDataInDb () {
  const res = await fetch('http://36.bimtrazer.com/api/GetDataProj/GanttDataLoad')

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
  const res = await fetch('http://36.bimtrazer.com/api/PostDataProj', options)

  return res.json()
}
