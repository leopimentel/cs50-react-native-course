const x = {
    name: 'leo',
    fullName: function() {
        console.log(this)
        return this.name + ' ferreira'
    },
    fullName2: () => {
        console.log(this)
        return this.name + ' ferreira'
    }
}


console.log(x.fullName() + '\n\n')
console.log(x.fullName2() + '\n')
// const y = x.fullName.bind({name: 'leo'})
// console.log(y() + '\n')
// x.name = 'leo'
// console.log(x.fullName2() + '\n')
