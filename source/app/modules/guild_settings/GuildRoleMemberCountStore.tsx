// app/modules/guild_settings/GuildRoleMemberCountStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun62366: for(var _fun62366_ip = 0; ; ) switch(_fun62366_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun62366_ip = 51; continue _fun62366 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun62366_ip = 92; continue _fun62366;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun62366_ip = 71; continue _fun62366 }
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
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun62367: for(var _fun62367_ip = 0; ; ) switch(_fun62367_ip) {
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
            _fun62367_ip = 74; continue _fun62367;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = {};
    var _closure1_slot5 = mike;
    mike = {};
    var _closure1_slot6 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildRoleMemberCountStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
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
        entity = 'getRoleMemberCount';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun62372: for(var _fun62372_ip = 0; ; ) switch(_fun62372_ip) {
 0:
                zulu = argFoo;
                entity = null;
                mike = entity != zulu;
                if(!mike) { _fun62372_ip = 23; continue _fun62372 }
 12:
                mike = _closure1_slot5;
                entity = mike[zulu];
 23:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'shouldFetch';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun62373: for(var _fun62373_ip = 0; ; ) switch(_fun62373_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity != zulu)) { _fun62373_ip = 60; continue _fun62373 }
 9:
                mike = _closure1_slot6;
                zulu = mike[zulu];
                entity = entity == zulu;
                if(entity) { _fun62373_ip = 58; continue _fun62373 }
 27:
                mike = global;
                tango = mike.Date;
                mike = tango.now;
                mike = mike.bind(tango)();
                zulu = mike - zulu;
                mike = 120000;
                entity = zulu > mike;
 58:
                return entity;
 60:
                entity = false;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'GuildRoleMemberCountStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleGuildRoleMemberCountFetchSuccess
        entity = argFoo;
        zulu = entity.guildId;
        tango = entity.roleMemberCount;
        mike = _closure1_slot5;
        mike[zulu] = tango;
        mike = _closure1_slot6;
        entity = global;
        tango = entity.Date;
        entity = tango.now;
        entity = entity.bind(tango)();
        mike[zulu] = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handleGuildRoleMemberCountUpdate
        _fun62375: for(var _fun62375_ip = 0; ; ) switch(_fun62375_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            zulu = entity.roleId;
            mike = entity.count;
            entity = _closure1_slot5;
            entity = entity[tango];
            tango = null;
            if(!(tango != entity)) { _fun62375_ip = 44; continue _fun62375 }
 36:
            entity[zulu] = mike;
            entity = undefined;
            return entity;
 44:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_ROLE_MEMBER_COUNT_UPDATE'] = options;
    options = function(argFoo) { // Original name: handleGuildRoleMemberBulkAdd
        _fun62376: for(var _fun62376_ip = 0; ; ) switch(_fun62376_ip) {
 0:
            entity = argFoo;
            mike = entity.guildId;
            zulu = entity.roleId;
            report = entity.added;
            entity = _closure1_slot5;
            mike = entity[mike];
            tango = null;
            if(!(tango != mike)) { _fun62376_ip = 88; continue _fun62376 }
 37:
            entity = mike[zulu];
            if(!(tango != entity)) { _fun62376_ip = 84; continue _fun62376 }
 45:
            entity = global;
            tango = entity.Object;
            entity = tango.keys;
            entity = entity.bind(tango)(report);
            tango = entity.length;
            entity = mike[zulu];
            entity = entity + tango;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
 84:
            entity = false;
            return entity;
 88:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_ROLE_MEMBER_BULK_ADD'] = options;
    options = function(argFoo) { // Original name: handleGuildRoleMemberAdd
        _fun62377: for(var _fun62377_ip = 0; ; ) switch(_fun62377_ip) {
 0:
            entity = argFoo;
            mike = entity.guildId;
            report = entity.roleId;
            entity = _closure1_slot5;
            tango = entity[mike];
            zulu = null;
            entity = zulu != tango;
            if(!entity) { _fun62377_ip = 65; continue _fun62377 }
 34:
            mike = tango[report];
            mike = zulu != mike;
            if(!mike) { _fun62377_ip = 62; continue _fun62377 }
 45:
            oscar = tango[report];
            zulu = 1;
            zulu = oscar + zulu;
            tango[report] = zulu;
            mike = undefined;
 62:
            entity = mike;
 65:
            return entity;
        }
    };
    mike['GUILD_ROLE_MEMBER_ADD'] = options;
    options = function(argFoo) { // Original name: handleGuildRoleMemberRemove
        _fun62378: for(var _fun62378_ip = 0; ; ) switch(_fun62378_ip) {
 0:
            entity = argFoo;
            mike = entity.guildId;
            report = entity.roleId;
            entity = _closure1_slot5;
            tango = entity[mike];
            zulu = null;
            entity = zulu != tango;
            if(!entity) { _fun62378_ip = 86; continue _fun62378 }
 34:
            mike = tango[report];
            mike = zulu != mike;
            if(!mike) { _fun62378_ip = 83; continue _fun62378 }
 45:
            zulu = global;
            options = zulu.Math;
            golf = options.max;
            oscar = tango[report];
            zulu = 1;
            oscar = oscar - zulu;
            zulu = 0;
            zulu = golf.bind(options)(oscar, zulu);
            tango[report] = zulu;
            mike = undefined;
 83:
            entity = mike;
 86:
            return entity;
        }
    };
    mike['GUILD_ROLE_MEMBER_REMOVE'] = options;
    options = function(argFoo) { // Original name: handleGuildRoleCreate
        _fun62379: for(var _fun62379_ip = 0; ; ) switch(_fun62379_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            entity = entity.role;
            tango = _closure1_slot5;
            report = tango[zulu];
            tango = null;
            if(!(tango == report)) { _fun62379_ip = 41; continue _fun62379 }
 31:
            report = _closure1_slot5;
            tango = {};
            report[zulu] = tango;
 41:
            mike = _closure1_slot5;
            zulu = mike[zulu];
            mike = entity.id;
            entity = 0;
            zulu[mike] = entity;
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_ROLE_CREATE'] = options;
    tango = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        tango = _closure1_slot5;
        zulu = entity.id;
        zulu = delete tango[zulu];
        mike = _closure1_slot6;
        entity = entity.id;
        entity = delete mike[entity];
        entity = undefined;
        return entity;
    };
    mike['GUILD_DELETE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildRoleMemberCountStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();