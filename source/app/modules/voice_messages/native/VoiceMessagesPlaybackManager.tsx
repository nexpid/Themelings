// app/modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun110107: for(var _fun110107_ip = 0; ; ) switch(_fun110107_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun110107_ip = 51; continue _fun110107 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun110107_ip = 92; continue _fun110107;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun110107_ip = 71; continue _fun110107 }
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
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun110108: for(var _fun110108_ip = 0; ; ) switch(_fun110108_ip) {
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
            _fun110108_ip = 76; continue _fun110108;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    report = function(argFoo) { // Original name: pauseCurrentAudioPlayer
        _fun110111: for(var _fun110111_ip = 0; ; ) switch(_fun110111_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            report = report.bind(entity)(zulu);
            zulu = report.isAndroid;
            zulu = zulu.bind(report)();
            if(zulu) { _fun110111_ip = 69; continue _fun110111 }
 40:
            zulu = _closure1_slot10;
            report = zulu.DCDAudioPlayerManager;
            zulu = null;
            if(!(zulu != report)) { _fun110111_ip = 100; continue _fun110111 }
 56:
            zulu = report.pauseCurrentPlayer;
            zulu = zulu.bind(report)(tango);
            _fun110111_ip = 100; continue _fun110111;
 69:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 10;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.pauseCurrentPlayer;
            mike = mike.bind(zulu)(tango);
 100:
            return entity;
        }
    };
    var _closure1_slot16 = report;
    tango = function() { // Original name: playCurrentAudioPlayer
        _fun110112: for(var _fun110112_ip = 0; ; ) switch(_fun110112_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun110112_ip = 65; continue _fun110112 }
 37:
            zulu = _closure1_slot10;
            tango = zulu.DCDAudioPlayerManager;
            zulu = null;
            if(!(zulu != tango)) { _fun110112_ip = 95; continue _fun110112 }
 53:
            zulu = tango.maybePlayCurrentPlayer;
            zulu = zulu.bind(tango)();
            _fun110112_ip = 95; continue _fun110112;
 65:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 10;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.maybePlayCurrentPlayer;
            mike = mike.bind(zulu)();
 95:
            return entity;
        }
    };
    var _closure1_slot17 = tango;
    mike = function(argFoo) { // Original name: handleVoiceMessageDeleted
        _fun110113: for(var _fun110113_ip = 0; ; ) switch(_fun110113_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            report = report.bind(entity)(zulu);
            zulu = report.isAndroid;
            zulu = zulu.bind(report)();
            if(zulu) { _fun110113_ip = 69; continue _fun110113 }
 40:
            zulu = _closure1_slot10;
            report = zulu.DCDAudioPlayerManager;
            zulu = null;
            if(!(zulu != report)) { _fun110113_ip = 100; continue _fun110113 }
 56:
            zulu = report.handleVoiceMessageDeleted;
            zulu = zulu.bind(report)(tango);
            _fun110113_ip = 100; continue _fun110113;
 69:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 10;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.handleVoiceMessageDeleted;
            mike = mike.bind(zulu)(tango);
 100:
            return entity;
        }
    };
    var _closure1_slot18 = mike;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 4;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 5;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    yankee = golf.AppState;
    var _closure1_slot8 = yankee;
    yankee = golf.NativeEventEmitter;
    var _closure1_slot9 = yankee;
    golf = golf.NativeModules;
    var _closure1_slot10 = golf;
    golf = 6;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot11 = golf;
    golf = 7;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot12 = golf;
    golf = 8;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot13 = golf;
    golf = 14;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    oscar = function(argFoo) {
        tango = function(argFoo) { // Original name: VoiceMessagesPlaybackManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot3;
            oscar = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golf, oscar);
            tango = _closure1_slot14;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = tango.bind(report)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            tango = _closure1_slot8;
            tango = tango.currentState;
            entity['appState'] = tango;
            tango = false;
            entity['isBackgroundPlaybackEnabled'] = tango;
            report = _closure1_slot9;
            zulu = _closure1_slot10;
            romeo = zulu.DCDBackgroundPlaybackBridge;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            foxtrot = tango;
            zulu = new foxtrot[report](romeo, yankee);
            zulu = zulu instanceof Object ? zulu : tango;
            entity['backgroundPlaybackBridgeEventEmitter'] = zulu;
            zulu = function(argFoo) {
                _fun110116: for(var _fun110116_ip = 0; ; ) switch(_fun110116_ip) {
 0:
                    mike = argFoo;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 9;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.isAndroid;
                    tango = tango.bind(report)();
                    if(tango) { _fun110116_ip = 69; continue _fun110116 }
 40:
                    tango = _closure1_slot10;
                    oscar = tango.DCDAccessibilityManager;
                    report = oscar.handleSetPrefersReducedMotion;
                    tango = mike.prefersReducedMotion;
                    tango = report.bind(oscar)(tango);
                    _fun110116_ip = 106; continue _fun110116;
 69:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 11;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.handleSetPrefersReducedMotion;
                    mike = mike.prefersReducedMotion;
                    mike = zulu.bind(tango)(mike);
 106:
                    return entity;
                }
            };
            entity['handleSetPrefersReducedMotion'] = zulu;
            zulu = function(argFoo) {
                _fun110117: for(var _fun110117_ip = 0; ; ) switch(_fun110117_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.id;
                    tango = entity.channelId;
                    report = _closure1_slot13;
                    mike = report.getCurrentlySelectedChannelId;
                    mike = mike.bind(report)();
                    report = tango === mike;
                    tango = null;
                    mike = tango != report;
                    if(!mike) { _fun110117_ip = 46; continue _fun110117 }
 43:
                    mike = report;
 46:
                    if(!mike) { _fun110117_ip = 68; continue _fun110117 }
 49:
                    mike = _closure1_slot18;
                    if(!(tango != mike)) { _fun110117_ip = 68; continue _fun110117 }
 57:
                    mike = _closure1_slot18;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 68:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleMessageDelete'] = zulu;
            zulu = function() {
                zulu = _closure1_slot16;
                entity = undefined;
                mike = false;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity['handleLogout'] = zulu;
            zulu = function() {
                _fun110119: for(var _fun110119_ip = 0; ; ) switch(_fun110119_ip) {
 0:
                    report = _closure3_slot0;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 12;
                    tango = tango[entity];
                    entity = undefined;
                    tango = oscar.bind(entity)(tango);
                    options = tango.VoiceMessageInBackgroundExperiment;
                    golf = options.getCurrentConfig;
                    oscar = {};
                    tango = 'VoiceMessagesPlaybackManager';
                    oscar['location'] = tango;
                    tango = {};
                    verify = false;
                    tango['autoTrackExposure'] = verify;
                    tango = golf.bind(options)(oscar, tango);
                    tango = tango.enabled;
                    report['isBackgroundPlaybackEnabled'] = tango;
                    zulu = _closure1_slot10;
                    tango = zulu.DCDBackgroundPlaybackBridge;
                    zulu = null;
                    if(!(zulu != tango)) { _fun110119_ip = 121; continue _fun110119 }
 98:
                    zulu = tango.setBackgroundPlaybackEnabled;
                    mike = _closure3_slot0;
                    mike = mike.isBackgroundPlaybackEnabled;
                    mike = zulu.bind(tango)(mike);
 121:
                    return entity;
                }
            };
            entity['handleExperimentsChanged'] = zulu;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                tango = mike.VoiceMessageInBackgroundExperiment;
                zulu = tango.trackExposure;
                mike = {};
                report = 'SharedPlayerQueue';
                mike['location'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleWillConfigureNowPlaying'] = zulu;
            mike = function(argFoo) {
                _fun110121: for(var _fun110121_ip = 0; ; ) switch(_fun110121_ip) {
 0:
                    entity = argFoo;
                    entity = entity.state;
                    zulu = _closure3_slot0;
                    zulu = zulu.isBackgroundPlaybackEnabled;
                    if(zulu) { _fun110121_ip = 97; continue _fun110121 }
 24:
                    mike = _closure3_slot0;
                    zulu = mike.appState;
                    mike['appState'] = entity;
                    mike = 'active';
                    if(!(mike === entity)) { _fun110121_ip = 52; continue _fun110121 }
 48:
                    if(!(mike === zulu)) { _fun110121_ip = 84; continue _fun110121 }
 52:
                    entity = mike !== entity;
                    if(!entity) { _fun110121_ip = 63; continue _fun110121 }
 59:
                    entity = mike === zulu;
 63:
                    if(!entity) { _fun110121_ip = 97; continue _fun110121 }
 66:
                    zulu = _closure1_slot16;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
                    _fun110121_ip = 97; continue _fun110121;
 84:
                    mike = _closure1_slot17;
                    entity = undefined;
                    entity = mike.bind(entity)();
 97:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleAppStateChanged'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = '_terminate';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 13;
            oscar = report[zulu];
            entity = undefined;
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleLogout;
            oscar = 'LOGOUT';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleMessageDelete;
            oscar = 'MESSAGE_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleAppStateChanged;
            oscar = 'APP_STATE_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = mike.handleSetPrefersReducedMotion;
            mike = 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_initialize';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = this;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 13;
            golf = oscar[tango];
            entity = undefined;
            offset = report.bind(entity)(golf);
            verify = offset.subscribe;
            options = mike.handleLogout;
            golf = 'LOGOUT';
            golf = verify.bind(offset)(golf, options);
            golf = oscar[tango];
            offset = report.bind(entity)(golf);
            verify = offset.subscribe;
            options = mike.handleMessageDelete;
            golf = 'MESSAGE_DELETE';
            golf = verify.bind(offset)(golf, options);
            golf = oscar[tango];
            offset = report.bind(entity)(golf);
            verify = offset.subscribe;
            options = mike.handleAppStateChanged;
            golf = 'APP_STATE_UPDATE';
            golf = verify.bind(offset)(golf, options);
            tango = oscar[tango];
            golf = report.bind(entity)(tango);
            report = golf.subscribe;
            tango = mike.handleSetPrefersReducedMotion;
            oscar = 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION';
            tango = report.bind(golf)(oscar, tango);
            report = mike.handleSetPrefersReducedMotion;
            tango = {};
            tango['type'] = oscar;
            oscar = _closure1_slot11;
            oscar = oscar.rawPrefersReducedMotion;
            tango['prefersReducedMotion'] = oscar;
            tango = report.bind(mike)(tango);
            report = _closure1_slot12;
            tango = report.addChangeListener;
            zulu = mike.handleExperimentsChanged;
            zulu = tango.bind(report)(zulu);
            report = mike.backgroundPlaybackBridgeEventEmitter;
            tango = report.addListener;
            zulu = mike.handleWillConfigureNowPlaying;
            mike = 'willConfigureNowPlaying';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    oscar = oscar.bind(entity)(golf);
    golf = oscar.prototype;
    golf = Object.create(golf, {constructor: {value: oscar}});
    sizing = golf;
    oscar = new sizing[oscar](kilo);
    oscar = oscar instanceof Object ? oscar : golf;
    golf = 15;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['pauseCurrentAudioPlayer'] = report;
    zulu['playCurrentAudioPlayer'] = tango;
    zulu['handleVoiceMessageDeleted'] = mike;
    return entity;
})();