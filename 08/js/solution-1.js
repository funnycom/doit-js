const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const bttn = document.querySelector("#bttn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");

const today = new Date();  // 오늘
current.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

bttn.addEventListener("click", () => {
	// 입력 받은 생일을 Date 객체에 저장 
	const birthDay = new Date(birthYear.value, birthMonth.value - 1,  birthDate.value);

	let passed = today.getTime() - birthDay.getTime();
	let passedDays = Math.floor(passed / (1000 * 60 * 60 * 24));   // 일 수 계산
	let passedHours = Math.floor(passed / (1000 * 60 * 60));   // 시간 수 계산

	/* passedDays 값은 어제까지 흐른 날짜 수를 계산한 값입니다. 
	만일, 오늘이 며칠 째인지를 표시하려면 passedDays + 1로 계산해야 합니다. */
	
	resultDays.innerText = `날짜로는 ${passedDays} 일이 흐르고, `;
	resultHours.innerText = `시간으로는 ${passedHours} 시간이 흘렀습니다.`;

	birthYear.value = "";
	birthMonth.value = "";
	birthDate.value = "";

});


