// app/modules/relationships/GuildFriendshipStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
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
            report = _closure1_slot5;
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
    entity = function(argFoo) { // Original name: getFetchState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot8;
            entity = argFoo;
            tango = zulu[entity];
            zulu = null;
            report = zulu == tango;
            entity = undefined;
            if(report) { _fun00006_ip = 31; continue _fun00005 }
 25:
            entity = tango.fetchState;
 31:
            if(!(zulu == entity)) { _fun00006_ip = 45; continue _fun00005 }
 35:
            mike = _closure1_slot7;
            entity = mike.NOT_FETCHED;
 45:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    options = function() { // Original name: resetStates
        entity = {};
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    mike = 0;
    golf = report[mike];
    entity = undefined;
    golf = oscar.bind(entity)(golf);
    var _closure1_slot2 = golf;
    yankee = 1;
    golf = report[yankee];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot3 = golf;
    offset = 2;
    golf = report[offset];
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
    golf = {};
    golf['NOT_FETCHED'] = mike;
    verify = 'NOT_FETCHED';
    golf[mike] = verify;
    golf['FETCHING'] = yankee;
    verify = 'FETCHING';
    golf[yankee] = verify;
    golf['FETCHED'] = offset;
    verify = 'FETCHED';
    golf[offset] = verify;
    var _closure1_slot7 = golf;
    golf = {};
    var _closure1_slot8 = golf;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildFriendshipStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
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
        entity = 'isFetchingFriendsForGuild';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            tango = _closure1_slot12;
            zulu = undefined;
            mike = argFoo;
            mike = tango.bind(zulu)(mike);
            entity = _closure1_slot7;
            entity = entity.FETCHING;
            entity = mike === entity;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'fetchFriendMembersIfNotFetched';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscar = argFoo;
                report = argBar;
                zulu = _closure1_slot12;
                entity = undefined;
                tango = zulu.bind(entity)(oscar);
                zulu = _closure1_slot7;
                zulu = zulu.NOT_FETCHED;
                if(!(tango === zulu)) { _fun00008_ip = 112; continue _fun00007 }
 34:
                tango = _closure1_slot8;
                zulu = {'fetchState': null, 'foundMembers': 0, 'notFoundMembers': 0};
                golf = _closure1_slot7;
                golf = golf.FETCHING;
                zulu['fetchState'] = golf;
                tango[oscar] = zulu;
                zulu = report.length;
                _closure1_slot9 = zulu;
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 5;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.requestMembersById;
                mike = false;
                mike = zulu.bind(tango)(oscar, report, mike);
 112:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 7;
    mike = report[mike];
    backup = oscar.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = options;
    mike['LOGOUT'] = options;
    mike['RELATIONSHIP_ADD'] = options;
    mike['RELATIONSHIP_REMOVE'] = options;
    tango = function(argFoo) { // Original name: onMemberChunk
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            entity = entity.chunks;
            oscar = 0;
            golf = entity[oscar];
            tango = golf.guildId;
            zulu = _closure1_slot12;
            entity = undefined;
            report = zulu.bind(entity)(tango);
            zulu = _closure1_slot7;
            zulu = zulu.FETCHING;
            if(!(report === zulu)) { _fun00010_ip = 208; continue _fun00009 }
 51:
            zulu = _closure1_slot8;
            report = zulu[tango];
            options = report.foundMembers;
            zulu = golf.members;
            zulu = zulu.length;
            zulu = options + zulu;
            report['foundMembers'] = zulu;
            zulu = _closure1_slot8;
            report = zulu[tango];
            zulu = report.notFoundMembers;
            verify = golf.notFound;
            options = null;
            offset = options == verify;
            golf = undefined;
            if(offset) { _fun00010_ip = 122; continue _fun00009 }
 117:
            golf = verify.length;
 122:
            options = options != golf;
            oscar = 0;
            if(!options) { _fun00010_ip = 134; continue _fun00009 }
 131:
            oscar = golf;
 134:
            zulu = zulu + oscar;
            report['notFoundMembers'] = zulu;
            zulu = _closure1_slot8;
            zulu = zulu[tango];
            report = zulu.foundMembers;
            zulu = _closure1_slot8;
            zulu = zulu[tango];
            zulu = zulu.notFoundMembers;
            report = report + zulu;
            zulu = _closure1_slot9;
            if(!(report >= zulu)) { _fun00010_ip = 208; continue _fun00009 }
 184:
            zulu = _closure1_slot8;
            zulu = zulu[tango];
            mike = _closure1_slot7;
            mike = mike.FETCHED;
            zulu['fetchState'] = mike;
 208:
            return entity;
        }
    };
    mike['GUILD_MEMBERS_CHUNK_BATCH'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[golf](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/relationships/GuildFriendshipStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();