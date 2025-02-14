// app/modules/guild_profile/GuildPopoutStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun90498: for(var _fun90498_ip = 0; ; ) switch(_fun90498_ip) {
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
            if(entity) { _fun90498_ip = 51; continue _fun90498 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun90498_ip = 92; continue _fun90498;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun90498_ip = 71; continue _fun90498 }
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
        _fun90499: for(var _fun90499_ip = 0; ; ) switch(_fun90499_ip) {
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
            _fun90499_ip = 76; continue _fun90499;
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
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
    mike = {};
    options = 'unset';
    mike['UNSET'] = options;
    options = 'fetching';
    mike['FETCHING'] = options;
    options = 'failed';
    mike['FAILED'] = options;
    options = 'succeeded';
    mike['SUCCEEDED'] = options;
    var _closure1_slot8 = mike;
    mike = {};
    options = {};
    mike['guilds'] = options;
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildPopoutStore
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
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'isFetchingGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun90505: for(var _fun90505_ip = 0; ; ) switch(_fun90505_ip) {
 0:
                entity = _closure1_slot9;
                zulu = entity.guilds;
                entity = argFoo;
                zulu = zulu[entity];
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun90505_ip = 49; continue _fun90505 }
 29:
                zulu = zulu.fetchState;
                mike = _closure1_slot8;
                mike = mike.FETCHING;
                entity = zulu === mike;
 49:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun90506: for(var _fun90506_ip = 0; ; ) switch(_fun90506_ip) {
 0:
                entity = _closure1_slot9;
                mike = entity.guilds;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun90506_ip = 34; continue _fun90506 }
 29:
                entity = mike.guild;
 34:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'hasFetchFailed';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun90507: for(var _fun90507_ip = 0; ; ) switch(_fun90507_ip) {
 0:
                entity = _closure1_slot9;
                zulu = entity.guilds;
                entity = argFoo;
                zulu = zulu[entity];
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun90507_ip = 49; continue _fun90507 }
 29:
                zulu = zulu.fetchState;
                mike = _closure1_slot8;
                mike = mike.FAILED;
                entity = zulu === mike;
 49:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GuildPopoutStore';
    options['displayName'] = mike;
    mike = 8;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleFetchStart
        entity = argFoo;
        zulu = entity.guildId;
        report = _closure1_slot9;
        mike = report.guilds;
        entity = {};
        report = report.guilds;
        oscar = report[zulu];
        golf = entity;
        report = copyDataProperties(golf, oscar);
        tango = _closure1_slot8;
        report = tango.FETCHING;
        tango = 'fetchState';
        entity[tango] = report;
        mike[zulu] = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_POPOUT_FETCH_START'] = verify;
    verify = function(argFoo) { // Original name: handleFetchSuccess
        entity = argFoo;
        tango = entity.guildId;
        oscar = entity.guild;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.makeDiscoverableGuild;
        golf = mike.bind(zulu)(oscar);
        oscar = _closure1_slot9;
        zulu = oscar.guilds;
        mike = {};
        oscar = oscar.guilds;
        options = oscar[tango];
        verify = mike;
        oscar = copyDataProperties(verify, options);
        oscar = 'guild';
        mike[oscar] = golf;
        report = _closure1_slot8;
        oscar = report.SUCCEEDED;
        report = 'fetchState';
        mike[report] = oscar;
        zulu[tango] = mike;
        return entity;
    };
    mike['GUILD_POPOUT_FETCH_SUCCESS'] = verify;
    tango = function(argFoo) { // Original name: handleFetchFailure
        entity = argFoo;
        zulu = entity.guildId;
        report = _closure1_slot9;
        mike = report.guilds;
        entity = {};
        report = report.guilds;
        oscar = report[zulu];
        golf = entity;
        report = copyDataProperties(golf, oscar);
        tango = _closure1_slot8;
        report = tango.FAILED;
        tango = 'fetchState';
        entity[tango] = report;
        mike[zulu] = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_POPOUT_FETCH_FAILURE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/GuildPopoutStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();