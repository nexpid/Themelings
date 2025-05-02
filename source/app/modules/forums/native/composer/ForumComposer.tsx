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
            if(oscard) { _fun00012_ip = 348; continue _fun00011 }
 328:
            entity = verify;
            if(!verify) { _fun00012_ip = 345; continue _fun00011 }
 334:
            zuuluu = update.length;
            michal = 0;
            entity = zuuluu > michal;
 345:
            oscard = entity;
 348:
            entity = romeon.availableTags;
            michal = null;
            offset = michal != entity;
            if(!offset) { _fun00012_ip = 389; continue _fun00011 }
 363:
            entity = romeon.availableTags;
            zuuluu = michal == entity;
            michal = undefined;
            if(zuuluu) { _fun00012_ip = 383; continue _fun00011 }
 378:
            michal = entity.length;
 383:
            entity = 0;
            offset = michal > entity;
 389:
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
            if(!oscard) { _fun00012_ip = 514; continue _fun00011 }
 451:
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
 514:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot30;
            golfie = _closure1_slot8;
            oscard = {};
            romeon = output.actions;
            oscard['style'] = romeon;
            romeon = verify;
            if(!romeon) { _fun00012_ip = 757; continue _fun00011 }
 551:
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
            if(vacuum) { _fun00012_ip = 682; continue _fun00011 }
 673:
            vacuum = 74;
            vacuum = record[vacuum];
            _fun00012_ip = 689; continue _fun00011;
 682:
            config = 73;
            vacuum = record[config];
 689:
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
 757:
            verify = new Array(4);
            verify[0] = romeon;
            if(!offset) { _fun00012_ip = 953; continue _fun00011 }
 771:
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
 953:
            verify[1] = offset;
            romeon = _closure1_slot0;
            update = _closure1_slot2;
            offset = 43;
            offset = update[offset];
            offset = romeon.bind(tangon)(offset);
            offset = offset.PostComposerInputs;
            offset = offset.CONTENT;
            offset = yankee === offset;
            if(!offset) { _fun00012_ip = 1156; continue _fun00011 }
 999:
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
 1156:
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
            if(echoed) { _fun00012_ip = 1248; continue _fun00011 }
 1233:
            echoed = source.pIuQIy;
            echoed = ctrled.bind(vacuum)(echoed);
            _fun00012_ip = 1259; continue _fun00011;
 1248:
            source = source.R3BPHx;
            echoed = ctrled.bind(vacuum)(source);
 1259:
            offset['text'] = echoed;
            echoed = _closure1_slot0;
            result = _closure1_slot2;
            result = result[update];
            result = echoed.bind(tangon)(result);
            echoed = result.ButtonLooks;
            if(kiloes) { _fun00012_ip = 1297; continue _fun00011 }
 1289:
            result = echoed.OUTLINED;
            _fun00012_ip = 1303; continue _fun00011;
 1297:
            result = echoed.FILLED;
 1303:
            offset['look'] = result;
            offset['shrink'] = sizing;
            offset['foregroundRipple'] = sizing;
            sizing = output.postButton;
            offset['style'] = sizing;
            if(kiloes) { _fun00012_ip = 1339; continue _fun00011 }
 1331:
            sizing = output.postButtonTextDisabled;
            _fun00012_ip = 1345; continue _fun00011;
 1339:
            sizing = output.postButtonText;
 1345:
            offset['textStyle'] = sizing;
            offset['loading'] = backup;
            if(backup) { _fun00012_ip = 1361; continue _fun00011 }
 1358:
            backup = !kiloes;
 1361:
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
    golfie = tangon.jsx;
    var _closure1_slot29 = golfie;
    golfie = tangon.jsxs;
    var _closure1_slot30 = golfie;
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
            whisks = entity.parentChannel;
            var _closure2_slot0 = whisks;
            michal = entity.thread;
            var _closure2_slot1 = michal;
            variable38 = entity.threadSettingsDraft;
            var _closure2_slot2 = variable38;
            verify = entity.onClose;
            var _closure2_slot3 = verify;
            variable39 = entity.message;
            var _closure2_slot4 = variable39;
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
            variable40 = zuuluu.bind(oscard)(entity);
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
            variable42 = romeon.bind(foxtra)(offset, option, golfie);
            var _closure2_slot7 = variable42;
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
            offset = offset.bind(romeon)(option, golfie);
            golfie = tangon[zuuluu];
            foxtra = oscard.bind(report)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot10;
            option = new Array(1);
            option[0] = golfie;
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
            result = romeon.bind(foxtra)(option, golfie);
            tangon = tangon[zuuluu];
            option = oscard.bind(report)(tangon);
            golfie = option.useStateFromStores;
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
            oscard = golfie.bind(option)(oscard, tangon);
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 22;
            tangon = option[tangon];
            tangon = golfie.bind(report)(tangon);
            tangon = tangon.unsafe_rawColors;
            if(oscard) { _fun00024_ip = 459; continue _fun00023 }
 451:
            variable47 = tangon.PRIMARY_460;
            _fun00024_ip = 465; continue _fun00023;
 459:
            variable47 = tangon.PRIMARY_330;
 465:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            golfie = oscard[zuuluu];
            foxtra = tangon.bind(report)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot15;
            option = new Array(1);
            option[0] = golfie;
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
            cntext = romeon.bind(foxtra)(option, golfie);
            _closure2_slot8 = cntext;
            golfie = oscard[zuuluu];
            foxtra = tangon.bind(report)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot17;
            option = new Array(1);
            option[0] = golfie;
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
            ctrled = romeon.bind(foxtra)(option, golfie);
            _closure2_slot9 = ctrled;
            zuuluu = oscard[zuuluu];
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStoresObject;
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
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            variable45 = zuuluu.keyboardType;
            _closure2_slot10 = variable45;
            tangon = _closure1_slot1;
            zuuluu = 26;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            record = zuuluu.bind(report)();
            _closure2_slot11 = record;
            tangon = _closure1_slot5;
            zuuluu = tangon.useState;
            variable49 = false;
            tangon = zuuluu.bind(tangon)(variable49);
            zuuluu = _closure1_slot4;
            romeon = 2;
            zuuluu = zuuluu.bind(report)(tangon, romeon);
            golfie = 0;
            target = zuuluu[golfie];
            tangon = 1;
            zuuluu = zuuluu[tangon];
            _closure2_slot12 = zuuluu;
            foxtra = _closure1_slot5;
            oscard = foxtra.useState;
            if(sequen) { _fun00024_ip = 707; continue _fun00023 }
 691:
            zuuluu = entity == variable38;
            kiloes = undefined;
            if(zuuluu) { _fun00024_ip = 705; continue _fun00023 }
 700:
            kiloes = variable38.name;
 705:
            _fun00024_ip = 724; continue _fun00023;
 707:
            option = entity == michal;
            zuuluu = undefined;
            if(option) { _fun00024_ip = 721; continue _fun00023 }
 716:
            zuuluu = michal.name;
 721:
            kiloes = zuuluu;
 724:
            sizing = entity != kiloes;
            option = '';
            zuuluu = option;
            if(!sizing) { _fun00024_ip = 741; continue _fun00023 }
 738:
            zuuluu = kiloes;
 741:
            oscard = oscard.bind(foxtra)(zuuluu);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(oscard, romeon);
            variable37 = zuuluu[golfie];
            _closure2_slot13 = variable37;
            zuuluu = zuuluu[tangon];
            _closure2_slot14 = zuuluu;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            kiloes = 27;
            zuuluu = zuuluu[kiloes];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.useChannelTemplate;
            output = zuuluu.bind(oscard)(whisks);
            foxtra = option;
            if(!sequen) { _fun00024_ip = 871; continue _fun00023 }
 809:
            zuuluu = entity != variable39;
            foxtra = option;
            if(!zuuluu) { _fun00024_ip = 871; continue _fun00023 }
 819:
            zuuluu = entity != michal;
            foxtra = option;
            if(!zuuluu) { _fun00024_ip = 871; continue _fun00023 }
 829:
            oscard = _closure1_slot1;
            sizing = _closure1_slot2;
            zuuluu = 28;
            zuuluu = sizing[zuuluu];
            echoed = oscard.bind(report)(zuuluu);
            sizing = echoed.unparse;
            oscard = variable39.content;
            zuuluu = michal.id;
            foxtra = sizing.bind(echoed)(oscard, zuuluu);
 871:
            oscard = _closure1_slot5;
            zuuluu = oscard.useState;
            if(sequen) { _fun00024_ip = 913; continue _fun00023 }
 883:
            sizing = output;
            if(!(entity != result)) { _fun00024_ip = 910; continue _fun00023 }
 890:
            echoed = result.trim;
            echoed = echoed.bind(result)();
            sizing = output;
            if(!(option !== echoed)) { _fun00024_ip = 910; continue _fun00023 }
 907:
            sizing = result;
 910:
            foxtra = sizing;
 913:
            oscard = zuuluu.bind(oscard)(foxtra);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(oscard, romeon);
            source = zuuluu[golfie];
            _closure2_slot15 = source;
            zuuluu = zuuluu[tangon];
            _closure2_slot16 = zuuluu;
            foxtra = _closure1_slot0;
            oscard = _closure1_slot2;
            sizing = oscard[kiloes];
            result = foxtra.bind(report)(sizing);
            sizing = result.useAvailableTags;
            result = sizing.bind(result)(whisks);
            oscard = oscard[kiloes];
            foxtra = foxtra.bind(report)(oscard);
            oscard = foxtra.useAppliedTags;
            kiloes = oscard.bind(foxtra)(michal);
            _closure2_slot17 = kiloes;
            sizing = _closure1_slot5;
            foxtra = sizing.useState;
            if(!sequen) { _fun00024_ip = 1015; continue _fun00023 }
 1008:
            oscard = kiloes;
            if(!(entity == result)) { _fun00024_ip = 1019; continue _fun00023 }
 1015:
            oscard = new Array(0);
 1019:
            oscard = foxtra.bind(sizing)(oscard);
            foxtra = _closure1_slot4;
            oscard = foxtra.bind(report)(oscard, romeon);
            limora = oscard[golfie];
            _closure2_slot18 = limora;
            sierra = oscard[tangon];
            sizing = _closure1_slot5;
            oscard = sizing.useState;
            oscard = oscard.bind(sizing)(entity);
            oscard = foxtra.bind(report)(oscard, romeon);
            sizing = oscard[golfie];
            oscard = oscard[tangon];
            _closure2_slot19 = oscard;
            result = _closure1_slot5;
            oscard = result.useState;
            oscard = oscard.bind(result)(entity);
            foxtra = foxtra.bind(report)(oscard, romeon);
            oscard = foxtra[golfie];
            foxtra = foxtra[tangon];
            _closure2_slot20 = foxtra;
            foxtra = entity == offset;
            variable54 = undefined;
            if(foxtra) { _fun00024_ip = 1125; continue _fun00023 }
 1119:
            variable54 = offset.colorString;
 1125:
            foxtra = entity == offset;
            variable57 = undefined;
            if(foxtra) { _fun00024_ip = 1140; continue _fun00023 }
 1134:
            variable57 = offset.nick;
 1140:
            if(!(entity == variable57)) { _fun00024_ip = 1175; continue _fun00023 }
 1144:
            foxtra = _closure1_slot1;
            result = _closure1_slot2;
            offset = 29;
            offset = result[offset];
            foxtra = foxtra.bind(report)(offset);
            offset = foxtra.getName;
            variable57 = offset.bind(foxtra)(variable42);
 1175:
            foxtra = _closure1_slot5;
            offset = foxtra.useRef;
            variable52 = offset.bind(foxtra)(entity);
            _closure2_slot21 = variable52;
            result = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 30;
            offset = foxtra[offset];
            result = result.bind(report)(offset);
            variable50 = true;
            offset = {'includeKeyboardHeightIOS': true, 'includeCustomKeyboardHeightIOS': false};
            offset = result.bind(report)(offset);
            config = offset.insets;
            update = _closure1_slot5;
            echoed = update.useCallback;
            result = function() {
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
            equals = echoed.bind(update)(result, offset);
            result = _closure1_slot0;
            offset = 31;
            echoed = foxtra[offset];
            update = result.bind(report)(echoed);
            echoed = update.useSharedValue;
            papara = echoed.bind(update)(golfie);
            _closure2_slot22 = papara;
            foxtra = foxtra[offset];
            echoed = result.bind(report)(foxtra);
            result = echoed.useAnimatedScrollHandler;
            foxtra = function(argFoo) { // Original name: K
                entity = argFoo;
                entity = entity.contentOffset;
                zuuluu = entity.y;
                michal = _closure2_slot22;
                entity = michal.set;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            update = {};
            update['scrollTopValue'] = papara;
            foxtra['__closure'] = update;
            update = 16880842576840.0;
            foxtra['__workletHash'] = update;
            update = _closure1_slot33;
            foxtra['__initData'] = update;
            foxtra = result.bind(echoed)(foxtra);
            papara = _closure1_slot5;
            update = papara.useCallback;
            echoed = new Array(2);
            echoed[0] = sequen;
            result = whisks.id;
            echoed[1] = result;
            result = function(argFoo) {
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
            quebec = update.bind(papara)(result, echoed);
            papara = _closure1_slot5;
            update = papara.useCallback;
            echoed = new Array(1);
            echoed[0] = verify;
            result = function(argFoo) {
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
            update = update.bind(papara)(result, echoed);
            _closure2_slot23 = update;
            status = _closure1_slot5;
            papara = status.useMemo;
            echoed = new Array(1);
            echoed[0] = limora;
            result = function() {
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
            papara = papara.bind(status)(result, echoed);
            _closure2_slot24 = papara;
            status = _closure1_slot5;
            echoed = status.useMemo;
            result = new Array(1);
            result[0] = kiloes;
            kiloes = function() {
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
            echoed = echoed.bind(status)(kiloes, result);
            _closure2_slot25 = echoed;
            variable36 = _closure1_slot5;
            status = variable36.useCallback;
            kiloes = function() {
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
            result = kiloes.bind(report)();
            kiloes = new Array(7);
            kiloes[0] = michal;
            kiloes[1] = variable39;
            kiloes[2] = echoed;
            kiloes[3] = papara;
            kiloes[4] = variable37;
            kiloes[5] = update;
            kiloes[6] = verify;
            variable36 = status.bind(variable36)(result, kiloes);
            _closure2_slot26 = variable36;
            result = entity == variable38;
            kiloes = undefined;
            if(result) { _fun00024_ip = 1577; continue _fun00023 }
 1572:
            kiloes = variable38.name;
 1577:
            kiloes = entity != kiloes;
            if(!kiloes) { _fun00024_ip = 1598; continue _fun00023 }
 1584:
            result = variable38.name;
            result = result.length;
            kiloes = result > golfie;
 1598:
            result = source.trim;
            result = result.bind(source)();
            status = ctrled.length;
            status = status > golfie;
            option = option === output;
            if(option) { _fun00024_ip = 1628; continue _fun00023 }
 1624:
            option = result !== output;
 1628:
            if(!option) { _fun00024_ip = 1649; continue _fun00023 }
 1631:
            output = result.length;
            output = output > golfie;
            if(output) { _fun00024_ip = 1646; continue _fun00023 }
 1643:
            output = status;
 1646:
            option = output;
 1649:
            status = !sequen;
            if(!status) { _fun00024_ip = 1658; continue _fun00023 }
 1655:
            status = kiloes;
 1658:
            if(!status) { _fun00024_ip = 1664; continue _fun00023 }
 1661:
            status = option;
 1664:
            if(status) { _fun00024_ip = 1756; continue _fun00023 }
 1667:
            option = sequen;
            if(!option) { _fun00024_ip = 1753; continue _fun00023 }
 1673:
            output = entity == michal;
            kiloes = undefined;
            if(output) { _fun00024_ip = 1687; continue _fun00023 }
 1682:
            kiloes = michal.name;
 1687:
            kiloes = variable37 !== kiloes;
            if(kiloes) { _fun00024_ip = 1712; continue _fun00023 }
 1694:
            variable41 = entity == variable39;
            output = undefined;
            if(variable41) { _fun00024_ip = 1708; continue _fun00023 }
 1703:
            output = variable39.content;
 1708:
            kiloes = result !== output;
 1712:
            if(kiloes) { _fun00024_ip = 1750; continue _fun00023 }
 1715:
            result = _closure1_slot1;
            variable39 = _closure1_slot2;
            output = 35;
            output = variable39[output];
            result = result.bind(report)(output);
            output = result.isEqual;
            output = output.bind(result)(echoed, papara);
            kiloes = !output;
 1750:
            option = kiloes;
 1753:
            status = option;
 1756:
            kiloes = _closure1_slot0;
            output = _closure1_slot2;
            option = 38;
            option = output[option];
            echoed = kiloes.bind(report)(option);
            result = echoed.useCreateForumPost;
            option = {};
            option['parentChannel'] = whisks;
            option['threadSettings'] = variable38;
            option['appliedTags'] = papara;
            option['onThreadCreated'] = update;
            papara = result.bind(echoed)(option);
            _closure2_slot27 = papara;
            update = _closure1_slot5;
            echoed = update.useCallback;
            option = function() {
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
            result = option.bind(report)();
            option = new Array(8);
            option[0] = whisks;
            variable38 = limora.length;
            option[1] = variable38;
            option[2] = sequen;
            option[3] = michal;
            option[4] = source;
            option[5] = variable36;
            option[6] = papara;
            option[7] = ctrled;
            option = echoed.bind(update)(result, option);
            _closure2_slot28 = option;
            update = _closure1_slot5;
            echoed = update.useCallback;
            result = new Array(6);
            result[0] = whisks;
            result[1] = cntext;
            result[2] = record;
            result[3] = ctrled;
            result[4] = option;
            result[5] = source;
            option = function(argFoo) {
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
            papara = echoed.bind(update)(option, result);
            echoed = _closure1_slot5;
            result = echoed.useCallback;
            option = new Array(2);
            option[0] = zuuluu;
            zuuluu = whisks.id;
            option[1] = zuuluu;
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
            variable46 = result.bind(echoed)(zuuluu, option);
            zuuluu = 43;
            zuuluu = output[zuuluu];
            result = kiloes.bind(report)(zuuluu);
            option = result.useFocusHandlers;
            zuuluu = {};
            zuuluu['titleInput'] = variable40;
            zuuluu['contentInput'] = variable52;
            zuuluu = option.bind(result)(zuuluu);
            option = zuuluu.setFocusedInput;
            _closure2_slot29 = option;
            cntext = zuuluu.focusLastInput;
            _closure2_slot30 = cntext;
            option = zuuluu.blurLastInput;
            _closure2_slot31 = option;
            record = zuuluu.focusedInput;
            result = _closure1_slot5;
            option = result.useState;
            zuuluu = {'start': 0, 'end': null};
            zuuluu = option.bind(result)(zuuluu);
            option = _closure1_slot4;
            zuuluu = option.bind(report)(zuuluu, romeon);
            update = zuuluu[golfie];
            zuuluu = zuuluu[tangon];
            _closure2_slot32 = zuuluu;
            ctrled = _closure1_slot5;
            echoed = ctrled.useCallback;
            result = function(argFoo) {
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
            variable44 = echoed.bind(ctrled)(result, zuuluu);
            ctrled = _closure1_slot5;
            echoed = ctrled.useCallback;
            result = function(argFoo) {
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
            ctrled = echoed.bind(ctrled)(result, zuuluu);
            zuuluu = 45;
            result = output[zuuluu];
            variable36 = kiloes.bind(report)(result);
            echoed = variable36.usePressEmojiHandler;
            result = {};
            result['selection'] = update;
            result['draftContent'] = source;
            result['handleTextChange'] = variable46;
            result['focusTextInput'] = equals;
            result['setSelection'] = ctrled;
            result = echoed.bind(variable36)(result);
            _closure2_slot33 = result;
            zuuluu = output[zuuluu];
            echoed = kiloes.bind(report)(zuuluu);
            result = echoed.usePressGIFHandler;
            zuuluu = {};
            zuuluu['selection'] = update;
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable46;
            zuuluu['focusTextInput'] = equals;
            zuuluu['setSelection'] = ctrled;
            zuuluu = result.bind(echoed)(zuuluu);
            _closure2_slot34 = zuuluu;
            zuuluu = 46;
            zuuluu = output[zuuluu];
            echoed = kiloes.bind(report)(zuuluu);
            result = echoed.usePressHorizontalAutocompleteItemHandler;
            zuuluu = {};
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable46;
            zuuluu['setSelection'] = ctrled;
            ctrled = result.bind(echoed)(zuuluu);
            zuuluu = 47;
            zuuluu = output[zuuluu];
            output = kiloes.bind(report)(zuuluu);
            kiloes = output.useBackspaceHandler;
            zuuluu = {};
            zuuluu['selection'] = update;
            zuuluu['draftContent'] = source;
            zuuluu['handleTextChange'] = variable46;
            zuuluu = kiloes.bind(output)(zuuluu);
            _closure2_slot35 = zuuluu;
            kiloes = _closure1_slot5;
            zuuluu = kiloes.useState;
            zuuluu = zuuluu.bind(kiloes)(golfie);
            zuuluu = option.bind(report)(zuuluu, romeon);
            romeon = zuuluu[golfie];
            zuuluu = zuuluu[tangon];
            _closure2_slot36 = zuuluu;
            option = _closure1_slot5;
            golfie = option.useCallback;
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
            result = golfie.bind(option)(tangon, zuuluu);
            echoed = whisks;
            if(!sequen) { _fun00024_ip = 2398; continue _fun00023 }
 2395:
            echoed = michal;
 2398:
            _closure2_slot37 = echoed;
            if(!(entity != echoed)) { _fun00024_ip = 4132; continue _fun00023 }
 2409:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 39;
            golfie = tangon[michal];
            kiloes = zuuluu.bind(report)(golfie);
            option = kiloes.renderError;
            golfie = {};
            golfie['content'] = variable37;
            variable36 = option.bind(kiloes)(sizing, golfie);
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.renderError;
            michal = {};
            michal['content'] = source;
            michal['tags'] = limora;
            variable51 = zuuluu.bind(tangon)(oscard, michal);
            michal = echoed.isMediaChannel;
            michal = michal.bind(echoed)();
            if(michal) { _fun00024_ip = 2498; continue _fun00023 }
 2492:
            kiloes = new Array(0);
            _fun00024_ip = 2541; continue _fun00023;
 2498:
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
 2541:
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
            option = config.top;
            golfie['paddingTop'] = option;
            option = config.bottom;
            option = option + romeon;
            golfie['paddingBottom'] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            option = _closure1_slot29;
            romeon = _closure1_slot1;
            variable39 = _closure1_slot2;
            oscard = 51;
            oscard = variable39[oscard];
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
            oscard['submitting'] = target;
            oscard['title'] = variable37;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot30;
            option = _closure1_slot31;
            golfie = {};
            offset = variable39[offset];
            offset = romeon.bind(report)(offset);
            romeon = offset.ScrollView;
            offset = {'onScroll': null, 'scrollEventThrottle': 16, 'keyboardShouldPersistTaps': 'always', 'nestedScrollEnabled': false, 'contentContainerStyle': null, 'keyboardDismissMode': 'on-drag'};
            offset['onScroll'] = foxtra;
            foxtra = vacuum.scrollViewContentContainer;
            offset['contentContainerStyle'] = foxtra;
            output = _closure1_slot29;
            variable38 = _closure1_slot0;
            foxtra = 53;
            foxtra = variable39[foxtra];
            foxtra = variable38.bind(report)(foxtra);
            sizing = foxtra.FormInput;
            foxtra = {};
            foxtra['ref'] = variable40;
            variable40 = vacuum.titleInput;
            foxtra['style'] = variable40;
            variable40 = vacuum.titleInputText;
            foxtra['inputTextStyle'] = variable40;
            foxtra['showTopContainer'] = variable49;
            variable48 = 41;
            variable40 = variable39[variable48];
            variable40 = variable38.bind(report)(variable40);
            variable43 = variable40.intl;
            variable41 = variable43.string;
            variable40 = variable39[variable48];
            variable40 = variable38.bind(report)(variable40);
            variable40 = variable40.t;
            variable40 = variable40.lU4dDQ;
            variable40 = variable41.bind(variable43)(variable40);
            foxtra['placeholder'] = variable40;
            foxtra['placeholderTextColor'] = variable47;
            foxtra['large'] = variable50;
            foxtra['multiline'] = variable50;
            foxtra['value'] = variable37;
            variable37 = 54;
            variable37 = variable39[variable37];
            variable37 = variable38.bind(report)(variable37);
            variable37 = variable37.ClearButtonVisibility;
            variable37 = variable37.NEVER;
            foxtra['clearButtonVisibility'] = variable37;
            variable37 = _closure1_slot21;
            foxtra['maxLength'] = variable37;
            foxtra['onChange'] = quebec;
            quebec = function() { // Original name: onBlur
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
            foxtra['onBlur'] = quebec;
            quebec = function() { // Original name: onFocus
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
            foxtra['onFocus'] = quebec;
            foxtra['autoFocus'] = variable50;
            foxtra['autoCorrect'] = variable50;
            quebec = 'none';
            foxtra['textContentType'] = quebec;
            quebec = 'next';
            foxtra['returnKeyType'] = quebec;
            foxtra['onNext'] = equals;
            sizing = output.bind(report)(sizing, foxtra);
            foxtra = new Array(3);
            foxtra[0] = sizing;
            output = entity != variable36;
            sizing = null;
            if(!output) { _fun00024_ip = 3043; continue _fun00023 }
 2997:
            quebec = _closure1_slot29;
            equals = _closure1_slot1;
            variable37 = _closure1_slot2;
            output = 57;
            output = variable37[output];
            equals = equals.bind(report)(output);
            output = {};
            variable37 = vacuum.nameError;
            output['style'] = variable37;
            output['children'] = variable36;
            sizing = quebec.bind(report)(equals, output);
 3043:
            foxtra[1] = sizing;
            quebec = _closure1_slot30;
            equals = _closure1_slot8;
            output = {};
            sizing = vacuum.editor;
            output['style'] = sizing;
            sizing = entity != variable42;
            if(!sizing) { _fun00024_ip = 3281; continue _fun00023 }
 3077:
            variable38 = _closure1_slot29;
            variable37 = _closure1_slot7;
            variable36 = {};
            variable39 = vacuum.avatarContainer;
            variable36['style'] = variable39;
            variable39 = function() { // Original name: onPress
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
            variable36['onPress'] = variable39;
            variable41 = _closure1_slot29;
            variable40 = _closure1_slot1;
            variable43 = _closure1_slot2;
            variable39 = 59;
            variable39 = variable43[variable39];
            variable40 = variable40.bind(report)(variable39);
            variable39 = {};
            variable39['animate'] = variable50;
            variable43 = vacuum.avatar;
            variable39['style'] = variable43;
            variable39['user'] = variable42;
            variable43 = entity == whisks;
            variable53 = undefined;
            if(variable43) { _fun00024_ip = 3172; continue _fun00023 }
 3162:
            variable43 = whisks.getGuildId;
            variable53 = variable43.bind(whisks)();
 3172:
            variable55 = entity != variable53;
            variable43 = undefined;
            if(!variable55) { _fun00024_ip = 3184; continue _fun00023 }
 3181:
            variable43 = variable53;
 3184:
            variable39['guildId'] = variable43;
            variable42 = variable42.avatarDecoration;
            variable39['avatarDecoration'] = variable42;
            variable43 = _closure1_slot0;
            variable42 = _closure1_slot2;
            variable53 = variable42[variable48];
            variable53 = variable43.bind(report)(variable53);
            variable55 = variable53.intl;
            variable53 = variable55.formatToPlainString;
            variable42 = variable42[variable48];
            variable42 = variable43.bind(report)(variable42);
            variable42 = variable42.t;
            variable43 = variable42.LvU3np;
            variable42 = {};
            variable42['nickname'] = variable57;
            variable42 = variable53.bind(variable55)(variable43, variable42);
            variable39['accessibilityLabel'] = variable42;
            variable39 = variable41.bind(report)(variable40, variable39);
            variable36['children'] = variable39;
            sizing = variable38.bind(report)(variable37, variable36);
 3281:
            variable36 = new Array(2);
            variable36[0] = sizing;
            variable39 = _closure1_slot30;
            variable38 = _closure1_slot8;
            variable37 = {};
            sizing = vacuum.editorBody;
            variable37['style'] = sizing;
            variable41 = _closure1_slot30;
            variable40 = _closure1_slot8;
            sizing = {};
            variable42 = vacuum.usernameToChannel;
            sizing['style'] = variable42;
            variable56 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable42 = variable55[variable48];
            variable42 = variable56.bind(report)(variable42);
            variable58 = variable42.intl;
            variable53 = variable58.formatToPlainString;
            variable42 = variable55[variable48];
            variable42 = variable56.bind(report)(variable42);
            variable42 = variable42.t;
            variable43 = variable42.QicUf3;
            variable42 = {};
            variable42['nickname'] = variable57;
            variable59 = echoed.name;
            variable42['channelName'] = variable59;
            variable42 = variable53.bind(variable58)(variable43, variable42);
            sizing['accessibilityLabel'] = variable42;
            variable53 = _closure1_slot29;
            variable42 = 60;
            variable42 = variable55[variable42];
            variable42 = variable56.bind(report)(variable42);
            variable43 = variable42.RoleLabel;
            variable42 = {};
            variable42['name'] = variable57;
            variable42['color'] = variable54;
            variable43 = variable53.bind(report)(variable43, variable42);
            variable42 = new Array(2);
            variable42[0] = variable43;
            variable54 = _closure1_slot30;
            variable43 = 61;
            variable43 = variable55[variable43];
            variable43 = variable56.bind(report)(variable43);
            variable53 = variable43.Text;
            variable43 = {'color': 'header-secondary', 'variant': 'text-xs/medium'};
            variable57 = vacuum.channelName;
            variable43['style'] = variable57;
            variable57 = variable55[variable48];
            variable57 = variable56.bind(report)(variable57);
            variable58 = variable57.intl;
            variable57 = variable58.format;
            variable55 = variable55[variable48];
            variable55 = variable56.bind(report)(variable55);
            variable55 = variable55.t;
            variable56 = variable55.6Y1Ken;
            variable55 = {};
            variable59 = echoed.name;
            variable55['channelName'] = variable59;
            variable56 = variable57.bind(variable58)(variable56, variable55);
            variable55 = [' '];
            variable55[1] = variable56;
            variable43['children'] = variable55;
            variable43 = variable54.bind(report)(variable53, variable43);
            variable42[1] = variable43;
            sizing['children'] = variable42;
            sizing = variable41.bind(report)(variable40, sizing);
            variable40 = new Array(3);
            variable40[0] = sizing;
            variable41 = entity != variable51;
            sizing = null;
            if(!variable41) { _fun00024_ip = 3656; continue _fun00023 }
 3610:
            variable43 = _closure1_slot29;
            variable42 = _closure1_slot1;
            variable53 = _closure1_slot2;
            variable41 = 57;
            variable41 = variable53[variable41];
            variable42 = variable42.bind(report)(variable41);
            variable41 = {};
            variable53 = vacuum.messageError;
            variable41['style'] = variable53;
            variable41['children'] = variable51;
            sizing = variable43.bind(report)(variable42, variable41);
 3656:
            variable40[1] = sizing;
            variable43 = _closure1_slot29;
            variable51 = _closure1_slot0;
            sizing = _closure1_slot2;
            variable41 = 62;
            variable41 = sizing[variable41];
            variable41 = variable51.bind(report)(variable41);
            variable42 = variable41.TextInput;
            variable41 = {};
            variable41['ref'] = variable52;
            variable52 = vacuum.contentInput;
            variable41['style'] = variable52;
            variable41['multiline'] = variable50;
            variable41['scrollEnabled'] = variable49;
            variable49 = sizing[variable48];
            variable49 = variable51.bind(report)(variable49);
            variable50 = variable49.intl;
            variable49 = variable50.string;
            variable48 = sizing[variable48];
            variable48 = variable51.bind(report)(variable48);
            variable48 = variable48.t;
            variable48 = variable48.8IPnv7;
            variable48 = variable49.bind(variable50)(variable48);
            variable41['placeholder'] = variable48;
            variable41['placeholderTextColor'] = variable47;
            variable41['value'] = source;
            variable41['onChangeText'] = variable46;
            variable41['onSelectionChange'] = variable44;
            variable44 = function() { // Original name: onFocus
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
            variable41['onFocus'] = variable44;
            variable44 = _closure1_slot24;
            variable44 = variable44.EXPRESSION;
            variable44 = variable45 !== variable44;
            variable41['showSoftInputOnFocus'] = variable44;
            variable41 = variable43.bind(report)(variable42, variable41);
            variable40[2] = variable41;
            variable37['children'] = variable40;
            variable37 = variable39.bind(report)(variable38, variable37);
            variable36[1] = variable37;
            output['children'] = variable36;
            output = quebec.bind(report)(equals, output);
            foxtra[2] = output;
            offset['children'] = foxtra;
            romeon = verify.bind(report)(romeon, offset);
            offset = new Array(5);
            offset[0] = romeon;
            output = _closure1_slot29;
            foxtra = _closure1_slot36;
            romeon = {};
            romeon['tags'] = limora;
            romeon = output.bind(report)(foxtra, romeon);
            offset[1] = romeon;
            output = _closure1_slot29;
            foxtra = _closure1_slot37;
            romeon = {};
            romeon['channel'] = whisks;
            romeon['tags'] = limora;
            romeon['setTags'] = sierra;
            romeon['canPost'] = status;
            romeon['submitting'] = target;
            romeon['onSubmit'] = papara;
            papara = function() { // Original name: onShowExpressionPicker
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
            romeon['onShowExpressionPicker'] = papara;
            romeon['focusLastInput'] = cntext;
            romeon['lastInput'] = record;
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
            sequen = vacuum.horizontalAutocomplete;
            vacuum = new Array(2);
            vacuum[0] = sequen;
            sequen = {};
            config = config.bottom;
            sequen['bottom'] = config;
            vacuum[1] = sequen;
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
 4132:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();