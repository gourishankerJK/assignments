function myFunction() {
	// Cloud
	var cloud = document.querySelector("#cloud-container").cloneNode(true);
	cloud.id = "cloud-container2";
	document.querySelector("#head-section-bottom").append(cloud);
	// Flag
	var flag = document.querySelector("#flag").cloneNode(true);
	flag.id = "flag1"
	document.querySelector("#mountains").append(flag);
	//house
	var house = document.querySelector("#house").cloneNode(true);
	house.id ="house1";
	document.querySelector("#mountains").append(house);
	// Tree
	var i = 0;
	while (i < 7) {
		var tree = document.querySelector("#tree").cloneNode(true);
		if (0 <= i && i <= 2) {
			tree.querySelector("#leaves").style.borderBottomColor = "rgb(246,213,70)";
		} else if (3 <= i && i < 5) {
			tree.querySelector("#leaves").style.borderBottomColor = "rgb(244,160,160)";
		} else if (i == 5) {
			tree.querySelector("#leaves").style.borderBottomColor = "rgb(143,209,130)";
		} else {
			tree.querySelector("#leaves").style.borderBottomColor = "rgb(33,125,104)";
		}
		tree.id = "tree" + i
		tree.class = "trees";
		tree.style.position = "absolute";
		document.querySelector("#mountains").append(tree);
		i += 1;
	}
	// boy
	var boy = document.querySelector("#background-circle").cloneNode(true);
     boy.id = "boy-intro";
		 boy.class = "cartoon";
		 boy.style.position = "static";
		 console.log(boy);
		document.querySelector("#intro").prepend(boy);
		var boy1 = document.querySelector("#background-circle").cloneNode(true);
	     boy1.id = "boy1";
			 boy1.class = "cartoon";
			 boy1.style.position = "static";
			 console.log(boy);
			document.querySelector("#abilites").prepend(boy1);
			var boy2 = document.querySelector("#background-circle").cloneNode(true);
		     boy2.id = "boy2";
				 boy2.class = "cartoon";
				 boy2.style.position = "static";
				 console.log(boy);
				var node = document.querySelector("#design h3");
				document.querySelector("#design").insertBefore(boy2,node);


};
myFunction();
