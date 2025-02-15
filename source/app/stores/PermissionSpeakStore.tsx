// app/stores/PermissionSpeakStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot15;
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
            report = _closure1_slot5;
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
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    options = true;
    mike['value'] = options;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = false;
    var _closure1_slot11 = mike;
    var _closure1_slot12 = options;
    var _closure1_slot13 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: PermissionSpeakStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
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
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                report = mike.Storage;
                tango = report.get;
                mike = 'hideSuppressWarning';
                mike = tango.bind(report)(mike);
                if(mike) { _fun00006_ip = 54; continue _fun00005 }
 50:
                mike = _closure1_slot13;
 54:
                _closure1_slot13 = mike;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'isAFKChannel';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = _closure1_slot7;
                zulu = tango.getChannel;
                entity = _closure1_slot10;
                zulu = zulu.bind(tango)(entity);
                entity = null;
                if(!(entity != zulu)) { _fun00008_ip = 75; continue _fun00007 }
 27:
                report = _closure1_slot8;
                tango = report.getGuild;
                mike = zulu.getGuildId;
                mike = mike.bind(zulu)();
                mike = tango.bind(report)(mike);
                entity = entity != mike;
                if(!entity) { _fun00008_ip = 73; continue _fun00007 }
 58:
                zulu = zulu.id;
                mike = mike.afkChannelId;
                entity = zulu === mike;
 73:
                return entity;
 75:
                entity = false;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'shouldShowWarning';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = _closure1_slot7;
                zulu = tango.getChannel;
                entity = _closure1_slot10;
                tango = zulu.bind(tango)(entity);
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun00010_ip = 40; continue _fun00009 }
 30:
                zulu = tango.isGuildStageVoice;
                entity = zulu.bind(tango)();
 40:
                if(entity) { _fun00010_ip = 47; continue _fun00009 }
 43:
                entity = _closure1_slot12;
 47:
                entity = !entity;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'PermissionSpeakStore';
    options['displayName'] = mike;
    mike = 9;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        entity = entity.sessionId;
        var _closure1_slot9 = entity;
        entity = false;
        _closure1_slot11 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function() { // Original name: handleConnectionClosed
        entity = null;
        _closure1_slot9 = entity;
        var _closure1_slot10 = entity;
        entity = true;
        _closure1_slot12 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_CLOSED'] = verify;
    verify = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        tango = entity.voiceStates;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                mike = argBar;
                report = _closure1_slot9;
                tango = mike.sessionId;
                if(!(report === tango)) { _fun00012_ip = 118; continue _fun00011 }
 23:
                report = _closure1_slot11;
                tango = mike.suppress;
                if(!(report !== tango)) { _fun00012_ip = 54; continue _fun00011 }
 37:
                tango = mike.suppress;
                _closure1_slot11 = tango;
                tango = !tango;
                _closure1_slot12 = tango;
 54:
                report = _closure1_slot10;
                tango = mike.channelId;
                if(!(report !== tango)) { _fun00012_ip = 87; continue _fun00011 }
 67:
                tango = mike.channelId;
                _closure1_slot10 = tango;
                tango = _closure1_slot11;
                tango = !tango;
                _closure1_slot12 = tango;
 87:
                tango = _closure1_slot13;
                if(tango) { _fun00012_ip = 105; continue _fun00011 }
 94:
                report = mike.channelId;
                mike = null;
                tango = mike == report;
 105:
                mike = true;
                entity = true;
                if(!tango) { _fun00012_ip = 118; continue _fun00011 }
 112:
                _closure1_slot12 = mike;
                entity = true;
 118:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['VOICE_STATE_UPDATES'] = verify;
    tango = function(argFoo) { // Original name: handleClearWarning
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zulu = entity.forever;
            mike = true;
            _closure1_slot12 = mike;
            if(!zulu) { _fun00014_ip = 74; continue _fun00013 }
 21:
            _closure1_slot13 = mike;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 7;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            tango = mike.Storage;
            zulu = tango.set;
            mike = _closure1_slot13;
            entity = 'hideSuppressWarning';
            entity = zulu.bind(tango)(entity, mike);
 74:
            entity = undefined;
            return entity;
        }
    };
    mike['PERMISSION_CLEAR_SUPPRESS_WARNING'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/PermissionSpeakStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();