// app/components_common/SoundPlayer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: useSound
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot2;
        mike = zulu.useEffect;
        entity = function() {
            zulu = _closure2_slot1;
            report = undefined;
            zulu = zulu.bind(report)();
            var _closure3_slot0 = zulu;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 17;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            report = zulu.BatchedStoreListener;
            options = _closure2_slot0;
            mike = report.prototype;
            zulu = Object.create(mike, {constructor: {value: report}});
            golf = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = undefined;
                    zulu = mike.bind(entity)();
                    report = _closure2_slot2;
                    tango = _closure3_slot0;
                    golf = report.bind(entity)(tango, zulu);
                    verify = null;
                    tango = verify == golf;
                    if(tango) { _fun00002_ip = 57; continue _fun00001 }
 39:
                    oscar = _closure1_slot12;
                    report = oscar.isSoundDisabled;
                    tango = report.bind(oscar)(golf);
 57:
                    if(tango) { _fun00002_ip = 120; continue _fun00001 }
 60:
                    report = _closure1_slot0;
                    oscar = _closure1_slot1;
                    tango = 18;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.playSound;
                    tango = _closure2_slot3;
                    verify = verify != tango;
                    tango = 0.4;
                    if(!verify) { _fun00002_ip = 114; continue _fun00001 }
 110:
                    tango = _closure2_slot3;
 114:
                    tango = report.bind(oscar)(golf, tango);
 120:
                    _closure3_slot0 = zulu;
                    return entity;
                }
            };
            verify = zulu;
            mike = new verify[report](options, golf, oscar);
            tango = mike instanceof Object ? mike : zulu;
            var _closure3_slot1 = tango;
            zulu = tango.attach;
            mike = 'useSound';
            mike = zulu.bind(tango)(mike);
            entity = function() {
                mike = _closure3_slot1;
                entity = mike.detach;
                entity = entity.bind(mike)();
                return entity;
            };
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: MuteDeafen
        report = _closure1_slot25;
        zulu = _closure1_slot11;
        tango = new Array(2);
        tango[0] = zulu;
        mike = _closure1_slot14;
        tango[1] = mike;
        zulu = undefined;
        mike = function() {
            entity = {};
            tango = _closure1_slot14;
            zulu = tango.getVoiceChannelId;
            tango = zulu.bind(tango)();
            zulu = null;
            zulu = zulu != tango;
            entity['inVoiceChannel'] = zulu;
            tango = _closure1_slot11;
            zulu = tango.isSelfMute;
            zulu = zulu.bind(tango)();
            entity['selfMute'] = zulu;
            tango = _closure1_slot11;
            zulu = tango.isSelfDeaf;
            zulu = zulu.bind(tango)();
            entity['selfDeaf'] = zulu;
            tango = _closure1_slot11;
            zulu = tango.isNativeAudioPermissionReady;
            zulu = zulu.bind(tango)();
            entity['audioPermissionReady'] = zulu;
            zulu = _closure1_slot11;
            mike = zulu.shouldSkipMuteUnmuteSound;
            mike = mike.bind(zulu)();
            entity['shouldSkipMuteUnmuteSound'] = mike;
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                zulu = argBar;
                report = zulu.inVoiceChannel;
                tango = zulu.selfMute;
                mike = zulu.selfDeaf;
                oscar = zulu.audioPermissionReady;
                zulu = zulu.shouldSkipMuteUnmuteSound;
                if(!report) { _fun00004_ip = 64; continue _fun00003 }
 39:
                golf = entity.selfDeaf;
                if(!(golf === mike)) { _fun00004_ip = 122; continue _fun00003 }
 49:
                if(!oscar) { _fun00004_ip = 64; continue _fun00003 }
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
                if(!(report !== tango)) { _fun00004_ip = 120; continue _fun00003 }
 80:
                if(zulu) { _fun00004_ip = 96; continue _fun00003 }
 83:
                zulu = 'unmute';
                if(!tango) { _fun00004_ip = 94; continue _fun00003 }
 90:
                zulu = 'mute';
 94:
                _fun00004_ip = 117; continue _fun00003;
 96:
                report = _closure1_slot11;
                tango = report.notifyMuteUnmuteSoundWasSkipped;
                tango = tango.bind(report)();
                zulu = undefined;
 117:
                entity = zulu;
 120:
                return entity;
 122:
                entity = 'undeafen';
                if(!mike) { _fun00004_ip = 133; continue _fun00003 }
 129:
                entity = 'deafen';
 133:
                return entity;
            }
        };
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: RTCConnect
        report = _closure1_slot25;
        zulu = _closure1_slot9;
        tango = new Array(4);
        tango[0] = zulu;
        zulu = _closure1_slot13;
        tango[1] = zulu;
        zulu = _closure1_slot14;
        tango[2] = zulu;
        mike = _closure1_slot5;
        tango[3] = mike;
        zulu = undefined;
        mike = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = _closure1_slot9;
                zulu = tango.getChannel;
                report = _closure1_slot14;
                entity = report.getVoiceChannelId;
                entity = entity.bind(report)();
                tango = zulu.bind(tango)(entity);
                zulu = null;
                entity = zulu == tango;
                golf = undefined;
                if(entity) { _fun00006_ip = 47; continue _fun00005 }
 42:
                golf = tango.type;
 47:
                entity = zulu == tango;
                report = undefined;
                if(entity) { _fun00006_ip = 66; continue _fun00005 }
 56:
                entity = tango.getGuildId;
                report = entity.bind(tango)();
 66:
                tango = _closure1_slot13;
                entity = tango.getWasEverRtcConnected;
                tango = entity.bind(tango)();
                oscar = _closure1_slot13;
                entity = oscar.getState;
                oscar = entity.bind(oscar)();
                entity = {};
                entity['channelType'] = golf;
                entity['guildId'] = report;
                report = _closure1_slot20;
                report = report.RTC_CONNECTED;
                report = oscar === report;
                entity['connected'] = report;
                tango = !tango;
                if(!tango) { _fun00006_ip = 144; continue _fun00005 }
 130:
                report = _closure1_slot20;
                report = report.DISCONNECTED;
                tango = oscar !== report;
 144:
                if(tango) { _fun00006_ip = 161; continue _fun00005 }
 147:
                report = _closure1_slot20;
                report = report.RTC_CONNECTED;
                tango = oscar === report;
 161:
                entity['connectHasStarted'] = tango;
                report = _closure1_slot5;
                tango = report.getAwaitingRemoteSessionInfo;
                tango = tango.bind(report)();
                tango = zulu != tango;
                entity['awaitingRemote'] = tango;
                tango = _closure1_slot5;
                mike = tango.getRemoteSessionId;
                mike = mike.bind(tango)();
                mike = zulu != mike;
                entity['connectedRemote'] = mike;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                verify = argFoo;
                entity = argBar;
                options = entity.channelType;
                tango = entity.connected;
                golf = entity.connectHasStarted;
                mike = entity.awaitingRemote;
                entity = entity.connectedRemote;
                zulu = verify.channelType;
                oscar = verify.connectedRemote;
                report = verify.connected;
                verify = verify.connectHasStarted;
                if(verify) { _fun00008_ip = 66; continue _fun00007 }
 63:
                if(golf) { _fun00008_ip = 72; continue _fun00007 }
 66:
                if(!entity) { _fun00008_ip = 108; continue _fun00007 }
 69:
                if(oscar) { _fun00008_ip = 108; continue _fun00007 }
 72:
                oscar = null;
                if(!(oscar != options)) { _fun00008_ip = 98; continue _fun00007 }
 78:
                golf = _closure1_slot6;
                oscar = golf.has;
                oscar = oscar.bind(golf)(options);
                if(oscar) { _fun00008_ip = 104; continue _fun00007 }
 98:
                oscar = 'user_join';
                return oscar;
 104:
                oscar = undefined;
                return oscar;
 108:
                if(!report) { _fun00008_ip = 156; continue _fun00007 }
 111:
                if(tango) { _fun00008_ip = 156; continue _fun00007 }
 114:
                if(mike) { _fun00008_ip = 152; continue _fun00007 }
 117:
                if(entity) { _fun00008_ip = 152; continue _fun00007 }
 120:
                entity = null;
                if(!(entity != zulu)) { _fun00008_ip = 146; continue _fun00007 }
 126:
                mike = _closure1_slot6;
                entity = mike.has;
                entity = entity.bind(mike)(zulu);
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
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: Speaking
        report = _closure1_slot25;
        mike = _closure1_slot15;
        tango = new Array(1);
        tango[0] = mike;
        zulu = undefined;
        mike = function() {
            mike = _closure1_slot15;
            entity = mike.isCurrentUserSpeaking;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = argBar;
                entity = argFoo;
                if(!(entity !== mike)) { _fun00010_ip = 71; continue _fun00009 }
 10:
                tango = _closure1_slot11;
                entity = tango.isSelfMute;
                entity = entity.bind(tango)();
                report = _closure1_slot11;
                tango = report.getMode;
                tango = tango.bind(report)();
                zulu = _closure1_slot18;
                zulu = zulu.PUSH_TO_TALK;
                if(!(tango === zulu)) { _fun00010_ip = 71; continue _fun00009 }
 55:
                if(entity) { _fun00010_ip = 71; continue _fun00009 }
 58:
                entity = 'ptt_stop';
                if(!mike) { _fun00010_ip = 69; continue _fun00009 }
 65:
                entity = 'ptt_start';
 69:
                return entity;
 71:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: VoiceFilter
        report = _closure1_slot25;
        mike = _closure1_slot11;
        tango = new Array(1);
        tango[0] = mike;
        zulu = undefined;
        mike = function() {
            mike = _closure1_slot11;
            entity = mike.getActiveVoiceFilter;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = argFoo;
                entity = argBar;
                if(!(zulu === entity)) { _fun00012_ip = 14; continue _fun00011 }
 10:
                mike = undefined;
                return mike;
 14:
                mike = null;
                tango = mike != entity;
                entity = 'voice_filter_off';
                if(!tango) { _fun00012_ip = 51; continue _fun00011 }
 29:
                zulu = mike != zulu;
                mike = 'voice_filter_on';
                if(!zulu) { _fun00012_ip = 48; continue _fun00011 }
 42:
                mike = 'voice_filter_swap';
 48:
                entity = mike;
 51:
                return entity;
            }
        };
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: SelfMutedTemporarily
        report = _closure1_slot25;
        mike = _closure1_slot11;
        tango = new Array(1);
        tango[0] = mike;
        zulu = undefined;
        mike = function() {
            mike = _closure1_slot11;
            entity = mike.isSelfMutedTemporarily;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = argBar;
                entity = argFoo;
                if(!(entity !== mike)) { _fun00014_ip = 71; continue _fun00013 }
 10:
                tango = _closure1_slot11;
                entity = tango.isSelfMute;
                entity = entity.bind(tango)();
                report = _closure1_slot11;
                tango = report.getMode;
                tango = tango.bind(report)();
                zulu = _closure1_slot18;
                zulu = zulu.VOICE_ACTIVITY;
                if(!(tango === zulu)) { _fun00014_ip = 71; continue _fun00013 }
 55:
                if(entity) { _fun00014_ip = 71; continue _fun00013 }
 58:
                entity = 'ptt_start';
                if(!mike) { _fun00014_ip = 69; continue _fun00013 }
 65:
                entity = 'ptt_stop';
 69:
                return entity;
 71:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: UserHasBeenMoved
        report = _closure1_slot25;
        mike = _closure1_slot16;
        tango = new Array(1);
        tango[0] = mike;
        zulu = undefined;
        mike = function() {
            entity = _closure1_slot16;
            entity = entity.userHasBeenMovedVersion;
            return entity;
        };
        entity = function(argFoo, argBar) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = argFoo;
                entity = argBar;
                if(!(mike === entity)) { _fun00016_ip = 14; continue _fun00015 }
 10:
                entity = undefined;
                return entity;
 14:
                entity = 'user_moved';
                return entity;
            }
        };
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: UserInvitedToSpeak
        report = _closure1_slot25;
        zulu = _closure1_slot14;
        tango = new Array(2);
        tango[0] = zulu;
        mike = _closure1_slot16;
        tango[1] = mike;
        zulu = undefined;
        mike = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = _closure1_slot14;
                mike = zulu.getVoiceChannelId;
                tango = mike.bind(zulu)();
                mike = null;
                if(!(mike != tango)) { _fun00018_ip = 73; continue _fun00017 }
 23:
                zulu = _closure1_slot16;
                mike = zulu.getVoiceStateForChannel;
                tango = mike.bind(zulu)(tango);
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 19;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.getAudienceRequestToSpeakState;
                mike = mike.bind(zulu)(tango);
                return mike;
 73:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.RequestToSpeakStates;
                entity = entity.NONE;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                mike = argBar;
                entity = argFoo;
                if(!(entity !== mike)) { _fun00020_ip = 51; continue _fun00019 }
 10:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 19;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.RequestToSpeakStates;
                entity = entity.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if(!(mike !== entity)) { _fun00020_ip = 55; continue _fun00019 }
 51:
                entity = undefined;
                return entity;
 55:
                entity = 'reconnect';
                return entity;
            }
        };
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: VoiceChannel
        report = _closure1_slot25;
        zulu = _closure1_slot14;
        tango = new Array(5);
        tango[0] = zulu;
        zulu = _closure1_slot7;
        tango[1] = zulu;
        zulu = _closure1_slot8;
        tango[2] = zulu;
        zulu = _closure1_slot16;
        tango[3] = zulu;
        mike = _closure1_slot9;
        tango[4] = mike;
        zulu = undefined;
        mike = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zulu = _closure1_slot14;
                mike = zulu.getVoiceChannelId;
                options = mike.bind(zulu)();
                zulu = _closure1_slot8;
                mike = zulu.getId;
                zulu = mike.bind(zulu)();
                var _closure3_slot0 = zulu;
                romeo = new Array(0);
                tango = _closure1_slot7;
                mike = tango.getAllActiveStreams;
                mike = mike.bind(tango)();
                report = null;
                tango = report != options;
                backup = undefined;
                verify = undefined;
                golf = undefined;
                oscar = romeo;
                if(!tango) { _fun00022_ip = 201; continue _fun00021 }
 76:
                offset = _closure1_slot9;
                tango = offset.getChannel;
                tango = tango.bind(offset)(options);
                offset = report != tango;
                verify = undefined;
                golf = undefined;
                oscar = romeo;
                if(!offset) { _fun00022_ip = 201; continue _fun00021 }
 104:
                romeo = tango.type;
                kilo = _closure1_slot17;
                foxtrot = kilo.countVoiceStatesForChannel;
                offset = tango.id;
                foxtrot = foxtrot.bind(kilo)(offset);
                sizing = _closure1_slot16;
                kilo = sizing.isInChannel;
                offset = tango.id;
                kilo = kilo.bind(sizing)(offset);
                offset = 0;
                if(!kilo) { _fun00022_ip = 157; continue _fun00021 }
 154:
                offset = 1;
 157:
                golf = foxtrot - offset;
                kilo = _closure1_slot7;
                foxtrot = kilo.getAllApplicationStreamsForChannel;
                tango = tango.id;
                kilo = foxtrot.bind(kilo)(tango);
                foxtrot = kilo.map;
                tango = function(argFoo) {
                    entity = argFoo;
                    entity = entity.ownerId;
                    return entity;
                };
                oscar = foxtrot.bind(kilo)(tango);
                verify = romeo;
 201:
                offset = mike.length;
                tango = 1;
                if(!(tango !== offset)) { _fun00022_ip = 229; continue _fun00021 }
 213:
                offset = _closure1_slot7;
                tango = offset.getCurrentUserActiveStream;
                foxtrot = tango.bind(offset)();
                _fun00022_ip = 235; continue _fun00021;
 229:
                tango = 0;
                foxtrot = mike[tango];
 235:
                tango = report == foxtrot;
                offset = undefined;
                if(tango) { _fun00022_ip = 249; continue _fun00021 }
 244:
                offset = foxtrot.state;
 249:
                tango = _closure1_slot19;
                tango = tango.CONNECTING;
                if(!(offset === tango)) { _fun00022_ip = 265; continue _fun00021 }
 263:
                foxtrot = null;
 265:
                offset = report != foxtrot;
                report = null;
                tango = 0;
                if(!offset) { _fun00022_ip = 347; continue _fun00021 }
 276:
                romeo = _closure1_slot0;
                kilo = _closure1_slot1;
                offset = 20;
                offset = kilo[offset];
                romeo = romeo.bind(backup)(offset);
                offset = romeo.encodeStreamKey;
                offset = offset.bind(romeo)(foxtrot);
                romeo = _closure1_slot7;
                yankee = romeo.getViewerIds;
                romeo = yankee.bind(romeo)(offset);
                yankee = romeo.filter;
                entity = function(argFoo) {
                    mike = _closure3_slot0;
                    entity = argFoo;
                    entity = entity !== mike;
                    return entity;
                };
                entity = yankee.bind(romeo)(entity);
                tango = entity.length;
                report = offset;
 347:
                entity = {};
                entity['channelType'] = verify;
                entity['voiceChannelId'] = options;
                entity['voiceChannelUserCount'] = golf;
                entity['streamingUserIds'] = oscar;
                entity['singleActiveStreamKey'] = report;
                entity['singleActiveStreamViewerCount'] = tango;
                entity['currentUserId'] = zulu;
                entity['allActiveStreams'] = mike;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                options = argFoo;
                entity = argBar;
                var _closure3_slot0 = options;
                romeo = entity.channelType;
                foxtrot = entity.voiceChannelId;
                yankee = entity.voiceChannelUserCount;
                report = entity.streamingUserIds;
                var _closure3_slot1 = report;
                tango = entity.singleActiveStreamKey;
                verify = entity.singleActiveStreamViewerCount;
                entity = entity.currentUserId;
                var _closure3_slot2 = entity;
                entity = undefined;
                var _closure3_slot3 = entity;
                zulu = options.voiceChannelId;
                if(!(zulu === foxtrot)) { _fun00024_ip = 497; continue _fun00023 }
 81:
                oscar = null;
                if(!(oscar != foxtrot)) { _fun00024_ip = 497; continue _fun00023 }
 90:
                offset = _closure1_slot9;
                zulu = offset.getChannel;
                foxtrot = zulu.bind(offset)(foxtrot);
                offset = oscar == foxtrot;
                zulu = false;
                if(offset) { _fun00024_ip = 174; continue _fun00023 }
 116:
                offset = foxtrot.getGuildId;
                kilo = offset.bind(foxtrot)();
                offset = oscar == kilo;
                zulu = false;
                if(offset) { _fun00024_ip = 174; continue _fun00023 }
 135:
                backup = _closure1_slot10;
                offset = backup.getGuild;
                backup = offset.bind(backup)(kilo);
                offset = oscar != backup;
                if(!offset) { _fun00024_ip = 171; continue _fun00023 }
 156:
                backup = backup.afkChannelId;
                foxtrot = foxtrot.id;
                offset = backup === foxtrot;
 171:
                zulu = offset;
 174:
                if(zulu) { _fun00024_ip = 497; continue _fun00023 }
 180:
                if(!(oscar != romeo)) { _fun00024_ip = 204; continue _fun00023 }
 184:
                offset = _closure1_slot6;
                zulu = offset.has;
                zulu = zulu.bind(offset)(romeo);
                if(zulu) { _fun00024_ip = 497; continue _fun00023 }
 204:
                offset = oscar != tango;
                if(!offset) { _fun00024_ip = 221; continue _fun00023 }
 211:
                zulu = options.singleActiveStreamKey;
                offset = zulu === tango;
 221:
                tango = report.some;
                zulu = function(argFoo) {
                    entity = _closure3_slot0;
                    zulu = entity.streamingUserIds;
                    mike = zulu.includes;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    entity = !entity;
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                romeo = options.allActiveStreams;
                report = romeo.map;
                tango = function(argFoo) {
                    entity = argFoo;
                    entity = entity.ownerId;
                    return entity;
                };
                tango = report.bind(romeo)(tango);
                _closure3_slot3 = tango;
                report = options.streamingUserIds;
                tango = report.some;
                mike = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        report = argFoo;
                        mike = _closure3_slot1;
                        entity = mike.includes;
                        entity = entity.bind(mike)(report);
                        entity = !entity;
                        if(!entity) { _fun00026_ip = 54; continue _fun00025 }
 26:
                        mike = _closure3_slot2;
                        mike = report === mike;
                        if(mike) { _fun00026_ip = 51; continue _fun00025 }
 37:
                        tango = _closure3_slot3;
                        zulu = tango.includes;
                        mike = zulu.bind(tango)(report);
 51:
                        entity = mike;
 54:
                        return entity;
                    }
                };
                tango = tango.bind(report)(mike);
                mike = 'stream_started';
                if(zulu) { _fun00024_ip = 495; continue _fun00023 }
 300:
                zulu = 'stream_ended';
                if(tango) { _fun00024_ip = 492; continue _fun00023 }
 310:
                report = options.singleActiveStreamViewerCount;
                tango = _closure1_slot24;
                if(!(report <= tango)) { _fun00024_ip = 347; continue _fun00023 }
 324:
                if(!offset) { _fun00024_ip = 347; continue _fun00023 }
 327:
                tango = options.singleActiveStreamViewerCount;
                report = verify > tango;
                tango = 'stream_user_joined';
                if(report) { _fun00024_ip = 489; continue _fun00023 }
 347:
                report = options.voiceChannelUserCount;
                if(!(oscar != report)) { _fun00024_ip = 392; continue _fun00023 }
 357:
                if(!(oscar != yankee)) { _fun00024_ip = 392; continue _fun00023 }
 361:
                romeo = options.voiceChannelUserCount;
                report = _closure1_slot24;
                if(!(romeo <= report)) { _fun00024_ip = 392; continue _fun00023 }
 375:
                report = options.voiceChannelUserCount;
                romeo = yankee > report;
                report = 'user_join';
                if(romeo) { _fun00024_ip = 486; continue _fun00023 }
 392:
                romeo = options.voiceChannelUserCount;
                if(!(oscar != romeo)) { _fun00024_ip = 437; continue _fun00023 }
 402:
                if(!(oscar != yankee)) { _fun00024_ip = 437; continue _fun00023 }
 406:
                romeo = options.voiceChannelUserCount;
                oscar = _closure1_slot24;
                if(!(romeo <= oscar)) { _fun00024_ip = 437; continue _fun00023 }
 420:
                oscar = options.voiceChannelUserCount;
                yankee = yankee < oscar;
                oscar = 'user_leave';
                if(yankee) { _fun00024_ip = 483; continue _fun00023 }
 437:
                yankee = options.singleActiveStreamViewerCount;
                golf = _closure1_slot24;
                yankee = yankee <= golf;
                golf = undefined;
                if(!yankee) { _fun00024_ip = 480; continue _fun00023 }
 456:
                golf = undefined;
                if(!offset) { _fun00024_ip = 480; continue _fun00023 }
 461:
                options = options.singleActiveStreamViewerCount;
                options = verify < options;
                golf = undefined;
                if(!options) { _fun00024_ip = 480; continue _fun00023 }
 476:
                golf = 'stream_user_left';
 480:
                oscar = golf;
 483:
                report = oscar;
 486:
                tango = report;
 489:
                zulu = tango;
 492:
                mike = zulu;
 495:
                return mike;
 497:
                return entity;
            }
        };
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: ActivitySounds
        report = _closure1_slot25;
        zulu = _closure1_slot14;
        tango = new Array(3);
        tango[0] = zulu;
        zulu = _closure1_slot3;
        tango[1] = zulu;
        mike = _closure1_slot8;
        tango[2] = mike;
        zulu = undefined;
        mike = function() {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                mike = _closure1_slot14;
                entity = mike.getVoiceChannelId;
                verify = entity.bind(mike)();
                mike = _closure1_slot14;
                entity = mike.getChannelId;
                yankee = entity.bind(mike)();
                mike = _closure1_slot3;
                entity = mike.getConnectedActivityLocation;
                oscar = entity.bind(mike)();
                mike = _closure1_slot0;
                entity = _closure1_slot1;
                zulu = 21;
                zulu = entity[zulu];
                golf = undefined;
                report = mike.bind(golf)(zulu);
                zulu = report.getEmbeddedActivityLocationChannelId;
                offset = zulu.bind(report)(oscar);
                report = _closure1_slot8;
                zulu = report.getId;
                report = zulu.bind(report)();
                options = 22;
                entity = entity[options];
                mike = mike.bind(golf)(entity);
                entity = mike.isNotNullish;
                entity = entity.bind(mike)(yankee);
                if(entity) { _fun00028_ip = 124; continue _fun00027 }
 118:
                zulu = _closure1_slot4;
                _fun00028_ip = 139; continue _fun00027;
 124:
                mike = _closure1_slot3;
                entity = mike.getEmbeddedActivitiesForChannel;
                zulu = entity.bind(mike)(yankee);
 139:
                mike = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[options];
                mike = mike.bind(golf)(entity);
                entity = mike.isNotNullish;
                entity = entity.bind(mike)(verify);
                if(entity) { _fun00028_ip = 176; continue _fun00027 }
 170:
                mike = _closure1_slot4;
                _fun00028_ip = 191; continue _fun00027;
 176:
                yankee = _closure1_slot3;
                entity = yankee.getEmbeddedActivitiesForChannel;
                mike = entity.bind(yankee)(verify);
 191:
                entity = {};
                entity['connectedActivityLocation'] = oscar;
                entity['voiceChannelId'] = verify;
                entity['currentUserId'] = report;
                entity['channelActivities'] = zulu;
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[options];
                report = report.bind(golf)(zulu);
                zulu = report.isNotNullish;
                zulu = zulu.bind(report)(offset);
                if(zulu) { _fun00028_ip = 250; continue _fun00027 }
 244:
                zulu = _closure1_slot4;
                _fun00028_ip = 265; continue _fun00027;
 250:
                verify = _closure1_slot3;
                report = verify.getEmbeddedActivitiesForChannel;
                zulu = report.bind(verify)(offset);
 265:
                entity['connectedChannelActivities'] = zulu;
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[options];
                report = report.bind(golf)(zulu);
                zulu = report.isNotNullish;
                report = zulu.bind(report)(oscar);
                zulu = null;
                if(!report) { _fun00028_ip = 318; continue _fun00027 }
 303:
                report = _closure1_slot3;
                tango = report.getSelfEmbeddedActivityForLocation;
                zulu = tango.bind(report)(oscar);
 318:
                entity['userConnectedActivity'] = zulu;
                entity['voiceChannelActivities'] = mike;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                options = argFoo;
                entity = argBar;
                zulu = entity.connectedActivityLocation;
                backup = entity.voiceChannelId;
                mike = entity.currentUserId;
                var _closure3_slot0 = mike;
                tango = entity.channelActivities;
                mike = entity.connectedChannelActivities;
                golf = entity.userConnectedActivity;
                var _closure3_slot1 = golf;
                oscar = entity.voiceChannelActivities;
                report = oscar.some;
                entity = function(argFoo) {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        zulu = argFoo;
                        tango = zulu.applicationId;
                        report = _closure3_slot1;
                        entity = null;
                        report = entity == report;
                        entity = undefined;
                        if(report) { _fun00032_ip = 35; continue _fun00031 }
 26:
                        report = _closure3_slot1;
                        entity = report.applicationId;
 35:
                        entity = tango === entity;
                        if(!entity) { _fun00032_ip = 62; continue _fun00031 }
 42:
                        zulu = zulu.launchId;
                        mike = _closure3_slot1;
                        mike = mike.launchId;
                        entity = zulu === mike;
 62:
                        return entity;
                    }
                };
                verify = report.bind(oscar)(entity);
                romeo = _closure1_slot0;
                entity = _closure1_slot1;
                yankee = 22;
                entity = entity[yankee];
                offset = undefined;
                romeo = romeo.bind(offset)(entity);
                entity = romeo.isNotNullish;
                romeo = entity.bind(romeo)(backup);
                entity = undefined;
                if(!romeo) { _fun00030_ip = 469; continue _fun00029 }
 120:
                kilo = options.voiceChannelActivities;
                backup = kilo.find;
                romeo = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.userIds;
                    mike = zulu.has;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                romeo = backup.bind(kilo)(romeo);
                backup = oscar.find;
                foxtrot = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.userIds;
                    mike = zulu.has;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                foxtrot = backup.bind(oscar)(foxtrot);
                backup = options.voiceChannelActivities;
                backup = backup.length;
                oscar = oscar.length;
                backup = backup < oscar;
                if(!backup) { _fun00030_ip = 217; continue _fun00029 }
 183:
                kilo = _closure1_slot0;
                oscar = _closure1_slot1;
                oscar = oscar[yankee];
                sizing = kilo.bind(offset)(oscar);
                kilo = sizing.isNotNullish;
                oscar = options.voiceChannelId;
                backup = kilo.bind(sizing)(oscar);
 217:
                oscar = undefined;
                if(!backup) { _fun00030_ip = 228; continue _fun00029 }
 222:
                oscar = 'activity_launch';
 228:
                backup = offset === foxtrot;
                if(!backup) { _fun00030_ip = 263; continue _fun00029 }
 235:
                sizing = _closure1_slot0;
                kilo = _closure1_slot1;
                kilo = kilo[yankee];
                sizing = sizing.bind(offset)(kilo);
                kilo = sizing.isNotNullish;
                backup = kilo.bind(sizing)(romeo);
 263:
                if(!backup) { _fun00030_ip = 272; continue _fun00029 }
 266:
                oscar = 'activity_end';
 272:
                backup = offset === romeo;
                if(!backup) { _fun00030_ip = 307; continue _fun00029 }
 279:
                sizing = _closure1_slot0;
                kilo = _closure1_slot1;
                kilo = kilo[yankee];
                sizing = sizing.bind(offset)(kilo);
                kilo = sizing.isNotNullish;
                backup = kilo.bind(sizing)(foxtrot);
 307:
                if(!backup) { _fun00030_ip = 328; continue _fun00029 }
 310:
                kilo = foxtrot.userIds;
                sizing = kilo.size;
                kilo = 1;
                backup = sizing > kilo;
 328:
                if(!backup) { _fun00030_ip = 337; continue _fun00029 }
 331:
                oscar = 'activity_user_join';
 337:
                kilo = _closure1_slot0;
                backup = _closure1_slot1;
                backup = backup[yankee];
                kilo = kilo.bind(offset)(backup);
                backup = kilo.isNotNullish;
                backup = backup.bind(kilo)(foxtrot);
                if(!backup) { _fun00030_ip = 396; continue _fun00029 }
 368:
                sizing = _closure1_slot0;
                kilo = _closure1_slot1;
                kilo = kilo[yankee];
                sizing = sizing.bind(offset)(kilo);
                kilo = sizing.isNotNullish;
                backup = kilo.bind(sizing)(romeo);
 396:
                entity = oscar;
                if(!backup) { _fun00030_ip = 469; continue _fun00029 }
 402:
                backup = foxtrot.userIds;
                kilo = backup.size;
                backup = romeo.userIds;
                backup = backup.size;
                if(!(kilo > backup)) { _fun00030_ip = 434; continue _fun00029 }
 428:
                oscar = 'activity_user_join';
 434:
                foxtrot = foxtrot.userIds;
                foxtrot = foxtrot.size;
                romeo = romeo.userIds;
                romeo = romeo.size;
                if(!(foxtrot < romeo)) { _fun00030_ip = 466; continue _fun00029 }
 460:
                oscar = 'activity_user_left';
 466:
                entity = oscar;
 469:
                oscar = entity;
                if(verify) { _fun00030_ip = 714; continue _fun00029 }
 478:
                verify = options.connectedChannelActivities;
                verify = verify.length;
                mike = mike.length;
                mike = verify < mike;
                if(!mike) { _fun00030_ip = 521; continue _fun00029 }
 501:
                verify = options.channelActivities;
                verify = verify.length;
                tango = tango.length;
                mike = verify < tango;
 521:
                if(!mike) { _fun00030_ip = 530; continue _fun00029 }
 524:
                entity = 'activity_launch';
 530:
                mike = options.userConnectedActivity;
                tango = null;
                tango = tango == golf;
                if(!tango) { _fun00030_ip = 573; continue _fun00029 }
 545:
                romeo = _closure1_slot0;
                verify = _closure1_slot1;
                verify = verify[yankee];
                romeo = romeo.bind(offset)(verify);
                verify = romeo.isNotNullish;
                tango = verify.bind(romeo)(mike);
 573:
                if(!tango) { _fun00030_ip = 582; continue _fun00029 }
 576:
                entity = 'activity_end';
 582:
                verify = _closure1_slot0;
                tango = _closure1_slot1;
                tango = tango[yankee];
                verify = verify.bind(offset)(tango);
                tango = verify.isNotNullish;
                tango = tango.bind(verify)(golf);
                if(!tango) { _fun00030_ip = 641; continue _fun00029 }
 613:
                verify = _closure1_slot0;
                report = _closure1_slot1;
                report = report[yankee];
                verify = verify.bind(offset)(report);
                report = verify.isNotNullish;
                tango = report.bind(verify)(mike);
 641:
                oscar = entity;
                if(!tango) { _fun00030_ip = 714; continue _fun00029 }
 647:
                tango = golf.userIds;
                report = tango.size;
                tango = mike.userIds;
                tango = tango.size;
                if(!(report > tango)) { _fun00030_ip = 679; continue _fun00029 }
 673:
                entity = 'activity_user_join';
 679:
                tango = golf.userIds;
                tango = tango.size;
                mike = mike.userIds;
                mike = mike.size;
                if(!(tango < mike)) { _fun00030_ip = 711; continue _fun00029 }
 705:
                entity = 'activity_user_left';
 711:
                oscar = entity;
 714:
                verify = null;
                mike = verify != oscar;
                if(mike) { _fun00030_ip = 743; continue _fun00029 }
 723:
                entity = options.connectedActivityLocation;
                entity = verify == entity;
                if(!entity) { _fun00030_ip = 740; continue _fun00029 }
 736:
                entity = verify == zulu;
 740:
                mike = entity;
 743:
                entity = oscar;
                if(mike) { _fun00030_ip = 918; continue _fun00029 }
 752:
                mike = options.connectedActivityLocation;
                if(!(verify == mike)) { _fun00030_ip = 778; continue _fun00029 }
 762:
                tango = verify != zulu;
                mike = 'activity_launch';
                if(tango) { _fun00030_ip = 915; continue _fun00029 }
 778:
                tango = options.connectedActivityLocation;
                if(!(verify != tango)) { _fun00030_ip = 801; continue _fun00029 }
 788:
                tango = verify == zulu;
                zulu = 'activity_end';
                if(tango) { _fun00030_ip = 912; continue _fun00029 }
 801:
                report = verify != golf;
                if(!report) { _fun00030_ip = 818; continue _fun00029 }
 808:
                tango = options.userConnectedActivity;
                report = verify != tango;
 818:
                tango = oscar;
                if(!report) { _fun00030_ip = 909; continue _fun00029 }
 824:
                report = options.userConnectedActivity;
                report = report.userIds;
                verify = report.size;
                report = golf.userIds;
                report = report.size;
                verify = verify < report;
                report = 'activity_user_join';
                if(verify) { _fun00030_ip = 906; continue _fun00029 }
 865:
                options = options.userConnectedActivity;
                options = options.userIds;
                options = options.size;
                golf = golf.userIds;
                golf = golf.size;
                if(!(options > golf)) { _fun00030_ip = 903; continue _fun00029 }
 897:
                oscar = 'activity_user_leave';
 903:
                report = oscar;
 906:
                tango = report;
 909:
                zulu = tango;
 912:
                mike = zulu;
 915:
                entity = mike;
 918:
                return entity;
            }
        };
        entity = report.bind(zulu)(tango, mike, entity);
        entity = null;
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NO_ACTIVITIES;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot17 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.InputModes;
    var _closure1_slot18 = golf;
    golf = tango.ApplicationStreamStates;
    var _closure1_slot19 = golf;
    tango = tango.RTCConnectionStates;
    var _closure1_slot20 = tango;
    tango = 16;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot21 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot22 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot23 = tango;
    tango = 25;
    var _closure1_slot24 = tango;
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_common/SoundPlayer.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: SoundPlayer
        tango = _closure1_slot23;
        zulu = _closure1_slot22;
        mike = {};
        options = _closure1_slot21;
        golf = _closure1_slot26;
        entity = undefined;
        report = {};
        golf = options.bind(entity)(golf, report);
        report = new Array(9);
        report[0] = golf;
        verify = _closure1_slot27;
        golf = {};
        golf = options.bind(entity)(verify, golf);
        report[1] = golf;
        verify = _closure1_slot28;
        golf = {};
        golf = options.bind(entity)(verify, golf);
        report[2] = golf;
        verify = _closure1_slot30;
        golf = {};
        golf = options.bind(entity)(verify, golf);
        report[3] = golf;
        verify = _closure1_slot31;
        golf = {};
        golf = options.bind(entity)(verify, golf);
        report[4] = golf;
        verify = _closure1_slot33;
        golf = {};
        golf = options.bind(entity)(verify, golf);
        report[5] = golf;
        verify = _closure1_slot32;
        golf = {};
        golf = options.bind(entity)(verify, golf);
        report[6] = golf;
        verify = _closure1_slot34;
        golf = {};
        golf = options.bind(entity)(verify, golf);
        report[7] = golf;
        golf = _closure1_slot29;
        oscar = {};
        oscar = options.bind(entity)(golf, oscar);
        report[8] = oscar;
        mike['children'] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();