// app/modules/forums/native/composer/ForumComposer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun87340: for(var _fun87340_ip = 0; ; ) switch(_fun87340_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun87340_ip = 46; continue _fun87340 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun87340_ip = 55; continue _fun87340 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun87340_ip = 345; continue _fun87340 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun87340_ip = 323; continue _fun87340 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun87340_ip = 283; continue _fun87340 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun87340_ip = 270; continue _fun87340 }
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
            if(!golf) { _fun87340_ip = 163; continue _fun87340 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun87340_ip = 179; continue _fun87340 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun87340_ip = 249; continue _fun87340 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun87340_ip = 249; continue _fun87340 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun87340_ip = 234; continue _fun87340 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun87340_ip = 247; continue _fun87340 }
 234:
            verify = _closure1_slot38;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun87340_ip = 265; continue _fun87340;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun87340_ip = 283; continue _fun87340;
 270:
            golf = _closure1_slot38;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun87340_ip = 323; continue _fun87340 }
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
            if(!tango) { _fun87340_ip = 330; continue _fun87340 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun87341: for(var _fun87341_ip = 0; ; ) switch(_fun87341_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun87341_ip = 56; continue _fun87341 }
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
                    _fun87341_ip = 67; continue _fun87341;
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
    var _closure1_slot37 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun87342: for(var _fun87342_ip = 0; ; ) switch(_fun87342_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun87342_ip = 23; continue _fun87342 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun87342_ip = 33; continue _fun87342 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun87342_ip = 70; continue _fun87342 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun87342_ip = 55; continue _fun87342 }
 70:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    mike = function(argFoo) { // Original name: KeyboardArea
        _fun87343: for(var _fun87343_ip = 0; ; ) switch(_fun87343_ip) {
 0:
            mike = argFoo;
            verify = mike.keyboardType;
            echo = mike.expressionType;
            offset = mike.currentKeyboardHeight;
            var _closure2_slot0 = offset;
            update = mike.channel;
            result = mike.onPressEmoji;
            output = mike.onPressGIF;
            sizing = mike.onPressSticker;
            kilo = mike.onBackspace;
            options = mike.windowHeight;
            var _closure2_slot1 = options;
            mike = _closure1_slot35;
            tango = undefined;
            foxtrot = mike.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 68;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useKeyboardActionSheetHeight;
            mike = mike.bind(zulu)();
            golf = mike.minimum;
            var _closure2_slot2 = golf;
            oscar = _closure1_slot5;
            zulu = oscar.useMemo;
            mike = new Array(3);
            mike[0] = offset;
            mike[1] = options;
            mike[2] = golf;
            entity = function() {
                _fun87344: for(var _fun87344_ip = 0; ; ) switch(_fun87344_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 45;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.isAndroid;
                    entity = entity.bind(mike)();
                    if(entity) { _fun87344_ip = 77; continue _fun87344 }
 37:
                    entity = {'position': 'absolute', 'left': 0, 'right': 0};
                    zulu = _closure2_slot0;
                    entity['height'] = zulu;
                    entity['minHeight'] = zulu;
                    mike = _closure2_slot1;
                    mike = mike - zulu;
                    entity['top'] = mike;
                    _fun87344_ip = 101; continue _fun87344;
 77:
                    mike = {};
                    zulu = 1;
                    mike['flex'] = zulu;
                    zulu = _closure2_slot2;
                    mike['maxHeight'] = zulu;
                    entity = mike;
 101:
                    return entity;
                }
            };
            offset = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot31;
            mike = _closure1_slot1;
            entity = 69;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.Provider;
            entity = {};
            report = false;
            entity['value'] = report;
            golf = _closure1_slot31;
            oscar = _closure1_slot9;
            report = {};
            yankee = foxtrot.keyboardArea;
            options = new Array(2);
            options[0] = yankee;
            options[1] = offset;
            report['style'] = options;
            options = _closure1_slot25;
            options = options.EXPRESSION;
            options = verify === options;
            if(!options) { _fun87343_ip = 331; continue _fun87343 }
 240:
            yankee = _closure1_slot31;
            offset = _closure1_slot9;
            verify = {};
            foxtrot = foxtrot.emojiPicker;
            verify['style'] = foxtrot;
            backup = _closure1_slot31;
            foxtrot = _closure1_slot1;
            source = _closure1_slot2;
            romeo = 70;
            romeo = source[romeo];
            foxtrot = foxtrot.bind(tango)(romeo);
            romeo = {};
            romeo['channel'] = update;
            romeo['expressionType'] = echo;
            romeo['onPressEmoji'] = result;
            romeo['onPressGIF'] = output;
            romeo['onPressSticker'] = sizing;
            romeo['onBackspace'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            verify['children'] = romeo;
            options = yankee.bind(tango)(offset, verify);
 331:
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot39 = mike;
    entity = function(argFoo) { // Original name: Tags
        _fun87345: for(var _fun87345_ip = 0; ; ) switch(_fun87345_ip) {
 0:
            entity = argFoo;
            verify = entity.tags;
            entity = _closure1_slot35;
            report = undefined;
            offset = entity.bind(report)();
            zulu = verify.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun87345_ip = 186; continue _fun87345 }
 38:
            tango = _closure1_slot32;
            zulu = _closure1_slot9;
            mike = {};
            oscar = offset.tags;
            mike['style'] = oscar;
            options = _closure1_slot31;
            kilo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            yankee = 71;
            oscar = foxtrot[yankee];
            golf = kilo.bind(report)(oscar);
            oscar = {};
            backup = 72;
            backup = foxtrot[backup];
            backup = kilo.bind(report)(backup);
            oscar['source'] = backup;
            romeo = _closure1_slot0;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(report)(yankee);
            yankee = yankee.IconSizes;
            yankee = yankee.SMALL;
            oscar['size'] = yankee;
            offset = offset.tagIcon;
            oscar['style'] = offset;
            golf = options.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            options = verify.map;
            golf = function(argFoo, argBar) {
                _fun87346: for(var _fun87346_ip = 0; ; ) switch(_fun87346_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot32;
                    zulu = _closure1_slot5;
                    tango = zulu.Fragment;
                    zulu = {};
                    golf = 0;
                    oscar = argBar;
                    golf = golf !== oscar;
                    if(!golf) { _fun87346_ip = 64; continue _fun87346 }
 33:
                    offset = _closure1_slot31;
                    verify = _closure1_slot9;
                    options = {};
                    oscar = {};
                    yankee = 4;
                    oscar['width'] = yankee;
                    options['style'] = oscar;
                    oscar = undefined;
                    golf = offset.bind(oscar)(verify, options);
 64:
                    oscar = new Array(2);
                    oscar[0] = golf;
                    verify = _closure1_slot31;
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 73;
                    golf = golf[mike];
                    mike = undefined;
                    golf = options.bind(mike)(golf);
                    options = golf.AppliedForumTagPill;
                    golf = {};
                    golf['tag'] = entity;
                    golf = verify.bind(mike)(options, golf);
                    oscar[1] = golf;
                    zulu['children'] = oscar;
                    entity = entity.id;
                    entity = report.bind(mike)(tango, zulu, entity);
                    return entity;
                }
            };
            golf = options.bind(verify)(golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 186:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: ActionBar
        _fun87347: for(var _fun87347_ip = 0; ; ) switch(_fun87347_ip) {
 0:
            entity = argFoo;
            romeo = entity.channel;
            var _closure2_slot0 = romeo;
            mike = entity.tags;
            var _closure2_slot1 = mike;
            mike = entity.setTags;
            var _closure2_slot2 = mike;
            kilo = entity.canPost;
            var _closure2_slot3 = kilo;
            backup = entity.submitting;
            mike = entity.onSubmit;
            var _closure2_slot4 = mike;
            mike = entity.focusLastInput;
            var _closure2_slot5 = mike;
            mike = entity.blurLastInput;
            var _closure2_slot6 = mike;
            yankee = entity.lastInput;
            sizing = entity.isEdit;
            var _closure2_slot7 = sizing;
            tango = undefined;
            var _closure2_slot13 = tango;
            entity = _closure1_slot35;
            output = entity.bind(tango)();
            var _closure2_slot8 = output;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 24;
            report = zulu[entity];
            options = mike.bind(tango)(report);
            golf = options.useStateFromStores;
            report = _closure1_slot18;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                tango = _closure1_slot18;
                zulu = tango.getUploads;
                mike = _closure2_slot0;
                mike = mike.id;
                entity = _closure1_slot12;
                entity = entity.ChannelMessage;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            result = golf.bind(options)(oscar, report);
            report = zulu[entity];
            options = mike.bind(tango)(report);
            golf = options.useStateFromStores;
            report = _closure1_slot14;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                _fun87349: for(var _fun87349_ip = 0; ; ) switch(_fun87349_ip) {
 0:
                    entity = _closure2_slot7;
                    entity = !entity;
                    if(!entity) { _fun87349_ip = 46; continue _fun87349 }
 13:
                    report = _closure1_slot14;
                    tango = report.can;
                    zulu = _closure1_slot23;
                    zulu = zulu.ATTACH_FILES;
                    mike = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike);
 46:
                    return entity;
                }
            };
            verify = golf.bind(options)(oscar, report);
            entity = zulu[entity];
            report = mike.bind(tango)(entity);
            zulu = report.useStateFromStoresObject;
            entity = _closure1_slot20;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = {};
                zulu = _closure1_slot20;
                zulu = zulu.keyboardType;
                entity['keyboardType'] = zulu;
                zulu = _closure1_slot20;
                zulu = zulu.expressionType;
                entity['expressionType'] = zulu;
                mike = _closure1_slot20;
                mike = mike.keyboardDuration;
                entity['keyboardDuration'] = mike;
                return entity;
            };
            entity = zulu.bind(report)(mike, entity);
            vacuum = entity.keyboardType;
            var _closure2_slot9 = vacuum;
            mike = entity.expressionType;
            var _closure2_slot10 = mike;
            entity = entity.keyboardDuration;
            var _closure2_slot11 = entity;
            entity = romeo.isMediaChannel;
            oscar = entity.bind(romeo)();
            mike = _closure1_slot25;
            mike = mike.MEDIA;
            sequence = vacuum === mike;
            var _closure2_slot12 = sequence;
            if(oscar) { _fun87347_ip = 327; continue _fun87347 }
 307:
            entity = verify;
            if(!verify) { _fun87347_ip = 324; continue _fun87347 }
 313:
            zulu = result.length;
            mike = 0;
            entity = zulu > mike;
 324:
            oscar = entity;
 327:
            entity = romeo.availableTags;
            mike = null;
            offset = mike != entity;
            if(!offset) { _fun87347_ip = 368; continue _fun87347 }
 342:
            entity = romeo.availableTags;
            zulu = mike == entity;
            mike = undefined;
            if(zulu) { _fun87347_ip = 362; continue _fun87347 }
 357:
            mike = entity.length;
 362:
            entity = 0;
            offset = mike > entity;
 368:
            entity = function() { // Original name: maybeFocus
                _fun87351: for(var _fun87351_ip = 0; ; ) switch(_fun87351_ip) {
 0:
                    tango = _closure2_slot9;
                    mike = _closure1_slot25;
                    mike = mike.SYSTEM;
                    mike = tango !== mike;
                    if(!mike) { _fun87351_ip = 45; continue _fun87351 }
 27:
                    tango = _closure2_slot9;
                    zulu = _closure1_slot25;
                    zulu = zulu.EXPRESSION;
                    mike = tango !== zulu;
 45:
                    if(mike) { _fun87351_ip = 58; continue _fun87351 }
 48:
                    mike = _closure2_slot5;
                    entity = undefined;
                    entity = mike.bind(entity)();
 58:
                    entity = undefined;
                    return entity;
                }
            };
            _closure2_slot13 = entity;
            mike = _closure1_slot33;
            entity = result.length;
            echo = 0;
            zulu = entity > echo;
            entity = 0;
            if(!zulu) { _fun87347_ip = 426; continue _fun87347 }
 399:
            report = _closure1_slot27;
            golf = _closure1_slot28;
            zulu = 2;
            golf = zulu * golf;
            zulu = _closure1_slot29;
            zulu = golf + zulu;
            entity = report + zulu;
 426:
            control = mike + entity;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 45;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.isAndroid;
            entity = entity.bind(mike)();
            options = 0;
            if(entity) { _fun87347_ip = 468; continue _fun87347 }
 464:
            options = _closure1_slot34;
 468:
            entity = result.length;
            source = entity > echo;
            zulu = _closure1_slot32;
            mike = _closure1_slot9;
            entity = {};
            golf = output.actionsContainer;
            report = new Array(2);
            report[0] = golf;
            golf = {};
            options = control + options;
            golf['height'] = options;
            options = 0;
            if(!source) { _fun87347_ip = 520; continue _fun87347 }
 516:
            options = _closure1_slot29;
 520:
            golf['paddingTop'] = options;
            options = 0;
            if(!source) { _fun87347_ip = 534; continue _fun87347 }
 530:
            options = _closure1_slot28;
 534:
            golf['paddingBottom'] = options;
            report[1] = golf;
            entity['style'] = report;
            if(!oscar) { _fun87347_ip = 615; continue _fun87347 }
 550:
            options = _closure1_slot31;
            golf = _closure1_slot1;
            control = _closure1_slot2;
            report = 74;
            report = control[report];
            golf = golf.bind(tango)(report);
            report = {};
            report['attachments'] = result;
            result = function(argFoo) { // Original name: onRemove
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 75;
                zulu = zulu[entity];
                entity = undefined;
                oscar = tango.bind(entity)(zulu);
                report = oscar.remove;
                zulu = _closure2_slot0;
                tango = zulu.id;
                mike = _closure1_slot12;
                zulu = mike.ChannelMessage;
                mike = argFoo;
                mike = report.bind(oscar)(tango, mike, zulu);
                return entity;
            };
            report['onRemove'] = result;
            romeo = romeo.id;
            report['channelId'] = romeo;
            romeo = true;
            report['highlightThumbnails'] = romeo;
            oscar = options.bind(tango)(golf, report);
 615:
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot32;
            golf = _closure1_slot9;
            oscar = {};
            romeo = output.actions;
            oscar['style'] = romeo;
            romeo = verify;
            if(!romeo) { _fun87347_ip = 860; continue _fun87347 }
 652:
            control = _closure1_slot31;
            papa = _closure1_slot0;
            target = _closure1_slot2;
            verify = 76;
            verify = target[verify];
            verify = papa.bind(tango)(verify);
            result = verify.HeaderActionButton;
            verify = {};
            config = 42;
            record = target[config];
            record = papa.bind(tango)(record);
            context = record.intl;
            record = context.string;
            config = target[config];
            config = papa.bind(tango)(config);
            config = config.t;
            config = config.aDZSu7;
            config = record.bind(context)(config);
            verify['accessibilityLabel'] = config;
            record = output.actionButton;
            config = new Array(2);
            config[0] = record;
            record = output.mediaButton;
            config[1] = record;
            verify['style'] = config;
            config = _closure1_slot1;
            context = _closure1_slot2;
            if(sequence) { _fun87347_ip = 783; continue _fun87347 }
 774:
            sequence = 78;
            sequence = context[sequence];
            _fun87347_ip = 790; continue _fun87347;
 783:
            record = 77;
            sequence = context[record];
 790:
            sequence = config.bind(tango)(sequence);
            verify['source'] = sequence;
            config = _closure1_slot0;
            record = _closure1_slot2;
            sequence = 71;
            sequence = record[sequence];
            sequence = config.bind(tango)(sequence);
            sequence = sequence.IconSizes;
            sequence = sequence.SMALL_20;
            verify['iconSize'] = sequence;
            sequence = function() { // Original name: onPress
                _fun87353: for(var _fun87353_ip = 0; ; ) switch(_fun87353_ip) {
 0:
                    mike = _closure2_slot12;
                    if(mike) { _fun87353_ip = 66; continue _fun87353 }
 10:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 79;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.showSimpleMediaKeyboard;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(report)(zulu);
                    zulu = _closure1_slot6;
                    mike = zulu.dismiss;
                    mike = mike.bind(zulu)();
                    _fun87353_ip = 76; continue _fun87353;
 66:
                    mike = _closure2_slot5;
                    entity = undefined;
                    entity = mike.bind(entity)();
 76:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 80;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.trackForumChannelMediaUploaderClicked;
                    mike = {};
                    report = true;
                    mike['isMobile'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            verify['onPress'] = sequence;
            sequence = true;
            verify['foregroundRipple'] = sequence;
            romeo = control.bind(tango)(result, verify);
 860:
            verify = new Array(4);
            verify[0] = romeo;
            if(!offset) { _fun87347_ip = 1058; continue _fun87347 }
 874:
            control = _closure1_slot31;
            config = _closure1_slot0;
            record = _closure1_slot2;
            romeo = 76;
            romeo = record[romeo];
            romeo = config.bind(tango)(romeo);
            result = romeo.HeaderActionButton;
            romeo = {};
            sequence = 42;
            context = record[sequence];
            context = config.bind(tango)(context);
            papa = context.intl;
            context = papa.string;
            sequence = record[sequence];
            sequence = config.bind(tango)(sequence);
            sequence = sequence.t;
            sequence = sequence.112vVF;
            sequence = context.bind(papa)(sequence);
            romeo['accessibilityLabel'] = sequence;
            context = output.actionButton;
            sequence = new Array(2);
            sequence[0] = context;
            context = output.mediaButton;
            sequence[1] = context;
            romeo['style'] = sequence;
            context = _closure1_slot1;
            sequence = 72;
            sequence = record[sequence];
            sequence = context.bind(tango)(sequence);
            romeo['source'] = sequence;
            sequence = 71;
            sequence = record[sequence];
            sequence = config.bind(tango)(sequence);
            sequence = sequence.IconSizes;
            sequence = sequence.SMALL_20;
            romeo['iconSize'] = sequence;
            sequence = function() { // Original name: onPress
                tango = _closure1_slot6;
                entity = tango.dismiss;
                entity = entity.bind(tango)();
                report = _closure1_slot1;
                romeo = _closure1_slot2;
                entity = 81;
                tango = romeo[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.openLazy;
                yankee = _closure1_slot0;
                zulu = 51;
                zulu = romeo[zulu];
                golf = yankee.bind(entity)(zulu);
                zulu = 82;
                tango = romeo[zulu];
                zulu = romeo.paths;
                tango = golf.bind(entity)(tango, zulu);
                zulu = {};
                options = _closure2_slot0;
                zulu['parentChannel'] = options;
                options = function(argFoo) { // Original name: onSave
                    tango = _closure2_slot2;
                    entity = undefined;
                    zulu = argFoo;
                    zulu = tango.bind(entity)(zulu);
                    mike = _closure2_slot13;
                    mike = mike.bind(entity)();
                    return entity;
                };
                zulu['onSave'] = options;
                options = 42;
                verify = romeo[options];
                verify = yankee.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                options = romeo[options];
                options = yankee.bind(entity)(options);
                options = options.t;
                options = options.HPu3kp;
                options = verify.bind(offset)(options);
                zulu['title'] = options;
                golf = _closure2_slot1;
                zulu['tags'] = golf;
                mike = function() { // Original name: onClose
                    mike = _closure2_slot13;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                zulu['onClose'] = mike;
                mike = 'ForumPostTagsActionSheet';
                mike = report.bind(oscar)(tango, mike, zulu);
                return entity;
            };
            romeo['onPress'] = sequence;
            sequence = true;
            romeo['foregroundRipple'] = sequence;
            offset = control.bind(tango)(result, romeo);
 1058:
            verify[1] = offset;
            romeo = _closure1_slot0;
            result = _closure1_slot2;
            offset = 44;
            offset = result[offset];
            offset = romeo.bind(tango)(offset);
            offset = offset.PostComposerInputs;
            offset = offset.CONTENT;
            offset = yankee === offset;
            if(!offset) { _fun87347_ip = 1318; continue _fun87347 }
 1104:
            result = _closure1_slot31;
            record = _closure1_slot0;
            context = _closure1_slot2;
            yankee = 76;
            yankee = context[yankee];
            yankee = record.bind(tango)(yankee);
            romeo = yankee.HeaderActionButton;
            yankee = {};
            control = 42;
            sequence = context[control];
            sequence = record.bind(tango)(sequence);
            config = sequence.intl;
            sequence = config.string;
            control = context[control];
            control = record.bind(tango)(control);
            control = control.t;
            control = control.iZ7Mz8;
            control = sequence.bind(config)(control);
            yankee['accessibilityLabel'] = control;
            control = output.actionButton;
            yankee['style'] = control;
            control = _closure1_slot25;
            control = control.EXPRESSION;
            if(!(vacuum !== control)) { _fun87347_ip = 1233; continue _fun87347 }
 1211:
            vacuum = _closure1_slot1;
            sequence = _closure1_slot2;
            control = 83;
            control = sequence[control];
            control = vacuum.bind(tango)(control);
            _fun87347_ip = 1253; continue _fun87347;
 1233:
            sequence = _closure1_slot1;
            config = _closure1_slot2;
            vacuum = 77;
            vacuum = config[vacuum];
            control = sequence.bind(tango)(vacuum);
 1253:
            yankee['source'] = control;
            vacuum = _closure1_slot0;
            sequence = _closure1_slot2;
            control = 71;
            control = sequence[control];
            control = vacuum.bind(tango)(control);
            control = control.IconSizes;
            control = control.SMALL_20;
            yankee['iconSize'] = control;
            control = function() { // Original name: onPress
                _fun87357: for(var _fun87357_ip = 0; ; ) switch(_fun87357_ip) {
 0:
                    tango = _closure2_slot9;
                    zulu = _closure1_slot25;
                    zulu = zulu.EXPRESSION;
                    if(!(tango !== zulu)) { _fun87357_ip = 172; continue _fun87357 }
 29:
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 84;
                    zulu = golf[zulu];
                    oscar = undefined;
                    yankee = tango.bind(oscar)(zulu);
                    offset = yankee.DeprecatedLayoutAnimationKeyboard;
                    report = _closure2_slot11;
                    zulu = 0.5;
                    verify = zulu * report;
                    zulu = true;
                    zulu = offset.bind(yankee)(verify, zulu);
                    verify = _closure1_slot6;
                    zulu = verify.dismiss;
                    zulu = zulu.bind(verify)();
                    zulu = 58;
                    zulu = golf[zulu];
                    golf = tango.bind(oscar)(zulu);
                    tango = golf.toggleKeyboard;
                    zulu = {};
                    verify = _closure1_slot25;
                    verify = verify.EXPRESSION;
                    zulu['keyboardType'] = verify;
                    verify = _closure2_slot10;
                    zulu['expressionType'] = verify;
                    zulu = tango.bind(golf)(zulu);
                    zulu = global;
                    tango = zulu.setTimeout;
                    zulu = function() {
                        mike = _closure2_slot5;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    zulu = tango.bind(oscar)(zulu, report);
                    _fun87357_ip = 302; continue _fun87357;
 172:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 84;
                    zulu = oscar[zulu];
                    tango = undefined;
                    offset = report.bind(tango)(zulu);
                    verify = offset.DeprecatedLayoutAnimationKeyboard;
                    golf = _closure2_slot11;
                    zulu = 0.5;
                    zulu = zulu * golf;
                    golf = true;
                    zulu = verify.bind(offset)(zulu, golf);
                    zulu = 58;
                    zulu = oscar[zulu];
                    oscar = report.bind(tango)(zulu);
                    report = oscar.toggleKeyboard;
                    zulu = {};
                    options = _closure1_slot25;
                    options = options.SYSTEM;
                    zulu['keyboardType'] = options;
                    zulu['keyboardWillOpen'] = golf;
                    zulu = report.bind(oscar)(zulu);
                    mike = _closure2_slot6;
                    mike = mike.bind(tango)();
                    mike = global;
                    zulu = mike.setTimeout;
                    mike = function() {
                        mike = _closure2_slot5;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    entity = 0;
                    entity = zulu.bind(tango)(mike, entity);
 302:
                    entity = undefined;
                    return entity;
                }
            };
            yankee['onPress'] = control;
            control = true;
            yankee['foregroundRipple'] = control;
            offset = result.bind(tango)(romeo, yankee);
 1318:
            verify[2] = offset;
            romeo = _closure1_slot31;
            yankee = _closure1_slot1;
            offset = _closure1_slot2;
            control = 85;
            offset = offset[control];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            config = _closure1_slot0;
            record = _closure1_slot2;
            result = 42;
            vacuum = record[result];
            vacuum = config.bind(tango)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.string;
            result = record[result];
            result = config.bind(tango)(result);
            result = result.t;
            if(sizing) { _fun87347_ip = 1408; continue _fun87347 }
 1395:
            sizing = result.pIuQIy;
            sizing = vacuum.bind(sequence)(sizing);
            _fun87347_ip = 1419; continue _fun87347;
 1408:
            result = result.R3BPHx;
            sizing = vacuum.bind(sequence)(result);
 1419:
            offset['text'] = sizing;
            result = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[control];
            sizing = result.bind(tango)(sizing);
            result = sizing.ButtonLooks;
            if(kilo) { _fun87347_ip = 1457; continue _fun87347 }
 1449:
            sizing = result.OUTLINED;
            _fun87347_ip = 1463; continue _fun87347;
 1457:
            sizing = result.FILLED;
 1463:
            offset['look'] = sizing;
            sizing = true;
            offset['shrink'] = sizing;
            offset['foregroundRipple'] = sizing;
            result = output.postButton;
            sizing = new Array(2);
            sizing[0] = result;
            result = {};
            echo = 0;
            if(!source) { _fun87347_ip = 1515; continue _fun87347 }
 1501:
            source = _closure1_slot28;
            update = -1;
            echo = update * source;
 1515:
            result['marginTop'] = echo;
            sizing[1] = result;
            offset['style'] = sizing;
            if(kilo) { _fun87347_ip = 1538; continue _fun87347 }
 1530:
            sizing = output.postButtonTextDisabled;
            _fun87347_ip = 1544; continue _fun87347;
 1538:
            sizing = output.postButtonText;
 1544:
            offset['textStyle'] = sizing;
            offset['loading'] = backup;
            if(backup) { _fun87347_ip = 1560; continue _fun87347 }
 1557:
            backup = !kilo;
 1560:
            offset['disabled'] = backup;
            backup = function() { // Original name: renderIcon
                _fun87360: for(var _fun87360_ip = 0; ; ) switch(_fun87360_ip) {
 0:
                    tango = _closure1_slot31;
                    mike = _closure1_slot1;
                    entity = _closure1_slot2;
                    report = 71;
                    entity = entity[report];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    options = _closure2_slot3;
                    verify = _closure2_slot8;
                    if(options) { _fun87360_ip = 58; continue _fun87360 }
 45:
                    options = verify.postIconColorDisabled;
                    options = options.color;
                    _fun87360_ip = 69; continue _fun87360;
 58:
                    verify = verify.postIconColor;
                    options = verify.color;
 69:
                    entity['color'] = options;
                    oscar = _closure2_slot8;
                    oscar = oscar.postIcon;
                    entity['style'] = oscar;
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = golf[report];
                    report = oscar.bind(zulu)(report);
                    report = report.Sizes;
                    report = report.SMALL;
                    entity['size'] = report;
                    report = 86;
                    report = golf[report];
                    report = oscar.bind(zulu)(report);
                    entity['source'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            offset['renderIcon'] = backup;
            foxtrot = function() { // Original name: onPress
                _fun87361: for(var _fun87361_ip = 0; ; ) switch(_fun87361_ip) {
 0:
                    mike = _closure2_slot3;
                    if(!mike) { _fun87361_ip = 23; continue _fun87361 }
 10:
                    zulu = _closure2_slot4;
                    mike = undefined;
                    entity = {};
                    entity = zulu.bind(mike)(entity);
 23:
                    entity = undefined;
                    return entity;
                }
            };
            offset['onPress'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            verify[3] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = foxtrot.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    options = golf[report];
    report = argCorge;
    report = report.bind(entity)(options);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.Keyboard;
    var _closure1_slot6 = options;
    options = report.Pressable;
    var _closure1_slot7 = options;
    backup = report.StyleSheet;
    options = report.useWindowDimensions;
    var _closure1_slot8 = options;
    report = report.View;
    var _closure1_slot9 = report;
    report = 4;
    report = golf[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 5;
    options = golf[report];
    options = foxtrot.bind(entity)(options);
    var _closure1_slot11 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.DraftType;
    var _closure1_slot12 = report;
    report = 6;
    report = golf[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 7;
    report = golf[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot14 = report;
    yankee = 8;
    report = golf[yankee];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot15 = report;
    report = 9;
    options = golf[report];
    options = foxtrot.bind(entity)(options);
    var _closure1_slot16 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SlowmodeType;
    var _closure1_slot17 = report;
    report = 10;
    report = golf[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot18 = report;
    report = 11;
    report = golf[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot19 = report;
    output = 12;
    report = golf[output];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot20 = report;
    report = 13;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.AbortCodes;
    var _closure1_slot21 = options;
    options = report.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot22 = options;
    report = report.Permissions;
    var _closure1_slot23 = report;
    report = 14;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ChannelFlags;
    var _closure1_slot24 = report;
    report = 15;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.KeyboardTypes;
    var _closure1_slot25 = report;
    result = 16;
    report = golf[result];
    report = oscar.bind(entity)(report);
    report = report.ContentDismissActionType;
    var _closure1_slot26 = report;
    report = 17;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.IMAGE_CAROUSEL_TILE_HEIGHT;
    var _closure1_slot27 = options;
    options = report.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
    var _closure1_slot28 = options;
    report = report.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
    var _closure1_slot29 = report;
    report = 18;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.OpenThreadAnalyticsLocations;
    var _closure1_slot30 = report;
    report = 19;
    report = golf[report];
    report = oscar.bind(entity)(report);
    sizing = report.Fonts;
    kilo = 20;
    report = golf[kilo];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot31 = report;
    report = golf[kilo];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot32 = report;
    report = 56;
    var _closure1_slot33 = report;
    report = 44;
    var _closure1_slot34 = report;
    report = 21;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {'flex': 1, 'backgroundColor': null, 'position': 'relative'};
    romeo = 22;
    echo = golf[romeo];
    echo = foxtrot.bind(entity)(echo);
    echo = echo.colors;
    echo = echo.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = echo;
    report['container'] = offset;
    offset = {};
    offset['paddingBottom'] = result;
    report['scrollViewContentContainer'] = offset;
    offset = {};
    result = 40;
    offset['height'] = result;
    report['avatarContainer'] = offset;
    offset = {};
    offset['marginRight'] = output;
    report['avatar'] = offset;
    offset = {};
    offset['padding'] = yankee;
    report['titleInput'] = offset;
    offset = {'minHeight': 40, 'height': 'auto'};
    sizing = sizing.DISPLAY_SEMIBOLD;
    offset['fontFamily'] = sizing;
    sizing = golf[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_PRIMARY;
    offset['color'] = sizing;
    report['titleInputText'] = offset;
    offset = {'width': '100%', 'height': '100%', 'padding': 0, 'lineHeight': 20, 'color': null, 'textAlignVertical': 'top'};
    sizing = golf[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_PRIMARY;
    offset['color'] = sizing;
    report['contentInput'] = offset;
    offset = {};
    offset['marginEnd'] = yankee;
    report['postIcon'] = offset;
    offset = {};
    sizing = golf[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.WHITE;
    offset['color'] = sizing;
    report['postIconColor'] = offset;
    offset = {};
    sizing = golf[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_SECONDARY;
    offset['color'] = sizing;
    report['postIconColorDisabled'] = offset;
    offset = {'marginLeft': 'auto', 'borderRadius': null, 'paddingHorizontal': 12, 'height': 40, 'overflow': 'hidden'};
    sizing = golf[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    offset['borderRadius'] = sizing;
    report['postButton'] = offset;
    offset = {};
    sizing = golf[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.WHITE;
    offset['color'] = sizing;
    report['postButtonText'] = offset;
    offset = {};
    sizing = golf[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_SECONDARY;
    offset['color'] = sizing;
    report['postButtonTextDisabled'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'padding': 8};
    report['tags'] = offset;
    offset = {};
    offset['marginRight'] = yankee;
    report['tagIcon'] = offset;
    offset = {'flex': 1, 'flexDirection': 'row', 'paddingHorizontal': 12, 'paddingTop': 8};
    report['editor'] = offset;
    offset = {'width': '100%', 'flex': 1, 'flexDirection': 'column', 'minHeight': 200};
    report['editorBody'] = offset;
    offset = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'flex-end'};
    report['usernameToChannel'] = offset;
    offset = {};
    offset['lineHeight'] = kilo;
    report['channelName'] = offset;
    offset = {};
    backup = backup.hairlineWidth;
    offset['borderTopWidth'] = backup;
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    offset['borderTopColor'] = backup;
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = backup;
    report['actionsContainer'] = offset;
    offset = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'height': 56, 'maxHeight': 56, 'width': '100%'};
    report['actions'] = offset;
    offset = {'height': 40, 'minHeight': 40, 'maxHeight': 40, 'width': 40, 'minWidth': 40, 'maxWidth': 40, 'borderRadius': 20, 'color': null, 'backgroundColor': null, 'marginLeft': 0, 'marginRight': 0, 'overflow': 'hidden'};
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.TEXT_NORMAL;
    offset['color'] = backup;
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY_ALT;
    offset['backgroundColor'] = backup;
    report['actionButton'] = offset;
    offset = {};
    offset['marginRight'] = yankee;
    report['mediaButton'] = offset;
    offset = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'zIndex': 100};
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = backup;
    report['horizontalAutocomplete'] = offset;
    offset = {};
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = backup;
    report['keyboardArea'] = offset;
    offset = {'flex': 1, 'overflow': 'hidden', 'backgroundColor': null, 'position': 'relative'};
    romeo = golf[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = romeo;
    report['emojiPicker'] = offset;
    offset = {'marginBottom': 16, 'marginLeft': 16, 'marginRight': 16};
    report['nameError'] = offset;
    offset = {};
    offset['marginTop'] = yankee;
    report['messageError'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot35 = report;
    report = {};
    options = 'function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}';
    report['code'] = options;
    var _closure1_slot36 = report;
    report = 87;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/forums/native/composer/ForumComposer.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: ForumComposer
        _fun87362: for(var _fun87362_ip = 0; ; ) switch(_fun87362_ip) {
 0:
            entity = argFoo;
            kilo = entity.parentChannel;
            var _closure2_slot0 = kilo;
            mike = entity.thread;
            var _closure2_slot1 = mike;
            quebec = entity.threadSettingsDraft;
            var _closure2_slot2 = quebec;
            update = entity.onClose;
            var _closure2_slot3 = update;
            variable36 = entity.message;
            var _closure2_slot4 = variable36;
            context = entity.isEdit;
            var _closure2_slot5 = context;
            report = undefined;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            var _closure2_slot19 = report;
            var _closure2_slot20 = report;
            var _closure2_slot21 = report;
            var _closure2_slot22 = report;
            var _closure2_slot23 = report;
            var _closure2_slot24 = report;
            var _closure2_slot25 = report;
            var _closure2_slot26 = report;
            var _closure2_slot27 = report;
            var _closure2_slot28 = report;
            var _closure2_slot29 = report;
            var _closure2_slot30 = report;
            var _closure2_slot31 = report;
            var _closure2_slot32 = report;
            var _closure2_slot33 = report;
            var _closure2_slot34 = report;
            var _closure2_slot35 = report;
            var _closure2_slot36 = report;
            var _closure2_slot37 = report;
            var _closure2_slot38 = report;
            var _closure2_slot39 = report;
            entity = _closure1_slot35;
            lima = entity.bind(report)();
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 23;
            entity = tango[entity];
            entity = zulu.bind(report)(entity);
            entity = entity.bind(report)();
            entity = entity.analyticsLocations;
            var _closure2_slot6 = entity;
            oscar = _closure1_slot5;
            zulu = oscar.useRef;
            entity = null;
            variable48 = zulu.bind(oscar)(entity);
            oscar = _closure1_slot0;
            zulu = 24;
            golf = tango[zulu];
            foxtrot = oscar.bind(report)(golf);
            yankee = foxtrot.useStateFromStores;
            golf = _closure1_slot19;
            offset = new Array(1);
            offset[0] = golf;
            verify = function() {
                _fun87363: for(var _fun87363_ip = 0; ; ) switch(_fun87363_ip) {
 0:
                    mike = _closure1_slot19;
                    entity = mike.getCurrentUser;
                    mike = entity.bind(mike)();
                    entity = null;
                    zulu = entity != mike;
                    if(!zulu) { _fun87363_ip = 28; continue _fun87363 }
 25:
                    entity = mike;
 28:
                    return entity;
                }
            };
            golf = new Array(0);
            variable50 = yankee.bind(foxtrot)(offset, verify, golf);
            var _closure2_slot7 = variable50;
            golf = tango[zulu];
            yankee = oscar.bind(report)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot13;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                zulu = _closure1_slot13;
                mike = zulu.getSelfMember;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = offset.bind(yankee)(verify, golf);
            golf = tango[zulu];
            yankee = oscar.bind(report)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot11;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                tango = _closure1_slot11;
                zulu = tango.getDraft;
                mike = _closure2_slot0;
                mike = mike.id;
                entity = _closure1_slot12;
                entity = entity.ChannelMessage;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            control = offset.bind(yankee)(verify, golf);
            tango = tango[zulu];
            verify = oscar.bind(report)(tango);
            golf = verify.useStateFromStores;
            tango = _closure1_slot10;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 25;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.isThemeDark;
                entity = _closure1_slot10;
                entity = entity.theme;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = golf.bind(verify)(oscar, tango);
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 22;
            tango = verify[tango];
            tango = golf.bind(report)(tango);
            tango = tango.unsafe_rawColors;
            if(oscar) { _fun87362_ip = 463; continue _fun87362 }
 455:
            variable54 = tango.PRIMARY_460;
            _fun87362_ip = 469; continue _fun87362;
 463:
            variable54 = tango.PRIMARY_330;
 469:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            golf = oscar[zulu];
            yankee = tango.bind(report)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot16;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                tango = _closure1_slot16;
                zulu = tango.getSlowmodeCooldownGuess;
                mike = _closure2_slot0;
                mike = mike.id;
                entity = _closure1_slot17;
                entity = entity.CreateThread;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            sierra = offset.bind(yankee)(verify, golf);
            _closure2_slot8 = sierra;
            zulu = oscar[zulu];
            offset = tango.bind(report)(zulu);
            verify = offset.useStateFromStores;
            zulu = _closure1_slot18;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function() {
                tango = _closure1_slot18;
                zulu = tango.getUploads;
                mike = _closure2_slot0;
                mike = mike.id;
                entity = _closure1_slot12;
                entity = entity.ChannelMessage;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            papa = verify.bind(offset)(golf, zulu);
            _closure2_slot9 = papa;
            zulu = 26;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useCurrentKeyboardInfo;
            zulu = zulu.bind(tango)();
            echo = zulu.keyboardType;
            _closure2_slot10 = echo;
            result = zulu.expressionType;
            output = zulu.currentKeyboardHeight;
            _closure2_slot11 = output;
            offset = zulu.currentSafeAreaBottom;
            _closure2_slot12 = offset;
            tango = _closure1_slot1;
            zulu = 27;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            target = zulu.bind(report)();
            _closure2_slot13 = target;
            tango = _closure1_slot5;
            zulu = tango.useState;
            variable56 = false;
            tango = zulu.bind(tango)(variable56);
            zulu = _closure1_slot4;
            vacuum = 2;
            zulu = zulu.bind(report)(tango, vacuum);
            foxtrot = 0;
            variable37 = zulu[foxtrot];
            yankee = 1;
            zulu = zulu[yankee];
            _closure2_slot14 = zulu;
            golf = _closure1_slot5;
            oscar = golf.useState;
            if(context) { _fun87362_ip = 719; continue _fun87362 }
 703:
            zulu = entity == quebec;
            verify = undefined;
            if(zulu) { _fun87362_ip = 717; continue _fun87362 }
 712:
            verify = quebec.name;
 717:
            _fun87362_ip = 736; continue _fun87362;
 719:
            tango = entity == mike;
            zulu = undefined;
            if(tango) { _fun87362_ip = 733; continue _fun87362 }
 728:
            zulu = mike.name;
 733:
            verify = zulu;
 736:
            sizing = entity != verify;
            tango = '';
            zulu = tango;
            if(!sizing) { _fun87362_ip = 753; continue _fun87362 }
 750:
            zulu = verify;
 753:
            oscar = oscar.bind(golf)(zulu);
            zulu = _closure1_slot4;
            zulu = zulu.bind(report)(oscar, vacuum);
            variable45 = zulu[foxtrot];
            _closure2_slot15 = variable45;
            zulu = zulu[yankee];
            _closure2_slot16 = zulu;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            sizing = 28;
            zulu = zulu[sizing];
            oscar = oscar.bind(report)(zulu);
            zulu = oscar.useChannelTemplate;
            verify = zulu.bind(oscar)(kilo);
            golf = tango;
            if(!context) { _fun87362_ip = 883; continue _fun87362 }
 821:
            zulu = entity != variable36;
            golf = tango;
            if(!zulu) { _fun87362_ip = 883; continue _fun87362 }
 831:
            zulu = entity != mike;
            golf = tango;
            if(!zulu) { _fun87362_ip = 883; continue _fun87362 }
 841:
            oscar = _closure1_slot1;
            source = _closure1_slot2;
            zulu = 29;
            zulu = source[zulu];
            sequence = oscar.bind(report)(zulu);
            source = sequence.unparse;
            oscar = variable36.content;
            zulu = mike.id;
            golf = source.bind(sequence)(oscar, zulu);
 883:
            oscar = _closure1_slot5;
            zulu = oscar.useState;
            if(context) { _fun87362_ip = 925; continue _fun87362 }
 895:
            source = verify;
            if(!(entity != control)) { _fun87362_ip = 922; continue _fun87362 }
 902:
            sequence = control.trim;
            sequence = sequence.bind(control)();
            source = verify;
            if(!(tango !== sequence)) { _fun87362_ip = 922; continue _fun87362 }
 919:
            source = control;
 922:
            golf = source;
 925:
            oscar = zulu.bind(oscar)(golf);
            zulu = _closure1_slot4;
            zulu = zulu.bind(report)(oscar, vacuum);
            status = zulu[foxtrot];
            _closure2_slot17 = status;
            zulu = zulu[yankee];
            _closure2_slot18 = zulu;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            source = oscar[sizing];
            control = golf.bind(report)(source);
            source = control.useAvailableTags;
            control = source.bind(control)(kilo);
            oscar = oscar[sizing];
            golf = golf.bind(report)(oscar);
            oscar = golf.useAppliedTags;
            golf = oscar.bind(golf)(mike);
            _closure2_slot19 = golf;
            source = _closure1_slot5;
            sizing = source.useState;
            if(!context) { _fun87362_ip = 1027; continue _fun87362 }
 1020:
            oscar = golf;
            if(!(entity == control)) { _fun87362_ip = 1031; continue _fun87362 }
 1027:
            oscar = new Array(0);
 1031:
            oscar = sizing.bind(source)(oscar);
            sizing = _closure1_slot4;
            oscar = sizing.bind(report)(oscar, vacuum);
            variable40 = oscar[foxtrot];
            _closure2_slot20 = variable40;
            variable39 = oscar[yankee];
            source = _closure1_slot5;
            oscar = source.useState;
            oscar = oscar.bind(source)(entity);
            oscar = sizing.bind(report)(oscar, vacuum);
            variable41 = oscar[foxtrot];
            oscar = oscar[yankee];
            _closure2_slot21 = oscar;
            source = _closure1_slot5;
            oscar = source.useState;
            oscar = oscar.bind(source)(entity);
            sizing = sizing.bind(report)(oscar, vacuum);
            oscar = sizing[foxtrot];
            sizing = sizing[yankee];
            _closure2_slot22 = sizing;
            sizing = entity == backup;
            variable61 = undefined;
            if(sizing) { _fun87362_ip = 1137; continue _fun87362 }
 1131:
            variable61 = backup.colorString;
 1137:
            sizing = entity == backup;
            variable64 = undefined;
            if(sizing) { _fun87362_ip = 1152; continue _fun87362 }
 1146:
            variable64 = backup.nick;
 1152:
            if(!(entity == variable64)) { _fun87362_ip = 1187; continue _fun87362 }
 1156:
            sizing = _closure1_slot1;
            source = _closure1_slot2;
            backup = 30;
            backup = source[backup];
            sizing = sizing.bind(report)(backup);
            backup = sizing.getName;
            variable64 = backup.bind(sizing)(variable50);
 1187:
            sizing = _closure1_slot5;
            backup = sizing.useRef;
            variable59 = backup.bind(sizing)(entity);
            _closure2_slot23 = variable59;
            source = _closure1_slot1;
            backup = _closure1_slot2;
            sizing = 31;
            sizing = backup[sizing];
            sizing = source.bind(report)(sizing);
            sizing = sizing.bind(report)();
            control = sizing.top;
            _closure2_slot24 = control;
            sizing = _closure1_slot8;
            sizing = sizing.bind(report)();
            sizing = sizing.height;
            _closure2_slot25 = sizing;
            record = _closure1_slot5;
            config = record.useCallback;
            sequence = function() {
                _fun87369: for(var _fun87369_ip = 0; ; ) switch(_fun87369_ip) {
 0:
                    entity = _closure2_slot23;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun87369_ip = 28; continue _fun87369 }
 18:
                    entity = mike.focus;
                    entity = entity.bind(mike)();
 28:
                    entity = undefined;
                    return entity;
                }
            };
            source = new Array(0);
            variable42 = config.bind(record)(sequence, source);
            sequence = _closure1_slot0;
            source = 32;
            config = backup[source];
            record = sequence.bind(report)(config);
            config = record.useSharedValue;
            whiskey = config.bind(record)(foxtrot);
            _closure2_slot26 = whiskey;
            backup = backup[source];
            config = sequence.bind(report)(backup);
            sequence = config.useAnimatedScrollHandler;
            backup = function(argFoo) { // Original name: M
                entity = argFoo;
                entity = entity.contentOffset;
                zulu = entity.y;
                mike = _closure2_slot26;
                entity = mike.set;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            record = {};
            record['scrollTopValue'] = whiskey;
            backup['__closure'] = record;
            record = 16880842576840.0;
            backup['__workletHash'] = record;
            record = _closure1_slot36;
            backup['__initData'] = record;
            sequence = sequence.bind(config)(backup);
            whiskey = _closure1_slot5;
            record = whiskey.useCallback;
            config = new Array(2);
            config[0] = context;
            backup = kilo.id;
            config[1] = backup;
            backup = function(argFoo) {
                _fun87371: for(var _fun87371_ip = 0; ; ) switch(_fun87371_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure2_slot5;
                    if(mike) { _fun87371_ip = 65; continue _fun87371 }
 13:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 33;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.changeThreadSettings;
                    mike = _closure2_slot0;
                    tango = mike.id;
                    mike = {};
                    mike['name'] = zulu;
                    mike = report.bind(oscar)(tango, mike);
 65:
                    mike = _closure2_slot16;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            variable43 = record.bind(whiskey)(backup, config);
            whiskey = _closure1_slot5;
            record = whiskey.useCallback;
            config = new Array(1);
            config[0] = update;
            backup = function(argFoo) {
                mike = _closure2_slot3;
                entity = undefined;
                oscar = true;
                mike = mike.bind(entity)(oscar);
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 34;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.transitionToThread;
                zulu = {};
                zulu['navigationReplace'] = oscar;
                mike = _closure1_slot30;
                mike = mike.FORUM;
                zulu['source'] = mike;
                mike = argFoo;
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            record = record.bind(whiskey)(backup, config);
            _closure2_slot27 = record;
            equality = _closure1_slot5;
            whiskey = equality.useMemo;
            config = new Array(1);
            config[0] = variable40;
            backup = function() {
                entity = global;
                zulu = entity.Set;
                tango = _closure2_slot20;
                mike = tango.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                report = mike.bind(tango)(entity);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                oscar = mike;
                entity = new oscar[zulu](report, tango);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            whiskey = whiskey.bind(equality)(backup, config);
            _closure2_slot28 = whiskey;
            equality = _closure1_slot5;
            config = equality.useMemo;
            backup = new Array(1);
            backup[0] = golf;
            golf = function() {
                entity = global;
                zulu = entity.Set;
                tango = _closure2_slot19;
                mike = tango.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                report = mike.bind(tango)(entity);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                oscar = mike;
                entity = new oscar[zulu](report, tango);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            config = config.bind(equality)(golf, backup);
            _closure2_slot29 = config;
            variable38 = _closure1_slot5;
            equality = variable38.useCallback;
            golf = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun87379: for(var _fun87379_ip = 0; ; ) switch(_fun87379_ip) {
 0:
                            StartGenerator();
                            options = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun87379_ip = 381; continue _fun87379 }
 13:
                            mike = _closure2_slot1;
                            tango = null;
                            if(!(tango != mike)) { _fun87379_ip = 373; continue _fun87379 }
 29:
                            mike = _closure2_slot4;
                            mike = tango != mike;
                            if(!mike) { _fun87379_ip = 53; continue _fun87379 }
 40:
                            tango = _closure2_slot4;
                            tango = tango.content;
                            mike = tango !== options;
 53:
                            if(!mike) { _fun87379_ip = 118; continue _fun87379 }
 56:
                            report = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 35;
                            tango = tango[mike];
                            mike = undefined;
                            golf = report.bind(mike)(tango);
                            oscar = golf.editMessage;
                            mike = _closure2_slot1;
                            report = mike.id;
                            mike = _closure2_slot4;
                            tango = mike.id;
                            mike = {};
                            mike['content'] = options;
                            mike = oscar.bind(golf)(report, tango, mike);
 118:
                            oscar = _closure1_slot1;
                            report = _closure1_slot2;
                            mike = 36;
                            mike = report[mike];
                            report = undefined;
                            options = oscar.bind(report)(mike);
                            golf = options.isEqual;
                            oscar = _closure2_slot29;
                            mike = _closure2_slot28;
                            mike = golf.bind(options)(oscar, mike);
                            if(mike) { _fun87379_ip = 242; continue _fun87379 }
 166:
                            oscar = _closure1_slot1;
                            golf = _closure1_slot2;
                            mike = 37;
                            mike = golf[mike];
                            options = oscar.bind(report)(mike);
                            golf = options.updateForumPostTags;
                            mike = _closure2_slot1;
                            oscar = mike.id;
                            mike = global;
                            offset = mike.Array;
                            verify = offset.from;
                            mike = _closure2_slot28;
                            mike = verify.bind(offset)(mike);
                            mike = golf.bind(options)(oscar, mike);
                            SaveGenerator(address=233);
 231:
                            return mike;
 233:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(!oscar) { _fun87379_ip = 242; continue _fun87379 }
 239:
                            return mike;
 242:
                            mike = _closure2_slot1;
                            oscar = mike.name;
                            mike = _closure2_slot15;
                            if(!(oscar !== mike)) { _fun87379_ip = 320; continue _fun87379 }
 259:
                            oscar = _closure1_slot1;
                            golf = _closure1_slot2;
                            mike = 38;
                            mike = golf[mike];
                            options = oscar.bind(report)(mike);
                            golf = options.saveChannel;
                            mike = _closure2_slot1;
                            oscar = mike.id;
                            mike = {};
                            verify = _closure2_slot15;
                            mike['name'] = verify;
                            mike = golf.bind(options)(oscar, mike);
                            SaveGenerator(address=314);
 312:
                            return mike;
 314:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(oscar) { _fun87379_ip = 378; continue _fun87379 }
 320:
                            oscar = _closure1_slot15;
                            tango = oscar.getChannelId;
                            oscar = tango.bind(oscar)();
                            tango = _closure2_slot1;
                            tango = tango.id;
                            if(!(oscar === tango)) { _fun87379_ip = 360; continue _fun87379 }
 347:
                            oscar = _closure2_slot3;
                            tango = true;
                            tango = oscar.bind(report)(tango);
                            _fun87379_ip = 373; continue _fun87379;
 360:
                            tango = _closure2_slot27;
                            zulu = _closure2_slot1;
                            zulu = tango.bind(report)(zulu);
 373:
                            zulu = undefined;
                            return zulu;
 378:
                            return mike;
 381:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            backup = golf.bind(report)();
            golf = new Array(7);
            golf[0] = mike;
            golf[1] = variable36;
            golf[2] = config;
            golf[3] = whiskey;
            golf[4] = variable45;
            golf[5] = record;
            golf[6] = update;
            equality = equality.bind(variable38)(backup, golf);
            _closure2_slot30 = equality;
            backup = entity == quebec;
            golf = undefined;
            if(backup) { _fun87362_ip = 1596; continue _fun87362 }
 1591:
            golf = quebec.name;
 1596:
            golf = entity != golf;
            if(!golf) { _fun87362_ip = 1617; continue _fun87362 }
 1603:
            backup = quebec.name;
            backup = backup.length;
            golf = backup > foxtrot;
 1617:
            backup = status.trim;
            backup = backup.bind(status)();
            variable38 = papa.length;
            variable38 = variable38 > foxtrot;
            tango = tango === verify;
            if(tango) { _fun87362_ip = 1647; continue _fun87362 }
 1643:
            tango = backup !== verify;
 1647:
            if(!tango) { _fun87362_ip = 1668; continue _fun87362 }
 1650:
            verify = backup.length;
            verify = verify > foxtrot;
            if(verify) { _fun87362_ip = 1665; continue _fun87362 }
 1662:
            verify = variable38;
 1665:
            tango = verify;
 1668:
            variable38 = !context;
            if(!variable38) { _fun87362_ip = 1677; continue _fun87362 }
 1674:
            variable38 = golf;
 1677:
            if(!variable38) { _fun87362_ip = 1683; continue _fun87362 }
 1680:
            variable38 = tango;
 1683:
            if(variable38) { _fun87362_ip = 1775; continue _fun87362 }
 1686:
            tango = context;
            if(!tango) { _fun87362_ip = 1772; continue _fun87362 }
 1692:
            verify = entity == mike;
            golf = undefined;
            if(verify) { _fun87362_ip = 1706; continue _fun87362 }
 1701:
            golf = mike.name;
 1706:
            golf = variable45 !== golf;
            if(golf) { _fun87362_ip = 1731; continue _fun87362 }
 1713:
            variable44 = entity == variable36;
            verify = undefined;
            if(variable44) { _fun87362_ip = 1727; continue _fun87362 }
 1722:
            verify = variable36.content;
 1727:
            golf = backup !== verify;
 1731:
            if(golf) { _fun87362_ip = 1769; continue _fun87362 }
 1734:
            backup = _closure1_slot1;
            variable36 = _closure1_slot2;
            verify = 36;
            verify = variable36[verify];
            backup = backup.bind(report)(verify);
            verify = backup.isEqual;
            verify = verify.bind(backup)(config, whiskey);
            golf = !verify;
 1769:
            tango = golf;
 1772:
            variable38 = tango;
 1775:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            verify = 39;
            verify = golf[verify];
            config = tango.bind(report)(verify);
            backup = config.useCreateForumPost;
            verify = {};
            verify['parentChannel'] = kilo;
            verify['threadSettings'] = quebec;
            verify['appliedTags'] = whiskey;
            verify['onThreadCreated'] = record;
            whiskey = backup.bind(config)(verify);
            _closure2_slot31 = whiskey;
            record = _closure1_slot5;
            config = record.useCallback;
            verify = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun87383: for(var _fun87383_ip = 0; ; ) switch(_fun87383_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun87383_ip = 608; continue _fun87383 }
 10:
                            mike = argFoo;
                            offset = mike.stickerId;
                            zulu = undefined;
                            verify = undefined;
                            yankee = undefined;
                            options = undefined;
                            golf = undefined;
                            SaveGenerator(address=33);
 31:
                            return zulu;
 33:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun87383_ip = 605; continue _fun87383 }
 42:
                            backup = _closure2_slot0;
                            foxtrot = backup.hasFlag;
                            romeo = _closure1_slot24;
                            romeo = romeo.REQUIRE_TAG;
                            romeo = foxtrot.bind(backup)(romeo);
                            if(!romeo) { _fun87383_ip = 94; continue _fun87383 }
 76:
                            romeo = _closure2_slot20;
                            foxtrot = romeo.length;
                            romeo = 0;
                            if(!(romeo !== foxtrot)) { _fun87383_ip = 563; continue _fun87383 }
 94:
                            romeo = _closure2_slot5;
                            if(!romeo) { _fun87383_ip = 114; continue _fun87383 }
 101:
                            foxtrot = _closure2_slot1;
                            romeo = null;
                            if(!(romeo != foxtrot)) { _fun87383_ip = 602; continue _fun87383 }
 114:
                            foxtrot = _closure2_slot14;
                            romeo = true;
                            romeo = foxtrot.bind(zulu)(romeo);
                            foxtrot = _closure1_slot1;
                            backup = _closure1_slot2;
                            romeo = 29;
                            romeo = backup[romeo];
                            kilo = foxtrot.bind(zulu)(romeo);
                            backup = kilo.parse;
                            romeo = _closure2_slot5;
                            if(romeo) { _fun87383_ip = 164; continue _fun87383 }
 158:
                            foxtrot = _closure2_slot0;
                            _fun87383_ip = 168; continue _fun87383;
 164:
                            foxtrot = _closure2_slot1;
 168:
                            romeo = _closure2_slot17;
                            romeo = backup.bind(kilo)(foxtrot, romeo);
                            verify = romeo.content;
 183: // try_start_0 // try_start_2
                            romeo = _closure2_slot21;
                            kilo = null;
                            romeo = romeo.bind(zulu)(kilo);
                            romeo = _closure2_slot22;
                            romeo = romeo.bind(zulu)(kilo);
                            romeo = _closure2_slot5;
                            if(romeo) { _fun87383_ip = 278; continue _fun87383 }
 210:
                            backup = _closure2_slot31;
                            foxtrot = verify;
                            romeo = offset;
                            kilo = kilo != romeo;
                            romeo = undefined;
                            if(!kilo) { _fun87383_ip = 243; continue _fun87383 }
 229:
                            kilo = offset;
                            offset = new Array(1);
                            offset[0] = kilo;
                            romeo = offset;
 243:
                            offset = _closure2_slot9;
                            offset = backup.bind(zulu)(foxtrot, romeo, offset);
                            SaveGenerator(address=258);
 256:
                            return offset;
 258:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                            if(!romeo) { _fun87383_ip = 297; continue _fun87383 }
 264: // try_end0 // try_end2
                            foxtrot = _closure2_slot14;
                            romeo = false;
                            romeo = foxtrot.bind(zulu)(romeo);
                            return offset;
 278: // try_start_1 // try_start_3
                            offset = _closure2_slot30;
                            verify = offset.bind(zulu)(verify);
                            SaveGenerator(address=291);
 289:
                            return verify;
 291:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                            if(offset) { _fun87383_ip = 302; continue _fun87383 }
 297: // try_end1
                            _fun87383_ip = 535; continue _fun87383;
 302: // try_end3
                            romeo = _closure2_slot14;
                            offset = false;
                            offset = romeo.bind(zulu)(offset);
                            return verify;
 316: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=8);
                            oscar = verify;
                            offset = verify.body;
                            yankee = offset;
                            verify = null;
                            romeo = verify == offset;
                            offset = undefined;
                            if(romeo) { _fun87383_ip = 345; continue _fun87383 }
 340:
                            offset = yankee.code;
 345:
                            if(!(verify != offset)) { _fun87383_ip = 535; continue _fun87383 }
 352:
                            offset = oscar;
                            offset = offset.body;
                            options = offset;
                            yankee = verify == offset;
                            offset = undefined;
                            if(yankee) { _fun87383_ip = 377; continue _fun87383 }
 372:
                            offset = options.code;
 377:
                            options = _closure1_slot21;
                            options = options.AUTOMOD_TITLE_BLOCKED;
                            if(!(offset !== options)) { _fun87383_ip = 485; continue _fun87383 }
 391:
                            options = oscar;
                            options = options.body;
                            golf = options;
                            verify = verify == options;
                            options = undefined;
                            if(verify) { _fun87383_ip = 416; continue _fun87383 }
 411:
                            options = golf.code;
 416:
                            golf = _closure1_slot21;
                            golf = golf.AUTOMOD_MESSAGE_BLOCKED;
                            if(!(options === golf)) { _fun87383_ip = 535; continue _fun87383 }
 430:
                            options = _closure2_slot22;
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            golf = 40;
                            golf = offset[golf];
                            yankee = verify.bind(zulu)(golf);
                            offset = yankee.makeAutomodViolationError;
                            golf = oscar;
                            verify = golf.body;
                            golf = _closure2_slot0;
                            golf = offset.bind(yankee)(verify, golf);
                            golf = options.bind(zulu)(golf);
                            _fun87383_ip = 535; continue _fun87383;
 485:
                            golf = _closure2_slot21;
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            options = 40;
                            options = offset[options];
                            offset = verify.bind(zulu)(options);
                            verify = offset.makeAutomodViolationError;
                            options = oscar.body;
                            oscar = _closure2_slot0;
                            oscar = verify.bind(offset)(options, oscar);
                            oscar = golf.bind(zulu)(oscar);
 535: // try_end4
                            golf = _closure2_slot14;
                            oscar = false;
                            oscar = golf.bind(zulu)(oscar);
                            _fun87383_ip = 602; continue _fun87383;
 548: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=5);
                            options = _closure2_slot14;
                            golf = false;
                            golf = options.bind(zulu)(golf);
                            throw oscar;
 563:
                            report = _closure2_slot22;
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            tango = 40;
                            tango = golf[tango];
                            oscar = oscar.bind(zulu)(tango);
                            tango = oscar.makeEmptyTagsError;
                            tango = tango.bind(oscar)();
                            tango = report.bind(zulu)(tango);
 602:
                            return zulu;
 605:
                            return mike;
 608:
                            return entity;
                        }
                    };
                    mike = entity.next;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            backup = verify.bind(report)();
            verify = new Array(8);
            verify[0] = kilo;
            quebec = variable40.length;
            verify[1] = quebec;
            verify[2] = context;
            verify[3] = mike;
            verify[4] = status;
            verify[5] = equality;
            verify[6] = whiskey;
            verify[7] = papa;
            verify = config.bind(record)(backup, verify);
            _closure2_slot32 = verify;
            record = _closure1_slot5;
            config = record.useCallback;
            backup = new Array(6);
            backup[0] = kilo;
            backup[1] = sierra;
            backup[2] = target;
            backup[3] = papa;
            backup[4] = verify;
            backup[5] = status;
            verify = function(argFoo) {
                _fun87385: for(var _fun87385_ip = 0; ; ) switch(_fun87385_ip) {
 0:
                    entity = argFoo;
                    tango = entity.stickerId;
                    var _closure3_slot0 = tango;
                    entity = _closure2_slot17;
                    entity = entity.length;
                    mike = 0;
                    if(!(mike === entity)) { _fun87385_ip = 55; continue _fun87385 }
 33:
                    entity = _closure2_slot9;
                    entity = entity.length;
                    if(!(mike === entity)) { _fun87385_ip = 55; continue _fun87385 }
 46:
                    entity = null;
                    if(!(entity != tango)) { _fun87385_ip = 608; continue _fun87385 }
 55:
                    entity = _closure2_slot8;
                    if(!(!(entity > mike))) { _fun87385_ip = 608; continue _fun87385 }
 66:
                    entity = _closure2_slot17;
                    mike = entity.length;
                    entity = _closure2_slot13;
                    if(!(!(mike > entity))) { _fun87385_ip = 441; continue _fun87385 }
 86:
                    mike = _closure1_slot37;
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 43;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = report.bind(zulu)(entity);
                    entity = entity.RESTRICTIONS;
                    yankee = mike.bind(zulu)(entity);
                    mike = yankee.bind(zulu)();
                    entity = mike.done;
                    offset = null;
                    report = false;
                    if(entity) { _fun87385_ip = 420; continue _fun87385 }
 145:
                    entity = mike.value;
                    foxtrot = entity.check;
                    romeo = _closure2_slot17;
                    verify = _closure2_slot0;
                    entity = verify.getGuildId;
                    entity = entity.bind(verify)();
                    entity = offset != entity;
                    verify = foxtrot.bind(zulu)(romeo, verify, entity);
                    if(!(report === verify)) { _fun87385_ip = 209; continue _fun87385 }
 189:
                    romeo = yankee.bind(zulu)();
                    entity = romeo.done;
                    mike = romeo;
                    if(entity) { _fun87385_ip = 420; continue _fun87385 }
 207:
                    _fun87385_ip = 145; continue _fun87385;
 209:
                    mike = _closure1_slot1;
                    yankee = _closure1_slot2;
                    entity = 41;
                    entity = yankee[entity];
                    report = mike.bind(zulu)(entity);
                    mike = report.show;
                    entity = {};
                    offset = _closure1_slot0;
                    oscar = 42;
                    romeo = yankee[oscar];
                    romeo = offset.bind(zulu)(romeo);
                    backup = romeo.intl;
                    foxtrot = backup.string;
                    romeo = yankee[oscar];
                    romeo = offset.bind(zulu)(romeo);
                    romeo = romeo.t;
                    romeo = romeo.mY3Y39;
                    romeo = foxtrot.bind(backup)(romeo);
                    entity['title'] = romeo;
                    verify = verify.body;
                    entity['body'] = verify;
                    verify = yankee[oscar];
                    verify = offset.bind(zulu)(verify);
                    foxtrot = verify.intl;
                    romeo = foxtrot.string;
                    verify = yankee[oscar];
                    verify = offset.bind(zulu)(verify);
                    verify = verify.t;
                    verify = verify.KJnHq6;
                    verify = romeo.bind(foxtrot)(verify);
                    entity['confirmText'] = verify;
                    golf = function() { // Original name: onConfirm
                        zulu = _closure2_slot32;
                        mike = {};
                        entity = _closure3_slot0;
                        mike['stickerId'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity['onConfirm'] = golf;
                    golf = yankee[oscar];
                    golf = offset.bind(zulu)(golf);
                    verify = golf.intl;
                    golf = verify.string;
                    oscar = yankee[oscar];
                    oscar = offset.bind(zulu)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.fsBWmZ;
                    oscar = golf.bind(verify)(oscar);
                    entity['cancelText'] = oscar;
                    entity = mike.bind(report)(entity);
                    entity = undefined;
                    return entity;
 420:
                    mike = _closure2_slot32;
                    entity = {};
                    entity['stickerId'] = tango;
                    entity = mike.bind(zulu)(entity);
                    _fun87385_ip = 608; continue _fun87385;
 441:
                    mike = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 41;
                    entity = offset[entity];
                    verify = undefined;
                    zulu = mike.bind(verify)(entity);
                    mike = zulu.show;
                    entity = {};
                    report = _closure1_slot0;
                    tango = 42;
                    oscar = offset[tango];
                    oscar = report.bind(verify)(oscar);
                    yankee = oscar.intl;
                    golf = yankee.string;
                    oscar = offset[tango];
                    oscar = report.bind(verify)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.l8rYLi;
                    oscar = golf.bind(yankee)(oscar);
                    entity['title'] = oscar;
                    oscar = offset[tango];
                    oscar = report.bind(verify)(oscar);
                    golf = oscar.intl;
                    oscar = golf.formatToPlainString;
                    tango = offset[tango];
                    tango = report.bind(verify)(tango);
                    tango = tango.t;
                    report = tango.FfjF19;
                    tango = {};
                    verify = _closure2_slot17;
                    verify = verify.length;
                    tango['currentLength'] = verify;
                    options = _closure2_slot13;
                    tango['maxLength'] = options;
                    tango = oscar.bind(golf)(report, tango);
                    entity['body'] = tango;
                    entity = mike.bind(zulu)(entity);
 608:
                    entity = undefined;
                    return entity;
                }
            };
            variable36 = config.bind(record)(verify, backup);
            _closure2_slot33 = variable36;
            config = _closure1_slot5;
            backup = config.useCallback;
            verify = new Array(2);
            verify[0] = zulu;
            zulu = kilo.id;
            verify[1] = zulu;
            zulu = function(argFoo) {
                zulu = argFoo;
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 33;
                mike = mike[entity];
                entity = undefined;
                golf = report.bind(entity)(mike);
                oscar = golf.changeDraft;
                report = _closure2_slot0;
                report = report.id;
                tango = _closure1_slot12;
                tango = tango.ChannelMessage;
                tango = oscar.bind(golf)(report, zulu, tango);
                mike = _closure2_slot18;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            variable53 = backup.bind(config)(zulu, verify);
            zulu = 44;
            zulu = golf[zulu];
            backup = tango.bind(report)(zulu);
            verify = backup.useFocusHandlers;
            zulu = {};
            zulu['titleInput'] = variable48;
            zulu['contentInput'] = variable59;
            zulu = verify.bind(backup)(zulu);
            verify = zulu.setFocusedInput;
            _closure2_slot34 = verify;
            quebec = zulu.focusLastInput;
            _closure2_slot35 = quebec;
            equality = zulu.blurLastInput;
            _closure2_slot36 = equality;
            whiskey = zulu.focusedInput;
            verify = zulu.openingKeyboard;
            config = _closure1_slot5;
            backup = config.useState;
            zulu = {'start': 0, 'end': null};
            backup = backup.bind(config)(zulu);
            zulu = _closure1_slot4;
            zulu = zulu.bind(report)(backup, vacuum);
            target = zulu[foxtrot];
            zulu = zulu[yankee];
            _closure2_slot37 = zulu;
            backup = _closure1_slot5;
            foxtrot = backup.useCallback;
            yankee = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                tango = entity.selection;
                zulu = _closure2_slot37;
                mike = {};
                report = mike;
                entity = copyDataProperties(report, tango);
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = new Array(0);
            variable52 = foxtrot.bind(backup)(yankee, zulu);
            backup = _closure1_slot5;
            foxtrot = backup.useCallback;
            yankee = function(argFoo) {
                _fun87389: for(var _fun87389_ip = 0; ; ) switch(_fun87389_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.start;
                    var _closure3_slot0 = zulu;
                    entity = entity.end;
                    var _closure3_slot1 = entity;
                    entity = undefined;
                    var _closure3_slot2 = entity;
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 45;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isAndroid;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun87389_ip = 106; continue _fun87389 }
 64:
                    zulu = _closure2_slot23;
                    tango = zulu.current;
                    _closure3_slot2 = tango;
                    zulu = null;
                    if(!(zulu != tango)) { _fun87389_ip = 106; continue _fun87389 }
 86:
                    zulu = global;
                    zulu = zulu.setTimeout;
                    mike = function() {
                        _fun87390: for(var _fun87390_ip = 0; ; ) switch(_fun87390_ip) {
 0:
                            tango = _closure3_slot2;
                            zulu = tango.setSelection;
                            mike = _closure3_slot0;
                            oscar = _closure3_slot1;
                            entity = null;
                            if(!(entity == oscar)) { _fun87390_ip = 33; continue _fun87390 }
 27:
                            entity = _closure3_slot0;
                            _fun87390_ip = 37; continue _fun87390;
 33:
                            entity = _closure3_slot1;
 37:
                            entity = zulu.bind(tango)(mike, entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(entity)(mike);
 106:
                    return entity;
                }
            };
            zulu = new Array(0);
            config = foxtrot.bind(backup)(yankee, zulu);
            zulu = 46;
            yankee = golf[zulu];
            backup = tango.bind(report)(yankee);
            foxtrot = backup.usePressEmojiHandler;
            yankee = {};
            yankee['selection'] = target;
            yankee['draftContent'] = status;
            yankee['handleTextChange'] = variable53;
            yankee['focusTextInput'] = variable42;
            yankee['setSelection'] = config;
            backup = foxtrot.bind(backup)(yankee);
            zulu = golf[zulu];
            foxtrot = tango.bind(report)(zulu);
            yankee = foxtrot.usePressGIFHandler;
            zulu = {};
            zulu['selection'] = target;
            zulu['draftContent'] = status;
            zulu['handleTextChange'] = variable53;
            zulu['focusTextInput'] = variable42;
            zulu['setSelection'] = config;
            foxtrot = yankee.bind(foxtrot)(zulu);
            zulu = 47;
            zulu = golf[zulu];
            vacuum = tango.bind(report)(zulu);
            yankee = vacuum.usePressHorizontalAutocompleteItemHandler;
            zulu = {};
            zulu['draftContent'] = status;
            zulu['handleTextChange'] = variable53;
            zulu['setSelection'] = config;
            sierra = yankee.bind(vacuum)(zulu);
            zulu = 48;
            zulu = golf[zulu];
            golf = tango.bind(report)(zulu);
            tango = golf.useBackspaceHandler;
            zulu = {};
            zulu['selection'] = target;
            zulu['draftContent'] = status;
            zulu['handleTextChange'] = variable53;
            yankee = tango.bind(golf)(zulu);
            vacuum = _closure1_slot5;
            golf = vacuum.useMemo;
            tango = new Array(4);
            tango[0] = output;
            tango[1] = offset;
            tango[2] = control;
            tango[3] = sizing;
            zulu = function() {
                _fun87391: for(var _fun87391_ip = 0; ; ) switch(_fun87391_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 45;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.isAndroid;
                    entity = entity.bind(mike)();
                    if(entity) { _fun87391_ip = 76; continue _fun87391 }
 37:
                    entity = {};
                    tango = _closure2_slot25;
                    zulu = _closure2_slot11;
                    tango = tango - zulu;
                    zulu = _closure2_slot12;
                    zulu = tango - zulu;
                    mike = _closure2_slot24;
                    mike = zulu - mike;
                    entity['height'] = mike;
                    _fun87391_ip = 86; continue _fun87391;
 76:
                    entity = {'flex': 1, 'zIndex': 1};
 86:
                    return entity;
                }
            };
            vacuum = golf.bind(vacuum)(zulu, tango);
            papa = kilo;
            if(!context) { _fun87362_ip = 2399; continue _fun87362 }
 2396:
            papa = mike;
 2399:
            _closure2_slot38 = papa;
            if(!(entity != papa)) { _fun87362_ip = 4187; continue _fun87362 }
 2410:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 40;
            golf = tango[mike];
            record = zulu.bind(report)(golf);
            config = record.renderError;
            golf = {};
            golf['content'] = variable45;
            variable44 = config.bind(record)(variable41, golf);
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.renderError;
            mike = {};
            mike['content'] = status;
            mike['tags'] = variable40;
            variable58 = zulu.bind(tango)(oscar, mike);
            mike = papa.isMediaChannel;
            mike = mike.bind(papa)();
            if(mike) { _fun87362_ip = 2499; continue _fun87362 }
 2493:
            config = new Array(0);
            _fun87362_ip = 2542; continue _fun87362;
 2499:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 49;
            mike = tango[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.DismissibleContent;
            zulu = mike.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
            mike = new Array(1);
            mike[0] = zulu;
            config = mike;
 2542:
            mike = function() { // Original name: MediaPostMultipleThumbnailActionSheetImporter
                zulu = _closure1_slot0;
                entity = _closure1_slot2;
                mike = 51;
                mike = entity[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = 50;
                mike = entity[mike];
                entity = entity.paths;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            _closure2_slot39 = mike;
            tango = _closure1_slot32;
            zulu = _closure1_slot9;
            mike = {};
            golf = lima.container;
            oscar = new Array(2);
            oscar[0] = golf;
            golf = {};
            golf['paddingTop'] = control;
            golf['paddingBottom'] = offset;
            oscar[1] = golf;
            mike['style'] = oscar;
            offset = _closure1_slot31;
            control = _closure1_slot1;
            variable47 = _closure1_slot2;
            oscar = 52;
            oscar = variable47[oscar];
            golf = control.bind(report)(oscar);
            oscar = {};
            oscar['channel'] = papa;
            record = _closure1_slot34;
            oscar['height'] = record;
            oscar['onClose'] = update;
            update = function() { // Original name: onGuidelinesPress
                mike = _closure2_slot36;
                entity = undefined;
                mike = mike.bind(entity)();
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 53;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.openForumGuidelinesActionSheet;
                mike = {};
                report = _closure2_slot0;
                mike['channel'] = report;
                report = function() { // Original name: onClose
                    mike = _closure2_slot35;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike['onClose'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            oscar['onGuidelinesPress'] = update;
            oscar['submitting'] = variable37;
            oscar['title'] = variable45;
            golf = offset.bind(report)(golf, oscar);
            oscar = new Array(3);
            oscar[0] = golf;
            update = _closure1_slot32;
            golf = 54;
            golf = variable47[golf];
            offset = control.bind(report)(golf);
            golf = {};
            golf['style'] = vacuum;
            vacuum = _closure1_slot32;
            source = variable47[source];
            source = control.bind(report)(source);
            control = source.ScrollView;
            source = {'onScroll': null, 'scrollEventThrottle': 16, 'keyboardShouldPersistTaps': 'always', 'nestedScrollEnabled': false, 'contentContainerStyle': null, 'keyboardDismissMode': 'on-drag'};
            source['onScroll'] = sequence;
            sequence = lima.scrollViewContentContainer;
            source['contentContainerStyle'] = sequence;
            variable41 = _closure1_slot31;
            variable46 = _closure1_slot0;
            sequence = 55;
            sequence = variable47[sequence];
            sequence = variable46.bind(report)(sequence);
            record = sequence.FormInput;
            sequence = {};
            sequence['ref'] = variable48;
            variable48 = lima.titleInput;
            sequence['style'] = variable48;
            variable48 = lima.titleInputText;
            sequence['inputTextStyle'] = variable48;
            sequence['showTopContainer'] = variable56;
            variable55 = 42;
            variable48 = variable47[variable55];
            variable48 = variable46.bind(report)(variable48);
            variable51 = variable48.intl;
            variable49 = variable51.string;
            variable48 = variable47[variable55];
            variable48 = variable46.bind(report)(variable48);
            variable48 = variable48.t;
            variable48 = variable48.lU4dDQ;
            variable48 = variable49.bind(variable51)(variable48);
            sequence['placeholder'] = variable48;
            sequence['placeholderTextColor'] = variable54;
            variable57 = true;
            sequence['large'] = variable57;
            sequence['multiline'] = variable57;
            sequence['value'] = variable45;
            variable45 = 56;
            variable45 = variable47[variable45];
            variable45 = variable46.bind(report)(variable45);
            variable45 = variable45.ClearButtonVisibility;
            variable45 = variable45.NEVER;
            sequence['clearButtonVisibility'] = variable45;
            variable45 = _closure1_slot22;
            sequence['maxLength'] = variable45;
            sequence['onChange'] = variable43;
            variable43 = function() { // Original name: onBlur
                _fun87395: for(var _fun87395_ip = 0; ; ) switch(_fun87395_ip) {
 0:
                    mike = _closure2_slot5;
                    if(mike) { _fun87395_ip = 181; continue _fun87395 }
 13:
                    mike = _closure2_slot2;
                    oscar = null;
                    tango = oscar == mike;
                    zulu = undefined;
                    mike = undefined;
                    if(tango) { _fun87395_ip = 39; continue _fun87395 }
 30:
                    tango = _closure2_slot2;
                    mike = tango.name;
 39:
                    if(!(oscar != mike)) { _fun87395_ip = 181; continue _fun87395 }
 46:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 57;
                    mike = golf[mike];
                    golf = report.bind(zulu)(mike);
                    mike = _closure2_slot2;
                    mike = oscar == mike;
                    report = undefined;
                    if(mike) { _fun87395_ip = 91; continue _fun87395 }
 82:
                    mike = _closure2_slot2;
                    report = mike.name;
 91:
                    mike = true;
                    mike = golf.bind(zulu)(report, mike);
                    report = _closure2_slot2;
                    oscar = oscar == report;
                    report = undefined;
                    if(oscar) { _fun87395_ip = 121; continue _fun87395 }
 112:
                    oscar = _closure2_slot2;
                    report = oscar.name;
 121:
                    if(!(mike !== report)) { _fun87395_ip = 181; continue _fun87395 }
 125:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 33;
                    tango = oscar[tango];
                    golf = report.bind(zulu)(tango);
                    oscar = golf.changeThreadSettings;
                    tango = _closure2_slot0;
                    report = tango.id;
                    tango = {};
                    tango['name'] = mike;
                    tango = oscar.bind(golf)(report, tango);
                    entity = _closure2_slot16;
                    entity = entity.bind(zulu)(mike);
 181:
                    entity = undefined;
                    return entity;
                }
            };
            sequence['onBlur'] = variable43;
            variable43 = function() { // Original name: onFocus
                _fun87396: for(var _fun87396_ip = 0; ; ) switch(_fun87396_ip) {
 0:
                    tango = _closure2_slot10;
                    zulu = _closure1_slot25;
                    zulu = zulu.MEDIA;
                    zulu = tango !== zulu;
                    if(!zulu) { _fun87396_ip = 45; continue _fun87396 }
 27:
                    report = _closure2_slot10;
                    tango = _closure1_slot25;
                    tango = tango.EXPRESSION;
                    zulu = report !== tango;
 45:
                    if(zulu) { _fun87396_ip = 105; continue _fun87396 }
 48:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 58;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.toggleKeyboard;
                    zulu = {};
                    oscar = _closure1_slot25;
                    oscar = oscar.SYSTEM;
                    zulu['keyboardType'] = oscar;
                    oscar = true;
                    zulu['keyboardWillOpen'] = oscar;
                    zulu = tango.bind(report)(zulu);
 105:
                    zulu = _closure2_slot34;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 44;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    mike = mike.PostComposerInputs;
                    mike = mike.TITLE;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            sequence['onFocus'] = variable43;
            sequence['autoFocus'] = variable57;
            sequence['autoCorrect'] = variable57;
            variable43 = 'none';
            sequence['textContentType'] = variable43;
            variable43 = 'next';
            sequence['returnKeyType'] = variable43;
            sequence['onNext'] = variable42;
            record = variable41.bind(report)(record, sequence);
            sequence = new Array(3);
            sequence[0] = record;
            variable41 = entity != variable44;
            record = null;
            if(!variable41) { _fun87362_ip = 3047; continue _fun87362 }
 3001:
            variable43 = _closure1_slot31;
            variable42 = _closure1_slot1;
            variable45 = _closure1_slot2;
            variable41 = 59;
            variable41 = variable45[variable41];
            variable42 = variable42.bind(report)(variable41);
            variable41 = {};
            variable45 = lima.nameError;
            variable41['style'] = variable45;
            variable41['children'] = variable44;
            record = variable43.bind(report)(variable42, variable41);
 3047:
            sequence[1] = record;
            variable43 = _closure1_slot32;
            variable42 = _closure1_slot9;
            variable41 = {};
            record = lima.editor;
            variable41['style'] = record;
            record = entity != variable50;
            if(!record) { _fun87362_ip = 3283; continue _fun87362 }
 3081:
            variable46 = _closure1_slot31;
            variable45 = _closure1_slot7;
            variable44 = {};
            variable47 = lima.avatarContainer;
            variable44['style'] = variable47;
            variable47 = function() { // Original name: onPress
                _fun87397: for(var _fun87397_ip = 0; ; ) switch(_fun87397_ip) {
 0:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 60;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    report = _closure2_slot7;
                    report = report.id;
                    entity['userId'] = report;
                    report = _closure2_slot38;
                    report = report.id;
                    entity['channelId'] = report;
                    oscar = _closure2_slot4;
                    report = null;
                    oscar = report == oscar;
                    report = undefined;
                    if(oscar) { _fun87397_ip = 80; continue _fun87397 }
 71:
                    oscar = _closure2_slot4;
                    report = oscar.id;
 80:
                    entity['messageId'] = report;
                    tango = _closure2_slot6;
                    entity['sourceAnalyticsLocations'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            variable44['onPress'] = variable47;
            variable49 = _closure1_slot31;
            variable48 = _closure1_slot1;
            variable51 = _closure1_slot2;
            variable47 = 61;
            variable47 = variable51[variable47];
            variable48 = variable48.bind(report)(variable47);
            variable47 = {};
            variable47['animate'] = variable57;
            variable51 = lima.avatar;
            variable47['style'] = variable51;
            variable47['user'] = variable50;
            variable51 = entity == kilo;
            variable60 = undefined;
            if(variable51) { _fun87362_ip = 3176; continue _fun87362 }
 3166:
            variable51 = kilo.getGuildId;
            variable60 = variable51.bind(kilo)();
 3176:
            variable62 = entity != variable60;
            variable51 = undefined;
            if(!variable62) { _fun87362_ip = 3188; continue _fun87362 }
 3185:
            variable51 = variable60;
 3188:
            variable47['guildId'] = variable51;
            variable50 = variable50.avatarDecoration;
            variable47['avatarDecoration'] = variable50;
            variable51 = _closure1_slot0;
            variable50 = _closure1_slot2;
            variable60 = variable50[variable55];
            variable60 = variable51.bind(report)(variable60);
            variable62 = variable60.intl;
            variable60 = variable62.formatToPlainString;
            variable50 = variable50[variable55];
            variable50 = variable51.bind(report)(variable50);
            variable50 = variable50.t;
            variable51 = variable50.LvU3np;
            variable50 = {};
            variable50['nickname'] = variable64;
            variable50 = variable60.bind(variable62)(variable51, variable50);
            variable47['accessibilityLabel'] = variable50;
            variable47 = variable49.bind(report)(variable48, variable47);
            variable44['children'] = variable47;
            record = variable46.bind(report)(variable45, variable44);
 3283:
            variable44 = new Array(2);
            variable44[0] = record;
            variable47 = _closure1_slot32;
            variable46 = _closure1_slot9;
            variable45 = {};
            record = lima.editorBody;
            variable45['style'] = record;
            variable49 = _closure1_slot32;
            variable48 = _closure1_slot9;
            record = {};
            variable50 = lima.usernameToChannel;
            record['style'] = variable50;
            variable63 = _closure1_slot0;
            variable62 = _closure1_slot2;
            variable50 = variable62[variable55];
            variable50 = variable63.bind(report)(variable50);
            variable65 = variable50.intl;
            variable60 = variable65.formatToPlainString;
            variable50 = variable62[variable55];
            variable50 = variable63.bind(report)(variable50);
            variable50 = variable50.t;
            variable51 = variable50.QicUf3;
            variable50 = {};
            variable50['nickname'] = variable64;
            variable66 = papa.name;
            variable50['channelName'] = variable66;
            variable50 = variable60.bind(variable65)(variable51, variable50);
            record['accessibilityLabel'] = variable50;
            variable60 = _closure1_slot31;
            variable50 = 62;
            variable50 = variable62[variable50];
            variable50 = variable63.bind(report)(variable50);
            variable51 = variable50.RoleLabel;
            variable50 = {};
            variable50['name'] = variable64;
            variable50['color'] = variable61;
            variable51 = variable60.bind(report)(variable51, variable50);
            variable50 = new Array(2);
            variable50[0] = variable51;
            variable61 = _closure1_slot32;
            variable51 = 63;
            variable51 = variable62[variable51];
            variable51 = variable63.bind(report)(variable51);
            variable60 = variable51.Text;
            variable51 = {'color': 'header-secondary', 'variant': 'text-xs/medium'};
            variable64 = lima.channelName;
            variable51['style'] = variable64;
            variable64 = variable62[variable55];
            variable64 = variable63.bind(report)(variable64);
            variable65 = variable64.intl;
            variable64 = variable65.format;
            variable62 = variable62[variable55];
            variable62 = variable63.bind(report)(variable62);
            variable62 = variable62.t;
            variable63 = variable62.6Y1Ken;
            variable62 = {};
            variable66 = papa.name;
            variable62['channelName'] = variable66;
            variable63 = variable64.bind(variable65)(variable63, variable62);
            variable62 = [' '];
            variable62[1] = variable63;
            variable51['children'] = variable62;
            variable51 = variable61.bind(report)(variable60, variable51);
            variable50[1] = variable51;
            record['children'] = variable50;
            record = variable49.bind(report)(variable48, record);
            variable48 = new Array(3);
            variable48[0] = record;
            variable49 = entity != variable58;
            record = null;
            if(!variable49) { _fun87362_ip = 3654; continue _fun87362 }
 3608:
            variable51 = _closure1_slot31;
            variable50 = _closure1_slot1;
            variable60 = _closure1_slot2;
            variable49 = 59;
            variable49 = variable60[variable49];
            variable50 = variable50.bind(report)(variable49);
            variable49 = {};
            variable60 = lima.messageError;
            variable49['style'] = variable60;
            variable49['children'] = variable58;
            record = variable51.bind(report)(variable50, variable49);
 3654:
            variable48[1] = record;
            variable51 = _closure1_slot31;
            variable58 = _closure1_slot0;
            record = _closure1_slot2;
            variable49 = 64;
            variable49 = record[variable49];
            variable49 = variable58.bind(report)(variable49);
            variable50 = variable49.TextInput;
            variable49 = {};
            variable49['ref'] = variable59;
            variable59 = lima.contentInput;
            variable49['style'] = variable59;
            variable49['multiline'] = variable57;
            variable49['scrollEnabled'] = variable56;
            variable56 = record[variable55];
            variable56 = variable58.bind(report)(variable56);
            variable57 = variable56.intl;
            variable56 = variable57.string;
            variable55 = record[variable55];
            variable55 = variable58.bind(report)(variable55);
            variable55 = variable55.t;
            variable55 = variable55.8IPnv7;
            variable55 = variable56.bind(variable57)(variable55);
            variable49['placeholder'] = variable55;
            variable49['placeholderTextColor'] = variable54;
            variable49['value'] = status;
            variable49['onChangeText'] = variable53;
            variable49['onSelectionChange'] = variable52;
            variable52 = function() { // Original name: onFocus
                _fun87398: for(var _fun87398_ip = 0; ; ) switch(_fun87398_ip) {
 0:
                    tango = _closure2_slot10;
                    zulu = _closure1_slot25;
                    zulu = zulu.MEDIA;
                    if(!(tango === zulu)) { _fun87398_ip = 81; continue _fun87398 }
 24:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 58;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.toggleKeyboard;
                    zulu = {};
                    oscar = _closure1_slot25;
                    oscar = oscar.SYSTEM;
                    zulu['keyboardType'] = oscar;
                    oscar = true;
                    zulu['keyboardWillOpen'] = oscar;
                    zulu = tango.bind(report)(zulu);
 81:
                    zulu = _closure2_slot34;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 44;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    mike = mike.PostComposerInputs;
                    mike = mike.CONTENT;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            variable49['onFocus'] = variable52;
            variable52 = _closure1_slot25;
            variable52 = variable52.EXPRESSION;
            variable52 = echo !== variable52;
            variable49['showSoftInputOnFocus'] = variable52;
            variable49 = variable51.bind(report)(variable50, variable49);
            variable48[2] = variable49;
            variable45['children'] = variable48;
            variable45 = variable47.bind(report)(variable46, variable45);
            variable44[1] = variable45;
            variable41['children'] = variable44;
            variable41 = variable43.bind(report)(variable42, variable41);
            sequence[2] = variable41;
            source['children'] = sequence;
            control = vacuum.bind(report)(control, source);
            source = new Array(5);
            source[0] = control;
            sequence = _closure1_slot31;
            vacuum = _closure1_slot40;
            control = {};
            control['tags'] = variable40;
            control = sequence.bind(report)(vacuum, control);
            source[1] = control;
            sequence = _closure1_slot31;
            vacuum = _closure1_slot41;
            control = {};
            control['channel'] = kilo;
            control['tags'] = variable40;
            control['setTags'] = variable39;
            control['canPost'] = variable38;
            control['submitting'] = variable37;
            control['onSubmit'] = variable36;
            control['focusLastInput'] = quebec;
            control['blurLastInput'] = equality;
            control['lastInput'] = whiskey;
            control['isEdit'] = context;
            control = sequence.bind(report)(vacuum, control);
            source[2] = control;
            context = _closure1_slot31;
            vacuum = _closure1_slot1;
            control = 65;
            control = record[control];
            sequence = vacuum.bind(report)(control);
            control = {};
            lima = lima.horizontalAutocomplete;
            control['style'] = lima;
            control['onPressAutocompleteItem'] = sierra;
            control['text'] = status;
            control['selection'] = target;
            control['channel'] = papa;
            control = context.bind(report)(sequence, control);
            source[3] = control;
            sequence = _closure1_slot31;
            control = 66;
            control = record[control];
            vacuum = vacuum.bind(report)(control);
            control = {};
            control['contentTypes'] = config;
            config = function(argFoo) { // Original name: children
                _fun87399: for(var _fun87399_ip = 0; ; ) switch(_fun87399_ip) {
 0:
                    entity = argFoo;
                    tango = entity.visibleContent;
                    entity = entity.markAsDismissed;
                    var _closure3_slot0 = entity;
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 49;
                    entity = report[entity];
                    report = undefined;
                    entity = zulu.bind(report)(entity);
                    entity = entity.DismissibleContent;
                    zulu = entity.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
                    entity = null;
                    if(!(tango === zulu)) { _fun87399_ip = 137; continue _fun87399 }
 64:
                    tango = _closure1_slot31;
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 67;
                    mike = golf[mike];
                    mike = zulu.bind(report)(mike);
                    zulu = mike.DismissibleActionSheet;
                    mike = {};
                    oscar = function() { // Original name: markAsDismissed
                        zulu = _closure3_slot0;
                        entity = _closure1_slot26;
                        mike = entity.UNKNOWN;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike['markAsDismissed'] = oscar;
                    oscar = 'ThumbnailBottomSheet';
                    mike['actionSheetKey'] = oscar;
                    oscar = _closure2_slot39;
                    mike['importer'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 137:
                    return entity;
                }
            };
            control['children'] = config;
            control = sequence.bind(report)(vacuum, control);
            source[4] = control;
            golf['children'] = source;
            golf = update.bind(report)(offset, golf);
            oscar[1] = golf;
            golf = _closure1_slot25;
            golf = golf.SYSTEM;
            golf = echo !== golf;
            if(!golf) { _fun87362_ip = 4101; continue _fun87362 }
 4098:
            golf = !verify;
 4101:
            if(!golf) { _fun87362_ip = 4171; continue _fun87362 }
 4104:
            offset = _closure1_slot31;
            verify = _closure1_slot39;
            options = {};
            options['keyboardType'] = echo;
            options['expressionType'] = result;
            options['currentKeyboardHeight'] = output;
            options['windowHeight'] = sizing;
            options['channel'] = kilo;
            options['onPressEmoji'] = backup;
            options['onPressGIF'] = foxtrot;
            romeo = function(argFoo) { // Original name: onPressSticker
                zulu = _closure2_slot33;
                mike = {};
                entity = argFoo;
                entity = entity.id;
                mike['stickerId'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            options['onPressSticker'] = romeo;
            options['onBackspace'] = yankee;
            golf = offset.bind(report)(verify, options);
 4171:
            oscar[2] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 4187:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['KeyboardArea'] = mike;
    return entity;
})();