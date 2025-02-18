// app/modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SafetyHubAnalyticsActionSource;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = golfie;
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            verify = 4;
            michal = report[verify];
            option = undefined;
            offset = tangon.bind(option)(michal);
            golfie = offset.useStateFromStores;
            michal = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                michal = _closure1_slot4;
                entity = michal.getAppealClassificationId;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = golfie.bind(offset)(oscard, michal);
            var _closure2_slot0 = golfie;
            michal = 5;
            michal = report[michal];
            report = tangon.bind(option)(michal);
            tangon = report.useSafetyHubClassification;
            oscard = null;
            michal = golfie;
            if(!(oscard == michal)) { _fun00002_ip = 92; continue _fun00001 }
 88:
            michal = _closure1_slot6;
 92:
            oscard = tangon.bind(report)(michal);
            var _closure2_slot1 = oscard;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            offset = report.bind(option)(michal);
            michal = offset.useSafetyHubAccountStanding;
            michal = michal.bind(offset)();
            var _closure2_slot2 = michal;
            tangon = tangon[verify];
            verify = report.bind(option)(tangon);
            option = verify.useStateFromStores;
            tangon = _closure1_slot4;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot4;
                entity = michal.getIsDsaEligible;
                entity = entity.bind(michal)();
                return entity;
            };
            report = option.bind(verify)(report, tangon);
            var _closure2_slot3 = report;
            tangon = _closure1_slot3;
            zuuluu = tangon.useCallback;
            option = michal.state;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.track;
                    michal = _closure1_slot7;
                    zuuluu = michal.SAFETY_HUB_ACTION;
                    michal = {};
                    oscard = argFoo;
                    michal['action'] = oscard;
                    option = _closure2_slot2;
                    option = option.state;
                    michal['account_standing'] = option;
                    verify = _closure2_slot0;
                    option = null;
                    verify = option != verify;
                    if(!verify) { _fun00004_ip = 107; continue _fun00003 }
 79:
                    verify = global;
                    offset = verify.Number;
                    verify = _closure2_slot0;
                    offset = offset.bind(entity)(verify);
                    verify = new Array(1);
                    verify[0] = offset;
                    option = verify;
 107:
                    michal['classification_ids'] = option;
                    golfie = _closure1_slot5;
                    golfie = golfie.AppealIngestion;
                    michal['source'] = golfie;
                    golfie = _closure2_slot3;
                    michal['is_dsa_eligible'] = golfie;
                    oscard = _closure2_slot1;
                    oscard = oscard.violationType;
                    michal['violation_type'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useEmitAppealIngestionEvent'] = michal;
    return entity;
})();