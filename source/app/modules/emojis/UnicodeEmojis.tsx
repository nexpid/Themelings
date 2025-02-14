// app/modules/emojis/UnicodeEmojis.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun44342: for(var _fun44342_ip = 0; ; ) switch(_fun44342_ip) {
 0:
        options = argBar;
        sequence = argBaz;
        zulu = argFred;
        verify = argPlugh;
        var _closure1_slot0 = options;
        var _closure1_slot1 = sequence;
        var _closure1_slot2 = verify;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun44343: for(var _fun44343_ip = 0; ; ) switch(_fun44343_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun44343_ip = 46; continue _fun44343 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun44343_ip = 55; continue _fun44343 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun44343_ip = 343; continue _fun44343 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun44343_ip = 323; continue _fun44343 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun44343_ip = 283; continue _fun44343 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun44343_ip = 270; continue _fun44343 }
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
                if(!golf) { _fun44343_ip = 163; continue _fun44343 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun44343_ip = 179; continue _fun44343 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun44343_ip = 249; continue _fun44343 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun44343_ip = 249; continue _fun44343 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun44343_ip = 234; continue _fun44343 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun44343_ip = 247; continue _fun44343 }
 234:
                verify = _closure1_slot22;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun44343_ip = 265; continue _fun44343;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun44343_ip = 283; continue _fun44343;
 270:
                golf = _closure1_slot22;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun44343_ip = 323; continue _fun44343 }
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
                if(!tango) { _fun44343_ip = 330; continue _fun44343 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun44344: for(var _fun44344_ip = 0; ; ) switch(_fun44344_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun44344_ip = 56; continue _fun44344 }
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
                        _fun44344_ip = 67; continue _fun44344;
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
        var _closure1_slot21 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun44345: for(var _fun44345_ip = 0; ; ) switch(_fun44345_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun44345_ip = 23; continue _fun44345 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun44345_ip = 33; continue _fun44345 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun44345_ip = 70; continue _fun44345 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun44345_ip = 55; continue _fun44345 }
 70:
                return entity;
            }
        };
        var _closure1_slot22 = entity;
        kilo = function(argFoo) { // Original name: getByName
            _fun44346: for(var _fun44346_ip = 0; ; ) switch(_fun44346_ip) {
 0:
                zulu = argFoo;
                entity = global;
                entity = entity.Object;
                entity = entity.prototype;
                report = entity.hasOwnProperty;
                tango = report.call;
                entity = _closure1_slot8;
                tango = tango.bind(report)(entity, zulu);
                entity = null;
                if(!tango) { _fun44346_ip = 53; continue _fun44346 }
 45:
                mike = _closure1_slot8;
                entity = mike[zulu];
 53:
                return entity;
            }
        };
        var _closure1_slot23 = kilo;
        backup = function(argFoo) { // Original name: contentHasUnicodeOrEmoji
            zulu = _closure1_slot15;
            mike = zulu.test;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        var _closure1_slot24 = backup;
        entity = function(argFoo) { // Original name: emojiNameOrUnicodeSequence
            _fun44348: for(var _fun44348_ip = 0; ; ) switch(_fun44348_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot10;
                report = entity[zulu];
                entity = null;
                if(!(entity == report)) { _fun44348_ip = 36; continue _fun44348 }
 20:
                entity = {};
                mike = 'text';
                entity['type'] = mike;
                entity['text'] = zulu;
                _fun44348_ip = 82; continue _fun44348;
 36:
                mike = {};
                tango = 'emoji';
                mike['type'] = tango;
                mike['surrogate'] = zulu;
                zulu = global;
                zulu = zulu.HermesInternal;
                tango = zulu.concat;
                zulu = ':';
                zulu = tango.bind(zulu)(report, zulu);
                mike['emojiName'] = zulu;
                entity = mike;
 82:
                return entity;
            }
        };
        var _closure1_slot25 = entity;
        foxtrot = function(argFoo, argBar) { // Original name: findInlineEmojisFromSurrogates
            _fun44349: for(var _fun44349_ip = 0; ; ) switch(_fun44349_ip) {
 0:
                report = argFoo;
                mike = true;
                entity = argBar;
                if(!(mike !== entity)) { _fun44349_ip = 53; continue _fun44349 }
 12:
                mike = _closure1_slot24;
                entity = undefined;
                entity = mike.bind(entity)(report);
                if(entity) { _fun44349_ip = 53; continue _fun44349 }
 29:
                mike = {};
                entity = 'text';
                mike['type'] = entity;
                mike['text'] = report;
                entity = new Array(1);
                entity[0] = mike;
                return entity;
 53:
                entity = new Array(0);
                tango = report.match;
                zulu = _closure1_slot16;
                kilo = tango.bind(report)(zulu);
                zulu = null;
                if(!(zulu == kilo)) { _fun44349_ip = 85; continue _fun44349 }
 81:
                kilo = new Array(0);
 85:
                tango = kilo.length;
                backup = 0;
                golf = backup < tango;
                oscar = '';
                report = undefined;
                foxtrot = 'text';
                romeo = 1;
                yankee = oscar;
                offset = 0;
                verify = undefined;
                options = undefined;
                tango = yankee;
                if(!golf) { _fun44349_ip = 370; continue _fun44349 }
 127:
                golf = kilo[offset];
                if(!(zulu != yankee)) { _fun44349_ip = 139; continue _fun44349 }
 135:
                if(!(oscar === yankee)) { _fun44349_ip = 167; continue _fun44349 }
 139:
                source = _closure1_slot19;
                update = yankee;
                echo = golf;
                result = verify;
                output = options;
                sizing = echo;
                if(!(sizing !== source)) { _fun44349_ip = 343; continue _fun44349 }
 165:
                _fun44349_ip = 238; continue _fun44349;
 167:
                source = _closure1_slot18;
                if(!(golf !== source)) { _fun44349_ip = 231; continue _fun44349 }
 175:
                control = _closure1_slot20;
                source = control.test;
                source = source.bind(control)(golf);
                if(source) { _fun44349_ip = 219; continue _fun44349 }
 192:
                control = entity.push;
                source = _closure1_slot25;
                source = source.bind(report)(yankee);
                source = control.bind(entity)(source);
                update = oscar;
                echo = golf;
                _fun44349_ip = 238; continue _fun44349;
 219:
                sizing = yankee + golf;
                result = verify;
                output = options;
                _fun44349_ip = 343; continue _fun44349;
 231:
                echo = yankee + golf;
                update = oscar;
 238:
                golf = _closure1_slot25;
                echo = golf.bind(report)(echo);
                golf = entity.length;
                if(!(golf > backup)) { _fun44349_ip = 293; continue _fun44349 }
 256:
                golf = entity.length;
                golf = golf - romeo;
                golf = entity[golf];
                source = echo.type;
                options = golf;
                if(!(foxtrot === source)) { _fun44349_ip = 293; continue _fun44349 }
 281:
                source = golf.type;
                options = golf;
                if(!(foxtrot !== source)) { _fun44349_ip = 314; continue _fun44349 }
 293:
                source = entity.push;
                source = source.bind(entity)(echo);
                output = options;
                sizing = update;
                result = echo;
                _fun44349_ip = 343; continue _fun44349;
 314:
                control = golf.text;
                source = echo.text;
                source = control + source;
                golf['text'] = source;
                sizing = update;
                result = echo;
                output = golf;
 343:
                offset = offset + 1;
                golf = kilo.length;
                yankee = sizing;
                verify = result;
                options = output;
                tango = yankee;
                if(offset < golf) { _fun44349_ip = 127; continue _fun44349 }
 370:
                zulu = zulu != tango;
                if(!zulu) { _fun44349_ip = 381; continue _fun44349 }
 377:
                zulu = oscar !== tango;
 381:
                if(!zulu) { _fun44349_ip = 403; continue _fun44349 }
 384:
                zulu = entity.push;
                mike = _closure1_slot25;
                mike = mike.bind(report)(tango);
                mike = zulu.bind(entity)(mike);
 403:
                return entity;
            }
        };
        var _closure1_slot26 = foxtrot;
        romeo = function(argFoo) { // Original name: convertNameToSurrogate
            _fun44350: for(var _fun44350_ip = 0; ; ) switch(_fun44350_ip) {
 0:
                zulu = argFoo;
                entity = arguments[1];
                mike = undefined;
                if(!(entity === mike)) { _fun44350_ip = 16; continue _fun44350 }
 12:
                entity = '';
 16:
                mike = global;
                mike = mike.Object;
                mike = mike.prototype;
                oscar = mike.hasOwnProperty;
                report = oscar.call;
                tango = _closure1_slot9;
                tango = report.bind(oscar)(tango, zulu);
                if(!tango) { _fun44350_ip = 64; continue _fun44350 }
 56:
                mike = _closure1_slot9;
                entity = mike[zulu];
 64:
                return entity;
            }
        };
        var _closure1_slot27 = romeo;
        yankee = function(argFoo) { // Original name: convertSurrogateToName
            _fun44351: for(var _fun44351_ip = 0; ; ) switch(_fun44351_ip) {
 0:
                report = argFoo;
                zulu = arguments[1];
                tango = arguments[2];
                entity = undefined;
                if(!(zulu === entity)) { _fun44351_ip = 17; continue _fun44351 }
 15:
                zulu = true;
 17:
                if(!(tango === entity)) { _fun44351_ip = 25; continue _fun44351 }
 21:
                tango = '';
 25:
                mike = global;
                entity = mike.Object;
                entity = entity.prototype;
                options = entity.hasOwnProperty;
                golf = options.call;
                oscar = _closure1_slot10;
                oscar = golf.bind(options)(oscar, report);
                if(!oscar) { _fun44351_ip = 73; continue _fun44351 }
 65:
                entity = _closure1_slot10;
                tango = entity[report];
 73:
                entity = tango;
                if(!zulu) { _fun44351_ip = 100; continue _fun44351 }
 79:
                mike = mike.HermesInternal;
                zulu = mike.concat;
                mike = ':';
                entity = zulu.bind(mike)(tango, mike);
 100:
                return entity;
            }
        };
        var _closure1_slot28 = yankee;
        oscar = global;
        golf = oscar.Object;
        report = golf.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = report.bind(golf)(zulu, entity, tango);
        offset = 0;
        tango = verify[offset];
        entity = undefined;
        tango = sequence.bind(entity)(tango);
        var _closure1_slot3 = tango;
        update = 1;
        tango = verify[update];
        tango = sequence.bind(entity)(tango);
        var _closure1_slot4 = tango;
        tango = 2;
        tango = verify[tango];
        tango = sequence.bind(entity)(tango);
        var _closure1_slot5 = tango;
        tango = null;
        var _closure1_slot6 = tango;
        vacuum = {};
        var _closure1_slot7 = vacuum;
        tango = {};
        var _closure1_slot8 = tango;
        echo = {};
        var _closure1_slot9 = echo;
        result = {};
        var _closure1_slot10 = result;
        tango = new Array(0);
        var _closure1_slot11 = tango;
        control = 4;
        tango = {'1f3fb': 0, '1f3fc': 1, '1f3fd': 2, '1f3fe': 3, '1f3ff': 4};
        var _closure1_slot12 = tango;
        report = ['🏻', '🏼', '🏽', '🏾', '🏿'];
        var _closure1_slot13 = report;
        golf = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
        var _closure1_slot14 = golf;
        tango = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/;
        var _closure1_slot15 = tango;
        tango = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
        var _closure1_slot16 = tango;
        tango = report.length;
        tango = offset < tango;
        output = 'skin-tone-';
        sizing = 0;
        if(!tango) { _fun44342_ip = 390; continue _fun44342 }
 326:
        source = report[sizing];
        config = sizing + update;
        tango = oscar.HermesInternal;
        tango = tango.concat;
        tango = tango.bind(output)(config);
        echo[tango] = source;
        config = sizing + update;
        tango = oscar.HermesInternal;
        tango = tango.concat;
        tango = tango.bind(output)(config);
        result[source] = tango;
        sizing = sizing + 1;
        tango = report.length;
        if(sizing < tango) { _fun44342_ip = 326; continue _fun44342 }
 390:
        tango = function() {
            tango = _closure1_slot4;
            zulu = function(argFoo) { // Original name: Emoji
                _fun44353: for(var _fun44353_ip = 0; ; ) switch(_fun44353_ip) {
 0:
                    mike = argFoo;
                    options = this;
                    report = _closure1_slot3;
                    tango = _closure2_slot0;
                    entity = undefined;
                    tango = report.bind(entity)(options, tango);
                    options['emojiObject'] = mike;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    tango = report.bind(entity)(tango);
                    tango = tango.EmojiTypes;
                    tango = tango.UNICODE;
                    options['type'] = tango;
                    report = mike.names;
                    tango = 0;
                    tango = report[tango];
                    options['uniqueName'] = tango;
                    tango = mike.surrogates;
                    options['surrogates'] = tango;
                    tango = {};
                    options['diversityChildren'] = tango;
                    tango = mike.diversityChildren;
                    oscar = null;
                    if(!(oscar != tango)) { _fun44353_ip = 232; continue _fun44353 }
 120:
                    zulu = _closure1_slot21;
                    mike = mike.diversityChildren;
                    report = zulu.bind(entity)(mike);
                    zulu = report.bind(entity)();
                    mike = zulu.done;
                    tango = '-';
                    if(mike) { _fun44353_ip = 232; continue _fun44353 }
 151:
                    romeo = zulu.value;
                    mike = romeo.diversity;
                    if(!(oscar != mike)) { _fun44353_ip = 217; continue _fun44353 }
 165:
                    verify = romeo.diversity;
                    mike = verify.join;
                    offset = mike.bind(verify)(tango);
                    verify = options.diversityChildren;
                    mike = _closure2_slot0;
                    yankee = mike.prototype;
                    yankee = Object.create(yankee, {constructor: {value: mike}});
                    kilo = yankee;
                    backup = romeo;
                    mike = new kilo[mike](backup, foxtrot);
                    mike = mike instanceof Object ? mike : yankee;
                    verify[offset] = mike;
 217:
                    verify = report.bind(entity)();
                    mike = verify.done;
                    zulu = verify;
                    if(!mike) { _fun44353_ip = 151; continue _fun44353 }
 232:
                    return entity;
                }
            };
            var _closure2_slot0 = zulu;
            entity = {};
            mike = 'names';
            entity['key'] = mike;
            mike = function() { // Original name: get
                entity = this;
                entity = entity.emojiObject;
                entity = entity.names;
                return entity;
            };
            entity['get'] = mike;
            mike = new Array(16);
            mike[0] = entity;
            entity = {};
            oscar = 'allNamesString';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                _fun44355: for(var _fun44355_ip = 0; ; ) switch(_fun44355_ip) {
 0:
                    mike = this;
                    entity = mike.names;
                    zulu = entity.length;
                    entity = 1;
                    if(!(!(zulu > entity))) { _fun44355_ip = 51; continue _fun44355 }
 20:
                    tango = mike.uniqueName;
                    entity = global;
                    entity = entity.HermesInternal;
                    zulu = entity.concat;
                    entity = ':';
                    entity = zulu.bind(entity)(tango, entity);
                    _fun44355_ip = 95; continue _fun44355;
 51:
                    tango = mike.names;
                    zulu = tango.join;
                    mike = ': :';
                    tango = zulu.bind(tango)(mike);
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = ':';
                    entity = zulu.bind(mike)(tango, mike);
 95:
                    return entity;
                }
            };
            entity['get'] = oscar;
            mike[1] = entity;
            entity = {};
            oscar = 'unicodeVersion';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                _fun44356: for(var _fun44356_ip = 0; ; ) switch(_fun44356_ip) {
 0:
                    entity = this;
                    entity = entity.emojiObject;
                    mike = entity.unicodeVersion;
                    entity = null;
                    zulu = entity != mike;
                    entity = 0;
                    if(!zulu) { _fun44356_ip = 28; continue _fun44356 }
 25:
                    entity = mike;
 28:
                    return entity;
                }
            };
            entity['get'] = oscar;
            mike[2] = entity;
            entity = {};
            oscar = 'hasDiversity';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                entity = this;
                entity = entity.emojiObject;
                entity = entity.hasDiversity;
                return entity;
            };
            entity['get'] = oscar;
            mike[3] = entity;
            entity = {};
            oscar = 'hasMultiDiversity';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                entity = this;
                entity = entity.emojiObject;
                entity = entity.hasMultiDiversity;
                return entity;
            };
            entity['get'] = oscar;
            mike[4] = entity;
            entity = {};
            oscar = 'hasDiversityParent';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                entity = this;
                entity = entity.emojiObject;
                entity = entity.hasDiversityParent;
                return entity;
            };
            entity['get'] = oscar;
            mike[5] = entity;
            entity = {};
            oscar = 'hasMultiDiversityParent';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                entity = this;
                entity = entity.emojiObject;
                entity = entity.hasMultiDiversityParent;
                return entity;
            };
            entity['get'] = oscar;
            mike[6] = entity;
            entity = {};
            oscar = 'managed';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                entity = true;
                return entity;
            };
            entity['get'] = oscar;
            mike[7] = entity;
            entity = {};
            oscar = 'animated';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                entity = false;
                return entity;
            };
            entity['get'] = oscar;
            mike[8] = entity;
            entity = {};
            oscar = 'defaultDiversityChild';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                _fun44363: for(var _fun44363_ip = 0; ; ) switch(_fun44363_ip) {
 0:
                    entity = this;
                    mike = entity.hasDiversity;
                    if(!mike) { _fun44363_ip = 25; continue _fun44363 }
 12:
                    tango = _closure1_slot6;
                    mike = null;
                    if(!(mike == tango)) { _fun44363_ip = 29; continue _fun44363 }
 25:
                    tango = null;
                    return tango;
 29:
                    report = _closure1_slot6;
                    zulu = _closure1_slot5;
                    tango = zulu.convert;
                    zulu = tango.toCodePoint;
                    zulu = zulu.bind(tango)(report);
                    tango = mike != zulu;
                    mike = '';
                    if(!tango) { _fun44363_ip = 68; continue _fun44363 }
 65:
                    mike = zulu;
 68:
                    entity = entity.diversityChildren;
                    entity = entity[mike];
                    return entity;
                }
            };
            entity['get'] = oscar;
            mike[9] = entity;
            entity = {};
            oscar = 'url';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                _fun44364: for(var _fun44364_ip = 0; ; ) switch(_fun44364_ip) {
 0:
                    entity = this;
                    mike = entity.defaultDiversityChild;
                    zulu = null;
                    if(!(zulu == mike)) { _fun44364_ip = 58; continue _fun44364 }
 15:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 4;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.getURL;
                    entity = entity.surrogates;
                    entity = zulu.bind(tango)(entity);
                    _fun44364_ip = 99; continue _fun44364;
 58:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 4;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.getURL;
                    mike = mike.surrogates;
                    entity = zulu.bind(tango)(mike);
 99:
                    return entity;
                }
            };
            entity['get'] = oscar;
            mike[10] = entity;
            entity = {};
            oscar = 'name';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                _fun44365: for(var _fun44365_ip = 0; ; ) switch(_fun44365_ip) {
 0:
                    zulu = this;
                    entity = zulu.hasDiversity;
                    if(!entity) { _fun44365_ip = 25; continue _fun44365 }
 12:
                    tango = _closure1_slot6;
                    entity = null;
                    if(!(entity == tango)) { _fun44365_ip = 33; continue _fun44365 }
 25:
                    entity = zulu.uniqueName;
                    _fun44365_ip = 81; continue _fun44365;
 33:
                    oscar = zulu.uniqueName;
                    zulu = _closure1_slot10;
                    mike = _closure1_slot6;
                    report = zulu[mike];
                    mike = global;
                    mike = mike.HermesInternal;
                    tango = mike.concat;
                    zulu = '';
                    mike = '::';
                    entity = tango.bind(zulu)(oscar, mike, report);
 81:
                    return entity;
                }
            };
            entity['get'] = oscar;
            mike[11] = entity;
            entity = {};
            oscar = 'optionallyDiverseSequence';
            entity['key'] = oscar;
            oscar = function() { // Original name: get
                _fun44366: for(var _fun44366_ip = 0; ; ) switch(_fun44366_ip) {
 0:
                    entity = this;
                    mike = entity.defaultDiversityChild;
                    zulu = null;
                    if(!(zulu == mike)) { _fun44366_ip = 22; continue _fun44366 }
 15:
                    entity = entity.surrogates;
                    _fun44366_ip = 27; continue _fun44366;
 22:
                    entity = mike.surrogates;
 27:
                    return entity;
                }
            };
            entity['get'] = oscar;
            mike[12] = entity;
            entity = {};
            oscar = 'forEachDiversity';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                _fun44367: for(var _fun44367_ip = 0; ; ) switch(_fun44367_ip) {
 0:
                    entity = this;
                    zulu = entity.diversityChildren;
                    mike = null;
                    if(!(mike != zulu)) { _fun44367_ip = 61; continue _fun44367 }
 15:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.each;
                    mike = entity.diversityChildren;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
 61:
                    entity = undefined;
                    return entity;
                }
            };
            entity['value'] = oscar;
            mike[13] = entity;
            entity = {};
            oscar = 'forEachName';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.each;
                mike = this;
                zulu = mike.names;
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['value'] = oscar;
            mike[14] = entity;
            entity = {};
            oscar = 'setSpriteSheetIndex';
            entity['key'] = oscar;
            report = function(argFoo) { // Original name: value
                mike = this;
                entity = argFoo;
                mike['index'] = entity;
                entity = true;
                mike['useSpriteSheet'] = entity;
                entity = undefined;
                return entity;
            };
            entity['value'] = report;
            mike[15] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        tango = tango.bind(entity)();
        var _closure1_slot17 = tango;
        output = 6;
        sizing = verify[output];
        update = options.bind(entity)(sizing);
        for(sizing in update)
 423:
        {
 432:
            record = sizing;
            config = verify[output];
            config = options.bind(entity)(config);
            papa = config[record];
            context = papa.map;
            config = function(argFoo) {
                _fun44370: for(var _fun44370_ip = 0; ; ) switch(_fun44370_ip) {
 0:
                    result = argFoo;
                    entity = _closure1_slot17;
                    zulu = entity.prototype;
                    zulu = Object.create(zulu, {constructor: {value: entity}});
                    status = zulu;
                    target = result;
                    entity = new status[entity](target, papa);
                    entity = entity instanceof Object ? entity : zulu;
                    oscar = entity.surrogates;
                    report = entity.uniqueName;
                    zulu = _closure1_slot10;
                    zulu[oscar] = report;
                    tango = oscar.indexOf;
                    zulu = '\u200d';
                    zulu = tango.bind(oscar)(zulu);
                    output = 0;
                    if(!(zulu < output)) { _fun44370_ip = 107; continue _fun44370 }
 74:
                    golf = oscar.replace;
                    tango = '️';
                    zulu = '';
                    tango = golf.bind(oscar)(tango, zulu);
                    if(!(tango !== oscar)) { _fun44370_ip = 107; continue _fun44370 }
 99:
                    zulu = _closure1_slot10;
                    zulu[tango] = report;
 107:
                    tango = _closure1_slot21;
                    zulu = entity.names;
                    sizing = undefined;
                    report = tango.bind(sizing)(zulu);
                    tango = report.bind(sizing)();
                    zulu = tango.done;
                    if(zulu) { _fun44370_ip = 171; continue _fun44370 }
 135:
                    golf = tango.value;
                    zulu = _closure1_slot8;
                    zulu[golf] = entity;
                    zulu = _closure1_slot9;
                    zulu[golf] = oscar;
                    golf = report.bind(sizing)();
                    zulu = golf.done;
                    tango = golf;
                    if(!zulu) { _fun44370_ip = 135; continue _fun44370 }
 171:
                    kilo = entity.diversityChildren;
                    foxtrot = kilo;
                    verify = 1;
                    options = global;
                    golf = '';
                    oscar = '::skin-tone-';
                    report = undefined;
                    tango = undefined;
                    zulu = undefined;
                    for(offset in foxtrot)
 212:
                    {
 224:
                        echo = offset;
                        echo = kilo[echo];
                        source = echo.surrogates;
                        control = _closure1_slot21;
                        update = echo.names;
                        vacuum = control.bind(sizing)(update);
                        control = vacuum.bind(sizing)();
                        update = control.done;
                        if(update) { _fun44370_ip = 298; continue _fun44370 }
 262:
                        sequence = control.value;
                        update = _closure1_slot8;
                        update[sequence] = echo;
                        update = _closure1_slot9;
                        update[sequence] = source;
                        sequence = vacuum.bind(sizing)();
                        update = sequence.done;
                        control = sequence;
                        if(!update) { _fun44370_ip = 262; continue _fun44370 }
 298:
                        update = result.hasMultiDiversity;
                        if(update) { _fun44370_ip = 438; continue _fun44370 }
 310:
                        update = echo.emojiObject;
                        update = update.diversity;
                        control = update[output];
                        update = _closure1_slot12;
                        sequence = update[control];
                        control = _closure1_slot21;
                        update = result.names;
                        vacuum = control.bind(sizing)(update);
                        config = vacuum.bind(sizing)();
                        update = config.done;
                        control = config;
                        report = control;
                        tango = sequence;
                        zulu = vacuum;
                        if(update) { _fun44370_ip = 438; continue _fun44370 }
 371:
                        record = control.value;
                        config = sequence + verify;
                        update = options.HermesInternal;
                        update = update.concat;
                        config = update.bind(golf)(record, oscar, config);
                        update = _closure1_slot9;
                        update[config] = source;
                        update = _closure1_slot8;
                        update[config] = echo;
                        config = vacuum.bind(sizing)();
                        update = config.done;
                        control = config;
                        report = control;
                        tango = sequence;
                        zulu = vacuum;
                        if(!update) { _fun44370_ip = 371; continue _fun44370 }
 438:
                        update = _closure1_slot10;
                        echo = echo.uniqueName;
                        update[source] = echo;
                        _fun44370_ip = 212; continue _fun44370;
                    }
 457:
                    zulu = _closure1_slot11;
                    mike = zulu.push;
                    mike = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            papa = context.bind(papa)(config);
            config = verify[control];
            context = sequence.bind(entity)(config);
            config = context.filterUnsupportedEmojis;
            config = config.bind(context)(papa);
            vacuum[record] = config;
            _fun44342_ip = 423; continue _fun44342;
        }
 489:
        result = oscar.String;
        output = result.fromCodePoint;
        sizing = 917631;
        sizing = output.bind(result)(sizing);
        var _closure1_slot18 = sizing;
        output = oscar.String;
        sizing = output.fromCodePoint;
        oscar = 127988;
        oscar = sizing.bind(output)(oscar);
        var _closure1_slot19 = oscar;
        oscar = /^(?:\uDB40[\uDC61-\uDC7A])$/;
        var _closure1_slot20 = oscar;
        oscar = {};
        sizing = function() { // Original name: getDefaultDiversitySurrogate
            entity = _closure1_slot6;
            return entity;
        };
        oscar['getDefaultDiversitySurrogate'] = sizing;
        sizing = function(argFoo) { // Original name: setDefaultDiversitySurrogate
            _fun44372: for(var _fun44372_ip = 0; ; ) switch(_fun44372_ip) {
 0:
                entity = argFoo;
                tango = null;
                zulu = tango != entity;
                mike = null;
                if(!zulu) { _fun44372_ip = 27; continue _fun44372 }
 14:
                zulu = '';
                mike = null;
                if(!(zulu !== entity)) { _fun44372_ip = 27; continue _fun44372 }
 24:
                mike = entity;
 27:
                _closure1_slot6 = mike;
                entity = undefined;
                return entity;
            }
        };
        oscar['setDefaultDiversitySurrogate'] = sizing;
        sizing = function() { // Original name: getCategories
            entity = global;
            zulu = entity.Object;
            mike = zulu.keys;
            entity = _closure1_slot7;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['getCategories'] = sizing;
        oscar['getByName'] = kilo;
        kilo = function(argFoo) { // Original name: getByCategory
            mike = _closure1_slot7;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        oscar['getByCategory'] = kilo;
        oscar['contentHasUnicodeOrEmoji'] = backup;
        backup = function(argFoo) { // Original name: translateInlineEmojiToSurrogates
            tango = argFoo;
            zulu = tango.replace;
            mike = _closure1_slot14;
            entity = function(argFoo, argBar) {
                tango = _closure1_slot27;
                zulu = undefined;
                mike = argBar;
                entity = argFoo;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar['translateInlineEmojiToSurrogates'] = backup;
        backup = function(argFoo) { // Original name: maybeTranslateSurrogatesToInlineEmoji
            _fun44377: for(var _fun44377_ip = 0; ; ) switch(_fun44377_ip) {
 0:
                zulu = argFoo;
                mike = _closure1_slot24;
                tango = undefined;
                mike = mike.bind(tango)(zulu);
                if(mike) { _fun44377_ip = 24; continue _fun44377 }
 20:
                mike = null;
                return mike;
 24:
                mike = _closure1_slot26;
                entity = true;
                tango = mike.bind(tango)(zulu, entity);
                mike = tango.map;
                entity = function(argFoo) {
                    _fun44378: for(var _fun44378_ip = 0; ; ) switch(_fun44378_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.type;
                        entity = 'text';
                        if(!(entity !== zulu)) { _fun44378_ip = 24; continue _fun44378 }
 16:
                        entity = mike.emojiName;
                        _fun44378_ip = 29; continue _fun44378;
 24:
                        entity = mike.text;
 29:
                        return entity;
                    }
                };
                tango = mike.bind(tango)(entity);
                mike = tango.join;
                entity = '';
                mike = mike.bind(tango)(entity);
                entity = null;
                if(!(mike !== zulu)) { _fun44377_ip = 76; continue _fun44377 }
 73:
                entity = mike;
 76:
                return entity;
            }
        };
        oscar['maybeTranslateSurrogatesToInlineEmoji'] = backup;
        oscar['findInlineEmojisFromSurrogates'] = foxtrot;
        foxtrot = function(argFoo) { // Original name: translateSurrogatesToInlineEmoji
            zulu = _closure1_slot26;
            mike = undefined;
            entity = argFoo;
            zulu = zulu.bind(mike)(entity);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun44380: for(var _fun44380_ip = 0; ; ) switch(_fun44380_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.type;
                    entity = 'text';
                    if(!(entity !== zulu)) { _fun44380_ip = 24; continue _fun44380 }
 16:
                    entity = mike.emojiName;
                    _fun44380_ip = 29; continue _fun44380;
 24:
                    entity = mike.text;
 29:
                    return entity;
                }
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.join;
            entity = '';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['translateSurrogatesToInlineEmoji'] = foxtrot;
        oscar['convertNameToSurrogate'] = romeo;
        oscar['convertSurrogateToName'] = yankee;
        yankee = function(argFoo) { // Original name: convertShortcutToName
            _fun44381: for(var _fun44381_ip = 0; ; ) switch(_fun44381_ip) {
 0:
                report = argFoo;
                zulu = arguments[1];
                tango = arguments[2];
                golf = undefined;
                if(!(zulu === golf)) { _fun44381_ip = 17; continue _fun44381 }
 15:
                zulu = true;
 17:
                if(!(tango === golf)) { _fun44381_ip = 25; continue _fun44381 }
 21:
                tango = '';
 25:
                mike = global;
                entity = mike.Object;
                entity = entity.prototype;
                offset = entity.hasOwnProperty;
                verify = offset.call;
                yankee = _closure1_slot0;
                oscar = _closure1_slot2;
                options = 7;
                oscar = oscar[options];
                oscar = yankee.bind(golf)(oscar);
                oscar = verify.bind(offset)(oscar, report);
                if(!oscar) { _fun44381_ip = 102; continue _fun44381 }
 81:
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[options];
                entity = oscar.bind(golf)(entity);
                tango = entity[report];
 102:
                entity = tango;
                if(!zulu) { _fun44381_ip = 129; continue _fun44381 }
 108:
                mike = mike.HermesInternal;
                zulu = mike.concat;
                mike = ':';
                entity = zulu.bind(mike)(tango, mike);
 129:
                return entity;
            }
        };
        oscar['convertShortcutToName'] = yankee;
        yankee = function(argFoo) { // Original name: convertSurrogateToBase
            zulu = _closure1_slot23;
            report = _closure1_slot28;
            oscar = _closure1_slot13;
            tango = oscar.reduce;
            mike = function(argFoo, argBar) {
                tango = argFoo;
                zulu = tango.replace;
                mike = argBar;
                entity = '';
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = argFoo;
            tango = tango.bind(oscar)(mike, entity);
            mike = undefined;
            entity = false;
            entity = report.bind(mike)(tango, entity);
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        oscar['convertSurrogateToBase'] = yankee;
        yankee = function(argFoo) { // Original name: forEach
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.each;
            mike = _closure1_slot11;
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar['forEach'] = yankee;
        yankee = function() { // Original name: all
            entity = _closure1_slot11;
            return entity;
        };
        oscar['all'] = yankee;
        oscar['numDiversitySprites'] = offset;
        oscar['numNonDiversitySprites'] = offset;
        offset = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
        oscar['EMOJI_NAME_RE'] = offset;
        oscar['EMOJI_NAME_AND_DIVERSITY_RE'] = golf;
        golf = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\\/3|<\\3|:\-\\|:\-\\/|=\-\\|=\-\\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/;
        oscar['EMOJI_SHORTCUT_RE'] = golf;
        golf = function(argFoo) { // Original name: hasSurrogates
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.toArray;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.some;
            entity = function(argFoo) {
                mike = _closure1_slot10;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                entity = entity != mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['hasSurrogates'] = golf;
        golf = 8;
        golf = verify[golf];
        verify = options.bind(entity)(golf);
        options = verify.fileFinishedImporting;
        golf = 'modules/emojis/UnicodeEmojis.tsx';
        golf = options.bind(verify)(golf);
        zulu['default'] = oscar;
        zulu['DIVERSITY_SURROGATES'] = report;
        zulu['Emoji'] = tango;
        mike = function(argFoo) {
            _fun44388: for(var _fun44388_ip = 0; ; ) switch(_fun44388_ip) {
 0:
                tango = argFoo;
                entity = tango.id;
                zulu = null;
                mike = zulu == entity;
                entity = null;
                if(!mike) { _fun44388_ip = 72; continue _fun44388 }
 19:
                mike = tango.name;
                mike = zulu != mike;
                entity = null;
                if(!mike) { _fun44388_ip = 72; continue _fun44388 }
 33:
                mike = tango.name;
                report = mike.length;
                mike = 0;
                mike = report > mike;
                entity = null;
                if(!mike) { _fun44388_ip = 72; continue _fun44388 }
 54:
                mike = {};
                tango = tango.name;
                mike['name'] = tango;
                mike['id'] = zulu;
                entity = mike;
 72:
                return entity;
            }
        };
        zulu['asUnicodeEmoji'] = mike;
        return entity;
    }
})();