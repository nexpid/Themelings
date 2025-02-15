// app/modules/profile_customization/useNicknames.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = 'modules/profile_customization/useNicknames.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useNicknames
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                zulu = entity == zulu;
                entity = '';
                if(zulu) { _fun00002_ip = 58; continue _fun00001 }
 20:
                tango = _closure1_slot2;
                zulu = tango.getNicknames;
                mike = _closure2_slot0;
                tango = zulu.bind(tango)(mike);
                zulu = tango.join;
                mike = ', ';
                entity = zulu.bind(tango)(mike);
 58:
                return entity;
            }
        };
        zulu = tango.bind(report)(zulu, entity, mike);
        entity = {};
        entity['nicknames'] = zulu;
        mike = zulu.trim;
        zulu = mike.bind(zulu)();
        mike = '';
        mike = mike !== zulu;
        entity['canShowNicknames'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();