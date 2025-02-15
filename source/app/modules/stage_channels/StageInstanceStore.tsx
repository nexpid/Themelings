// app/modules/stage_channels/StageInstanceStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun37575: for(var _fun37575_ip = 0; ; ) switch(_fun37575_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun37575_ip = 51; continue _fun37575 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun37575_ip = 92; continue _fun37575;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun37575_ip = 71; continue _fun37575 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun37576: for(var _fun37576_ip = 0; ; ) switch(_fun37576_ip) {
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
            _fun37576_ip = 74; continue _fun37576;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: addStageInstancesForGuild
        _fun37579: for(var _fun37579_ip = 0; ; ) switch(_fun37579_ip) {
 0:
            zulu = argFoo;
            oscar = argBar;
            mike = {};
            report = _closure1_slot6;
            golf = report[zulu];
            report = null;
            if(!(report == golf)) { _fun37579_ip = 29; continue _fun37579 }
 27:
            golf = {};
 29:
            offset = mike;
            verify = golf;
            golf = copyDataProperties(offset, verify);
            var _closure2_slot0 = mike;
            if(!(report != oscar)) { _fun37579_ip = 62; continue _fun37579 }
 47:
            report = oscar.forEach;
            tango = function(argFoo) {
                zulu = argFoo;
                mike = _closure1_slot7;
                entity = zulu.channel_id;
                mike[entity] = zulu;
                mike = _closure2_slot0;
                entity = zulu.channel_id;
                mike[entity] = zulu;
                entity = undefined;
                return entity;
            };
            tango = report.bind(oscar)(tango);
 62:
            entity = _closure1_slot6;
            entity[zulu] = mike;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    verify = function(argFoo) { // Original name: handleStageInstanceCreateOrUpdate
        entity = argFoo;
        entity = entity.instance;
        tango = _closure1_slot10;
        zulu = entity.guild_id;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    entity = function(argFoo, argBar) { // Original name: doDelete
        _fun37582: for(var _fun37582_ip = 0; ; ) switch(_fun37582_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            mike = _closure1_slot7;
            mike = delete mike[tango];
            oscar = null;
            if(!(oscar != zulu)) { _fun37582_ip = 61; continue _fun37582 }
 23:
            mike = {};
            report = _closure1_slot6;
            report = report[zulu];
            if(!(oscar == report)) { _fun37582_ip = 39; continue _fun37582 }
 37:
            report = {};
 39:
            options = mike;
            golf = report;
            report = copyDataProperties(options, golf);
            tango = delete mike[tango];
            entity = _closure1_slot6;
            entity[zulu] = mike;
 61:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.GuildScheduledEventPrivacyLevel;
    var _closure1_slot5 = mike;
    mike = {};
    var _closure1_slot6 = mike;
    mike = {};
    var _closure1_slot7 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: StageInstanceStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'getStageInstanceByChannel';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun37585: for(var _fun37585_ip = 0; ; ) switch(_fun37585_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity == mike)) { _fun37585_ip = 13; continue _fun37585 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = _closure1_slot7;
                entity = entity[mike];
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'isLive';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = this;
            mike = zulu.getStageInstanceByChannel;
            entity = argFoo;
            mike = mike.bind(zulu)(entity);
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isPublic';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun37587: for(var _fun37587_ip = 0; ; ) switch(_fun37587_ip) {
 0:
                zulu = this;
                mike = zulu.getStageInstanceByChannel;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                mike = null;
                zulu = mike == entity;
                mike = undefined;
                if(zulu) { _fun37587_ip = 34; continue _fun37587 }
 28:
                mike = entity.privacy_level;
 34:
                entity = _closure1_slot5;
                entity = entity.PUBLIC;
                entity = mike === entity;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getStageInstancesByGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun37588: for(var _fun37588_ip = 0; ; ) switch(_fun37588_ip) {
 0:
                zulu = argFoo;
                mike = null;
                if(!(mike != zulu)) { _fun37588_ip = 28; continue _fun37588 }
 9:
                entity = _closure1_slot6;
                entity = entity[zulu];
                if(!(mike == entity)) { _fun37588_ip = 26; continue _fun37588 }
 24:
                entity = {};
 26:
                _fun37588_ip = 30; continue _fun37588;
 28:
                entity = {};
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getAllStageInstances';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            entity = _closure1_slot7;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'StageInstanceStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        zulu = entity.guilds;
        entity = {};
        _closure1_slot6 = entity;
        entity = {};
        _closure1_slot7 = entity;
        mike = zulu.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot10;
            zulu = entity.id;
            mike = entity.stage_instances;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        entity = entity.guild;
        tango = _closure1_slot10;
        zulu = entity.id;
        mike = entity.stage_instances;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['GUILD_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDelete
        _fun37593: for(var _fun37593_ip = 0; ; ) switch(_fun37593_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            tango = _closure1_slot6;
            zulu = entity.id;
            zulu = tango[zulu];
            tango = null;
            if(!(tango == zulu)) { _fun37593_ip = 32; continue _fun37593 }
 30:
            zulu = {};
 32:
            mike = _closure1_slot6;
            entity = entity.id;
            entity = delete mike[entity];
            entity = global;
            mike = entity.Object;
            entity = mike.keys;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.forEach;
            entity = function(argFoo) {
                mike = _closure1_slot7;
                entity = argFoo;
                entity = delete mike[entity];
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_DELETE'] = offset;
    mike['STAGE_INSTANCE_CREATE'] = verify;
    mike['STAGE_INSTANCE_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleStageInstanceDelete
        entity = argFoo;
        entity = entity.instance;
        tango = _closure1_slot11;
        zulu = entity.guild_id;
        mike = entity.channel_id;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['STAGE_INSTANCE_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleChannelDelete
        entity = argFoo;
        entity = entity.channel;
        tango = _closure1_slot11;
        zulu = entity.guild_id;
        mike = entity.id;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['CHANNEL_DELETE'] = verify;
    tango = function() { // Original name: handleLogout
        entity = {};
        _closure1_slot7 = entity;
        entity = {};
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/StageInstanceStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();