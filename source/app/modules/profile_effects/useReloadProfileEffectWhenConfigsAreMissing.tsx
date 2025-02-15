// app/modules/profile_effects/useReloadProfileEffectWhenConfigsAreMissing.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/profile_effects/useReloadProfileEffectWhenConfigsAreMissing.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() {
        report = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 3;
        tango = tango[entity];
        entity = undefined;
        golf = report.bind(entity)(tango);
        oscar = golf.useStateFromStores;
        tango = _closure1_slot3;
        report = new Array(1);
        report[0] = tango;
        tango = function() {
            entity = _closure1_slot3;
            entity = entity.products;
            return entity;
        };
        oscar = oscar.bind(golf)(report, tango);
        var _closure2_slot0 = oscar;
        report = _closure1_slot2;
        tango = report.useEffect;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            zulu = _closure2_slot0;
            mike = zulu.values;
            oscar = mike.bind(zulu)();
            tango = new Array(0);
            report = 0;
            golf = tango;
            mike = arraySpread(golf, oscar, report);
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 4;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.CollectiblesItemType;
                entity = entity.PROFILE_EFFECT;
                entity = mike === entity;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.some;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    mike = entity.items;
                    entity = 0;
                    entity = mike[entity];
                    report = entity.id;
                    zulu = null;
                    entity = zulu != report;
                    if(!entity) { _fun00002_ip = 51; continue _fun00001 }
 29:
                    tango = _closure1_slot4;
                    mike = tango.getProfileEffectById;
                    mike = mike.bind(tango)(report);
                    entity = zulu == mike;
 51:
                    return entity;
                }
            };
            tango = mike.bind(zulu)(entity);
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.fetchUserProfileEffects;
            mike = mike.bind(zulu)(tango);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useReloadProfileEffectWhenConfigsAreMissing'] = mike;
    return entity;
})();