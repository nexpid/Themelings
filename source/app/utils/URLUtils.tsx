// app/utils/URLUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = yankee;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    offset = function(argFoo) { // Original name: isDiscordHostname
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            zulu = arguments[1];
            entity = undefined;
            if(!(zulu === entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            zulu = false;
 14:
            entity = null;
            entity = entity != golf;
            if(!entity) { _fun00002_ip = 76; continue _fun00001 }
 23:
            report = _closure1_slot4;
            mike = report.test;
            mike = mike.bind(report)(golf);
            if(mike) { _fun00002_ip = 73; continue _fun00001 }
 43:
            if(!zulu) { _fun00002_ip = 70; continue _fun00001 }
 46:
            oscar = _closure1_slot5;
            report = oscar.has;
            tango = golf.toLowerCase;
            tango = tango.bind(golf)();
            zulu = report.bind(oscar)(tango);
 70:
            mike = zulu;
 73:
            entity = mike;
 76:
            return entity;
        }
    };
    var _closure1_slot6 = offset;
    verify = function(argFoo) { // Original name: isDiscordProtocol
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00004_ip = 22; continue _fun00003 }
 12:
            mike = 'discord:';
            entity = mike === zulu;
 22:
            return entity;
        }
    };
    var _closure1_slot7 = verify;
    options = function(argFoo) { // Original name: isDiscordUrl
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golf = argFoo;
            tango = arguments[1];
            zulu = undefined;
            if(!(tango === zulu)) { _fun00006_ip = 14; continue _fun00005 }
 12:
            tango = false;
 14:
            report = null;
            if(!(report != golf)) { _fun00006_ip = 86; continue _fun00005 }
 20:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            mike = 3;
            mike = options[mike];
            oscar = oscar.bind(zulu)(mike);
            mike = oscar.toURLSafe;
            oscar = mike.bind(oscar)(golf);
            golf = report == oscar;
            mike = undefined;
            if(golf) { _fun00006_ip = 69; continue _fun00005 }
 63:
            mike = oscar.hostname;
 69:
            if(!(report != mike)) { _fun00006_ip = 86; continue _fun00005 }
 73:
            entity = _closure1_slot6;
            entity = entity.bind(zulu)(mike, tango);
            if(entity) { _fun00006_ip = 90; continue _fun00005 }
 86:
            entity = false;
            return entity;
 90:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot8 = options;
    golf = function(argFoo) { // Original name: isDiscordUri
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscar = argFoo;
            entity = null;
            entity = entity != oscar;
            if(!entity) { _fun00008_ip = 63; continue _fun00007 }
 12:
            tango = _closure1_slot7;
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 2;
            mike = zulu[mike];
            zulu = undefined;
            report = report.bind(zulu)(mike);
            mike = report.parse;
            mike = mike.bind(report)(oscar);
            mike = mike.protocol;
            entity = tango.bind(zulu)(mike);
 63:
            return entity;
        }
    };
    var _closure1_slot9 = golf;
    romeo = global;
    backup = romeo.Object;
    foxtrot = backup.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = foxtrot.bind(backup)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.Routes;
    var _closure1_slot3 = mike;
    mike = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    yankee = yankee.bind(entity)(mike);
    mike = yankee.v4;
    mike = mike.bind(yankee)();
    kilo = mike.source;
    backup = romeo.RegExp;
    mike = romeo.HermesInternal;
    foxtrot = mike.concat;
    yankee = '(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|';
    mike = '|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?';
    result = foxtrot.bind(yankee)(kilo, mike);
    mike = backup.prototype;
    yankee = Object.create(mike, {constructor: {value: backup}});
    output = 'ig';
    echo = yankee;
    mike = new echo[backup](result, output, sizing);
    yankee = mike instanceof Object ? mike : yankee;
    foxtrot = romeo.Set;
    mike = romeo.window;
    mike = mike.GLOBAL_ENV;
    backup = mike.CDN_HOST;
    mike = new Array(4);
    mike[0] = backup;
    backup = romeo.window;
    backup = backup.GLOBAL_ENV;
    backup = backup.INVITE_HOST;
    mike[1] = backup;
    backup = romeo.window;
    backup = backup.GLOBAL_ENV;
    backup = backup.GIFT_CODE_HOST;
    mike[2] = backup;
    romeo = romeo.window;
    romeo = romeo.GLOBAL_ENV;
    romeo = romeo.GUILD_TEMPLATE_HOST;
    mike[3] = romeo;
    romeo = foxtrot.prototype;
    romeo = Object.create(romeo, {constructor: {value: foxtrot}});
    echo = romeo;
    result = mike;
    mike = new echo[foxtrot](result, output);
    mike = mike instanceof Object ? mike : romeo;
    var _closure1_slot5 = mike;
    mike = {};
    mike['URL_REGEX'] = yankee;
    mike['isDiscordHostname'] = offset;
    offset = function(argFoo, argBar) { // Original name: isDiscordLocalhost
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            tango = null;
            entity = tango != zulu;
            if(!entity) { _fun00010_ip = 19; continue _fun00009 }
 12:
            mike = argBar;
            entity = tango != mike;
 19:
            if(!entity) { _fun00010_ip = 45; continue _fun00009 }
 22:
            mike = global;
            mike = mike.window;
            mike = mike.location;
            mike = mike.host;
            entity = mike === zulu;
 45:
            return entity;
        }
    };
    mike['isDiscordLocalhost'] = offset;
    mike['isDiscordProtocol'] = verify;
    mike['isDiscordUrl'] = options;
    mike['isDiscordUri'] = golf;
    golf = function(argFoo) { // Original name: isDiscordCdnUrl
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = argFoo;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun00012_ip = 78; continue _fun00011 }
 12:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.parse;
            mike = mike.bind(zulu)(tango);
            zulu = mike.hostname;
            mike = global;
            mike = mike.window;
            mike = mike.GLOBAL_ENV;
            mike = mike.CDN_HOST;
            entity = zulu === mike;
 78:
            return entity;
        }
    };
    mike['isDiscordCdnUrl'] = golf;
    golf = function(argFoo) { // Original name: isDiscordUrlOrUri
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot8;
            zulu = undefined;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun00014_ip = 29; continue _fun00013 }
 20:
            mike = _closure1_slot9;
            entity = mike.bind(zulu)(tango);
 29:
            return entity;
        }
    };
    mike['isDiscordUrlOrUri'] = golf;
    golf = function(argFoo) { // Original name: isAppRoute
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = argFoo;
            entity = mike.toLowerCase;
            tango = entity.bind(mike)();
            mike = tango.startsWith;
            entity = '/channels/';
            entity = mike.bind(tango)(entity);
            if(entity) { _fun00016_ip = 57; continue _fun00015 }
 33:
            zulu = tango.startsWith;
            mike = _closure1_slot3;
            mike = mike.ACTIVITY;
            entity = zulu.bind(tango)(mike);
 57:
            return entity;
        }
    };
    mike['isAppRoute'] = golf;
    golf = function(argFoo) { // Original name: format
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.format;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['format'] = golf;
    golf = function(argFoo, argBar) { // Original name: formatPathWithQuery
        mike = _closure1_slot1;
        golf = _closure1_slot2;
        entity = 2;
        entity = golf[entity];
        oscar = undefined;
        zulu = mike.bind(oscar)(entity);
        mike = zulu.format;
        entity = {};
        report = argFoo;
        entity['pathname'] = report;
        report = _closure1_slot0;
        tango = 4;
        tango = golf[tango];
        oscar = report.bind(oscar)(tango);
        report = oscar.pickBy;
        tango = argBar;
        tango = report.bind(oscar)(tango);
        entity['query'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['formatPathWithQuery'] = golf;
    golf = function(argFoo) { // Original name: formatSearch
        mike = _closure1_slot1;
        golf = _closure1_slot2;
        entity = 2;
        entity = golf[entity];
        oscar = undefined;
        zulu = mike.bind(oscar)(entity);
        mike = zulu.format;
        entity = {};
        report = _closure1_slot0;
        tango = 4;
        tango = golf[tango];
        oscar = report.bind(oscar)(tango);
        report = oscar.pickBy;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['query'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['formatSearch'] = golf;
    golf = function(argFoo) { // Original name: safeParseWithQuery
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
 3: // try_start_0
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.parse;
            mike = entity;
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
 45: // try_end0
            return entity;
 47: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    mike['safeParseWithQuery'] = golf;
    golf = function(argFoo, argBar) { // Original name: toURLSafe
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            mike = argFoo;
            entity = argBar;
 6: // try_start_0
            zulu = global;
            tango = zulu.URL;
            oscar = mike;
            report = entity;
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            golf = mike;
            entity = new golf[tango](oscar, report, tango);
            entity = entity instanceof Object ? entity : mike;
 40: // try_end0
            return entity;
 42: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    mike['toURLSafe'] = golf;
    tango = function(argFoo) { // Original name: makeUrl
        entity = global;
        mike = entity.location;
        options = mike.host;
        mike = entity.location;
        offset = mike.protocol;
        entity = entity.HermesInternal;
        tango = entity.concat;
        yankee = '';
        verify = '//';
        golf = argFoo;
        entity = yankee[tango](offset, verify, options, golf, oscar);
        return entity;
    };
    mike['makeUrl'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/URLUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();