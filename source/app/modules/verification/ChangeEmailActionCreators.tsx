// app/modules/verification/ChangeEmailActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _confirmEmailChange
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 142; continue _fun00001 }
 10:
                    zuuluu = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 2;
                    michal = verify[michal];
                    option = undefined;
                    tangon = zuuluu.bind(option)(michal);
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.USER_EMAIL_VERIFY_CODE;
                    michal['url'] = report;
                    report = {};
                    golfie = argFoo;
                    report['code'] = golfie;
                    michal['body'] = report;
                    report = {};
                    golfie = _closure1_slot0;
                    oscard = 3;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    oscard = oscard.NetworkActionNames;
                    oscard = oscard.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE;
                    report['event'] = oscard;
                    michal['trackedActionData'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=125);
 123:
                    return michal;
 125:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 139; continue _fun00001 }
 131:
                    zuuluu = michal.body;
                    return zuuluu;
 139:
                    return michal;
 142:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/verification/ChangeEmailActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: sendConfirmationCode
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = arguments[0];
            option = undefined;
            if(!(oscard === option)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            oscard = false;
 11:
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            zuuluu = michal.bind(option)(entity);
            michal = zuuluu.put;
            entity = {};
            tangon = _closure1_slot4;
            tangon = tangon.USER_EMAIL;
            entity['url'] = tangon;
            tangon = {};
            golfie = _closure1_slot0;
            report = 3;
            report = verify[report];
            report = golfie.bind(option)(report);
            report = report.NetworkActionNames;
            report = report.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE;
            tangon['event'] = report;
            report = {};
            report['is_resend'] = oscard;
            tangon['properties'] = report;
            entity['trackedActionData'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['sendConfirmationCode'] = tangon;
    michal = function() { // Original name: confirmEmailChange
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['confirmEmailChange'] = michal;
    return entity;
})();