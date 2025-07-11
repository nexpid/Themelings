// app/modules/messages/MessageParser.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar, argBaz) { // Original name: matchPrefix
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            report = argBar;
            tangon = argBaz;
            oscard = arguments[3];
            var _closure2_slot0 = michal;
            var _closure2_slot1 = report;
            zuuluu = undefined;
            if(!(oscard === zuuluu)) { _fun00002_ip = 30; continue _fun00001 }
 28:
            oscard = null;
 30:
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = zuuluu;
            zuuluu = 0;
            zuuluu = report[zuuluu];
            if(!(zuuluu === michal)) { _fun00002_ip = 142; continue _fun00001 }
 48:
            zuuluu = report.substr;
            michal = michal.length;
            michal = zuuluu.bind(report)(michal);
            _closure2_slot3 = michal;
            zuuluu = tangon.sortBy;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.text;
                entity = entity.length;
                entity = -entity;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                tangon = entity.text;
                michal = _closure2_slot1;
                entity = michal.toLowerCase;
                zuuluu = entity.bind(michal)();
                michal = zuuluu.indexOf;
                entity = tangon.toLowerCase;
                entity = entity.bind(tangon)();
                michal = michal.bind(zuuluu)(entity);
                entity = 1;
                entity = entity === michal;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.sortBy;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.text;
                    michal = _closure2_slot3;
                    entity = 1;
                    if(!(zuuluu === michal)) { _fun00004_ip = 24; continue _fun00003 }
 22:
                    entity = 0;
 24:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.id;
                tangon = entity.text;
                entity = _closure2_slot0;
                tangon = entity + tangon;
                entity = new Array(3);
                entity[0] = tangon;
                entity[1] = zuuluu;
                michal = _closure2_slot2;
                entity[2] = michal;
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.first;
            entity = entity.bind(michal)();
            return entity;
 142:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    kiloes = function(argFoo) { // Original name: matchAndReturnText
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        entity = {};
        tangon = zuuluu.order;
        entity['order'] = tangon;
        zuuluu = zuuluu.match;
        entity['match'] = zuuluu;
        michal = function(argFoo) { // Original name: parse
            entity = {};
            michal = _closure2_slot0;
            michal = michal.type;
            entity['type'] = michal;
            zuuluu = argFoo;
            michal = 0;
            michal = zuuluu[michal];
            entity['content'] = michal;
            return entity;
        };
        entity['parse'] = michal;
        return entity;
    };
    yankee = function(argFoo) { // Original name: matchRegexAndReturnText
        entity = {};
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 14;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.anyScopeRegex;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        entity['match'] = michal;
        michal = function(argFoo) { // Original name: parse
            entity = {};
            michal = 'text';
            entity['type'] = michal;
            zuuluu = argFoo;
            michal = 0;
            michal = zuuluu[michal];
            entity['content'] = michal;
            return entity;
        };
        entity['parse'] = michal;
        return entity;
    };
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: rebuild
        tangon = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = argBaz;
        var _closure2_slot1 = michal;
        michal = argCor;
        var _closure2_slot2 = michal;
        michal = '';
        var _closure2_slot3 = michal;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                backup = _closure2_slot0;
                foxtra = _closure2_slot2;
                romeon = null;
                if(!(romeon != foxtra)) { _fun00006_ip = 277; continue _fun00005 }
 23:
                tangon = entity.type;
                zuuluu = 'customEmoticon';
                if(!(zuuluu === tangon)) { _fun00006_ip = 54; continue _fun00005 }
 38:
                report = entity.emoji;
                tangon = undefined;
                zuuluu = false;
                zuuluu = foxtra.bind(tangon)(report, zuuluu);
 54:
                tangon = entity.type;
                zuuluu = 'emoticon';
                if(!(zuuluu !== tangon)) { _fun00006_ip = 83; continue _fun00005 }
 67:
                tangon = entity.type;
                zuuluu = 'text';
                if(!(zuuluu === tangon)) { _fun00006_ip = 277; continue _fun00005 }
 83:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                offset = 18;
                zuuluu = zuuluu[offset];
                verify = undefined;
                report = tangon.bind(verify)(zuuluu);
                tangon = report.translateSurrogatesToInlineEmoji;
                zuuluu = entity.content;
                option = tangon.bind(report)(zuuluu);
                tangon = _closure1_slot20;
                zuuluu = tangon.exec;
                zuuluu = zuuluu.bind(tangon)(option);
                oscard = 1;
                report = 2;
                tangon = '';
                if(!(romeon !== zuuluu)) { _fun00006_ip = 277; continue _fun00005 }
 156:
                kiloes = zuuluu[oscard];
                if(!(romeon != kiloes)) { _fun00006_ip = 172; continue _fun00005 }
 164:
                kiloes = zuuluu[oscard];
                if(!(tangon === kiloes)) { _fun00006_ip = 206; continue _fun00005 }
 172:
                sizing = _closure1_slot1;
                kiloes = _closure1_slot2;
                kiloes = kiloes[offset];
                output = sizing.bind(verify)(kiloes);
                sizing = output.getByName;
                kiloes = zuuluu[report];
                sizing = sizing.bind(output)(kiloes);
                _fun00006_ip = 238; continue _fun00005;
 206:
                kiloes = backup.emojiContext;
                sizing = undefined;
                if(!kiloes) { _fun00006_ip = 238; continue _fun00005 }
 217:
                result = backup.emojiContext;
                output = result.getById;
                kiloes = zuuluu[oscard];
                sizing = output.bind(result)(kiloes);
 238:
                if(!sizing) { _fun00006_ip = 258; continue _fun00005 }
 241:
                kiloes = entity.isShortcut;
                if(kiloes) { _fun00006_ip = 252; continue _fun00005 }
 250:
                kiloes = false;
 252:
                kiloes = foxtra.bind(verify)(sizing, kiloes);
 258:
                sizing = _closure1_slot20;
                kiloes = sizing.exec;
                zuuluu = kiloes.bind(sizing)(option);
                if(romeon !== zuuluu) { _fun00006_ip = 156; continue _fun00005 }
 277:
                zuuluu = entity.content;
                tangon = 'string';
                zuuluu = typeof zuuluu;
                if(!(tangon !== zuuluu)) { _fun00006_ip = 362; continue _fun00005 }
 293:
                zuuluu = entity.content;
                tangon = zuuluu.constructor;
                zuuluu = global;
                zuuluu = zuuluu.Array;
                if(!(tangon === zuuluu)) { _fun00006_ip = 462; continue _fun00005 }
 318:
                tangon = _closure2_slot3;
                verify = _closure1_slot22;
                ctrled = entity.content;
                source = _closure2_slot0;
                update = _closure2_slot1;
                echoed = _closure2_slot2;
                vacuum = undefined;
                zuuluu = vacuum[verify](ctrled, source, update, echoed, result);
                zuuluu = tangon + zuuluu;
                _closure2_slot3 = zuuluu;
                _fun00006_ip = 462; continue _fun00005;
 362:
                tangon = entity.type;
                zuuluu = 'codeBlock';
                if(!(zuuluu !== tangon)) { _fun00006_ip = 445; continue _fun00005 }
 375:
                zuuluu = 'inlineCode';
                if(!(zuuluu !== tangon)) { _fun00006_ip = 445; continue _fun00005 }
 383:
                zuuluu = 'mention';
                if(!(zuuluu !== tangon)) { _fun00006_ip = 445; continue _fun00005 }
 391:
                zuuluu = 'roleMention';
                if(!(zuuluu !== tangon)) { _fun00006_ip = 445; continue _fun00005 }
 399:
                zuuluu = 'channel';
                if(!(zuuluu !== tangon)) { _fun00006_ip = 445; continue _fun00005 }
 407:
                zuuluu = 'emoji';
                if(!(zuuluu !== tangon)) { _fun00006_ip = 445; continue _fun00005 }
 415:
                tangon = _closure2_slot3;
                oscard = _closure2_slot1;
                report = entity.content;
                zuuluu = undefined;
                zuuluu = oscard.bind(zuuluu)(report);
                zuuluu = tangon + zuuluu;
                _closure2_slot3 = zuuluu;
                _fun00006_ip = 462; continue _fun00005;
 445:
                zuuluu = _closure2_slot3;
                entity = entity.content;
                entity = zuuluu + entity;
                _closure2_slot3 = entity;
 462:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        entity = _closure2_slot3;
        return entity;
    };
    var _closure1_slot22 = entity;
    tangon = function(argFoo, argBar, argBaz) { // Original name: parseAndRebuild
        oscard = argBar;
        report = _closure1_slot22;
        zuuluu = _closure1_slot19;
        tangon = undefined;
        michal = argFoo;
        zuuluu = zuuluu.bind(tangon)(michal, oscard);
        michal = _closure1_slot1;
        golfie = _closure1_slot2;
        entity = 18;
        entity = golfie[entity];
        entity = michal.bind(tangon)(entity);
        verify = entity.translateInlineEmojiToSurrogates;
        option = argBaz;
        romeon = undefined;
        yankee = zuuluu;
        offset = oscard;
        entity = romeon[report](yankee, offset, verify, option, golfie);
        return entity;
    };
    var _closure1_slot23 = tangon;
    michal = function(argFoo) { // Original name: createParserState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            report = null;
            entity = report == tangon;
            oscard = undefined;
            zuuluu = undefined;
            if(entity) { _fun00008_ip = 28; continue _fun00007 }
 18:
            entity = tangon.getGuildId;
            zuuluu = entity.bind(tangon)();
 28:
            var _closure2_slot0 = zuuluu;
            entity = report != zuuluu;
            yankee = null;
            if(!entity) { _fun00008_ip = 58; continue _fun00007 }
 41:
            golfie = _closure1_slot10;
            entity = golfie.getGuild;
            yankee = entity.bind(golfie)(zuuluu);
 58:
            verify = _closure1_slot11;
            option = verify.can;
            golfie = _closure1_slot15;
            golfie = golfie.MENTION_EVERYONE;
            golfie = option.bind(verify)(golfie, tangon);
            var _closure2_slot1 = golfie;
            if(!(report != tangon)) { _fun00008_ip = 108; continue _fun00007 }
 95:
            golfie = tangon.isPrivate;
            golfie = golfie.bind(tangon)();
            if(golfie) { _fun00008_ip = 150; continue _fun00007 }
 108:
            if(!(report == zuuluu)) { _fun00008_ip = 118; continue _fun00007 }
 112:
            backup = new Array(0);
            _fun00008_ip = 148; continue _fun00007;
 118:
            option = _closure1_slot8;
            golfie = option.getMembers;
            verify = golfie.bind(option)(zuuluu);
            option = verify.map;
            golfie = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.userId;
                michal = entity.nick;
                entity = {};
                entity['userId'] = zuuluu;
                entity['nick'] = michal;
                return entity;
            };
            backup = option.bind(verify)(golfie);
 148:
            _fun00008_ip = 171; continue _fun00007;
 150:
            option = tangon.recipients;
            golfie = option.map;
            tangon = function(argFoo) {
                entity = {};
                michal = argFoo;
                entity['userId'] = michal;
                michal = null;
                entity['nick'] = michal;
                return entity;
            };
            backup = golfie.bind(option)(tangon);
 171:
            verify = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 23;
            golfie = option[tangon];
            offset = verify.bind(oscard)(golfie);
            foxtra = backup.reduce;
            romeon = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    michal = argBar;
                    report = michal.userId;
                    zuuluu = _closure1_slot14;
                    michal = zuuluu.getUser;
                    tangon = michal.bind(zuuluu)(report);
                    michal = null;
                    if(!(michal != tangon)) { _fun00010_ip = 60; continue _fun00009 }
 35:
                    zuuluu = entity.push;
                    michal = {};
                    michal['id'] = report;
                    tangon = tangon.tag;
                    michal['text'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
 60:
                    return entity;
                }
            };
            golfie = new Array(0);
            golfie = foxtra.bind(backup)(romeon, golfie);
            golfie = offset.bind(oscard)(golfie);
            option = option[tangon];
            verify = verify.bind(oscard)(option);
            if(!(report == yankee)) { _fun00008_ip = 234; continue _fun00007 }
 230:
            option = {};
            _fun00008_ip = 254; continue _fun00007;
 234:
            foxtra = _closure1_slot9;
            romeon = foxtra.getRoles;
            offset = yankee.id;
            option = romeon.bind(foxtra)(offset);
 254:
            verify = verify.bind(oscard)(option);
            option = verify.values;
            offset = option.bind(verify)();
            verify = offset.filter;
            option = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    michal = entity.mentionable;
                    entity = _closure2_slot1;
                    if(entity) { _fun00012_ip = 22; continue _fun00011 }
 19:
                    entity = michal;
 22:
                    return entity;
                }
            };
            offset = verify.bind(offset)(option);
            verify = offset.map;
            option = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.id;
                michal = entity.name;
                entity = {};
                entity['id'] = zuuluu;
                entity['text'] = michal;
                return entity;
            };
            romeon = verify.bind(offset)(option);
            verify = _closure1_slot1;
            option = _closure1_slot2;
            option = option[tangon];
            verify = verify.bind(oscard)(option);
            offset = _closure1_slot6;
            option = offset.getTextChannelNameDisambiguations;
            option = option.bind(offset)(zuuluu);
            offset = verify.bind(oscard)(option);
            verify = offset.map;
            option = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.id;
                michal = entity.name;
                entity = {};
                entity['id'] = zuuluu;
                entity['text'] = michal;
                return entity;
            };
            offset = verify.bind(offset)(option);
            if(!(report == zuuluu)) { _fun00008_ip = 360; continue _fun00007 }
 354:
            option = new Array(0);
            _fun00008_ip = 444; continue _fun00007;
 360:
            report = _closure1_slot1;
            foxtra = _closure1_slot2;
            tangon = foxtra[tangon];
            report = report.bind(oscard)(tangon);
            verify = _closure1_slot0;
            tangon = 24;
            tangon = foxtra[tangon];
            tangon = verify.bind(oscard)(tangon);
            tangon = tangon.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            oscard = report.bind(oscard)(tangon);
            report = oscard.filter;
            tangon = function(argFoo) {
                michal = _closure1_slot7;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            oscard = report.bind(oscard)(tangon);
            report = oscard.flatMap;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannels;
                entity = _closure2_slot0;
                michal = michal.bind(zuuluu)(entity);
                entity = argFoo;
                zuuluu = michal[entity];
                michal = zuuluu.map;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    zuuluu = michal.channel;
                    zuuluu = zuuluu.id;
                    entity['id'] = zuuluu;
                    michal = michal.channel;
                    michal = michal.name;
                    entity['text'] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = report.bind(oscard)(tangon);
            tangon = report.value;
            option = tangon.bind(report)();
 444:
            report = _closure1_slot4;
            tangon = report.computeAllActiveJoinedThreads;
            report = tangon.bind(report)(zuuluu);
            tangon = report.map;
            michal = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.id;
                entity['id'] = zuuluu;
                michal = michal.name;
                entity['text'] = michal;
                return entity;
            };
            verify = tangon.bind(report)(michal);
            michal = _closure1_slot3;
            entity = michal.getDisambiguatedEmojiContext;
            oscard = entity.bind(michal)(zuuluu);
            entity = oscard.getEscapedCustomEmoticonNames;
            zuuluu = entity.bind(oscard)();
            entity = oscard.getCustomEmoji;
            tangon = entity.bind(oscard)();
            entity = oscard.getCustomEmoticonRegex;
            report = entity.bind(oscard)();
            entity = {};
            michal = true;
            entity['inline'] = michal;
            entity['mentionableRoles'] = romeon;
            entity['guild'] = yankee;
            entity['users'] = golfie;
            golfie = offset.concat;
            option = golfie.bind(offset)(option);
            golfie = option.concat;
            golfie = golfie.bind(option)(verify);
            entity['channels'] = golfie;
            entity['emojiContext'] = oscard;
            entity['customEmoticonsRegex'] = report;
            entity['customEmoji'] = tangon;
            entity['textExclusions'] = zuuluu;
            entity['disableErrorGuards'] = michal;
            return entity;
        }
    };
    var _closure1_slot24 = michal;
    entity = function(argFoo) { // Original name: NOOP
        entity = argFoo;
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = global;
    romeon = entity.Object;
    offset = romeon.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeon)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    offset = option[report];
    offset = verify.bind(entity)(offset);
    var _closure1_slot6 = offset;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot7 = report;
    report = 4;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 8;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 9;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 10;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot14 = report;
    report = 11;
    report = option[report];
    report = golfie.bind(entity)(report);
    result = report.MARKDOWN_SPOILER_REGEXP;
    output = report.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
    report = report.Permissions;
    var _closure1_slot15 = report;
    report = 12;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.EmojiIntention;
    var _closure1_slot16 = report;
    ctrled = /^<@!?(\d+)>/;
    source = /^<@&(\d+)>/;
    update = /^<#(\d+)>/;
    echoed = /^<a?:(\w+):(\d+)>/;
    report = /(@everyone|@here|@Clyde)\b/;
    var _closure1_slot17 = report;
    offset = {};
    report = 14;
    romeon = option[report];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.defaultRules;
    romeon = romeon.link;
    romeon = kiloes.bind(entity)(romeon);
    offset['link'] = romeon;
    romeon = option[report];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.defaultRules;
    romeon = romeon.autolink;
    romeon = kiloes.bind(entity)(romeon);
    offset['autolink'] = romeon;
    romeon = option[report];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.defaultRules;
    romeon = romeon.url;
    romeon = kiloes.bind(entity)(romeon);
    offset['url'] = romeon;
    backup = 15;
    romeon = option[backup];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.RULES;
    romeon = romeon.inlineCode;
    romeon = kiloes.bind(entity)(romeon);
    offset['inlineCode'] = romeon;
    romeon = option[backup];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.RULES;
    romeon = romeon.codeBlock;
    romeon = kiloes.bind(entity)(romeon);
    offset['codeBlock'] = romeon;
    romeon = yankee.bind(entity)(ctrled);
    offset['rawUserMention'] = romeon;
    romeon = yankee.bind(entity)(source);
    offset['rawRoleMention'] = romeon;
    romeon = yankee.bind(entity)(update);
    offset['rawChannelMention'] = romeon;
    yankee = yankee.bind(entity)(echoed);
    offset['rawEmoji'] = yankee;
    yankee = {};
    romeon = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            golfie = argFoo;
            zuuluu = argBar;
            verify = argBaz;
            michal = verify.split;
            entity = ' ';
            michal = michal.bind(verify)(entity);
            entity = michal.pop;
            entity = entity.bind(michal)();
            tangon = entity + golfie;
            michal = /^[^ ]+@[^ ]+\.[^ .]+/;
            entity = michal.test;
            entity = entity.bind(michal)(tangon);
            if(entity) { _fun00014_ip = 318; continue _fun00013 }
 67:
            michal = _closure1_slot21;
            backup = zuuluu.users;
            option = undefined;
            offset = '@';
            oscard = 'mention';
            output = undefined;
            sizing = offset;
            kiloes = golfie;
            foxtra = oscard;
            entity = output[michal](sizing, kiloes, backup, foxtra, romeon);
            if(entity) { _fun00014_ip = 316; continue _fun00013 }
 111:
            yankee = _closure1_slot21;
            backup = zuuluu.mentionableRoles;
            foxtra = 'roleMention';
            output = undefined;
            sizing = offset;
            kiloes = golfie;
            michal = output[yankee](sizing, kiloes, backup, foxtra, romeon);
            if(michal) { _fun00014_ip = 314; continue _fun00013 }
 143:
            tangon = _closure1_slot21;
            romeon = zuuluu.users;
            yankee = romeon.map;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = {};
                oscard = entity;
                report = michal;
                zuuluu = copyDataProperties(oscard, report);
                tangon = michal.text;
                zuuluu = tangon.split;
                michal = '#';
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 0;
                zuuluu = zuuluu[michal];
                michal = 'text';
                entity[michal] = zuuluu;
                return entity;
            };
            backup = yankee.bind(romeon)(zuuluu);
            output = undefined;
            sizing = offset;
            kiloes = golfie;
            foxtra = oscard;
            tangon = output[tangon](sizing, kiloes, backup, foxtra, romeon);
            zuuluu = null;
            if(tangon) { _fun00014_ip = 192; continue _fun00013 }
 190:
            return zuuluu;
 192:
            offset = _closure1_slot17;
            oscard = offset.exec;
            yankee = oscard.bind(offset)(golfie);
            if(!(zuuluu != yankee)) { _fun00014_ip = 235; continue _fun00013 }
 211:
            oscard = 0;
            offset = tangon[oscard];
            offset = offset.length;
            oscard = yankee[oscard];
            oscard = oscard.length;
            if(!(!(offset <= oscard))) { _fun00014_ip = 312; continue _fun00013 }
 235:
            oscard = '';
            if(!(oscard === verify)) { _fun00014_ip = 308; continue _fun00013 }
 243:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 16;
            report = verify[report];
            report = oscard.bind(option)(report);
            oscard = report.SILENT_RE;
            report = oscard.exec;
            golfie = report.bind(oscard)(golfie);
            if(!(zuuluu != golfie)) { _fun00014_ip = 308; continue _fun00013 }
 284:
            report = 0;
            oscard = tangon[report];
            oscard = oscard.length;
            report = golfie[report];
            report = report.length;
            if(!(!(oscard <= report))) { _fun00014_ip = 310; continue _fun00013 }
 308:
            return tangon;
 310:
            return zuuluu;
 312:
            return zuuluu;
 314:
            return michal;
 316:
            return entity;
 318:
            entity = null;
            return entity;
        }
    };
    yankee['match'] = romeon;
    romeon = function(argFoo) { // Original name: parse
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            option = argFoo;
            michal = option[Symbol.iterator];
            option = michal().next;
            offset = undefined;
            zuuluu = undefined;
            tangon = undefined;
            verify = option().value;
            yankee = michal;
            yankee = yankee === offset;
            zuuluu = yankee;
            if(yankee) { _fun00016_ip = 32; continue _fun00015 }
 29:
            tangon = verify;
 32:
            tangon = undefined;
            verify = zuuluu;
            if(verify) { _fun00016_ip = 60; continue _fun00015 }
 40:
            verify = option().value;
            yankee = michal;
            yankee = yankee === offset;
            zuuluu = yankee;
            if(yankee) { _fun00016_ip = 60; continue _fun00015 }
 57:
            tangon = verify;
 60:
            report = tangon;
            tangon = undefined;
            verify = zuuluu;
            if(verify) { _fun00016_ip = 91; continue _fun00015 }
 71:
            option = option().value;
            verify = michal;
            verify = verify === offset;
            zuuluu = verify;
            if(verify) { _fun00016_ip = 91; continue _fun00015 }
 88:
            tangon = option;
 91:
            golfie = tangon;
            tangon = zuuluu;
            if(tangon) { _fun00016_ip = 103; continue _fun00015 }
 100:
            michal.return();
 103:
            oscard = '@';
            option = golfie;
            tangon = 'roleMention';
            if(!(tangon === option)) { _fun00016_ip = 129; continue _fun00015 }
 118:
            option = oscard;
            tangon = '&';
            oscard = option + tangon;
 129:
            tangon = {};
            tangon['type'] = golfie;
            verify = oscard;
            option = report;
            report = global;
            report = report.HermesInternal;
            golfie = report.concat;
            oscard = '<';
            report = '>';
            report = golfie.bind(oscard)(verify, option, report);
            tangon['content'] = report;
            return tangon;
 175:
            CatchBlockStart(arg_register=0);
            if(zuuluu) { _fun00016_ip = 183; continue _fun00015 }
 180:
            michal.return();
 183:
            throw entity;
        }
    };
    yankee['parse'] = romeon;
    offset['mention'] = yankee;
    yankee = {};
    romeon = function(argFoo, argBar) { // Original name: match
        entity = argBar;
        report = entity.channels;
        tangon = function(argFoo, argBar, argBaz) { // Original name: matchChannelPrefix
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                oscard = argBar;
                report = argBaz;
                tangon = undefined;
                zuuluu = undefined;
                if(!(zuuluu === zuuluu)) { _fun00018_ip = 18; continue _fun00017 }
 16:
                zuuluu = null;
 18:
                var _closure3_slot0 = zuuluu;
                var _closure3_slot1 = tangon;
                var _closure3_slot2 = tangon;
                verify = 0;
                golfie = oscard[verify];
                michal = '#';
                if(!(golfie === michal)) { _fun00018_ip = 287; continue _fun00017 }
 47:
                golfie = 1;
                option = oscard[golfie];
                backup = '"';
                if(!(backup === option)) { _fun00018_ip = 260; continue _fun00017 }
 65:
                option = oscard.length;
                yankee = 2;
                option = yankee < option;
                foxtra = '\\';
                romeon = yankee;
                offset = romeon;
                if(!option) { _fun00018_ip = 132; continue _fun00017 }
 90:
                option = oscard[romeon];
                if(!(foxtra === option)) { _fun00018_ip = 103; continue _fun00017 }
 98:
                option = romeon + 1;
                _fun00018_ip = 117; continue _fun00017;
 103:
                kiloes = oscard[romeon];
                option = romeon;
                offset = option;
                if(!(backup !== kiloes)) { _fun00018_ip = 132; continue _fun00017 }
 117:
                romeon = option + 1;
                option = oscard.length;
                offset = romeon;
                if(offset < option) { _fun00018_ip = 90; continue _fun00017 }
 132:
                option = oscard.substring;
                golfie = offset + golfie;
                golfie = option.bind(oscard)(verify, golfie);
                _closure3_slot1 = golfie;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                golfie = 13;
                golfie = verify[golfie];
                verify = option.bind(tangon)(golfie);
                option = verify.unescapeChannelName;
                golfie = oscard.substring;
                golfie = golfie.bind(oscard)(yankee, offset);
                golfie = option.bind(verify)(golfie);
                _closure3_slot2 = golfie;
                option = report.sortBy;
                golfie = function(argFoo) {
                    entity = argFoo;
                    entity = entity.text;
                    entity = entity.length;
                    entity = -entity;
                    return entity;
                };
                verify = option.bind(report)(golfie);
                option = verify.filter;
                golfie = function(argFoo) {
                    entity = argFoo;
                    michal = entity.text;
                    entity = _closure3_slot2;
                    entity = entity === michal;
                    return entity;
                };
                option = option.bind(verify)(golfie);
                golfie = option.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.id;
                    tangon = _closure3_slot1;
                    entity = new Array(3);
                    entity[0] = tangon;
                    entity[1] = zuuluu;
                    michal = _closure3_slot0;
                    entity[2] = michal;
                    return entity;
                };
                golfie = golfie.bind(option)(entity);
                entity = golfie.first;
                entity = entity.bind(golfie)();
                return entity;
 260:
                entity = _closure1_slot21;
                update = undefined;
                echoed = michal;
                result = oscard;
                output = report;
                sizing = zuuluu;
                entity = update[entity](echoed, result, output, sizing, kiloes);
                return entity;
 287:
                entity = null;
                return entity;
            }
        };
        zuuluu = undefined;
        michal = '#';
        entity = argFoo;
        entity = tangon.bind(zuuluu)(michal, entity, report);
        return entity;
    };
    yankee['match'] = romeon;
    romeon = function(argFoo) { // Original name: parse
        entity = {};
        michal = 'text';
        entity['type'] = michal;
        zuuluu = argFoo;
        michal = 1;
        report = zuuluu[michal];
        michal = global;
        michal = michal.HermesInternal;
        tangon = michal.concat;
        zuuluu = '<#';
        michal = '>';
        michal = tangon.bind(zuuluu)(report, michal);
        entity['content'] = michal;
        return entity;
    };
    yankee['parse'] = romeon;
    offset['channel'] = yankee;
    yankee = {};
    romeon = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = argFoo;
            golfie = argBaz;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 17;
            michal = report[michal];
            report = undefined;
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.ConvertEmoticons;
            michal = zuuluu.getSetting;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00020_ip = 54; continue _fun00019 }
 50:
            michal = null;
            return michal;
 54:
            michal = golfie.length;
            zuuluu = 0;
            if(!(zuuluu !== michal)) { _fun00020_ip = 96; continue _fun00019 }
 65:
            oscard = /\s$/;
            michal = oscard.test;
            michal = michal.bind(oscard)(golfie);
            if(michal) { _fun00020_ip = 96; continue _fun00019 }
 92:
            michal = null;
            return michal;
 96:
            michal = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 18;
            entity = oscard[entity];
            entity = michal.bind(report)(entity);
            michal = entity.EMOJI_SHORTCUT_RE;
            entity = michal.exec;
            michal = entity.bind(michal)(tangon);
            report = null;
            oscard = report == michal;
            entity = null;
            if(oscard) { _fun00020_ip = 209; continue _fun00019 }
 144:
            oscard = michal[zuuluu];
            golfie = oscard.length;
            oscard = tangon.length;
            if(!(golfie !== oscard)) { _fun00020_ip = 206; continue _fun00019 }
 162:
            oscard = michal[zuuluu];
            oscard = oscard.length;
            golfie = tangon[oscard];
            oscard = ' ';
            if(!(oscard !== golfie)) { _fun00020_ip = 206; continue _fun00019 }
 183:
            zuuluu = michal[zuuluu];
            zuuluu = zuuluu.length;
            tangon = tangon[zuuluu];
            zuuluu = '\n';
            entity = null;
            if(!(zuuluu === tangon)) { _fun00020_ip = 209; continue _fun00019 }
 206:
            entity = michal;
 209:
            return entity;
        }
    };
    yankee['match'] = romeon;
    romeon = function(argFoo) { // Original name: parse
        entity = {'type': 'emoticon', 'content': null, 'isShortcut': true};
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 18;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.convertShortcutToName;
        report = argFoo;
        michal = 1;
        michal = report[michal];
        michal = zuuluu.bind(tangon)(michal);
        entity['content'] = michal;
        return entity;
    };
    yankee['parse'] = romeon;
    offset['emoticon'] = yankee;
    yankee = {};
    romeon = option[backup];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.RULES;
    romeon = romeon.emoji;
    romeon = romeon.order;
    yankee['order'] = romeon;
    romeon = function(argFoo) { // Original name: match
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.EMOJI_NAME_RE;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    yankee['match'] = romeon;
    romeon = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            entity = tangon[Symbol.iterator];
            tangon = entity().next;
            report = tangon().value;
            michal = entity;
            golfie = undefined;
            zuuluu = michal === golfie;
            michal = undefined;
            if(zuuluu) { _fun00022_ip = 27; continue _fun00021 }
 24:
            michal = report;
 27:
            oscard = undefined;
            if(zuuluu) { _fun00022_ip = 57; continue _fun00021 }
 32:
            report = tangon().value;
            tangon = entity;
            tangon = tangon === golfie;
            oscard = undefined;
            zuuluu = tangon;
            if(tangon) { _fun00022_ip = 57; continue _fun00021 }
 51:
            oscard = report;
            zuuluu = tangon;
 57:
            if(zuuluu) { _fun00022_ip = 63; continue _fun00021 }
 60:
            entity.return();
 63:
            entity = argBaz;
            entity = entity.customEmoji;
            tangon = global;
            zuuluu = tangon.Object;
            zuuluu = zuuluu.prototype;
            report = zuuluu.hasOwnProperty;
            zuuluu = report.call;
            golfie = zuuluu.bind(report)(entity, oscard);
            report = null;
            zuuluu = null;
            if(!golfie) { _fun00022_ip = 113; continue _fun00021 }
 109:
            zuuluu = entity[oscard];
 113:
            if(!(report == zuuluu)) { _fun00022_ip = 133; continue _fun00021 }
 117:
            entity = {};
            oscard = 'text';
            entity['type'] = oscard;
            entity['content'] = michal;
            _fun00022_ip = 236; continue _fun00021;
 133:
            michal = {};
            oscard = 'customEmoticon';
            michal['type'] = oscard;
            golfie = zuuluu.animated;
            offset = '';
            oscard = true;
            if(!(oscard === golfie)) { _fun00022_ip = 165; continue _fun00021 }
 161:
            offset = 'a';
 165:
            verify = zuuluu.originalName;
            if(!(report == verify)) { _fun00022_ip = 180; continue _fun00021 }
 175:
            verify = zuuluu.name;
 180:
            romeon = zuuluu.id;
            tangon = tangon.HermesInternal;
            golfie = tangon.concat;
            output = '<';
            report = ':';
            yankee = '>';
            sizing = offset;
            kiloes = report;
            backup = verify;
            foxtra = report;
            tangon = output[golfie](sizing, kiloes, backup, foxtra, romeon, yankee, offset);
            michal['content'] = tangon;
            michal['emoji'] = zuuluu;
            entity = michal;
 236:
            return entity;
        }
    };
    yankee['parse'] = romeon;
    offset['emoji'] = yankee;
    yankee = {};
    romeon = function(argFoo, argBar) { // Original name: match
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argBar;
            report = entity.customEmoticonsRegex;
            entity = null;
            zuuluu = entity == report;
            michal = undefined;
            if(zuuluu) { _fun00024_ip = 34; continue _fun00023 }
 20:
            tangon = report.exec;
            zuuluu = argFoo;
            michal = tangon.bind(report)(zuuluu);
 34:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00024_ip = 46; continue _fun00023 }
 43:
            entity = michal;
 46:
            return entity;
        }
    };
    yankee['match'] = romeon;
    romeon = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            entity = report[Symbol.iterator];
            report = entity().next;
            tangon = report().value;
            michal = entity;
            golfie = undefined;
            zuuluu = michal === golfie;
            michal = undefined;
            if(zuuluu) { _fun00026_ip = 27; continue _fun00025 }
 24:
            michal = tangon;
 27:
            tangon = undefined;
            if(zuuluu) { _fun00026_ip = 57; continue _fun00025 }
 32:
            oscard = report().value;
            report = entity;
            report = report === golfie;
            tangon = undefined;
            zuuluu = report;
            if(report) { _fun00026_ip = 57; continue _fun00025 }
 51:
            tangon = oscard;
            zuuluu = report;
 57:
            if(zuuluu) { _fun00026_ip = 63; continue _fun00025 }
 60:
            entity.return();
 63:
            entity = argBaz;
            zuuluu = entity.emojiContext;
            entity = zuuluu.getEmoticonByName;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = null;
            if(!(entity == zuuluu)) { _fun00026_ip = 107; continue _fun00025 }
 91:
            entity = {};
            tangon = 'text';
            entity['type'] = tangon;
            entity['content'] = michal;
            _fun00026_ip = 199; continue _fun00025;
 107:
            michal = {};
            tangon = 'customEmoticon';
            michal['type'] = tangon;
            report = zuuluu.animated;
            offset = '';
            tangon = true;
            if(!(tangon === report)) { _fun00026_ip = 139; continue _fun00025 }
 135:
            offset = 'a';
 139:
            backup = zuuluu.name;
            romeon = zuuluu.id;
            tangon = global;
            tangon = tangon.HermesInternal;
            golfie = tangon.concat;
            output = '<';
            report = ':';
            yankee = '>';
            sizing = offset;
            kiloes = report;
            foxtra = report;
            tangon = output[golfie](sizing, kiloes, backup, foxtra, romeon, yankee, offset);
            michal['content'] = tangon;
            michal['emoji'] = zuuluu;
            entity = michal;
 199:
            return entity;
        }
    };
    yankee['parse'] = romeon;
    offset['customEmoticons'] = yankee;
    yankee = {};
    foxtra = 19;
    romeon = option[foxtra];
    sequen = verify.bind(entity)(romeon);
    config = yankee;
    romeon = copyDataProperties(config, sequen);
    sizing = function(argFoo, argBar) { // Original name: match
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            michal = argBar;
            entity = michal.textExclusions;
            zuuluu = 'string';
            entity = typeof entity;
            if(!(zuuluu === entity)) { _fun00028_ip = 37; continue _fun00027 }
 23:
            zuuluu = michal.textExclusions;
            entity = '';
            if(!(entity === zuuluu)) { _fun00028_ip = 113; continue _fun00027 }
 37:
            report = _closure1_slot1;
            entity = _closure1_slot2;
            golfie = 19;
            entity = entity[golfie];
            oscard = undefined;
            entity = report.bind(oscard)(entity);
            report = entity.match;
            entity = null;
            report = entity != report;
            if(!report) { _fun00028_ip = 111; continue _fun00027 }
 77:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            oscard = report.bind(oscard)(zuuluu);
            report = oscard.match;
            zuuluu = '';
            entity = report.bind(oscard)(tangon, michal, zuuluu);
 111:
            _fun00028_ip = 166; continue _fun00027;
 113:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 19;
            report = report[zuuluu];
            zuuluu = undefined;
            report = oscard.bind(zuuluu)(report);
            zuuluu = report.textMarkupPatternWithExclusions;
            michal = michal.textExclusions;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.exec;
            entity = michal.bind(zuuluu)(tangon);
 166:
            return entity;
        }
    };
    romeon = 'match';
    yankee[romeon] = sizing;
    offset['text'] = yankee;
    yankee = {};
    romeon = option[backup];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.RULES;
    romeon = romeon.inlineCode;
    romeon = kiloes.bind(entity)(romeon);
    yankee['inlineCode'] = romeon;
    romeon = option[backup];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.RULES;
    romeon = romeon.codeBlock;
    romeon = kiloes.bind(entity)(romeon);
    yankee['codeBlock'] = romeon;
    romeon = {};
    kiloes = option[report];
    sizing = verify.bind(entity)(kiloes);
    kiloes = sizing.anyScopeRegex;
    kiloes = kiloes.bind(sizing)(ctrled);
    romeon['match'] = kiloes;
    kiloes = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            zuuluu = argFoo;
            entity = argBaz;
            verify = entity.isNotification;
            tangon = entity.guild;
            golfie = undefined;
            var _closure2_slot0 = golfie;
            oscard = _closure1_slot14;
            report = oscard.getUser;
            michal = 1;
            michal = zuuluu[michal];
            oscard = report.bind(oscard)(michal);
            michal = null;
            if(!(michal != oscard)) { _fun00030_ip = 465; continue _fun00029 }
 59:
            yankee = _closure1_slot1;
            report = _closure1_slot2;
            option = 20;
            report = report[option];
            romeon = yankee.bind(golfie)(report);
            yankee = romeon.getUserTag;
            report = {};
            kiloes = 'always';
            foxtra = kiloes;
            if(!verify) { _fun00030_ip = 118; continue _fun00029 }
 97:
            backup = _closure1_slot13;
            backup = backup.enabled;
            foxtra = kiloes;
            if(!backup) { _fun00030_ip = 118; continue _fun00029 }
 112:
            foxtra = 'never';
 118:
            report['identifiable'] = foxtra;
            report = yankee.bind(romeon)(oscard, report);
            _closure2_slot0 = report;
            if(verify) { _fun00030_ip = 379; continue _fun00029 }
 139:
            verify = oscard.bot;
            if(verify) { _fun00030_ip = 349; continue _fun00029 }
 151:
            yankee = michal == tangon;
            verify = undefined;
            if(yankee) { _fun00030_ip = 165; continue _fun00029 }
 160:
            verify = tangon.id;
 165:
            verify = michal != verify;
            foxtra = '';
            yankee = foxtra;
            if(!verify) { _fun00030_ip = 318; continue _fun00029 }
 182:
            romeon = _closure1_slot9;
            verify = romeon.getRoles;
            tangon = tangon.id;
            kiloes = verify.bind(romeon)(tangon);
            verify = michal != kiloes;
            tangon = foxtra;
            if(!verify) { _fun00030_ip = 315; continue _fun00029 }
 212:
            verify = global;
            backup = verify.Object;
            romeon = backup.values;
            backup = romeon.bind(backup)(kiloes);
            romeon = backup.some;
            offset = function(argFoo) {
                michal = _closure2_slot0;
                entity = michal.toLowerCase;
                zuuluu = entity.bind(michal)();
                michal = zuuluu.startsWith;
                entity = argFoo;
                tangon = entity.name;
                entity = tangon.toLowerCase;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = romeon.bind(backup)(offset);
            tangon = foxtra;
            if(!offset) { _fun00030_ip = 315; continue _fun00029 }
 252:
            romeon = oscard.discriminator;
            offset = verify.HermesInternal;
            offset = offset.concat;
            backup = offset.bind(foxtra)(romeon);
            foxtra = backup.padStart;
            romeon = 4;
            offset = '0';
            romeon = foxtra.bind(backup)(romeon, offset);
            verify = verify.HermesInternal;
            offset = verify.concat;
            verify = '#';
            tangon = offset.bind(verify)(romeon);
 315:
            yankee = tangon;
 318:
            tangon = {};
            verify = global;
            verify = verify.HermesInternal;
            offset = verify.concat;
            verify = '@';
            verify = offset.bind(verify)(report, yankee);
            tangon['content'] = verify;
            return tangon;
 349:
            tangon = {};
            verify = global;
            verify = verify.HermesInternal;
            offset = verify.concat;
            verify = '@';
            verify = offset.bind(verify)(report);
            tangon['content'] = verify;
            return tangon;
 379:
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[option];
            tangon = tangon.bind(golfie)(entity);
            entity = tangon.getGlobalName;
            oscard = entity.bind(tangon)(oscard);
            entity = {};
            if(!(michal == oscard)) { _fun00030_ip = 437; continue _fun00029 }
 413:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = '@';
            michal = tangon.bind(michal)(report);
            _fun00030_ip = 459; continue _fun00029;
 437:
            tangon = global;
            tangon = tangon.HermesInternal;
            report = tangon.concat;
            tangon = '@';
            michal = report.bind(tangon)(oscard);
 459:
            entity['content'] = michal;
            return entity;
 465:
            entity = {};
            michal = 0;
            michal = zuuluu[michal];
            entity['content'] = michal;
            return entity;
        }
    };
    romeon['parse'] = kiloes;
    yankee['mention'] = romeon;
    romeon = {};
    kiloes = option[report];
    sizing = verify.bind(entity)(kiloes);
    kiloes = sizing.anyScopeRegex;
    kiloes = kiloes.bind(sizing)(source);
    romeon['match'] = kiloes;
    kiloes = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tangon = argFoo;
            entity = argBaz;
            michal = entity.guild;
            entity = null;
            if(!(entity != michal)) { _fun00032_ip = 55; continue _fun00031 }
 17:
            report = _closure1_slot9;
            zuuluu = report.getRoles;
            michal = michal.id;
            zuuluu = zuuluu.bind(report)(michal);
            michal = 1;
            michal = tangon[michal];
            michal = zuuluu[michal];
            if(!(entity == michal)) { _fun00032_ip = 69; continue _fun00031 }
 55:
            entity = {};
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            entity['content'] = zuuluu;
            return entity;
 69:
            entity = {};
            tangon = michal.name;
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = '@';
            michal = zuuluu.bind(michal)(tangon);
            entity['content'] = michal;
            return entity;
        }
    };
    romeon['parse'] = kiloes;
    yankee['roleMention'] = romeon;
    romeon = {};
    kiloes = option[report];
    sizing = verify.bind(entity)(kiloes);
    kiloes = sizing.anyScopeRegex;
    kiloes = kiloes.bind(sizing)(update);
    romeon['match'] = kiloes;
    kiloes = function(argFoo) { // Original name: parse
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot5;
            zuuluu = report.getChannel;
            entity = 1;
            entity = tangon[entity];
            option = zuuluu.bind(report)(entity);
            entity = {};
            zuuluu = null;
            if(!(zuuluu != option)) { _fun00034_ip = 87; continue _fun00033 }
 35:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 13;
            report = report[zuuluu];
            zuuluu = undefined;
            golfie = oscard.bind(zuuluu)(report);
            oscard = golfie.computeChannelName;
            romeon = _closure1_slot14;
            yankee = _closure1_slot12;
            backup = golfie;
            foxtra = option;
            offset = true;
            verify = true;
            michal = backup[oscard](foxtra, romeon, yankee, offset, verify, option);
            _fun00034_ip = 93; continue _fun00033;
 87:
            zuuluu = 0;
            michal = tangon[zuuluu];
 93:
            entity['content'] = michal;
            return entity;
        }
    };
    romeon['parse'] = kiloes;
    yankee['channel'] = romeon;
    romeon = {};
    kiloes = option[report];
    sizing = verify.bind(entity)(kiloes);
    kiloes = sizing.anyScopeRegex;
    kiloes = kiloes.bind(sizing)(echoed);
    romeon['match'] = kiloes;
    kiloes = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu[Symbol.iterator];
            zuuluu = entity().next;
            michal = zuuluu().value;
            michal = entity;
            golfie = undefined;
            michal = michal === golfie;
            tangon = undefined;
            if(michal) { _fun00036_ip = 49; continue _fun00035 }
 24:
            oscard = zuuluu().value;
            report = entity;
            report = report === golfie;
            tangon = undefined;
            michal = report;
            if(report) { _fun00036_ip = 49; continue _fun00035 }
 43:
            tangon = oscard;
            michal = report;
 49:
            report = undefined;
            if(michal) { _fun00036_ip = 79; continue _fun00035 }
 54:
            oscard = zuuluu().value;
            zuuluu = entity;
            zuuluu = zuuluu === golfie;
            report = undefined;
            michal = zuuluu;
            if(zuuluu) { _fun00036_ip = 79; continue _fun00035 }
 73:
            report = oscard;
            michal = zuuluu;
 79:
            if(michal) { _fun00036_ip = 85; continue _fun00035 }
 82:
            entity.return();
 85:
            entity = argBaz;
            golfie = entity.guild;
            oscard = _closure1_slot3;
            michal = oscard.getDisambiguatedEmojiContext;
            zuuluu = null;
            entity = null;
            if(!golfie) { _fun00036_ip = 118; continue _fun00035 }
 113:
            entity = golfie.id;
 118:
            michal = michal.bind(oscard)(entity);
            entity = michal.getById;
            michal = entity.bind(michal)(report);
            entity = {};
            if(!(zuuluu != michal)) { _fun00036_ip = 145; continue _fun00035 }
 140:
            tangon = michal.name;
 145:
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = ':';
            michal = zuuluu.bind(michal)(tangon, michal);
            entity['content'] = michal;
            return entity;
        }
    };
    romeon['parse'] = kiloes;
    yankee['emoji'] = romeon;
    romeon = {};
    kiloes = option[report];
    echoed = verify.bind(entity)(kiloes);
    sizing = echoed.anyScopeRegex;
    kiloes = 21;
    kiloes = option[kiloes];
    kiloes = golfie.bind(entity)(kiloes);
    kiloes = kiloes.soundmojiRawFormatRegex;
    kiloes = sizing.bind(echoed)(kiloes);
    romeon['match'] = kiloes;
    kiloes = function(argFoo) { // Original name: parse
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu[Symbol.iterator];
            zuuluu = entity().next;
            michal = zuuluu().value;
            michal = entity;
            report = undefined;
            michal = michal === report;
            golfie = undefined;
            if(michal) { _fun00038_ip = 49; continue _fun00037 }
 24:
            oscard = zuuluu().value;
            tangon = entity;
            tangon = tangon === report;
            golfie = undefined;
            michal = tangon;
            if(tangon) { _fun00038_ip = 49; continue _fun00037 }
 43:
            golfie = oscard;
            michal = tangon;
 49:
            oscard = undefined;
            if(michal) { _fun00038_ip = 79; continue _fun00037 }
 54:
            tangon = zuuluu().value;
            zuuluu = entity;
            zuuluu = zuuluu === report;
            oscard = undefined;
            michal = zuuluu;
            if(zuuluu) { _fun00038_ip = 79; continue _fun00037 }
 73:
            oscard = tangon;
            michal = zuuluu;
 79:
            if(michal) { _fun00038_ip = 85; continue _fun00037 }
 82:
            entity.return();
 85:
            entity = {};
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            foxtra = '<sound:';
            yankee = ':';
            verify = '>';
            romeon = golfie;
            offset = oscard;
            michal = foxtra[report](romeon, yankee, offset, verify, option);
            entity['content'] = michal;
            return entity;
        }
    };
    romeon['parse'] = kiloes;
    yankee['soundboard'] = romeon;
    romeon = {};
    kiloes = option[report];
    sizing = verify.bind(entity)(kiloes);
    kiloes = sizing.anyScopeRegex;
    kiloes = kiloes.bind(sizing)(result);
    romeon['match'] = kiloes;
    kiloes = function() { // Original name: parse
        entity = {};
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 22;
        zuuluu = golfie[michal];
        report = undefined;
        zuuluu = oscard.bind(report)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.string;
        michal = golfie[michal];
        michal = oscard.bind(report)(michal);
        michal = michal.t;
        michal = michal.F+x38P;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.toLowerCase;
        report = michal.bind(zuuluu)();
        michal = global;
        michal = michal.HermesInternal;
        tangon = michal.concat;
        zuuluu = '<';
        michal = '>';
        michal = tangon.bind(zuuluu)(report, michal);
        entity['content'] = michal;
        return entity;
    };
    romeon['parse'] = kiloes;
    yankee['spoiler'] = romeon;
    romeon = {};
    kiloes = option[report];
    sizing = verify.bind(entity)(kiloes);
    kiloes = sizing.anyScopeRegex;
    kiloes = kiloes.bind(sizing)(output);
    romeon['match'] = kiloes;
    kiloes = function(argFoo) { // Original name: parse
        entity = {};
        zuuluu = argFoo;
        michal = 1;
        report = zuuluu[michal];
        michal = global;
        michal = michal.HermesInternal;
        tangon = michal.concat;
        zuuluu = '<id:';
        michal = '>';
        michal = tangon.bind(zuuluu)(report, michal);
        entity['content'] = michal;
        return entity;
    };
    romeon['parse'] = kiloes;
    yankee['staticRouteLink'] = romeon;
    romeon = {};
    backup = option[backup];
    backup = verify.bind(entity)(backup);
    backup = backup.RULES;
    sequen = backup.timestamp;
    config = romeon;
    backup = copyDataProperties(config, sequen);
    kiloes = function(argFoo) { // Original name: parse
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            option = 0;
            golfie = copyRestArgs(option);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.RULES;
            zuuluu = entity.timestamp;
            michal = zuuluu.parse;
            entity = new Array(0);
            option = entity;
            oscard = 0;
            tangon = arraySpread(option, golfie, oscard);
            option = michal;
            golfie = entity;
            oscard = zuuluu;
            zuuluu = apply(option, golfie, oscard);
            michal = zuuluu.type;
            entity = 'text';
            if(!(entity !== michal)) { _fun00040_ip = 102; continue _fun00039 }
 88:
            entity = {};
            michal = zuuluu.formatted;
            entity['content'] = michal;
            _fun00040_ip = 116; continue _fun00039;
 102:
            michal = {};
            zuuluu = zuuluu.content;
            michal['content'] = zuuluu;
            entity = michal;
 116:
            return entity;
        }
    };
    backup = 'parse';
    romeon[backup] = kiloes;
    yankee['timestamp'] = romeon;
    romeon = {};
    foxtra = option[foxtra];
    sequen = verify.bind(entity)(foxtra);
    config = romeon;
    foxtra = copyDataProperties(config, sequen);
    yankee['text'] = romeon;
    var _closure1_slot18 = yankee;
    foxtra = new Array(2);
    foxtra[0] = offset;
    foxtra[1] = yankee;
    romeon = foxtra.forEach;
    yankee = function(argFoo) {
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        michal = global;
        zuuluu = michal.Object;
        michal = zuuluu.keys;
        zuuluu = michal.bind(zuuluu)(tangon);
        michal = zuuluu.forEach;
        entity = function(argFoo, argBar) {
            michal = _closure2_slot0;
            entity = argFoo;
            michal = michal[entity];
            entity = argBar;
            michal['order'] = entity;
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    yankee = romeon.bind(foxtra)(yankee);
    report = option[report];
    verify = verify.bind(entity)(report);
    report = verify.parserFor;
    report = report.bind(verify)(offset);
    var _closure1_slot19 = report;
    report = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
    var _closure1_slot20 = report;
    report = {};
    verify = function(argFoo, argBar) { // Original name: parse
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            zuuluu = argFoo;
            oscard = arguments[2];
            var _closure2_slot0 = zuuluu;
            report = undefined;
            if(!(oscard === report)) { _fun00042_ip = 20; continue _fun00041 }
 18:
            oscard = undefined;
 20:
            var _closure2_slot1 = report;
            entity = null;
            if(!(entity == oscard)) { _fun00042_ip = 42; continue _fun00041 }
 30:
            entity = _closure1_slot24;
            oscard = entity.bind(report)(zuuluu);
 42:
            entity = {};
            zuuluu = argBar;
            entity['content'] = zuuluu;
            zuuluu = false;
            entity['tts'] = zuuluu;
            zuuluu = new Array(0);
            entity['invalidEmojis'] = zuuluu;
            zuuluu = new Array(0);
            entity['validNonShortcutEmojis'] = zuuluu;
            _closure2_slot1 = entity;
            tangon = _closure1_slot23;
            zuuluu = entity.content;
            michal = function(argFoo, argBar) {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 25;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(michal);
                    report = oscard.isEmojiPremiumLocked;
                    zuuluu = {};
                    zuuluu['emoji'] = tangon;
                    option = _closure2_slot0;
                    zuuluu['channel'] = option;
                    golfie = _closure1_slot16;
                    golfie = golfie.CHAT;
                    zuuluu['intention'] = golfie;
                    zuuluu = report.bind(oscard)(zuuluu);
                    if(zuuluu) { _fun00044_ip = 103; continue _fun00043 }
 75:
                    zuuluu = argBar;
                    if(zuuluu) { _fun00044_ip = 123; continue _fun00043 }
 81:
                    zuuluu = _closure2_slot1;
                    report = zuuluu.validNonShortcutEmojis;
                    zuuluu = report.push;
                    zuuluu = zuuluu.bind(report)(tangon);
                    _fun00044_ip = 123; continue _fun00043;
 103:
                    michal = _closure2_slot1;
                    zuuluu = michal.invalidEmojis;
                    michal = zuuluu.push;
                    michal = michal.bind(zuuluu)(tangon);
 123:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, oscard, michal);
            entity['content'] = michal;
            return entity;
        }
    };
    report['parse'] = verify;
    verify = function(argFoo, argBar) { // Original name: parsePreprocessor
        zuuluu = _closure1_slot24;
        tangon = undefined;
        michal = argFoo;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot19;
        entity = argBar;
        entity = michal.bind(tangon)(entity, zuuluu);
        return entity;
    };
    report['parsePreprocessor'] = verify;
    oscard = function(argFoo, argBar, argBaz) { // Original name: unparse
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            michal = argBaz;
            report = _closure1_slot5;
            tangon = report.getChannel;
            zuuluu = argBar;
            report = tangon.bind(report)(zuuluu);
            zuuluu = null;
            tangon = zuuluu != report;
            oscard = null;
            if(!tangon) { _fun00046_ip = 44; continue _fun00045 }
 34:
            tangon = report.getGuildId;
            oscard = tangon.bind(report)();
 44:
            tangon = zuuluu != oscard;
            zuuluu = null;
            if(!tangon) { _fun00046_ip = 67; continue _fun00045 }
 53:
            report = _closure1_slot10;
            tangon = report.getGuild;
            zuuluu = tangon.bind(report)(oscard);
 67:
            if(michal) { _fun00046_ip = 120; continue _fun00045 }
 70:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 23;
            report = report[tangon];
            tangon = undefined;
            golfie = oscard.bind(tangon)(report);
            oscard = golfie.omit;
            report = _closure1_slot18;
            tangon = ['spoiler', 'timestamp'];
            golfie = oscard.bind(golfie)(report, tangon);
            _fun00046_ip = 124; continue _fun00045;
 120:
            golfie = _closure1_slot18;
 124:
            if(michal) { _fun00046_ip = 157; continue _fun00045 }
 127:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 18;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = tangon.translateSurrogatesToInlineEmoji;
            _fun00046_ip = 161; continue _fun00045;
 157:
            report = _closure1_slot25;
 161:
            tangon = {};
            oscard = true;
            tangon['inline'] = oscard;
            tangon['guild'] = zuuluu;
            tangon['isNotification'] = michal;
            zuuluu = _closure1_slot22;
            oscard = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 14;
            entity = michal[entity];
            michal = undefined;
            oscard = oscard.bind(michal)(entity);
            entity = oscard.parserFor;
            oscard = entity.bind(oscard)(golfie);
            entity = argFoo;
            entity = oscard.bind(michal)(entity, tangon);
            entity = zuuluu.bind(michal)(entity, tangon, report);
            return entity;
        }
    };
    report['unparse'] = oscard;
    oscard = 26;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/messages/MessageParser.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['parseAndRebuild'] = tangon;
    zuuluu['createParserState'] = michal;
    return entity;
})();