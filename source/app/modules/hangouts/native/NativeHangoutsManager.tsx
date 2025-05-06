// app/modules/hangouts/native/NativeHangoutsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: isGuildEligible
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 12;
            entity = oscard[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.isIOS;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00004_ip = 48; continue _fun00003 }
 44:
            entity = false;
            return entity;
 48:
            zuuluu = _closure1_slot10;
            entity = zuuluu.getMemberCount;
            entity = entity.bind(zuuluu)(report);
            zuuluu = null;
            zuuluu = zuuluu != entity;
            yankee = 51;
            if(!zuuluu) { _fun00004_ip = 78; continue _fun00003 }
 75:
            yankee = entity;
 78:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 13;
            entity = entity[golfie];
            entity = zuuluu.bind(oscard)(entity);
            verify = entity.VoiceLockscreenWidgetUserExperiment;
            option = verify.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = tangon;
            entity = {};
            offset = 50;
            offset = yankee <= offset;
            offset = !offset;
            entity['disable'] = offset;
            offset = true;
            entity['autoTrackExposure'] = offset;
            entity = option.bind(verify)(zuuluu, entity);
            entity = entity.showWidget;
            if(entity) { _fun00004_ip = 190; continue _fun00003 }
 155:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.getLockscreenWidgetConfig;
            michal = michal.bind(zuuluu)(report, tangon);
            entity = michal.showWidget;
 190:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: updateLiveActivity
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            report = report.bind(entity)(michal);
            michal = report.isIOS;
            michal = michal.bind(report)();
            if(!michal) { _fun00006_ip = 431; continue _fun00005 }
 43:
            report = _closure1_slot14;
            michal = null;
            if(!(michal == report)) { _fun00006_ip = 91; continue _fun00005 }
 53:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 14;
            report = golfie[report];
            golfie = oscard.bind(entity)(report);
            oscard = golfie.stopHangoutActivity;
            report = 0;
            report = oscard.bind(golfie)(report);
            _fun00006_ip = 431; continue _fun00005;
 91:
            golfie = _closure1_slot19;
            report = _closure1_slot14;
            oscard = report.guildId;
            report = 'manager - updateLiveActivity';
            report = golfie.bind(entity)(oscard, report);
            if(!report) { _fun00006_ip = 431; continue _fun00005 }
 122:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            oscard = 14;
            option = golfie[oscard];
            verify = report.bind(entity)(option);
            option = verify.activitiesAllowed;
            offset = option.bind(verify)();
            verify = offset.then;
            option = function(argFoo) {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 15;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot13;
                zuuluu = michal.LIVE_ACTIVITY_SETTINGS_UPDATED;
                michal = {};
                oscard = true;
                michal['supported'] = oscard;
                oscard = argFoo;
                michal['enabled'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            verify = verify.bind(offset)(option);
            option = verify.catch;
            tangon = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = 'unsupported';
                    entity = argFoo;
                    if(!(michal === entity)) { _fun00008_ip = 71; continue _fun00007 }
 11:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 15;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.track;
                    entity = _closure1_slot13;
                    michal = entity.LIVE_ACTIVITY_SETTINGS_UPDATED;
                    entity = {'supported': false, 'enabled': false};
                    entity = zuuluu.bind(tangon)(michal, entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = option.bind(verify)(tangon);
            tangon = 16;
            tangon = golfie[tangon];
            verify = report.bind(entity)(tangon);
            option = verify.fetchUserAffinities;
            tangon = false;
            tangon = option.bind(verify)(tangon);
            option = _closure1_slot1;
            tangon = 17;
            tangon = golfie[tangon];
            romeon = option.bind(entity)(tangon);
            yankee = romeon.requestMembers;
            tangon = _closure1_slot14;
            offset = tangon.guildId;
            tangon = 18;
            option = golfie[tangon];
            option = report.bind(entity)(option);
            verify = option.MAX_MEMBERS;
            option = '';
            option = yankee.bind(romeon)(offset, option, verify);
            tangon = golfie[tangon];
            offset = report.bind(entity)(tangon);
            verify = offset.generateLiveActivityState;
            tangon = _closure1_slot14;
            sizing = tangon.guildId;
            tangon = _closure1_slot14;
            kiloes = tangon.channelId;
            foxtra = _closure1_slot15;
            backup = true;
            output = offset;
            report = output[verify](sizing, kiloes, backup, foxtra, romeon);
            michal = michal != report;
            if(!michal) { _fun00006_ip = 374; continue _fun00005 }
 325:
            tangon = global;
            option = tangon.JSON;
            golfie = option.stringify;
            golfie = golfie.bind(option)(report);
            verify = tangon.JSON;
            option = verify.stringify;
            tangon = _closure1_slot14;
            tangon = tangon.data;
            tangon = option.bind(verify)(tangon);
            michal = golfie !== tangon;
 374:
            if(!michal) { _fun00006_ip = 431; continue _fun00005 }
 377:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.startHangoutActivity;
            michal = michal.bind(tangon)(report);
            michal = {};
            kiloes = _closure1_slot14;
            sizing = michal;
            tangon = copyDataProperties(sizing, kiloes);
            tangon = 'data';
            michal[tangon] = report;
            _closure1_slot14 = michal;
 431:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
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
    option = 10;
    tangon = oscard[option];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot13 = tangon;
    tangon = null;
    var _closure1_slot14 = tangon;
    var _closure1_slot15 = tangon;
    var _closure1_slot16 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.SECOND;
    tangon = option * tangon;
    var _closure1_slot17 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: NativeHangoutsManager
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot18;
                entity = entity.bind(tangon)();
                if(entity) { _fun00010_ip = 86; continue _fun00009 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00010_ip = 120; continue _fun00009;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                zuuluu = {};
                tangon = function(argFoo) { // Original name: START_HANGOUT
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleStartHangout;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu['START_HANGOUT'] = tangon;
                tangon = function() { // Original name: END_HANGOUT
                    michal = _closure3_slot0;
                    entity = michal.handleEndHangout;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['END_HANGOUT'] = tangon;
                tangon = function() { // Original name: APP_STATE_UPDATE
                    michal = _closure3_slot0;
                    entity = michal.handleAppStateUpdate;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['APP_STATE_UPDATE'] = tangon;
                tangon = function(argFoo) { // Original name: VOICE_STATE_UPDATES
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleVoiceStateUpdates;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu['VOICE_STATE_UPDATES'] = tangon;
                tangon = function(argFoo) { // Original name: SPEAKING
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleSpeaking;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu['SPEAKING'] = tangon;
                tangon = function(argFoo) { // Original name: MESSAGE_CREATE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleMessageCreate;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu['MESSAGE_CREATE'] = tangon;
                tangon = function() { // Original name: LOAD_USER_AFFINITIES_SUCCESS
                    michal = _closure3_slot0;
                    entity = michal.handleUserAffinitiesSuccess;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['LOAD_USER_AFFINITIES_SUCCESS'] = tangon;
                entity['actions'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        report = entity.guildId;
                        tangon = entity.channelId;
                        zuuluu = _closure1_slot9;
                        michal = zuuluu.getChannel;
                        michal = michal.bind(zuuluu)(tangon);
                        zuuluu = null;
                        if(!(zuuluu != michal)) { _fun00012_ip = 116; continue _fun00011 }
 36:
                        golfie = _closure1_slot11;
                        oscard = golfie.getGuild;
                        michal = michal.guild_id;
                        oscard = oscard.bind(golfie)(michal);
                        michal = zuuluu != oscard;
                        if(!michal) { _fun00012_ip = 85; continue _fun00011 }
 62:
                        verify = _closure1_slot19;
                        option = oscard.id;
                        golfie = undefined;
                        oscard = 'manager - start hangout';
                        michal = verify.bind(golfie)(option, oscard);
 85:
                        if(!michal) { _fun00012_ip = 116; continue _fun00011 }
 88:
                        michal = {};
                        michal['guildId'] = report;
                        michal['channelId'] = tangon;
                        michal['data'] = zuuluu;
                        _closure1_slot14 = michal;
                        michal = _closure1_slot20;
                        entity = undefined;
                        entity = michal.bind(entity)();
 116:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleStartHangout'] = zuuluu;
                zuuluu = function() {
                    michal = null;
                    _closure1_slot14 = michal;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.stopHangoutActivity;
                    michal = 0;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['handleEndHangout'] = zuuluu;
                zuuluu = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hasActivity;
                    tangon = michal.bind(zuuluu)();
                    zuuluu = tangon.then;
                    michal = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            entity = argFoo;
                            michal = entity.hasActivity;
                            entity = entity.hasActiveActivity;
                            if(michal) { _fun00014_ip = 39; continue _fun00013 }
 18:
                            zuuluu = null;
                            _closure1_slot14 = zuuluu;
                            zuuluu = _closure1_slot20;
                            michal = undefined;
                            michal = zuuluu.bind(michal)();
                            _fun00014_ip = 157; continue _fun00013;
 39:
                            if(!entity) { _fun00014_ip = 157; continue _fun00013 }
 42:
                            tangon = _closure1_slot12;
                            zuuluu = tangon.getVoiceStateForUser;
                            report = _closure1_slot8;
                            michal = report.getId;
                            michal = michal.bind(report)();
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00014_ip = 143; continue _fun00013 }
 80:
                            tangon = zuuluu.channelId;
                            if(!(michal != tangon)) { _fun00014_ip = 143; continue _fun00013 }
 89:
                            report = _closure1_slot9;
                            tangon = report.getChannel;
                            zuuluu = zuuluu.channelId;
                            tangon = tangon.bind(report)(zuuluu);
                            zuuluu = michal != tangon;
                            if(!zuuluu) { _fun00014_ip = 124; continue _fun00013 }
 115:
                            tangon = tangon.guild_id;
                            zuuluu = michal == tangon;
 124:
                            if(!zuuluu) { _fun00014_ip = 157; continue _fun00013 }
 127:
                            _closure1_slot14 = michal;
                            tangon = _closure1_slot20;
                            zuuluu = undefined;
                            zuuluu = tangon.bind(zuuluu)();
                            _fun00014_ip = 157; continue _fun00013;
 143:
                            _closure1_slot14 = michal;
                            michal = _closure1_slot20;
                            entity = undefined;
                            entity = michal.bind(entity)();
 157:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['handleAppStateUpdate'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.voiceStates;
                        michal = _closure1_slot14;
                        entity = null;
                        if(!(entity == michal)) { _fun00016_ip = 26; continue _fun00015 }
 22:
                        entity = undefined;
                        return entity;
 26:
                        michal = zuuluu.some;
                        entity = function(argFoo) {
                            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                report = argFoo;
                                oscard = report.channelId;
                                golfie = _closure1_slot14;
                                tangon = null;
                                option = tangon == golfie;
                                zuuluu = undefined;
                                entity = undefined;
                                if(option) { _fun00018_ip = 33; continue _fun00017 }
 28:
                                entity = golfie.channelId;
 33:
                                entity = oscard === entity;
                                if(!entity) { _fun00018_ip = 67; continue _fun00017 }
 40:
                                report = report.guildId;
                                oscard = _closure1_slot14;
                                golfie = tangon == oscard;
                                tangon = undefined;
                                if(golfie) { _fun00018_ip = 63; continue _fun00017 }
 58:
                                tangon = oscard.guildId;
 63:
                                entity = report === tangon;
 67:
                                if(!entity) { _fun00018_ip = 80; continue _fun00017 }
 70:
                                michal = _closure1_slot20;
                                michal = michal.bind(zuuluu)();
                                entity = true;
 80:
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    }
                };
                entity['handleVoiceStateUpdates'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = argFoo;
                        entity = entity.userId;
                        var _closure4_slot0 = entity;
                        tangon = _closure1_slot14;
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00020_ip = 77; continue _fun00019 }
 27:
                        tangon = _closure1_slot14;
                        tangon = tangon.data;
                        if(!(zuuluu != tangon)) { _fun00020_ip = 77; continue _fun00019 }
 40:
                        report = tangon.voiceUsers;
                        tangon = report.find;
                        michal = function(argFoo) {
                            entity = argFoo;
                            michal = entity.id;
                            entity = _closure4_slot0;
                            entity = michal === entity;
                            return entity;
                        };
                        michal = tangon.bind(report)(michal);
                        if(!(zuuluu != michal)) { _fun00020_ip = 77; continue _fun00019 }
 67:
                        michal = _closure1_slot20;
                        entity = undefined;
                        entity = michal.bind(entity)();
 77:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleSpeaking'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        entity = argFoo;
                        oscard = entity.guildId;
                        zuuluu = entity.message;
                        entity = _closure1_slot14;
                        report = null;
                        entity = report != entity;
                        if(!entity) { _fun00022_ip = 42; continue _fun00021 }
 29:
                        tangon = _closure1_slot14;
                        tangon = tangon.guildId;
                        entity = tangon === oscard;
 42:
                        if(!entity) { _fun00022_ip = 83; continue _fun00021 }
 45:
                        tangon = zuuluu.author;
                        oscard = report == tangon;
                        report = undefined;
                        if(oscard) { _fun00022_ip = 65; continue _fun00021 }
 60:
                        report = tangon.id;
 65:
                        oscard = _closure1_slot8;
                        tangon = oscard.getId;
                        tangon = tangon.bind(oscard)();
                        entity = report !== tangon;
 83:
                        if(!entity) { _fun00022_ip = 113; continue _fun00021 }
 86:
                        oscard = _closure1_slot19;
                        michal = _closure1_slot14;
                        report = michal.guildId;
                        tangon = undefined;
                        michal = 'manager - updateLiveActivityWithMessage';
                        entity = oscard.bind(tangon)(report, michal);
 113:
                        if(!entity) { _fun00022_ip = 132; continue _fun00021 }
 116:
                        michal = function(argFoo) { // Original name: updateLiveActivityWithMessage
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                tangon = argFoo;
                                report = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 12;
                                michal = michal[entity];
                                entity = undefined;
                                report = report.bind(entity)(michal);
                                michal = report.isIOS;
                                michal = michal.bind(report)();
                                if(!michal) { _fun00024_ip = 335; continue _fun00023 }
 44:
                                report = _closure1_slot14;
                                michal = null;
                                if(!(michal != report)) { _fun00024_ip = 335; continue _fun00023 }
 57:
                                golfie = _closure1_slot19;
                                report = _closure1_slot14;
                                oscard = report.guildId;
                                report = 'manager - updateLiveActivityWithMessage';
                                report = golfie.bind(entity)(oscard, report);
                                if(!report) { _fun00024_ip = 335; continue _fun00023 }
 88:
                                report = _closure1_slot14;
                                if(!(michal != report)) { _fun00024_ip = 335; continue _fun00023 }
 99:
                                oscard = _closure1_slot0;
                                golfie = _closure1_slot2;
                                report = 18;
                                report = golfie[report];
                                verify = oscard.bind(entity)(report);
                                option = verify.generateLiveActivityState;
                                report = _closure1_slot14;
                                backup = report.guildId;
                                report = _closure1_slot14;
                                foxtra = report.channelId;
                                romeon = true;
                                kiloes = verify;
                                yankee = tangon;
                                oscard = kiloes[option](backup, foxtra, romeon, yankee, offset);
                                report = michal != oscard;
                                if(!report) { _fun00024_ip = 211; continue _fun00023 }
 162:
                                golfie = global;
                                verify = golfie.JSON;
                                option = verify.stringify;
                                option = option.bind(verify)(oscard);
                                offset = golfie.JSON;
                                verify = offset.stringify;
                                golfie = _closure1_slot14;
                                golfie = golfie.data;
                                golfie = verify.bind(offset)(golfie);
                                report = option !== golfie;
 211:
                                if(!report) { _fun00024_ip = 335; continue _fun00023 }
 214:
                                _closure1_slot15 = tangon;
                                report = _closure1_slot0;
                                golfie = _closure1_slot2;
                                tangon = 14;
                                tangon = golfie[tangon];
                                report = report.bind(entity)(tangon);
                                tangon = report.startHangoutActivity;
                                tangon = tangon.bind(report)(oscard);
                                tangon = {};
                                foxtra = _closure1_slot14;
                                backup = tangon;
                                report = copyDataProperties(backup, foxtra);
                                report = 'data';
                                tangon[report] = oscard;
                                _closure1_slot14 = tangon;
                                tangon = _closure1_slot16;
                                if(!(michal != tangon)) { _fun00024_ip = 304; continue _fun00023 }
 283:
                                tangon = global;
                                report = tangon.clearTimeout;
                                tangon = _closure1_slot16;
                                tangon = report.bind(entity)(tangon);
                                _closure1_slot16 = michal;
 304:
                                michal = global;
                                report = michal.setTimeout;
                                tangon = _closure1_slot17;
                                michal = function() {
                                    michal = null;
                                    _closure1_slot15 = michal;
                                    michal = _closure1_slot20;
                                    entity = undefined;
                                    michal = michal.bind(entity)();
                                    return entity;
                                };
                                michal = report.bind(entity)(michal, tangon);
                                _closure1_slot16 = michal;
 335:
                                return entity;
                            }
                        };
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
 132:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleMessageCreate'] = zuuluu;
                michal = function() {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        zuuluu = _closure1_slot14;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00026_ip = 23; continue _fun00025 }
 13:
                        michal = _closure1_slot20;
                        entity = undefined;
                        entity = michal.bind(entity)();
 23:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleUserAffinitiesSuccess'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot7;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot4;
        report = {};
        oscard = '_initialize';
        report['key'] = oscard;
        entity = function() { // Original name: value
            entity = global;
            tangon = entity.setTimeout;
            entity = undefined;
            zuuluu = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    tangon = _closure1_slot12;
                    zuuluu = tangon.getVoiceStateForUser;
                    report = _closure1_slot8;
                    michal = report.getId;
                    michal = michal.bind(report)();
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00028_ip = 175; continue _fun00027 }
 41:
                    tangon = michal.channelId;
                    if(!(zuuluu != tangon)) { _fun00028_ip = 175; continue _fun00027 }
 53:
                    report = _closure1_slot9;
                    tangon = report.getChannel;
                    michal = michal.channelId;
                    tangon = tangon.bind(report)(michal);
                    if(!(zuuluu != tangon)) { _fun00028_ip = 175; continue _fun00027 }
 76:
                    michal = tangon.guild_id;
                    if(!(zuuluu != michal)) { _fun00028_ip = 175; continue _fun00027 }
 85:
                    oscard = _closure1_slot11;
                    report = oscard.getGuild;
                    michal = tangon.guild_id;
                    report = report.bind(oscard)(michal);
                    michal = zuuluu != report;
                    if(!michal) { _fun00028_ip = 134; continue _fun00027 }
 111:
                    option = _closure1_slot19;
                    golfie = report.id;
                    oscard = undefined;
                    report = 'manager - app startup';
                    michal = option.bind(oscard)(golfie, report);
 134:
                    if(!michal) { _fun00028_ip = 175; continue _fun00027 }
 137:
                    michal = {};
                    report = tangon.guild_id;
                    michal['guildId'] = report;
                    tangon = tangon.id;
                    michal['channelId'] = tangon;
                    michal['data'] = zuuluu;
                    _closure1_slot14 = michal;
                    michal = _closure1_slot20;
                    entity = undefined;
                    entity = michal.bind(entity)();
 175:
                    entity = undefined;
                    return entity;
                }
            };
            michal = 5000;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/hangouts/native/NativeHangoutsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();