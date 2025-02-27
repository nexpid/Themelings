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
            verify = _closure1_slot35;
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
            golfie = _closure1_slot35;
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
            tangon = undefined;
            var _closure2_slot10 = tangon;
            entity = _closure1_slot32;
            output = entity.bind(tangon)();
            var _closure2_slot7 = output;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 24;
            report = zuuluu[entity];
            option = michal.bind(tangon)(report);
            golfie = option.useStateFromStores;
            report = _closure1_slot17;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                tangon = _closure1_slot17;
                zuuluu = tangon.getUploads;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot11;
                entity = entity.ChannelMessage;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            update = golfie.bind(option)(oscard, report);
            report = zuuluu[entity];
            option = michal.bind(tangon)(report);
            golfie = option.useStateFromStores;
            report = _closure1_slot13;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
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
            verify = golfie.bind(option)(oscard, report);
            oscard = _closure1_slot1;
            report = 70;
            report = zuuluu[report];
            oscard = oscard.bind(tangon)(report);
            sizing = true;
            report = {'includeKeyboardHeightIOS': true, 'includeCustomKeyboardHeightIOS': false};
            report = oscard.bind(tangon)(report);
            option = report.insets;
            entity = zuuluu[entity];
            report = michal.bind(tangon)(entity);
            zuuluu = report.useStateFromStoresObject;
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
            entity = zuuluu.bind(report)(michal, entity);
            zuuluu = entity.keyboardType;
            var _closure2_slot8 = zuuluu;
            entity = romeon.isMediaChannel;
            oscard = entity.bind(romeon)();
            michal = _closure1_slot24;
            michal = michal.MEDIA;
            vacuum = zuuluu === michal;
            var _closure2_slot9 = vacuum;
            if(oscard) { _fun00012_ip = 342; continue _fun00011 }
 322:
            entity = verify;
            if(!verify) { _fun00012_ip = 339; continue _fun00011 }
 328:
            zuuluu = update.length;
            michal = 0;
            entity = zuuluu > michal;
 339:
            oscard = entity;
 342:
            entity = romeon.availableTags;
            michal = null;
            offset = michal != entity;
            if(!offset) { _fun00012_ip = 383; continue _fun00011 }
 357:
            entity = romeon.availableTags;
            zuuluu = michal == entity;
            michal = undefined;
            if(zuuluu) { _fun00012_ip = 377; continue _fun00011 }
 372:
            michal = entity.length;
 377:
            entity = 0;
            offset = michal > entity;
 383:
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
            golfie = output.actionsContainer;
            report = new Array(2);
            report[0] = golfie;
            golfie = {};
            option = option.bottom;
            golfie['marginBottom'] = option;
            report[1] = golfie;
            entity['style'] = report;
            if(!oscard) { _fun00012_ip = 503; continue _fun00011 }
 440:
            option = _closure1_slot29;
            golfie = _closure1_slot1;
            ctrled = _closure1_slot2;
            report = 71;
            report = ctrled[report];
            golfie = golfie.bind(tangon)(report);
            report = {};
            report['attachments'] = update;
            update = function(argFoo) { // Original name: onRemove
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 72;
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
 503:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot30;
            golfie = _closure1_slot8;
            oscard = {};
            romeon = output.actions;
            oscard['style'] = romeon;
            romeon = verify;
            if(!romeon) { _fun00012_ip = 746; continue _fun00011 }
 540:
            ctrled = _closure1_slot29;
            cntext = _closure1_slot0;
            papara = _closure1_slot2;
            verify = 73;
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
            if(vacuum) { _fun00012_ip = 671; continue _fun00011 }
 662:
            vacuum = 75;
            vacuum = record[vacuum];
            _fun00012_ip = 678; continue _fun00011;
 671:
            config = 74;
            vacuum = record[config];
 678:
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
                    zuuluu = 76;
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
                    entity = 77;
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
 746:
            verify = new Array(4);
            verify[0] = romeon;
            if(!offset) { _fun00012_ip = 942; continue _fun00011 }
 760:
            ctrled = _closure1_slot29;
            sequen = _closure1_slot0;
            config = _closure1_slot2;
            romeon = 73;
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
                entity = 78;
                tangon = romeon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.openLazy;
                yankee = _closure1_slot0;
                zuuluu = 50;
                zuuluu = romeon[zuuluu];
                golfie = yankee.bind(entity)(zuuluu);
                zuuluu = 79;
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
 942:
            verify[1] = offset;
            romeon = _closure1_slot0;
            update = _closure1_slot2;
            offset = 43;
            offset = update[offset];
            offset = romeon.bind(tangon)(offset);
            offset = offset.PostComposerInputs;
            offset = offset.CONTENT;
            offset = yankee === offset;
            if(!offset) { _fun00012_ip = 1145; continue _fun00011 }
 988:
            update = _closure1_slot29;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            yankee = 73;
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
            ctrled = 80;
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
 1145:
            verify[2] = offset;
            romeon = _closure1_slot29;
            yankee = _closure1_slot1;
            offset = _closure1_slot2;
            update = 81;
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
            if(echoed) { _fun00012_ip = 1237; continue _fun00011 }
 1222:
            echoed = source.pIuQIy;
            echoed = ctrled.bind(vacuum)(echoed);
            _fun00012_ip = 1248; continue _fun00011;
 1237:
            source = source.R3BPHx;
            echoed = ctrled.bind(vacuum)(source);
 1248:
            offset['text'] = echoed;
            echoed = _closure1_slot0;
            result = _closure1_slot2;
            result = result[update];
            result = echoed.bind(tangon)(result);
            echoed = result.ButtonLooks;
            if(kiloes) { _fun00012_ip = 1286; continue _fun00011 }
 1278:
            result = echoed.OUTLINED;
            _fun00012_ip = 1292; continue _fun00011;
 1286:
            result = echoed.FILLED;
 1292:
            offset['look'] = result;
            offset['shrink'] = sizing;
            offset['foregroundRipple'] = sizing;
            sizing = output.postButton;
            offset['style'] = sizing;
            if(kiloes) { _fun00012_ip = 1328; continue _fun00011 }
 1320:
            sizing = output.postButtonTextDisabled;
            _fun00012_ip = 1334; continue _fun00011;
 1328:
            sizing = output.postButtonText;
 1334:
            offset['textStyle'] = sizing;
            offset['loading'] = backup;
            if(backup) { _fun00012_ip = 1350; continue _fun00011 }
 1347:
            backup = !kiloes;
 1350:
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
                    report = 82;
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
    tangon = 83;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/native/composer/ForumComposer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ForumComposer
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            sierra = entity.parentChannel;
            var _closure2_slot0 = sierra;
            michal = entity.thread;
            var _closure2_slot1 = michal;
            variable41 = entity.threadSettingsDraft;
            var _closure2_slot2 = variable41;
            verify = entity.onClose;
            var _closure2_slot3 = verify;
            variable42 = entity.message;
            var _closure2_slot4 = variable42;
            result = entity.isEdit;
            var _closure2_slot5 = result;
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
            variable38 = zuuluu.bind(oscard)(entity);
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
            variable40 = romeon.bind(foxtra)(offset, option, golfie);
            var _closure2_slot7 = variable40;
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
            foxtra = romeon.bind(foxtra)(offset, golfie);
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
            if(oscard) { _fun00024_ip = 455; continue _fun00023 }
 447:
            variable45 = tangon.PRIMARY_460;
            _fun00024_ip = 461; continue _fun00023;
 455:
            variable45 = tangon.PRIMARY_330;
 461:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            golfie = oscard[zuuluu];
            kiloes = tangon.bind(report)(golfie);
            romeon = kiloes.useStateFromStores;
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
            variable36 = romeon.bind(kiloes)(offset, golfie);
            _closure2_slot8 = variable36;
            golfie = oscard[zuuluu];
            kiloes = tangon.bind(report)(golfie);
            romeon = kiloes.useStateFromStores;
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
            record = romeon.bind(kiloes)(offset, golfie);
            _closure2_slot9 = record;
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
            variable43 = zuuluu.keyboardType;
            _closure2_slot10 = variable43;
            tangon = _closure1_slot1;
            zuuluu = 26;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            equals = zuuluu.bind(report)();
            _closure2_slot11 = equals;
            tangon = _closure1_slot5;
            zuuluu = tangon.useState;
            variable47 = false;
            tangon = zuuluu.bind(tangon)(variable47);
            zuuluu = _closure1_slot4;
            update = 2;
            zuuluu = zuuluu.bind(report)(tangon, update);
            sizing = 0;
            cntext = zuuluu[sizing];
            kiloes = 1;
            zuuluu = zuuluu[kiloes];
            _closure2_slot12 = zuuluu;
            golfie = _closure1_slot5;
            oscard = golfie.useState;
            if(result) { _fun00024_ip = 703; continue _fun00023 }
 687:
            zuuluu = entity == variable41;
            offset = undefined;
            if(zuuluu) { _fun00024_ip = 701; continue _fun00023 }
 696:
            offset = variable41.name;
 701:
            _fun00024_ip = 720; continue _fun00023;
 703:
            tangon = entity == michal;
            zuuluu = undefined;
            if(tangon) { _fun00024_ip = 717; continue _fun00023 }
 712:
            zuuluu = michal.name;
 717:
            offset = zuuluu;
 720:
            romeon = entity != offset;
            tangon = '';
            zuuluu = tangon;
            if(!romeon) { _fun00024_ip = 737; continue _fun00023 }
 734:
            zuuluu = offset;
 737:
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(oscard, update);
            quebec = zuuluu[sizing];
            _closure2_slot13 = quebec;
            zuuluu = zuuluu[kiloes];
            _closure2_slot14 = zuuluu;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            offset = 27;
            zuuluu = zuuluu[offset];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.useChannelTemplate;
            echoed = zuuluu.bind(oscard)(sierra);
            golfie = tangon;
            if(!result) { _fun00024_ip = 867; continue _fun00023 }
 805:
            zuuluu = entity != variable42;
            golfie = tangon;
            if(!zuuluu) { _fun00024_ip = 867; continue _fun00023 }
 815:
            zuuluu = entity != michal;
            golfie = tangon;
            if(!zuuluu) { _fun00024_ip = 867; continue _fun00023 }
 825:
            oscard = _closure1_slot1;
            romeon = _closure1_slot2;
            zuuluu = 28;
            zuuluu = romeon[zuuluu];
            output = oscard.bind(report)(zuuluu);
            romeon = output.unparse;
            oscard = variable42.content;
            zuuluu = michal.id;
            golfie = romeon.bind(output)(oscard, zuuluu);
 867:
            oscard = _closure1_slot5;
            zuuluu = oscard.useState;
            if(result) { _fun00024_ip = 909; continue _fun00023 }
 879:
            romeon = echoed;
            if(!(entity != foxtra)) { _fun00024_ip = 906; continue _fun00023 }
 886:
            output = foxtra.trim;
            output = output.bind(foxtra)();
            romeon = echoed;
            if(!(tangon !== output)) { _fun00024_ip = 906; continue _fun00023 }
 903:
            romeon = foxtra;
 906:
            golfie = romeon;
 909:
            oscard = zuuluu.bind(oscard)(golfie);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(oscard, update);
            source = zuuluu[sizing];
            _closure2_slot15 = source;
            zuuluu = zuuluu[kiloes];
            _closure2_slot16 = zuuluu;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            romeon = oscard[offset];
            foxtra = golfie.bind(report)(romeon);
            romeon = foxtra.useAvailableTags;
            foxtra = romeon.bind(foxtra)(sierra);
            oscard = oscard[offset];
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.useAppliedTags;
            golfie = oscard.bind(golfie)(michal);
            _closure2_slot17 = golfie;
            romeon = _closure1_slot5;
            offset = romeon.useState;
            if(!result) { _fun00024_ip = 1011; continue _fun00023 }
 1004:
            oscard = golfie;
            if(!(entity == foxtra)) { _fun00024_ip = 1015; continue _fun00023 }
 1011:
            oscard = new Array(0);
 1015:
            oscard = offset.bind(romeon)(oscard);
            offset = _closure1_slot4;
            oscard = offset.bind(report)(oscard, update);
            status = oscard[sizing];
            _closure2_slot18 = status;
            target = oscard[kiloes];
            romeon = _closure1_slot5;
            oscard = romeon.useState;
            oscard = oscard.bind(romeon)(entity);
            oscard = offset.bind(report)(oscard, update);
            output = oscard[sizing];
            oscard = oscard[kiloes];
            _closure2_slot19 = oscard;
            romeon = _closure1_slot5;
            oscard = romeon.useState;
            oscard = oscard.bind(romeon)(entity);
            offset = offset.bind(report)(oscard, update);
            oscard = offset[sizing];
            offset = offset[kiloes];
            _closure2_slot20 = offset;
            offset = entity == option;
            variable52 = undefined;
            if(offset) { _fun00024_ip = 1121; continue _fun00023 }
 1115:
            variable52 = option.colorString;
 1121:
            offset = entity == option;
            variable55 = undefined;
            if(offset) { _fun00024_ip = 1136; continue _fun00023 }
 1130:
            variable55 = option.nick;
 1136:
            if(!(entity == variable55)) { _fun00024_ip = 1171; continue _fun00023 }
 1140:
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            option = 29;
            option = romeon[option];
            offset = offset.bind(report)(option);
            option = offset.getName;
            variable55 = option.bind(offset)(variable40);
 1171:
            offset = _closure1_slot5;
            option = offset.useRef;
            variable50 = option.bind(offset)(entity);
            _closure2_slot21 = variable50;
            offset = _closure1_slot1;
            foxtra = _closure1_slot2;
            option = 30;
            option = foxtra[option];
            option = offset.bind(report)(option);
            option = option.bind(report)();
            romeon = option.top;
            option = option.bottom;
            config = _closure1_slot5;
            sequen = config.useCallback;
            ctrled = function() {
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
            limora = sequen.bind(config)(ctrled, offset);
            ctrled = _closure1_slot0;
            offset = 31;
            sequen = foxtra[offset];
            config = ctrled.bind(report)(sequen);
            sequen = config.useSharedValue;
            papara = sequen.bind(config)(sizing);
            _closure2_slot22 = papara;
            foxtra = foxtra[offset];
            sequen = ctrled.bind(report)(foxtra);
            ctrled = sequen.useAnimatedScrollHandler;
            foxtra = function(argFoo) { // Original name: K
                entity = argFoo;
                entity = entity.contentOffset;
                zuuluu = entity.y;
                michal = _closure2_slot22;
                entity = michal.set;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            config = {};
            config['scrollTopValue'] = papara;
            foxtra['__closure'] = config;
            config = 16880842576840.0;
            foxtra['__workletHash'] = config;
            config = _closure1_slot33;
            foxtra['__initData'] = config;
            foxtra = ctrled.bind(sequen)(foxtra);
            papara = _closure1_slot5;
            config = papara.useCallback;
            sequen = new Array(2);
            sequen[0] = result;
            ctrled = sierra.id;
            sequen[1] = ctrled;
            ctrled = function(argFoo) {
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
            whisks = config.bind(papara)(ctrled, sequen);
            papara = _closure1_slot5;
            config = papara.useCallback;
            sequen = new Array(1);
            sequen[0] = verify;
            ctrled = function(argFoo) {
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
            config = config.bind(papara)(ctrled, sequen);
            _closure2_slot23 = config;
            variable37 = _closure1_slot5;
            papara = variable37.useMemo;
            sequen = new Array(1);
            sequen[0] = status;
            ctrled = function() {
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
            variable37 = papara.bind(variable37)(ctrled, sequen);
            _closure2_slot24 = variable37;
            papara = _closure1_slot5;
            sequen = papara.useMemo;
            ctrled = new Array(1);
            ctrled[0] = golfie;
            golfie = function() {
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
            sequen = sequen.bind(papara)(golfie, ctrled);
            _closure2_slot25 = sequen;
            variable39 = _closure1_slot5;
            papara = variable39.useCallback;
            golfie = function() {
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
            ctrled = golfie.bind(report)();
            golfie = new Array(7);
            golfie[0] = michal;
            golfie[1] = variable42;
            golfie[2] = sequen;
            golfie[3] = variable37;
            golfie[4] = quebec;
            golfie[5] = config;
            golfie[6] = verify;
            variable39 = papara.bind(variable39)(ctrled, golfie);
            _closure2_slot26 = variable39;
            ctrled = entity == variable41;
            golfie = undefined;
            if(ctrled) { _fun00024_ip = 1564; continue _fun00023 }
 1559:
            golfie = variable41.name;
 1564:
            golfie = entity != golfie;
            if(!golfie) { _fun00024_ip = 1585; continue _fun00023 }
 1571:
            ctrled = variable41.name;
            ctrled = ctrled.length;
            golfie = ctrled > sizing;
 1585:
            ctrled = source.trim;
            ctrled = ctrled.bind(source)();
            papara = record.length;
            papara = papara > sizing;
            tangon = tangon === echoed;
            if(tangon) { _fun00024_ip = 1615; continue _fun00023 }
 1611:
            tangon = ctrled !== echoed;
 1615:
            if(!tangon) { _fun00024_ip = 1636; continue _fun00023 }
 1618:
            echoed = ctrled.length;
            echoed = echoed > sizing;
            if(echoed) { _fun00024_ip = 1633; continue _fun00023 }
 1630:
            echoed = papara;
 1633:
            tangon = echoed;
 1636:
            papara = !result;
            if(!papara) { _fun00024_ip = 1645; continue _fun00023 }
 1642:
            papara = golfie;
 1645:
            if(!papara) { _fun00024_ip = 1651; continue _fun00023 }
 1648:
            papara = tangon;
 1651:
            if(papara) { _fun00024_ip = 1743; continue _fun00023 }
 1654:
            tangon = result;
            if(!tangon) { _fun00024_ip = 1740; continue _fun00023 }
 1660:
            echoed = entity == michal;
            golfie = undefined;
            if(echoed) { _fun00024_ip = 1674; continue _fun00023 }
 1669:
            golfie = michal.name;
 1674:
            golfie = quebec !== golfie;
            if(golfie) { _fun00024_ip = 1699; continue _fun00023 }
 1681:
            variable44 = entity == variable42;
            echoed = undefined;
            if(variable44) { _fun00024_ip = 1695; continue _fun00023 }
 1690:
            echoed = variable42.content;
 1695:
            golfie = ctrled !== echoed;
 1699:
            if(golfie) { _fun00024_ip = 1737; continue _fun00023 }
 1702:
            ctrled = _closure1_slot1;
            variable42 = _closure1_slot2;
            echoed = 35;
            echoed = variable42[echoed];
            ctrled = ctrled.bind(report)(echoed);
            echoed = ctrled.isEqual;
            echoed = echoed.bind(ctrled)(sequen, variable37);
            golfie = !echoed;
 1737:
            tangon = golfie;
 1740:
            papara = tangon;
 1743:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            echoed = 38;
            echoed = golfie[echoed];
            sequen = tangon.bind(report)(echoed);
            ctrled = sequen.useCreateForumPost;
            echoed = {};
            echoed['parentChannel'] = sierra;
            echoed['threadSettings'] = variable41;
            echoed['appliedTags'] = variable37;
            echoed['onThreadCreated'] = config;
            variable37 = ctrled.bind(sequen)(echoed);
            _closure2_slot27 = variable37;
            config = _closure1_slot5;
            sequen = config.useCallback;
            echoed = function() {
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
            ctrled = echoed.bind(report)();
            echoed = new Array(8);
            echoed[0] = sierra;
            variable41 = status.length;
            echoed[1] = variable41;
            echoed[2] = result;
            echoed[3] = michal;
            echoed[4] = source;
            echoed[5] = variable39;
            echoed[6] = variable37;
            echoed[7] = record;
            echoed = sequen.bind(config)(ctrled, echoed);
            _closure2_slot28 = echoed;
            config = _closure1_slot5;
            sequen = config.useCallback;
            ctrled = new Array(6);
            ctrled[0] = sierra;
            ctrled[1] = variable36;
            ctrled[2] = equals;
            ctrled[3] = record;
            ctrled[4] = echoed;
            ctrled[5] = source;
            echoed = function(argFoo) {
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
            record = sequen.bind(config)(echoed, ctrled);
            sequen = _closure1_slot5;
            ctrled = sequen.useCallback;
            echoed = new Array(2);
            echoed[0] = zuuluu;
            zuuluu = sierra.id;
            echoed[1] = zuuluu;
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
            variable44 = ctrled.bind(sequen)(zuuluu, echoed);
            zuuluu = 43;
            zuuluu = golfie[zuuluu];
            ctrled = tangon.bind(report)(zuuluu);
            echoed = ctrled.useFocusHandlers;
            zuuluu = {};
            zuuluu['titleInput'] = variable38;
            zuuluu['contentInput'] = variable50;
            zuuluu = echoed.bind(ctrled)(zuuluu);
            echoed = zuuluu.setFocusedInput;
            _closure2_slot29 = echoed;
            config = zuuluu.focusLastInput;
            _closure2_slot30 = config;
            echoed = zuuluu.blurLastInput;
            _closure2_slot31 = echoed;
            sequen = zuuluu.focusedInput;
            ctrled = _closure1_slot5;
            echoed = ctrled.useState;
            zuuluu = {'start': 0, 'end': null};
            echoed = echoed.bind(ctrled)(zuuluu);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(echoed, update);
            update = zuuluu[sizing];
            zuuluu = zuuluu[kiloes];
            _closure2_slot32 = zuuluu;
            echoed = _closure1_slot5;
            sizing = echoed.useCallback;
            kiloes = function(argFoo) {
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
            variable42 = sizing.bind(echoed)(kiloes, zuuluu);
            echoed = _closure1_slot5;
            sizing = echoed.useCallback;
            kiloes = function(argFoo) {
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
            echoed = sizing.bind(echoed)(kiloes, zuuluu);
            zuuluu = 45;
            kiloes = golfie[zuuluu];
            ctrled = tangon.bind(report)(kiloes);
            sizing = ctrled.usePressEmojiHandler;
            kiloes = {};
            kiloes['selection'] = update;
            kiloes['draftContent'] = source;
            kiloes['handleTextChange'] = variable44;
            kiloes['focusTextInput'] = limora;
            kiloes['setSelection'] = echoed;
            kiloes = sizing.bind(ctrled)(kiloes);
            _closure2_slot33 = kiloes;
            zuuluu = golfie[zuuluu];
            sizing = tangon.bind(report)(zuuluu);
            kiloes = sizing.usePressGIFHandler;
            zuuluu = {};
            zuuluu['selection'] = update;
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable44;
            zuuluu['focusTextInput'] = limora;
            zuuluu['setSelection'] = echoed;
            zuuluu = kiloes.bind(sizing)(zuuluu);
            _closure2_slot34 = zuuluu;
            zuuluu = 46;
            zuuluu = golfie[zuuluu];
            sizing = tangon.bind(report)(zuuluu);
            kiloes = sizing.usePressHorizontalAutocompleteItemHandler;
            zuuluu = {};
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable44;
            zuuluu['setSelection'] = echoed;
            ctrled = kiloes.bind(sizing)(zuuluu);
            zuuluu = 47;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.useBackspaceHandler;
            zuuluu = {};
            zuuluu['selection'] = update;
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable44;
            zuuluu = tangon.bind(golfie)(zuuluu);
            _closure2_slot35 = zuuluu;
            echoed = sierra;
            if(!result) { _fun00024_ip = 2327; continue _fun00023 }
 2324:
            echoed = michal;
 2327:
            _closure2_slot36 = echoed;
            if(!(entity != echoed)) { _fun00024_ip = 4021; continue _fun00023 }
 2338:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 39;
            golfie = tangon[michal];
            sizing = zuuluu.bind(report)(golfie);
            kiloes = sizing.renderError;
            golfie = {};
            golfie['content'] = quebec;
            equals = kiloes.bind(sizing)(output, golfie);
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.renderError;
            michal = {};
            michal['content'] = source;
            michal['tags'] = status;
            variable49 = zuuluu.bind(tangon)(oscard, michal);
            michal = echoed.isMediaChannel;
            michal = michal.bind(echoed)();
            if(michal) { _fun00024_ip = 2427; continue _fun00023 }
 2421:
            kiloes = new Array(0);
            _fun00024_ip = 2470; continue _fun00023;
 2427:
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
 2470:
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
            _closure2_slot37 = michal;
            tangon = _closure1_slot30;
            zuuluu = _closure1_slot8;
            michal = {};
            golfie = vacuum.container;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = {};
            golfie['paddingTop'] = romeon;
            golfie['paddingBottom'] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            option = _closure1_slot29;
            romeon = _closure1_slot1;
            variable37 = _closure1_slot2;
            oscard = 51;
            oscard = variable37[oscard];
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
            oscard['submitting'] = cntext;
            oscard['title'] = quebec;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot30;
            option = _closure1_slot31;
            golfie = {};
            offset = variable37[offset];
            offset = romeon.bind(report)(offset);
            romeon = offset.ScrollView;
            offset = {'onScroll': null, 'scrollEventThrottle': 16, 'keyboardShouldPersistTaps': 'always', 'nestedScrollEnabled': false, 'contentContainerStyle': null, 'keyboardDismissMode': 'on-drag'};
            offset['onScroll'] = foxtra;
            foxtra = vacuum.scrollViewContentContainer;
            offset['contentContainerStyle'] = foxtra;
            output = _closure1_slot29;
            variable36 = _closure1_slot0;
            foxtra = 53;
            foxtra = variable37[foxtra];
            foxtra = variable36.bind(report)(foxtra);
            sizing = foxtra.FormInput;
            foxtra = {};
            foxtra['ref'] = variable38;
            variable38 = vacuum.titleInput;
            foxtra['style'] = variable38;
            variable38 = vacuum.titleInputText;
            foxtra['inputTextStyle'] = variable38;
            foxtra['showTopContainer'] = variable47;
            variable46 = 41;
            variable38 = variable37[variable46];
            variable38 = variable36.bind(report)(variable38);
            variable41 = variable38.intl;
            variable39 = variable41.string;
            variable38 = variable37[variable46];
            variable38 = variable36.bind(report)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.lU4dDQ;
            variable38 = variable39.bind(variable41)(variable38);
            foxtra['placeholder'] = variable38;
            foxtra['placeholderTextColor'] = variable45;
            variable48 = true;
            foxtra['large'] = variable48;
            foxtra['multiline'] = variable48;
            foxtra['value'] = quebec;
            quebec = 54;
            quebec = variable37[quebec];
            quebec = variable36.bind(report)(quebec);
            quebec = quebec.ClearButtonVisibility;
            quebec = quebec.NEVER;
            foxtra['clearButtonVisibility'] = quebec;
            quebec = _closure1_slot21;
            foxtra['maxLength'] = quebec;
            foxtra['onChange'] = whisks;
            whisks = function() { // Original name: onBlur
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
            foxtra['onBlur'] = whisks;
            whisks = function() { // Original name: onFocus
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
            foxtra['onFocus'] = whisks;
            foxtra['autoFocus'] = variable48;
            foxtra['autoCorrect'] = variable48;
            whisks = 'none';
            foxtra['textContentType'] = whisks;
            whisks = 'next';
            foxtra['returnKeyType'] = whisks;
            foxtra['onNext'] = limora;
            sizing = output.bind(report)(sizing, foxtra);
            foxtra = new Array(3);
            foxtra[0] = sizing;
            output = entity != equals;
            sizing = null;
            if(!output) { _fun00024_ip = 2960; continue _fun00023 }
 2914:
            whisks = _closure1_slot29;
            limora = _closure1_slot1;
            quebec = _closure1_slot2;
            output = 57;
            output = quebec[output];
            limora = limora.bind(report)(output);
            output = {};
            quebec = vacuum.nameError;
            output['style'] = quebec;
            output['children'] = equals;
            sizing = whisks.bind(report)(limora, output);
 2960:
            foxtra[1] = sizing;
            whisks = _closure1_slot30;
            limora = _closure1_slot8;
            output = {};
            sizing = vacuum.editor;
            output['style'] = sizing;
            sizing = entity != variable40;
            if(!sizing) { _fun00024_ip = 3198; continue _fun00023 }
 2994:
            variable36 = _closure1_slot29;
            quebec = _closure1_slot7;
            equals = {};
            variable37 = vacuum.avatarContainer;
            equals['style'] = variable37;
            variable37 = function() { // Original name: onPress
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
                    report = _closure2_slot36;
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
            equals['onPress'] = variable37;
            variable39 = _closure1_slot29;
            variable38 = _closure1_slot1;
            variable41 = _closure1_slot2;
            variable37 = 59;
            variable37 = variable41[variable37];
            variable38 = variable38.bind(report)(variable37);
            variable37 = {};
            variable37['animate'] = variable48;
            variable41 = vacuum.avatar;
            variable37['style'] = variable41;
            variable37['user'] = variable40;
            variable41 = entity == sierra;
            variable51 = undefined;
            if(variable41) { _fun00024_ip = 3089; continue _fun00023 }
 3079:
            variable41 = sierra.getGuildId;
            variable51 = variable41.bind(sierra)();
 3089:
            variable53 = entity != variable51;
            variable41 = undefined;
            if(!variable53) { _fun00024_ip = 3101; continue _fun00023 }
 3098:
            variable41 = variable51;
 3101:
            variable37['guildId'] = variable41;
            variable40 = variable40.avatarDecoration;
            variable37['avatarDecoration'] = variable40;
            variable41 = _closure1_slot0;
            variable40 = _closure1_slot2;
            variable51 = variable40[variable46];
            variable51 = variable41.bind(report)(variable51);
            variable53 = variable51.intl;
            variable51 = variable53.formatToPlainString;
            variable40 = variable40[variable46];
            variable40 = variable41.bind(report)(variable40);
            variable40 = variable40.t;
            variable41 = variable40.LvU3np;
            variable40 = {};
            variable40['nickname'] = variable55;
            variable40 = variable51.bind(variable53)(variable41, variable40);
            variable37['accessibilityLabel'] = variable40;
            variable37 = variable39.bind(report)(variable38, variable37);
            equals['children'] = variable37;
            sizing = variable36.bind(report)(quebec, equals);
 3198:
            equals = new Array(2);
            equals[0] = sizing;
            variable37 = _closure1_slot30;
            variable36 = _closure1_slot8;
            quebec = {};
            sizing = vacuum.editorBody;
            quebec['style'] = sizing;
            variable39 = _closure1_slot30;
            variable38 = _closure1_slot8;
            sizing = {};
            variable40 = vacuum.usernameToChannel;
            sizing['style'] = variable40;
            variable54 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable40 = variable53[variable46];
            variable40 = variable54.bind(report)(variable40);
            variable56 = variable40.intl;
            variable51 = variable56.formatToPlainString;
            variable40 = variable53[variable46];
            variable40 = variable54.bind(report)(variable40);
            variable40 = variable40.t;
            variable41 = variable40.QicUf3;
            variable40 = {};
            variable40['nickname'] = variable55;
            variable57 = echoed.name;
            variable40['channelName'] = variable57;
            variable40 = variable51.bind(variable56)(variable41, variable40);
            sizing['accessibilityLabel'] = variable40;
            variable51 = _closure1_slot29;
            variable40 = 60;
            variable40 = variable53[variable40];
            variable40 = variable54.bind(report)(variable40);
            variable41 = variable40.RoleLabel;
            variable40 = {};
            variable40['name'] = variable55;
            variable40['color'] = variable52;
            variable41 = variable51.bind(report)(variable41, variable40);
            variable40 = new Array(2);
            variable40[0] = variable41;
            variable52 = _closure1_slot30;
            variable41 = 61;
            variable41 = variable53[variable41];
            variable41 = variable54.bind(report)(variable41);
            variable51 = variable41.Text;
            variable41 = {'color': 'header-secondary', 'variant': 'text-xs/medium'};
            variable55 = vacuum.channelName;
            variable41['style'] = variable55;
            variable55 = variable53[variable46];
            variable55 = variable54.bind(report)(variable55);
            variable56 = variable55.intl;
            variable55 = variable56.format;
            variable53 = variable53[variable46];
            variable53 = variable54.bind(report)(variable53);
            variable53 = variable53.t;
            variable54 = variable53.6Y1Ken;
            variable53 = {};
            variable57 = echoed.name;
            variable53['channelName'] = variable57;
            variable54 = variable55.bind(variable56)(variable54, variable53);
            variable53 = [' '];
            variable53[1] = variable54;
            variable41['children'] = variable53;
            variable41 = variable52.bind(report)(variable51, variable41);
            variable40[1] = variable41;
            sizing['children'] = variable40;
            sizing = variable39.bind(report)(variable38, sizing);
            variable38 = new Array(3);
            variable38[0] = sizing;
            variable39 = entity != variable49;
            sizing = null;
            if(!variable39) { _fun00024_ip = 3573; continue _fun00023 }
 3527:
            variable41 = _closure1_slot29;
            variable40 = _closure1_slot1;
            variable51 = _closure1_slot2;
            variable39 = 57;
            variable39 = variable51[variable39];
            variable40 = variable40.bind(report)(variable39);
            variable39 = {};
            variable51 = vacuum.messageError;
            variable39['style'] = variable51;
            variable39['children'] = variable49;
            sizing = variable41.bind(report)(variable40, variable39);
 3573:
            variable38[1] = sizing;
            variable41 = _closure1_slot29;
            variable49 = _closure1_slot0;
            sizing = _closure1_slot2;
            variable39 = 62;
            variable39 = sizing[variable39];
            variable39 = variable49.bind(report)(variable39);
            variable40 = variable39.TextInput;
            variable39 = {};
            variable39['ref'] = variable50;
            variable50 = vacuum.contentInput;
            variable39['style'] = variable50;
            variable39['multiline'] = variable48;
            variable39['scrollEnabled'] = variable47;
            variable47 = sizing[variable46];
            variable47 = variable49.bind(report)(variable47);
            variable48 = variable47.intl;
            variable47 = variable48.string;
            variable46 = sizing[variable46];
            variable46 = variable49.bind(report)(variable46);
            variable46 = variable46.t;
            variable46 = variable46.8IPnv7;
            variable46 = variable47.bind(variable48)(variable46);
            variable39['placeholder'] = variable46;
            variable39['placeholderTextColor'] = variable45;
            variable39['value'] = source;
            variable39['onChangeText'] = variable44;
            variable39['onSelectionChange'] = variable42;
            variable42 = function() { // Original name: onFocus
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
            variable39['onFocus'] = variable42;
            variable42 = _closure1_slot24;
            variable42 = variable42.EXPRESSION;
            variable42 = variable43 !== variable42;
            variable39['showSoftInputOnFocus'] = variable42;
            variable39 = variable41.bind(report)(variable40, variable39);
            variable38[2] = variable39;
            quebec['children'] = variable38;
            quebec = variable37.bind(report)(variable36, quebec);
            equals[1] = quebec;
            output['children'] = equals;
            output = whisks.bind(report)(limora, output);
            foxtra[2] = output;
            offset['children'] = foxtra;
            romeon = verify.bind(report)(romeon, offset);
            offset = new Array(5);
            offset[0] = romeon;
            output = _closure1_slot29;
            foxtra = _closure1_slot36;
            romeon = {};
            romeon['tags'] = status;
            romeon = output.bind(report)(foxtra, romeon);
            offset[1] = romeon;
            output = _closure1_slot29;
            foxtra = _closure1_slot37;
            romeon = {};
            romeon['channel'] = sierra;
            romeon['tags'] = status;
            romeon['setTags'] = target;
            romeon['canPost'] = papara;
            romeon['submitting'] = cntext;
            romeon['onSubmit'] = record;
            record = function() { // Original name: onShowExpressionPicker
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
            romeon['onShowExpressionPicker'] = record;
            romeon['focusLastInput'] = config;
            romeon['lastInput'] = sequen;
            romeon['isEdit'] = result;
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
                    oscard = _closure2_slot37;
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
 4021:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();