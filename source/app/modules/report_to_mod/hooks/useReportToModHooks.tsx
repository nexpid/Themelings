// app/modules/report_to_mod/hooks/useReportToModHooks.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/report_to_mod/hooks/useReportToModHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useIsReportToModEnabled
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot2;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                report = michal.bind(zuuluu)(entity);
                tangon = null;
                entity = tangon != report;
                if(!entity) { _fun00002_ip = 63; continue _fun00001 }
 33:
                michal = report.getModeratorReportingEnabled;
                michal = michal.bind(report)();
                if(!michal) { _fun00002_ip = 60; continue _fun00001 }
 46:
                zuuluu = report.getModeratorReportChannelId;
                zuuluu = zuuluu.bind(report)();
                michal = tangon != zuuluu;
 60:
                entity = michal;
 63:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsReportToModEnabled'] = tangon;
    tangon = function(argFoo) { // Original name: useReportToModChannelId
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                zuuluu = michal != zuuluu;
                tangon = null;
                if(!zuuluu) { _fun00004_ip = 39; continue _fun00003 }
 18:
                report = _closure1_slot2;
                zuuluu = report.getGuild;
                entity = _closure2_slot0;
                tangon = zuuluu.bind(report)(entity);
 39:
                zuuluu = michal == tangon;
                entity = null;
                if(zuuluu) { _fun00004_ip = 73; continue _fun00003 }
 48:
                zuuluu = tangon.getModeratorReportChannelId;
                zuuluu = zuuluu.bind(tangon)();
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00004_ip = 70; continue _fun00003 }
 67:
                michal = zuuluu;
 70:
                entity = michal;
 73:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useReportToModChannelId'] = tangon;
    michal = function(argFoo) { // Original name: useIsModeratorReportOrPostChannel
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.isModeratorReportOrPostChannel;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useIsModeratorReportOrPostChannel'] = michal;
    return entity;
})();