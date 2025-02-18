// app/stores/StreamRTCConnectionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = golfie;
        var _closure1_slot2 = oscard;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                oscard = argBaz;
                michal = _closure1_slot8;
                zuuluu = undefined;
                entity = argBar;
                verify = michal.bind(zuuluu)(entity);
                michal = _closure1_slot7;
                entity = _closure1_slot27;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 51; continue _fun00003 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tangon, oscard);
                _fun00004_ip = 92; continue _fun00003;
 51:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                if(oscard) { _fun00004_ip = 71; continue _fun00003 }
 67:
                oscard = new Array(0);
 71:
                report = _closure1_slot8;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = golfie.bind(option)(verify, oscard, report);
 92:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure1_slot26 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
 2: // try_start_0
                michal = global;
                zuuluu = michal.Boolean;
                zuuluu = zuuluu.prototype;
                tangon = zuuluu.valueOf;
                zuuluu = tangon.call;
                option = michal.Reflect;
                golfie = option.construct;
                oscard = michal.Boolean;
                report = new Array(0);
                michal = function() {
                    entity = undefined;
                    return entity;
                };
                michal = golfie.bind(option)(oscard, report, michal);
                michal = zuuluu.bind(tangon)(michal);
                michal = !michal;
                var _closure2_slot0 = michal;
 70: // try_end0
                _fun00006_ip = 74; continue _fun00005;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                michal = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot27 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot27 = entity;
        entity = function() { // Original name: destroyStreamRTCConnections
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 15;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.forEach;
            zuuluu = _closure1_slot24;
            michal = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.destroy;
                    tangon = zuuluu.isOwner;
                    entity = 'receiver-disconnect';
                    if(!tangon) { _fun00008_ip = 30; continue _fun00007 }
 24:
                    entity = 'sender-disconnect';
 30:
                    entity = michal.bind(zuuluu)(entity);
                    michal = _closure1_slot24;
                    entity = argBar;
                    entity = delete michal[entity];
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        var _closure1_slot28 = entity;
        entity = function(argFoo) { // Original name: updateStats
            report = argFoo;
            var _closure2_slot0 = report;
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 15;
            tangon = tangon[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(tangon);
            oscard = golfie.forEach;
            tangon = _closure1_slot24;
            zuuluu = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.updateStats;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            tangon = report.filter;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure1_slot17;
                entity = entity.STREAM;
                entity = michal === entity;
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                entity = argFoo;
                report = entity.stats;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'STREAM_STATS_UPDATE';
                michal['type'] = oscard;
                michal['stats'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
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
                zuuluu = argFoo;
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00010_ip = 246; continue _fun00009 }
 12:
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 20;
                entity = michal[entity];
                michal = undefined;
                entity = report.bind(michal)(entity);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun00010_ip = 162; continue _fun00009 }
 46:
                entity = global;
                report = entity.platform;
                golfie = tangon == report;
                oscard = undefined;
                if(golfie) { _fun00010_ip = 68; continue _fun00009 }
 63:
                oscard = report.name;
 68:
                report = 'Chrome';
                if(!(report !== oscard)) { _fun00010_ip = 162; continue _fun00009 }
 78:
                report = entity.platform;
                golfie = tangon == report;
                oscard = undefined;
                if(golfie) { _fun00010_ip = 98; continue _fun00009 }
 93:
                oscard = report.name;
 98:
                report = 'Firefox';
                if(!(report !== oscard)) { _fun00010_ip = 144; continue _fun00009 }
 108:
                entity = entity.platform;
                tangon = tangon == entity;
                michal = undefined;
                if(tangon) { _fun00010_ip = 128; continue _fun00009 }
 123:
                michal = entity.name;
 128:
                entity = 'Safari';
                if(!(entity === michal)) { _fun00010_ip = 222; continue _fun00009 }
 138:
                entity = 'window';
                return entity;
 144:
                entity = 'screen';
                michal = '';
                if(!(michal !== zuuluu)) { _fun00010_ip = 160; continue _fun00009 }
 156:
                entity = 'window';
 160:
                return entity;
 162:
                michal = zuuluu.startsWith;
                entity = 'web-contents-media-stream:';
                entity = michal.bind(zuuluu)(entity);
                if(entity) { _fun00010_ip = 240; continue _fun00009 }
 182:
                michal = zuuluu.startsWith;
                entity = 'window:';
                entity = michal.bind(zuuluu)(entity);
                if(entity) { _fun00010_ip = 234; continue _fun00009 }
 202:
                michal = zuuluu.startsWith;
                entity = 'screen:';
                entity = michal.bind(zuuluu)(entity);
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
        option = entity.Object;
        tangon = option.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = tangon.bind(option)(zuuluu, entity, michal);
        entity = 0;
        michal = oscard[entity];
        entity = undefined;
        michal = golfie.bind(entity)(michal);
        var _closure1_slot5 = michal;
        michal = 1;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot6 = michal;
        michal = 2;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot7 = michal;
        michal = 3;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot8 = michal;
        michal = 4;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot9 = michal;
        michal = 5;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot10 = michal;
        michal = 6;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot11 = michal;
        michal = 7;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot12 = michal;
        michal = 8;
        michal = oscard[michal];
        tangon = golfie.bind(entity)(michal);
        var _closure1_slot13 = tangon;
        michal = 9;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot14 = michal;
        michal = 10;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot15 = michal;
        michal = 11;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        option = michal.RTCConnectionQuality;
        var _closure1_slot16 = option;
        michal = michal.StreamLayouts;
        option = 12;
        option = oscard[option];
        option = report.bind(entity)(option);
        option = option.MediaEngineContextTypes;
        var _closure1_slot17 = option;
        option = {};
        var _closure1_slot18 = option;
        option = {};
        var _closure1_slot19 = option;
        option = {};
        var _closure1_slot20 = option;
        option = {};
        var _closure1_slot21 = option;
        option = {};
        var _closure1_slot22 = option;
        michal = michal.PORTRAIT;
        var _closure1_slot23 = michal;
        michal = {};
        var _closure1_slot24 = michal;
        michal = new Array(0);
        var _closure1_slot25 = michal;
        michal = 22;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        option = michal.Store;
        michal = function(argFoo) {
            tangon = function() { // Original name: StreamRTCConnectionStore
                report = this;
                tangon = undefined;
                entity = undefined;
                oscard = _closure1_slot5;
                zuuluu = _closure2_slot0;
                oscard = oscard.bind(tangon)(report, zuuluu);
                michal = _closure1_slot26;
                entity = arguments;
                entity = michal.bind(tangon)(report, zuuluu, entity);
                return entity;
            };
            var _closure2_slot0 = tangon;
            report = _closure1_slot9;
            zuuluu = undefined;
            michal = argFoo;
            michal = report.bind(zuuluu)(tangon, michal);
            michal = _closure1_slot6;
            report = {};
            entity = 'getActiveStreamKey';
            report['key'] = entity;
            entity = function() { // Original name: value
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 21;
                    entity = tangon[entity];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(entity);
                    entity = _closure1_slot13;
                    zuuluu = zuuluu.bind(tangon)(entity);
                    entity = null;
                    if(!zuuluu) { _fun00012_ip = 43; continue _fun00011 }
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
            golfie = 'getRTCConnections';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot24;
                return entity;
            };
            report['value'] = golfie;
            entity[1] = report;
            report = {};
            golfie = 'getAllActiveStreamKeys';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.keys;
                entity = _closure1_slot24;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report['value'] = golfie;
            entity[2] = report;
            report = {};
            golfie = 'getRTCConnection';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                michal = _closure1_slot24;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            report['value'] = golfie;
            entity[3] = report;
            report = {};
            golfie = 'getStatsHistory';
            report['key'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    golfie = argBar;
                    tangon = argBaz;
                    var _closure3_slot0 = golfie;
                    var _closure3_slot1 = tangon;
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 21;
                    entity = oscard[entity];
                    oscard = undefined;
                    report = report.bind(oscard)(entity);
                    entity = _closure1_slot13;
                    report = report.bind(oscard)(entity);
                    entity = null;
                    if(report) { _fun00014_ip = 57; continue _fun00013 }
 55:
                    return entity;
 57:
                    if(!(entity != golfie)) { _fun00014_ip = 138; continue _fun00013 }
 61:
                    if(!tangon) { _fun00014_ip = 113; continue _fun00013 }
 64:
                    oscard = _closure1_slot11;
                    report = oscard.getActiveStreamForUser;
                    tangon = argFoo;
                    oscard = report.bind(oscard)(golfie, tangon);
                    if(!(entity != oscard)) { _fun00014_ip = 136; continue _fun00013 }
 87:
                    report = _closure1_slot11;
                    tangon = report.getViewerIds;
                    tangon = tangon.bind(report)(oscard);
                    report = tangon.length;
                    tangon = 0;
                    if(!(tangon !== report)) { _fun00014_ip = 134; continue _fun00013 }
 113:
                    tangon = _closure1_slot25;
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = _closure3_slot1;
                            if(tangon) { _fun00016_ip = 49; continue _fun00015 }
 15:
                            tangon = zuuluu.rtp;
                            tangon = tangon.inbound;
                            entity = _closure3_slot0;
                            report = tangon[entity];
                            tangon = function(argFoo) { // Original name: extractSpectatorVideoStats
                                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                    tangon = argFoo;
                                    entity = null;
                                    if(!(entity != tangon)) { _fun00018_ip = 205; continue _fun00017 }
 12:
                                    zuuluu = tangon.find;
                                    michal = function(argFoo) {
                                        entity = argFoo;
                                        michal = entity.type;
                                        entity = 'video';
                                        entity = entity === michal;
                                        return entity;
                                    };
                                    report = zuuluu.bind(tangon)(michal);
                                    zuuluu = entity != report;
                                    michal = null;
                                    if(!zuuluu) { _fun00018_ip = 203; continue _fun00017 }
 41:
                                    tangon = report.type;
                                    zuuluu = 'video';
                                    michal = null;
                                    if(!(zuuluu === tangon)) { _fun00018_ip = 203; continue _fun00017 }
 59:
                                    zuuluu = {};
                                    tangon = 'spectator';
                                    zuuluu['type'] = tangon;
                                    golfie = report.packetsReceived;
                                    option = entity != golfie;
                                    oscard = 0;
                                    if(!option) { _fun00018_ip = 89; continue _fun00017 }
 86:
                                    oscard = golfie;
 89:
                                    zuuluu['packetsSentOrReceived'] = oscard;
                                    golfie = report.packetsLost;
                                    option = entity != golfie;
                                    oscard = 0;
                                    if(!option) { _fun00018_ip = 112; continue _fun00017 }
 109:
                                    oscard = golfie;
 112:
                                    zuuluu['packetsLost'] = oscard;
                                    golfie = report.frameRateDecode;
                                    option = entity != golfie;
                                    oscard = 0;
                                    if(!option) { _fun00018_ip = 135; continue _fun00017 }
 132:
                                    oscard = golfie;
 135:
                                    zuuluu['frameRate'] = oscard;
                                    golfie = report.bitrate;
                                    option = entity != golfie;
                                    oscard = 0;
                                    if(!option) { _fun00018_ip = 158; continue _fun00017 }
 155:
                                    oscard = golfie;
 158:
                                    zuuluu['bitrate'] = oscard;
                                    oscard = report.resolution;
                                    golfie = entity == oscard;
                                    report = undefined;
                                    if(golfie) { _fun00018_ip = 183; continue _fun00017 }
 178:
                                    report = oscard.height;
 183:
                                    oscard = entity != report;
                                    tangon = 0;
                                    if(!oscard) { _fun00018_ip = 195; continue _fun00017 }
 192:
                                    tangon = report;
 195:
                                    zuuluu['resolution'] = tangon;
                                    michal = zuuluu;
 203:
                                    return michal;
 205:
                                    return entity;
                                }
                            };
                            entity = undefined;
                            entity = tangon.bind(entity)(report);
                            _fun00016_ip = 73; continue _fun00015;
 49:
                            zuuluu = zuuluu.rtp;
                            tangon = zuuluu.outbound;
                            zuuluu = function(argFoo) { // Original name: extractStreamerVideoStats
                                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                    zuuluu = argFoo;
                                    michal = zuuluu.find;
                                    entity = function(argFoo) {
                                        entity = argFoo;
                                        michal = entity.type;
                                        entity = 'video';
                                        entity = entity === michal;
                                        return entity;
                                    };
                                    report = michal.bind(zuuluu)(entity);
                                    tangon = null;
                                    michal = tangon != report;
                                    entity = null;
                                    if(!michal) { _fun00020_ip = 180; continue _fun00019 }
 34:
                                    zuuluu = report.type;
                                    michal = 'video';
                                    entity = null;
                                    if(!(michal === zuuluu)) { _fun00020_ip = 180; continue _fun00019 }
 52:
                                    michal = {};
                                    zuuluu = 'streamer';
                                    michal['type'] = zuuluu;
                                    golfie = report.packetsSent;
                                    option = tangon != golfie;
                                    zuuluu = 0;
                                    oscard = 0;
                                    if(!option) { _fun00020_ip = 84; continue _fun00019 }
 81:
                                    oscard = golfie;
 84:
                                    michal['packetsSentOrReceived'] = oscard;
                                    golfie = report.packetsLost;
                                    option = tangon != golfie;
                                    oscard = 0;
                                    if(!option) { _fun00020_ip = 107; continue _fun00019 }
 104:
                                    oscard = golfie;
 107:
                                    michal['packetsLost'] = oscard;
                                    golfie = report.frameRateEncode;
                                    option = tangon != golfie;
                                    oscard = 0;
                                    if(!option) { _fun00020_ip = 130; continue _fun00019 }
 127:
                                    oscard = golfie;
 130:
                                    michal['frameRate'] = oscard;
                                    oscard = report.resolution;
                                    golfie = tangon == oscard;
                                    report = undefined;
                                    if(golfie) { _fun00020_ip = 155; continue _fun00019 }
 150:
                                    report = oscard.height;
 155:
                                    oscard = tangon != report;
                                    tangon = 0;
                                    if(!oscard) { _fun00020_ip = 167; continue _fun00019 }
 164:
                                    tangon = report;
 167:
                                    michal['resolution'] = tangon;
                                    michal['bitrate'] = zuuluu;
                                    entity = michal;
 180:
                                    return entity;
                                }
                            };
                            michal = undefined;
                            entity = zuuluu.bind(michal)(tangon);
 73:
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return michal;
 134:
                    return entity;
 136:
                    return entity;
 138:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[4] = report;
            report = {};
            golfie = 'getQuality';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = this;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 21;
                    michal = report[michal];
                    report = undefined;
                    tangon = tangon.bind(report)(michal);
                    michal = _closure1_slot13;
                    michal = tangon.bind(report)(michal);
                    if(michal) { _fun00022_ip = 52; continue _fun00021 }
 40:
                    michal = _closure1_slot16;
                    michal = michal.UNKNOWN;
                    return michal;
 52:
                    michal = zuuluu.getActiveStreamKey;
                    report = michal.bind(zuuluu)();
                    zuuluu = null;
                    tangon = zuuluu != report;
                    michal = null;
                    if(!tangon) { _fun00022_ip = 81; continue _fun00021 }
 73:
                    tangon = _closure1_slot24;
                    michal = tangon[report];
 81:
                    if(!(zuuluu == michal)) { _fun00022_ip = 97; continue _fun00021 }
 85:
                    entity = _closure1_slot16;
                    entity = entity.UNKNOWN;
                    _fun00022_ip = 103; continue _fun00021;
 97:
                    entity = michal.quality;
 103:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[5] = report;
            report = {};
            golfie = 'getMediaSessionId';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00024_ip = 53; continue _fun00023 }
 9:
                    michal = _closure1_slot24;
                    report = michal[zuuluu];
                    zuuluu = entity != report;
                    michal = undefined;
                    if(!zuuluu) { _fun00024_ip = 51; continue _fun00023 }
 29:
                    tangon = entity != report;
                    zuuluu = null;
                    if(!tangon) { _fun00024_ip = 48; continue _fun00023 }
 38:
                    tangon = report.getMediaSessionId;
                    zuuluu = tangon.bind(report)();
 48:
                    michal = zuuluu;
 51:
                    return michal;
 53:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[6] = report;
            report = {};
            golfie = 'getRtcConnectionId';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00026_ip = 53; continue _fun00025 }
 9:
                    michal = _closure1_slot24;
                    report = michal[zuuluu];
                    zuuluu = entity != report;
                    michal = undefined;
                    if(!zuuluu) { _fun00026_ip = 51; continue _fun00025 }
 29:
                    tangon = entity != report;
                    zuuluu = null;
                    if(!tangon) { _fun00026_ip = 48; continue _fun00025 }
 38:
                    tangon = report.getRTCConnectionId;
                    zuuluu = tangon.bind(report)();
 48:
                    michal = zuuluu;
 51:
                    return michal;
 53:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[7] = report;
            report = {};
            golfie = 'getVideoStats';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00028_ip = 41; continue _fun00027 }
 9:
                    michal = _closure1_slot24;
                    tangon = michal[zuuluu];
                    zuuluu = entity != tangon;
                    michal = null;
                    if(!zuuluu) { _fun00028_ip = 39; continue _fun00027 }
 29:
                    zuuluu = tangon.getVideoStats;
                    michal = zuuluu.bind(tangon)();
 39:
                    return michal;
 41:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[8] = report;
            report = {};
            golfie = 'getHostname';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    michal = argFoo;
                    report = null;
                    if(!(report != michal)) { _fun00030_ip = 58; continue _fun00029 }
 9:
                    entity = _closure1_slot24;
                    michal = entity[michal];
                    zuuluu = report != michal;
                    tangon = '';
                    entity = tangon;
                    if(!zuuluu) { _fun00030_ip = 56; continue _fun00029 }
 34:
                    zuuluu = michal.hostname;
                    zuuluu = report != zuuluu;
                    entity = tangon;
                    if(!zuuluu) { _fun00030_ip = 56; continue _fun00029 }
 50:
                    entity = michal.hostname;
 56:
                    return entity;
 58:
                    entity = '';
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[9] = report;
            report = {};
            golfie = 'getRegion';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00032_ip = 41; continue _fun00031 }
 9:
                    michal = _closure1_slot24;
                    tangon = michal[zuuluu];
                    zuuluu = entity != tangon;
                    michal = null;
                    if(!zuuluu) { _fun00032_ip = 39; continue _fun00031 }
 29:
                    zuuluu = tangon.getRegion;
                    michal = zuuluu.bind(tangon)();
 39:
                    return michal;
 41:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[10] = report;
            report = {};
            golfie = 'getMaxViewers';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00034_ip = 41; continue _fun00033 }
 9:
                    michal = _closure1_slot24;
                    tangon = michal[zuuluu];
                    zuuluu = entity != tangon;
                    michal = null;
                    if(!zuuluu) { _fun00034_ip = 39; continue _fun00033 }
 29:
                    zuuluu = tangon.getMaxViewers;
                    michal = zuuluu.bind(tangon)();
 39:
                    return michal;
 41:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[11] = report;
            report = {};
            golfie = 'getStreamSourceId';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                michal = _closure1_slot21;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            report['value'] = golfie;
            entity[12] = report;
            report = {};
            golfie = 'getUserIds';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    michal = _closure1_slot24;
                    entity = argFoo;
                    zuuluu = michal[entity];
                    entity = null;
                    michal = entity == zuuluu;
                    entity = undefined;
                    if(michal) { _fun00036_ip = 35; continue _fun00035 }
 25:
                    michal = zuuluu.getUserIds;
                    entity = michal.bind(zuuluu)();
 35:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[13] = report;
            report = {};
            golfie = 'isUserConnected';
            report['key'] = golfie;
            golfie = function(argFoo, argBar) { // Original name: value
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    michal = _closure1_slot24;
                    entity = argFoo;
                    tangon = michal[entity];
                    entity = null;
                    michal = entity == tangon;
                    entity = undefined;
                    if(michal) { _fun00038_ip = 39; continue _fun00037 }
 25:
                    zuuluu = tangon.getIsUserConnected;
                    michal = argBar;
                    entity = zuuluu.bind(tangon)(michal);
 39:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[14] = report;
            report = {};
            golfie = 'getSecureFramesState';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    michal = _closure1_slot24;
                    entity = argFoo;
                    zuuluu = michal[entity];
                    entity = null;
                    michal = entity == zuuluu;
                    entity = undefined;
                    if(michal) { _fun00040_ip = 35; continue _fun00039 }
 25:
                    michal = zuuluu.getSecureFramesState;
                    entity = michal.bind(zuuluu)();
 35:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[15] = report;
            report = {};
            golfie = 'getSecureFramesRosterMapEntry';
            report['key'] = golfie;
            oscard = function(argFoo, argBar) { // Original name: value
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    michal = _closure1_slot24;
                    entity = argFoo;
                    report = michal[entity];
                    michal = null;
                    zuuluu = michal == report;
                    tangon = undefined;
                    if(zuuluu) { _fun00042_ip = 35; continue _fun00041 }
 25:
                    zuuluu = report.getSecureFramesRosterMap;
                    tangon = zuuluu.bind(report)();
 35:
                    michal = michal == tangon;
                    entity = undefined;
                    if(michal) { _fun00042_ip = 57; continue _fun00041 }
 44:
                    zuuluu = tangon.get;
                    michal = argBar;
                    entity = zuuluu.bind(tangon)(michal);
 57:
                    return entity;
                }
            };
            report['value'] = oscard;
            entity[16] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        option = michal.bind(entity)(option);
        michal = 'StreamRTCConnectionStore';
        option['displayName'] = michal;
        michal = 16;
        michal = oscard[michal];
        golfie = golfie.bind(entity)(michal);
        michal = tangon.isSupported;
        michal = michal.bind(tangon)();
        if(michal) { _fun00002_ip = 461; continue _fun00001 }
 454:
        michal = {};
        _fun00002_ip = 622; continue _fun00001;
 461:
        tangon = {};
        yankee = function(argFoo) { // Original name: handleConnectionOpen
            entity = argFoo;
            michal = entity.sessionId;
            var _closure1_slot3 = michal;
            michal = null;
            var _closure1_slot4 = michal;
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon['CONNECTION_OPEN'] = yankee;
        yankee = function() { // Original name: handleConnectionClosed
            michal = null;
            _closure1_slot3 = michal;
            _closure1_slot4 = michal;
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon['CONNECTION_CLOSED'] = yankee;
        tangon['RTC_CONNECTION_STATE'] = offset;
        tangon['RTC_CONNECTION_PING'] = offset;
        tangon['RTC_CONNECTION_LOSS_RATE'] = offset;
        yankee = function(argFoo) { // Original name: handleRtcConnectionUpdateId
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 15;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.some;
            michal = _closure1_slot24;
            entity = function(argFoo) {
                entity = _closure2_slot0;
                michal = entity.connection;
                entity = argFoo;
                entity = entity === michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        tangon['RTC_CONNECTION_UPDATE_ID'] = yankee;
        tangon['RTC_CONNECTION_SECURE_FRAMES_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamStart
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                entity = argFoo;
                backup = entity.streamType;
                foxtra = entity.guildId;
                romeon = entity.channelId;
                verify = entity.appContext;
                var _closure2_slot0 = verify;
                option = entity.pid;
                oscard = entity.sourceId;
                michal = entity.nativePickerStyleUsed;
                var _closure2_slot1 = michal;
                tangon = entity.goLiveModalDurationMs;
                golfie = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 17;
                zuuluu = offset[entity];
                entity = undefined;
                yankee = golfie.bind(entity)(zuuluu);
                golfie = yankee.encodeStreamKey;
                zuuluu = {};
                zuuluu['streamType'] = backup;
                zuuluu['guildId'] = foxtra;
                zuuluu['channelId'] = romeon;
                foxtra = _closure1_slot12;
                romeon = foxtra.getId;
                romeon = romeon.bind(foxtra)();
                zuuluu['ownerId'] = romeon;
                zuuluu = golfie.bind(yankee)(zuuluu);
                golfie = _closure1_slot18;
                golfie[zuuluu] = verify;
                verify = _closure1_slot1;
                golfie = 15;
                golfie = offset[golfie];
                offset = verify.bind(entity)(golfie);
                verify = offset.forEach;
                golfie = _closure1_slot24;
                report = function(argFoo) {
                    _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                        entity = argFoo;
                        michal = entity.analyticsContext;
                        entity = entity.isOwner;
                        report = michal.setActionContext;
                        tangon = _closure2_slot0;
                        tangon = report.bind(michal)(tangon);
                        tangon = michal.setNativePickerStyleUsed;
                        zuuluu = _closure2_slot1;
                        zuuluu = tangon.bind(michal)(zuuluu);
                        if(!entity) { _fun00046_ip = 65; continue _fun00045 }
 53:
                        entity = michal.trackStart;
                        entity = entity.bind(michal)();
 65:
                        entity = undefined;
                        return entity;
                    }
                };
                report = verify.bind(offset)(golfie, report);
                report = _closure1_slot21;
                report[zuuluu] = oscard;
                report = _closure1_slot20;
                report[zuuluu] = option;
                report = null;
                if(!(report != option)) { _fun00044_ip = 264; continue _fun00043 }
 195:
                golfie = _closure1_slot10;
                oscard = golfie.getGameForPID;
                option = oscard.bind(golfie)(option);
                if(!(report != option)) { _fun00044_ip = 264; continue _fun00043 }
 214:
                golfie = _closure1_slot19;
                oscard = {};
                verify = option.name;
                oscard['name'] = verify;
                verify = option.id;
                oscard['id'] = verify;
                verify = option.exeName;
                oscard['exe'] = verify;
                option = option.distributor;
                oscard['distributor'] = option;
                golfie[zuuluu] = oscard;
 264:
                if(!(report == tangon)) { _fun00044_ip = 278; continue _fun00043 }
 268:
                report = _closure1_slot22;
                report = delete report[zuuluu];
                _fun00044_ip = 286; continue _fun00043;
 278:
                michal = _closure1_slot22;
                michal[zuuluu] = tangon;
 286:
                return entity;
            }
        };
        tangon['STREAM_START'] = offset;
        offset = function(argFoo) { // Original name: handleStreamStop
            entity = argFoo;
            report = entity.appContext;
            var _closure2_slot0 = report;
            zuuluu = entity.streamKey;
            entity = _closure1_slot18;
            entity[zuuluu] = report;
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            entity = 15;
            report = report[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(report);
            oscard = golfie.forEach;
            report = _closure1_slot24;
            tangon = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    michal = entity.analyticsContext;
                    entity = entity.isOwner;
                    tangon = michal.setActionContext;
                    zuuluu = _closure2_slot0;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    if(!entity) { _fun00048_ip = 48; continue _fun00047 }
 36:
                    entity = michal.trackEnd;
                    entity = entity.bind(michal)();
 48:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(report, tangon);
            tangon = _closure1_slot21;
            report = null;
            tangon[zuuluu] = report;
            tangon = _closure1_slot20;
            tangon[zuuluu] = report;
            michal = _closure1_slot22;
            michal = delete michal[zuuluu];
            return entity;
        };
        tangon['STREAM_STOP'] = offset;
        offset = function(argFoo) { // Original name: handleStreamCreate
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                entity = argFoo;
                tangon = entity.streamKey;
                golfie = entity.rtcServerId;
                zuuluu = entity.region;
                offset = entity.viewerIds;
                _closure1_slot4 = tangon;
                entity = _closure1_slot24;
                entity = entity[tangon];
                oscard = null;
                if(!(oscard == entity)) { _fun00050_ip = 472; continue _fun00049 }
 51:
                if(!(oscard != golfie)) { _fun00050_ip = 472; continue _fun00049 }
 58:
                entity = _closure1_slot20;
                entity = entity[tangon];
                if(!(oscard == entity)) { _fun00050_ip = 78; continue _fun00049 }
 70:
                entity = _closure1_slot19;
                entity[tangon] = oscard;
 78:
                report = _closure1_slot0;
                option = _closure1_slot2;
                entity = 17;
                entity = option[entity];
                option = undefined;
                report = report.bind(option)(entity);
                entity = report.decodeStreamKey;
                romeon = entity.bind(report)(tangon);
                entity = _closure1_slot19;
                entity = entity[tangon];
                entity = oscard == entity;
                if(!entity) { _fun00050_ip = 138; continue _fun00049 }
 126:
                report = _closure1_slot21;
                report = report[tangon];
                entity = oscard == report;
 138:
                if(!entity) { _fun00050_ip = 185; continue _fun00049 }
 141:
                report = _closure1_slot19;
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                entity = 18;
                entity = yankee[entity];
                yankee = verify.bind(option)(entity);
                verify = yankee.getStreamerApplication;
                entity = _closure1_slot14;
                entity = verify.bind(yankee)(romeon, entity);
                report[tangon] = entity;
 185:
                report = _closure1_slot0;
                entity = _closure1_slot2;
                verify = 14;
                entity = entity[verify];
                entity = report.bind(option)(entity);
                report = entity.StreamRTCAnalyticsContext;
                entity = {};
                entity['streamRegion'] = zuuluu;
                zuuluu = _closure1_slot19;
                zuuluu = zuuluu[tangon];
                entity['streamApplication'] = zuuluu;
                yankee = _closure1_slot30;
                zuuluu = _closure1_slot21;
                zuuluu = zuuluu[tangon];
                zuuluu = yankee.bind(option)(zuuluu);
                entity['streamSourceType'] = zuuluu;
                zuuluu = _closure1_slot18;
                zuuluu = zuuluu[tangon];
                entity['actionContext'] = zuuluu;
                yankee = oscard != offset;
                zuuluu = 0;
                if(!yankee) { _fun00050_ip = 280; continue _fun00049 }
 275:
                zuuluu = offset.length;
 280:
                entity['numViewers'] = zuuluu;
                zuuluu = _closure1_slot22;
                zuuluu = zuuluu[tangon];
                entity['goLiveModalDurationMs'] = zuuluu;
                zuuluu = report.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                kiloes = zuuluu;
                backup = entity;
                entity = new kiloes[report](backup, foxtra);
                zuuluu = entity instanceof Object ? entity : zuuluu;
                report = _closure1_slot1;
                entity = _closure1_slot2;
                offset = 13;
                offset = entity[offset];
                romeon = report.bind(option)(offset);
                offset = _closure1_slot3;
                yankee = oscard != offset;
                offset = 'Creating RTCConnection without session.';
                offset = romeon.bind(option)(yankee, offset);
                entity = entity[verify];
                report = report.bind(option)(entity);
                entity = {};
                option = _closure1_slot3;
                entity['sessionId'] = option;
                entity['streamKey'] = tangon;
                entity['serverId'] = golfie;
                golfie = _closure1_slot23;
                entity['initialLayout'] = golfie;
                entity['analyticsContext'] = zuuluu;
                zuuluu = _closure1_slot19;
                zuuluu = zuuluu[tangon];
                zuuluu = oscard != zuuluu;
                entity['isStreamer'] = zuuluu;
                oscard = _closure1_slot15;
                zuuluu = oscard.getMediaSessionId;
                zuuluu = zuuluu.bind(oscard)();
                entity['parentMediaSessionId'] = zuuluu;
                zuuluu = report.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                kiloes = zuuluu;
                backup = entity;
                entity = new kiloes[report](backup, foxtra);
                zuuluu = entity instanceof Object ? entity : zuuluu;
                entity = _closure1_slot24;
                entity[tangon] = zuuluu;
 472:
                entity = new Array(0);
                _closure1_slot25 = entity;
                zuuluu = _closure1_slot13;
                entity = zuuluu.getMediaEngine;
                report = entity.bind(zuuluu)();
                tangon = report.on;
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 19;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = oscard.bind(entity)(zuuluu);
                zuuluu = zuuluu.MediaEngineEvent;
                zuuluu = zuuluu.ConnectionStats;
                michal = _closure1_slot29;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        tangon['STREAM_CREATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamServerUpdate
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                entity = argFoo;
                zuuluu = _closure1_slot24;
                michal = entity.streamKey;
                tangon = zuuluu[michal];
                michal = null;
                if(!(michal != tangon)) { _fun00052_ip = 54; continue _fun00051 }
 26:
                zuuluu = tangon.connect;
                michal = entity.endpoint;
                entity = entity.token;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
 54:
                entity = false;
                return entity;
            }
        };
        tangon['STREAM_SERVER_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamUpdate
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                michal = argFoo;
                tangon = michal.streamKey;
                entity = michal.viewerIds;
                zuuluu = michal.paused;
                michal = _closure1_slot24;
                michal = michal[tangon];
                tangon = null;
                if(!(tangon != michal)) { _fun00054_ip = 83; continue _fun00053 }
 38:
                if(!(tangon != entity)) { _fun00054_ip = 66; continue _fun00053 }
 42:
                report = michal.analyticsContext;
                tangon = report.trackViewerCount;
                entity = entity.length;
                entity = tangon.bind(report)(entity);
 66:
                entity = michal.streamUpdate;
                entity = entity.bind(michal)(zuuluu);
                entity = undefined;
                return entity;
 83:
                entity = false;
                return entity;
            }
        };
        tangon['STREAM_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamDelete
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                entity = argFoo;
                michal = entity.streamKey;
                zuuluu = _closure1_slot24;
                report = zuuluu[michal];
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00056_ip = 131; continue _fun00055 }
 26:
                tangon = _closure1_slot4;
                if(!(michal === tangon)) { _fun00056_ip = 102; continue _fun00055 }
 34:
                _closure1_slot4 = zuuluu;
                tangon = _closure1_slot13;
                zuuluu = tangon.getMediaEngine;
                golfie = zuuluu.bind(tangon)();
                oscard = golfie.off;
                option = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 19;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = option.bind(zuuluu)(tangon);
                zuuluu = zuuluu.MediaEngineEvent;
                tangon = zuuluu.ConnectionStats;
                zuuluu = _closure1_slot29;
                zuuluu = oscard.bind(golfie)(tangon, zuuluu);
 102:
                tangon = report.destroy;
                zuuluu = 'stream-end';
                zuuluu = tangon.bind(report)(zuuluu);
                entity = _closure1_slot24;
                entity = delete entity[michal];
                entity = undefined;
                return entity;
 131:
                entity = false;
                return entity;
            }
        };
        tangon['STREAM_DELETE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamStatsUpdate
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                entity = argFoo;
                tangon = entity.stats;
                entity = null;
                if(!(entity != tangon)) { _fun00058_ip = 66; continue _fun00057 }
 15:
                zuuluu = _closure1_slot25;
                michal = zuuluu.push;
                michal = michal.bind(zuuluu)(tangon);
                michal = _closure1_slot25;
                zuuluu = michal.length;
                michal = 30;
                if(!(zuuluu > michal)) { _fun00058_ip = 62; continue _fun00057 }
 48:
                michal = _closure1_slot25;
                entity = michal.shift;
                entity = entity.bind(michal)();
 62:
                entity = undefined;
                return entity;
 66:
                entity = false;
                return entity;
            }
        };
        tangon['STREAM_STATS_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleLayoutUpdate
            michal = argFoo;
            zuuluu = michal.layout;
            var _closure2_slot0 = zuuluu;
            _closure1_slot23 = zuuluu;
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.values;
            michal = _closure1_slot24;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.layoutChange;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        tangon['STREAM_LAYOUT_UPDATE'] = offset;
        offset = function(argFoo) { // Original name: handleSimulcastDebugOverrideChanged
            entity = argFoo;
            zuuluu = entity.userId;
            var _closure2_slot0 = zuuluu;
            zuuluu = entity.context;
            var _closure2_slot1 = zuuluu;
            entity = entity.quality;
            var _closure2_slot2 = entity;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 15;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            zuuluu = _closure1_slot24;
            michal = function(argFoo) {
                report = argFoo;
                tangon = report.setSimulcastDebugOverride;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity = _closure2_slot2;
                entity = tangon.bind(report)(zuuluu, michal, entity);
                entity = undefined;
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        tangon['RTC_DEBUG_SET_SIMULCAST_OVERRIDE'] = offset;
        verify = function(argFoo) { // Original name: handleVideoSizeUpdate
            entity = argFoo;
            zuuluu = entity.streamId;
            var _closure2_slot0 = zuuluu;
            zuuluu = entity.width;
            var _closure2_slot1 = zuuluu;
            entity = entity.height;
            var _closure2_slot2 = entity;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 15;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            zuuluu = _closure1_slot24;
            michal = function(argFoo) {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    report = argFoo;
                    entity = null;
                    if(!(entity != report)) { _fun00060_ip = 37; continue _fun00059 }
 9:
                    tangon = report.setVideoSize;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    entity = _closure2_slot2;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 37:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        tangon['VIDEO_SIZE_UPDATE'] = verify;
        michal = tangon;
 622:
        tangon = option.prototype;
        tangon = Object.create(tangon, {constructor: {value: option}});
        kiloes = tangon;
        backup = golfie;
        foxtra = michal;
        michal = new kiloes[option](backup, foxtra, romeon);
        michal = michal instanceof Object ? michal : tangon;
        tangon = 23;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'stores/StreamRTCConnectionStore.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();