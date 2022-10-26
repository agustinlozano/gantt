async function getListOfLabels (typeOfLabel) {
  const res = await getLabelsFromApi(typeOfLabel)
  const { DATA: labels } = res

  let result = ''
  for (let i = 0; i < labels.length; i++) {
    result += "<option value='" + labels[i].key + "'> " + labels[i].label + '</option>'
  }
  return result
}

function handleLabel ({ key, label }) {
  if (label === 'Planta baja') {
    return {
      cssClass: 'specialty',
      shortLabel: 'PB'
    }
  }
  if (label === 'Subsuelo') {
    return {
      cssClass: 'phase',
      shortLabel: 'SS'
    }
  }
  if (label === 'Azotea') {
    return {
      cssClass: 'phase',
      shortLabel: 'AZ'
    }
  }
  if (label.includes('Nivel')) {
    const level = label.split(' ')[1]
    return {
      cssClass: 'phase',
      shortLabel: `N${level}`
    }
  }
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
