// app/stores/GuildAffinitiesStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun85737: for(var _fun85737_ip = 0; ; ) switch(_fun85737_ip) {
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
            if(entity) { _fun85737_ip = 51; continue _fun85737 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun85737_ip = 92; continue _fun85737;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun85737_ip = 71; continue _fun85737 }
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
        _fun85738: for(var _fun85738_ip = 0; ; ) switch(_fun85738_ip) {
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
            _fun85738_ip = 76; continue _fun85738;
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
    var _closure1_slot8 = mike;
    mike = function() { // Original name: setDefaultState
        mike = {};
        entity = {};
        mike['guildAffinitiesByGuildId'] = entity;
        entity = new Array(0);
        mike['guildAffinities'] = entity;
        entity = 0;
        mike['lastFetched'] = entity;
        _closure1_slot8 = mike;
        entity = undefined;
        return entity;
    };
    var _closure1_slot9 = mike;
    mike = mike.bind(entity)();
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildAffinitiesStore
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
        entity = function(argFoo) { // Original name: value
            _fun85744: for(var _fun85744_ip = 0; ; ) switch(_fun85744_ip) {
 0:
                mike = argFoo;
                zulu = this;
                entity = null;
                if(!(entity != mike)) { _fun85744_ip = 19; continue _fun85744 }
 12:
                _closure1_slot8 = mike;
 19:
                mike = zulu.waitFor;
                entity = _closure1_slot7;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getGuildAffinity';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = _closure1_slot8;
            mike = entity.guildAffinitiesByGuildId;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'affinities';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot8;
            entity = entity.guildAffinities;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'hasRequestResolved';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot8;
            mike = entity.lastFetched;
            entity = 0;
            entity = entity !== mike;
            return entity;
        };
        report['get'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GuildAffinitiesStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = 8;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: handleConnectionOpen
        _fun85749: for(var _fun85749_ip = 0; ; ) switch(_fun85749_ip) {
 0:
            entity = global;
            mike = entity.Date;
            entity = mike.now;
            zulu = entity.bind(mike)();
            mike = _closure1_slot8;
            mike = mike.lastFetched;
            zulu = zulu - mike;
            mike = 86400000;
            if(!(zulu > mike)) { _fun85749_ip = 76; continue _fun85749 }
 44:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.fetchGuildAffinities;
            entity = entity.bind(mike)();
 76:
            entity = false;
            return entity;
        }
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleLoadGuildAffinitiesSuccess
        entity = argFoo;
        zulu = entity.guildAffinities;
        tango = _closure1_slot8;
        mike = new Array(0);
        tango['guildAffinities'] = mike;
        tango = _closure1_slot8;
        mike = {};
        tango['guildAffinitiesByGuildId'] = mike;
        mike = _closure1_slot8;
        entity = global;
        tango = entity.Date;
        entity = tango.now;
        entity = entity.bind(tango)();
        mike['lastFetched'] = entity;
        mike = zulu.forEach;
        entity = function(argFoo, argBar) {
            mike = argFoo;
            entity = mike.affinity;
            tango = mike.guild_id;
            zulu = {};
            zulu['score'] = entity;
            zulu['guildId'] = tango;
            entity = argBar;
            zulu['index'] = entity;
            mike = _closure1_slot8;
            mike = mike.guildAffinitiesByGuildId;
            mike[tango] = zulu;
            entity = _closure1_slot8;
            mike = entity.guildAffinities;
            entity = mike.push;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['LOAD_GUILD_AFFINITIES_SUCCESS'] = verify;
    tango = function() { // Original name: handleLogout
        mike = _closure1_slot9;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['LOGOUT'] = tango;
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
    tango = 'stores/GuildAffinitiesStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();