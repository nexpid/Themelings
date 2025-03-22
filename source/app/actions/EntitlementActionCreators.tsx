// app/actions/EntitlementActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchUserEntitlements
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 330; continue _fun00001 }
 13:
                    report = michal.withSku;
                    zuuluu = undefined;
                    if(!(report === zuuluu)) { _fun00002_ip = 29; continue _fun00001 }
 27:
                    report = false;
 29:
                    foxtra = report;
                    report = michal.withApplication;
                    if(!(report === zuuluu)) { _fun00002_ip = 44; continue _fun00001 }
 42:
                    report = false;
 44:
                    romeon = report;
                    report = michal.excludeEnded;
                    if(!(report === zuuluu)) { _fun00002_ip = 59; continue _fun00001 }
 57:
                    report = true;
 59:
                    offset = report;
                    yankee = michal.entitlementType;
                    SaveGenerator(address=72);
 70:
                    return zuuluu;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 327; continue _fun00001 }
 81:
                    golfie = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 2;
                    report = report[oscard];
                    option = golfie.bind(zuuluu)(report);
                    golfie = option.dispatch;
                    report = {};
                    verify = 'ENTITLEMENTS_FETCH_FOR_USER_START';
                    report['type'] = verify;
                    report = golfie.bind(option)(report);
 126: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 3;
                    report = option[report];
                    report = golfie.bind(zuuluu)(report);
                    option = report.HTTP;
                    golfie = option.get;
                    report = {};
                    verify = _closure1_slot4;
                    verify = verify.ENTITLEMENTS_FOR_USER;
                    report['url'] = verify;
                    verify = {};
                    verify['with_sku'] = foxtra;
                    verify['with_application'] = romeon;
                    verify['entitlement_type'] = yankee;
                    yankee = offset;
                    verify['exclude_ended'] = yankee;
                    report['query'] = verify;
                    verify = true;
                    report['rejectWithError'] = verify;
                    report = golfie.bind(option)(report);
                    SaveGenerator(address=220);
 218:
                    return report;
 220:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 280; continue _fun00001 }
 226:
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[oscard];
                    verify = option.bind(zuuluu)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    yankee = 'ENTITLEMENTS_FETCH_FOR_USER_SUCCESS';
                    golfie['type'] = yankee;
                    yankee = report.body;
                    golfie['entitlements'] = yankee;
                    golfie['excludeEnded'] = offset;
                    golfie = option.bind(verify)(golfie);
 278: // try_end0
                    _fun00002_ip = 324; continue _fun00001;
 280:
                    return report;
 283: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'ENTITLEMENTS_FETCH_FOR_USER_FAIL';
                    tangon['type'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 324:
                    return zuuluu;
 327:
                    return michal;
 330:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = function() { // Original name: _fetchGiftableEntitlements
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 216; continue _fun00003 }
 10:
                    oscard = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 2;
                    tangon = michal[report];
                    michal = undefined;
                    golfie = oscard.bind(michal)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    option = 'ENTITLEMENTS_GIFTABLE_FETCH';
                    tangon['type'] = option;
                    tangon = oscard.bind(golfie)(tangon);
 57: // try_start_0
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 4;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(michal)(tangon);
                    oscard = golfie.httpGetWithCountryCodeQuery;
                    tangon = {};
                    option = _closure1_slot4;
                    option = option.ENTITLEMENTS_GIFTABLE;
                    tangon['url'] = option;
                    option = true;
                    tangon['rejectWithError'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=114);
 112:
                    return tangon;
 114:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 169; continue _fun00003 }
 120:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[report];
                    option = golfie.bind(michal)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    verify = 'ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS';
                    oscard['type'] = verify;
                    verify = tangon.body;
                    oscard['entitlements'] = verify;
                    oscard = golfie.bind(option)(oscard);
 167: // try_end0
                    _fun00004_ip = 213; continue _fun00003;
 169:
                    return tangon;
 172: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'ENTITLEMENTS_GIFTABLE_FETCH_FAIL';
                    zuuluu['type'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 213:
                    return michal;
 216:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/EntitlementActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: fetchUserEntitlementsForApplication
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            golfie = arguments[1];
            var _closure2_slot0 = option;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00006_ip = 20; continue _fun00005 }
 18:
            golfie = true;
 20:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            verify = zuuluu.bind(tangon)(michal);
            zuuluu = verify.wait;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'ENTITLEMENT_FETCH_APPLICATION_START';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['applicationId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(verify)(michal);
            zuuluu = _closure1_slot0;
            michal = 3;
            michal = oscard[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.get;
            michal = {};
            oscard = _closure1_slot4;
            report = oscard.ENTITLEMENTS_FOR_APPLICATION;
            report = report.bind(oscard)(option);
            michal['url'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            oscard = {};
            oscard['exclude_consumed'] = golfie;
            michal['query'] = oscard;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                entity = argFoo;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 2;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['applicationId'] = report;
                report = entity.body;
                michal['entitlements'] = report;
                michal = zuuluu.bind(tangon)(michal);
                entity = entity.body;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'ENTITLEMENT_FETCH_APPLICATION_FAIL';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['applicationId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['fetchUserEntitlementsForApplication'] = tangon;
    tangon = function() { // Original name: fetchUserEntitlements
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchUserEntitlements'] = tangon;
    michal = function() { // Original name: fetchGiftableEntitlements
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchGiftableEntitlements'] = michal;
    return entity;
})();