// app/stores/RTCConnectionStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = option;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot26 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar) { // Original name: createRTCConnection
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argBar;
            entity = _closure1_slot17;
            michal = null;
            if(!(michal != entity)) { _fun00004_ip = 609; continue _fun00003 }
 21:
            report = _closure1_slot10;
            entity = report.getId;
            report = entity.bind(report)();
            offset = _closure1_slot0;
            option = _closure1_slot2;
            entity = 11;
            entity = option[entity];
            oscard = undefined;
            entity = offset.bind(oscard)(entity);
            verify = entity.default;
            entity = {};
            entity['userId'] = report;
            report = _closure1_slot17;
            entity['sessionId'] = report;
            report = argFoo;
            entity['guildId'] = report;
            entity['channelId'] = golfie;
            report = verify.prototype;
            report = Object.create(report, {constructor: {value: verify}});
            kiloes = report;
            backup = entity;
            entity = new kiloes[verify](backup, foxtra);
            entity = entity instanceof Object ? entity : report;
            var _closure2_slot0 = entity;
            romeon = entity.on;
            report = 12;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.State;
            verify = function(argFoo, argBar, argBaz) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = argBaz;
                var _closure3_slot2 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    tangon = 'RTC_CONNECTION_STATE';
                    entity['type'] = tangon;
                    report = _closure3_slot0;
                    entity['state'] = report;
                    oscard = _closure3_slot1;
                    golfie = entity;
                    report = copyDataProperties(golfie, oscard);
                    oscard = _closure3_slot2;
                    golfie = entity;
                    tangon = copyDataProperties(golfie, oscard);
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Video;
            verify = function(argFoo, argBar, argBaz, argCor, argGra) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = argBaz;
                var _closure3_slot2 = entity;
                entity = argCor;
                var _closure3_slot3 = entity;
                entity = argGra;
                var _closure3_slot4 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    report = 'RTC_CONNECTION_VIDEO';
                    entity['type'] = report;
                    oscard = _closure3_slot0;
                    entity['guildId'] = oscard;
                    oscard = _closure3_slot1;
                    entity['channelId'] = oscard;
                    oscard = _closure3_slot2;
                    entity['userId'] = oscard;
                    oscard = _closure3_slot3;
                    entity['streamId'] = oscard;
                    report = _closure3_slot4;
                    entity['rtcServerId'] = report;
                    tangon = _closure1_slot15;
                    tangon = tangon.DEFAULT;
                    entity['context'] = tangon;
                    report = _closure2_slot0;
                    tangon = report.getMediaEngineConnectionId;
                    tangon = tangon.bind(report)();
                    entity['mediaEngineConnectionId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Ping;
            verify = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    tangon = 'RTC_CONNECTION_PING';
                    entity['type'] = tangon;
                    report = _closure3_slot0;
                    entity['pings'] = report;
                    tangon = _closure3_slot1;
                    entity['quality'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.OutboundLossRate;
            verify = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    tangon = 'RTC_CONNECTION_LOSS_RATE';
                    entity['type'] = tangon;
                    tangon = _closure3_slot0;
                    entity['lossRate'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Speaking;
            verify = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot21;
                    entity = null;
                    if(!(entity != tangon)) { _fun00006_ip = 31; continue _fun00005 }
 13:
                    zuuluu = tangon.setSpeaking;
                    michal = argFoo;
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(michal, entity);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Flags;
            verify = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'RTC_CONNECTION_FLAGS';
                    michal['type'] = report;
                    oscard = _closure3_slot1;
                    michal['flags'] = oscard;
                    report = _closure3_slot0;
                    michal['userId'] = report;
                    oscard = _closure2_slot0;
                    oscard = oscard.guildId;
                    michal['guildId'] = oscard;
                    oscard = _closure2_slot0;
                    oscard = oscard.channelId;
                    michal['channelId'] = oscard;
                    report = _closure2_slot0;
                    report = report.context;
                    michal['context'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.ClientConnect;
            verify = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'RTC_CONNECTION_CLIENT_CONNECT';
                    michal['type'] = report;
                    report = _closure3_slot0;
                    michal['userIds'] = report;
                    oscard = _closure2_slot0;
                    oscard = oscard.guildId;
                    michal['guildId'] = oscard;
                    oscard = _closure2_slot0;
                    oscard = oscard.channelId;
                    michal['channelId'] = oscard;
                    report = _closure2_slot0;
                    report = report.context;
                    michal['context'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.ClientDisconnect;
            verify = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'RTC_CONNECTION_CLIENT_DISCONNECT';
                    michal['type'] = report;
                    report = _closure3_slot0;
                    michal['userId'] = report;
                    oscard = _closure2_slot0;
                    oscard = oscard.guildId;
                    michal['guildId'] = oscard;
                    oscard = _closure2_slot0;
                    oscard = oscard.channelId;
                    michal['channelId'] = oscard;
                    report = _closure2_slot0;
                    report = report.context;
                    michal['context'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Platform;
            verify = function(argFoo, argBar, argBaz) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = argBaz;
                var _closure3_slot2 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'RTC_CONNECTION_PLATFORM';
                    michal['type'] = report;
                    oscard = _closure3_slot1;
                    michal['platform'] = oscard;
                    oscard = _closure3_slot0;
                    michal['userId'] = oscard;
                    report = _closure3_slot2;
                    michal['channelId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            romeon = entity.on;
            verify = option[report];
            verify = offset.bind(oscard)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.SecureFramesUpdate;
            verify = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'RTC_CONNECTION_SECURE_FRAMES_UPDATE';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = romeon.bind(entity)(yankee, verify);
            verify = entity.on;
            report = option[report];
            report = offset.bind(oscard)(report);
            report = report.RTCConnectionEvent;
            report = report.RosterMapUpdate;
            tangon = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.wait;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'RTC_CONNECTION_ROSTER_MAP_UPDATE';
                    michal['type'] = report;
                    report = _closure3_slot0;
                    michal['userIds'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            tangon = verify.bind(entity)(report, tangon);
            report = _closure1_slot1;
            tangon = 14;
            tangon = option[tangon];
            oscard = report.bind(oscard)(tangon);
            report = _closure1_slot10;
            tangon = report.getId;
            backup = tangon.bind(report)();
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            kiloes = report;
            foxtra = golfie;
            tangon = new kiloes[oscard](backup, foxtra, romeon);
            tangon = tangon instanceof Object ? tangon : report;
            _closure1_slot21 = tangon;
            _closure1_slot22 = michal;
            michal = false;
            _closure1_slot23 = michal;
            _closure1_slot24 = michal;
            return entity;
 609:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            backup = 'Creating RTCConnection without session.';
            kiloes = michal;
            entity = new kiloes[zuuluu](backup, foxtra);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: destroyRTCConnection
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot16;
            michal = null;
            if(!(michal != entity)) { _fun00008_ip = 118; continue _fun00007 }
 13:
            tangon = _closure1_slot16;
            entity = tangon.getDuration;
            entity = entity.bind(tangon)();
            _closure1_slot22 = entity;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 13;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.dispatch;
            tangon = {};
            golfie = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
            tangon['type'] = golfie;
            option = _closure1_slot16;
            golfie = option.getMediaEngineConnectionId;
            golfie = golfie.bind(option)();
            tangon['mediaEngineConnectionId'] = golfie;
            tangon = report.bind(oscard)(tangon);
            report = _closure1_slot16;
            tangon = report.destroy;
            tangon = tangon.bind(report)();
            var _closure1_slot16 = michal;
            _closure1_slot21 = michal;
            return entity;
 118:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    romeon = function() { // Original name: handleClearRemoteDisconnectVoiceChannelId
        entity = null;
        _closure1_slot19 = entity;
        entity = undefined;
        return entity;
    };
    verify = function(argFoo) { // Original name: handleChannelDelete
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            tangon = _closure1_slot16;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00010_ip = 51; continue _fun00009 }
 21:
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.channelId;
            michal = michal.id;
            if(!(zuuluu === michal)) { _fun00010_ip = 51; continue _fun00009 }
 39:
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 51:
            entity = false;
            return entity;
        }
    };
    foxtra = function() { // Original name: handleRtcAction
        entity = true;
        return entity;
    };
    tangon = function(argFoo) { // Original name: extractSenderVideoStats
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
            if(!michal) { _fun00012_ip = 178; continue _fun00011 }
 34:
            zuuluu = report.type;
            michal = 'video';
            entity = null;
            if(!(michal === zuuluu)) { _fun00012_ip = 178; continue _fun00011 }
 52:
            michal = {};
            zuuluu = 'sender';
            michal['type'] = zuuluu;
            golfie = report.packetsSent;
            option = tangon != golfie;
            zuuluu = 0;
            oscard = 0;
            if(!option) { _fun00012_ip = 82; continue _fun00011 }
 79:
            oscard = golfie;
 82:
            michal['packetsSentOrReceived'] = oscard;
            golfie = report.packetsLost;
            option = tangon != golfie;
            oscard = 0;
            if(!option) { _fun00012_ip = 105; continue _fun00011 }
 102:
            oscard = golfie;
 105:
            michal['packetsLost'] = oscard;
            golfie = report.frameRateEncode;
            option = tangon != golfie;
            oscard = 0;
            if(!option) { _fun00012_ip = 128; continue _fun00011 }
 125:
            oscard = golfie;
 128:
            michal['frameRate'] = oscard;
            oscard = report.resolution;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00012_ip = 153; continue _fun00011 }
 148:
            report = oscard.height;
 153:
            oscard = tangon != report;
            tangon = 0;
            if(!oscard) { _fun00012_ip = 165; continue _fun00011 }
 162:
            tangon = report;
 165:
            michal['resolution'] = tangon;
            michal['bitrate'] = zuuluu;
            entity = michal;
 178:
            return entity;
        }
    };
    var _closure1_slot29 = tangon;
    michal = function(argFoo) { // Original name: extractReceiverVideoStats
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00014_ip = 203; continue _fun00013 }
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
            if(!zuuluu) { _fun00014_ip = 201; continue _fun00013 }
 41:
            tangon = report.type;
            zuuluu = 'video';
            michal = null;
            if(!(zuuluu === tangon)) { _fun00014_ip = 201; continue _fun00013 }
 59:
            zuuluu = {};
            tangon = 'receiver';
            zuuluu['type'] = tangon;
            golfie = report.packetsReceived;
            option = entity != golfie;
            oscard = 0;
            if(!option) { _fun00014_ip = 87; continue _fun00013 }
 84:
            oscard = golfie;
 87:
            zuuluu['packetsSentOrReceived'] = oscard;
            golfie = report.packetsLost;
            option = entity != golfie;
            oscard = 0;
            if(!option) { _fun00014_ip = 110; continue _fun00013 }
 107:
            oscard = golfie;
 110:
            zuuluu['packetsLost'] = oscard;
            golfie = report.frameRateDecode;
            option = entity != golfie;
            oscard = 0;
            if(!option) { _fun00014_ip = 133; continue _fun00013 }
 130:
            oscard = golfie;
 133:
            zuuluu['frameRate'] = oscard;
            golfie = report.bitrate;
            option = entity != golfie;
            oscard = 0;
            if(!option) { _fun00014_ip = 156; continue _fun00013 }
 153:
            oscard = golfie;
 156:
            zuuluu['bitrate'] = oscard;
            oscard = report.resolution;
            golfie = entity == oscard;
            report = undefined;
            if(golfie) { _fun00014_ip = 181; continue _fun00013 }
 176:
            report = oscard.height;
 181:
            oscard = entity != report;
            tangon = 0;
            if(!oscard) { _fun00014_ip = 193; continue _fun00013 }
 190:
            tangon = report;
 193:
            zuuluu['resolution'] = tangon;
            michal = zuuluu;
 201:
            return michal;
 203:
            return entity;
        }
    };
    var _closure1_slot30 = michal;
    entity = global;
    backup = entity.Object;
    yankee = backup.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(backup)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = offset.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 9;
    report = option[report];
    report = golfie.bind(entity)(report);
    yankee = report.RTCConnectionStates;
    var _closure1_slot12 = yankee;
    yankee = report.AppStates;
    var _closure1_slot13 = yankee;
    report = report.RTCConnectionQuality;
    var _closure1_slot14 = report;
    report = 10;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.MediaEngineContextTypes;
    var _closure1_slot15 = report;
    report = new Array(0);
    var _closure1_slot18 = report;
    report = null;
    var _closure1_slot19 = report;
    var _closure1_slot20 = report;
    var _closure1_slot21 = report;
    var _closure1_slot22 = report;
    report = false;
    var _closure1_slot23 = report;
    var _closure1_slot24 = report;
    report = 16;
    report = option[report];
    report = offset.bind(entity)(report);
    yankee = report.Store;
    report = function(argFoo) {
        tangon = function() { // Original name: RTCConnectionStore
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot26;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00016_ip = 69; continue _fun00015 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00016_ip = 105; continue _fun00015;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
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
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = this;
            tangon = michal.waitFor;
            zuuluu = _closure1_slot11;
            zuuluu = tangon.bind(michal)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 15;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.setVideoToggleAnalyticsParams;
            zuuluu = michal.getRTCConnectionId;
            michal = michal.getMediaSessionId;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(29);
        entity[0] = report;
        report = {};
        golfie = 'getRTCConnection';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                if(!(entity == zuuluu)) { _fun00018_ip = 25; continue _fun00017 }
 13:
                entity = _closure1_slot12;
                entity = entity.DISCONNECTED;
                _fun00018_ip = 34; continue _fun00017;
 25:
                michal = _closure1_slot16;
                entity = michal.state;
 34:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isConnected';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.getState;
            michal = entity.bind(michal)();
            entity = _closure1_slot12;
            entity = entity.RTC_CONNECTED;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isDisconnected';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.getState;
            michal = entity.bind(michal)();
            entity = _closure1_slot12;
            entity = entity.DISCONNECTED;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getRemoteDisconnectVoiceChannelId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot19;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getLastSessionVoiceChannelId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'setLastSessionVoiceChannelId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            _closure1_slot20 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getGuildId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure1_slot16;
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00020_ip = 23; continue _fun00019 }
 18:
                entity = michal.guildId;
 23:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getChannelId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = _closure1_slot16;
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00022_ip = 23; continue _fun00021 }
 18:
                entity = michal.channelId;
 23:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getHostname';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                zuuluu = entity != zuuluu;
                entity = '';
                if(!zuuluu) { _fun00024_ip = 30; continue _fun00023 }
 20:
                michal = _closure1_slot16;
                entity = michal.hostname;
 30:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getQuality';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                if(!(entity == zuuluu)) { _fun00026_ip = 25; continue _fun00025 }
 13:
                entity = _closure1_slot14;
                entity = entity.UNKNOWN;
                _fun00026_ip = 35; continue _fun00025;
 25:
                michal = _closure1_slot16;
                entity = michal.quality;
 35:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getPings';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                if(!(entity == zuuluu)) { _fun00028_ip = 19; continue _fun00027 }
 13:
                entity = _closure1_slot18;
                _fun00028_ip = 33; continue _fun00027;
 19:
                zuuluu = _closure1_slot16;
                michal = zuuluu.getPings;
                entity = michal.bind(zuuluu)();
 33:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getAveragePing';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = _closure1_slot16;
                michal = null;
                tangon = michal != entity;
                entity = 0;
                if(!tangon) { _fun00030_ip = 44; continue _fun00029 }
 18:
                tangon = _closure1_slot16;
                zuuluu = michal == tangon;
                michal = undefined;
                if(zuuluu) { _fun00030_ip = 41; continue _fun00029 }
 31:
                zuuluu = tangon.getAveragePing;
                michal = zuuluu.bind(tangon)();
 41:
                entity = michal;
 44:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getLastPing';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00032_ip = 28; continue _fun00031 }
 18:
                michal = zuuluu.getLastPing;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'getOutboundLossRate';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00034_ip = 28; continue _fun00033 }
 18:
                michal = zuuluu.getOutboundLossRate;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'getMediaSessionId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00036_ip = 28; continue _fun00035 }
 18:
                michal = zuuluu.getMediaSessionId;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'getRTCConnectionId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00038_ip = 28; continue _fun00037 }
 18:
                michal = zuuluu.getRTCConnectionId;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'getDuration';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                report = _closure1_slot16;
                zuuluu = null;
                tangon = zuuluu == report;
                entity = undefined;
                if(tangon) { _fun00040_ip = 28; continue _fun00039 }
 18:
                tangon = report.getDuration;
                entity = tangon.bind(report)();
 28:
                if(!(zuuluu == entity)) { _fun00040_ip = 36; continue _fun00039 }
 32:
                entity = _closure1_slot22;
 36:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[18] = report;
        report = {};
        golfie = 'getVoiceFilterSpeakingDurationMs';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00042_ip = 28; continue _fun00041 }
 18:
                michal = zuuluu.getVoiceFilterSpeakingDurationMs;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[19] = report;
        report = {};
        golfie = 'getPacketStats';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00044_ip = 28; continue _fun00043 }
 18:
                michal = zuuluu.getPacketStats;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[20] = report;
        report = {};
        golfie = 'getVoiceStateStats';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                zuuluu = _closure1_slot21;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00046_ip = 28; continue _fun00045 }
 18:
                michal = zuuluu.getStats;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[21] = report;
        report = {};
        golfie = 'getWasEverMultiParticipant';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot23;
            return entity;
        };
        report['value'] = golfie;
        entity[22] = report;
        report = {};
        golfie = 'getWasEverRtcConnected';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot24;
            return entity;
        };
        report['value'] = golfie;
        entity[23] = report;
        report = {};
        golfie = 'getUserIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00048_ip = 28; continue _fun00047 }
 18:
                michal = zuuluu.getUserIds;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[24] = report;
        report = {};
        golfie = 'isUserConnected';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                tangon = _closure1_slot16;
                entity = null;
                michal = entity == tangon;
                entity = undefined;
                if(michal) { _fun00050_ip = 32; continue _fun00049 }
 18:
                zuuluu = tangon.getIsUserConnected;
                michal = argFoo;
                entity = zuuluu.bind(tangon)(michal);
 32:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[25] = report;
        report = {};
        golfie = 'getSecureFramesState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                zuuluu = _closure1_slot16;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00052_ip = 28; continue _fun00051 }
 18:
                michal = zuuluu.getSecureFramesState;
                entity = michal.bind(zuuluu)();
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[26] = report;
        report = {};
        golfie = 'getSecureFramesRosterMapEntry';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                report = _closure1_slot16;
                michal = null;
                zuuluu = michal == report;
                tangon = undefined;
                if(zuuluu) { _fun00054_ip = 28; continue _fun00053 }
 18:
                zuuluu = report.getSecureFramesRosterMap;
                tangon = zuuluu.bind(report)();
 28:
                michal = michal == tangon;
                entity = undefined;
                if(michal) { _fun00054_ip = 50; continue _fun00053 }
 37:
                zuuluu = tangon.get;
                michal = argFoo;
                entity = zuuluu.bind(tangon)(michal);
 50:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[27] = report;
        report = {};
        golfie = 'getStatsHistory';
        report['key'] = golfie;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                report = argBar;
                var _closure3_slot0 = report;
                entity = null;
                if(!(entity != report)) { _fun00056_ip = 102; continue _fun00055 }
 15:
                zuuluu = argFoo;
                if(!(entity != zuuluu)) { _fun00056_ip = 102; continue _fun00055 }
 22:
                oscard = _closure1_slot10;
                tangon = oscard.getId;
                tangon = tangon.bind(oscard)();
                tangon = report === tangon;
                var _closure3_slot1 = tangon;
                report = _closure1_slot9;
                tangon = report.getStatsHistory;
                golfie = _closure1_slot16;
                oscard = entity == golfie;
                zuuluu = undefined;
                if(oscard) { _fun00056_ip = 80; continue _fun00055 }
 70:
                oscard = golfie.getMediaEngineConnectionId;
                zuuluu = oscard.bind(golfie)();
 80:
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                        michal = argFoo;
                        tangon = _closure3_slot1;
                        if(tangon) { _fun00058_ip = 55; continue _fun00057 }
 16:
                        report = _closure1_slot30;
                        tangon = michal.stats;
                        tangon = tangon.rtp;
                        tangon = tangon.inbound;
                        entity = _closure3_slot0;
                        tangon = tangon[entity];
                        entity = undefined;
                        entity = report.bind(entity)(tangon);
                        _fun00058_ip = 84; continue _fun00057;
 55:
                        tangon = _closure1_slot29;
                        michal = michal.stats;
                        michal = michal.rtp;
                        zuuluu = michal.outbound;
                        michal = undefined;
                        entity = tangon.bind(michal)(zuuluu);
 84:
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return michal;
 102:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[28] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    yankee = report.bind(entity)(yankee);
    report = 'RTCConnectionStore';
    yankee['displayName'] = report;
    report = 13;
    report = option[report];
    output = offset.bind(entity)(report);
    report = {};
    backup = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        michal = entity.sessionId;
        var _closure1_slot17 = michal;
        michal = null;
        _closure1_slot19 = michal;
        _closure1_slot20 = michal;
        michal = _closure1_slot28;
        entity = undefined;
        entity = michal.bind(entity)();
        entity = false;
        return entity;
    };
    report['CONNECTION_OPEN'] = backup;
    backup = function() { // Original name: handleConnectionClosed
        michal = null;
        _closure1_slot17 = michal;
        _closure1_slot19 = michal;
        _closure1_slot20 = michal;
        michal = _closure1_slot28;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    report['CONNECTION_CLOSED'] = backup;
    backup = function(argFoo) { // Original name: handleRTCConnectionState
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.state;
            entity = _closure1_slot12;
            entity = entity.RTC_CONNECTED;
            if(!(zuuluu === entity)) { _fun00060_ip = 31; continue _fun00059 }
 25:
            entity = true;
            _closure1_slot24 = entity;
 31:
            entity = true;
            return entity;
        }
    };
    report['RTC_CONNECTION_STATE'] = backup;
    report['RTC_CONNECTION_PING'] = foxtra;
    report['RTC_CONNECTION_LOSS_RATE'] = foxtra;
    backup = function(argFoo) { // Original name: handleRtcConnectionUpdateId
        entity = argFoo;
        michal = entity.connection;
        entity = _closure1_slot16;
        entity = michal === entity;
        return entity;
    };
    report['RTC_CONNECTION_UPDATE_ID'] = backup;
    report['RTC_CONNECTION_SECURE_FRAMES_UPDATE'] = foxtra;
    report['RTC_CONNECTION_CLIENT_CONNECT'] = foxtra;
    report['RTC_CONNECTION_CLIENT_DISCONNECT'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleVideoSizeUpdate
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            report = entity.streamId;
            tangon = entity.width;
            zuuluu = entity.height;
            michal = _closure1_slot16;
            entity = null;
            if(!(entity != michal)) { _fun00062_ip = 45; continue _fun00061 }
 32:
            entity = michal.setVideoSize;
            entity = entity.bind(michal)(report, tangon, zuuluu);
 45:
            entity = undefined;
            return entity;
        }
    };
    report['VIDEO_SIZE_UPDATE'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        tangon = entity.voiceStates;
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                michal = argBar;
                golfie = _closure1_slot21;
                tangon = null;
                if(!(tangon != golfie)) { _fun00064_ip = 40; continue _fun00063 }
 16:
                oscard = golfie.updateVoiceStates;
                report = michal.userId;
                zuuluu = michal.channelId;
                zuuluu = oscard.bind(golfie)(report, zuuluu);
 40:
                zuuluu = _closure1_slot23;
                if(zuuluu) { _fun00064_ip = 95; continue _fun00063 }
 47:
                golfie = _closure1_slot21;
                oscard = tangon == golfie;
                report = undefined;
                if(oscard) { _fun00064_ip = 76; continue _fun00063 }
 60:
                oscard = golfie.getStats;
                oscard = oscard.bind(golfie)();
                report = oscard.max_voice_state_count;
 76:
                golfie = tangon != report;
                oscard = 0;
                if(!golfie) { _fun00064_ip = 88; continue _fun00063 }
 85:
                oscard = report;
 88:
                report = 1;
                zuuluu = oscard > report;
 95:
                _closure1_slot23 = zuuluu;
                report = _closure1_slot10;
                zuuluu = report.getId;
                report = zuuluu.bind(report)();
                zuuluu = michal.userId;
                if(!(report === zuuluu)) { _fun00064_ip = 596; continue _fun00063 }
 125:
                zuuluu = _closure1_slot16;
                if(!(tangon == zuuluu)) { _fun00064_ip = 250; continue _fun00063 }
 133:
                report = michal.sessionId;
                zuuluu = _closure1_slot17;
                if(!(report === zuuluu)) { _fun00064_ip = 245; continue _fun00063 }
 147:
                zuuluu = michal.channelId;
                if(!(tangon != zuuluu)) { _fun00064_ip = 245; continue _fun00063 }
 156:
                _closure1_slot19 = tangon;
                _closure1_slot20 = tangon;
                golfie = _closure1_slot27;
                oscard = michal.guildId;
                report = michal.channelId;
                zuuluu = undefined;
                report = golfie.bind(zuuluu)(oscard, report);
                _closure1_slot16 = report;
                oscard = _closure1_slot21;
                report = tangon == oscard;
                if(report) { _fun00064_ip = 217; continue _fun00063 }
 201:
                report = oscard.getStats;
                report = report.bind(oscard)();
                zuuluu = report.max_voice_state_count;
 217:
                oscard = tangon != zuuluu;
                report = 0;
                if(!oscard) { _fun00064_ip = 229; continue _fun00063 }
 226:
                report = zuuluu;
 229:
                zuuluu = 1;
                zuuluu = report > zuuluu;
                _closure1_slot23 = zuuluu;
                _fun00064_ip = 592; continue _fun00063;
 245:
                zuuluu = argFoo;
                return zuuluu;
 250:
                report = michal.sessionId;
                zuuluu = _closure1_slot17;
                if(!(report !== zuuluu)) { _fun00064_ip = 355; continue _fun00063 }
 264:
                report = michal.guildId;
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.guildId;
                if(!(report === zuuluu)) { _fun00064_ip = 592; continue _fun00063 }
 285:
                report = _closure1_slot8;
                zuuluu = report.getAwaitingRemoteSessionInfo;
                zuuluu = zuuluu.bind(report)();
                zuuluu = tangon != zuuluu;
                if(!zuuluu) { _fun00064_ip = 324; continue _fun00063 }
 306:
                oscard = _closure1_slot8;
                report = oscard.getRemoteSessionId;
                report = report.bind(oscard)();
                zuuluu = tangon != report;
 324:
                if(zuuluu) { _fun00064_ip = 340; continue _fun00063 }
 327:
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.channelId;
                _closure1_slot19 = zuuluu;
 340:
                report = _closure1_slot28;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)();
                _fun00064_ip = 592; continue _fun00063;
 355:
                zuuluu = michal.guildId;
                if(!(tangon != zuuluu)) { _fun00064_ip = 385; continue _fun00063 }
 364:
                report = michal.guildId;
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.guildId;
                if(!(report !== zuuluu)) { _fun00064_ip = 556; continue _fun00063 }
 385:
                zuuluu = michal.guildId;
                if(!(tangon == zuuluu)) { _fun00064_ip = 415; continue _fun00063 }
 394:
                report = michal.channelId;
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.channelId;
                if(!(report !== zuuluu)) { _fun00064_ip = 556; continue _fun00063 }
 415:
                report = michal.guildId;
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.guildId;
                zuuluu = report !== zuuluu;
                if(!zuuluu) { _fun00064_ip = 445; continue _fun00063 }
 436:
                report = michal.channelId;
                zuuluu = tangon == report;
 445:
                if(zuuluu) { _fun00064_ip = 458; continue _fun00063 }
 448:
                report = _closure1_slot28;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)();
 458:
                zuuluu = michal.channelId;
                if(!(tangon != zuuluu)) { _fun00064_ip = 592; continue _fun00063 }
 470:
                _closure1_slot19 = tangon;
                _closure1_slot20 = tangon;
                golfie = _closure1_slot27;
                oscard = michal.guildId;
                report = michal.channelId;
                zuuluu = undefined;
                report = golfie.bind(zuuluu)(oscard, report);
                _closure1_slot16 = report;
                oscard = _closure1_slot21;
                report = tangon == oscard;
                if(report) { _fun00064_ip = 531; continue _fun00063 }
 515:
                report = oscard.getStats;
                report = report.bind(oscard)();
                zuuluu = report.max_voice_state_count;
 531:
                oscard = tangon != zuuluu;
                report = 0;
                if(!oscard) { _fun00064_ip = 543; continue _fun00063 }
 540:
                report = zuuluu;
 543:
                zuuluu = 1;
                zuuluu = report > zuuluu;
                _closure1_slot23 = zuuluu;
                _fun00064_ip = 592; continue _fun00063;
 556:
                zuuluu = michal.channelId;
                if(!(tangon != zuuluu)) { _fun00064_ip = 582; continue _fun00063 }
 565:
                zuuluu = _closure1_slot16;
                michal = michal.channelId;
                zuuluu['channelId'] = michal;
                _fun00064_ip = 592; continue _fun00063;
 582:
                michal = _closure1_slot28;
                entity = undefined;
                entity = michal.bind(entity)();
 592:
                entity = true;
                return entity;
 596:
                entity = false;
                return entity;
            }
        };
        entity = false;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    report['VOICE_STATE_UPDATES'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleVoiceChannelSelect
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            tangon = _closure1_slot16;
            michal = null;
            if(!(michal != tangon)) { _fun00066_ip = 50; continue _fun00065 }
 21:
            if(!(michal != zuuluu)) { _fun00066_ip = 38; continue _fun00065 }
 25:
            michal = _closure1_slot16;
            michal = michal.channelId;
            if(!(michal !== zuuluu)) { _fun00066_ip = 50; continue _fun00065 }
 38:
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 50:
            entity = false;
            return entity;
        }
    };
    report['VOICE_CHANNEL_SELECT'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleVoiceServerUpdate
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot16;
            oscard = null;
            entity = oscard != entity;
            if(!entity) { _fun00068_ip = 121; continue _fun00067 }
 19:
            michal = tangon.guildId;
            michal = oscard == michal;
            if(michal) { _fun00068_ip = 49; continue _fun00067 }
 31:
            golfie = tangon.guildId;
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.guildId;
            michal = golfie === zuuluu;
 49:
            if(!michal) { _fun00068_ip = 118; continue _fun00067 }
 52:
            zuuluu = tangon.channelId;
            zuuluu = oscard == zuuluu;
            if(zuuluu) { _fun00068_ip = 82; continue _fun00067 }
 64:
            golfie = tangon.channelId;
            oscard = _closure1_slot16;
            oscard = oscard.channelId;
            zuuluu = golfie === oscard;
 82:
            if(!zuuluu) { _fun00068_ip = 115; continue _fun00067 }
 85:
            golfie = _closure1_slot16;
            oscard = golfie.connect;
            report = tangon.endpoint;
            tangon = tangon.token;
            tangon = oscard.bind(golfie)(report, tangon);
            zuuluu = undefined;
 115:
            michal = zuuluu;
 118:
            entity = michal;
 121:
            return entity;
        }
    };
    report['VOICE_SERVER_UPDATE'] = foxtra;
    report['CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID'] = romeon;
    report['REMOTE_SESSION_CONNECT'] = romeon;
    romeon = function() { // Original name: handleClearLastSessionVoiceChannelId
        entity = null;
        _closure1_slot20 = entity;
        entity = undefined;
        return entity;
    };
    report['CLEAR_LAST_SESSION_VOICE_CHANNEL_ID'] = romeon;
    romeon = function(argFoo) { // Original name: handleGuildDelete
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            entity = argFoo;
            michal = entity.guild;
            tangon = _closure1_slot16;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00070_ip = 51; continue _fun00069 }
 21:
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.guildId;
            michal = michal.id;
            if(!(zuuluu === michal)) { _fun00070_ip = 51; continue _fun00069 }
 39:
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 51:
            entity = false;
            return entity;
        }
    };
    report['GUILD_DELETE'] = romeon;
    report['CHANNEL_DELETE'] = verify;
    report['THREAD_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleCallDelete
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            tangon = _closure1_slot16;
            michal = null;
            if(!(michal != tangon)) { _fun00072_ip = 46; continue _fun00071 }
 21:
            michal = _closure1_slot16;
            michal = michal.channelId;
            if(!(michal === zuuluu)) { _fun00072_ip = 46; continue _fun00071 }
 34:
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 46:
            entity = false;
            return entity;
        }
    };
    report['CALL_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleFocus
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.state;
            michal = _closure1_slot13;
            michal = michal.ACTIVE;
            michal = zuuluu === michal;
            if(!michal) { _fun00074_ip = 38; continue _fun00073 }
 28:
            tangon = _closure1_slot16;
            zuuluu = null;
            michal = zuuluu != tangon;
 38:
            if(!michal) { _fun00074_ip = 62; continue _fun00073 }
 41:
            zuuluu = _closure1_slot16;
            michal = zuuluu.resetBackoff;
            entity = 'App state is active';
            entity = michal.bind(zuuluu)(entity);
 62:
            entity = false;
            return entity;
        }
    };
    report['APP_STATE_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleSimulcastDebugOverrideChanged
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
            entity = argFoo;
            report = entity.userId;
            tangon = entity.context;
            zuuluu = entity.quality;
            michal = _closure1_slot16;
            entity = null;
            if(!(entity != michal)) { _fun00076_ip = 45; continue _fun00075 }
 32:
            entity = michal.setSimulcastDebugOverride;
            entity = entity.bind(michal)(report, tangon, zuuluu);
 45:
            entity = undefined;
            return entity;
        }
    };
    report['RTC_DEBUG_SET_SIMULCAST_OVERRIDE'] = verify;
    verify = yankee.prototype;
    verify = Object.create(verify, {constructor: {value: yankee}});
    result = verify;
    sizing = report;
    report = new result[yankee](output, sizing, kiloes);
    report = report instanceof Object ? report : verify;
    var _closure1_slot25 = report;
    verify = 18;
    verify = option[verify];
    yankee = golfie.bind(entity)(verify);
    verify = 17;
    offset = option[verify];
    verify = option.paths;
    offset = yankee.bind(entity)(offset, verify);
    verify = offset.then;
    oscard = function(argFoo) {
        entity = argFoo;
        zuuluu = entity.addExtraAnalyticsDecorator;
        entity = undefined;
        michal = function(argFoo) {
            michal = _closure1_slot25;
            entity = michal.getState;
            michal = entity.bind(michal)();
            entity = argFoo;
            entity['client_rtc_state'] = michal;
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    oscard = verify.bind(offset)(oscard);
    oscard = 19;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'stores/RTCConnectionStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['extractSenderVideoStats'] = tangon;
    zuuluu['extractReceiverVideoStats'] = michal;
    return entity;
})();