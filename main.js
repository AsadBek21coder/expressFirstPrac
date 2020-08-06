
async function main () {

	const response =  await fetch('http://localhost:8080/api')
	
	const data = await response.json()

	 for ( let i of data ) {

 	 const li = document.createElement('LI')
 	 li.textContent = i
 	 myUl.appendChild(li)

 	 console.log(i)
	}

	// console.log(response, data)

}
main()


// fetch('http://localhost:8080/api')
// .then(response => response.json())
// .then(data => console.log(data))