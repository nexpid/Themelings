// app/modules/hangouts/native/NativeHangoutsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124110: for(var _fun124110_ip = 0; ; ) switch(_fun124110_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot20;
            entity = entity.bind(zulu)();
            if(entity) { _fun124110_ip = 51; continue _fun124110 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124110_ip = 92; continue _fun124110;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124110_ip = 71; continue _fun124110 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124111: for(var _fun124111_ip = 0; ; ) switch(_fun124111_ip) {
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
            _fun124111_ip = 76; continue _fun124111;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: isGuildEligible
        _fun124114: for(var _fun124114_ip = 0; ; ) switch(_fun124114_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 12;
            entity = oscar[entity];
            oscar = undefined;
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.isIOS;
            entity = entity.bind(zulu)();
            if(entity) { _fun124114_ip = 48; continue _fun124114 }
 44:
            entity = false;
            return entity;
 48:
            zulu = _closure1_slot10;
            entity = zulu.getMemberCount;
            entity = entity.bind(zulu)(report);
            zulu = null;
            zulu = zulu != entity;
            yankee = 51;
            if(!zulu) { _fun124114_ip = 78; continue _fun124114 }
 75:
            yankee = entity;
 78:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 13;
            entity = entity[golf];
            entity = zulu.bind(oscar)(entity);
            verify = entity.VoiceLockscreenWidgetUserExperiment;
            options = verify.getCurrentConfig;
            zulu = {};
            zulu['location'] = tango;
            entity = {};
            offset = _closure1_slot18;
            offset = yankee <= offset;
            offset = !offset;
            entity['disable'] = offset;
            offset = true;
            entity['autoTrackExposure'] = offset;
            entity = options.bind(verify)(zulu, entity);
            entity = entity.showWidget;
            if(entity) { _fun124114_ip = 191; continue _fun124114 }
 156:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[golf];
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.getLockscreenWidgetConfig;
            mike = mike.bind(zulu)(report, tango);
            entity = mike.showWidget;
 191:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: updateLiveActivity
        _fun124115: for(var _fun124115_ip = 0; ; ) switch(_fun124115_ip) {
 0:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            report = report.bind(entity)(mike);
            mike = report.isIOS;
            mike = mike.bind(report)();
            if(!mike) { _fun124115_ip = 431; continue _fun124115 }
 43:
            report = _closure1_slot14;
            mike = null;
            if(!(mike == report)) { _fun124115_ip = 91; continue _fun124115 }
 53:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 14;
            report = golf[report];
            golf = oscar.bind(entity)(report);
            oscar = golf.stopHangoutActivity;
            report = 0;
            report = oscar.bind(golf)(report);
            _fun124115_ip = 431; continue _fun124115;
 91:
            golf = _closure1_slot21;
            report = _closure1_slot14;
            oscar = report.guildId;
            report = 'manager - updateLiveActivity';
            report = golf.bind(entity)(oscar, report);
            if(!report) { _fun124115_ip = 431; continue _fun124115 }
 122:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            oscar = 14;
            options = golf[oscar];
            verify = report.bind(entity)(options);
            options = verify.activitiesAllowed;
            offset = options.bind(verify)();
            verify = offset.then;
            options = function(argFoo) {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 15;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot13;
                zulu = mike.LIVE_ACTIVITY_SETTINGS_UPDATED;
                mike = {};
                oscar = true;
                mike['supported'] = oscar;
                oscar = argFoo;
                mike['enabled'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            verify = verify.bind(offset)(options);
            options = verify.catch;
            tango = function(argFoo) {
                _fun124117: for(var _fun124117_ip = 0; ; ) switch(_fun124117_ip) {
 0:
                    mike = 'unsupported';
                    entity = argFoo;
                    if(!(mike === entity)) { _fun124117_ip = 67; continue _fun124117 }
 11:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 15;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.track;
                    entity = _closure1_slot13;
                    mike = entity.LIVE_ACTIVITY_SETTINGS_UPDATED;
                    entity = {'supported': false, 'enabled': false};
                    entity = zulu.bind(tango)(mike, entity);
 67:
                    entity = undefined;
                    return entity;
                }
            };
            tango = options.bind(verify)(tango);
            tango = 16;
            tango = golf[tango];
            verify = report.bind(entity)(tango);
            options = verify.fetchUserAffinities;
            tango = false;
            tango = options.bind(verify)(tango);
            options = _closure1_slot1;
            tango = 17;
            tango = golf[tango];
            romeo = options.bind(entity)(tango);
            yankee = romeo.requestMembers;
            tango = _closure1_slot14;
            offset = tango.guildId;
            tango = 18;
            options = golf[tango];
            options = report.bind(entity)(options);
            verify = options.MAX_MEMBERS;
            options = '';
            options = yankee.bind(romeo)(offset, options, verify);
            tango = golf[tango];
            offset = report.bind(entity)(tango);
            verify = offset.generateLiveActivityState;
            tango = _closure1_slot14;
            sizing = tango.guildId;
            tango = _closure1_slot14;
            kilo = tango.channelId;
            foxtrot = _closure1_slot15;
            backup = true;
            output = offset;
            report = output[verify](sizing, kilo, backup, foxtrot, romeo);
            mike = mike != report;
            if(!mike) { _fun124115_ip = 374; continue _fun124115 }
 325:
            tango = global;
            options = tango.JSON;
            golf = options.stringify;
            golf = golf.bind(options)(report);
            verify = tango.JSON;
            options = verify.stringify;
            tango = _closure1_slot14;
            tango = tango.data;
            tango = options.bind(verify)(tango);
            mike = golf !== tango;
 374:
            if(!mike) { _fun124115_ip = 431; continue _fun124115 }
 377:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            tango = tango.bind(entity)(mike);
            mike = tango.startHangoutActivity;
            mike = mike.bind(tango)(report);
            mike = {};
            kilo = _closure1_slot14;
            sizing = mike;
            tango = copyDataProperties(sizing, kilo);
            tango = 'data';
            mike[tango] = report;
            _closure1_slot14 = mike;
 431:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
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
    options = 10;
    tango = oscar[options];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot13 = tango;
    tango = null;
    var _closure1_slot14 = tango;
    var _closure1_slot15 = tango;
    var _closure1_slot16 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.SECOND;
    tango = options * tango;
    var _closure1_slot17 = tango;
    tango = 50;
    var _closure1_slot18 = tango;
    tango = 19;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: NativeHangoutsManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot19;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            tango = function(argFoo) { // Original name: START_HANGOUT
                zulu = _closure3_slot0;
                mike = zulu.handleStartHangout;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['START_HANGOUT'] = tango;
            tango = function() { // Original name: END_HANGOUT
                mike = _closure3_slot0;
                entity = mike.handleEndHangout;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['END_HANGOUT'] = tango;
            tango = function() { // Original name: APP_STATE_UPDATE
                mike = _closure3_slot0;
                entity = mike.handleAppStateUpdate;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['APP_STATE_UPDATE'] = tango;
            tango = function(argFoo) { // Original name: VOICE_STATE_UPDATES
                zulu = _closure3_slot0;
                mike = zulu.handleVoiceStateUpdates;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['VOICE_STATE_UPDATES'] = tango;
            tango = function(argFoo) { // Original name: SPEAKING
                zulu = _closure3_slot0;
                mike = zulu.handleSpeaking;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['SPEAKING'] = tango;
            tango = function(argFoo) { // Original name: MESSAGE_CREATE
                zulu = _closure3_slot0;
                mike = zulu.handleMessageCreate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['MESSAGE_CREATE'] = tango;
            tango = function() { // Original name: LOAD_USER_AFFINITIES_SUCCESS
                mike = _closure3_slot0;
                entity = mike.handleUserAffinitiesSuccess;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['LOAD_USER_AFFINITIES_SUCCESS'] = tango;
            entity['actions'] = zulu;
            zulu = function(argFoo) {
                _fun124127: for(var _fun124127_ip = 0; ; ) switch(_fun124127_ip) {
 0:
                    entity = argFoo;
                    report = entity.guildId;
                    tango = entity.channelId;
                    zulu = _closure1_slot9;
                    mike = zulu.getChannel;
                    mike = mike.bind(zulu)(tango);
                    zulu = null;
                    if(!(zulu != mike)) { _fun124127_ip = 116; continue _fun124127 }
 36:
                    golf = _closure1_slot11;
                    oscar = golf.getGuild;
                    mike = mike.guild_id;
                    oscar = oscar.bind(golf)(mike);
                    mike = zulu != oscar;
                    if(!mike) { _fun124127_ip = 85; continue _fun124127 }
 62:
                    verify = _closure1_slot21;
                    options = oscar.id;
                    golf = undefined;
                    oscar = 'manager - start hangout';
                    mike = verify.bind(golf)(options, oscar);
 85:
                    if(!mike) { _fun124127_ip = 116; continue _fun124127 }
 88:
                    mike = {};
                    mike['guildId'] = report;
                    mike['channelId'] = tango;
                    mike['data'] = zulu;
                    _closure1_slot14 = mike;
                    mike = _closure1_slot22;
                    entity = undefined;
                    entity = mike.bind(entity)();
 116:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleStartHangout'] = zulu;
            zulu = function() {
                mike = null;
                _closure1_slot14 = mike;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.stopHangoutActivity;
                mike = 0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleEndHangout'] = zulu;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hasActivity;
                tango = mike.bind(zulu)();
                zulu = tango.then;
                mike = function(argFoo) {
                    _fun124130: for(var _fun124130_ip = 0; ; ) switch(_fun124130_ip) {
 0:
                        entity = argFoo;
                        mike = entity.hasActivity;
                        entity = entity.hasActiveActivity;
                        if(mike) { _fun124130_ip = 39; continue _fun124130 }
 18:
                        zulu = null;
                        _closure1_slot14 = zulu;
                        zulu = _closure1_slot22;
                        mike = undefined;
                        mike = zulu.bind(mike)();
                        _fun124130_ip = 157; continue _fun124130;
 39:
                        if(!entity) { _fun124130_ip = 157; continue _fun124130 }
 42:
                        tango = _closure1_slot12;
                        zulu = tango.getVoiceStateForUser;
                        report = _closure1_slot8;
                        mike = report.getId;
                        mike = mike.bind(report)();
                        zulu = zulu.bind(tango)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun124130_ip = 143; continue _fun124130 }
 80:
                        tango = zulu.channelId;
                        if(!(mike != tango)) { _fun124130_ip = 143; continue _fun124130 }
 89:
                        report = _closure1_slot9;
                        tango = report.getChannel;
                        zulu = zulu.channelId;
                        tango = tango.bind(report)(zulu);
                        zulu = mike != tango;
                        if(!zulu) { _fun124130_ip = 124; continue _fun124130 }
 115:
                        tango = tango.guild_id;
                        zulu = mike == tango;
 124:
                        if(!zulu) { _fun124130_ip = 157; continue _fun124130 }
 127:
                        _closure1_slot14 = mike;
                        tango = _closure1_slot22;
                        zulu = undefined;
                        zulu = tango.bind(zulu)();
                        _fun124130_ip = 157; continue _fun124130;
 143:
                        _closure1_slot14 = mike;
                        mike = _closure1_slot22;
                        entity = undefined;
                        entity = mike.bind(entity)();
 157:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleAppStateUpdate'] = zulu;
            zulu = function(argFoo) {
                _fun124131: for(var _fun124131_ip = 0; ; ) switch(_fun124131_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.voiceStates;
                    mike = _closure1_slot14;
                    entity = null;
                    if(!(entity == mike)) { _fun124131_ip = 26; continue _fun124131 }
 22:
                    entity = undefined;
                    return entity;
 26:
                    mike = zulu.some;
                    entity = function(argFoo) {
                        _fun124132: for(var _fun124132_ip = 0; ; ) switch(_fun124132_ip) {
 0:
                            report = argFoo;
                            oscar = report.channelId;
                            golf = _closure1_slot14;
                            tango = null;
                            options = tango == golf;
                            zulu = undefined;
                            entity = undefined;
                            if(options) { _fun124132_ip = 33; continue _fun124132 }
 28:
                            entity = golf.channelId;
 33:
                            entity = oscar === entity;
                            if(!entity) { _fun124132_ip = 67; continue _fun124132 }
 40:
                            report = report.guildId;
                            oscar = _closure1_slot14;
                            golf = tango == oscar;
                            tango = undefined;
                            if(golf) { _fun124132_ip = 63; continue _fun124132 }
 58:
                            tango = oscar.guildId;
 63:
                            entity = report === tango;
 67:
                            if(!entity) { _fun124132_ip = 80; continue _fun124132 }
 70:
                            mike = _closure1_slot22;
                            mike = mike.bind(zulu)();
                            entity = true;
 80:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            entity['handleVoiceStateUpdates'] = zulu;
            zulu = function(argFoo) {
                _fun124133: for(var _fun124133_ip = 0; ; ) switch(_fun124133_ip) {
 0:
                    entity = argFoo;
                    entity = entity.userId;
                    var _closure4_slot0 = entity;
                    tango = _closure1_slot14;
                    zulu = null;
                    if(!(zulu != tango)) { _fun124133_ip = 77; continue _fun124133 }
 27:
                    tango = _closure1_slot14;
                    tango = tango.data;
                    if(!(zulu != tango)) { _fun124133_ip = 77; continue _fun124133 }
 40:
                    report = tango.voiceUsers;
                    tango = report.find;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    mike = tango.bind(report)(mike);
                    if(!(zulu != mike)) { _fun124133_ip = 77; continue _fun124133 }
 67:
                    mike = _closure1_slot22;
                    entity = undefined;
                    entity = mike.bind(entity)();
 77:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleSpeaking'] = zulu;
            zulu = function(argFoo) {
                _fun124135: for(var _fun124135_ip = 0; ; ) switch(_fun124135_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.guildId;
                    zulu = entity.message;
                    entity = _closure1_slot14;
                    report = null;
                    entity = report != entity;
                    if(!entity) { _fun124135_ip = 42; continue _fun124135 }
 29:
                    tango = _closure1_slot14;
                    tango = tango.guildId;
                    entity = tango === oscar;
 42:
                    if(!entity) { _fun124135_ip = 83; continue _fun124135 }
 45:
                    tango = zulu.author;
                    oscar = report == tango;
                    report = undefined;
                    if(oscar) { _fun124135_ip = 65; continue _fun124135 }
 60:
                    report = tango.id;
 65:
                    oscar = _closure1_slot8;
                    tango = oscar.getId;
                    tango = tango.bind(oscar)();
                    entity = report !== tango;
 83:
                    if(!entity) { _fun124135_ip = 113; continue _fun124135 }
 86:
                    oscar = _closure1_slot21;
                    mike = _closure1_slot14;
                    report = mike.guildId;
                    tango = undefined;
                    mike = 'manager - updateLiveActivityWithMessage';
                    entity = oscar.bind(tango)(report, mike);
 113:
                    if(!entity) { _fun124135_ip = 132; continue _fun124135 }
 116:
                    mike = function(argFoo) { // Original name: updateLiveActivityWithMessage
                        _fun124136: for(var _fun124136_ip = 0; ; ) switch(_fun124136_ip) {
 0:
                            tango = argFoo;
                            report = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 12;
                            mike = mike[entity];
                            entity = undefined;
                            report = report.bind(entity)(mike);
                            mike = report.isIOS;
                            mike = mike.bind(report)();
                            if(!mike) { _fun124136_ip = 335; continue _fun124136 }
 44:
                            report = _closure1_slot14;
                            mike = null;
                            if(!(mike != report)) { _fun124136_ip = 335; continue _fun124136 }
 57:
                            golf = _closure1_slot21;
                            report = _closure1_slot14;
                            oscar = report.guildId;
                            report = 'manager - updateLiveActivityWithMessage';
                            report = golf.bind(entity)(oscar, report);
                            if(!report) { _fun124136_ip = 335; continue _fun124136 }
 88:
                            report = _closure1_slot14;
                            if(!(mike != report)) { _fun124136_ip = 335; continue _fun124136 }
 99:
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            report = 18;
                            report = golf[report];
                            verify = oscar.bind(entity)(report);
                            options = verify.generateLiveActivityState;
                            report = _closure1_slot14;
                            backup = report.guildId;
                            report = _closure1_slot14;
                            foxtrot = report.channelId;
                            romeo = true;
                            kilo = verify;
                            yankee = tango;
                            oscar = kilo[options](backup, foxtrot, romeo, yankee, offset);
                            report = mike != oscar;
                            if(!report) { _fun124136_ip = 211; continue _fun124136 }
 162:
                            golf = global;
                            verify = golf.JSON;
                            options = verify.stringify;
                            options = options.bind(verify)(oscar);
                            offset = golf.JSON;
                            verify = offset.stringify;
                            golf = _closure1_slot14;
                            golf = golf.data;
                            golf = verify.bind(offset)(golf);
                            report = options !== golf;
 211:
                            if(!report) { _fun124136_ip = 335; continue _fun124136 }
 214:
                            _closure1_slot15 = tango;
                            report = _closure1_slot0;
                            golf = _closure1_slot2;
                            tango = 14;
                            tango = golf[tango];
                            report = report.bind(entity)(tango);
                            tango = report.startHangoutActivity;
                            tango = tango.bind(report)(oscar);
                            tango = {};
                            foxtrot = _closure1_slot14;
                            backup = tango;
                            report = copyDataProperties(backup, foxtrot);
                            report = 'data';
                            tango[report] = oscar;
                            _closure1_slot14 = tango;
                            tango = _closure1_slot16;
                            if(!(mike != tango)) { _fun124136_ip = 304; continue _fun124136 }
 283:
                            tango = global;
                            report = tango.clearTimeout;
                            tango = _closure1_slot16;
                            tango = report.bind(entity)(tango);
                            _closure1_slot16 = mike;
 304:
                            mike = global;
                            report = mike.setTimeout;
                            tango = _closure1_slot17;
                            mike = function() {
                                mike = null;
                                _closure1_slot15 = mike;
                                mike = _closure1_slot22;
                                entity = undefined;
                                mike = mike.bind(entity)();
                                return entity;
                            };
                            mike = report.bind(entity)(mike, tango);
                            _closure1_slot16 = mike;
 335:
                            return entity;
                        }
                    };
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleMessageCreate'] = zulu;
            mike = function() {
                _fun124138: for(var _fun124138_ip = 0; ; ) switch(_fun124138_ip) {
 0:
                    zulu = _closure1_slot14;
                    mike = null;
                    if(!(mike != zulu)) { _fun124138_ip = 23; continue _fun124138 }
 13:
                    mike = _closure1_slot22;
                    entity = undefined;
                    entity = mike.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleUserAffinitiesSuccess'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = '_initialize';
        report['key'] = oscar;
        entity = function() { // Original name: value
            entity = global;
            tango = entity.setTimeout;
            entity = undefined;
            zulu = function() {
                _fun124140: for(var _fun124140_ip = 0; ; ) switch(_fun124140_ip) {
 0:
                    tango = _closure1_slot12;
                    zulu = tango.getVoiceStateForUser;
                    report = _closure1_slot8;
                    mike = report.getId;
                    mike = mike.bind(report)();
                    mike = zulu.bind(tango)(mike);
                    zulu = null;
                    if(!(zulu != mike)) { _fun124140_ip = 175; continue _fun124140 }
 41:
                    tango = mike.channelId;
                    if(!(zulu != tango)) { _fun124140_ip = 175; continue _fun124140 }
 53:
                    report = _closure1_slot9;
                    tango = report.getChannel;
                    mike = mike.channelId;
                    tango = tango.bind(report)(mike);
                    if(!(zulu != tango)) { _fun124140_ip = 175; continue _fun124140 }
 76:
                    mike = tango.guild_id;
                    if(!(zulu != mike)) { _fun124140_ip = 175; continue _fun124140 }
 85:
                    oscar = _closure1_slot11;
                    report = oscar.getGuild;
                    mike = tango.guild_id;
                    report = report.bind(oscar)(mike);
                    mike = zulu != report;
                    if(!mike) { _fun124140_ip = 134; continue _fun124140 }
 111:
                    options = _closure1_slot21;
                    golf = report.id;
                    oscar = undefined;
                    report = 'manager - app startup';
                    mike = options.bind(oscar)(golf, report);
 134:
                    if(!mike) { _fun124140_ip = 175; continue _fun124140 }
 137:
                    mike = {};
                    report = tango.guild_id;
                    mike['guildId'] = report;
                    tango = tango.id;
                    mike['channelId'] = tango;
                    mike['data'] = zulu;
                    _closure1_slot14 = mike;
                    mike = _closure1_slot22;
                    entity = undefined;
                    entity = mike.bind(entity)();
 175:
                    entity = undefined;
                    return entity;
                }
            };
            mike = 5000;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/hangouts/native/NativeHangoutsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();