import addContext from 'mochawesome/addContext'
​
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let item = runnable
    const nameParts = [runnable.title]
​
    // Iterate through all parents and grab the titles
    while (item.parent) {
      nameParts.unshift(item.parent.title)
      item = item.parent
    }
​
    const fullTestName = nameParts
            .filter(Boolean)
            .join('_--_')
            .split(' ')
            .join('_')
            .split('"')
            .join('')
            .split('(')
            .join('')
            .split(')')
            .join('')
            .split(',')
            .join('_')
            .replace('_#', '>')
​
    const imageUrl = `screenshots/${Cypress.spec.name}/${fullTestName}_failed.png`
​
    addContext({ test }, imageUrl)
  }
})
