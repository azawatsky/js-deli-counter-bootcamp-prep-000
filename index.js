function takeANumber(katzDeliLine,newPerson) {
  katzDeliLine=katzDeliLine.push(newPerson)
  var n=katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${n} in line.`
}