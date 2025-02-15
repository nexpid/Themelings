// app/stores/IdleStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun57180: for(var _fun57180_ip = 0; ; ) switch(_fun57180_ip) {
 0:
        report = argBar;
        golf = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = golf;
        var _closure1_slot2 = oscar;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun57181: for(var _fun57181_ip = 0; ; ) switch(_fun57181_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot6;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot5;
                entity = _closure1_slot19;
                entity = entity.bind(zulu)();
                if(entity) { _fun57181_ip = 51; continue _fun57181 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, oscar);
                _fun57181_ip = 92; continue _fun57181;
 51:
                golf = global;
                options = golf.Reflect;
                golf = options.construct;
                if(oscar) { _fun57181_ip = 71; continue _fun57181 }
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
        var _closure1_slot18 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun57182: for(var _fun57182_ip = 0; ; ) switch(_fun57182_ip) {
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
                _fun57182_ip = 74; continue _fun57182;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot19 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot19 = entity;
        entity = function() { // Original name: isSystemIdle
            _fun57185: for(var _fun57185_ip = 0; ; ) switch(_fun57185_ip) {
 0:
                entity = _closure1_slot15;
                if(entity) { _fun57185_ip = 14; continue _fun57185 }
 10:
                entity = _closure1_slot16;
 14:
                if(entity) { _fun57185_ip = 58; continue _fun57185 }
 17:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 8;
                tango = tango[mike];
                mike = undefined;
                tango = report.bind(mike)(tango);
                mike = tango.isAndroid;
                mike = mike.bind(tango)();
                if(!mike) { _fun57185_ip = 55; continue _fun57185 }
 51:
                mike = _closure1_slot17;
 55:
                entity = mike;
 58:
                return entity;
            }
        };
        var _closure1_slot20 = entity;
        yankee = function() { // Original name: checkIdleAFK
            _fun57186: for(var _fun57186_ip = 0; ; ) switch(_fun57186_ip) {
 0:
                entity = global;
                zulu = entity.Date;
                mike = zulu.now;
                tango = mike.bind(zulu)();
                zulu = _closure1_slot12;
                tango = tango - zulu;
                zulu = _closure1_slot9;
                if(!(!(tango > zulu))) { _fun57186_ip = 102; continue _fun57186 }
 36:
                zulu = _closure1_slot20;
                report = undefined;
                zulu = zulu.bind(report)();
                if(zulu) { _fun57186_ip = 102; continue _fun57186 }
 49:
                zulu = _closure1_slot13;
                if(!zulu) { _fun57186_ip = 166; continue _fun57186 }
 56:
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 11;
                zulu = oscar[zulu];
                report = tango.bind(report)(zulu);
                tango = report.dispatch;
                zulu = {'type': 'IDLE', 'idle': false};
                zulu = tango.bind(report)(zulu);
                _fun57186_ip = 166; continue _fun57186;
 102:
                zulu = _closure1_slot13;
                if(zulu) { _fun57186_ip = 166; continue _fun57186 }
 109:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 11;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.dispatch;
                zulu = {'type': 'IDLE', 'idle': true};
                oscar = _closure1_slot12;
                zulu['idleSince'] = oscar;
                zulu = tango.bind(report)(zulu);
 166:
                tango = entity.Date;
                zulu = tango.now;
                tango = zulu.bind(tango)();
                zulu = _closure1_slot12;
                tango = tango - zulu;
                golf = entity.Math;
                oscar = golf.min;
                report = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 9;
                zulu = verify[entity];
                entity = undefined;
                zulu = report.bind(entity)(zulu);
                report = zulu.AfkTimeout;
                zulu = report.getSetting;
                report = zulu.bind(report)();
                options = _closure1_slot1;
                zulu = 10;
                zulu = verify[zulu];
                zulu = options.bind(entity)(zulu);
                zulu = zulu.Millis;
                zulu = zulu.SECOND;
                report = report * zulu;
                zulu = _closure1_slot9;
                zulu = oscar.bind(golf)(report, zulu);
                if(!(!(tango > zulu))) { _fun57186_ip = 348; continue _fun57186 }
 284:
                zulu = _closure1_slot20;
                zulu = zulu.bind(entity)();
                if(zulu) { _fun57186_ip = 348; continue _fun57186 }
 295:
                zulu = _closure1_slot14;
                if(!zulu) { _fun57186_ip = 399; continue _fun57186 }
 302:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 11;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.dispatch;
                zulu = {'type': 'AFK', 'afk': false};
                zulu = tango.bind(report)(zulu);
                _fun57186_ip = 399; continue _fun57186;
 348:
                zulu = _closure1_slot14;
                if(zulu) { _fun57186_ip = 399; continue _fun57186 }
 355:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 11;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {'type': 'AFK', 'afk': true};
                mike = zulu.bind(tango)(mike);
 399:
                return entity;
            }
        };
        var _closure1_slot21 = yankee;
        tango = function(argFoo) { // Original name: handleGenericAction
            _fun57187: for(var _fun57187_ip = 0; ; ) switch(_fun57187_ip) {
 0:
                entity = argFoo;
                mike = entity.timestamp;
                zulu = entity.type;
                entity = 'OVERLAY_SET_NOT_IDLE';
                entity = entity === zulu;
                if(!entity) { _fun57187_ip = 33; continue _fun57187 }
 27:
                zulu = null;
                entity = zulu != mike;
 33:
                zulu = entity;
                if(!zulu) { _fun57187_ip = 50; continue _fun57187 }
 39:
                tango = _closure1_slot12;
                zulu = mike <= tango;
 50:
                if(zulu) { _fun57187_ip = 90; continue _fun57187 }
 53:
                if(entity) { _fun57187_ip = 73; continue _fun57187 }
 56:
                entity = global;
                zulu = entity.Date;
                entity = zulu.now;
                mike = entity.bind(zulu)();
 73:
                _closure1_slot12 = mike;
                mike = _closure1_slot21;
                entity = undefined;
                entity = mike.bind(entity)();
 90:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot22 = tango;
        options = global;
        romeo = options.Object;
        offset = romeo.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = offset.bind(romeo)(zulu, entity, mike);
        entity = 0;
        mike = oscar[entity];
        entity = undefined;
        mike = golf.bind(entity)(mike);
        var _closure1_slot3 = mike;
        mike = 1;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot4 = mike;
        mike = 2;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot5 = mike;
        mike = 3;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot6 = mike;
        mike = 4;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot7 = mike;
        mike = 5;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot8 = mike;
        mike = 6;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        romeo = mike.IDLE_DURATION;
        var _closure1_slot9 = romeo;
        mike = mike.AppStates;
        var _closure1_slot10 = mike;
        mike = 7;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        mike = mike.SpeakingFlags;
        var _closure1_slot11 = mike;
        offset = options.Date;
        mike = offset.now;
        mike = mike.bind(offset)();
        var _closure1_slot12 = mike;
        mike = false;
        var _closure1_slot13 = mike;
        var _closure1_slot14 = mike;
        var _closure1_slot15 = mike;
        var _closure1_slot16 = mike;
        var _closure1_slot17 = mike;
        mike = 8;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        mike = mike.isPlatformEmbedded;
        if(!mike) { _fun57180_ip = 358; continue _fun57180 }
 316:
        mike = 12;
        offset = oscar[mike];
        offset = golf.bind(entity)(offset);
        foxtrot = null;
        backup = foxtrot == offset;
        offset = undefined;
        if(backup) { _fun57180_ip = 354; continue _fun57180 }
 339:
        backup = oscar[mike];
        backup = golf.bind(entity)(backup);
        offset = backup.remotePowerMonitor;
 354:
        if(!(foxtrot == offset)) { _fun57180_ip = 389; continue _fun57180 }
 358:
        offset = options.setInterval;
        options = 0.25;
        options = options * romeo;
        options = offset.bind(entity)(yankee, options);
        _fun57180_ip = 552; continue _fun57180;
 389:
        options = function() { // Original name: checkNativeIdle
            _fun57188: for(var _fun57188_ip = 0; ; ) switch(_fun57188_ip) {
 0:
                tango = function(argFoo) { // Original name: handleIdleTime
                    zulu = global;
                    oscar = zulu.Math;
                    report = oscar.max;
                    mike = zulu.Date;
                    entity = mike.now;
                    mike = entity.bind(mike)();
                    entity = argFoo;
                    tango = mike - entity;
                    entity = _closure1_slot12;
                    entity = report.bind(oscar)(tango, entity);
                    _closure1_slot12 = entity;
                    tango = _closure1_slot21;
                    entity = undefined;
                    tango = tango.bind(entity)();
                    tango = zulu.setTimeout;
                    zulu = _closure1_slot23;
                    oscar = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 10;
                    mike = mike[report];
                    mike = oscar.bind(entity)(mike);
                    mike = mike.Millis;
                    mike = mike.SECOND;
                    mike = report * mike;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                oscar = _closure1_slot1;
                entity = _closure1_slot2;
                report = 12;
                zulu = entity[report];
                entity = undefined;
                zulu = oscar.bind(entity)(zulu);
                oscar = null;
                golf = oscar == zulu;
                zulu = undefined;
                if(golf) { _fun57188_ip = 81; continue _fun57188 }
 43:
                options = _closure1_slot1;
                golf = _closure1_slot2;
                golf = golf[report];
                golf = options.bind(entity)(golf);
                golf = golf.remotePowerMonitor;
                options = oscar == golf;
                zulu = undefined;
                if(options) { _fun57188_ip = 81; continue _fun57188 }
 75:
                zulu = golf.getSystemIdleTimeMs;
 81:
                if(!(oscar != zulu)) { _fun57188_ip = 150; continue _fun57188 }
 85:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[report];
                mike = zulu.bind(entity)(mike);
                zulu = mike.remotePowerMonitor;
                mike = zulu.getSystemIdleTimeMs;
                zulu = mike.bind(zulu)();
                mike = global;
                mike = mike.Promise;
                mike = zulu instanceof mike;
                if(mike) { _fun57188_ip = 140; continue _fun57188 }
 133:
                mike = tango.bind(entity)(zulu);
                _fun57188_ip = 150; continue _fun57188;
 140:
                mike = zulu.then;
                mike = mike.bind(zulu)(tango);
 150:
                return entity;
            }
        };
        var _closure1_slot23 = options;
        options = options.bind(entity)();
        options = oscar[mike];
        options = golf.bind(entity)(options);
        romeo = options.remotePowerMonitor;
        yankee = romeo.on;
        offset = 'resume';
        options = function() {
            mike = false;
            _closure1_slot15 = mike;
            zulu = _closure1_slot22;
            entity = undefined;
            mike = {};
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        options = yankee.bind(romeo)(offset, options);
        options = oscar[mike];
        options = golf.bind(entity)(options);
        romeo = options.remotePowerMonitor;
        yankee = romeo.on;
        offset = 'suspend';
        options = function() {
            entity = true;
            _closure1_slot15 = entity;
            tango = _closure1_slot22;
            entity = undefined;
            zulu = {};
            zulu = tango.bind(entity)(zulu);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 13;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.disconnect;
            mike = mike.bind(zulu)();
            return entity;
        };
        options = yankee.bind(romeo)(offset, options);
        options = oscar[mike];
        options = golf.bind(entity)(options);
        romeo = options.remotePowerMonitor;
        yankee = romeo.on;
        offset = 'lock-screen';
        options = function() {
            mike = true;
            _closure1_slot16 = mike;
            zulu = _closure1_slot22;
            entity = undefined;
            mike = {};
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        options = yankee.bind(romeo)(offset, options);
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        yankee = mike.remotePowerMonitor;
        offset = yankee.on;
        options = 'unlock-screen';
        mike = function() {
            mike = false;
            _closure1_slot16 = mike;
            zulu = _closure1_slot22;
            entity = undefined;
            mike = {};
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        mike = offset.bind(yankee)(options, mike);
 552:
        mike = 14;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        options = mike.Store;
        mike = function(argFoo) {
            tango = function() { // Original name: IdleStore
                report = this;
                tango = undefined;
                entity = undefined;
                oscar = _closure1_slot3;
                zulu = _closure2_slot0;
                oscar = oscar.bind(tango)(report, zulu);
                mike = _closure1_slot18;
                entity = arguments;
                entity = mike.bind(tango)(report, zulu, entity);
                return entity;
            };
            var _closure2_slot0 = tango;
            report = _closure1_slot7;
            zulu = undefined;
            mike = argFoo;
            mike = report.bind(zulu)(tango, mike);
            mike = _closure1_slot4;
            report = {};
            entity = 'isIdle';
            report['key'] = entity;
            entity = function() { // Original name: value
                entity = _closure1_slot13;
                return entity;
            };
            report['value'] = entity;
            entity = new Array(3);
            entity[0] = report;
            report = {};
            golf = 'isAFK';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot14;
                return entity;
            };
            report['value'] = golf;
            entity[1] = report;
            report = {};
            golf = 'getIdleSince';
            report['key'] = golf;
            oscar = function() { // Original name: value
                _fun57198: for(var _fun57198_ip = 0; ; ) switch(_fun57198_ip) {
 0:
                    zulu = _closure1_slot13;
                    entity = null;
                    if(!zulu) { _fun57198_ip = 16; continue _fun57198 }
 12:
                    entity = _closure1_slot12;
 16:
                    return entity;
                }
            };
            report['value'] = oscar;
            entity[2] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        options = mike.bind(entity)(options);
        mike = 'IdleStore';
        options['displayName'] = mike;
        mike = 11;
        mike = oscar[mike];
        output = golf.bind(entity)(mike);
        mike = {};
        offset = function(argFoo) { // Original name: handleIdle
            entity = argFoo;
            mike = entity.idle;
            _closure1_slot13 = mike;
            entity = undefined;
            return entity;
        };
        mike['IDLE'] = offset;
        offset = function(argFoo) { // Original name: handleAFK
            entity = argFoo;
            mike = entity.afk;
            _closure1_slot14 = mike;
            entity = undefined;
            return entity;
        };
        mike['AFK'] = offset;
        offset = function(argFoo) { // Original name: handleSpeaking
            _fun57201: for(var _fun57201_ip = 0; ; ) switch(_fun57201_ip) {
 0:
                entity = argFoo;
                tango = entity.userId;
                zulu = entity.speakingFlags;
                mike = _closure1_slot11;
                mike = mike.NONE;
                mike = zulu !== mike;
                if(!mike) { _fun57201_ip = 52; continue _fun57201 }
 34:
                report = _closure1_slot8;
                zulu = report.getId;
                zulu = zulu.bind(report)();
                mike = tango === zulu;
 52:
                if(!mike) { _fun57201_ip = 68; continue _fun57201 }
 55:
                zulu = _closure1_slot22;
                mike = undefined;
                entity = {};
                entity = zulu.bind(mike)(entity);
 68:
                entity = false;
                return entity;
            }
        };
        mike['SPEAKING'] = offset;
        verify = function(argFoo) { // Original name: handleAppStateUpdate
            entity = argFoo;
            zulu = entity.state;
            mike = _closure1_slot10;
            mike = mike.BACKGROUND;
            mike = zulu === mike;
            _closure1_slot17 = mike;
            mike = global;
            zulu = mike.Date;
            mike = zulu.now;
            mike = mike.bind(zulu)();
            _closure1_slot12 = mike;
            mike = _closure1_slot21;
            entity = undefined;
            entity = mike.bind(entity)();
            entity = false;
            return entity;
        };
        mike['APP_STATE_UPDATE'] = verify;
        mike['OVERLAY_SET_NOT_IDLE'] = tango;
        mike['CHANNEL_SELECT'] = tango;
        mike['VOICE_CHANNEL_SELECT'] = tango;
        mike['WINDOW_FOCUS'] = tango;
        mike['OVERLAY_INITIALIZE'] = tango;
        mike['OVERLAY_SET_INPUT_LOCKED'] = tango;
        mike['USER_SETTINGS_PROTO_UPDATE'] = tango;
        tango = options.prototype;
        tango = Object.create(tango, {constructor: {value: options}});
        result = tango;
        sizing = mike;
        mike = new result[options](output, sizing, kilo);
        mike = mike instanceof Object ? mike : tango;
        tango = 15;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'stores/IdleStore.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();