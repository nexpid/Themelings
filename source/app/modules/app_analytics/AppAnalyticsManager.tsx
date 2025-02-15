// app/modules/app_analytics/AppAnalyticsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot18;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
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
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    options = 1;
    tango = oscar[options];
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
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.AnalyticEvents;
    var _closure1_slot14 = verify;
    tango = tango.ActivityTypes;
    var _closure1_slot15 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.MINUTE;
    tango = options * tango;
    var _closure1_slot16 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: AppAnalyticsManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot17;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = false;
            entity['_currentUserSpeaking'] = zulu;
            entity['_anyoneElseSpeaking'] = zulu;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot10;
                    mike = zulu.getChannelId;
                    zulu = mike.bind(zulu)();
                    tango = _closure3_slot0;
                    tango = tango._voiceChannelId;
                    if(!(tango !== zulu)) { _fun00006_ip = 171; continue _fun00005 }
 37:
                    tango = _closure3_slot0;
                    tango['_voiceChannelId'] = zulu;
                    tango = null;
                    if(!(tango == zulu)) { _fun00006_ip = 69; continue _fun00005 }
 53:
                    report = _closure3_slot0;
                    zulu = report._reset;
                    zulu = zulu.bind(report)();
                    _fun00006_ip = 171; continue _fun00005;
 69:
                    zulu = _closure3_slot0;
                    zulu = zulu._reportInterval;
                    if(!(tango == zulu)) { _fun00006_ip = 171; continue _fun00005 }
 83:
                    mike = _closure3_slot0;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 13;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    zulu = zulu.Interval;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    options = tango;
                    zulu = new options[zulu](golf);
                    zulu = zulu instanceof Object ? zulu : tango;
                    mike['_reportInterval'] = zulu;
                    tango = mike._reportInterval;
                    zulu = tango.start;
                    mike = _closure1_slot16;
                    entity = function() {
                        mike = _closure3_slot0;
                        entity = mike._trackStartSpeaking;
                        entity = entity.bind(mike)();
                        entity = mike._trackStartListening;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike, entity);
 171:
                    entity = undefined;
                    return entity;
                }
            };
            entity['_handleRTCConnectionStoreChanged'] = zulu;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure1_slot12;
                    mike = zulu.isCurrentUserSpeaking;
                    zulu = mike.bind(zulu)();
                    tango = _closure3_slot0;
                    tango = tango._currentUserSpeaking;
                    if(!(tango !== zulu)) { _fun00008_ip = 54; continue _fun00007 }
 34:
                    tango = _closure3_slot0;
                    tango['_currentUserSpeaking'] = zulu;
                    zulu = tango._trackStartSpeaking;
                    zulu = zulu.bind(tango)();
 54:
                    zulu = _closure1_slot12;
                    entity = zulu.isAnyoneElseSpeaking;
                    entity = entity.bind(zulu)();
                    zulu = _closure3_slot0;
                    zulu = zulu._anyoneElseSpeaking;
                    if(!(zulu !== entity)) { _fun00008_ip = 104; continue _fun00007 }
 84:
                    mike = _closure3_slot0;
                    mike['_anyoneElseSpeaking'] = entity;
                    entity = mike._trackStartListening;
                    entity = entity.bind(mike)();
 104:
                    entity = undefined;
                    return entity;
                }
            };
            entity['_handleSpeakingStoreChanged'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = global;
            zulu = zulu.Map;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            offset = tango;
            zulu = new offset[zulu](verify);
            golf = zulu instanceof Object ? zulu : tango;
            oscar = golf.set;
            report = _closure1_slot12;
            tango = function() {
                mike = _closure3_slot0;
                entity = mike._handleSpeakingStoreChanged;
                entity = entity.bind(mike)();
                return entity;
            };
            report = oscar.bind(golf)(report, tango);
            tango = report.set;
            zulu = _closure1_slot10;
            entity = function() {
                mike = _closure3_slot0;
                entity = mike._handleRTCConnectionStoreChanged;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = tango.bind(report)(zulu, entity);
            mike['stores'] = entity;
            entity = mike._reset;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = '_reset';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                entity = false;
                mike['_currentUserSpeaking'] = entity;
                mike['_anyoneElseSpeaking'] = entity;
                zulu = mike._reportInterval;
                entity = null;
                if(!(entity != zulu)) { _fun00010_ip = 51; continue _fun00009 }
 29:
                tango = mike._reportInterval;
                zulu = tango.stop;
                zulu = zulu.bind(tango)();
                mike['_reportInterval'] = entity;
 51:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = '_trackStartSpeaking';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                golf = this;
                entity = golf._currentUserSpeaking;
                if(!entity) { _fun00012_ip = 234; continue _fun00011 }
 15:
                oscar = _closure1_slot10;
                entity = oscar.getChannelId;
                verify = entity.bind(oscar)();
                entity = oscar.getGuildId;
                options = entity.bind(oscar)();
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.trackWithMetadata;
                entity = _closure1_slot14;
                mike = entity.START_SPEAKING;
                entity = {};
                yankee = _closure1_slot9;
                offset = yankee.getMode;
                offset = offset.bind(yankee)();
                entity['mode'] = offset;
                yankee = _closure1_slot12;
                offset = yankee.isCurrentUserPrioritySpeaking;
                offset = offset.bind(yankee)();
                entity['priority'] = offset;
                entity['channel'] = verify;
                entity['server'] = options;
                entity['channel_id'] = verify;
                entity['guild_id'] = options;
                options = oscar.getRTCConnectionId;
                options = options.bind(oscar)();
                entity['rtc_connection_id'] = options;
                options = oscar.getMediaSessionId;
                options = options.bind(oscar)();
                entity['media_session_id'] = options;
                verify = _closure1_slot13;
                options = verify.countVoiceStatesForChannel;
                report = golf._voiceChannelId;
                report = options.bind(verify)(report);
                entity['voice_state_count'] = report;
                report = golf.getGameMetadata;
                romeo = report.bind(golf)();
                foxtrot = entity;
                report = copyDataProperties(foxtrot, romeo);
                report = oscar.getPacketStats;
                romeo = report.bind(oscar)();
                foxtrot = entity;
                report = copyDataProperties(foxtrot, romeo);
                entity = zulu.bind(tango)(mike, entity);
 234:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = '_trackStartListening';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscar = this;
                mike = _closure1_slot9;
                entity = mike.isDeaf;
                entity = entity.bind(mike)();
                if(entity) { _fun00014_ip = 240; continue _fun00013 }
 26:
                entity = oscar._anyoneElseSpeaking;
                if(!entity) { _fun00014_ip = 240; continue _fun00013 }
 38:
                options = _closure1_slot10;
                entity = options.getChannelId;
                verify = entity.bind(options)();
                entity = options.getGuildId;
                golf = entity.bind(options)();
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.trackWithMetadata;
                entity = _closure1_slot14;
                mike = entity.START_LISTENING;
                entity = {};
                yankee = _closure1_slot9;
                offset = yankee.isMute;
                offset = offset.bind(yankee)();
                entity['mute'] = offset;
                yankee = _closure1_slot12;
                offset = yankee.isAnyonePrioritySpeaking;
                offset = offset.bind(yankee)();
                entity['anyone_priority'] = offset;
                entity['channel'] = verify;
                entity['server'] = golf;
                entity['channel_id'] = verify;
                entity['guild_id'] = golf;
                golf = options.getRTCConnectionId;
                golf = golf.bind(options)();
                entity['rtc_connection_id'] = golf;
                golf = options.getMediaSessionId;
                golf = golf.bind(options)();
                entity['media_session_id'] = golf;
                options = _closure1_slot13;
                golf = options.countVoiceStatesForChannel;
                report = oscar._voiceChannelId;
                report = golf.bind(options)(report);
                entity['voice_state_count'] = report;
                report = oscar.getGameMetadata;
                romeo = report.bind(oscar)();
                foxtrot = entity;
                report = copyDataProperties(foxtrot, romeo);
                entity = zulu.bind(tango)(mike, entity);
 240:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity._reset;
            mike = mike.bind(entity)();
            report = _closure1_slot12;
            tango = report.removeChangeListener;
            zulu = entity._handleSpeakingStoreChanged;
            zulu = tango.bind(report)(zulu);
            zulu = _closure1_slot10;
            mike = zulu.removeChangeListener;
            entity = entity._handleRTCConnectionStoreChanged;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getGameMetadata';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tango = _closure1_slot11;
                zulu = tango.findActivity;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.type;
                    entity = _closure1_slot15;
                    entity = entity.PLAYING;
                    entity = mike === entity;
                    return entity;
                };
                zulu = zulu.bind(tango)(entity);
                tango = _closure1_slot8;
                entity = tango.getCurrentGameForAnalytics;
                report = entity.bind(tango)();
                entity = {};
                oscar = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 15;
                mike = tango[mike];
                tango = undefined;
                mike = oscar.bind(tango)(mike);
                mike = mike.bind(tango)(zulu);
                entity['game_platform'] = mike;
                mike = null;
                oscar = mike != zulu;
                tango = null;
                if(!oscar) { _fun00016_ip = 91; continue _fun00015 }
 86:
                tango = zulu.name;
 91:
                entity['game_name'] = tango;
                oscar = mike != report;
                tango = null;
                if(!oscar) { _fun00016_ip = 111; continue _fun00015 }
 105:
                tango = report.exeName;
 111:
                entity['game_exe_name'] = tango;
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun00016_ip = 133; continue _fun00015 }
 127:
                mike = zulu.application_id;
 133:
                entity['game_id'] = mike;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_analytics/AppAnalyticsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();