function takeANumber(currentLine,newPerson) {
  currentLine=currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}