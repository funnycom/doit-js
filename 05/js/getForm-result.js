		const selectMenu = document.querySelector("#major");  // 선택 목록을 가져와 selectMenu로 저장

		function displaySelect() {
			let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;		
			alert(`[${selectedText}]를 선택했습니다.`);
		}		

		selectMenu.onchange = displaySelect;