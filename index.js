function takeANumber(katzDeliLine,newPerson) {
  katzDeliLine=katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}