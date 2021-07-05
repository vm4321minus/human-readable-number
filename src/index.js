module.exports = function toReadable(num) {

    const arrayone = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen'];

    const arraytwo = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (num == 0) {
        return "zero";
    }

    if (num < 20) {

        return arrayone[num];
    }

    if (num < 100) {

        if (num % 10 == 0) {
            return arraytwo[Math.floor(num / 10)];
        }
        else {
            return `${arraytwo[Math.floor(num / 10)]} ${arrayone[num % 10]}`;
        }




    }

    if (num >= 100) {


        if (num % 100 === 0) {
            return arrayone[Math.floor(num / 100)] + " hundred";
        }
        else if (num > 99 && num % 100 < 20) {
            return arrayone[Math.floor(num / 100)] + " hundred " + arrayone[num % 100];
        }
        else if (num > 100 && num % 10 == 0) {
            return arrayone[Math.floor(num / 100)] + " hundred " + arraytwo[(Math.floor(num / 10) % 10)];

        }
        else {
            return arrayone[Math.floor(num / 100)] + " hundred " + arraytwo[(Math.floor(num / 10) % 10)] + " " + arrayone[Math.floor(num % 10)];
        }

    }


}
