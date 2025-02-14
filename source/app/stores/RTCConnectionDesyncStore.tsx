// app/stores/RTCConnectionDesyncStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun107341: for(var _fun107341_ip = 0; ; ) switch(_fun107341_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot21;
            entity = entity.bind(zulu)();
            if(entity) { _fun107341_ip = 51; continue _fun107341 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun107341_ip = 92; continue _fun107341;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun107341_ip = 71; continue _fun107341 }
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
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun107342: for(var _fun107342_ip = 0; ; ) switch(_fun107342_ip) {
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
            _fun107342_ip = 76; continue _fun107342;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: upsert
        _fun107345: for(var _fun107345_ip = 0; ; ) switch(_fun107345_ip) {
 0:
            mike = argFoo;
            verify = argBar;
            options = argBaz;
            report = _closure1_slot8;
            entity = {};
            tango = mike.id;
            entity['userId'] = tango;
            entity['channelId'] = options;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            kilo = tango;
            backup = entity;
            entity = new kilo[report](backup, foxtrot);
            oscar = entity instanceof Object ? entity : tango;
            offset = _closure1_slot13;
            tango = null;
            golf = verify;
            if(!(tango == golf)) { _fun107345_ip = 71; continue _fun107345 }
 67:
            golf = _closure1_slot14;
 71:
            report = mike.id;
            entity = undefined;
            yankee = offset.bind(entity)(oscar, golf, report);
            offset = _closure1_slot17;
            golf = offset.set;
            report = mike.id;
            report = golf.bind(offset)(report, yankee);
            report = {};
            golf = _closure1_slot16;
            golf = golf.USER;
            report['type'] = golf;
            report['user'] = mike;
            golf = mike.id;
            report['id'] = golf;
            report['streamId'] = tango;
            report['voiceState'] = oscar;
            report['voicePlatform'] = tango;
            tango = false;
            report['speaking'] = tango;
            oscar = 0;
            report['lastSpoke'] = oscar;
            report['soundsharing'] = tango;
            report['ringing'] = tango;
            golf = _closure1_slot1;
            offset = _closure1_slot2;
            oscar = 14;
            oscar = offset[oscar];
            golf = golf.bind(entity)(oscar);
            oscar = golf.getName;
            oscar = oscar.bind(golf)(verify, options, mike);
            report['userNick'] = oscar;
            report['localVideoDisabled'] = tango;
            tango = _closure1_slot18;
            zulu = tango.set;
            mike = mike.id;
            mike = zulu.bind(tango)(mike, report);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: deleteUserDesyncData
        _fun107346: for(var _fun107346_ip = 0; ; ) switch(_fun107346_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot17;
            entity = zulu.delete;
            entity = entity.bind(zulu)(report);
            tango = _closure1_slot18;
            zulu = tango.delete;
            zulu = zulu.bind(tango)(report);
            tango = _closure1_slot19;
            mike = tango.delete;
            mike = mike.bind(tango)(report);
            if(entity) { _fun107346_ip = 54; continue _fun107346 }
 51:
            entity = zulu;
 54:
            if(entity) { _fun107346_ip = 60; continue _fun107346 }
 57:
            entity = mike;
 60:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: retryFailedUsers
        _fun107347: for(var _fun107347_ip = 0; ; ) switch(_fun107347_ip) {
 0:
            tango = _closure1_slot10;
            zulu = tango.getChannelId;
            oscar = zulu.bind(tango)();
            var _closure2_slot0 = oscar;
            zulu = null;
            if(!(zulu != oscar)) { _fun107347_ip = 99; continue _fun107347 }
 29:
            report = _closure1_slot9;
            tango = report.getChannel;
            report = tango.bind(report)(oscar);
            tango = zulu == report;
            zulu = undefined;
            if(tango) { _fun107347_ip = 62; continue _fun107347 }
 52:
            tango = report.getGuildId;
            zulu = tango.bind(report)();
 62:
            var _closure2_slot1 = zulu;
            zulu = false;
            var _closure2_slot2 = zulu;
            tango = _closure1_slot19;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun107348: for(var _fun107348_ip = 0; ; ) switch(_fun107348_ip) {
 0:
                    oscar = argFoo;
                    report = _closure1_slot12;
                    tango = report.getVoiceStateForChannel;
                    zulu = _closure2_slot0;
                    tango = tango.bind(report)(zulu, oscar);
                    zulu = null;
                    if(!(zulu != tango)) { _fun107348_ip = 51; continue _fun107348 }
 35:
                    report = _closure1_slot19;
                    tango = report.delete;
                    tango = tango.bind(report)(oscar);
                    _fun107348_ip = 111; continue _fun107348;
 51:
                    report = _closure1_slot11;
                    tango = report.getUser;
                    report = tango.bind(report)(oscar);
                    if(!(zulu != report)) { _fun107348_ip = 111; continue _fun107348 }
 70:
                    zulu = true;
                    _closure2_slot2 = zulu;
                    tango = _closure1_slot19;
                    zulu = tango.delete;
                    zulu = zulu.bind(tango)(oscar);
                    tango = _closure1_slot22;
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = tango.bind(entity)(report, zulu, mike);
 111:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            entity = _closure2_slot2;
            return entity;
 99:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    verify = function() { // Original name: handleReset
        zulu = _closure1_slot17;
        mike = zulu.clear;
        mike = mike.bind(zulu)();
        zulu = _closure1_slot18;
        mike = zulu.clear;
        mike = mike.bind(zulu)();
        mike = _closure1_slot19;
        entity = mike.clear;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    var _closure1_slot25 = verify;
    mike = global;
    yankee = mike.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 8;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot11 = options;
    options = 9;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot12 = options;
    options = 10;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.makeSortedVoiceState;
    var _closure1_slot13 = options;
    options = 11;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.ME;
    var _closure1_slot14 = offset;
    options = options.RTCConnectionStates;
    var _closure1_slot15 = options;
    options = 12;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ParticipantTypes;
    var _closure1_slot16 = options;
    options = 13;
    offset = oscar[options];
    offset = golf.bind(entity)(offset);
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    kilo = yankee;
    offset = new kilo[offset](backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot17 = offset;
    options = oscar[options];
    options = golf.bind(entity)(options);
    offset = options.prototype;
    offset = Object.create(offset, {constructor: {value: options}});
    kilo = offset;
    options = new kilo[options](backup);
    options = options instanceof Object ? options : offset;
    var _closure1_slot18 = options;
    mike = mike.Set;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    kilo = options;
    mike = new kilo[mike](backup);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot19 = mike;
    mike = 16;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: RTCConnectionDesyncStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot20;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            golf = tango.waitFor;
            yankee = _closure1_slot12;
            offset = _closure1_slot11;
            verify = _closure1_slot9;
            options = _closure1_slot10;
            romeo = tango;
            mike = romeo[golf](yankee, offset, verify, options, golf);
            zulu = tango.syncWith;
            report = _closure1_slot11;
            mike = new Array(1);
            mike[0] = report;
            entity = _closure1_slot24;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'desyncedVoiceStatesCount';
        report['key'] = golf;
        golf = function() { // Original name: get
            mike = _closure1_slot17;
            entity = mike.size;
            entity = entity.bind(mike)();
            return entity;
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getDesyncedUserIds';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot17;
            entity = mike.keys;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getDesyncedVoiceStates';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot17;
            entity = mike.values;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getDesyncedParticipants';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = _closure1_slot18;
            entity = mike.values;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'RTCConnectionDesyncStore';
    options['displayName'] = mike;
    mike = 17;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    offset = function() { // Original name: handleConnectionOpen
        mike = _closure1_slot25;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['CONNECTION_OPEN'] = offset;
    mike['VOICE_CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleRTCConnectionState
        _fun107358: for(var _fun107358_ip = 0; ; ) switch(_fun107358_ip) {
 0:
            entity = argFoo;
            report = entity.state;
            mike = entity.context;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 15;
            entity = zulu[entity];
            zulu = undefined;
            entity = oscar.bind(zulu)(entity);
            entity = entity.MediaEngineContextTypes;
            entity = entity.DEFAULT;
            entity = mike === entity;
            if(!entity) { _fun107358_ip = 87; continue _fun107358 }
 57:
            mike = _closure1_slot15;
            mike = mike.DISCONNECTED;
            mike = report === mike;
            if(!mike) { _fun107358_ip = 84; continue _fun107358 }
 74:
            tango = _closure1_slot25;
            tango = tango.bind(zulu)();
            mike = undefined;
 84:
            entity = mike;
 87:
            return entity;
        }
    };
    mike['RTC_CONNECTION_STATE'] = verify;
    verify = function(argFoo) { // Original name: handleVoiceStateUpdates
        _fun107359: for(var _fun107359_ip = 0; ; ) switch(_fun107359_ip) {
 0:
            entity = argFoo;
            report = entity.voiceStates;
            zulu = _closure1_slot10;
            entity = zulu.getChannelId;
            zulu = entity.bind(zulu)();
            var _closure2_slot0 = zulu;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun107359_ip = 62; continue _fun107359 }
 41:
            tango = report.reduce;
            zulu = function(argFoo, argBar) {
                _fun107360: for(var _fun107360_ip = 0; ; ) switch(_fun107360_ip) {
 0:
                    mike = argFoo;
                    entity = argBar;
                    report = entity.userId;
                    zulu = entity.channelId;
                    entity = _closure2_slot0;
                    entity = zulu === entity;
                    if(!entity) { _fun107360_ip = 50; continue _fun107360 }
 30:
                    tango = _closure1_slot23;
                    zulu = undefined;
                    zulu = tango.bind(zulu)(report);
                    zulu = !zulu;
                    entity = !zulu;
 50:
                    if(entity) { _fun107360_ip = 56; continue _fun107360 }
 53:
                    entity = mike;
 56:
                    return entity;
                }
            };
            mike = false;
            entity = tango.bind(report)(zulu, mike);
 62:
            return entity;
        }
    };
    mike['VOICE_STATE_UPDATES'] = verify;
    verify = function(argFoo) { // Original name: handleRTCConnectionClientConnect
        _fun107361: for(var _fun107361_ip = 0; ; ) switch(_fun107361_ip) {
 0:
            entity = argFoo;
            report = entity.userIds;
            zulu = entity.guildId;
            var _closure2_slot0 = zulu;
            zulu = entity.channelId;
            var _closure2_slot1 = zulu;
            zulu = entity.context;
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 15;
            tango = tango[entity];
            entity = undefined;
            entity = oscar.bind(entity)(tango);
            entity = entity.MediaEngineContextTypes;
            entity = entity.DEFAULT;
            entity = zulu === entity;
            if(!entity) { _fun107361_ip = 99; continue _fun107361 }
 78:
            tango = report.reduce;
            zulu = function(argFoo, argBar) {
                _fun107362: for(var _fun107362_ip = 0; ; ) switch(_fun107362_ip) {
 0:
                    entity = argFoo;
                    report = argBar;
                    golf = _closure1_slot12;
                    oscar = golf.getVoiceStateForChannel;
                    tango = _closure2_slot1;
                    oscar = oscar.bind(golf)(tango, report);
                    tango = null;
                    if(!(tango == oscar)) { _fun107362_ip = 101; continue _fun107362 }
 38:
                    golf = _closure1_slot11;
                    oscar = golf.getUser;
                    options = oscar.bind(golf)(report);
                    if(!(tango != options)) { _fun107362_ip = 82; continue _fun107362 }
 57:
                    golf = _closure1_slot22;
                    oscar = _closure2_slot0;
                    tango = _closure2_slot1;
                    mike = undefined;
                    mike = golf.bind(mike)(options, oscar, tango);
                    mike = true;
                    _fun107362_ip = 99; continue _fun107362;
 82:
                    tango = _closure1_slot19;
                    zulu = tango.add;
                    zulu = zulu.bind(tango)(report);
                    mike = entity;
 99:
                    return mike;
 101:
                    return entity;
                }
            };
            mike = false;
            entity = tango.bind(report)(zulu, mike);
 99:
            return entity;
        }
    };
    mike['RTC_CONNECTION_CLIENT_CONNECT'] = verify;
    tango = function(argFoo) { // Original name: handleRTCConnectionClientDisconnect
        _fun107363: for(var _fun107363_ip = 0; ; ) switch(_fun107363_ip) {
 0:
            entity = argFoo;
            tango = entity.userId;
            report = entity.context;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 15;
            entity = zulu[entity];
            zulu = undefined;
            entity = oscar.bind(zulu)(entity);
            entity = entity.MediaEngineContextTypes;
            entity = entity.DEFAULT;
            entity = report === entity;
            if(!entity) { _fun107363_ip = 66; continue _fun107363 }
 57:
            mike = _closure1_slot23;
            entity = mike.bind(zulu)(tango);
 66:
            return entity;
        }
    };
    mike['RTC_CONNECTION_CLIENT_DISCONNECT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/RTCConnectionDesyncStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();