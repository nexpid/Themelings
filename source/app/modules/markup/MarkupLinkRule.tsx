// app/modules/markup/MarkupLinkRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = verify;
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot12;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot12;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 342:
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
    tangon = function(argFoo) { // Original name: isSuspiciousUrl
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot13;
            oscard = undefined;
            entity = entity.bind(oscard)(tangon);
            entity = entity.whitespaceSanitized;
            if(!(entity === tangon)) { _fun00014_ip = 201; continue _fun00013 }
 30:
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            golfie = 5;
            entity = entity[golfie];
            michal = michal.bind(oscard)(entity);
            entity = michal.toURLSafe;
            entity = entity.bind(michal)(tangon);
            michal = null;
            if(!(michal != entity)) { _fun00014_ip = 197; continue _fun00013 }
 70:
            report = entity.protocol;
            michal = 'http:';
            if(!(michal !== report)) { _fun00014_ip = 98; continue _fun00013 }
 84:
            michal = entity.protocol;
            entity = 'https:';
            if(!(entity === michal)) { _fun00014_ip = 193; continue _fun00013 }
 98:
            michal = tangon.split;
            entity = '/';
            report = michal.bind(tangon)(entity);
            michal = report.length;
            entity = 3;
            entity = michal < entity;
            if(entity) { _fun00014_ip = 191; continue _fun00013 }
 127:
            michal = 1;
            tangon = report[michal];
            michal = '';
            michal = michal !== tangon;
            if(michal) { _fun00014_ip = 188; continue _fun00013 }
 145:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            golfie = tangon.bind(oscard)(zuuluu);
            oscard = golfie.safeDecodeURIComponent;
            zuuluu = 2;
            tangon = report[zuuluu];
            tangon = oscard.bind(golfie)(tangon);
            zuuluu = report[zuuluu];
            michal = tangon !== zuuluu;
 188:
            entity = michal;
 191:
            return entity;
 193:
            entity = false;
            return entity;
 197:
            entity = true;
            return entity;
 201:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot16 = tangon;
    michal = function(argFoo) { // Original name: punycodeLink
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            golfie = undefined;
            verify = undefined;
            report = undefined;
            oscard = undefined;
 11: // try_start_0
            zuuluu = _closure1_slot16;
            michal = entity;
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = global;
            if(zuuluu) { _fun00016_ip = 383; continue _fun00015 }
 34:
            offset = michal.URL;
            foxtra = entity;
            option = offset.prototype;
            option = Object.create(option, {constructor: {value: offset}});
            backup = option;
            zuuluu = new backup[offset](foxtra, romeon);
            zuuluu = zuuluu instanceof Object ? zuuluu : option;
            report = zuuluu;
            zuuluu = zuuluu.protocol;
            verify = zuuluu;
            option = null;
            offset = option != zuuluu;
            zuuluu = '';
            romeon = zuuluu;
            if(!offset) { _fun00016_ip = 94; continue _fun00015 }
 91:
            romeon = verify;
 94:
            oscard = romeon;
            yankee = _closure1_slot5;
            offset = yankee.includes;
            verify = romeon.toLowerCase;
            verify = verify.bind(romeon)();
            verify = offset.bind(yankee)(verify);
            if(verify) { _fun00016_ip = 165; continue _fun00015 }
 124:
            yankee = michal.Error;
            offset = oscard;
            verify = 'Provided protocol is not allowed: ';
            foxtra = verify + offset;
            offset = yankee.prototype;
            offset = Object.create(offset, {constructor: {value: yankee}});
            backup = offset;
            verify = new backup[yankee](foxtra, romeon);
            verify = verify instanceof Object ? verify : offset;
            throw verify;
 165:
            offset = oscard;
            verify = 'http:';
            if(!(verify !== offset)) { _fun00016_ip = 187; continue _fun00015 }
 176:
            verify = oscard;
            oscard = 'https:';
            if(!(oscard === verify)) { _fun00016_ip = 254; continue _fun00015 }
 187:
            oscard = report;
            oscard = oscard.hostname;
            if(!(option != oscard)) { _fun00016_ip = 220; continue _fun00015 }
 200:
            oscard = report;
            oscard = oscard.hostname;
            option = oscard.length;
            oscard = 0;
            if(!(oscard === option)) { _fun00016_ip = 254; continue _fun00015 }
 220:
            verify = michal.Error;
            oscard = verify.prototype;
            option = Object.create(oscard, {constructor: {value: verify}});
            foxtra = 'no hostname';
            backup = option;
            oscard = new backup[verify](foxtra, romeon);
            oscard = oscard instanceof Object ? oscard : option;
            throw oscard;
 254:
            oscard = report;
            verify = _closure1_slot1;
            option = _closure1_slot2;
            report = 6;
            report = option[report];
            offset = verify.bind(golfie)(report);
            verify = offset.toASCII;
            yankee = oscard.hostname;
            report = yankee.toLowerCase;
            report = report.bind(yankee)();
            report = verify.bind(offset)(report);
            oscard['hostname'] = report;
            report = _closure1_slot0;
            tangon = 2;
            verify = option[tangon];
            offset = report.bind(golfie)(verify);
            verify = offset.safelyMakeUrlHumanReadable;
            verify = verify.bind(offset)(oscard);
            oscard['username'] = zuuluu;
            oscard['password'] = zuuluu;
            zuuluu = {};
            zuuluu['target'] = verify;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.safelyMakeUrlHumanReadable;
            tangon = tangon.bind(report)(oscard);
            zuuluu['displayTarget'] = tangon;
 381: // try_end0
            return zuuluu;
 383: // try_start_1
            zuuluu = michal.Error;
            tangon = michal.JSON;
            michal = tangon.stringify;
            michal = michal.bind(tangon)(entity);
            entity = 'Rejected due to suspicious characters in URL: ';
            foxtra = entity + michal;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            backup = michal;
            entity = new backup[zuuluu](foxtra, romeon);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 438: // try_end1 // catch_target0 // catch_target1
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    var _closure1_slot17 = michal;
    entity = global;
    offset = entity.Object;
    oscard = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(offset)(zuuluu, entity, report);
    backup = 0;
    report = verify[backup];
    entity = undefined;
    report = yankee.bind(entity)(report);
    var _closure1_slot3 = report;
    foxtra = 1;
    report = verify[foxtra];
    offset = yankee.bind(entity)(report);
    report = {};
    oscard = 50;
    report['max'] = oscard;
    oscard = offset.prototype;
    oscard = Object.create(oscard, {constructor: {value: offset}});
    result = oscard;
    output = report;
    report = new result[offset](output, sizing);
    report = report instanceof Object ? report : oscard;
    var _closure1_slot4 = report;
    report = ['http:', 'https:', 'discord:', 'tel:', 'sms:', 'mailto:'];
    var _closure1_slot5 = report;
    offset = 3;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.TEXT;
    romeon = new Array(9);
    romeon[0] = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.UNDERLINE;
    romeon[1] = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.STRONG;
    romeon[2] = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.ITALICS;
    romeon[3] = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.STRIKETHROUGH;
    romeon[4] = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.INLINE_CODE;
    romeon[5] = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.SPOILER;
    romeon[6] = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.LINE_BREAK;
    romeon[7] = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    oscard = oscard.TIMESTAMP;
    romeon[8] = oscard;
    var _closure1_slot6 = romeon;
    oscard = new Array(2);
    output = oscard;
    sizing = romeon;
    kiloes = 0;
    romeon = arraySpread(output, sizing, kiloes);
    backup = verify[offset];
    backup = option.bind(entity)(backup);
    backup = backup.AST_KEY;
    backup = backup.EMOJI;
    oscard[romeon] = backup;
    foxtra = romeon + foxtra;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.CUSTOM_EMOJI;
    oscard[foxtra] = romeon;
    var _closure1_slot7 = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    romeon = oscard.LIST;
    oscard = new Array(4);
    oscard[0] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.HEADING;
    oscard[1] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.BLOCK_QUOTE;
    oscard[2] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.SUBTEXT;
    oscard[3] = romeon;
    var _closure1_slot8 = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    romeon = oscard.TEXT;
    oscard = new Array(1);
    oscard[0] = romeon;
    var _closure1_slot9 = oscard;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AST_KEY;
    romeon = oscard.UNDERLINE;
    oscard = new Array(14);
    oscard[0] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.STRONG;
    oscard[1] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.ITALICS;
    oscard[2] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.STRIKETHROUGH;
    oscard[3] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.INLINE_CODE;
    oscard[4] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.SPOILER;
    oscard[5] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.LINE_BREAK;
    oscard[6] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.TIMESTAMP;
    oscard[7] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.EMOJI;
    oscard[8] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.CUSTOM_EMOJI;
    oscard[9] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.LIST;
    oscard[10] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.HEADING;
    oscard[11] = romeon;
    romeon = verify[offset];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.AST_KEY;
    romeon = romeon.BLOCK_QUOTE;
    oscard[12] = romeon;
    offset = verify[offset];
    offset = option.bind(entity)(offset);
    offset = offset.AST_KEY;
    offset = offset.SUBTEXT;
    oscard[13] = offset;
    var _closure1_slot10 = oscard;
    oscard = {};
    offset = 7;
    offset = verify[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.defaultRules;
    sizing = offset.link;
    output = oscard;
    offset = copyDataProperties(output, sizing);
    yankee = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = argBar;
            michal = oscard.allowLinks;
            entity = null;
            if(!michal) { _fun00018_ip = 70; continue _fun00017 }
 14:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 7;
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
    offset = 'match';
    oscard[offset] = yankee;
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
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
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.bind(michal)(source);
            if(zuuluu) { _fun00020_ip = 631; continue _fun00019 }
 80:
            golfie = _closure1_slot13;
            report = golfie.bind(michal)(source);
            tangon = golfie.bind(michal)(kiloes);
            backup = null;
            option = backup != sizing;
            zuuluu = '';
            if(!option) { _fun00020_ip = 110; continue _fun00019 }
 107:
            zuuluu = sizing;
 110:
            zuuluu = golfie.bind(michal)(zuuluu);
            offset = report.whitespaceSanitized;
            romeon = tangon.fullySanitized;
            option = zuuluu.fullySanitized;
            report = romeon.trim;
            report = report.bind(romeon)();
            golfie = offset.trim;
            golfie = golfie.bind(offset)();
            golfie = golfie.length;
            if(!(yankee !== golfie)) { _fun00020_ip = 625; continue _fun00019 }
 165:
            report = report.length;
            if(!(yankee !== report)) { _fun00020_ip = 625; continue _fun00019 }
 177:
            result = _closure1_slot17;
            output = _closure1_slot1;
            golfie = _closure1_slot2;
            offset = 7;
            report = golfie[offset];
            echoed = output.bind(michal)(report);
            report = echoed.unescapeUrl;
            report = report.bind(echoed)(source);
            report = result.bind(michal)(report);
            result = 8;
            golfie = golfie[result];
            golfie = output.bind(michal)(golfie);
            golfie = golfie.bind(michal)(kiloes);
            golfie = golfie.length;
            golfie = golfie > yankee;
            if(golfie) { _fun00020_ip = 277; continue _fun00019 }
 246:
            output = _closure1_slot1;
            kiloes = _closure1_slot2;
            kiloes = kiloes[result];
            kiloes = output.bind(michal)(kiloes);
            kiloes = kiloes.bind(michal)(sizing);
            kiloes = kiloes.length;
            golfie = kiloes > yankee;
 277:
            if(!(backup != report)) { _fun00020_ip = 619; continue _fun00019 }
 284:
            if(golfie) { _fun00020_ip = 619; continue _fun00019 }
 290:
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
            if(foxtra) { _fun00020_ip = 341; continue _fun00019 }
 335:
            foxtra = _closure1_slot6;
            _fun00020_ip = 345; continue _fun00019;
 341:
            foxtra = _closure1_slot7;
 345:
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
            if(!(backup != romeon)) { _fun00020_ip = 613; continue _fun00019 }
 473:
            if(!(backup != option)) { _fun00020_ip = 613; continue _fun00019 }
 480:
            option = _closure1_slot15;
            romeon = option.bind(michal)(romeon);
            option = romeon.trim;
            option = option.bind(romeon)();
            option = option.length;
            if(!(yankee !== option)) { _fun00020_ip = 607; continue _fun00019 }
 508:
            option = _closure1_slot1;
            oscard = _closure1_slot2;
            yankee = 9;
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
 607:
            zuuluu = entity.bind(michal)();
            return zuuluu;
 613:
            zuuluu = entity.bind(michal)();
            return zuuluu;
 619:
            zuuluu = entity.bind(michal)();
            return zuuluu;
 625:
            zuuluu = entity.bind(michal)();
            return zuuluu;
 631:
            entity = entity.bind(michal)();
            return entity;
        }
    };
    golfie = 'parse';
    oscard[golfie] = offset;
    golfie = 10;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/markup/MarkupLinkRule.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['ALLOWED_PROTOCOLS'] = report;
    zuuluu['isSuspiciousUrl'] = tangon;
    zuuluu['punycodeLink'] = michal;
    return entity;
})();