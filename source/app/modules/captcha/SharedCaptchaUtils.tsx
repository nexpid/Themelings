// app/modules/captcha/SharedCaptchaUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    report = tangon.incrementCaptchaServeVolume;
    var _closure1_slot0 = report;
    report = tangon.flushCaptchaServeVolume;
    var _closure1_slot1 = report;
    tangon = tangon.isCaptchaStoreVolumeEmpty;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
    var _closure1_slot3 = tangon;
    tangon = {};
    report = 'cancel';
    tangon['CANCEL'] = report;
    report = 'error';
    tangon['ERROR'] = report;
    report = 'expired';
    tangon['EXPIRED'] = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/captcha/SharedCaptchaUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['CaptchaError'] = tangon;
    tangon = function(argFoo) { // Original name: extractCaptchaPropsFromResponse
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.captcha_service;
            entity['captchaService'] = michal;
            michal = zuuluu.captcha_sitekey;
            entity['sitekey'] = michal;
            michal = zuuluu.captcha_session_id;
            entity['captchaSessionId'] = michal;
            michal = {};
            tangon = zuuluu.captcha_rqdata;
            michal['rqdata'] = tangon;
            tangon = zuuluu.captcha_rqtoken;
            michal['rqtoken'] = tangon;
            report = zuuluu.should_serve_invisible;
            tangon = null;
            tangon = tangon != report;
            if(!tangon) { _fun00002_ip = 86; continue _fun00001 }
 83:
            tangon = report;
 86:
            michal['serveInvisible'] = tangon;
            zuuluu = zuuluu.user_flow;
            michal['userflow'] = zuuluu;
            entity['options'] = michal;
            return entity;
        }
    };
    zuuluu['extractCaptchaPropsFromResponse'] = tangon;
    michal = function(argFoo) { // Original name: emitCaptchaDistributionMetric
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot2;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(!zuuluu) { _fun00004_ip = 43; continue _fun00003 }
 16:
            zuuluu = global;
            report = zuuluu.setTimeout;
            tangon = _closure1_slot3;
            zuuluu = function() {
                michal = _closure1_slot1;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            zuuluu = report.bind(entity)(zuuluu, tangon);
 43:
            zuuluu = _closure1_slot0;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['emitCaptchaDistributionMetric'] = michal;
    return entity;
})();