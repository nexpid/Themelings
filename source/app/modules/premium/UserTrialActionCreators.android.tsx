// app/modules/premium/UserTrialActionCreators.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.Endpoints;
    var _closure1_slot4 = golfie;
    michal = michal.PaymentGateways;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function() { // Original name: fetchUserTrialOffer
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 215; continue _fun00001 }
 10: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 2;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    golfie = _closure1_slot4;
                    golfie = golfie.USER_TRIAL_OFFER;
                    michal['url'] = golfie;
                    golfie = {};
                    option = _closure1_slot5;
                    option = option.GOOGLE;
                    golfie['payment_gateway'] = option;
                    michal['query'] = golfie;
                    golfie = true;
                    michal['oldFormErrors'] = golfie;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=102);
 100:
                    return michal;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 160; continue _fun00001 }
 108:
                    oscard = michal.body;
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS';
                    zuuluu['type'] = golfie;
                    zuuluu['userTrialOffer'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 158: // try_end0
                    _fun00002_ip = 210; continue _fun00001;
 160:
                    return michal;
 163: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 210:
                    michal = undefined;
                    return michal;
 215:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchUserTrialOffer'] = golfie;
    tangon = function(argFoo) { // Original name: acknowledgeUserTrialOffer
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 247; continue _fun00003 }
 10:
                    michal = _closure2_slot0;
                    zuuluu = michal.expires_at;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00004_ip = 242; continue _fun00003 }
 32: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 2;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.post;
                    michal = {};
                    verify = _closure1_slot4;
                    option = verify.USER_TRIAL_OFFER_ACKNOWLEDGED;
                    golfie = _closure2_slot0;
                    golfie = golfie.id;
                    golfie = option.bind(verify)(golfie);
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=113);
 111:
                    return michal;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 173; continue _fun00003 }
 119:
                    oscard = michal.body;
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS';
                    zuuluu['type'] = golfie;
                    zuuluu['userTrialOffer'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 171: // try_end0
                    _fun00004_ip = 242; continue _fun00003;
 173:
                    return michal;
 176: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zuuluu = michal.status;
                    michal = 404;
                    if(!(michal === zuuluu)) { _fun00004_ip = 242; continue _fun00003 }
 193:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {'type': 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null};
                    michal = zuuluu.bind(tangon)(michal);
 242:
                    michal = undefined;
                    return michal;
 247:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['acknowledgeUserTrialOffer'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/UserTrialActionCreators.android.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();