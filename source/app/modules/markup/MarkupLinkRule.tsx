// app/modules/markup/MarkupLinkRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    offset = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = options;
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
            verify = _closure1_slot12;
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
            golf = _closure1_slot12;
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
    var _closure1_slot11 = entity;
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
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: sanitizeWithCache
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot4;
            entity = mike.get;
            entity = entity.bind(mike)(report);
            mike = null;
            if(!(mike == entity)) { _fun00008_ip = 108; continue _fun00007 }
 26:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 2;
            mike = verify[tango];
            oscar = undefined;
            golf = options.bind(oscar)(mike);
            mike = golf.sanitizeWhitespace;
            golf = mike.bind(golf)(report);
            mike = {};
            mike['whitespaceSanitized'] = golf;
            tango = verify[tango];
            oscar = options.bind(oscar)(tango);
            tango = oscar.sanitizeUnicodeConfusables;
            tango = tango.bind(oscar)(golf);
            mike['fullySanitized'] = tango;
            tango = _closure1_slot4;
            zulu = tango.set;
            zulu = zulu.bind(tango)(report, mike);
            return mike;
 108:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: validateContentTypes
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            romeo = argBar;
            yankee = arguments[2];
            offset = undefined;
            if(!(yankee === offset)) { _fun00010_ip = 19; continue _fun00009 }
 15:
            yankee = new Array(0);
 19:
            verify = global;
            mike = verify.Array;
            entity = mike.isArray;
            mike = entity.bind(mike)(zulu);
            entity = zulu;
            if(mike) { _fun00010_ip = 54; continue _fun00009 }
 43:
            mike = new Array(1);
            mike[0] = zulu;
            entity = mike;
 54:
            mike = _closure1_slot11;
            golf = mike.bind(offset)(entity);
            tango = golf.bind(offset)();
            zulu = tango.done;
            mike = null;
            report = 3;
            if(zulu) { _fun00010_ip = 272; continue _fun00009 }
 86:
            zulu = tango.value;
            if(!(offset !== zulu)) { _fun00010_ip = 270; continue _fun00009 }
 98:
            backup = romeo.includes;
            foxtrot = zulu.type;
            foxtrot = backup.bind(romeo)(foxtrot);
            if(!foxtrot) { _fun00010_ip = 270; continue _fun00009 }
 119:
            backup = zulu.type;
            kilo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            foxtrot = foxtrot[report];
            foxtrot = kilo.bind(offset)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.INLINE_CODE;
            if(!(backup === foxtrot)) { _fun00010_ip = 203; continue _fun00009 }
 157:
            kilo = new Array(0);
            result = kilo;
            output = romeo;
            sizing = 0;
            sizing = arraySpread(result, output, sizing);
            result = kilo;
            output = yankee;
            foxtrot = arraySpread(result, output, sizing);
            backup = _closure1_slot14;
            foxtrot = zulu.validationChildContent;
            foxtrot = backup.bind(offset)(foxtrot, kilo);
            if(!(mike != foxtrot)) { _fun00010_ip = 268; continue _fun00009 }
 203:
            kilo = verify.Array;
            backup = kilo.isArray;
            foxtrot = zulu.content;
            foxtrot = backup.bind(kilo)(foxtrot);
            if(!foxtrot) { _fun00010_ip = 246; continue _fun00009 }
 227:
            foxtrot = _closure1_slot14;
            zulu = zulu.content;
            zulu = foxtrot.bind(offset)(zulu, romeo);
            if(!(mike != zulu)) { _fun00010_ip = 266; continue _fun00009 }
 246:
            foxtrot = golf.bind(offset)();
            zulu = foxtrot.done;
            tango = foxtrot;
            if(zulu) { _fun00010_ip = 272; continue _fun00009 }
 261:
            _fun00010_ip = 86; continue _fun00009;
 266:
            return mike;
 268:
            return mike;
 270:
            return mike;
 272:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getRawText
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = _closure1_slot11;
            foxtrot = undefined;
            entity = argFoo;
            romeo = mike.bind(foxtrot)(entity);
            zulu = romeo.bind(foxtrot)();
            mike = zulu.done;
            entity = '';
            yankee = '\n';
            offset = '<timestamp>';
            verify = global;
            options = '<';
            golf = 'Content>';
            oscar = 4;
            report = 3;
            tango = zulu;
            zulu = entity;
            entity = zulu;
            if(mike) { _fun00012_ip = 768; continue _fun00011 }
 73:
            mike = tango.value;
            sizing = mike.type;
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.TEXT;
            if(!(kilo !== sizing)) { _fun00012_ip = 735; continue _fun00011 }
 119:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.INLINE_CODE;
            if(!(kilo !== sizing)) { _fun00012_ip = 735; continue _fun00011 }
 155:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.CUSTOM_EMOJI;
            if(!(kilo !== sizing)) { _fun00012_ip = 724; continue _fun00011 }
 191:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.EMOJI;
            if(!(kilo !== sizing)) { _fun00012_ip = 712; continue _fun00011 }
 227:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.LINE_BREAK;
            if(!(kilo !== sizing)) { _fun00012_ip = 706; continue _fun00011 }
 263:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.STRONG;
            if(!(kilo !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 299:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.ITALICS;
            if(!(kilo !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 335:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.UNDERLINE;
            if(!(kilo !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 371:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.STRIKETHROUGH;
            if(!(kilo !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 407:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.SPOILER;
            if(!(kilo !== sizing)) { _fun00012_ip = 686; continue _fun00011 }
 443:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.TIMESTAMP;
            if(!(kilo !== sizing)) { _fun00012_ip = 680; continue _fun00011 }
 479:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.BLOCK_QUOTE;
            if(!(kilo !== sizing)) { _fun00012_ip = 652; continue _fun00011 }
 515:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.LIST;
            if(!(kilo !== sizing)) { _fun00012_ip = 652; continue _fun00011 }
 548:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.HEADING;
            if(!(kilo !== sizing)) { _fun00012_ip = 652; continue _fun00011 }
 581:
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[report];
            kilo = output.bind(foxtrot)(kilo);
            kilo = kilo.AST_KEY;
            kilo = kilo.SUBTEXT;
            if(!(kilo !== sizing)) { _fun00012_ip = 652; continue _fun00011 }
 614:
            sizing = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[oscar];
            output = sizing.bind(foxtrot)(kilo);
            sizing = output.assertNever;
            kilo = mike.type;
            kilo = sizing.bind(output)(kilo);
            kilo = zulu;
            _fun00012_ip = 744; continue _fun00011;
 652:
            output = mike.type;
            sizing = verify.HermesInternal;
            sizing = sizing.concat;
            sizing = sizing.bind(options)(output, golf);
            kilo = zulu + sizing;
            _fun00012_ip = 744; continue _fun00011;
 680:
            kilo = zulu + offset;
            _fun00012_ip = 744; continue _fun00011;
 686:
            output = _closure1_slot15;
            sizing = mike.content;
            sizing = output.bind(foxtrot)(sizing);
            kilo = zulu + sizing;
            _fun00012_ip = 744; continue _fun00011;
 706:
            kilo = zulu + yankee;
            _fun00012_ip = 744; continue _fun00011;
 712:
            sizing = mike.surrogate;
            kilo = zulu + sizing;
            _fun00012_ip = 744; continue _fun00011;
 724:
            sizing = mike.name;
            kilo = zulu + sizing;
            _fun00012_ip = 744; continue _fun00011;
 735:
            mike = mike.content;
            kilo = zulu + mike;
 744:
            sizing = romeo.bind(foxtrot)();
            mike = sizing.done;
            zulu = kilo;
            tango = sizing;
            entity = zulu;
            if(!mike) { _fun00012_ip = 73; continue _fun00011 }
 768:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    mike = function(argFoo) { // Original name: punycodeLink
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            report = undefined;
            mike = undefined;
            zulu = undefined;
            oscar = undefined;
 11: // try_start_0
            tango = global;
            options = tango.URL;
            romeo = entity;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            foxtrot = golf;
            entity = new foxtrot[options](romeo, yankee);
            entity = entity instanceof Object ? entity : golf;
            zulu = entity;
            entity = entity.protocol;
            mike = entity;
            golf = null;
            options = golf != entity;
            entity = '';
            yankee = entity;
            if(!options) { _fun00014_ip = 73; continue _fun00013 }
 70:
            yankee = mike;
 73:
            oscar = yankee;
            offset = _closure1_slot5;
            verify = offset.includes;
            options = yankee.toLowerCase;
            options = options.bind(yankee)();
            options = verify.bind(offset)(options);
            if(options) { _fun00014_ip = 147; continue _fun00013 }
 106:
            offset = tango.Error;
            verify = oscar;
            options = 'Provided protocol is not allowed: ';
            romeo = options + verify;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            foxtrot = verify;
            options = new foxtrot[offset](romeo, yankee);
            options = options instanceof Object ? options : verify;
            throw options;
 147:
            verify = oscar;
            options = 'http:';
            if(!(options !== verify)) { _fun00014_ip = 169; continue _fun00013 }
 158:
            options = oscar;
            oscar = 'https:';
            if(!(oscar === options)) { _fun00014_ip = 236; continue _fun00013 }
 169:
            oscar = zulu;
            oscar = oscar.hostname;
            if(!(golf != oscar)) { _fun00014_ip = 202; continue _fun00013 }
 182:
            oscar = zulu;
            oscar = oscar.hostname;
            golf = oscar.length;
            oscar = 0;
            if(!(oscar === golf)) { _fun00014_ip = 236; continue _fun00013 }
 202:
            golf = tango.Error;
            tango = golf.prototype;
            oscar = Object.create(tango, {constructor: {value: golf}});
            romeo = 'no hostname';
            foxtrot = oscar;
            tango = new foxtrot[golf](romeo, yankee);
            tango = tango instanceof Object ? tango : oscar;
            throw tango;
 236:
            tango = zulu;
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 5;
            zulu = oscar[zulu];
            options = golf.bind(report)(zulu);
            golf = options.toASCII;
            verify = tango.hostname;
            zulu = verify.toLowerCase;
            zulu = zulu.bind(verify)();
            zulu = golf.bind(options)(zulu);
            tango['hostname'] = zulu;
            zulu = _closure1_slot0;
            mike = 2;
            golf = oscar[mike];
            options = zulu.bind(report)(golf);
            golf = options.safelyMakeUrlHumanReadable;
            golf = golf.bind(options)(tango);
            tango['username'] = entity;
            tango['password'] = entity;
            entity = {};
            entity['target'] = golf;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.safelyMakeUrlHumanReadable;
            mike = mike.bind(zulu)(tango);
            entity['displayTarget'] = mike;
 363: // try_end0
            return entity;
 365: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    var _closure1_slot16 = mike;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, tango);
    foxtrot = 0;
    tango = options[foxtrot];
    entity = undefined;
    tango = offset.bind(entity)(tango);
    var _closure1_slot3 = tango;
    romeo = 1;
    tango = options[romeo];
    verify = offset.bind(entity)(tango);
    tango = {};
    report = 50;
    tango['max'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    output = report;
    sizing = tango;
    tango = new output[verify](sizing, kilo);
    tango = tango instanceof Object ? tango : report;
    var _closure1_slot4 = tango;
    tango = ['http:', 'https:', 'discord:'];
    var _closure1_slot5 = tango;
    verify = 3;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.TEXT;
    yankee = new Array(9);
    yankee[0] = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.UNDERLINE;
    yankee[1] = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.STRONG;
    yankee[2] = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.ITALICS;
    yankee[3] = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.STRIKETHROUGH;
    yankee[4] = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.INLINE_CODE;
    yankee[5] = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.SPOILER;
    yankee[6] = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.LINE_BREAK;
    yankee[7] = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    report = report.TIMESTAMP;
    yankee[8] = report;
    var _closure1_slot6 = yankee;
    report = new Array(2);
    sizing = report;
    kilo = yankee;
    backup = 0;
    yankee = arraySpread(sizing, kilo, backup);
    foxtrot = options[verify];
    foxtrot = golf.bind(entity)(foxtrot);
    foxtrot = foxtrot.AST_KEY;
    foxtrot = foxtrot.EMOJI;
    report[yankee] = foxtrot;
    romeo = yankee + romeo;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.CUSTOM_EMOJI;
    report[romeo] = yankee;
    var _closure1_slot7 = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    yankee = report.LIST;
    report = new Array(4);
    report[0] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.HEADING;
    report[1] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.BLOCK_QUOTE;
    report[2] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.SUBTEXT;
    report[3] = yankee;
    var _closure1_slot8 = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    yankee = report.TEXT;
    report = new Array(1);
    report[0] = yankee;
    var _closure1_slot9 = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.AST_KEY;
    yankee = report.UNDERLINE;
    report = new Array(14);
    report[0] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.STRONG;
    report[1] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.ITALICS;
    report[2] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.STRIKETHROUGH;
    report[3] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.INLINE_CODE;
    report[4] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.SPOILER;
    report[5] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.LINE_BREAK;
    report[6] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.TIMESTAMP;
    report[7] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.EMOJI;
    report[8] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.CUSTOM_EMOJI;
    report[9] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.LIST;
    report[10] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.HEADING;
    report[11] = yankee;
    yankee = options[verify];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.AST_KEY;
    yankee = yankee.BLOCK_QUOTE;
    report[12] = yankee;
    verify = options[verify];
    verify = golf.bind(entity)(verify);
    verify = verify.AST_KEY;
    verify = verify.SUBTEXT;
    report[13] = verify;
    var _closure1_slot10 = report;
    report = {};
    verify = 6;
    verify = options[verify];
    verify = offset.bind(entity)(verify);
    verify = verify.defaultRules;
    kilo = verify.link;
    sizing = report;
    verify = copyDataProperties(sizing, kilo);
    offset = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscar = argBar;
            mike = oscar.allowLinks;
            entity = null;
            if(!mike) { _fun00016_ip = 70; continue _fun00015 }
 14:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.defaultRules;
            report = mike.link;
            tango = report.match;
            zulu = argFoo;
            mike = argBaz;
            entity = tango.bind(report)(zulu, oscar, mike);
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
            foxtrot = argBaz;
            report = _closure1_slot3;
            mike = undefined;
            tango = argFoo;
            zulu = 4;
            zulu = report.bind(mike)(tango, zulu);
            yankee = 0;
            tango = zulu[yankee];
            var _closure2_slot0 = tango;
            tango = 1;
            kilo = zulu[tango];
            tango = 2;
            source = zulu[tango];
            update = 3;
            sizing = zulu[update];
            entity = function() { // Original name: renderIndividualParts
                entity = {};
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.AST_KEY;
                mike = mike.TEXT;
                entity['type'] = mike;
                mike = _closure2_slot0;
                entity['content'] = mike;
                return entity;
            };
            golf = _closure1_slot13;
            report = golf.bind(mike)(source);
            tango = golf.bind(mike)(kilo);
            backup = null;
            options = backup != sizing;
            zulu = '';
            if(!options) { _fun00018_ip = 95; continue _fun00017 }
 92:
            zulu = sizing;
 95:
            zulu = golf.bind(mike)(zulu);
            offset = report.whitespaceSanitized;
            romeo = tango.fullySanitized;
            options = zulu.fullySanitized;
            report = romeo.trim;
            report = report.bind(romeo)();
            golf = offset.trim;
            golf = golf.bind(offset)();
            golf = golf.length;
            if(!(yankee !== golf)) { _fun00018_ip = 610; continue _fun00017 }
 150:
            report = report.length;
            if(!(yankee !== report)) { _fun00018_ip = 610; continue _fun00017 }
 162:
            result = _closure1_slot16;
            output = _closure1_slot1;
            golf = _closure1_slot2;
            offset = 6;
            report = golf[offset];
            echo = output.bind(mike)(report);
            report = echo.unescapeUrl;
            report = report.bind(echo)(source);
            report = result.bind(mike)(report);
            result = 7;
            golf = golf[result];
            golf = output.bind(mike)(golf);
            golf = golf.bind(mike)(kilo);
            golf = golf.length;
            golf = golf > yankee;
            if(golf) { _fun00018_ip = 262; continue _fun00017 }
 231:
            output = _closure1_slot1;
            kilo = _closure1_slot2;
            kilo = kilo[result];
            kilo = output.bind(mike)(kilo);
            kilo = kilo.bind(mike)(sizing);
            kilo = kilo.length;
            golf = kilo > yankee;
 262:
            if(!(backup != report)) { _fun00018_ip = 604; continue _fun00017 }
 269:
            if(golf) { _fun00018_ip = 604; continue _fun00017 }
 275:
            golf = {};
            sequence = golf;
            vacuum = foxtrot;
            kilo = copyDataProperties(sequence, vacuum);
            sizing = false;
            kilo = 'allowEscape';
            golf[kilo] = sizing;
            sizing = true;
            kilo = 'parseInlineCodeChildContent';
            golf[kilo] = sizing;
            foxtrot = foxtrot.allowEmojiLinks;
            if(foxtrot) { _fun00018_ip = 326; continue _fun00017 }
 320:
            foxtrot = _closure1_slot6;
            _fun00018_ip = 330; continue _fun00017;
 326:
            foxtrot = _closure1_slot7;
 330:
            result = new Array(0);
            sequence = result;
            vacuum = foxtrot;
            control = 0;
            control = arraySpread(sequence, vacuum, control);
            vacuum = _closure1_slot8;
            sequence = result;
            kilo = arraySpread(sequence, vacuum, control);
            vacuum = _closure1_slot9;
            sizing = new Array(0);
            sequence = sizing;
            control = 0;
            control = arraySpread(sequence, vacuum, control);
            vacuum = _closure1_slot10;
            sequence = sizing;
            kilo = arraySpread(sequence, vacuum, control);
            kilo = _closure1_slot14;
            output = verify.bind(mike)(romeo, golf);
            echo = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[update];
            romeo = echo.bind(mike)(romeo);
            romeo = romeo.AST_KEY;
            echo = romeo.EMOJI;
            romeo = new Array(1);
            romeo[0] = echo;
            romeo = kilo.bind(mike)(output, result, romeo);
            options = verify.bind(mike)(options, golf);
            options = kilo.bind(mike)(options, sizing);
            if(!(backup != romeo)) { _fun00018_ip = 598; continue _fun00017 }
 458:
            if(!(backup != options)) { _fun00018_ip = 598; continue _fun00017 }
 465:
            options = _closure1_slot15;
            romeo = options.bind(mike)(romeo);
            options = romeo.trim;
            options = options.bind(romeo)();
            options = options.length;
            if(!(yankee !== options)) { _fun00018_ip = 592; continue _fun00017 }
 493:
            options = _closure1_slot1;
            oscar = _closure1_slot2;
            yankee = 8;
            yankee = oscar[yankee];
            romeo = options.bind(mike)(yankee);
            yankee = romeo.pick;
            verify = verify.rules;
            verify = yankee.bind(romeo)(verify, foxtrot);
            oscar = oscar[offset];
            options = options.bind(mike)(oscar);
            oscar = options.parserFor;
            oscar = oscar.bind(options)(verify);
            tango = tango.whitespaceSanitized;
            oscar = oscar.bind(mike)(tango, golf);
            tango = zulu.whitespaceSanitized;
            zulu = {};
            zulu['content'] = oscar;
            report = report.target;
            zulu['target'] = report;
            zulu['title'] = tango;
            return zulu;
 592:
            zulu = entity.bind(mike)();
            return zulu;
 598:
            zulu = entity.bind(mike)();
            return zulu;
 604:
            zulu = entity.bind(mike)();
            return zulu;
 610:
            entity = entity.bind(mike)();
            return entity;
        }
    };
    oscar = 'parse';
    report[oscar] = verify;
    oscar = 9;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/markup/MarkupLinkRule.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['ALLOWED_PROTOCOLS'] = tango;
    zulu['punycodeLink'] = mike;
    return entity;
})();