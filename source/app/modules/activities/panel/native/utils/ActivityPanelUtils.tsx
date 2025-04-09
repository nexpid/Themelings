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
    tangon = 5;
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
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 3;
                entity = tangon[entity];
                tangon = undefined;
                oscard = zuuluu.bind(tangon)(entity);
                zuuluu = oscard.getEmbeddedActivityLocationChannelId;
                report = _closure1_slot3;
                entity = report.getConnectedActivityLocation;
                entity = entity.bind(report)();
                zuuluu = zuuluu.bind(oscard)(entity);
                entity = report.getActivityPanelMode;
                report = entity.bind(report)();
                entity = _closure1_slot4;
                entity = entity.PANEL;
                entity = report === entity;
                if(!entity) { _fun00002_ip = 105; continue _fun00001 }
 77:
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 4;
                michal = oscard[michal];
                michal = report.bind(tangon)(michal);
                michal = michal.bind(tangon)(zuuluu);
                entity = !michal;
 105:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsActivityPanelFullscreen'] = michal;
    return entity;
})();