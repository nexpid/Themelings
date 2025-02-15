// app/modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun107042: for(var _fun107042_ip = 0; ; ) switch(_fun107042_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun107042_ip = 51; continue _fun107042 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun107042_ip = 92; continue _fun107042;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun107042_ip = 71; continue _fun107042 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun107043: for(var _fun107043_ip = 0; ; ) switch(_fun107043_ip) {
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
            _fun107043_ip = 76; continue _fun107043;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    verify = function() { // Original name: init
        entity = {};
        _closure1_slot9 = entity;
        entity = {};
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot14 = verify;
    tango = function(argFoo) { // Original name: handleRelationshipChange
        _fun107047: for(var _fun107047_ip = 0; ; ) switch(_fun107047_ip) {
 0:
            entity = argFoo;
            mike = entity.relationship;
            report = _closure1_slot8;
            zulu = report.getVoiceStateForUser;
            entity = mike.id;
            zulu = zulu.bind(report)(entity);
            oscar = null;
            entity = oscar != zulu;
            if(!entity) { _fun107047_ip = 50; continue _fun107047 }
 41:
            report = zulu.channelId;
            entity = oscar != report;
 50:
            if(!entity) { _fun107047_ip = 75; continue _fun107047 }
 53:
            report = _closure1_slot15;
            tango = zulu.channelId;
            zulu = mike.id;
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 75:
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: processUserInChannel
        _fun107048: for(var _fun107048_ip = 0; ; ) switch(_fun107048_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = global;
            golf = entity.Set;
            zulu = _closure1_slot9;
            foxtrot = zulu[report];
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            backup = oscar;
            zulu = new backup[golf](foxtrot, romeo);
            golf = zulu instanceof Object ? zulu : oscar;
            oscar = _closure1_slot7;
            zulu = oscar.isBlocked;
            options = zulu.bind(oscar)(tango);
            if(!options) { _fun107048_ip = 92; continue _fun107048 }
 63:
            zulu = golf.has;
            zulu = zulu.bind(golf)(tango);
            if(zulu) { _fun107048_ip = 92; continue _fun107048 }
 76:
            zulu = golf.add;
            zulu = zulu.bind(golf)(tango);
            offset = true;
            oscar = true;
            _fun107048_ip = 111; continue _fun107048;
 92:
            offset = false;
            oscar = false;
            if(options) { _fun107048_ip = 111; continue _fun107048 }
 99:
            options = golf.delete;
            offset = options.bind(golf)(tango);
            oscar = false;
 111:
            zulu = golf.size;
            options = 0;
            if(!(options === zulu)) { _fun107048_ip = 125; continue _fun107048 }
 122:
            if(offset) { _fun107048_ip = 138; continue _fun107048 }
 125:
            if(!offset) { _fun107048_ip = 146; continue _fun107048 }
 128:
            zulu = _closure1_slot9;
            zulu[report] = golf;
            _fun107048_ip = 146; continue _fun107048;
 138:
            zulu = _closure1_slot9;
            zulu = delete zulu[report];
 146:
            golf = entity.Set;
            entity = _closure1_slot10;
            foxtrot = entity[report];
            zulu = golf.prototype;
            zulu = Object.create(zulu, {constructor: {value: golf}});
            backup = zulu;
            entity = new backup[golf](foxtrot, romeo);
            golf = entity instanceof Object ? entity : zulu;
            zulu = _closure1_slot7;
            entity = zulu.isIgnored;
            verify = entity.bind(zulu)(tango);
            if(!verify) { _fun107048_ip = 227; continue _fun107048 }
 198:
            entity = golf.has;
            entity = entity.bind(golf)(tango);
            if(entity) { _fun107048_ip = 227; continue _fun107048 }
 211:
            entity = golf.add;
            entity = entity.bind(golf)(tango);
            entity = true;
            zulu = true;
            _fun107048_ip = 249; continue _fun107048;
 227:
            entity = offset;
            zulu = oscar;
            if(verify) { _fun107048_ip = 249; continue _fun107048 }
 236:
            verify = golf.delete;
            entity = verify.bind(golf)(tango);
            zulu = oscar;
 249:
            oscar = golf.size;
            if(!(options === oscar)) { _fun107048_ip = 261; continue _fun107048 }
 258:
            if(entity) { _fun107048_ip = 274; continue _fun107048 }
 261:
            if(!entity) { _fun107048_ip = 282; continue _fun107048 }
 264:
            oscar = _closure1_slot10;
            oscar[report] = golf;
            _fun107048_ip = 282; continue _fun107048;
 274:
            oscar = _closure1_slot10;
            oscar = delete oscar[report];
 282:
            if(!zulu) { _fun107048_ip = 321; continue _fun107048 }
 285:
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 7;
            zulu = zulu[mike];
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            mike = zulu.handleBlockedOrIgnoredUserVoiceChannelJoin;
            mike = mike.bind(zulu)(report, tango);
 321:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    mike = global;
    yankee = mike.Object;
    offset = yankee.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, golf);
    entity = 0;
    golf = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 1;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 4;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 6;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = {};
    var _closure1_slot9 = golf;
    golf = {};
    var _closure1_slot10 = golf;
    mike = mike.Set;
    golf = mike.prototype;
    golf = Object.create(golf, {constructor: {value: mike}});
    kilo = golf;
    mike = new kilo[mike](backup);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot11 = mike;
    mike = 8;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: VoiceChannelBlockedUserStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot12;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            zulu = tango.waitFor;
            mike = _closure1_slot7;
            entity = _closure1_slot8;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getBlockedUsersForVoiceChannel';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun107052: for(var _fun107052_ip = 0; ; ) switch(_fun107052_ip) {
 0:
                zulu = _closure1_slot9;
                entity = argFoo;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun107052_ip = 24; continue _fun107052 }
 20:
                entity = _closure1_slot11;
 24:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getIgnoredUsersForVoiceChannel';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun107053: for(var _fun107053_ip = 0; ; ) switch(_fun107053_ip) {
 0:
                zulu = _closure1_slot10;
                entity = argFoo;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun107053_ip = 24; continue _fun107053 }
 20:
                entity = _closure1_slot11;
 24:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 9;
    mike = report[mike];
    backup = oscar.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = verify;
    mike['LOGOUT'] = verify;
    verify = function() { // Original name: handleOverlayInitialize
        _fun107054: for(var _fun107054_ip = 0; ; ) switch(_fun107054_ip) {
 0:
            entity = _closure1_slot14;
            offset = undefined;
            entity = entity.bind(offset)();
            mike = _closure1_slot8;
            entity = mike.getAllVoiceStates;
            zulu = entity.bind(mike)();
            verify = global;
            mike = verify.Object;
            entity = mike.values;
            options = entity.bind(mike)(zulu);
            entity = options.length;
            golf = 0;
            mike = golf < entity;
            report = false;
            oscar = null;
            tango = 0;
            zulu = undefined;
            entity = false;
            if(!mike) { _fun107054_ip = 196; continue _fun107054 }
 72:
            foxtrot = options[tango];
            romeo = verify.Object;
            mike = romeo.values;
            kilo = mike.bind(romeo)(foxtrot);
            mike = kilo.length;
            mike = golf < mike;
            backup = report;
            foxtrot = 0;
            romeo = backup;
            if(!mike) { _fun107054_ip = 178; continue _fun107054 }
 112:
            sizing = kilo[foxtrot];
            mike = sizing.channelId;
            output = backup;
            if(!(oscar != mike)) { _fun107054_ip = 157; continue _fun107054 }
 128:
            echo = _closure1_slot15;
            result = sizing.channelId;
            mike = sizing.userId;
            mike = echo.bind(offset)(result, mike);
            if(mike) { _fun107054_ip = 154; continue _fun107054 }
 151:
            mike = backup;
 154:
            output = mike;
 157:
            foxtrot = foxtrot + 1;
            mike = kilo.length;
            backup = output;
            romeo = backup;
            zulu = sizing;
            if(foxtrot < mike) { _fun107054_ip = 112; continue _fun107054 }
 178:
            tango = tango + 1;
            mike = options.length;
            report = romeo;
            entity = report;
            if(tango < mike) { _fun107054_ip = 72; continue _fun107054 }
 196:
            return entity;
        }
    };
    mike['OVERLAY_INITIALIZE'] = verify;
    options = function(argFoo) { // Original name: handleVoiceStateUpdates
        mike = argFoo;
        tango = mike.voiceStates;
        mike = false;
        var _closure2_slot0 = mike;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun107056: for(var _fun107056_ip = 0; ; ) switch(_fun107056_ip) {
 0:
                entity = argFoo;
                mike = entity.oldChannelId;
                zulu = null;
                if(!(zulu != mike)) { _fun107056_ip = 141; continue _fun107056 }
 18:
                report = _closure1_slot9;
                tango = entity.oldChannelId;
                tango = report[tango];
                if(!(zulu != tango)) { _fun107056_ip = 81; continue _fun107056 }
 39:
                report = _closure1_slot9;
                tango = entity.oldChannelId;
                oscar = report[tango];
                if(!(zulu != oscar)) { _fun107056_ip = 72; continue _fun107056 }
 57:
                report = oscar.delete;
                tango = entity.userId;
                tango = report.bind(oscar)(tango);
 72:
                tango = true;
                _closure2_slot0 = tango;
 81:
                report = _closure1_slot10;
                tango = entity.oldChannelId;
                tango = report[tango];
                if(!(zulu != tango)) { _fun107056_ip = 141; continue _fun107056 }
 99:
                tango = _closure1_slot10;
                mike = entity.oldChannelId;
                report = tango[mike];
                if(!(zulu != report)) { _fun107056_ip = 132; continue _fun107056 }
 117:
                tango = report.delete;
                mike = entity.userId;
                mike = tango.bind(report)(mike);
 132:
                mike = true;
                _closure2_slot0 = mike;
 141:
                mike = entity.channelId;
                if(!(zulu != mike)) { _fun107056_ip = 192; continue _fun107056 }
 150:
                tango = _closure1_slot15;
                zulu = entity.channelId;
                mike = entity.userId;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                if(mike) { _fun107056_ip = 185; continue _fun107056 }
 178:
                mike = _closure2_slot0;
 185:
                _closure2_slot0 = mike;
 192:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        entity = _closure2_slot0;
        return entity;
    };
    mike['VOICE_STATE_UPDATES'] = options;
    mike['RELATIONSHIP_ADD'] = tango;
    mike['RELATIONSHIP_REMOVE'] = tango;
    mike['RELATIONSHIP_UPDATE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[golf](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();