// app/modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx
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
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useEnsureHydratedUsers
        options = argFoo;
        golf = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        oscar = _closure1_slot2;
        report = oscar.useMemo;
        tango = new Array(2);
        tango[0] = options;
        tango[1] = golf;
        zulu = function() {
            _fun115344: for(var _fun115344_ip = 0; ; ) switch(_fun115344_ip) {
 0:
                entity = _closure2_slot1;
                zulu = entity.length;
                entity = 0;
                if(!(entity !== zulu)) { _fun115344_ip = 35; continue _fun115344 }
 18:
                entity = {};
                zulu = _closure2_slot0;
                mike = _closure2_slot1;
                entity[zulu] = mike;
                _fun115344_ip = 37; continue _fun115344;
 35:
                entity = {};
 37:
                return entity;
            }
        };
        tango = report.bind(oscar)(zulu, tango);
        report = oscar.useEffect;
        zulu = new Array(2);
        zulu[0] = options;
        zulu[1] = golf;
        mike = function() {
            zulu = _closure2_slot1;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun115346: for(var _fun115346_ip = 0; ; ) switch(_fun115346_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure1_slot4;
                    mike = zulu.getUser;
                    zulu = mike.bind(zulu)(tango);
                    mike = null;
                    if(!(mike == zulu)) { _fun115346_ip = 50; continue _fun115346 }
 27:
                    zulu = _closure1_slot3;
                    mike = zulu.requestMember;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity, tango);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = report.bind(oscar)(mike, zulu);
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.useSubscribeGuildMembers;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    zulu['useEnsureHydratedUsers'] = mike;
    return entity;
})();