// app/modules/profile_effects/useProfileEffectPreset.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/profile_effects/useProfileEffectPreset.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        golf = argFoo;
        var _closure2_slot0 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 2;
        tango = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.useStateFromStores;
        entity = _closure1_slot3;
        tango = new Array(1);
        tango[0] = entity;
        entity = function() {
            zulu = _closure1_slot3;
            mike = zulu.getProfileEffectById;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = report.bind(oscar)(tango, entity);
        tango = null;
        oscar = tango != entity;
        var _closure2_slot1 = oscar;
        report = _closure1_slot2;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun00002_ip = 20; continue _fun00001 }
 16:
                entity = _closure2_slot1;
 20:
                if(entity) { _fun00002_ip = 61; continue _fun00001 }
 23:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetchUserProfileEffects;
                entity = true;
                entity = mike.bind(zulu)(entity);
 61:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useProfileEffectPreset'] = mike;
    return entity;
})();