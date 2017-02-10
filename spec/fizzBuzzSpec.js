describe("FizzBuzz Testing",()=>{
	
	it("FizzBuzz must be defined", ()=>{
		expect(fizzBuzz(1)).toBeDefined();
	});

	it("should be a string 1 for passing 1.", ()=>{
		expect(fizzBuzz(1)).toBe(1);
	})

	it("Should be a string 2 for passing a 2.", ()=>{
		expect(fizzBuzz(2)).toBe(2);
	})

	it("Should be a string Fizz for passing a 3.", ()=>{
		expect(fizzBuzz(3)).toBe("Fizz");
	})

	it("Should be a string 4 for passing a 4.", ()=>{
		expect(fizzBuzz(4)).toBe(4);
	})

	it("Should be a string Buzz for passing a 5.", ()=>{
		expect(fizzBuzz(5)).toBe("Buzz");
	})

	it("Should be a string Fizz for passing a 6.", ()=>{
		expect(fizzBuzz(6)).toBe("Fizz");
	})

	it("Should be a string 8 for passing a 8.", ()=>{
		expect(fizzBuzz(8)).toBe(8);
	})

	it("Should be a string Fizz for passing a 9.", ()=>{
		expect(fizzBuzz(9)).toBe("Fizz");
	})

	// var random = Math.floor(Math.random() * 10) *15;
	// it("Should be string FizzBuzz for passing "+ random, ()=>{
	// 	expect(fizzBuzz(random)).toEqual("FizzBuzz")
	// })




	it("Should be a string FizzBuzz for passing a 15.", ()=>{
		expect(fizzBuzz(15)).toBe("FizzBuzz");
	})




})