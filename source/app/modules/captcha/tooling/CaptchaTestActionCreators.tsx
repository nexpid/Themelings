// app/modules/captcha/tooling/CaptchaTestActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = function() { // Original name: _testCaptcha
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 109; continue _fun00001 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 2;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.post;
                    michal = {};
                    oscard = _closure1_slot3;
                    oscard = oscard.CAPTCHA_TEST;
                    michal['url'] = oscard;
                    oscard = {};
                    golfie = argFoo;
                    oscard['decider'] = golfie;
                    golfie = argBar;
                    oscard['options'] = golfie;
                    michal['body'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=97);
 95:
                    return michal;
 97:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 106; continue _fun00001 }
 103:
                    return zuuluu;
 106:
                    return michal;
 109:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    report = option[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    verify = 1;
    tangon = option[verify];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot3 = tangon;
    report = {};
    tangon = 'hCaptchaRqdata';
    report['HCAPTCHA_RQDATA'] = tangon;
    tangon = 'SmiteRqdata';
    report['SMITE_RQDATA'] = tangon;
    tangon = 'Recaptcha';
    report['RECAPTCHA'] = tangon;
    tangon = 'RecaptchaEnterprise';
    report['RECAPTCHA_ENTERPRISE'] = tangon;
    tangon = {};
    tangon['EASY'] = verify;
    oscard = 'EASY';
    tangon[verify] = oscard;
    verify = 2;
    tangon['MODERATE'] = verify;
    oscard = 'MODERATE';
    tangon[verify] = oscard;
    oscard = 3;
    tangon['DIFFICULT'] = oscard;
    verify = 'DIFFICULT';
    tangon[oscard] = verify;
    offset = 4;
    tangon['VERY_DIFFICULT'] = offset;
    verify = 'VERY_DIFFICULT';
    tangon[offset] = verify;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/captcha/tooling/CaptchaTestActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['CaptchaDeciderType'] = report;
    zuuluu['HCaptchaDifficulty'] = tangon;
    michal = function() { // Original name: testCaptcha
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['testCaptcha'] = michal;
    return entity;
})();