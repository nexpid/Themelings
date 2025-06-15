// app/modules/application_commands/native/ApplicationCommandManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
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
            verify = _closure1_slot17;
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
            golfie = _closure1_slot17;
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
    var _closure1_slot16 = entity;
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
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    verify = 0;
    tangon = oscard[verify];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    option = 1;
    tangon = oscard[option];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DraftType;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot9 = golfie;
    golfie = tangon.AutoCompleteResultTypes;
    var _closure1_slot10 = golfie;
    tangon = tangon.WHITESPACE_RE;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.COMMAND_SENTINEL;
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MediaKeyboardTarget;
    var _closure1_slot13 = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getNextOption
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argBar;
            var _closure2_slot0 = michal;
            michal = argBaz;
            var _closure2_slot1 = michal;
            michal = argFoo;
            tangon = michal.options;
            report = null;
            michal = report == tangon;
            zuuluu = undefined;
            if(michal) { _fun00008_ip = 52; continue _fun00007 }
 35:
            michal = tangon.filter;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    entity = michal.required;
                    if(entity) { _fun00010_ip = 19; continue _fun00009 }
 12:
                    entity = _closure2_slot1;
 19:
                    if(!entity) { _fun00010_ip = 47; continue _fun00009 }
 22:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.has;
                    michal = michal.name;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = !michal;
 47:
                    return entity;
                }
            };
            zuuluu = michal.bind(tangon)(entity);
 52:
            michal = report != zuuluu;
            entity = null;
            if(!michal) { _fun00008_ip = 81; continue _fun00007 }
 61:
            tangon = zuuluu.length;
            michal = 0;
            tangon = tangon > michal;
            entity = null;
            if(!tangon) { _fun00008_ip = 81; continue _fun00007 }
 77:
            entity = zuuluu[michal];
 81:
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    tangon = {};
    tangon['FULL_COMMAND'] = verify;
    golfie = 'FULL_COMMAND';
    tangon[verify] = golfie;
    tangon['PARTIAL_COMMAND'] = option;
    golfie = 'PARTIAL_COMMAND';
    tangon[option] = golfie;
    var _closure1_slot15 = tangon;
    michal = function() {
        tangon = _closure1_slot6;
        zuuluu = function(argFoo) { // Original name: ApplicationCommandManager
            michal = argFoo;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            var _closure3_slot1 = zuuluu;
            golfie = _closure1_slot5;
            oscard = _closure2_slot0;
            entity = undefined;
            oscard = golfie.bind(entity)(zuuluu, oscard);
            oscard = new Array(0);
            zuuluu['chatInputNodes'] = oscard;
            oscard = global;
            golfie = oscard.Map;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            yankee = option;
            golfie = new yankee[golfie](offset);
            golfie = golfie instanceof Object ? golfie : option;
            zuuluu['optionsToNodes'] = golfie;
            oscard = oscard.Map;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            yankee = golfie;
            oscard = new yankee[oscard](offset);
            oscard = oscard instanceof Object ? oscard : golfie;
            zuuluu['optionValueNodes'] = oscard;
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            report = 8;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            yankee = oscard;
            report = new yankee[report](offset);
            report = report instanceof Object ? report : oscard;
            zuuluu['parser'] = report;
            report = {};
            zuuluu['optionValues'] = report;
            report = {};
            zuuluu['optionValidationResults'] = report;
            report = true;
            zuuluu['canAutoInsertFirstOption'] = report;
            report = {};
            zuuluu['preferredOptionValues'] = report;
            report = function(argFoo, argBar, argBaz, argCor) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    option = argFoo;
                    tangon = argCor;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    report = entity.activeCommand;
                    oscard = _closure1_slot8;
                    zuuluu = oscard.getActiveOption;
                    oscard = zuuluu.bind(oscard)(option);
                    zuuluu = argBaz;
                    if(!zuuluu) { _fun00012_ip = 58; continue _fun00011 }
 48:
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00012_ip = 58; continue _fun00011 }
 54:
                    if(!(zuuluu == oscard)) { _fun00012_ip = 163; continue _fun00011 }
 58:
                    report = tangon.type;
                    zuuluu = _closure1_slot10;
                    zuuluu = zuuluu.SLASH;
                    if(!(report === zuuluu)) { _fun00012_ip = 159; continue _fun00011 }
 77:
                    golfie = _closure3_slot0;
                    report = golfie.setCommand;
                    zuuluu = {};
                    zuuluu['channelId'] = option;
                    option = tangon.command;
                    zuuluu['command'] = option;
                    option = tangon.section;
                    zuuluu['section'] = option;
                    option = tangon.location;
                    zuuluu['location'] = option;
                    option = tangon.visualSection;
                    zuuluu['visualSection'] = option;
                    option = tangon.query;
                    zuuluu['query'] = option;
                    option = true;
                    zuuluu['addSpace'] = option;
                    zuuluu = report.bind(golfie)(zuuluu);
                    _fun00012_ip = 343; continue _fun00011;
 159:
                    zuuluu = false;
                    return zuuluu;
 163:
                    report = tangon.type;
                    zuuluu = _closure1_slot10;
                    zuuluu = zuuluu.USER;
                    if(!(zuuluu !== report)) { _fun00012_ip = 266; continue _fun00011 }
 182:
                    zuuluu = _closure1_slot10;
                    zuuluu = zuuluu.ROLE;
                    if(!(zuuluu !== report)) { _fun00012_ip = 241; continue _fun00011 }
 196:
                    entity = _closure1_slot10;
                    zuuluu = entity.CHANNEL;
                    entity = undefined;
                    if(!(zuuluu === report)) { _fun00012_ip = 295; continue _fun00011 }
 212:
                    zuuluu = {};
                    report = 'channelMention';
                    zuuluu['type'] = report;
                    report = tangon.channel;
                    report = report.id;
                    zuuluu['channelId'] = report;
                    entity = zuuluu;
                    _fun00012_ip = 295; continue _fun00011;
 241:
                    zuuluu = {};
                    report = 'roleMention';
                    zuuluu['type'] = report;
                    report = tangon.id;
                    zuuluu['roleId'] = report;
                    entity = zuuluu;
                    _fun00012_ip = 295; continue _fun00011;
 266:
                    zuuluu = {};
                    report = 'userMention';
                    zuuluu['type'] = report;
                    tangon = tangon.user;
                    tangon = tangon.id;
                    zuuluu['userId'] = tangon;
                    entity = zuuluu;
 295:
                    report = _closure3_slot0;
                    tangon = report.insertOrJumpCommandOption;
                    zuuluu = {};
                    michal = argBar;
                    zuuluu['displayText'] = michal;
                    michal = true;
                    zuuluu['preferred'] = michal;
                    zuuluu['value'] = entity;
                    yankee = undefined;
                    offset = false;
                    foxtra = report;
                    romeon = oscard;
                    verify = zuuluu;
                    entity = foxtra[tangon](romeon, yankee, offset, verify, option);
 343:
                    entity = true;
                    return entity;
                }
            };
            zuuluu['setAutoCompleteResult'] = report;
            report = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    kiloes = entity.channelId;
                    golfie = entity.command;
                    backup = entity.section;
                    verify = entity.location;
                    romeon = entity.visualSection;
                    offset = entity.query;
                    yankee = entity.addSpace;
                    report = entity.commandText;
                    entity = _closure3_slot0;
                    entity = entity.ref;
                    zuuluu = entity.current;
                    entity = zuuluu.setText;
                    tangon = null;
                    if(!(tangon == report)) { _fun00014_ip = 122; continue _fun00013 }
 76:
                    sizing = _closure1_slot12;
                    foxtra = golfie.displayName;
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    option = oscard.concat;
                    oscard = '';
                    option = option.bind(oscard)(sizing, foxtra);
                    if(!yankee) { _fun00014_ip = 118; continue _fun00013 }
 114:
                    oscard = ' ';
 118:
                    report = option + oscard;
 122:
                    entity = entity.bind(zuuluu)(report);
                    yankee = _closure1_slot0;
                    foxtra = _closure1_slot3;
                    entity = 9;
                    zuuluu = foxtra[entity];
                    entity = undefined;
                    option = yankee.bind(entity)(zuuluu);
                    report = option.setActiveCommand;
                    zuuluu = {};
                    zuuluu['channelId'] = kiloes;
                    zuuluu['command'] = golfie;
                    zuuluu['section'] = backup;
                    zuuluu['location'] = verify;
                    verify = 10;
                    verify = foxtra[verify];
                    yankee = yankee.bind(entity)(verify);
                    verify = yankee.getCommandTriggerSection;
                    verify = verify.bind(yankee)(romeon);
                    zuuluu['triggerSection'] = verify;
                    yankee = tangon == offset;
                    verify = undefined;
                    if(yankee) { _fun00014_ip = 219; continue _fun00013 }
 214:
                    verify = offset.length;
 219:
                    zuuluu['queryLength'] = verify;
                    zuuluu = report.bind(option)(zuuluu);
                    report = golfie.id;
                    zuuluu = _closure3_slot0;
                    option = tangon == zuuluu;
                    zuuluu = undefined;
                    if(option) { _fun00014_ip = 271; continue _fun00013 }
 247:
                    option = _closure3_slot0;
                    option = option.preferredCommand;
                    verify = tangon == option;
                    zuuluu = undefined;
                    if(verify) { _fun00014_ip = 271; continue _fun00013 }
 266:
                    zuuluu = option.id;
 271:
                    if(!(report !== zuuluu)) { _fun00014_ip = 336; continue _fun00013 }
 275:
                    zuuluu = _closure3_slot0;
                    if(!(tangon != zuuluu)) { _fun00014_ip = 336; continue _fun00013 }
 283:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.updateApplicationCommandManagerState;
                    michal = {};
                    report = {};
                    result = report;
                    output = golfie;
                    golfie = copyDataProperties(result, output);
                    oscard = _closure1_slot15;
                    golfie = oscard.FULL_COMMAND;
                    oscard = 'preferredCommandType';
                    report[oscard] = golfie;
                    michal['preferredCommand'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 336:
                    return entity;
                }
            };
            zuuluu['setCommand'] = report;
            report = function(argFoo, argBar, argBaz) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    option = argFoo;
                    golfie = argBar;
                    entity = _closure3_slot0;
                    zuuluu = entity.ref;
                    report = zuuluu.current;
                    tangon = report.setText;
                    offset = _closure1_slot12;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    verify = zuuluu.concat;
                    zuuluu = '';
                    zuuluu = verify.bind(zuuluu)(offset, golfie);
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = entity.preferredCommand;
                    entity = null;
                    report = entity == tangon;
                    entity = undefined;
                    zuuluu = undefined;
                    if(report) { _fun00016_ip = 88; continue _fun00015 }
 83:
                    zuuluu = tangon.id;
 88:
                    if(!(option !== zuuluu)) { _fun00016_ip = 151; continue _fun00015 }
 92:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.updateApplicationCommandManagerState;
                    michal = {};
                    report = {};
                    report['id'] = option;
                    report['untranslatedName'] = golfie;
                    report['displayName'] = golfie;
                    oscard = _closure1_slot15;
                    oscard = oscard.PARTIAL_COMMAND;
                    report['preferredCommandType'] = oscard;
                    michal['preferredCommand'] = report;
                    report = argBaz;
                    michal['location'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 151:
                    return entity;
                }
            };
            zuuluu['setPartialCommand'] = report;
            report = function(argFoo, argBar) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    yankee = argBar;
                    golfie = global;
                    tangon = golfie.JSON;
                    zuuluu = tangon.parse;
                    entity = argFoo;
                    zuuluu = zuuluu.bind(tangon)(entity);
                    report = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 10;
                    tangon = verify[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.extractInteractionDataProps;
                    tangon = tangon.bind(report)(zuuluu);
                    offset = tangon.commandKey;
                    option = tangon.interactionOptions;
                    report = _closure1_slot2;
                    tangon = 11;
                    tangon = verify[tangon];
                    verify = report.bind(entity)(tangon);
                    report = verify.getCachedCommand;
                    tangon = {};
                    romeon = 'channel';
                    tangon['type'] = romeon;
                    tangon['channel'] = yankee;
                    report = report.bind(verify)(tangon, offset);
                    tangon = report.application;
                    report = report.command;
                    var _closure4_slot0 = report;
                    verify = null;
                    if(!(verify == report)) { _fun00018_ip = 205; continue _fun00017 }
 138:
                    backup = _closure3_slot0;
                    foxtra = backup.setPartialCommand;
                    romeon = zuuluu.id;
                    offset = zuuluu.name;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot3;
                    zuuluu = 12;
                    zuuluu = sizing[zuuluu];
                    zuuluu = kiloes.bind(entity)(zuuluu);
                    zuuluu = zuuluu.ApplicationCommandTriggerLocations;
                    zuuluu = zuuluu.PASTE;
                    zuuluu = foxtra.bind(backup)(romeon, offset, zuuluu);
                    _fun00018_ip = 558; continue _fun00017;
 205:
                    zuuluu = verify != tangon;
                    offset = null;
                    if(!zuuluu) { _fun00018_ip = 310; continue _fun00017 }
 214:
                    zuuluu = {};
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot3;
                    romeon = 12;
                    romeon = backup[romeon];
                    romeon = foxtra.bind(entity)(romeon);
                    romeon = romeon.ApplicationCommandSectionType;
                    romeon = romeon.APPLICATION;
                    zuuluu['type'] = romeon;
                    romeon = tangon.id;
                    zuuluu['id'] = romeon;
                    romeon = tangon.icon;
                    zuuluu['icon'] = romeon;
                    foxtra = tangon.bot;
                    backup = verify == foxtra;
                    romeon = undefined;
                    if(backup) { _fun00018_ip = 290; continue _fun00017 }
 285:
                    romeon = foxtra.username;
 290:
                    if(!(verify == romeon)) { _fun00018_ip = 299; continue _fun00017 }
 294:
                    romeon = tangon.name;
 299:
                    zuuluu['name'] = romeon;
                    zuuluu['application'] = tangon;
                    offset = zuuluu;
 310:
                    tangon = _closure1_slot0;
                    romeon = _closure1_slot3;
                    zuuluu = 13;
                    zuuluu = romeon[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.getInitialValuesFromInteractionOptions;
                    if(!(verify == option)) { _fun00018_ip = 344; continue _fun00017 }
 340:
                    option = new Array(0);
 344:
                    option = zuuluu.bind(tangon)(report, option);
                    var _closure4_slot1 = option;
                    tangon = golfie.Object;
                    zuuluu = tangon.keys;
                    option = zuuluu.bind(tangon)(option);
                    tangon = option.map;
                    zuuluu = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            oscard = argFoo;
                            var _closure5_slot0 = oscard;
                            entity = _closure4_slot0;
                            verify = entity.options;
                            entity = null;
                            golfie = entity == verify;
                            michal = undefined;
                            if(golfie) { _fun00020_ip = 50; continue _fun00019 }
 32:
                            option = verify.find;
                            golfie = function(argFoo) {
                                entity = argFoo;
                                michal = entity.name;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            michal = option.bind(verify)(golfie);
 50:
                            report = _closure4_slot1;
                            report = report[oscard];
                            var _closure5_slot1 = report;
                            if(!(entity != michal)) { _fun00020_ip = 179; continue _fun00019 }
 66:
                            if(!(entity != report)) { _fun00020_ip = 179; continue _fun00019 }
 70:
                            golfie = report.value;
                            report = entity == golfie;
                            oscard = undefined;
                            if(report) { _fun00020_ip = 93; continue _fun00019 }
 84:
                            report = golfie.toString;
                            oscard = report.bind(golfie)();
 93:
                            report = michal.choices;
                            if(!(entity != report)) { _fun00020_ip = 144; continue _fun00019 }
 103:
                            golfie = michal.choices;
                            report = golfie.find;
                            tangon = function(argFoo) {
                                entity = argFoo;
                                michal = entity.value;
                                entity = _closure5_slot1;
                                entity = entity.value;
                                entity = michal === entity;
                                return entity;
                            };
                            tangon = report.bind(golfie)(tangon);
                            report = entity == tangon;
                            zuuluu = undefined;
                            if(report) { _fun00020_ip = 141; continue _fun00019 }
 136:
                            zuuluu = tangon.displayName;
 141:
                            oscard = zuuluu;
 144:
                            report = michal.displayName;
                            michal = global;
                            michal = michal.HermesInternal;
                            tangon = michal.concat;
                            zuuluu = '';
                            michal = ':';
                            michal = tangon.bind(zuuluu)(report, michal, oscard);
                            return michal;
 179:
                            return entity;
                        }
                    };
                    tangon = tangon.bind(option)(zuuluu);
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        michal = null;
                        entity = argFoo;
                        entity = michal != entity;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.join;
                    verify = ' ';
                    option = michal.bind(zuuluu)(verify);
                    tangon = _closure3_slot0;
                    zuuluu = tangon.setCommand;
                    michal = {};
                    yankee = yankee.id;
                    michal['channelId'] = yankee;
                    michal['command'] = report;
                    michal['section'] = offset;
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot3;
                    offset = 12;
                    offset = romeon[offset];
                    offset = yankee.bind(entity)(offset);
                    offset = offset.ApplicationCommandTriggerLocations;
                    offset = offset.PASTE;
                    michal['location'] = offset;
                    yankee = _closure1_slot12;
                    offset = report.displayName;
                    report = golfie.HermesInternal;
                    oscard = report.concat;
                    report = '';
                    oscard = oscard.bind(report)(yankee, offset);
                    yankee = option.length;
                    offset = 0;
                    if(!(offset !== yankee)) { _fun00018_ip = 544; continue _fun00017 }
 528:
                    golfie = golfie.HermesInternal;
                    golfie = golfie.concat;
                    report = golfie.bind(verify)(option);
 544:
                    report = oscard + report;
                    michal['commandText'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 558:
                    return entity;
                }
            };
            zuuluu['setPastedCommand'] = report;
            report = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.newState;
                    oscard = entity.preferredCommand;
                    report = entity.location;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.mergePropsAndUpdate;
                    entity = {};
                    option = null;
                    if(!(option == tangon)) { _fun00022_ip = 52; continue _fun00021 }
 43:
                    golfie = _closure3_slot0;
                    tangon = golfie.props;
 52:
                    offset = entity;
                    verify = tangon;
                    tangon = copyDataProperties(offset, verify);
                    tangon = 'preferredCommand';
                    entity[tangon] = oscard;
                    tangon = 'location';
                    entity[tangon] = report;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['updateApplicationCommandManagerState'] = report;
            report = function() {
                michal = _closure3_slot0;
                verify = michal.parser;
                tangon = verify.addRule;
                zuuluu = {'ruleId': 'commandOptionParserRuleId', 'type': null, 'matchFunction': null, 'style': null, 'deleteNodeOnBackspace': true, 'editDisabled': true};
                golfie = _closure1_slot0;
                option = _closure1_slot3;
                oscard = 8;
                offset = option[oscard];
                entity = undefined;
                offset = golfie.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.COMMAND_OPTION;
                zuuluu['type'] = offset;
                offset = function(argFoo, argBar) { // Original name: matchFunction
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getMatchedOptions;
                    michal = argFoo;
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    michal = entity.styles;
                    entity = michal.commandOption;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['style'] = offset;
                zuuluu = tangon.bind(verify)(zuuluu);
                verify = michal.parser;
                tangon = verify.addRule;
                zuuluu = {};
                offset = 'commandOptionValueParserRuleId';
                zuuluu['ruleId'] = offset;
                offset = option[oscard];
                offset = golfie.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.COMMAND_OPTION_WITH_VALUE;
                zuuluu['type'] = offset;
                offset = function(argFoo, argBar) { // Original name: matchFunction
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getMatchedOptionsWithValue;
                    michal = argFoo;
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    michal = entity.styles;
                    entity = michal.commandOption;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['style'] = offset;
                offset = function(argFoo) { // Original name: editDisabled
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        entity = argFoo;
                        entity = entity.data;
                        michal = null;
                        zuuluu = michal == entity;
                        tangon = undefined;
                        michal = undefined;
                        if(zuuluu) { _fun00024_ip = 32; continue _fun00023 }
 21:
                        entity = entity.option;
                        michal = entity.type;
 32:
                        zuuluu = _closure1_slot0;
                        report = _closure1_slot3;
                        entity = 15;
                        entity = report[entity];
                        entity = zuuluu.bind(tangon)(entity);
                        entity = entity.ApplicationCommandOptionType;
                        entity = entity.ATTACHMENT;
                        entity = michal === entity;
                        return entity;
                    }
                };
                zuuluu['editDisabled'] = offset;
                zuuluu = tangon.bind(verify)(zuuluu);
                verify = michal.parser;
                tangon = verify.addRule;
                zuuluu = {};
                offset = 'emojiHighlightRuleId';
                zuuluu['ruleId'] = offset;
                offset = option[oscard];
                offset = golfie.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.EMOJI_HIGHLIGHT;
                zuuluu['type'] = offset;
                offset = function(argFoo) { // Original name: matchFunction
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getEmojiHighlightNodes;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    michal = entity.channel;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    michal = entity.styles;
                    entity = michal.autocomplete;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['style'] = offset;
                offset = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                zuuluu['editDisabled'] = offset;
                zuuluu = tangon.bind(verify)(zuuluu);
                verify = michal.parser;
                tangon = verify.addRule;
                zuuluu = {};
                offset = 'roleHighlightRuleId';
                zuuluu['ruleId'] = offset;
                offset = option[oscard];
                offset = golfie.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.ROLE_HIGHLIGHT;
                zuuluu['type'] = offset;
                offset = function(argFoo) { // Original name: matchFunction
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getRoleHighlightNodes;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    michal = entity.channel;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu['matchFunction'] = offset;
                offset = function(argFoo) { // Original name: style
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        entity = argFoo;
                        entity = entity.data;
                        report = null;
                        michal = report == entity;
                        tangon = undefined;
                        if(michal) { _fun00026_ip = 24; continue _fun00025 }
 19:
                        tangon = entity.color;
 24:
                        entity = _closure3_slot0;
                        michal = entity.styles;
                        entity = michal.autocomplete;
                        report = report != tangon;
                        zuuluu = undefined;
                        if(!report) { _fun00026_ip = 55; continue _fun00025 }
 52:
                        zuuluu = tangon;
 55:
                        entity = entity.bind(michal)(zuuluu);
                        return entity;
                    }
                };
                zuuluu['style'] = offset;
                offset = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                zuuluu['editDisabled'] = offset;
                zuuluu = tangon.bind(verify)(zuuluu);
                verify = michal.parser;
                tangon = verify.addRule;
                zuuluu = {};
                offset = 'userHighlightRuleId';
                zuuluu['ruleId'] = offset;
                offset = option[oscard];
                offset = golfie.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.USER_HIGHLIGHT;
                zuuluu['type'] = offset;
                offset = function(argFoo) { // Original name: matchFunction
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getUsernameHighlightNodes;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    michal = entity.channel;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    michal = entity.styles;
                    entity = michal.autocomplete;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['style'] = offset;
                offset = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                zuuluu['editDisabled'] = offset;
                zuuluu = tangon.bind(verify)(zuuluu);
                verify = michal.parser;
                tangon = verify.addRule;
                zuuluu = {};
                offset = 'channelHighlightRuleId';
                zuuluu['ruleId'] = offset;
                offset = option[oscard];
                offset = golfie.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.CHANNEL_HIGHLIGHT;
                zuuluu['type'] = offset;
                offset = function(argFoo) { // Original name: matchFunction
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getChannelHighlightNodes;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    michal = entity.channel;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    michal = entity.styles;
                    entity = michal.autocomplete;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['style'] = offset;
                offset = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                zuuluu['editDisabled'] = offset;
                zuuluu = tangon.bind(verify)(zuuluu);
                tangon = michal.parser;
                zuuluu = tangon.addRule;
                michal = {};
                verify = 'silentHighlightRuleId';
                michal['ruleId'] = verify;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.ChatInputNodeType;
                oscard = oscard.SILENT_HIGHLIGHT;
                michal['type'] = oscard;
                oscard = function(argFoo) { // Original name: matchFunction
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.getSilentHighlightNodes;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['matchFunction'] = oscard;
                oscard = function() { // Original name: style
                    entity = _closure3_slot0;
                    michal = entity.styles;
                    entity = michal.autocomplete;
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal['style'] = oscard;
                report = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                michal['editDisabled'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['addCommandOptionParserRules'] = report;
            report = function(argFoo, argBar, argBaz, argCor) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    verify = argFoo;
                    tangon = argBar;
                    zuuluu = argBaz;
                    var _closure4_slot0 = tangon;
                    var _closure4_slot1 = zuuluu;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    michal = entity.commandsDisabled;
                    entity = null;
                    if(!(entity != verify)) { _fun00028_ip = 660; continue _fun00027 }
 46:
                    if(michal) { _fun00028_ip = 660; continue _fun00027 }
 52:
                    oscard = verify.startsWith;
                    michal = _closure1_slot12;
                    michal = oscard.bind(verify)(michal);
                    if(!michal) { _fun00028_ip = 660; continue _fun00027 }
 76:
                    oscard = _closure1_slot0;
                    offset = _closure1_slot3;
                    michal = 14;
                    michal = offset[michal];
                    offset = undefined;
                    oscard = oscard.bind(offset)(michal);
                    michal = oscard.getTextBeforeFirstOption;
                    michal = michal.bind(oscard)(verify);
                    oscard = michal.match;
                    var _closure4_slot2 = oscard;
                    romeon = michal.text;
                    michal = entity != zuuluu;
                    oscard = false;
                    if(!michal) { _fun00028_ip = 247; continue _fun00027 }
 133:
                    foxtra = romeon.startsWith;
                    sizing = _closure1_slot12;
                    backup = zuuluu.displayName;
                    michal = global;
                    yankee = michal.HermesInternal;
                    yankee = yankee.concat;
                    kiloes = '';
                    yankee = yankee.bind(kiloes)(sizing, backup);
                    yankee = foxtra.bind(romeon)(yankee);
                    if(yankee) { _fun00028_ip = 222; continue _fun00027 }
 179:
                    yankee = romeon.startsWith;
                    backup = _closure1_slot12;
                    foxtra = zuuluu.untranslatedName;
                    michal = michal.HermesInternal;
                    michal = michal.concat;
                    michal = michal.bind(kiloes)(backup, foxtra);
                    michal = yankee.bind(romeon)(michal);
                    oscard = false;
                    if(!michal) { _fun00028_ip = 247; continue _fun00027 }
 222:
                    verify = zuuluu.preferredCommandType;
                    michal = _closure1_slot15;
                    michal = michal.FULL_COMMAND;
                    oscard = true;
                    if(!(verify !== michal)) { _fun00028_ip = 644; continue _fun00027 }
 247:
                    michal = _closure3_slot0;
                    michal = michal.contextCommands;
                    if(!(entity != michal)) { _fun00028_ip = 642; continue _fun00027 }
 264:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot3;
                    michal = 16;
                    michal = yankee[michal];
                    foxtra = verify.bind(offset)(michal);
                    yankee = foxtra.getCommandContext;
                    verify = {};
                    verify['channel'] = tangon;
                    michal = 'channel';
                    verify['type'] = michal;
                    verify = yankee.bind(foxtra)(verify);
                    var _closure4_slot3 = verify;
                    verify = entity == zuuluu;
                    yankee = undefined;
                    if(verify) { _fun00028_ip = 328; continue _fun00027 }
 322:
                    yankee = zuuluu.preferredCommandType;
 328:
                    verify = _closure1_slot15;
                    verify = verify.PARTIAL_COMMAND;
                    if(!(yankee !== verify)) { _fun00028_ip = 448; continue _fun00027 }
 342:
                    yankee = romeon.slice;
                    verify = 1;
                    foxtra = yankee.bind(romeon)(verify);
                    romeon = foxtra.split;
                    yankee = ' ';
                    verify = 3;
                    kiloes = romeon.bind(foxtra)(yankee, verify);
                    var _closure4_slot4 = kiloes;
                    backup = function() { // Original name: _loop
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            oscard = _closure4_slot4;
                            report = oscard.slice;
                            michal = _closure4_slot4;
                            zuuluu = michal.length;
                            michal = _closure4_slot5;
                            zuuluu = zuuluu - michal;
                            michal = 0;
                            oscard = report.bind(oscard)(michal, zuuluu);
                            report = oscard.join;
                            zuuluu = ' ';
                            foxtra = report.bind(oscard)(zuuluu);
                            var _closure5_slot0 = foxtra;
                            report = _closure1_slot0;
                            backup = _closure1_slot3;
                            zuuluu = 10;
                            zuuluu = backup[zuuluu];
                            option = undefined;
                            yankee = report.bind(option)(zuuluu);
                            offset = yankee.getMatchingGroupCommands;
                            zuuluu = _closure3_slot1;
                            verify = zuuluu.contextCommands;
                            zuuluu = global;
                            romeon = zuuluu.RegExp;
                            golfie = _closure1_slot1;
                            report = 17;
                            report = backup[report];
                            golfie = golfie.bind(option)(report);
                            report = golfie.escape;
                            golfie = report.bind(golfie)(foxtra);
                            zuuluu = zuuluu.HermesInternal;
                            report = zuuluu.concat;
                            zuuluu = '^';
                            result = report.bind(zuuluu)(golfie);
                            zuuluu = romeon.prototype;
                            report = Object.create(zuuluu, {constructor: {value: romeon}});
                            output = 'i';
                            echoed = report;
                            zuuluu = new echoed[romeon](result, output, sizing);
                            output = zuuluu instanceof Object ? zuuluu : report;
                            sizing = _closure4_slot3;
                            kiloes = 2;
                            echoed = yankee;
                            result = verify;
                            zuuluu = echoed[offset](result, output, sizing, kiloes, backup);
                            report = zuuluu.filter;
                            tangon = function(argFoo) {
                                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                    tangon = argFoo;
                                    michal = tangon.inputType;
                                    report = _closure1_slot0;
                                    zuuluu = _closure1_slot3;
                                    entity = 12;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    entity = report.bind(entity)(zuuluu);
                                    entity = entity.ApplicationCommandInputType;
                                    entity = entity.PLACEHOLDER;
                                    entity = michal !== entity;
                                    if(!entity) { _fun00032_ip = 89; continue _fun00031 }
 53:
                                    report = tangon.displayName;
                                    michal = _closure5_slot0;
                                    michal = report === michal;
                                    if(michal) { _fun00032_ip = 86; continue _fun00031 }
 72:
                                    tangon = tangon.untranslatedName;
                                    zuuluu = _closure5_slot0;
                                    michal = tangon === zuuluu;
 86:
                                    entity = michal;
 89:
                                    return entity;
                                }
                            };
                            tangon = report.bind(zuuluu)(tangon);
                            report = tangon.length;
                            if(!(report > michal)) { _fun00030_ip = 263; continue _fun00029 }
 223:
                            golfie = tangon[michal];
                            tangon = _closure4_slot5;
                            tangon = tangon > michal;
                            if(tangon) { _fun00030_ip = 248; continue _fun00029 }
 238:
                            verify = _closure4_slot2;
                            report = null;
                            tangon = report != verify;
 248:
                            report = zuuluu.length;
                            if(tangon) { _fun00030_ip = 276; continue _fun00029 }
 256:
                            tangon = 1;
                            if(!(tangon !== report)) { _fun00030_ip = 276; continue _fun00029 }
 263:
                            zuuluu = zuuluu.length;
                            if(!(!(zuuluu > michal))) { _fun00030_ip = 274; continue _fun00029 }
 272:
                            return option;
 274:
                            return michal;
 276:
                            zuuluu = _closure1_slot2;
                            verify = _closure1_slot3;
                            michal = 11;
                            michal = verify[michal];
                            report = zuuluu.bind(option)(michal);
                            tangon = report.getCachedApplicationSection;
                            zuuluu = {};
                            entity = _closure4_slot0;
                            zuuluu['channel'] = entity;
                            entity = 'channel';
                            zuuluu['type'] = entity;
                            michal = _closure1_slot0;
                            entity = 15;
                            entity = verify[entity];
                            entity = michal.bind(option)(entity);
                            entity = entity.ApplicationCommandType;
                            michal = entity.CHAT;
                            entity = golfie.applicationId;
                            tangon = tangon.bind(report)(zuuluu, michal, entity);
                            zuuluu = null;
                            if(!(zuuluu != tangon)) { _fun00030_ip = 416; continue _fun00029 }
 366:
                            entity = {};
                            michal = {};
                            report = {};
                            result = report;
                            output = golfie;
                            golfie = copyDataProperties(result, output);
                            oscard = _closure1_slot15;
                            golfie = oscard.FULL_COMMAND;
                            oscard = 'preferredCommandType';
                            report[oscard] = golfie;
                            michal['command'] = report;
                            michal['section'] = tangon;
                            entity['v'] = michal;
                            _fun00030_ip = 425; continue _fun00029;
 416:
                            michal = {};
                            michal['v'] = zuuluu;
                            entity = michal;
 425:
                            return entity;
                        }
                    };
                    foxtra = 0;
                    var _closure4_slot5 = foxtra;
                    verify = kiloes.length;
                    if(!(foxtra < verify)) { _fun00028_ip = 480; continue _fun00027 }
 399:
                    yankee = backup.bind(offset)();
                    romeon = 0;
                    if(!(romeon !== yankee)) { _fun00028_ip = 480; continue _fun00027 }
 409:
                    verify = yankee;
                    if(verify) { _fun00028_ip = 441; continue _fun00027 }
 415:
                    romeon = romeon + 1;
                    _closure4_slot5 = romeon;
                    sizing = kiloes.length;
                    if(!(romeon < sizing)) { _fun00028_ip = 480; continue _fun00027 }
 431:
                    yankee = backup.bind(offset)();
                    if(foxtra !== yankee) { _fun00028_ip = 409; continue _fun00027 }
 439:
                    _fun00028_ip = 480; continue _fun00027;
 441:
                    verify = verify.v;
                    return verify;
 448:
                    option = _closure3_slot0;
                    verify = option.contextCommands;
                    option = verify.find;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure4_slot1;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    option = option.bind(verify)(report);
                    if(!(entity == option)) { _fun00028_ip = 510; continue _fun00027 }
 480:
                    report = null;
                    if(!oscard) { _fun00028_ip = 508; continue _fun00027 }
 485:
                    oscard = entity != zuuluu;
                    report = null;
                    if(!oscard) { _fun00028_ip = 508; continue _fun00027 }
 494:
                    oscard = {};
                    oscard['command'] = zuuluu;
                    oscard['section'] = entity;
                    report = oscard;
 508:
                    return report;
 510:
                    oscard = _closure1_slot2;
                    yankee = _closure1_slot3;
                    report = 11;
                    report = yankee[report];
                    verify = oscard.bind(offset)(report);
                    oscard = verify.getCachedApplicationSection;
                    report = {};
                    report['channel'] = tangon;
                    report['type'] = michal;
                    tangon = _closure1_slot0;
                    michal = 15;
                    michal = yankee[michal];
                    michal = tangon.bind(offset)(michal);
                    michal = michal.ApplicationCommandType;
                    tangon = michal.CHAT;
                    michal = option.applicationId;
                    report = oscard.bind(verify)(report, tangon, michal);
                    tangon = entity == report;
                    michal = null;
                    if(tangon) { _fun00028_ip = 640; continue _fun00027 }
 595:
                    tangon = {};
                    oscard = {};
                    echoed = oscard;
                    result = option;
                    option = copyDataProperties(echoed, result);
                    golfie = _closure1_slot15;
                    option = golfie.FULL_COMMAND;
                    golfie = 'preferredCommandType';
                    oscard[golfie] = option;
                    tangon['command'] = oscard;
                    tangon['section'] = report;
                    michal = tangon;
 640:
                    return michal;
 642:
                    return entity;
 644:
                    michal = {};
                    michal['command'] = zuuluu;
                    zuuluu = argCor;
                    michal['section'] = zuuluu;
                    return michal;
 660:
                    return entity;
                }
            };
            zuuluu['getCurrentCommand'] = report;
            report = function(argFoo, argBar) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    tangon = argBar;
                    var _closure4_slot0 = tangon;
                    michal = argFoo;
                    if(michal) { _fun00034_ip = 19; continue _fun00033 }
 15:
                    michal = null;
                    return michal;
 19:
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot3;
                    michal = 18;
                    michal = report[michal];
                    report = undefined;
                    golfie = zuuluu.bind(report)(michal);
                    zuuluu = golfie.findLast;
                    michal = global;
                    verify = michal.Array;
                    option = verify.from;
                    michal = _closure3_slot0;
                    offset = michal.optionValueNodes;
                    michal = offset.values;
                    michal = michal.bind(offset)();
                    michal = option.bind(verify)(michal);
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.location;
                        entity = _closure4_slot0;
                        entity = michal <= entity;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(golfie)(michal, entity);
                    michal = null;
                    golfie = michal == zuuluu;
                    entity = undefined;
                    if(golfie) { _fun00034_ip = 134; continue _fun00033 }
 114:
                    golfie = zuuluu.data;
                    option = michal == golfie;
                    entity = undefined;
                    if(option) { _fun00034_ip = 134; continue _fun00033 }
 128:
                    entity = golfie.option;
 134:
                    if(!(michal != zuuluu)) { _fun00034_ip = 225; continue _fun00033 }
 138:
                    if(!(michal != entity)) { _fun00034_ip = 225; continue _fun00033 }
 142:
                    oscard = _closure3_slot0;
                    golfie = oscard.preferredOptionValues;
                    oscard = oscard.props;
                    oscard = oscard.channel;
                    oscard = oscard.id;
                    golfie = golfie[oscard];
                    oscard = michal == golfie;
                    report = undefined;
                    if(oscard) { _fun00034_ip = 189; continue _fun00033 }
 180:
                    oscard = entity.name;
                    report = golfie[oscard];
 189:
                    if(!(michal != report)) { _fun00034_ip = 227; continue _fun00033 }
 193:
                    oscard = report.displayText;
                    report = '';
                    if(!(report !== oscard)) { _fun00034_ip = 227; continue _fun00033 }
 207:
                    report = zuuluu.location;
                    zuuluu = zuuluu.length;
                    zuuluu = report + zuuluu;
                    if(!(!(zuuluu > tangon))) { _fun00034_ip = 227; continue _fun00033 }
 225:
                    return michal;
 227:
                    return entity;
                }
            };
            zuuluu['getCurrentOption'] = report;
            report = function(argFoo, argBar) {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    kiloes = argBar;
                    entity = argFoo;
                    entity = entity.options;
                    backup = null;
                    if(!(backup != entity)) { _fun00036_ip = 370; continue _fun00035 }
 20:
                    entity = {};
                    zuuluu = _closure1_slot16;
                    michal = _closure3_slot0;
                    michal = michal.optionValueNodes;
                    yankee = undefined;
                    offset = zuuluu.bind(yankee)(michal);
                    zuuluu = offset.bind(yankee)();
                    michal = zuuluu.done;
                    verify = 1;
                    option = 8;
                    golfie = 2;
                    oscard = 0;
                    report = zuuluu;
                    tangon = undefined;
                    zuuluu = undefined;
                    if(michal) { _fun00036_ip = 368; continue _fun00035 }
 82:
                    sizing = report.value;
                    michal = _closure1_slot4;
                    michal = michal.bind(yankee)(sizing, golfie);
                    result = michal[oscard];
                    output = michal[verify];
                    michal = output.data;
                    echoed = backup == michal;
                    sizing = undefined;
                    if(echoed) { _fun00036_ip = 124; continue _fun00035 }
 119:
                    sizing = michal.type;
 124:
                    echoed = _closure1_slot0;
                    michal = _closure1_slot3;
                    michal = michal[option];
                    michal = echoed.bind(yankee)(michal);
                    michal = michal.ChatInputParseResultDataType;
                    michal = michal.COMMAND_OPTION;
                    if(!(sizing === michal)) { _fun00036_ip = 350; continue _fun00035 }
 160:
                    michal = _closure3_slot0;
                    sizing = michal.preferredOptionValues;
                    michal = michal.props;
                    michal = michal.channel;
                    michal = michal.id;
                    echoed = sizing[michal];
                    update = backup == echoed;
                    sizing = echoed;
                    michal = undefined;
                    if(update) { _fun00036_ip = 226; continue _fun00035 }
 201:
                    update = echoed[result];
                    echoed = backup == update;
                    sizing = update;
                    michal = undefined;
                    if(echoed) { _fun00036_ip = 226; continue _fun00035 }
 217:
                    michal = update.optionValue;
                    sizing = update;
 226:
                    if(!(backup == michal)) { _fun00036_ip = 332; continue _fun00035 }
 230:
                    echoed = output.data;
                    source = echoed.option;
                    update = kiloes.substring;
                    ctrled = output.location;
                    echoed = source.displayName;
                    echoed = echoed.length;
                    echoed = ctrled + echoed;
                    echoed = echoed + verify;
                    ctrled = output.location;
                    output = output.length;
                    output = ctrled + output;
                    update = update.bind(kiloes)(echoed, output);
                    output = _closure3_slot0;
                    echoed = output.optionValueParser;
                    output = echoed.parse;
                    echoed = output.bind(echoed)(update, source);
                    output = new Array(1);
                    output[0] = echoed;
                    entity[result] = output;
                    tangon = sizing;
                    zuuluu = michal;
                    _fun00036_ip = 350; continue _fun00035;
 332:
                    output = new Array(1);
                    output[0] = michal;
                    entity[result] = output;
                    tangon = sizing;
                    zuuluu = michal;
 350:
                    sizing = offset.bind(yankee)();
                    michal = sizing.done;
                    report = sizing;
                    if(!michal) { _fun00036_ip = 82; continue _fun00035 }
 368:
                    return entity;
 370:
                    entity = {};
                    return entity;
                }
            };
            zuuluu['getAllCommandOptionValues'] = report;
            report = function(argFoo, argBar, argBaz, argCor, argGra) {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    tangon = argFoo;
                    golfie = argBar;
                    zuuluu = argBaz;
                    oscard = tangon.startsWith;
                    verify = _closure1_slot12;
                    entity = global;
                    report = entity.HermesInternal;
                    option = report.concat;
                    report = '';
                    report = option.bind(report)(verify, zuuluu);
                    report = oscard.bind(tangon)(report);
                    if(!report) { _fun00038_ip = 137; continue _fun00037 }
 53:
                    oscard = tangon.length;
                    report = zuuluu.length;
                    verify = 1;
                    report = report + verify;
                    if(!(oscard > report)) { _fun00038_ip = 137; continue _fun00037 }
 74:
                    option = _closure1_slot11;
                    oscard = option.test;
                    report = zuuluu.length;
                    report = report + verify;
                    report = tangon[report];
                    report = oscard.bind(option)(report);
                    if(!report) { _fun00038_ip = 137; continue _fun00037 }
 104:
                    report = argCor;
                    if(report) { _fun00038_ip = 141; continue _fun00037 }
 110:
                    report = argGra;
                    if(!report) { _fun00038_ip = 137; continue _fun00037 }
 116:
                    tangon = tangon.length;
                    report = zuuluu.length;
                    zuuluu = 2;
                    zuuluu = report + zuuluu;
                    if(!(!(tangon > zuuluu))) { _fun00038_ip = 141; continue _fun00037 }
 137:
                    zuuluu = false;
                    return zuuluu;
 141:
                    tangon = _closure1_slot14;
                    report = entity.Set;
                    entity = _closure3_slot0;
                    zuuluu = entity.optionValueNodes;
                    entity = zuuluu.keys;
                    backup = entity.bind(zuuluu)();
                    zuuluu = report.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                    kiloes = zuuluu;
                    entity = new kiloes[report](backup, foxtra);
                    zuuluu = entity instanceof Object ? entity : zuuluu;
                    oscard = undefined;
                    entity = true;
                    report = tangon.bind(oscard)(golfie, zuuluu, entity);
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00038_ip = 254; continue _fun00037 }
 210:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.insertOrJumpCommandOption;
                    michal = golfie.displayName;
                    option = michal.length;
                    michal = 2;
                    foxtra = option + michal;
                    kiloes = tangon;
                    backup = report;
                    romeon = true;
                    yankee = undefined;
                    offset = golfie;
                    michal = kiloes[zuuluu](backup, foxtra, romeon, yankee, offset, verify);
 254:
                    return entity;
                }
            };
            zuuluu['insertFirstOptionIfValid'] = report;
            report = function(argFoo, argBar) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    michal = argFoo;
                    tangon = argBar;
                    verify = arguments[2];
                    oscard = arguments[3];
                    kiloes = arguments[4];
                    entity = undefined;
                    if(!(verify === entity)) { _fun00040_ip = 23; continue _fun00039 }
 21:
                    verify = false;
 23:
                    report = null;
                    if(!(report == kiloes)) { _fun00040_ip = 47; continue _fun00039 }
 29:
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.props;
                    kiloes = zuuluu.activeCommand;
 47:
                    if(!(report != kiloes)) { _fun00040_ip = 1407; continue _fun00039 }
 54:
                    golfie = _closure3_slot0;
                    option = golfie.props;
                    yankee = option.text;
                    offset = option.selectionStart;
                    foxtra = golfie.optionValueNodes;
                    option = report == foxtra;
                    golfie = undefined;
                    if(option) { _fun00040_ip = 107; continue _fun00039 }
 92:
                    romeon = foxtra.get;
                    option = michal.name;
                    golfie = romeon.bind(foxtra)(option);
 107:
                    romeon = report == oscard;
                    option = undefined;
                    if(romeon) { _fun00040_ip = 122; continue _fun00039 }
 116:
                    option = oscard.displayText;
 122:
                    if(!(report != option)) { _fun00040_ip = 960; continue _fun00039 }
 129:
                    if(!(report == golfie)) { _fun00040_ip = 145; continue _fun00039 }
 133:
                    result = offset;
                    if(!(report != tangon)) { _fun00040_ip = 143; continue _fun00039 }
 140:
                    result = tangon;
 143:
                    _fun00040_ip = 150; continue _fun00039;
 145:
                    result = golfie.location;
 150:
                    option = report != golfie;
                    output = 0;
                    if(!option) { _fun00040_ip = 164; continue _fun00039 }
 159:
                    output = golfie.length;
 164:
                    source = report != yankee;
                    if(!source) { _fun00040_ip = 180; continue _fun00039 }
 171:
                    option = yankee.length;
                    source = result <= option;
 180:
                    if(!source) { _fun00040_ip = 242; continue _fun00039 }
 183:
                    foxtra = _closure1_slot11;
                    romeon = foxtra.test;
                    option = global;
                    update = option.Math;
                    sizing = update.min;
                    ctrled = 1;
                    backup = result - ctrled;
                    option = yankee.length;
                    option = option - ctrled;
                    option = sizing.bind(update)(backup, option);
                    option = yankee[option];
                    option = romeon.bind(foxtra)(option);
                    source = !option;
 242:
                    option = global;
                    backup = option.Set;
                    romeon = _closure3_slot0;
                    foxtra = romeon.optionValueNodes;
                    romeon = foxtra.keys;
                    sierra = romeon.bind(foxtra)();
                    foxtra = backup.prototype;
                    foxtra = Object.create(foxtra, {constructor: {value: backup}});
                    limora = foxtra;
                    romeon = new limora[backup](sierra, status);
                    foxtra = romeon instanceof Object ? romeon : foxtra;
                    backup = foxtra.add;
                    romeon = michal.name;
                    romeon = backup.bind(foxtra)(romeon);
                    romeon = _closure1_slot14;
                    romeon = romeon.bind(entity)(kiloes, foxtra);
                    foxtra = report != oscard;
                    if(!foxtra) { _fun00040_ip = 404; continue _fun00039 }
 324:
                    sizing = result + output;
                    kiloes = yankee.length;
                    kiloes = sizing !== kiloes;
                    if(!kiloes) { _fun00040_ip = 394; continue _fun00039 }
 340:
                    ctrled = _closure1_slot11;
                    update = ctrled.test;
                    config = option.Math;
                    sequen = config.min;
                    vacuum = result + output;
                    record = yankee.length;
                    sizing = 1;
                    sizing = record - sizing;
                    sizing = sequen.bind(config)(vacuum, sizing);
                    sizing = yankee[sizing];
                    sizing = update.bind(ctrled)(sizing);
                    kiloes = !sizing;
 394:
                    if(kiloes) { _fun00040_ip = 401; continue _fun00039 }
 397:
                    kiloes = report != romeon;
 401:
                    foxtra = kiloes;
 404:
                    sizing = report == oscard;
                    kiloes = undefined;
                    if(sizing) { _fun00040_ip = 419; continue _fun00039 }
 413:
                    kiloes = oscard.displayText;
 419:
                    sizing = '';
                    if(!(sizing === kiloes)) { _fun00040_ip = 455; continue _fun00039 }
 427:
                    ctrled = michal.displayName;
                    kiloes = option.HermesInternal;
                    update = kiloes.concat;
                    kiloes = ':';
                    kiloes = update.bind(sizing)(ctrled, kiloes);
                    _fun00040_ip = 488; continue _fun00039;
 455:
                    sequen = michal.displayName;
                    vacuum = oscard.displayText;
                    update = option.HermesInternal;
                    ctrled = update.concat;
                    update = ':';
                    kiloes = ctrled.bind(sizing)(sequen, update, vacuum);
 488:
                    ctrled = sizing;
                    if(!source) { _fun00040_ip = 498; continue _fun00039 }
 494:
                    ctrled = ' ';
 498:
                    update = sizing;
                    if(!foxtra) { _fun00040_ip = 508; continue _fun00039 }
 504:
                    update = ' ';
 508:
                    foxtra = option.HermesInternal;
                    foxtra = foxtra.concat;
                    foxtra = foxtra.bind(sizing)(ctrled, kiloes, update);
                    if(!(report == romeon)) { _fun00040_ip = 689; continue _fun00039 }
 533:
                    sequen = _closure3_slot0;
                    update = sequen.ref;
                    vacuum = update.current;
                    ctrled = vacuum.replaceRange;
                    update = {};
                    update['location'] = result;
                    update['length'] = output;
                    update['text'] = foxtra;
                    config = {};
                    cntext = _closure1_slot0;
                    papara = _closure1_slot3;
                    record = 8;
                    record = papara[record];
                    record = cntext.bind(entity)(record);
                    record = record.ChatInputNodeType;
                    record = record.COMMAND_OPTION_WITH_VALUE;
                    config['type'] = record;
                    record = sequen.styles;
                    sequen = record.commandOption;
                    sequen = sequen.bind(record)();
                    config['style'] = sequen;
                    sequen = 0;
                    if(!source) { _fun00040_ip = 633; continue _fun00039 }
 630:
                    sequen = 1;
 633:
                    config['location'] = sequen;
                    sequen = kiloes.length;
                    config['length'] = sequen;
                    sequen = new Array(1);
                    sequen[0] = config;
                    update['nodes'] = sequen;
                    update['keepCursorPosition'] = verify;
                    sequen = _closure3_slot0;
                    sequen = sequen.editId;
                    update['editId'] = sequen;
                    update = ctrled.bind(vacuum)(update);
                    _fun00040_ip = 1344; continue _fun00039;
 689:
                    ctrled = romeon.displayName;
                    romeon = option.HermesInternal;
                    update = romeon.concat;
                    romeon = ':';
                    romeon = update.bind(sizing)(ctrled, romeon);
                    option = option.HermesInternal;
                    option = option.concat;
                    sizing = option.bind(sizing)(foxtra, romeon);
                    option = {};
                    vacuum = _closure1_slot0;
                    ctrled = _closure1_slot3;
                    update = 8;
                    ctrled = ctrled[update];
                    ctrled = vacuum.bind(entity)(ctrled);
                    ctrled = ctrled.ChatInputNodeType;
                    ctrled = ctrled.COMMAND_OPTION_WITH_VALUE;
                    option['type'] = ctrled;
                    ctrled = _closure3_slot0;
                    vacuum = ctrled.styles;
                    ctrled = vacuum.commandOption;
                    ctrled = ctrled.bind(vacuum)();
                    option['style'] = ctrled;
                    echoed = 0;
                    if(!source) { _fun00040_ip = 802; continue _fun00039 }
 799:
                    echoed = 1;
 802:
                    option['location'] = echoed;
                    kiloes = kiloes.length;
                    option['length'] = kiloes;
                    kiloes = new Array(2);
                    kiloes[0] = option;
                    option = {};
                    echoed = _closure1_slot0;
                    backup = _closure1_slot3;
                    backup = backup[update];
                    backup = echoed.bind(entity)(backup);
                    backup = backup.ChatInputNodeType;
                    backup = backup.COMMAND_OPTION;
                    option['type'] = backup;
                    backup = _closure3_slot0;
                    update = backup.styles;
                    echoed = update.commandOption;
                    echoed = echoed.bind(update)();
                    option['style'] = echoed;
                    foxtra = foxtra.length;
                    option['location'] = foxtra;
                    romeon = romeon.length;
                    option['length'] = romeon;
                    kiloes[1] = option;
                    option = backup.ref;
                    foxtra = option.current;
                    romeon = foxtra.replaceRange;
                    option = {};
                    option['location'] = result;
                    option['length'] = output;
                    option['text'] = sizing;
                    option['nodes'] = kiloes;
                    backup = backup.editId;
                    option['editId'] = backup;
                    option = romeon.bind(foxtra)(option);
                    _fun00040_ip = 1344; continue _fun00039;
 960:
                    if(!(report != golfie)) { _fun00040_ip = 1044; continue _fun00039 }
 964:
                    option = _closure3_slot0;
                    option = option.ref;
                    foxtra = option.current;
                    romeon = foxtra.setSelectedRange;
                    backup = golfie.location;
                    option = michal.displayName;
                    option = option.length;
                    option = backup + option;
                    backup = 1;
                    option = option + backup;
                    kiloes = golfie.length;
                    golfie = michal.displayName;
                    golfie = golfie.length;
                    golfie = kiloes - golfie;
                    golfie = golfie - backup;
                    golfie = romeon.bind(foxtra)(option, golfie);
                    _fun00040_ip = 1344; continue _fun00039;
 1044:
                    if(!(report != tangon)) { _fun00040_ip = 1051; continue _fun00039 }
 1048:
                    offset = tangon;
 1051:
                    romeon = report != yankee;
                    if(!romeon) { _fun00040_ip = 1067; continue _fun00039 }
 1058:
                    tangon = yankee.length;
                    romeon = offset <= tangon;
 1067:
                    if(!romeon) { _fun00040_ip = 1129; continue _fun00039 }
 1070:
                    option = _closure1_slot11;
                    golfie = option.test;
                    tangon = global;
                    kiloes = tangon.Math;
                    backup = kiloes.min;
                    sizing = 1;
                    foxtra = offset - sizing;
                    tangon = yankee.length;
                    tangon = tangon - sizing;
                    tangon = backup.bind(kiloes)(foxtra, tangon);
                    tangon = yankee[tangon];
                    tangon = golfie.bind(option)(tangon);
                    romeon = !tangon;
 1129:
                    tangon = _closure3_slot0;
                    tangon = tangon.ref;
                    option = tangon.current;
                    golfie = option.replaceRange;
                    tangon = {};
                    tangon['location'] = offset;
                    offset = 0;
                    tangon['length'] = offset;
                    sizing = '';
                    kiloes = sizing;
                    if(!romeon) { _fun00040_ip = 1175; continue _fun00039 }
 1171:
                    kiloes = ' ';
 1175:
                    backup = michal.displayName;
                    yankee = global;
                    yankee = yankee.HermesInternal;
                    foxtra = yankee.concat;
                    yankee = ':';
                    yankee = foxtra.bind(sizing)(kiloes, backup, yankee);
                    tangon['text'] = yankee;
                    yankee = {};
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot3;
                    foxtra = 8;
                    foxtra = kiloes[foxtra];
                    foxtra = backup.bind(entity)(foxtra);
                    foxtra = foxtra.ChatInputNodeType;
                    foxtra = foxtra.COMMAND_OPTION;
                    yankee['type'] = foxtra;
                    foxtra = _closure3_slot0;
                    backup = foxtra.styles;
                    foxtra = backup.commandOption;
                    foxtra = foxtra.bind(backup)();
                    yankee['style'] = foxtra;
                    offset = 0;
                    if(!romeon) { _fun00040_ip = 1281; continue _fun00039 }
 1278:
                    offset = 1;
 1281:
                    yankee['location'] = offset;
                    offset = michal.displayName;
                    romeon = offset.length;
                    offset = 1;
                    offset = romeon + offset;
                    yankee['length'] = offset;
                    offset = new Array(1);
                    offset[0] = yankee;
                    tangon['nodes'] = offset;
                    tangon['keepCursorPosition'] = verify;
                    verify = _closure3_slot0;
                    verify = verify.editId;
                    tangon['editId'] = verify;
                    tangon = golfie.bind(option)(tangon);
 1344:
                    tangon = report != oscard;
                    if(!tangon) { _fun00040_ip = 1357; continue _fun00039 }
 1351:
                    tangon = oscard.preferred;
 1357:
                    if(!tangon) { _fun00040_ip = 1407; continue _fun00039 }
 1360:
                    tangon = _closure3_slot0;
                    if(!(report != tangon)) { _fun00040_ip = 1407; continue _fun00039 }
 1368:
                    report = _closure3_slot0;
                    tangon = report.setPreferredOptionValue;
                    zuuluu = report.props;
                    zuuluu = zuuluu.channel;
                    zuuluu = zuuluu.id;
                    michal = michal.name;
                    michal = tangon.bind(report)(zuuluu, michal, oscard);
 1407:
                    return entity;
                }
            };
            zuuluu['insertOrJumpCommandOption'] = report;
            tangon = function(argFoo, argBar, argBaz) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    report = argFoo;
                    oscard = argBar;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    tangon = entity.activeCommand;
                    offset = null;
                    if(!(offset == tangon)) { _fun00042_ip = 382; continue _fun00041 }
 35:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot3;
                    yankee = 23;
                    entity = entity[yankee];
                    romeon = undefined;
                    zuuluu = zuuluu.bind(romeon)(entity);
                    entity = zuuluu.getPrefix;
                    zuuluu = entity.bind(zuuluu)(report);
                    entity = _closure1_slot12;
                    option = null;
                    if(!(zuuluu === entity)) { _fun00042_ip = 109; continue _fun00041 }
 81:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot3;
                    entity = entity[yankee];
                    zuuluu = zuuluu.bind(romeon)(entity);
                    entity = zuuluu.getQuery;
                    option = entity.bind(zuuluu)(report);
 109:
                    if(!(offset != option)) { _fun00042_ip = 264; continue _fun00041 }
 116:
                    zuuluu = _closure1_slot2;
                    backup = _closure1_slot3;
                    entity = 11;
                    entity = backup[entity];
                    yankee = zuuluu.bind(romeon)(entity);
                    report = yankee.getCachedResults;
                    zuuluu = {};
                    zuuluu['channel'] = oscard;
                    entity = 'channel';
                    zuuluu['type'] = entity;
                    foxtra = _closure1_slot0;
                    entity = 15;
                    entity = backup[entity];
                    entity = foxtra.bind(romeon)(entity);
                    entity = entity.ApplicationCommandType;
                    entity = entity.CHAT;
                    entity = report.bind(yankee)(zuuluu, entity, option);
                    zuuluu = entity.commands;
                    report = entity.sections;
                    if(!(offset != zuuluu)) { _fun00042_ip = 264; continue _fun00041 }
 207:
                    yankee = zuuluu.length;
                    entity = 0;
                    if(!(yankee > entity)) { _fun00042_ip = 264; continue _fun00041 }
 218:
                    yankee = zuuluu[entity];
                    backup = yankee.inputType;
                    kiloes = _closure1_slot0;
                    yankee = _closure1_slot3;
                    foxtra = 12;
                    yankee = yankee[foxtra];
                    yankee = kiloes.bind(romeon)(yankee);
                    yankee = yankee.ApplicationCommandInputType;
                    yankee = yankee.PLACEHOLDER;
                    if(!(backup === yankee)) { _fun00042_ip = 268; continue _fun00041 }
 264:
                    yankee = false;
                    return yankee;
 268:
                    yankee = zuuluu[entity];
                    var _closure4_slot1 = yankee;
                    zuuluu = report.find;
                    entity = function(argFoo) {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            entity = argFoo;
                            entity = entity.application;
                            michal = null;
                            zuuluu = michal == entity;
                            michal = undefined;
                            if(zuuluu) { _fun00044_ip = 24; continue _fun00043 }
 19:
                            michal = entity.id;
 24:
                            entity = _closure4_slot1;
                            entity = entity.applicationId;
                            entity = michal === entity;
                            return entity;
                        }
                    };
                    backup = zuuluu.bind(report)(entity);
                    report = _closure3_slot0;
                    zuuluu = report.setCommand;
                    entity = {};
                    kiloes = oscard.id;
                    entity['channelId'] = kiloes;
                    entity['command'] = yankee;
                    kiloes = offset != backup;
                    yankee = null;
                    if(!kiloes) { _fun00042_ip = 332; continue _fun00041 }
 329:
                    yankee = backup;
 332:
                    entity['section'] = yankee;
                    yankee = _closure1_slot0;
                    verify = _closure1_slot3;
                    verify = verify[foxtra];
                    verify = yankee.bind(romeon)(verify);
                    verify = verify.ApplicationCommandTriggerLocations;
                    verify = verify.DISCOVERY;
                    entity['location'] = verify;
                    entity['query'] = option;
                    entity = zuuluu.bind(report)(entity);
                    entity = true;
                    return entity;
 382:
                    option = _closure1_slot0;
                    report = _closure1_slot3;
                    zuuluu = 19;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    verify = option.bind(zuuluu)(report);
                    option = verify.getFirstInvalidOption;
                    report = _closure3_slot0;
                    report = report.optionValidationResults;
                    if(!(offset == report)) { _fun00042_ip = 429; continue _fun00041 }
 427:
                    report = {};
 429:
                    yankee = option.bind(verify)(tangon, report);
                    verify = _closure1_slot8;
                    option = verify.getOptionStates;
                    report = oscard.id;
                    romeon = option.bind(verify)(report);
                    report = {};
                    var _closure4_slot0 = report;
                    option = global;
                    verify = option.Object;
                    option = verify.entries;
                    verify = option.bind(verify)(romeon);
                    option = verify.forEach;
                    golfie = function(argFoo) {
                        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                            oscard = argFoo;
                            zuuluu = oscard[Symbol.iterator];
                            oscard = zuuluu().next;
                            michal = oscard().value;
                            tangon = zuuluu;
                            entity = undefined;
                            report = tangon === entity;
                            tangon = undefined;
                            if(report) { _fun00046_ip = 27; continue _fun00045 }
 24:
                            tangon = michal;
 27:
                            michal = undefined;
                            if(report) { _fun00046_ip = 57; continue _fun00045 }
 32:
                            golfie = oscard().value;
                            oscard = zuuluu;
                            oscard = oscard === entity;
                            michal = undefined;
                            report = oscard;
                            if(oscard) { _fun00046_ip = 57; continue _fun00045 }
 51:
                            michal = golfie;
                            report = oscard;
 57:
                            if(report) { _fun00046_ip = 63; continue _fun00045 }
 60:
                            zuuluu.return();
 63:
                            report = michal.optionValue;
                            zuuluu = null;
                            if(!(zuuluu != report)) { _fun00046_ip = 92; continue _fun00045 }
 75:
                            zuuluu = _closure4_slot0;
                            michal = michal.optionValue;
                            zuuluu[tangon] = michal;
 92:
                            return entity;
                        }
                    };
                    golfie = option.bind(verify)(golfie);
                    if(!(offset != yankee)) { _fun00042_ip = 747; continue _fun00041 }
 504:
                    golfie = _closure3_slot0;
                    michal = golfie.insertOrJumpCommandOption;
                    michal = michal.bind(golfie)(yankee);
                    michal = golfie.updateValidationResults;
                    michal = michal.bind(golfie)();
                    golfie = _closure1_slot0;
                    option = _closure1_slot3;
                    michal = 21;
                    verify = option[michal];
                    romeon = golfie.bind(zuuluu)(verify);
                    verify = romeon.triggerHapticFeedback;
                    michal = option[michal];
                    michal = golfie.bind(zuuluu)(michal);
                    michal = michal.HapticFeedbackTypes;
                    michal = michal.NOTIFICATION_ERROR;
                    michal = verify.bind(romeon)(michal);
                    michal = 22;
                    michal = option[michal];
                    verify = golfie.bind(zuuluu)(michal);
                    option = verify.trackWithMetadata;
                    michal = _closure1_slot9;
                    golfie = michal.APPLICATION_COMMAND_VALIDATION_FAILED;
                    michal = {};
                    foxtra = offset == tangon;
                    romeon = undefined;
                    if(foxtra) { _fun00042_ip = 627; continue _fun00041 }
 622:
                    romeon = tangon.applicationId;
 627:
                    michal['application_id'] = romeon;
                    foxtra = offset == tangon;
                    romeon = undefined;
                    if(foxtra) { _fun00042_ip = 661; continue _fun00041 }
 641:
                    foxtra = tangon.rootCommand;
                    backup = offset == foxtra;
                    romeon = undefined;
                    if(backup) { _fun00042_ip = 661; continue _fun00041 }
 656:
                    romeon = foxtra.id;
 661:
                    michal['command_id'] = romeon;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot3;
                    romeon = 15;
                    romeon = backup[romeon];
                    romeon = foxtra.bind(zuuluu)(romeon);
                    foxtra = romeon.ApplicationCommandOptionType;
                    backup = yankee.type;
                    kiloes = offset != backup;
                    romeon = 3;
                    if(!kiloes) { _fun00042_ip = 710; continue _fun00041 }
 707:
                    romeon = backup;
 710:
                    romeon = foxtra[romeon];
                    michal['argument_type'] = romeon;
                    romeon = offset == yankee;
                    offset = undefined;
                    if(romeon) { _fun00042_ip = 734; continue _fun00041 }
 728:
                    offset = yankee.required;
 734:
                    michal['is_required'] = offset;
                    michal = option.bind(verify)(golfie, michal);
                    _fun00042_ip = 789; continue _fun00041;
 747:
                    michal = _closure1_slot0;
                    golfie = _closure1_slot3;
                    entity = 20;
                    entity = golfie[entity];
                    michal = michal.bind(zuuluu)(entity);
                    entity = michal.parseOptionValuesForSend;
                    michal = entity.bind(michal)(oscard, tangon, report);
                    entity = argBaz;
                    entity = entity.bind(zuuluu)(tangon, michal);
 789:
                    entity = true;
                    return entity;
                }
            };
            zuuluu['sendCommand'] = tangon;
            tangon = michal.props;
            zuuluu['props'] = tangon;
            tangon = michal.ref;
            zuuluu['ref'] = tangon;
            tangon = michal.optionValueParser;
            zuuluu['optionValueParser'] = tangon;
            michal = michal.styles;
            zuuluu['styles'] = michal;
            michal = zuuluu.addCommandOptionParserRules;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'setPreferredOptionValue';
        entity['key'] = michal;
        michal = function(argFoo, argBar, argBaz) { // Original name: setPreferredOptionValue
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                michal = argFoo;
                entity = this;
                zuuluu = entity.preferredOptionValues;
                tangon = zuuluu[michal];
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00048_ip = 34; continue _fun00047 }
 22:
                tangon = entity.preferredOptionValues;
                zuuluu = {};
                tangon[michal] = zuuluu;
 34:
                entity = entity.preferredOptionValues;
                zuuluu = entity[michal];
                michal = argBaz;
                entity = argBar;
                zuuluu[entity] = michal;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'mergePropsAndUpdate';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: mergePropsAndUpdate
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                verify = argFoo;
                oscard = this;
                var _closure3_slot0 = oscard;
                var _closure3_slot1 = verify;
                entity = oscard.props;
                sizing = entity.text;
                report = entity.selectionStart;
                tangon = entity.selectionEnd;
                michal = entity.focused;
                zuuluu = entity.queryCommands;
                offset = entity.editId;
                foxtra = entity.channel;
                option = entity.lastCommandAutocompleteResponseNonce;
                entity = verify.editId;
                entity = offset !== entity;
                if(!entity) { _fun00050_ip = 92; continue _fun00049 }
 80:
                yankee = verify.editId;
                golfie = null;
                entity = golfie != yankee;
 92:
                if(!entity) { _fun00050_ip = 107; continue _fun00049 }
 95:
                entity = verify.editId;
                oscard['editId'] = entity;
 107:
                entity = verify.text;
                backup = sizing !== entity;
                var _closure3_slot2 = backup;
                entity = verify.selectionStart;
                result = report !== entity;
                if(result) { _fun00050_ip = 143; continue _fun00049 }
 133:
                entity = verify.selectionEnd;
                result = tangon !== entity;
 143:
                entity = verify.focused;
                output = michal !== entity;
                romeon = oscard.activeCommand;
                michal = oscard.activeCommandSection;
                if(backup) { _fun00050_ip = 201; continue _fun00049 }
 168:
                entity = verify.queryCommands;
                if(!(zuuluu === entity)) { _fun00050_ip = 201; continue _fun00049 }
 178:
                zuuluu = verify.preferredCommand;
                entity = null;
                entity = entity != zuuluu;
                yankee = michal;
                zuuluu = false;
                if(!entity) { _fun00050_ip = 1157; continue _fun00049 }
 201:
                entity = verify.queryCommands;
                oscard['contextCommands'] = entity;
                report = oscard.preferredCommand;
                entity = verify.preferredCommand;
                cntext = null;
                if(!(cntext != entity)) { _fun00050_ip = 254; continue _fun00049 }
 231:
                entity = verify.preferredCommand;
                oscard['preferredCommand'] = entity;
                entity = verify.location;
                oscard['location'] = entity;
 254:
                tangon = verify.commandsDisabled;
                entity = null;
                if(tangon) { _fun00050_ip = 370; continue _fun00049 }
 265:
                if(backup) { _fun00050_ip = 332; continue _fun00049 }
 268:
                tangon = oscard.preferredCommand;
                if(!(cntext != tangon)) { _fun00050_ip = 332; continue _fun00049 }
 278:
                tangon = oscard.preferredCommand;
                golfie = tangon.preferredCommandType;
                tangon = _closure1_slot15;
                tangon = tangon.FULL_COMMAND;
                if(!(golfie === tangon)) { _fun00050_ip = 332; continue _fun00049 }
 307:
                tangon = {};
                golfie = oscard.preferredCommand;
                tangon['command'] = golfie;
                golfie = oscard.preferredCommandSection;
                tangon['section'] = golfie;
                _fun00050_ip = 367; continue _fun00049;
 332:
                ctrled = oscard.getCurrentCommand;
                variable41 = verify.text;
                variable40 = verify.channel;
                variable39 = oscard.preferredCommand;
                variable38 = oscard.preferredCommandSection;
                variable42 = oscard;
                tangon = variable42[ctrled](variable41, variable40, variable39, variable38, variable37);
 367:
                entity = tangon;
 370:
                golfie = cntext != entity;
                tangon = null;
                if(!golfie) { _fun00050_ip = 390; continue _fun00049 }
 379:
                tangon = entity.command;
                michal = entity.section;
 390:
                entity = oscard.preferredCommand;
                echoed = cntext == entity;
                source = undefined;
                golfie = undefined;
                if(echoed) { _fun00050_ip = 412; continue _fun00049 }
 407:
                golfie = entity.id;
 412:
                echoed = cntext == tangon;
                entity = undefined;
                if(echoed) { _fun00050_ip = 426; continue _fun00049 }
 421:
                entity = tangon.id;
 426:
                if(!(golfie === entity)) { _fun00050_ip = 511; continue _fun00049 }
 430:
                entity = oscard.preferredCommand;
                golfie = cntext == entity;
                echoed = undefined;
                if(golfie) { _fun00050_ip = 451; continue _fun00049 }
 445:
                echoed = entity.preferredCommandType;
 451:
                entity = _closure1_slot15;
                entity = entity.PARTIAL_COMMAND;
                entity = echoed === entity;
                if(!entity) { _fun00050_ip = 500; continue _fun00049 }
 471:
                update = cntext == tangon;
                echoed = undefined;
                if(update) { _fun00050_ip = 486; continue _fun00049 }
 480:
                echoed = tangon.preferredCommandType;
 486:
                golfie = _closure1_slot15;
                golfie = golfie.FULL_COMMAND;
                entity = echoed === golfie;
 500:
                if(!entity) { _fun00050_ip = 532; continue _fun00049 }
 503:
                oscard['preferredCommand'] = tangon;
                _fun00050_ip = 532; continue _fun00049;
 511:
                if(!backup) { _fun00050_ip = 532; continue _fun00049 }
 514:
                oscard['preferredCommand'] = cntext;
                oscard['preferredCommandSection'] = cntext;
                oscard['location'] = source;
 532:
                entity = cntext == report;
                golfie = undefined;
                if(entity) { _fun00050_ip = 546; continue _fun00049 }
 541:
                golfie = report.id;
 546:
                echoed = oscard.preferredCommand;
                update = cntext == echoed;
                entity = undefined;
                if(update) { _fun00050_ip = 566; continue _fun00049 }
 561:
                entity = echoed.id;
 566:
                entity = golfie !== entity;
                if(entity) { _fun00050_ip = 613; continue _fun00049 }
 573:
                echoed = cntext == report;
                golfie = undefined;
                if(echoed) { _fun00050_ip = 588; continue _fun00049 }
 582:
                golfie = report.preferredCommandType;
 588:
                echoed = oscard.preferredCommand;
                update = cntext == echoed;
                report = undefined;
                if(update) { _fun00050_ip = 609; continue _fun00049 }
 603:
                report = echoed.preferredCommandType;
 609:
                entity = golfie !== report;
 613:
                golfie = oscard.preferredOptionValues;
                report = foxtra.id;
                echoed = golfie[report];
                if(!(cntext == echoed)) { _fun00050_ip = 634; continue _fun00049 }
 632:
                echoed = {};
 634:
                vacuum = oscard.parser;
                ctrled = vacuum.parse;
                update = verify.text;
                golfie = {};
                report = cntext == tangon;
                record = undefined;
                if(report) { _fun00050_ip = 668; continue _fun00049 }
 662:
                record = tangon.preferredCommandType;
 668:
                sequen = _closure1_slot15;
                config = sequen.FULL_COMMAND;
                sequen = null;
                if(!(record === config)) { _fun00050_ip = 690; continue _fun00049 }
 687:
                sequen = tangon;
 690:
                golfie['activeCommand'] = sequen;
                golfie['preferredOptionValues'] = echoed;
                golfie = ctrled.bind(vacuum)(update, golfie);
                oscard['chatInputNodes'] = golfie;
                update = oscard.optionsToNodes;
                golfie = update.clear;
                golfie = golfie.bind(update)();
                update = oscard.optionValueNodes;
                golfie = update.clear;
                golfie = golfie.bind(update)();
                ctrled = oscard.chatInputNodes;
                update = ctrled.forEach;
                golfie = function(argFoo) {
                    _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                        report = argFoo;
                        tangon = report.type;
                        oscard = _closure1_slot0;
                        entity = _closure1_slot3;
                        golfie = 8;
                        michal = entity[golfie];
                        entity = undefined;
                        michal = oscard.bind(entity)(michal);
                        michal = michal.ChatInputNodeType;
                        michal = michal.COMMAND_OPTION;
                        if(!(tangon === michal)) { _fun00052_ip = 106; continue _fun00051 }
 49:
                        michal = report.data;
                        tangon = null;
                        oscard = tangon == michal;
                        tangon = undefined;
                        if(oscard) { _fun00052_ip = 70; continue _fun00051 }
 65:
                        tangon = michal.type;
 70:
                        oscard = _closure1_slot0;
                        michal = _closure1_slot3;
                        michal = michal[golfie];
                        michal = oscard.bind(entity)(michal);
                        michal = michal.ChatInputParseResultDataType;
                        michal = michal.COMMAND_OPTION;
                        if(!(tangon !== michal)) { _fun00052_ip = 246; continue _fun00051 }
 106:
                        tangon = report.type;
                        oscard = _closure1_slot0;
                        michal = _closure1_slot3;
                        michal = michal[golfie];
                        michal = oscard.bind(entity)(michal);
                        michal = michal.ChatInputNodeType;
                        michal = michal.COMMAND_OPTION_WITH_VALUE;
                        michal = tangon === michal;
                        if(!michal) { _fun00052_ip = 201; continue _fun00051 }
 147:
                        oscard = report.data;
                        tangon = null;
                        option = tangon == oscard;
                        tangon = undefined;
                        if(option) { _fun00052_ip = 168; continue _fun00051 }
 163:
                        tangon = oscard.type;
 168:
                        oscard = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[golfie];
                        zuuluu = oscard.bind(entity)(zuuluu);
                        zuuluu = zuuluu.ChatInputParseResultDataType;
                        zuuluu = zuuluu.COMMAND_OPTION;
                        michal = tangon === zuuluu;
 201:
                        if(!michal) { _fun00052_ip = 286; continue _fun00051 }
 204:
                        michal = _closure3_slot0;
                        tangon = michal.optionValueNodes;
                        zuuluu = tangon.set;
                        michal = report.data;
                        michal = michal.option;
                        michal = michal.name;
                        michal = zuuluu.bind(tangon)(michal, report);
                        _fun00052_ip = 286; continue _fun00051;
 246:
                        michal = _closure3_slot0;
                        tangon = michal.optionsToNodes;
                        zuuluu = tangon.set;
                        michal = report.data;
                        michal = michal.option;
                        michal = michal.name;
                        michal = zuuluu.bind(tangon)(michal, report);
 286:
                        return entity;
                    }
                };
                golfie = update.bind(ctrled)(golfie);
                if(!backup) { _fun00050_ip = 1133; continue _fun00049 }
 773:
                golfie = oscard.activeCommand;
                ctrled = cntext == golfie;
                update = undefined;
                if(ctrled) { _fun00050_ip = 794; continue _fun00049 }
 788:
                update = golfie.preferredCommandType;
 794:
                golfie = _closure1_slot15;
                golfie = golfie.FULL_COMMAND;
                if(!(update === golfie)) { _fun00050_ip = 1133; continue _fun00049 }
 811:
                ctrled = new Array(0);
                update = _closure1_slot16;
                vacuum = oscard.activeCommand;
                sequen = cntext == vacuum;
                golfie = undefined;
                if(sequen) { _fun00050_ip = 839; continue _fun00049 }
 834:
                golfie = vacuum.options;
 839:
                if(!(cntext == golfie)) { _fun00050_ip = 847; continue _fun00049 }
 843:
                golfie = new Array(0);
 847:
                record = update.bind(source)(golfie);
                update = record.bind(source)();
                golfie = update.done;
                config = 15;
                sequen = 1;
                vacuum = '';
                if(golfie) { _fun00050_ip = 1074; continue _fun00049 }
 877:
                golfie = update.value;
                papara = golfie.name;
                sierra = echoed[papara];
                status = oscard.optionValueNodes;
                target = status.get;
                limora = target.bind(status)(papara);
                target = cntext == sierra;
                if(target) { _fun00050_ip = 924; continue _fun00049 }
 914:
                status = sierra.displayText;
                target = vacuum === status;
 924:
                if(target) { _fun00050_ip = 1001; continue _fun00049 }
 927:
                status = cntext != limora;
                if(!status) { _fun00050_ip = 998; continue _fun00049 }
 934:
                quebec = verify.text;
                equals = quebec.substring;
                variable36 = limora.location;
                whisks = golfie.displayName;
                whisks = whisks.length;
                whisks = variable36 + whisks;
                whisks = whisks + sequen;
                variable36 = limora.location;
                limora = limora.length;
                limora = variable36 + limora;
                limora = equals.bind(quebec)(whisks, limora);
                sierra = sierra.displayText;
                status = limora === sierra;
 998:
                target = status;
 1001:
                if(target) { _fun00050_ip = 1056; continue _fun00049 }
 1004:
                target = delete echoed[papara];
                target = golfie.type;
                status = _closure1_slot0;
                golfie = _closure1_slot3;
                golfie = golfie[config];
                golfie = status.bind(source)(golfie);
                golfie = golfie.ApplicationCommandOptionType;
                golfie = golfie.ATTACHMENT;
                if(!(target === golfie)) { _fun00050_ip = 1056; continue _fun00049 }
 1046:
                golfie = ctrled.push;
                golfie = golfie.bind(ctrled)(papara);
 1056:
                papara = record.bind(source)();
                golfie = papara.done;
                update = papara;
                if(!golfie) { _fun00050_ip = 877; continue _fun00049 }
 1074:
                update = ctrled.length;
                golfie = 0;
                if(!(update > golfie)) { _fun00050_ip = 1133; continue _fun00049 }
 1085:
                update = _closure1_slot1;
                vacuum = _closure1_slot3;
                golfie = 24;
                golfie = vacuum[golfie];
                source = update.bind(source)(golfie);
                update = source.removeFiles;
                golfie = foxtra.id;
                report = _closure1_slot7;
                report = report.SlashCommand;
                report = update.bind(source)(golfie, ctrled, report);
 1133:
                golfie = oscard.preferredOptionValues;
                report = foxtra.id;
                golfie[report] = echoed;
                romeon = tangon;
                yankee = michal;
                zuuluu = entity;
 1157:
                golfie = null;
                michal = golfie == romeon;
                entity = undefined;
                tangon = undefined;
                if(michal) { _fun00050_ip = 1175; continue _fun00049 }
 1170:
                tangon = romeon.id;
 1175:
                report = oscard.activeCommand;
                echoed = golfie == report;
                michal = undefined;
                if(echoed) { _fun00050_ip = 1195; continue _fun00049 }
 1190:
                michal = report.id;
 1195:
                michal = tangon !== michal;
                var _closure3_slot3 = michal;
                tangon = oscard.activeOption;
                var _closure3_slot4 = tangon;
                report = backup;
                if(backup) { _fun00050_ip = 1222; continue _fun00049 }
 1219:
                report = result;
 1222:
                if(report) { _fun00050_ip = 1228; continue _fun00049 }
 1225:
                report = output;
 1228:
                if(report) { _fun00050_ip = 1234; continue _fun00049 }
 1231:
                report = michal;
 1234:
                if(!report) { _fun00050_ip = 1332; continue _fun00049 }
 1237:
                result = oscard.getCurrentOption;
                output = verify.focused;
                if(output) { _fun00050_ip = 1313; continue _fun00049 }
 1252:
                update = _closure1_slot0;
                source = _closure1_slot3;
                report = 25;
                report = source[report];
                echoed = update.bind(entity)(report);
                report = echoed.getKeyboardType;
                echoed = report.bind(echoed)();
                report = 26;
                report = source[report];
                report = update.bind(entity)(report);
                report = report.KeyboardTypes;
                report = report.SYSTEM;
                output = echoed !== report;
 1313:
                report = verify.selectionStart;
                report = result.bind(oscard)(output, report);
                _closure3_slot4 = report;
                tangon = report;
 1332:
                report = michal;
                if(!michal) { _fun00050_ip = 1348; continue _fun00049 }
 1338:
                output = oscard.activeCommand;
                report = golfie != output;
 1348:
                if(!report) { _fun00050_ip = 1401; continue _fun00049 }
 1351:
                result = _closure1_slot1;
                echoed = _closure1_slot3;
                output = 24;
                output = echoed[output];
                result = result.bind(entity)(output);
                output = result.clearAll;
                foxtra = foxtra.id;
                report = _closure1_slot7;
                report = report.SlashCommand;
                report = output.bind(result)(foxtra, report);
 1401:
                report = golfie == tangon;
                foxtra = undefined;
                if(report) { _fun00050_ip = 1415; continue _fun00049 }
 1410:
                foxtra = tangon.name;
 1415:
                output = oscard.activeOption;
                result = golfie == output;
                report = undefined;
                if(result) { _fun00050_ip = 1435; continue _fun00049 }
 1430:
                report = output.name;
 1435:
                foxtra = foxtra !== report;
                var _closure3_slot5 = foxtra;
                report = verify.lastCommandAutocompleteResponseNonce;
                option = option !== report;
                report = backup;
                if(backup) { _fun00050_ip = 1462; continue _fun00049 }
 1459:
                report = foxtra;
 1462:
                if(report) { _fun00050_ip = 1468; continue _fun00049 }
 1465:
                report = option;
 1468:
                if(!report) { _fun00050_ip = 1503; continue _fun00049 }
 1471:
                option = golfie == romeon;
                output = undefined;
                if(option) { _fun00050_ip = 1486; continue _fun00049 }
 1480:
                output = romeon.preferredCommandType;
 1486:
                option = _closure1_slot15;
                option = option.FULL_COMMAND;
                report = output === option;
 1503:
                if(!report) { _fun00050_ip = 1634; continue _fun00049 }
 1509:
                option = oscard.getAllCommandOptionValues;
                report = verify.text;
                report = option.bind(oscard)(romeon, report);
                oscard['optionValues'] = report;
                option = _closure1_slot0;
                output = _closure1_slot3;
                report = 27;
                report = output[report];
                update = option.bind(entity)(report);
                echoed = update.getValidationResults;
                variable40 = oscard.optionValues;
                report = verify.channel;
                variable39 = report.guild_id;
                report = verify.channel;
                variable38 = report.id;
                variable37 = false;
                variable42 = update;
                variable41 = romeon;
                report = variable42[echoed](variable41, variable40, variable39, variable38, variable37, variable36);
                oscard['optionValidationResults'] = report;
                output = oscard.chatInputNodes;
                option = output.map;
                report = function(argFoo) {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon.type;
                        zuuluu = _closure1_slot0;
                        entity = _closure1_slot3;
                        verify = 8;
                        entity = entity[verify];
                        option = undefined;
                        entity = zuuluu.bind(option)(entity);
                        entity = entity.ChatInputNodeType;
                        entity = entity.COMMAND_OPTION;
                        if(!(michal !== entity)) { _fun00054_ip = 87; continue _fun00053 }
 49:
                        michal = tangon.type;
                        zuuluu = _closure1_slot0;
                        entity = _closure1_slot3;
                        entity = entity[verify];
                        entity = zuuluu.bind(option)(entity);
                        entity = entity.ChatInputNodeType;
                        entity = entity.COMMAND_OPTION_WITH_VALUE;
                        if(!(michal === entity)) { _fun00054_ip = 98; continue _fun00053 }
 87:
                        entity = tangon.data;
                        michal = null;
                        if(!(michal == entity)) { _fun00054_ip = 100; continue _fun00053 }
 98:
                        return tangon;
 100:
                        entity = tangon.data;
                        zuuluu = entity.option;
                        oscard = tangon.type;
                        golfie = _closure1_slot0;
                        entity = _closure1_slot3;
                        entity = entity[verify];
                        entity = golfie.bind(option)(entity);
                        entity = entity.ChatInputNodeType;
                        entity = entity.COMMAND_OPTION_WITH_VALUE;
                        if(!(oscard === entity)) { _fun00054_ip = 223; continue _fun00053 }
 149:
                        golfie = zuuluu.name;
                        verify = _closure3_slot4;
                        offset = michal == verify;
                        oscard = undefined;
                        if(offset) { _fun00054_ip = 175; continue _fun00053 }
 170:
                        oscard = verify.name;
 175:
                        if(!(golfie === oscard)) { _fun00054_ip = 223; continue _fun00053 }
 179:
                        oscard = _closure3_slot2;
                        if(!oscard) { _fun00054_ip = 223; continue _fun00053 }
 186:
                        oscard = _closure3_slot3;
                        if(!oscard) { _fun00054_ip = 200; continue _fun00053 }
 193:
                        entity = _closure3_slot5;
                        if(entity) { _fun00054_ip = 223; continue _fun00053 }
 200:
                        entity = {};
                        foxtra = entity;
                        romeon = tangon;
                        oscard = copyDataProperties(foxtra, romeon);
                        oscard = 'style';
                        entity[oscard] = option;
                        return entity;
 223:
                        entity = {};
                        foxtra = entity;
                        romeon = tangon;
                        tangon = copyDataProperties(foxtra, romeon);
                        oscard = _closure3_slot0;
                        golfie = oscard.optionValidationResults;
                        oscard = zuuluu.name;
                        oscard = golfie[oscard];
                        verify = zuuluu.name;
                        offset = _closure3_slot4;
                        yankee = michal == offset;
                        golfie = undefined;
                        if(yankee) { _fun00054_ip = 280; continue _fun00053 }
 275:
                        golfie = offset.name;
 280:
                        if(!(verify !== golfie)) { _fun00054_ip = 325; continue _fun00053 }
 284:
                        if(!(option !== oscard)) { _fun00054_ip = 325; continue _fun00053 }
 288:
                        golfie = oscard.success;
                        if(golfie) { _fun00054_ip = 325; continue _fun00053 }
 297:
                        golfie = _closure3_slot0;
                        verify = golfie.styles;
                        golfie = verify.commandErrorOption;
                        golfie = golfie.bind(verify)();
                        entity['style'] = golfie;
                        _fun00054_ip = 351; continue _fun00053;
 325:
                        golfie = _closure3_slot0;
                        verify = golfie.styles;
                        golfie = verify.commandOption;
                        golfie = golfie.bind(verify)();
                        entity['style'] = golfie;
 351:
                        michal = michal != oscard;
                        if(!michal) { _fun00054_ip = 364; continue _fun00053 }
 358:
                        michal = oscard.success;
 364:
                        if(!michal) { _fun00054_ip = 408; continue _fun00053 }
 367:
                        oscard = zuuluu.type;
                        golfie = _closure1_slot0;
                        verify = _closure1_slot3;
                        report = 15;
                        report = verify[report];
                        report = golfie.bind(option)(report);
                        report = report.ApplicationCommandOptionType;
                        report = report.ATTACHMENT;
                        michal = oscard === report;
 408:
                        if(!michal) { _fun00054_ip = 465; continue _fun00053 }
 411:
                        michal = {};
                        report = 'tapAttachment';
                        michal['action'] = report;
                        tangon = _closure3_slot1;
                        tangon = tangon.channel;
                        tangon = tangon.id;
                        michal['channelId'] = tangon;
                        zuuluu = zuuluu.name;
                        michal['optionName'] = zuuluu;
                        entity['tapAction'] = michal;
                        michal = true;
                        entity['deleteNodeOnBackspace'] = michal;
 465:
                        return entity;
                    }
                };
                report = option.bind(output)(report);
                oscard['chatInputNodes'] = report;
 1634:
                report = backup;
                if(report) { _fun00050_ip = 1643; continue _fun00049 }
 1640:
                report = michal;
 1643:
                if(report) { _fun00050_ip = 1649; continue _fun00049 }
 1646:
                report = foxtra;
 1649:
                if(report) { _fun00050_ip = 1662; continue _fun00049 }
 1652:
                option = verify.editId;
                report = offset !== option;
 1662:
                if(!report) { _fun00050_ip = 1699; continue _fun00049 }
 1665:
                report = oscard.ref;
                output = report.current;
                offset = output.updateNativeTextBlocksThrottled;
                option = oscard.chatInputNodes;
                report = verify.editId;
                report = offset.bind(output)(option, report);
 1699:
                report = michal;
                if(!michal) { _fun00050_ip = 1709; continue _fun00049 }
 1705:
                report = golfie != romeon;
 1709:
                if(!report) { _fun00050_ip = 1720; continue _fun00049 }
 1712:
                report = true;
                oscard['canAutoInsertFirstOption'] = report;
 1720:
                offset = _closure1_slot0;
                report = _closure1_slot3;
                source = 18;
                report = report[source];
                output = offset.bind(entity)(report);
                offset = output.isEmpty;
                report = oscard.optionsToNodes;
                report = offset.bind(output)(report);
                if(report) { _fun00050_ip = 1771; continue _fun00049 }
 1763:
                report = false;
                oscard['canAutoInsertFirstOption'] = report;
 1771:
                report = golfie == romeon;
                offset = undefined;
                if(report) { _fun00050_ip = 1786; continue _fun00049 }
 1780:
                offset = romeon.preferredCommandType;
 1786:
                report = _closure1_slot15;
                report = report.FULL_COMMAND;
                if(!(offset === report)) { _fun00050_ip = 1818; continue _fun00049 }
 1800:
                report = golfie == romeon;
                output = undefined;
                if(report) { _fun00050_ip = 1814; continue _fun00049 }
 1809:
                output = romeon.options;
 1814:
                if(!(golfie == output)) { _fun00050_ip = 1822; continue _fun00049 }
 1818:
                output = new Array(0);
 1822:
                offset = output.filter;
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.required;
                    return entity;
                };
                report = offset.bind(output)(report);
                report = report.length;
                offset = 0;
                echoed = report > offset;
                report = golfie == romeon;
                output = undefined;
                if(report) { _fun00050_ip = 1865; continue _fun00049 }
 1859:
                output = romeon.preferredCommandType;
 1865:
                report = _closure1_slot15;
                report = report.FULL_COMMAND;
                if(!(output === report)) { _fun00050_ip = 1897; continue _fun00049 }
 1879:
                report = golfie == romeon;
                result = undefined;
                if(report) { _fun00050_ip = 1893; continue _fun00049 }
 1888:
                result = romeon.options;
 1893:
                if(!(golfie == result)) { _fun00050_ip = 1901; continue _fun00049 }
 1897:
                result = new Array(0);
 1901:
                output = result.filter;
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.required;
                    entity = !entity;
                    return entity;
                };
                report = output.bind(result)(report);
                output = report.length;
                report = 1;
                result = report === output;
                report = oscard.canAutoInsertFirstOption;
                if(!report) { _fun00050_ip = 1968; continue _fun00049 }
 1939:
                output = golfie == romeon;
                update = undefined;
                if(output) { _fun00050_ip = 1954; continue _fun00049 }
 1948:
                update = romeon.preferredCommandType;
 1954:
                output = _closure1_slot15;
                output = output.FULL_COMMAND;
                report = update === output;
 1968:
                if(!report) { _fun00050_ip = 2005; continue _fun00049 }
 1971:
                update = _closure1_slot0;
                output = _closure1_slot3;
                output = output[source];
                source = update.bind(entity)(output);
                update = source.isEmpty;
                output = oscard.optionsToNodes;
                report = update.bind(source)(output);
 2005:
                if(!report) { _fun00050_ip = 2027; continue _fun00049 }
 2008:
                output = verify.text;
                output = output.length;
                sizing = sizing.length;
                report = output >= sizing;
 2027:
                if(!report) { _fun00050_ip = 2098; continue _fun00049 }
 2030:
                output = oscard.insertFirstOptionIfValid;
                variable41 = verify.text;
                variable39 = romeon.displayName;
                variable42 = oscard;
                variable40 = romeon;
                variable38 = echoed;
                variable37 = result;
                report = variable42[output](variable41, variable40, variable39, variable38, variable37, variable36);
                if(report) { _fun00050_ip = 2098; continue _fun00049 }
 2065:
                output = oscard.insertFirstOptionIfValid;
                variable41 = verify.text;
                variable39 = romeon.untranslatedName;
                variable42 = oscard;
                variable40 = romeon;
                variable38 = echoed;
                variable37 = result;
                report = variable42[output](variable41, variable40, variable39, variable38, variable37, variable36);
 2098:
                if(!foxtra) { _fun00050_ip = 2268; continue _fun00049 }
 2104:
                report = golfie == tangon;
                sizing = undefined;
                if(report) { _fun00050_ip = 2118; continue _fun00049 }
 2113:
                sizing = tangon.type;
 2118:
                output = _closure1_slot0;
                result = _closure1_slot3;
                report = 15;
                report = result[report];
                report = output.bind(entity)(report);
                report = report.ApplicationCommandOptionType;
                report = report.ATTACHMENT;
                if(!(sizing === report)) { _fun00050_ip = 2268; continue _fun00049 }
 2154:
                sizing = oscard.optionValidationResults;
                report = tangon.name;
                report = sizing[report];
                report = report.success;
                if(report) { _fun00050_ip = 2268; continue _fun00049 }
 2178:
                report = oscard.ref;
                output = report.current;
                sizing = output.openCustomKeyboard;
                report = {};
                echoed = _closure1_slot0;
                update = _closure1_slot3;
                result = 26;
                result = update[result];
                result = echoed.bind(entity)(result);
                result = result.KeyboardTypes;
                result = result.MEDIA;
                report['type'] = result;
                result = {};
                echoed = _closure1_slot13;
                echoed = echoed.COMMAND;
                result['target'] = echoed;
                result['option'] = tangon;
                report['context'] = result;
                report = sizing.bind(output)(report);
                _fun00050_ip = 2426; continue _fun00049;
 2268:
                report = foxtra;
                if(!report) { _fun00050_ip = 2278; continue _fun00049 }
 2274:
                report = golfie != tangon;
 2278:
                if(!report) { _fun00050_ip = 2322; continue _fun00049 }
 2281:
                output = tangon.type;
                result = _closure1_slot0;
                echoed = _closure1_slot3;
                sizing = 15;
                sizing = echoed[sizing];
                sizing = result.bind(entity)(sizing);
                sizing = sizing.ApplicationCommandOptionType;
                sizing = sizing.ATTACHMENT;
                report = output !== sizing;
 2322:
                if(!report) { _fun00050_ip = 2383; continue _fun00049 }
 2325:
                result = _closure1_slot0;
                echoed = _closure1_slot3;
                sizing = 25;
                sizing = echoed[sizing];
                output = result.bind(entity)(sizing);
                sizing = output.getKeyboardType;
                output = sizing.bind(output)();
                sizing = 26;
                sizing = echoed[sizing];
                sizing = result.bind(entity)(sizing);
                sizing = sizing.KeyboardTypes;
                sizing = sizing.SYSTEM;
                report = output !== sizing;
 2383:
                if(!report) { _fun00050_ip = 2426; continue _fun00049 }
 2386:
                report = oscard.ref;
                sizing = report.current;
                report = sizing.closeCustomKeyboard;
                report = report.bind(sizing)();
                report = oscard.ref;
                sizing = report.current;
                report = sizing.focus;
                report = report.bind(sizing)();
 2426:
                oscard['props'] = verify;
                report = {};
                var _closure3_slot6 = report;
                sizing = golfie == romeon;
                output = undefined;
                if(sizing) { _fun00050_ip = 2453; continue _fun00049 }
 2447:
                output = romeon.preferredCommandType;
 2453:
                sizing = _closure1_slot15;
                sizing = sizing.FULL_COMMAND;
                if(!(output === sizing)) { _fun00050_ip = 2632; continue _fun00049 }
 2470:
                if(foxtra) { _fun00050_ip = 2486; continue _fun00049 }
 2473:
                if(!backup) { _fun00050_ip = 2632; continue _fun00049 }
 2479:
                if(!(golfie == tangon)) { _fun00050_ip = 2632; continue _fun00049 }
 2486:
                sizing = golfie == romeon;
                output = romeon;
                if(sizing) { _fun00050_ip = 2508; continue _fun00049 }
 2496:
                result = romeon.options;
                sizing = golfie == result;
                output = result;
 2508:
                if(sizing) { _fun00050_ip = 2528; continue _fun00049 }
 2511:
                sizing = output.forEach;
                kiloes = function(argFoo) {
                    _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.name;
                        entity = _closure3_slot0;
                        entity = entity.optionValues;
                        option = entity[tangon];
                        zuuluu = _closure3_slot6;
                        michal = {};
                        verify = _closure3_slot4;
                        report = null;
                        offset = report == verify;
                        entity = undefined;
                        golfie = undefined;
                        if(offset) { _fun00056_ip = 53; continue _fun00055 }
 48:
                        golfie = verify.name;
 53:
                        golfie = tangon === golfie;
                        michal['isActive'] = golfie;
                        michal['optionValue'] = option;
                        golfie = report != option;
                        if(!golfie) { _fun00056_ip = 85; continue _fun00055 }
 74:
                        verify = option.length;
                        option = 0;
                        golfie = verify > option;
 85:
                        michal['hasValue'] = golfie;
                        golfie = _closure3_slot0;
                        option = golfie.optionsToNodes;
                        golfie = option.get;
                        option = golfie.bind(option)(tangon);
                        verify = report == option;
                        golfie = undefined;
                        if(verify) { _fun00056_ip = 124; continue _fun00055 }
 119:
                        golfie = option.location;
 124:
                        michal['location'] = golfie;
                        oscard = _closure3_slot0;
                        golfie = oscard.optionsToNodes;
                        oscard = golfie.get;
                        oscard = oscard.bind(golfie)(tangon);
                        golfie = report == oscard;
                        report = undefined;
                        if(golfie) { _fun00056_ip = 162; continue _fun00055 }
 157:
                        report = oscard.length;
 162:
                        michal['length'] = report;
                        zuuluu[tangon] = michal;
                        return entity;
                    }
                };
                kiloes = sizing.bind(output)(kiloes);
 2528:
                if(!foxtra) { _fun00050_ip = 2632; continue _fun00049 }
 2531:
                if(!(golfie != tangon)) { _fun00050_ip = 2552; continue _fun00049 }
 2535:
                foxtra = tangon.name;
                kiloes = report[foxtra];
                foxtra = true;
                kiloes['hasValue'] = foxtra;
 2552:
                foxtra = oscard.activeOption;
                if(!(golfie != foxtra)) { _fun00050_ip = 2632; continue _fun00049 }
 2562:
                foxtra = oscard.activeOption;
                foxtra = foxtra.name;
                foxtra = report[foxtra];
                if(!(golfie != foxtra)) { _fun00050_ip = 2632; continue _fun00049 }
 2581:
                foxtra = foxtra.hasValue;
                if(!foxtra) { _fun00050_ip = 2632; continue _fun00049 }
 2590:
                kiloes = oscard.optionValidationResults;
                foxtra = oscard.activeOption;
                foxtra = foxtra.name;
                kiloes = kiloes[foxtra];
                foxtra = oscard.activeOption;
                foxtra = foxtra.name;
                foxtra = report[foxtra];
                foxtra['lastValidationResult'] = kiloes;
 2632:
                sizing = oscard.getCurrentOption;
                foxtra = verify.selectionStart;
                kiloes = true;
                foxtra = sizing.bind(oscard)(kiloes, foxtra);
                if(!backup) { _fun00050_ip = 2772; continue _fun00049 }
 2655:
                if(!(golfie != foxtra)) { _fun00050_ip = 2772; continue _fun00049 }
 2659:
                backup = foxtra.name;
                foxtra = report[backup];
                if(!(golfie == foxtra)) { _fun00050_ip = 2674; continue _fun00049 }
 2672:
                foxtra = {};
 2674:
                output = oscard.optionsToNodes;
                sizing = output.get;
                output = sizing.bind(output)(backup);
                result = golfie == output;
                sizing = undefined;
                if(result) { _fun00050_ip = 2704; continue _fun00049 }
 2699:
                sizing = output.location;
 2704:
                foxtra['location'] = sizing;
                output = oscard.optionsToNodes;
                sizing = output.get;
                output = sizing.bind(output)(backup);
                result = golfie == output;
                sizing = undefined;
                if(result) { _fun00050_ip = 2740; continue _fun00049 }
 2735:
                sizing = output.length;
 2740:
                foxtra['length'] = sizing;
                sizing = oscard.optionValues;
                sizing = sizing[backup];
                foxtra['optionValue'] = sizing;
                foxtra['hasValue'] = kiloes;
                report[backup] = foxtra;
 2772:
                oscard['activeCommand'] = romeon;
                oscard['activeCommandSection'] = yankee;
                oscard['activeOption'] = tangon;
                if(michal) { _fun00050_ip = 2820; continue _fun00049 }
 2793:
                tangon = global;
                yankee = tangon.Object;
                tangon = yankee.keys;
                tangon = tangon.bind(yankee)(report);
                tangon = tangon.length;
                michal = tangon > offset;
 2820:
                if(michal) { _fun00050_ip = 2826; continue _fun00049 }
 2823:
                michal = zuuluu;
 2826:
                if(!michal) { _fun00050_ip = 3000; continue _fun00049 }
 2832:
                zuuluu = _closure1_slot2;
                tangon = _closure1_slot3;
                michal = 9;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.updateChannelState;
                michal = {};
                verify = verify.channel;
                verify = verify.id;
                michal['channelId'] = verify;
                verify = oscard.activeCommand;
                yankee = golfie == verify;
                offset = undefined;
                if(yankee) { _fun00050_ip = 2895; continue _fun00049 }
 2889:
                offset = verify.preferredCommandType;
 2895:
                option = _closure1_slot15;
                verify = option.FULL_COMMAND;
                option = null;
                if(!(offset === verify)) { _fun00050_ip = 2917; continue _fun00049 }
 2911:
                option = oscard.activeCommand;
 2917:
                michal['command'] = option;
                verify = oscard.activeCommandSection;
                offset = golfie != verify;
                option = null;
                if(!offset) { _fun00050_ip = 2940; continue _fun00049 }
 2937:
                option = verify;
 2940:
                michal['section'] = option;
                verify = oscard.preferredCommand;
                offset = golfie == verify;
                option = undefined;
                if(offset) { _fun00050_ip = 2964; continue _fun00049 }
 2959:
                option = verify.id;
 2964:
                verify = golfie != option;
                golfie = null;
                if(!verify) { _fun00050_ip = 2976; continue _fun00049 }
 2973:
                golfie = option;
 2976:
                michal['preferredCommandId'] = golfie;
                oscard = oscard.location;
                michal['location'] = oscard;
                michal['changedOptionStates'] = report;
                michal = zuuluu.bind(tangon)(michal);
 3000:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'updateValidationResults';
        entity['key'] = oscard;
        report = function() { // Original name: updateValidationResults
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                report = {};
                var _closure3_slot1 = report;
                zuuluu = michal.activeCommand;
                verify = null;
                oscard = verify == zuuluu;
                entity = undefined;
                golfie = undefined;
                if(oscard) { _fun00058_ip = 40; continue _fun00057 }
 34:
                golfie = zuuluu.preferredCommandType;
 40:
                oscard = _closure1_slot15;
                oscard = oscard.FULL_COMMAND;
                if(!(golfie === oscard)) { _fun00058_ip = 105; continue _fun00057 }
 57:
                option = michal.activeCommand;
                oscard = verify == option;
                golfie = option;
                if(oscard) { _fun00058_ip = 85; continue _fun00057 }
 73:
                option = option.options;
                oscard = verify == option;
                golfie = option;
 85:
                if(oscard) { _fun00058_ip = 105; continue _fun00057 }
 88:
                oscard = golfie.forEach;
                tangon = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.name;
                    michal = _closure3_slot1;
                    entity = {};
                    tangon = _closure3_slot0;
                    tangon = tangon.optionValidationResults;
                    tangon = tangon[zuuluu];
                    entity['lastValidationResult'] = tangon;
                    michal[zuuluu] = entity;
                    entity = undefined;
                    return entity;
                };
                tangon = oscard.bind(golfie)(tangon);
 105:
                tangon = _closure1_slot2;
                oscard = _closure1_slot3;
                zuuluu = 9;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.updateOptionStates;
                michal = michal.props;
                michal = michal.channel;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal, report);
                return entity;
            }
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 28;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/native/ApplicationCommandManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();