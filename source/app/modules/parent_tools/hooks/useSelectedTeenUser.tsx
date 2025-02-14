// app/modules/parent_tools/hooks/useSelectedTeenUser.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/parent_tools/hooks/useSelectedTeenUser.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() {
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 2;
        mike = oscar[mike];
        tango = undefined;
        mike = zulu.bind(tango)(mike);
        mike = mike.bind(tango)();
        var _closure2_slot0 = mike;
        zulu = _closure1_slot0;
        mike = 3;
        mike = oscar[mike];
        tango = zulu.bind(tango)(mike);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot4;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            _fun95365: for(var _fun95365_ip = 0; ; ) switch(_fun95365_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun95365_ip = 28; continue _fun95365 }
 13:
                zulu = _closure1_slot3;
                entity = zulu.getCurrentUser;
                entity = entity.bind(zulu)();
                return entity;
 28:
                zulu = _closure1_slot4;
                entity = zulu.getSelectedTeenId;
                tango = entity.bind(zulu)();
                zulu = null;
                entity = undefined;
                if(!(zulu !== tango)) { _fun95365_ip = 65; continue _fun95365 }
 50:
                zulu = _closure1_slot3;
                mike = zulu.getUser;
                entity = mike.bind(zulu)(tango);
 65:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useSelectedTeenUser'] = tango;
    mike = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun95367: for(var _fun95367_ip = 0; ; ) switch(_fun95367_ip) {
 0:
                zulu = _closure1_slot3;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                mike = null;
                if(!(mike == entity)) { _fun95367_ip = 35; continue _fun95367 }
 31:
                mike = undefined;
                return mike;
 35:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useTeenUserForId'] = mike;
    return entity;
})();