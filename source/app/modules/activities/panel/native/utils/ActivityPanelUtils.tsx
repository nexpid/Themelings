// app/modules/activities/panel/native/utils/ActivityPanelUtils.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityPanelModes;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/panel/native/utils/ActivityPanelUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useIsActivityPanelFullscreen
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot3;
                entity = zuuluu.getConnectedActivityChannelId;
                tangon = entity.bind(zuuluu)();
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00002_ip = 54; continue _fun00001 }
 26:
                report = _closure1_slot3;
                zuuluu = report.getActivityPanelMode;
                report = zuuluu.bind(report)();
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.PANEL;
                entity = report === zuuluu;
 54:
                if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 57:
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 3;
                michal = zuuluu[michal];
                zuuluu = undefined;
                michal = report.bind(zuuluu)(michal);
                michal = michal.bind(zuuluu)(tangon);
                entity = !michal;
 87:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsActivityPanelFullscreen'] = michal;
    return entity;
})();