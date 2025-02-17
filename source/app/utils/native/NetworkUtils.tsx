// app/utils/native/NetworkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: ensureChangeListenerCreated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot7;
            entity = null;
            if(!(entity == zulu)) { _fun00002_ip = 54; continue _fun00001 }
 13:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.addEventListener;
            entity = _closure1_slot12;
            entity = zulu.bind(tango)(entity);
            _closure1_slot7 = entity;
 54:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: cleanupChangeListener
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = _closure1_slot7;
            entity = null;
            zulu = entity != zulu;
            if(!zulu) { _fun00004_ip = 31; continue _fun00003 }
 16:
            tango = _closure1_slot4;
            report = tango.length;
            tango = 0;
            zulu = tango === report;
 31:
            if(!zulu) { _fun00004_ip = 49; continue _fun00003 }
 34:
            tango = _closure1_slot5;
            report = tango.length;
            tango = 0;
            zulu = tango === report;
 49:
            if(!zulu) { _fun00004_ip = 67; continue _fun00003 }
 52:
            tango = _closure1_slot6;
            report = tango.length;
            tango = 0;
            zulu = tango === report;
 67:
            if(!zulu) { _fun00004_ip = 84; continue _fun00003 }
 70:
            tango = _closure1_slot7;
            zulu = undefined;
            zulu = tango.bind(zulu)();
            _closure1_slot7 = entity;
 84:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: convertNetInfo
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.type;
            zulu = entity.details;
            entity = {};
            entity['type'] = report;
            mike = _closure1_slot2;
            golf = mike.CELLULAR;
            oscar = null;
            if(!(report === golf)) { _fun00006_ip = 45; continue _fun00005 }
 39:
            oscar = zulu.cellularGeneration;
 45:
            entity['effectiveSpeed'] = oscar;
            tango = _closure1_slot2;
            tango = tango.CELLULAR;
            mike = null;
            if(!(report === tango)) { _fun00006_ip = 72; continue _fun00005 }
 66:
            mike = zulu.carrier;
 72:
            entity['serviceProvider'] = mike;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: notifyListeners
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            options = argFoo;
            foxtrot = options.isConnected;
            var _closure2_slot0 = foxtrot;
            tango = _closure1_slot11;
            entity = undefined;
            tango = tango.bind(entity)(options);
            var _closure2_slot1 = tango;
            if(foxtrot) { _fun00008_ip = 42; continue _fun00007 }
 36:
            oscar = _closure1_slot5;
            _fun00008_ip = 46; continue _fun00007;
 42:
            oscar = _closure1_slot4;
 46:
            report = null;
            report = report != foxtrot;
            if(!report) { _fun00008_ip = 58; continue _fun00007 }
 55:
            report = foxtrot;
 58:
            _closure1_slot8 = report;
            golf = _closure1_slot3;
            report = golf.log;
            sizing = options.type;
            backup = tango.cellularGeneration;
            tango = global;
            tango = tango.HermesInternal;
            offset = tango.concat;
            echo = 'Network status changed: isConnected:';
            output = ' type:';
            kilo = ' speed:';
            result = foxtrot;
            tango = echo[offset](result, output, sizing, kilo, backup, foxtrot);
            tango = report.bind(golf)(tango);
            report = oscar.forEach;
            tango = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    tango = mike != zulu;
                    if(!tango) { _fun00010_ip = 20; continue _fun00009 }
 16:
                    tango = _closure2_slot0;
 20:
                    zulu = _closure2_slot1;
                    mike = argFoo;
                    entity = undefined;
                    entity = mike.bind(entity)(tango, zulu);
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango);
            tango = _closure1_slot6;
            zulu = tango.forEach;
            mike = function(argFoo) {
                zulu = _closure2_slot1;
                mike = argFoo;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: addCallback
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            if(mike) { _fun00012_ip = 15; continue _fun00011 }
 9:
            tango = _closure1_slot5;
            _fun00012_ip = 19; continue _fun00011;
 15:
            tango = _closure1_slot4;
 19:
            zulu = tango.push;
            mike = argBar;
            mike = zulu.bind(tango)(mike);
            mike = _closure1_slot9;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: removeCallback
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            if(mike) { _fun00014_ip = 15; continue _fun00013 }
 9:
            zulu = _closure1_slot5;
            _fun00014_ip = 19; continue _fun00013;
 15:
            zulu = _closure1_slot4;
 19:
            tango = zulu.indexOf;
            mike = argBar;
            report = tango.bind(zulu)(mike);
            mike = -1;
            tango = zulu;
            if(!(mike !== report)) { _fun00014_ip = 70; continue _fun00013 }
 45:
            zulu = tango.splice;
            mike = 1;
            mike = zulu.bind(tango)(report, mike);
            mike = _closure1_slot10;
            entity = undefined;
            entity = mike.bind(entity)();
 70:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    verify = true;
    mike['value'] = verify;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.NetworkConnectionTypes;
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    offset = golf.bind(entity)(mike);
    mike = offset.prototype;
    options = Object.create(mike, {constructor: {value: offset}});
    foxtrot = 'NetworkUtils';
    backup = options;
    mike = new backup[offset](foxtrot, romeo);
    options = mike instanceof Object ? mike : options;
    var _closure1_slot3 = options;
    mike = options.enableNativeLogger;
    mike = mike.bind(options)(verify);
    mike = new Array(0);
    var _closure1_slot4 = mike;
    mike = new Array(0);
    var _closure1_slot5 = mike;
    mike = new Array(0);
    var _closure1_slot6 = mike;
    mike = null;
    var _closure1_slot7 = mike;
    mike = false;
    var _closure1_slot8 = mike;
    mike = 2;
    mike = oscar[mike];
    golf = golf.bind(entity)(mike);
    mike = golf.fetch;
    options = mike.bind(golf)();
    golf = options.then;
    mike = function(argFoo) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            entity = entity.isConnected;
            mike = null;
            mike = mike != entity;
            if(!mike) { _fun00016_ip = 21; continue _fun00015 }
 18:
            mike = entity;
 21:
            _closure1_slot8 = mike;
            entity = undefined;
            return entity;
        }
    };
    mike = golf.bind(options)(mike);
    mike = {};
    golf = function(argFoo) { // Original name: addOnlineCallback
        tango = _closure1_slot13;
        entity = undefined;
        zulu = true;
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['addOnlineCallback'] = golf;
    golf = function(argFoo) { // Original name: removeOnlineCallback
        tango = _closure1_slot14;
        entity = undefined;
        zulu = true;
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['removeOnlineCallback'] = golf;
    golf = function(argFoo) { // Original name: addOfflineCallback
        tango = _closure1_slot13;
        entity = undefined;
        zulu = false;
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['addOfflineCallback'] = golf;
    golf = function(argFoo) { // Original name: removeOfflineCallback
        tango = _closure1_slot14;
        entity = undefined;
        zulu = false;
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['removeOfflineCallback'] = golf;
    golf = function(argFoo) { // Original name: addChangeCallback
        tango = _closure1_slot6;
        zulu = tango.push;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        mike = _closure1_slot9;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['addChangeCallback'] = golf;
    golf = function(argFoo) { // Original name: removeChangeCallback
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tango = _closure1_slot6;
            zulu = tango.indexOf;
            mike = argFoo;
            report = zulu.bind(tango)(mike);
            mike = -1;
            if(!(mike !== report)) { _fun00018_ip = 59; continue _fun00017 }
 30:
            tango = _closure1_slot6;
            zulu = tango.splice;
            mike = 1;
            mike = zulu.bind(tango)(report, mike);
            mike = _closure1_slot10;
            entity = undefined;
            entity = mike.bind(entity)();
 59:
            entity = undefined;
            return entity;
        }
    };
    mike['removeChangeCallback'] = golf;
    golf = function() { // Original name: getNetworkInformation
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        entity = mike.fetch;
        zulu = entity.bind(mike)();
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure1_slot11;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['getNetworkInformation'] = golf;
    tango = function() { // Original name: isOnline
        entity = _closure1_slot8;
        return entity;
    };
    mike['isOnline'] = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/native/NetworkUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();