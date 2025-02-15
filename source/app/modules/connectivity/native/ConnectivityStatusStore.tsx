// app/modules/connectivity/native/ConnectivityStatusStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot30;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot30 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: getStateActiveMillis
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot22;
            entity = null;
            zulu = entity != zulu;
            entity = 0;
            if(!zulu) { _fun00006_ip = 46; continue _fun00005 }
 18:
            mike = _closure1_slot22;
            zulu = -mike;
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            entity = zulu + mike;
 46:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: updateConnectivityState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = _closure1_slot25;
            oscar = null;
            if(!(oscar != zulu)) { _fun00008_ip = 429; continue _fun00007 }
 18:
            zulu = _closure1_slot24;
            if(!(oscar != zulu)) { _fun00008_ip = 429; continue _fun00007 }
 29:
            zulu = _closure1_slot25;
            if(zulu) { _fun00008_ip = 81; continue _fun00007 }
 36:
            zulu = _closure1_slot24;
            if(!zulu) { _fun00008_ip = 57; continue _fun00007 }
 43:
            zulu = _closure1_slot26;
            if(!zulu) { _fun00008_ip = 69; continue _fun00007 }
 50:
            zulu = _closure1_slot27;
            if(zulu) { _fun00008_ip = 69; continue _fun00007 }
 57:
            zulu = _closure1_slot13;
            tango = zulu.ONLINE;
            _fun00008_ip = 79; continue _fun00007;
 69:
            zulu = _closure1_slot13;
            tango = zulu.CONNECTING;
 79:
            _fun00008_ip = 91; continue _fun00007;
 81:
            zulu = _closure1_slot13;
            tango = zulu.OFFLINE;
 91:
            var _closure2_slot0 = tango;
            zulu = _closure1_slot19;
            zulu = zulu === tango;
            if(!zulu) { _fun00008_ip = 114; continue _fun00007 }
 106:
            report = _closure1_slot22;
            zulu = oscar != report;
 114:
            if(zulu) { _fun00008_ip = 249; continue _fun00007 }
 120:
            zulu = global;
            report = zulu.Date;
            zulu = report.now;
            zulu = zulu.bind(report)();
            _closure1_slot22 = zulu;
            oscar = _closure1_slot19;
            zulu = _closure1_slot13;
            zulu = zulu.ONLINE;
            if(!(zulu !== tango)) { _fun00008_ip = 241; continue _fun00007 }
 159:
            zulu = _closure1_slot13;
            zulu = zulu.OFFLINE;
            if(!(zulu !== tango)) { _fun00008_ip = 235; continue _fun00007 }
 173:
            zulu = _closure1_slot13;
            report = zulu.CONNECTING;
            zulu = undefined;
            if(!(report === tango)) { _fun00008_ip = 245; continue _fun00007 }
 189:
            report = _closure1_slot13;
            report = report.OFFLINE;
            if(!(oscar !== report)) { _fun00008_ip = 220; continue _fun00007 }
 203:
            oscar = _closure1_slot7;
            report = oscar.hasCache;
            report = report.bind(oscar)();
            if(report) { _fun00008_ip = 226; continue _fun00007 }
 220:
            report = _closure1_slot15;
            _fun00008_ip = 230; continue _fun00007;
 226:
            report = _closure1_slot16;
 230:
            zulu = report;
            _fun00008_ip = 245; continue _fun00007;
 235:
            zulu = _closure1_slot15;
            _fun00008_ip = 245; continue _fun00007;
 241:
            zulu = _closure1_slot14;
 245:
            _closure1_slot23 = zulu;
 249:
            report = _closure1_slot23;
            oscar = _closure1_slot31;
            zulu = undefined;
            zulu = oscar.bind(zulu)();
            oscar = report - zulu;
            zulu = global;
            options = zulu.Math;
            golf = options.round;
            report = 100;
            report = golf.bind(options)(report);
            oscar = oscar / report;
            report = _closure1_slot17;
            golf = oscar * report;
            oscar = zulu.Math;
            report = oscar.max;
            zulu = 0;
            zulu = report.bind(oscar)(golf, zulu);
            report = _closure1_slot19;
            report = report === tango;
            if(!report) { _fun00008_ip = 338; continue _fun00007 }
 330:
            oscar = _closure1_slot20;
            report = oscar === zulu;
 338:
            if(report) { _fun00008_ip = 425; continue _fun00007 }
 341:
            _closure1_slot19 = tango;
            _closure1_slot20 = zulu;
            report = _closure1_slot12;
            tango = report.verbose;
            oscar = _closure1_slot19;
            zulu = 'State set to ';
            golf = zulu + oscar;
            oscar = _closure1_slot20;
            zulu = ', with delay: ';
            zulu = golf + zulu;
            zulu = zulu + oscar;
            zulu = tango.bind(report)(zulu);
            report = _closure1_slot18;
            tango = report.start;
            zulu = _closure1_slot20;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure1_slot21;
                    mike = _closure1_slot19;
                    if(!(zulu !== mike)) { _fun00010_ip = 66; continue _fun00009 }
 15:
                    report = _closure1_slot12;
                    tango = report.verbose;
                    zulu = _closure1_slot19;
                    mike = 'New connectivity state published:';
                    mike = tango.bind(report)(mike, zulu);
                    mike = _closure2_slot0;
                    _closure1_slot21 = mike;
                    mike = _closure1_slot28;
                    entity = mike.emitChange;
                    entity = entity.bind(mike)();
 66:
                    entity = undefined;
                    return entity;
                }
            };
            entity = true;
            entity = tango.bind(report)(zulu, mike, entity);
 425:
            entity = false;
            return entity;
 429:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    options = function() { // Original name: handleConnectionClosed
        entity = false;
        _closure1_slot26 = entity;
        report = _closure1_slot12;
        tango = report.verbose;
        zulu = 'Connection closed';
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot32;
        mike = undefined;
        mike = zulu.bind(mike)();
        return entity;
    };
    entity = function() { // Original name: handleLoadingMessagesChanged
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = _closure1_slot10;
            entity = zulu.getChannelId;
            tango = entity.bind(zulu)();
            entity = null;
            if(!(entity != tango)) { _fun00012_ip = 95; continue _fun00011 }
 23:
            zulu = _closure1_slot9;
            entity = zulu.isLoadingMessages;
            zulu = entity.bind(zulu)(tango);
            entity = _closure1_slot27;
            entity = zulu !== entity;
            if(!entity) { _fun00012_ip = 93; continue _fun00011 }
 51:
            _closure1_slot27 = zulu;
            oscar = _closure1_slot12;
            report = oscar.verbose;
            tango = _closure1_slot27;
            zulu = 'Loading messages: ';
            zulu = report.bind(oscar)(zulu, tango);
            zulu = _closure1_slot32;
            mike = undefined;
            mike = zulu.bind(mike)();
            entity = false;
 93:
            return entity;
 95:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: handleAuthStoreChanged
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = _closure1_slot8;
            entity = zulu.isAuthenticated;
            zulu = entity.bind(zulu)();
            entity = _closure1_slot24;
            entity = entity !== zulu;
            if(!entity) { _fun00014_ip = 70; continue _fun00013 }
 28:
            _closure1_slot24 = zulu;
            oscar = _closure1_slot12;
            report = oscar.verbose;
            tango = _closure1_slot24;
            zulu = 'Is authenticated: ';
            zulu = report.bind(oscar)(zulu, tango);
            zulu = _closure1_slot32;
            mike = undefined;
            mike = zulu.bind(mike)();
            entity = false;
 70:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = global;
    offset = entity.Object;
    tango = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(offset)(zulu, entity, mike);
    romeo = 0;
    mike = golf[romeo];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 7;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 8;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 9;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.AppStates;
    var _closure1_slot11 = mike;
    mike = 10;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    tango = mike.prototype;
    offset = Object.create(tango, {constructor: {value: mike}});
    tango = 'ConnectivityStatusStore';
    output = offset;
    sizing = tango;
    mike = new output[mike](sizing, kilo);
    mike = mike instanceof Object ? mike : offset;
    var _closure1_slot12 = mike;
    mike = {};
    offset = 'ONLINE';
    mike['ONLINE'] = offset;
    offset = 'OFFLINE';
    mike['OFFLINE'] = offset;
    offset = 'CONNECTING';
    mike['CONNECTING'] = offset;
    var _closure1_slot13 = mike;
    var _closure1_slot14 = romeo;
    offset = 1000;
    var _closure1_slot15 = offset;
    yankee = 10000;
    var _closure1_slot16 = yankee;
    offset = 100;
    var _closure1_slot17 = offset;
    offset = 11;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.Timeout;
    foxtrot = offset.prototype;
    foxtrot = Object.create(foxtrot, {constructor: {value: offset}});
    output = foxtrot;
    offset = new output[offset](sizing);
    offset = offset instanceof Object ? offset : foxtrot;
    var _closure1_slot18 = offset;
    offset = null;
    var _closure1_slot19 = offset;
    var _closure1_slot20 = romeo;
    romeo = mike.ONLINE;
    var _closure1_slot21 = romeo;
    var _closure1_slot22 = offset;
    var _closure1_slot23 = yankee;
    var _closure1_slot24 = offset;
    var _closure1_slot25 = offset;
    offset = false;
    var _closure1_slot26 = offset;
    var _closure1_slot27 = offset;
    offset = 13;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    yankee = offset.Store;
    offset = function(argFoo) {
        tango = function() { // Original name: ConnectivityStatusStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot29;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            report = tango.syncWith;
            mike = _closure1_slot9;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = _closure1_slot33;
            mike = report.bind(tango)(zulu, mike);
            zulu = tango.syncWith;
            report = _closure1_slot8;
            mike = new Array(1);
            mike[0] = report;
            entity = _closure1_slot34;
            entity = zulu.bind(tango)(mike, entity);
            mike = function() { // Original name: handleInitialize
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 12;
                golf = report[zulu];
                entity = undefined;
                verify = tango.bind(entity)(golf);
                options = verify.addOfflineCallback;
                golf = function() {
                    mike = true;
                    _closure1_slot25 = mike;
                    mike = _closure1_slot32;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                golf = options.bind(verify)(golf);
                golf = report[zulu];
                options = tango.bind(entity)(golf);
                golf = options.addOnlineCallback;
                oscar = function() {
                    mike = false;
                    _closure1_slot25 = mike;
                    mike = _closure1_slot32;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                oscar = golf.bind(options)(oscar);
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.isOnline;
                zulu = zulu.bind(tango)();
                zulu = !zulu;
                _closure1_slot25 = zulu;
                tango = _closure1_slot8;
                zulu = tango.isAuthenticated;
                zulu = zulu.bind(tango)();
                _closure1_slot24 = zulu;
                mike = _closure1_slot32;
                mike = mike.bind(entity)();
                return entity;
            };
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'isConnected';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot21;
            entity = _closure1_slot13;
            entity = entity.ONLINE;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot21;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    offset = offset.bind(entity)(yankee);
    offset['displayName'] = tango;
    tango = 14;
    tango = golf[tango];
    sizing = verify.bind(entity)(tango);
    tango = {};
    yankee = function() { // Original name: handleConnectionOpen
        mike = true;
        _closure1_slot26 = mike;
        tango = _closure1_slot12;
        zulu = tango.verbose;
        mike = 'Connection open.';
        mike = zulu.bind(tango)(mike);
        mike = _closure1_slot32;
        entity = undefined;
        entity = mike.bind(entity)();
        entity = false;
        return entity;
    };
    tango['CONNECTION_OPEN'] = yankee;
    yankee = function() { // Original name: handleConnectionResumed
        mike = true;
        _closure1_slot26 = mike;
        tango = _closure1_slot12;
        zulu = tango.verbose;
        mike = 'Connection resumed.';
        mike = zulu.bind(tango)(mike);
        mike = _closure1_slot32;
        entity = undefined;
        entity = mike.bind(entity)();
        entity = false;
        return entity;
    };
    tango['CONNECTION_RESUMED'] = yankee;
    tango['CONNECTION_CLOSED'] = options;
    tango['CONNECTION_INTERRUPTED'] = options;
    options = function(argFoo) { // Original name: handleAppStateUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zulu = argFoo;
            tango = zulu.state;
            entity = _closure1_slot11;
            entity = entity.INACTIVE;
            entity = tango !== entity;
            if(!entity) { _fun00016_ip = 167; continue _fun00015 }
 31:
            report = zulu.state;
            tango = _closure1_slot11;
            tango = tango.BACKGROUND;
            if(!(report === tango)) { _fun00016_ip = 72; continue _fun00015 }
 50:
            report = _closure1_slot23;
            oscar = _closure1_slot31;
            tango = undefined;
            tango = oscar.bind(tango)();
            tango = report - tango;
            _closure1_slot23 = tango;
 72:
            report = zulu.state;
            tango = _closure1_slot11;
            tango = tango.ACTIVE;
            tango = report === tango;
            if(!tango) { _fun00016_ip = 104; continue _fun00015 }
 94:
            oscar = _closure1_slot22;
            report = null;
            tango = report != oscar;
 104:
            if(!tango) { _fun00016_ip = 128; continue _fun00015 }
 107:
            tango = global;
            report = tango.Date;
            tango = report.now;
            tango = tango.bind(report)();
            _closure1_slot22 = tango;
 128:
            oscar = _closure1_slot12;
            report = oscar.verbose;
            tango = zulu.state;
            zulu = 'App state updated: ';
            zulu = report.bind(oscar)(zulu, tango);
            zulu = _closure1_slot32;
            mike = undefined;
            mike = zulu.bind(mike)();
            entity = false;
 167:
            return entity;
        }
    };
    tango['APP_STATE_UPDATE'] = options;
    options = offset.prototype;
    options = Object.create(options, {constructor: {value: offset}});
    output = options;
    kilo = tango;
    tango = new output[offset](sizing, kilo, backup);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot28 = tango;
    report = 15;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/connectivity/native/ConnectivityStatusStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['ConnectivityState'] = mike;
    return entity;
})();