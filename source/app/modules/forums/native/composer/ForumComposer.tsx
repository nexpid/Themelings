// app/modules/forums/native/composer/ForumComposer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
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
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
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
            verify = _closure1_slot35;
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
            golfie = _closure1_slot35;
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
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot34 = entity;
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
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: Tags
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.tags;
            entity = _closure1_slot32;
            report = undefined;
            offset = entity.bind(report)();
            zuuluu = verify.length;
            michal = 0;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00008_ip = 186; continue _fun00007 }
 38:
            tangon = _closure1_slot30;
            zuuluu = _closure1_slot8;
            michal = {};
            oscard = offset.tags;
            michal['style'] = oscard;
            option = _closure1_slot29;
            kiloes = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 67;
            oscard = foxtra[yankee];
            golfie = kiloes.bind(report)(oscard);
            oscard = {};
            backup = 68;
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
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot30;
                    zuuluu = _closure1_slot5;
                    tangon = zuuluu.Fragment;
                    zuuluu = {};
                    golfie = 0;
                    oscard = argBar;
                    golfie = golfie !== oscard;
                    if(!golfie) { _fun00010_ip = 64; continue _fun00009 }
 33:
                    offset = _closure1_slot29;
                    verify = _closure1_slot8;
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
                    verify = _closure1_slot29;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 69;
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
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: ActionBar
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
            source = entity.onShowExpressionPicker;
            michal = entity.focusLastInput;
            var _closure2_slot5 = michal;
            yankee = entity.lastInput;
            echoed = entity.isEdit;
            var _closure2_slot6 = echoed;
            report = entity.onLayout;
            tangon = undefined;
            var _closure2_slot10 = tangon;
            entity = _closure1_slot32;
            output = entity.bind(tangon)();
            var _closure2_slot7 = output;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 24;
            oscard = zuuluu[entity];
            verify = michal.bind(tangon)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot17;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                tangon = _closure1_slot17;
                zuuluu = tangon.getUploads;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot11;
                entity = entity.ChannelMessage;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            update = option.bind(verify)(golfie, oscard);
            oscard = zuuluu[entity];
            verify = michal.bind(tangon)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot13;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot6;
                    entity = !entity;
                    if(!entity) { _fun00014_ip = 46; continue _fun00013 }
 13:
                    report = _closure1_slot13;
                    tangon = report.can;
                    zuuluu = _closure1_slot22;
                    zuuluu = zuuluu.ATTACH_FILES;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 46:
                    return entity;
                }
            };
            verify = option.bind(verify)(golfie, oscard);
            golfie = _closure1_slot1;
            oscard = 30;
            oscard = zuuluu[oscard];
            golfie = golfie.bind(tangon)(oscard);
            sizing = true;
            oscard = {'includeKeyboardHeightIOS': true, 'includeCustomKeyboardHeightIOS': false};
            oscard = golfie.bind(tangon)(oscard);
            option = oscard.insets;
            entity = zuuluu[entity];
            oscard = michal.bind(tangon)(entity);
            zuuluu = oscard.useStateFromStoresObject;
            entity = _closure1_slot19;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                michal = _closure1_slot19;
                michal = michal.keyboardType;
                entity['keyboardType'] = michal;
                return entity;
            };
            entity = zuuluu.bind(oscard)(michal, entity);
            zuuluu = entity.keyboardType;
            var _closure2_slot8 = zuuluu;
            entity = romeon.isMediaChannel;
            oscard = entity.bind(romeon)();
            michal = _closure1_slot24;
            michal = michal.MEDIA;
            vacuum = zuuluu === michal;
            var _closure2_slot9 = vacuum;
            if(oscard) { _fun00012_ip = 352; continue _fun00011 }
 332:
            entity = verify;
            if(!verify) { _fun00012_ip = 349; continue _fun00011 }
 338:
            zuuluu = update.length;
            michal = 0;
            entity = zuuluu > michal;
 349:
            oscard = entity;
 352:
            entity = romeon.availableTags;
            michal = null;
            offset = michal != entity;
            if(!offset) { _fun00012_ip = 393; continue _fun00011 }
 367:
            entity = romeon.availableTags;
            zuuluu = michal == entity;
            michal = undefined;
            if(zuuluu) { _fun00012_ip = 387; continue _fun00011 }
 382:
            michal = entity.length;
 387:
            entity = 0;
            offset = michal > entity;
 393:
            entity = function() { // Original name: maybeFocus
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure2_slot8;
                    michal = _closure1_slot24;
                    michal = michal.SYSTEM;
                    michal = tangon !== michal;
                    if(!michal) { _fun00016_ip = 45; continue _fun00015 }
 27:
                    tangon = _closure2_slot8;
                    zuuluu = _closure1_slot24;
                    zuuluu = zuuluu.EXPRESSION;
                    michal = tangon !== zuuluu;
 45:
                    if(michal) { _fun00016_ip = 58; continue _fun00015 }
 48:
                    michal = _closure2_slot5;
                    entity = undefined;
                    entity = michal.bind(entity)();
 58:
                    entity = undefined;
                    return entity;
                }
            };
            _closure2_slot10 = entity;
            zuuluu = _closure1_slot30;
            michal = _closure1_slot8;
            entity = {};
            entity['onLayout'] = report;
            golfie = output.actionsContainer;
            report = new Array(2);
            report[0] = golfie;
            golfie = {};
            option = option.bottom;
            golfie['marginBottom'] = option;
            report[1] = golfie;
            entity['style'] = report;
            if(!oscard) { _fun00012_ip = 518; continue _fun00011 }
 455:
            option = _closure1_slot29;
            golfie = _closure1_slot1;
            ctrled = _closure1_slot2;
            report = 70;
            report = ctrled[report];
            golfie = golfie.bind(tangon)(report);
            report = {};
            report['attachments'] = update;
            update = function(argFoo) { // Original name: onRemove
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 71;
                zuuluu = zuuluu[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(zuuluu);
                report = oscard.remove;
                zuuluu = _closure2_slot0;
                tangon = zuuluu.id;
                michal = _closure1_slot11;
                zuuluu = michal.ChannelMessage;
                michal = argFoo;
                michal = report.bind(oscard)(tangon, michal, zuuluu);
                return entity;
            };
            report['onRemove'] = update;
            romeon = romeon.id;
            report['channelId'] = romeon;
            report['highlightThumbnails'] = sizing;
            oscard = option.bind(tangon)(golfie, report);
 518:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot30;
            golfie = _closure1_slot8;
            oscard = {};
            romeon = output.actions;
            oscard['style'] = romeon;
            romeon = verify;
            if(!romeon) { _fun00012_ip = 761; continue _fun00011 }
 555:
            ctrled = _closure1_slot29;
            cntext = _closure1_slot0;
            papara = _closure1_slot2;
            verify = 72;
            verify = papara[verify];
            verify = cntext.bind(tangon)(verify);
            update = verify.HeaderActionButton;
            verify = {};
            sequen = 41;
            config = papara[sequen];
            config = cntext.bind(tangon)(config);
            record = config.intl;
            config = record.string;
            sequen = papara[sequen];
            sequen = cntext.bind(tangon)(sequen);
            sequen = sequen.t;
            sequen = sequen.aDZSu7;
            sequen = config.bind(record)(sequen);
            verify['accessibilityLabel'] = sequen;
            config = output.actionButton;
            sequen = new Array(2);
            sequen[0] = config;
            config = output.mediaButton;
            sequen[1] = config;
            verify['style'] = sequen;
            sequen = _closure1_slot1;
            record = _closure1_slot2;
            if(vacuum) { _fun00012_ip = 686; continue _fun00011 }
 677:
            vacuum = 74;
            vacuum = record[vacuum];
            _fun00012_ip = 693; continue _fun00011;
 686:
            config = 73;
            vacuum = record[config];
 693:
            vacuum = sequen.bind(tangon)(vacuum);
            verify['source'] = vacuum;
            sequen = _closure1_slot0;
            config = _closure1_slot2;
            vacuum = 67;
            vacuum = config[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            vacuum = vacuum.IconSizes;
            vacuum = vacuum.SMALL_20;
            verify['iconSize'] = vacuum;
            vacuum = function() { // Original name: onPress
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot9;
                    if(michal) { _fun00018_ip = 66; continue _fun00017 }
 10:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 75;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.showSimpleMediaKeyboard;
                    zuuluu = _closure2_slot0;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.dismiss;
                    michal = michal.bind(zuuluu)();
                    _fun00018_ip = 76; continue _fun00017;
 66:
                    michal = _closure2_slot5;
                    entity = undefined;
                    entity = michal.bind(entity)();
 76:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 76;
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
            verify['onPress'] = vacuum;
            verify['foregroundRipple'] = sizing;
            romeon = ctrled.bind(tangon)(update, verify);
 761:
            verify = new Array(4);
            verify[0] = romeon;
            if(!offset) { _fun00012_ip = 957; continue _fun00011 }
 775:
            ctrled = _closure1_slot29;
            sequen = _closure1_slot0;
            config = _closure1_slot2;
            romeon = 72;
            romeon = config[romeon];
            romeon = sequen.bind(tangon)(romeon);
            update = romeon.HeaderActionButton;
            romeon = {};
            vacuum = 41;
            record = config[vacuum];
            record = sequen.bind(tangon)(record);
            cntext = record.intl;
            record = cntext.string;
            vacuum = config[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.112vVF;
            vacuum = record.bind(cntext)(vacuum);
            romeon['accessibilityLabel'] = vacuum;
            record = output.actionButton;
            vacuum = new Array(2);
            vacuum[0] = record;
            record = output.mediaButton;
            vacuum[1] = record;
            romeon['style'] = vacuum;
            record = _closure1_slot1;
            vacuum = 68;
            vacuum = config[vacuum];
            vacuum = record.bind(tangon)(vacuum);
            romeon['source'] = vacuum;
            vacuum = 67;
            vacuum = config[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            vacuum = vacuum.IconSizes;
            vacuum = vacuum.SMALL_20;
            romeon['iconSize'] = vacuum;
            vacuum = function() { // Original name: onPress
                tangon = _closure1_slot6;
                entity = tangon.dismiss;
                entity = entity.bind(tangon)();
                report = _closure1_slot1;
                romeon = _closure1_slot2;
                entity = 77;
                tangon = romeon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.openLazy;
                yankee = _closure1_slot0;
                zuuluu = 50;
                zuuluu = romeon[zuuluu];
                golfie = yankee.bind(entity)(zuuluu);
                zuuluu = 78;
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
                    michal = _closure2_slot10;
                    michal = michal.bind(entity)();
                    return entity;
                };
                zuuluu['onSave'] = option;
                option = 41;
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
                    michal = _closure2_slot10;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                zuuluu['onClose'] = michal;
                michal = 'ForumPostTagsActionSheet';
                michal = report.bind(oscard)(tangon, michal, zuuluu);
                return entity;
            };
            romeon['onPress'] = vacuum;
            romeon['foregroundRipple'] = sizing;
            offset = ctrled.bind(tangon)(update, romeon);
 957:
            verify[1] = offset;
            romeon = _closure1_slot0;
            update = _closure1_slot2;
            offset = 43;
            offset = update[offset];
            offset = romeon.bind(tangon)(offset);
            offset = offset.PostComposerInputs;
            offset = offset.CONTENT;
            offset = yankee === offset;
            if(!offset) { _fun00012_ip = 1160; continue _fun00011 }
 1003:
            update = _closure1_slot29;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            yankee = 72;
            yankee = sequen[yankee];
            yankee = vacuum.bind(tangon)(yankee);
            romeon = yankee.HeaderActionButton;
            yankee = {};
            ctrled = 41;
            config = sequen[ctrled];
            config = vacuum.bind(tangon)(config);
            record = config.intl;
            config = record.string;
            ctrled = sequen[ctrled];
            ctrled = vacuum.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.iZ7Mz8;
            ctrled = config.bind(record)(ctrled);
            yankee['accessibilityLabel'] = ctrled;
            ctrled = output.actionButton;
            yankee['style'] = ctrled;
            config = _closure1_slot1;
            ctrled = 79;
            ctrled = sequen[ctrled];
            ctrled = config.bind(tangon)(ctrled);
            yankee['source'] = ctrled;
            ctrled = 67;
            ctrled = sequen[ctrled];
            ctrled = vacuum.bind(tangon)(ctrled);
            ctrled = ctrled.IconSizes;
            ctrled = ctrled.SMALL_20;
            yankee['iconSize'] = ctrled;
            yankee['onPress'] = source;
            yankee['foregroundRipple'] = sizing;
            offset = update.bind(tangon)(romeon, yankee);
 1160:
            verify[2] = offset;
            romeon = _closure1_slot29;
            yankee = _closure1_slot1;
            offset = _closure1_slot2;
            update = 80;
            offset = offset[update];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            sequen = _closure1_slot0;
            config = _closure1_slot2;
            source = 41;
            ctrled = config[source];
            ctrled = sequen.bind(tangon)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            source = config[source];
            source = sequen.bind(tangon)(source);
            source = source.t;
            if(echoed) { _fun00012_ip = 1252; continue _fun00011 }
 1237:
            echoed = source.pIuQIy;
            echoed = ctrled.bind(vacuum)(echoed);
            _fun00012_ip = 1263; continue _fun00011;
 1252:
            source = source.R3BPHx;
            echoed = ctrled.bind(vacuum)(source);
 1263:
            offset['text'] = echoed;
            echoed = _closure1_slot0;
            result = _closure1_slot2;
            result = result[update];
            result = echoed.bind(tangon)(result);
            echoed = result.ButtonLooks;
            if(kiloes) { _fun00012_ip = 1301; continue _fun00011 }
 1293:
            result = echoed.OUTLINED;
            _fun00012_ip = 1307; continue _fun00011;
 1301:
            result = echoed.FILLED;
 1307:
            offset['look'] = result;
            offset['shrink'] = sizing;
            offset['foregroundRipple'] = sizing;
            sizing = output.postButton;
            offset['style'] = sizing;
            if(kiloes) { _fun00012_ip = 1343; continue _fun00011 }
 1335:
            sizing = output.postButtonTextDisabled;
            _fun00012_ip = 1349; continue _fun00011;
 1343:
            sizing = output.postButtonText;
 1349:
            offset['textStyle'] = sizing;
            offset['loading'] = backup;
            if(backup) { _fun00012_ip = 1365; continue _fun00011 }
 1362:
            backup = !kiloes;
 1365:
            offset['disabled'] = backup;
            backup = function() { // Original name: renderIcon
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tangon = _closure1_slot29;
                    michal = _closure1_slot1;
                    entity = _closure1_slot2;
                    report = 67;
                    entity = entity[report];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    option = _closure2_slot3;
                    verify = _closure2_slot7;
                    if(option) { _fun00020_ip = 58; continue _fun00019 }
 45:
                    option = verify.postIconColorDisabled;
                    option = option.color;
                    _fun00020_ip = 69; continue _fun00019;
 58:
                    verify = verify.postIconColor;
                    option = verify.color;
 69:
                    entity['color'] = option;
                    oscard = _closure2_slot7;
                    oscard = oscard.postIcon;
                    entity['style'] = oscard;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = golfie[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.Sizes;
                    report = report.SMALL;
                    entity['size'] = report;
                    report = 81;
                    report = golfie[report];
                    report = oscard.bind(zuuluu)(report);
                    entity['source'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            offset['renderIcon'] = backup;
            foxtra = function() { // Original name: onPress
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00022_ip = 23; continue _fun00021 }
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
    var _closure1_slot37 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Keyboard;
    var _closure1_slot6 = golfie;
    golfie = tangon.Pressable;
    var _closure1_slot7 = golfie;
    backup = tangon.StyleSheet;
    tangon = tangon.View;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot10 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DraftType;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    offset = 8;
    tangon = oscard[offset];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 9;
    golfie = oscard[tangon];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot15 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SlowmodeType;
    var _closure1_slot16 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot18 = tangon;
    sizing = 12;
    tangon = oscard[sizing];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AbortCodes;
    var _closure1_slot20 = golfie;
    golfie = tangon.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot21 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot22 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelFlags;
    var _closure1_slot23 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot24 = tangon;
    output = 16;
    tangon = oscard[output];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ContentDismissActionType;
    var _closure1_slot25 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ExpressionPickerViewType;
    var _closure1_slot26 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.OpenThreadAnalyticsLocations;
    var _closure1_slot27 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.Fonts;
    tangon = tangon.NOOP;
    var _closure1_slot28 = tangon;
    kiloes = 20;
    tangon = oscard[kiloes];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot29 = tangon;
    tangon = oscard[kiloes];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot30 = tangon;
    tangon = oscard[kiloes];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot31 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 1, 'backgroundColor': null, 'position': 'relative'};
    yankee = 22;
    result = oscard[yankee];
    result = romeon.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = result;
    tangon['container'] = verify;
    verify = {};
    verify['paddingBottom'] = output;
    tangon['scrollViewContentContainer'] = verify;
    verify = {};
    output = 40;
    verify['height'] = output;
    tangon['avatarContainer'] = verify;
    verify = {};
    verify['marginRight'] = sizing;
    tangon['avatar'] = verify;
    verify = {};
    verify['padding'] = offset;
    tangon['titleInput'] = verify;
    verify = {'minHeight': 40, 'height': 'auto'};
    foxtra = foxtra.DISPLAY_SEMIBOLD;
    verify['fontFamily'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.HEADER_PRIMARY;
    verify['color'] = foxtra;
    tangon['titleInputText'] = verify;
    verify = {'width': '100%', 'height': '100%', 'padding': 0, 'lineHeight': 20, 'color': null, 'textAlignVertical': 'top'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.HEADER_PRIMARY;
    verify['color'] = foxtra;
    foxtra = 'top';
    tangon['contentInput'] = verify;
    verify = {};
    verify['marginEnd'] = offset;
    tangon['postIcon'] = verify;
    verify = {};
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.WHITE;
    verify['color'] = sizing;
    tangon['postIconColor'] = verify;
    verify = {};
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_SECONDARY;
    verify['color'] = sizing;
    tangon['postIconColorDisabled'] = verify;
    verify = {'marginLeft': 'auto', 'borderRadius': null, 'paddingHorizontal': 12, 'height': 40, 'overflow': 'hidden'};
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    verify['borderRadius'] = sizing;
    tangon['postButton'] = verify;
    verify = {};
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.WHITE;
    verify['color'] = sizing;
    tangon['postButtonText'] = verify;
    verify = {};
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.HEADER_SECONDARY;
    verify['color'] = sizing;
    tangon['postButtonTextDisabled'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'padding': 8};
    tangon['tags'] = verify;
    verify = {};
    verify['marginRight'] = offset;
    tangon['tagIcon'] = verify;
    verify = {'flex': 1, 'flexDirection': 'row', 'paddingHorizontal': 12, 'paddingTop': 8};
    tangon['editor'] = verify;
    verify = {'width': '100%', 'flex': 1, 'flexDirection': 'column', 'minHeight': 200};
    tangon['editorBody'] = verify;
    verify = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'flex-end'};
    tangon['usernameToChannel'] = verify;
    verify = {};
    verify['lineHeight'] = kiloes;
    tangon['channelName'] = verify;
    verify = {};
    update = backup.absoluteFillObject;
    source = verify;
    kiloes = copyDataProperties(source, update);
    kiloes = backup.hairlineWidth;
    backup = 'borderTopWidth';
    verify[backup] = kiloes;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    kiloes = backup.BACKGROUND_MODIFIER_ACCENT;
    backup = 'borderTopColor';
    verify[backup] = kiloes;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    kiloes = backup.BACKGROUND_PRIMARY;
    backup = 'backgroundColor';
    verify[backup] = kiloes;
    verify[foxtra] = entity;
    tangon['actionsContainer'] = verify;
    verify = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'width': '100%'};
    tangon['actions'] = verify;
    verify = {'height': 40, 'minHeight': 40, 'maxHeight': 40, 'width': 40, 'minWidth': 40, 'maxWidth': 40, 'borderRadius': 20, 'color': null, 'backgroundColor': null, 'marginLeft': 0, 'marginRight': 0, 'overflow': 'hidden'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_NORMAL;
    verify['color'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = foxtra;
    tangon['actionButton'] = verify;
    verify = {};
    verify['marginRight'] = offset;
    tangon['mediaButton'] = verify;
    verify = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'zIndex': 100};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = yankee;
    tangon['horizontalAutocomplete'] = verify;
    verify = {'marginBottom': 16, 'marginLeft': 16, 'marginRight': 16};
    tangon['nameError'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tangon['messageError'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot32 = tangon;
    tangon = {};
    golfie = 'function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}';
    tangon['code'] = golfie;
    var _closure1_slot33 = tangon;
    tangon = 82;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/native/composer/ForumComposer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ForumComposer
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            limora = entity.parentChannel;
            var _closure2_slot0 = limora;
            michal = entity.thread;
            var _closure2_slot1 = michal;
            variable38 = entity.threadSettingsDraft;
            var _closure2_slot2 = variable38;
            verify = entity.onClose;
            var _closure2_slot3 = verify;
            variable40 = entity.message;
            var _closure2_slot4 = variable40;
            sequen = entity.isEdit;
            var _closure2_slot5 = sequen;
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
            entity = _closure1_slot32;
            vacuum = entity.bind(report)();
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
            variable39 = zuuluu.bind(oscard)(entity);
            oscard = _closure1_slot0;
            zuuluu = 24;
            golfie = tangon[zuuluu];
            foxtra = oscard.bind(report)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot18;
            offset = new Array(1);
            offset[0] = golfie;
            option = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = _closure1_slot18;
                    entity = michal.getCurrentUser;
                    michal = entity.bind(michal)();
                    entity = null;
                    zuuluu = entity != michal;
                    if(!zuuluu) { _fun00026_ip = 28; continue _fun00025 }
 25:
                    entity = michal;
 28:
                    return entity;
                }
            };
            golfie = new Array(0);
            variable41 = romeon.bind(foxtra)(offset, option, golfie);
            var _closure2_slot7 = variable41;
            golfie = tangon[zuuluu];
            romeon = oscard.bind(report)(golfie);
            offset = romeon.useStateFromStores;
            golfie = _closure1_slot12;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.getSelfMember;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = offset.bind(romeon)(option, golfie);
            golfie = tangon[zuuluu];
            foxtra = oscard.bind(report)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot10;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                tangon = _closure1_slot10;
                zuuluu = tangon.getDraft;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot11;
                entity = entity.ChannelMessage;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            output = romeon.bind(foxtra)(offset, golfie);
            tangon = tangon[zuuluu];
            offset = oscard.bind(report)(tangon);
            golfie = offset.useStateFromStores;
            tangon = _closure1_slot9;
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
                entity = _closure1_slot9;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(offset)(oscard, tangon);
            golfie = _closure1_slot1;
            offset = _closure1_slot2;
            tangon = 22;
            tangon = offset[tangon];
            tangon = golfie.bind(report)(tangon);
            tangon = tangon.unsafe_rawColors;
            if(oscard) { _fun00024_ip = 459; continue _fun00023 }
 451:
            variable46 = tangon.PRIMARY_460;
            _fun00024_ip = 465; continue _fun00023;
 459:
            variable46 = tangon.PRIMARY_330;
 465:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            golfie = oscard[zuuluu];
            foxtra = tangon.bind(report)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot15;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                tangon = _closure1_slot15;
                zuuluu = tangon.getSlowmodeCooldownGuess;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot16;
                entity = entity.CreateThread;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            cntext = romeon.bind(foxtra)(offset, golfie);
            _closure2_slot8 = cntext;
            golfie = oscard[zuuluu];
            foxtra = tangon.bind(report)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot17;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                tangon = _closure1_slot17;
                zuuluu = tangon.getUploads;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot11;
                entity = entity.ChannelMessage;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            config = romeon.bind(foxtra)(offset, golfie);
            _closure2_slot9 = config;
            zuuluu = oscard[zuuluu];
            offset = tangon.bind(report)(zuuluu);
            golfie = offset.useStateFromStoresObject;
            zuuluu = _closure1_slot19;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                michal = _closure1_slot19;
                michal = michal.keyboardType;
                entity['keyboardType'] = michal;
                return entity;
            };
            zuuluu = golfie.bind(offset)(tangon, zuuluu);
            variable44 = zuuluu.keyboardType;
            _closure2_slot10 = variable44;
            tangon = _closure1_slot1;
            zuuluu = 26;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            record = zuuluu.bind(report)();
            _closure2_slot11 = record;
            tangon = _closure1_slot5;
            zuuluu = tangon.useState;
            variable48 = false;
            tangon = zuuluu.bind(tangon)(variable48);
            zuuluu = _closure1_slot4;
            kiloes = 2;
            zuuluu = zuuluu.bind(report)(tangon, kiloes);
            golfie = 0;
            papara = zuuluu[golfie];
            tangon = 1;
            zuuluu = zuuluu[tangon];
            _closure2_slot12 = zuuluu;
            offset = _closure1_slot5;
            oscard = offset.useState;
            if(sequen) { _fun00024_ip = 707; continue _fun00023 }
 691:
            zuuluu = entity == variable38;
            foxtra = undefined;
            if(zuuluu) { _fun00024_ip = 705; continue _fun00023 }
 700:
            foxtra = variable38.name;
 705:
            _fun00024_ip = 724; continue _fun00023;
 707:
            romeon = entity == michal;
            zuuluu = undefined;
            if(romeon) { _fun00024_ip = 721; continue _fun00023 }
 716:
            zuuluu = michal.name;
 721:
            foxtra = zuuluu;
 724:
            sizing = entity != foxtra;
            romeon = '';
            zuuluu = romeon;
            if(!sizing) { _fun00024_ip = 741; continue _fun00023 }
 738:
            zuuluu = foxtra;
 741:
            oscard = oscard.bind(offset)(zuuluu);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(oscard, kiloes);
            variable36 = zuuluu[golfie];
            _closure2_slot13 = variable36;
            zuuluu = zuuluu[tangon];
            _closure2_slot14 = zuuluu;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            foxtra = 27;
            zuuluu = zuuluu[foxtra];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.useChannelTemplate;
            result = zuuluu.bind(oscard)(limora);
            offset = romeon;
            if(!sequen) { _fun00024_ip = 871; continue _fun00023 }
 809:
            zuuluu = entity != variable40;
            offset = romeon;
            if(!zuuluu) { _fun00024_ip = 871; continue _fun00023 }
 819:
            zuuluu = entity != michal;
            offset = romeon;
            if(!zuuluu) { _fun00024_ip = 871; continue _fun00023 }
 829:
            oscard = _closure1_slot1;
            sizing = _closure1_slot2;
            zuuluu = 28;
            zuuluu = sizing[zuuluu];
            echoed = oscard.bind(report)(zuuluu);
            sizing = echoed.unparse;
            oscard = variable40.content;
            zuuluu = michal.id;
            offset = sizing.bind(echoed)(oscard, zuuluu);
 871:
            oscard = _closure1_slot5;
            zuuluu = oscard.useState;
            if(sequen) { _fun00024_ip = 913; continue _fun00023 }
 883:
            sizing = result;
            if(!(entity != output)) { _fun00024_ip = 910; continue _fun00023 }
 890:
            echoed = output.trim;
            echoed = echoed.bind(output)();
            sizing = result;
            if(!(romeon !== echoed)) { _fun00024_ip = 910; continue _fun00023 }
 907:
            sizing = output;
 910:
            offset = sizing;
 913:
            oscard = zuuluu.bind(oscard)(offset);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(oscard, kiloes);
            source = zuuluu[golfie];
            _closure2_slot15 = source;
            zuuluu = zuuluu[tangon];
            _closure2_slot16 = zuuluu;
            offset = _closure1_slot0;
            oscard = _closure1_slot2;
            sizing = oscard[foxtra];
            output = offset.bind(report)(sizing);
            sizing = output.useAvailableTags;
            output = sizing.bind(output)(limora);
            oscard = oscard[foxtra];
            offset = offset.bind(report)(oscard);
            oscard = offset.useAppliedTags;
            sizing = oscard.bind(offset)(michal);
            _closure2_slot17 = sizing;
            foxtra = _closure1_slot5;
            offset = foxtra.useState;
            if(!sequen) { _fun00024_ip = 1015; continue _fun00023 }
 1008:
            oscard = sizing;
            if(!(entity == output)) { _fun00024_ip = 1019; continue _fun00023 }
 1015:
            oscard = new Array(0);
 1019:
            oscard = offset.bind(foxtra)(oscard);
            offset = _closure1_slot4;
            oscard = offset.bind(report)(oscard, kiloes);
            sierra = oscard[golfie];
            _closure2_slot18 = sierra;
            status = oscard[tangon];
            foxtra = _closure1_slot5;
            oscard = foxtra.useState;
            oscard = oscard.bind(foxtra)(entity);
            oscard = offset.bind(report)(oscard, kiloes);
            output = oscard[golfie];
            oscard = oscard[tangon];
            _closure2_slot19 = oscard;
            foxtra = _closure1_slot5;
            oscard = foxtra.useState;
            oscard = oscard.bind(foxtra)(entity);
            offset = offset.bind(report)(oscard, kiloes);
            oscard = offset[golfie];
            offset = offset[tangon];
            _closure2_slot20 = offset;
            offset = entity == option;
            variable53 = undefined;
            if(offset) { _fun00024_ip = 1125; continue _fun00023 }
 1119:
            variable53 = option.colorString;
 1125:
            offset = entity == option;
            variable56 = undefined;
            if(offset) { _fun00024_ip = 1140; continue _fun00023 }
 1134:
            variable56 = option.nick;
 1140:
            if(!(entity == variable56)) { _fun00024_ip = 1175; continue _fun00023 }
 1144:
            offset = _closure1_slot1;
            foxtra = _closure1_slot2;
            option = 29;
            option = foxtra[option];
            offset = offset.bind(report)(option);
            option = offset.getName;
            variable56 = option.bind(offset)(variable41);
 1175:
            offset = _closure1_slot5;
            option = offset.useRef;
            variable51 = option.bind(offset)(entity);
            _closure2_slot21 = variable51;
            offset = _closure1_slot1;
            foxtra = _closure1_slot2;
            option = 30;
            option = foxtra[option];
            offset = offset.bind(report)(option);
            variable49 = true;
            option = {'includeKeyboardHeightIOS': true, 'includeCustomKeyboardHeightIOS': false};
            option = offset.bind(report)(option);
            option = option.insets;
            ctrled = _closure1_slot5;
            update = ctrled.useCallback;
            echoed = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure2_slot21;
                    michal = entity.current;
                    entity = null;
                    if(!(entity != michal)) { _fun00028_ip = 28; continue _fun00027 }
 18:
                    entity = michal.focus;
                    entity = entity.bind(michal)();
 28:
                    entity = undefined;
                    return entity;
                }
            };
            offset = new Array(0);
            whisks = update.bind(ctrled)(echoed, offset);
            echoed = _closure1_slot0;
            offset = 31;
            update = foxtra[offset];
            ctrled = echoed.bind(report)(update);
            update = ctrled.useSharedValue;
            target = update.bind(ctrled)(golfie);
            _closure2_slot22 = target;
            foxtra = foxtra[offset];
            update = echoed.bind(report)(foxtra);
            echoed = update.useAnimatedScrollHandler;
            foxtra = function(argFoo) { // Original name: K
                entity = argFoo;
                entity = entity.contentOffset;
                zuuluu = entity.y;
                michal = _closure2_slot22;
                entity = michal.set;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            ctrled = {};
            ctrled['scrollTopValue'] = target;
            foxtra['__closure'] = ctrled;
            ctrled = 16880842576840.0;
            foxtra['__workletHash'] = ctrled;
            ctrled = _closure1_slot33;
            foxtra['__initData'] = ctrled;
            foxtra = echoed.bind(update)(foxtra);
            target = _closure1_slot5;
            ctrled = target.useCallback;
            update = new Array(2);
            update[0] = sequen;
            echoed = limora.id;
            update[1] = echoed;
            echoed = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot5;
                    if(michal) { _fun00030_ip = 65; continue _fun00029 }
 13:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 32;
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
                    michal = _closure2_slot14;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            equals = ctrled.bind(target)(echoed, update);
            target = _closure1_slot5;
            ctrled = target.useCallback;
            update = new Array(1);
            update[0] = verify;
            echoed = function(argFoo) {
                michal = _closure2_slot3;
                entity = undefined;
                oscard = true;
                michal = michal.bind(entity)(oscard);
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 33;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.transitionToThread;
                zuuluu = {};
                zuuluu['navigationReplace'] = oscard;
                michal = _closure1_slot27;
                michal = michal.FORUM;
                zuuluu['source'] = michal;
                michal = argFoo;
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            ctrled = ctrled.bind(target)(echoed, update);
            _closure2_slot23 = ctrled;
            quebec = _closure1_slot5;
            target = quebec.useMemo;
            update = new Array(1);
            update[0] = sierra;
            echoed = function() {
                entity = global;
                zuuluu = entity.Set;
                tangon = _closure2_slot18;
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
            quebec = target.bind(quebec)(echoed, update);
            _closure2_slot24 = quebec;
            target = _closure1_slot5;
            update = target.useMemo;
            echoed = new Array(1);
            echoed[0] = sizing;
            sizing = function() {
                entity = global;
                zuuluu = entity.Set;
                tangon = _closure2_slot17;
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
            update = update.bind(target)(sizing, echoed);
            _closure2_slot25 = update;
            variable37 = _closure1_slot5;
            target = variable37.useCallback;
            sizing = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                            StartGenerator();
                            option = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00032_ip = 381; continue _fun00031 }
 13:
                            michal = _closure2_slot1;
                            tangon = null;
                            if(!(tangon != michal)) { _fun00032_ip = 373; continue _fun00031 }
 29:
                            michal = _closure2_slot4;
                            michal = tangon != michal;
                            if(!michal) { _fun00032_ip = 53; continue _fun00031 }
 40:
                            tangon = _closure2_slot4;
                            tangon = tangon.content;
                            michal = tangon !== option;
 53:
                            if(!michal) { _fun00032_ip = 118; continue _fun00031 }
 56:
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 34;
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
                            michal = 35;
                            michal = report[michal];
                            report = undefined;
                            option = oscard.bind(report)(michal);
                            golfie = option.isEqual;
                            oscard = _closure2_slot25;
                            michal = _closure2_slot24;
                            michal = golfie.bind(option)(oscard, michal);
                            if(michal) { _fun00032_ip = 242; continue _fun00031 }
 166:
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            michal = 36;
                            michal = golfie[michal];
                            option = oscard.bind(report)(michal);
                            golfie = option.updateForumPostTags;
                            michal = _closure2_slot1;
                            oscard = michal.id;
                            michal = global;
                            offset = michal.Array;
                            verify = offset.from;
                            michal = _closure2_slot24;
                            michal = verify.bind(offset)(michal);
                            michal = golfie.bind(option)(oscard, michal);
                            SaveGenerator(address=233);
 231:
                            return michal;
 233:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(!oscard) { _fun00032_ip = 242; continue _fun00031 }
 239:
                            return michal;
 242:
                            michal = _closure2_slot1;
                            oscard = michal.name;
                            michal = _closure2_slot13;
                            if(!(oscard !== michal)) { _fun00032_ip = 320; continue _fun00031 }
 259:
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            michal = 37;
                            michal = golfie[michal];
                            option = oscard.bind(report)(michal);
                            golfie = option.saveChannel;
                            michal = _closure2_slot1;
                            oscard = michal.id;
                            michal = {};
                            verify = _closure2_slot13;
                            michal['name'] = verify;
                            michal = golfie.bind(option)(oscard, michal);
                            SaveGenerator(address=314);
 312:
                            return michal;
 314:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(oscard) { _fun00032_ip = 378; continue _fun00031 }
 320:
                            oscard = _closure1_slot14;
                            tangon = oscard.getChannelId;
                            oscard = tangon.bind(oscard)();
                            tangon = _closure2_slot1;
                            tangon = tangon.id;
                            if(!(oscard === tangon)) { _fun00032_ip = 360; continue _fun00031 }
 347:
                            oscard = _closure2_slot3;
                            tangon = true;
                            tangon = oscard.bind(report)(tangon);
                            _fun00032_ip = 373; continue _fun00031;
 360:
                            tangon = _closure2_slot23;
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
            echoed = sizing.bind(report)();
            sizing = new Array(7);
            sizing[0] = michal;
            sizing[1] = variable40;
            sizing[2] = update;
            sizing[3] = quebec;
            sizing[4] = variable36;
            sizing[5] = ctrled;
            sizing[6] = verify;
            variable37 = target.bind(variable37)(echoed, sizing);
            _closure2_slot26 = variable37;
            echoed = entity == variable38;
            sizing = undefined;
            if(echoed) { _fun00024_ip = 1581; continue _fun00023 }
 1576:
            sizing = variable38.name;
 1581:
            sizing = entity != sizing;
            if(!sizing) { _fun00024_ip = 1602; continue _fun00023 }
 1588:
            echoed = variable38.name;
            echoed = echoed.length;
            sizing = echoed > golfie;
 1602:
            echoed = source.trim;
            echoed = echoed.bind(source)();
            target = config.length;
            target = target > golfie;
            romeon = romeon === result;
            if(romeon) { _fun00024_ip = 1632; continue _fun00023 }
 1628:
            romeon = echoed !== result;
 1632:
            if(!romeon) { _fun00024_ip = 1653; continue _fun00023 }
 1635:
            result = echoed.length;
            result = result > golfie;
            if(result) { _fun00024_ip = 1650; continue _fun00023 }
 1647:
            result = target;
 1650:
            romeon = result;
 1653:
            target = !sequen;
            if(!target) { _fun00024_ip = 1662; continue _fun00023 }
 1659:
            target = sizing;
 1662:
            if(!target) { _fun00024_ip = 1668; continue _fun00023 }
 1665:
            target = romeon;
 1668:
            if(target) { _fun00024_ip = 1760; continue _fun00023 }
 1671:
            romeon = sequen;
            if(!romeon) { _fun00024_ip = 1757; continue _fun00023 }
 1677:
            result = entity == michal;
            sizing = undefined;
            if(result) { _fun00024_ip = 1691; continue _fun00023 }
 1686:
            sizing = michal.name;
 1691:
            sizing = variable36 !== sizing;
            if(sizing) { _fun00024_ip = 1716; continue _fun00023 }
 1698:
            variable42 = entity == variable40;
            result = undefined;
            if(variable42) { _fun00024_ip = 1712; continue _fun00023 }
 1707:
            result = variable40.content;
 1712:
            sizing = echoed !== result;
 1716:
            if(sizing) { _fun00024_ip = 1754; continue _fun00023 }
 1719:
            echoed = _closure1_slot1;
            variable40 = _closure1_slot2;
            result = 35;
            result = variable40[result];
            echoed = echoed.bind(report)(result);
            result = echoed.isEqual;
            result = result.bind(echoed)(update, quebec);
            sizing = !result;
 1754:
            romeon = sizing;
 1757:
            target = romeon;
 1760:
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            romeon = 38;
            romeon = result[romeon];
            update = sizing.bind(report)(romeon);
            echoed = update.useCreateForumPost;
            romeon = {};
            romeon['parentChannel'] = limora;
            romeon['threadSettings'] = variable38;
            romeon['appliedTags'] = quebec;
            romeon['onThreadCreated'] = ctrled;
            quebec = echoed.bind(update)(romeon);
            _closure2_slot27 = quebec;
            ctrled = _closure1_slot5;
            update = ctrled.useCallback;
            romeon = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00034_ip = 608; continue _fun00033 }
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
                            if(tangon) { _fun00034_ip = 605; continue _fun00033 }
 42:
                            backup = _closure2_slot0;
                            foxtra = backup.hasFlag;
                            romeon = _closure1_slot23;
                            romeon = romeon.REQUIRE_TAG;
                            romeon = foxtra.bind(backup)(romeon);
                            if(!romeon) { _fun00034_ip = 94; continue _fun00033 }
 76:
                            romeon = _closure2_slot18;
                            foxtra = romeon.length;
                            romeon = 0;
                            if(!(romeon !== foxtra)) { _fun00034_ip = 563; continue _fun00033 }
 94:
                            romeon = _closure2_slot5;
                            if(!romeon) { _fun00034_ip = 114; continue _fun00033 }
 101:
                            foxtra = _closure2_slot1;
                            romeon = null;
                            if(!(romeon != foxtra)) { _fun00034_ip = 602; continue _fun00033 }
 114:
                            foxtra = _closure2_slot12;
                            romeon = true;
                            romeon = foxtra.bind(zuuluu)(romeon);
                            foxtra = _closure1_slot1;
                            backup = _closure1_slot2;
                            romeon = 28;
                            romeon = backup[romeon];
                            kiloes = foxtra.bind(zuuluu)(romeon);
                            backup = kiloes.parse;
                            romeon = _closure2_slot5;
                            if(romeon) { _fun00034_ip = 164; continue _fun00033 }
 158:
                            foxtra = _closure2_slot0;
                            _fun00034_ip = 168; continue _fun00033;
 164:
                            foxtra = _closure2_slot1;
 168:
                            romeon = _closure2_slot15;
                            romeon = backup.bind(kiloes)(foxtra, romeon);
                            verify = romeon.content;
 183: // try_start_0 // try_start_2
                            romeon = _closure2_slot19;
                            kiloes = null;
                            romeon = romeon.bind(zuuluu)(kiloes);
                            romeon = _closure2_slot20;
                            romeon = romeon.bind(zuuluu)(kiloes);
                            romeon = _closure2_slot5;
                            if(romeon) { _fun00034_ip = 278; continue _fun00033 }
 210:
                            backup = _closure2_slot27;
                            foxtra = verify;
                            romeon = offset;
                            kiloes = kiloes != romeon;
                            romeon = undefined;
                            if(!kiloes) { _fun00034_ip = 243; continue _fun00033 }
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
                            if(!romeon) { _fun00034_ip = 297; continue _fun00033 }
 264: // try_end0 // try_end2
                            foxtra = _closure2_slot12;
                            romeon = false;
                            romeon = foxtra.bind(zuuluu)(romeon);
                            return offset;
 278: // try_start_1 // try_start_3
                            offset = _closure2_slot26;
                            verify = offset.bind(zuuluu)(verify);
                            SaveGenerator(address=291);
 289:
                            return verify;
 291:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                            if(offset) { _fun00034_ip = 302; continue _fun00033 }
 297: // try_end1
                            _fun00034_ip = 535; continue _fun00033;
 302: // try_end3
                            romeon = _closure2_slot12;
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
                            if(romeon) { _fun00034_ip = 345; continue _fun00033 }
 340:
                            offset = yankee.code;
 345:
                            if(!(verify != offset)) { _fun00034_ip = 535; continue _fun00033 }
 352:
                            offset = oscard;
                            offset = offset.body;
                            option = offset;
                            yankee = verify == offset;
                            offset = undefined;
                            if(yankee) { _fun00034_ip = 377; continue _fun00033 }
 372:
                            offset = option.code;
 377:
                            option = _closure1_slot20;
                            option = option.AUTOMOD_TITLE_BLOCKED;
                            if(!(offset !== option)) { _fun00034_ip = 485; continue _fun00033 }
 391:
                            option = oscard;
                            option = option.body;
                            golfie = option;
                            verify = verify == option;
                            option = undefined;
                            if(verify) { _fun00034_ip = 416; continue _fun00033 }
 411:
                            option = golfie.code;
 416:
                            golfie = _closure1_slot20;
                            golfie = golfie.AUTOMOD_MESSAGE_BLOCKED;
                            if(!(option === golfie)) { _fun00034_ip = 535; continue _fun00033 }
 430:
                            option = _closure2_slot20;
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            golfie = 39;
                            golfie = offset[golfie];
                            yankee = verify.bind(zuuluu)(golfie);
                            offset = yankee.makeAutomodViolationError;
                            golfie = oscard;
                            verify = golfie.body;
                            golfie = _closure2_slot0;
                            golfie = offset.bind(yankee)(verify, golfie);
                            golfie = option.bind(zuuluu)(golfie);
                            _fun00034_ip = 535; continue _fun00033;
 485:
                            golfie = _closure2_slot19;
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 39;
                            option = offset[option];
                            offset = verify.bind(zuuluu)(option);
                            verify = offset.makeAutomodViolationError;
                            option = oscard.body;
                            oscard = _closure2_slot0;
                            oscard = verify.bind(offset)(option, oscard);
                            oscard = golfie.bind(zuuluu)(oscard);
 535: // try_end4
                            golfie = _closure2_slot12;
                            oscard = false;
                            oscard = golfie.bind(zuuluu)(oscard);
                            _fun00034_ip = 602; continue _fun00033;
 548: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=5);
                            option = _closure2_slot12;
                            golfie = false;
                            golfie = option.bind(zuuluu)(golfie);
                            throw oscard;
 563:
                            report = _closure2_slot20;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 39;
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
            echoed = romeon.bind(report)();
            romeon = new Array(8);
            romeon[0] = limora;
            variable38 = sierra.length;
            romeon[1] = variable38;
            romeon[2] = sequen;
            romeon[3] = michal;
            romeon[4] = source;
            romeon[5] = variable37;
            romeon[6] = quebec;
            romeon[7] = config;
            romeon = update.bind(ctrled)(echoed, romeon);
            _closure2_slot28 = romeon;
            ctrled = _closure1_slot5;
            update = ctrled.useCallback;
            echoed = new Array(6);
            echoed[0] = limora;
            echoed[1] = cntext;
            echoed[2] = record;
            echoed[3] = config;
            echoed[4] = romeon;
            echoed[5] = source;
            romeon = function(argFoo) {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.stickerId;
                    var _closure3_slot0 = tangon;
                    entity = _closure2_slot15;
                    entity = entity.length;
                    michal = 0;
                    if(!(michal === entity)) { _fun00036_ip = 55; continue _fun00035 }
 33:
                    entity = _closure2_slot9;
                    entity = entity.length;
                    if(!(michal === entity)) { _fun00036_ip = 55; continue _fun00035 }
 46:
                    entity = null;
                    if(!(entity != tangon)) { _fun00036_ip = 608; continue _fun00035 }
 55:
                    entity = _closure2_slot8;
                    if(!(!(entity > michal))) { _fun00036_ip = 608; continue _fun00035 }
 66:
                    entity = _closure2_slot15;
                    michal = entity.length;
                    entity = _closure2_slot11;
                    if(!(!(michal > entity))) { _fun00036_ip = 441; continue _fun00035 }
 86:
                    michal = _closure1_slot34;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 42;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = report.bind(zuuluu)(entity);
                    entity = entity.RESTRICTIONS;
                    yankee = michal.bind(zuuluu)(entity);
                    michal = yankee.bind(zuuluu)();
                    entity = michal.done;
                    offset = null;
                    report = false;
                    if(entity) { _fun00036_ip = 420; continue _fun00035 }
 145:
                    entity = michal.value;
                    foxtra = entity.check;
                    romeon = _closure2_slot15;
                    verify = _closure2_slot0;
                    entity = verify.getGuildId;
                    entity = entity.bind(verify)();
                    entity = offset != entity;
                    verify = foxtra.bind(zuuluu)(romeon, verify, entity);
                    if(!(report === verify)) { _fun00036_ip = 209; continue _fun00035 }
 189:
                    romeon = yankee.bind(zuuluu)();
                    entity = romeon.done;
                    michal = romeon;
                    if(entity) { _fun00036_ip = 420; continue _fun00035 }
 207:
                    _fun00036_ip = 145; continue _fun00035;
 209:
                    michal = _closure1_slot1;
                    yankee = _closure1_slot2;
                    entity = 40;
                    entity = yankee[entity];
                    report = michal.bind(zuuluu)(entity);
                    michal = report.show;
                    entity = {};
                    offset = _closure1_slot0;
                    oscard = 41;
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
                        zuuluu = _closure2_slot28;
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
                    michal = _closure2_slot28;
                    entity = {};
                    entity['stickerId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    _fun00036_ip = 608; continue _fun00035;
 441:
                    michal = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 40;
                    entity = offset[entity];
                    verify = undefined;
                    zuuluu = michal.bind(verify)(entity);
                    michal = zuuluu.show;
                    entity = {};
                    report = _closure1_slot0;
                    tangon = 41;
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
                    verify = _closure2_slot15;
                    verify = verify.length;
                    tangon['currentLength'] = verify;
                    option = _closure2_slot11;
                    tangon['maxLength'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
                    entity['body'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 608:
                    entity = undefined;
                    return entity;
                }
            };
            cntext = update.bind(ctrled)(romeon, echoed);
            update = _closure1_slot5;
            echoed = update.useCallback;
            romeon = new Array(2);
            romeon[0] = zuuluu;
            zuuluu = limora.id;
            romeon[1] = zuuluu;
            zuuluu = function(argFoo) {
                zuuluu = argFoo;
                report = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 32;
                michal = michal[entity];
                entity = undefined;
                golfie = report.bind(entity)(michal);
                oscard = golfie.changeDraft;
                report = _closure2_slot0;
                report = report.id;
                tangon = _closure1_slot11;
                tangon = tangon.ChannelMessage;
                tangon = oscard.bind(golfie)(report, zuuluu, tangon);
                michal = _closure2_slot16;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            variable45 = echoed.bind(update)(zuuluu, romeon);
            zuuluu = 43;
            zuuluu = result[zuuluu];
            echoed = sizing.bind(report)(zuuluu);
            romeon = echoed.useFocusHandlers;
            zuuluu = {};
            zuuluu['titleInput'] = variable39;
            zuuluu['contentInput'] = variable51;
            zuuluu = romeon.bind(echoed)(zuuluu);
            romeon = zuuluu.setFocusedInput;
            _closure2_slot29 = romeon;
            record = zuuluu.focusLastInput;
            _closure2_slot30 = record;
            romeon = zuuluu.blurLastInput;
            _closure2_slot31 = romeon;
            config = zuuluu.focusedInput;
            echoed = _closure1_slot5;
            romeon = echoed.useState;
            zuuluu = {'start': 0, 'end': null};
            zuuluu = romeon.bind(echoed)(zuuluu);
            romeon = _closure1_slot4;
            zuuluu = romeon.bind(report)(zuuluu, kiloes);
            update = zuuluu[golfie];
            zuuluu = zuuluu[tangon];
            _closure2_slot32 = zuuluu;
            quebec = _closure1_slot5;
            ctrled = quebec.useCallback;
            echoed = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                tangon = entity.selection;
                zuuluu = _closure2_slot32;
                michal = {};
                report = michal;
                entity = copyDataProperties(report, tangon);
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = new Array(0);
            variable43 = ctrled.bind(quebec)(echoed, zuuluu);
            quebec = _closure1_slot5;
            ctrled = quebec.useCallback;
            echoed = function(argFoo) {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
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
                    zuuluu = 44;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00038_ip = 106; continue _fun00037 }
 64:
                    zuuluu = _closure2_slot21;
                    tangon = zuuluu.current;
                    _closure3_slot2 = tangon;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00038_ip = 106; continue _fun00037 }
 86:
                    zuuluu = global;
                    zuuluu = zuuluu.setTimeout;
                    michal = function() {
                        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                            tangon = _closure3_slot2;
                            zuuluu = tangon.setSelection;
                            michal = _closure3_slot0;
                            oscard = _closure3_slot1;
                            entity = null;
                            if(!(entity == oscard)) { _fun00040_ip = 33; continue _fun00039 }
 27:
                            entity = _closure3_slot0;
                            _fun00040_ip = 37; continue _fun00039;
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
            quebec = ctrled.bind(quebec)(echoed, zuuluu);
            zuuluu = 45;
            echoed = result[zuuluu];
            variable37 = sizing.bind(report)(echoed);
            ctrled = variable37.usePressEmojiHandler;
            echoed = {};
            echoed['selection'] = update;
            echoed['draftContent'] = source;
            echoed['handleTextChange'] = variable45;
            echoed['focusTextInput'] = whisks;
            echoed['setSelection'] = quebec;
            echoed = ctrled.bind(variable37)(echoed);
            _closure2_slot33 = echoed;
            zuuluu = result[zuuluu];
            ctrled = sizing.bind(report)(zuuluu);
            echoed = ctrled.usePressGIFHandler;
            zuuluu = {};
            zuuluu['selection'] = update;
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable45;
            zuuluu['focusTextInput'] = whisks;
            zuuluu['setSelection'] = quebec;
            zuuluu = echoed.bind(ctrled)(zuuluu);
            _closure2_slot34 = zuuluu;
            zuuluu = 46;
            zuuluu = result[zuuluu];
            ctrled = sizing.bind(report)(zuuluu);
            echoed = ctrled.usePressHorizontalAutocompleteItemHandler;
            zuuluu = {};
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable45;
            zuuluu['setSelection'] = quebec;
            ctrled = echoed.bind(ctrled)(zuuluu);
            zuuluu = 47;
            zuuluu = result[zuuluu];
            result = sizing.bind(report)(zuuluu);
            sizing = result.useBackspaceHandler;
            zuuluu = {};
            zuuluu['selection'] = update;
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable45;
            zuuluu = sizing.bind(result)(zuuluu);
            _closure2_slot35 = zuuluu;
            sizing = _closure1_slot5;
            zuuluu = sizing.useState;
            zuuluu = zuuluu.bind(sizing)(golfie);
            zuuluu = romeon.bind(report)(zuuluu, kiloes);
            romeon = zuuluu[golfie];
            zuuluu = zuuluu[tangon];
            _closure2_slot36 = zuuluu;
            kiloes = _closure1_slot5;
            golfie = kiloes.useCallback;
            tangon = function(argFoo) {
                zuuluu = _closure2_slot36;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                michal = entity.height;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = new Array(0);
            result = golfie.bind(kiloes)(tangon, zuuluu);
            echoed = limora;
            if(!sequen) { _fun00024_ip = 2402; continue _fun00023 }
 2399:
            echoed = michal;
 2402:
            _closure2_slot37 = echoed;
            if(!(entity != echoed)) { _fun00024_ip = 4113; continue _fun00023 }
 2413:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 39;
            golfie = tangon[michal];
            sizing = zuuluu.bind(report)(golfie);
            kiloes = sizing.renderError;
            golfie = {};
            golfie['content'] = variable36;
            quebec = kiloes.bind(sizing)(output, golfie);
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.renderError;
            michal = {};
            michal['content'] = source;
            michal['tags'] = sierra;
            variable50 = zuuluu.bind(tangon)(oscard, michal);
            michal = echoed.isMediaChannel;
            michal = michal.bind(echoed)();
            if(michal) { _fun00024_ip = 2502; continue _fun00023 }
 2496:
            kiloes = new Array(0);
            _fun00024_ip = 2545; continue _fun00023;
 2502:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 48;
            michal = tangon[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
            michal = new Array(1);
            michal[0] = zuuluu;
            kiloes = michal;
 2545:
            michal = function() { // Original name: MediaPostMultipleThumbnailActionSheetImporter
                zuuluu = _closure1_slot0;
                entity = _closure1_slot2;
                michal = 50;
                michal = entity[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 49;
                michal = entity[michal];
                entity = entity.paths;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            _closure2_slot38 = michal;
            tangon = _closure1_slot30;
            zuuluu = _closure1_slot8;
            michal = {};
            golfie = vacuum.container;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = {};
            sizing = option.top;
            golfie['paddingTop'] = sizing;
            option = option.bottom;
            option = option + romeon;
            golfie['paddingBottom'] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            option = _closure1_slot29;
            romeon = _closure1_slot1;
            variable38 = _closure1_slot2;
            oscard = 51;
            oscard = variable38[oscard];
            golfie = romeon.bind(report)(oscard);
            oscard = {};
            oscard['channel'] = echoed;
            sizing = 44;
            oscard['height'] = sizing;
            oscard['onClose'] = verify;
            verify = function() { // Original name: onGuidelinesPress
                michal = _closure2_slot31;
                entity = undefined;
                michal = michal.bind(entity)();
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 52;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openForumGuidelinesActionSheet;
                michal = {};
                report = _closure2_slot0;
                michal['channel'] = report;
                report = function() { // Original name: onClose
                    michal = _closure2_slot30;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['onClose'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard['onGuidelinesPress'] = verify;
            oscard['submitting'] = papara;
            oscard['title'] = variable36;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot30;
            option = _closure1_slot31;
            golfie = {};
            offset = variable38[offset];
            offset = romeon.bind(report)(offset);
            romeon = offset.ScrollView;
            offset = {'onScroll': null, 'scrollEventThrottle': 16, 'keyboardShouldPersistTaps': 'always', 'nestedScrollEnabled': false, 'contentContainerStyle': null, 'keyboardDismissMode': 'on-drag'};
            offset['onScroll'] = foxtra;
            foxtra = vacuum.scrollViewContentContainer;
            offset['contentContainerStyle'] = foxtra;
            output = _closure1_slot29;
            variable37 = _closure1_slot0;
            foxtra = 53;
            foxtra = variable38[foxtra];
            foxtra = variable37.bind(report)(foxtra);
            sizing = foxtra.FormInput;
            foxtra = {};
            foxtra['ref'] = variable39;
            variable39 = vacuum.titleInput;
            foxtra['style'] = variable39;
            variable39 = vacuum.titleInputText;
            foxtra['inputTextStyle'] = variable39;
            foxtra['showTopContainer'] = variable48;
            variable47 = 41;
            variable39 = variable38[variable47];
            variable39 = variable37.bind(report)(variable39);
            variable42 = variable39.intl;
            variable40 = variable42.string;
            variable39 = variable38[variable47];
            variable39 = variable37.bind(report)(variable39);
            variable39 = variable39.t;
            variable39 = variable39.lU4dDQ;
            variable39 = variable40.bind(variable42)(variable39);
            foxtra['placeholder'] = variable39;
            foxtra['placeholderTextColor'] = variable46;
            foxtra['large'] = variable49;
            foxtra['multiline'] = variable49;
            foxtra['value'] = variable36;
            variable36 = 54;
            variable36 = variable38[variable36];
            variable36 = variable37.bind(report)(variable36);
            variable36 = variable36.ClearButtonVisibility;
            variable36 = variable36.NEVER;
            foxtra['clearButtonVisibility'] = variable36;
            variable36 = _closure1_slot21;
            foxtra['maxLength'] = variable36;
            foxtra['onChange'] = equals;
            equals = function() { // Original name: onBlur
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    michal = _closure2_slot5;
                    if(michal) { _fun00042_ip = 181; continue _fun00041 }
 13:
                    michal = _closure2_slot2;
                    oscard = null;
                    tangon = oscard == michal;
                    zuuluu = undefined;
                    michal = undefined;
                    if(tangon) { _fun00042_ip = 39; continue _fun00041 }
 30:
                    tangon = _closure2_slot2;
                    michal = tangon.name;
 39:
                    if(!(oscard != michal)) { _fun00042_ip = 181; continue _fun00041 }
 46:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 55;
                    michal = golfie[michal];
                    golfie = report.bind(zuuluu)(michal);
                    michal = _closure2_slot2;
                    michal = oscard == michal;
                    report = undefined;
                    if(michal) { _fun00042_ip = 91; continue _fun00041 }
 82:
                    michal = _closure2_slot2;
                    report = michal.name;
 91:
                    michal = true;
                    michal = golfie.bind(zuuluu)(report, michal);
                    report = _closure2_slot2;
                    oscard = oscard == report;
                    report = undefined;
                    if(oscard) { _fun00042_ip = 121; continue _fun00041 }
 112:
                    oscard = _closure2_slot2;
                    report = oscard.name;
 121:
                    if(!(michal !== report)) { _fun00042_ip = 181; continue _fun00041 }
 125:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 32;
                    tangon = oscard[tangon];
                    golfie = report.bind(zuuluu)(tangon);
                    oscard = golfie.changeThreadSettings;
                    tangon = _closure2_slot0;
                    report = tangon.id;
                    tangon = {};
                    tangon['name'] = michal;
                    tangon = oscard.bind(golfie)(report, tangon);
                    entity = _closure2_slot14;
                    entity = entity.bind(zuuluu)(michal);
 181:
                    entity = undefined;
                    return entity;
                }
            };
            foxtra['onBlur'] = equals;
            equals = function() { // Original name: onFocus
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    tangon = _closure2_slot10;
                    zuuluu = _closure1_slot24;
                    zuuluu = zuuluu.MEDIA;
                    zuuluu = tangon !== zuuluu;
                    if(!zuuluu) { _fun00044_ip = 45; continue _fun00043 }
 27:
                    report = _closure2_slot10;
                    tangon = _closure1_slot24;
                    tangon = tangon.EXPRESSION;
                    zuuluu = report !== tangon;
 45:
                    if(zuuluu) { _fun00044_ip = 105; continue _fun00043 }
 48:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 56;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.toggleKeyboard;
                    zuuluu = {};
                    oscard = _closure1_slot24;
                    oscard = oscard.SYSTEM;
                    zuuluu['keyboardType'] = oscard;
                    oscard = true;
                    zuuluu['keyboardWillOpen'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 105:
                    zuuluu = _closure2_slot29;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 43;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.PostComposerInputs;
                    michal = michal.TITLE;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            foxtra['onFocus'] = equals;
            foxtra['autoFocus'] = variable49;
            foxtra['autoCorrect'] = variable49;
            equals = 'none';
            foxtra['textContentType'] = equals;
            equals = 'next';
            foxtra['returnKeyType'] = equals;
            foxtra['onNext'] = whisks;
            sizing = output.bind(report)(sizing, foxtra);
            foxtra = new Array(3);
            foxtra[0] = sizing;
            output = entity != quebec;
            sizing = null;
            if(!output) { _fun00024_ip = 3047; continue _fun00023 }
 3001:
            equals = _closure1_slot29;
            whisks = _closure1_slot1;
            variable36 = _closure1_slot2;
            output = 57;
            output = variable36[output];
            whisks = whisks.bind(report)(output);
            output = {};
            variable36 = vacuum.nameError;
            output['style'] = variable36;
            output['children'] = quebec;
            sizing = equals.bind(report)(whisks, output);
 3047:
            foxtra[1] = sizing;
            equals = _closure1_slot30;
            whisks = _closure1_slot8;
            output = {};
            sizing = vacuum.editor;
            output['style'] = sizing;
            sizing = entity != variable41;
            if(!sizing) { _fun00024_ip = 3285; continue _fun00023 }
 3081:
            variable37 = _closure1_slot29;
            variable36 = _closure1_slot7;
            quebec = {};
            variable38 = vacuum.avatarContainer;
            quebec['style'] = variable38;
            variable38 = function() { // Original name: onPress
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 58;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    report = _closure2_slot7;
                    report = report.id;
                    entity['userId'] = report;
                    report = _closure2_slot37;
                    report = report.id;
                    entity['channelId'] = report;
                    oscard = _closure2_slot4;
                    report = null;
                    oscard = report == oscard;
                    report = undefined;
                    if(oscard) { _fun00046_ip = 80; continue _fun00045 }
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
            quebec['onPress'] = variable38;
            variable40 = _closure1_slot29;
            variable39 = _closure1_slot1;
            variable42 = _closure1_slot2;
            variable38 = 59;
            variable38 = variable42[variable38];
            variable39 = variable39.bind(report)(variable38);
            variable38 = {};
            variable38['animate'] = variable49;
            variable42 = vacuum.avatar;
            variable38['style'] = variable42;
            variable38['user'] = variable41;
            variable42 = entity == limora;
            variable52 = undefined;
            if(variable42) { _fun00024_ip = 3176; continue _fun00023 }
 3166:
            variable42 = limora.getGuildId;
            variable52 = variable42.bind(limora)();
 3176:
            variable54 = entity != variable52;
            variable42 = undefined;
            if(!variable54) { _fun00024_ip = 3188; continue _fun00023 }
 3185:
            variable42 = variable52;
 3188:
            variable38['guildId'] = variable42;
            variable41 = variable41.avatarDecoration;
            variable38['avatarDecoration'] = variable41;
            variable42 = _closure1_slot0;
            variable41 = _closure1_slot2;
            variable52 = variable41[variable47];
            variable52 = variable42.bind(report)(variable52);
            variable54 = variable52.intl;
            variable52 = variable54.formatToPlainString;
            variable41 = variable41[variable47];
            variable41 = variable42.bind(report)(variable41);
            variable41 = variable41.t;
            variable42 = variable41.LvU3np;
            variable41 = {};
            variable41['nickname'] = variable56;
            variable41 = variable52.bind(variable54)(variable42, variable41);
            variable38['accessibilityLabel'] = variable41;
            variable38 = variable40.bind(report)(variable39, variable38);
            quebec['children'] = variable38;
            sizing = variable37.bind(report)(variable36, quebec);
 3285:
            quebec = new Array(2);
            quebec[0] = sizing;
            variable38 = _closure1_slot30;
            variable37 = _closure1_slot8;
            variable36 = {};
            sizing = vacuum.editorBody;
            variable36['style'] = sizing;
            variable40 = _closure1_slot30;
            variable39 = _closure1_slot8;
            sizing = {};
            variable41 = vacuum.usernameToChannel;
            sizing['style'] = variable41;
            variable55 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable41 = variable54[variable47];
            variable41 = variable55.bind(report)(variable41);
            variable57 = variable41.intl;
            variable52 = variable57.formatToPlainString;
            variable41 = variable54[variable47];
            variable41 = variable55.bind(report)(variable41);
            variable41 = variable41.t;
            variable42 = variable41.QicUf3;
            variable41 = {};
            variable41['nickname'] = variable56;
            variable58 = echoed.name;
            variable41['channelName'] = variable58;
            variable41 = variable52.bind(variable57)(variable42, variable41);
            sizing['accessibilityLabel'] = variable41;
            variable52 = _closure1_slot29;
            variable41 = 60;
            variable41 = variable54[variable41];
            variable41 = variable55.bind(report)(variable41);
            variable42 = variable41.RoleLabel;
            variable41 = {};
            variable41['name'] = variable56;
            variable41['color'] = variable53;
            variable42 = variable52.bind(report)(variable42, variable41);
            variable41 = new Array(2);
            variable41[0] = variable42;
            variable53 = _closure1_slot30;
            variable42 = 61;
            variable42 = variable54[variable42];
            variable42 = variable55.bind(report)(variable42);
            variable52 = variable42.Text;
            variable42 = {'color': 'header-secondary', 'variant': 'text-xs/medium'};
            variable56 = vacuum.channelName;
            variable42['style'] = variable56;
            variable56 = variable54[variable47];
            variable56 = variable55.bind(report)(variable56);
            variable57 = variable56.intl;
            variable56 = variable57.format;
            variable54 = variable54[variable47];
            variable54 = variable55.bind(report)(variable54);
            variable54 = variable54.t;
            variable55 = variable54.6Y1Ken;
            variable54 = {};
            variable58 = echoed.name;
            variable54['channelName'] = variable58;
            variable55 = variable56.bind(variable57)(variable55, variable54);
            variable54 = [' '];
            variable54[1] = variable55;
            variable42['children'] = variable54;
            variable42 = variable53.bind(report)(variable52, variable42);
            variable41[1] = variable42;
            sizing['children'] = variable41;
            sizing = variable40.bind(report)(variable39, sizing);
            variable39 = new Array(3);
            variable39[0] = sizing;
            variable40 = entity != variable50;
            sizing = null;
            if(!variable40) { _fun00024_ip = 3660; continue _fun00023 }
 3614:
            variable42 = _closure1_slot29;
            variable41 = _closure1_slot1;
            variable52 = _closure1_slot2;
            variable40 = 57;
            variable40 = variable52[variable40];
            variable41 = variable41.bind(report)(variable40);
            variable40 = {};
            variable52 = vacuum.messageError;
            variable40['style'] = variable52;
            variable40['children'] = variable50;
            sizing = variable42.bind(report)(variable41, variable40);
 3660:
            variable39[1] = sizing;
            variable42 = _closure1_slot29;
            variable50 = _closure1_slot0;
            sizing = _closure1_slot2;
            variable40 = 62;
            variable40 = sizing[variable40];
            variable40 = variable50.bind(report)(variable40);
            variable41 = variable40.TextInput;
            variable40 = {};
            variable40['ref'] = variable51;
            variable51 = vacuum.contentInput;
            variable40['style'] = variable51;
            variable40['multiline'] = variable49;
            variable40['scrollEnabled'] = variable48;
            variable48 = sizing[variable47];
            variable48 = variable50.bind(report)(variable48);
            variable49 = variable48.intl;
            variable48 = variable49.string;
            variable47 = sizing[variable47];
            variable47 = variable50.bind(report)(variable47);
            variable47 = variable47.t;
            variable47 = variable47.8IPnv7;
            variable47 = variable48.bind(variable49)(variable47);
            variable40['placeholder'] = variable47;
            variable40['placeholderTextColor'] = variable46;
            variable40['value'] = source;
            variable40['onChangeText'] = variable45;
            variable40['onSelectionChange'] = variable43;
            variable43 = function() { // Original name: onFocus
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    tangon = _closure2_slot10;
                    zuuluu = _closure1_slot24;
                    zuuluu = zuuluu.MEDIA;
                    if(!(tangon === zuuluu)) { _fun00048_ip = 81; continue _fun00047 }
 24:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 56;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.toggleKeyboard;
                    zuuluu = {};
                    oscard = _closure1_slot24;
                    oscard = oscard.SYSTEM;
                    zuuluu['keyboardType'] = oscard;
                    oscard = true;
                    zuuluu['keyboardWillOpen'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 81:
                    zuuluu = _closure2_slot29;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 43;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.PostComposerInputs;
                    michal = michal.CONTENT;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            variable40['onFocus'] = variable43;
            variable43 = _closure1_slot24;
            variable43 = variable43.EXPRESSION;
            variable43 = variable44 !== variable43;
            variable40['showSoftInputOnFocus'] = variable43;
            variable40 = variable42.bind(report)(variable41, variable40);
            variable39[2] = variable40;
            variable36['children'] = variable39;
            variable36 = variable38.bind(report)(variable37, variable36);
            quebec[1] = variable36;
            output['children'] = quebec;
            output = equals.bind(report)(whisks, output);
            foxtra[2] = output;
            offset['children'] = foxtra;
            romeon = verify.bind(report)(romeon, offset);
            offset = new Array(5);
            offset[0] = romeon;
            output = _closure1_slot29;
            foxtra = _closure1_slot36;
            romeon = {};
            romeon['tags'] = sierra;
            romeon = output.bind(report)(foxtra, romeon);
            offset[1] = romeon;
            output = _closure1_slot29;
            foxtra = _closure1_slot37;
            romeon = {};
            romeon['channel'] = limora;
            romeon['tags'] = sierra;
            romeon['setTags'] = status;
            romeon['canPost'] = target;
            romeon['submitting'] = papara;
            romeon['onSubmit'] = cntext;
            cntext = function() { // Original name: onShowExpressionPicker
                michal = _closure1_slot6;
                entity = michal.dismiss;
                entity = entity.bind(michal)();
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 63;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openExpressionPickerActionSheet;
                michal = {};
                golfie = _closure2_slot0;
                golfie = golfie.id;
                michal['channelId'] = golfie;
                golfie = _closure2_slot33;
                michal['onPressEmoji'] = golfie;
                golfie = _closure1_slot28;
                michal['onPressSticker'] = golfie;
                golfie = _closure2_slot34;
                michal['onPressGIF'] = golfie;
                oscard = _closure2_slot35;
                michal['onBackspace'] = oscard;
                oscard = _closure1_slot26;
                golfie = oscard.EMOJI;
                report = new Array(2);
                report[0] = golfie;
                oscard = oscard.GIF;
                report[1] = oscard;
                michal['visibleTabs'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            romeon['onShowExpressionPicker'] = cntext;
            romeon['focusLastInput'] = record;
            romeon['lastInput'] = config;
            romeon['isEdit'] = sequen;
            romeon['onLayout'] = result;
            romeon = output.bind(report)(foxtra, romeon);
            offset[2] = romeon;
            result = _closure1_slot29;
            romeon = _closure1_slot1;
            foxtra = 64;
            foxtra = sizing[foxtra];
            output = romeon.bind(report)(foxtra);
            foxtra = {};
            vacuum = vacuum.horizontalAutocomplete;
            foxtra['style'] = vacuum;
            foxtra['onPressAutocompleteItem'] = ctrled;
            foxtra['text'] = source;
            foxtra['selection'] = update;
            foxtra['channel'] = echoed;
            foxtra = result.bind(report)(output, foxtra);
            offset[3] = foxtra;
            foxtra = _closure1_slot29;
            yankee = 65;
            yankee = sizing[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = {};
            yankee['contentTypes'] = kiloes;
            backup = function(argFoo) { // Original name: children
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.visibleContent;
                    entity = entity.markAsDismissed;
                    var _closure3_slot0 = entity;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 48;
                    entity = report[entity];
                    report = undefined;
                    entity = zuuluu.bind(report)(entity);
                    entity = entity.DismissibleContent;
                    zuuluu = entity.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
                    entity = null;
                    if(!(tangon === zuuluu)) { _fun00050_ip = 137; continue _fun00049 }
 64:
                    tangon = _closure1_slot29;
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 66;
                    michal = golfie[michal];
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = michal.DismissibleActionSheet;
                    michal = {};
                    oscard = function() { // Original name: markAsDismissed
                        zuuluu = _closure3_slot0;
                        entity = _closure1_slot25;
                        michal = entity.UNKNOWN;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal['markAsDismissed'] = oscard;
                    oscard = 'ThumbnailBottomSheet';
                    michal['actionSheetKey'] = oscard;
                    oscard = _closure2_slot38;
                    michal['importer'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 137:
                    return entity;
                }
            };
            yankee['children'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            offset[4] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 4113:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();