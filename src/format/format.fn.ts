// format.fn.ts
// input => process => output

// string => string
export function mobileFormat(mobileNo: string): string {
    // 089 123 4568
    const m1 = mobileNo.slice(0, 3) // 089
    const m2 = mobileNo.slice(3, 6)
    const m3 = mobileNo.slice(6)
    return `${m1}-${m2}-${m3}`
}

// 089-123-4568
console.log(mobileFormat('0891234568'))
// console.log(mobileFormat(true))


// spec => code 
// struct id, name, adresss
