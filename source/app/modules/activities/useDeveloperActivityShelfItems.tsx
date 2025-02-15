// app/modules/activities/useDeveloperActivityShelfItems.tsx
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
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/useDeveloperActivityShelfItems.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() {
        options = _closure1_slot0;
        verify = _closure1_slot1;
        tango = 3;
        zulu = verify[tango];
        golf = undefined;
        romeo = options.bind(golf)(zulu);
        yankee = romeo.useStateFromStoresObject;
        zulu = _closure1_slot3;
        offset = new Array(1);
        offset[0] = zulu;
        oscar = function() {
            entity = {};
            zulu = _closure1_slot3;
            mike = zulu.getIsEnabled;
            mike = mike.bind(zulu)();
            entity['isEnabled'] = mike;
            mike = zulu.getLastUsedObject;
            mike = mike.bind(zulu)();
            entity['lastUsedObject'] = mike;
            return entity;
        };
        report = new Array(0);
        report = yankee.bind(romeo)(offset, oscar, report);
        oscar = report.isEnabled;
        var _closure2_slot0 = oscar;
        report = report.lastUsedObject;
        var _closure2_slot1 = report;
        tango = verify[tango];
        verify = options.bind(golf)(tango);
        options = verify.useStateFromStoresArray;
        golf = new Array(1);
        golf[0] = zulu;
        tango = function() {
            mike = _closure1_slot3;
            entity = mike.getDeveloperShelfItems;
            entity = entity.bind(mike)();
            return entity;
        };
        zulu = new Array(0);
        golf = options.bind(verify)(golf, tango, zulu);
        var _closure2_slot2 = golf;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun101221: for(var _fun101221_ip = 0; ; ) switch(_fun101221_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun101221_ip = 18; continue _fun101221 }
 12:
                entity = new Array(0);
                _fun101221_ip = 57; continue _fun101221;
 18:
                report = _closure2_slot2;
                tango = report.map;
                zulu = function(argFoo) {
                    zulu = argFoo;
                    entity = {};
                    entity['application'] = zulu;
                    mike = {};
                    report = _closure1_slot4;
                    oscar = mike;
                    tango = copyDataProperties(oscar, report);
                    report = zulu.embeddedActivityConfig;
                    oscar = mike;
                    tango = copyDataProperties(oscar, report);
                    tango = zulu.id;
                    zulu = 'application_id';
                    mike[zulu] = tango;
                    entity['activity'] = mike;
                    return entity;
                };
                tango = tango.bind(report)(zulu);
                zulu = tango.sort;
                mike = function(argFoo, argBar) {
                    _fun101223: for(var _fun101223_ip = 0; ; ) switch(_fun101223_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = argFoo;
                        entity = entity.application;
                        entity = entity.id;
                        tango = mike[entity];
                        entity = argBar;
                        entity = entity.application;
                        entity = entity.id;
                        zulu = mike[entity];
                        mike = null;
                        report = mike == tango;
                        entity = 1;
                        if(report) { _fun101223_ip = 73; continue _fun101223 }
 53:
                        report = mike == zulu;
                        mike = -1;
                        if(report) { _fun101223_ip = 70; continue _fun101223 }
 66:
                        mike = zulu - tango;
 70:
                        entity = mike;
 73:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike);
 57:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useDeveloperActivityShelfItems'] = mike;
    return entity;
})();