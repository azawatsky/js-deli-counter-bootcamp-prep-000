function takeANumber(katzDeliLine,newPerson) {
  console.log(katzDeliLine)
  katzDeliLine=katzDeliLine.push(newPerson)
  console.log(katzDeliLine)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}