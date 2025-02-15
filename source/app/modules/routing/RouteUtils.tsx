// app/modules/routing/RouteUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: paramPattern
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            entity = {};
 11:
            entity = entity.optional;
            if(!(entity === report)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            entity = false;
 23:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 2;
            mike = oscar[mike];
            mike = tango.bind(report)(mike);
            zulu = mike.UnescapedPathParam;
            mike = 3;
            mike = oscar[mike];
            report = tango.bind(report)(mike);
            tango = report.escapeRegExp;
            mike = argFoo;
            options = tango.bind(report)(mike);
            golf = '';
            if(!entity) { _fun00002_ip = 89; continue _fun00001 }
 85:
            golf = '?';
 89:
            entity = global;
            entity = entity.HermesInternal;
            oscar = entity.concat;
            backup = ':';
            romeo = '(';
            yankee = argBar;
            offset = ')';
            foxtrot = options;
            verify = golf;
            foxtrot = backup[oscar](foxtrot, romeo, yankee, offset, verify, options);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            backup = mike;
            entity = new backup[zulu](foxtrot, romeo);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    report = mike.EMPTY_NUX_SERVER;
    var _closure1_slot2 = report;
    report = mike.FAVORITES;
    var _closure1_slot3 = report;
    mike = mike.ME;
    var _closure1_slot4 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.isStaticChannelRoute;
    var _closure1_slot5 = report;
    mike = mike.StaticChannelRoutes;
    var _closure1_slot6 = mike;
    mike = /^\d+$/;
    var _closure1_slot7 = mike;
    mike = {};
    report = function() { // Original name: guildId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            entity = {};
 11:
            tango = entity.name;
            if(!(tango === report)) { _fun00004_ip = 24; continue _fun00003 }
 20:
            tango = 'guildId';
 24:
            oscar = entity.optional;
            if(!(oscar === report)) { _fun00004_ip = 36; continue _fun00003 }
 34:
            oscar = false;
 36:
            zulu = _closure1_slot8;
            mike = _closure1_slot4;
            golf = new Array(3);
            golf[0] = mike;
            mike = _closure1_slot3;
            golf[1] = mike;
            mike = _closure1_slot2;
            golf[2] = mike;
            mike = golf.map;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 3;
            entity = verify[entity];
            entity = options.bind(report)(entity);
            entity = entity.escapeRegExp;
            golf = mike.bind(golf)(entity);
            mike = golf.join;
            entity = '|';
            options = mike.bind(golf)(entity);
            entity = global;
            entity = entity.HermesInternal;
            golf = entity.concat;
            mike = '';
            entity = '|\\d+';
            mike = golf.bind(mike)(options, entity);
            entity = {};
            entity['optional'] = oscar;
            entity = zulu.bind(report)(tango, mike, entity);
            return entity;
        }
    };
    mike['guildId'] = report;
    report = function() { // Original name: channelId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            entity = {};
 11:
            tango = entity.name;
            if(!(tango === report)) { _fun00006_ip = 24; continue _fun00005 }
 20:
            tango = 'channelId';
 24:
            oscar = entity.optional;
            if(!(oscar === report)) { _fun00006_ip = 36; continue _fun00005 }
 34:
            oscar = false;
 36:
            zulu = _closure1_slot8;
            yankee = _closure1_slot6;
            golf = new Array(0);
            offset = 0;
            romeo = golf;
            mike = arraySpread(romeo, yankee, offset);
            mike = golf.map;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 3;
            entity = verify[entity];
            entity = options.bind(report)(entity);
            entity = entity.escapeRegExp;
            golf = mike.bind(golf)(entity);
            mike = golf.join;
            entity = '|';
            options = mike.bind(golf)(entity);
            entity = global;
            entity = entity.HermesInternal;
            golf = entity.concat;
            mike = '';
            entity = '|\\d+';
            mike = golf.bind(mike)(options, entity);
            entity = {};
            entity['optional'] = oscar;
            entity = zulu.bind(report)(tango, mike, entity);
            return entity;
        }
    };
    mike['channelId'] = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/routing/RouteUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: isValidGuildId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00008_ip = 71; continue _fun00007 }
 12:
            mike = _closure1_slot4;
            mike = report === mike;
            if(mike) { _fun00008_ip = 34; continue _fun00007 }
 26:
            tango = _closure1_slot3;
            mike = report === tango;
 34:
            if(mike) { _fun00008_ip = 45; continue _fun00007 }
 37:
            tango = _closure1_slot2;
            mike = report === tango;
 45:
            if(mike) { _fun00008_ip = 68; continue _fun00007 }
 48:
            tango = _closure1_slot7;
            zulu = tango.test;
            zulu = zulu.bind(tango)(report);
            zulu = !zulu;
            mike = !zulu;
 68:
            entity = mike;
 71:
            return entity;
        }
    };
    zulu['isValidGuildId'] = report;
    tango = function(argFoo) { // Original name: isValidChannelId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity == report;
            if(entity) { _fun00010_ip = 58; continue _fun00009 }
 12:
            tango = _closure1_slot7;
            mike = tango.test;
            mike = mike.bind(tango)(report);
            tango = !mike;
            mike = !tango;
            if(!tango) { _fun00010_ip = 55; continue _fun00009 }
 38:
            tango = _closure1_slot5;
            zulu = undefined;
            zulu = tango.bind(zulu)(report);
            zulu = !zulu;
            mike = !zulu;
 55:
            entity = mike;
 58:
            return entity;
        }
    };
    zulu['isValidChannelId'] = tango;
    zulu['RouteParam'] = mike;
    return entity;
})();