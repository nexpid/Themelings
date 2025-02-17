// app/stores/StreamRTCConnectionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golf = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = golf;
        var _closure1_slot2 = oscar;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot8;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot7;
                entity = _closure1_slot27;
                entity = entity.bind(zulu)();
                if(entity) { _fun00004_ip = 51; continue _fun00003 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, oscar);
                _fun00004_ip = 92; continue _fun00003;
 51:
                golf = global;
                options = golf.Reflect;
                golf = options.construct;
                if(oscar) { _fun00004_ip = 71; continue _fun00003 }
 67:
                oscar = new Array(0);
 71:
                report = _closure1_slot8;
                report = report.bind(zulu)(tango);
                report = report.constructor;
                entity = golf.bind(options)(verify, oscar, report);
 92:
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        var _closure1_slot26 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
 70: // try_end0
                _fun00006_ip = 74; continue _fun00005;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot27 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot27 = entity;
        entity = function() { // Original name: destroyStreamRTCConnections
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 15;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.forEach;
            zulu = _closure1_slot24;
            mike = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.destroy;
                    tango = zulu.isOwner;
                    entity = 'receiver-disconnect';
                    if(!tango) { _fun00008_ip = 30; continue _fun00007 }
 24:
                    entity = 'sender-disconnect';
 30:
                    entity = mike.bind(zulu)(entity);
                    mike = _closure1_slot24;
                    entity = argBar;
                    entity = delete mike[entity];
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        var _closure1_slot28 = entity;
        entity = function(argFoo) { // Original name: updateStats
            report = argFoo;
            var _closure2_slot0 = report;
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 15;
            tango = tango[entity];
            entity = undefined;
            golf = oscar.bind(entity)(tango);
            oscar = golf.forEach;
            tango = _closure1_slot24;
            zulu = function(argFoo) {
                zulu = argFoo;
                mike = zulu.updateStats;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu = oscar.bind(golf)(tango, zulu);
            tango = report.filter;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                mike = entity.context;
                entity = _closure1_slot17;
                entity = entity.STREAM;
                entity = mike === entity;
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.forEach;
            mike = function(argFoo) {
                entity = argFoo;
                report = entity.stats;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'STREAM_STATS_UPDATE';
                mike['type'] = oscar;
                mike['stats'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure1_slot29 = entity;
        offset = function() { // Original name: handleRtcAction
            entity = true;
            return entity;
        };
        entity = function(argFoo) { // Original name: parseSourceType
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = argFoo;
                tango = null;
                if(!(tango != zulu)) { _fun00010_ip = 246; continue _fun00009 }
 12:
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                entity = mike[entity];
                mike = undefined;
                entity = report.bind(mike)(entity);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun00010_ip = 162; continue _fun00009 }
 46:
                entity = global;
                report = entity.platform;
                golf = tango == report;
                oscar = undefined;
                if(golf) { _fun00010_ip = 68; continue _fun00009 }
 63:
                oscar = report.name;
 68:
                report = 'Chrome';
                if(!(report !== oscar)) { _fun00010_ip = 162; continue _fun00009 }
 78:
                report = entity.platform;
                golf = tango == report;
                oscar = undefined;
                if(golf) { _fun00010_ip = 98; continue _fun00009 }
 93:
                oscar = report.name;
 98:
                report = 'Firefox';
                if(!(report !== oscar)) { _fun00010_ip = 144; continue _fun00009 }
 108:
                entity = entity.platform;
                tango = tango == entity;
                mike = undefined;
                if(tango) { _fun00010_ip = 128; continue _fun00009 }
 123:
                mike = entity.name;
 128:
                entity = 'Safari';
                if(!(entity === mike)) { _fun00010_ip = 222; continue _fun00009 }
 138:
                entity = 'window';
                return entity;
 144:
                entity = 'screen';
                mike = '';
                if(!(mike !== zulu)) { _fun00010_ip = 160; continue _fun00009 }
 156:
                entity = 'window';
 160:
                return entity;
 162:
                mike = zulu.startsWith;
                entity = 'web-contents-media-stream:';
                entity = mike.bind(zulu)(entity);
                if(entity) { _fun00010_ip = 240; continue _fun00009 }
 182:
                mike = zulu.startsWith;
                entity = 'window:';
                entity = mike.bind(zulu)(entity);
                if(entity) { _fun00010_ip = 234; continue _fun00009 }
 202:
                mike = zulu.startsWith;
                entity = 'screen:';
                entity = mike.bind(zulu)(entity);
                if(entity) { _fun00010_ip = 228; continue _fun00009 }
 222:
                entity = 'unknown';
                return entity;
 228:
                entity = 'screen';
                return entity;
 234:
                entity = 'window';
                return entity;
 240:
                entity = 'tab';
                return entity;
 246:
                entity = 'unknown';
                return entity;
            }
        };
        var _closure1_slot30 = entity;
        entity = global;
        options = entity.Object;
        tango = options.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = tango.bind(options)(zulu, entity, mike);
        entity = 0;
        mike = oscar[entity];
        entity = undefined;
        mike = golf.bind(entity)(mike);
        var _closure1_slot5 = mike;
        mike = 1;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot6 = mike;
        mike = 2;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot7 = mike;
        mike = 3;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot8 = mike;
        mike = 4;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot9 = mike;
        mike = 5;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot10 = mike;
        mike = 6;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot11 = mike;
        mike = 7;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot12 = mike;
        mike = 8;
        mike = oscar[mike];
        tango = golf.bind(entity)(mike);
        var _closure1_slot13 = tango;
        mike = 9;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot14 = mike;
        mike = 10;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot15 = mike;
        mike = 11;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        options = mike.RTCConnectionQuality;
        var _closure1_slot16 = options;
        mike = mike.StreamLayouts;
        options = 12;
        options = oscar[options];
        options = report.bind(entity)(options);
        options = options.MediaEngineContextTypes;
        var _closure1_slot17 = options;
        options = {};
        var _closure1_slot18 = options;
        options = {};
        var _closure1_slot19 = options;
        options = {};
        var _closure1_slot20 = options;
        options = {};
        var _closure1_slot21 = options;
        options = {};
        var _closure1_slot22 = options;
        mike = mike.PORTRAIT;
        var _closure1_slot23 = mike;
        mike = {};
        var _closure1_slot24 = mike;
        mike = new Array(0);
        var _closure1_slot25 = mike;
        mike = 22;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        options = mike.Store;
        mike = function(argFoo) {
            tango = function() { // Original name: StreamRTCConnectionStore
                report = this;
                tango = undefined;
                entity = undefined;
                oscar = _closure1_slot5;
                zulu = _closure2_slot0;
                oscar = oscar.bind(tango)(report, zulu);
                mike = _closure1_slot26;
                entity = arguments;
                entity = mike.bind(tango)(report, zulu, entity);
                return entity;
            };
            var _closure2_slot0 = tango;
            report = _closure1_slot9;
            zulu = undefined;
            mike = argFoo;
            mike = report.bind(zulu)(tango, mike);
            mike = _closure1_slot6;
            report = {};
            entity = 'getActiveStreamKey';
            report['key'] = entity;
            entity = function() { // Original name: value
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 21;
                    entity = tango[entity];
                    tango = undefined;
                    zulu = zulu.bind(tango)(entity);
                    entity = _closure1_slot13;
                    zulu = zulu.bind(tango)(entity);
                    entity = null;
                    if(!zulu) { _fun00012_ip = 43; continue _fun00011 }
 39:
                    entity = _closure1_slot4;
 43:
                    return entity;
                }
            };
            report['value'] = entity;
            entity = new Array(17);
            entity[0] = report;
            report = {};
            golf = 'getRTCConnections';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot24;
                return entity;
            };
            report['value'] = golf;
            entity[1] = report;
            report = {};
            golf = 'getAllActiveStreamKeys';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = global;
                zulu = entity.Object;
                mike = zulu.keys;
                entity = _closure1_slot24;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report['value'] = golf;
            entity[2] = report;
            report = {};
            golf = 'getRTCConnection';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = _closure1_slot24;
                entity = argFoo;
                entity = mike[entity];
                return entity;
            };
            report['value'] = golf;
            entity[3] = report;
            report = {};
            golf = 'getStatsHistory';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    golf = argBar;
                    tango = argBaz;
                    var _closure3_slot0 = golf;
                    var _closure3_slot1 = tango;
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 21;
                    entity = oscar[entity];
                    oscar = undefined;
                    report = report.bind(oscar)(entity);
                    entity = _closure1_slot13;
                    report = report.bind(oscar)(entity);
                    entity = null;
                    if(report) { _fun00014_ip = 57; continue _fun00013 }
 55:
                    return entity;
 57:
                    if(!(entity != golf)) { _fun00014_ip = 138; continue _fun00013 }
 61:
                    if(!tango) { _fun00014_ip = 113; continue _fun00013 }
 64:
                    oscar = _closure1_slot11;
                    report = oscar.getActiveStreamForUser;
                    tango = argFoo;
                    oscar = report.bind(oscar)(golf, tango);
                    if(!(entity != oscar)) { _fun00014_ip = 136; continue _fun00013 }
 87:
                    report = _closure1_slot11;
                    tango = report.getViewerIds;
                    tango = tango.bind(report)(oscar);
                    report = tango.length;
                    tango = 0;
                    if(!(tango !== report)) { _fun00014_ip = 134; continue _fun00013 }
 113:
                    tango = _closure1_slot25;
                    zulu = tango.map;
                    mike = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zulu = argFoo;
                            tango = _closure3_slot1;
                            if(tango) { _fun00016_ip = 49; continue _fun00015 }
 15:
                            tango = zulu.rtp;
                            tango = tango.inbound;
                            entity = _closure3_slot0;
                            report = tango[entity];
                            tango = function(argFoo) { // Original name: extractSpectatorVideoStats
                                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                    tango = argFoo;
                                    entity = null;
                                    if(!(entity != tango)) { _fun00018_ip = 205; continue _fun00017 }
 12:
                                    zulu = tango.find;
                                    mike = function(argFoo) {
                                        entity = argFoo;
                                        mike = entity.type;
                                        entity = 'video';
                                        entity = entity === mike;
                                        return entity;
                                    };
                                    report = zulu.bind(tango)(mike);
                                    zulu = entity != report;
                                    mike = null;
                                    if(!zulu) { _fun00018_ip = 203; continue _fun00017 }
 41:
                                    tango = report.type;
                                    zulu = 'video';
                                    mike = null;
                                    if(!(zulu === tango)) { _fun00018_ip = 203; continue _fun00017 }
 59:
                                    zulu = {};
                                    tango = 'spectator';
                                    zulu['type'] = tango;
                                    golf = report.packetsReceived;
                                    options = entity != golf;
                                    oscar = 0;
                                    if(!options) { _fun00018_ip = 89; continue _fun00017 }
 86:
                                    oscar = golf;
 89:
                                    zulu['packetsSentOrReceived'] = oscar;
                                    golf = report.packetsLost;
                                    options = entity != golf;
                                    oscar = 0;
                                    if(!options) { _fun00018_ip = 112; continue _fun00017 }
 109:
                                    oscar = golf;
 112:
                                    zulu['packetsLost'] = oscar;
                                    golf = report.frameRateDecode;
                                    options = entity != golf;
                                    oscar = 0;
                                    if(!options) { _fun00018_ip = 135; continue _fun00017 }
 132:
                                    oscar = golf;
 135:
                                    zulu['frameRate'] = oscar;
                                    golf = report.bitrate;
                                    options = entity != golf;
                                    oscar = 0;
                                    if(!options) { _fun00018_ip = 158; continue _fun00017 }
 155:
                                    oscar = golf;
 158:
                                    zulu['bitrate'] = oscar;
                                    oscar = report.resolution;
                                    golf = entity == oscar;
                                    report = undefined;
                                    if(golf) { _fun00018_ip = 183; continue _fun00017 }
 178:
                                    report = oscar.height;
 183:
                                    oscar = entity != report;
                                    tango = 0;
                                    if(!oscar) { _fun00018_ip = 195; continue _fun00017 }
 192:
                                    tango = report;
 195:
                                    zulu['resolution'] = tango;
                                    mike = zulu;
 203:
                                    return mike;
 205:
                                    return entity;
                                }
                            };
                            entity = undefined;
                            entity = tango.bind(entity)(report);
                            _fun00016_ip = 73; continue _fun00015;
 49:
                            zulu = zulu.rtp;
                            tango = zulu.outbound;
                            zulu = function(argFoo) { // Original name: extractStreamerVideoStats
                                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                    zulu = argFoo;
                                    mike = zulu.find;
                                    entity = function(argFoo) {
                                        entity = argFoo;
                                        mike = entity.type;
                                        entity = 'video';
                                        entity = entity === mike;
                                        return entity;
                                    };
                                    report = mike.bind(zulu)(entity);
                                    tango = null;
                                    mike = tango != report;
                                    entity = null;
                                    if(!mike) { _fun00020_ip = 180; continue _fun00019 }
 34:
                                    zulu = report.type;
                                    mike = 'video';
                                    entity = null;
                                    if(!(mike === zulu)) { _fun00020_ip = 180; continue _fun00019 }
 52:
                                    mike = {};
                                    zulu = 'streamer';
                                    mike['type'] = zulu;
                                    golf = report.packetsSent;
                                    options = tango != golf;
                                    zulu = 0;
                                    oscar = 0;
                                    if(!options) { _fun00020_ip = 84; continue _fun00019 }
 81:
                                    oscar = golf;
 84:
                                    mike['packetsSentOrReceived'] = oscar;
                                    golf = report.packetsLost;
                                    options = tango != golf;
                                    oscar = 0;
                                    if(!options) { _fun00020_ip = 107; continue _fun00019 }
 104:
                                    oscar = golf;
 107:
                                    mike['packetsLost'] = oscar;
                                    golf = report.frameRateEncode;
                                    options = tango != golf;
                                    oscar = 0;
                                    if(!options) { _fun00020_ip = 130; continue _fun00019 }
 127:
                                    oscar = golf;
 130:
                                    mike['frameRate'] = oscar;
                                    oscar = report.resolution;
                                    golf = tango == oscar;
                                    report = undefined;
                                    if(golf) { _fun00020_ip = 155; continue _fun00019 }
 150:
                                    report = oscar.height;
 155:
                                    oscar = tango != report;
                                    tango = 0;
                                    if(!oscar) { _fun00020_ip = 167; continue _fun00019 }
 164:
                                    tango = report;
 167:
                                    mike['resolution'] = tango;
                                    mike['bitrate'] = zulu;
                                    entity = mike;
 180:
                                    return entity;
                                }
                            };
                            mike = undefined;
                            entity = zulu.bind(mike)(tango);
 73:
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    return mike;
 134:
                    return entity;
 136:
                    return entity;
 138:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[4] = report;
            report = {};
            golf = 'getQuality';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = this;
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 21;
                    mike = report[mike];
                    report = undefined;
                    tango = tango.bind(report)(mike);
                    mike = _closure1_slot13;
                    mike = tango.bind(report)(mike);
                    if(mike) { _fun00022_ip = 52; continue _fun00021 }
 40:
                    mike = _closure1_slot16;
                    mike = mike.UNKNOWN;
                    return mike;
 52:
                    mike = zulu.getActiveStreamKey;
                    report = mike.bind(zulu)();
                    zulu = null;
                    tango = zulu != report;
                    mike = null;
                    if(!tango) { _fun00022_ip = 81; continue _fun00021 }
 73:
                    tango = _closure1_slot24;
                    mike = tango[report];
 81:
                    if(!(zulu == mike)) { _fun00022_ip = 97; continue _fun00021 }
 85:
                    entity = _closure1_slot16;
                    entity = entity.UNKNOWN;
                    _fun00022_ip = 103; continue _fun00021;
 97:
                    entity = mike.quality;
 103:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[5] = report;
            report = {};
            golf = 'getMediaSessionId';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    if(!(entity != zulu)) { _fun00024_ip = 53; continue _fun00023 }
 9:
                    mike = _closure1_slot24;
                    report = mike[zulu];
                    zulu = entity != report;
                    mike = undefined;
                    if(!zulu) { _fun00024_ip = 51; continue _fun00023 }
 29:
                    tango = entity != report;
                    zulu = null;
                    if(!tango) { _fun00024_ip = 48; continue _fun00023 }
 38:
                    tango = report.getMediaSessionId;
                    zulu = tango.bind(report)();
 48:
                    mike = zulu;
 51:
                    return mike;
 53:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[6] = report;
            report = {};
            golf = 'getRtcConnectionId';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    if(!(entity != zulu)) { _fun00026_ip = 53; continue _fun00025 }
 9:
                    mike = _closure1_slot24;
                    report = mike[zulu];
                    zulu = entity != report;
                    mike = undefined;
                    if(!zulu) { _fun00026_ip = 51; continue _fun00025 }
 29:
                    tango = entity != report;
                    zulu = null;
                    if(!tango) { _fun00026_ip = 48; continue _fun00025 }
 38:
                    tango = report.getRTCConnectionId;
                    zulu = tango.bind(report)();
 48:
                    mike = zulu;
 51:
                    return mike;
 53:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[7] = report;
            report = {};
            golf = 'getVideoStats';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    if(!(entity != zulu)) { _fun00028_ip = 41; continue _fun00027 }
 9:
                    mike = _closure1_slot24;
                    tango = mike[zulu];
                    zulu = entity != tango;
                    mike = null;
                    if(!zulu) { _fun00028_ip = 39; continue _fun00027 }
 29:
                    zulu = tango.getVideoStats;
                    mike = zulu.bind(tango)();
 39:
                    return mike;
 41:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[8] = report;
            report = {};
            golf = 'getHostname';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    mike = argFoo;
                    report = null;
                    if(!(report != mike)) { _fun00030_ip = 58; continue _fun00029 }
 9:
                    entity = _closure1_slot24;
                    mike = entity[mike];
                    zulu = report != mike;
                    tango = '';
                    entity = tango;
                    if(!zulu) { _fun00030_ip = 56; continue _fun00029 }
 34:
                    zulu = mike.hostname;
                    zulu = report != zulu;
                    entity = tango;
                    if(!zulu) { _fun00030_ip = 56; continue _fun00029 }
 50:
                    entity = mike.hostname;
 56:
                    return entity;
 58:
                    entity = '';
                    return entity;
                }
            };
            report['value'] = golf;
            entity[9] = report;
            report = {};
            golf = 'getRegion';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    if(!(entity != zulu)) { _fun00032_ip = 41; continue _fun00031 }
 9:
                    mike = _closure1_slot24;
                    tango = mike[zulu];
                    zulu = entity != tango;
                    mike = null;
                    if(!zulu) { _fun00032_ip = 39; continue _fun00031 }
 29:
                    zulu = tango.getRegion;
                    mike = zulu.bind(tango)();
 39:
                    return mike;
 41:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[10] = report;
            report = {};
            golf = 'getMaxViewers';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    if(!(entity != zulu)) { _fun00034_ip = 41; continue _fun00033 }
 9:
                    mike = _closure1_slot24;
                    tango = mike[zulu];
                    zulu = entity != tango;
                    mike = null;
                    if(!zulu) { _fun00034_ip = 39; continue _fun00033 }
 29:
                    zulu = tango.getMaxViewers;
                    mike = zulu.bind(tango)();
 39:
                    return mike;
 41:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[11] = report;
            report = {};
            golf = 'getStreamSourceId';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = _closure1_slot21;
                entity = argFoo;
                entity = mike[entity];
                return entity;
            };
            report['value'] = golf;
            entity[12] = report;
            report = {};
            golf = 'getUserIds';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    mike = _closure1_slot24;
                    entity = argFoo;
                    zulu = mike[entity];
                    entity = null;
                    mike = entity == zulu;
                    entity = undefined;
                    if(mike) { _fun00036_ip = 35; continue _fun00035 }
 25:
                    mike = zulu.getUserIds;
                    entity = mike.bind(zulu)();
 35:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[13] = report;
            report = {};
            golf = 'isUserConnected';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    mike = _closure1_slot24;
                    entity = argFoo;
                    tango = mike[entity];
                    entity = null;
                    mike = entity == tango;
                    entity = undefined;
                    if(mike) { _fun00038_ip = 39; continue _fun00037 }
 25:
                    zulu = tango.getIsUserConnected;
                    mike = argBar;
                    entity = zulu.bind(tango)(mike);
 39:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[14] = report;
            report = {};
            golf = 'getSecureFramesState';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    mike = _closure1_slot24;
                    entity = argFoo;
                    zulu = mike[entity];
                    entity = null;
                    mike = entity == zulu;
                    entity = undefined;
                    if(mike) { _fun00040_ip = 35; continue _fun00039 }
 25:
                    mike = zulu.getSecureFramesState;
                    entity = mike.bind(zulu)();
 35:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[15] = report;
            report = {};
            golf = 'getSecureFramesRosterMapEntry';
            report['key'] = golf;
            oscar = function(argFoo, argBar) { // Original name: value
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    mike = _closure1_slot24;
                    entity = argFoo;
                    report = mike[entity];
                    mike = null;
                    zulu = mike == report;
                    tango = undefined;
                    if(zulu) { _fun00042_ip = 35; continue _fun00041 }
 25:
                    zulu = report.getSecureFramesRosterMap;
                    tango = zulu.bind(report)();
 35:
                    mike = mike == tango;
                    entity = undefined;
                    if(mike) { _fun00042_ip = 57; continue _fun00041 }
 44:
                    zulu = tango.get;
                    mike = argBar;
                    entity = zulu.bind(tango)(mike);
 57:
                    return entity;
                }
            };
            report['value'] = oscar;
            entity[16] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        options = mike.bind(entity)(options);
        mike = 'StreamRTCConnectionStore';
        options['displayName'] = mike;
        mike = 16;
        mike = oscar[mike];
        golf = golf.bind(entity)(mike);
        mike = tango.isSupported;
        mike = mike.bind(tango)();
        if(mike) { _fun00002_ip = 461; continue _fun00001 }
 454:
        mike = {};
        _fun00002_ip = 622; continue _fun00001;
 461:
        tango = {};
        yankee = function(argFoo) { // Original name: handleConnectionOpen
            entity = argFoo;
            mike = entity.sessionId;
            var _closure1_slot3 = mike;
            mike = null;
            var _closure1_slot4 = mike;
            mike = _closure1_slot28;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        tango['CONNECTION_OPEN'] = yankee;
        yankee = function() { // Original name: handleConnectionClosed
            mike = null;
            _closure1_slot3 = mike;
            _closure1_slot4 = mike;
            mike = _closure1_slot28;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        tango['CONNECTION_CLOSED'] = yankee;
        tango['RTC_CONNECTION_STATE'] = offset;
        tango['RTC_CONNECTION_PING'] = offset;
        tango['RTC_CONNECTION_LOSS_RATE'] = offset;
        yankee = function(argFoo) { // Original name: handleRtcConnectionUpdateId
            mike = argFoo;
            var _closure2_slot0 = mike;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 15;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.some;
            mike = _closure1_slot24;
            entity = function(argFoo) {
                entity = _closure2_slot0;
                mike = entity.connection;
                entity = argFoo;
                entity = entity === mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        tango['RTC_CONNECTION_UPDATE_ID'] = yankee;
        tango['RTC_CONNECTION_SECURE_FRAMES_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamStart
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                entity = argFoo;
                backup = entity.streamType;
                foxtrot = entity.guildId;
                romeo = entity.channelId;
                verify = entity.appContext;
                var _closure2_slot0 = verify;
                options = entity.pid;
                oscar = entity.sourceId;
                mike = entity.nativePickerStyleUsed;
                var _closure2_slot1 = mike;
                tango = entity.goLiveModalDurationMs;
                golf = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 17;
                zulu = offset[entity];
                entity = undefined;
                yankee = golf.bind(entity)(zulu);
                golf = yankee.encodeStreamKey;
                zulu = {};
                zulu['streamType'] = backup;
                zulu['guildId'] = foxtrot;
                zulu['channelId'] = romeo;
                foxtrot = _closure1_slot12;
                romeo = foxtrot.getId;
                romeo = romeo.bind(foxtrot)();
                zulu['ownerId'] = romeo;
                zulu = golf.bind(yankee)(zulu);
                golf = _closure1_slot18;
                golf[zulu] = verify;
                verify = _closure1_slot1;
                golf = 15;
                golf = offset[golf];
                offset = verify.bind(entity)(golf);
                verify = offset.forEach;
                golf = _closure1_slot24;
                report = function(argFoo) {
                    _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                        entity = argFoo;
                        mike = entity.analyticsContext;
                        entity = entity.isOwner;
                        report = mike.setActionContext;
                        tango = _closure2_slot0;
                        tango = report.bind(mike)(tango);
                        tango = mike.setNativePickerStyleUsed;
                        zulu = _closure2_slot1;
                        zulu = tango.bind(mike)(zulu);
                        if(!entity) { _fun00046_ip = 65; continue _fun00045 }
 53:
                        entity = mike.trackStart;
                        entity = entity.bind(mike)();
 65:
                        entity = undefined;
                        return entity;
                    }
                };
                report = verify.bind(offset)(golf, report);
                report = _closure1_slot21;
                report[zulu] = oscar;
                report = _closure1_slot20;
                report[zulu] = options;
                report = null;
                if(!(report != options)) { _fun00044_ip = 264; continue _fun00043 }
 195:
                golf = _closure1_slot10;
                oscar = golf.getGameForPID;
                options = oscar.bind(golf)(options);
                if(!(report != options)) { _fun00044_ip = 264; continue _fun00043 }
 214:
                golf = _closure1_slot19;
                oscar = {};
                verify = options.name;
                oscar['name'] = verify;
                verify = options.id;
                oscar['id'] = verify;
                verify = options.exeName;
                oscar['exe'] = verify;
                options = options.distributor;
                oscar['distributor'] = options;
                golf[zulu] = oscar;
 264:
                if(!(report == tango)) { _fun00044_ip = 278; continue _fun00043 }
 268:
                report = _closure1_slot22;
                report = delete report[zulu];
                _fun00044_ip = 286; continue _fun00043;
 278:
                mike = _closure1_slot22;
                mike[zulu] = tango;
 286:
                return entity;
            }
        };
        tango['STREAM_START'] = offset;
        offset = function(argFoo) { // Original name: handleStreamStop
            entity = argFoo;
            report = entity.appContext;
            var _closure2_slot0 = report;
            zulu = entity.streamKey;
            entity = _closure1_slot18;
            entity[zulu] = report;
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            entity = 15;
            report = report[entity];
            entity = undefined;
            golf = oscar.bind(entity)(report);
            oscar = golf.forEach;
            report = _closure1_slot24;
            tango = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    mike = entity.analyticsContext;
                    entity = entity.isOwner;
                    tango = mike.setActionContext;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(mike)(zulu);
                    if(!entity) { _fun00048_ip = 48; continue _fun00047 }
 36:
                    entity = mike.trackEnd;
                    entity = entity.bind(mike)();
 48:
                    entity = undefined;
                    return entity;
                }
            };
            tango = oscar.bind(golf)(report, tango);
            tango = _closure1_slot21;
            report = null;
            tango[zulu] = report;
            tango = _closure1_slot20;
            tango[zulu] = report;
            mike = _closure1_slot22;
            mike = delete mike[zulu];
            return entity;
        };
        tango['STREAM_STOP'] = offset;
        offset = function(argFoo) { // Original name: handleStreamCreate
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                entity = argFoo;
                tango = entity.streamKey;
                golf = entity.rtcServerId;
                zulu = entity.region;
                offset = entity.viewerIds;
                _closure1_slot4 = tango;
                entity = _closure1_slot24;
                entity = entity[tango];
                oscar = null;
                if(!(oscar == entity)) { _fun00050_ip = 472; continue _fun00049 }
 51:
                if(!(oscar != golf)) { _fun00050_ip = 472; continue _fun00049 }
 58:
                entity = _closure1_slot20;
                entity = entity[tango];
                if(!(oscar == entity)) { _fun00050_ip = 78; continue _fun00049 }
 70:
                entity = _closure1_slot19;
                entity[tango] = oscar;
 78:
                report = _closure1_slot0;
                options = _closure1_slot2;
                entity = 17;
                entity = options[entity];
                options = undefined;
                report = report.bind(options)(entity);
                entity = report.decodeStreamKey;
                romeo = entity.bind(report)(tango);
                entity = _closure1_slot19;
                entity = entity[tango];
                entity = oscar == entity;
                if(!entity) { _fun00050_ip = 138; continue _fun00049 }
 126:
                report = _closure1_slot21;
                report = report[tango];
                entity = oscar == report;
 138:
                if(!entity) { _fun00050_ip = 185; continue _fun00049 }
 141:
                report = _closure1_slot19;
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                entity = 18;
                entity = yankee[entity];
                yankee = verify.bind(options)(entity);
                verify = yankee.getStreamerApplication;
                entity = _closure1_slot14;
                entity = verify.bind(yankee)(romeo, entity);
                report[tango] = entity;
 185:
                report = _closure1_slot0;
                entity = _closure1_slot2;
                verify = 14;
                entity = entity[verify];
                entity = report.bind(options)(entity);
                report = entity.StreamRTCAnalyticsContext;
                entity = {};
                entity['streamRegion'] = zulu;
                zulu = _closure1_slot19;
                zulu = zulu[tango];
                entity['streamApplication'] = zulu;
                yankee = _closure1_slot30;
                zulu = _closure1_slot21;
                zulu = zulu[tango];
                zulu = yankee.bind(options)(zulu);
                entity['streamSourceType'] = zulu;
                zulu = _closure1_slot18;
                zulu = zulu[tango];
                entity['actionContext'] = zulu;
                yankee = oscar != offset;
                zulu = 0;
                if(!yankee) { _fun00050_ip = 280; continue _fun00049 }
 275:
                zulu = offset.length;
 280:
                entity['numViewers'] = zulu;
                zulu = _closure1_slot22;
                zulu = zulu[tango];
                entity['goLiveModalDurationMs'] = zulu;
                zulu = report.prototype;
                zulu = Object.create(zulu, {constructor: {value: report}});
                kilo = zulu;
                backup = entity;
                entity = new kilo[report](backup, foxtrot);
                zulu = entity instanceof Object ? entity : zulu;
                report = _closure1_slot1;
                entity = _closure1_slot2;
                offset = 13;
                offset = entity[offset];
                romeo = report.bind(options)(offset);
                offset = _closure1_slot3;
                yankee = oscar != offset;
                offset = 'Creating RTCConnection without session.';
                offset = romeo.bind(options)(yankee, offset);
                entity = entity[verify];
                report = report.bind(options)(entity);
                entity = {};
                options = _closure1_slot3;
                entity['sessionId'] = options;
                entity['streamKey'] = tango;
                entity['serverId'] = golf;
                golf = _closure1_slot23;
                entity['initialLayout'] = golf;
                entity['analyticsContext'] = zulu;
                zulu = _closure1_slot19;
                zulu = zulu[tango];
                zulu = oscar != zulu;
                entity['isStreamer'] = zulu;
                oscar = _closure1_slot15;
                zulu = oscar.getMediaSessionId;
                zulu = zulu.bind(oscar)();
                entity['parentMediaSessionId'] = zulu;
                zulu = report.prototype;
                zulu = Object.create(zulu, {constructor: {value: report}});
                kilo = zulu;
                backup = entity;
                entity = new kilo[report](backup, foxtrot);
                zulu = entity instanceof Object ? entity : zulu;
                entity = _closure1_slot24;
                entity[tango] = zulu;
 472:
                entity = new Array(0);
                _closure1_slot25 = entity;
                zulu = _closure1_slot13;
                entity = zulu.getMediaEngine;
                report = entity.bind(zulu)();
                tango = report.on;
                oscar = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 19;
                zulu = zulu[entity];
                entity = undefined;
                zulu = oscar.bind(entity)(zulu);
                zulu = zulu.MediaEngineEvent;
                zulu = zulu.ConnectionStats;
                mike = _closure1_slot29;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        tango['STREAM_CREATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamServerUpdate
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                entity = argFoo;
                zulu = _closure1_slot24;
                mike = entity.streamKey;
                tango = zulu[mike];
                mike = null;
                if(!(mike != tango)) { _fun00052_ip = 54; continue _fun00051 }
 26:
                zulu = tango.connect;
                mike = entity.endpoint;
                entity = entity.token;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
 54:
                entity = false;
                return entity;
            }
        };
        tango['STREAM_SERVER_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamUpdate
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                mike = argFoo;
                tango = mike.streamKey;
                entity = mike.viewerIds;
                zulu = mike.paused;
                mike = _closure1_slot24;
                mike = mike[tango];
                tango = null;
                if(!(tango != mike)) { _fun00054_ip = 83; continue _fun00053 }
 38:
                if(!(tango != entity)) { _fun00054_ip = 66; continue _fun00053 }
 42:
                report = mike.analyticsContext;
                tango = report.trackViewerCount;
                entity = entity.length;
                entity = tango.bind(report)(entity);
 66:
                entity = mike.streamUpdate;
                entity = entity.bind(mike)(zulu);
                entity = undefined;
                return entity;
 83:
                entity = false;
                return entity;
            }
        };
        tango['STREAM_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamDelete
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                entity = argFoo;
                mike = entity.streamKey;
                zulu = _closure1_slot24;
                report = zulu[mike];
                zulu = null;
                if(!(zulu != report)) { _fun00056_ip = 131; continue _fun00055 }
 26:
                tango = _closure1_slot4;
                if(!(mike === tango)) { _fun00056_ip = 102; continue _fun00055 }
 34:
                _closure1_slot4 = zulu;
                tango = _closure1_slot13;
                zulu = tango.getMediaEngine;
                golf = zulu.bind(tango)();
                oscar = golf.off;
                options = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 19;
                tango = tango[zulu];
                zulu = undefined;
                zulu = options.bind(zulu)(tango);
                zulu = zulu.MediaEngineEvent;
                tango = zulu.ConnectionStats;
                zulu = _closure1_slot29;
                zulu = oscar.bind(golf)(tango, zulu);
 102:
                tango = report.destroy;
                zulu = 'stream-end';
                zulu = tango.bind(report)(zulu);
                entity = _closure1_slot24;
                entity = delete entity[mike];
                entity = undefined;
                return entity;
 131:
                entity = false;
                return entity;
            }
        };
        tango['STREAM_DELETE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamStatsUpdate
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                entity = argFoo;
                tango = entity.stats;
                entity = null;
                if(!(entity != tango)) { _fun00058_ip = 66; continue _fun00057 }
 15:
                zulu = _closure1_slot25;
                mike = zulu.push;
                mike = mike.bind(zulu)(tango);
                mike = _closure1_slot25;
                zulu = mike.length;
                mike = 30;
                if(!(zulu > mike)) { _fun00058_ip = 62; continue _fun00057 }
 48:
                mike = _closure1_slot25;
                entity = mike.shift;
                entity = entity.bind(mike)();
 62:
                entity = undefined;
                return entity;
 66:
                entity = false;
                return entity;
            }
        };
        tango['STREAM_STATS_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleLayoutUpdate
            mike = argFoo;
            zulu = mike.layout;
            var _closure2_slot0 = zulu;
            _closure1_slot23 = zulu;
            zulu = global;
            tango = zulu.Object;
            zulu = tango.values;
            mike = _closure1_slot24;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.forEach;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.layoutChange;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        tango['STREAM_LAYOUT_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleSimulcastDebugOverrideChanged
            entity = argFoo;
            zulu = entity.userId;
            var _closure2_slot0 = zulu;
            zulu = entity.context;
            var _closure2_slot1 = zulu;
            entity = entity.quality;
            var _closure2_slot2 = entity;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 15;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.forEach;
            zulu = _closure1_slot24;
            mike = function(argFoo) {
                report = argFoo;
                tango = report.setSimulcastDebugOverride;
                zulu = _closure2_slot0;
                mike = _closure2_slot1;
                entity = _closure2_slot2;
                entity = tango.bind(report)(zulu, mike, entity);
                entity = undefined;
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        tango['RTC_DEBUG_SET_SIMULCAST_OVERRIDE'] = offset;
        verify = function(argFoo) { // Original name: handleVideoSizeUpdate
            entity = argFoo;
            zulu = entity.streamId;
            var _closure2_slot0 = zulu;
            zulu = entity.width;
            var _closure2_slot1 = zulu;
            entity = entity.height;
            var _closure2_slot2 = entity;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 15;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.forEach;
            zulu = _closure1_slot24;
            mike = function(argFoo) {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    report = argFoo;
                    entity = null;
                    if(!(entity != report)) { _fun00060_ip = 37; continue _fun00059 }
 9:
                    tango = report.setVideoSize;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    entity = _closure2_slot2;
                    entity = tango.bind(report)(zulu, mike, entity);
 37:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        tango['VIDEO_SIZE_UPDATE'] = verify;
        mike = tango;
 622:
        tango = options.prototype;
        tango = Object.create(tango, {constructor: {value: options}});
        kilo = tango;
        backup = golf;
        foxtrot = mike;
        mike = new kilo[options](backup, foxtrot, romeo);
        mike = mike instanceof Object ? mike : tango;
        tango = 23;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'stores/StreamRTCConnectionStore.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();