function more() {
    const input = document.getElementById(`input`);
    const text = document.getElementById(`txt`);
    if (input.value.length <= 200) {
        text.innerText = input.value;
        input.style.display = `none`;
        text.style.display = `inline`;
    } else if (input.value.length > 200) {
        text.innerText = input.value.slice(0, 201);
        input.style.display = `none`;
        text.style.display = `inline`;
        // ---------------- code1 start
        const btn1 = document.createElement(`a`);
        btn1.innerText = ` ` + `Read more`;
        document.getElementById(`container`).append(btn1);
        btn1.style.color = `rgb(60, 177, 255)`;
        btn1.style.cursor = `pointer`;
        // ---------------- code1 end
        // ---------------- code2start
        btn1.addEventListener(`click`, function () {
            btn1.style.display = `none`;
            const text2 = document.createElement(`span`);
            text2.innerText = input.value.slice(201, 401);
            document.getElementById(`container`).append(text2);

            // ----------------  code3 start
            if (input.value.length > 400) {
                const btn2 = document.createElement(`a`);
                btn2.innerText = ` ` + `Read more`;
                document.getElementById(`container`).append(btn2);
                btn2.style.color = `rgb(60, 177, 255)`;
                btn2.style.cursor = `pointer`;
                btn2.addEventListener(`click`, function () {
                    btn2.style.display = `none`;
                    const text3 = document.createElement(`span`);
                    text3.innerText = input.value.slice(401, 601);
                    document.getElementById(`container`).append(text3);

                    // ----------------  code4 start
                    if (input.value.length > 600) {
                        const btn3 = document.createElement(`a`);
                        btn3.innerText = ` ` + `Read more`;
                        document.getElementById(`container`).append(btn3);
                        btn3.style.color = `rgb(60, 177, 255)`;
                        btn3.style.cursor = `pointer`;
                        btn3.addEventListener(`click`, function () {
                            btn3.style.display = `none`;
                            const text4 = document.createElement(`span`);
                            text4.innerText = input.value.slice(601, 801);
                            document.getElementById(`container`).append(text4);

                            // ----------------  code5 start
                            if (input.value.length > 800) {
                                const btn4 = document.createElement(`a`);
                                btn4.innerText =` ` + `Read more`;
                                document.getElementById(`container`).append(btn4);
                                btn4.style.color = `rgb(60, 177, 255)`;
                                btn4.style.cursor = `pointer`;
                                btn4.addEventListener(`click`, function () {
                                    btn4.style.display = `none`;
                                    const text5 = document.createElement(`span`);
                                    text5.innerText = input.value.slice(801, 1000);
                                    document.getElementById(`container`).append(text5);
                                });
                            }
                            // ----------------  code5 end
                        });
                    }
                    // ----------------  code4 end
                });
            }
            // ----------------  code3 end
        });
        // ---------------- code2 end
    }

    // ----------------  code6 start
    if (input.value.length > 1000) {
        document.getElementById(`container`).style.display = `none`;
        alert(`Your text is more longer (Allowed characters: 1000)`);
    }
    // ----------------  code6 end
    document.getElementById(`snd`).style.display = `none`
}
