class Password {
	constructor(digits = 24) {
		this.digits = digits
	}

	generate() {
		var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var lowercase = "abcdefghijklmnopqrstuvwxyz";
		var num = "0123456789";
		var symbols = "`~!@#$%^&*()-_=+[{]};:\'\",<.>/?\\";
		var comb = [
			uppercase,
			lowercase,
			num, 
			symbols
		]

		var id = "";

		for (let x = 0; x < this.digits; x++) {
			var randCom = Math.floor(Math.random() * comb.length)
			var randPlace = Math.floor(Math.random() * comb[randCom].length)
			id += comb[randCom][randPlace]
		}
		return id;
	}
}
