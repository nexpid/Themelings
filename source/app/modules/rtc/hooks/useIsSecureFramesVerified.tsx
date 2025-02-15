// app/modules/rtc/hooks/useIsSecureFramesVerified.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rtc/hooks/useIsSecureFramesVerified.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useIsUserSecureFramesVerified
        mike = argFoo;
        oscar = mike.userId;
        var _closure2_slot0 = oscar;
        yankee = mike.channelId;
        offset = mike.location;
        report = _closure1_slot0;
        options = _closure1_slot1;
        zulu = 3;
        zulu = options[zulu];
        tango = undefined;
        verify = report.bind(tango)(zulu);
        golf = verify.useIsSecureFramesUIEnabled;
        zulu = {};
        zulu['channelId'] = yankee;
        zulu['location'] = offset;
        golf = golf.bind(verify)(zulu);
        var _closure2_slot1 = golf;
        zulu = 4;
        zulu = options[zulu];
        report = report.bind(tango)(zulu);
        tango = report.useStateFromStores;
        options = _closure1_slot4;
        zulu = new Array(3);
        zulu[0] = options;
        options = _closure1_slot2;
        zulu[1] = options;
        mike = _closure1_slot3;
        zulu[2] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00002_ip = 20; continue _fun00001 }
 16:
                entity = _closure2_slot1;
 20:
                if(!entity) { _fun00002_ip = 45; continue _fun00001 }
 23:
                report = _closure1_slot3;
                tango = report.isUserConnected;
                zulu = _closure2_slot0;
                entity = tango.bind(report)(zulu);
 45:
                if(!entity) { _fun00002_ip = 73; continue _fun00001 }
 48:
                tango = _closure1_slot2;
                zulu = tango.getId;
                tango = zulu.bind(tango)();
                zulu = _closure2_slot0;
                entity = tango !== zulu;
 73:
                if(!entity) { _fun00002_ip = 100; continue _fun00001 }
 76:
                tango = _closure1_slot4;
                zulu = tango.isUserVerified;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 100:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useIsUserSecureFramesVerified'] = tango;
    tango = function(argFoo) { // Original name: useIsStreamSecureFramesVerified
        mike = argFoo;
        oscar = mike.streamKey;
        var _closure2_slot0 = oscar;
        yankee = mike.channelId;
        offset = mike.location;
        report = _closure1_slot0;
        verify = _closure1_slot1;
        zulu = 3;
        zulu = verify[zulu];
        tango = undefined;
        options = report.bind(tango)(zulu);
        golf = options.useIsSecureFramesUIEnabled;
        zulu = {};
        zulu['channelId'] = yankee;
        zulu['location'] = offset;
        golf = golf.bind(options)(zulu);
        var _closure2_slot1 = golf;
        zulu = 5;
        zulu = verify[zulu];
        options = report.bind(tango)(zulu);
        zulu = options.useIsStreamRTCConnectionEmpty;
        options = zulu.bind(options)(oscar);
        var _closure2_slot2 = options;
        zulu = 4;
        zulu = verify[zulu];
        report = report.bind(tango)(zulu);
        tango = report.useStateFromStores;
        verify = _closure1_slot4;
        zulu = new Array(2);
        zulu[0] = verify;
        mike = _closure1_slot2;
        zulu[1] = mike;
        mike = new Array(3);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot1;
                if(!entity) { _fun00004_ip = 121; continue _fun00003 }
 10:
                entity = _closure2_slot2;
                if(entity) { _fun00004_ip = 121; continue _fun00003 }
 17:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity != zulu)) { _fun00004_ip = 117; continue _fun00003 }
 27:
                tango = _closure1_slot2;
                entity = tango.getId;
                tango = entity.bind(tango)();
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                entity = 6;
                report = report[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = oscar.decodeStreamKey;
                entity = _closure2_slot0;
                entity = report.bind(oscar)(entity);
                entity = entity.ownerId;
                entity = entity !== tango;
                if(!entity) { _fun00004_ip = 115; continue _fun00003 }
 94:
                tango = _closure1_slot4;
                zulu = tango.isStreamVerified;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 115:
                return entity;
 117:
                entity = false;
                return entity;
 121:
                entity = false;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useIsStreamSecureFramesVerified'] = tango;
    mike = function(argFoo) { // Original name: useIsCallSecureFramesVerified
        mike = argFoo;
        offset = mike.channelId;
        verify = mike.location;
        report = _closure1_slot0;
        options = _closure1_slot1;
        zulu = 3;
        zulu = options[zulu];
        tango = undefined;
        golf = report.bind(tango)(zulu);
        oscar = golf.useIsSecureFramesUIEnabled;
        zulu = {};
        zulu['channelId'] = offset;
        zulu['location'] = verify;
        oscar = oscar.bind(golf)(zulu);
        var _closure2_slot0 = oscar;
        zulu = 5;
        zulu = options[zulu];
        golf = report.bind(tango)(zulu);
        zulu = golf.useIsCallRTCConnectionEmpty;
        golf = zulu.bind(golf)();
        var _closure2_slot1 = golf;
        zulu = 4;
        zulu = options[zulu];
        report = report.bind(tango)(zulu);
        tango = report.useStateFromStores;
        mike = _closure1_slot4;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure2_slot0;
                entity = !entity;
                if(entity) { _fun00006_ip = 17; continue _fun00005 }
 13:
                entity = _closure2_slot1;
 17:
                entity = !entity;
                if(!entity) { _fun00006_ip = 42; continue _fun00005 }
 23:
                zulu = _closure1_slot4;
                mike = zulu.isCallVerified;
                entity = mike.bind(zulu)();
 42:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useIsCallSecureFramesVerified'] = mike;
    return entity;
})();