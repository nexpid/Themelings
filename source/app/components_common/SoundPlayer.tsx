// app/components_common/SoundPlayer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: useSound
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot2;
        michal = zuuluu.useEffect;
        entity = function() {
            zuuluu = _closure2_slot1;
            report = undefined;
            zuuluu = zuuluu.bind(report)();
            var _closure3_slot0 = zuuluu;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 17;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.BatchedStoreListener;
            option = _closure2_slot0;
            michal = report.prototype;
            zuuluu = Object.create(michal, {constructor: {value: report}});
            golfie = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = undefined;
                    zuuluu = michal.bind(entity)();
                    report = _closure2_slot2;
                    tangon = _closure3_slot0;
                    golfie = report.bind(entity)(tangon, zuuluu);
                    verify = null;
                    tangon = verify == golfie;
                    if(tangon) { _fun00002_ip = 57; continue _fun00001 }
 39:
                    oscard = _closure1_slot12;
                    report = oscard.isSoundDisabled;
                    tangon = report.bind(oscard)(golfie);
 57:
                    if(tangon) { _fun00002_ip = 120; continue _fun00001 }
 60:
                    report = _closure1_slot0;
                    oscard = _closure1_slot1;
                    tangon = 18;
                    tangon = oscard[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.playSound;
                    tangon = _closure2_slot3;
                    verify = verify != tangon;
                    tangon = 0.4;
                    if(!verify) { _fun00002_ip = 114; continue _fun00001 }
 110:
                    tangon = _closure2_slot3;
 114:
                    tangon = report.bind(oscard)(golfie, tangon);
 120:
                    _closure3_slot0 = zuuluu;
                    return entity;
                }
            };
            verify = zuuluu;
            michal = new verify[report](option, golfie, oscard);
            tangon = michal instanceof Object ? michal : zuuluu;
            var _closure3_slot1 = tangon;
            zuuluu = tangon.attach;
            michal = 'useSound';
            michal = zuuluu.bind(tangon)(michal);
            entity = function() {
                michal = _closure3_slot1;
                entity = michal.detach;
                entity = entity.bind(michal)();
                return entity;
            };
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: MuteDeafen
        report = _closure1_slot24;
        zuuluu = _closure1_slot11;
        tangon = new Array(2);
        tangon[0] = zuuluu;
        michal = _closure1_slot14;
        tangon[1] = michal;
        zuuluu = undefined;
        michal = function() {
            entity = {};
            tangon = _closure1_slot14;
            zuuluu = tangon.getVoiceChannelId;
            tangon = zuuluu.bind(tangon)();
            zuuluu = null;
            zuuluu = zuuluu != tangon;
            entity['inVoiceChannel'] = zuuluu;
            tangon = _closure1_slot11;
            zuuluu = tangon.isSelfMute;
            zuuluu = zuuluu.bind(tangon)();
            entity['selfMute'] = zuuluu;
            tangon = _closure1_slot11;
            zuuluu = tangon.isSelfDeaf;
            zuuluu = zuuluu.bind(tangon)();
            entity['selfDeaf'] = zuuluu;
            tangon = _closure1_slot11;
            zuuluu = tangon.isNativeAudioPermissionReady;
            zuuluu = zuuluu.bind(tangon)();
            entity['audioPermissionReady'] = zuuluu;
            zuuluu = _closure1_slot11;
            michal = zuuluu.shouldSkipMuteUnmuteSound;
            michal = michal.bind(zuuluu)();
            entity['shouldSkipMuteUnmuteSound'] = michal;
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                zuuluu = argBar;
                report = zuuluu.inVoiceChannel;
                tangon = zuuluu.selfMute;
                michal = zuuluu.selfDeaf;
                oscard = zuuluu.audioPermissionReady;
                zuuluu = zuuluu.shouldSkipMuteUnmuteSound;
                if(!report) { _fun00004_ip = 64; continue _fun00003 }
 39:
                golfie = entity.selfDeaf;
                if(!(golfie === michal)) { _fun00004_ip = 122; continue _fun00003 }
 49:
                if(!oscard) { _fun00004_ip = 64; continue _fun00003 }
 52:
                if(report) { _fun00004_ip = 68; continue _fun00003 }
 55:
                report = entity.audioPermissionReady;
                if(report) { _fun00004_ip = 68; continue _fun00003 }
 64:
                report = undefined;
                return report;
 68:
                report = entity.selfMute;
                entity = undefined;
                if(!(report !== tangon)) { _fun00004_ip = 120; continue _fun00003 }
 80:
                if(zuuluu) { _fun00004_ip = 96; continue _fun00003 }
 83:
                zuuluu = 'unmute';
                if(!tangon) { _fun00004_ip = 94; continue _fun00003 }
 90:
                zuuluu = 'mute';
 94:
                _fun00004_ip = 117; continue _fun00003;
 96:
                report = _closure1_slot11;
                tangon = report.notifyMuteUnmuteSoundWasSkipped;
                tangon = tangon.bind(report)();
                zuuluu = undefined;
 117:
                entity = zuuluu;
 120:
                return entity;
 122:
                entity = 'undeafen';
                if(!michal) { _fun00004_ip = 133; continue _fun00003 }
 129:
                entity = 'deafen';
 133:
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: RTCConnect
        report = _closure1_slot24;
        zuuluu = _closure1_slot9;
        tangon = new Array(4);
        tangon[0] = zuuluu;
        zuuluu = _closure1_slot13;
        tangon[1] = zuuluu;
        zuuluu = _closure1_slot14;
        tangon[2] = zuuluu;
        michal = _closure1_slot5;
        tangon[3] = michal;
        zuuluu = undefined;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure1_slot9;
                zuuluu = tangon.getChannel;
                report = _closure1_slot14;
                entity = report.getVoiceChannelId;
                entity = entity.bind(report)();
                tangon = zuuluu.bind(tangon)(entity);
                zuuluu = null;
                entity = zuuluu == tangon;
                golfie = undefined;
                if(entity) { _fun00006_ip = 47; continue _fun00005 }
 42:
                golfie = tangon.type;
 47:
                entity = zuuluu == tangon;
                report = undefined;
                if(entity) { _fun00006_ip = 66; continue _fun00005 }
 56:
                entity = tangon.getGuildId;
                report = entity.bind(tangon)();
 66:
                tangon = _closure1_slot13;
                entity = tangon.getWasEverRtcConnected;
                tangon = entity.bind(tangon)();
                oscard = _closure1_slot13;
                entity = oscard.getState;
                oscard = entity.bind(oscard)();
                entity = {};
                entity['channelType'] = golfie;
                entity['guildId'] = report;
                report = _closure1_slot20;
                report = report.RTC_CONNECTED;
                report = oscard === report;
                entity['connected'] = report;
                tangon = !tangon;
                if(!tangon) { _fun00006_ip = 144; continue _fun00005 }
 130:
                report = _closure1_slot20;
                report = report.DISCONNECTED;
                tangon = oscard !== report;
 144:
                if(tangon) { _fun00006_ip = 161; continue _fun00005 }
 147:
                report = _closure1_slot20;
                report = report.RTC_CONNECTED;
                tangon = oscard === report;
 161:
                entity['connectHasStarted'] = tangon;
                report = _closure1_slot5;
                tangon = report.getAwaitingRemoteSessionInfo;
                tangon = tangon.bind(report)();
                tangon = zuuluu != tangon;
                entity['awaitingRemote'] = tangon;
                tangon = _closure1_slot5;
                michal = tangon.getRemoteSessionId;
                michal = michal.bind(tangon)();
                michal = zuuluu != michal;
                entity['connectedRemote'] = michal;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                verify = argFoo;
                entity = argBar;
                option = entity.channelType;
                tangon = entity.connected;
                golfie = entity.connectHasStarted;
                michal = entity.awaitingRemote;
                entity = entity.connectedRemote;
                zuuluu = verify.channelType;
                oscard = verify.connectedRemote;
                report = verify.connected;
                verify = verify.connectHasStarted;
                if(verify) { _fun00008_ip = 66; continue _fun00007 }
 63:
                if(golfie) { _fun00008_ip = 72; continue _fun00007 }
 66:
                if(!entity) { _fun00008_ip = 108; continue _fun00007 }
 69:
                if(oscard) { _fun00008_ip = 108; continue _fun00007 }
 72:
                oscard = null;
                if(!(oscard != option)) { _fun00008_ip = 98; continue _fun00007 }
 78:
                golfie = _closure1_slot6;
                oscard = golfie.has;
                oscard = oscard.bind(golfie)(option);
                if(oscard) { _fun00008_ip = 104; continue _fun00007 }
 98:
                oscard = 'user_join';
                return oscard;
 104:
                oscard = undefined;
                return oscard;
 108:
                if(!report) { _fun00008_ip = 156; continue _fun00007 }
 111:
                if(tangon) { _fun00008_ip = 156; continue _fun00007 }
 114:
                if(michal) { _fun00008_ip = 152; continue _fun00007 }
 117:
                if(entity) { _fun00008_ip = 152; continue _fun00007 }
 120:
                entity = null;
                if(!(entity != zuuluu)) { _fun00008_ip = 146; continue _fun00007 }
 126:
                michal = _closure1_slot6;
                entity = michal.has;
                entity = entity.bind(michal)(zuuluu);
                if(entity) { _fun00008_ip = 152; continue _fun00007 }
 146:
                entity = 'disconnect';
                return entity;
 152:
                entity = undefined;
                return entity;
 156:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: Speaking
        report = _closure1_slot24;
        michal = _closure1_slot15;
        tangon = new Array(1);
        tangon[0] = michal;
        zuuluu = undefined;
        michal = function() {
            michal = _closure1_slot15;
            entity = michal.isCurrentUserSpeaking;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argBar;
                entity = argFoo;
                if(!(entity !== michal)) { _fun00010_ip = 71; continue _fun00009 }
 10:
                tangon = _closure1_slot11;
                entity = tangon.isSelfMute;
                entity = entity.bind(tangon)();
                report = _closure1_slot11;
                tangon = report.getMode;
                tangon = tangon.bind(report)();
                zuuluu = _closure1_slot18;
                zuuluu = zuuluu.PUSH_TO_TALK;
                if(!(tangon === zuuluu)) { _fun00010_ip = 71; continue _fun00009 }
 55:
                if(entity) { _fun00010_ip = 71; continue _fun00009 }
 58:
                entity = 'ptt_stop';
                if(!michal) { _fun00010_ip = 69; continue _fun00009 }
 65:
                entity = 'ptt_start';
 69:
                return entity;
 71:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: VoiceFilter
        report = _closure1_slot24;
        michal = _closure1_slot11;
        tangon = new Array(1);
        tangon[0] = michal;
        zuuluu = undefined;
        michal = function() {
            michal = _closure1_slot11;
            entity = michal.getActiveVoiceFilter;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = argBar;
                if(!(zuuluu === entity)) { _fun00012_ip = 14; continue _fun00011 }
 10:
                michal = undefined;
                return michal;
 14:
                michal = null;
                tangon = michal != entity;
                entity = 'voice_filter_off';
                if(!tangon) { _fun00012_ip = 51; continue _fun00011 }
 29:
                zuuluu = michal != zuuluu;
                michal = 'voice_filter_on';
                if(!zuuluu) { _fun00012_ip = 48; continue _fun00011 }
 42:
                michal = 'voice_filter_swap';
 48:
                entity = michal;
 51:
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: SelfMutedTemporarily
        report = _closure1_slot24;
        michal = _closure1_slot11;
        tangon = new Array(1);
        tangon[0] = michal;
        zuuluu = undefined;
        michal = function() {
            michal = _closure1_slot11;
            entity = michal.isSelfMutedTemporarily;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = argBar;
                entity = argFoo;
                if(!(entity !== michal)) { _fun00014_ip = 71; continue _fun00013 }
 10:
                tangon = _closure1_slot11;
                entity = tangon.isSelfMute;
                entity = entity.bind(tangon)();
                report = _closure1_slot11;
                tangon = report.getMode;
                tangon = tangon.bind(report)();
                zuuluu = _closure1_slot18;
                zuuluu = zuuluu.VOICE_ACTIVITY;
                if(!(tangon === zuuluu)) { _fun00014_ip = 71; continue _fun00013 }
 55:
                if(entity) { _fun00014_ip = 71; continue _fun00013 }
 58:
                entity = 'ptt_start';
                if(!michal) { _fun00014_ip = 69; continue _fun00013 }
 65:
                entity = 'ptt_stop';
 69:
                return entity;
 71:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: UserHasBeenMoved
        report = _closure1_slot24;
        michal = _closure1_slot16;
        tangon = new Array(1);
        tangon[0] = michal;
        zuuluu = undefined;
        michal = function() {
            entity = _closure1_slot16;
            entity = entity.userHasBeenMovedVersion;
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = argFoo;
                entity = argBar;
                if(!(michal === entity)) { _fun00016_ip = 14; continue _fun00015 }
 10:
                entity = undefined;
                return entity;
 14:
                entity = 'user_moved';
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: UserInvitedToSpeak
        report = _closure1_slot24;
        zuuluu = _closure1_slot14;
        tangon = new Array(2);
        tangon[0] = zuuluu;
        michal = _closure1_slot16;
        tangon[1] = michal;
        zuuluu = undefined;
        michal = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure1_slot14;
                michal = zuuluu.getVoiceChannelId;
                tangon = michal.bind(zuuluu)();
                michal = null;
                if(!(michal != tangon)) { _fun00018_ip = 73; continue _fun00017 }
 23:
                zuuluu = _closure1_slot16;
                michal = zuuluu.getVoiceStateForChannel;
                tangon = michal.bind(zuuluu)(tangon);
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 19;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.getAudienceRequestToSpeakState;
                michal = michal.bind(zuuluu)(tangon);
                return michal;
 73:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 19;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.RequestToSpeakStates;
                entity = entity.NONE;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = argBar;
                entity = argFoo;
                if(!(entity !== michal)) { _fun00020_ip = 51; continue _fun00019 }
 10:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 19;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.RequestToSpeakStates;
                entity = entity.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if(!(michal !== entity)) { _fun00020_ip = 55; continue _fun00019 }
 51:
                entity = undefined;
                return entity;
 55:
                entity = 'reconnect';
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: VoiceChannel
        report = _closure1_slot24;
        zuuluu = _closure1_slot14;
        tangon = new Array(5);
        tangon[0] = zuuluu;
        zuuluu = _closure1_slot7;
        tangon[1] = zuuluu;
        zuuluu = _closure1_slot8;
        tangon[2] = zuuluu;
        zuuluu = _closure1_slot16;
        tangon[3] = zuuluu;
        michal = _closure1_slot9;
        tangon[4] = michal;
        zuuluu = undefined;
        michal = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zuuluu = _closure1_slot14;
                michal = zuuluu.getVoiceChannelId;
                option = michal.bind(zuuluu)();
                zuuluu = _closure1_slot8;
                michal = zuuluu.getId;
                zuuluu = michal.bind(zuuluu)();
                var _closure3_slot0 = zuuluu;
                romeon = new Array(0);
                tangon = _closure1_slot7;
                michal = tangon.getAllActiveStreams;
                michal = michal.bind(tangon)();
                report = null;
                tangon = report != option;
                backup = undefined;
                verify = undefined;
                golfie = undefined;
                oscard = romeon;
                if(!tangon) { _fun00022_ip = 201; continue _fun00021 }
 76:
                offset = _closure1_slot9;
                tangon = offset.getChannel;
                tangon = tangon.bind(offset)(option);
                offset = report != tangon;
                verify = undefined;
                golfie = undefined;
                oscard = romeon;
                if(!offset) { _fun00022_ip = 201; continue _fun00021 }
 104:
                romeon = tangon.type;
                kiloes = _closure1_slot17;
                foxtra = kiloes.countVoiceStatesForChannel;
                offset = tangon.id;
                foxtra = foxtra.bind(kiloes)(offset);
                sizing = _closure1_slot16;
                kiloes = sizing.isInChannel;
                offset = tangon.id;
                kiloes = kiloes.bind(sizing)(offset);
                offset = 0;
                if(!kiloes) { _fun00022_ip = 157; continue _fun00021 }
 154:
                offset = 1;
 157:
                golfie = foxtra - offset;
                kiloes = _closure1_slot7;
                foxtra = kiloes.getAllApplicationStreamsForChannel;
                tangon = tangon.id;
                kiloes = foxtra.bind(kiloes)(tangon);
                foxtra = kiloes.map;
                tangon = function(argFoo) {
                    entity = argFoo;
                    entity = entity.ownerId;
                    return entity;
                };
                oscard = foxtra.bind(kiloes)(tangon);
                verify = romeon;
 201:
                offset = michal.length;
                tangon = 1;
                if(!(tangon !== offset)) { _fun00022_ip = 229; continue _fun00021 }
 213:
                offset = _closure1_slot7;
                tangon = offset.getCurrentUserActiveStream;
                foxtra = tangon.bind(offset)();
                _fun00022_ip = 235; continue _fun00021;
 229:
                tangon = 0;
                foxtra = michal[tangon];
 235:
                tangon = report == foxtra;
                offset = undefined;
                if(tangon) { _fun00022_ip = 249; continue _fun00021 }
 244:
                offset = foxtra.state;
 249:
                tangon = _closure1_slot19;
                tangon = tangon.CONNECTING;
                if(!(offset === tangon)) { _fun00022_ip = 265; continue _fun00021 }
 263:
                foxtra = null;
 265:
                offset = report != foxtra;
                report = null;
                tangon = 0;
                if(!offset) { _fun00022_ip = 347; continue _fun00021 }
 276:
                romeon = _closure1_slot0;
                kiloes = _closure1_slot1;
                offset = 20;
                offset = kiloes[offset];
                romeon = romeon.bind(backup)(offset);
                offset = romeon.encodeStreamKey;
                offset = offset.bind(romeon)(foxtra);
                romeon = _closure1_slot7;
                yankee = romeon.getViewerIds;
                romeon = yankee.bind(romeon)(offset);
                yankee = romeon.filter;
                entity = function(argFoo) {
                    michal = _closure3_slot0;
                    entity = argFoo;
                    entity = entity !== michal;
                    return entity;
                };
                entity = yankee.bind(romeon)(entity);
                tangon = entity.length;
                report = offset;
 347:
                entity = {};
                entity['channelType'] = verify;
                entity['voiceChannelId'] = option;
                entity['voiceChannelUserCount'] = golfie;
                entity['streamingUserIds'] = oscard;
                entity['singleActiveStreamKey'] = report;
                entity['singleActiveStreamViewerCount'] = tangon;
                entity['currentUserId'] = zuuluu;
                entity['allActiveStreams'] = michal;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                option = argFoo;
                entity = argBar;
                var _closure3_slot0 = option;
                yankee = entity.channelType;
                foxtra = entity.voiceChannelId;
                golfie = entity.voiceChannelUserCount;
                report = entity.streamingUserIds;
                var _closure3_slot1 = report;
                tangon = entity.singleActiveStreamKey;
                verify = entity.singleActiveStreamViewerCount;
                entity = entity.currentUserId;
                var _closure3_slot2 = entity;
                entity = undefined;
                var _closure3_slot3 = entity;
                zuuluu = option.voiceChannelId;
                if(!(zuuluu === foxtra)) { _fun00024_ip = 484; continue _fun00023 }
 81:
                oscard = null;
                if(!(oscard != foxtra)) { _fun00024_ip = 484; continue _fun00023 }
 90:
                romeon = _closure1_slot9;
                offset = romeon.getChannel;
                foxtra = offset.bind(romeon)(foxtra);
                romeon = oscard == foxtra;
                offset = false;
                if(romeon) { _fun00024_ip = 174; continue _fun00023 }
 116:
                romeon = foxtra.getGuildId;
                kiloes = romeon.bind(foxtra)();
                romeon = oscard == kiloes;
                offset = false;
                if(romeon) { _fun00024_ip = 174; continue _fun00023 }
 135:
                backup = _closure1_slot10;
                romeon = backup.getGuild;
                backup = romeon.bind(backup)(kiloes);
                romeon = oscard != backup;
                if(!romeon) { _fun00024_ip = 171; continue _fun00023 }
 156:
                backup = backup.afkChannelId;
                foxtra = foxtra.id;
                romeon = backup === foxtra;
 171:
                offset = romeon;
 174:
                if(offset) { _fun00024_ip = 484; continue _fun00023 }
 180:
                if(!(oscard != yankee)) { _fun00024_ip = 204; continue _fun00023 }
 184:
                offset = _closure1_slot6;
                zuuluu = offset.has;
                zuuluu = zuuluu.bind(offset)(yankee);
                if(zuuluu) { _fun00024_ip = 484; continue _fun00023 }
 204:
                offset = oscard != tangon;
                if(!offset) { _fun00024_ip = 221; continue _fun00023 }
 211:
                zuuluu = option.singleActiveStreamKey;
                offset = zuuluu === tangon;
 221:
                tangon = report.some;
                zuuluu = function(argFoo) {
                    entity = _closure3_slot0;
                    zuuluu = entity.streamingUserIds;
                    michal = zuuluu.includes;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                yankee = option.allActiveStreams;
                report = yankee.map;
                tangon = function(argFoo) {
                    entity = argFoo;
                    entity = entity.ownerId;
                    return entity;
                };
                tangon = report.bind(yankee)(tangon);
                _closure3_slot3 = tangon;
                report = option.streamingUserIds;
                tangon = report.some;
                michal = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        report = argFoo;
                        michal = _closure3_slot1;
                        entity = michal.includes;
                        entity = entity.bind(michal)(report);
                        entity = !entity;
                        if(!entity) { _fun00026_ip = 54; continue _fun00025 }
 26:
                        michal = _closure3_slot2;
                        michal = report === michal;
                        if(michal) { _fun00026_ip = 51; continue _fun00025 }
 37:
                        tangon = _closure3_slot3;
                        zuuluu = tangon.includes;
                        michal = zuuluu.bind(tangon)(report);
 51:
                        entity = michal;
 54:
                        return entity;
                    }
                };
                tangon = tangon.bind(report)(michal);
                michal = 'stream_started';
                if(zuuluu) { _fun00024_ip = 482; continue _fun00023 }
 300:
                zuuluu = 'stream_ended';
                if(tangon) { _fun00024_ip = 479; continue _fun00023 }
 310:
                tangon = option.singleActiveStreamViewerCount;
                yankee = 25;
                if(!(tangon <= yankee)) { _fun00024_ip = 346; continue _fun00023 }
 323:
                if(!offset) { _fun00024_ip = 346; continue _fun00023 }
 326:
                tangon = option.singleActiveStreamViewerCount;
                report = verify > tangon;
                tangon = 'stream_user_joined';
                if(report) { _fun00024_ip = 476; continue _fun00023 }
 346:
                report = option.voiceChannelUserCount;
                if(!(oscard != report)) { _fun00024_ip = 387; continue _fun00023 }
 356:
                if(!(oscard != golfie)) { _fun00024_ip = 387; continue _fun00023 }
 360:
                report = option.voiceChannelUserCount;
                if(!(report <= yankee)) { _fun00024_ip = 387; continue _fun00023 }
 370:
                report = option.voiceChannelUserCount;
                romeon = golfie > report;
                report = 'user_join';
                if(romeon) { _fun00024_ip = 473; continue _fun00023 }
 387:
                romeon = option.voiceChannelUserCount;
                if(!(oscard != romeon)) { _fun00024_ip = 428; continue _fun00023 }
 397:
                if(!(oscard != golfie)) { _fun00024_ip = 428; continue _fun00023 }
 401:
                oscard = option.voiceChannelUserCount;
                if(!(oscard <= yankee)) { _fun00024_ip = 428; continue _fun00023 }
 411:
                oscard = option.voiceChannelUserCount;
                golfie = golfie < oscard;
                oscard = 'user_leave';
                if(golfie) { _fun00024_ip = 470; continue _fun00023 }
 428:
                golfie = option.singleActiveStreamViewerCount;
                yankee = golfie <= yankee;
                golfie = undefined;
                if(!yankee) { _fun00024_ip = 467; continue _fun00023 }
 443:
                golfie = undefined;
                if(!offset) { _fun00024_ip = 467; continue _fun00023 }
 448:
                option = option.singleActiveStreamViewerCount;
                option = verify < option;
                golfie = undefined;
                if(!option) { _fun00024_ip = 467; continue _fun00023 }
 463:
                golfie = 'stream_user_left';
 467:
                oscard = golfie;
 470:
                report = oscard;
 473:
                tangon = report;
 476:
                zuuluu = tangon;
 479:
                michal = zuuluu;
 482:
                return michal;
 484:
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: ActivitySounds
        report = _closure1_slot24;
        zuuluu = _closure1_slot14;
        tangon = new Array(3);
        tangon[0] = zuuluu;
        zuuluu = _closure1_slot3;
        tangon[1] = zuuluu;
        michal = _closure1_slot8;
        tangon[2] = michal;
        zuuluu = undefined;
        michal = function() {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                michal = _closure1_slot14;
                entity = michal.getVoiceChannelId;
                verify = entity.bind(michal)();
                michal = _closure1_slot14;
                entity = michal.getChannelId;
                yankee = entity.bind(michal)();
                michal = _closure1_slot3;
                entity = michal.getConnectedActivityLocation;
                oscard = entity.bind(michal)();
                michal = _closure1_slot0;
                entity = _closure1_slot1;
                zuuluu = 21;
                zuuluu = entity[zuuluu];
                golfie = undefined;
                report = michal.bind(golfie)(zuuluu);
                zuuluu = report.getEmbeddedActivityLocationChannelId;
                offset = zuuluu.bind(report)(oscard);
                report = _closure1_slot8;
                zuuluu = report.getId;
                report = zuuluu.bind(report)();
                option = 22;
                entity = entity[option];
                michal = michal.bind(golfie)(entity);
                entity = michal.isNotNullish;
                entity = entity.bind(michal)(yankee);
                if(entity) { _fun00028_ip = 124; continue _fun00027 }
 118:
                zuuluu = _closure1_slot4;
                _fun00028_ip = 139; continue _fun00027;
 124:
                michal = _closure1_slot3;
                entity = michal.getEmbeddedActivitiesForChannel;
                zuuluu = entity.bind(michal)(yankee);
 139:
                michal = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[option];
                michal = michal.bind(golfie)(entity);
                entity = michal.isNotNullish;
                entity = entity.bind(michal)(verify);
                if(entity) { _fun00028_ip = 176; continue _fun00027 }
 170:
                michal = _closure1_slot4;
                _fun00028_ip = 191; continue _fun00027;
 176:
                yankee = _closure1_slot3;
                entity = yankee.getEmbeddedActivitiesForChannel;
                michal = entity.bind(yankee)(verify);
 191:
                entity = {};
                entity['connectedActivityLocation'] = oscard;
                entity['voiceChannelId'] = verify;
                entity['currentUserId'] = report;
                entity['channelActivities'] = zuuluu;
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[option];
                report = report.bind(golfie)(zuuluu);
                zuuluu = report.isNotNullish;
                zuuluu = zuuluu.bind(report)(offset);
                if(zuuluu) { _fun00028_ip = 250; continue _fun00027 }
 244:
                zuuluu = _closure1_slot4;
                _fun00028_ip = 265; continue _fun00027;
 250:
                verify = _closure1_slot3;
                report = verify.getEmbeddedActivitiesForChannel;
                zuuluu = report.bind(verify)(offset);
 265:
                entity['connectedChannelActivities'] = zuuluu;
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[option];
                report = report.bind(golfie)(zuuluu);
                zuuluu = report.isNotNullish;
                report = zuuluu.bind(report)(oscard);
                zuuluu = null;
                if(!report) { _fun00028_ip = 318; continue _fun00027 }
 303:
                report = _closure1_slot3;
                tangon = report.getSelfEmbeddedActivityForLocation;
                zuuluu = tangon.bind(report)(oscard);
 318:
                entity['userConnectedActivity'] = zuuluu;
                entity['voiceChannelActivities'] = michal;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                option = argFoo;
                entity = argBar;
                zuuluu = entity.connectedActivityLocation;
                backup = entity.voiceChannelId;
                michal = entity.currentUserId;
                var _closure3_slot0 = michal;
                tangon = entity.channelActivities;
                michal = entity.connectedChannelActivities;
                golfie = entity.userConnectedActivity;
                var _closure3_slot1 = golfie;
                oscard = entity.voiceChannelActivities;
                report = oscard.some;
                entity = function(argFoo) {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        zuuluu = argFoo;
                        tangon = zuuluu.applicationId;
                        report = _closure3_slot1;
                        entity = null;
                        report = entity == report;
                        entity = undefined;
                        if(report) { _fun00032_ip = 35; continue _fun00031 }
 26:
                        report = _closure3_slot1;
                        entity = report.applicationId;
 35:
                        entity = tangon === entity;
                        if(!entity) { _fun00032_ip = 62; continue _fun00031 }
 42:
                        zuuluu = zuuluu.launchId;
                        michal = _closure3_slot1;
                        michal = michal.launchId;
                        entity = zuuluu === michal;
 62:
                        return entity;
                    }
                };
                verify = report.bind(oscard)(entity);
                romeon = _closure1_slot0;
                entity = _closure1_slot1;
                yankee = 22;
                entity = entity[yankee];
                offset = undefined;
                romeon = romeon.bind(offset)(entity);
                entity = romeon.isNotNullish;
                romeon = entity.bind(romeon)(backup);
                entity = undefined;
                if(!romeon) { _fun00030_ip = 469; continue _fun00029 }
 120:
                kiloes = option.voiceChannelActivities;
                backup = kiloes.find;
                romeon = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.userIds;
                    michal = zuuluu.has;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                romeon = backup.bind(kiloes)(romeon);
                backup = oscard.find;
                foxtra = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.userIds;
                    michal = zuuluu.has;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                foxtra = backup.bind(oscard)(foxtra);
                backup = option.voiceChannelActivities;
                backup = backup.length;
                oscard = oscard.length;
                backup = backup < oscard;
                if(!backup) { _fun00030_ip = 217; continue _fun00029 }
 183:
                kiloes = _closure1_slot0;
                oscard = _closure1_slot1;
                oscard = oscard[yankee];
                sizing = kiloes.bind(offset)(oscard);
                kiloes = sizing.isNotNullish;
                oscard = option.voiceChannelId;
                backup = kiloes.bind(sizing)(oscard);
 217:
                oscard = undefined;
                if(!backup) { _fun00030_ip = 228; continue _fun00029 }
 222:
                oscard = 'activity_launch';
 228:
                backup = offset === foxtra;
                if(!backup) { _fun00030_ip = 263; continue _fun00029 }
 235:
                sizing = _closure1_slot0;
                kiloes = _closure1_slot1;
                kiloes = kiloes[yankee];
                sizing = sizing.bind(offset)(kiloes);
                kiloes = sizing.isNotNullish;
                backup = kiloes.bind(sizing)(romeon);
 263:
                if(!backup) { _fun00030_ip = 272; continue _fun00029 }
 266:
                oscard = 'activity_end';
 272:
                backup = offset === romeon;
                if(!backup) { _fun00030_ip = 307; continue _fun00029 }
 279:
                sizing = _closure1_slot0;
                kiloes = _closure1_slot1;
                kiloes = kiloes[yankee];
                sizing = sizing.bind(offset)(kiloes);
                kiloes = sizing.isNotNullish;
                backup = kiloes.bind(sizing)(foxtra);
 307:
                if(!backup) { _fun00030_ip = 328; continue _fun00029 }
 310:
                kiloes = foxtra.userIds;
                sizing = kiloes.size;
                kiloes = 1;
                backup = sizing > kiloes;
 328:
                if(!backup) { _fun00030_ip = 337; continue _fun00029 }
 331:
                oscard = 'activity_user_join';
 337:
                kiloes = _closure1_slot0;
                backup = _closure1_slot1;
                backup = backup[yankee];
                kiloes = kiloes.bind(offset)(backup);
                backup = kiloes.isNotNullish;
                backup = backup.bind(kiloes)(foxtra);
                if(!backup) { _fun00030_ip = 396; continue _fun00029 }
 368:
                sizing = _closure1_slot0;
                kiloes = _closure1_slot1;
                kiloes = kiloes[yankee];
                sizing = sizing.bind(offset)(kiloes);
                kiloes = sizing.isNotNullish;
                backup = kiloes.bind(sizing)(romeon);
 396:
                entity = oscard;
                if(!backup) { _fun00030_ip = 469; continue _fun00029 }
 402:
                backup = foxtra.userIds;
                kiloes = backup.size;
                backup = romeon.userIds;
                backup = backup.size;
                if(!(kiloes > backup)) { _fun00030_ip = 434; continue _fun00029 }
 428:
                oscard = 'activity_user_join';
 434:
                foxtra = foxtra.userIds;
                foxtra = foxtra.size;
                romeon = romeon.userIds;
                romeon = romeon.size;
                if(!(foxtra < romeon)) { _fun00030_ip = 466; continue _fun00029 }
 460:
                oscard = 'activity_user_left';
 466:
                entity = oscard;
 469:
                oscard = entity;
                if(verify) { _fun00030_ip = 714; continue _fun00029 }
 478:
                verify = option.connectedChannelActivities;
                verify = verify.length;
                michal = michal.length;
                michal = verify < michal;
                if(!michal) { _fun00030_ip = 521; continue _fun00029 }
 501:
                verify = option.channelActivities;
                verify = verify.length;
                tangon = tangon.length;
                michal = verify < tangon;
 521:
                if(!michal) { _fun00030_ip = 530; continue _fun00029 }
 524:
                entity = 'activity_launch';
 530:
                michal = option.userConnectedActivity;
                tangon = null;
                tangon = tangon == golfie;
                if(!tangon) { _fun00030_ip = 573; continue _fun00029 }
 545:
                romeon = _closure1_slot0;
                verify = _closure1_slot1;
                verify = verify[yankee];
                romeon = romeon.bind(offset)(verify);
                verify = romeon.isNotNullish;
                tangon = verify.bind(romeon)(michal);
 573:
                if(!tangon) { _fun00030_ip = 582; continue _fun00029 }
 576:
                entity = 'activity_end';
 582:
                verify = _closure1_slot0;
                tangon = _closure1_slot1;
                tangon = tangon[yankee];
                verify = verify.bind(offset)(tangon);
                tangon = verify.isNotNullish;
                tangon = tangon.bind(verify)(golfie);
                if(!tangon) { _fun00030_ip = 641; continue _fun00029 }
 613:
                verify = _closure1_slot0;
                report = _closure1_slot1;
                report = report[yankee];
                verify = verify.bind(offset)(report);
                report = verify.isNotNullish;
                tangon = report.bind(verify)(michal);
 641:
                oscard = entity;
                if(!tangon) { _fun00030_ip = 714; continue _fun00029 }
 647:
                tangon = golfie.userIds;
                report = tangon.size;
                tangon = michal.userIds;
                tangon = tangon.size;
                if(!(report > tangon)) { _fun00030_ip = 679; continue _fun00029 }
 673:
                entity = 'activity_user_join';
 679:
                tangon = golfie.userIds;
                tangon = tangon.size;
                michal = michal.userIds;
                michal = michal.size;
                if(!(tangon < michal)) { _fun00030_ip = 711; continue _fun00029 }
 705:
                entity = 'activity_user_left';
 711:
                oscard = entity;
 714:
                verify = null;
                michal = verify != oscard;
                if(michal) { _fun00030_ip = 743; continue _fun00029 }
 723:
                entity = option.connectedActivityLocation;
                entity = verify == entity;
                if(!entity) { _fun00030_ip = 740; continue _fun00029 }
 736:
                entity = verify == zuuluu;
 740:
                michal = entity;
 743:
                entity = oscard;
                if(michal) { _fun00030_ip = 918; continue _fun00029 }
 752:
                michal = option.connectedActivityLocation;
                if(!(verify == michal)) { _fun00030_ip = 778; continue _fun00029 }
 762:
                tangon = verify != zuuluu;
                michal = 'activity_launch';
                if(tangon) { _fun00030_ip = 915; continue _fun00029 }
 778:
                tangon = option.connectedActivityLocation;
                if(!(verify != tangon)) { _fun00030_ip = 801; continue _fun00029 }
 788:
                tangon = verify == zuuluu;
                zuuluu = 'activity_end';
                if(tangon) { _fun00030_ip = 912; continue _fun00029 }
 801:
                report = verify != golfie;
                if(!report) { _fun00030_ip = 818; continue _fun00029 }
 808:
                tangon = option.userConnectedActivity;
                report = verify != tangon;
 818:
                tangon = oscard;
                if(!report) { _fun00030_ip = 909; continue _fun00029 }
 824:
                report = option.userConnectedActivity;
                report = report.userIds;
                verify = report.size;
                report = golfie.userIds;
                report = report.size;
                verify = verify < report;
                report = 'activity_user_join';
                if(verify) { _fun00030_ip = 906; continue _fun00029 }
 865:
                option = option.userConnectedActivity;
                option = option.userIds;
                option = option.size;
                golfie = golfie.userIds;
                golfie = golfie.size;
                if(!(option > golfie)) { _fun00030_ip = 903; continue _fun00029 }
 897:
                oscard = 'activity_user_leave';
 903:
                report = oscard;
 906:
                tangon = report;
 909:
                zuuluu = tangon;
 912:
                michal = zuuluu;
 915:
                entity = michal;
 918:
                return entity;
            }
        };
        entity = report.bind(zuuluu)(tangon, michal, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NO_ACTIVITIES;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.InputModes;
    var _closure1_slot18 = golfie;
    golfie = tangon.ApplicationStreamStates;
    var _closure1_slot19 = golfie;
    tangon = tangon.RTCConnectionStates;
    var _closure1_slot20 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot21 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot22 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot23 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_common/SoundPlayer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: SoundPlayer
        tangon = _closure1_slot23;
        zuuluu = _closure1_slot22;
        michal = {};
        option = _closure1_slot21;
        golfie = _closure1_slot25;
        entity = undefined;
        report = {};
        golfie = option.bind(entity)(golfie, report);
        report = new Array(9);
        report[0] = golfie;
        verify = _closure1_slot26;
        golfie = {};
        golfie = option.bind(entity)(verify, golfie);
        report[1] = golfie;
        verify = _closure1_slot27;
        golfie = {};
        golfie = option.bind(entity)(verify, golfie);
        report[2] = golfie;
        verify = _closure1_slot29;
        golfie = {};
        golfie = option.bind(entity)(verify, golfie);
        report[3] = golfie;
        verify = _closure1_slot30;
        golfie = {};
        golfie = option.bind(entity)(verify, golfie);
        report[4] = golfie;
        verify = _closure1_slot32;
        golfie = {};
        golfie = option.bind(entity)(verify, golfie);
        report[5] = golfie;
        verify = _closure1_slot31;
        golfie = {};
        golfie = option.bind(entity)(verify, golfie);
        report[6] = golfie;
        verify = _closure1_slot33;
        golfie = {};
        golfie = option.bind(entity)(verify, golfie);
        report[7] = golfie;
        golfie = _closure1_slot28;
        oscard = {};
        oscard = option.bind(entity)(golfie, oscard);
        report[8] = oscard;
        michal['children'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();