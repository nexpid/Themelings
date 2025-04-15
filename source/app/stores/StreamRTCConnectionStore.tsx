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
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                michal = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot23 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot23 = entity;
        entity = function() { // Original name: destroyStreamRTCConnections
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 13;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.forEach;
            zuuluu = _closure1_slot22;
            michal = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.destroy;
                    tangon = zuuluu.isOwner;
                    entity = 'receiver-disconnect';
                    if(!tangon) { _fun00006_ip = 30; continue _fun00005 }
 24:
                    entity = 'sender-disconnect';
 30:
                    entity = michal.bind(zuuluu)(entity);
                    michal = _closure1_slot22;
                    entity = argBar;
                    entity = delete michal[entity];
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        var _closure1_slot24 = entity;
        offset = function() { // Original name: handleRtcAction
            entity = true;
            return entity;
        };
        entity = function(argFoo) { // Original name: parseSourceType
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00008_ip = 246; continue _fun00007 }
 12:
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                entity = michal[entity];
                michal = undefined;
                entity = report.bind(michal)(entity);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun00008_ip = 162; continue _fun00007 }
 46:
                entity = global;
                report = entity.platform;
                golfie = tangon == report;
                oscard = undefined;
                if(golfie) { _fun00008_ip = 68; continue _fun00007 }
 63:
                oscard = report.name;
 68:
                report = 'Chrome';
                if(!(report !== oscard)) { _fun00008_ip = 162; continue _fun00007 }
 78:
                report = entity.platform;
                golfie = tangon == report;
                oscard = undefined;
                if(golfie) { _fun00008_ip = 98; continue _fun00007 }
 93:
                oscard = report.name;
 98:
                report = 'Firefox';
                if(!(report !== oscard)) { _fun00008_ip = 144; continue _fun00007 }
 108:
                entity = entity.platform;
                tangon = tangon == entity;
                michal = undefined;
                if(tangon) { _fun00008_ip = 128; continue _fun00007 }
 123:
                michal = entity.name;
 128:
                entity = 'Safari';
                if(!(entity === michal)) { _fun00008_ip = 222; continue _fun00007 }
 138:
                entity = 'window';
                return entity;
 144:
                entity = 'screen';
                michal = '';
                if(!(michal !== zuuluu)) { _fun00008_ip = 160; continue _fun00007 }
 156:
                entity = 'window';
 160:
                return entity;
 162:
                michal = zuuluu.startsWith;
                entity = 'web-contents-media-stream:';
                entity = michal.bind(zuuluu)(entity);
                if(entity) { _fun00008_ip = 240; continue _fun00007 }
 182:
                michal = zuuluu.startsWith;
                entity = 'window:';
                entity = michal.bind(zuuluu)(entity);
                if(entity) { _fun00008_ip = 234; continue _fun00007 }
 202:
                michal = zuuluu.startsWith;
                entity = 'screen:';
                entity = michal.bind(zuuluu)(entity);
                if(entity) { _fun00008_ip = 228; continue _fun00007 }
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
        var _closure1_slot25 = entity;
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
        tangon = golfie.bind(entity)(michal);
        var _closure1_slot12 = tangon;
        michal = 8;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot13 = michal;
        michal = 9;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot14 = michal;
        michal = 10;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        option = michal.RTCConnectionQuality;
        var _closure1_slot15 = option;
        michal = michal.StreamLayouts;
        option = {};
        var _closure1_slot16 = option;
        option = {};
        var _closure1_slot17 = option;
        option = {};
        var _closure1_slot18 = option;
        option = {};
        var _closure1_slot19 = option;
        option = {};
        var _closure1_slot20 = option;
        michal = michal.PORTRAIT;
        var _closure1_slot21 = michal;
        michal = {};
        var _closure1_slot22 = michal;
        michal = 19;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        option = michal.Store;
        michal = function(argFoo) {
            tangon = function() { // Original name: StreamRTCConnectionStore
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = this;
                    zuuluu = undefined;
                    report = undefined;
                    entity = _closure1_slot5;
                    michal = _closure2_slot0;
                    entity = entity.bind(zuuluu)(tangon, michal);
                    entity = _closure1_slot8;
                    verify = entity.bind(zuuluu)(michal);
                    michal = _closure1_slot7;
                    entity = _closure1_slot23;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                    golfie = verify.apply;
                    report = arguments;
                    entity = report;
                    entity = golfie.bind(verify)(tangon, entity);
                    _fun00010_ip = 105; continue _fun00009;
 69:
                    golfie = global;
                    option = golfie.Reflect;
                    golfie = option.construct;
                    oscard = _closure1_slot8;
                    oscard = oscard.bind(zuuluu)(tangon);
                    oscard = oscard.constructor;
                    report = arguments;
                    entity = golfie.bind(option)(verify, report, oscard);
 105:
                    entity = michal.bind(zuuluu)(tangon, entity);
                    return entity;
                }
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
                    entity = 18;
                    entity = tangon[entity];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(entity);
                    entity = _closure1_slot12;
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
            entity = new Array(16);
            entity[0] = report;
            report = {};
            golfie = 'getRTCConnections';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot22;
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
                entity = _closure1_slot22;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report['value'] = golfie;
            entity[2] = report;
            report = {};
            golfie = 'getRTCConnection';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                michal = _closure1_slot22;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            report['value'] = golfie;
            entity[3] = report;
            report = {};
            golfie = 'getQuality';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = this;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 18;
                    michal = report[michal];
                    report = undefined;
                    tangon = tangon.bind(report)(michal);
                    michal = _closure1_slot12;
                    michal = tangon.bind(report)(michal);
                    if(michal) { _fun00014_ip = 52; continue _fun00013 }
 40:
                    michal = _closure1_slot15;
                    michal = michal.UNKNOWN;
                    return michal;
 52:
                    michal = zuuluu.getActiveStreamKey;
                    report = michal.bind(zuuluu)();
                    zuuluu = null;
                    tangon = zuuluu != report;
                    michal = null;
                    if(!tangon) { _fun00014_ip = 81; continue _fun00013 }
 73:
                    tangon = _closure1_slot22;
                    michal = tangon[report];
 81:
                    if(!(zuuluu == michal)) { _fun00014_ip = 97; continue _fun00013 }
 85:
                    entity = _closure1_slot15;
                    entity = entity.UNKNOWN;
                    _fun00014_ip = 103; continue _fun00013;
 97:
                    entity = michal.quality;
 103:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[4] = report;
            report = {};
            golfie = 'getMediaSessionId';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00016_ip = 53; continue _fun00015 }
 9:
                    michal = _closure1_slot22;
                    report = michal[zuuluu];
                    zuuluu = entity != report;
                    michal = undefined;
                    if(!zuuluu) { _fun00016_ip = 51; continue _fun00015 }
 29:
                    tangon = entity != report;
                    zuuluu = null;
                    if(!tangon) { _fun00016_ip = 48; continue _fun00015 }
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
            entity[5] = report;
            report = {};
            golfie = 'getRtcConnectionId';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00018_ip = 53; continue _fun00017 }
 9:
                    michal = _closure1_slot22;
                    report = michal[zuuluu];
                    zuuluu = entity != report;
                    michal = undefined;
                    if(!zuuluu) { _fun00018_ip = 51; continue _fun00017 }
 29:
                    tangon = entity != report;
                    zuuluu = null;
                    if(!tangon) { _fun00018_ip = 48; continue _fun00017 }
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
            entity[6] = report;
            report = {};
            golfie = 'getVideoStats';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00020_ip = 41; continue _fun00019 }
 9:
                    michal = _closure1_slot22;
                    tangon = michal[zuuluu];
                    zuuluu = entity != tangon;
                    michal = null;
                    if(!zuuluu) { _fun00020_ip = 39; continue _fun00019 }
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
            entity[7] = report;
            report = {};
            golfie = 'getHostname';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = argFoo;
                    report = null;
                    if(!(report != michal)) { _fun00022_ip = 58; continue _fun00021 }
 9:
                    entity = _closure1_slot22;
                    michal = entity[michal];
                    zuuluu = report != michal;
                    tangon = '';
                    entity = tangon;
                    if(!zuuluu) { _fun00022_ip = 56; continue _fun00021 }
 34:
                    zuuluu = michal.hostname;
                    zuuluu = report != zuuluu;
                    entity = tangon;
                    if(!zuuluu) { _fun00022_ip = 56; continue _fun00021 }
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
            entity[8] = report;
            report = {};
            golfie = 'getRegion';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00024_ip = 41; continue _fun00023 }
 9:
                    michal = _closure1_slot22;
                    tangon = michal[zuuluu];
                    zuuluu = entity != tangon;
                    michal = null;
                    if(!zuuluu) { _fun00024_ip = 39; continue _fun00023 }
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
            entity[9] = report;
            report = {};
            golfie = 'getMaxViewers';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00026_ip = 41; continue _fun00025 }
 9:
                    michal = _closure1_slot22;
                    tangon = michal[zuuluu];
                    zuuluu = entity != tangon;
                    michal = null;
                    if(!zuuluu) { _fun00026_ip = 39; continue _fun00025 }
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
            entity[10] = report;
            report = {};
            golfie = 'getStreamSourceId';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                michal = _closure1_slot19;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            report['value'] = golfie;
            entity[11] = report;
            report = {};
            golfie = 'getUserIds';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = _closure1_slot22;
                    entity = argFoo;
                    zuuluu = michal[entity];
                    entity = null;
                    michal = entity == zuuluu;
                    entity = undefined;
                    if(michal) { _fun00028_ip = 35; continue _fun00027 }
 25:
                    michal = zuuluu.getUserIds;
                    entity = michal.bind(zuuluu)();
 35:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[12] = report;
            report = {};
            golfie = 'isUserConnected';
            report['key'] = golfie;
            golfie = function(argFoo, argBar) { // Original name: value
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    michal = _closure1_slot22;
                    entity = argFoo;
                    tangon = michal[entity];
                    entity = null;
                    michal = entity == tangon;
                    entity = undefined;
                    if(michal) { _fun00030_ip = 39; continue _fun00029 }
 25:
                    zuuluu = tangon.getIsUserConnected;
                    michal = argBar;
                    entity = zuuluu.bind(tangon)(michal);
 39:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[13] = report;
            report = {};
            golfie = 'getSecureFramesState';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    michal = _closure1_slot22;
                    entity = argFoo;
                    zuuluu = michal[entity];
                    entity = null;
                    michal = entity == zuuluu;
                    entity = undefined;
                    if(michal) { _fun00032_ip = 35; continue _fun00031 }
 25:
                    michal = zuuluu.getSecureFramesState;
                    entity = michal.bind(zuuluu)();
 35:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[14] = report;
            report = {};
            golfie = 'getSecureFramesRosterMapEntry';
            report['key'] = golfie;
            oscard = function(argFoo, argBar) { // Original name: value
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    michal = _closure1_slot22;
                    entity = argFoo;
                    report = michal[entity];
                    michal = null;
                    zuuluu = michal == report;
                    tangon = undefined;
                    if(zuuluu) { _fun00034_ip = 35; continue _fun00033 }
 25:
                    zuuluu = report.getSecureFramesRosterMap;
                    tangon = zuuluu.bind(report)();
 35:
                    michal = michal == tangon;
                    entity = undefined;
                    if(michal) { _fun00034_ip = 57; continue _fun00033 }
 44:
                    zuuluu = tangon.get;
                    michal = argBar;
                    entity = zuuluu.bind(tangon)(michal);
 57:
                    return entity;
                }
            };
            report['value'] = oscard;
            entity[15] = report;
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
        if(michal) { _fun00002_ip = 397; continue _fun00001 }
 390:
        michal = {};
        _fun00002_ip = 556; continue _fun00001;
 397:
        tangon = {};
        yankee = function(argFoo) { // Original name: handleConnectionOpen
            entity = argFoo;
            michal = entity.sessionId;
            var _closure1_slot3 = michal;
            michal = null;
            var _closure1_slot4 = michal;
            michal = _closure1_slot24;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon['CONNECTION_OPEN'] = yankee;
        yankee = function() { // Original name: handleConnectionClosed
            michal = null;
            _closure1_slot3 = michal;
            _closure1_slot4 = michal;
            michal = _closure1_slot24;
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
            zuuluu = 13;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.some;
            michal = _closure1_slot22;
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
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
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
                entity = 14;
                zuuluu = offset[entity];
                entity = undefined;
                yankee = golfie.bind(entity)(zuuluu);
                golfie = yankee.encodeStreamKey;
                zuuluu = {};
                zuuluu['streamType'] = backup;
                zuuluu['guildId'] = foxtra;
                zuuluu['channelId'] = romeon;
                foxtra = _closure1_slot11;
                romeon = foxtra.getId;
                romeon = romeon.bind(foxtra)();
                zuuluu['ownerId'] = romeon;
                zuuluu = golfie.bind(yankee)(zuuluu);
                golfie = _closure1_slot16;
                golfie[zuuluu] = verify;
                verify = _closure1_slot1;
                golfie = 13;
                golfie = offset[golfie];
                offset = verify.bind(entity)(golfie);
                verify = offset.forEach;
                golfie = _closure1_slot22;
                report = function(argFoo) {
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
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
                        if(!entity) { _fun00038_ip = 65; continue _fun00037 }
 53:
                        entity = michal.trackStart;
                        entity = entity.bind(michal)();
 65:
                        entity = undefined;
                        return entity;
                    }
                };
                report = verify.bind(offset)(golfie, report);
                report = _closure1_slot19;
                report[zuuluu] = oscard;
                report = _closure1_slot18;
                report[zuuluu] = option;
                report = null;
                if(!(report != option)) { _fun00036_ip = 264; continue _fun00035 }
 195:
                golfie = _closure1_slot10;
                oscard = golfie.getGameForPID;
                option = oscard.bind(golfie)(option);
                if(!(report != option)) { _fun00036_ip = 264; continue _fun00035 }
 214:
                golfie = _closure1_slot17;
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
                if(!(report == tangon)) { _fun00036_ip = 278; continue _fun00035 }
 268:
                report = _closure1_slot20;
                report = delete report[zuuluu];
                _fun00036_ip = 286; continue _fun00035;
 278:
                michal = _closure1_slot20;
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
            entity = _closure1_slot16;
            entity[zuuluu] = report;
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            entity = 13;
            report = report[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(report);
            oscard = golfie.forEach;
            report = _closure1_slot22;
            tangon = function(argFoo) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = argFoo;
                    michal = entity.analyticsContext;
                    entity = entity.isOwner;
                    tangon = michal.setActionContext;
                    zuuluu = _closure2_slot0;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    if(!entity) { _fun00040_ip = 48; continue _fun00039 }
 36:
                    entity = michal.trackEnd;
                    entity = entity.bind(michal)();
 48:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(report, tangon);
            tangon = _closure1_slot19;
            report = null;
            tangon[zuuluu] = report;
            tangon = _closure1_slot18;
            tangon[zuuluu] = report;
            michal = _closure1_slot20;
            michal = delete michal[zuuluu];
            return entity;
        };
        tangon['STREAM_STOP'] = offset;
        offset = function(argFoo) { // Original name: handleStreamCreate
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                entity = argFoo;
                tangon = entity.streamKey;
                option = entity.rtcServerId;
                zuuluu = entity.region;
                yankee = entity.viewerIds;
                _closure1_slot4 = tangon;
                michal = _closure1_slot22;
                michal = michal[tangon];
                golfie = null;
                oscard = michal;
                if(!(golfie == michal)) { _fun00042_ip = 481; continue _fun00041 }
 54:
                oscard = michal;
                if(!(golfie != option)) { _fun00042_ip = 481; continue _fun00041 }
 64:
                michal = _closure1_slot18;
                michal = michal[tangon];
                if(!(golfie == michal)) { _fun00042_ip = 84; continue _fun00041 }
 76:
                michal = _closure1_slot17;
                michal[tangon] = golfie;
 84:
                report = _closure1_slot0;
                verify = _closure1_slot2;
                michal = 14;
                michal = verify[michal];
                verify = undefined;
                report = report.bind(verify)(michal);
                michal = report.decodeStreamKey;
                foxtra = michal.bind(report)(tangon);
                michal = _closure1_slot17;
                michal = michal[tangon];
                michal = golfie == michal;
                if(!michal) { _fun00042_ip = 144; continue _fun00041 }
 132:
                report = _closure1_slot19;
                report = report[tangon];
                michal = golfie == report;
 144:
                if(!michal) { _fun00042_ip = 191; continue _fun00041 }
 147:
                report = _closure1_slot17;
                offset = _closure1_slot0;
                romeon = _closure1_slot2;
                michal = 15;
                michal = romeon[michal];
                romeon = offset.bind(verify)(michal);
                offset = romeon.getStreamerApplication;
                michal = _closure1_slot13;
                michal = offset.bind(romeon)(foxtra, michal);
                report[tangon] = michal;
 191:
                report = _closure1_slot0;
                michal = _closure1_slot2;
                offset = 12;
                michal = michal[offset];
                michal = report.bind(verify)(michal);
                report = michal.StreamRTCAnalyticsContext;
                michal = {};
                michal['streamRegion'] = zuuluu;
                zuuluu = _closure1_slot17;
                zuuluu = zuuluu[tangon];
                michal['streamApplication'] = zuuluu;
                romeon = _closure1_slot25;
                zuuluu = _closure1_slot19;
                zuuluu = zuuluu[tangon];
                zuuluu = romeon.bind(verify)(zuuluu);
                michal['streamSourceType'] = zuuluu;
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu[tangon];
                michal['actionContext'] = zuuluu;
                romeon = golfie != yankee;
                zuuluu = 0;
                if(!romeon) { _fun00042_ip = 286; continue _fun00041 }
 281:
                zuuluu = yankee.length;
 286:
                michal['numViewers'] = zuuluu;
                zuuluu = _closure1_slot20;
                zuuluu = zuuluu[tangon];
                michal['goLiveModalDurationMs'] = zuuluu;
                zuuluu = report.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                sizing = zuuluu;
                kiloes = michal;
                michal = new sizing[report](kiloes, backup);
                zuuluu = michal instanceof Object ? michal : zuuluu;
                report = _closure1_slot1;
                michal = _closure1_slot2;
                yankee = 11;
                yankee = michal[yankee];
                foxtra = report.bind(verify)(yankee);
                yankee = _closure1_slot3;
                romeon = golfie != yankee;
                yankee = 'Creating RTCConnection without session.';
                yankee = foxtra.bind(verify)(romeon, yankee);
                michal = michal[offset];
                report = report.bind(verify)(michal);
                michal = {};
                verify = _closure1_slot3;
                michal['sessionId'] = verify;
                michal['streamKey'] = tangon;
                michal['serverId'] = option;
                option = _closure1_slot21;
                michal['initialLayout'] = option;
                michal['analyticsContext'] = zuuluu;
                zuuluu = _closure1_slot17;
                zuuluu = zuuluu[tangon];
                zuuluu = golfie != zuuluu;
                michal['isStreamer'] = zuuluu;
                golfie = _closure1_slot14;
                zuuluu = golfie.getMediaSessionId;
                zuuluu = zuuluu.bind(golfie)();
                michal['parentMediaSessionId'] = zuuluu;
                zuuluu = report.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                sizing = zuuluu;
                kiloes = michal;
                michal = new sizing[report](kiloes, backup);
                michal = michal instanceof Object ? michal : zuuluu;
                zuuluu = _closure1_slot22;
                zuuluu[tangon] = michal;
                oscard = michal;
 481:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
                michal['type'] = report;
                report = oscard.getMediaEngineConnectionId;
                report = report.bind(oscard)();
                michal['mediaEngineConnectionId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        tangon['STREAM_CREATE'] = offset;
        offset = function(argFoo) { // Original name: handleStreamServerUpdate
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                entity = argFoo;
                zuuluu = _closure1_slot22;
                michal = entity.streamKey;
                tangon = zuuluu[michal];
                michal = null;
                if(!(michal != tangon)) { _fun00044_ip = 54; continue _fun00043 }
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
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                michal = argFoo;
                tangon = michal.streamKey;
                entity = michal.viewerIds;
                zuuluu = michal.paused;
                michal = _closure1_slot22;
                michal = michal[tangon];
                tangon = null;
                if(!(tangon != michal)) { _fun00046_ip = 83; continue _fun00045 }
 38:
                if(!(tangon != entity)) { _fun00046_ip = 66; continue _fun00045 }
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
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.streamKey;
                entity = _closure1_slot22;
                oscard = entity[zuuluu];
                entity = null;
                if(!(entity != oscard)) { _fun00048_ip = 124; continue _fun00047 }
 26:
                tangon = _closure1_slot4;
                if(!(zuuluu === tangon)) { _fun00048_ip = 38; continue _fun00047 }
 34:
                _closure1_slot4 = entity;
 38:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 16;
                tangon = tangon[entity];
                entity = undefined;
                golfie = report.bind(entity)(tangon);
                report = golfie.dispatch;
                tangon = {};
                option = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
                tangon['type'] = option;
                option = oscard.getMediaEngineConnectionId;
                option = option.bind(oscard)();
                tangon['mediaEngineConnectionId'] = option;
                tangon = report.bind(golfie)(tangon);
                report = oscard.destroy;
                tangon = 'stream-end';
                tangon = report.bind(oscard)(tangon);
                michal = _closure1_slot22;
                michal = delete michal[zuuluu];
                return entity;
 124:
                entity = false;
                return entity;
            }
        };
        tangon['STREAM_DELETE'] = offset;
        offset = function(argFoo) { // Original name: handleMediaEngineConnectionStats
            entity = argFoo;
            entity = entity.connectionStats;
            var _closure2_slot0 = entity;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 13;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            zuuluu = _closure1_slot22;
            michal = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.updateStats;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        tangon['MEDIA_ENGINE_CONNECTION_STATS'] = offset;
        offset = function(argFoo) { // Original name: handleLayoutUpdate
            michal = argFoo;
            zuuluu = michal.layout;
            var _closure2_slot0 = zuuluu;
            _closure1_slot21 = zuuluu;
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.values;
            michal = _closure1_slot22;
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
            entity = 13;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            zuuluu = _closure1_slot22;
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
            entity = 13;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            zuuluu = _closure1_slot22;
            michal = function(argFoo) {
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    report = argFoo;
                    entity = null;
                    if(!(entity != report)) { _fun00050_ip = 37; continue _fun00049 }
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
 556:
        tangon = option.prototype;
        tangon = Object.create(tangon, {constructor: {value: option}});
        kiloes = tangon;
        backup = golfie;
        foxtra = michal;
        michal = new kiloes[option](backup, foxtra, romeon);
        michal = michal instanceof Object ? michal : tangon;
        tangon = 20;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'stores/StreamRTCConnectionStore.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();