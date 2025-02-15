// app/modules/network/NetStats.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    verify = function(argFoo) { // Original name: receiveNetworkInfoformation
        _fun58746: for(var _fun58746_ip = 0; ; ) switch(_fun58746_ip) {
 0:
            mike = argFoo;
            _closure1_slot14 = mike;
            tango = _closure1_slot15;
            zulu = null;
            if(!(zulu == tango)) { _fun58746_ip = 24; continue _fun58746 }
 20:
            _closure1_slot15 = mike;
 24:
            mike = _closure1_slot22;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        }
    };
    entity = function() { // Original name: updateNetworkUsage
        _fun58747: for(var _fun58747_ip = 0; ; ) switch(_fun58747_ip) {
 0:
            mike = _closure1_slot6;
            mike = mike.SystemResourceManager;
            zulu = mike.getNetworkUsage;
            mike = null;
            if(!(mike != zulu)) { _fun58747_ip = 53; continue _fun58747 }
 25:
            entity = _closure1_slot6;
            zulu = entity.SystemResourceManager;
            mike = zulu.getNetworkUsage;
            entity = function(argFoo) {
                _fun58748: for(var _fun58748_ip = 0; ; ) switch(_fun58748_ip) {
 0:
                    mike = argFoo;
                    _closure1_slot12 = mike;
                    tango = _closure1_slot13;
                    zulu = null;
                    if(!(zulu == tango)) { _fun58748_ip = 24; continue _fun58748 }
 20:
                    _closure1_slot13 = mike;
 24:
                    report = _closure1_slot11;
                    tango = report.fileOnly;
                    zulu = {};
                    mike = _closure1_slot14;
                    zulu['state'] = mike;
                    mike = _closure1_slot12;
                    zulu['nativeStats'] = mike;
                    oscar = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(mike);
                    mike = oscar.getRTCTotalBytes;
                    mike = mike.bind(oscar)();
                    zulu['rtc'] = mike;
                    mike = 'Updating Network Info';
                    mike = tango.bind(report)(mike, zulu);
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 53:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, tango);
    tango = 0;
    options = oscar[tango];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    offset = report.bind(entity)(options);
    options = offset.AppState;
    offset = offset.NativeModules;
    var _closure1_slot6 = offset;
    offset = 4;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 5;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot8 = offset;
    offset = 6;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot9 = offset;
    offset = 7;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.AnalyticEvents;
    var _closure1_slot10 = offset;
    offset = 8;
    offset = oscar[offset];
    romeo = golf.bind(entity)(offset);
    offset = romeo.prototype;
    yankee = Object.create(offset, {constructor: {value: romeo}});
    kilo = 'NetStats';
    sizing = yankee;
    offset = new sizing[romeo](kilo, backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot11 = offset;
    offset = null;
    yankee = {'signalStrengthLevel': null, 'isNetworkRoaming': false, 'cellularReceiveBytes': 0, 'cellularSendBytes': 0, 'totalReceiveBytes': 0, 'totalSendBytes': 0, 'uidReceiveBytes': 0, 'uidSendBytes': 0, 'socketBytesReceived': 0, 'otaBytesReceived': 0, 'otaNumRequests': 0, 'xhrBytesReceived': 0, 'xhrNumRequests': 0, 'frescoBytesReceived': 0, 'frescoNumRequests': 0, 'downloadBytesReceived': 0, 'downloadNumRequests': 0, 'mediaPlayerBytesReceived': 0};
    var _closure1_slot12 = yankee;
    var _closure1_slot13 = offset;
    yankee = {'type': null, 'effectiveSpeed': null, 'serviceProvider': null};
    romeo = 9;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.NetInfoStateType;
    romeo = romeo.unknown;
    yankee['type'] = romeo;
    var _closure1_slot14 = yankee;
    var _closure1_slot15 = offset;
    offset = options.currentState;
    options = 'active';
    options = options === offset;
    var _closure1_slot16 = options;
    var _closure1_slot17 = tango;
    var _closure1_slot18 = tango;
    var _closure1_slot19 = tango;
    var _closure1_slot20 = tango;
    tango = 10;
    options = oscar[tango];
    offset = golf.bind(entity)(options);
    options = offset.addChangeCallback;
    options = options.bind(offset)(verify);
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.getNetworkInformation;
    options = tango.bind(options)();
    tango = options.then;
    tango = tango.bind(options)(verify);
    tango = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: EventTracker
            _fun58750: for(var _fun58750_ip = 0; ; ) switch(_fun58750_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                oscar = _closure1_slot4;
                report = _closure2_slot2;
                entity = undefined;
                report = oscar.bind(entity)(zulu, report);
                golf = _closure1_slot16;
                oscar = 0;
                if(!golf) { _fun58750_ip = 98; continue _fun58750 }
 40:
                golf = global;
                verify = golf.setTimeout;
                options = _closure1_slot1;
                offset = _closure1_slot2;
                golf = 12;
                golf = offset[golf];
                golf = options.bind(entity)(golf);
                golf = golf.Millis;
                options = golf.MINUTE;
                golf = 1;
                options = golf * options;
                golf = function() {
                    mike = _closure3_slot0;
                    entity = mike.track;
                    entity = entity.bind(mike)();
                    return entity;
                };
                oscar = verify.bind(entity)(golf, options);
 98:
                zulu['trackTimeout'] = oscar;
                oscar = _closure1_slot16;
                report = 0;
                if(!oscar) { _fun58750_ip = 171; continue _fun58750 }
 113:
                oscar = global;
                options = oscar.setInterval;
                golf = _closure1_slot1;
                verify = _closure1_slot2;
                oscar = 12;
                oscar = verify[oscar];
                oscar = golf.bind(entity)(oscar);
                oscar = oscar.Millis;
                golf = oscar.SECOND;
                oscar = 5;
                golf = oscar * golf;
                oscar = function() {
                    mike = _closure3_slot0;
                    entity = mike.writeExistingEventStorage;
                    entity = entity.bind(mike)();
                    return entity;
                };
                report = options.bind(entity)(oscar, golf);
 171:
                zulu['flushStorageInterval'] = report;
                report = false;
                zulu['didEverTrack'] = report;
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                report = 13;
                report = golf[report];
                report = oscar.bind(entity)(report);
                golf = report.Storage;
                oscar = golf.get;
                report = 'previousNetStatsEvents';
                report = oscar.bind(golf)(report);
                oscar = null;
                if(!(oscar == report)) { _fun58750_ip = 237; continue _fun58750 }
 233:
                report = new Array(0);
 237:
                zulu['existingEvents'] = report;
                tango = function() {
                    _fun58753: for(var _fun58753_ip = 0; ; ) switch(_fun58753_ip) {
 0:
                        zulu = _closure3_slot0;
                        zulu = zulu.existingEvents;
                        tango = zulu.length;
                        zulu = 0;
                        if(!(tango > zulu)) { _fun58753_ip = 85; continue _fun58753 }
 26:
                        tango = _closure1_slot8;
                        zulu = tango.submitEventsImmediately;
                        mike = _closure3_slot0;
                        mike = mike.existingEvents;
                        tango = zulu.bind(tango)(mike);
                        zulu = tango.then;
                        mike = function() {
                            report = _closure1_slot11;
                            tango = report.fileOnly;
                            mike = _closure3_slot0;
                            zulu = mike.existingEvents;
                            entity = 'Successfully logged existing network usage events';
                            entity = tango.bind(report)(entity, zulu);
                            entity = new Array(0);
                            mike['existingEvents'] = entity;
                            entity = mike.writeExistingEventStorage;
                            entity = entity.bind(mike)();
                            entity = undefined;
                            return entity;
                        };
                        zulu = zulu.bind(tango)(mike);
                        mike = zulu.catch;
                        entity = function(argFoo) {
                            _fun58755: for(var _fun58755_ip = 0; ; ) switch(_fun58755_ip) {
 0:
                                report = argFoo;
                                mike = report.status;
                                entity = 429;
                                entity = entity === mike;
                                if(entity) { _fun58755_ip = 23; continue _fun58755 }
 21:
                                entity = false;
 23:
                                if(!entity) { _fun58755_ip = 64; continue _fun58755 }
 26:
                                tango = _closure1_slot11;
                                zulu = tango.error;
                                entity = _closure3_slot0;
                                mike = entity.existingEvents;
                                entity = 'Failed to log log existing network usage events';
                                entity = zulu.bind(tango)(entity, mike, report);
 64:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
 85:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['trackExistingEvents'] = tango;
                report = _closure1_slot7;
                tango = report.isConnected;
                tango = tango.bind(report)();
                if(tango) { _fun58750_ip = 315; continue _fun58750 }
 271:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 14;
                mike = report[mike];
                oscar = tango.bind(entity)(mike);
                report = oscar.subscribe;
                tango = zulu.trackExistingEvents;
                mike = 'CONNECTION_OPEN';
                mike = report.bind(oscar)(mike, tango);
                _fun58750_ip = 325; continue _fun58750;
 315:
                mike = zulu.trackExistingEvents;
                mike = mike.bind(zulu)();
 325:
                return entity;
            }
        };
        var _closure2_slot2 = zulu;
        report = {};
        mike = 'handleAppStateChange';
        report['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun58756: for(var _fun58756_ip = 0; ; ) switch(_fun58756_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                zulu = mike.didEverTrack;
                if(zulu) { _fun58756_ip = 152; continue _fun58756 }
 21:
                zulu = _closure1_slot16;
                report = argFoo;
                if(report) { _fun58756_ip = 48; continue _fun58756 }
 34:
                if(!zulu) { _fun58756_ip = 152; continue _fun58756 }
 37:
                report = mike.track;
                report = report.bind(mike)();
                _fun58756_ip = 152; continue _fun58756;
 48:
                if(zulu) { _fun58756_ip = 152; continue _fun58756 }
 51:
                zulu = true;
                _closure1_slot16 = zulu;
                zulu = global;
                golf = zulu.setTimeout;
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                tango = 12;
                tango = report[tango];
                report = undefined;
                tango = oscar.bind(report)(tango);
                tango = tango.Millis;
                oscar = tango.MINUTE;
                tango = 1;
                oscar = tango * oscar;
                tango = function() {
                    mike = _closure1_slot21;
                    entity = mike.track;
                    entity = entity.bind(mike)();
                    return entity;
                };
                tango = golf.bind(report)(tango, oscar);
                mike['trackTimeout'] = tango;
                tango = zulu.setInterval;
                zulu = function() {
                    mike = _closure3_slot0;
                    entity = mike.writeExistingEventStorage;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = 5000;
                entity = tango.bind(report)(zulu, entity);
                mike['flushStorageInterval'] = entity;
 152:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = mike;
        mike = new Array(4);
        mike[0] = report;
        report = {};
        golf = 'writeExistingEventStorage';
        report['key'] = golf;
        options = _closure1_slot3;
        entity = undefined;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun58760: for(var _fun58760_ip = 0; ; ) switch(_fun58760_ip) {
 0:
                    StartGenerator();
                    mike = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun58760_ip = 199; continue _fun58760 }
 13:
                    zulu = mike.didEverTrack;
                    if(zulu) { _fun58760_ip = 65; continue _fun58760 }
 22:
                    zulu = _closure1_slot16;
                    if(!zulu) { _fun58760_ip = 65; continue _fun58760 }
 32:
                    zulu = mike.getQueuedEvent;
                    zulu = zulu.bind(mike)();
                    SaveGenerator(address=46);
 44:
                    return zulu;
 46:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun58760_ip = 62; continue _fun58760 }
 52:
                    tango = new Array(1);
                    tango[0] = zulu;
                    _fun58760_ip = 69; continue _fun58760;
 62:
                    return zulu;
 65:
                    tango = new Array(0);
 69:
                    zulu = mike.existingEvents;
                    mike = zulu.concat;
                    report = mike.bind(zulu)(tango);
                    zulu = report.length;
                    mike = 0;
                    if(!(mike !== zulu)) { _fun58760_ip = 146; continue _fun58760 }
 96:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 13;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.Storage;
                    zulu = tango.set;
                    mike = 'previousNetStatsEvents';
                    mike = zulu.bind(tango)(mike, report);
                    _fun58760_ip = 194; continue _fun58760;
 146:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 13;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.Storage;
                    zulu = tango.remove;
                    mike = 'previousNetStatsEvents';
                    mike = zulu.bind(tango)(mike);
 194:
                    mike = undefined;
                    return mike;
 199:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(entity)(golf);
        var _closure2_slot1 = golf;
        golf = function() { // Original name: writeExistingEventStorage
            entity = undefined;
            tango = _closure2_slot1;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        mike[1] = report;
        report = {};
        golf = 'track';
        report['key'] = golf;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun58763: for(var _fun58763_ip = 0; ; ) switch(_fun58763_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun58763_ip = 170; continue _fun58763 }
 15:
                    var _closure4_slot0 = report;
                    mike = undefined;
                    var _closure4_slot1 = mike;
                    zulu = report.didEverTrack;
                    if(zulu) { _fun58763_ip = 167; continue _fun58763 }
 37:
                    zulu = true;
                    report['didEverTrack'] = zulu;
                    zulu = global;
                    golf = zulu.clearTimeout;
                    oscar = report.trackTimeout;
                    oscar = golf.bind(mike)(oscar);
                    oscar = zulu.clearInterval;
                    zulu = report.flushStorageInterval;
                    zulu = oscar.bind(mike)(zulu);
                    zulu = report.getQueuedEvent;
                    zulu = zulu.bind(report)();
                    SaveGenerator(address=95);
 93:
                    return zulu;
 95:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun58763_ip = 164; continue _fun58763 }
 101:
                    golf = new Array(1);
                    golf[0] = zulu;
                    _closure4_slot1 = golf;
                    oscar = _closure1_slot8;
                    report = oscar.submitEventsImmediately;
                    golf = report.bind(oscar)(golf);
                    oscar = golf.then;
                    report = function() {
                        report = _closure1_slot11;
                        tango = report.fileOnly;
                        zulu = _closure4_slot1;
                        mike = 'Successfully tracked latest network usage';
                        mike = tango.bind(report)(mike, zulu);
                        mike = _closure4_slot0;
                        entity = mike.writeExistingEventStorage;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    };
                    oscar = oscar.bind(golf)(report);
                    report = oscar.catch;
                    tango = function(argFoo) {
                        _fun58765: for(var _fun58765_ip = 0; ; ) switch(_fun58765_ip) {
 0:
                            report = argFoo;
                            mike = report.status;
                            entity = 429;
                            if(!(entity !== mike)) { _fun58765_ip = 50; continue _fun58765 }
 18:
                            tango = _closure1_slot11;
                            zulu = tango.error;
                            mike = _closure4_slot1;
                            entity = 'Failed to track latest network usage';
                            entity = zulu.bind(tango)(entity, mike, report);
 50:
                            mike = _closure4_slot0;
                            tango = mike.existingEvents;
                            zulu = tango.push;
                            report = _closure4_slot1;
                            entity = 0;
                            entity = report[entity];
                            entity = zulu.bind(tango)(entity);
                            entity = mike.writeExistingEventStorage;
                            entity = entity.bind(mike)();
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango = report.bind(oscar)(tango);
                    _fun58763_ip = 167; continue _fun58763;
 164:
                    return zulu;
 167:
                    return mike;
 170:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(entity)(golf);
        var _closure2_slot0 = golf;
        golf = function() { // Original name: track
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        mike[2] = report;
        report = {};
        golf = 'getQueuedEvent';
        report['key'] = golf;
        oscar = function() { // Original name: value
            zulu = _closure1_slot22;
            tango = undefined;
            zulu = zulu.bind(tango)();
            zulu = _closure1_slot6;
            zulu = zulu.TTIManager;
            zulu = zulu.AppOpenedTimestamp;
            var _closure3_slot0 = zulu;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 15;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.getSession;
            zulu = mike.bind(zulu)();
            mike = zulu.then;
            entity = function(argFoo) {
                _fun58768: for(var _fun58768_ip = 0; ; ) switch(_fun58768_ip) {
 0:
                    zulu = argFoo;
                    entity = {};
                    mike = _closure1_slot10;
                    mike = mike.APP_NETWORK_USAGE;
                    entity['type'] = mike;
                    mike = {};
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 16;
                    golf = oscar[report];
                    oscar = undefined;
                    options = options.bind(oscar)(golf);
                    golf = options.getDeviceMetadata;
                    yankee = golf.bind(options)();
                    romeo = mike;
                    golf = copyDataProperties(romeo, yankee);
                    golf = global;
                    options = golf.Date;
                    golf = options.now;
                    options = golf.bind(options)();
                    golf = 'client_track_timestamp';
                    mike[golf] = options;
                    options = null;
                    verify = options == zulu;
                    golf = undefined;
                    if(verify) { _fun58768_ip = 106; continue _fun58768 }
 100:
                    golf = zulu.uuid;
 106:
                    zulu = 'client_heartbeat_session_id';
                    mike[zulu] = golf;
                    golf = _closure1_slot0;
                    zulu = _closure1_slot2;
                    report = zulu[report];
                    golf = golf.bind(oscar)(report);
                    report = golf.currentLoadId;
                    golf = report.bind(golf)();
                    report = 'load_id';
                    mike[report] = golf;
                    golf = _closure1_slot9;
                    report = golf.getGuildCount;
                    golf = report.bind(golf)();
                    report = 'num_guilds';
                    mike[report] = golf;
                    report = _closure1_slot1;
                    golf = 17;
                    verify = zulu[golf];
                    verify = report.bind(oscar)(verify);
                    offset = verify.wasAuthenticated;
                    verify = 'was_authenticated';
                    mike[verify] = offset;
                    verify = zulu[golf];
                    verify = report.bind(oscar)(verify);
                    offset = verify.didBackgroundApp;
                    verify = 'did_background_app';
                    mike[verify] = offset;
                    verify = zulu[golf];
                    verify = report.bind(oscar)(verify);
                    verify = verify.extraProperties;
                    offset = verify.headless_task_ran;
                    verify = 'headless_task_ran';
                    mike[verify] = offset;
                    zulu = zulu[golf];
                    zulu = report.bind(oscar)(zulu);
                    offset = zulu.ready;
                    verify = offset.serializeEnd;
                    report = _closure3_slot0;
                    verify = verify.bind(offset)(report);
                    report = 'ready_payload_duration_ms';
                    mike[report] = verify;
                    verify = _closure1_slot13;
                    offset = options == verify;
                    report = undefined;
                    if(offset) { _fun58768_ip = 326; continue _fun58768 }
 320:
                    report = verify.signalStrengthLevel;
 326:
                    offset = options != report;
                    verify = undefined;
                    if(!offset) { _fun58768_ip = 338; continue _fun58768 }
 335:
                    verify = report;
 338:
                    report = 'initial_signal_strength_level';
                    mike[report] = verify;
                    report = _closure1_slot12;
                    report = report.signalStrengthLevel;
                    offset = options != report;
                    verify = undefined;
                    if(!offset) { _fun58768_ip = 371; continue _fun58768 }
 368:
                    verify = report;
 371:
                    report = 'final_signal_strength_level';
                    mike[report] = verify;
                    verify = _closure1_slot15;
                    offset = options == verify;
                    report = undefined;
                    if(offset) { _fun58768_ip = 400; continue _fun58768 }
 395:
                    report = verify.type;
 400:
                    offset = options != report;
                    verify = undefined;
                    if(!offset) { _fun58768_ip = 412; continue _fun58768 }
 409:
                    verify = report;
 412:
                    report = 'initial_network_type';
                    mike[report] = verify;
                    report = _closure1_slot14;
                    verify = report.type;
                    report = 'final_network_type';
                    mike[report] = verify;
                    verify = _closure1_slot15;
                    offset = options == verify;
                    report = undefined;
                    if(offset) { _fun58768_ip = 462; continue _fun58768 }
 456:
                    report = verify.effectiveSpeed;
 462:
                    verify = options != report;
                    options = undefined;
                    if(!verify) { _fun58768_ip = 474; continue _fun58768 }
 471:
                    options = report;
 474:
                    report = 'initial_cellular_generation';
                    mike[report] = options;
                    report = _closure1_slot14;
                    options = report.effectiveSpeed;
                    report = 'final_cellular_generation';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.isNetworkRoaming;
                    report = 'is_network_roaming';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.cellularReceiveBytes;
                    report = 'cellular_receive_bytes';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.cellularSendBytes;
                    report = 'cellular_send_bytes';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.totalReceiveBytes;
                    report = 'total_receive_bytes';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.totalSendBytes;
                    report = 'total_send_bytes';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.uidReceiveBytes;
                    report = 'uid_receive_bytes';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.uidSendBytes;
                    report = 'uid_send_bytes';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.socketBytesReceived;
                    report = 'socket_bytes_received';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.otaBytesReceived;
                    report = 'ota_bytes_received';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.otaNumRequests;
                    report = 'ota_num_requests';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.xhrBytesReceived;
                    report = 'xhr_bytes_received';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.xhrNumRequests;
                    report = 'xhr_num_requests';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.frescoBytesReceived;
                    report = 'fresco_bytes_received';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.frescoNumRequests;
                    report = 'fresco_num_requests';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.downloadBytesReceived;
                    report = 'download_bytes_received';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.downloadNumRequests;
                    report = 'download_num_requests';
                    mike[report] = options;
                    report = _closure1_slot12;
                    options = report.mediaPlayerBytesReceived;
                    report = 'media_player_bytes_received';
                    mike[report] = options;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 11;
                    report = verify[report];
                    options = options.bind(oscar)(report);
                    report = options.getRTCTotalBytes;
                    options = report.bind(options)();
                    report = 'rtc_bytes';
                    mike[report] = options;
                    options = _closure1_slot17;
                    report = 'num_message_sends';
                    mike[report] = options;
                    report = _closure1_slot17;
                    verify = 0;
                    options = undefined;
                    if(!(verify !== report)) { _fun58768_ip = 935; continue _fun58768 }
 931:
                    options = _closure1_slot18;
 935:
                    report = 'max_message_send_duration';
                    mike[report] = options;
                    report = _closure1_slot17;
                    options = undefined;
                    if(!(verify !== report)) { _fun58768_ip = 960; continue _fun58768 }
 956:
                    options = _closure1_slot19;
 960:
                    report = 'max_message_queue_length';
                    mike[report] = options;
                    options = _closure1_slot20;
                    report = 'num_message_send_fails';
                    mike[report] = options;
                    options = _closure1_slot7;
                    report = options.getSocket;
                    report = report.bind(options)();
                    options = report.identifyCount;
                    report = 'num_identifies';
                    mike[report] = options;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[golf];
                    tango = report.bind(oscar)(tango);
                    report = tango.renderLatestMessages;
                    tango = report.serialize;
                    zulu = _closure3_slot0;
                    tango = tango.bind(report)(zulu);
                    zulu = 'render_latest_messages_duration_ms';
                    mike[zulu] = tango;
                    entity['properties'] = mike;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = oscar;
        mike[3] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    options = tango.prototype;
    options = Object.create(options, {constructor: {value: tango}});
    sizing = options;
    tango = new sizing[tango](kilo);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot21 = tango;
    tango = 14;
    options = oscar[tango];
    yankee = golf.bind(entity)(options);
    offset = yankee.subscribe;
    verify = 'APP_STATE_UPDATE';
    options = function(argFoo) {
        zulu = _closure1_slot21;
        mike = zulu.handleAppStateChange;
        entity = argFoo;
        tango = entity.state;
        entity = 'active';
        entity = entity === tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    options = offset.bind(yankee)(verify, options);
    options = oscar[tango];
    yankee = golf.bind(entity)(options);
    offset = yankee.subscribe;
    verify = 'MESSAGE_CREATE';
    options = function(argFoo) {
        _fun58770: for(var _fun58770_ip = 0; ; ) switch(_fun58770_ip) {
 0:
            mike = argFoo;
            report = mike.sendMessageOptions;
            tango = null;
            oscar = tango == report;
            entity = undefined;
            zulu = undefined;
            if(oscar) { _fun58770_ip = 28; continue _fun58770 }
 22:
            zulu = report.sendAnalytics;
 28:
            if(!(tango != zulu)) { _fun58770_ip = 133; continue _fun58770 }
 32:
            tango = _closure1_slot17;
            tango = tango + 1;
            _closure1_slot17 = tango;
            tango = global;
            options = tango.Math;
            golf = options.max;
            oscar = _closure1_slot18;
            report = mike.sendMessageOptions;
            report = report.sendAnalytics;
            report = report.duration;
            report = golf.bind(options)(oscar, report);
            _closure1_slot18 = report;
            oscar = tango.Math;
            report = oscar.max;
            tango = _closure1_slot19;
            mike = mike.sendMessageOptions;
            mike = mike.sendAnalytics;
            mike = mike.queueSize;
            mike = report.bind(oscar)(tango, mike);
            _closure1_slot19 = mike;
 133:
            return entity;
        }
    };
    options = offset.bind(yankee)(verify, options);
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    options = verify.subscribe;
    golf = 'MESSAGE_SEND_FAILED';
    tango = function() {
        entity = _closure1_slot20;
        entity = entity + 1;
        _closure1_slot20 = entity;
        entity = undefined;
        return entity;
    };
    tango = options.bind(verify)(golf, tango);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/network/NetStats.android.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: isSlowNetwork
        _fun58772: for(var _fun58772_ip = 0; ; ) switch(_fun58772_ip) {
 0:
            entity = _closure1_slot14;
            mike = entity.type;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.NetInfoStateType;
            entity = entity.cellular;
            entity = mike === entity;
            if(!entity) { _fun58772_ip = 126; continue _fun58772 }
 53:
            mike = _closure1_slot12;
            tango = mike.signalStrengthLevel;
            mike = null;
            mike = mike != tango;
            if(!mike) { _fun58772_ip = 89; continue _fun58772 }
 72:
            tango = _closure1_slot12;
            report = tango.signalStrengthLevel;
            tango = 2;
            mike = report <= tango;
 89:
            if(mike) { _fun58772_ip = 110; continue _fun58772 }
 92:
            tango = _closure1_slot14;
            report = tango.effectiveSpeed;
            tango = '2g';
            mike = tango === report;
 110:
            if(mike) { _fun58772_ip = 123; continue _fun58772 }
 113:
            zulu = _closure1_slot12;
            mike = zulu.isNetworkRoaming;
 123:
            entity = mike;
 126:
            return entity;
        }
    };
    zulu['isSlowNetwork'] = tango;
    mike = function() { // Original name: getSignalStrength
        entity = _closure1_slot12;
        entity = entity.signalStrengthLevel;
        return entity;
    };
    zulu['getSignalStrength'] = mike;
    return entity;
})();