const numbers = [1, 1, 1, 2, 3, 2, 3, 2]
$('#out').text(numbers)

function reload(time) {
    location.reload()
}

function AddElement() {
    let num = $('#number').val()
    numbers.push(num)
    $('#out').text(numbers)
    $('#number').val(" ")
}

function DelLastElement() {
    numbers.pop()
    $('#out').text(numbers)
}

function DelFistElement() {
    numbers.shift()
    $('#out').text(numbers)
}

function WithoutRepeat() {
    numbers.sort()
    let len = numbers.length
    const temp = []
    for (let i = 0; i < len; i++) {
        if (numbers[i] !== numbers[i + 1]) {
            temp.push(numbers[i])
        }
    }
    $('#out').text(temp.sort())
}

function Restart() {
    setTimeout(reload, 1000)
}

$('#restart').click(Restart)
$('#addn').click(AddElement)
$('#dellel').click(DelLastElement)
$('#delfel').click(DelFistElement)
$('#exclel').click(WithoutRepeat)