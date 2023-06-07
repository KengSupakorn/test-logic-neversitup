const validatePincode = (processPin) => {
    let countDup = 0;
    let countSeqNum = 0;
    let isSeqNum = false;
    let countDupSetNum = 0;
    if (Number(processPin)) {
        if (processPin.length >= 6) {
            for (let i = 0; i < processPin.length - 1; i++) {
                const number = processPin[i];
                const number2 = processPin[i + 1];
                if (number === number2) {
                    countDup++;
                } else {
                    countDup = 0;
                }
                if (Math.abs(number - number2) === 1) {
                    countSeqNum++;
                    if (countSeqNum > 1) {
                        isSeqNum = true;
                    }
                } else {
                    countSeqNum = 0;
                }
                if (number - number2 === 0) {
                    countDupSetNum++;
                }
            }
            if (countDup > 2) {
                console.log("pincode dup more than 2");
            } else if (isSeqNum) {
                console.log("pincode seq more than 2");
            } else if (countDupSetNum > 2) {
                console.log("pincode dup set more than 2");
            } else {
                console.log("validate pincode success");
            }
        } else {
            console.log("please enter pincode length >= 6");
        }
    } else {
        console.log("please enter number");
    }
    return 0;
}

validatePincode(process.argv[2]);