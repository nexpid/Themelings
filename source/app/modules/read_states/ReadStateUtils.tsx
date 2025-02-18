// app/modules/read_states/ReadStateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/read_states/ReadStateUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getHasImportantUnread
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot2;
            zuuluu = tangon.hasUnread;
            entity = report.id;
            entity = zuuluu.bind(tangon)(entity);
            if(!entity) { _fun00002_ip = 58; continue _fun00001 }
 29:
            tangon = _closure1_slot3;
            zuuluu = tangon.resolveUnreadSetting;
            zuuluu = zuuluu.bind(tangon)(report);
            michal = _closure1_slot4;
            michal = michal.ALL_MESSAGES;
            entity = zuuluu === michal;
 58:
            return entity;
        }
    };
    zuuluu['getHasImportantUnread'] = tangon;
    michal = function(argFoo) { // Original name: useHasImportantUnread
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot2;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = _closure1_slot2;
                tangon = report.hasUnread;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = tangon.bind(report)(entity);
                if(!entity) { _fun00004_ip = 66; continue _fun00003 }
 33:
                report = _closure1_slot3;
                tangon = report.resolveUnreadSetting;
                zuuluu = _closure2_slot0;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = _closure1_slot4;
                michal = michal.ALL_MESSAGES;
                entity = zuuluu === michal;
 66:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useHasImportantUnread'] = michal;
    return entity;
})();