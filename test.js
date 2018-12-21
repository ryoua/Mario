var arr = ['*', '##', '***', "&&", "****", "##*"]
arr[7] = "**"
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] != null || ((arr[j].split("*").length - 1) == i)) {
            document.write(arr[j] + '<br/>')
        }
    }
}
