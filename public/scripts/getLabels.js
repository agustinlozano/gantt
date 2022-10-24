async function getListOfLabels (typeOfLabel) {
  const res = await getLabelsFromApi(typeOfLabel)
  const { DATA: labels } = res

  let result = ''
  for (let i = 0; i < labels.length; i++) {
    result += "<option value='" + labels[i].key + "'> " + labels[i].label + '</option>'
  }
  return result
}
