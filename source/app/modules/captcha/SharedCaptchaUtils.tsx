// app/modules/captcha/SharedCaptchaUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    michal = global;
    offset = michal.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = option[report];
    oscard = oscard.bind(entity)(report);
    report = 6;
    report = option[report];
    report = golfie.bind(entity)(report);
    verify = report.incrementCaptchaServeVolume;
    var _closure1_slot5 = verify;
    verify = report.flushCaptchaServeVolume;
    var _closure1_slot6 = verify;
    report = report.isCaptchaStoreVolumeEmpty;
    var _closure1_slot7 = report;
    report = 7;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
    var _closure1_slot8 = report;
    report = {};
    verify = 'cancel';
    report['CANCEL'] = verify;
    verify = 'error';
    report['ERROR'] = verify;
    verify = 'expired';
    report['EXPIRED'] = verify;
    michal = michal.Error;
    oscard = oscard.bind(entity)(michal);
    michal = function(argFoo) {
        zuuluu = function() { // Original name: CaptchaCancelError
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                entity = _closure1_slot1;
                michal = _closure2_slot0;
                zuuluu = undefined;
                entity = entity.bind(zuuluu)(tangon, michal);
                verify = ['Captcha cancelled'];
                entity = _closure1_slot3;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot9;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 72; continue _fun00003 }
 59:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00004_ip = 106; continue _fun00003;
 72:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot3;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 106:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot4;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot0;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(oscard);
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/captcha/SharedCaptchaUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['CaptchaError'] = report;
    report = function(argFoo) { // Original name: extractCaptchaPropsFromResponse
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
            if(!tangon) { _fun00006_ip = 86; continue _fun00005 }
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
    zuuluu['extractCaptchaPropsFromResponse'] = report;
    tangon = function(argFoo) { // Original name: emitCaptchaDistributionMetric
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot7;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(!zuuluu) { _fun00008_ip = 43; continue _fun00007 }
 16:
            zuuluu = global;
            report = zuuluu.setTimeout;
            tangon = _closure1_slot8;
            zuuluu = function() {
                michal = _closure1_slot6;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            zuuluu = report.bind(entity)(zuuluu, tangon);
 43:
            zuuluu = _closure1_slot5;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['emitCaptchaDistributionMetric'] = tangon;
    zuuluu['CaptchaCancelError'] = michal;
    return entity;
})();