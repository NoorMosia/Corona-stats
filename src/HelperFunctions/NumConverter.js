const converter = num => {
    const strNum = num.toString();
    let strBuild = "";

    if (strNum.length % 3 === 0) {
        for (let index = 0; index < strNum.length; index++) {
            if ((index + 1) % 3 === 0) {
                strBuild += strNum[index] + " ";
            } else {
                strBuild += strNum[index];
            }
        }
    } else if ((strNum.length + 1) % 3 === 0) {
        strBuild += strNum[0] + strNum[1] + " ";

        for (let index = 2; index < strNum.length; index++) {
            if ((index - 1) % 3 === 0) {
                strBuild += strNum[index] + " ";
            } else {
                strBuild += strNum[index];
            }
        }
    } else if ((strNum.length + 2) % 3 === 0) {
        strBuild += strNum[0] + " ";

        for (let index = 1; index < strNum.length; index++) {
            if ((index) % 3 === 0) {
                strBuild += strNum[index] + " ";
            } else {
                strBuild += strNum[index];
            }
        }
    }

    return strBuild
}

export default converter;