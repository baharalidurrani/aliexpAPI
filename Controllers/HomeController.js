exports.get = (req, res) => {
    const scraper = require('./scraper');
    scraper.crawl().then((data) => {
        console.log("Total entries: " + data.dates.length);
        console.log("Total Funds: " + data.funds[data.funds.length - 1]);

        res.render('Home.ejs', {
            dates: data.dates,
            funds: data.funds
        });

    })
    // .catch((e) => {
    //     console.log('\n***** Error occured while retriving data from the source...');
    //     console.log(e);
    //     console.log('***** Error occured while retriving data from the source...\n');

    //     res.render('Home.ejs', {
    //         dates: 'problem with the data source',
    //         funds: 'problem with the data source'
    //     });
    // });
};