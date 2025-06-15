// app/modules/markup/MarkupRules.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    output = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = output;
    var _closure1_slot2 = oscard;
    tangon = function(argFoo) { // Original name: parseLink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            entity = michal[entity];
            michal = undefined;
            oscard = zuuluu.bind(michal)(entity);
            report = oscard.punycodeLink;
            zuuluu = 1;
            entity = tangon[zuuluu];
            report = report.bind(oscard)(entity);
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 111; continue _fun00001 }
 52:
            entity = {};
            oscard = 'link';
            entity['type'] = oscard;
            golfie = {};
            oscard = 'text';
            golfie['type'] = oscard;
            oscard = report.displayTarget;
            golfie['content'] = oscard;
            oscard = new Array(1);
            oscard[0] = golfie;
            entity['content'] = oscard;
            report = report.target;
            entity['target'] = report;
            entity['title'] = michal;
            _fun00002_ip = 132; continue _fun00001;
 111:
            michal = {};
            report = 'text';
            michal['type'] = report;
            zuuluu = tangon[zuuluu];
            michal['content'] = zuuluu;
            entity = michal;
 132:
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: _startOfWord
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            oscard = argBar;
            entity = report.length;
            michal = 0;
            entity = michal === entity;
            if(entity) { _fun00004_ip = 66; continue _fun00003 }
 20:
            michal = michal === oscard;
            if(michal) { _fun00004_ip = 63; continue _fun00003 }
 27:
            tangon = report.charAt;
            zuuluu = 1;
            zuuluu = oscard - zuuluu;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.trim;
            tangon = zuuluu.bind(tangon)();
            zuuluu = '';
            michal = zuuluu === tangon;
 63:
            entity = michal;
 66:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = output.bind(entity)(michal);
    var _closure1_slot3 = michal;
    offset = 1;
    michal = oscard[offset];
    michal = output.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.ID_REGEX;
    var _closure1_slot8 = golfie;
    golfie = michal.MARKDOWN_SPOILER_REGEXP;
    var _closure1_slot9 = golfie;
    michal = michal.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
    var _closure1_slot10 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot11 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.CLYDE_AI_USER_ID;
    var _closure1_slot12 = michal;
    michal = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/;
    var _closure1_slot13 = michal;
    michal = /^$|\n *$/;
    var _closure1_slot14 = michal;
    michal = /^ *>>> ?/;
    var _closure1_slot15 = michal;
    michal = /^ *> ?/gm;
    var _closure1_slot16 = michal;
    michal = /^((?:https?|steam):\\/\\/[^\s<]+[^<.,:;"'\]\s])/;
    var _closure1_slot17 = michal;
    michal = function(argFoo) { // Original name: getGuildIdFromChannelId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot5;
            michal = zuuluu.getChannel;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            michal = entity == zuuluu;
            entity = undefined;
            if(michal) { _fun00006_ip = 41; continue _fun00005 }
 31:
            michal = zuuluu.getGuildId;
            entity = michal.bind(zuuluu)();
 41:
            return entity;
        }
    };
    var _closure1_slot18 = michal;
    michal = function(argFoo) { // Original name: getGuild
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guildId;
            entity = null;
            if(!(entity == zuuluu)) { _fun00008_ip = 63; continue _fun00007 }
 14:
            zuuluu = michal.channelId;
            zuuluu = entity != zuuluu;
            entity = null;
            if(!zuuluu) { _fun00008_ip = 61; continue _fun00007 }
 28:
            report = _closure1_slot6;
            tangon = report.getGuild;
            golfie = _closure1_slot18;
            oscard = michal.channelId;
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(oscard);
            entity = tangon.bind(report)(zuuluu);
 61:
            _fun00008_ip = 85; continue _fun00007;
 63:
            tangon = _closure1_slot6;
            zuuluu = tangon.getGuild;
            michal = michal.guildId;
            entity = zuuluu.bind(tangon)(michal);
 85:
            return entity;
        }
    };
    var _closure1_slot19 = michal;
    option = {};
    golfie = 9;
    michal = oscard[golfie];
    michal = output.bind(entity)(michal);
    michal = michal.defaultRules;
    michal = michal.newline;
    option['newline'] = michal;
    michal = oscard[golfie];
    michal = output.bind(entity)(michal);
    michal = michal.defaultRules;
    michal = michal.paragraph;
    option['paragraph'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    ctrled = verify.escape;
    vacuum = michal;
    verify = copyDataProperties(vacuum, ctrled);
    verify = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argBar;
            zuuluu = oscard.allowEscape;
            michal = false;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00010_ip = 73; continue _fun00009 }
 17:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.defaultRules;
            report = michal.escape;
            tangon = report.match;
            zuuluu = argFoo;
            michal = argBaz;
            entity = tangon.bind(report)(zuuluu, oscard, michal);
 73:
            return entity;
        }
    };
    romeon = 'match';
    michal[romeon] = verify;
    option['escape'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    ctrled = verify.blockQuote;
    vacuum = michal;
    verify = copyDataProperties(vacuum, ctrled);
    verify = [' ', '>'];
    foxtra = 'requiredFirstCharacters';
    michal[foxtra] = verify;
    verify = function(argFoo, argBar) { // Original name: match
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            entity = argBar;
            tangon = entity.prevCapture;
            michal = entity.inQuote;
            entity = entity.nested;
            if(michal) { _fun00012_ip = 101; continue _fun00011 }
 27:
            if(entity) { _fun00012_ip = 101; continue _fun00011 }
 30:
            entity = null;
            if(!(entity != tangon)) { _fun00012_ip = 81; continue _fun00011 }
 36:
            michal = 0;
            oscard = tangon[michal];
            report = _closure1_slot14;
            tangon = report.test;
            tangon = tangon.bind(report)(oscard);
            entity = null;
            if(!tangon) { _fun00012_ip = 79; continue _fun00011 }
 64:
            tangon = _closure1_slot13;
            michal = tangon.exec;
            entity = michal.bind(tangon)(zuuluu);
 79:
            return entity;
 81:
            michal = _closure1_slot13;
            entity = michal.exec;
            entity = entity.bind(michal)(zuuluu);
            return entity;
 101:
            entity = null;
            return entity;
        }
    };
    michal[romeon] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argBaz;
            entity = argFoo;
            zuuluu = 0;
            oscard = entity[zuuluu];
            entity = global;
            report = entity.Boolean;
            golfie = _closure1_slot15;
            michal = golfie.exec;
            michal = michal.bind(golfie)(oscard);
            golfie = undefined;
            option = report.bind(golfie)(michal);
            if(option) { _fun00014_ip = 54; continue _fun00013 }
 48:
            report = _closure1_slot16;
            _fun00014_ip = 58; continue _fun00013;
 54:
            report = _closure1_slot15;
 58:
            michal = oscard.replace;
            entity = '';
            oscard = michal.bind(oscard)(report, entity);
            report = tangon.inQuote;
            if(report) { _fun00014_ip = 84; continue _fun00013 }
 82:
            report = false;
 84:
            entity = tangon.inline;
            if(entity) { _fun00014_ip = 95; continue _fun00013 }
 93:
            entity = false;
 95:
            michal = true;
            tangon['inQuote'] = michal;
            if(option) { _fun00014_ip = 112; continue _fun00013 }
 106:
            tangon['inline'] = michal;
 112:
            michal = argBar;
            michal = michal.bind(golfie)(oscard, tangon);
            tangon['inQuote'] = report;
            tangon['inline'] = entity;
            entity = michal.length;
            if(!(zuuluu === entity)) { _fun00014_ip = 166; continue _fun00013 }
 142:
            zuuluu = michal.push;
            entity = {'type': 'text', 'content': ' '};
            entity = zuuluu.bind(michal)(entity);
 166:
            entity = {};
            entity['content'] = michal;
            michal = 'blockQuote';
            entity['type'] = michal;
            return entity;
        }
    };
    yankee = 'parse';
    michal[yankee] = verify;
    option['blockQuote'] = michal;
    michal = 8;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    option['link'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    ctrled = verify.autolink;
    vacuum = michal;
    verify = copyDataProperties(vacuum, ctrled);
    michal[yankee] = tangon;
    option['autolink'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    ctrled = verify.mailto;
    vacuum = michal;
    verify = copyDataProperties(vacuum, ctrled);
    verify = oscard[golfie];
    kiloes = output.bind(entity)(verify);
    backup = kiloes.inlineRegex;
    verify = /^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/;
    verify = backup.bind(kiloes)(verify);
    michal[romeon] = verify;
    verify = ['<'];
    michal[foxtra] = verify;
    option['mailto'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    ctrled = verify.mailto;
    vacuum = michal;
    verify = copyDataProperties(vacuum, ctrled);
    verify = ['<'];
    michal[foxtra] = verify;
    verify = oscard[golfie];
    kiloes = output.bind(entity)(verify);
    backup = kiloes.inlineRegex;
    verify = /^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\\/]?(?:[0-9]|\([0-9]+\)))+)>/;
    verify = backup.bind(kiloes)(verify);
    michal[romeon] = verify;
    verify = function(argFoo) { // Original name: parse
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            entity = 1;
            zuuluu = michal[entity];
            report = michal[entity];
            tangon = report.replaceAll;
            michal = /[ \\/]+/g;
            entity = '-';
            tangon = tangon.bind(report)(michal, entity);
            michal = tangon.startsWith;
            entity = 'tel:';
            report = michal.bind(tangon)(entity);
            if(report) { _fun00016_ip = 81; continue _fun00015 }
 64:
            oscard = tangon.startsWith;
            michal = 'sms:';
            report = oscard.bind(tangon)(michal);
 81:
            michal = tangon;
            if(report) { _fun00016_ip = 91; continue _fun00015 }
 87:
            michal = entity + tangon;
 91:
            entity = {};
            tangon = 'link';
            entity['type'] = tangon;
            tangon = {};
            report = 'text';
            tangon['type'] = report;
            tangon['content'] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            entity['content'] = zuuluu;
            entity['target'] = michal;
            return entity;
        }
    };
    michal[yankee] = verify;
    option['tel'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    ctrled = verify.url;
    vacuum = michal;
    verify = copyDataProperties(vacuum, ctrled);
    verify = ['h', 's'];
    michal[foxtra] = verify;
    verify = function(argFoo, argBar) { // Original name: match
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argBar;
            entity = entity.inline;
            michal = null;
            if(entity) { _fun00018_ip = 16; continue _fun00017 }
 14:
            return michal;
 16:
            tangon = _closure1_slot17;
            zuuluu = tangon.exec;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            if(!(michal != entity)) { _fun00018_ip = 167; continue _fun00017 }
 44:
            zuuluu = 0;
            golfie = entity[zuuluu];
            michal = golfie.length;
            tangon = 1;
            yankee = michal - tangon;
            michal = golfie;
            if(!(yankee >= zuuluu)) { _fun00018_ip = 159; continue _fun00017 }
 69:
            report = golfie[yankee];
            offset = ')';
            verify = '(';
            option = -1;
            oscard = 0;
            michal = golfie;
            if(!(offset === report)) { _fun00018_ip = 159; continue _fun00017 }
 96:
            report = golfie.indexOf;
            report = report.bind(golfie)(verify, oscard);
            if(!(option !== report)) { _fun00018_ip = 139; continue _fun00017 }
 112:
            oscard = report + tangon;
            yankee = yankee - 1;
            michal = golfie;
            if(!(yankee >= zuuluu)) { _fun00018_ip = 159; continue _fun00017 }
 126:
            report = golfie[yankee];
            michal = golfie;
            if(offset === report) { _fun00018_ip = 96; continue _fun00017 }
 137:
            _fun00018_ip = 159; continue _fun00017;
 139:
            oscard = golfie.slice;
            report = golfie.length;
            report = report - tangon;
            michal = oscard.bind(golfie)(zuuluu, report);
 159:
            entity[tangon] = michal;
            entity[zuuluu] = michal;
 167:
            return entity;
        }
    };
    michal[romeon] = verify;
    michal[yankee] = tangon;
    option['url'] = michal;
    michal = oscard[golfie];
    michal = output.bind(entity)(michal);
    michal = michal.defaultRules;
    michal = michal.strong;
    option['strong'] = michal;
    michal = oscard[golfie];
    michal = output.bind(entity)(michal);
    michal = michal.defaultRules;
    michal = michal.em;
    option['em'] = michal;
    michal = oscard[golfie];
    michal = output.bind(entity)(michal);
    michal = michal.defaultRules;
    michal = michal.u;
    option['u'] = michal;
    michal = oscard[golfie];
    michal = output.bind(entity)(michal);
    michal = michal.defaultRules;
    michal = michal.br;
    option['br'] = michal;
    tangon = 10;
    michal = oscard[tangon];
    michal = output.bind(entity)(michal);
    option['text'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    ctrled = verify.inlineCode;
    vacuum = michal;
    verify = copyDataProperties(vacuum, ctrled);
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscard = argBar;
            report = argBaz;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 9;
            entity = zuuluu[entity];
            tangon = undefined;
            entity = michal.bind(tangon)(entity);
            entity = entity.defaultRules;
            zuuluu = entity.inlineCode;
            michal = zuuluu.parse;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity, oscard, report);
            golfie = report.parseInlineCodeChildContent;
            michal = true;
            entity = zuuluu;
            if(!(michal === golfie)) { _fun00020_ip = 111; continue _fun00019 }
 76:
            michal = {};
            offset = michal;
            verify = zuuluu;
            golfie = copyDataProperties(offset, verify);
            zuuluu = zuuluu.content;
            tangon = oscard.bind(tangon)(zuuluu, report);
            zuuluu = 'validationChildContent';
            michal[zuuluu] = tangon;
            entity = michal;
 111:
            return entity;
        }
    };
    michal[yankee] = verify;
    option['inlineCode'] = michal;
    michal = {};
    verify = oscard[tangon];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    michal['order'] = verify;
    verify = ['¯'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zuuluu = /^(¯\\_\(ツ\)_\\/¯)/;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        entity = {};
        michal = 'text';
        entity['type'] = michal;
        zuuluu = argFoo;
        michal = 1;
        michal = zuuluu[michal];
        entity['content'] = michal;
        return entity;
    };
    michal['parse'] = verify;
    option['emoticon'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.codeBlock;
    verify = verify.order;
    michal['order'] = verify;
    verify = ['`'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zuuluu = /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscard = argFoo;
            zuuluu = argBaz;
            entity = {};
            michal = 1;
            golfie = oscard[michal];
            report = null;
            option = report != golfie;
            michal = '';
            tangon = michal;
            if(!option) { _fun00022_ip = 34; continue _fun00021 }
 31:
            tangon = golfie;
 34:
            entity['lang'] = tangon;
            tangon = 2;
            tangon = oscard[tangon];
            report = report != tangon;
            if(!report) { _fun00022_ip = 56; continue _fun00021 }
 53:
            michal = tangon;
 56:
            entity['content'] = michal;
            michal = zuuluu.inQuote;
            if(michal) { _fun00022_ip = 75; continue _fun00021 }
 69:
            michal = zuuluu.formatInline;
 75:
            if(michal) { _fun00022_ip = 80; continue _fun00021 }
 78:
            michal = false;
 80:
            entity['inQuote'] = michal;
            return entity;
        }
    };
    michal['parse'] = verify;
    option['codeBlock'] = michal;
    michal = {};
    verify = oscard[tangon];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    michal['order'] = verify;
    verify = ['<'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zuuluu = /^<@&(\d+)>/;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = argBaz;
            report = argFoo;
            entity = report[Symbol.iterator];
            report = entity().next;
            michal = report().value;
            michal = entity;
            golfie = undefined;
            zuuluu = michal === golfie;
            michal = undefined;
            if(zuuluu) { _fun00024_ip = 52; continue _fun00023 }
 27:
            oscard = report().value;
            report = entity;
            report = report === golfie;
            michal = undefined;
            zuuluu = report;
            if(report) { _fun00024_ip = 52; continue _fun00023 }
 46:
            michal = oscard;
            zuuluu = report;
 52:
            if(zuuluu) { _fun00024_ip = 58; continue _fun00023 }
 55:
            entity.return();
 58:
            entity = tangon.returnMentionIds;
            if(entity) { _fun00024_ip = 594; continue _fun00023 }
 70:
            entity = _closure1_slot19;
            offset = entity.bind(golfie)(tangon);
            option = null;
            entity = option != offset;
            oscard = null;
            if(!entity) { _fun00024_ip = 114; continue _fun00023 }
 93:
            verify = _closure1_slot6;
            report = verify.getRole;
            entity = offset.id;
            oscard = report.bind(verify)(entity, michal);
 114:
            if(!(option != oscard)) { _fun00024_ip = 499; continue _fun00023 }
 121:
            report = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 12;
            entity = verify[entity];
            yankee = report.bind(golfie)(entity);
            verify = yankee.canUseEnhancedRoleColors;
            entity = option == offset;
            report = undefined;
            if(entity) { _fun00024_ip = 161; continue _fun00023 }
 156:
            report = offset.id;
 161:
            entity = 'parse';
            verify = verify.bind(yankee)(report, entity);
            entity = oscard.colors;
            yankee = option == entity;
            report = undefined;
            if(yankee) { _fun00024_ip = 191; continue _fun00023 }
 185:
            report = entity.primary_color;
 191:
            entity = 0;
            report = entity === report;
            if(!report) { _fun00024_ip = 224; continue _fun00023 }
 200:
            yankee = oscard.colors;
            romeon = option == yankee;
            entity = undefined;
            if(romeon) { _fun00024_ip = 220; continue _fun00023 }
 214:
            entity = yankee.secondary_color;
 220:
            report = option == entity;
 224:
            if(!report) { _fun00024_ip = 251; continue _fun00023 }
 227:
            yankee = oscard.colors;
            romeon = option == yankee;
            entity = undefined;
            if(romeon) { _fun00024_ip = 247; continue _fun00023 }
 241:
            entity = yankee.tertiary_color;
 247:
            report = option == entity;
 251:
            entity = {};
            yankee = 'mention';
            entity['type'] = yankee;
            tangon = tangon.channelId;
            entity['channelId'] = tangon;
            yankee = option != offset;
            tangon = null;
            if(!yankee) { _fun00024_ip = 284; continue _fun00023 }
 279:
            tangon = offset.id;
 284:
            entity['guildId'] = tangon;
            entity['roleId'] = michal;
            tangon = oscard.color;
            entity['roleColor'] = tangon;
            tangon = null;
            if(!verify) { _fun00024_ip = 393; continue _fun00023 }
 308:
            tangon = null;
            if(report) { _fun00024_ip = 393; continue _fun00023 }
 313:
            report = {};
            offset = oscard.colors;
            yankee = option == offset;
            verify = undefined;
            if(yankee) { _fun00024_ip = 335; continue _fun00023 }
 329:
            verify = offset.primary_color;
 335:
            report['primaryColor'] = verify;
            offset = oscard.colors;
            yankee = option == offset;
            verify = undefined;
            if(yankee) { _fun00024_ip = 360; continue _fun00023 }
 354:
            verify = offset.secondary_color;
 360:
            report['secondaryColor'] = verify;
            verify = oscard.colors;
            offset = option == verify;
            option = undefined;
            if(offset) { _fun00024_ip = 385; continue _fun00023 }
 379:
            option = verify.tertiary_color;
 385:
            report['tertiaryColor'] = option;
            tangon = report;
 393:
            entity['roleColors'] = tangon;
            verify = oscard.name;
            tangon = global;
            report = tangon.HermesInternal;
            report = report.concat;
            option = '@';
            report = report.bind(option)(verify);
            entity['roleName'] = report;
            report = oscard.color;
            entity['color'] = report;
            report = oscard.colorString;
            entity['colorString'] = report;
            report = {};
            verify = 'text';
            report['type'] = verify;
            oscard = oscard.name;
            tangon = tangon.HermesInternal;
            tangon = tangon.concat;
            tangon = tangon.bind(option)(oscard);
            report['content'] = tangon;
            tangon = new Array(1);
            tangon[0] = report;
            entity['content'] = tangon;
            return entity;
 499:
            entity = {};
            tangon = 'text';
            entity['type'] = tangon;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 11;
            tangon = option[zuuluu];
            tangon = oscard.bind(golfie)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.YV4F/v;
            report = tangon.bind(report)(zuuluu);
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = '@';
            zuuluu = tangon.bind(zuuluu)(report);
            entity['content'] = zuuluu;
            return entity;
 594:
            entity = {};
            zuuluu = 'roleMention';
            entity['type'] = zuuluu;
            entity['id'] = michal;
            return entity;
        }
    };
    michal['parse'] = verify;
    option['roleMention'] = michal;
    michal = {};
    verify = oscard[tangon];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    michal['order'] = verify;
    verify = ['<', '@'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo, argBar) { // Original name: match
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = argBar;
            zuuluu = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/;
            michal = zuuluu.exec;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = null;
            report = michal == zuuluu;
            entity = null;
            if(report) { _fun00026_ip = 134; continue _fun00025 }
 42:
            report = 0;
            oscard = zuuluu[report];
            report = '@Clyde';
            if(!(report === oscard)) { _fun00026_ip = 128; continue _fun00025 }
 58:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 13;
            report = golfie[report];
            verify = undefined;
            golfie = oscard.bind(verify)(report);
            oscard = golfie.getClydeEnabled;
            report = _closure1_slot19;
            report = report.bind(verify)(tangon);
            verify = _closure1_slot5;
            option = verify.getChannel;
            tangon = tangon.channelId;
            tangon = option.bind(verify)(tangon);
            tangon = oscard.bind(golfie)(report, tangon);
            michal = null;
            if(!tangon) { _fun00026_ip = 131; continue _fun00025 }
 128:
            michal = zuuluu;
 131:
            entity = michal;
 134:
            return entity;
        }
    };
    michal['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            offset = argBaz;
            entity = offset.returnMentionIds;
            michal = 1;
            if(entity) { _fun00028_ip = 521; continue _fun00027 }
 21:
            oscard = _closure1_slot7;
            report = oscard.getUser;
            zuuluu = tangon[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            golfie = _closure1_slot5;
            oscard = golfie.getChannel;
            report = offset.channelId;
            yankee = oscard.bind(golfie)(report);
            oscard = null;
            golfie = oscard != zuuluu;
            report = undefined;
            option = undefined;
            romeon = undefined;
            if(!golfie) { _fun00028_ip = 187; continue _fun00027 }
 77:
            golfie = zuuluu.id;
            verify = zuuluu.toString;
            verify = verify.bind(zuuluu)();
            if(!(oscard != yankee)) { _fun00028_ip = 181; continue _fun00027 }
 95:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 14;
            foxtra = kiloes[foxtra];
            sizing = backup.bind(report)(foxtra);
            kiloes = sizing.getNickname;
            foxtra = yankee.getGuildId;
            backup = foxtra.bind(yankee)();
            foxtra = offset.channelId;
            foxtra = kiloes.bind(sizing)(backup, foxtra, zuuluu);
            if(!(oscard == foxtra)) { _fun00028_ip = 178; continue _fun00027 }
 147:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 15;
            backup = sizing[backup];
            kiloes = kiloes.bind(report)(backup);
            backup = kiloes.getName;
            foxtra = backup.bind(kiloes)(zuuluu);
 178:
            verify = foxtra;
 181:
            option = verify;
            romeon = golfie;
 187:
            zuuluu = oscard == zuuluu;
            if(!zuuluu) { _fun00028_ip = 210; continue _fun00027 }
 194:
            golfie = 0;
            verify = tangon[golfie];
            golfie = '@Clyde';
            zuuluu = golfie === verify;
 210:
            if(!zuuluu) { _fun00028_ip = 254; continue _fun00027 }
 213:
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            golfie = 13;
            golfie = foxtra[golfie];
            foxtra = verify.bind(report)(golfie);
            verify = foxtra.getClydeEnabled;
            golfie = _closure1_slot19;
            golfie = golfie.bind(report)(offset);
            zuuluu = verify.bind(foxtra)(golfie, yankee);
 254:
            if(!zuuluu) { _fun00028_ip = 261; continue _fun00027 }
 257:
            romeon = _closure1_slot12;
 261:
            golfie = tangon[michal];
            verify = oscard != golfie;
            if(!verify) { _fun00028_ip = 296; continue _fun00027 }
 272:
            backup = _closure1_slot8;
            foxtra = backup.test;
            zuuluu = golfie.trim;
            zuuluu = zuuluu.bind(golfie)();
            verify = foxtra.bind(backup)(zuuluu);
 296:
            if(!verify) { _fun00028_ip = 308; continue _fun00027 }
 299:
            zuuluu = offset.unknownUserMentionPlaceholder;
            if(zuuluu) { _fun00028_ip = 316; continue _fun00027 }
 308:
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            _fun00028_ip = 393; continue _fun00027;
 316:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 11;
            foxtra = sizing[entity];
            foxtra = kiloes.bind(report)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            entity = sizing[entity];
            entity = kiloes.bind(report)(entity);
            entity = entity.t;
            entity = entity.sKdZ6e;
            backup = foxtra.bind(backup)(entity);
            entity = global;
            entity = entity.HermesInternal;
            foxtra = entity.concat;
            entity = '@';
            zuuluu = foxtra.bind(entity)(backup);
 393:
            entity = {};
            entity['userId'] = romeon;
            romeon = offset.channelId;
            entity['channelId'] = romeon;
            offset = offset.viewingChannelId;
            entity['viewingChannelId'] = offset;
            offset = oscard == yankee;
            report = undefined;
            if(offset) { _fun00028_ip = 438; continue _fun00027 }
 428:
            offset = yankee.getGuildId;
            report = offset.bind(yankee)();
 438:
            entity['guildId'] = report;
            report = null;
            if(!verify) { _fun00028_ip = 450; continue _fun00027 }
 447:
            report = golfie;
 450:
            entity['parsedUserId'] = report;
            report = 2;
            report = tangon[report];
            entity['roleName'] = report;
            report = {};
            golfie = 'text';
            report['type'] = golfie;
            if(!(oscard != option)) { _fun00028_ip = 503; continue _fun00027 }
 481:
            oscard = global;
            oscard = oscard.HermesInternal;
            golfie = oscard.concat;
            oscard = '@';
            zuuluu = golfie.bind(oscard)(option);
 503:
            report['content'] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = report;
            entity['content'] = zuuluu;
            return entity;
 521:
            zuuluu = tangon[michal];
            entity = null;
            if(!(entity != zuuluu)) { _fun00028_ip = 551; continue _fun00027 }
 531:
            entity = {};
            zuuluu = 'mention';
            entity['type'] = zuuluu;
            michal = tangon[michal];
            entity['id'] = michal;
            _fun00028_ip = 574; continue _fun00027;
 551:
            michal = {};
            zuuluu = 'mention';
            michal['type'] = zuuluu;
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            michal['text'] = zuuluu;
            entity = michal;
 574:
            return entity;
        }
    };
    michal['parse'] = verify;
    option['mention'] = michal;
    michal = {};
    verify = oscard[tangon];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    michal['order'] = verify;
    verify = ['@'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            zuuluu = argBaz;
            entity = null;
            if(!(entity != zuuluu)) { _fun00030_ip = 19; continue _fun00029 }
 9:
            michal = '';
            entity = null;
            if(!(michal === zuuluu)) { _fun00030_ip = 47; continue _fun00029 }
 19:
            tangon = /^(@silent(?![^\s]))/;
            zuuluu = tangon.exec;
            michal = argFoo;
            entity = zuuluu.bind(tangon)(michal);
 47:
            return entity;
        }
    };
    michal['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        entity = {};
        michal = 'silentPrefix';
        entity['type'] = michal;
        zuuluu = argFoo;
        michal = 0;
        michal = zuuluu[michal];
        entity['content'] = michal;
        return entity;
    };
    michal['parse'] = verify;
    option['silentPrefix'] = michal;
    michal = 16;
    verify = oscard[michal];
    verify = output.bind(entity)(verify);
    verify = verify.channelMention;
    option['channelMention'] = verify;
    verify = oscard[michal];
    verify = output.bind(entity)(verify);
    verify = verify.channelOrMessageUrl;
    option['channelOrMessageUrl'] = verify;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    michal = michal.mediaPostLink;
    option['mediaPostLink'] = michal;
    michal = 17;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    michal = michal.attachmentLink;
    option['attachmentLink'] = michal;
    michal = 18;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    michal = michal.shopLink;
    option['shopLink'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.text;
    verify = verify.order;
    michal['order'] = verify;
    verify = ['<'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zuuluu = /^<\\/((?:(?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?):([0-9]+)>/;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            zuuluu = argFoo;
            option = argBaz;
            entity = option.returnMentionIds;
            if(entity) { _fun00032_ip = 215; continue _fun00031 }
 18:
            report = 1;
            tangon = zuuluu[report];
            michal = tangon.split;
            entity = ' ';
            tangon = michal.bind(tangon)(entity);
            michal = _closure1_slot4;
            entity = undefined;
            michal = michal.bind(entity)(tangon);
            entity = michal.slice;
            yankee = entity.bind(michal)(report);
            golfie = 2;
            verify = zuuluu[golfie];
            tangon = new Array(0);
            offset = 0;
            romeon = tangon;
            entity = arraySpread(romeon, yankee, offset);
            michal = tangon.map;
            entity = function(argFoo) {
                tangon = _closure1_slot11;
                entity = global;
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                michal = '';
                entity = argFoo;
                entity = zuuluu.bind(michal)(tangon, entity);
                return entity;
            };
            michal = michal.bind(tangon)(entity);
            entity = michal.join;
            oscard = '';
            tangon = entity.bind(michal)(oscard);
            michal = global;
            entity = michal.HermesInternal;
            entity = entity.concat;
            tangon = entity.bind(oscard)(verify, tangon);
            entity = {};
            option = option.channelId;
            entity['channelId'] = option;
            golfie = zuuluu[golfie];
            entity['commandId'] = golfie;
            golfie = zuuluu[report];
            entity['commandName'] = golfie;
            entity['commandKey'] = tangon;
            tangon = {};
            golfie = 'text';
            tangon['type'] = golfie;
            report = zuuluu[report];
            michal = michal.HermesInternal;
            michal = michal.concat;
            michal = michal.bind(oscard)(report);
            tangon['content'] = michal;
            michal = new Array(1);
            michal[0] = tangon;
            entity['content'] = michal;
            return entity;
 215:
            entity = {};
            michal = 'commandMention';
            entity['type'] = michal;
            michal = 2;
            michal = zuuluu[michal];
            entity['id'] = michal;
            return entity;
        }
    };
    michal['parse'] = verify;
    option['commandMention'] = michal;
    michal = {};
    verify = oscard[tangon];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    michal['order'] = verify;
    verify = [':'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            golfie = 19;
            entity = entity[golfie];
            oscard = undefined;
            entity = michal.bind(oscard)(entity);
            tangon = entity.EMOJI_NAME_RE;
            michal = tangon.exec;
            entity = argFoo;
            michal = michal.bind(tangon)(entity);
            report = null;
            tangon = report != michal;
            entity = null;
            if(!tangon) { _fun00034_ip = 104; continue _fun00033 }
 56:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = oscard.convertNameToSurrogate;
            zuuluu = 1;
            zuuluu = michal[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = '';
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00034_ip = 104; continue _fun00033 }
 101:
            entity = michal;
 104:
            return entity;
        }
    };
    michal['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 19;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            michal = report.convertNameToSurrogate;
            zuuluu = 1;
            entity = tangon[zuuluu];
            michal = michal.bind(report)(entity);
            entity = {};
            report = 'text';
            entity['type'] = report;
            report = null;
            if(!(report != michal)) { _fun00036_ip = 70; continue _fun00035 }
 62:
            report = '';
            if(!(report === michal)) { _fun00036_ip = 97; continue _fun00035 }
 70:
            report = tangon[zuuluu];
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = ':';
            michal = tangon.bind(zuuluu)(report, zuuluu);
 97:
            entity['content'] = michal;
            return entity;
        }
    };
    michal['parse'] = verify;
    option['emoji'] = michal;
    michal = {};
    verify = oscard[tangon];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    michal['order'] = verify;
    verify = ['<'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 20;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.soundmojiRawFormatRegex;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 20;
        entity = zuuluu[entity];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        michal = argFoo;
        entity = argBaz;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['parse'] = verify;
    option['soundboard'] = michal;
    michal = {};
    verify = oscard[tangon];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    michal['order'] = verify;
    verify = ['<'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zuuluu = /^<a?:(\w+):(\d+)>/;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        entity = {};
        michal = 'text';
        entity['type'] = michal;
        zuuluu = argFoo;
        michal = 1;
        tangon = zuuluu[michal];
        michal = global;
        michal = michal.HermesInternal;
        zuuluu = michal.concat;
        michal = ':';
        michal = zuuluu.bind(michal)(tangon, michal);
        entity['content'] = michal;
        return entity;
    };
    michal['parse'] = verify;
    option['customEmoji'] = michal;
    michal = {};
    verify = oscard[tangon];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    verify = verify - offset;
    michal['order'] = verify;
    verify = ['<'];
    michal['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 21;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.TIMESTAMP_REGEX;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            golfie = argFoo;
            entity = golfie[Symbol.iterator];
            golfie = entity().next;
            tangon = golfie().value;
            michal = entity;
            oscard = undefined;
            michal = michal === oscard;
            zuuluu = undefined;
            if(michal) { _fun00038_ip = 27; continue _fun00037 }
 24:
            zuuluu = tangon;
 27:
            report = undefined;
            if(michal) { _fun00038_ip = 57; continue _fun00037 }
 32:
            option = golfie().value;
            tangon = entity;
            tangon = tangon === oscard;
            report = undefined;
            michal = tangon;
            if(tangon) { _fun00038_ip = 57; continue _fun00037 }
 51:
            report = option;
            michal = tangon;
 57:
            tangon = undefined;
            if(michal) { _fun00038_ip = 87; continue _fun00037 }
 62:
            option = golfie().value;
            golfie = entity;
            golfie = golfie === oscard;
            tangon = undefined;
            michal = golfie;
            if(golfie) { _fun00038_ip = 87; continue _fun00037 }
 81:
            tangon = option;
            michal = golfie;
 87:
            if(michal) { _fun00038_ip = 93; continue _fun00037 }
 90:
            entity.return();
 93:
            michal = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 21;
            entity = golfie[entity];
            michal = michal.bind(oscard)(entity);
            entity = michal.parseTimestamp;
            entity = entity.bind(michal)(report, tangon);
            michal = null;
            if(!(michal != entity)) { _fun00038_ip = 146; continue _fun00037 }
 134:
            michal = 'timestamp';
            entity['type'] = michal;
            _fun00038_ip = 163; continue _fun00037;
 146:
            michal = {};
            tangon = 'text';
            michal['type'] = tangon;
            michal['content'] = zuuluu;
            entity = michal;
 163:
            return entity;
        }
    };
    michal['parse'] = verify;
    option['timestamp'] = michal;
    michal = {};
    verify = oscard[golfie];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.u;
    verify = verify.order;
    michal['order'] = verify;
    verify = ['~'];
    michal['requiredFirstCharacters'] = verify;
    verify = oscard[golfie];
    yankee = output.bind(entity)(verify);
    offset = yankee.inlineRegex;
    verify = /^~~([\s\S]+?)~~(?!_)/;
    verify = offset.bind(yankee)(verify);
    michal['match'] = verify;
    golfie = oscard[golfie];
    golfie = output.bind(entity)(golfie);
    golfie = golfie.defaultRules;
    golfie = golfie.u;
    golfie = golfie.parse;
    michal['parse'] = golfie;
    option['s'] = michal;
    michal = {};
    golfie = oscard[tangon];
    golfie = output.bind(entity)(golfie);
    golfie = golfie.order;
    michal['order'] = golfie;
    golfie = ['|'];
    michal['requiredFirstCharacters'] = golfie;
    golfie = function(argFoo) { // Original name: match
        zuuluu = _closure1_slot9;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: parse
        michal = argBaz;
        entity = {};
        tangon = argFoo;
        zuuluu = 1;
        report = tangon[zuuluu];
        tangon = argBar;
        zuuluu = undefined;
        zuuluu = tangon.bind(zuuluu)(report, michal);
        entity['content'] = zuuluu;
        michal = michal.channelId;
        entity['channelId'] = michal;
        return entity;
    };
    michal['parse'] = golfie;
    option['spoiler'] = michal;
    michal = {};
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    tangon = tangon.order;
    michal['order'] = tangon;
    tangon = ['<'];
    michal['requiredFirstCharacters'] = tangon;
    tangon = function(argFoo) { // Original name: match
        zuuluu = _closure1_slot10;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['match'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            zuuluu = argBaz;
            option = function(argFoo) { // Original name: makeNode
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    zuuluu = entity == michal;
                    if(zuuluu) { _fun00042_ip = 37; continue _fun00041 }
 12:
                    zuuluu = {};
                    tangon = 'text';
                    zuuluu['type'] = tangon;
                    zuuluu['content'] = michal;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity = michal;
 37:
                    return entity;
                }
            };
            oscard = _closure1_slot3;
            report = undefined;
            michal = argFoo;
            entity = 3;
            oscard = oscard.bind(report)(michal, entity);
            entity = 1;
            michal = oscard[entity];
            entity = 2;
            oscard = oscard[entity];
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 22;
            verify = offset[entity];
            yankee = golfie.bind(report)(verify);
            verify = yankee.staticRouteToTranslation;
            verify = verify.bind(yankee)(michal);
            entity = offset[entity];
            yankee = golfie.bind(report)(entity);
            golfie = yankee.staticRouteToItemString;
            entity = _closure1_slot19;
            romeon = entity.bind(report)(zuuluu);
            offset = null;
            foxtra = offset == romeon;
            entity = undefined;
            if(foxtra) { _fun00040_ip = 116; continue _fun00039 }
 111:
            entity = romeon.id;
 116:
            golfie = golfie.bind(yankee)(michal, oscard, entity);
            entity = {};
            yankee = offset != golfie;
            offset = '';
            if(!yankee) { _fun00040_ip = 160; continue _fun00039 }
 136:
            yankee = global;
            yankee = yankee.HermesInternal;
            romeon = yankee.concat;
            yankee = ' › ';
            offset = romeon.bind(yankee)(golfie);
 160:
            offset = verify + offset;
            offset = option.bind(report)(offset);
            entity['content'] = offset;
            verify = option.bind(report)(verify);
            entity['mainContent'] = verify;
            golfie = option.bind(report)(golfie);
            entity['itemContent'] = golfie;
            entity['itemId'] = oscard;
            entity['id'] = michal;
            tangon = _closure1_slot18;
            zuuluu = zuuluu.channelId;
            zuuluu = tangon.bind(report)(zuuluu);
            entity['guildId'] = zuuluu;
            entity['channelId'] = michal;
            return entity;
        }
    };
    michal['parse'] = tangon;
    option['staticRouteLink'] = michal;
    michal = 23;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    option['heading'] = michal;
    michal = 24;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    option['list'] = michal;
    michal = 25;
    michal = oscard[michal];
    michal = output.bind(entity)(michal);
    option['subtext'] = michal;
    michal = 26;
    tangon = oscard[michal];
    golfie = output.bind(entity)(tangon);
    tangon = new Array(2);
    tangon[0] = option;
    option = 27;
    option = oscard[option];
    option = output.bind(entity)(option);
    tangon[1] = option;
    kiloes = golfie.bind(entity)(tangon);
    var _closure1_slot20 = kiloes;
    sizing = 28;
    tangon = oscard[sizing];
    option = output.bind(entity)(tangon);
    golfie = option.omit;
    tangon = ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard'];
    backup = golfie.bind(option)(kiloes, tangon);
    tangon = oscard[sizing];
    option = output.bind(entity)(tangon);
    golfie = option.omit;
    tangon = ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard'];
    foxtra = golfie.bind(option)(kiloes, tangon);
    tangon = oscard[sizing];
    option = output.bind(entity)(tangon);
    golfie = option.omit;
    tangon = ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard'];
    romeon = golfie.bind(option)(kiloes, tangon);
    tangon = oscard[sizing];
    verify = output.bind(entity)(tangon);
    option = verify.omit;
    tangon = oscard[michal];
    golfie = output.bind(entity)(tangon);
    tangon = new Array(2);
    tangon[0] = kiloes;
    offset = {};
    yankee = {};
    result = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            report = argBaz;
            entity = _closure1_slot20;
            michal = entity.codeBlock;
            entity = michal.match;
            entity = entity.bind(michal)(golfie, oscard, report);
            michal = null;
            if(!(michal == entity)) { _fun00044_ip = 78; continue _fun00043 }
 41:
            zuuluu = _closure1_slot20;
            tangon = zuuluu.inlineCode;
            zuuluu = tangon.match;
            zuuluu = zuuluu.bind(tangon)(golfie, oscard, report);
            tangon = michal != zuuluu;
            michal = undefined;
            if(!tangon) { _fun00044_ip = 76; continue _fun00043 }
 73:
            michal = zuuluu;
 76:
            return michal;
 78:
            return entity;
        }
    };
    yankee['match'] = result;
    offset['inlineCode'] = yankee;
    tangon[1] = offset;
    golfie = golfie.bind(entity)(tangon);
    tangon = ['blockQuote', 'codeBlock', 'br'];
    yankee = option.bind(verify)(golfie, tangon);
    tangon = oscard[sizing];
    option = output.bind(entity)(tangon);
    golfie = option.omit;
    tangon = ['codeBlock', 'br', 'blockQuote'];
    offset = golfie.bind(option)(kiloes, tangon);
    tangon = oscard[sizing];
    option = output.bind(entity)(tangon);
    golfie = option.omit;
    tangon = ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard'];
    option = golfie.bind(option)(kiloes, tangon);
    tangon = oscard[sizing];
    verify = output.bind(entity)(tangon);
    golfie = verify.omit;
    tangon = ['codeBlock', 'blockQuote', 'br'];
    verify = golfie.bind(verify)(kiloes, tangon);
    tangon = oscard[sizing];
    result = output.bind(entity)(tangon);
    golfie = result.omit;
    tangon = ['codeBlock', 'br', 'inlineCode'];
    tangon = golfie.bind(result)(kiloes, tangon);
    michal = oscard[michal];
    golfie = output.bind(entity)(michal);
    result = {};
    michal = {};
    update = -1;
    michal['order'] = update;
    update = function(argFoo, argBar) { // Original name: match
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = report.parseDepth;
            entity = null;
            if(!(entity != michal)) { _fun00046_ip = 34; continue _fun00045 }
 18:
            zuuluu = report.parseDepth;
            michal = 10;
            if(!(!(zuuluu > michal))) { _fun00046_ip = 248; continue _fun00045 }
 34:
            michal = report.highlightWord;
            if(!(entity != michal)) { _fun00046_ip = 246; continue _fun00045 }
 47:
            michal = report.highlightWord;
            michal = michal.length;
            zuuluu = 0;
            if(!(zuuluu !== michal)) { _fun00046_ip = 246; continue _fun00045 }
 67:
            tangon = oscard.indexOf;
            michal = report.highlightWord;
            golfie = tangon.bind(oscard)(michal);
            michal = -1;
            if(!(michal !== golfie)) { _fun00046_ip = 244; continue _fun00045 }
 97:
            tangon = _closure1_slot21;
            offset = undefined;
            tangon = tangon.bind(offset)(oscard, golfie);
            verify = 1;
            option = golfie;
            golfie = option;
            if(tangon) { _fun00046_ip = 172; continue _fun00045 }
 124:
            foxtra = oscard.indexOf;
            romeon = report.highlightWord;
            tangon = option + verify;
            tangon = foxtra.bind(oscard)(romeon, tangon);
            romeon = _closure1_slot21;
            romeon = romeon.bind(offset)(oscard, tangon);
            golfie = tangon;
            if(romeon) { _fun00046_ip = 172; continue _fun00045 }
 162:
            option = tangon;
            golfie = option;
            if(michal !== tangon) { _fun00046_ip = 124; continue _fun00045 }
 172:
            if(!(michal !== golfie)) { _fun00046_ip = 242; continue _fun00045 }
 176:
            michal = oscard.substring;
            tangon = michal.bind(oscard)(zuuluu, golfie);
            zuuluu = oscard.substring;
            michal = report.highlightWord;
            michal = michal.length;
            michal = golfie + michal;
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = new Array(4);
            michal[0] = oscard;
            report = report.highlightWord;
            michal[1] = report;
            michal[2] = tangon;
            michal[3] = zuuluu;
            return michal;
 242:
            return entity;
 244:
            return entity;
 246:
            return entity;
 248:
            return entity;
        }
    };
    michal['match'] = update;
    echoed = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            oscard = argFoo;
            option = argBar;
            michal = argBaz;
            zuuluu = michal.parseDepth;
            entity = null;
            tangon = entity != zuuluu;
            entity = 0;
            if(!tangon) { _fun00048_ip = 29; continue _fun00047 }
 26:
            entity = zuuluu;
 29:
            golfie = {};
            yankee = golfie;
            offset = michal;
            michal = copyDataProperties(yankee, offset);
            tangon = 1;
            michal = entity + tangon;
            entity = 'parseDepth';
            golfie[entity] = michal;
            entity = 2;
            entity = oscard[entity];
            zuuluu = undefined;
            michal = option.bind(zuuluu)(entity, golfie);
            entity = 3;
            entity = oscard[entity];
            zuuluu = option.bind(zuuluu)(entity, golfie);
            entity = new Array(1);
            yankee = entity;
            offset = michal;
            verify = 0;
            michal = arraySpread(yankee, offset, verify);
            report = {};
            golfie = 'highlight';
            report['type'] = golfie;
            oscard = oscard[tangon];
            report['content'] = oscard;
            entity[michal] = report;
            verify = michal + tangon;
            yankee = entity;
            offset = zuuluu;
            michal = arraySpread(yankee, offset, verify);
            return entity;
        }
    };
    michal['parse'] = echoed;
    result['highlightWord'] = michal;
    michal = new Array(2);
    michal[0] = result;
    sizing = oscard[sizing];
    result = output.bind(entity)(sizing);
    output = result.omit;
    sizing = ['url'];
    sizing = output.bind(result)(kiloes, sizing);
    michal[1] = sizing;
    golfie = golfie.bind(entity)(michal);
    michal = {};
    michal['RULES'] = kiloes;
    michal['CHANNEL_TOPIC_RULES'] = backup;
    michal['VOICE_CHANNEL_STATUS_RULES'] = foxtra;
    michal['EMBED_TITLE_RULES'] = romeon;
    michal['INLINE_REPLY_RULES'] = yankee;
    michal['GUILD_VERIFICATION_FORM_RULES'] = offset;
    michal['GUILD_EVENT_RULES'] = verify;
    michal['PROFILE_BIO_RULES'] = option;
    michal['AUTO_MODERATION_SYSTEM_MESSAGE_RULES'] = golfie;
    michal['NATIVE_SEARCH_RESULT_LINK_RULES'] = tangon;
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/markup/MarkupRules.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();