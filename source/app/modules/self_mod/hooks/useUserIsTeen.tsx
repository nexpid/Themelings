// app/modules/self_mod/hooks/useUserIsTeen.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/hooks/useUserIsTeen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useUserIsTeen
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure1_slot2;
                entity = mike.getCurrentUser;
                mike = entity.bind(mike)();
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00002_ip = 33; continue _fun00001 }
 27:
                entity = mike.nsfwAllowed;
 33:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike, entity);
        entity = false;
        entity = entity === mike;
        return entity;
    };
    zulu['useUserIsTeen'] = mike;
    return entity;
})();