// app/modules/self_mod/hooks/useChannelSafetyWarning.tsx
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
    tango = 'modules/self_mod/hooks/useChannelSafetyWarning.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useChannelSafetyWarning
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = argBar;
        var _closure2_slot1 = zulu;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        tango = 1;
        report = report[tango];
        tango = undefined;
        oscar = oscar.bind(tango)(report);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot2;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure1_slot2;
            mike = zulu.getChannelSafetyWarnings;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango = report.bind(oscar)(tango, mike, zulu);
        zulu = tango.filter;
        mike = function(argFoo) {
            entity = argFoo;
            mike = entity.type;
            entity = _closure2_slot1;
            entity = mike === entity;
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.find;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = argFoo;
                entity = tango.dismiss_timestamp;
                zulu = null;
                entity = zulu == entity;
                if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 18:
                report = zulu == tango;
                mike = undefined;
                if(report) { _fun00002_ip = 33; continue _fun00001 }
 27:
                mike = tango.expiry;
 33:
                mike = zulu == mike;
                if(mike) { _fun00002_ip = 84; continue _fun00001 }
 40:
                zulu = global;
                oscar = zulu.Date;
                report = oscar.parse;
                tango = tango.expiry;
                tango = report.bind(oscar)(tango);
                report = zulu.Date;
                zulu = report.now;
                zulu = zulu.bind(report)();
                mike = tango > zulu;
 84:
                entity = mike;
 87:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useChannelSafetyWarning'] = mike;
    return entity;
})();