function calculateAverageByAssignment(mockGrades) {
  let assignAvgs = {}
  let newArray = []

  mockGrades.forEach(mockGrade => {
    if (assignAvgs[mockGrade.assignment]) {
      assignAvgs[mockGrade.assignment].push(mockGrade.score)
    } else {
      assignAvgs[mockGrade.assignment] = [mockGrade.score]
    }
  })
  for (const [assignment, score] of Object.entries(assignAvgs)) {
    let avg = average(score)

    newArray.push({
      name: assignment,
      average: avg
    })
  }

  return newArray
}

const average = (array) => array.reduce((a, b) => a + b) / array.length

module.exports = calculateAverageByAssignment
