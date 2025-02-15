// app/modules/messages/MessageParser.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar, argBaz) { // Original name: matchPrefix
        _fun63458: for(var _fun63458_ip = 0; ; ) switch(_fun63458_ip) {
 0:
            mike = argFoo;
            report = argBar;
            tango = argBaz;
            oscar = arguments[3];
            var _closure2_slot0 = mike;
            var _closure2_slot1 = report;
            zulu = undefined;
            if(!(oscar === zulu)) { _fun63458_ip = 30; continue _fun63458 }
 28:
            oscar = null;
 30:
            var _closure2_slot2 = oscar;
            var _closure2_slot3 = zulu;
            zulu = 0;
            zulu = report[zulu];
            if(!(zulu === mike)) { _fun63458_ip = 142; continue _fun63458 }
 48:
            zulu = report.substr;
            mike = mike.length;
            mike = zulu.bind(report)(mike);
            _closure2_slot3 = mike;
            zulu = tango.sortBy;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.text;
                entity = entity.length;
                entity = -entity;
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                tango = entity.text;
                mike = _closure2_slot1;
                entity = mike.toLowerCase;
                zulu = entity.bind(mike)();
                mike = zulu.indexOf;
                entity = tango.toLowerCase;
                entity = entity.bind(tango)();
                mike = mike.bind(zulu)(entity);
                entity = 1;
                entity = entity === mike;
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.sortBy;
            mike = function(argFoo) {
                _fun63461: for(var _fun63461_ip = 0; ; ) switch(_fun63461_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.text;
                    mike = _closure2_slot3;
                    entity = 1;
                    if(!(zulu === mike)) { _fun63461_ip = 24; continue _fun63461 }
 22:
                    entity = 0;
 24:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                zulu = entity.id;
                tango = entity.text;
                entity = _closure2_slot0;
                tango = entity + tango;
                entity = new Array(3);
                entity[0] = tango;
                entity[1] = zulu;
                mike = _closure2_slot2;
                entity[2] = mike;
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = mike.first;
            entity = entity.bind(mike)();
            return entity;
 142:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    kilo = function(argFoo) { // Original name: matchAndReturnText
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        entity = {};
        tango = zulu.order;
        entity['order'] = tango;
        zulu = zulu.match;
        entity['match'] = zulu;
        mike = function(argFoo) { // Original name: parse
            entity = {};
            mike = _closure2_slot0;
            mike = mike.type;
            entity['type'] = mike;
            zulu = argFoo;
            mike = 0;
            mike = zulu[mike];
            entity['content'] = mike;
            return entity;
        };
        entity['parse'] = mike;
        return entity;
    };
    yankee = function(argFoo) { // Original name: matchRegexAndReturnText
        entity = {};
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 13;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.anyScopeRegex;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        entity['match'] = mike;
        mike = function(argFoo) { // Original name: parse
            entity = {};
            mike = 'text';
            entity['type'] = mike;
            zulu = argFoo;
            mike = 0;
            mike = zulu[mike];
            entity['content'] = mike;
            return entity;
        };
        entity['parse'] = mike;
        return entity;
    };
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: rebuild
        tango = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = argBaz;
        var _closure2_slot1 = mike;
        mike = argCorge;
        var _closure2_slot2 = mike;
        mike = '';
        var _closure2_slot3 = mike;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun63468: for(var _fun63468_ip = 0; ; ) switch(_fun63468_ip) {
 0:
                entity = argFoo;
                backup = _closure2_slot0;
                foxtrot = _closure2_slot2;
                romeo = null;
                if(!(romeo != foxtrot)) { _fun63468_ip = 277; continue _fun63468 }
 23:
                tango = entity.type;
                zulu = 'customEmoticon';
                if(!(zulu === tango)) { _fun63468_ip = 54; continue _fun63468 }
 38:
                report = entity.emoji;
                tango = undefined;
                zulu = false;
                zulu = foxtrot.bind(tango)(report, zulu);
 54:
                tango = entity.type;
                zulu = 'emoticon';
                if(!(zulu !== tango)) { _fun63468_ip = 83; continue _fun63468 }
 67:
                tango = entity.type;
                zulu = 'text';
                if(!(zulu === tango)) { _fun63468_ip = 277; continue _fun63468 }
 83:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                offset = 17;
                zulu = zulu[offset];
                verify = undefined;
                report = tango.bind(verify)(zulu);
                tango = report.translateSurrogatesToInlineEmoji;
                zulu = entity.content;
                options = tango.bind(report)(zulu);
                tango = _closure1_slot19;
                zulu = tango.exec;
                zulu = zulu.bind(tango)(options);
                oscar = 1;
                report = 2;
                tango = '';
                if(!(romeo !== zulu)) { _fun63468_ip = 277; continue _fun63468 }
 156:
                kilo = zulu[oscar];
                if(!(romeo != kilo)) { _fun63468_ip = 172; continue _fun63468 }
 164:
                kilo = zulu[oscar];
                if(!(tango === kilo)) { _fun63468_ip = 206; continue _fun63468 }
 172:
                sizing = _closure1_slot1;
                kilo = _closure1_slot2;
                kilo = kilo[offset];
                output = sizing.bind(verify)(kilo);
                sizing = output.getByName;
                kilo = zulu[report];
                sizing = sizing.bind(output)(kilo);
                _fun63468_ip = 238; continue _fun63468;
 206:
                kilo = backup.emojiContext;
                sizing = undefined;
                if(!kilo) { _fun63468_ip = 238; continue _fun63468 }
 217:
                result = backup.emojiContext;
                output = result.getById;
                kilo = zulu[oscar];
                sizing = output.bind(result)(kilo);
 238:
                if(!sizing) { _fun63468_ip = 258; continue _fun63468 }
 241:
                kilo = entity.isShortcut;
                if(kilo) { _fun63468_ip = 252; continue _fun63468 }
 250:
                kilo = false;
 252:
                kilo = foxtrot.bind(verify)(sizing, kilo);
 258:
                sizing = _closure1_slot19;
                kilo = sizing.exec;
                zulu = kilo.bind(sizing)(options);
                if(romeo !== zulu) { _fun63468_ip = 156; continue _fun63468 }
 277:
                zulu = entity.content;
                tango = 'string';
                zulu = typeof zulu;
                if(!(tango !== zulu)) { _fun63468_ip = 362; continue _fun63468 }
 293:
                zulu = entity.content;
                tango = zulu.constructor;
                zulu = global;
                zulu = zulu.Array;
                if(!(tango === zulu)) { _fun63468_ip = 462; continue _fun63468 }
 318:
                tango = _closure2_slot3;
                verify = _closure1_slot21;
                control = entity.content;
                source = _closure2_slot0;
                update = _closure2_slot1;
                echo = _closure2_slot2;
                vacuum = undefined;
                zulu = vacuum[verify](control, source, update, echo, result);
                zulu = tango + zulu;
                _closure2_slot3 = zulu;
                _fun63468_ip = 462; continue _fun63468;
 362:
                tango = entity.type;
                zulu = 'codeBlock';
                if(!(zulu !== tango)) { _fun63468_ip = 445; continue _fun63468 }
 375:
                zulu = 'inlineCode';
                if(!(zulu !== tango)) { _fun63468_ip = 445; continue _fun63468 }
 383:
                zulu = 'mention';
                if(!(zulu !== tango)) { _fun63468_ip = 445; continue _fun63468 }
 391:
                zulu = 'roleMention';
                if(!(zulu !== tango)) { _fun63468_ip = 445; continue _fun63468 }
 399:
                zulu = 'channel';
                if(!(zulu !== tango)) { _fun63468_ip = 445; continue _fun63468 }
 407:
                zulu = 'emoji';
                if(!(zulu !== tango)) { _fun63468_ip = 445; continue _fun63468 }
 415:
                tango = _closure2_slot3;
                oscar = _closure2_slot1;
                report = entity.content;
                zulu = undefined;
                zulu = oscar.bind(zulu)(report);
                zulu = tango + zulu;
                _closure2_slot3 = zulu;
                _fun63468_ip = 462; continue _fun63468;
 445:
                zulu = _closure2_slot3;
                entity = entity.content;
                entity = zulu + entity;
                _closure2_slot3 = entity;
 462:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        entity = _closure2_slot3;
        return entity;
    };
    var _closure1_slot21 = entity;
    tango = function(argFoo, argBar, argBaz) { // Original name: parseAndRebuild
        oscar = argBar;
        report = _closure1_slot21;
        zulu = _closure1_slot18;
        tango = undefined;
        mike = argFoo;
        zulu = zulu.bind(tango)(mike, oscar);
        mike = _closure1_slot1;
        golf = _closure1_slot2;
        entity = 17;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        verify = entity.translateInlineEmojiToSurrogates;
        options = argBaz;
        romeo = undefined;
        yankee = zulu;
        offset = oscar;
        entity = romeo[report](yankee, offset, verify, options, golf);
        return entity;
    };
    var _closure1_slot22 = tango;
    mike = function(argFoo) { // Original name: createParserState
        _fun63470: for(var _fun63470_ip = 0; ; ) switch(_fun63470_ip) {
 0:
            tango = argFoo;
            report = null;
            entity = report == tango;
            oscar = undefined;
            zulu = undefined;
            if(entity) { _fun63470_ip = 28; continue _fun63470 }
 18:
            entity = tango.getGuildId;
            zulu = entity.bind(tango)();
 28:
            var _closure2_slot0 = zulu;
            entity = report != zulu;
            yankee = null;
            if(!entity) { _fun63470_ip = 58; continue _fun63470 }
 41:
            golf = _closure1_slot9;
            entity = golf.getGuild;
            yankee = entity.bind(golf)(zulu);
 58:
            verify = _closure1_slot10;
            options = verify.can;
            golf = _closure1_slot14;
            golf = golf.MENTION_EVERYONE;
            golf = options.bind(verify)(golf, tango);
            var _closure2_slot1 = golf;
            if(!(report != tango)) { _fun63470_ip = 108; continue _fun63470 }
 95:
            golf = tango.isPrivate;
            golf = golf.bind(tango)();
            if(golf) { _fun63470_ip = 150; continue _fun63470 }
 108:
            if(!(report == zulu)) { _fun63470_ip = 118; continue _fun63470 }
 112:
            backup = new Array(0);
            _fun63470_ip = 148; continue _fun63470;
 118:
            options = _closure1_slot8;
            golf = options.getMembers;
            verify = golf.bind(options)(zulu);
            options = verify.map;
            golf = function(argFoo) {
                entity = argFoo;
                zulu = entity.userId;
                mike = entity.nick;
                entity = {};
                entity['userId'] = zulu;
                entity['nick'] = mike;
                return entity;
            };
            backup = options.bind(verify)(golf);
 148:
            _fun63470_ip = 171; continue _fun63470;
 150:
            options = tango.recipients;
            golf = options.map;
            tango = function(argFoo) {
                entity = {};
                mike = argFoo;
                entity['userId'] = mike;
                mike = null;
                entity['nick'] = mike;
                return entity;
            };
            backup = golf.bind(options)(tango);
 171:
            verify = _closure1_slot1;
            options = _closure1_slot2;
            tango = 22;
            golf = options[tango];
            offset = verify.bind(oscar)(golf);
            foxtrot = backup.reduce;
            romeo = function(argFoo, argBar) {
                _fun63473: for(var _fun63473_ip = 0; ; ) switch(_fun63473_ip) {
 0:
                    entity = argFoo;
                    mike = argBar;
                    report = mike.userId;
                    zulu = _closure1_slot13;
                    mike = zulu.getUser;
                    tango = mike.bind(zulu)(report);
                    mike = null;
                    if(!(mike != tango)) { _fun63473_ip = 60; continue _fun63473 }
 35:
                    zulu = entity.push;
                    mike = {};
                    mike['id'] = report;
                    tango = tango.tag;
                    mike['text'] = tango;
                    mike = zulu.bind(entity)(mike);
 60:
                    return entity;
                }
            };
            golf = new Array(0);
            golf = foxtrot.bind(backup)(romeo, golf);
            golf = offset.bind(oscar)(golf);
            options = options[tango];
            verify = verify.bind(oscar)(options);
            if(!(report == yankee)) { _fun63470_ip = 234; continue _fun63470 }
 230:
            options = {};
            _fun63470_ip = 254; continue _fun63470;
 234:
            foxtrot = _closure1_slot9;
            romeo = foxtrot.getRoles;
            offset = yankee.id;
            options = romeo.bind(foxtrot)(offset);
 254:
            verify = verify.bind(oscar)(options);
            options = verify.values;
            offset = options.bind(verify)();
            verify = offset.filter;
            options = function(argFoo) {
                _fun63474: for(var _fun63474_ip = 0; ; ) switch(_fun63474_ip) {
 0:
                    entity = argFoo;
                    mike = entity.mentionable;
                    entity = _closure2_slot1;
                    if(entity) { _fun63474_ip = 22; continue _fun63474 }
 19:
                    entity = mike;
 22:
                    return entity;
                }
            };
            offset = verify.bind(offset)(options);
            verify = offset.map;
            options = function(argFoo) {
                entity = argFoo;
                zulu = entity.id;
                mike = entity.name;
                entity = {};
                entity['id'] = zulu;
                entity['text'] = mike;
                return entity;
            };
            romeo = verify.bind(offset)(options);
            verify = _closure1_slot1;
            options = _closure1_slot2;
            options = options[tango];
            verify = verify.bind(oscar)(options);
            offset = _closure1_slot6;
            options = offset.getTextChannelNameDisambiguations;
            options = options.bind(offset)(zulu);
            offset = verify.bind(oscar)(options);
            verify = offset.map;
            options = function(argFoo) {
                entity = argFoo;
                zulu = entity.id;
                mike = entity.name;
                entity = {};
                entity['id'] = zulu;
                entity['text'] = mike;
                return entity;
            };
            offset = verify.bind(offset)(options);
            if(!(report == zulu)) { _fun63470_ip = 360; continue _fun63470 }
 354:
            options = new Array(0);
            _fun63470_ip = 444; continue _fun63470;
 360:
            report = _closure1_slot1;
            foxtrot = _closure1_slot2;
            tango = foxtrot[tango];
            report = report.bind(oscar)(tango);
            verify = _closure1_slot0;
            tango = 23;
            tango = foxtrot[tango];
            tango = verify.bind(oscar)(tango);
            tango = tango.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            oscar = report.bind(oscar)(tango);
            report = oscar.filter;
            tango = function(argFoo) {
                mike = _closure1_slot7;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            oscar = report.bind(oscar)(tango);
            report = oscar.flatMap;
            tango = function(argFoo) {
                zulu = _closure1_slot6;
                mike = zulu.getChannels;
                entity = _closure2_slot0;
                mike = mike.bind(zulu)(entity);
                entity = argFoo;
                zulu = mike[entity];
                mike = zulu.map;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    zulu = mike.channel;
                    zulu = zulu.id;
                    entity['id'] = zulu;
                    mike = mike.channel;
                    mike = mike.name;
                    entity['text'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = report.bind(oscar)(tango);
            tango = report.value;
            options = tango.bind(report)();
 444:
            report = _closure1_slot4;
            tango = report.computeAllActiveJoinedThreads;
            report = tango.bind(report)(zulu);
            tango = report.map;
            mike = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.id;
                entity['id'] = zulu;
                mike = mike.name;
                entity['text'] = mike;
                return entity;
            };
            verify = tango.bind(report)(mike);
            mike = _closure1_slot3;
            entity = mike.getDisambiguatedEmojiContext;
            oscar = entity.bind(mike)(zulu);
            entity = oscar.getEscapedCustomEmoticonNames;
            zulu = entity.bind(oscar)();
            entity = oscar.getCustomEmoji;
            tango = entity.bind(oscar)();
            entity = oscar.getCustomEmoticonRegex;
            report = entity.bind(oscar)();
            entity = {};
            mike = true;
            entity['inline'] = mike;
            entity['mentionableRoles'] = romeo;
            entity['guild'] = yankee;
            entity['users'] = golf;
            golf = offset.concat;
            options = golf.bind(offset)(options);
            golf = options.concat;
            golf = golf.bind(options)(verify);
            entity['channels'] = golf;
            entity['emojiContext'] = oscar;
            entity['customEmoticonsRegex'] = report;
            entity['customEmoji'] = tango;
            entity['textExclusions'] = zulu;
            entity['disableErrorGuards'] = mike;
            return entity;
        }
    };
    var _closure1_slot23 = mike;
    entity = function(argFoo) { // Original name: NOOP
        entity = argFoo;
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = global;
    romeo = entity.Object;
    offset = romeo.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeo)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    offset = options[report];
    offset = verify.bind(entity)(offset);
    var _closure1_slot6 = offset;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot7 = report;
    report = 4;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 8;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 9;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 10;
    report = options[report];
    report = golf.bind(entity)(report);
    result = report.MARKDOWN_SPOILER_REGEXP;
    output = report.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
    report = report.Permissions;
    var _closure1_slot14 = report;
    report = 11;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.EmojiIntention;
    var _closure1_slot15 = report;
    control = /^<@!?(\d+)>/;
    source = /^<@&(\d+)>/;
    update = /^<#(\d+)>/;
    echo = /^<a?:(\w+):(\d+)>/;
    report = /(@everyone|@here|@Clyde)\b/;
    var _closure1_slot16 = report;
    offset = {};
    report = 13;
    romeo = options[report];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.defaultRules;
    romeo = romeo.link;
    romeo = kilo.bind(entity)(romeo);
    offset['link'] = romeo;
    romeo = options[report];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.defaultRules;
    romeo = romeo.autolink;
    romeo = kilo.bind(entity)(romeo);
    offset['autolink'] = romeo;
    romeo = options[report];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.defaultRules;
    romeo = romeo.url;
    romeo = kilo.bind(entity)(romeo);
    offset['url'] = romeo;
    backup = 14;
    romeo = options[backup];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.RULES;
    romeo = romeo.inlineCode;
    romeo = kilo.bind(entity)(romeo);
    offset['inlineCode'] = romeo;
    romeo = options[backup];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.RULES;
    romeo = romeo.codeBlock;
    romeo = kilo.bind(entity)(romeo);
    offset['codeBlock'] = romeo;
    romeo = yankee.bind(entity)(control);
    offset['rawUserMention'] = romeo;
    romeo = yankee.bind(entity)(source);
    offset['rawRoleMention'] = romeo;
    romeo = yankee.bind(entity)(update);
    offset['rawChannelMention'] = romeo;
    yankee = yankee.bind(entity)(echo);
    offset['rawEmoji'] = yankee;
    yankee = {};
    romeo = function(argFoo, argBar, argBaz) { // Original name: match
        _fun63482: for(var _fun63482_ip = 0; ; ) switch(_fun63482_ip) {
 0:
            golf = argFoo;
            zulu = argBar;
            verify = argBaz;
            mike = verify.split;
            entity = ' ';
            mike = mike.bind(verify)(entity);
            entity = mike.pop;
            entity = entity.bind(mike)();
            tango = entity + golf;
            mike = /^[^ ]+@[^ ]+\.[^ .]+/;
            entity = mike.test;
            entity = entity.bind(mike)(tango);
            if(entity) { _fun63482_ip = 318; continue _fun63482 }
 67:
            mike = _closure1_slot20;
            backup = zulu.users;
            options = undefined;
            offset = '@';
            oscar = 'mention';
            output = undefined;
            sizing = offset;
            kilo = golf;
            foxtrot = oscar;
            entity = output[mike](sizing, kilo, backup, foxtrot, romeo);
            if(entity) { _fun63482_ip = 316; continue _fun63482 }
 111:
            yankee = _closure1_slot20;
            backup = zulu.mentionableRoles;
            foxtrot = 'roleMention';
            output = undefined;
            sizing = offset;
            kilo = golf;
            mike = output[yankee](sizing, kilo, backup, foxtrot, romeo);
            if(mike) { _fun63482_ip = 314; continue _fun63482 }
 143:
            tango = _closure1_slot20;
            romeo = zulu.users;
            yankee = romeo.map;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = {};
                oscar = entity;
                report = mike;
                zulu = copyDataProperties(oscar, report);
                tango = mike.text;
                zulu = tango.split;
                mike = '#';
                zulu = zulu.bind(tango)(mike);
                mike = 0;
                zulu = zulu[mike];
                mike = 'text';
                entity[mike] = zulu;
                return entity;
            };
            backup = yankee.bind(romeo)(zulu);
            output = undefined;
            sizing = offset;
            kilo = golf;
            foxtrot = oscar;
            tango = output[tango](sizing, kilo, backup, foxtrot, romeo);
            zulu = null;
            if(tango) { _fun63482_ip = 192; continue _fun63482 }
 190:
            return zulu;
 192:
            offset = _closure1_slot16;
            oscar = offset.exec;
            yankee = oscar.bind(offset)(golf);
            if(!(zulu != yankee)) { _fun63482_ip = 235; continue _fun63482 }
 211:
            oscar = 0;
            offset = tango[oscar];
            offset = offset.length;
            oscar = yankee[oscar];
            oscar = oscar.length;
            if(!(!(offset <= oscar))) { _fun63482_ip = 312; continue _fun63482 }
 235:
            oscar = '';
            if(!(oscar === verify)) { _fun63482_ip = 308; continue _fun63482 }
 243:
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 15;
            report = verify[report];
            report = oscar.bind(options)(report);
            oscar = report.SILENT_RE;
            report = oscar.exec;
            golf = report.bind(oscar)(golf);
            if(!(zulu != golf)) { _fun63482_ip = 308; continue _fun63482 }
 284:
            report = 0;
            oscar = tango[report];
            oscar = oscar.length;
            report = golf[report];
            report = report.length;
            if(!(!(oscar <= report))) { _fun63482_ip = 310; continue _fun63482 }
 308:
            return tango;
 310:
            return zulu;
 312:
            return zulu;
 314:
            return mike;
 316:
            return entity;
 318:
            entity = null;
            return entity;
        }
    };
    yankee['match'] = romeo;
    romeo = function(argFoo) { // Original name: parse
        _fun63484: for(var _fun63484_ip = 0; ; ) switch(_fun63484_ip) {
 0:
            options = argFoo;
            mike = options[Symbol.iterator];
            options = mike().next;
            offset = undefined;
            zulu = undefined;
            tango = undefined;
            verify = options().value;
            yankee = mike;
            yankee = yankee === offset;
            zulu = yankee;
            if(yankee) { _fun63484_ip = 32; continue _fun63484 }
 29:
            tango = verify;
 32:
            tango = undefined;
            verify = zulu;
            if(verify) { _fun63484_ip = 60; continue _fun63484 }
 40:
            verify = options().value;
            yankee = mike;
            yankee = yankee === offset;
            zulu = yankee;
            if(yankee) { _fun63484_ip = 60; continue _fun63484 }
 57:
            tango = verify;
 60:
            report = tango;
            tango = undefined;
            verify = zulu;
            if(verify) { _fun63484_ip = 91; continue _fun63484 }
 71:
            options = options().value;
            verify = mike;
            verify = verify === offset;
            zulu = verify;
            if(verify) { _fun63484_ip = 91; continue _fun63484 }
 88:
            tango = options;
 91:
            golf = tango;
            tango = zulu;
            if(tango) { _fun63484_ip = 103; continue _fun63484 }
 100:
            mike.return();
 103:
            oscar = '@';
            options = golf;
            tango = 'roleMention';
            if(!(tango === options)) { _fun63484_ip = 129; continue _fun63484 }
 118:
            options = oscar;
            tango = '&';
            oscar = options + tango;
 129:
            tango = {};
            tango['type'] = golf;
            verify = oscar;
            options = report;
            report = global;
            report = report.HermesInternal;
            golf = report.concat;
            oscar = '<';
            report = '>';
            report = golf.bind(oscar)(verify, options, report);
            tango['content'] = report;
            return tango;
 175:
            CatchBlockStart(arg_register=0);
            if(zulu) { _fun63484_ip = 183; continue _fun63484 }
 180:
            mike.return();
 183:
            throw entity;
        }
    };
    yankee['parse'] = romeo;
    offset['mention'] = yankee;
    yankee = {};
    romeo = function(argFoo, argBar) { // Original name: match
        entity = argBar;
        report = entity.channels;
        tango = function(argFoo, argBar, argBaz) { // Original name: matchChannelPrefix
            _fun63486: for(var _fun63486_ip = 0; ; ) switch(_fun63486_ip) {
 0:
                oscar = argBar;
                report = argBaz;
                tango = undefined;
                zulu = undefined;
                if(!(zulu === zulu)) { _fun63486_ip = 18; continue _fun63486 }
 16:
                zulu = null;
 18:
                var _closure3_slot0 = zulu;
                var _closure3_slot1 = tango;
                var _closure3_slot2 = tango;
                verify = 0;
                golf = oscar[verify];
                mike = '#';
                if(!(golf === mike)) { _fun63486_ip = 287; continue _fun63486 }
 47:
                golf = 1;
                options = oscar[golf];
                backup = '"';
                if(!(backup === options)) { _fun63486_ip = 260; continue _fun63486 }
 65:
                options = oscar.length;
                yankee = 2;
                options = yankee < options;
                foxtrot = '\\';
                romeo = yankee;
                offset = romeo;
                if(!options) { _fun63486_ip = 132; continue _fun63486 }
 90:
                options = oscar[romeo];
                if(!(foxtrot === options)) { _fun63486_ip = 103; continue _fun63486 }
 98:
                options = romeo + 1;
                _fun63486_ip = 117; continue _fun63486;
 103:
                kilo = oscar[romeo];
                options = romeo;
                offset = options;
                if(!(backup !== kilo)) { _fun63486_ip = 132; continue _fun63486 }
 117:
                romeo = options + 1;
                options = oscar.length;
                offset = romeo;
                if(offset < options) { _fun63486_ip = 90; continue _fun63486 }
 132:
                options = oscar.substring;
                golf = offset + golf;
                golf = options.bind(oscar)(verify, golf);
                _closure3_slot1 = golf;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                golf = 12;
                golf = verify[golf];
                verify = options.bind(tango)(golf);
                options = verify.unescapeChannelName;
                golf = oscar.substring;
                golf = golf.bind(oscar)(yankee, offset);
                golf = options.bind(verify)(golf);
                _closure3_slot2 = golf;
                options = report.sortBy;
                golf = function(argFoo) {
                    entity = argFoo;
                    entity = entity.text;
                    entity = entity.length;
                    entity = -entity;
                    return entity;
                };
                verify = options.bind(report)(golf);
                options = verify.filter;
                golf = function(argFoo) {
                    entity = argFoo;
                    mike = entity.text;
                    entity = _closure3_slot2;
                    entity = entity === mike;
                    return entity;
                };
                options = options.bind(verify)(golf);
                golf = options.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.id;
                    tango = _closure3_slot1;
                    entity = new Array(3);
                    entity[0] = tango;
                    entity[1] = zulu;
                    mike = _closure3_slot0;
                    entity[2] = mike;
                    return entity;
                };
                golf = golf.bind(options)(entity);
                entity = golf.first;
                entity = entity.bind(golf)();
                return entity;
 260:
                entity = _closure1_slot20;
                update = undefined;
                echo = mike;
                result = oscar;
                output = report;
                sizing = zulu;
                entity = update[entity](echo, result, output, sizing, kilo);
                return entity;
 287:
                entity = null;
                return entity;
            }
        };
        zulu = undefined;
        mike = '#';
        entity = argFoo;
        entity = tango.bind(zulu)(mike, entity, report);
        return entity;
    };
    yankee['match'] = romeo;
    romeo = function(argFoo) { // Original name: parse
        entity = {};
        mike = 'text';
        entity['type'] = mike;
        zulu = argFoo;
        mike = 1;
        report = zulu[mike];
        mike = global;
        mike = mike.HermesInternal;
        tango = mike.concat;
        zulu = '<#';
        mike = '>';
        mike = tango.bind(zulu)(report, mike);
        entity['content'] = mike;
        return entity;
    };
    yankee['parse'] = romeo;
    offset['channel'] = yankee;
    yankee = {};
    romeo = function(argFoo, argBar, argBaz) { // Original name: match
        _fun63491: for(var _fun63491_ip = 0; ; ) switch(_fun63491_ip) {
 0:
            tango = argFoo;
            golf = argBaz;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 16;
            mike = report[mike];
            report = undefined;
            mike = zulu.bind(report)(mike);
            zulu = mike.ConvertEmoticons;
            mike = zulu.getSetting;
            mike = mike.bind(zulu)();
            if(mike) { _fun63491_ip = 54; continue _fun63491 }
 50:
            mike = null;
            return mike;
 54:
            mike = golf.length;
            zulu = 0;
            if(!(zulu !== mike)) { _fun63491_ip = 96; continue _fun63491 }
 65:
            oscar = /\s$/;
            mike = oscar.test;
            mike = mike.bind(oscar)(golf);
            if(mike) { _fun63491_ip = 96; continue _fun63491 }
 92:
            mike = null;
            return mike;
 96:
            mike = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 17;
            entity = oscar[entity];
            entity = mike.bind(report)(entity);
            mike = entity.EMOJI_SHORTCUT_RE;
            entity = mike.exec;
            mike = entity.bind(mike)(tango);
            report = null;
            oscar = report == mike;
            entity = null;
            if(oscar) { _fun63491_ip = 209; continue _fun63491 }
 144:
            oscar = mike[zulu];
            golf = oscar.length;
            oscar = tango.length;
            if(!(golf !== oscar)) { _fun63491_ip = 206; continue _fun63491 }
 162:
            oscar = mike[zulu];
            oscar = oscar.length;
            golf = tango[oscar];
            oscar = ' ';
            if(!(oscar !== golf)) { _fun63491_ip = 206; continue _fun63491 }
 183:
            zulu = mike[zulu];
            zulu = zulu.length;
            tango = tango[zulu];
            zulu = '\n';
            entity = null;
            if(!(zulu === tango)) { _fun63491_ip = 209; continue _fun63491 }
 206:
            entity = mike;
 209:
            return entity;
        }
    };
    yankee['match'] = romeo;
    romeo = function(argFoo) { // Original name: parse
        entity = {'type': 'emoticon', 'content': null, 'isShortcut': true};
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 17;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.convertShortcutToName;
        report = argFoo;
        mike = 1;
        mike = report[mike];
        mike = zulu.bind(tango)(mike);
        entity['content'] = mike;
        return entity;
    };
    yankee['parse'] = romeo;
    offset['emoticon'] = yankee;
    yankee = {};
    romeo = options[backup];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.RULES;
    romeo = romeo.emoji;
    romeo = romeo.order;
    yankee['order'] = romeo;
    romeo = function(argFoo) { // Original name: match
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 17;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.EMOJI_NAME_RE;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    yankee['match'] = romeo;
    romeo = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun63494: for(var _fun63494_ip = 0; ; ) switch(_fun63494_ip) {
 0:
            tango = argFoo;
            entity = tango[Symbol.iterator];
            tango = entity().next;
            report = tango().value;
            mike = entity;
            golf = undefined;
            zulu = mike === golf;
            mike = undefined;
            if(zulu) { _fun63494_ip = 27; continue _fun63494 }
 24:
            mike = report;
 27:
            oscar = undefined;
            if(zulu) { _fun63494_ip = 57; continue _fun63494 }
 32:
            report = tango().value;
            tango = entity;
            tango = tango === golf;
            oscar = undefined;
            zulu = tango;
            if(tango) { _fun63494_ip = 57; continue _fun63494 }
 51:
            oscar = report;
            zulu = tango;
 57:
            if(zulu) { _fun63494_ip = 63; continue _fun63494 }
 60:
            entity.return();
 63:
            entity = argBaz;
            entity = entity.customEmoji;
            tango = global;
            zulu = tango.Object;
            zulu = zulu.prototype;
            report = zulu.hasOwnProperty;
            zulu = report.call;
            golf = zulu.bind(report)(entity, oscar);
            report = null;
            zulu = null;
            if(!golf) { _fun63494_ip = 113; continue _fun63494 }
 109:
            zulu = entity[oscar];
 113:
            if(!(report == zulu)) { _fun63494_ip = 133; continue _fun63494 }
 117:
            entity = {};
            oscar = 'text';
            entity['type'] = oscar;
            entity['content'] = mike;
            _fun63494_ip = 236; continue _fun63494;
 133:
            mike = {};
            oscar = 'customEmoticon';
            mike['type'] = oscar;
            golf = zulu.animated;
            offset = '';
            oscar = true;
            if(!(oscar === golf)) { _fun63494_ip = 165; continue _fun63494 }
 161:
            offset = 'a';
 165:
            verify = zulu.originalName;
            if(!(report == verify)) { _fun63494_ip = 180; continue _fun63494 }
 175:
            verify = zulu.name;
 180:
            romeo = zulu.id;
            tango = tango.HermesInternal;
            golf = tango.concat;
            output = '<';
            report = ':';
            yankee = '>';
            sizing = offset;
            kilo = report;
            backup = verify;
            foxtrot = report;
            tango = output[golf](sizing, kilo, backup, foxtrot, romeo, yankee, offset);
            mike['content'] = tango;
            mike['emoji'] = zulu;
            entity = mike;
 236:
            return entity;
        }
    };
    yankee['parse'] = romeo;
    offset['emoji'] = yankee;
    yankee = {};
    romeo = function(argFoo, argBar) { // Original name: match
        _fun63495: for(var _fun63495_ip = 0; ; ) switch(_fun63495_ip) {
 0:
            entity = argBar;
            report = entity.customEmoticonsRegex;
            entity = null;
            zulu = entity == report;
            mike = undefined;
            if(zulu) { _fun63495_ip = 34; continue _fun63495 }
 20:
            tango = report.exec;
            zulu = argFoo;
            mike = tango.bind(report)(zulu);
 34:
            zulu = entity != mike;
            entity = null;
            if(!zulu) { _fun63495_ip = 46; continue _fun63495 }
 43:
            entity = mike;
 46:
            return entity;
        }
    };
    yankee['match'] = romeo;
    romeo = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun63496: for(var _fun63496_ip = 0; ; ) switch(_fun63496_ip) {
 0:
            report = argFoo;
            entity = report[Symbol.iterator];
            report = entity().next;
            tango = report().value;
            mike = entity;
            golf = undefined;
            zulu = mike === golf;
            mike = undefined;
            if(zulu) { _fun63496_ip = 27; continue _fun63496 }
 24:
            mike = tango;
 27:
            tango = undefined;
            if(zulu) { _fun63496_ip = 57; continue _fun63496 }
 32:
            oscar = report().value;
            report = entity;
            report = report === golf;
            tango = undefined;
            zulu = report;
            if(report) { _fun63496_ip = 57; continue _fun63496 }
 51:
            tango = oscar;
            zulu = report;
 57:
            if(zulu) { _fun63496_ip = 63; continue _fun63496 }
 60:
            entity.return();
 63:
            entity = argBaz;
            zulu = entity.emojiContext;
            entity = zulu.getEmoticonByName;
            zulu = entity.bind(zulu)(tango);
            entity = null;
            if(!(entity == zulu)) { _fun63496_ip = 107; continue _fun63496 }
 91:
            entity = {};
            tango = 'text';
            entity['type'] = tango;
            entity['content'] = mike;
            _fun63496_ip = 199; continue _fun63496;
 107:
            mike = {};
            tango = 'customEmoticon';
            mike['type'] = tango;
            report = zulu.animated;
            offset = '';
            tango = true;
            if(!(tango === report)) { _fun63496_ip = 139; continue _fun63496 }
 135:
            offset = 'a';
 139:
            backup = zulu.name;
            romeo = zulu.id;
            tango = global;
            tango = tango.HermesInternal;
            golf = tango.concat;
            output = '<';
            report = ':';
            yankee = '>';
            sizing = offset;
            kilo = report;
            foxtrot = report;
            tango = output[golf](sizing, kilo, backup, foxtrot, romeo, yankee, offset);
            mike['content'] = tango;
            mike['emoji'] = zulu;
            entity = mike;
 199:
            return entity;
        }
    };
    yankee['parse'] = romeo;
    offset['customEmoticons'] = yankee;
    yankee = {};
    foxtrot = 18;
    romeo = options[foxtrot];
    sequence = verify.bind(entity)(romeo);
    config = yankee;
    romeo = copyDataProperties(config, sequence);
    sizing = function(argFoo, argBar) { // Original name: match
        _fun63497: for(var _fun63497_ip = 0; ; ) switch(_fun63497_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            entity = mike.textExclusions;
            zulu = 'string';
            entity = typeof entity;
            if(!(zulu === entity)) { _fun63497_ip = 37; continue _fun63497 }
 23:
            zulu = mike.textExclusions;
            entity = '';
            if(!(entity === zulu)) { _fun63497_ip = 113; continue _fun63497 }
 37:
            report = _closure1_slot1;
            entity = _closure1_slot2;
            golf = 18;
            entity = entity[golf];
            oscar = undefined;
            entity = report.bind(oscar)(entity);
            report = entity.match;
            entity = null;
            report = entity != report;
            if(!report) { _fun63497_ip = 111; continue _fun63497 }
 77:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            oscar = report.bind(oscar)(zulu);
            report = oscar.match;
            zulu = '';
            entity = report.bind(oscar)(tango, mike, zulu);
 111:
            _fun63497_ip = 166; continue _fun63497;
 113:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 18;
            report = report[zulu];
            zulu = undefined;
            report = oscar.bind(zulu)(report);
            zulu = report.textMarkupPatternWithExclusions;
            mike = mike.textExclusions;
            zulu = zulu.bind(report)(mike);
            mike = zulu.exec;
            entity = mike.bind(zulu)(tango);
 166:
            return entity;
        }
    };
    romeo = 'match';
    yankee[romeo] = sizing;
    offset['text'] = yankee;
    yankee = {};
    romeo = options[backup];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.RULES;
    romeo = romeo.inlineCode;
    romeo = kilo.bind(entity)(romeo);
    yankee['inlineCode'] = romeo;
    romeo = options[backup];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.RULES;
    romeo = romeo.codeBlock;
    romeo = kilo.bind(entity)(romeo);
    yankee['codeBlock'] = romeo;
    romeo = {};
    kilo = options[report];
    sizing = verify.bind(entity)(kilo);
    kilo = sizing.anyScopeRegex;
    kilo = kilo.bind(sizing)(control);
    romeo['match'] = kilo;
    kilo = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun63498: for(var _fun63498_ip = 0; ; ) switch(_fun63498_ip) {
 0:
            zulu = argFoo;
            entity = argBaz;
            tango = entity.isNotification;
            oscar = _closure1_slot13;
            report = oscar.getUser;
            mike = 1;
            mike = zulu[mike];
            oscar = report.bind(oscar)(mike);
            mike = null;
            if(!(mike != oscar)) { _fun63498_ip = 239; continue _fun63498 }
 46:
            verify = _closure1_slot1;
            report = _closure1_slot2;
            options = 19;
            report = report[options];
            golf = undefined;
            offset = verify.bind(golf)(report);
            verify = offset.getUserTag;
            report = {};
            foxtrot = 'always';
            yankee = foxtrot;
            if(!tango) { _fun63498_ip = 109; continue _fun63498 }
 88:
            romeo = _closure1_slot12;
            romeo = romeo.enabled;
            yankee = foxtrot;
            if(!romeo) { _fun63498_ip = 109; continue _fun63498 }
 103:
            yankee = 'never';
 109:
            report['identifiable'] = yankee;
            report = verify.bind(offset)(oscar, report);
            if(tango) { _fun63498_ip = 153; continue _fun63498 }
 123:
            tango = {};
            verify = global;
            verify = verify.HermesInternal;
            offset = verify.concat;
            verify = '@';
            verify = offset.bind(verify)(report);
            tango['content'] = verify;
            return tango;
 153:
            tango = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[options];
            tango = tango.bind(golf)(entity);
            entity = tango.getGlobalName;
            oscar = entity.bind(tango)(oscar);
            entity = {};
            if(!(mike == oscar)) { _fun63498_ip = 211; continue _fun63498 }
 187:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            mike = '@';
            mike = tango.bind(mike)(report);
            _fun63498_ip = 233; continue _fun63498;
 211:
            tango = global;
            tango = tango.HermesInternal;
            report = tango.concat;
            tango = '@';
            mike = report.bind(tango)(oscar);
 233:
            entity['content'] = mike;
            return entity;
 239:
            entity = {};
            mike = 0;
            mike = zulu[mike];
            entity['content'] = mike;
            return entity;
        }
    };
    romeo['parse'] = kilo;
    yankee['mention'] = romeo;
    romeo = {};
    kilo = options[report];
    sizing = verify.bind(entity)(kilo);
    kilo = sizing.anyScopeRegex;
    kilo = kilo.bind(sizing)(source);
    romeo['match'] = kilo;
    kilo = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun63499: for(var _fun63499_ip = 0; ; ) switch(_fun63499_ip) {
 0:
            tango = argFoo;
            entity = argBaz;
            mike = entity.guild;
            entity = null;
            if(!(entity != mike)) { _fun63499_ip = 55; continue _fun63499 }
 17:
            report = _closure1_slot9;
            zulu = report.getRoles;
            mike = mike.id;
            zulu = zulu.bind(report)(mike);
            mike = 1;
            mike = tango[mike];
            mike = zulu[mike];
            if(!(entity == mike)) { _fun63499_ip = 69; continue _fun63499 }
 55:
            entity = {};
            zulu = 0;
            zulu = tango[zulu];
            entity['content'] = zulu;
            return entity;
 69:
            entity = {};
            tango = mike.name;
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = '@';
            mike = zulu.bind(mike)(tango);
            entity['content'] = mike;
            return entity;
        }
    };
    romeo['parse'] = kilo;
    yankee['roleMention'] = romeo;
    romeo = {};
    kilo = options[report];
    sizing = verify.bind(entity)(kilo);
    kilo = sizing.anyScopeRegex;
    kilo = kilo.bind(sizing)(update);
    romeo['match'] = kilo;
    kilo = function(argFoo) { // Original name: parse
        _fun63500: for(var _fun63500_ip = 0; ; ) switch(_fun63500_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot5;
            zulu = report.getChannel;
            entity = 1;
            entity = tango[entity];
            options = zulu.bind(report)(entity);
            entity = {};
            zulu = null;
            if(!(zulu != options)) { _fun63500_ip = 87; continue _fun63500 }
 35:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 12;
            report = report[zulu];
            zulu = undefined;
            golf = oscar.bind(zulu)(report);
            oscar = golf.computeChannelName;
            romeo = _closure1_slot13;
            yankee = _closure1_slot11;
            backup = golf;
            foxtrot = options;
            offset = true;
            verify = true;
            mike = backup[oscar](foxtrot, romeo, yankee, offset, verify, options);
            _fun63500_ip = 93; continue _fun63500;
 87:
            zulu = 0;
            mike = tango[zulu];
 93:
            entity['content'] = mike;
            return entity;
        }
    };
    romeo['parse'] = kilo;
    yankee['channel'] = romeo;
    romeo = {};
    kilo = options[report];
    sizing = verify.bind(entity)(kilo);
    kilo = sizing.anyScopeRegex;
    kilo = kilo.bind(sizing)(echo);
    romeo['match'] = kilo;
    kilo = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun63501: for(var _fun63501_ip = 0; ; ) switch(_fun63501_ip) {
 0:
            zulu = argFoo;
            entity = zulu[Symbol.iterator];
            zulu = entity().next;
            mike = zulu().value;
            mike = entity;
            golf = undefined;
            mike = mike === golf;
            tango = undefined;
            if(mike) { _fun63501_ip = 49; continue _fun63501 }
 24:
            oscar = zulu().value;
            report = entity;
            report = report === golf;
            tango = undefined;
            mike = report;
            if(report) { _fun63501_ip = 49; continue _fun63501 }
 43:
            tango = oscar;
            mike = report;
 49:
            report = undefined;
            if(mike) { _fun63501_ip = 79; continue _fun63501 }
 54:
            oscar = zulu().value;
            zulu = entity;
            zulu = zulu === golf;
            report = undefined;
            mike = zulu;
            if(zulu) { _fun63501_ip = 79; continue _fun63501 }
 73:
            report = oscar;
            mike = zulu;
 79:
            if(mike) { _fun63501_ip = 85; continue _fun63501 }
 82:
            entity.return();
 85:
            entity = argBaz;
            golf = entity.guild;
            oscar = _closure1_slot3;
            mike = oscar.getDisambiguatedEmojiContext;
            zulu = null;
            entity = null;
            if(!golf) { _fun63501_ip = 118; continue _fun63501 }
 113:
            entity = golf.id;
 118:
            mike = mike.bind(oscar)(entity);
            entity = mike.getById;
            mike = entity.bind(mike)(report);
            entity = {};
            if(!(zulu != mike)) { _fun63501_ip = 145; continue _fun63501 }
 140:
            tango = mike.name;
 145:
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = ':';
            mike = zulu.bind(mike)(tango, mike);
            entity['content'] = mike;
            return entity;
        }
    };
    romeo['parse'] = kilo;
    yankee['emoji'] = romeo;
    romeo = {};
    kilo = options[report];
    echo = verify.bind(entity)(kilo);
    sizing = echo.anyScopeRegex;
    kilo = 20;
    kilo = options[kilo];
    kilo = golf.bind(entity)(kilo);
    kilo = kilo.soundmojiRawFormatRegex;
    kilo = sizing.bind(echo)(kilo);
    romeo['match'] = kilo;
    kilo = function(argFoo) { // Original name: parse
        _fun63502: for(var _fun63502_ip = 0; ; ) switch(_fun63502_ip) {
 0:
            zulu = argFoo;
            entity = zulu[Symbol.iterator];
            zulu = entity().next;
            mike = zulu().value;
            mike = entity;
            report = undefined;
            mike = mike === report;
            golf = undefined;
            if(mike) { _fun63502_ip = 49; continue _fun63502 }
 24:
            oscar = zulu().value;
            tango = entity;
            tango = tango === report;
            golf = undefined;
            mike = tango;
            if(tango) { _fun63502_ip = 49; continue _fun63502 }
 43:
            golf = oscar;
            mike = tango;
 49:
            oscar = undefined;
            if(mike) { _fun63502_ip = 79; continue _fun63502 }
 54:
            tango = zulu().value;
            zulu = entity;
            zulu = zulu === report;
            oscar = undefined;
            mike = zulu;
            if(zulu) { _fun63502_ip = 79; continue _fun63502 }
 73:
            oscar = tango;
            mike = zulu;
 79:
            if(mike) { _fun63502_ip = 85; continue _fun63502 }
 82:
            entity.return();
 85:
            entity = {};
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            foxtrot = '<sound:';
            yankee = ':';
            verify = '>';
            romeo = golf;
            offset = oscar;
            mike = foxtrot[report](romeo, yankee, offset, verify, options);
            entity['content'] = mike;
            return entity;
        }
    };
    romeo['parse'] = kilo;
    yankee['soundboard'] = romeo;
    romeo = {};
    kilo = options[report];
    sizing = verify.bind(entity)(kilo);
    kilo = sizing.anyScopeRegex;
    kilo = kilo.bind(sizing)(result);
    romeo['match'] = kilo;
    kilo = function() { // Original name: parse
        entity = {};
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 21;
        zulu = golf[mike];
        report = undefined;
        zulu = oscar.bind(report)(zulu);
        tango = zulu.intl;
        zulu = tango.string;
        mike = golf[mike];
        mike = oscar.bind(report)(mike);
        mike = mike.t;
        mike = mike.F+x38P;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.toLowerCase;
        report = mike.bind(zulu)();
        mike = global;
        mike = mike.HermesInternal;
        tango = mike.concat;
        zulu = '<';
        mike = '>';
        mike = tango.bind(zulu)(report, mike);
        entity['content'] = mike;
        return entity;
    };
    romeo['parse'] = kilo;
    yankee['spoiler'] = romeo;
    romeo = {};
    kilo = options[report];
    sizing = verify.bind(entity)(kilo);
    kilo = sizing.anyScopeRegex;
    kilo = kilo.bind(sizing)(output);
    romeo['match'] = kilo;
    kilo = function(argFoo) { // Original name: parse
        entity = {};
        zulu = argFoo;
        mike = 1;
        report = zulu[mike];
        mike = global;
        mike = mike.HermesInternal;
        tango = mike.concat;
        zulu = '<id:';
        mike = '>';
        mike = tango.bind(zulu)(report, mike);
        entity['content'] = mike;
        return entity;
    };
    romeo['parse'] = kilo;
    yankee['staticRouteLink'] = romeo;
    romeo = {};
    backup = options[backup];
    backup = verify.bind(entity)(backup);
    backup = backup.RULES;
    sequence = backup.timestamp;
    config = romeo;
    backup = copyDataProperties(config, sequence);
    kilo = function(argFoo) { // Original name: parse
        _fun63505: for(var _fun63505_ip = 0; ; ) switch(_fun63505_ip) {
 0:
            options = 0;
            golf = copyRestArgs(options);
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.RULES;
            zulu = entity.timestamp;
            mike = zulu.parse;
            entity = new Array(0);
            options = entity;
            oscar = 0;
            tango = arraySpread(options, golf, oscar);
            options = mike;
            golf = entity;
            oscar = zulu;
            zulu = apply(options, golf, oscar);
            mike = zulu.type;
            entity = 'text';
            if(!(entity !== mike)) { _fun63505_ip = 102; continue _fun63505 }
 88:
            entity = {};
            mike = zulu.formatted;
            entity['content'] = mike;
            _fun63505_ip = 116; continue _fun63505;
 102:
            mike = {};
            zulu = zulu.content;
            mike['content'] = zulu;
            entity = mike;
 116:
            return entity;
        }
    };
    backup = 'parse';
    romeo[backup] = kilo;
    yankee['timestamp'] = romeo;
    romeo = {};
    foxtrot = options[foxtrot];
    sequence = verify.bind(entity)(foxtrot);
    config = romeo;
    foxtrot = copyDataProperties(config, sequence);
    yankee['text'] = romeo;
    var _closure1_slot17 = yankee;
    foxtrot = new Array(2);
    foxtrot[0] = offset;
    foxtrot[1] = yankee;
    romeo = foxtrot.forEach;
    yankee = function(argFoo) {
        tango = argFoo;
        var _closure2_slot0 = tango;
        mike = global;
        zulu = mike.Object;
        mike = zulu.keys;
        zulu = mike.bind(zulu)(tango);
        mike = zulu.forEach;
        entity = function(argFoo, argBar) {
            mike = _closure2_slot0;
            entity = argFoo;
            mike = mike[entity];
            entity = argBar;
            mike['order'] = entity;
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    yankee = romeo.bind(foxtrot)(yankee);
    report = options[report];
    verify = verify.bind(entity)(report);
    report = verify.parserFor;
    report = report.bind(verify)(offset);
    var _closure1_slot18 = report;
    report = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
    var _closure1_slot19 = report;
    report = {};
    verify = function(argFoo, argBar) { // Original name: parse
        _fun63508: for(var _fun63508_ip = 0; ; ) switch(_fun63508_ip) {
 0:
            zulu = argFoo;
            oscar = arguments[2];
            var _closure2_slot0 = zulu;
            report = undefined;
            if(!(oscar === report)) { _fun63508_ip = 20; continue _fun63508 }
 18:
            oscar = undefined;
 20:
            var _closure2_slot1 = report;
            entity = null;
            if(!(entity == oscar)) { _fun63508_ip = 42; continue _fun63508 }
 30:
            entity = _closure1_slot23;
            oscar = entity.bind(report)(zulu);
 42:
            entity = {};
            zulu = argBar;
            entity['content'] = zulu;
            zulu = false;
            entity['tts'] = zulu;
            zulu = new Array(0);
            entity['invalidEmojis'] = zulu;
            zulu = new Array(0);
            entity['validNonShortcutEmojis'] = zulu;
            _closure2_slot1 = entity;
            tango = _closure1_slot22;
            zulu = entity.content;
            mike = function(argFoo, argBar) {
                _fun63509: for(var _fun63509_ip = 0; ; ) switch(_fun63509_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 24;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = zulu.bind(entity)(mike);
                    report = oscar.isEmojiPremiumLocked;
                    zulu = {};
                    zulu['emoji'] = tango;
                    options = _closure2_slot0;
                    zulu['channel'] = options;
                    golf = _closure1_slot15;
                    golf = golf.CHAT;
                    zulu['intention'] = golf;
                    zulu = report.bind(oscar)(zulu);
                    if(zulu) { _fun63509_ip = 103; continue _fun63509 }
 75:
                    zulu = argBar;
                    if(zulu) { _fun63509_ip = 123; continue _fun63509 }
 81:
                    zulu = _closure2_slot1;
                    report = zulu.validNonShortcutEmojis;
                    zulu = report.push;
                    zulu = zulu.bind(report)(tango);
                    _fun63509_ip = 123; continue _fun63509;
 103:
                    mike = _closure2_slot1;
                    zulu = mike.invalidEmojis;
                    mike = zulu.push;
                    mike = mike.bind(zulu)(tango);
 123:
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, oscar, mike);
            entity['content'] = mike;
            return entity;
        }
    };
    report['parse'] = verify;
    verify = function(argFoo, argBar) { // Original name: parsePreprocessor
        zulu = _closure1_slot23;
        tango = undefined;
        mike = argFoo;
        zulu = zulu.bind(tango)(mike);
        mike = _closure1_slot18;
        entity = argBar;
        entity = mike.bind(tango)(entity, zulu);
        return entity;
    };
    report['parsePreprocessor'] = verify;
    oscar = function(argFoo, argBar, argBaz) { // Original name: unparse
        _fun63511: for(var _fun63511_ip = 0; ; ) switch(_fun63511_ip) {
 0:
            mike = argBaz;
            report = _closure1_slot5;
            tango = report.getChannel;
            zulu = argBar;
            report = tango.bind(report)(zulu);
            zulu = null;
            tango = zulu != report;
            oscar = null;
            if(!tango) { _fun63511_ip = 44; continue _fun63511 }
 34:
            tango = report.getGuildId;
            oscar = tango.bind(report)();
 44:
            tango = zulu != oscar;
            zulu = null;
            if(!tango) { _fun63511_ip = 67; continue _fun63511 }
 53:
            report = _closure1_slot9;
            tango = report.getGuild;
            zulu = tango.bind(report)(oscar);
 67:
            if(mike) { _fun63511_ip = 120; continue _fun63511 }
 70:
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            tango = 22;
            report = report[tango];
            tango = undefined;
            golf = oscar.bind(tango)(report);
            oscar = golf.omit;
            report = _closure1_slot17;
            tango = ['spoiler', 'timestamp'];
            golf = oscar.bind(golf)(report, tango);
            _fun63511_ip = 124; continue _fun63511;
 120:
            golf = _closure1_slot17;
 124:
            if(mike) { _fun63511_ip = 157; continue _fun63511 }
 127:
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            tango = 17;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = tango.translateSurrogatesToInlineEmoji;
            _fun63511_ip = 161; continue _fun63511;
 157:
            report = _closure1_slot24;
 161:
            tango = {};
            oscar = true;
            tango['inline'] = oscar;
            tango['guild'] = zulu;
            tango['isNotification'] = mike;
            zulu = _closure1_slot21;
            oscar = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 13;
            entity = mike[entity];
            mike = undefined;
            oscar = oscar.bind(mike)(entity);
            entity = oscar.parserFor;
            oscar = entity.bind(oscar)(golf);
            entity = argFoo;
            entity = oscar.bind(mike)(entity, tango);
            entity = zulu.bind(mike)(entity, tango, report);
            return entity;
        }
    };
    report['unparse'] = oscar;
    oscar = 25;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/messages/MessageParser.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['parseAndRebuild'] = tango;
    zulu['createParserState'] = mike;
    return entity;
})();