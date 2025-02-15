// app/stores/GuildAvailabilityStore.tsx
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
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    verify = function(argFoo) { // Original name: handleConnectionOpen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = global;
            report = entity.Set;
            offset = tango.unavailableGuilds;
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            yankee = zulu;
            mike = new yankee[report](offset, verify);
            zulu = mike instanceof Object ? mike : zulu;
            _closure1_slot9 = zulu;
            zulu = tango.unavailableGuilds;
            report = zulu.length;
            zulu = 0;
            if(!(report > zulu)) { _fun00006_ip = 120; continue _fun00005 }
 61:
            zulu = _closure1_slot8;
            mike = zulu.warn;
            report = tango.unavailableGuilds;
            golf = report.length;
            oscar = tango.unavailableGuilds;
            entity = entity.HermesInternal;
            report = entity.concat;
            tango = '';
            entity = ' guilds are unavailable on connection open: ';
            entity = report.bind(tango)(golf, entity, oscar);
            entity = mike.bind(zulu)(entity);
 120:
            entity = undefined;
            return entity;
        }
    };
    options = function(argFoo) { // Original name: handleGuild
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot9;
            tango = report.has;
            zulu = entity.guild;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun00008_ip = 37; continue _fun00007 }
 33:
            zulu = false;
            return zulu;
 37:
            report = _closure1_slot9;
            tango = report.delete;
            zulu = entity.guild;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            zulu = _closure1_slot8;
            mike = zulu.info;
            entity = entity.guild;
            report = entity.id;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            entity = 'Guild has become available: ';
            entity = tango.bind(entity)(report);
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    golf = global;
    yankee = golf.Object;
    offset = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = report[mike];
    offset = oscar.bind(entity)(mike);
    mike = offset.prototype;
    yankee = Object.create(mike, {constructor: {value: offset}});
    mike = 'GuildAvailabilityStore';
    kilo = yankee;
    backup = mike;
    offset = new kilo[offset](backup, foxtrot);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot8 = offset;
    golf = golf.Set;
    offset = golf.prototype;
    offset = Object.create(offset, {constructor: {value: golf}});
    kilo = offset;
    golf = new kilo[golf](backup);
    golf = golf instanceof Object ? golf : offset;
    var _closure1_slot9 = golf;
    golf = 8;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    offset = golf.Store;
    golf = function(argFoo) {
        tango = function() { // Original name: GuildAvailabilityStore
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot7;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'isUnavailable';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun00010_ip = 29; continue _fun00009 }
 12:
                zulu = _closure1_slot9;
                mike = zulu.has;
                entity = mike.bind(zulu)(tango);
 29:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'totalGuilds';
        report['key'] = golf;
        golf = function() { // Original name: get
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 7;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.size;
            report = _closure1_slot7;
            mike = report.getGuilds;
            mike = mike.bind(report)();
            mike = zulu.bind(tango)(mike);
            entity = _closure1_slot9;
            entity = entity.size;
            entity = mike + entity;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'totalUnavailableGuilds';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot9;
            entity = entity.size;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'unavailableGuilds';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = global;
            zulu = entity.Array;
            mike = zulu.from;
            entity = _closure1_slot9;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['get'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = golf.bind(entity)(offset);
    golf['displayName'] = mike;
    mike = 9;
    mike = report[mike];
    backup = oscar.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = verify;
    mike['OVERLAY_INITIALIZE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildUnavailable
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot9;
            tango = report.has;
            zulu = entity.guildId;
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun00012_ip = 160; continue _fun00011 }
 31:
            report = _closure1_slot7;
            tango = report.getGuild;
            zulu = entity.guildId;
            zulu = tango.bind(report)(zulu);
            oscar = null;
            tango = oscar != zulu;
            if(!tango) { _fun00012_ip = 68; continue _fun00011 }
 59:
            report = zulu.name;
            tango = oscar != report;
 68:
            offset = '???';
            if(!tango) { _fun00012_ip = 82; continue _fun00011 }
 77:
            offset = zulu.name;
 82:
            report = _closure1_slot8;
            tango = report.warn;
            backup = entity.guildId;
            zulu = global;
            zulu = zulu.HermesInternal;
            options = zulu.concat;
            kilo = 'Guild has gone unavailable: ';
            foxtrot = ' (';
            yankee = ')';
            romeo = offset;
            zulu = kilo[options](backup, foxtrot, romeo, yankee, offset);
            zulu = tango.bind(report)(zulu);
            zulu = _closure1_slot9;
            mike = zulu.add;
            entity = entity.guildId;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
 160:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_UNAVAILABLE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildDelete
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            mike = entity.guild;
            zulu = mike.unavailable;
            mike = true;
            if(!(mike !== zulu)) { _fun00014_ip = 47; continue _fun00013 }
 20:
            zulu = _closure1_slot9;
            mike = zulu.delete;
            entity = entity.guild;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
 47:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_DELETE'] = verify;
    mike['GUILD_CREATE'] = options;
    mike['GUILD_UPDATE'] = options;
    tango = function(argFoo) { // Original name: handleGuildGeoRestrict
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot9;
            tango = report.has;
            zulu = entity.guildId;
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun00016_ip = 32; continue _fun00015 }
 28:
            zulu = false;
            return zulu;
 32:
            zulu = _closure1_slot9;
            mike = zulu.delete;
            entity = entity.guildId;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_GEO_RESTRICTED'] = tango;
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
    tango = 'stores/GuildAvailabilityStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();