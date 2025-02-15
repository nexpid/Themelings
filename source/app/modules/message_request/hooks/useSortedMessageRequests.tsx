// app/modules/message_request/hooks/useSortedMessageRequests.tsx
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
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/hooks/useSortedMessageRequests.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useSortedMessageRequests
        report = _closure1_slot0;
        golf = _closure1_slot1;
        zulu = 4;
        oscar = golf[zulu];
        tango = undefined;
        yankee = report.bind(tango)(oscar);
        offset = yankee.useStateFromStores;
        options = _closure1_slot3;
        verify = new Array(1);
        verify[0] = options;
        oscar = function() {
            mike = _closure1_slot3;
            entity = mike.getPrivateChannelsVersion;
            entity = entity.bind(mike)();
            return entity;
        };
        oscar = offset.bind(yankee)(verify, oscar);
        verify = golf[zulu];
        yankee = report.bind(tango)(verify);
        offset = yankee.useStateFromStoresArray;
        verify = new Array(2);
        verify[0] = options;
        options = _closure1_slot5;
        verify[1] = options;
        options = new Array(1);
        options[0] = oscar;
        oscar = function() {
            tango = _closure1_slot3;
            zulu = tango.getMutablePrivateChannels;
            zulu = zulu.bind(tango)();
            var _closure3_slot0 = zulu;
            zulu = global;
            report = zulu.Array;
            tango = report.from;
            oscar = _closure1_slot5;
            zulu = oscar.getMessageRequestChannelIds;
            zulu = zulu.bind(oscar)();
            report = tango.bind(report)(zulu);
            tango = report.map;
            zulu = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                entity = mike[entity];
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.filter;
            mike = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.sortChannelIds;
            entity = entity.bind(mike)(zulu);
            return entity;
        };
        oscar = offset.bind(yankee)(verify, oscar, options);
        var _closure2_slot0 = oscar;
        zulu = golf[zulu];
        options = report.bind(tango)(zulu);
        golf = options.useStateFromStoresObject;
        zulu = _closure1_slot4;
        report = new Array(1);
        report[0] = zulu;
        tango = new Array(1);
        tango[0] = oscar;
        zulu = function() {
            entity = {};
            var _closure3_slot0 = entity;
            tango = _closure2_slot0;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun120479: for(var _fun120479_ip = 0; ; ) switch(_fun120479_ip) {
 0:
                    entity = argFoo;
                    tango = _closure1_slot4;
                    zulu = tango.getUser;
                    report = entity.recipients;
                    mike = 0;
                    mike = report[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != zulu)) { _fun120479_ip = 55; continue _fun120479 }
 39:
                    mike = _closure3_slot0;
                    entity = entity.id;
                    mike[entity] = zulu;
 55:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report = golf.bind(options)(report, zulu, tango);
        var _closure2_slot1 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            zulu = _closure2_slot0;
            mike = zulu.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                entity['channel'] = mike;
                zulu = _closure2_slot1;
                mike = mike.id;
                mike = zulu[mike];
                entity['user'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();