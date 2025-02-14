// app/lib/native/Linking.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.Linking;
    var _closure1_slot2 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: openURL
        _fun68990: for(var _fun68990_ip = 0; ; ) switch(_fun68990_ip) {
 0:
            mike = arguments[2];
            entity = undefined;
            if(!(mike === entity)) { _fun68990_ip = 11; continue _fun68990 }
 9:
            mike = true;
 11:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 1;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            report = zulu.openURL;
            tango = {};
            tango['allowExternal'] = mike;
            zulu = argFoo;
            mike = argBar;
            mike = report.bind(entity)(zulu, mike, tango);
            return entity;
        }
    };
    mike['openURL'] = golf;
    golf = function(argFoo, argBar) { // Original name: openURLExternally
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        report = mike.openURL;
        tango = {};
        mike = true;
        tango['forceExternalBrowser'] = mike;
        zulu = argFoo;
        mike = argBar;
        mike = report.bind(entity)(zulu, mike, tango);
        return entity;
    };
    mike['openURLExternally'] = golf;
    tango = function(argFoo) { // Original name: performURLNavigation
        zulu = _closure1_slot2;
        mike = zulu.openURL;
        entity = argFoo;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.catch;
        entity = function() {
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['performURLNavigation'] = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/native/Linking.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();