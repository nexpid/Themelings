// app/modules/self_mod/hooks/useChannelSafetyWarning.tsx
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
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/hooks/useChannelSafetyWarning.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useChannelSafetyWarning
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = argBar;
        var _closure2_slot1 = zuuluu;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        tangon = 1;
        report = report[tangon];
        tangon = undefined;
        oscard = oscard.bind(tangon)(report);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot2;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.getChannelSafetyWarnings;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        tangon = report.bind(oscard)(tangon, michal, zuuluu);
        zuuluu = tangon.filter;
        michal = function(argFoo) {
            entity = argFoo;
            michal = entity.type;
            entity = _closure2_slot1;
            entity = michal === entity;
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.find;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                entity = tangon.dismiss_timestamp;
                zuuluu = null;
                entity = zuuluu == entity;
                if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 18:
                report = zuuluu == tangon;
                michal = undefined;
                if(report) { _fun00002_ip = 33; continue _fun00001 }
 27:
                michal = tangon.expiry;
 33:
                michal = zuuluu == michal;
                if(michal) { _fun00002_ip = 84; continue _fun00001 }
 40:
                zuuluu = global;
                oscard = zuuluu.Date;
                report = oscard.parse;
                tangon = tangon.expiry;
                tangon = report.bind(oscard)(tangon);
                report = zuuluu.Date;
                zuuluu = report.now;
                zuuluu = zuuluu.bind(report)();
                michal = tangon > zuuluu;
 84:
                entity = michal;
 87:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useChannelSafetyWarning'] = michal;
    return entity;
})();