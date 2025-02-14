// app/modules/links/LinkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    tango = function(argFoo) { // Original name: canViewChannel
        _fun54631: for(var _fun54631_ip = 0; ; ) switch(_fun54631_ip) {
 0:
            report = argFoo;
            entity = report.isPrivate;
            entity = entity.bind(report)();
            mike = !entity;
            entity = !mike;
            if(!mike) { _fun54631_ip = 51; continue _fun54631 }
 22:
            tango = _closure1_slot4;
            zulu = tango.can;
            mike = _closure1_slot6;
            mike = mike.VIEW_CHANNEL;
            entity = zulu.bind(tango)(mike, report);
 51:
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    romeo = oscar.ME;
    var _closure1_slot5 = romeo;
    oscar = oscar.Permissions;
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    offset = oscar.StaticChannelRoutes;
    golf = report.Array;
    oscar = golf.from;
    offset = oscar.bind(golf)(offset);
    golf = offset.map;
    oscar = function(argFoo) {
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.escape;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    offset = golf.bind(offset)(oscar);
    golf = offset.join;
    oscar = '|';
    backup = golf.bind(offset)(oscar);
    offset = report.RegExp;
    oscar = report.HermesInternal;
    yankee = oscar.concat;
    foxtrot = '^/channels/(\\d+|';
    output = ')(?:/)?(\\d+|';
    kilo = ')?';
    echo = foxtrot;
    result = romeo;
    sizing = backup;
    result = echo[yankee](result, output, sizing, kilo, backup);
    golf = offset.prototype;
    golf = Object.create(golf, {constructor: {value: offset}});
    echo = golf;
    oscar = new echo[offset](result, output);
    oscar = oscar instanceof Object ? oscar : golf;
    var _closure1_slot7 = oscar;
    offset = report.RegExp;
    oscar = report.HermesInternal;
    yankee = oscar.concat;
    output = ')(?:/)(\\d+|';
    kilo = ')(?:/)(\\d+)';
    echo = foxtrot;
    result = romeo;
    sizing = backup;
    result = echo[yankee](result, output, sizing, kilo, backup);
    golf = offset.prototype;
    golf = Object.create(golf, {constructor: {value: offset}});
    echo = golf;
    oscar = new echo[offset](result, output);
    oscar = oscar instanceof Object ? oscar : golf;
    var _closure1_slot8 = oscar;
    offset = report.RegExp;
    oscar = offset.prototype;
    golf = Object.create(oscar, {constructor: {value: offset}});
    result = '^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)';
    echo = golf;
    oscar = new echo[offset](result, output);
    oscar = oscar instanceof Object ? oscar : golf;
    var _closure1_slot9 = oscar;
    offset = report.RegExp;
    oscar = offset.prototype;
    golf = Object.create(oscar, {constructor: {value: offset}});
    result = '^/guild-stages/(\\d+)(?:/)?(\\d+)?';
    echo = golf;
    oscar = new echo[offset](result, output);
    oscar = oscar instanceof Object ? oscar : golf;
    var _closure1_slot10 = oscar;
    offset = report.RegExp;
    oscar = offset.prototype;
    golf = Object.create(oscar, {constructor: {value: offset}});
    result = '^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?';
    echo = golf;
    oscar = new echo[offset](result, output);
    oscar = oscar instanceof Object ? oscar : golf;
    var _closure1_slot11 = oscar;
    offset = report.RegExp;
    oscar = report.HermesInternal;
    yankee = oscar.concat;
    golf = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|';
    oscar = ')(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?';
    result = yankee.bind(golf)(romeo, oscar);
    golf = offset.prototype;
    golf = Object.create(golf, {constructor: {value: offset}});
    echo = golf;
    oscar = new echo[offset](result, output);
    oscar = oscar instanceof Object ? oscar : golf;
    offset = report.RegExp;
    report = offset.prototype;
    golf = Object.create(report, {constructor: {value: offset}});
    result = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)';
    echo = golf;
    report = new echo[offset](result, output);
    report = report instanceof Object ? report : golf;
    golf = 6;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/links/LinkUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['CHANNEL_OR_MESSAGES_URL_RE'] = oscar;
    zulu['MEDIA_POST_URL_RE'] = report;
    report = function(argFoo) { // Original name: tryParseChannelPath
        _fun54633: for(var _fun54633_ip = 0; ; ) switch(_fun54633_ip) {
 0:
            offset = argFoo;
            entity = null;
            if(!(entity != offset)) { _fun54633_ip = 248; continue _fun54633 }
 12:
            tango = offset.match;
            zulu = _closure1_slot8;
            tango = tango.bind(offset)(zulu);
            if(!(entity != tango)) { _fun54633_ip = 49; continue _fun54633 }
 34:
            report = tango.length;
            zulu = 3;
            if(!(!(report > zulu))) { _fun54633_ip = 214; continue _fun54633 }
 49:
            oscar = offset.match;
            report = _closure1_slot9;
            oscar = oscar.bind(offset)(report);
            if(!(entity != oscar)) { _fun54633_ip = 80; continue _fun54633 }
 68:
            golf = oscar.length;
            report = 4;
            if(!(!(golf > report))) { _fun54633_ip = 168; continue _fun54633 }
 80:
            options = offset.match;
            golf = _closure1_slot7;
            verify = options.bind(offset)(golf);
            if(!(entity != verify)) { _fun54633_ip = 111; continue _fun54633 }
 99:
            golf = verify.length;
            options = 1;
            if(!(!(golf > options))) { _fun54633_ip = 130; continue _fun54633 }
 111:
            golf = offset.match;
            mike = _closure1_slot10;
            mike = golf.bind(offset)(mike);
            mike = null;
            _fun54633_ip = 166; continue _fun54633;
 130:
            golf = {};
            options = verify[options];
            golf['guildId'] = options;
            options = 2;
            verify = verify[options];
            offset = entity != verify;
            options = undefined;
            if(!offset) { _fun54633_ip = 159; continue _fun54633 }
 156:
            options = verify;
 159:
            golf['channelId'] = options;
            mike = golf;
 166:
            return mike;
 168:
            mike = {};
            golf = 1;
            golf = oscar[golf];
            mike['guildId'] = golf;
            golf = 2;
            golf = oscar[golf];
            mike['channelId'] = golf;
            golf = 3;
            golf = oscar[golf];
            mike['threadId'] = golf;
            report = oscar[report];
            mike['messageId'] = report;
            return mike;
 214:
            mike = {};
            report = 1;
            report = tango[report];
            mike['guildId'] = report;
            report = 2;
            report = tango[report];
            mike['channelId'] = report;
            zulu = tango[zulu];
            mike['messageId'] = zulu;
            return mike;
 248:
            return entity;
        }
    };
    zulu['tryParseChannelPath'] = report;
    report = function(argFoo) { // Original name: tryParseEventDetailsPath
        _fun54634: for(var _fun54634_ip = 0; ; ) switch(_fun54634_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity != tango)) { _fun54634_ip = 92; continue _fun54634 }
 9:
            zulu = tango.match;
            mike = _closure1_slot11;
            report = zulu.bind(tango)(mike);
            zulu = entity != report;
            mike = null;
            if(!zulu) { _fun54634_ip = 90; continue _fun54634 }
 36:
            zulu = report.length;
            tango = 1;
            zulu = zulu > tango;
            mike = null;
            if(!zulu) { _fun54634_ip = 90; continue _fun54634 }
 53:
            zulu = {};
            tango = report[tango];
            zulu['guildId'] = tango;
            tango = 2;
            tango = report[tango];
            zulu['guildEventId'] = tango;
            tango = 3;
            tango = report[tango];
            zulu['recurrenceId'] = tango;
            mike = zulu;
 90:
            return mike;
 92:
            return entity;
        }
    };
    zulu['tryParseEventDetailsPath'] = report;
    zulu['canViewChannel'] = tango;
    mike = function(argFoo) { // Original name: isAccessibleChannelPath
        _fun54635: for(var _fun54635_ip = 0; ; ) switch(_fun54635_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            report = entity.channelId;
            zulu = _closure1_slot3;
            entity = zulu.getGuild;
            zulu = entity.bind(zulu)(tango);
            entity = null;
            if(!(entity == zulu)) { _fun54635_ip = 44; continue _fun54635 }
 36:
            zulu = _closure1_slot5;
            if(!(tango === zulu)) { _fun54635_ip = 86; continue _fun54635 }
 44:
            if(!(entity != report)) { _fun54635_ip = 82; continue _fun54635 }
 48:
            tango = _closure1_slot2;
            zulu = tango.getChannel;
            tango = zulu.bind(tango)(report);
            entity = entity != tango;
            if(!entity) { _fun54635_ip = 80; continue _fun54635 }
 69:
            zulu = _closure1_slot12;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 80:
            return entity;
 82:
            entity = true;
            return entity;
 86:
            entity = false;
            return entity;
        }
    };
    zulu['isAccessibleChannelPath'] = mike;
    return entity;
})();