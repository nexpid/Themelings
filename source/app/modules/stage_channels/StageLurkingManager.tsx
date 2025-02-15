// app/modules/stage_channels/StageLurkingManager.tsx
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
            entity = _closure1_slot11;
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
    var _closure1_slot10 = entity;
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
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: StageLurkingManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot10;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.channelId;
                    tango = entity.guildId;
                    mike = null;
                    if(!(mike != zulu)) { _fun00006_ip = 53; continue _fun00005 }
 19:
                    report = _closure1_slot8;
                    entity = report.getChannel;
                    report = entity.bind(report)(zulu);
                    if(!(mike != report)) { _fun00006_ip = 113; continue _fun00005 }
 40:
                    entity = report.isGuildStageVoice;
                    entity = entity.bind(report)();
                    if(entity) { _fun00006_ip = 113; continue _fun00005 }
 53:
                    oscar = _closure3_slot0;
                    report = oscar.terminate;
                    report = report.bind(oscar)();
                    report = mike == zulu;
                    zulu = null;
                    if(report) { _fun00006_ip = 94; continue _fun00005 }
 79:
                    report = mike != tango;
                    mike = null;
                    if(!report) { _fun00006_ip = 91; continue _fun00005 }
 88:
                    mike = tango;
 91:
                    zulu = mike;
 94:
                    mike = _closure3_slot0;
                    entity = mike.handleDisconnectFromStageChannel;
                    entity = entity.bind(mike)(zulu);
                    entity = undefined;
                    return entity;
 113:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleVoiceChannelSelect'] = zulu;
            zulu = function(argFoo) {
                zulu = _closure1_slot9;
                mike = zulu.getGuildId;
                mike = mike.bind(zulu)();
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 7;
                zulu = options[entity];
                entity = undefined;
                tango = golf.bind(entity)(zulu);
                zulu = tango.stopLurkingAll;
                oscar = new Array(2);
                oscar[0] = mike;
                mike = argFoo;
                oscar[1] = mike;
                report = oscar.filter;
                mike = 8;
                mike = options[mike];
                mike = golf.bind(entity)(mike);
                mike = mike.isNotNullish;
                mike = report.bind(oscar)(mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleDisconnectFromStageChannel'] = zulu;
            mike = function() {
                zulu = _closure3_slot0;
                entity = zulu.terminate;
                entity = entity.bind(zulu)();
                mike = zulu.handleDisconnectFromStageChannel;
                entity = null;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleLogout'] = mike;
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
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 9;
            oscar = report[zulu];
            entity = undefined;
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleVoiceChannelSelect;
            oscar = 'VOICE_CHANNEL_SELECT';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.subscribe;
            zulu = mike.handleLogout;
            mike = 'LOGOUT';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = this;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 9;
            oscar = report[zulu];
            entity = undefined;
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleVoiceChannelSelect;
            oscar = 'VOICE_CHANNEL_SELECT';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = mike.handleLogout;
            mike = 'LOGOUT';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/StageLurkingManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();