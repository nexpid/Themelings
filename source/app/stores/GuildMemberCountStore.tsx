// app/stores/GuildMemberCountStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
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
    options = function(argFoo) { // Original name: handleInviteData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            entity = entity.invite;
            mike = entity.guild;
            tango = entity.approximate_presence_count;
            zulu = null;
            oscar = zulu == mike;
            entity = undefined;
            report = undefined;
            if(oscar) { _fun00006_ip = 38; continue _fun00005 }
 33:
            report = mike.id;
 38:
            if(!(zulu != report)) { _fun00006_ip = 64; continue _fun00005 }
 42:
            if(!(zulu != tango)) { _fun00006_ip = 64; continue _fun00005 }
 46:
            zulu = _closure1_slot6;
            mike = mike.id;
            zulu[mike] = tango;
            return entity;
 64:
            entity = false;
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
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
        tango = function() { // Original name: GuildMemberCountStore
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
        entity = 'getMemberCounts';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getMemberCount';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = argFoo;
                entity = null;
                mike = entity != zulu;
                if(!mike) { _fun00008_ip = 23; continue _fun00007 }
 12:
                mike = _closure1_slot5;
                entity = mike[zulu];
 23:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getOnlineCount';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = argFoo;
                entity = null;
                mike = entity != zulu;
                if(!mike) { _fun00010_ip = 23; continue _fun00009 }
 12:
                mike = _closure1_slot6;
                entity = mike[zulu];
 23:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'GuildMemberCountStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        zulu = entity.guilds;
        entity = {};
        _closure1_slot5 = entity;
        mike = zulu.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = _closure1_slot5;
            mike = entity.id;
            entity = entity.member_count;
            zulu[mike] = entity;
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleOverlayInitialize
        mike = {};
        entity = argFoo;
        zulu = entity.guildMemberCounts;
        tango = mike;
        entity = copyDataProperties(tango, zulu);
        _closure1_slot5 = mike;
        entity = undefined;
        return entity;
    };
    mike['OVERLAY_INITIALIZE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        entity = entity.guild;
        zulu = _closure1_slot5;
        mike = entity.id;
        entity = entity.member_count;
        zulu[mike] = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildDelete
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            tango = _closure1_slot5;
            zulu = entity.id;
            zulu = tango[zulu];
            tango = null;
            if(!(tango == zulu)) { _fun00012_ip = 47; continue _fun00011 }
 30:
            report = _closure1_slot6;
            zulu = entity.id;
            zulu = report[zulu];
            if(!(tango != zulu)) { _fun00012_ip = 77; continue _fun00011 }
 47:
            tango = _closure1_slot5;
            zulu = entity.id;
            zulu = delete tango[zulu];
            mike = _closure1_slot6;
            entity = entity.id;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
 77:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildMemberListUpdate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            oscar = entity.memberCount;
            zulu = entity.onlineCount;
            entity = _closure1_slot5;
            report = entity[tango];
            entity = false;
            if(!(report !== oscar)) { _fun00014_ip = 47; continue _fun00013 }
 37:
            report = _closure1_slot5;
            report[tango] = oscar;
            entity = true;
 47:
            report = _closure1_slot6;
            report = report[tango];
            if(!(report !== zulu)) { _fun00014_ip = 69; continue _fun00013 }
 59:
            mike = _closure1_slot6;
            mike[tango] = zulu;
            entity = true;
 69:
            return entity;
        }
    };
    mike['GUILD_MEMBER_LIST_UPDATE'] = verify;
    mike['INVITE_ACCEPT_SUCCESS'] = options;
    mike['INVITE_RESOLVE_SUCCESS'] = options;
    tango = function(argFoo) { // Original name: handleOnlineCountUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = entity.count;
            entity = null;
            if(!(entity != zulu)) { _fun00016_ip = 38; continue _fun00015 }
 19:
            if(!(entity != mike)) { _fun00016_ip = 38; continue _fun00015 }
 23:
            entity = _closure1_slot6;
            entity[zulu] = mike;
            entity = undefined;
            return entity;
 38:
            entity = false;
            return entity;
        }
    };
    mike['ONLINE_GUILD_MEMBER_COUNT_UPDATE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/GuildMemberCountStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();