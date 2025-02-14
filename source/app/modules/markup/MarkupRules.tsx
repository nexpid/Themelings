// app/modules/markup/MarkupRules.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    output = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = output;
    var _closure1_slot2 = oscar;
    tango = function(argFoo) { // Original name: parseLink
        _fun61727: for(var _fun61727_ip = 0; ; ) switch(_fun61727_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            entity = mike[entity];
            mike = undefined;
            oscar = zulu.bind(mike)(entity);
            report = oscar.punycodeLink;
            zulu = 1;
            entity = tango[zulu];
            report = report.bind(oscar)(entity);
            entity = null;
            if(!(entity != report)) { _fun61727_ip = 111; continue _fun61727 }
 52:
            entity = {};
            oscar = 'link';
            entity['type'] = oscar;
            golf = {};
            oscar = 'text';
            golf['type'] = oscar;
            oscar = report.displayTarget;
            golf['content'] = oscar;
            oscar = new Array(1);
            oscar[0] = golf;
            entity['content'] = oscar;
            report = report.target;
            entity['target'] = report;
            entity['title'] = mike;
            _fun61727_ip = 132; continue _fun61727;
 111:
            mike = {};
            report = 'text';
            mike['type'] = report;
            zulu = tango[zulu];
            mike['content'] = zulu;
            entity = mike;
 132:
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: _startOfWord
        _fun61728: for(var _fun61728_ip = 0; ; ) switch(_fun61728_ip) {
 0:
            report = argFoo;
            oscar = argBar;
            entity = report.length;
            mike = 0;
            entity = mike === entity;
            if(entity) { _fun61728_ip = 66; continue _fun61728 }
 20:
            mike = mike === oscar;
            if(mike) { _fun61728_ip = 63; continue _fun61728 }
 27:
            tango = report.charAt;
            zulu = 1;
            zulu = oscar - zulu;
            tango = tango.bind(report)(zulu);
            zulu = tango.trim;
            tango = zulu.bind(tango)();
            zulu = '';
            mike = zulu === tango;
 63:
            entity = mike;
 66:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = output.bind(entity)(mike);
    var _closure1_slot3 = mike;
    offset = 1;
    mike = oscar[offset];
    mike = output.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.ID_REGEX;
    var _closure1_slot8 = golf;
    golf = mike.MARKDOWN_SPOILER_REGEXP;
    var _closure1_slot9 = golf;
    mike = mike.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
    var _closure1_slot10 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot11 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.CLYDE_AI_USER_ID;
    var _closure1_slot12 = mike;
    mike = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/;
    var _closure1_slot13 = mike;
    mike = /^$|\n *$/;
    var _closure1_slot14 = mike;
    mike = /^ *>>> ?/;
    var _closure1_slot15 = mike;
    mike = /^ *> ?/gm;
    var _closure1_slot16 = mike;
    mike = /^((?:https?|steam):\\/\\/[^\s<]+[^<.,:;"'\]\s])/;
    var _closure1_slot17 = mike;
    mike = function(argFoo) { // Original name: getGuildIdFromChannelId
        _fun61729: for(var _fun61729_ip = 0; ; ) switch(_fun61729_ip) {
 0:
            zulu = _closure1_slot5;
            mike = zulu.getChannel;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            entity = null;
            mike = entity == zulu;
            entity = undefined;
            if(mike) { _fun61729_ip = 41; continue _fun61729 }
 31:
            mike = zulu.getGuildId;
            entity = mike.bind(zulu)();
 41:
            return entity;
        }
    };
    var _closure1_slot18 = mike;
    mike = function(argFoo) { // Original name: getGuild
        _fun61730: for(var _fun61730_ip = 0; ; ) switch(_fun61730_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            entity = null;
            if(!(entity == zulu)) { _fun61730_ip = 63; continue _fun61730 }
 14:
            zulu = mike.channelId;
            zulu = entity != zulu;
            entity = null;
            if(!zulu) { _fun61730_ip = 61; continue _fun61730 }
 28:
            report = _closure1_slot6;
            tango = report.getGuild;
            golf = _closure1_slot18;
            oscar = mike.channelId;
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar);
            entity = tango.bind(report)(zulu);
 61:
            _fun61730_ip = 85; continue _fun61730;
 63:
            tango = _closure1_slot6;
            zulu = tango.getGuild;
            mike = mike.guildId;
            entity = zulu.bind(tango)(mike);
 85:
            return entity;
        }
    };
    var _closure1_slot19 = mike;
    options = {};
    golf = 9;
    mike = oscar[golf];
    mike = output.bind(entity)(mike);
    mike = mike.defaultRules;
    mike = mike.newline;
    options['newline'] = mike;
    mike = oscar[golf];
    mike = output.bind(entity)(mike);
    mike = mike.defaultRules;
    mike = mike.paragraph;
    options['paragraph'] = mike;
    mike = {};
    verify = oscar[golf];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    control = verify.escape;
    vacuum = mike;
    verify = copyDataProperties(vacuum, control);
    verify = function(argFoo, argBar, argBaz) { // Original name: match
        _fun61731: for(var _fun61731_ip = 0; ; ) switch(_fun61731_ip) {
 0:
            oscar = argBar;
            zulu = oscar.allowEscape;
            mike = false;
            entity = null;
            if(!(mike !== zulu)) { _fun61731_ip = 73; continue _fun61731 }
 17:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.defaultRules;
            report = mike.escape;
            tango = report.match;
            zulu = argFoo;
            mike = argBaz;
            entity = tango.bind(report)(zulu, oscar, mike);
 73:
            return entity;
        }
    };
    romeo = 'match';
    mike[romeo] = verify;
    options['escape'] = mike;
    mike = {};
    verify = oscar[golf];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    control = verify.blockQuote;
    vacuum = mike;
    verify = copyDataProperties(vacuum, control);
    verify = [' ', '>'];
    foxtrot = 'requiredFirstCharacters';
    mike[foxtrot] = verify;
    verify = function(argFoo, argBar) { // Original name: match
        _fun61732: for(var _fun61732_ip = 0; ; ) switch(_fun61732_ip) {
 0:
            zulu = argFoo;
            entity = argBar;
            tango = entity.prevCapture;
            mike = entity.inQuote;
            entity = entity.nested;
            if(mike) { _fun61732_ip = 101; continue _fun61732 }
 27:
            if(entity) { _fun61732_ip = 101; continue _fun61732 }
 30:
            entity = null;
            if(!(entity != tango)) { _fun61732_ip = 81; continue _fun61732 }
 36:
            mike = 0;
            oscar = tango[mike];
            report = _closure1_slot14;
            tango = report.test;
            tango = tango.bind(report)(oscar);
            entity = null;
            if(!tango) { _fun61732_ip = 79; continue _fun61732 }
 64:
            tango = _closure1_slot13;
            mike = tango.exec;
            entity = mike.bind(tango)(zulu);
 79:
            return entity;
 81:
            mike = _closure1_slot13;
            entity = mike.exec;
            entity = entity.bind(mike)(zulu);
            return entity;
 101:
            entity = null;
            return entity;
        }
    };
    mike[romeo] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun61733: for(var _fun61733_ip = 0; ; ) switch(_fun61733_ip) {
 0:
            tango = argBaz;
            entity = argFoo;
            zulu = 0;
            oscar = entity[zulu];
            entity = global;
            report = entity.Boolean;
            golf = _closure1_slot15;
            mike = golf.exec;
            mike = mike.bind(golf)(oscar);
            golf = undefined;
            options = report.bind(golf)(mike);
            if(options) { _fun61733_ip = 54; continue _fun61733 }
 48:
            report = _closure1_slot16;
            _fun61733_ip = 58; continue _fun61733;
 54:
            report = _closure1_slot15;
 58:
            mike = oscar.replace;
            entity = '';
            oscar = mike.bind(oscar)(report, entity);
            report = tango.inQuote;
            if(report) { _fun61733_ip = 84; continue _fun61733 }
 82:
            report = false;
 84:
            entity = tango.inline;
            if(entity) { _fun61733_ip = 95; continue _fun61733 }
 93:
            entity = false;
 95:
            mike = true;
            tango['inQuote'] = mike;
            if(options) { _fun61733_ip = 112; continue _fun61733 }
 106:
            tango['inline'] = mike;
 112:
            mike = argBar;
            mike = mike.bind(golf)(oscar, tango);
            tango['inQuote'] = report;
            tango['inline'] = entity;
            entity = mike.length;
            if(!(zulu === entity)) { _fun61733_ip = 166; continue _fun61733 }
 142:
            zulu = mike.push;
            entity = {'type': 'text', 'content': ' '};
            entity = zulu.bind(mike)(entity);
 166:
            entity = {};
            entity['content'] = mike;
            mike = 'blockQuote';
            entity['type'] = mike;
            return entity;
        }
    };
    yankee = 'parse';
    mike[yankee] = verify;
    options['blockQuote'] = mike;
    mike = 8;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    options['link'] = mike;
    mike = {};
    verify = oscar[golf];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    control = verify.autolink;
    vacuum = mike;
    verify = copyDataProperties(vacuum, control);
    mike[yankee] = tango;
    options['autolink'] = mike;
    mike = {};
    verify = oscar[golf];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    control = verify.url;
    vacuum = mike;
    verify = copyDataProperties(vacuum, control);
    verify = ['h', 's'];
    mike[foxtrot] = verify;
    verify = function(argFoo, argBar) { // Original name: match
        _fun61734: for(var _fun61734_ip = 0; ; ) switch(_fun61734_ip) {
 0:
            entity = argBar;
            entity = entity.inline;
            mike = null;
            if(entity) { _fun61734_ip = 16; continue _fun61734 }
 14:
            return mike;
 16:
            tango = _closure1_slot17;
            zulu = tango.exec;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            if(!(mike != entity)) { _fun61734_ip = 166; continue _fun61734 }
 44:
            zulu = 0;
            golf = entity[zulu];
            mike = golf.length;
            tango = 1;
            yankee = mike - tango;
            mike = golf;
            if(!(yankee >= zulu)) { _fun61734_ip = 158; continue _fun61734 }
 69:
            report = golf[yankee];
            offset = ')';
            verify = '(';
            options = -1;
            oscar = 0;
            mike = golf;
            if(!(offset === report)) { _fun61734_ip = 158; continue _fun61734 }
 96:
            report = golf.indexOf;
            report = report.bind(golf)(verify, oscar);
            if(!(options !== report)) { _fun61734_ip = 138; continue _fun61734 }
 111:
            oscar = report + tango;
            yankee = yankee - 1;
            mike = golf;
            if(!(yankee >= zulu)) { _fun61734_ip = 158; continue _fun61734 }
 125:
            report = golf[yankee];
            mike = golf;
            if(offset === report) { _fun61734_ip = 96; continue _fun61734 }
 136:
            _fun61734_ip = 158; continue _fun61734;
 138:
            oscar = golf.slice;
            report = golf.length;
            report = report - tango;
            mike = oscar.bind(golf)(zulu, report);
 158:
            entity[tango] = mike;
            entity[zulu] = mike;
 166:
            return entity;
        }
    };
    mike[romeo] = verify;
    mike[yankee] = tango;
    options['url'] = mike;
    mike = oscar[golf];
    mike = output.bind(entity)(mike);
    mike = mike.defaultRules;
    mike = mike.strong;
    options['strong'] = mike;
    mike = oscar[golf];
    mike = output.bind(entity)(mike);
    mike = mike.defaultRules;
    mike = mike.em;
    options['em'] = mike;
    mike = oscar[golf];
    mike = output.bind(entity)(mike);
    mike = mike.defaultRules;
    mike = mike.u;
    options['u'] = mike;
    mike = oscar[golf];
    mike = output.bind(entity)(mike);
    mike = mike.defaultRules;
    mike = mike.br;
    options['br'] = mike;
    tango = 10;
    mike = oscar[tango];
    mike = output.bind(entity)(mike);
    options['text'] = mike;
    mike = {};
    verify = oscar[golf];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    control = verify.inlineCode;
    vacuum = mike;
    verify = copyDataProperties(vacuum, control);
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun61735: for(var _fun61735_ip = 0; ; ) switch(_fun61735_ip) {
 0:
            oscar = argBar;
            report = argBaz;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 9;
            entity = zulu[entity];
            tango = undefined;
            entity = mike.bind(tango)(entity);
            entity = entity.defaultRules;
            zulu = entity.inlineCode;
            mike = zulu.parse;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity, oscar, report);
            golf = report.parseInlineCodeChildContent;
            mike = true;
            entity = zulu;
            if(!(mike === golf)) { _fun61735_ip = 111; continue _fun61735 }
 76:
            mike = {};
            offset = mike;
            verify = zulu;
            golf = copyDataProperties(offset, verify);
            zulu = zulu.content;
            tango = oscar.bind(tango)(zulu, report);
            zulu = 'validationChildContent';
            mike[zulu] = tango;
            entity = mike;
 111:
            return entity;
        }
    };
    mike[yankee] = verify;
    options['inlineCode'] = mike;
    mike = {};
    verify = oscar[tango];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    mike['order'] = verify;
    verify = ['¯'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zulu = /^(¯\\_\(ツ\)_\\/¯)/;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        entity = {};
        mike = 'text';
        entity['type'] = mike;
        zulu = argFoo;
        mike = 1;
        mike = zulu[mike];
        entity['content'] = mike;
        return entity;
    };
    mike['parse'] = verify;
    options['emoticon'] = mike;
    mike = {};
    verify = oscar[golf];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.codeBlock;
    verify = verify.order;
    mike['order'] = verify;
    verify = ['`'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zulu = /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun61739: for(var _fun61739_ip = 0; ; ) switch(_fun61739_ip) {
 0:
            oscar = argFoo;
            zulu = argBaz;
            entity = {};
            mike = 1;
            golf = oscar[mike];
            report = null;
            options = report != golf;
            mike = '';
            tango = mike;
            if(!options) { _fun61739_ip = 34; continue _fun61739 }
 31:
            tango = golf;
 34:
            entity['lang'] = tango;
            tango = 2;
            tango = oscar[tango];
            report = report != tango;
            if(!report) { _fun61739_ip = 56; continue _fun61739 }
 53:
            mike = tango;
 56:
            entity['content'] = mike;
            mike = zulu.inQuote;
            if(mike) { _fun61739_ip = 75; continue _fun61739 }
 69:
            mike = zulu.formatInline;
 75:
            if(mike) { _fun61739_ip = 80; continue _fun61739 }
 78:
            mike = false;
 80:
            entity['inQuote'] = mike;
            return entity;
        }
    };
    mike['parse'] = verify;
    options['codeBlock'] = mike;
    mike = {};
    verify = oscar[tango];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    mike['order'] = verify;
    verify = ['<'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zulu = /^<@&(\d+)>/;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun61741: for(var _fun61741_ip = 0; ; ) switch(_fun61741_ip) {
 0:
            golf = argBaz;
            tango = argFoo;
            entity = tango[Symbol.iterator];
            tango = entity().next;
            mike = tango().value;
            mike = entity;
            options = undefined;
            zulu = mike === options;
            mike = undefined;
            if(zulu) { _fun61741_ip = 52; continue _fun61741 }
 27:
            report = tango().value;
            tango = entity;
            tango = tango === options;
            mike = undefined;
            zulu = tango;
            if(tango) { _fun61741_ip = 52; continue _fun61741 }
 46:
            mike = report;
            zulu = tango;
 52:
            if(zulu) { _fun61741_ip = 58; continue _fun61741 }
 55:
            entity.return();
 58:
            entity = golf.returnMentionIds;
            if(entity) { _fun61741_ip = 370; continue _fun61741 }
 70:
            entity = _closure1_slot19;
            report = entity.bind(options)(golf);
            zulu = null;
            entity = zulu != report;
            oscar = null;
            if(!entity) { _fun61741_ip = 114; continue _fun61741 }
 93:
            offset = _closure1_slot6;
            verify = offset.getRole;
            entity = report.id;
            oscar = verify.bind(offset)(entity, mike);
 114:
            if(!(zulu != oscar)) { _fun61741_ip = 274; continue _fun61741 }
 121:
            entity = {};
            verify = 'mention';
            entity['type'] = verify;
            golf = golf.channelId;
            entity['channelId'] = golf;
            golf = zulu != report;
            zulu = null;
            if(!golf) { _fun61741_ip = 154; continue _fun61741 }
 149:
            zulu = report.id;
 154:
            entity['guildId'] = zulu;
            entity['roleId'] = mike;
            zulu = oscar.color;
            entity['roleColor'] = zulu;
            verify = oscar.name;
            zulu = global;
            report = zulu.HermesInternal;
            report = report.concat;
            golf = '@';
            report = report.bind(golf)(verify);
            entity['roleName'] = report;
            report = oscar.color;
            entity['color'] = report;
            report = oscar.colorString;
            entity['colorString'] = report;
            report = {};
            verify = 'text';
            report['type'] = verify;
            oscar = oscar.name;
            zulu = zulu.HermesInternal;
            zulu = zulu.concat;
            zulu = zulu.bind(golf)(oscar);
            report['content'] = zulu;
            zulu = new Array(1);
            zulu[0] = report;
            entity['content'] = zulu;
            _fun61741_ip = 368; continue _fun61741;
 274:
            zulu = {};
            report = 'text';
            zulu['type'] = report;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 11;
            report = verify[tango];
            report = golf.bind(options)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = verify[tango];
            tango = golf.bind(options)(tango);
            tango = tango.t;
            tango = tango.YV4F/v;
            oscar = report.bind(oscar)(tango);
            tango = global;
            tango = tango.HermesInternal;
            report = tango.concat;
            tango = '@';
            tango = report.bind(tango)(oscar);
            zulu['content'] = tango;
            entity = zulu;
 368:
            return entity;
 370:
            entity = {};
            zulu = 'roleMention';
            entity['type'] = zulu;
            entity['id'] = mike;
            return entity;
        }
    };
    mike['parse'] = verify;
    options['roleMention'] = mike;
    mike = {};
    verify = oscar[tango];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    mike['order'] = verify;
    verify = ['<', '@'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo, argBar) { // Original name: match
        _fun61742: for(var _fun61742_ip = 0; ; ) switch(_fun61742_ip) {
 0:
            tango = argBar;
            zulu = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/;
            mike = zulu.exec;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            mike = null;
            report = mike == zulu;
            entity = null;
            if(report) { _fun61742_ip = 134; continue _fun61742 }
 42:
            report = 0;
            oscar = zulu[report];
            report = '@Clyde';
            if(!(report === oscar)) { _fun61742_ip = 128; continue _fun61742 }
 58:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 12;
            report = golf[report];
            verify = undefined;
            golf = oscar.bind(verify)(report);
            oscar = golf.getClydeEnabled;
            report = _closure1_slot19;
            report = report.bind(verify)(tango);
            verify = _closure1_slot5;
            options = verify.getChannel;
            tango = tango.channelId;
            tango = options.bind(verify)(tango);
            tango = oscar.bind(golf)(report, tango);
            mike = null;
            if(!tango) { _fun61742_ip = 131; continue _fun61742 }
 128:
            mike = zulu;
 131:
            entity = mike;
 134:
            return entity;
        }
    };
    mike['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun61743: for(var _fun61743_ip = 0; ; ) switch(_fun61743_ip) {
 0:
            tango = argFoo;
            offset = argBaz;
            entity = offset.returnMentionIds;
            mike = 1;
            if(entity) { _fun61743_ip = 521; continue _fun61743 }
 21:
            oscar = _closure1_slot7;
            report = oscar.getUser;
            zulu = tango[mike];
            zulu = report.bind(oscar)(zulu);
            golf = _closure1_slot5;
            oscar = golf.getChannel;
            report = offset.channelId;
            yankee = oscar.bind(golf)(report);
            oscar = null;
            golf = oscar != zulu;
            report = undefined;
            options = undefined;
            romeo = undefined;
            if(!golf) { _fun61743_ip = 187; continue _fun61743 }
 77:
            golf = zulu.id;
            verify = zulu.toString;
            verify = verify.bind(zulu)();
            if(!(oscar != yankee)) { _fun61743_ip = 181; continue _fun61743 }
 95:
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            foxtrot = 13;
            foxtrot = kilo[foxtrot];
            sizing = backup.bind(report)(foxtrot);
            kilo = sizing.getNickname;
            foxtrot = yankee.getGuildId;
            backup = foxtrot.bind(yankee)();
            foxtrot = offset.channelId;
            foxtrot = kilo.bind(sizing)(backup, foxtrot, zulu);
            if(!(oscar == foxtrot)) { _fun61743_ip = 178; continue _fun61743 }
 147:
            kilo = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 14;
            backup = sizing[backup];
            kilo = kilo.bind(report)(backup);
            backup = kilo.getName;
            foxtrot = backup.bind(kilo)(zulu);
 178:
            verify = foxtrot;
 181:
            options = verify;
            romeo = golf;
 187:
            zulu = oscar == zulu;
            if(!zulu) { _fun61743_ip = 210; continue _fun61743 }
 194:
            golf = 0;
            verify = tango[golf];
            golf = '@Clyde';
            zulu = golf === verify;
 210:
            if(!zulu) { _fun61743_ip = 254; continue _fun61743 }
 213:
            verify = _closure1_slot0;
            foxtrot = _closure1_slot2;
            golf = 12;
            golf = foxtrot[golf];
            foxtrot = verify.bind(report)(golf);
            verify = foxtrot.getClydeEnabled;
            golf = _closure1_slot19;
            golf = golf.bind(report)(offset);
            zulu = verify.bind(foxtrot)(golf, yankee);
 254:
            if(!zulu) { _fun61743_ip = 261; continue _fun61743 }
 257:
            romeo = _closure1_slot12;
 261:
            golf = tango[mike];
            verify = oscar != golf;
            if(!verify) { _fun61743_ip = 296; continue _fun61743 }
 272:
            backup = _closure1_slot8;
            foxtrot = backup.test;
            zulu = golf.trim;
            zulu = zulu.bind(golf)();
            verify = foxtrot.bind(backup)(zulu);
 296:
            if(!verify) { _fun61743_ip = 308; continue _fun61743 }
 299:
            zulu = offset.unknownUserMentionPlaceholder;
            if(zulu) { _fun61743_ip = 316; continue _fun61743 }
 308:
            zulu = 0;
            zulu = tango[zulu];
            _fun61743_ip = 393; continue _fun61743;
 316:
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 11;
            foxtrot = sizing[entity];
            foxtrot = kilo.bind(report)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            entity = sizing[entity];
            entity = kilo.bind(report)(entity);
            entity = entity.t;
            entity = entity.sKdZ6e;
            backup = foxtrot.bind(backup)(entity);
            entity = global;
            entity = entity.HermesInternal;
            foxtrot = entity.concat;
            entity = '@';
            zulu = foxtrot.bind(entity)(backup);
 393:
            entity = {};
            entity['userId'] = romeo;
            romeo = offset.channelId;
            entity['channelId'] = romeo;
            offset = offset.viewingChannelId;
            entity['viewingChannelId'] = offset;
            offset = oscar == yankee;
            report = undefined;
            if(offset) { _fun61743_ip = 438; continue _fun61743 }
 428:
            offset = yankee.getGuildId;
            report = offset.bind(yankee)();
 438:
            entity['guildId'] = report;
            report = null;
            if(!verify) { _fun61743_ip = 450; continue _fun61743 }
 447:
            report = golf;
 450:
            entity['parsedUserId'] = report;
            report = 2;
            report = tango[report];
            entity['roleName'] = report;
            report = {};
            golf = 'text';
            report['type'] = golf;
            if(!(oscar != options)) { _fun61743_ip = 503; continue _fun61743 }
 481:
            oscar = global;
            oscar = oscar.HermesInternal;
            golf = oscar.concat;
            oscar = '@';
            zulu = golf.bind(oscar)(options);
 503:
            report['content'] = zulu;
            zulu = new Array(1);
            zulu[0] = report;
            entity['content'] = zulu;
            return entity;
 521:
            zulu = tango[mike];
            entity = null;
            if(!(entity != zulu)) { _fun61743_ip = 551; continue _fun61743 }
 531:
            entity = {};
            zulu = 'mention';
            entity['type'] = zulu;
            mike = tango[mike];
            entity['id'] = mike;
            _fun61743_ip = 574; continue _fun61743;
 551:
            mike = {};
            zulu = 'mention';
            mike['type'] = zulu;
            zulu = 0;
            zulu = tango[zulu];
            mike['text'] = zulu;
            entity = mike;
 574:
            return entity;
        }
    };
    mike['parse'] = verify;
    options['mention'] = mike;
    mike = {};
    verify = oscar[tango];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    mike['order'] = verify;
    verify = ['@'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: match
        _fun61744: for(var _fun61744_ip = 0; ; ) switch(_fun61744_ip) {
 0:
            zulu = argBaz;
            entity = null;
            if(!(entity != zulu)) { _fun61744_ip = 19; continue _fun61744 }
 9:
            mike = '';
            entity = null;
            if(!(mike === zulu)) { _fun61744_ip = 47; continue _fun61744 }
 19:
            tango = /^(@silent(?![^\s]))/;
            zulu = tango.exec;
            mike = argFoo;
            entity = zulu.bind(tango)(mike);
 47:
            return entity;
        }
    };
    mike['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        entity = {};
        mike = 'silentPrefix';
        entity['type'] = mike;
        zulu = argFoo;
        mike = 0;
        mike = zulu[mike];
        entity['content'] = mike;
        return entity;
    };
    mike['parse'] = verify;
    options['silentPrefix'] = mike;
    mike = 15;
    verify = oscar[mike];
    verify = output.bind(entity)(verify);
    verify = verify.channelMention;
    options['channelMention'] = verify;
    verify = oscar[mike];
    verify = output.bind(entity)(verify);
    verify = verify.channelOrMessageUrl;
    options['channelOrMessageUrl'] = verify;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    mike = mike.mediaPostLink;
    options['mediaPostLink'] = mike;
    mike = 16;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    mike = mike.attachmentLink;
    options['attachmentLink'] = mike;
    mike = 17;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    mike = mike.shopLink;
    options['shopLink'] = mike;
    mike = {};
    verify = oscar[golf];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.text;
    verify = verify.order;
    mike['order'] = verify;
    verify = ['<'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zulu = /^<\\/((?:(?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?):([0-9]+)>/;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun61747: for(var _fun61747_ip = 0; ; ) switch(_fun61747_ip) {
 0:
            zulu = argFoo;
            options = argBaz;
            entity = options.returnMentionIds;
            if(entity) { _fun61747_ip = 215; continue _fun61747 }
 18:
            report = 1;
            tango = zulu[report];
            mike = tango.split;
            entity = ' ';
            tango = mike.bind(tango)(entity);
            mike = _closure1_slot4;
            entity = undefined;
            mike = mike.bind(entity)(tango);
            entity = mike.slice;
            yankee = entity.bind(mike)(report);
            golf = 2;
            verify = zulu[golf];
            tango = new Array(0);
            offset = 0;
            romeo = tango;
            entity = arraySpread(romeo, yankee, offset);
            mike = tango.map;
            entity = function(argFoo) {
                tango = _closure1_slot11;
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                mike = '';
                entity = argFoo;
                entity = zulu.bind(mike)(tango, entity);
                return entity;
            };
            mike = mike.bind(tango)(entity);
            entity = mike.join;
            oscar = '';
            tango = entity.bind(mike)(oscar);
            mike = global;
            entity = mike.HermesInternal;
            entity = entity.concat;
            tango = entity.bind(oscar)(verify, tango);
            entity = {};
            options = options.channelId;
            entity['channelId'] = options;
            golf = zulu[golf];
            entity['commandId'] = golf;
            golf = zulu[report];
            entity['commandName'] = golf;
            entity['commandKey'] = tango;
            tango = {};
            golf = 'text';
            tango['type'] = golf;
            report = zulu[report];
            mike = mike.HermesInternal;
            mike = mike.concat;
            mike = mike.bind(oscar)(report);
            tango['content'] = mike;
            mike = new Array(1);
            mike[0] = tango;
            entity['content'] = mike;
            return entity;
 215:
            entity = {};
            mike = 'commandMention';
            entity['type'] = mike;
            mike = 2;
            mike = zulu[mike];
            entity['id'] = mike;
            return entity;
        }
    };
    mike['parse'] = verify;
    options['commandMention'] = mike;
    mike = {};
    verify = oscar[tango];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    mike['order'] = verify;
    verify = [':'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        _fun61749: for(var _fun61749_ip = 0; ; ) switch(_fun61749_ip) {
 0:
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            golf = 18;
            entity = entity[golf];
            oscar = undefined;
            entity = mike.bind(oscar)(entity);
            tango = entity.EMOJI_NAME_RE;
            mike = tango.exec;
            entity = argFoo;
            mike = mike.bind(tango)(entity);
            report = null;
            tango = report != mike;
            entity = null;
            if(!tango) { _fun61749_ip = 104; continue _fun61749 }
 56:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            oscar = tango.bind(oscar)(zulu);
            tango = oscar.convertNameToSurrogate;
            zulu = 1;
            zulu = mike[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = '';
            entity = null;
            if(!(zulu !== tango)) { _fun61749_ip = 104; continue _fun61749 }
 101:
            entity = mike;
 104:
            return entity;
        }
    };
    mike['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        _fun61750: for(var _fun61750_ip = 0; ; ) switch(_fun61750_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 18;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            mike = report.convertNameToSurrogate;
            zulu = 1;
            entity = tango[zulu];
            mike = mike.bind(report)(entity);
            entity = {};
            report = 'text';
            entity['type'] = report;
            report = null;
            if(!(report != mike)) { _fun61750_ip = 70; continue _fun61750 }
 62:
            report = '';
            if(!(report === mike)) { _fun61750_ip = 97; continue _fun61750 }
 70:
            report = tango[zulu];
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = ':';
            mike = tango.bind(zulu)(report, zulu);
 97:
            entity['content'] = mike;
            return entity;
        }
    };
    mike['parse'] = verify;
    options['emoji'] = mike;
    mike = {};
    verify = oscar[tango];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    mike['order'] = verify;
    verify = ['<'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 19;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.soundmojiRawFormatRegex;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 19;
        entity = zulu[entity];
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        mike = argFoo;
        entity = argBaz;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['parse'] = verify;
    options['soundboard'] = mike;
    mike = {};
    verify = oscar[tango];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    mike['order'] = verify;
    verify = ['<'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zulu = /^<a?:(\w+):(\d+)>/;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        entity = {};
        mike = 'text';
        entity['type'] = mike;
        zulu = argFoo;
        mike = 1;
        tango = zulu[mike];
        mike = global;
        mike = mike.HermesInternal;
        zulu = mike.concat;
        mike = ':';
        mike = zulu.bind(mike)(tango, mike);
        entity['content'] = mike;
        return entity;
    };
    mike['parse'] = verify;
    options['customEmoji'] = mike;
    mike = {};
    verify = oscar[tango];
    verify = output.bind(entity)(verify);
    verify = verify.order;
    verify = verify - offset;
    mike['order'] = verify;
    verify = ['<'];
    mike['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 20;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.TIMESTAMP_REGEX;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = verify;
    verify = function(argFoo) { // Original name: parse
        _fun61756: for(var _fun61756_ip = 0; ; ) switch(_fun61756_ip) {
 0:
            golf = argFoo;
            entity = golf[Symbol.iterator];
            golf = entity().next;
            tango = golf().value;
            mike = entity;
            oscar = undefined;
            mike = mike === oscar;
            zulu = undefined;
            if(mike) { _fun61756_ip = 27; continue _fun61756 }
 24:
            zulu = tango;
 27:
            report = undefined;
            if(mike) { _fun61756_ip = 57; continue _fun61756 }
 32:
            options = golf().value;
            tango = entity;
            tango = tango === oscar;
            report = undefined;
            mike = tango;
            if(tango) { _fun61756_ip = 57; continue _fun61756 }
 51:
            report = options;
            mike = tango;
 57:
            tango = undefined;
            if(mike) { _fun61756_ip = 87; continue _fun61756 }
 62:
            options = golf().value;
            golf = entity;
            golf = golf === oscar;
            tango = undefined;
            mike = golf;
            if(golf) { _fun61756_ip = 87; continue _fun61756 }
 81:
            tango = options;
            mike = golf;
 87:
            if(mike) { _fun61756_ip = 93; continue _fun61756 }
 90:
            entity.return();
 93:
            mike = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 20;
            entity = golf[entity];
            mike = mike.bind(oscar)(entity);
            entity = mike.parseTimestamp;
            entity = entity.bind(mike)(report, tango);
            mike = null;
            if(!(mike != entity)) { _fun61756_ip = 146; continue _fun61756 }
 134:
            mike = 'timestamp';
            entity['type'] = mike;
            _fun61756_ip = 163; continue _fun61756;
 146:
            mike = {};
            tango = 'text';
            mike['type'] = tango;
            mike['content'] = zulu;
            entity = mike;
 163:
            return entity;
        }
    };
    mike['parse'] = verify;
    options['timestamp'] = mike;
    mike = {};
    verify = oscar[golf];
    verify = output.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.u;
    verify = verify.order;
    mike['order'] = verify;
    verify = ['~'];
    mike['requiredFirstCharacters'] = verify;
    verify = oscar[golf];
    yankee = output.bind(entity)(verify);
    offset = yankee.inlineRegex;
    verify = /^~~([\s\S]+?)~~(?!_)/;
    verify = offset.bind(yankee)(verify);
    mike['match'] = verify;
    golf = oscar[golf];
    golf = output.bind(entity)(golf);
    golf = golf.defaultRules;
    golf = golf.u;
    golf = golf.parse;
    mike['parse'] = golf;
    options['s'] = mike;
    mike = {};
    golf = oscar[tango];
    golf = output.bind(entity)(golf);
    golf = golf.order;
    mike['order'] = golf;
    golf = ['|'];
    mike['requiredFirstCharacters'] = golf;
    golf = function(argFoo) { // Original name: match
        zulu = _closure1_slot9;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: parse
        mike = argBaz;
        entity = {};
        tango = argFoo;
        zulu = 1;
        report = tango[zulu];
        tango = argBar;
        zulu = undefined;
        zulu = tango.bind(zulu)(report, mike);
        entity['content'] = zulu;
        mike = mike.channelId;
        entity['channelId'] = mike;
        return entity;
    };
    mike['parse'] = golf;
    options['spoiler'] = mike;
    mike = {};
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    tango = tango.order;
    mike['order'] = tango;
    tango = ['<'];
    mike['requiredFirstCharacters'] = tango;
    tango = function(argFoo) { // Original name: match
        zulu = _closure1_slot10;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['match'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun61760: for(var _fun61760_ip = 0; ; ) switch(_fun61760_ip) {
 0:
            zulu = argBaz;
            options = function(argFoo) { // Original name: makeNode
                _fun61761: for(var _fun61761_ip = 0; ; ) switch(_fun61761_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    zulu = entity == mike;
                    if(zulu) { _fun61761_ip = 37; continue _fun61761 }
 12:
                    zulu = {};
                    tango = 'text';
                    zulu['type'] = tango;
                    zulu['content'] = mike;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity = mike;
 37:
                    return entity;
                }
            };
            oscar = _closure1_slot3;
            report = undefined;
            mike = argFoo;
            entity = 3;
            oscar = oscar.bind(report)(mike, entity);
            entity = 1;
            mike = oscar[entity];
            entity = 2;
            oscar = oscar[entity];
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 21;
            verify = offset[entity];
            yankee = golf.bind(report)(verify);
            verify = yankee.staticRouteToTranslation;
            verify = verify.bind(yankee)(mike);
            entity = offset[entity];
            yankee = golf.bind(report)(entity);
            golf = yankee.staticRouteToItemString;
            entity = _closure1_slot19;
            romeo = entity.bind(report)(zulu);
            offset = null;
            foxtrot = offset == romeo;
            entity = undefined;
            if(foxtrot) { _fun61760_ip = 116; continue _fun61760 }
 111:
            entity = romeo.id;
 116:
            golf = golf.bind(yankee)(mike, oscar, entity);
            entity = {};
            yankee = offset != golf;
            offset = '';
            if(!yankee) { _fun61760_ip = 160; continue _fun61760 }
 136:
            yankee = global;
            yankee = yankee.HermesInternal;
            romeo = yankee.concat;
            yankee = ' › ';
            offset = romeo.bind(yankee)(golf);
 160:
            offset = verify + offset;
            offset = options.bind(report)(offset);
            entity['content'] = offset;
            verify = options.bind(report)(verify);
            entity['mainContent'] = verify;
            golf = options.bind(report)(golf);
            entity['itemContent'] = golf;
            entity['itemId'] = oscar;
            entity['id'] = mike;
            tango = _closure1_slot18;
            zulu = zulu.channelId;
            zulu = tango.bind(report)(zulu);
            entity['guildId'] = zulu;
            entity['channelId'] = mike;
            return entity;
        }
    };
    mike['parse'] = tango;
    options['staticRouteLink'] = mike;
    mike = 22;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    options['heading'] = mike;
    mike = 23;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    options['list'] = mike;
    mike = 24;
    mike = oscar[mike];
    mike = output.bind(entity)(mike);
    options['subtext'] = mike;
    mike = 25;
    tango = oscar[mike];
    golf = output.bind(entity)(tango);
    tango = new Array(2);
    tango[0] = options;
    options = 26;
    options = oscar[options];
    options = output.bind(entity)(options);
    tango[1] = options;
    kilo = golf.bind(entity)(tango);
    var _closure1_slot20 = kilo;
    sizing = 27;
    tango = oscar[sizing];
    options = output.bind(entity)(tango);
    golf = options.omit;
    tango = ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard'];
    backup = golf.bind(options)(kilo, tango);
    tango = oscar[sizing];
    options = output.bind(entity)(tango);
    golf = options.omit;
    tango = ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard'];
    foxtrot = golf.bind(options)(kilo, tango);
    tango = oscar[sizing];
    options = output.bind(entity)(tango);
    golf = options.omit;
    tango = ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard'];
    romeo = golf.bind(options)(kilo, tango);
    tango = oscar[sizing];
    verify = output.bind(entity)(tango);
    options = verify.omit;
    tango = oscar[mike];
    golf = output.bind(entity)(tango);
    tango = new Array(2);
    tango[0] = kilo;
    offset = {};
    yankee = {};
    result = function(argFoo, argBar, argBaz) { // Original name: match
        _fun61762: for(var _fun61762_ip = 0; ; ) switch(_fun61762_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            report = argBaz;
            entity = _closure1_slot20;
            mike = entity.codeBlock;
            entity = mike.match;
            entity = entity.bind(mike)(golf, oscar, report);
            mike = null;
            if(!(mike == entity)) { _fun61762_ip = 78; continue _fun61762 }
 41:
            zulu = _closure1_slot20;
            tango = zulu.inlineCode;
            zulu = tango.match;
            zulu = zulu.bind(tango)(golf, oscar, report);
            tango = mike != zulu;
            mike = undefined;
            if(!tango) { _fun61762_ip = 76; continue _fun61762 }
 73:
            mike = zulu;
 76:
            return mike;
 78:
            return entity;
        }
    };
    yankee['match'] = result;
    offset['inlineCode'] = yankee;
    tango[1] = offset;
    golf = golf.bind(entity)(tango);
    tango = ['blockQuote', 'codeBlock', 'br'];
    yankee = options.bind(verify)(golf, tango);
    tango = oscar[sizing];
    options = output.bind(entity)(tango);
    golf = options.omit;
    tango = ['codeBlock', 'br', 'blockQuote'];
    offset = golf.bind(options)(kilo, tango);
    tango = oscar[sizing];
    options = output.bind(entity)(tango);
    golf = options.omit;
    tango = ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard'];
    options = golf.bind(options)(kilo, tango);
    tango = oscar[sizing];
    verify = output.bind(entity)(tango);
    golf = verify.omit;
    tango = ['codeBlock', 'blockQuote', 'br'];
    verify = golf.bind(verify)(kilo, tango);
    tango = oscar[sizing];
    result = output.bind(entity)(tango);
    golf = result.omit;
    tango = ['codeBlock', 'br', 'inlineCode'];
    tango = golf.bind(result)(kilo, tango);
    mike = oscar[mike];
    golf = output.bind(entity)(mike);
    result = {};
    mike = {};
    update = -1;
    mike['order'] = update;
    update = function(argFoo, argBar) { // Original name: match
        _fun61763: for(var _fun61763_ip = 0; ; ) switch(_fun61763_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            mike = report.parseDepth;
            entity = null;
            if(!(entity != mike)) { _fun61763_ip = 34; continue _fun61763 }
 18:
            zulu = report.parseDepth;
            mike = 10;
            if(!(!(zulu > mike))) { _fun61763_ip = 246; continue _fun61763 }
 34:
            mike = report.highlightWord;
            if(!(entity != mike)) { _fun61763_ip = 244; continue _fun61763 }
 47:
            mike = report.highlightWord;
            mike = mike.length;
            zulu = 0;
            if(!(zulu !== mike)) { _fun61763_ip = 244; continue _fun61763 }
 67:
            tango = oscar.indexOf;
            mike = report.highlightWord;
            golf = tango.bind(oscar)(mike);
            mike = -1;
            if(!(mike !== golf)) { _fun61763_ip = 242; continue _fun61763 }
 96:
            tango = _closure1_slot21;
            offset = undefined;
            tango = tango.bind(offset)(oscar, golf);
            verify = 1;
            options = golf;
            golf = options;
            if(tango) { _fun61763_ip = 170; continue _fun61763 }
 123:
            foxtrot = oscar.indexOf;
            romeo = report.highlightWord;
            tango = options + verify;
            tango = foxtrot.bind(oscar)(romeo, tango);
            romeo = _closure1_slot21;
            romeo = romeo.bind(offset)(oscar, tango);
            golf = tango;
            if(romeo) { _fun61763_ip = 170; continue _fun61763 }
 160:
            options = tango;
            golf = options;
            if(mike !== tango) { _fun61763_ip = 123; continue _fun61763 }
 170:
            if(!(mike !== golf)) { _fun61763_ip = 240; continue _fun61763 }
 174:
            mike = oscar.substring;
            tango = mike.bind(oscar)(zulu, golf);
            zulu = oscar.substring;
            mike = report.highlightWord;
            mike = mike.length;
            mike = golf + mike;
            zulu = zulu.bind(oscar)(mike);
            mike = new Array(4);
            mike[0] = oscar;
            report = report.highlightWord;
            mike[1] = report;
            mike[2] = tango;
            mike[3] = zulu;
            return mike;
 240:
            return entity;
 242:
            return entity;
 244:
            return entity;
 246:
            return entity;
        }
    };
    mike['match'] = update;
    echo = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun61764: for(var _fun61764_ip = 0; ; ) switch(_fun61764_ip) {
 0:
            oscar = argFoo;
            options = argBar;
            mike = argBaz;
            zulu = mike.parseDepth;
            entity = null;
            tango = entity != zulu;
            entity = 0;
            if(!tango) { _fun61764_ip = 29; continue _fun61764 }
 26:
            entity = zulu;
 29:
            golf = {};
            yankee = golf;
            offset = mike;
            mike = copyDataProperties(yankee, offset);
            tango = 1;
            mike = entity + tango;
            entity = 'parseDepth';
            golf[entity] = mike;
            entity = 2;
            entity = oscar[entity];
            zulu = undefined;
            mike = options.bind(zulu)(entity, golf);
            entity = 3;
            entity = oscar[entity];
            zulu = options.bind(zulu)(entity, golf);
            entity = new Array(1);
            yankee = entity;
            offset = mike;
            verify = 0;
            mike = arraySpread(yankee, offset, verify);
            report = {};
            golf = 'highlight';
            report['type'] = golf;
            oscar = oscar[tango];
            report['content'] = oscar;
            entity[mike] = report;
            verify = mike + tango;
            yankee = entity;
            offset = zulu;
            mike = arraySpread(yankee, offset, verify);
            return entity;
        }
    };
    mike['parse'] = echo;
    result['highlightWord'] = mike;
    mike = new Array(2);
    mike[0] = result;
    sizing = oscar[sizing];
    result = output.bind(entity)(sizing);
    output = result.omit;
    sizing = ['url'];
    sizing = output.bind(result)(kilo, sizing);
    mike[1] = sizing;
    golf = golf.bind(entity)(mike);
    mike = {};
    mike['RULES'] = kilo;
    mike['CHANNEL_TOPIC_RULES'] = backup;
    mike['VOICE_CHANNEL_STATUS_RULES'] = foxtrot;
    mike['EMBED_TITLE_RULES'] = romeo;
    mike['INLINE_REPLY_RULES'] = yankee;
    mike['GUILD_VERIFICATION_FORM_RULES'] = offset;
    mike['GUILD_EVENT_RULES'] = verify;
    mike['PROFILE_BIO_RULES'] = options;
    mike['AUTO_MODERATION_SYSTEM_MESSAGE_RULES'] = golf;
    mike['NATIVE_SEARCH_RESULT_LINK_RULES'] = tango;
    tango = 28;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/MarkupRules.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();