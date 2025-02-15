// app/modules/user_settings/hooks/useNSFWAllowed.tsx
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
    tango = 'modules/user_settings/hooks/useNSFWAllowed.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() {
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
            _fun94759: for(var _fun94759_ip = 0; ; ) switch(_fun94759_ip) {
 0:
                mike = _closure1_slot2;
                entity = mike.getCurrentUser;
                zulu = entity.bind(mike)();
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun94759_ip = 33; continue _fun94759 }
 27:
                mike = zulu.nsfwAllowed;
 33:
                zulu = entity != mike;
                entity = null;
                if(!zulu) { _fun94759_ip = 45; continue _fun94759 }
 42:
                entity = mike;
 45:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useNSFWAllowed'] = mike;
    return entity;
})();