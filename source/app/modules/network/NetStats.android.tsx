// app/modules/network/NetStats.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    verify = function(argFoo) { // Original name: receiveNetworkInfoformation
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            _closure1_slot14 = michal;
            tangon = _closure1_slot15;
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00002_ip = 24; continue _fun00001 }
 20:
            _closure1_slot15 = michal;
 24:
            michal = _closure1_slot22;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        }
    };
    entity = function() { // Original name: updateNetworkUsage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot6;
            michal = michal.SystemResourceManager;
            zuuluu = michal.getNetworkUsage;
            michal = null;
            if(!(michal != zuuluu)) { _fun00004_ip = 53; continue _fun00003 }
 25:
            entity = _closure1_slot6;
            zuuluu = entity.SystemResourceManager;
            michal = zuuluu.getNetworkUsage;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    _closure1_slot12 = michal;
                    tangon = _closure1_slot13;
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00006_ip = 24; continue _fun00005 }
 20:
                    _closure1_slot13 = michal;
 24:
                    report = _closure1_slot11;
                    tangon = report.fileOnly;
                    zuuluu = {};
                    michal = _closure1_slot14;
                    zuuluu['state'] = michal;
                    michal = _closure1_slot12;
                    zuuluu['nativeStats'] = michal;
                    oscard = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = oscard.bind(entity)(michal);
                    michal = oscard.getRTCTotalBytes;
                    michal = michal.bind(oscard)();
                    zuuluu['rtc'] = michal;
                    michal = 'Updating Network Info';
                    michal = tangon.bind(report)(michal, zuuluu);
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 53:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, tangon);
    tangon = 0;
    option = oscard[tangon];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    offset = report.bind(entity)(option);
    option = offset.AppState;
    offset = offset.NativeModules;
    var _closure1_slot6 = offset;
    offset = 4;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 5;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot8 = offset;
    offset = 6;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot9 = offset;
    offset = 7;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    offset = offset.AnalyticEvents;
    var _closure1_slot10 = offset;
    offset = 8;
    offset = oscard[offset];
    romeon = golfie.bind(entity)(offset);
    offset = romeon.prototype;
    yankee = Object.create(offset, {constructor: {value: romeon}});
    kiloes = 'NetStats';
    sizing = yankee;
    offset = new sizing[romeon](kiloes, backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot11 = offset;
    offset = null;
    yankee = {'signalStrengthLevel': null, 'isNetworkRoaming': false, 'cellularReceiveBytes': 0, 'cellularSendBytes': 0, 'totalReceiveBytes': 0, 'totalSendBytes': 0, 'uidReceiveBytes': 0, 'uidSendBytes': 0, 'socketBytesReceived': 0, 'otaBytesReceived': 0, 'otaNumRequests': 0, 'xhrBytesReceived': 0, 'xhrNumRequests': 0, 'frescoBytesReceived': 0, 'frescoNumRequests': 0, 'downloadBytesReceived': 0, 'downloadNumRequests': 0, 'mediaPlayerBytesReceived': 0};
    var _closure1_slot12 = yankee;
    var _closure1_slot13 = offset;
    yankee = {'type': null, 'effectiveSpeed': null, 'serviceProvider': null};
    romeon = 9;
    romeon = oscard[romeon];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.NetInfoStateType;
    romeon = romeon.unknown;
    yankee['type'] = romeon;
    var _closure1_slot14 = yankee;
    var _closure1_slot15 = offset;
    offset = option.currentState;
    option = 'active';
    option = option === offset;
    var _closure1_slot16 = option;
    var _closure1_slot17 = tangon;
    var _closure1_slot18 = tangon;
    var _closure1_slot19 = tangon;
    var _closure1_slot20 = tangon;
    tangon = 10;
    option = oscard[tangon];
    offset = golfie.bind(entity)(option);
    option = offset.addChangeCallback;
    option = option.bind(offset)(verify);
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.getNetworkInformation;
    option = tangon.bind(option)();
    tangon = option.then;
    tangon = tangon.bind(option)(verify);
    tangon = function() {
        tangon = _closure1_slot5;
        zuuluu = function() { // Original name: EventTracker
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                oscard = _closure1_slot4;
                report = _closure2_slot2;
                entity = undefined;
                report = oscard.bind(entity)(zuuluu, report);
                golfie = _closure1_slot16;
                oscard = 0;
                if(!golfie) { _fun00008_ip = 98; continue _fun00007 }
 40:
                golfie = global;
                verify = golfie.setTimeout;
                option = _closure1_slot1;
                offset = _closure1_slot2;
                golfie = 12;
                golfie = offset[golfie];
                golfie = option.bind(entity)(golfie);
                golfie = golfie.Millis;
                option = golfie.MINUTE;
                golfie = 1;
                option = golfie * option;
                golfie = function() {
                    michal = _closure3_slot0;
                    entity = michal.track;
                    entity = entity.bind(michal)();
                    return entity;
                };
                oscard = verify.bind(entity)(golfie, option);
 98:
                zuuluu['trackTimeout'] = oscard;
                oscard = _closure1_slot16;
                report = 0;
                if(!oscard) { _fun00008_ip = 171; continue _fun00007 }
 113:
                oscard = global;
                option = oscard.setInterval;
                golfie = _closure1_slot1;
                verify = _closure1_slot2;
                oscard = 12;
                oscard = verify[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.Millis;
                golfie = oscard.SECOND;
                oscard = 5;
                golfie = oscard * golfie;
                oscard = function() {
                    michal = _closure3_slot0;
                    entity = michal.writeExistingEventStorage;
                    entity = entity.bind(michal)();
                    return entity;
                };
                report = option.bind(entity)(oscard, golfie);
 171:
                zuuluu['flushStorageInterval'] = report;
                report = false;
                zuuluu['didEverTrack'] = report;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 13;
                report = golfie[report];
                report = oscard.bind(entity)(report);
                golfie = report.Storage;
                oscard = golfie.get;
                report = 'previousNetStatsEvents';
                report = oscard.bind(golfie)(report);
                oscard = null;
                if(!(oscard == report)) { _fun00008_ip = 237; continue _fun00007 }
 233:
                report = new Array(0);
 237:
                zuuluu['existingEvents'] = report;
                tangon = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.existingEvents;
                        tangon = zuuluu.length;
                        zuuluu = 0;
                        if(!(tangon > zuuluu)) { _fun00010_ip = 85; continue _fun00009 }
 26:
                        tangon = _closure1_slot8;
                        zuuluu = tangon.submitEventsImmediately;
                        michal = _closure3_slot0;
                        michal = michal.existingEvents;
                        tangon = zuuluu.bind(tangon)(michal);
                        zuuluu = tangon.then;
                        michal = function() {
                            report = _closure1_slot11;
                            tangon = report.fileOnly;
                            michal = _closure3_slot0;
                            zuuluu = michal.existingEvents;
                            entity = 'Successfully logged existing network usage events';
                            entity = tangon.bind(report)(entity, zuuluu);
                            entity = new Array(0);
                            michal['existingEvents'] = entity;
                            entity = michal.writeExistingEventStorage;
                            entity = entity.bind(michal)();
                            entity = undefined;
                            return entity;
                        };
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = zuuluu.catch;
                        entity = function(argFoo) {
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                report = argFoo;
                                michal = report.status;
                                entity = 429;
                                entity = entity === michal;
                                if(entity) { _fun00012_ip = 23; continue _fun00011 }
 21:
                                entity = false;
 23:
                                if(!entity) { _fun00012_ip = 64; continue _fun00011 }
 26:
                                tangon = _closure1_slot11;
                                zuuluu = tangon.error;
                                entity = _closure3_slot0;
                                michal = entity.existingEvents;
                                entity = 'Failed to log log existing network usage events';
                                entity = zuuluu.bind(tangon)(entity, michal, report);
 64:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
 85:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu['trackExistingEvents'] = tangon;
                report = _closure1_slot7;
                tangon = report.isConnected;
                tangon = tangon.bind(report)();
                if(tangon) { _fun00008_ip = 315; continue _fun00007 }
 271:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                michal = 14;
                michal = report[michal];
                oscard = tangon.bind(entity)(michal);
                report = oscard.subscribe;
                tangon = zuuluu.trackExistingEvents;
                michal = 'CONNECTION_OPEN';
                michal = report.bind(oscard)(michal, tangon);
                _fun00008_ip = 325; continue _fun00007;
 315:
                michal = zuuluu.trackExistingEvents;
                michal = michal.bind(zuuluu)();
 325:
                return entity;
            }
        };
        var _closure2_slot2 = zuuluu;
        report = {};
        michal = 'handleAppStateChange';
        report['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = michal.didEverTrack;
                if(zuuluu) { _fun00014_ip = 152; continue _fun00013 }
 21:
                zuuluu = _closure1_slot16;
                report = argFoo;
                if(report) { _fun00014_ip = 48; continue _fun00013 }
 34:
                if(!zuuluu) { _fun00014_ip = 152; continue _fun00013 }
 37:
                report = michal.track;
                report = report.bind(michal)();
                _fun00014_ip = 152; continue _fun00013;
 48:
                if(zuuluu) { _fun00014_ip = 152; continue _fun00013 }
 51:
                zuuluu = true;
                _closure1_slot16 = zuuluu;
                zuuluu = global;
                golfie = zuuluu.setTimeout;
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                tangon = 12;
                tangon = report[tangon];
                report = undefined;
                tangon = oscard.bind(report)(tangon);
                tangon = tangon.Millis;
                oscard = tangon.MINUTE;
                tangon = 1;
                oscard = tangon * oscard;
                tangon = function() {
                    michal = _closure1_slot21;
                    entity = michal.track;
                    entity = entity.bind(michal)();
                    return entity;
                };
                tangon = golfie.bind(report)(tangon, oscard);
                michal['trackTimeout'] = tangon;
                tangon = zuuluu.setInterval;
                zuuluu = function() {
                    michal = _closure3_slot0;
                    entity = michal.writeExistingEventStorage;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = 5000;
                entity = tangon.bind(report)(zuuluu, entity);
                michal['flushStorageInterval'] = entity;
 152:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = michal;
        michal = new Array(4);
        michal[0] = report;
        report = {};
        golfie = 'writeExistingEventStorage';
        report['key'] = golfie;
        option = _closure1_slot3;
        entity = undefined;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    michal = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 199; continue _fun00015 }
 13:
                    zuuluu = michal.didEverTrack;
                    if(zuuluu) { _fun00016_ip = 65; continue _fun00015 }
 22:
                    zuuluu = _closure1_slot16;
                    if(!zuuluu) { _fun00016_ip = 65; continue _fun00015 }
 32:
                    zuuluu = michal.getQueuedEvent;
                    zuuluu = zuuluu.bind(michal)();
                    SaveGenerator(address=46);
 44:
                    return zuuluu;
 46:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00016_ip = 62; continue _fun00015 }
 52:
                    tangon = new Array(1);
                    tangon[0] = zuuluu;
                    _fun00016_ip = 69; continue _fun00015;
 62:
                    return zuuluu;
 65:
                    tangon = new Array(0);
 69:
                    zuuluu = michal.existingEvents;
                    michal = zuuluu.concat;
                    report = michal.bind(zuuluu)(tangon);
                    zuuluu = report.length;
                    michal = 0;
                    if(!(michal !== zuuluu)) { _fun00016_ip = 146; continue _fun00015 }
 96:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 13;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.Storage;
                    zuuluu = tangon.set;
                    michal = 'previousNetStatsEvents';
                    michal = zuuluu.bind(tangon)(michal, report);
                    _fun00016_ip = 194; continue _fun00015;
 146:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 13;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.Storage;
                    zuuluu = tangon.remove;
                    michal = 'previousNetStatsEvents';
                    michal = zuuluu.bind(tangon)(michal);
 194:
                    michal = undefined;
                    return michal;
 199:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot1 = golfie;
        golfie = function() { // Original name: writeExistingEventStorage
            entity = undefined;
            tangon = _closure2_slot1;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        michal[1] = report;
        report = {};
        golfie = 'track';
        report['key'] = golfie;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00018_ip = 170; continue _fun00017 }
 15:
                    var _closure4_slot0 = report;
                    michal = undefined;
                    var _closure4_slot1 = michal;
                    zuuluu = report.didEverTrack;
                    if(zuuluu) { _fun00018_ip = 167; continue _fun00017 }
 37:
                    zuuluu = true;
                    report['didEverTrack'] = zuuluu;
                    zuuluu = global;
                    golfie = zuuluu.clearTimeout;
                    oscard = report.trackTimeout;
                    oscard = golfie.bind(michal)(oscard);
                    oscard = zuuluu.clearInterval;
                    zuuluu = report.flushStorageInterval;
                    zuuluu = oscard.bind(michal)(zuuluu);
                    zuuluu = report.getQueuedEvent;
                    zuuluu = zuuluu.bind(report)();
                    SaveGenerator(address=95);
 93:
                    return zuuluu;
 95:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00018_ip = 164; continue _fun00017 }
 101:
                    golfie = new Array(1);
                    golfie[0] = zuuluu;
                    _closure4_slot1 = golfie;
                    oscard = _closure1_slot8;
                    report = oscard.submitEventsImmediately;
                    golfie = report.bind(oscard)(golfie);
                    oscard = golfie.then;
                    report = function() {
                        report = _closure1_slot11;
                        tangon = report.fileOnly;
                        zuuluu = _closure4_slot1;
                        michal = 'Successfully tracked latest network usage';
                        michal = tangon.bind(report)(michal, zuuluu);
                        michal = _closure4_slot0;
                        entity = michal.writeExistingEventStorage;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    };
                    oscard = oscard.bind(golfie)(report);
                    report = oscard.catch;
                    tangon = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            report = argFoo;
                            michal = report.status;
                            entity = 429;
                            if(!(entity !== michal)) { _fun00020_ip = 50; continue _fun00019 }
 18:
                            tangon = _closure1_slot11;
                            zuuluu = tangon.error;
                            michal = _closure4_slot1;
                            entity = 'Failed to track latest network usage';
                            entity = zuuluu.bind(tangon)(entity, michal, report);
 50:
                            michal = _closure4_slot0;
                            tangon = michal.existingEvents;
                            zuuluu = tangon.push;
                            report = _closure4_slot1;
                            entity = 0;
                            entity = report[entity];
                            entity = zuuluu.bind(tangon)(entity);
                            entity = michal.writeExistingEventStorage;
                            entity = entity.bind(michal)();
                            entity = undefined;
                            return entity;
                        }
                    };
                    tangon = report.bind(oscard)(tangon);
                    _fun00018_ip = 167; continue _fun00017;
 164:
                    return zuuluu;
 167:
                    return michal;
 170:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: track
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        michal[2] = report;
        report = {};
        golfie = 'getQueuedEvent';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            zuuluu = _closure1_slot22;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.TTIManager;
            zuuluu = zuuluu.AppOpenedTimestamp;
            var _closure3_slot0 = zuuluu;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 15;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getSession;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = argFoo;
                    entity = {};
                    michal = _closure1_slot10;
                    michal = michal.APP_NETWORK_USAGE;
                    entity['type'] = michal;
                    michal = {};
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    report = 16;
                    golfie = oscard[report];
                    oscard = undefined;
                    option = option.bind(oscard)(golfie);
                    golfie = option.getDeviceMetadata;
                    yankee = golfie.bind(option)();
                    romeon = michal;
                    golfie = copyDataProperties(romeon, yankee);
                    golfie = global;
                    option = golfie.Date;
                    golfie = option.now;
                    option = golfie.bind(option)();
                    golfie = 'client_track_timestamp';
                    michal[golfie] = option;
                    option = null;
                    verify = option == zuuluu;
                    golfie = undefined;
                    if(verify) { _fun00022_ip = 106; continue _fun00021 }
 100:
                    golfie = zuuluu.uuid;
 106:
                    zuuluu = 'client_heartbeat_session_id';
                    michal[zuuluu] = golfie;
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    report = zuuluu[report];
                    golfie = golfie.bind(oscard)(report);
                    report = golfie.currentLoadId;
                    golfie = report.bind(golfie)();
                    report = 'load_id';
                    michal[report] = golfie;
                    golfie = _closure1_slot9;
                    report = golfie.getGuildCount;
                    golfie = report.bind(golfie)();
                    report = 'num_guilds';
                    michal[report] = golfie;
                    report = _closure1_slot1;
                    golfie = 17;
                    verify = zuuluu[golfie];
                    verify = report.bind(oscard)(verify);
                    offset = verify.wasAuthenticated;
                    verify = 'was_authenticated';
                    michal[verify] = offset;
                    verify = zuuluu[golfie];
                    verify = report.bind(oscard)(verify);
                    offset = verify.didBackgroundApp;
                    verify = 'did_background_app';
                    michal[verify] = offset;
                    verify = zuuluu[golfie];
                    verify = report.bind(oscard)(verify);
                    verify = verify.extraProperties;
                    offset = verify.headless_task_ran;
                    verify = 'headless_task_ran';
                    michal[verify] = offset;
                    zuuluu = zuuluu[golfie];
                    zuuluu = report.bind(oscard)(zuuluu);
                    offset = zuuluu.ready;
                    verify = offset.serializeEnd;
                    report = _closure3_slot0;
                    verify = verify.bind(offset)(report);
                    report = 'ready_payload_duration_ms';
                    michal[report] = verify;
                    verify = _closure1_slot13;
                    offset = option == verify;
                    report = undefined;
                    if(offset) { _fun00022_ip = 326; continue _fun00021 }
 320:
                    report = verify.signalStrengthLevel;
 326:
                    offset = option != report;
                    verify = undefined;
                    if(!offset) { _fun00022_ip = 338; continue _fun00021 }
 335:
                    verify = report;
 338:
                    report = 'initial_signal_strength_level';
                    michal[report] = verify;
                    report = _closure1_slot12;
                    report = report.signalStrengthLevel;
                    offset = option != report;
                    verify = undefined;
                    if(!offset) { _fun00022_ip = 371; continue _fun00021 }
 368:
                    verify = report;
 371:
                    report = 'final_signal_strength_level';
                    michal[report] = verify;
                    verify = _closure1_slot15;
                    offset = option == verify;
                    report = undefined;
                    if(offset) { _fun00022_ip = 400; continue _fun00021 }
 395:
                    report = verify.type;
 400:
                    offset = option != report;
                    verify = undefined;
                    if(!offset) { _fun00022_ip = 412; continue _fun00021 }
 409:
                    verify = report;
 412:
                    report = 'initial_network_type';
                    michal[report] = verify;
                    report = _closure1_slot14;
                    verify = report.type;
                    report = 'final_network_type';
                    michal[report] = verify;
                    verify = _closure1_slot15;
                    offset = option == verify;
                    report = undefined;
                    if(offset) { _fun00022_ip = 462; continue _fun00021 }
 456:
                    report = verify.effectiveSpeed;
 462:
                    verify = option != report;
                    option = undefined;
                    if(!verify) { _fun00022_ip = 474; continue _fun00021 }
 471:
                    option = report;
 474:
                    report = 'initial_cellular_generation';
                    michal[report] = option;
                    report = _closure1_slot14;
                    option = report.effectiveSpeed;
                    report = 'final_cellular_generation';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.isNetworkRoaming;
                    report = 'is_network_roaming';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.cellularReceiveBytes;
                    report = 'cellular_receive_bytes';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.cellularSendBytes;
                    report = 'cellular_send_bytes';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.totalReceiveBytes;
                    report = 'total_receive_bytes';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.totalSendBytes;
                    report = 'total_send_bytes';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.uidReceiveBytes;
                    report = 'uid_receive_bytes';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.uidSendBytes;
                    report = 'uid_send_bytes';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.socketBytesReceived;
                    report = 'socket_bytes_received';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.otaBytesReceived;
                    report = 'ota_bytes_received';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.otaNumRequests;
                    report = 'ota_num_requests';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.xhrBytesReceived;
                    report = 'xhr_bytes_received';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.xhrNumRequests;
                    report = 'xhr_num_requests';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.frescoBytesReceived;
                    report = 'fresco_bytes_received';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.frescoNumRequests;
                    report = 'fresco_num_requests';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.downloadBytesReceived;
                    report = 'download_bytes_received';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.downloadNumRequests;
                    report = 'download_num_requests';
                    michal[report] = option;
                    report = _closure1_slot12;
                    option = report.mediaPlayerBytesReceived;
                    report = 'media_player_bytes_received';
                    michal[report] = option;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 11;
                    report = verify[report];
                    option = option.bind(oscard)(report);
                    report = option.getRTCTotalBytes;
                    option = report.bind(option)();
                    report = 'rtc_bytes';
                    michal[report] = option;
                    option = _closure1_slot17;
                    report = 'num_message_sends';
                    michal[report] = option;
                    report = _closure1_slot17;
                    verify = 0;
                    option = undefined;
                    if(!(verify !== report)) { _fun00022_ip = 935; continue _fun00021 }
 931:
                    option = _closure1_slot18;
 935:
                    report = 'max_message_send_duration';
                    michal[report] = option;
                    report = _closure1_slot17;
                    option = undefined;
                    if(!(verify !== report)) { _fun00022_ip = 960; continue _fun00021 }
 956:
                    option = _closure1_slot19;
 960:
                    report = 'max_message_queue_length';
                    michal[report] = option;
                    option = _closure1_slot20;
                    report = 'num_message_send_fails';
                    michal[report] = option;
                    option = _closure1_slot7;
                    report = option.getSocket;
                    report = report.bind(option)();
                    option = report.identifyCount;
                    report = 'num_identifies';
                    michal[report] = option;
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[golfie];
                    tangon = report.bind(oscard)(tangon);
                    report = tangon.renderLatestMessages;
                    tangon = report.serialize;
                    zuuluu = _closure3_slot0;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = 'render_latest_messages_duration_ms';
                    michal[zuuluu] = tangon;
                    entity['properties'] = michal;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = oscard;
        michal[3] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    option = tangon.prototype;
    option = Object.create(option, {constructor: {value: tangon}});
    sizing = option;
    tangon = new sizing[tangon](kiloes);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot21 = tangon;
    tangon = 14;
    option = oscard[tangon];
    yankee = golfie.bind(entity)(option);
    offset = yankee.subscribe;
    verify = 'APP_STATE_UPDATE';
    option = function(argFoo) {
        zuuluu = _closure1_slot21;
        michal = zuuluu.handleAppStateChange;
        entity = argFoo;
        tangon = entity.state;
        entity = 'active';
        entity = entity === tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    option = offset.bind(yankee)(verify, option);
    option = oscard[tangon];
    yankee = golfie.bind(entity)(option);
    offset = yankee.subscribe;
    verify = 'MESSAGE_CREATE';
    option = function(argFoo) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            michal = argFoo;
            report = michal.sendMessageOptions;
            tangon = null;
            oscard = tangon == report;
            entity = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00024_ip = 28; continue _fun00023 }
 22:
            zuuluu = report.sendAnalytics;
 28:
            if(!(tangon != zuuluu)) { _fun00024_ip = 133; continue _fun00023 }
 32:
            tangon = _closure1_slot17;
            tangon = tangon + 1;
            _closure1_slot17 = tangon;
            tangon = global;
            option = tangon.Math;
            golfie = option.max;
            oscard = _closure1_slot18;
            report = michal.sendMessageOptions;
            report = report.sendAnalytics;
            report = report.duration;
            report = golfie.bind(option)(oscard, report);
            _closure1_slot18 = report;
            oscard = tangon.Math;
            report = oscard.max;
            tangon = _closure1_slot19;
            michal = michal.sendMessageOptions;
            michal = michal.sendAnalytics;
            michal = michal.queueSize;
            michal = report.bind(oscard)(tangon, michal);
            _closure1_slot19 = michal;
 133:
            return entity;
        }
    };
    option = offset.bind(yankee)(verify, option);
    tangon = oscard[tangon];
    verify = golfie.bind(entity)(tangon);
    option = verify.subscribe;
    golfie = 'MESSAGE_SEND_FAILED';
    tangon = function() {
        entity = _closure1_slot20;
        entity = entity + 1;
        _closure1_slot20 = entity;
        entity = undefined;
        return entity;
    };
    tangon = option.bind(verify)(golfie, tangon);
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/network/NetStats.android.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: isSlowNetwork
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = _closure1_slot14;
            michal = entity.type;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.NetInfoStateType;
            entity = entity.cellular;
            entity = michal === entity;
            if(!entity) { _fun00026_ip = 126; continue _fun00025 }
 53:
            michal = _closure1_slot12;
            tangon = michal.signalStrengthLevel;
            michal = null;
            michal = michal != tangon;
            if(!michal) { _fun00026_ip = 89; continue _fun00025 }
 72:
            tangon = _closure1_slot12;
            report = tangon.signalStrengthLevel;
            tangon = 2;
            michal = report <= tangon;
 89:
            if(michal) { _fun00026_ip = 110; continue _fun00025 }
 92:
            tangon = _closure1_slot14;
            report = tangon.effectiveSpeed;
            tangon = '2g';
            michal = tangon === report;
 110:
            if(michal) { _fun00026_ip = 123; continue _fun00025 }
 113:
            zuuluu = _closure1_slot12;
            michal = zuuluu.isNetworkRoaming;
 123:
            entity = michal;
 126:
            return entity;
        }
    };
    zuuluu['isSlowNetwork'] = tangon;
    michal = function() { // Original name: getSignalStrength
        entity = _closure1_slot12;
        entity = entity.signalStrengthLevel;
        return entity;
    };
    zuuluu['getSignalStrength'] = michal;
    return entity;
})();