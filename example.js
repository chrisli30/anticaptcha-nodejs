// http module should be installed:
// npm i http

// Params:
// your anti-captcha.com account key
var anticaptcha = require('./anticaptcha')('1b61c6ecba16e325cf0f8ff845e06e52');

//recaptcha key from target website
anticaptcha.setWebsiteURL("http://www.authorship.com/withdraw");
anticaptcha.setWebsiteKey("r20170915175810");

//proxy access parameters
// anticaptcha.setProxyType("http");
// anticaptcha.setProxyAddress("proxyaddress");
// anticaptcha.setProxyPort(8080);
// anticaptcha.setProxyLogin("proxylogin");
// anticaptcha.setProxyPassword("proxypassword");

//browser header parameters
anticaptcha.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116");

// check balance first
anticaptcha.getBalance(function (err, balance) {
    if (err) {
        console.error(err);
        return;
    }

    if (balance > 0) {
        anticaptcha.createTask(function (err, taskId) {
            if (err) {
                console.error(err);
                return;
            }

            console.log(taskId);

            anticaptcha.getTaskSolution(taskId, function (err, taskSolution) {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log(taskSolution);
            });
        });
    }
});