// app/modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SafetyHubAnalyticsActionSource;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = golf;
    tango = tango.AnalyticEvents;
    var _closure1_slot7 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() {
        _fun92692: for(var _fun92692_ip = 0; ; ) switch(_fun92692_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            verify = 4;
            mike = report[verify];
            options = undefined;
            offset = tango.bind(options)(mike);
            golf = offset.useStateFromStores;
            mike = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                mike = _closure1_slot4;
                entity = mike.getAppealClassificationId;
                entity = entity.bind(mike)();
                return entity;
            };
            golf = golf.bind(offset)(oscar, mike);
            var _closure2_slot0 = golf;
            mike = 5;
            mike = report[mike];
            report = tango.bind(options)(mike);
            tango = report.useSafetyHubClassification;
            oscar = null;
            mike = golf;
            if(!(oscar == mike)) { _fun92692_ip = 92; continue _fun92692 }
 88:
            mike = _closure1_slot6;
 92:
            oscar = tango.bind(report)(mike);
            var _closure2_slot1 = oscar;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 6;
            mike = tango[mike];
            offset = report.bind(options)(mike);
            mike = offset.useSafetyHubAccountStanding;
            mike = mike.bind(offset)();
            var _closure2_slot2 = mike;
            tango = tango[verify];
            verify = report.bind(options)(tango);
            options = verify.useStateFromStores;
            tango = _closure1_slot4;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                mike = _closure1_slot4;
                entity = mike.getIsDsaEligible;
                entity = entity.bind(mike)();
                return entity;
            };
            report = options.bind(verify)(report, tango);
            var _closure2_slot3 = report;
            tango = _closure1_slot3;
            zulu = tango.useCallback;
            options = mike.state;
            mike = new Array(4);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            mike[3] = report;
            entity = function(argFoo) {
                _fun92695: for(var _fun92695_ip = 0; ; ) switch(_fun92695_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.track;
                    mike = _closure1_slot7;
                    zulu = mike.SAFETY_HUB_ACTION;
                    mike = {};
                    oscar = argFoo;
                    mike['action'] = oscar;
                    options = _closure2_slot2;
                    options = options.state;
                    mike['account_standing'] = options;
                    verify = _closure2_slot0;
                    options = null;
                    verify = options != verify;
                    if(!verify) { _fun92695_ip = 107; continue _fun92695 }
 79:
                    verify = global;
                    offset = verify.Number;
                    verify = _closure2_slot0;
                    offset = offset.bind(entity)(verify);
                    verify = new Array(1);
                    verify[0] = offset;
                    options = verify;
 107:
                    mike['classification_ids'] = options;
                    golf = _closure1_slot5;
                    golf = golf.AppealIngestion;
                    mike['source'] = golf;
                    golf = _closure2_slot3;
                    mike['is_dsa_eligible'] = golf;
                    oscar = _closure2_slot1;
                    oscar = oscar.violationType;
                    mike['violation_type'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useEmitAppealIngestionEvent'] = mike;
    return entity;
})();