// app/modules/channel_text_area/PlaintextResolvers.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot14;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot14;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: resolvePlaintextInlineVoid
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            foxtrot = argBar;
            romeo = argBaz;
            entity = argCorge;
            yankee = null;
            if(!(yankee == entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            entity = {};
 20:
            zulu = entity.allowUsers;
            offset = undefined;
            mike = offset === zulu;
            if(mike) { _fun00008_ip = 38; continue _fun00007 }
 35:
            mike = zulu;
 38:
            entity = entity.allowRoles;
            zulu = offset === entity;
            if(zulu) { _fun00008_ip = 54; continue _fun00007 }
 51:
            zulu = entity;
 54:
            oscar = 0;
            tango = report[oscar];
            entity = '@';
            if(!(entity !== tango)) { _fun00008_ip = 1109; continue _fun00007 }
 71:
            sizing = ':';
            if(!(sizing !== tango)) { _fun00008_ip = 864; continue _fun00007 }
 82:
            entity = '#';
            if(!(entity !== tango)) { _fun00008_ip = 92; continue _fun00007 }
 90:
            return yankee;
 92:
            tango = yankee == foxtrot;
            entity = null;
            if(tango) { _fun00008_ip = 862; continue _fun00007 }
 104:
            golf = report.length;
            tango = 3;
            if(!(golf > tango)) { _fun00008_ip = 148; continue _fun00007 }
 116:
            verify = 1;
            tango = report[verify];
            golf = '"';
            if(!(golf === tango)) { _fun00008_ip = 148; continue _fun00007 }
 131:
            tango = report.length;
            tango = tango - verify;
            tango = report[tango];
            if(!(golf !== tango)) { _fun00008_ip = 163; continue _fun00007 }
 148:
            golf = report.slice;
            tango = 1;
            result = golf.bind(report)(tango);
            _fun00008_ip = 220; continue _fun00007;
 163:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            tango = 11;
            tango = options[tango];
            options = golf.bind(offset)(tango);
            golf = options.unescapeChannelName;
            backup = report.slice;
            tango = report.length;
            verify = tango - verify;
            tango = 2;
            tango = backup.bind(report)(tango, verify);
            result = golf.bind(options)(tango);
 220:
            golf = _closure1_slot7;
            tango = golf.getTextChannelNameDisambiguations;
            backup = tango.bind(golf)(foxtrot);
            golf = _closure1_slot13;
            options = _closure1_slot1;
            tango = _closure1_slot2;
            kilo = 12;
            tango = tango[kilo];
            options = options.bind(offset)(tango);
            tango = options.keys;
            tango = tango.bind(options)(backup);
            verify = golf.bind(offset)(tango);
            golf = verify.bind(offset)();
            tango = golf.done;
            options = golf;
            if(tango) { _fun00008_ip = 371; continue _fun00007 }
 292:
            golf = options.value;
            tango = backup[golf];
            tango = tango.name;
            if(!(tango !== result)) { _fun00008_ip = 327; continue _fun00007 }
 310:
            echo = verify.bind(offset)();
            tango = echo.done;
            options = echo;
            if(tango) { _fun00008_ip = 371; continue _fun00007 }
 325:
            _fun00008_ip = 292; continue _fun00007;
 327:
            tango = {};
            options = 'channelMention';
            tango['type'] = options;
            tango['channelId'] = golf;
            options = {};
            golf = '';
            options['text'] = golf;
            golf = new Array(1);
            golf[0] = options;
            tango['children'] = golf;
            entity = tango;
            _fun00008_ip = 862; continue _fun00007;
 371:
            golf = _closure1_slot13;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 13;
            tango = verify[tango];
            tango = options.bind(offset)(tango);
            tango = tango.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            echo = golf.bind(offset)(tango);
            golf = echo.bind(offset)();
            tango = golf.done;
            backup = golf;
            verify = undefined;
            options = undefined;
            golf = undefined;
            if(tango) { _fun00008_ip = 616; continue _fun00007 }
 430:
            control = backup.value;
            tango = _closure1_slot8;
            update = golf;
            if(!(control !== tango)) { _fun00008_ip = 595; continue _fun00007 }
 449:
            source = _closure1_slot13;
            vacuum = _closure1_slot7;
            tango = vacuum.getChannels;
            tango = tango.bind(vacuum)(foxtrot);
            tango = tango[control];
            vacuum = source.bind(offset)(tango);
            source = vacuum.bind(offset)();
            tango = source.done;
            control = source;
            verify = control;
            options = vacuum;
            update = golf;
            if(tango) { _fun00008_ip = 595; continue _fun00007 }
 501:
            tango = control.value;
            source = tango.channel;
            tango = source.name;
            if(!(tango !== result)) { _fun00008_ip = 546; continue _fun00007 }
 520:
            sequence = vacuum.bind(offset)();
            tango = sequence.done;
            control = sequence;
            verify = control;
            options = vacuum;
            update = source;
            if(tango) { _fun00008_ip = 595; continue _fun00007 }
 544:
            _fun00008_ip = 501; continue _fun00007;
 546:
            tango = {};
            control = 'channelMention';
            tango['type'] = control;
            source = source.id;
            tango['channelId'] = source;
            control = {};
            source = '';
            control['text'] = source;
            source = new Array(1);
            source[0] = control;
            tango['children'] = source;
            entity = tango;
            _fun00008_ip = 862; continue _fun00007;
 595:
            source = echo.bind(offset)();
            tango = source.done;
            golf = update;
            backup = source;
            if(!tango) { _fun00008_ip = 430; continue _fun00007 }
 616:
            golf = _closure1_slot5;
            tango = golf.getActiveJoinedThreadsForGuild;
            backup = tango.bind(golf)(foxtrot);
            golf = _closure1_slot13;
            options = _closure1_slot1;
            tango = _closure1_slot2;
            tango = tango[kilo];
            options = options.bind(offset)(tango);
            tango = options.keys;
            tango = tango.bind(options)(backup);
            verify = golf.bind(offset)(tango);
            golf = verify.bind(offset)();
            tango = golf.done;
            options = golf;
            golf = undefined;
            entity = null;
            if(tango) { _fun00008_ip = 862; continue _fun00007 }
 689:
            control = options.value;
            echo = _closure1_slot13;
            update = _closure1_slot1;
            tango = _closure1_slot2;
            tango = tango[kilo];
            source = update.bind(offset)(tango);
            update = source.keys;
            tango = backup[control];
            tango = update.bind(source)(tango);
            source = echo.bind(offset)(tango);
            echo = source.bind(offset)();
            tango = echo.done;
            update = echo;
            if(tango) { _fun00008_ip = 842; continue _fun00007 }
 749:
            echo = update.value;
            tango = backup[control];
            tango = tango[echo];
            echo = tango.channel;
            tango = echo.name;
            if(!(tango !== result)) { _fun00008_ip = 796; continue _fun00007 }
 776:
            vacuum = source.bind(offset)();
            tango = vacuum.done;
            update = vacuum;
            golf = echo;
            if(tango) { _fun00008_ip = 842; continue _fun00007 }
 794:
            _fun00008_ip = 749; continue _fun00007;
 796:
            tango = {};
            update = 'channelMention';
            tango['type'] = update;
            echo = echo.id;
            tango['channelId'] = echo;
            update = {};
            echo = '';
            update['text'] = echo;
            echo = new Array(1);
            echo[0] = update;
            tango['children'] = echo;
            entity = tango;
            _fun00008_ip = 862; continue _fun00007;
 842:
            echo = verify.bind(offset)();
            tango = echo.done;
            options = echo;
            entity = null;
            if(!tango) { _fun00008_ip = 689; continue _fun00007 }
 862:
            return entity;
 864:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            entity = 14;
            entity = options[entity];
            entity = golf.bind(offset)(entity);
            golf = entity.EMOJI_NAME_RE;
            entity = golf.exec;
            options = entity.bind(golf)(report);
            golf = yankee == options;
            entity = null;
            if(golf) { _fun00008_ip = 1107; continue _fun00007 }
 916:
            golf = 1;
            golf = options[golf];
            options = _closure1_slot4;
            tango = options.getDisambiguatedEmojiContext;
            options = tango.bind(options)(foxtrot);
            tango = options.getCustomEmoji;
            tango = tango.bind(options)();
            options = yankee != tango;
            entity = null;
            if(!options) { _fun00008_ip = 1107; continue _fun00007 }
 960:
            options = golf in tango;
            entity = null;
            if(!options) { _fun00008_ip = 1107; continue _fun00007 }
 972:
            options = tango[golf];
            tango = {};
            golf = 'customEmoji';
            tango['type'] = golf;
            golf = {};
            verify = options.id;
            golf['emojiId'] = verify;
            verify = 'require_colons';
            verify = verify in options;
            if(!verify) { _fun00008_ip = 1018; continue _fun00007 }
 1009:
            verify = options.require_colons;
            if(verify) { _fun00008_ip = 1025; continue _fun00007 }
 1018:
            verify = options.name;
            _fun00008_ip = 1049; continue _fun00007;
 1025:
            kilo = options.name;
            backup = global;
            backup = backup.HermesInternal;
            backup = backup.concat;
            verify = backup.bind(sizing)(kilo, sizing);
 1049:
            golf['name'] = verify;
            verify = options.animated;
            options = true;
            options = options === verify;
            golf['animated'] = options;
            options = false;
            golf['jumboable'] = options;
            tango['emoji'] = golf;
            options = {};
            golf = '';
            options['text'] = golf;
            golf = new Array(1);
            golf[0] = options;
            tango['children'] = golf;
            entity = tango;
 1107:
            return entity;
 1109:
            entity = report.slice;
            tango = 1;
            options = entity.bind(report)(tango);
            report = options.split;
            entity = '#';
            golf = 2;
            report = report.bind(options)(entity, golf);
            entity = _closure1_slot3;
            entity = entity.bind(offset)(report, golf);
            options = entity[oscar];
            golf = entity[tango];
            tango = yankee != foxtrot;
            entity = null;
            if(!tango) { _fun00008_ip = 1184; continue _fun00007 }
 1170:
            report = _closure1_slot10;
            tango = report.getGuild;
            entity = tango.bind(report)(foxtrot);
 1184:
            report = _closure1_slot0;
            backup = _closure1_slot2;
            tango = 10;
            tango = backup[tango];
            report = report.bind(offset)(tango);
            tango = report.getClydeExperimentEnabled;
            report = tango.bind(report)(entity);
            if(!zulu) { _fun00008_ip = 1306; continue _fun00007 }
 1218:
            if(!(yankee == golf)) { _fun00008_ip = 1306; continue _fun00007 }
 1222:
            if(!(yankee != entity)) { _fun00008_ip = 1306; continue _fun00007 }
 1226:
            zulu = global;
            tango = zulu.Object;
            zulu = tango.values;
            kilo = _closure1_slot10;
            backup = kilo.getRoles;
            entity = entity.id;
            entity = backup.bind(kilo)(entity);
            tango = zulu.bind(tango)(entity);
            entity = tango.length;
            entity = oscar < entity;
            oscar = 0;
            if(!entity) { _fun00008_ip = 1306; continue _fun00007 }
 1278:
            zulu = tango[oscar];
            entity = zulu.name;
            if(!(options !== entity)) { _fun00008_ip = 1684; continue _fun00007 }
 1294:
            oscar = oscar + 1;
            entity = tango.length;
            if(oscar < entity) { _fun00008_ip = 1278; continue _fun00007 }
 1306:
            entity = null;
            if(!mike) { _fun00008_ip = 1729; continue _fun00007 }
 1314:
            tango = yankee != romeo;
            mike = null;
            if(!tango) { _fun00008_ip = 1337; continue _fun00007 }
 1323:
            oscar = _closure1_slot6;
            tango = oscar.getChannel;
            mike = tango.bind(oscar)(romeo);
 1337:
            tango = yankee != mike;
            entity = null;
            if(!tango) { _fun00008_ip = 1729; continue _fun00007 }
 1349:
            tango = mike.isPrivate;
            oscar = tango.bind(mike)();
            tango = _closure1_slot13;
            if(oscar) { _fun00008_ip = 1572; continue _fun00007 }
 1369:
            romeo = _closure1_slot9;
            oscar = romeo.getMembers;
            oscar = oscar.bind(romeo)(foxtrot);
            backup = tango.bind(offset)(oscar);
            romeo = backup.bind(offset)();
            oscar = romeo.done;
            foxtrot = romeo;
            if(oscar) { _fun00008_ip = 1491; continue _fun00007 }
 1404:
            oscar = foxtrot.value;
            romeo = oscar.userId;
            oscar = _closure1_slot16;
            oscar = oscar.bind(offset)(options, golf, romeo);
            if(oscar) { _fun00008_ip = 1445; continue _fun00007 }
 1428:
            kilo = backup.bind(offset)();
            oscar = kilo.done;
            foxtrot = kilo;
            if(oscar) { _fun00008_ip = 1491; continue _fun00007 }
 1443:
            _fun00008_ip = 1404; continue _fun00007;
 1445:
            oscar = {};
            foxtrot = 'userMention';
            oscar['type'] = foxtrot;
            oscar['userId'] = romeo;
            foxtrot = {};
            romeo = '';
            foxtrot['text'] = romeo;
            romeo = new Array(1);
            romeo[0] = foxtrot;
            oscar['children'] = romeo;
            entity = oscar;
            _fun00008_ip = 1729; continue _fun00007;
 1491:
            entity = null;
            if(!report) { _fun00008_ip = 1729; continue _fun00007 }
 1499:
            oscar = _closure1_slot16;
            report = _closure1_slot12;
            report = oscar.bind(offset)(options, golf, report);
            entity = null;
            if(!report) { _fun00008_ip = 1729; continue _fun00007 }
 1522:
            report = {};
            oscar = 'userMention';
            report['type'] = oscar;
            oscar = _closure1_slot12;
            report['userId'] = oscar;
            romeo = {};
            oscar = '';
            romeo['text'] = oscar;
            oscar = new Array(1);
            oscar[0] = romeo;
            report['children'] = oscar;
            entity = report;
            _fun00008_ip = 1729; continue _fun00007;
 1572:
            mike = mike.recipients;
            oscar = tango.bind(offset)(mike);
            tango = oscar.bind(offset)();
            mike = tango.done;
            report = tango;
            entity = null;
            if(mike) { _fun00008_ip = 1729; continue _fun00007 }
 1603:
            tango = report.value;
            mike = _closure1_slot16;
            mike = mike.bind(offset)(options, golf, tango);
            if(mike) { _fun00008_ip = 1641; continue _fun00007 }
 1622:
            romeo = oscar.bind(offset)();
            mike = romeo.done;
            report = romeo;
            entity = null;
            if(mike) { _fun00008_ip = 1729; continue _fun00007 }
 1639:
            _fun00008_ip = 1603; continue _fun00007;
 1641:
            mike = {};
            report = 'userMention';
            mike['type'] = report;
            mike['userId'] = tango;
            report = {};
            tango = '';
            report['text'] = tango;
            tango = new Array(1);
            tango[0] = report;
            mike['children'] = tango;
            entity = mike;
            _fun00008_ip = 1729; continue _fun00007;
 1684:
            mike = {};
            tango = 'roleMention';
            mike['type'] = tango;
            zulu = zulu.id;
            mike['roleId'] = zulu;
            tango = {};
            zulu = '';
            tango['text'] = zulu;
            zulu = new Array(1);
            zulu[0] = tango;
            mike['children'] = zulu;
            entity = mike;
 1729:
            return entity;
        }
    };
    var _closure1_slot15 = tango;
    entity = function(argFoo, argBar, argBaz) { // Original name: matchesUserId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            zulu = argBaz;
            tango = _closure1_slot11;
            entity = tango.getUser;
            report = entity.bind(tango)(zulu);
            tango = null;
            entity = tango != report;
            if(!entity) { _fun00010_ip = 112; continue _fun00009 }
 36:
            mike = _closure1_slot12;
            mike = zulu === mike;
            if(!mike) { _fun00010_ip = 65; continue _fun00009 }
 47:
            zulu = golf.toLowerCase;
            options = zulu.bind(golf)();
            zulu = 'clyde';
            mike = zulu === options;
 65:
            if(mike) { _fun00010_ip = 109; continue _fun00009 }
 68:
            zulu = report.username;
            zulu = zulu === golf;
            if(!zulu) { _fun00010_ip = 106; continue _fun00009 }
 80:
            report = report.discriminator;
            golf = tango != oscar;
            tango = '0';
            if(!golf) { _fun00010_ip = 102; continue _fun00009 }
 99:
            tango = oscar;
 102:
            zulu = report === tango;
 106:
            mike = zulu;
 109:
            entity = mike;
 112:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    verify = golf[report];
    verify = options.bind(entity)(verify);
    var _closure1_slot7 = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot8 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.CLYDE_AI_USER_ID;
    var _closure1_slot12 = report;
    report = 15;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/channel_text_area/PlaintextResolvers.tsx';
    report = oscar.bind(golf)(report);
    zulu['resolvePlaintextInlineVoid'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: resolveApplicationCommandOption
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golf = _closure1_slot15;
            report = undefined;
            yankee = argFoo;
            offset = argBar;
            verify = argBaz;
            options = argCorge;
            romeo = undefined;
            tango = romeo[golf](yankee, offset, verify, options, golf);
            entity = null;
            zulu = entity == tango;
            if(zulu) { _fun00012_ip = 67; continue _fun00011 }
 36:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 9;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.voidToOptionValue;
            entity = mike.bind(zulu)(tango);
 67:
            return entity;
        }
    };
    zulu['resolveApplicationCommandOption'] = mike;
    return entity;
})();