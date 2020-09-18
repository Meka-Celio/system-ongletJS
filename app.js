(function () {
	/*
		Lorque l'on clique sur un lien : 
		- On lui ajoute la classe 'active', 
		- On enlève la classe 'active' à l'élement qui le possède

		- On ajoute la classe 'active' au contenu qui correspond au lien cliqué
		- On enlève la classe 'active' au content actuel

		- Lorsqu'un lien est actif, il n'est pas cliquable 
	*/

	let selectOnglet = function (a) {
		let li 			=	a.parentNode; // le <li> parent
		let div 		=	a.parentNode.parentNode.parentNode // la <div> parente
		//let contents 	=	document.querySelectorAll('.tab-content') // Tous les <div> avec les différents contenus

		// Si le lien est déjà sélectionné
		if (li.classList.contains('active')) {
			e.preventDefault()
		}  
		else {

			// On enlève la classe active au lien courant
			div.querySelector('.tabs .active').classList.remove('active') 
			// On ajoute 'active' au lien en cours
			li.classList.add('active')

			// On enlève la classe 'active' au contenu courant
			div.querySelector('.tab-content.active').classList.remove('active')
			// On place 'active' sur le contenu correpondant
			div.querySelector(a.getAttribute('href')).classList.add('active')
			
			// On parcours le tableau des contenus
			// for(let j=0; j<contents.length; j++) {

			// 	// Si l'id du contenu et le 'href' du lien correspondent
			// 	if (contents[j].id == self.getAttribute('href')) {
			// 		contents[j].classList.add('active')
			// 	}
			// }
		}
	}

	let links = document.querySelectorAll('.tabs a');

	for (let i=0; i<links.length; i++) {
		links[i].addEventListener('click', function(e) {
			selectOnglet(this)
		})
	}

	let hash = window.location.hash
	let a = document.querySelector('a[href="'+hash+'"]')
	if (a !== null && !a.classList.contains('active')) {
		selectOnglet(a)
	}
})()