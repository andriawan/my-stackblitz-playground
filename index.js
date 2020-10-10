let x = [
  {id: "asaadad", nama: "irwan", age: 26, selected: true},
  {id: "asaadad1", nama: "daras", age: 25, selected: true},
  {id: "asaadad11",nama: "raisa", age: 20, selected: true}
]

let xy = [
  {id: "asaadad", nama: "irwan", age: 26, },
  {id: "asaadad1", nama: "daras", age: 25, },
  {id: "asaadad13", nama: "amel", age: 20, },
  {id: "asaadad14", nama: "lia", age: 20, },
  {id: "asaadad15", nama: "eka", age: 20, }
]

let merged = []

xy.forEach((c) => {
  let vc;
  x.forEach((v) => {
    vc = {
        ...c,
        ...v
      }
  })
  merged.push(vc)
})

console.log(merged)