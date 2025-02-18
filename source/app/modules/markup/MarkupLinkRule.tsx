// app/modules/markup/MarkupLinkRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = option;
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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot12;
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
            golfie = _closure1_slot12;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: sanitizeWithCache
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot4;
            entity = michal.get;
            entity = entity.bind(michal)(report);
            michal = null;
            if(!(michal == entity)) { _fun00008_ip = 108; continue _fun00007 }
 26:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 2;
            michal = verify[tangon];
            oscard = undefined;
            golfie = option.bind(oscard)(michal);
            michal = golfie.sanitizeWhitespace;
            golfie = michal.bind(golfie)(report);
            michal = {};
            michal['whitespaceSanitized'] = golfie;
            tangon = verify[tangon];
            oscard = option.bind(oscard)(tangon);
            tangon = oscard.sanitizeUnicodeConfusables;
            tangon = tangon.bind(oscard)(golfie);
            michal['fullySanitized'] = tangon;
            tangon = _closure1_slot4;
            zuuluu = tangon.set;
            zuuluu = zuuluu.bind(tangon)(report, michal);
            return michal;
 108:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: validateContentTypes
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            romeon = argBar;
            yankee = arguments[2];
            offset = undefined;
            if(!(yankee === offset)) { _fun00010_ip = 19; continue _fun00009 }
 15:
            yankee = new Array(0);
 19:
            verify = global;
            michal = verify.Array;
            entity = michal.isArray;
            michal = entity.bind(michal)(zuuluu);
            entity = zuuluu;
            if(michal) { _fun00010_ip = 54; continue _fun00009 }
 43:
            michal = new Array(1);
            michal[0] = zuuluu;
            entity = michal;
 54:
            michal = _closure1_slot11;
            golfie = michal.bind(offset)(entity);
            tangon = golfie.bind(offset)();
            zuuluu = tangon.done;
            michal = null;
            report = 3;
            if(zuuluu) { _fun00010_ip = 272; continue _fun00009 }
 86:
            zuuluu = tangon.value;
            if(!(offset !== zuuluu)) { _fun00010_ip = 270; continue _fun00009 }
 98:
            backup = romeon.includes;
            foxtra = zuuluu.type;
            foxtra = backup.bind(romeon)(foxtra);
            if(!foxtra) { _fun00010_ip = 270; continue _fun00009 }
 119:
            backup = zuuluu.type;
            kiloes = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[report];
            foxtra = kiloes.bind(offset)(foxtra);
            foxtra = foxtra.AST_KEY;
            foxtra = foxtra.INLINE_CODE;
            if(!(backup === foxtra)) { _fun00010_ip = 203; continue _fun00009 }
 157:
            kiloes = new Array(0);
            result = kiloes;
            output = romeon;
            sizing = 0;
            sizing = arraySpread(result, output, sizing);
            result = kiloes;
            output = yankee;
            foxtra = arraySpread(result, output, sizing);
            backup = _closure1_slot14;
            foxtra = zuuluu.validationChildContent;
            foxtra = backup.bind(offset)(foxtra, kiloes);
            if(!(michal != foxtra)) { _fun00010_ip = 268; continue _fun00009 }
 203:
            kiloes = verify.Array;
            backup = kiloes.isArray;
            foxtra = zuuluu.content;
            foxtra = backup.bind(kiloes)(foxtra);
            if(!foxtra) { _fun00010_ip = 246; continue _fun00009 }
 227:
            foxtra = _closure1_slot14;
            zuuluu = zuuluu.content;
            zuuluu = foxtra.bind(offset)(zuuluu, romeon);
            if(!(michal != zuuluu)) { _fun00010_ip = 266; continue _fun00009 }
 246:
            foxtra = golfie.bind(offset)();
            zuuluu = foxtra.done;
            tangon = foxtra;
            if(zuuluu) { _fun00010_ip = 272; continue _fun00009 }
 261:
            _fun00010_ip = 86; continue _fun00009;
 266:
            return michal;
 268:
            return michal;
 270:
            return michal;
 272:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getRawText
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = _closure1_slot11;
            foxtra = undefined;
            entity = argFoo;
            romeon = michal.bind(foxtra)(entity);
            zuuluu = romeon.bind(foxtra)();
            michal = zuuluu.done;
            entity = '';
            yankee = '\n';
            offset = '<timestamp>';
            verify = global;
            option = '<';
            golfie = 'Content>';
            oscard = 4;
            report = 3;
            tangon = zuuluu;
            zuuluu = entity;
            entity = zuuluu;
            if(michal) { _fun00012_ip = 768; continue _fun00011 }
 73:
            michal = tangon.value;
            sizing = michal.type;
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.TEXT;
            if(!(kiloes !== sizing)) { _fun00012_ip = 735; continue _fun00011 }
 119:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.INLINE_CODE;
            if(!(kiloes !== sizing)) { _fun00012_ip = 735; continue _fun00011 }
 155:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.CUSTOM_EMOJI;
            if(!(kiloes !== sizing)) { _fun00012_ip = 724; continue _fun00011 }
 191:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.EMOJI;
            if(!(kiloes !== sizing)) { _fun00012_ip = 712; continue _fun00011 }
 227:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.LINE_BREAK;
            if(!(kiloes !== sizing)) { _fun00012_ip = 706; continue _fun00011 }
 263:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.STRONG;
            if(!(kiloes !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 299:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.ITALICS;
            if(!(kiloes !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 335:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.UNDERLINE;
            if(!(kiloes !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 371:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.STRIKETHROUGH;
            if(!(kiloes !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 407:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.SPOILER;
            if(!(kiloes !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 443:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.TIMESTAMP;
            if(!(kiloes !== sizing)) { _fun00012_ip = 680; continue _fun00011 }
 479:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.BLOCK_QUOTE;
            if(!(kiloes !== sizing)) { _fun00012_ip = 652; continue _fun00011 }
 515:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.LIST;
            if(!(kiloes !== sizing)) { _fun00012_ip = 652; continue _fun00011 }
 548:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.HEADING;
            if(!(kiloes !== sizing)) { _fun00012_ip = 652; continue _fun00011 }
 581:
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[report];
            kiloes = output.bind(foxtra)(kiloes);
            kiloes = kiloes.AST_KEY;
            kiloes = kiloes.SUBTEXT;
            if(!(kiloes !== sizing)) { _fun00012_ip = 652; continue _fun00011 }
 614:
            sizing = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[oscard];
            output = sizing.bind(foxtra)(kiloes);
            sizing = output.assertNever;
            kiloes = michal.type;
            kiloes = sizing.bind(output)(kiloes);
            kiloes = zuuluu;
            _fun00012_ip = 744; continue _fun00011;
 652:
            output = michal.type;
            sizing = verify.HermesInternal;
            sizing = sizing.concat;
            sizing = sizing.bind(option)(output, golfie);
            kiloes = zuuluu + sizing;
            _fun00012_ip = 744; continue _fun00011;
 680:
            kiloes = zuuluu + offset;
            _fun00012_ip = 744; continue _fun00011;
 686:
            output = _closure1_slot15;
            sizing = michal.content;
            sizing = output.bind(foxtra)(sizing);
            kiloes = zuuluu + sizing;
            _fun00012_ip = 744; continue _fun00011;
 706:
            kiloes = zuuluu + yankee;
            _fun00012_ip = 744; continue _fun00011;
 712:
            sizing = michal.surrogate;
            kiloes = zuuluu + sizing;
            _fun00012_ip = 744; continue _fun00011;
 724:
            sizing = michal.name;
            kiloes = zuuluu + sizing;
            _fun00012_ip = 744; continue _fun00011;
 735:
            michal = michal.content;
            kiloes = zuuluu + michal;
 744:
            sizing = romeon.bind(foxtra)();
            michal = sizing.done;
            zuuluu = kiloes;
            tangon = sizing;
            entity = zuuluu;
            if(!michal) { _fun00012_ip = 73; continue _fun00011 }
 768:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    michal = function(argFoo) { // Original name: punycodeLink
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            report = undefined;
            michal = undefined;
            zuuluu = undefined;
            oscard = undefined;
 11: // try_start_0
            tangon = global;
            option = tangon.URL;
            romeon = entity;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            foxtra = golfie;
            entity = new foxtra[option](romeon, yankee);
            entity = entity instanceof Object ? entity : golfie;
            zuuluu = entity;
            entity = entity.protocol;
            michal = entity;
            golfie = null;
            option = golfie != entity;
            entity = '';
            yankee = entity;
            if(!option) { _fun00014_ip = 73; continue _fun00013 }
 70:
            yankee = michal;
 73:
            oscard = yankee;
            offset = _closure1_slot5;
            verify = offset.includes;
            option = yankee.toLowerCase;
            option = option.bind(yankee)();
            option = verify.bind(offset)(option);
            if(option) { _fun00014_ip = 147; continue _fun00013 }
 106:
            offset = tangon.Error;
            verify = oscard;
            option = 'Provided protocol is not allowed: ';
            romeon = option + verify;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            foxtra = verify;
            option = new foxtra[offset](romeon, yankee);
            option = option instanceof Object ? option : verify;
            throw option;
 147:
            verify = oscard;
            option = 'http:';
            if(!(option !== verify)) { _fun00014_ip = 169; continue _fun00013 }
 158:
            option = oscard;
            oscard = 'https:';
            if(!(oscard === option)) { _fun00014_ip = 236; continue _fun00013 }
 169:
            oscard = zuuluu;
            oscard = oscard.hostname;
            if(!(golfie != oscard)) { _fun00014_ip = 202; continue _fun00013 }
 182:
            oscard = zuuluu;
            oscard = oscard.hostname;
            golfie = oscard.length;
            oscard = 0;
            if(!(oscard === golfie)) { _fun00014_ip = 236; continue _fun00013 }
 202:
            golfie = tangon.Error;
            tangon = golfie.prototype;
            oscard = Object.create(tangon, {constructor: {value: golfie}});
            romeon = 'no hostname';
            foxtra = oscard;
            tangon = new foxtra[golfie](romeon, yankee);
            tangon = tangon instanceof Object ? tangon : oscard;
            throw tangon;
 236:
            tangon = zuuluu;
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            option = golfie.bind(report)(zuuluu);
            golfie = option.toASCII;
            verify = tangon.hostname;
            zuuluu = verify.toLowerCase;
            zuuluu = zuuluu.bind(verify)();
            zuuluu = golfie.bind(option)(zuuluu);
            tangon['hostname'] = zuuluu;
            zuuluu = _closure1_slot0;
            michal = 2;
            golfie = oscard[michal];
            option = zuuluu.bind(report)(golfie);
            golfie = option.safelyMakeUrlHumanReadable;
            golfie = golfie.bind(option)(tangon);
            tangon['username'] = entity;
            tangon['password'] = entity;
            entity = {};
            entity['target'] = golfie;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.safelyMakeUrlHumanReadable;
            michal = michal.bind(zuuluu)(tangon);
            entity['displayTarget'] = michal;
 363: // try_end0
            return entity;
 365: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    var _closure1_slot16 = michal;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, tangon);
    foxtra = 0;
    tangon = option[foxtra];
    entity = undefined;
    tangon = offset.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    romeon = 1;
    tangon = option[romeon];
    verify = offset.bind(entity)(tangon);
    tangon = {};
    report = 50;
    tangon['max'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    output = report;
    sizing = tangon;
    tangon = new output[verify](sizing, kiloes);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot4 = tangon;
    tangon = ['http:', 'https:', 'discord:'];
    var _closure1_slot5 = tangon;
    verify = 3;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.TEXT;
    yankee = new Array(9);
    yankee[0] = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.UNDERLINE;
    yankee[1] = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.STRONG;
    yankee[2] = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.ITALICS;
    yankee[3] = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.STRIKETHROUGH;
    yankee[4] = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.INLINE_CODE;
    yankee[5] = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.SPOILER;
    yankee[6] = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.LINE_BREAK;
    yankee[7] = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    report = report.TIMESTAMP;
    yankee[8] = report;
    var _closure1_slot6 = yankee;
    report = new Array(2);
    sizing = report;
    kiloes = yankee;
    backup = 0;
    yankee = arraySpread(sizing, kiloes, backup);
    foxtra = option[verify];
    foxtra = golfie.bind(entity)(foxtra);
    foxtra = foxtra.AST_KEY;
    foxtra = foxtra.EMOJI;
    report[yankee] = foxtra;
    romeon = yankee + romeon;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.CUSTOM_EMOJI;
    report[romeon] = yankee;
    var _closure1_slot7 = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    yankee = report.LIST;
    report = new Array(4);
    report[0] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.HEADING;
    report[1] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.BLOCK_QUOTE;
    report[2] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.SUBTEXT;
    report[3] = yankee;
    var _closure1_slot8 = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    yankee = report.TEXT;
    report = new Array(1);
    report[0] = yankee;
    var _closure1_slot9 = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.AST_KEY;
    yankee = report.UNDERLINE;
    report = new Array(14);
    report[0] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.STRONG;
    report[1] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.ITALICS;
    report[2] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.STRIKETHROUGH;
    report[3] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.INLINE_CODE;
    report[4] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.SPOILER;
    report[5] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.LINE_BREAK;
    report[6] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.TIMESTAMP;
    report[7] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.EMOJI;
    report[8] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.CUSTOM_EMOJI;
    report[9] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.LIST;
    report[10] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.HEADING;
    report[11] = yankee;
    yankee = option[verify];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.BLOCK_QUOTE;
    report[12] = yankee;
    verify = option[verify];
    verify = golfie.bind(entity)(verify);
    verify = verify.AST_KEY;
    verify = verify.SUBTEXT;
    report[13] = verify;
    var _closure1_slot10 = report;
    report = {};
    verify = 6;
    verify = option[verify];
    verify = offset.bind(entity)(verify);
    verify = verify.defaultRules;
    kiloes = verify.link;
    sizing = report;
    verify = copyDataProperties(sizing, kiloes);
    offset = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argBar;
            michal = oscard.allowLinks;
            entity = null;
            if(!michal) { _fun00016_ip = 70; continue _fun00015 }
 14:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.defaultRules;
            report = michal.link;
            tangon = report.match;
            zuuluu = argFoo;
            michal = argBaz;
            entity = tangon.bind(report)(zuuluu, oscard, michal);
 70:
            return entity;
        }
    };
    verify = 'match';
    report[verify] = offset;
    verify = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            verify = argBar;
            foxtra = argBaz;
            report = _closure1_slot3;
            michal = undefined;
            tangon = argFoo;
            zuuluu = 4;
            zuuluu = report.bind(michal)(tangon, zuuluu);
            yankee = 0;
            tangon = zuuluu[yankee];
            var _closure2_slot0 = tangon;
            tangon = 1;
            kiloes = zuuluu[tangon];
            tangon = 2;
            source = zuuluu[tangon];
            update = 3;
            sizing = zuuluu[update];
            entity = function() { // Original name: renderIndividualParts
                entity = {};
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.AST_KEY;
                michal = michal.TEXT;
                entity['type'] = michal;
                michal = _closure2_slot0;
                entity['content'] = michal;
                return entity;
            };
            golfie = _closure1_slot13;
            report = golfie.bind(michal)(source);
            tangon = golfie.bind(michal)(kiloes);
            backup = null;
            option = backup != sizing;
            zuuluu = '';
            if(!option) { _fun00018_ip = 95; continue _fun00017 }
 92:
            zuuluu = sizing;
 95:
            zuuluu = golfie.bind(michal)(zuuluu);
            offset = report.whitespaceSanitized;
            romeon = tangon.fullySanitized;
            option = zuuluu.fullySanitized;
            report = romeon.trim;
            report = report.bind(romeon)();
            golfie = offset.trim;
            golfie = golfie.bind(offset)();
            golfie = golfie.length;
            if(!(yankee !== golfie)) { _fun00018_ip = 610; continue _fun00017 }
 150:
            report = report.length;
            if(!(yankee !== report)) { _fun00018_ip = 610; continue _fun00017 }
 162:
            result = _closure1_slot16;
            output = _closure1_slot1;
            golfie = _closure1_slot2;
            offset = 6;
            report = golfie[offset];
            echoed = output.bind(michal)(report);
            report = echoed.unescapeUrl;
            report = report.bind(echoed)(source);
            report = result.bind(michal)(report);
            result = 7;
            golfie = golfie[result];
            golfie = output.bind(michal)(golfie);
            golfie = golfie.bind(michal)(kiloes);
            golfie = golfie.length;
            golfie = golfie > yankee;
            if(golfie) { _fun00018_ip = 262; continue _fun00017 }
 231:
            output = _closure1_slot1;
            kiloes = _closure1_slot2;
            kiloes = kiloes[result];
            kiloes = output.bind(michal)(kiloes);
            kiloes = kiloes.bind(michal)(sizing);
            kiloes = kiloes.length;
            golfie = kiloes > yankee;
 262:
            if(!(backup != report)) { _fun00018_ip = 604; continue _fun00017 }
 269:
            if(golfie) { _fun00018_ip = 604; continue _fun00017 }
 275:
            golfie = {};
            sequen = golfie;
            vacuum = foxtra;
            kiloes = copyDataProperties(sequen, vacuum);
            sizing = false;
            kiloes = 'allowEscape';
            golfie[kiloes] = sizing;
            sizing = true;
            kiloes = 'parseInlineCodeChildContent';
            golfie[kiloes] = sizing;
            foxtra = foxtra.allowEmojiLinks;
            if(foxtra) { _fun00018_ip = 326; continue _fun00017 }
 320:
            foxtra = _closure1_slot6;
            _fun00018_ip = 330; continue _fun00017;
 326:
            foxtra = _closure1_slot7;
 330:
            result = new Array(0);
            sequen = result;
            vacuum = foxtra;
            ctrled = 0;
            ctrled = arraySpread(sequen, vacuum, ctrled);
            vacuum = _closure1_slot8;
            sequen = result;
            kiloes = arraySpread(sequen, vacuum, ctrled);
            vacuum = _closure1_slot9;
            sizing = new Array(0);
            sequen = sizing;
            ctrled = 0;
            ctrled = arraySpread(sequen, vacuum, ctrled);
            vacuum = _closure1_slot10;
            sequen = sizing;
            kiloes = arraySpread(sequen, vacuum, ctrled);
            kiloes = _closure1_slot14;
            output = verify.bind(michal)(romeon, golfie);
            echoed = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[update];
            romeon = echoed.bind(michal)(romeon);
            romeon = romeon.AST_KEY;
            echoed = romeon.EMOJI;
            romeon = new Array(1);
            romeon[0] = echoed;
            romeon = kiloes.bind(michal)(output, result, romeon);
            option = verify.bind(michal)(option, golfie);
            option = kiloes.bind(michal)(option, sizing);
            if(!(backup != romeon)) { _fun00018_ip = 598; continue _fun00017 }
 458:
            if(!(backup != option)) { _fun00018_ip = 598; continue _fun00017 }
 465:
            option = _closure1_slot15;
            romeon = option.bind(michal)(romeon);
            option = romeon.trim;
            option = option.bind(romeon)();
            option = option.length;
            if(!(yankee !== option)) { _fun00018_ip = 592; continue _fun00017 }
 493:
            option = _closure1_slot1;
            oscard = _closure1_slot2;
            yankee = 8;
            yankee = oscard[yankee];
            romeon = option.bind(michal)(yankee);
            yankee = romeon.pick;
            verify = verify.rules;
            verify = yankee.bind(romeon)(verify, foxtra);
            oscard = oscard[offset];
            option = option.bind(michal)(oscard);
            oscard = option.parserFor;
            oscard = oscard.bind(option)(verify);
            tangon = tangon.whitespaceSanitized;
            oscard = oscard.bind(michal)(tangon, golfie);
            tangon = zuuluu.whitespaceSanitized;
            zuuluu = {};
            zuuluu['content'] = oscard;
            report = report.target;
            zuuluu['target'] = report;
            zuuluu['title'] = tangon;
            return zuuluu;
 592:
            zuuluu = entity.bind(michal)();
            return zuuluu;
 598:
            zuuluu = entity.bind(michal)();
            return zuuluu;
 604:
            zuuluu = entity.bind(michal)();
            return zuuluu;
 610:
            entity = entity.bind(michal)();
            return entity;
        }
    };
    oscard = 'parse';
    report[oscard] = verify;
    oscard = 9;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/markup/MarkupLinkRule.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['ALLOWED_PROTOCOLS'] = tangon;
    zuuluu['punycodeLink'] = michal;
    return entity;
})();