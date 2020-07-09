module.exports = (req, res) =>
    res.send({
        data: [
            {
                itemID: "CRP1",
                value: 100,
                date: {
                    month: 'JANUARY',
                    monthValue: 1
                }
            },
            {
                itemID: "CRP2",
                value: 200,
                date: {
                    month: 'JANUARY',
                    monthValue: 1
                }
            },
            {
                itemID: "CRP1",
                value: 300,
                date: {
                    month: 'FEBRUARY',
                    monthValue: 2
                }
            },
            {
                itemID: "CRP3",
                value: 150,
                date: {
                    month: 'FEBRUARY',
                    monthValue: 2
                }
            },
            {
                itemID: "CRP1",
                value: 450,
                date: {
                    month: 'MARCH',
                    monthValue: 3
                }
            },
            {
                itemID: "CRP2",
                value: 600,
                date: {
                    month: 'MARCH',
                    monthValue: 3
                }
            },
            {
                itemID: "CRP3",
                value: 700,
                date: {
                    month: 'APRIL',
                    monthValue: 4
                }
            },
        ],
    });