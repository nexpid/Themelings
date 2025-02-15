// app/modules/activities/panel/native/utils/ActivityPanelUtils.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityPanelModes;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/utils/ActivityPanelUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useIsActivityPanelFullscreen
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot3;
                entity = zulu.getConnectedActivityChannelId;
                tango = entity.bind(zulu)();
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun00002_ip = 54; continue _fun00001 }
 26:
                report = _closure1_slot3;
                zulu = report.getActivityPanelMode;
                report = zulu.bind(report)();
                zulu = _closure1_slot4;
                zulu = zulu.PANEL;
                entity = report === zulu;
 54:
                if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 57:
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 3;
                mike = zulu[mike];
                zulu = undefined;
                mike = report.bind(zulu)(mike);
                mike = mike.bind(zulu)(tango);
                entity = !mike;
 87:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsActivityPanelFullscreen'] = mike;
    return entity;
})();