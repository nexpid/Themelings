// app/modules/forums/native/composer/ForumComposer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = golfie;
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
            verify = _closure1_slot38;
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
            golfie = _closure1_slot38;
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
    var _closure1_slot37 = entity;
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
    var _closure1_slot38 = entity;
    michal = function(argFoo) { // Original name: KeyboardArea
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            verify = michal.keyboardType;
            echoed = michal.expressionType;
            offset = michal.currentKeyboardHeight;
            var _closure2_slot0 = offset;
            update = michal.channel;
            result = michal.onPressEmoji;
            output = michal.onPressGIF;
            sizing = michal.onPressSticker;
            kiloes = michal.onBackspace;
            option = michal.windowHeight;
            var _closure2_slot1 = option;
            michal = _closure1_slot35;
            tangon = undefined;
            foxtra = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 68;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useKeyboardActionSheetHeight;
            michal = michal.bind(zuuluu)();
            golfie = michal.minimum;
            var _closure2_slot2 = golfie;
            oscard = _closure1_slot5;
            zuuluu = oscard.useMemo;
            michal = new Array(3);
            michal[0] = offset;
            michal[1] = option;
            michal[2] = golfie;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 45;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.isAndroid;
                    entity = entity.bind(michal)();
                    if(entity) { _fun00010_ip = 77; continue _fun00009 }
 37:
                    entity = {'position': 'absolute', 'left': 0, 'right': 0};
                    zuuluu = _closure2_slot0;
                    entity['height'] = zuuluu;
                    entity['minHeight'] = zuuluu;
                    michal = _closure2_slot1;
                    michal = michal - zuuluu;
                    entity['top'] = michal;
                    _fun00010_ip = 101; continue _fun00009;
 77:
                    michal = {};
                    zuuluu = 1;
                    michal['flex'] = zuuluu;
                    zuuluu = _closure2_slot2;
                    michal['maxHeight'] = zuuluu;
                    entity = michal;
 101:
                    return entity;
                }
            };
            offset = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot31;
            michal = _closure1_slot1;
            entity = 69;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Provider;
            entity = {};
            report = false;
            entity['value'] = report;
            golfie = _closure1_slot31;
            oscard = _closure1_slot9;
            report = {};
            yankee = foxtra.keyboardArea;
            option = new Array(2);
            option[0] = yankee;
            option[1] = offset;
            report['style'] = option;
            option = _closure1_slot25;
            option = option.EXPRESSION;
            option = verify === option;
            if(!option) { _fun00008_ip = 331; continue _fun00007 }
 240:
            yankee = _closure1_slot31;
            offset = _closure1_slot9;
            verify = {};
            foxtra = foxtra.emojiPicker;
            verify['style'] = foxtra;
            backup = _closure1_slot31;
            foxtra = _closure1_slot1;
            source = _closure1_slot2;
            romeon = 70;
            romeon = source[romeon];
            foxtra = foxtra.bind(tangon)(romeon);
            romeon = {};
            romeon['channel'] = update;
            romeon['expressionType'] = echoed;
            romeon['onPressEmoji'] = result;
            romeon['onPressGIF'] = output;
            romeon['onPressSticker'] = sizing;
            romeon['onBackspace'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            verify['children'] = romeon;
            option = yankee.bind(tangon)(offset, verify);
 331:
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot39 = michal;
    entity = function(argFoo) { // Original name: Tags
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            verify = entity.tags;
            entity = _closure1_slot35;
            report = undefined;
            offset = entity.bind(report)();
            zuuluu = verify.length;
            michal = 0;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00012_ip = 186; continue _fun00011 }
 38:
            tangon = _closure1_slot32;
            zuuluu = _closure1_slot9;
            michal = {};
            oscard = offset.tags;
            michal['style'] = oscard;
            option = _closure1_slot31;
            kiloes = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 71;
            oscard = foxtra[yankee];
            golfie = kiloes.bind(report)(oscard);
            oscard = {};
            backup = 72;
            backup = foxtra[backup];
            backup = kiloes.bind(report)(backup);
            oscard['source'] = backup;
            romeon = _closure1_slot0;
            yankee = foxtra[yankee];
            yankee = romeon.bind(report)(yankee);
            yankee = yankee.IconSizes;
            yankee = yankee.SMALL;
            oscard['size'] = yankee;
            offset = offset.tagIcon;
            oscard['style'] = offset;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            option = verify.map;
            golfie = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot32;
                    zuuluu = _closure1_slot5;
                    tangon = zuuluu.Fragment;
                    zuuluu = {};
                    golfie = 0;
                    oscard = argBar;
                    golfie = golfie !== oscard;
                    if(!golfie) { _fun00014_ip = 64; continue _fun00013 }
 33:
                    offset = _closure1_slot31;
                    verify = _closure1_slot9;
                    option = {};
                    oscard = {};
                    yankee = 4;
                    oscard['width'] = yankee;
                    option['style'] = oscard;
                    oscard = undefined;
                    golfie = offset.bind(oscard)(verify, option);
 64:
                    oscard = new Array(2);
                    oscard[0] = golfie;
                    verify = _closure1_slot31;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 73;
                    golfie = golfie[michal];
                    michal = undefined;
                    golfie = option.bind(michal)(golfie);
                    option = golfie.AppliedForumTagPill;
                    golfie = {};
                    golfie['tag'] = entity;
                    golfie = verify.bind(michal)(option, golfie);
                    oscard[1] = golfie;
                    zuuluu['children'] = oscard;
                    entity = entity.id;
                    entity = report.bind(michal)(tangon, zuuluu, entity);
                    return entity;
                }
            };
            golfie = option.bind(verify)(golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 186:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: ActionBar
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            romeon = entity.channel;
            var _closure2_slot0 = romeon;
            michal = entity.tags;
            var _closure2_slot1 = michal;
            michal = entity.setTags;
            var _closure2_slot2 = michal;
            kiloes = entity.canPost;
            var _closure2_slot3 = kiloes;
            backup = entity.submitting;
            michal = entity.onSubmit;
            var _closure2_slot4 = michal;
            michal = entity.focusLastInput;
            var _closure2_slot5 = michal;
            michal = entity.blurLastInput;
            var _closure2_slot6 = michal;
            yankee = entity.lastInput;
            sizing = entity.isEdit;
            var _closure2_slot7 = sizing;
            tangon = undefined;
            var _closure2_slot13 = tangon;
            entity = _closure1_slot35;
            output = entity.bind(tangon)();
            var _closure2_slot8 = output;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 24;
            report = zuuluu[entity];
            option = michal.bind(tangon)(report);
            golfie = option.useStateFromStores;
            report = _closure1_slot18;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                tangon = _closure1_slot18;
                zuuluu = tangon.getUploads;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot12;
                entity = entity.ChannelMessage;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            result = golfie.bind(option)(oscard, report);
            report = zuuluu[entity];
            option = michal.bind(tangon)(report);
            golfie = option.useStateFromStores;
            report = _closure1_slot14;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot7;
                    entity = !entity;
                    if(!entity) { _fun00018_ip = 46; continue _fun00017 }
 13:
                    report = _closure1_slot14;
                    tangon = report.can;
                    zuuluu = _closure1_slot23;
                    zuuluu = zuuluu.ATTACH_FILES;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 46:
                    return entity;
                }
            };
            verify = golfie.bind(option)(oscard, report);
            entity = zuuluu[entity];
            report = michal.bind(tangon)(entity);
            zuuluu = report.useStateFromStoresObject;
            entity = _closure1_slot20;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                zuuluu = _closure1_slot20;
                zuuluu = zuuluu.keyboardType;
                entity['keyboardType'] = zuuluu;
                zuuluu = _closure1_slot20;
                zuuluu = zuuluu.expressionType;
                entity['expressionType'] = zuuluu;
                michal = _closure1_slot20;
                michal = michal.keyboardDuration;
                entity['keyboardDuration'] = michal;
                return entity;
            };
            entity = zuuluu.bind(report)(michal, entity);
            vacuum = entity.keyboardType;
            var _closure2_slot9 = vacuum;
            michal = entity.expressionType;
            var _closure2_slot10 = michal;
            entity = entity.keyboardDuration;
            var _closure2_slot11 = entity;
            entity = romeon.isMediaChannel;
            oscard = entity.bind(romeon)();
            michal = _closure1_slot25;
            michal = michal.MEDIA;
            sequen = vacuum === michal;
            var _closure2_slot12 = sequen;
            if(oscard) { _fun00016_ip = 327; continue _fun00015 }
 307:
            entity = verify;
            if(!verify) { _fun00016_ip = 324; continue _fun00015 }
 313:
            zuuluu = result.length;
            michal = 0;
            entity = zuuluu > michal;
 324:
            oscard = entity;
 327:
            entity = romeon.availableTags;
            michal = null;
            offset = michal != entity;
            if(!offset) { _fun00016_ip = 368; continue _fun00015 }
 342:
            entity = romeon.availableTags;
            zuuluu = michal == entity;
            michal = undefined;
            if(zuuluu) { _fun00016_ip = 362; continue _fun00015 }
 357:
            michal = entity.length;
 362:
            entity = 0;
            offset = michal > entity;
 368:
            entity = function() { // Original name: maybeFocus
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tangon = _closure2_slot9;
                    michal = _closure1_slot25;
                    michal = michal.SYSTEM;
                    michal = tangon !== michal;
                    if(!michal) { _fun00020_ip = 45; continue _fun00019 }
 27:
                    tangon = _closure2_slot9;
                    zuuluu = _closure1_slot25;
                    zuuluu = zuuluu.EXPRESSION;
                    michal = tangon !== zuuluu;
 45:
                    if(michal) { _fun00020_ip = 58; continue _fun00019 }
 48:
                    michal = _closure2_slot5;
                    entity = undefined;
                    entity = michal.bind(entity)();
 58:
                    entity = undefined;
                    return entity;
                }
            };
            _closure2_slot13 = entity;
            michal = _closure1_slot33;
            entity = result.length;
            echoed = 0;
            zuuluu = entity > echoed;
            entity = 0;
            if(!zuuluu) { _fun00016_ip = 426; continue _fun00015 }
 399:
            report = _closure1_slot27;
            golfie = _closure1_slot28;
            zuuluu = 2;
            golfie = zuuluu * golfie;
            zuuluu = _closure1_slot29;
            zuuluu = golfie + zuuluu;
            entity = report + zuuluu;
 426:
            ctrled = michal + entity;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 45;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.isAndroid;
            entity = entity.bind(michal)();
            option = 0;
            if(entity) { _fun00016_ip = 468; continue _fun00015 }
 464:
            option = _closure1_slot34;
 468:
            entity = result.length;
            source = entity > echoed;
            zuuluu = _closure1_slot32;
            michal = _closure1_slot9;
            entity = {};
            golfie = output.actionsContainer;
            report = new Array(2);
            report[0] = golfie;
            golfie = {};
            option = ctrled + option;
            golfie['height'] = option;
            option = 0;
            if(!source) { _fun00016_ip = 520; continue _fun00015 }
 516:
            option = _closure1_slot29;
 520:
            golfie['paddingTop'] = option;
            option = 0;
            if(!source) { _fun00016_ip = 534; continue _fun00015 }
 530:
            option = _closure1_slot28;
 534:
            golfie['paddingBottom'] = option;
            report[1] = golfie;
            entity['style'] = report;
            if(!oscard) { _fun00016_ip = 615; continue _fun00015 }
 550:
            option = _closure1_slot31;
            golfie = _closure1_slot1;
            ctrled = _closure1_slot2;
            report = 74;
            report = ctrled[report];
            golfie = golfie.bind(tangon)(report);
            report = {};
            report['attachments'] = result;
            result = function(argFoo) { // Original name: onRemove
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 75;
                zuuluu = zuuluu[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(zuuluu);
                report = oscard.remove;
                zuuluu = _closure2_slot0;
                tangon = zuuluu.id;
                michal = _closure1_slot12;
                zuuluu = michal.ChannelMessage;
                michal = argFoo;
                michal = report.bind(oscard)(tangon, michal, zuuluu);
                return entity;
            };
            report['onRemove'] = result;
            romeon = romeon.id;
            report['channelId'] = romeon;
            romeon = true;
            report['highlightThumbnails'] = romeon;
            oscard = option.bind(tangon)(golfie, report);
 615:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot32;
            golfie = _closure1_slot9;
            oscard = {};
            romeon = output.actions;
            oscard['style'] = romeon;
            romeon = verify;
            if(!romeon) { _fun00016_ip = 860; continue _fun00015 }
 652:
            ctrled = _closure1_slot31;
            papara = _closure1_slot0;
            target = _closure1_slot2;
            verify = 76;
            verify = target[verify];
            verify = papara.bind(tangon)(verify);
            result = verify.HeaderActionButton;
            verify = {};
            config = 42;
            record = target[config];
            record = papara.bind(tangon)(record);
            cntext = record.intl;
            record = cntext.string;
            config = target[config];
            config = papara.bind(tangon)(config);
            config = config.t;
            config = config.aDZSu7;
            config = record.bind(cntext)(config);
            verify['accessibilityLabel'] = config;
            record = output.actionButton;
            config = new Array(2);
            config[0] = record;
            record = output.mediaButton;
            config[1] = record;
            verify['style'] = config;
            config = _closure1_slot1;
            cntext = _closure1_slot2;
            if(sequen) { _fun00016_ip = 783; continue _fun00015 }
 774:
            sequen = 78;
            sequen = cntext[sequen];
            _fun00016_ip = 790; continue _fun00015;
 783:
            record = 77;
            sequen = cntext[record];
 790:
            sequen = config.bind(tangon)(sequen);
            verify['source'] = sequen;
            config = _closure1_slot0;
            record = _closure1_slot2;
            sequen = 71;
            sequen = record[sequen];
            sequen = config.bind(tangon)(sequen);
            sequen = sequen.IconSizes;
            sequen = sequen.SMALL_20;
            verify['iconSize'] = sequen;
            sequen = function() { // Original name: onPress
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure2_slot12;
                    if(michal) { _fun00022_ip = 66; continue _fun00021 }
 10:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 79;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.showSimpleMediaKeyboard;
                    zuuluu = _closure2_slot0;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.dismiss;
                    michal = michal.bind(zuuluu)();
                    _fun00022_ip = 76; continue _fun00021;
 66:
                    michal = _closure2_slot5;
                    entity = undefined;
                    entity = michal.bind(entity)();
 76:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 80;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.trackForumChannelMediaUploaderClicked;
                    michal = {};
                    report = true;
                    michal['isMobile'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            verify['onPress'] = sequen;
            sequen = true;
            verify['foregroundRipple'] = sequen;
            romeon = ctrled.bind(tangon)(result, verify);
 860:
            verify = new Array(4);
            verify[0] = romeon;
            if(!offset) { _fun00016_ip = 1058; continue _fun00015 }
 874:
            ctrled = _closure1_slot31;
            config = _closure1_slot0;
            record = _closure1_slot2;
            romeon = 76;
            romeon = record[romeon];
            romeon = config.bind(tangon)(romeon);
            result = romeon.HeaderActionButton;
            romeon = {};
            sequen = 42;
            cntext = record[sequen];
            cntext = config.bind(tangon)(cntext);
            papara = cntext.intl;
            cntext = papara.string;
            sequen = record[sequen];
            sequen = config.bind(tangon)(sequen);
            sequen = sequen.t;
            sequen = sequen.112vVF;
            sequen = cntext.bind(papara)(sequen);
            romeon['accessibilityLabel'] = sequen;
            cntext = output.actionButton;
            sequen = new Array(2);
            sequen[0] = cntext;
            cntext = output.mediaButton;
            sequen[1] = cntext;
            romeon['style'] = sequen;
            cntext = _closure1_slot1;
            sequen = 72;
            sequen = record[sequen];
            sequen = cntext.bind(tangon)(sequen);
            romeon['source'] = sequen;
            sequen = 71;
            sequen = record[sequen];
            sequen = config.bind(tangon)(sequen);
            sequen = sequen.IconSizes;
            sequen = sequen.SMALL_20;
            romeon['iconSize'] = sequen;
            sequen = function() { // Original name: onPress
                tangon = _closure1_slot6;
                entity = tangon.dismiss;
                entity = entity.bind(tangon)();
                report = _closure1_slot1;
                romeon = _closure1_slot2;
                entity = 81;
                tangon = romeon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.openLazy;
                yankee = _closure1_slot0;
                zuuluu = 51;
                zuuluu = romeon[zuuluu];
                golfie = yankee.bind(entity)(zuuluu);
                zuuluu = 82;
                tangon = romeon[zuuluu];
                zuuluu = romeon.paths;
                tangon = golfie.bind(entity)(tangon, zuuluu);
                zuuluu = {};
                option = _closure2_slot0;
                zuuluu['parentChannel'] = option;
                option = function(argFoo) { // Original name: onSave
                    tangon = _closure2_slot2;
                    entity = undefined;
                    zuuluu = argFoo;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure2_slot13;
                    michal = michal.bind(entity)();
                    return entity;
                };
                zuuluu['onSave'] = option;
                option = 42;
                verify = romeon[option];
                verify = yankee.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                option = romeon[option];
                option = yankee.bind(entity)(option);
                option = option.t;
                option = option.HPu3kp;
                option = verify.bind(offset)(option);
                zuuluu['title'] = option;
                golfie = _closure2_slot1;
                zuuluu['tags'] = golfie;
                michal = function() { // Original name: onClose
                    michal = _closure2_slot13;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                zuuluu['onClose'] = michal;
                michal = 'ForumPostTagsActionSheet';
                michal = report.bind(oscard)(tangon, michal, zuuluu);
                return entity;
            };
            romeon['onPress'] = sequen;
            sequen = true;
            romeon['foregroundRipple'] = sequen;
            offset = ctrled.bind(tangon)(result, romeon);
 1058:
            verify[1] = offset;
            romeon = _closure1_slot0;
            result = _closure1_slot2;
            offset = 44;
            offset = result[offset];
            offset = romeon.bind(tangon)(offset);
            offset = offset.PostComposerInputs;
            offset = offset.CONTENT;
            offset = yankee === offset;
            if(!offset) { _fun00016_ip = 1318; continue _fun00015 }
 1104:
            result = _closure1_slot31;
            record = _closure1_slot0;
            cntext = _closure1_slot2;
            yankee = 76;
            yankee = cntext[yankee];
            yankee = record.bind(tangon)(yankee);
            romeon = yankee.HeaderActionButton;
            yankee = {};
            ctrled = 42;
            sequen = cntext[ctrled];
            sequen = record.bind(tangon)(sequen);
            config = sequen.intl;
            sequen = config.string;
            ctrled = cntext[ctrled];
            ctrled = record.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.iZ7Mz8;
            ctrled = sequen.bind(config)(ctrled);
            yankee['accessibilityLabel'] = ctrled;
            ctrled = output.actionButton;
            yankee['style'] = ctrled;
            ctrled = _closure1_slot25;
            ctrled = ctrled.EXPRESSION;
            if(!(vacuum !== ctrled)) { _fun00016_ip = 1233; continue _fun00015 }
 1211:
            vacuum = _closure1_slot1;
            sequen = _closure1_slot2;
            ctrled = 83;
            ctrled = sequen[ctrled];
            ctrled = vacuum.bind(tangon)(ctrled);
            _fun00016_ip = 1253; continue _fun00015;
 1233:
            sequen = _closure1_slot1;
            config = _closure1_slot2;
            vacuum = 77;
            vacuum = config[vacuum];
            ctrled = sequen.bind(tangon)(vacuum);
 1253:
            yankee['source'] = ctrled;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            ctrled = 71;
            ctrled = sequen[ctrled];
            ctrled = vacuum.bind(tangon)(ctrled);
            ctrled = ctrled.IconSizes;
            ctrled = ctrled.SMALL_20;
            yankee['iconSize'] = ctrled;
            ctrled = function() { // Original name: onPress
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = _closure2_slot9;
                    zuuluu = _closure1_slot25;
                    zuuluu = zuuluu.EXPRESSION;
                    if(!(tangon !== zuuluu)) { _fun00024_ip = 172; continue _fun00023 }
 29:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 84;
                    zuuluu = golfie[zuuluu];
                    oscard = undefined;
                    yankee = tangon.bind(oscard)(zuuluu);
                    offset = yankee.DeprecatedLayoutAnimationKeyboard;
                    report = _closure2_slot11;
                    zuuluu = 0.5;
                    verify = zuuluu * report;
                    zuuluu = true;
                    zuuluu = offset.bind(yankee)(verify, zuuluu);
                    verify = _closure1_slot6;
                    zuuluu = verify.dismiss;
                    zuuluu = zuuluu.bind(verify)();
                    zuuluu = 58;
                    zuuluu = golfie[zuuluu];
                    golfie = tangon.bind(oscard)(zuuluu);
                    tangon = golfie.toggleKeyboard;
                    zuuluu = {};
                    verify = _closure1_slot25;
                    verify = verify.EXPRESSION;
                    zuuluu['keyboardType'] = verify;
                    verify = _closure2_slot10;
                    zuuluu['expressionType'] = verify;
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    zuuluu = global;
                    tangon = zuuluu.setTimeout;
                    zuuluu = function() {
                        michal = _closure2_slot5;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    zuuluu = tangon.bind(oscard)(zuuluu, report);
                    _fun00024_ip = 302; continue _fun00023;
 172:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 84;
                    zuuluu = oscard[zuuluu];
                    tangon = undefined;
                    offset = report.bind(tangon)(zuuluu);
                    verify = offset.DeprecatedLayoutAnimationKeyboard;
                    golfie = _closure2_slot11;
                    zuuluu = 0.5;
                    zuuluu = zuuluu * golfie;
                    golfie = true;
                    zuuluu = verify.bind(offset)(zuuluu, golfie);
                    zuuluu = 58;
                    zuuluu = oscard[zuuluu];
                    oscard = report.bind(tangon)(zuuluu);
                    report = oscard.toggleKeyboard;
                    zuuluu = {};
                    option = _closure1_slot25;
                    option = option.SYSTEM;
                    zuuluu['keyboardType'] = option;
                    zuuluu['keyboardWillOpen'] = golfie;
                    zuuluu = report.bind(oscard)(zuuluu);
                    michal = _closure2_slot6;
                    michal = michal.bind(tangon)();
                    michal = global;
                    zuuluu = michal.setTimeout;
                    michal = function() {
                        michal = _closure2_slot5;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    entity = 0;
                    entity = zuuluu.bind(tangon)(michal, entity);
 302:
                    entity = undefined;
                    return entity;
                }
            };
            yankee['onPress'] = ctrled;
            ctrled = true;
            yankee['foregroundRipple'] = ctrled;
            offset = result.bind(tangon)(romeon, yankee);
 1318:
            verify[2] = offset;
            romeon = _closure1_slot31;
            yankee = _closure1_slot1;
            offset = _closure1_slot2;
            ctrled = 85;
            offset = offset[ctrled];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            config = _closure1_slot0;
            record = _closure1_slot2;
            result = 42;
            vacuum = record[result];
            vacuum = config.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            result = record[result];
            result = config.bind(tangon)(result);
            result = result.t;
            if(sizing) { _fun00016_ip = 1410; continue _fun00015 }
 1395:
            sizing = result.pIuQIy;
            sizing = vacuum.bind(sequen)(sizing);
            _fun00016_ip = 1421; continue _fun00015;
 1410:
            result = result.R3BPHx;
            sizing = vacuum.bind(sequen)(result);
 1421:
            offset['text'] = sizing;
            result = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[ctrled];
            sizing = result.bind(tangon)(sizing);
            result = sizing.ButtonLooks;
            if(kiloes) { _fun00016_ip = 1459; continue _fun00015 }
 1451:
            sizing = result.OUTLINED;
            _fun00016_ip = 1465; continue _fun00015;
 1459:
            sizing = result.FILLED;
 1465:
            offset['look'] = sizing;
            sizing = true;
            offset['shrink'] = sizing;
            offset['foregroundRipple'] = sizing;
            result = output.postButton;
            sizing = new Array(2);
            sizing[0] = result;
            result = {};
            echoed = 0;
            if(!source) { _fun00016_ip = 1517; continue _fun00015 }
 1503:
            source = _closure1_slot28;
            update = -1;
            echoed = update * source;
 1517:
            result['marginTop'] = echoed;
            sizing[1] = result;
            offset['style'] = sizing;
            if(kiloes) { _fun00016_ip = 1540; continue _fun00015 }
 1532:
            sizing = output.postButtonTextDisabled;
            _fun00016_ip = 1546; continue _fun00015;
 1540:
            sizing = output.postButtonText;
 1546:
            offset['textStyle'] = sizing;
            offset['loading'] = backup;
            if(backup) { _fun00016_ip = 1562; continue _fun00015 }
 1559:
            backup = !kiloes;
 1562:
            offset['disabled'] = backup;
            backup = function() { // Original name: renderIcon
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tangon = _closure1_slot31;
                    michal = _closure1_slot1;
                    entity = _closure1_slot2;
                    report = 71;
                    entity = entity[report];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    option = _closure2_slot3;
                    verify = _closure2_slot8;
                    if(option) { _fun00026_ip = 58; continue _fun00025 }
 45:
                    option = verify.postIconColorDisabled;
                    option = option.color;
                    _fun00026_ip = 69; continue _fun00025;
 58:
                    verify = verify.postIconColor;
                    option = verify.color;
 69:
                    entity['color'] = option;
                    oscard = _closure2_slot8;
                    oscard = oscard.postIcon;
                    entity['style'] = oscard;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = golfie[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.Sizes;
                    report = report.SMALL;
                    entity['size'] = report;
                    report = 86;
                    report = golfie[report];
                    report = oscard.bind(zuuluu)(report);
                    entity['source'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            offset['renderIcon'] = backup;
            foxtra = function() { // Original name: onPress
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00028_ip = 23; continue _fun00027 }
 10:
                    zuuluu = _closure2_slot4;
                    michal = undefined;
                    entity = {};
                    entity = zuuluu.bind(michal)(entity);
 23:
                    entity = undefined;
                    return entity;
                }
            };
            offset['onPress'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[3] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = foxtra.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = foxtra.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Keyboard;
    var _closure1_slot6 = option;
    option = report.Pressable;
    var _closure1_slot7 = option;
    backup = report.StyleSheet;
    option = report.useWindowDimensions;
    var _closure1_slot8 = option;
    report = report.View;
    var _closure1_slot9 = report;
    report = 4;
    report = golfie[report];
    report = foxtra.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 5;
    option = golfie[report];
    option = foxtra.bind(entity)(option);
    var _closure1_slot11 = option;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.DraftType;
    var _closure1_slot12 = report;
    report = 6;
    report = golfie[report];
    report = foxtra.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 7;
    report = golfie[report];
    report = foxtra.bind(entity)(report);
    var _closure1_slot14 = report;
    yankee = 8;
    report = golfie[yankee];
    report = foxtra.bind(entity)(report);
    var _closure1_slot15 = report;
    report = 9;
    option = golfie[report];
    option = foxtra.bind(entity)(option);
    var _closure1_slot16 = option;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SlowmodeType;
    var _closure1_slot17 = report;
    report = 10;
    report = golfie[report];
    report = foxtra.bind(entity)(report);
    var _closure1_slot18 = report;
    report = 11;
    report = golfie[report];
    report = foxtra.bind(entity)(report);
    var _closure1_slot19 = report;
    output = 12;
    report = golfie[output];
    report = foxtra.bind(entity)(report);
    var _closure1_slot20 = report;
    report = 13;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.AbortCodes;
    var _closure1_slot21 = option;
    option = report.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot22 = option;
    report = report.Permissions;
    var _closure1_slot23 = report;
    report = 14;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ChannelFlags;
    var _closure1_slot24 = report;
    report = 15;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.KeyboardTypes;
    var _closure1_slot25 = report;
    result = 16;
    report = golfie[result];
    report = oscard.bind(entity)(report);
    report = report.ContentDismissActionType;
    var _closure1_slot26 = report;
    report = 17;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.IMAGE_CAROUSEL_TILE_HEIGHT;
    var _closure1_slot27 = option;
    option = report.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
    var _closure1_slot28 = option;
    report = report.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
    var _closure1_slot29 = report;
    report = 18;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.OpenThreadAnalyticsLocations;
    var _closure1_slot30 = report;
    report = 19;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    sizing = report.Fonts;
    kiloes = 20;
    report = golfie[kiloes];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot31 = report;
    report = golfie[kiloes];
    report = oscard.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot32 = report;
    report = 56;
    var _closure1_slot33 = report;
    report = 44;
    var _closure1_slot34 = report;
    report = 21;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {'flex': 1, 'backgroundColor': null, 'position': 'relative'};
    romeon = 22;
    echoed = golfie[romeon];
    echoed = foxtra.bind(entity)(echoed);
    echoed = echoed.colors;
    echoed = echoed.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = echoed;
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
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_PRIMARY;
    offset['color'] = sizing;
    report['titleInputText'] = offset;
    offset = {'width': '100%', 'height': '100%', 'padding': 0, 'lineHeight': 20, 'color': null, 'textAlignVertical': 'top'};
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_PRIMARY;
    offset['color'] = sizing;
    report['contentInput'] = offset;
    offset = {};
    offset['marginEnd'] = yankee;
    report['postIcon'] = offset;
    offset = {};
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.WHITE;
    offset['color'] = sizing;
    report['postIconColor'] = offset;
    offset = {};
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_SECONDARY;
    offset['color'] = sizing;
    report['postIconColorDisabled'] = offset;
    offset = {'marginLeft': 'auto', 'borderRadius': null, 'paddingHorizontal': 12, 'height': 40, 'overflow': 'hidden'};
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    offset['borderRadius'] = sizing;
    report['postButton'] = offset;
    offset = {};
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.WHITE;
    offset['color'] = sizing;
    report['postButtonText'] = offset;
    offset = {};
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
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
    offset['lineHeight'] = kiloes;
    report['channelName'] = offset;
    offset = {};
    backup = backup.hairlineWidth;
    offset['borderTopWidth'] = backup;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    offset['borderTopColor'] = backup;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = backup;
    report['actionsContainer'] = offset;
    offset = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'height': 56, 'maxHeight': 56, 'width': '100%'};
    report['actions'] = offset;
    offset = {'height': 40, 'minHeight': 40, 'maxHeight': 40, 'width': 40, 'minWidth': 40, 'maxWidth': 40, 'borderRadius': 20, 'color': null, 'backgroundColor': null, 'marginLeft': 0, 'marginRight': 0, 'overflow': 'hidden'};
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.TEXT_NORMAL;
    offset['color'] = backup;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY_ALT;
    offset['backgroundColor'] = backup;
    report['actionButton'] = offset;
    offset = {};
    offset['marginRight'] = yankee;
    report['mediaButton'] = offset;
    offset = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'zIndex': 100};
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = backup;
    report['horizontalAutocomplete'] = offset;
    offset = {};
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = backup;
    report['keyboardArea'] = offset;
    offset = {'flex': 1, 'overflow': 'hidden', 'backgroundColor': null, 'position': 'relative'};
    romeon = golfie[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = romeon;
    report['emojiPicker'] = offset;
    offset = {'marginBottom': 16, 'marginLeft': 16, 'marginRight': 16};
    report['nameError'] = offset;
    offset = {};
    offset['marginTop'] = yankee;
    report['messageError'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot35 = report;
    report = {};
    option = 'function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}';
    report['code'] = option;
    var _closure1_slot36 = report;
    report = 87;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/forums/native/composer/ForumComposer.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: ForumComposer
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            kiloes = entity.parentChannel;
            var _closure2_slot0 = kiloes;
            michal = entity.thread;
            var _closure2_slot1 = michal;
            quebec = entity.threadSettingsDraft;
            var _closure2_slot2 = quebec;
            update = entity.onClose;
            var _closure2_slot3 = update;
            variable36 = entity.message;
            var _closure2_slot4 = variable36;
            cntext = entity.isEdit;
            var _closure2_slot5 = cntext;
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
            limora = entity.bind(report)();
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 23;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            entity = entity.bind(report)();
            entity = entity.analyticsLocations;
            var _closure2_slot6 = entity;
            oscard = _closure1_slot5;
            zuuluu = oscard.useRef;
            entity = null;
            variable48 = zuuluu.bind(oscard)(entity);
            oscard = _closure1_slot0;
            zuuluu = 24;
            golfie = tangon[zuuluu];
            foxtra = oscard.bind(report)(golfie);
            yankee = foxtra.useStateFromStores;
            golfie = _closure1_slot19;
            offset = new Array(1);
            offset[0] = golfie;
            verify = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    michal = _closure1_slot19;
                    entity = michal.getCurrentUser;
                    michal = entity.bind(michal)();
                    entity = null;
                    zuuluu = entity != michal;
                    if(!zuuluu) { _fun00032_ip = 28; continue _fun00031 }
 25:
                    entity = michal;
 28:
                    return entity;
                }
            };
            golfie = new Array(0);
            variable50 = yankee.bind(foxtra)(offset, verify, golfie);
            var _closure2_slot7 = variable50;
            golfie = tangon[zuuluu];
            yankee = oscard.bind(report)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot13;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot13;
                michal = zuuluu.getSelfMember;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            backup = offset.bind(yankee)(verify, golfie);
            golfie = tangon[zuuluu];
            yankee = oscard.bind(report)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot11;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                tangon = _closure1_slot11;
                zuuluu = tangon.getDraft;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot12;
                entity = entity.ChannelMessage;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            ctrled = offset.bind(yankee)(verify, golfie);
            tangon = tangon[zuuluu];
            verify = oscard.bind(report)(tangon);
            golfie = verify.useStateFromStores;
            tangon = _closure1_slot10;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 25;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isThemeDark;
                entity = _closure1_slot10;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(verify)(oscard, tangon);
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 22;
            tangon = verify[tangon];
            tangon = golfie.bind(report)(tangon);
            tangon = tangon.unsafe_rawColors;
            if(oscard) { _fun00030_ip = 463; continue _fun00029 }
 455:
            variable54 = tangon.PRIMARY_460;
            _fun00030_ip = 469; continue _fun00029;
 463:
            variable54 = tangon.PRIMARY_330;
 469:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            golfie = oscard[zuuluu];
            yankee = tangon.bind(report)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot16;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                tangon = _closure1_slot16;
                zuuluu = tangon.getSlowmodeCooldownGuess;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot17;
                entity = entity.CreateThread;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            sierra = offset.bind(yankee)(verify, golfie);
            _closure2_slot8 = sierra;
            zuuluu = oscard[zuuluu];
            offset = tangon.bind(report)(zuuluu);
            verify = offset.useStateFromStores;
            zuuluu = _closure1_slot18;
            golfie = new Array(1);
            golfie[0] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot18;
                zuuluu = tangon.getUploads;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot12;
                entity = entity.ChannelMessage;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            papara = verify.bind(offset)(golfie, zuuluu);
            _closure2_slot9 = papara;
            zuuluu = 26;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useCurrentKeyboardInfo;
            zuuluu = zuuluu.bind(tangon)();
            echoed = zuuluu.keyboardType;
            _closure2_slot10 = echoed;
            result = zuuluu.expressionType;
            output = zuuluu.currentKeyboardHeight;
            _closure2_slot11 = output;
            offset = zuuluu.currentSafeAreaBottom;
            _closure2_slot12 = offset;
            tangon = _closure1_slot1;
            zuuluu = 27;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            target = zuuluu.bind(report)();
            _closure2_slot13 = target;
            tangon = _closure1_slot5;
            zuuluu = tangon.useState;
            variable56 = false;
            tangon = zuuluu.bind(tangon)(variable56);
            zuuluu = _closure1_slot4;
            vacuum = 2;
            zuuluu = zuuluu.bind(report)(tangon, vacuum);
            foxtra = 0;
            variable37 = zuuluu[foxtra];
            yankee = 1;
            zuuluu = zuuluu[yankee];
            _closure2_slot14 = zuuluu;
            golfie = _closure1_slot5;
            oscard = golfie.useState;
            if(cntext) { _fun00030_ip = 719; continue _fun00029 }
 703:
            zuuluu = entity == quebec;
            verify = undefined;
            if(zuuluu) { _fun00030_ip = 717; continue _fun00029 }
 712:
            verify = quebec.name;
 717:
            _fun00030_ip = 736; continue _fun00029;
 719:
            tangon = entity == michal;
            zuuluu = undefined;
            if(tangon) { _fun00030_ip = 733; continue _fun00029 }
 728:
            zuuluu = michal.name;
 733:
            verify = zuuluu;
 736:
            sizing = entity != verify;
            tangon = '';
            zuuluu = tangon;
            if(!sizing) { _fun00030_ip = 753; continue _fun00029 }
 750:
            zuuluu = verify;
 753:
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(oscard, vacuum);
            variable45 = zuuluu[foxtra];
            _closure2_slot15 = variable45;
            zuuluu = zuuluu[yankee];
            _closure2_slot16 = zuuluu;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            sizing = 28;
            zuuluu = zuuluu[sizing];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.useChannelTemplate;
            verify = zuuluu.bind(oscard)(kiloes);
            golfie = tangon;
            if(!cntext) { _fun00030_ip = 883; continue _fun00029 }
 821:
            zuuluu = entity != variable36;
            golfie = tangon;
            if(!zuuluu) { _fun00030_ip = 883; continue _fun00029 }
 831:
            zuuluu = entity != michal;
            golfie = tangon;
            if(!zuuluu) { _fun00030_ip = 883; continue _fun00029 }
 841:
            oscard = _closure1_slot1;
            source = _closure1_slot2;
            zuuluu = 29;
            zuuluu = source[zuuluu];
            sequen = oscard.bind(report)(zuuluu);
            source = sequen.unparse;
            oscard = variable36.content;
            zuuluu = michal.id;
            golfie = source.bind(sequen)(oscard, zuuluu);
 883:
            oscard = _closure1_slot5;
            zuuluu = oscard.useState;
            if(cntext) { _fun00030_ip = 925; continue _fun00029 }
 895:
            source = verify;
            if(!(entity != ctrled)) { _fun00030_ip = 922; continue _fun00029 }
 902:
            sequen = ctrled.trim;
            sequen = sequen.bind(ctrled)();
            source = verify;
            if(!(tangon !== sequen)) { _fun00030_ip = 922; continue _fun00029 }
 919:
            source = ctrled;
 922:
            golfie = source;
 925:
            oscard = zuuluu.bind(oscard)(golfie);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(oscard, vacuum);
            status = zuuluu[foxtra];
            _closure2_slot17 = status;
            zuuluu = zuuluu[yankee];
            _closure2_slot18 = zuuluu;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            source = oscard[sizing];
            ctrled = golfie.bind(report)(source);
            source = ctrled.useAvailableTags;
            ctrled = source.bind(ctrled)(kiloes);
            oscard = oscard[sizing];
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.useAppliedTags;
            golfie = oscard.bind(golfie)(michal);
            _closure2_slot19 = golfie;
            source = _closure1_slot5;
            sizing = source.useState;
            if(!cntext) { _fun00030_ip = 1027; continue _fun00029 }
 1020:
            oscard = golfie;
            if(!(entity == ctrled)) { _fun00030_ip = 1031; continue _fun00029 }
 1027:
            oscard = new Array(0);
 1031:
            oscard = sizing.bind(source)(oscard);
            sizing = _closure1_slot4;
            oscard = sizing.bind(report)(oscard, vacuum);
            variable40 = oscard[foxtra];
            _closure2_slot20 = variable40;
            variable39 = oscard[yankee];
            source = _closure1_slot5;
            oscard = source.useState;
            oscard = oscard.bind(source)(entity);
            oscard = sizing.bind(report)(oscard, vacuum);
            variable41 = oscard[foxtra];
            oscard = oscard[yankee];
            _closure2_slot21 = oscard;
            source = _closure1_slot5;
            oscard = source.useState;
            oscard = oscard.bind(source)(entity);
            sizing = sizing.bind(report)(oscard, vacuum);
            oscard = sizing[foxtra];
            sizing = sizing[yankee];
            _closure2_slot22 = sizing;
            sizing = entity == backup;
            variable61 = undefined;
            if(sizing) { _fun00030_ip = 1137; continue _fun00029 }
 1131:
            variable61 = backup.colorString;
 1137:
            sizing = entity == backup;
            variable64 = undefined;
            if(sizing) { _fun00030_ip = 1152; continue _fun00029 }
 1146:
            variable64 = backup.nick;
 1152:
            if(!(entity == variable64)) { _fun00030_ip = 1187; continue _fun00029 }
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
            ctrled = sizing.top;
            _closure2_slot24 = ctrled;
            sizing = _closure1_slot8;
            sizing = sizing.bind(report)();
            sizing = sizing.height;
            _closure2_slot25 = sizing;
            record = _closure1_slot5;
            config = record.useCallback;
            sequen = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = _closure2_slot23;
                    michal = entity.current;
                    entity = null;
                    if(!(entity != michal)) { _fun00034_ip = 28; continue _fun00033 }
 18:
                    entity = michal.focus;
                    entity = entity.bind(michal)();
 28:
                    entity = undefined;
                    return entity;
                }
            };
            source = new Array(0);
            variable42 = config.bind(record)(sequen, source);
            sequen = _closure1_slot0;
            source = 32;
            config = backup[source];
            record = sequen.bind(report)(config);
            config = record.useSharedValue;
            whisks = config.bind(record)(foxtra);
            _closure2_slot26 = whisks;
            backup = backup[source];
            config = sequen.bind(report)(backup);
            sequen = config.useAnimatedScrollHandler;
            backup = function(argFoo) { // Original name: M
                entity = argFoo;
                entity = entity.contentOffset;
                zuuluu = entity.y;
                michal = _closure2_slot26;
                entity = michal.set;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            record = {};
            record['scrollTopValue'] = whisks;
            backup['__closure'] = record;
            record = 16880842576840.0;
            backup['__workletHash'] = record;
            record = _closure1_slot36;
            backup['__initData'] = record;
            sequen = sequen.bind(config)(backup);
            whisks = _closure1_slot5;
            record = whisks.useCallback;
            config = new Array(2);
            config[0] = cntext;
            backup = kiloes.id;
            config[1] = backup;
            backup = function(argFoo) {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot5;
                    if(michal) { _fun00036_ip = 65; continue _fun00035 }
 13:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 33;
                    tangon = tangon[michal];
                    michal = undefined;
                    oscard = report.bind(michal)(tangon);
                    report = oscard.changeThreadSettings;
                    michal = _closure2_slot0;
                    tangon = michal.id;
                    michal = {};
                    michal['name'] = zuuluu;
                    michal = report.bind(oscard)(tangon, michal);
 65:
                    michal = _closure2_slot16;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            variable43 = record.bind(whisks)(backup, config);
            whisks = _closure1_slot5;
            record = whisks.useCallback;
            config = new Array(1);
            config[0] = update;
            backup = function(argFoo) {
                michal = _closure2_slot3;
                entity = undefined;
                oscard = true;
                michal = michal.bind(entity)(oscard);
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 34;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.transitionToThread;
                zuuluu = {};
                zuuluu['navigationReplace'] = oscard;
                michal = _closure1_slot30;
                michal = michal.FORUM;
                zuuluu['source'] = michal;
                michal = argFoo;
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            record = record.bind(whisks)(backup, config);
            _closure2_slot27 = record;
            equals = _closure1_slot5;
            whisks = equals.useMemo;
            config = new Array(1);
            config[0] = variable40;
            backup = function() {
                entity = global;
                zuuluu = entity.Set;
                tangon = _closure2_slot20;
                michal = tangon.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                report = michal.bind(tangon)(entity);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                oscard = michal;
                entity = new oscard[zuuluu](report, tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            whisks = whisks.bind(equals)(backup, config);
            _closure2_slot28 = whisks;
            equals = _closure1_slot5;
            config = equals.useMemo;
            backup = new Array(1);
            backup[0] = golfie;
            golfie = function() {
                entity = global;
                zuuluu = entity.Set;
                tangon = _closure2_slot19;
                michal = tangon.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                report = michal.bind(tangon)(entity);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                oscard = michal;
                entity = new oscard[zuuluu](report, tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            config = config.bind(equals)(golfie, backup);
            _closure2_slot29 = config;
            variable38 = _closure1_slot5;
            equals = variable38.useCallback;
            golfie = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            StartGenerator();
                            option = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00038_ip = 381; continue _fun00037 }
 13:
                            michal = _closure2_slot1;
                            tangon = null;
                            if(!(tangon != michal)) { _fun00038_ip = 373; continue _fun00037 }
 29:
                            michal = _closure2_slot4;
                            michal = tangon != michal;
                            if(!michal) { _fun00038_ip = 53; continue _fun00037 }
 40:
                            tangon = _closure2_slot4;
                            tangon = tangon.content;
                            michal = tangon !== option;
 53:
                            if(!michal) { _fun00038_ip = 118; continue _fun00037 }
 56:
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 35;
                            tangon = tangon[michal];
                            michal = undefined;
                            golfie = report.bind(michal)(tangon);
                            oscard = golfie.editMessage;
                            michal = _closure2_slot1;
                            report = michal.id;
                            michal = _closure2_slot4;
                            tangon = michal.id;
                            michal = {};
                            michal['content'] = option;
                            michal = oscard.bind(golfie)(report, tangon, michal);
 118:
                            oscard = _closure1_slot1;
                            report = _closure1_slot2;
                            michal = 36;
                            michal = report[michal];
                            report = undefined;
                            option = oscard.bind(report)(michal);
                            golfie = option.isEqual;
                            oscard = _closure2_slot29;
                            michal = _closure2_slot28;
                            michal = golfie.bind(option)(oscard, michal);
                            if(michal) { _fun00038_ip = 242; continue _fun00037 }
 166:
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            michal = 37;
                            michal = golfie[michal];
                            option = oscard.bind(report)(michal);
                            golfie = option.updateForumPostTags;
                            michal = _closure2_slot1;
                            oscard = michal.id;
                            michal = global;
                            offset = michal.Array;
                            verify = offset.from;
                            michal = _closure2_slot28;
                            michal = verify.bind(offset)(michal);
                            michal = golfie.bind(option)(oscard, michal);
                            SaveGenerator(address=233);
 231:
                            return michal;
 233:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(!oscard) { _fun00038_ip = 242; continue _fun00037 }
 239:
                            return michal;
 242:
                            michal = _closure2_slot1;
                            oscard = michal.name;
                            michal = _closure2_slot15;
                            if(!(oscard !== michal)) { _fun00038_ip = 320; continue _fun00037 }
 259:
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            michal = 38;
                            michal = golfie[michal];
                            option = oscard.bind(report)(michal);
                            golfie = option.saveChannel;
                            michal = _closure2_slot1;
                            oscard = michal.id;
                            michal = {};
                            verify = _closure2_slot15;
                            michal['name'] = verify;
                            michal = golfie.bind(option)(oscard, michal);
                            SaveGenerator(address=314);
 312:
                            return michal;
 314:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(oscard) { _fun00038_ip = 378; continue _fun00037 }
 320:
                            oscard = _closure1_slot15;
                            tangon = oscard.getChannelId;
                            oscard = tangon.bind(oscard)();
                            tangon = _closure2_slot1;
                            tangon = tangon.id;
                            if(!(oscard === tangon)) { _fun00038_ip = 360; continue _fun00037 }
 347:
                            oscard = _closure2_slot3;
                            tangon = true;
                            tangon = oscard.bind(report)(tangon);
                            _fun00038_ip = 373; continue _fun00037;
 360:
                            tangon = _closure2_slot27;
                            zuuluu = _closure2_slot1;
                            zuuluu = tangon.bind(report)(zuuluu);
 373:
                            zuuluu = undefined;
                            return zuuluu;
 378:
                            return michal;
 381:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            backup = golfie.bind(report)();
            golfie = new Array(7);
            golfie[0] = michal;
            golfie[1] = variable36;
            golfie[2] = config;
            golfie[3] = whisks;
            golfie[4] = variable45;
            golfie[5] = record;
            golfie[6] = update;
            equals = equals.bind(variable38)(backup, golfie);
            _closure2_slot30 = equals;
            backup = entity == quebec;
            golfie = undefined;
            if(backup) { _fun00030_ip = 1596; continue _fun00029 }
 1591:
            golfie = quebec.name;
 1596:
            golfie = entity != golfie;
            if(!golfie) { _fun00030_ip = 1617; continue _fun00029 }
 1603:
            backup = quebec.name;
            backup = backup.length;
            golfie = backup > foxtra;
 1617:
            backup = status.trim;
            backup = backup.bind(status)();
            variable38 = papara.length;
            variable38 = variable38 > foxtra;
            tangon = tangon === verify;
            if(tangon) { _fun00030_ip = 1647; continue _fun00029 }
 1643:
            tangon = backup !== verify;
 1647:
            if(!tangon) { _fun00030_ip = 1668; continue _fun00029 }
 1650:
            verify = backup.length;
            verify = verify > foxtra;
            if(verify) { _fun00030_ip = 1665; continue _fun00029 }
 1662:
            verify = variable38;
 1665:
            tangon = verify;
 1668:
            variable38 = !cntext;
            if(!variable38) { _fun00030_ip = 1677; continue _fun00029 }
 1674:
            variable38 = golfie;
 1677:
            if(!variable38) { _fun00030_ip = 1683; continue _fun00029 }
 1680:
            variable38 = tangon;
 1683:
            if(variable38) { _fun00030_ip = 1775; continue _fun00029 }
 1686:
            tangon = cntext;
            if(!tangon) { _fun00030_ip = 1772; continue _fun00029 }
 1692:
            verify = entity == michal;
            golfie = undefined;
            if(verify) { _fun00030_ip = 1706; continue _fun00029 }
 1701:
            golfie = michal.name;
 1706:
            golfie = variable45 !== golfie;
            if(golfie) { _fun00030_ip = 1731; continue _fun00029 }
 1713:
            variable44 = entity == variable36;
            verify = undefined;
            if(variable44) { _fun00030_ip = 1727; continue _fun00029 }
 1722:
            verify = variable36.content;
 1727:
            golfie = backup !== verify;
 1731:
            if(golfie) { _fun00030_ip = 1769; continue _fun00029 }
 1734:
            backup = _closure1_slot1;
            variable36 = _closure1_slot2;
            verify = 36;
            verify = variable36[verify];
            backup = backup.bind(report)(verify);
            verify = backup.isEqual;
            verify = verify.bind(backup)(config, whisks);
            golfie = !verify;
 1769:
            tangon = golfie;
 1772:
            variable38 = tangon;
 1775:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            verify = 39;
            verify = golfie[verify];
            config = tangon.bind(report)(verify);
            backup = config.useCreateForumPost;
            verify = {};
            verify['parentChannel'] = kiloes;
            verify['threadSettings'] = quebec;
            verify['appliedTags'] = whisks;
            verify['onThreadCreated'] = record;
            whisks = backup.bind(config)(verify);
            _closure2_slot31 = whisks;
            record = _closure1_slot5;
            config = record.useCallback;
            verify = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00040_ip = 608; continue _fun00039 }
 10:
                            michal = argFoo;
                            offset = michal.stickerId;
                            zuuluu = undefined;
                            verify = undefined;
                            yankee = undefined;
                            option = undefined;
                            golfie = undefined;
                            SaveGenerator(address=33);
 31:
                            return zuuluu;
 33:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00040_ip = 605; continue _fun00039 }
 42:
                            backup = _closure2_slot0;
                            foxtra = backup.hasFlag;
                            romeon = _closure1_slot24;
                            romeon = romeon.REQUIRE_TAG;
                            romeon = foxtra.bind(backup)(romeon);
                            if(!romeon) { _fun00040_ip = 94; continue _fun00039 }
 76:
                            romeon = _closure2_slot20;
                            foxtra = romeon.length;
                            romeon = 0;
                            if(!(romeon !== foxtra)) { _fun00040_ip = 563; continue _fun00039 }
 94:
                            romeon = _closure2_slot5;
                            if(!romeon) { _fun00040_ip = 114; continue _fun00039 }
 101:
                            foxtra = _closure2_slot1;
                            romeon = null;
                            if(!(romeon != foxtra)) { _fun00040_ip = 602; continue _fun00039 }
 114:
                            foxtra = _closure2_slot14;
                            romeon = true;
                            romeon = foxtra.bind(zuuluu)(romeon);
                            foxtra = _closure1_slot1;
                            backup = _closure1_slot2;
                            romeon = 29;
                            romeon = backup[romeon];
                            kiloes = foxtra.bind(zuuluu)(romeon);
                            backup = kiloes.parse;
                            romeon = _closure2_slot5;
                            if(romeon) { _fun00040_ip = 164; continue _fun00039 }
 158:
                            foxtra = _closure2_slot0;
                            _fun00040_ip = 168; continue _fun00039;
 164:
                            foxtra = _closure2_slot1;
 168:
                            romeon = _closure2_slot17;
                            romeon = backup.bind(kiloes)(foxtra, romeon);
                            verify = romeon.content;
 183: // try_start_0 // try_start_2
                            romeon = _closure2_slot21;
                            kiloes = null;
                            romeon = romeon.bind(zuuluu)(kiloes);
                            romeon = _closure2_slot22;
                            romeon = romeon.bind(zuuluu)(kiloes);
                            romeon = _closure2_slot5;
                            if(romeon) { _fun00040_ip = 278; continue _fun00039 }
 210:
                            backup = _closure2_slot31;
                            foxtra = verify;
                            romeon = offset;
                            kiloes = kiloes != romeon;
                            romeon = undefined;
                            if(!kiloes) { _fun00040_ip = 243; continue _fun00039 }
 229:
                            kiloes = offset;
                            offset = new Array(1);
                            offset[0] = kiloes;
                            romeon = offset;
 243:
                            offset = _closure2_slot9;
                            offset = backup.bind(zuuluu)(foxtra, romeon, offset);
                            SaveGenerator(address=258);
 256:
                            return offset;
 258:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                            if(!romeon) { _fun00040_ip = 297; continue _fun00039 }
 264: // try_end0 // try_end2
                            foxtra = _closure2_slot14;
                            romeon = false;
                            romeon = foxtra.bind(zuuluu)(romeon);
                            return offset;
 278: // try_start_1 // try_start_3
                            offset = _closure2_slot30;
                            verify = offset.bind(zuuluu)(verify);
                            SaveGenerator(address=291);
 289:
                            return verify;
 291:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                            if(offset) { _fun00040_ip = 302; continue _fun00039 }
 297: // try_end1
                            _fun00040_ip = 535; continue _fun00039;
 302: // try_end3
                            romeon = _closure2_slot14;
                            offset = false;
                            offset = romeon.bind(zuuluu)(offset);
                            return verify;
 316: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=8);
                            oscard = verify;
                            offset = verify.body;
                            yankee = offset;
                            verify = null;
                            romeon = verify == offset;
                            offset = undefined;
                            if(romeon) { _fun00040_ip = 345; continue _fun00039 }
 340:
                            offset = yankee.code;
 345:
                            if(!(verify != offset)) { _fun00040_ip = 535; continue _fun00039 }
 352:
                            offset = oscard;
                            offset = offset.body;
                            option = offset;
                            yankee = verify == offset;
                            offset = undefined;
                            if(yankee) { _fun00040_ip = 377; continue _fun00039 }
 372:
                            offset = option.code;
 377:
                            option = _closure1_slot21;
                            option = option.AUTOMOD_TITLE_BLOCKED;
                            if(!(offset !== option)) { _fun00040_ip = 485; continue _fun00039 }
 391:
                            option = oscard;
                            option = option.body;
                            golfie = option;
                            verify = verify == option;
                            option = undefined;
                            if(verify) { _fun00040_ip = 416; continue _fun00039 }
 411:
                            option = golfie.code;
 416:
                            golfie = _closure1_slot21;
                            golfie = golfie.AUTOMOD_MESSAGE_BLOCKED;
                            if(!(option === golfie)) { _fun00040_ip = 535; continue _fun00039 }
 430:
                            option = _closure2_slot22;
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            golfie = 40;
                            golfie = offset[golfie];
                            yankee = verify.bind(zuuluu)(golfie);
                            offset = yankee.makeAutomodViolationError;
                            golfie = oscard;
                            verify = golfie.body;
                            golfie = _closure2_slot0;
                            golfie = offset.bind(yankee)(verify, golfie);
                            golfie = option.bind(zuuluu)(golfie);
                            _fun00040_ip = 535; continue _fun00039;
 485:
                            golfie = _closure2_slot21;
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 40;
                            option = offset[option];
                            offset = verify.bind(zuuluu)(option);
                            verify = offset.makeAutomodViolationError;
                            option = oscard.body;
                            oscard = _closure2_slot0;
                            oscard = verify.bind(offset)(option, oscard);
                            oscard = golfie.bind(zuuluu)(oscard);
 535: // try_end4
                            golfie = _closure2_slot14;
                            oscard = false;
                            oscard = golfie.bind(zuuluu)(oscard);
                            _fun00040_ip = 602; continue _fun00039;
 548: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=5);
                            option = _closure2_slot14;
                            golfie = false;
                            golfie = option.bind(zuuluu)(golfie);
                            throw oscard;
 563:
                            report = _closure2_slot22;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 40;
                            tangon = golfie[tangon];
                            oscard = oscard.bind(zuuluu)(tangon);
                            tangon = oscard.makeEmptyTagsError;
                            tangon = tangon.bind(oscard)();
                            tangon = report.bind(zuuluu)(tangon);
 602:
                            return zuuluu;
 605:
                            return michal;
 608:
                            return entity;
                        }
                    };
                    michal = entity.next;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            backup = verify.bind(report)();
            verify = new Array(8);
            verify[0] = kiloes;
            quebec = variable40.length;
            verify[1] = quebec;
            verify[2] = cntext;
            verify[3] = michal;
            verify[4] = status;
            verify[5] = equals;
            verify[6] = whisks;
            verify[7] = papara;
            verify = config.bind(record)(backup, verify);
            _closure2_slot32 = verify;
            record = _closure1_slot5;
            config = record.useCallback;
            backup = new Array(6);
            backup[0] = kiloes;
            backup[1] = sierra;
            backup[2] = target;
            backup[3] = papara;
            backup[4] = verify;
            backup[5] = status;
            verify = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.stickerId;
                    var _closure3_slot0 = tangon;
                    entity = _closure2_slot17;
                    entity = entity.length;
                    michal = 0;
                    if(!(michal === entity)) { _fun00042_ip = 55; continue _fun00041 }
 33:
                    entity = _closure2_slot9;
                    entity = entity.length;
                    if(!(michal === entity)) { _fun00042_ip = 55; continue _fun00041 }
 46:
                    entity = null;
                    if(!(entity != tangon)) { _fun00042_ip = 608; continue _fun00041 }
 55:
                    entity = _closure2_slot8;
                    if(!(!(entity > michal))) { _fun00042_ip = 608; continue _fun00041 }
 66:
                    entity = _closure2_slot17;
                    michal = entity.length;
                    entity = _closure2_slot13;
                    if(!(!(michal > entity))) { _fun00042_ip = 441; continue _fun00041 }
 86:
                    michal = _closure1_slot37;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 43;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = report.bind(zuuluu)(entity);
                    entity = entity.RESTRICTIONS;
                    yankee = michal.bind(zuuluu)(entity);
                    michal = yankee.bind(zuuluu)();
                    entity = michal.done;
                    offset = null;
                    report = false;
                    if(entity) { _fun00042_ip = 420; continue _fun00041 }
 145:
                    entity = michal.value;
                    foxtra = entity.check;
                    romeon = _closure2_slot17;
                    verify = _closure2_slot0;
                    entity = verify.getGuildId;
                    entity = entity.bind(verify)();
                    entity = offset != entity;
                    verify = foxtra.bind(zuuluu)(romeon, verify, entity);
                    if(!(report === verify)) { _fun00042_ip = 209; continue _fun00041 }
 189:
                    romeon = yankee.bind(zuuluu)();
                    entity = romeon.done;
                    michal = romeon;
                    if(entity) { _fun00042_ip = 420; continue _fun00041 }
 207:
                    _fun00042_ip = 145; continue _fun00041;
 209:
                    michal = _closure1_slot1;
                    yankee = _closure1_slot2;
                    entity = 41;
                    entity = yankee[entity];
                    report = michal.bind(zuuluu)(entity);
                    michal = report.show;
                    entity = {};
                    offset = _closure1_slot0;
                    oscard = 42;
                    romeon = yankee[oscard];
                    romeon = offset.bind(zuuluu)(romeon);
                    backup = romeon.intl;
                    foxtra = backup.string;
                    romeon = yankee[oscard];
                    romeon = offset.bind(zuuluu)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.mY3Y39;
                    romeon = foxtra.bind(backup)(romeon);
                    entity['title'] = romeon;
                    verify = verify.body;
                    entity['body'] = verify;
                    verify = yankee[oscard];
                    verify = offset.bind(zuuluu)(verify);
                    foxtra = verify.intl;
                    romeon = foxtra.string;
                    verify = yankee[oscard];
                    verify = offset.bind(zuuluu)(verify);
                    verify = verify.t;
                    verify = verify.KJnHq6;
                    verify = romeon.bind(foxtra)(verify);
                    entity['confirmText'] = verify;
                    golfie = function() { // Original name: onConfirm
                        zuuluu = _closure2_slot32;
                        michal = {};
                        entity = _closure3_slot0;
                        michal['stickerId'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity['onConfirm'] = golfie;
                    golfie = yankee[oscard];
                    golfie = offset.bind(zuuluu)(golfie);
                    verify = golfie.intl;
                    golfie = verify.string;
                    oscard = yankee[oscard];
                    oscard = offset.bind(zuuluu)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.fsBWmZ;
                    oscard = golfie.bind(verify)(oscard);
                    entity['cancelText'] = oscard;
                    entity = michal.bind(report)(entity);
                    entity = undefined;
                    return entity;
 420:
                    michal = _closure2_slot32;
                    entity = {};
                    entity['stickerId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    _fun00042_ip = 608; continue _fun00041;
 441:
                    michal = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 41;
                    entity = offset[entity];
                    verify = undefined;
                    zuuluu = michal.bind(verify)(entity);
                    michal = zuuluu.show;
                    entity = {};
                    report = _closure1_slot0;
                    tangon = 42;
                    oscard = offset[tangon];
                    oscard = report.bind(verify)(oscard);
                    yankee = oscard.intl;
                    golfie = yankee.string;
                    oscard = offset[tangon];
                    oscard = report.bind(verify)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.l8rYLi;
                    oscard = golfie.bind(yankee)(oscard);
                    entity['title'] = oscard;
                    oscard = offset[tangon];
                    oscard = report.bind(verify)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.formatToPlainString;
                    tangon = offset[tangon];
                    tangon = report.bind(verify)(tangon);
                    tangon = tangon.t;
                    report = tangon.FfjF19;
                    tangon = {};
                    verify = _closure2_slot17;
                    verify = verify.length;
                    tangon['currentLength'] = verify;
                    option = _closure2_slot13;
                    tangon['maxLength'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
                    entity['body'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
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
            verify[0] = zuuluu;
            zuuluu = kiloes.id;
            verify[1] = zuuluu;
            zuuluu = function(argFoo) {
                zuuluu = argFoo;
                report = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 33;
                michal = michal[entity];
                entity = undefined;
                golfie = report.bind(entity)(michal);
                oscard = golfie.changeDraft;
                report = _closure2_slot0;
                report = report.id;
                tangon = _closure1_slot12;
                tangon = tangon.ChannelMessage;
                tangon = oscard.bind(golfie)(report, zuuluu, tangon);
                michal = _closure2_slot18;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            variable53 = backup.bind(config)(zuuluu, verify);
            zuuluu = 44;
            zuuluu = golfie[zuuluu];
            backup = tangon.bind(report)(zuuluu);
            verify = backup.useFocusHandlers;
            zuuluu = {};
            zuuluu['titleInput'] = variable48;
            zuuluu['contentInput'] = variable59;
            zuuluu = verify.bind(backup)(zuuluu);
            verify = zuuluu.setFocusedInput;
            _closure2_slot34 = verify;
            quebec = zuuluu.focusLastInput;
            _closure2_slot35 = quebec;
            equals = zuuluu.blurLastInput;
            _closure2_slot36 = equals;
            whisks = zuuluu.focusedInput;
            verify = zuuluu.openingKeyboard;
            config = _closure1_slot5;
            backup = config.useState;
            zuuluu = {'start': 0, 'end': null};
            backup = backup.bind(config)(zuuluu);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(backup, vacuum);
            target = zuuluu[foxtra];
            zuuluu = zuuluu[yankee];
            _closure2_slot37 = zuuluu;
            backup = _closure1_slot5;
            foxtra = backup.useCallback;
            yankee = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                tangon = entity.selection;
                zuuluu = _closure2_slot37;
                michal = {};
                report = michal;
                entity = copyDataProperties(report, tangon);
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = new Array(0);
            variable52 = foxtra.bind(backup)(yankee, zuuluu);
            backup = _closure1_slot5;
            foxtra = backup.useCallback;
            yankee = function(argFoo) {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.start;
                    var _closure3_slot0 = zuuluu;
                    entity = entity.end;
                    var _closure3_slot1 = entity;
                    entity = undefined;
                    var _closure3_slot2 = entity;
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 45;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00044_ip = 106; continue _fun00043 }
 64:
                    zuuluu = _closure2_slot23;
                    tangon = zuuluu.current;
                    _closure3_slot2 = tangon;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00044_ip = 106; continue _fun00043 }
 86:
                    zuuluu = global;
                    zuuluu = zuuluu.setTimeout;
                    michal = function() {
                        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                            tangon = _closure3_slot2;
                            zuuluu = tangon.setSelection;
                            michal = _closure3_slot0;
                            oscard = _closure3_slot1;
                            entity = null;
                            if(!(entity == oscard)) { _fun00046_ip = 33; continue _fun00045 }
 27:
                            entity = _closure3_slot0;
                            _fun00046_ip = 37; continue _fun00045;
 33:
                            entity = _closure3_slot1;
 37:
                            entity = zuuluu.bind(tangon)(michal, entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(entity)(michal);
 106:
                    return entity;
                }
            };
            zuuluu = new Array(0);
            config = foxtra.bind(backup)(yankee, zuuluu);
            zuuluu = 46;
            yankee = golfie[zuuluu];
            backup = tangon.bind(report)(yankee);
            foxtra = backup.usePressEmojiHandler;
            yankee = {};
            yankee['selection'] = target;
            yankee['draftContent'] = status;
            yankee['handleTextChange'] = variable53;
            yankee['focusTextInput'] = variable42;
            yankee['setSelection'] = config;
            backup = foxtra.bind(backup)(yankee);
            zuuluu = golfie[zuuluu];
            foxtra = tangon.bind(report)(zuuluu);
            yankee = foxtra.usePressGIFHandler;
            zuuluu = {};
            zuuluu['selection'] = target;
            zuuluu['draftContent'] = status;
            zuuluu['handleTextChange'] = variable53;
            zuuluu['focusTextInput'] = variable42;
            zuuluu['setSelection'] = config;
            foxtra = yankee.bind(foxtra)(zuuluu);
            zuuluu = 47;
            zuuluu = golfie[zuuluu];
            vacuum = tangon.bind(report)(zuuluu);
            yankee = vacuum.usePressHorizontalAutocompleteItemHandler;
            zuuluu = {};
            zuuluu['draftContent'] = status;
            zuuluu['handleTextChange'] = variable53;
            zuuluu['setSelection'] = config;
            sierra = yankee.bind(vacuum)(zuuluu);
            zuuluu = 48;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.useBackspaceHandler;
            zuuluu = {};
            zuuluu['selection'] = target;
            zuuluu['draftContent'] = status;
            zuuluu['handleTextChange'] = variable53;
            yankee = tangon.bind(golfie)(zuuluu);
            vacuum = _closure1_slot5;
            golfie = vacuum.useMemo;
            tangon = new Array(4);
            tangon[0] = output;
            tangon[1] = offset;
            tangon[2] = ctrled;
            tangon[3] = sizing;
            zuuluu = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 45;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.isAndroid;
                    entity = entity.bind(michal)();
                    if(entity) { _fun00048_ip = 76; continue _fun00047 }
 37:
                    entity = {};
                    tangon = _closure2_slot25;
                    zuuluu = _closure2_slot11;
                    tangon = tangon - zuuluu;
                    zuuluu = _closure2_slot12;
                    zuuluu = tangon - zuuluu;
                    michal = _closure2_slot24;
                    michal = zuuluu - michal;
                    entity['height'] = michal;
                    _fun00048_ip = 86; continue _fun00047;
 76:
                    entity = {'flex': 1, 'zIndex': 1};
 86:
                    return entity;
                }
            };
            vacuum = golfie.bind(vacuum)(zuuluu, tangon);
            papara = kiloes;
            if(!cntext) { _fun00030_ip = 2399; continue _fun00029 }
 2396:
            papara = michal;
 2399:
            _closure2_slot38 = papara;
            if(!(entity != papara)) { _fun00030_ip = 4197; continue _fun00029 }
 2410:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 40;
            golfie = tangon[michal];
            record = zuuluu.bind(report)(golfie);
            config = record.renderError;
            golfie = {};
            golfie['content'] = variable45;
            variable44 = config.bind(record)(variable41, golfie);
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.renderError;
            michal = {};
            michal['content'] = status;
            michal['tags'] = variable40;
            variable58 = zuuluu.bind(tangon)(oscard, michal);
            michal = papara.isMediaChannel;
            michal = michal.bind(papara)();
            if(michal) { _fun00030_ip = 2499; continue _fun00029 }
 2493:
            config = new Array(0);
            _fun00030_ip = 2542; continue _fun00029;
 2499:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 49;
            michal = tangon[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
            michal = new Array(1);
            michal[0] = zuuluu;
            config = michal;
 2542:
            michal = function() { // Original name: MediaPostMultipleThumbnailActionSheetImporter
                zuuluu = _closure1_slot0;
                entity = _closure1_slot2;
                michal = 51;
                michal = entity[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 50;
                michal = entity[michal];
                entity = entity.paths;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            _closure2_slot39 = michal;
            tangon = _closure1_slot32;
            zuuluu = _closure1_slot9;
            michal = {};
            golfie = limora.container;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = {};
            golfie['paddingTop'] = ctrled;
            golfie['paddingBottom'] = offset;
            oscard[1] = golfie;
            michal['style'] = oscard;
            offset = _closure1_slot31;
            ctrled = _closure1_slot1;
            variable47 = _closure1_slot2;
            oscard = 52;
            oscard = variable47[oscard];
            golfie = ctrled.bind(report)(oscard);
            oscard = {};
            oscard['channel'] = papara;
            record = _closure1_slot34;
            oscard['height'] = record;
            oscard['onClose'] = update;
            update = function() { // Original name: onGuidelinesPress
                michal = _closure2_slot36;
                entity = undefined;
                michal = michal.bind(entity)();
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 53;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openForumGuidelinesActionSheet;
                michal = {};
                report = _closure2_slot0;
                michal['channel'] = report;
                report = function() { // Original name: onClose
                    michal = _closure2_slot35;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['onClose'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard['onGuidelinesPress'] = update;
            oscard['submitting'] = variable37;
            oscard['title'] = variable45;
            golfie = offset.bind(report)(golfie, oscard);
            oscard = new Array(3);
            oscard[0] = golfie;
            update = _closure1_slot32;
            golfie = 54;
            golfie = variable47[golfie];
            offset = ctrled.bind(report)(golfie);
            golfie = {};
            golfie['style'] = vacuum;
            vacuum = _closure1_slot32;
            source = variable47[source];
            source = ctrled.bind(report)(source);
            ctrled = source.ScrollView;
            source = {'onScroll': null, 'scrollEventThrottle': 16, 'keyboardShouldPersistTaps': 'always', 'nestedScrollEnabled': false, 'contentContainerStyle': null, 'keyboardDismissMode': 'on-drag'};
            source['onScroll'] = sequen;
            sequen = limora.scrollViewContentContainer;
            source['contentContainerStyle'] = sequen;
            variable41 = _closure1_slot31;
            variable46 = _closure1_slot0;
            sequen = 55;
            sequen = variable47[sequen];
            sequen = variable46.bind(report)(sequen);
            record = sequen.FormInput;
            sequen = {};
            sequen['ref'] = variable48;
            variable48 = limora.titleInput;
            sequen['style'] = variable48;
            variable48 = limora.titleInputText;
            sequen['inputTextStyle'] = variable48;
            sequen['showTopContainer'] = variable56;
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
            sequen['placeholder'] = variable48;
            sequen['placeholderTextColor'] = variable54;
            variable57 = true;
            sequen['large'] = variable57;
            sequen['multiline'] = variable57;
            sequen['value'] = variable45;
            variable45 = 56;
            variable45 = variable47[variable45];
            variable45 = variable46.bind(report)(variable45);
            variable45 = variable45.ClearButtonVisibility;
            variable45 = variable45.NEVER;
            sequen['clearButtonVisibility'] = variable45;
            variable45 = _closure1_slot22;
            sequen['maxLength'] = variable45;
            sequen['onChange'] = variable43;
            variable43 = function() { // Original name: onBlur
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    michal = _closure2_slot5;
                    if(michal) { _fun00050_ip = 181; continue _fun00049 }
 13:
                    michal = _closure2_slot2;
                    oscard = null;
                    tangon = oscard == michal;
                    zuuluu = undefined;
                    michal = undefined;
                    if(tangon) { _fun00050_ip = 39; continue _fun00049 }
 30:
                    tangon = _closure2_slot2;
                    michal = tangon.name;
 39:
                    if(!(oscard != michal)) { _fun00050_ip = 181; continue _fun00049 }
 46:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 57;
                    michal = golfie[michal];
                    golfie = report.bind(zuuluu)(michal);
                    michal = _closure2_slot2;
                    michal = oscard == michal;
                    report = undefined;
                    if(michal) { _fun00050_ip = 91; continue _fun00049 }
 82:
                    michal = _closure2_slot2;
                    report = michal.name;
 91:
                    michal = true;
                    michal = golfie.bind(zuuluu)(report, michal);
                    report = _closure2_slot2;
                    oscard = oscard == report;
                    report = undefined;
                    if(oscard) { _fun00050_ip = 121; continue _fun00049 }
 112:
                    oscard = _closure2_slot2;
                    report = oscard.name;
 121:
                    if(!(michal !== report)) { _fun00050_ip = 181; continue _fun00049 }
 125:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 33;
                    tangon = oscard[tangon];
                    golfie = report.bind(zuuluu)(tangon);
                    oscard = golfie.changeThreadSettings;
                    tangon = _closure2_slot0;
                    report = tangon.id;
                    tangon = {};
                    tangon['name'] = michal;
                    tangon = oscard.bind(golfie)(report, tangon);
                    entity = _closure2_slot16;
                    entity = entity.bind(zuuluu)(michal);
 181:
                    entity = undefined;
                    return entity;
                }
            };
            sequen['onBlur'] = variable43;
            variable43 = function() { // Original name: onFocus
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    tangon = _closure2_slot10;
                    zuuluu = _closure1_slot25;
                    zuuluu = zuuluu.MEDIA;
                    zuuluu = tangon !== zuuluu;
                    if(!zuuluu) { _fun00052_ip = 45; continue _fun00051 }
 27:
                    report = _closure2_slot10;
                    tangon = _closure1_slot25;
                    tangon = tangon.EXPRESSION;
                    zuuluu = report !== tangon;
 45:
                    if(zuuluu) { _fun00052_ip = 105; continue _fun00051 }
 48:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 58;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.toggleKeyboard;
                    zuuluu = {};
                    oscard = _closure1_slot25;
                    oscard = oscard.SYSTEM;
                    zuuluu['keyboardType'] = oscard;
                    oscard = true;
                    zuuluu['keyboardWillOpen'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 105:
                    zuuluu = _closure2_slot34;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 44;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.PostComposerInputs;
                    michal = michal.TITLE;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            sequen['onFocus'] = variable43;
            sequen['autoFocus'] = variable57;
            sequen['autoCorrect'] = variable57;
            variable43 = 'none';
            sequen['textContentType'] = variable43;
            variable43 = 'next';
            sequen['returnKeyType'] = variable43;
            sequen['onNext'] = variable42;
            record = variable41.bind(report)(record, sequen);
            sequen = new Array(3);
            sequen[0] = record;
            variable41 = entity != variable44;
            record = null;
            if(!variable41) { _fun00030_ip = 3049; continue _fun00029 }
 3003:
            variable43 = _closure1_slot31;
            variable42 = _closure1_slot1;
            variable45 = _closure1_slot2;
            variable41 = 59;
            variable41 = variable45[variable41];
            variable42 = variable42.bind(report)(variable41);
            variable41 = {};
            variable45 = limora.nameError;
            variable41['style'] = variable45;
            variable41['children'] = variable44;
            record = variable43.bind(report)(variable42, variable41);
 3049:
            sequen[1] = record;
            variable43 = _closure1_slot32;
            variable42 = _closure1_slot9;
            variable41 = {};
            record = limora.editor;
            variable41['style'] = record;
            record = entity != variable50;
            if(!record) { _fun00030_ip = 3287; continue _fun00029 }
 3083:
            variable46 = _closure1_slot31;
            variable45 = _closure1_slot7;
            variable44 = {};
            variable47 = limora.avatarContainer;
            variable44['style'] = variable47;
            variable47 = function() { // Original name: onPress
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 60;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    report = _closure2_slot7;
                    report = report.id;
                    entity['userId'] = report;
                    report = _closure2_slot38;
                    report = report.id;
                    entity['channelId'] = report;
                    oscard = _closure2_slot4;
                    report = null;
                    oscard = report == oscard;
                    report = undefined;
                    if(oscard) { _fun00054_ip = 80; continue _fun00053 }
 71:
                    oscard = _closure2_slot4;
                    report = oscard.id;
 80:
                    entity['messageId'] = report;
                    tangon = _closure2_slot6;
                    entity['sourceAnalyticsLocations'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
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
            variable51 = limora.avatar;
            variable47['style'] = variable51;
            variable47['user'] = variable50;
            variable51 = entity == kiloes;
            variable60 = undefined;
            if(variable51) { _fun00030_ip = 3178; continue _fun00029 }
 3168:
            variable51 = kiloes.getGuildId;
            variable60 = variable51.bind(kiloes)();
 3178:
            variable62 = entity != variable60;
            variable51 = undefined;
            if(!variable62) { _fun00030_ip = 3190; continue _fun00029 }
 3187:
            variable51 = variable60;
 3190:
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
 3287:
            variable44 = new Array(2);
            variable44[0] = record;
            variable47 = _closure1_slot32;
            variable46 = _closure1_slot9;
            variable45 = {};
            record = limora.editorBody;
            variable45['style'] = record;
            variable49 = _closure1_slot32;
            variable48 = _closure1_slot9;
            record = {};
            variable50 = limora.usernameToChannel;
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
            variable66 = papara.name;
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
            variable64 = limora.channelName;
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
            variable66 = papara.name;
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
            if(!variable49) { _fun00030_ip = 3662; continue _fun00029 }
 3616:
            variable51 = _closure1_slot31;
            variable50 = _closure1_slot1;
            variable60 = _closure1_slot2;
            variable49 = 59;
            variable49 = variable60[variable49];
            variable50 = variable50.bind(report)(variable49);
            variable49 = {};
            variable60 = limora.messageError;
            variable49['style'] = variable60;
            variable49['children'] = variable58;
            record = variable51.bind(report)(variable50, variable49);
 3662:
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
            variable59 = limora.contentInput;
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
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    tangon = _closure2_slot10;
                    zuuluu = _closure1_slot25;
                    zuuluu = zuuluu.MEDIA;
                    if(!(tangon === zuuluu)) { _fun00056_ip = 81; continue _fun00055 }
 24:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 58;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.toggleKeyboard;
                    zuuluu = {};
                    oscard = _closure1_slot25;
                    oscard = oscard.SYSTEM;
                    zuuluu['keyboardType'] = oscard;
                    oscard = true;
                    zuuluu['keyboardWillOpen'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 81:
                    zuuluu = _closure2_slot34;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 44;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.PostComposerInputs;
                    michal = michal.CONTENT;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            variable49['onFocus'] = variable52;
            variable52 = _closure1_slot25;
            variable52 = variable52.EXPRESSION;
            variable52 = echoed !== variable52;
            variable49['showSoftInputOnFocus'] = variable52;
            variable49 = variable51.bind(report)(variable50, variable49);
            variable48[2] = variable49;
            variable45['children'] = variable48;
            variable45 = variable47.bind(report)(variable46, variable45);
            variable44[1] = variable45;
            variable41['children'] = variable44;
            variable41 = variable43.bind(report)(variable42, variable41);
            sequen[2] = variable41;
            source['children'] = sequen;
            ctrled = vacuum.bind(report)(ctrled, source);
            source = new Array(5);
            source[0] = ctrled;
            sequen = _closure1_slot31;
            vacuum = _closure1_slot40;
            ctrled = {};
            ctrled['tags'] = variable40;
            ctrled = sequen.bind(report)(vacuum, ctrled);
            source[1] = ctrled;
            sequen = _closure1_slot31;
            vacuum = _closure1_slot41;
            ctrled = {};
            ctrled['channel'] = kiloes;
            ctrled['tags'] = variable40;
            ctrled['setTags'] = variable39;
            ctrled['canPost'] = variable38;
            ctrled['submitting'] = variable37;
            ctrled['onSubmit'] = variable36;
            ctrled['focusLastInput'] = quebec;
            ctrled['blurLastInput'] = equals;
            ctrled['lastInput'] = whisks;
            ctrled['isEdit'] = cntext;
            ctrled = sequen.bind(report)(vacuum, ctrled);
            source[2] = ctrled;
            cntext = _closure1_slot31;
            vacuum = _closure1_slot1;
            ctrled = 65;
            ctrled = record[ctrled];
            sequen = vacuum.bind(report)(ctrled);
            ctrled = {};
            limora = limora.horizontalAutocomplete;
            ctrled['style'] = limora;
            ctrled['onPressAutocompleteItem'] = sierra;
            ctrled['text'] = status;
            ctrled['selection'] = target;
            ctrled['channel'] = papara;
            ctrled = cntext.bind(report)(sequen, ctrled);
            source[3] = ctrled;
            sequen = _closure1_slot31;
            ctrled = 66;
            ctrled = record[ctrled];
            vacuum = vacuum.bind(report)(ctrled);
            ctrled = {};
            ctrled['contentTypes'] = config;
            config = function(argFoo) { // Original name: children
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.visibleContent;
                    entity = entity.markAsDismissed;
                    var _closure3_slot0 = entity;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 49;
                    entity = report[entity];
                    report = undefined;
                    entity = zuuluu.bind(report)(entity);
                    entity = entity.DismissibleContent;
                    zuuluu = entity.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
                    entity = null;
                    if(!(tangon === zuuluu)) { _fun00058_ip = 137; continue _fun00057 }
 64:
                    tangon = _closure1_slot31;
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 67;
                    michal = golfie[michal];
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = michal.DismissibleActionSheet;
                    michal = {};
                    oscard = function() { // Original name: markAsDismissed
                        zuuluu = _closure3_slot0;
                        entity = _closure1_slot26;
                        michal = entity.UNKNOWN;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal['markAsDismissed'] = oscard;
                    oscard = 'ThumbnailBottomSheet';
                    michal['actionSheetKey'] = oscard;
                    oscard = _closure2_slot39;
                    michal['importer'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 137:
                    return entity;
                }
            };
            ctrled['children'] = config;
            ctrled = sequen.bind(report)(vacuum, ctrled);
            source[4] = ctrled;
            golfie['children'] = source;
            golfie = update.bind(report)(offset, golfie);
            oscard[1] = golfie;
            golfie = _closure1_slot25;
            golfie = golfie.SYSTEM;
            golfie = echoed !== golfie;
            if(!golfie) { _fun00030_ip = 4111; continue _fun00029 }
 4108:
            golfie = !verify;
 4111:
            if(!golfie) { _fun00030_ip = 4181; continue _fun00029 }
 4114:
            offset = _closure1_slot31;
            verify = _closure1_slot39;
            option = {};
            option['keyboardType'] = echoed;
            option['expressionType'] = result;
            option['currentKeyboardHeight'] = output;
            option['windowHeight'] = sizing;
            option['channel'] = kiloes;
            option['onPressEmoji'] = backup;
            option['onPressGIF'] = foxtra;
            romeon = function(argFoo) { // Original name: onPressSticker
                zuuluu = _closure2_slot33;
                michal = {};
                entity = argFoo;
                entity = entity.id;
                michal['stickerId'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            option['onPressSticker'] = romeon;
            option['onBackspace'] = yankee;
            golfie = offset.bind(report)(verify, option);
 4181:
            oscard[2] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 4197:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['KeyboardArea'] = michal;
    return entity;
})();