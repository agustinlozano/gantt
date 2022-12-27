async function getListOfLabels (typeOfLabel) {
  const res = await getLabelsFromApi(typeOfLabel)
  const { DATA: labels } = res

  if (!labels) return []

  let result = ''
  for (let i = 0; i < labels.length; i++) {
    result += "<option value='" + labels[i].key + "'> " + labels[i].label + '</option>'
  }
  return result
}

function handleLabel ({ key: keyAsString, label }) {
  const key = parseInt(keyAsString)
  if (key >= 3 && key <= 11) {
    // It's a specialty

    if (label.includes(' ')) {
      return {
        cssClass: 'specialty',
        shortLabel: label.split(' ')[1].substr(0, 2)
      }
    }

    return {
      cssClass: 'specialty',
      shortLabel: label.substr(0, 2)
    }
  }
  if (key >= 12 && key <= 26) {
    // It's a phase
    return {
      cssClass: 'phase',
      shortLabel: label
    }
  }
  if (key >= 27 && key <= 84) {
    // It's other class
    return {
      cssClass: 'Other',
      shortLabel: label
    }
  }

  return null
}
