// app/modules/interaction_components/SearchableSelectActionComponentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo, argBar) { // Original name: getSnowflakeSelectDefaultValues
        _fun71824: for(var _fun71824_ip = 0; ; ) switch(_fun71824_ip) {
 0:
            tango = argFoo;
            entity = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun71824_ip = 18; continue _fun71824 }
 14:
            entity = new Array(0);
 18:
            var _closure2_slot0 = entity;
            var _closure2_slot1 = report;
            entity = null;
            if(!(entity == tango)) { _fun71824_ip = 34; continue _fun71824 }
 32:
            return report;
 34:
            golf = _closure1_slot5;
            oscar = golf.getGuild;
            zulu = argBar;
            zulu = oscar.bind(golf)(zulu);
            _closure2_slot1 = zulu;
            zulu = tango.map;
            mike = function(argFoo) {
                _fun71825: for(var _fun71825_ip = 0; ; ) switch(_fun71825_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    oscar = 9;
                    mike = mike[oscar];
                    golf = undefined;
                    mike = tango.bind(golf)(mike);
                    mike = mike.SnowflakeSelectDefaultValueTypes;
                    mike = mike.USER;
                    if(!(mike !== zulu)) { _fun71825_ip = 404; continue _fun71825 }
 52:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    mike = tango.bind(golf)(mike);
                    mike = mike.SnowflakeSelectDefaultValueTypes;
                    mike = mike.ROLE;
                    if(!(mike !== zulu)) { _fun71825_ip = 289; continue _fun71825 }
 88:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    mike = tango.bind(golf)(mike);
                    mike = mike.SnowflakeSelectDefaultValueTypes;
                    mike = mike.CHANNEL;
                    if(!(mike !== zulu)) { _fun71825_ip = 123; continue _fun71825 }
 121:
                    return golf;
 123:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun71825_ip = 287; continue _fun71825 }
 139:
                    options = _closure1_slot3;
                    oscar = options.getChannel;
                    zulu = entity.id;
                    oscar = oscar.bind(options)(zulu);
                    options = mike == oscar;
                    zulu = null;
                    if(options) { _fun71825_ip = 285; continue _fun71825 }
 167:
                    verify = oscar.guild_id;
                    options = _closure2_slot1;
                    options = options.id;
                    zulu = null;
                    if(!(verify === options)) { _fun71825_ip = 285; continue _fun71825 }
 187:
                    options = _closure2_slot0;
                    verify = options.length;
                    options = 0;
                    if(!(verify > options)) { _fun71825_ip = 226; continue _fun71825 }
 202:
                    verify = _closure2_slot0;
                    options = verify.includes;
                    tango = oscar.type;
                    tango = options.bind(verify)(tango);
                    zulu = null;
                    if(!tango) { _fun71825_ip = 285; continue _fun71825 }
 226:
                    tango = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 8;
                    options = offset[options];
                    options = verify.bind(golf)(options);
                    options = options.SelectOptionType;
                    options = options.CHANNEL;
                    tango['type'] = options;
                    options = oscar.id;
                    tango['value'] = options;
                    oscar = oscar.name;
                    tango['label'] = oscar;
                    zulu = tango;
 285:
                    return zulu;
 287:
                    return mike;
 289:
                    tango = _closure2_slot1;
                    mike = null;
                    if(!(mike != tango)) { _fun71825_ip = 402; continue _fun71825 }
 302:
                    options = _closure1_slot5;
                    oscar = options.getRole;
                    zulu = _closure2_slot1;
                    tango = zulu.id;
                    zulu = entity.id;
                    oscar = oscar.bind(options)(tango, zulu);
                    tango = mike == oscar;
                    zulu = null;
                    if(tango) { _fun71825_ip = 400; continue _fun71825 }
 341:
                    tango = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 8;
                    options = offset[options];
                    options = verify.bind(golf)(options);
                    options = options.SelectOptionType;
                    options = options.ROLE;
                    tango['type'] = options;
                    options = oscar.id;
                    tango['value'] = options;
                    oscar = oscar.name;
                    tango['label'] = oscar;
                    zulu = tango;
 400:
                    return zulu;
 402:
                    return mike;
 404:
                    zulu = _closure1_slot6;
                    mike = zulu.getUser;
                    entity = entity.id;
                    tango = mike.bind(zulu)(entity);
                    entity = null;
                    if(!(entity != tango)) { _fun71825_ip = 548; continue _fun71825 }
 430:
                    zulu = _closure2_slot1;
                    oscar = entity != zulu;
                    zulu = undefined;
                    if(!oscar) { _fun71825_ip = 476; continue _fun71825 }
 446:
                    verify = _closure1_slot4;
                    options = verify.getNick;
                    mike = _closure2_slot1;
                    oscar = mike.id;
                    mike = tango.id;
                    zulu = options.bind(verify)(oscar, mike);
 476:
                    mike = {};
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 8;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    report = report.SelectOptionType;
                    report = report.USER;
                    mike['type'] = report;
                    report = tango.id;
                    mike['value'] = report;
                    if(!(entity == zulu)) { _fun71825_ip = 533; continue _fun71825 }
 527:
                    zulu = tango.globalName;
 533:
                    if(!(entity == zulu)) { _fun71825_ip = 542; continue _fun71825 }
 537:
                    zulu = tango.username;
 542:
                    mike['label'] = zulu;
                    return mike;
 548:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 10;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.isNotNullish;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/interaction_components/SearchableSelectActionComponentUtils.tsx';
    report = oscar.bind(golf)(report);
    report = 1000;
    zulu['MIN_REREQUEST_TIME'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: queryMentionables
        _fun71826: for(var _fun71826_ip = 0; ; ) switch(_fun71826_ip) {
 0:
            options = argFoo;
            report = argBaz;
            var _closure2_slot0 = report;
            tango = _closure1_slot3;
            zulu = tango.getChannel;
            report = zulu.bind(tango)(report);
            var _closure2_slot1 = report;
            zulu = null;
            if(!(zulu != report)) { _fun71826_ip = 344; continue _fun71826 }
 42:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            offset = 5;
            zulu = zulu[offset];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.ComponentType;
            zulu = zulu.USER_SELECT;
            golf = options === zulu;
            if(golf) { _fun71826_ip = 116; continue _fun71826 }
 83:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[offset];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.ComponentType;
            zulu = zulu.MENTIONABLE_SELECT;
            golf = options === zulu;
 116:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[offset];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.ComponentType;
            zulu = zulu.ROLE_SELECT;
            oscar = options === zulu;
            if(oscar) { _fun71826_ip = 185; continue _fun71826 }
 152:
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[offset];
            zulu = verify.bind(tango)(zulu);
            zulu = zulu.ComponentType;
            zulu = zulu.MENTIONABLE_SELECT;
            oscar = options === zulu;
 185:
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            entity = 6;
            entity = options[entity];
            tango = zulu.bind(tango)(entity);
            zulu = tango.queryMentionResults;
            entity = {};
            options = argBar;
            entity['query'] = options;
            entity['channel'] = report;
            report = false;
            entity['canMentionEveryone'] = report;
            entity['canMentionHere'] = report;
            entity['canMentionUsers'] = golf;
            entity['canMentionRoles'] = oscar;
            oscar = true;
            entity['includeAllGuildUsers'] = oscar;
            entity['includeNonMentionableRoles'] = oscar;
            entity['checkRecentlyTalkedOnEmptyQuery'] = report;
            report = 15;
            entity['limit'] = report;
            entity = zulu.bind(tango)(entity);
            tango = entity.users;
            report = entity.roles;
            zulu = tango.map;
            entity = function(argFoo) {
                _fun71827: for(var _fun71827_ip = 0; ; ) switch(_fun71827_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure1_slot1;
                    golf = _closure1_slot2;
                    entity = 7;
                    entity = golf[entity];
                    oscar = undefined;
                    verify = mike.bind(oscar)(entity);
                    options = verify.getNickname;
                    report = _closure2_slot1;
                    mike = report.getGuildId;
                    report = mike.bind(report)();
                    mike = _closure2_slot0;
                    entity = zulu.user;
                    mike = options.bind(verify)(report, mike, entity);
                    entity = {};
                    report = _closure1_slot0;
                    tango = 8;
                    tango = golf[tango];
                    tango = report.bind(oscar)(tango);
                    tango = tango.SelectOptionType;
                    tango = tango.USER;
                    entity['type'] = tango;
                    tango = zulu.user;
                    tango = tango.id;
                    entity['value'] = tango;
                    tango = null;
                    if(!(tango == mike)) { _fun71827_ip = 132; continue _fun71827 }
 121:
                    report = zulu.user;
                    mike = report.globalName;
 132:
                    if(!(tango == mike)) { _fun71827_ip = 146; continue _fun71827 }
 136:
                    zulu = zulu.user;
                    mike = zulu.username;
 146:
                    entity['label'] = mike;
                    return entity;
                }
            };
            romeo = zulu.bind(tango)(entity);
            entity = new Array(0);
            yankee = 0;
            foxtrot = entity;
            yankee = arraySpread(foxtrot, romeo, yankee);
            tango = report.map;
            mike = function(argFoo) {
                mike = argFoo;
                entity = {};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 8;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                zulu = zulu.SelectOptionType;
                zulu = zulu.ROLE;
                entity['type'] = zulu;
                zulu = mike.id;
                entity['value'] = zulu;
                mike = mike.name;
                entity['label'] = mike;
                return entity;
            };
            romeo = tango.bind(report)(mike);
            foxtrot = entity;
            mike = arraySpread(foxtrot, romeo, yankee);
            return entity;
 344:
            entity = new Array(0);
            return entity;
        }
    };
    zulu['queryMentionables'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: queryChannels
        _fun71829: for(var _fun71829_ip = 0; ; ) switch(_fun71829_ip) {
 0:
            tango = _closure1_slot3;
            zulu = tango.getChannel;
            mike = argBar;
            tango = zulu.bind(tango)(mike);
            mike = null;
            if(!(mike != tango)) { _fun71829_ip = 115; continue _fun71829 }
 26:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.queryApplicationCommandChannelResults;
            entity = {};
            report = argFoo;
            entity['query'] = report;
            entity['channel'] = tango;
            tango = argBaz;
            entity['channelTypes'] = tango;
            tango = 15;
            entity['limit'] = tango;
            entity = mike.bind(zulu)(entity);
            zulu = entity.channels;
            mike = zulu.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 8;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                zulu = zulu.SelectOptionType;
                zulu = zulu.CHANNEL;
                entity['type'] = zulu;
                zulu = mike.id;
                entity['value'] = zulu;
                mike = mike.name;
                entity['label'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            _fun71829_ip = 119; continue _fun71829;
 115:
            entity = new Array(0);
 119:
            return entity;
        }
    };
    zulu['queryChannels'] = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: getInitialSnowflakeSelectOptions
        _fun71831: for(var _fun71831_ip = 0; ; ) switch(_fun71831_ip) {
 0:
            entity = argFoo;
            oscar = _closure1_slot7;
            report = oscar.getInteractionComponentState;
            zulu = entity.id;
            mike = argBar;
            zulu = report.bind(oscar)(mike, zulu);
            oscar = _closure1_slot8;
            report = entity.defaultValues;
            offset = entity.type;
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            options = 5;
            mike = mike[options];
            golf = undefined;
            mike = verify.bind(golf)(mike);
            mike = mike.ComponentType;
            verify = mike.CHANNEL_SELECT;
            mike = undefined;
            if(!(offset === verify)) { _fun71831_ip = 91; continue _fun71831 }
 85:
            mike = entity.channelTypes;
 91:
            entity = argBaz;
            entity = oscar.bind(golf)(report, entity, mike);
            mike = null;
            report = mike == zulu;
            oscar = undefined;
            if(report) { _fun71831_ip = 117; continue _fun71831 }
 112:
            oscar = zulu.type;
 117:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[options];
            report = verify.bind(golf)(report);
            report = report.ComponentType;
            report = report.USER_SELECT;
            if(!(oscar !== report)) { _fun71831_ip = 294; continue _fun71831 }
 153:
            report = mike == zulu;
            oscar = undefined;
            if(report) { _fun71831_ip = 167; continue _fun71831 }
 162:
            oscar = zulu.type;
 167:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[options];
            report = verify.bind(golf)(report);
            report = report.ComponentType;
            report = report.ROLE_SELECT;
            if(!(oscar !== report)) { _fun71831_ip = 294; continue _fun71831 }
 200:
            report = mike == zulu;
            oscar = undefined;
            if(report) { _fun71831_ip = 214; continue _fun71831 }
 209:
            oscar = zulu.type;
 214:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[options];
            report = verify.bind(golf)(report);
            report = report.ComponentType;
            report = report.MENTIONABLE_SELECT;
            if(!(oscar !== report)) { _fun71831_ip = 294; continue _fun71831 }
 247:
            oscar = mike == zulu;
            report = undefined;
            if(oscar) { _fun71831_ip = 261; continue _fun71831 }
 256:
            report = zulu.type;
 261:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.ComponentType;
            tango = tango.CHANNEL_SELECT;
            if(!(report === tango)) { _fun71831_ip = 300; continue _fun71831 }
 294:
            entity = zulu.selectedOptions;
 300:
            if(!(mike == entity)) { _fun71831_ip = 308; continue _fun71831 }
 304:
            entity = new Array(0);
 308:
            return entity;
        }
    };
    zulu['getInitialSnowflakeSelectOptions'] = tango;
    zulu['getSnowflakeSelectDefaultValues'] = mike;
    return entity;
})();