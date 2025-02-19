// app/modules/application_commands/native/ExecutedApplicationCommandPopout.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot28;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot28;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityIndicator;
    var _closure1_slot5 = golfie;
    tangon = tangon.NativeModules;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.Fonts;
    golfie = tangon.MessageTypes;
    var _closure1_slot12 = golfie;
    tangon = tangon.WHITESPACE_RE;
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AppLauncherRouteName;
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.CHANNEL_SENTINEL;
    var _closure1_slot15 = golfie;
    golfie = tangon.COMMAND_SENTINEL;
    var _closure1_slot16 = golfie;
    tangon = tangon.MENTION_SENTINEL;
    var _closure1_slot17 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot18 = tangon;
    tangon = 11;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot19 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot20 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot21 = tangon;
    offset = 12;
    tangon = oscard[offset];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    romeon = 16;
    verify = {'paddingVertical': 8, 'paddingHorizontal': 16, 'gap': 16};
    tangon['container'] = verify;
    verify = {};
    verify['padding'] = romeon;
    tangon['activityIndicator'] = verify;
    verify = {};
    foxtra = foxtra.PRIMARY_SEMIBOLD;
    verify['fontFamily'] = foxtra;
    tangon['commandUserText'] = verify;
    foxtra = 'center';
    verify = {'width': 18, 'height': 18, 'borderRadius': 9, 'alignSelf': 'center'};
    tangon['applicationIcon'] = verify;
    verify = {};
    verify['textAlignVertical'] = foxtra;
    tangon['applicationNameText'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tangon['commandOptionText'] = verify;
    verify = {};
    offset = 13;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BRAND;
    verify['color'] = foxtra;
    tangon['commandOptionMentionText'] = verify;
    verify = {};
    verify['fontSize'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.HEADER_PRIMARY;
    verify['color'] = offset;
    tangon['commandText'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot22 = tangon;
    tangon = function(argFoo) { // Original name: getCommandOptionComponents
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            michal = tangon.option;
            var _closure2_slot0 = michal;
            backup = tangon.channel;
            var _closure2_slot1 = backup;
            foxtra = tangon.guild;
            romeon = tangon.messageId;
            entity = tangon.parentOptionName;
            output = tangon.commandOptionSpec;
            yankee = tangon.styles;
            var _closure2_slot2 = yankee;
            offset = tangon.analyticsLocations;
            sequen = ' ';
            tangon = entity + sequen;
            entity = michal.name;
            verify = tangon + entity;
            kiloes = new Array(0);
            oscard = null;
            entity = oscard == output;
            option = undefined;
            golfie = undefined;
            if(entity) { _fun00008_ip = 102; continue _fun00007 }
 96:
            golfie = output.name_localized;
 102:
            if(!(oscard == golfie)) { _fun00008_ip = 111; continue _fun00007 }
 106:
            golfie = michal.name;
 111:
            entity = michal.value;
            if(!(oscard == entity)) { _fun00008_ip = 140; continue _fun00007 }
 120:
            entity = global;
            entity = entity.HermesInternal;
            entity = entity.concat;
            tangon = entity.bind(sequen)(golfie);
            _fun00008_ip = 163; continue _fun00007;
 140:
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            entity = ':';
            tangon = report.bind(sequen)(golfie, entity);
 163:
            report = michal.type;
            sizing = _closure1_slot0;
            entity = _closure1_slot3;
            source = 14;
            entity = entity[source];
            entity = sizing.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.SUB_COMMAND;
            if(!(report !== entity)) { _fun00008_ip = 1147; continue _fun00007 }
 210:
            report = michal.type;
            sizing = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = sizing.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.SUB_COMMAND_GROUP;
            if(!(report !== entity)) { _fun00008_ip = 1147; continue _fun00007 }
 251:
            report = function(argFoo, argBar) { // Original name: getUserComponent
                verify = argFoo;
                var _closure3_slot0 = verify;
                report = _closure1_slot20;
                zuuluu = _closure1_slot0;
                option = _closure1_slot3;
                michal = 15;
                michal = option[michal];
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.LegacyText;
                michal = {};
                golfie = argBar;
                golfie = golfie.commandOptionMentionText;
                michal['style'] = golfie;
                entity = function() { // Original name: onPress
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot3;
                        entity = 16;
                        michal = tangon[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        michal = report.hideActionSheet;
                        michal = michal.bind(report)();
                        michal = 17;
                        michal = tangon[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = {};
                        tangon = _closure3_slot0;
                        tangon = tangon.id;
                        michal['userId'] = tangon;
                        oscard = _closure2_slot1;
                        tangon = null;
                        oscard = tangon == oscard;
                        tangon = undefined;
                        if(oscard) { _fun00010_ip = 92; continue _fun00009 }
 83:
                        report = _closure2_slot1;
                        tangon = report.id;
 92:
                        michal['channelId'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    }
                };
                michal['onPress'] = entity;
                golfie = _closure1_slot17;
                entity = new Array(2);
                entity[0] = golfie;
                golfie = _closure1_slot1;
                oscard = 18;
                oscard = option[oscard];
                option = golfie.bind(tangon)(oscard);
                golfie = option.getUserTag;
                oscard = {};
                offset = 'never';
                oscard['decoration'] = offset;
                oscard = golfie.bind(option)(verify, oscard);
                entity[1] = oscard;
                michal['children'] = entity;
                entity = _closure2_slot0;
                golfie = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                oscard = entity.concat;
                entity = 'optionValue-';
                entity = oscard.bind(entity)(golfie);
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            result = function(argFoo) { // Original name: getRoleComponent
                report = _closure1_slot20;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 15;
                entity = zuuluu[entity];
                tangon = undefined;
                entity = michal.bind(tangon)(entity);
                zuuluu = entity.LegacyText;
                michal = {};
                golfie = _closure2_slot2;
                golfie = golfie.commandOptionMentionText;
                michal['style'] = golfie;
                golfie = _closure1_slot17;
                oscard = new Array(2);
                oscard[0] = golfie;
                golfie = argFoo;
                golfie = golfie.name;
                oscard[1] = golfie;
                michal['children'] = oscard;
                entity = _closure2_slot0;
                golfie = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                oscard = entity.concat;
                entity = 'optionValue-';
                entity = oscard.bind(entity)(golfie);
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            sizing = function(argFoo) { // Original name: getCommandValueText
                report = _closure1_slot19;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 19;
                entity = zuuluu[entity];
                tangon = undefined;
                entity = michal.bind(tangon)(entity);
                zuuluu = entity.Text;
                michal = {'variant': 'text-sm/medium', 'color': 'header-primary'};
                entity = argFoo;
                michal['children'] = entity;
                entity = _closure2_slot0;
                golfie = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                oscard = entity.concat;
                entity = 'optionValue-';
                entity = oscard.bind(entity)(golfie);
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            entity = michal.value;
            if(!(oscard != entity)) { _fun00008_ip = 1145; continue _fun00007 }
 284:
            echoed = michal.type;
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.USER;
            if(!(entity !== echoed)) { _fun00008_ip = 842; continue _fun00007 }
 325:
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.CHANNEL;
            if(!(entity !== echoed)) { _fun00008_ip = 697; continue _fun00007 }
 361:
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.ROLE;
            if(!(entity !== echoed)) { _fun00008_ip = 631; continue _fun00007 }
 397:
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.MENTIONABLE;
            if(!(entity !== echoed)) { _fun00008_ip = 535; continue _fun00007 }
 430:
            update = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[source];
            entity = update.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.ATTACHMENT;
            update = null;
            if(!(entity === echoed)) { _fun00008_ip = 886; continue _fun00007 }
 468:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot3;
            entity = 20;
            echoed = vacuum[entity];
            echoed = ctrled.bind(option)(echoed);
            source = echoed.intl;
            echoed = source.string;
            entity = vacuum[entity];
            entity = ctrled.bind(option)(entity);
            entity = entity.t;
            entity = entity.nONJVV;
            entity = echoed.bind(source)(entity);
            update = sizing.bind(option)(entity);
            _fun00008_ip = 886; continue _fun00007;
 535:
            echoed = michal.value;
            entity = echoed.toString;
            ctrled = entity.bind(echoed)();
            echoed = oscard != foxtra;
            entity = undefined;
            if(!echoed) { _fun00008_ip = 579; continue _fun00007 }
 558:
            vacuum = _closure1_slot8;
            source = vacuum.getRole;
            echoed = foxtra.id;
            entity = source.bind(vacuum)(echoed, ctrled);
 579:
            if(!(oscard == entity)) { _fun00008_ip = 621; continue _fun00007 }
 583:
            source = _closure1_slot10;
            echoed = source.getUser;
            echoed = echoed.bind(source)(ctrled);
            source = oscard != echoed;
            update = null;
            if(!source) { _fun00008_ip = 886; continue _fun00007 }
 610:
            update = report.bind(option)(echoed, yankee);
            _fun00008_ip = 886; continue _fun00007;
 621:
            update = result.bind(option)(entity);
            _fun00008_ip = 886; continue _fun00007;
 631:
            echoed = michal.value;
            entity = echoed.toString;
            vacuum = entity.bind(echoed)();
            echoed = oscard != foxtra;
            entity = undefined;
            if(!echoed) { _fun00008_ip = 675; continue _fun00007 }
 654:
            ctrled = _closure1_slot8;
            source = ctrled.getRole;
            echoed = foxtra.id;
            entity = source.bind(ctrled)(echoed, vacuum);
 675:
            echoed = oscard != entity;
            update = null;
            if(!echoed) { _fun00008_ip = 886; continue _fun00007 }
 687:
            update = result.bind(option)(entity);
            _fun00008_ip = 886; continue _fun00007;
 697:
            result = michal.value;
            entity = result.toString;
            echoed = entity.bind(result)();
            result = _closure1_slot7;
            entity = result.getChannel;
            ctrled = entity.bind(result)(echoed);
            entity = oscard != ctrled;
            update = null;
            if(!entity) { _fun00008_ip = 886; continue _fun00007 }
 737:
            source = _closure1_slot20;
            result = _closure1_slot0;
            echoed = _closure1_slot3;
            entity = 15;
            entity = echoed[entity];
            entity = result.bind(option)(entity);
            echoed = entity.LegacyText;
            result = {};
            entity = yankee.commandOptionMentionText;
            result['style'] = entity;
            vacuum = _closure1_slot15;
            entity = new Array(2);
            entity[0] = vacuum;
            ctrled = ctrled.name;
            entity[1] = ctrled;
            result['children'] = entity;
            vacuum = michal.name;
            entity = global;
            entity = entity.HermesInternal;
            ctrled = entity.concat;
            entity = 'optionValue-';
            entity = ctrled.bind(entity)(vacuum);
            update = source.bind(option)(echoed, result, entity);
            _fun00008_ip = 886; continue _fun00007;
 842:
            result = michal.value;
            entity = result.toString;
            echoed = entity.bind(result)();
            result = _closure1_slot10;
            entity = result.getUser;
            entity = entity.bind(result)(echoed);
            result = oscard != entity;
            update = null;
            if(!result) { _fun00008_ip = 886; continue _fun00007 }
 880:
            update = report.bind(option)(entity, yankee);
 886:
            entity = oscard == update;
            echoed = true;
            if(!entity) { _fun00008_ip = 1015; continue _fun00007 }
 895:
            entity = oscard == output;
            result = undefined;
            if(entity) { _fun00008_ip = 936; continue _fun00007 }
 904:
            source = output.choices;
            entity = oscard == source;
            result = undefined;
            if(entity) { _fun00008_ip = 936; continue _fun00007 }
 919:
            report = source.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.value;
                entity = _closure2_slot0;
                entity = entity.value;
                entity = michal === entity;
                return entity;
            };
            result = report.bind(source)(entity);
 936:
            report = michal.value;
            entity = report.toString;
            report = entity.bind(report)();
            if(!(oscard != result)) { _fun00008_ip = 972; continue _fun00007 }
 954:
            entity = result.name_localized;
            if(!(oscard == entity)) { _fun00008_ip = 969; continue _fun00007 }
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
            ctrled = _closure1_slot13;
            source = ctrled.test;
            result = report[result];
            result = source.bind(ctrled)(result);
            entity = !result;
 1007:
            update = sizing.bind(option)(report);
            echoed = entity;
 1015:
            report = kiloes.push;
            result = _closure1_slot20;
            entity = _closure1_slot4;
            sizing = entity.Fragment;
            entity = {};
            vacuum = _closure1_slot19;
            ctrled = _closure1_slot0;
            config = _closure1_slot3;
            source = 15;
            source = config[source];
            source = ctrled.bind(option)(source);
            ctrled = source.LegacyText;
            source = {};
            if(!echoed) { _fun00008_ip = 1073; continue _fun00007 }
 1070:
            echoed = sequen;
 1073:
            echoed = tangon + echoed;
            source['children'] = echoed;
            config = michal.name;
            echoed = global;
            echoed = echoed.HermesInternal;
            sequen = echoed.concat;
            echoed = 'optionKey-';
            echoed = sequen.bind(echoed)(config);
            source = vacuum.bind(option)(ctrled, source, echoed);
            echoed = new Array(2);
            echoed[0] = source;
            echoed[1] = update;
            entity['children'] = echoed;
            entity = result.bind(option)(sizing, entity, verify);
            entity = report.bind(kiloes)(entity);
 1145:
            return kiloes;
 1147:
            report = kiloes.push;
            result = _closure1_slot19;
            entity = _closure1_slot4;
            sizing = entity.Fragment;
            entity = {};
            update = _closure1_slot0;
            source = _closure1_slot3;
            echoed = 15;
            echoed = source[echoed];
            echoed = update.bind(option)(echoed);
            source = echoed.LegacyText;
            update = {};
            update['children'] = tangon;
            vacuum = michal.name;
            tangon = global;
            echoed = tangon.HermesInternal;
            ctrled = echoed.concat;
            echoed = 'optionKey-';
            echoed = ctrled.bind(echoed)(vacuum);
            echoed = result.bind(option)(source, update, echoed);
            entity['children'] = echoed;
            entity = result.bind(option)(sizing, entity, verify);
            entity = report.bind(kiloes)(entity);
            report = michal.options;
            entity = kiloes;
            if(!(oscard != report)) { _fun00008_ip = 1444; continue _fun00007 }
 1266:
            report = tangon.Object;
            tangon = report.fromEntries;
            result = oscard == output;
            sizing = undefined;
            if(result) { _fun00008_ip = 1292; continue _fun00007 }
 1287:
            sizing = output.options;
 1292:
            if(!(oscard == sizing)) { _fun00008_ip = 1300; continue _fun00007 }
 1296:
            sizing = new Array(0);
 1300:
            oscard = sizing.map;
            zuuluu = function(argFoo) {
                michal = argFoo;
                zuuluu = michal.name;
                entity = new Array(2);
                entity[0] = zuuluu;
                entity[1] = michal;
                return entity;
            };
            zuuluu = oscard.bind(sizing)(zuuluu);
            oscard = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot27;
            michal = michal.options;
            report = zuuluu.bind(option)(michal);
            zuuluu = report.bind(option)();
            michal = zuuluu.done;
            tangon = kiloes;
            entity = tangon;
            if(michal) { _fun00008_ip = 1444; continue _fun00007 }
 1354:
            output = zuuluu.value;
            kiloes = tangon.concat;
            sizing = _closure1_slot23;
            michal = {};
            michal['option'] = output;
            michal['channel'] = backup;
            michal['guild'] = foxtra;
            michal['messageId'] = romeon;
            michal['parentOptionName'] = verify;
            output = output.name;
            output = oscard[output];
            michal['commandOptionSpec'] = output;
            michal['styles'] = yankee;
            michal['analyticsLocations'] = offset;
            michal = sizing.bind(option)(michal);
            tangon = kiloes.bind(tangon)(michal);
            sizing = report.bind(option)();
            michal = sizing.done;
            zuuluu = sizing;
            entity = tangon;
            if(!michal) { _fun00008_ip = 1354; continue _fun00007 }
 1444:
            return entity;
        }
    };
    var _closure1_slot23 = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: getCommandCopyText
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            offset = argBar;
            verify = argBaz;
            foxtra = argCor;
            var _closure2_slot0 = michal;
            yankee = new Array(0);
            oscard = null;
            entity = oscard == foxtra;
            option = undefined;
            romeon = undefined;
            if(entity) { _fun00012_ip = 41; continue _fun00011 }
 35:
            romeon = foxtra.name_localized;
 41:
            if(!(oscard == romeon)) { _fun00012_ip = 50; continue _fun00011 }
 45:
            romeon = michal.name;
 50:
            entity = michal.value;
            if(!(oscard == entity)) { _fun00012_ip = 83; continue _fun00011 }
 59:
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            entity = '';
            tangon = tangon.bind(entity)(romeon);
            _fun00012_ip = 110; continue _fun00011;
 83:
            entity = global;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            report = '';
            entity = ':';
            tangon = golfie.bind(report)(romeon, entity);
 110:
            report = michal.type;
            romeon = _closure1_slot0;
            entity = _closure1_slot3;
            kiloes = 14;
            entity = entity[kiloes];
            entity = romeon.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.SUB_COMMAND;
            if(!(report !== entity)) { _fun00012_ip = 837; continue _fun00011 }
 157:
            report = michal.type;
            romeon = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[kiloes];
            entity = romeon.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.SUB_COMMAND_GROUP;
            if(!(report !== entity)) { _fun00012_ip = 837; continue _fun00011 }
 198:
            entity = michal.value;
            report = oscard != entity;
            entity = null;
            if(!report) { _fun00012_ip = 734; continue _fun00011 }
 215:
            romeon = michal.type;
            backup = _closure1_slot0;
            report = _closure1_slot3;
            report = report[kiloes];
            report = backup.bind(option)(report);
            report = report.ApplicationCommandOptionType;
            report = report.USER;
            if(!(report !== romeon)) { _fun00012_ip = 643; continue _fun00011 }
 256:
            backup = _closure1_slot0;
            report = _closure1_slot3;
            report = report[kiloes];
            report = backup.bind(option)(report);
            report = report.ApplicationCommandOptionType;
            report = report.CHANNEL;
            if(!(report !== romeon)) { _fun00012_ip = 591; continue _fun00011 }
 292:
            backup = _closure1_slot0;
            report = _closure1_slot3;
            report = report[kiloes];
            report = backup.bind(option)(report);
            report = report.ApplicationCommandOptionType;
            report = report.ROLE;
            if(!(report !== romeon)) { _fun00012_ip = 517; continue _fun00011 }
 328:
            backup = _closure1_slot0;
            report = _closure1_slot3;
            report = report[kiloes];
            report = backup.bind(option)(report);
            report = report.ApplicationCommandOptionType;
            report = report.MENTIONABLE;
            entity = null;
            if(!(report === romeon)) { _fun00012_ip = 734; continue _fun00011 }
 366:
            romeon = michal.value;
            report = romeon.toString;
            kiloes = report.bind(romeon)();
            romeon = oscard != verify;
            report = undefined;
            if(!romeon) { _fun00012_ip = 410; continue _fun00011 }
 389:
            sizing = _closure1_slot8;
            backup = sizing.getRole;
            romeon = verify.id;
            report = backup.bind(sizing)(romeon, kiloes);
 410:
            if(!(oscard == report)) { _fun00012_ip = 499; continue _fun00011 }
 414:
            backup = _closure1_slot10;
            romeon = backup.getUser;
            output = romeon.bind(backup)(kiloes);
            romeon = oscard != output;
            entity = null;
            if(!romeon) { _fun00012_ip = 734; continue _fun00011 }
 441:
            backup = _closure1_slot17;
            kiloes = _closure1_slot1;
            sizing = _closure1_slot3;
            romeon = 18;
            romeon = sizing[romeon];
            sizing = kiloes.bind(option)(romeon);
            kiloes = sizing.getUserTag;
            romeon = {};
            result = 'never';
            romeon['decoration'] = result;
            romeon = kiloes.bind(sizing)(output, romeon);
            entity = backup + romeon;
            _fun00012_ip = 734; continue _fun00011;
 499:
            romeon = _closure1_slot17;
            report = report.name;
            entity = romeon + report;
            _fun00012_ip = 734; continue _fun00011;
 517:
            romeon = michal.value;
            report = romeon.toString;
            sizing = report.bind(romeon)();
            romeon = oscard != verify;
            report = undefined;
            if(!romeon) { _fun00012_ip = 561; continue _fun00011 }
 540:
            kiloes = _closure1_slot8;
            backup = kiloes.getRole;
            romeon = verify.id;
            report = backup.bind(kiloes)(romeon, sizing);
 561:
            romeon = oscard != report;
            entity = null;
            if(!romeon) { _fun00012_ip = 734; continue _fun00011 }
 573:
            romeon = _closure1_slot17;
            report = report.name;
            entity = romeon + report;
            _fun00012_ip = 734; continue _fun00011;
 591:
            romeon = michal.value;
            report = romeon.toString;
            backup = report.bind(romeon)();
            romeon = _closure1_slot7;
            report = romeon.getChannel;
            report = report.bind(romeon)(backup);
            romeon = oscard != report;
            entity = null;
            if(!romeon) { _fun00012_ip = 734; continue _fun00011 }
 628:
            romeon = _closure1_slot15;
            report = report.name;
            entity = romeon + report;
            _fun00012_ip = 734; continue _fun00011;
 643:
            romeon = michal.value;
            report = romeon.toString;
            backup = report.bind(romeon)();
            romeon = _closure1_slot10;
            report = romeon.getUser;
            sizing = report.bind(romeon)(backup);
            report = oscard != sizing;
            entity = null;
            if(!report) { _fun00012_ip = 734; continue _fun00011 }
 681:
            romeon = _closure1_slot17;
            backup = _closure1_slot1;
            kiloes = _closure1_slot3;
            report = 18;
            report = kiloes[report];
            kiloes = backup.bind(option)(report);
            backup = kiloes.getUserTag;
            report = {};
            output = 'never';
            report['decoration'] = output;
            report = backup.bind(kiloes)(sizing, report);
            entity = romeon + report;
 734:
            if(!(oscard == entity)) { _fun00012_ip = 821; continue _fun00011 }
 738:
            report = oscard == foxtra;
            romeon = undefined;
            if(report) { _fun00012_ip = 779; continue _fun00011 }
 747:
            kiloes = foxtra.choices;
            report = oscard == kiloes;
            romeon = undefined;
            if(report) { _fun00012_ip = 779; continue _fun00011 }
 762:
            backup = kiloes.find;
            report = function(argFoo) {
                entity = argFoo;
                michal = entity.value;
                entity = _closure2_slot0;
                entity = entity.value;
                entity = michal === entity;
                return entity;
            };
            romeon = backup.bind(kiloes)(report);
 779:
            if(!(oscard == romeon)) { _fun00012_ip = 803; continue _fun00011 }
 783:
            report = global;
            backup = report.String;
            report = michal.value;
            entity = backup.bind(option)(report);
            _fun00012_ip = 821; continue _fun00011;
 803:
            report = romeon.name_localized;
            if(!(oscard == report)) { _fun00012_ip = 818; continue _fun00011 }
 813:
            report = romeon.name;
 818:
            entity = report;
 821:
            report = yankee.push;
            entity = tangon + entity;
            entity = report.bind(yankee)(entity);
            return yankee;
 837:
            entity = yankee.push;
            entity = entity.bind(yankee)(tangon);
            tangon = michal.options;
            entity = yankee;
            if(!(oscard != tangon)) { _fun00012_ip = 1013; continue _fun00011 }
 862:
            tangon = global;
            report = tangon.Object;
            tangon = report.fromEntries;
            backup = oscard == foxtra;
            romeon = undefined;
            if(backup) { _fun00012_ip = 890; continue _fun00011 }
 885:
            romeon = foxtra.options;
 890:
            if(!(oscard == romeon)) { _fun00012_ip = 898; continue _fun00011 }
 894:
            romeon = new Array(0);
 898:
            oscard = romeon.map;
            zuuluu = function(argFoo) {
                michal = argFoo;
                zuuluu = michal.name;
                entity = new Array(2);
                entity[0] = zuuluu;
                entity[1] = michal;
                return entity;
            };
            zuuluu = oscard.bind(romeon)(zuuluu);
            oscard = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot27;
            michal = michal.options;
            report = zuuluu.bind(option)(michal);
            zuuluu = report.bind(option)();
            michal = zuuluu.done;
            tangon = yankee;
            entity = tangon;
            if(michal) { _fun00012_ip = 1013; continue _fun00011 }
 952:
            foxtra = zuuluu.value;
            yankee = tangon.concat;
            romeon = _closure1_slot24;
            michal = foxtra.name;
            echoed = oscard[michal];
            vacuum = undefined;
            ctrled = foxtra;
            source = offset;
            update = verify;
            michal = vacuum[romeon](ctrled, source, update, echoed, result);
            tangon = yankee.bind(tangon)(michal);
            romeon = report.bind(option)();
            michal = romeon.done;
            zuuluu = romeon;
            entity = tangon;
            if(!michal) { _fun00012_ip = 952; continue _fun00011 }
 1013:
            return entity;
        }
    };
    var _closure1_slot24 = tangon;
    tangon = function(argFoo) { // Original name: CommandContentContainer
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.channelId;
            var _closure2_slot0 = michal;
            tangon = zuuluu.author;
            var _closure2_slot1 = tangon;
            tangon = zuuluu.applicationUser;
            var _closure2_slot2 = tangon;
            offset = zuuluu.data;
            var _closure2_slot3 = offset;
            tangon = zuuluu.guildId;
            var _closure2_slot4 = tangon;
            tangon = zuuluu.messageType;
            var _closure2_slot5 = tangon;
            backup = zuuluu.messageId;
            var _closure2_slot6 = backup;
            tangon = undefined;
            var _closure2_slot11 = tangon;
            zuuluu = _closure1_slot22;
            romeon = zuuluu.bind(tangon)();
            var _closure2_slot7 = romeon;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 21;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            verify = zuuluu.analyticsLocations;
            var _closure2_slot8 = verify;
            report = _closure1_slot0;
            zuuluu = 22;
            zuuluu = golfie[zuuluu];
            option = report.bind(tangon)(zuuluu);
            golfie = option.useStateFromStoresObject;
            zuuluu = _closure1_slot7;
            report = new Array(2);
            report[0] = zuuluu;
            zuuluu = _closure1_slot8;
            report[1] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getChannel;
                    entity = _closure2_slot0;
                    report = zuuluu.bind(tangon)(entity);
                    entity = {};
                    entity['channel'] = report;
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getGuild;
                    michal = null;
                    oscard = michal == report;
                    michal = undefined;
                    if(oscard) { _fun00016_ip = 55; continue _fun00015 }
 50:
                    michal = report.guild_id;
 55:
                    michal = zuuluu.bind(tangon)(michal);
                    entity['guild'] = michal;
                    return entity;
                }
            };
            michal = golfie.bind(option)(report, michal, zuuluu);
            sizing = michal.channel;
            var _closure2_slot9 = sizing;
            kiloes = michal.guild;
            var _closure2_slot10 = kiloes;
            zuuluu = offset.application_command;
            michal = null;
            report = michal == zuuluu;
            yankee = undefined;
            if(report) { _fun00014_ip = 231; continue _fun00013 }
 225:
            yankee = zuuluu.name_localized;
 231:
            if(!(michal == yankee)) { _fun00014_ip = 240; continue _fun00013 }
 235:
            yankee = offset.name;
 240:
            _closure2_slot11 = yankee;
            option = _closure1_slot0;
            foxtra = _closure1_slot3;
            michal = 20;
            zuuluu = foxtra[michal];
            zuuluu = option.bind(tangon)(zuuluu);
            golfie = zuuluu.intl;
            report = golfie.format;
            michal = foxtra[michal];
            michal = option.bind(tangon)(michal);
            michal = michal.t;
            zuuluu = michal.sj/RT0;
            michal = {};
            output = function() { // Original name: userHook
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = _closure1_slot19;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    entity = 15;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    entity = michal.bind(tangon)(entity);
                    zuuluu = entity.LegacyText;
                    michal = {};
                    oscard = _closure2_slot7;
                    golfie = oscard.commandUserText;
                    oscard = new Array(2);
                    oscard[0] = golfie;
                    golfie = {};
                    option = _closure2_slot1;
                    option = option.colorString;
                    verify = null;
                    if(!(verify == option)) { _fun00018_ip = 91; continue _fun00017 }
 76:
                    verify = _closure2_slot7;
                    verify = verify.commandText;
                    option = verify.color;
 91:
                    golfie['color'] = option;
                    oscard[1] = golfie;
                    michal['style'] = oscard;
                    entity = _closure2_slot1;
                    entity = entity.nick;
                    michal['children'] = entity;
                    entity = 'user';
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                }
            };
            michal['userHook'] = output;
            output = function() { // Original name: commandHook
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    report = _closure1_slot19;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    entity = 19;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    entity = michal.bind(tangon)(entity);
                    zuuluu = entity.Text;
                    michal = {};
                    entity = 'text-sm/semibold';
                    michal['variant'] = entity;
                    option = _closure2_slot5;
                    entity = _closure1_slot12;
                    entity = entity.CHAT_INPUT_COMMAND;
                    if(!(option !== entity)) { _fun00020_ip = 71; continue _fun00019 }
 65:
                    entity = _closure2_slot11;
                    _fun00020_ip = 102; continue _fun00019;
 71:
                    verify = _closure1_slot16;
                    option = _closure2_slot11;
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    golfie = oscard.concat;
                    oscard = '';
                    entity = golfie.bind(oscard)(verify, option);
 102:
                    michal['children'] = entity;
                    entity = 'command';
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                }
            };
            michal['commandHook'] = output;
            output = function() { // Original name: applicationHook
                report = _closure1_slot20;
                offset = _closure1_slot0;
                yankee = _closure1_slot3;
                entity = 19;
                entity = yankee[entity];
                tangon = undefined;
                entity = offset.bind(tangon)(entity);
                zuuluu = entity.Text;
                michal = {};
                oscard = _closure2_slot7;
                option = oscard.applicationNameText;
                michal['style'] = option;
                option = 'text-sm/semibold';
                michal['variant'] = option;
                verify = _closure1_slot19;
                option = _closure1_slot1;
                golfie = 23;
                golfie = yankee[golfie];
                option = option.bind(tangon)(golfie);
                golfie = {};
                oscard = oscard.applicationIcon;
                golfie['style'] = oscard;
                oscard = 24;
                oscard = yankee[oscard];
                yankee = offset.bind(tangon)(oscard);
                offset = yankee.ensureAvatarSource;
                oscard = _closure2_slot2;
                romeon = oscard.getAvatarSource;
                entity = _closure2_slot4;
                entity = romeon.bind(oscard)(entity);
                entity = offset.bind(yankee)(entity);
                golfie['source'] = entity;
                yankee = oscard.id;
                entity = global;
                entity = entity.HermesInternal;
                offset = entity.concat;
                entity = 'icon-';
                entity = offset.bind(entity)(yankee);
                golfie = verify.bind(tangon)(option, golfie, entity);
                entity = new Array(2);
                entity[0] = golfie;
                golfie = oscard.username;
                oscard = ' ';
                oscard = oscard + golfie;
                entity[1] = oscard;
                michal['children'] = entity;
                entity = 'application';
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            michal['applicationHook'] = output;
            report = report.bind(golfie)(zuuluu, michal);
            golfie = _closure1_slot4;
            zuuluu = golfie.useMemo;
            michal = new Array(9);
            michal[0] = sizing;
            michal[1] = kiloes;
            michal[2] = backup;
            backup = offset.name;
            michal[3] = backup;
            backup = offset.options;
            michal[4] = backup;
            backup = offset.application_command;
            michal[5] = backup;
            michal[6] = yankee;
            michal[7] = romeon;
            michal[8] = verify;
            entity = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    oscard = _closure1_slot19;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    entity = 15;
                    entity = zuuluu[entity];
                    verify = undefined;
                    entity = michal.bind(verify)(entity);
                    report = entity.LegacyText;
                    tangon = {};
                    michal = _closure2_slot11;
                    entity = '/';
                    entity = entity + michal;
                    tangon['children'] = entity;
                    entity = _closure2_slot3;
                    yankee = entity.name;
                    zuuluu = global;
                    michal = zuuluu.HermesInternal;
                    golfie = michal.concat;
                    michal = 'integrationName-';
                    michal = golfie.bind(michal)(yankee);
                    michal = oscard.bind(verify)(report, tangon, michal);
                    yankee = new Array(1);
                    yankee[0] = michal;
                    tangon = entity.options;
                    michal = null;
                    entity = yankee;
                    if(!(michal != tangon)) { _fun00022_ip = 339; continue _fun00021 }
 121:
                    tangon = zuuluu.Object;
                    zuuluu = tangon.fromEntries;
                    report = _closure2_slot3;
                    report = report.application_command;
                    golfie = michal == report;
                    oscard = undefined;
                    if(golfie) { _fun00022_ip = 157; continue _fun00021 }
 152:
                    oscard = report.options;
 157:
                    if(!(michal == oscard)) { _fun00022_ip = 165; continue _fun00021 }
 161:
                    oscard = new Array(0);
 165:
                    report = oscard.map;
                    michal = function(argFoo) {
                        michal = argFoo;
                        zuuluu = michal.name;
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        entity[1] = michal;
                        return entity;
                    };
                    michal = report.bind(oscard)(michal);
                    golfie = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure1_slot27;
                    michal = _closure2_slot3;
                    michal = michal.options;
                    oscard = zuuluu.bind(verify)(michal);
                    zuuluu = oscard.bind(verify)();
                    michal = zuuluu.done;
                    report = '';
                    tangon = yankee;
                    entity = tangon;
                    if(michal) { _fun00022_ip = 339; continue _fun00021 }
 229:
                    foxtra = zuuluu.value;
                    yankee = tangon.concat;
                    romeon = _closure1_slot23;
                    michal = {};
                    michal['option'] = foxtra;
                    backup = _closure2_slot9;
                    michal['channel'] = backup;
                    backup = _closure2_slot10;
                    michal['guild'] = backup;
                    backup = _closure2_slot6;
                    michal['messageId'] = backup;
                    michal['parentOptionName'] = report;
                    foxtra = foxtra.name;
                    foxtra = golfie[foxtra];
                    michal['commandOptionSpec'] = foxtra;
                    foxtra = _closure2_slot7;
                    michal['styles'] = foxtra;
                    foxtra = _closure2_slot8;
                    michal['analyticsLocations'] = foxtra;
                    michal = romeon.bind(verify)(michal);
                    tangon = yankee.bind(tangon)(michal);
                    romeon = oscard.bind(verify)();
                    michal = romeon.done;
                    zuuluu = romeon;
                    entity = tangon;
                    if(!michal) { _fun00022_ip = 229; continue _fun00021 }
 339:
                    return entity;
                }
            };
            yankee = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot20;
            entity = 25;
            entity = foxtra[entity];
            entity = option.bind(tangon)(entity);
            michal = entity.Card;
            entity = {};
            verify = _closure1_slot19;
            golfie = 19;
            oscard = foxtra[golfie];
            oscard = option.bind(tangon)(oscard);
            kiloes = oscard.Text;
            backup = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            oscard = romeon.commandText;
            backup['style'] = oscard;
            backup['children'] = report;
            output = offset.name;
            oscard = global;
            report = oscard.HermesInternal;
            sizing = report.concat;
            report = 'commandName-';
            report = sizing.bind(report)(output);
            backup = verify.bind(tangon)(kiloes, backup, report);
            report = new Array(2);
            report[0] = backup;
            golfie = foxtra[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            romeon = romeon.commandOptionText;
            golfie['style'] = romeon;
            golfie['children'] = yankee;
            yankee = offset.name;
            oscard = oscard.HermesInternal;
            offset = oscard.concat;
            oscard = 'commandOption-';
            oscard = offset.bind(oscard)(yankee);
            oscard = verify.bind(tangon)(option, golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot25 = tangon;
    tangon = function(argFoo) { // Original name: CommandActionsContainer
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            var _closure2_slot0 = tangon;
            michal = entity.chatInputRef;
            var _closure2_slot1 = michal;
            romeon = entity.data;
            var _closure2_slot2 = romeon;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            option = romeon.options;
            entity = null;
            zuuluu = entity != option;
            if(!zuuluu) { _fun00024_ip = 79; continue _fun00023 }
 61:
            golfie = option.some;
            oscard = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 14;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.ATTACHMENT;
                entity = michal === entity;
                return entity;
            };
            zuuluu = golfie.bind(option)(oscard);
 79:
            zuuluu = !zuuluu;
            option = _closure1_slot0;
            verify = _closure1_slot3;
            golfie = 22;
            golfie = verify[golfie];
            yankee = option.bind(report)(golfie);
            verify = yankee.useStateFromStoresObject;
            golfie = _closure1_slot7;
            option = new Array(2);
            option[0] = golfie;
            golfie = _closure1_slot8;
            option[1] = golfie;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getChannel;
                    entity = _closure2_slot0;
                    report = zuuluu.bind(tangon)(entity);
                    entity = {};
                    entity['channel'] = report;
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getGuild;
                    michal = null;
                    oscard = michal == report;
                    michal = undefined;
                    if(oscard) { _fun00026_ip = 55; continue _fun00025 }
 50:
                    michal = report.guild_id;
 55:
                    michal = zuuluu.bind(tangon)(michal);
                    entity['guild'] = michal;
                    return entity;
                }
            };
            tangon = verify.bind(yankee)(option, tangon, golfie);
            yankee = tangon.channel;
            _closure2_slot3 = yankee;
            tangon = tangon.guild;
            _closure2_slot4 = tangon;
            verify = _closure1_slot4;
            option = verify.useCallback;
            golfie = new Array(3);
            golfie[0] = romeon;
            golfie[1] = yankee;
            golfie[2] = tangon;
            tangon = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = entity.application_command;
                    report = null;
                    tangon = report == michal;
                    entity = undefined;
                    oscard = undefined;
                    if(tangon) { _fun00028_ip = 32; continue _fun00027 }
 26:
                    oscard = michal.name_localized;
 32:
                    if(!(report == oscard)) { _fun00028_ip = 45; continue _fun00027 }
 36:
                    michal = _closure2_slot2;
                    oscard = michal.name;
 45:
                    tangon = _closure1_slot16;
                    tangon = tangon + oscard;
                    yankee = new Array(1);
                    yankee[0] = tangon;
                    tangon = _closure2_slot2;
                    tangon = tangon.options;
                    option = yankee;
                    if(!(report != tangon)) { _fun00028_ip = 252; continue _fun00027 }
 83:
                    tangon = global;
                    golfie = tangon.Object;
                    oscard = golfie.fromEntries;
                    tangon = _closure2_slot2;
                    tangon = tangon.application_command;
                    verify = report == tangon;
                    offset = undefined;
                    if(verify) { _fun00028_ip = 121; continue _fun00027 }
 116:
                    offset = tangon.options;
 121:
                    if(!(report == offset)) { _fun00028_ip = 129; continue _fun00027 }
 125:
                    offset = new Array(0);
 129:
                    verify = offset.map;
                    tangon = function(argFoo) {
                        michal = argFoo;
                        zuuluu = michal.name;
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        entity[1] = michal;
                        return entity;
                    };
                    tangon = verify.bind(offset)(tangon);
                    offset = oscard.bind(golfie)(tangon);
                    oscard = _closure1_slot27;
                    tangon = _closure2_slot2;
                    tangon = tangon.options;
                    verify = oscard.bind(entity)(tangon);
                    oscard = verify.bind(entity)();
                    tangon = oscard.done;
                    golfie = yankee;
                    option = golfie;
                    if(tangon) { _fun00028_ip = 252; continue _fun00027 }
 189:
                    kiloes = oscard.value;
                    yankee = golfie.concat;
                    backup = _closure1_slot24;
                    result = _closure2_slot3;
                    output = _closure2_slot4;
                    tangon = kiloes.name;
                    sizing = offset[tangon];
                    update = undefined;
                    echoed = kiloes;
                    tangon = update[backup](echoed, result, output, sizing, kiloes);
                    golfie = yankee.bind(golfie)(tangon);
                    romeon = verify.bind(entity)();
                    tangon = romeon.done;
                    oscard = romeon;
                    option = golfie;
                    if(!tangon) { _fun00028_ip = 189; continue _fun00027 }
 252:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot3;
                    tangon = 26;
                    tangon = golfie[tangon];
                    oscard = oscard.bind(entity)(tangon);
                    tangon = oscard.isAndroid;
                    tangon = tangon.bind(oscard)();
                    if(tangon) { _fun00028_ip = 354; continue _fun00027 }
 284:
                    tangon = _closure1_slot6;
                    offset = tangon.DCDClipboardManager;
                    verify = offset.setItem;
                    tangon = global;
                    golfie = tangon.JSON;
                    oscard = golfie.stringify;
                    tangon = _closure2_slot2;
                    golfie = oscard.bind(golfie)(tangon);
                    oscard = option.join;
                    tangon = ' ';
                    oscard = oscard.bind(option)(tangon);
                    tangon = 'application/x-discord-interaction-data';
                    tangon = verify.bind(offset)(golfie, tangon, oscard);
                    _fun00028_ip = 451; continue _fun00027;
 354:
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot3;
                    oscard = 27;
                    tangon = tangon[oscard];
                    tangon = golfie.bind(entity)(tangon);
                    if(!(report != tangon)) { _fun00028_ip = 451; continue _fun00027 }
 378:
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    tangon = tangon[oscard];
                    golfie = report.bind(entity)(tangon);
                    oscard = golfie.setItem;
                    tangon = global;
                    report = tangon.JSON;
                    tangon = report.stringify;
                    zuuluu = _closure2_slot2;
                    report = tangon.bind(report)(zuuluu);
                    tangon = option.join;
                    zuuluu = ' ';
                    tangon = tangon.bind(option)(zuuluu);
                    zuuluu = 'application/x-discord-interaction-data';
                    zuuluu = oscard.bind(golfie)(report, zuuluu, tangon);
 451:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 28;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.presentCommandCopied;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            tangon = option.bind(verify)(tangon, golfie);
            _closure2_slot5 = tangon;
            romeon = new Array(0);
            if(!zuuluu) { _fun00024_ip = 330; continue _fun00023 }
 220:
            tangon = romeon.push;
            option = _closure1_slot19;
            backup = _closure1_slot0;
            kiloes = _closure1_slot3;
            zuuluu = 29;
            zuuluu = kiloes[zuuluu];
            zuuluu = backup.bind(report)(zuuluu);
            golfie = zuuluu.TableRow;
            zuuluu = {};
            verify = 20;
            yankee = kiloes[verify];
            yankee = backup.bind(report)(yankee);
            foxtra = yankee.intl;
            yankee = foxtra.string;
            verify = kiloes[verify];
            verify = backup.bind(report)(verify);
            verify = verify.t;
            verify = verify.42H+NT;
            verify = yankee.bind(foxtra)(verify);
            zuuluu['label'] = verify;
            verify = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.hideActionSheet;
                michal = michal.bind(zuuluu)();
                michal = _closure2_slot5;
                michal = michal.bind(entity)();
                return entity;
            };
            zuuluu['onPress'] = verify;
            zuuluu = option.bind(report)(golfie, zuuluu);
            zuuluu = tangon.bind(romeon)(zuuluu);
 330:
            if(!(entity != michal)) { _fun00024_ip = 446; continue _fun00023 }
 334:
            zuuluu = romeon.push;
            golfie = _closure1_slot19;
            foxtra = _closure1_slot0;
            backup = _closure1_slot3;
            michal = 29;
            michal = backup[michal];
            michal = foxtra.bind(report)(michal);
            tangon = michal.TableRow;
            michal = {};
            option = 20;
            verify = backup[option];
            verify = foxtra.bind(report)(verify);
            yankee = verify.intl;
            verify = yankee.string;
            option = backup[option];
            option = foxtra.bind(report)(option);
            option = option.t;
            option = option.lNWC7u;
            option = verify.bind(yankee)(option);
            michal['label'] = option;
            option = function() { // Original name: onPress
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 16;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    michal = michal.bind(zuuluu)();
                    michal = _closure2_slot2;
                    michal = michal.options;
                    report = null;
                    if(!(report != michal)) { _fun00030_ip = 172; continue _fun00029 }
 53:
                    michal = _closure2_slot2;
                    michal = michal.options;
                    michal = michal.length;
                    zuuluu = 0;
                    if(!(michal > zuuluu)) { _fun00030_ip = 172; continue _fun00029 }
 73:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot3;
                    romeon = 14;
                    oscard = michal[romeon];
                    oscard = tangon.bind(entity)(oscard);
                    oscard = oscard.ApplicationCommandOptionType;
                    golfie = oscard.SUB_COMMAND;
                    oscard = new Array(2);
                    oscard[0] = golfie;
                    michal = michal[romeon];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.ApplicationCommandOptionType;
                    michal = michal.SUB_COMMAND_GROUP;
                    oscard[1] = michal;
                    tangon = oscard.includes;
                    michal = _closure2_slot2;
                    michal = michal.options;
                    michal = michal[zuuluu];
                    michal = michal.type;
                    michal = tangon.bind(oscard)(michal);
                    if(michal) { _fun00030_ip = 329; continue _fun00029 }
 172:
                    michal = _closure2_slot1;
                    michal = report == michal;
                    oscard = undefined;
                    if(michal) { _fun00030_ip = 201; continue _fun00029 }
 185:
                    tangon = _closure2_slot1;
                    tangon = tangon.current;
                    michal = report == tangon;
                    oscard = tangon;
 201:
                    if(michal) { _fun00030_ip = 672; continue _fun00029 }
 207:
                    tangon = oscard.openCustomKeyboard;
                    michal = {};
                    golfie = _closure1_slot18;
                    golfie = golfie.APP_LAUNCHER;
                    michal['keyboardType'] = golfie;
                    golfie = {};
                    offset = _closure1_slot14;
                    offset = offset.COMMAND_VIEW;
                    golfie['initialRouteName'] = offset;
                    yankee = _closure1_slot0;
                    foxtra = _closure1_slot3;
                    offset = 30;
                    offset = foxtra[offset];
                    offset = yankee.bind(entity)(offset);
                    offset = offset.ApplicationCommandTriggerLocations;
                    offset = offset.RECALL;
                    golfie['analyticsLocation'] = offset;
                    offset = {};
                    yankee = _closure2_slot2;
                    foxtra = yankee.id;
                    offset['commandId'] = foxtra;
                    yankee = yankee.options;
                    offset['prefilledOptions'] = yankee;
                    golfie['preSelectedCommand'] = offset;
                    michal['context'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    _fun00030_ip = 672; continue _fun00029;
 329:
                    michal = _closure2_slot2;
                    tangon = michal.options;
                    tangon = tangon[zuuluu];
                    tangon = tangon.name;
                    yankee = new Array(1);
                    yankee[0] = tangon;
                    michal = michal.options;
                    michal = michal[zuuluu];
                    michal = michal.options;
                    tangon = report != michal;
                    if(!tangon) { _fun00030_ip = 385; continue _fun00029 }
 376:
                    oscard = michal.length;
                    tangon = oscard > zuuluu;
 385:
                    if(!tangon) { _fun00030_ip = 469; continue _fun00029 }
 388:
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot3;
                    offset = oscard[romeon];
                    offset = golfie.bind(entity)(offset);
                    offset = offset.ApplicationCommandOptionType;
                    foxtra = offset.SUB_COMMAND;
                    offset = new Array(2);
                    offset[0] = foxtra;
                    oscard = oscard[romeon];
                    oscard = golfie.bind(entity)(oscard);
                    oscard = oscard.ApplicationCommandOptionType;
                    oscard = oscard.SUB_COMMAND_GROUP;
                    offset[1] = oscard;
                    golfie = offset.includes;
                    oscard = michal[zuuluu];
                    oscard = oscard.type;
                    tangon = golfie.bind(offset)(oscard);
 469:
                    golfie = michal;
                    if(!tangon) { _fun00030_ip = 503; continue _fun00029 }
 475:
                    oscard = yankee.push;
                    tangon = michal[zuuluu];
                    tangon = tangon.name;
                    tangon = oscard.bind(yankee)(tangon);
                    michal = michal[zuuluu];
                    golfie = michal.options;
 503:
                    michal = _closure2_slot1;
                    michal = report == michal;
                    tangon = undefined;
                    if(michal) { _fun00030_ip = 532; continue _fun00029 }
 516:
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.current;
                    michal = report == zuuluu;
                    tangon = zuuluu;
 532:
                    if(michal) { _fun00030_ip = 672; continue _fun00029 }
 538:
                    zuuluu = tangon.openCustomKeyboard;
                    michal = {};
                    report = _closure1_slot18;
                    report = report.APP_LAUNCHER;
                    michal['keyboardType'] = report;
                    report = {};
                    oscard = _closure1_slot14;
                    oscard = oscard.COMMAND_VIEW;
                    report['initialRouteName'] = oscard;
                    offset = _closure1_slot0;
                    romeon = _closure1_slot3;
                    oscard = 30;
                    oscard = romeon[oscard];
                    oscard = offset.bind(entity)(oscard);
                    oscard = oscard.ApplicationCommandTriggerLocations;
                    oscard = oscard.RECALL;
                    report['analyticsLocation'] = oscard;
                    oscard = {};
                    option = _closure2_slot2;
                    option = option.id;
                    offset = _closure1_slot11;
                    verify = option + offset;
                    option = yankee.join;
                    option = option.bind(yankee)(offset);
                    option = verify + option;
                    oscard['commandId'] = option;
                    oscard['prefilledOptions'] = golfie;
                    report['preSelectedCommand'] = oscard;
                    michal['context'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 672:
                    return entity;
                }
            };
            michal['onPress'] = option;
            michal = golfie.bind(report)(tangon, michal);
            michal = zuuluu.bind(romeon)(michal);
 446:
            zuuluu = romeon.length;
            michal = 0;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00024_ip = 664; continue _fun00023 }
 462:
            tangon = _closure1_slot20;
            option = _closure1_slot0;
            yankee = _closure1_slot3;
            michal = 31;
            michal = yankee[michal];
            michal = option.bind(report)(michal);
            zuuluu = michal.Stack;
            michal = {};
            golfie = 8;
            michal['spacing'] = golfie;
            verify = _closure1_slot19;
            oscard = 19;
            oscard = yankee[oscard];
            oscard = option.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            foxtra = 20;
            backup = yankee[foxtra];
            backup = option.bind(report)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            foxtra = yankee[foxtra];
            foxtra = option.bind(report)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.3eF5/P;
            foxtra = backup.bind(kiloes)(foxtra);
            oscard['children'] = foxtra;
            golfie = verify.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = 32;
            golfie = yankee[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.TableRowGroup;
            golfie = {};
            yankee = romeon.map;
            offset = function(argFoo, argBar) {
                report = _closure1_slot19;
                entity = _closure1_slot4;
                tangon = entity.Fragment;
                zuuluu = {};
                entity = argFoo;
                zuuluu['children'] = entity;
                michal = undefined;
                entity = argBar;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            };
            offset = yankee.bind(romeon)(offset);
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 664:
            return entity;
        }
    };
    var _closure1_slot26 = tangon;
    tangon = 36;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/native/ExecutedApplicationCommandPopout.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            vacuum = entity.user;
            result = entity.channelId;
            var _closure2_slot0 = result;
            output = entity.chatInputRef;
            ctrled = entity.messageId;
            var _closure2_slot1 = ctrled;
            source = entity.author;
            update = entity.applicationUser;
            sequen = entity.guildId;
            echoed = entity.messageType;
            entity = _closure1_slot22;
            tangon = undefined;
            offset = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot3;
            entity = 22;
            entity = golfie[entity];
            oscard = zuuluu.bind(tangon)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.getMessage;
                michal = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            sizing = report.bind(oscard)(zuuluu, entity);
            var _closure2_slot2 = sizing;
            oscard = _closure1_slot1;
            entity = 21;
            zuuluu = golfie[entity];
            report = oscard.bind(tangon)(zuuluu);
            zuuluu = 33;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.EXECUTED_COMMAND;
            zuuluu = report.bind(tangon)(zuuluu);
            report = zuuluu.analyticsLocations;
            golfie = _closure1_slot4;
            oscard = golfie.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = result;
            zuuluu[1] = ctrled;
            kiloes = null;
            verify = kiloes == sizing;
            option = undefined;
            if(verify) { _fun00032_ip = 207; continue _fun00031 }
 201:
            option = sizing.interactionData;
 207:
            zuuluu[2] = option;
            michal = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = _closure2_slot2;
                    oscard = null;
                    tangon = oscard == entity;
                    entity = undefined;
                    zuuluu = undefined;
                    if(tangon) { _fun00034_ip = 30; continue _fun00033 }
 20:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.interactionData;
 30:
                    zuuluu = oscard == zuuluu;
                    if(zuuluu) { _fun00034_ip = 143; continue _fun00033 }
 37:
                    tangon = _closure2_slot2;
                    tangon = oscard == tangon;
                    report = undefined;
                    if(tangon) { _fun00034_ip = 65; continue _fun00033 }
 50:
                    tangon = _closure2_slot2;
                    tangon = tangon.interactionData;
                    report = tangon.type;
 65:
                    golfie = _closure1_slot0;
                    option = _closure1_slot3;
                    tangon = 14;
                    tangon = option[tangon];
                    tangon = golfie.bind(entity)(tangon);
                    tangon = tangon.ApplicationCommandType;
                    tangon = tangon.CHAT;
                    tangon = report === tangon;
                    if(!tangon) { _fun00034_ip = 140; continue _fun00033 }
 107:
                    report = _closure2_slot2;
                    oscard = oscard == report;
                    report = undefined;
                    if(oscard) { _fun00034_ip = 136; continue _fun00033 }
 120:
                    oscard = _closure2_slot2;
                    oscard = oscard.interactionData;
                    report = oscard.application_command;
 136:
                    tangon = entity === report;
 140:
                    zuuluu = tangon;
 143:
                    if(!zuuluu) { _fun00034_ip = 189; continue _fun00033 }
 146:
                    tangon = _closure1_slot2;
                    report = _closure1_slot3;
                    zuuluu = 34;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.fetchMessageInteractionData;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = tangon.bind(report)(zuuluu, michal);
 189:
                    return entity;
                }
            };
            michal = oscard.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot19;
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            report = 35;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            oscard = report.BottomSheet;
            report = {};
            golfie = true;
            report['startExpanded'] = golfie;
            golfie = offset.container;
            report['bodyStyles'] = golfie;
            option = kiloes == sizing;
            golfie = undefined;
            if(option) { _fun00032_ip = 309; continue _fun00031 }
 303:
            golfie = sizing.interactionData;
 309:
            if(!(kiloes == golfie)) { _fun00032_ip = 352; continue _fun00031 }
 313:
            verify = _closure1_slot19;
            option = _closure1_slot5;
            golfie = {};
            offset = offset.activityIndicator;
            golfie['style'] = offset;
            offset = 'large';
            golfie['size'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            _fun00032_ip = 494; continue _fun00031;
 352:
            offset = _closure1_slot20;
            verify = _closure1_slot21;
            option = {};
            backup = _closure1_slot19;
            foxtra = _closure1_slot25;
            yankee = {};
            yankee['guildId'] = sequen;
            yankee['user'] = vacuum;
            yankee['channelId'] = result;
            yankee['messageId'] = ctrled;
            yankee['author'] = source;
            yankee['applicationUser'] = update;
            source = kiloes == sizing;
            update = undefined;
            if(source) { _fun00032_ip = 413; continue _fun00031 }
 407:
            update = sizing.interactionData;
 413:
            yankee['data'] = update;
            yankee['messageType'] = echoed;
            foxtra = backup.bind(tangon)(foxtra, yankee);
            yankee = new Array(2);
            yankee[0] = foxtra;
            backup = _closure1_slot19;
            foxtra = _closure1_slot26;
            romeon = {};
            romeon['channelId'] = result;
            romeon['chatInputRef'] = output;
            output = kiloes == sizing;
            kiloes = undefined;
            if(output) { _fun00032_ip = 470; continue _fun00031 }
 464:
            kiloes = sizing.interactionData;
 470:
            romeon['data'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            yankee[1] = romeon;
            option['children'] = yankee;
            golfie = offset.bind(tangon)(verify, option);
 494:
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();