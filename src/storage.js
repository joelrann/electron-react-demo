export default class storage {

    static init ()
    {
        if (!this.getTotals()) this.resetTotals();
    }

    static initialTotals = [
        { trueNo: 0, falseNo: 0 },
        { trueNo: 0, falseNo: 0 },
        { trueNo: 0, falseNo: 0 },
        { trueNo: 0, falseNo: 0 },
        { trueNo: 0, falseNo: 0 },
        { trueNo: 0, falseNo: 0 },
    ];

    static testTotals = [
        { trueNo: 24, falseNo: 87 },
        { trueNo: 56, falseNo: 12 },
        { trueNo: 89, falseNo: 56 },
        { trueNo: 55, falseNo: 34 },
        { trueNo: 78, falseNo: 61 },
        { trueNo: 102, falseNo: 77 },
    ];

    static addAnswer(index, correct)
    {
        const totals = this.getTotals();
        const key = correct ? 'trueNo' : 'falseNo';
        totals[index][key] += 1;
        localStorage.setItem('totals', JSON.stringify(totals));
    }

    static getTotals()
    {
        return JSON.parse(localStorage.getItem('totals'));
    }

    static resetTotals(value) {
        localStorage.setItem('totals', JSON.stringify(value || this.initialTotals));
    }
}
