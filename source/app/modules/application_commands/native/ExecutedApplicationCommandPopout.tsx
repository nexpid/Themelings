// app/modules/application_commands/native/ExecutedApplicationCommandPopout.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
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
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot28;
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
            golf = _closure1_slot28;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot27 = entity;
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
    var _closure1_slot28 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityIndicator;
    var _closure1_slot5 = golf;
    tango = tango.NativeModules;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.Fonts;
    golf = tango.MessageTypes;
    var _closure1_slot12 = golf;
    tango = tango.WHITESPACE_RE;
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AppLauncherRouteName;
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.CHANNEL_SENTINEL;
    var _closure1_slot15 = golf;
    golf = tango.COMMAND_SENTINEL;
    var _closure1_slot16 = golf;
    tango = tango.MENTION_SENTINEL;
    var _closure1_slot17 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot18 = tango;
    tango = 11;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot19 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot20 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot21 = tango;
    offset = 12;
    tango = oscar[offset];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    romeo = 16;
    verify = {'paddingVertical': 8, 'paddingHorizontal': 16, 'gap': 16};
    tango['container'] = verify;
    verify = {};
    verify['padding'] = romeo;
    tango['activityIndicator'] = verify;
    verify = {};
    foxtrot = foxtrot.PRIMARY_SEMIBOLD;
    verify['fontFamily'] = foxtrot;
    tango['commandUserText'] = verify;
    foxtrot = 'center';
    verify = {'width': 18, 'height': 18, 'borderRadius': 9, 'alignSelf': 'center'};
    tango['applicationIcon'] = verify;
    verify = {};
    verify['textAlignVertical'] = foxtrot;
    tango['applicationNameText'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tango['commandOptionText'] = verify;
    verify = {};
    offset = 13;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_BRAND;
    verify['color'] = foxtrot;
    tango['commandOptionMentionText'] = verify;
    verify = {};
    verify['fontSize'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.HEADER_PRIMARY;
    verify['color'] = offset;
    tango['commandText'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot22 = tango;
    tango = function(argFoo) { // Original name: getCommandOptionComponents
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            mike = tango.option;
            var _closure2_slot0 = mike;
            backup = tango.channel;
            var _closure2_slot1 = backup;
            foxtrot = tango.guild;
            romeo = tango.messageId;
            entity = tango.parentOptionName;
            output = tango.commandOptionSpec;
            yankee = tango.styles;
            var _closure2_slot2 = yankee;
            offset = tango.analyticsLocations;
            sequence = ' ';
            tango = entity + sequence;
            entity = mike.name;
            verify = tango + entity;
            kilo = new Array(0);
            oscar = null;
            entity = oscar == output;
            options = undefined;
            golf = undefined;
            if(entity) { _fun00008_ip = 102; continue _fun00007 }
 96:
            golf = output.name_localized;
 102:
            if(!(oscar == golf)) { _fun00008_ip = 111; continue _fun00007 }
 106:
            golf = mike.name;
 111:
            entity = mike.value;
            if(!(oscar == entity)) { _fun00008_ip = 140; continue _fun00007 }
 120:
            entity = global;
            entity = entity.HermesInternal;
            entity = entity.concat;
            tango = entity.bind(sequence)(golf);
            _fun00008_ip = 163; continue _fun00007;
 140:
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            entity = ':';
            tango = report.bind(sequence)(golf, entity);
 163:
            report = mike.type;
            sizing = _closure1_slot0;
            entity = _closure1_slot3;
            source = 14;
            entity = entity[source];
            entity = sizing.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.SUB_COMMAND;
            if(!(report !== entity)) { _fun00008_ip = 1147; continue _fun00007 }
 210:
            report = mike.type;
            sizing = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = sizing.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.SUB_COMMAND_GROUP;
            if(!(report !== entity)) { _fun00008_ip = 1147; continue _fun00007 }
 251:
            report = function(argFoo, argBar) { // Original name: getUserComponent
                verify = argFoo;
                var _closure3_slot0 = verify;
                report = _closure1_slot20;
                zulu = _closure1_slot0;
                options = _closure1_slot3;
                mike = 15;
                mike = options[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                zulu = mike.LegacyText;
                mike = {};
                golf = argBar;
                golf = golf.commandOptionMentionText;
                mike['style'] = golf;
                entity = function() { // Original name: onPress
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot3;
                        entity = 16;
                        mike = tango[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        mike = report.hideActionSheet;
                        mike = mike.bind(report)();
                        mike = 17;
                        mike = tango[mike];
                        zulu = zulu.bind(entity)(mike);
                        mike = {};
                        tango = _closure3_slot0;
                        tango = tango.id;
                        mike['userId'] = tango;
                        oscar = _closure2_slot1;
                        tango = null;
                        oscar = tango == oscar;
                        tango = undefined;
                        if(oscar) { _fun00010_ip = 92; continue _fun00009 }
 83:
                        report = _closure2_slot1;
                        tango = report.id;
 92:
                        mike['channelId'] = tango;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    }
                };
                mike['onPress'] = entity;
                golf = _closure1_slot17;
                entity = new Array(2);
                entity[0] = golf;
                golf = _closure1_slot1;
                oscar = 18;
                oscar = options[oscar];
                options = golf.bind(tango)(oscar);
                golf = options.getUserTag;
                oscar = {};
                offset = 'never';
                oscar['decoration'] = offset;
                oscar = golf.bind(options)(verify, oscar);
                entity[1] = oscar;
                mike['children'] = entity;
                entity = _closure2_slot0;
                golf = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                oscar = entity.concat;
                entity = 'optionValue-';
                entity = oscar.bind(entity)(golf);
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            result = function(argFoo) { // Original name: getRoleComponent
                report = _closure1_slot20;
                mike = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 15;
                entity = zulu[entity];
                tango = undefined;
                entity = mike.bind(tango)(entity);
                zulu = entity.LegacyText;
                mike = {};
                golf = _closure2_slot2;
                golf = golf.commandOptionMentionText;
                mike['style'] = golf;
                golf = _closure1_slot17;
                oscar = new Array(2);
                oscar[0] = golf;
                golf = argFoo;
                golf = golf.name;
                oscar[1] = golf;
                mike['children'] = oscar;
                entity = _closure2_slot0;
                golf = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                oscar = entity.concat;
                entity = 'optionValue-';
                entity = oscar.bind(entity)(golf);
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            sizing = function(argFoo) { // Original name: getCommandValueText
                report = _closure1_slot19;
                mike = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 19;
                entity = zulu[entity];
                tango = undefined;
                entity = mike.bind(tango)(entity);
                zulu = entity.Text;
                mike = {'variant': 'text-sm/medium', 'color': 'header-primary'};
                entity = argFoo;
                mike['children'] = entity;
                entity = _closure2_slot0;
                golf = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                oscar = entity.concat;
                entity = 'optionValue-';
                entity = oscar.bind(entity)(golf);
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            entity = mike.value;
            if(!(oscar != entity)) { _fun00008_ip = 1145; continue _fun00007 }
 284:
            echo = mike.type;
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.USER;
            if(!(entity !== echo)) { _fun00008_ip = 842; continue _fun00007 }
 325:
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.CHANNEL;
            if(!(entity !== echo)) { _fun00008_ip = 697; continue _fun00007 }
 361:
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.ROLE;
            if(!(entity !== echo)) { _fun00008_ip = 631; continue _fun00007 }
 397:
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.MENTIONABLE;
            if(!(entity !== echo)) { _fun00008_ip = 535; continue _fun00007 }
 430:
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.ATTACHMENT;
            update = null;
            if(!(entity === echo)) { _fun00008_ip = 886; continue _fun00007 }
 468:
            control = _closure1_slot0;
            vacuum = _closure1_slot3;
            entity = 20;
            echo = vacuum[entity];
            echo = control.bind(options)(echo);
            source = echo.intl;
            echo = source.string;
            entity = vacuum[entity];
            entity = control.bind(options)(entity);
            entity = entity.t;
            entity = entity.nONJVV;
            entity = echo.bind(source)(entity);
            update = sizing.bind(options)(entity);
            _fun00008_ip = 886; continue _fun00007;
 535:
            echo = mike.value;
            entity = echo.toString;
            control = entity.bind(echo)();
            echo = oscar != foxtrot;
            entity = undefined;
            if(!echo) { _fun00008_ip = 579; continue _fun00007 }
 558:
            vacuum = _closure1_slot8;
            source = vacuum.getRole;
            echo = foxtrot.id;
            entity = source.bind(vacuum)(echo, control);
 579:
            if(!(oscar == entity)) { _fun00008_ip = 621; continue _fun00007 }
 583:
            source = _closure1_slot10;
            echo = source.getUser;
            echo = echo.bind(source)(control);
            source = oscar != echo;
            update = null;
            if(!source) { _fun00008_ip = 886; continue _fun00007 }
 610:
            update = report.bind(options)(echo, yankee);
            _fun00008_ip = 886; continue _fun00007;
 621:
            update = result.bind(options)(entity);
            _fun00008_ip = 886; continue _fun00007;
 631:
            echo = mike.value;
            entity = echo.toString;
            vacuum = entity.bind(echo)();
            echo = oscar != foxtrot;
            entity = undefined;
            if(!echo) { _fun00008_ip = 675; continue _fun00007 }
 654:
            control = _closure1_slot8;
            source = control.getRole;
            echo = foxtrot.id;
            entity = source.bind(control)(echo, vacuum);
 675:
            echo = oscar != entity;
            update = null;
            if(!echo) { _fun00008_ip = 886; continue _fun00007 }
 687:
            update = result.bind(options)(entity);
            _fun00008_ip = 886; continue _fun00007;
 697:
            result = mike.value;
            entity = result.toString;
            echo = entity.bind(result)();
            result = _closure1_slot7;
            entity = result.getChannel;
            control = entity.bind(result)(echo);
            entity = oscar != control;
            update = null;
            if(!entity) { _fun00008_ip = 886; continue _fun00007 }
 737:
            source = _closure1_slot20;
            result = _closure1_slot0;
            echo = _closure1_slot3;
            entity = 15;
            entity = echo[entity];
            entity = result.bind(options)(entity);
            echo = entity.LegacyText;
            result = {};
            entity = yankee.commandOptionMentionText;
            result['style'] = entity;
            vacuum = _closure1_slot15;
            entity = new Array(2);
            entity[0] = vacuum;
            control = control.name;
            entity[1] = control;
            result['children'] = entity;
            vacuum = mike.name;
            entity = global;
            entity = entity.HermesInternal;
            control = entity.concat;
            entity = 'optionValue-';
            entity = control.bind(entity)(vacuum);
            update = source.bind(options)(echo, result, entity);
            _fun00008_ip = 886; continue _fun00007;
 842:
            result = mike.value;
            entity = result.toString;
            echo = entity.bind(result)();
            result = _closure1_slot10;
            entity = result.getUser;
            entity = entity.bind(result)(echo);
            result = oscar != entity;
            update = null;
            if(!result) { _fun00008_ip = 886; continue _fun00007 }
 880:
            update = report.bind(options)(entity, yankee);
 886:
            entity = oscar == update;
            echo = true;
            if(!entity) { _fun00008_ip = 1015; continue _fun00007 }
 895:
            entity = oscar == output;
            result = undefined;
            if(entity) { _fun00008_ip = 936; continue _fun00007 }
 904:
            source = output.choices;
            entity = oscar == source;
            result = undefined;
            if(entity) { _fun00008_ip = 936; continue _fun00007 }
 919:
            report = source.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.value;
                entity = _closure2_slot0;
                entity = entity.value;
                entity = mike === entity;
                return entity;
            };
            result = report.bind(source)(entity);
 936:
            report = mike.value;
            entity = report.toString;
            report = entity.bind(report)();
            if(!(oscar != result)) { _fun00008_ip = 972; continue _fun00007 }
 954:
            entity = result.name_localized;
            if(!(oscar == entity)) { _fun00008_ip = 969; continue _fun00007 }
 964:
            entity = result.name;
 969:
            report = entity;
 972:
            entity = report.length;
            result = 0;
            entity = entity > result;
            if(!entity) { _fun00008_ip = 1007; continue _fun00007 }
 986:
            control = _closure1_slot13;
            source = control.test;
            result = report[result];
            result = source.bind(control)(result);
            entity = !result;
 1007:
            update = sizing.bind(options)(report);
            echo = entity;
 1015:
            report = kilo.push;
            result = _closure1_slot20;
            entity = _closure1_slot4;
            sizing = entity.Fragment;
            entity = {};
            vacuum = _closure1_slot19;
            control = _closure1_slot0;
            config = _closure1_slot3;
            source = 15;
            source = config[source];
            source = control.bind(options)(source);
            control = source.LegacyText;
            source = {};
            if(!echo) { _fun00008_ip = 1073; continue _fun00007 }
 1070:
            echo = sequence;
 1073:
            echo = tango + echo;
            source['children'] = echo;
            config = mike.name;
            echo = global;
            echo = echo.HermesInternal;
            sequence = echo.concat;
            echo = 'optionKey-';
            echo = sequence.bind(echo)(config);
            source = vacuum.bind(options)(control, source, echo);
            echo = new Array(2);
            echo[0] = source;
            echo[1] = update;
            entity['children'] = echo;
            entity = result.bind(options)(sizing, entity, verify);
            entity = report.bind(kilo)(entity);
 1145:
            return kilo;
 1147:
            report = kilo.push;
            result = _closure1_slot19;
            entity = _closure1_slot4;
            sizing = entity.Fragment;
            entity = {};
            update = _closure1_slot0;
            source = _closure1_slot3;
            echo = 15;
            echo = source[echo];
            echo = update.bind(options)(echo);
            source = echo.LegacyText;
            update = {};
            update['children'] = tango;
            vacuum = mike.name;
            tango = global;
            echo = tango.HermesInternal;
            control = echo.concat;
            echo = 'optionKey-';
            echo = control.bind(echo)(vacuum);
            echo = result.bind(options)(source, update, echo);
            entity['children'] = echo;
            entity = result.bind(options)(sizing, entity, verify);
            entity = report.bind(kilo)(entity);
            report = mike.options;
            entity = kilo;
            if(!(oscar != report)) { _fun00008_ip = 1444; continue _fun00007 }
 1266:
            report = tango.Object;
            tango = report.fromEntries;
            result = oscar == output;
            sizing = undefined;
            if(result) { _fun00008_ip = 1292; continue _fun00007 }
 1287:
            sizing = output.options;
 1292:
            if(!(oscar == sizing)) { _fun00008_ip = 1300; continue _fun00007 }
 1296:
            sizing = new Array(0);
 1300:
            oscar = sizing.map;
            zulu = function(argFoo) {
                mike = argFoo;
                zulu = mike.name;
                entity = new Array(2);
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            };
            zulu = oscar.bind(sizing)(zulu);
            oscar = tango.bind(report)(zulu);
            zulu = _closure1_slot27;
            mike = mike.options;
            report = zulu.bind(options)(mike);
            zulu = report.bind(options)();
            mike = zulu.done;
            tango = kilo;
            entity = tango;
            if(mike) { _fun00008_ip = 1444; continue _fun00007 }
 1354:
            output = zulu.value;
            kilo = tango.concat;
            sizing = _closure1_slot23;
            mike = {};
            mike['option'] = output;
            mike['channel'] = backup;
            mike['guild'] = foxtrot;
            mike['messageId'] = romeo;
            mike['parentOptionName'] = verify;
            output = output.name;
            output = oscar[output];
            mike['commandOptionSpec'] = output;
            mike['styles'] = yankee;
            mike['analyticsLocations'] = offset;
            mike = sizing.bind(options)(mike);
            tango = kilo.bind(tango)(mike);
            sizing = report.bind(options)();
            mike = sizing.done;
            zulu = sizing;
            entity = tango;
            if(!mike) { _fun00008_ip = 1354; continue _fun00007 }
 1444:
            return entity;
        }
    };
    var _closure1_slot23 = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: getCommandCopyText
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            offset = argBar;
            verify = argBaz;
            foxtrot = argCorge;
            var _closure2_slot0 = mike;
            yankee = new Array(0);
            oscar = null;
            entity = oscar == foxtrot;
            options = undefined;
            romeo = undefined;
            if(entity) { _fun00012_ip = 41; continue _fun00011 }
 35:
            romeo = foxtrot.name_localized;
 41:
            if(!(oscar == romeo)) { _fun00012_ip = 50; continue _fun00011 }
 45:
            romeo = mike.name;
 50:
            entity = mike.value;
            if(!(oscar == entity)) { _fun00012_ip = 83; continue _fun00011 }
 59:
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            entity = '';
            tango = tango.bind(entity)(romeo);
            _fun00012_ip = 110; continue _fun00011;
 83:
            entity = global;
            entity = entity.HermesInternal;
            golf = entity.concat;
            report = '';
            entity = ':';
            tango = golf.bind(report)(romeo, entity);
 110:
            report = mike.type;
            romeo = _closure1_slot0;
            entity = _closure1_slot3;
            kilo = 14;
            entity = entity[kilo];
            entity = romeo.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.SUB_COMMAND;
            if(!(report !== entity)) { _fun00012_ip = 837; continue _fun00011 }
 157:
            report = mike.type;
            romeo = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[kilo];
            entity = romeo.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.SUB_COMMAND_GROUP;
            if(!(report !== entity)) { _fun00012_ip = 837; continue _fun00011 }
 198:
            entity = mike.value;
            report = oscar != entity;
            entity = null;
            if(!report) { _fun00012_ip = 734; continue _fun00011 }
 215:
            romeo = mike.type;
            backup = _closure1_slot0;
            report = _closure1_slot3;
            report = report[kilo];
            report = backup.bind(options)(report);
            report = report.ApplicationCommandOptionType;
            report = report.USER;
            if(!(report !== romeo)) { _fun00012_ip = 643; continue _fun00011 }
 256:
            backup = _closure1_slot0;
            report = _closure1_slot3;
            report = report[kilo];
            report = backup.bind(options)(report);
            report = report.ApplicationCommandOptionType;
            report = report.CHANNEL;
            if(!(report !== romeo)) { _fun00012_ip = 591; continue _fun00011 }
 292:
            backup = _closure1_slot0;
            report = _closure1_slot3;
            report = report[kilo];
            report = backup.bind(options)(report);
            report = report.ApplicationCommandOptionType;
            report = report.ROLE;
            if(!(report !== romeo)) { _fun00012_ip = 517; continue _fun00011 }
 328:
            backup = _closure1_slot0;
            report = _closure1_slot3;
            report = report[kilo];
            report = backup.bind(options)(report);
            report = report.ApplicationCommandOptionType;
            report = report.MENTIONABLE;
            entity = null;
            if(!(report === romeo)) { _fun00012_ip = 734; continue _fun00011 }
 366:
            romeo = mike.value;
            report = romeo.toString;
            kilo = report.bind(romeo)();
            romeo = oscar != verify;
            report = undefined;
            if(!romeo) { _fun00012_ip = 410; continue _fun00011 }
 389:
            sizing = _closure1_slot8;
            backup = sizing.getRole;
            romeo = verify.id;
            report = backup.bind(sizing)(romeo, kilo);
 410:
            if(!(oscar == report)) { _fun00012_ip = 499; continue _fun00011 }
 414:
            backup = _closure1_slot10;
            romeo = backup.getUser;
            output = romeo.bind(backup)(kilo);
            romeo = oscar != output;
            entity = null;
            if(!romeo) { _fun00012_ip = 734; continue _fun00011 }
 441:
            backup = _closure1_slot17;
            kilo = _closure1_slot1;
            sizing = _closure1_slot3;
            romeo = 18;
            romeo = sizing[romeo];
            sizing = kilo.bind(options)(romeo);
            kilo = sizing.getUserTag;
            romeo = {};
            result = 'never';
            romeo['decoration'] = result;
            romeo = kilo.bind(sizing)(output, romeo);
            entity = backup + romeo;
            _fun00012_ip = 734; continue _fun00011;
 499:
            romeo = _closure1_slot17;
            report = report.name;
            entity = romeo + report;
            _fun00012_ip = 734; continue _fun00011;
 517:
            romeo = mike.value;
            report = romeo.toString;
            sizing = report.bind(romeo)();
            romeo = oscar != verify;
            report = undefined;
            if(!romeo) { _fun00012_ip = 561; continue _fun00011 }
 540:
            kilo = _closure1_slot8;
            backup = kilo.getRole;
            romeo = verify.id;
            report = backup.bind(kilo)(romeo, sizing);
 561:
            romeo = oscar != report;
            entity = null;
            if(!romeo) { _fun00012_ip = 734; continue _fun00011 }
 573:
            romeo = _closure1_slot17;
            report = report.name;
            entity = romeo + report;
            _fun00012_ip = 734; continue _fun00011;
 591:
            romeo = mike.value;
            report = romeo.toString;
            backup = report.bind(romeo)();
            romeo = _closure1_slot7;
            report = romeo.getChannel;
            report = report.bind(romeo)(backup);
            romeo = oscar != report;
            entity = null;
            if(!romeo) { _fun00012_ip = 734; continue _fun00011 }
 628:
            romeo = _closure1_slot15;
            report = report.name;
            entity = romeo + report;
            _fun00012_ip = 734; continue _fun00011;
 643:
            romeo = mike.value;
            report = romeo.toString;
            backup = report.bind(romeo)();
            romeo = _closure1_slot10;
            report = romeo.getUser;
            sizing = report.bind(romeo)(backup);
            report = oscar != sizing;
            entity = null;
            if(!report) { _fun00012_ip = 734; continue _fun00011 }
 681:
            romeo = _closure1_slot17;
            backup = _closure1_slot1;
            kilo = _closure1_slot3;
            report = 18;
            report = kilo[report];
            kilo = backup.bind(options)(report);
            backup = kilo.getUserTag;
            report = {};
            output = 'never';
            report['decoration'] = output;
            report = backup.bind(kilo)(sizing, report);
            entity = romeo + report;
 734:
            if(!(oscar == entity)) { _fun00012_ip = 821; continue _fun00011 }
 738:
            report = oscar == foxtrot;
            romeo = undefined;
            if(report) { _fun00012_ip = 779; continue _fun00011 }
 747:
            kilo = foxtrot.choices;
            report = oscar == kilo;
            romeo = undefined;
            if(report) { _fun00012_ip = 779; continue _fun00011 }
 762:
            backup = kilo.find;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.value;
                entity = _closure2_slot0;
                entity = entity.value;
                entity = mike === entity;
                return entity;
            };
            romeo = backup.bind(kilo)(report);
 779:
            if(!(oscar == romeo)) { _fun00012_ip = 803; continue _fun00011 }
 783:
            report = global;
            backup = report.String;
            report = mike.value;
            entity = backup.bind(options)(report);
            _fun00012_ip = 821; continue _fun00011;
 803:
            report = romeo.name_localized;
            if(!(oscar == report)) { _fun00012_ip = 818; continue _fun00011 }
 813:
            report = romeo.name;
 818:
            entity = report;
 821:
            report = yankee.push;
            entity = tango + entity;
            entity = report.bind(yankee)(entity);
            return yankee;
 837:
            entity = yankee.push;
            entity = entity.bind(yankee)(tango);
            tango = mike.options;
            entity = yankee;
            if(!(oscar != tango)) { _fun00012_ip = 1013; continue _fun00011 }
 862:
            tango = global;
            report = tango.Object;
            tango = report.fromEntries;
            backup = oscar == foxtrot;
            romeo = undefined;
            if(backup) { _fun00012_ip = 890; continue _fun00011 }
 885:
            romeo = foxtrot.options;
 890:
            if(!(oscar == romeo)) { _fun00012_ip = 898; continue _fun00011 }
 894:
            romeo = new Array(0);
 898:
            oscar = romeo.map;
            zulu = function(argFoo) {
                mike = argFoo;
                zulu = mike.name;
                entity = new Array(2);
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            };
            zulu = oscar.bind(romeo)(zulu);
            oscar = tango.bind(report)(zulu);
            zulu = _closure1_slot27;
            mike = mike.options;
            report = zulu.bind(options)(mike);
            zulu = report.bind(options)();
            mike = zulu.done;
            tango = yankee;
            entity = tango;
            if(mike) { _fun00012_ip = 1013; continue _fun00011 }
 952:
            foxtrot = zulu.value;
            yankee = tango.concat;
            romeo = _closure1_slot24;
            mike = foxtrot.name;
            echo = oscar[mike];
            vacuum = undefined;
            control = foxtrot;
            source = offset;
            update = verify;
            mike = vacuum[romeo](control, source, update, echo, result);
            tango = yankee.bind(tango)(mike);
            romeo = report.bind(options)();
            mike = romeo.done;
            zulu = romeo;
            entity = tango;
            if(!mike) { _fun00012_ip = 952; continue _fun00011 }
 1013:
            return entity;
        }
    };
    var _closure1_slot24 = tango;
    tango = function(argFoo) { // Original name: CommandContentContainer
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = argFoo;
            mike = zulu.channelId;
            var _closure2_slot0 = mike;
            tango = zulu.author;
            var _closure2_slot1 = tango;
            tango = zulu.applicationUser;
            var _closure2_slot2 = tango;
            offset = zulu.data;
            var _closure2_slot3 = offset;
            tango = zulu.guildId;
            var _closure2_slot4 = tango;
            tango = zulu.messageType;
            var _closure2_slot5 = tango;
            backup = zulu.messageId;
            var _closure2_slot6 = backup;
            tango = undefined;
            var _closure2_slot11 = tango;
            zulu = _closure1_slot22;
            romeo = zulu.bind(tango)();
            var _closure2_slot7 = romeo;
            report = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 21;
            zulu = golf[zulu];
            zulu = report.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            verify = zulu.analyticsLocations;
            var _closure2_slot8 = verify;
            report = _closure1_slot0;
            zulu = 22;
            zulu = golf[zulu];
            options = report.bind(tango)(zulu);
            golf = options.useStateFromStoresObject;
            zulu = _closure1_slot7;
            report = new Array(2);
            report[0] = zulu;
            zulu = _closure1_slot8;
            report[1] = zulu;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = _closure1_slot7;
                    zulu = tango.getChannel;
                    entity = _closure2_slot0;
                    report = zulu.bind(tango)(entity);
                    entity = {};
                    entity['channel'] = report;
                    tango = _closure1_slot8;
                    zulu = tango.getGuild;
                    mike = null;
                    oscar = mike == report;
                    mike = undefined;
                    if(oscar) { _fun00016_ip = 55; continue _fun00015 }
 50:
                    mike = report.guild_id;
 55:
                    mike = zulu.bind(tango)(mike);
                    entity['guild'] = mike;
                    return entity;
                }
            };
            mike = golf.bind(options)(report, mike, zulu);
            sizing = mike.channel;
            var _closure2_slot9 = sizing;
            kilo = mike.guild;
            var _closure2_slot10 = kilo;
            zulu = offset.application_command;
            mike = null;
            report = mike == zulu;
            yankee = undefined;
            if(report) { _fun00014_ip = 231; continue _fun00013 }
 225:
            yankee = zulu.name_localized;
 231:
            if(!(mike == yankee)) { _fun00014_ip = 240; continue _fun00013 }
 235:
            yankee = offset.name;
 240:
            _closure2_slot11 = yankee;
            options = _closure1_slot0;
            foxtrot = _closure1_slot3;
            mike = 20;
            zulu = foxtrot[mike];
            zulu = options.bind(tango)(zulu);
            golf = zulu.intl;
            report = golf.format;
            mike = foxtrot[mike];
            mike = options.bind(tango)(mike);
            mike = mike.t;
            zulu = mike.sj/RT0;
            mike = {};
            output = function() { // Original name: userHook
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = _closure1_slot19;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 15;
                    entity = zulu[entity];
                    tango = undefined;
                    entity = mike.bind(tango)(entity);
                    zulu = entity.LegacyText;
                    mike = {};
                    oscar = _closure2_slot7;
                    golf = oscar.commandUserText;
                    oscar = new Array(2);
                    oscar[0] = golf;
                    golf = {};
                    options = _closure2_slot1;
                    options = options.colorString;
                    verify = null;
                    if(!(verify == options)) { _fun00018_ip = 91; continue _fun00017 }
 76:
                    verify = _closure2_slot7;
                    verify = verify.commandText;
                    options = verify.color;
 91:
                    golf['color'] = options;
                    oscar[1] = golf;
                    mike['style'] = oscar;
                    entity = _closure2_slot1;
                    entity = entity.nick;
                    mike['children'] = entity;
                    entity = 'user';
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            mike['userHook'] = output;
            output = function() { // Original name: commandHook
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    report = _closure1_slot19;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 19;
                    entity = zulu[entity];
                    tango = undefined;
                    entity = mike.bind(tango)(entity);
                    zulu = entity.Text;
                    mike = {};
                    entity = 'text-sm/semibold';
                    mike['variant'] = entity;
                    options = _closure2_slot5;
                    entity = _closure1_slot12;
                    entity = entity.CHAT_INPUT_COMMAND;
                    if(!(options !== entity)) { _fun00020_ip = 71; continue _fun00019 }
 65:
                    entity = _closure2_slot11;
                    _fun00020_ip = 102; continue _fun00019;
 71:
                    verify = _closure1_slot16;
                    options = _closure2_slot11;
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    golf = oscar.concat;
                    oscar = '';
                    entity = golf.bind(oscar)(verify, options);
 102:
                    mike['children'] = entity;
                    entity = 'command';
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            mike['commandHook'] = output;
            output = function() { // Original name: applicationHook
                report = _closure1_slot20;
                offset = _closure1_slot0;
                yankee = _closure1_slot3;
                entity = 19;
                entity = yankee[entity];
                tango = undefined;
                entity = offset.bind(tango)(entity);
                zulu = entity.Text;
                mike = {};
                oscar = _closure2_slot7;
                options = oscar.applicationNameText;
                mike['style'] = options;
                options = 'text-sm/semibold';
                mike['variant'] = options;
                verify = _closure1_slot19;
                options = _closure1_slot1;
                golf = 23;
                golf = yankee[golf];
                options = options.bind(tango)(golf);
                golf = {};
                oscar = oscar.applicationIcon;
                golf['style'] = oscar;
                oscar = 24;
                oscar = yankee[oscar];
                yankee = offset.bind(tango)(oscar);
                offset = yankee.ensureAvatarSource;
                oscar = _closure2_slot2;
                romeo = oscar.getAvatarSource;
                entity = _closure2_slot4;
                entity = romeo.bind(oscar)(entity);
                entity = offset.bind(yankee)(entity);
                golf['source'] = entity;
                yankee = oscar.id;
                entity = global;
                entity = entity.HermesInternal;
                offset = entity.concat;
                entity = 'icon-';
                entity = offset.bind(entity)(yankee);
                golf = verify.bind(tango)(options, golf, entity);
                entity = new Array(2);
                entity[0] = golf;
                golf = oscar.username;
                oscar = ' ';
                oscar = oscar + golf;
                entity[1] = oscar;
                mike['children'] = entity;
                entity = 'application';
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            mike['applicationHook'] = output;
            report = report.bind(golf)(zulu, mike);
            golf = _closure1_slot4;
            zulu = golf.useMemo;
            mike = new Array(9);
            mike[0] = sizing;
            mike[1] = kilo;
            mike[2] = backup;
            backup = offset.name;
            mike[3] = backup;
            backup = offset.options;
            mike[4] = backup;
            backup = offset.application_command;
            mike[5] = backup;
            mike[6] = yankee;
            mike[7] = romeo;
            mike[8] = verify;
            entity = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    oscar = _closure1_slot19;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 15;
                    entity = zulu[entity];
                    verify = undefined;
                    entity = mike.bind(verify)(entity);
                    report = entity.LegacyText;
                    tango = {};
                    mike = _closure2_slot11;
                    entity = '/';
                    entity = entity + mike;
                    tango['children'] = entity;
                    entity = _closure2_slot3;
                    yankee = entity.name;
                    zulu = global;
                    mike = zulu.HermesInternal;
                    golf = mike.concat;
                    mike = 'integrationName-';
                    mike = golf.bind(mike)(yankee);
                    mike = oscar.bind(verify)(report, tango, mike);
                    yankee = new Array(1);
                    yankee[0] = mike;
                    tango = entity.options;
                    mike = null;
                    entity = yankee;
                    if(!(mike != tango)) { _fun00022_ip = 339; continue _fun00021 }
 121:
                    tango = zulu.Object;
                    zulu = tango.fromEntries;
                    report = _closure2_slot3;
                    report = report.application_command;
                    golf = mike == report;
                    oscar = undefined;
                    if(golf) { _fun00022_ip = 157; continue _fun00021 }
 152:
                    oscar = report.options;
 157:
                    if(!(mike == oscar)) { _fun00022_ip = 165; continue _fun00021 }
 161:
                    oscar = new Array(0);
 165:
                    report = oscar.map;
                    mike = function(argFoo) {
                        mike = argFoo;
                        zulu = mike.name;
                        entity = new Array(2);
                        entity[0] = zulu;
                        entity[1] = mike;
                        return entity;
                    };
                    mike = report.bind(oscar)(mike);
                    golf = zulu.bind(tango)(mike);
                    zulu = _closure1_slot27;
                    mike = _closure2_slot3;
                    mike = mike.options;
                    oscar = zulu.bind(verify)(mike);
                    zulu = oscar.bind(verify)();
                    mike = zulu.done;
                    report = '';
                    tango = yankee;
                    entity = tango;
                    if(mike) { _fun00022_ip = 339; continue _fun00021 }
 229:
                    foxtrot = zulu.value;
                    yankee = tango.concat;
                    romeo = _closure1_slot23;
                    mike = {};
                    mike['option'] = foxtrot;
                    backup = _closure2_slot9;
                    mike['channel'] = backup;
                    backup = _closure2_slot10;
                    mike['guild'] = backup;
                    backup = _closure2_slot6;
                    mike['messageId'] = backup;
                    mike['parentOptionName'] = report;
                    foxtrot = foxtrot.name;
                    foxtrot = golf[foxtrot];
                    mike['commandOptionSpec'] = foxtrot;
                    foxtrot = _closure2_slot7;
                    mike['styles'] = foxtrot;
                    foxtrot = _closure2_slot8;
                    mike['analyticsLocations'] = foxtrot;
                    mike = romeo.bind(verify)(mike);
                    tango = yankee.bind(tango)(mike);
                    romeo = oscar.bind(verify)();
                    mike = romeo.done;
                    zulu = romeo;
                    entity = tango;
                    if(!mike) { _fun00022_ip = 229; continue _fun00021 }
 339:
                    return entity;
                }
            };
            yankee = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot20;
            entity = 25;
            entity = foxtrot[entity];
            entity = options.bind(tango)(entity);
            mike = entity.Card;
            entity = {};
            verify = _closure1_slot19;
            golf = 19;
            oscar = foxtrot[golf];
            oscar = options.bind(tango)(oscar);
            kilo = oscar.Text;
            backup = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            oscar = romeo.commandText;
            backup['style'] = oscar;
            backup['children'] = report;
            output = offset.name;
            oscar = global;
            report = oscar.HermesInternal;
            sizing = report.concat;
            report = 'commandName-';
            report = sizing.bind(report)(output);
            backup = verify.bind(tango)(kilo, backup, report);
            report = new Array(2);
            report[0] = backup;
            golf = foxtrot[golf];
            golf = options.bind(tango)(golf);
            options = golf.Text;
            golf = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            romeo = romeo.commandOptionText;
            golf['style'] = romeo;
            golf['children'] = yankee;
            yankee = offset.name;
            oscar = oscar.HermesInternal;
            offset = oscar.concat;
            oscar = 'commandOption-';
            oscar = offset.bind(oscar)(yankee);
            oscar = verify.bind(tango)(options, golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot25 = tango;
    tango = function(argFoo) { // Original name: CommandActionsContainer
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            var _closure2_slot0 = tango;
            mike = entity.chatInputRef;
            var _closure2_slot1 = mike;
            romeo = entity.data;
            var _closure2_slot2 = romeo;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            options = romeo.options;
            entity = null;
            zulu = entity != options;
            if(!zulu) { _fun00024_ip = 79; continue _fun00023 }
 61:
            golf = options.some;
            oscar = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 14;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.ATTACHMENT;
                entity = mike === entity;
                return entity;
            };
            zulu = golf.bind(options)(oscar);
 79:
            zulu = !zulu;
            options = _closure1_slot0;
            verify = _closure1_slot3;
            golf = 22;
            golf = verify[golf];
            yankee = options.bind(report)(golf);
            verify = yankee.useStateFromStoresObject;
            golf = _closure1_slot7;
            options = new Array(2);
            options[0] = golf;
            golf = _closure1_slot8;
            options[1] = golf;
            golf = new Array(1);
            golf[0] = tango;
            tango = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tango = _closure1_slot7;
                    zulu = tango.getChannel;
                    entity = _closure2_slot0;
                    report = zulu.bind(tango)(entity);
                    entity = {};
                    entity['channel'] = report;
                    tango = _closure1_slot8;
                    zulu = tango.getGuild;
                    mike = null;
                    oscar = mike == report;
                    mike = undefined;
                    if(oscar) { _fun00026_ip = 55; continue _fun00025 }
 50:
                    mike = report.guild_id;
 55:
                    mike = zulu.bind(tango)(mike);
                    entity['guild'] = mike;
                    return entity;
                }
            };
            tango = verify.bind(yankee)(options, tango, golf);
            yankee = tango.channel;
            _closure2_slot3 = yankee;
            tango = tango.guild;
            _closure2_slot4 = tango;
            verify = _closure1_slot4;
            options = verify.useCallback;
            golf = new Array(3);
            golf[0] = romeo;
            golf[1] = yankee;
            golf[2] = tango;
            tango = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure2_slot2;
                    mike = entity.application_command;
                    report = null;
                    tango = report == mike;
                    entity = undefined;
                    oscar = undefined;
                    if(tango) { _fun00028_ip = 32; continue _fun00027 }
 26:
                    oscar = mike.name_localized;
 32:
                    if(!(report == oscar)) { _fun00028_ip = 45; continue _fun00027 }
 36:
                    mike = _closure2_slot2;
                    oscar = mike.name;
 45:
                    tango = _closure1_slot16;
                    tango = tango + oscar;
                    yankee = new Array(1);
                    yankee[0] = tango;
                    tango = _closure2_slot2;
                    tango = tango.options;
                    options = yankee;
                    if(!(report != tango)) { _fun00028_ip = 252; continue _fun00027 }
 83:
                    tango = global;
                    golf = tango.Object;
                    oscar = golf.fromEntries;
                    tango = _closure2_slot2;
                    tango = tango.application_command;
                    verify = report == tango;
                    offset = undefined;
                    if(verify) { _fun00028_ip = 121; continue _fun00027 }
 116:
                    offset = tango.options;
 121:
                    if(!(report == offset)) { _fun00028_ip = 129; continue _fun00027 }
 125:
                    offset = new Array(0);
 129:
                    verify = offset.map;
                    tango = function(argFoo) {
                        mike = argFoo;
                        zulu = mike.name;
                        entity = new Array(2);
                        entity[0] = zulu;
                        entity[1] = mike;
                        return entity;
                    };
                    tango = verify.bind(offset)(tango);
                    offset = oscar.bind(golf)(tango);
                    oscar = _closure1_slot27;
                    tango = _closure2_slot2;
                    tango = tango.options;
                    verify = oscar.bind(entity)(tango);
                    oscar = verify.bind(entity)();
                    tango = oscar.done;
                    golf = yankee;
                    options = golf;
                    if(tango) { _fun00028_ip = 252; continue _fun00027 }
 189:
                    kilo = oscar.value;
                    yankee = golf.concat;
                    backup = _closure1_slot24;
                    result = _closure2_slot3;
                    output = _closure2_slot4;
                    tango = kilo.name;
                    sizing = offset[tango];
                    update = undefined;
                    echo = kilo;
                    tango = update[backup](echo, result, output, sizing, kilo);
                    golf = yankee.bind(golf)(tango);
                    romeo = verify.bind(entity)();
                    tango = romeo.done;
                    oscar = romeo;
                    options = golf;
                    if(!tango) { _fun00028_ip = 189; continue _fun00027 }
 252:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot3;
                    tango = 26;
                    tango = golf[tango];
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.isAndroid;
                    tango = tango.bind(oscar)();
                    if(tango) { _fun00028_ip = 354; continue _fun00027 }
 284:
                    tango = _closure1_slot6;
                    offset = tango.DCDClipboardManager;
                    verify = offset.setItem;
                    tango = global;
                    golf = tango.JSON;
                    oscar = golf.stringify;
                    tango = _closure2_slot2;
                    golf = oscar.bind(golf)(tango);
                    oscar = options.join;
                    tango = ' ';
                    oscar = oscar.bind(options)(tango);
                    tango = 'application/x-discord-interaction-data';
                    tango = verify.bind(offset)(golf, tango, oscar);
                    _fun00028_ip = 451; continue _fun00027;
 354:
                    golf = _closure1_slot1;
                    tango = _closure1_slot3;
                    oscar = 27;
                    tango = tango[oscar];
                    tango = golf.bind(entity)(tango);
                    if(!(report != tango)) { _fun00028_ip = 451; continue _fun00027 }
 378:
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[oscar];
                    golf = report.bind(entity)(tango);
                    oscar = golf.setItem;
                    tango = global;
                    report = tango.JSON;
                    tango = report.stringify;
                    zulu = _closure2_slot2;
                    report = tango.bind(report)(zulu);
                    tango = options.join;
                    zulu = ' ';
                    tango = tango.bind(options)(zulu);
                    zulu = 'application/x-discord-interaction-data';
                    zulu = oscar.bind(golf)(report, zulu, tango);
 451:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 28;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.presentCommandCopied;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            tango = options.bind(verify)(tango, golf);
            _closure2_slot5 = tango;
            romeo = new Array(0);
            if(!zulu) { _fun00024_ip = 330; continue _fun00023 }
 220:
            tango = romeo.push;
            options = _closure1_slot19;
            backup = _closure1_slot0;
            kilo = _closure1_slot3;
            zulu = 29;
            zulu = kilo[zulu];
            zulu = backup.bind(report)(zulu);
            golf = zulu.TableRow;
            zulu = {};
            verify = 20;
            yankee = kilo[verify];
            yankee = backup.bind(report)(yankee);
            foxtrot = yankee.intl;
            yankee = foxtrot.string;
            verify = kilo[verify];
            verify = backup.bind(report)(verify);
            verify = verify.t;
            verify = verify.42H+NT;
            verify = yankee.bind(foxtrot)(verify);
            zulu['label'] = verify;
            verify = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                mike = _closure2_slot5;
                mike = mike.bind(entity)();
                return entity;
            };
            zulu['onPress'] = verify;
            zulu = options.bind(report)(golf, zulu);
            zulu = tango.bind(romeo)(zulu);
 330:
            if(!(entity != mike)) { _fun00024_ip = 446; continue _fun00023 }
 334:
            zulu = romeo.push;
            golf = _closure1_slot19;
            foxtrot = _closure1_slot0;
            backup = _closure1_slot3;
            mike = 29;
            mike = backup[mike];
            mike = foxtrot.bind(report)(mike);
            tango = mike.TableRow;
            mike = {};
            options = 20;
            verify = backup[options];
            verify = foxtrot.bind(report)(verify);
            yankee = verify.intl;
            verify = yankee.string;
            options = backup[options];
            options = foxtrot.bind(report)(options);
            options = options.t;
            options = options.lNWC7u;
            options = verify.bind(yankee)(options);
            mike['label'] = options;
            options = function() { // Original name: onPress
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hideActionSheet;
                    mike = mike.bind(zulu)();
                    mike = _closure2_slot2;
                    mike = mike.options;
                    report = null;
                    if(!(report != mike)) { _fun00030_ip = 172; continue _fun00029 }
 53:
                    mike = _closure2_slot2;
                    mike = mike.options;
                    mike = mike.length;
                    zulu = 0;
                    if(!(mike > zulu)) { _fun00030_ip = 172; continue _fun00029 }
 73:
                    tango = _closure1_slot0;
                    mike = _closure1_slot3;
                    romeo = 14;
                    oscar = mike[romeo];
                    oscar = tango.bind(entity)(oscar);
                    oscar = oscar.ApplicationCommandOptionType;
                    golf = oscar.SUB_COMMAND;
                    oscar = new Array(2);
                    oscar[0] = golf;
                    mike = mike[romeo];
                    mike = tango.bind(entity)(mike);
                    mike = mike.ApplicationCommandOptionType;
                    mike = mike.SUB_COMMAND_GROUP;
                    oscar[1] = mike;
                    tango = oscar.includes;
                    mike = _closure2_slot2;
                    mike = mike.options;
                    mike = mike[zulu];
                    mike = mike.type;
                    mike = tango.bind(oscar)(mike);
                    if(mike) { _fun00030_ip = 329; continue _fun00029 }
 172:
                    mike = _closure2_slot1;
                    mike = report == mike;
                    oscar = undefined;
                    if(mike) { _fun00030_ip = 201; continue _fun00029 }
 185:
                    tango = _closure2_slot1;
                    tango = tango.current;
                    mike = report == tango;
                    oscar = tango;
 201:
                    if(mike) { _fun00030_ip = 672; continue _fun00029 }
 207:
                    tango = oscar.openCustomKeyboard;
                    mike = {};
                    golf = _closure1_slot18;
                    golf = golf.APP_LAUNCHER;
                    mike['keyboardType'] = golf;
                    golf = {};
                    offset = _closure1_slot14;
                    offset = offset.COMMAND_VIEW;
                    golf['initialRouteName'] = offset;
                    yankee = _closure1_slot0;
                    foxtrot = _closure1_slot3;
                    offset = 30;
                    offset = foxtrot[offset];
                    offset = yankee.bind(entity)(offset);
                    offset = offset.ApplicationCommandTriggerLocations;
                    offset = offset.RECALL;
                    golf['analyticsLocation'] = offset;
                    offset = {};
                    yankee = _closure2_slot2;
                    foxtrot = yankee.id;
                    offset['commandId'] = foxtrot;
                    yankee = yankee.options;
                    offset['prefilledOptions'] = yankee;
                    golf['preSelectedCommand'] = offset;
                    mike['context'] = golf;
                    mike = tango.bind(oscar)(mike);
                    _fun00030_ip = 672; continue _fun00029;
 329:
                    mike = _closure2_slot2;
                    tango = mike.options;
                    tango = tango[zulu];
                    tango = tango.name;
                    yankee = new Array(1);
                    yankee[0] = tango;
                    mike = mike.options;
                    mike = mike[zulu];
                    mike = mike.options;
                    tango = report != mike;
                    if(!tango) { _fun00030_ip = 385; continue _fun00029 }
 376:
                    oscar = mike.length;
                    tango = oscar > zulu;
 385:
                    if(!tango) { _fun00030_ip = 469; continue _fun00029 }
 388:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot3;
                    offset = oscar[romeo];
                    offset = golf.bind(entity)(offset);
                    offset = offset.ApplicationCommandOptionType;
                    foxtrot = offset.SUB_COMMAND;
                    offset = new Array(2);
                    offset[0] = foxtrot;
                    oscar = oscar[romeo];
                    oscar = golf.bind(entity)(oscar);
                    oscar = oscar.ApplicationCommandOptionType;
                    oscar = oscar.SUB_COMMAND_GROUP;
                    offset[1] = oscar;
                    golf = offset.includes;
                    oscar = mike[zulu];
                    oscar = oscar.type;
                    tango = golf.bind(offset)(oscar);
 469:
                    golf = mike;
                    if(!tango) { _fun00030_ip = 503; continue _fun00029 }
 475:
                    oscar = yankee.push;
                    tango = mike[zulu];
                    tango = tango.name;
                    tango = oscar.bind(yankee)(tango);
                    mike = mike[zulu];
                    golf = mike.options;
 503:
                    mike = _closure2_slot1;
                    mike = report == mike;
                    tango = undefined;
                    if(mike) { _fun00030_ip = 532; continue _fun00029 }
 516:
                    zulu = _closure2_slot1;
                    zulu = zulu.current;
                    mike = report == zulu;
                    tango = zulu;
 532:
                    if(mike) { _fun00030_ip = 672; continue _fun00029 }
 538:
                    zulu = tango.openCustomKeyboard;
                    mike = {};
                    report = _closure1_slot18;
                    report = report.APP_LAUNCHER;
                    mike['keyboardType'] = report;
                    report = {};
                    oscar = _closure1_slot14;
                    oscar = oscar.COMMAND_VIEW;
                    report['initialRouteName'] = oscar;
                    offset = _closure1_slot0;
                    romeo = _closure1_slot3;
                    oscar = 30;
                    oscar = romeo[oscar];
                    oscar = offset.bind(entity)(oscar);
                    oscar = oscar.ApplicationCommandTriggerLocations;
                    oscar = oscar.RECALL;
                    report['analyticsLocation'] = oscar;
                    oscar = {};
                    options = _closure2_slot2;
                    options = options.id;
                    offset = _closure1_slot11;
                    verify = options + offset;
                    options = yankee.join;
                    options = options.bind(yankee)(offset);
                    options = verify + options;
                    oscar['commandId'] = options;
                    oscar['prefilledOptions'] = golf;
                    report['preSelectedCommand'] = oscar;
                    mike['context'] = report;
                    mike = zulu.bind(tango)(mike);
 672:
                    return entity;
                }
            };
            mike['onPress'] = options;
            mike = golf.bind(report)(tango, mike);
            mike = zulu.bind(romeo)(mike);
 446:
            zulu = romeo.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun00024_ip = 660; continue _fun00023 }
 462:
            tango = _closure1_slot20;
            options = _closure1_slot0;
            yankee = _closure1_slot3;
            mike = 31;
            mike = yankee[mike];
            mike = options.bind(report)(mike);
            zulu = mike.Stack;
            mike = {};
            golf = 8;
            mike['spacing'] = golf;
            verify = _closure1_slot19;
            oscar = 19;
            oscar = yankee[oscar];
            oscar = options.bind(report)(oscar);
            golf = oscar.Text;
            oscar = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            foxtrot = 20;
            backup = yankee[foxtrot];
            backup = options.bind(report)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = yankee[foxtrot];
            foxtrot = options.bind(report)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.3eF5/P;
            foxtrot = backup.bind(kilo)(foxtrot);
            oscar['children'] = foxtrot;
            golf = verify.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = 32;
            golf = yankee[golf];
            golf = options.bind(report)(golf);
            options = golf.TableRowGroup;
            golf = {};
            yankee = romeo.map;
            offset = function(argFoo, argBar) {
                report = _closure1_slot19;
                entity = _closure1_slot4;
                tango = entity.Fragment;
                zulu = {};
                entity = argFoo;
                zulu['children'] = entity;
                mike = undefined;
                entity = argBar;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            };
            offset = yankee.bind(romeo)(offset);
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 660:
            return entity;
        }
    };
    var _closure1_slot26 = tango;
    tango = 36;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/native/ExecutedApplicationCommandPopout.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            vacuum = entity.user;
            result = entity.channelId;
            var _closure2_slot0 = result;
            output = entity.chatInputRef;
            control = entity.messageId;
            var _closure2_slot1 = control;
            source = entity.author;
            update = entity.applicationUser;
            sequence = entity.guildId;
            echo = entity.messageType;
            entity = _closure1_slot22;
            tango = undefined;
            offset = entity.bind(tango)();
            zulu = _closure1_slot0;
            golf = _closure1_slot3;
            entity = 22;
            entity = golf[entity];
            oscar = zulu.bind(tango)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot9;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                tango = _closure1_slot9;
                zulu = tango.getMessage;
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            sizing = report.bind(oscar)(zulu, entity);
            var _closure2_slot2 = sizing;
            oscar = _closure1_slot1;
            entity = 21;
            zulu = golf[entity];
            report = oscar.bind(tango)(zulu);
            zulu = 33;
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.EXECUTED_COMMAND;
            zulu = report.bind(tango)(zulu);
            report = zulu.analyticsLocations;
            golf = _closure1_slot4;
            oscar = golf.useEffect;
            zulu = new Array(3);
            zulu[0] = result;
            zulu[1] = control;
            kilo = null;
            verify = kilo == sizing;
            options = undefined;
            if(verify) { _fun00032_ip = 207; continue _fun00031 }
 201:
            options = sizing.interactionData;
 207:
            zulu[2] = options;
            mike = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = _closure2_slot2;
                    oscar = null;
                    tango = oscar == entity;
                    entity = undefined;
                    zulu = undefined;
                    if(tango) { _fun00034_ip = 30; continue _fun00033 }
 20:
                    tango = _closure2_slot2;
                    zulu = tango.interactionData;
 30:
                    zulu = oscar == zulu;
                    if(zulu) { _fun00034_ip = 143; continue _fun00033 }
 37:
                    tango = _closure2_slot2;
                    tango = oscar == tango;
                    report = undefined;
                    if(tango) { _fun00034_ip = 65; continue _fun00033 }
 50:
                    tango = _closure2_slot2;
                    tango = tango.interactionData;
                    report = tango.type;
 65:
                    golf = _closure1_slot0;
                    options = _closure1_slot3;
                    tango = 14;
                    tango = options[tango];
                    tango = golf.bind(entity)(tango);
                    tango = tango.ApplicationCommandType;
                    tango = tango.CHAT;
                    tango = report === tango;
                    if(!tango) { _fun00034_ip = 140; continue _fun00033 }
 107:
                    report = _closure2_slot2;
                    oscar = oscar == report;
                    report = undefined;
                    if(oscar) { _fun00034_ip = 136; continue _fun00033 }
 120:
                    oscar = _closure2_slot2;
                    oscar = oscar.interactionData;
                    report = oscar.application_command;
 136:
                    tango = entity === report;
 140:
                    zulu = tango;
 143:
                    if(!zulu) { _fun00034_ip = 189; continue _fun00033 }
 146:
                    tango = _closure1_slot2;
                    report = _closure1_slot3;
                    zulu = 34;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.fetchMessageInteractionData;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = tango.bind(report)(zulu, mike);
 189:
                    return entity;
                }
            };
            mike = oscar.bind(golf)(mike, zulu);
            zulu = _closure1_slot19;
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            entity = golf[entity];
            entity = oscar.bind(tango)(entity);
            mike = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            report = 35;
            report = golf[report];
            report = oscar.bind(tango)(report);
            oscar = report.BottomSheet;
            report = {};
            golf = true;
            report['startExpanded'] = golf;
            golf = offset.container;
            report['bodyStyles'] = golf;
            options = kilo == sizing;
            golf = undefined;
            if(options) { _fun00032_ip = 309; continue _fun00031 }
 303:
            golf = sizing.interactionData;
 309:
            if(!(kilo == golf)) { _fun00032_ip = 352; continue _fun00031 }
 313:
            verify = _closure1_slot19;
            options = _closure1_slot5;
            golf = {};
            offset = offset.activityIndicator;
            golf['style'] = offset;
            offset = 'large';
            golf['size'] = offset;
            golf = verify.bind(tango)(options, golf);
            _fun00032_ip = 494; continue _fun00031;
 352:
            offset = _closure1_slot20;
            verify = _closure1_slot21;
            options = {};
            backup = _closure1_slot19;
            foxtrot = _closure1_slot25;
            yankee = {};
            yankee['guildId'] = sequence;
            yankee['user'] = vacuum;
            yankee['channelId'] = result;
            yankee['messageId'] = control;
            yankee['author'] = source;
            yankee['applicationUser'] = update;
            source = kilo == sizing;
            update = undefined;
            if(source) { _fun00032_ip = 413; continue _fun00031 }
 407:
            update = sizing.interactionData;
 413:
            yankee['data'] = update;
            yankee['messageType'] = echo;
            foxtrot = backup.bind(tango)(foxtrot, yankee);
            yankee = new Array(2);
            yankee[0] = foxtrot;
            backup = _closure1_slot19;
            foxtrot = _closure1_slot26;
            romeo = {};
            romeo['channelId'] = result;
            romeo['chatInputRef'] = output;
            output = kilo == sizing;
            kilo = undefined;
            if(output) { _fun00032_ip = 470; continue _fun00031 }
 464:
            kilo = sizing.interactionData;
 470:
            romeo['data'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            yankee[1] = romeo;
            options['children'] = yankee;
            golf = offset.bind(tango)(verify, options);
 494:
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();