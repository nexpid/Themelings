// app/modules/soundboard/native/SoundboardSoundPickerList.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
 344:
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
    entity = function(argFoo) { // Original name: getSectionLabel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.category;
            michal = michal.categoryInfo;
            tangon = michal.type;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            golfie = 7;
            zuuluu = zuuluu[golfie];
            oscard = undefined;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.SoundboardSoundGridSectionType;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 471; continue _fun00007 }
 63:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.SoundboardSoundGridSectionType;
            zuuluu = zuuluu.DEFAULTS;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 414; continue _fun00007 }
 99:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.SoundboardSoundGridSectionType;
            zuuluu = zuuluu.FAVORITES;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 357; continue _fun00007 }
 135:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.SoundboardSoundGridSectionType;
            zuuluu = zuuluu.SEARCH;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 353; continue _fun00007 }
 171:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.SoundboardSoundGridSectionType;
            zuuluu = zuuluu.RECENTLY_HEARD;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 296; continue _fun00007 }
 204:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.SoundboardSoundGridSectionType;
            zuuluu = zuuluu.FREQUENTLY_USED;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 239; continue _fun00007 }
 237:
            return oscard;
 239:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 8;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.+cGVV1;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 296:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 8;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.8i/+SE;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 353:
            zuuluu = null;
            return zuuluu;
 357:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 8;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.y3LQCA;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 414:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 8;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.Rtvk9f;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 471:
            entity = entity.category;
            entity = entity.categoryInfo;
            entity = entity.guild;
            entity = entity.name;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SOUND_BUTTON_HEIGHT;
    romeon = tangon.SOUND_ROW_HORIZONTAL_PADDING;
    yankee = tangon.SOUND_ROW_SPACING;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.ACTION_SHEET_BACKGROUND_COLOR;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.jsx;
    var _closure1_slot6 = verify;
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 8;
    backup = option + tangon;
    var _closure1_slot8 = backup;
    tangon = 6;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'height': null, 'display': 'flex', 'flexDirection': 'row'};
    offset['height'] = backup;
    offset['paddingHorizontal'] = romeon;
    tangon['row'] = offset;
    offset = {'flex': 1, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingTop': 16, 'paddingBottom': 8};
    offset['backgroundColor'] = foxtra;
    offset['paddingHorizontal'] = romeon;
    tangon['sectionHeader'] = offset;
    offset = {'height': 16, 'width': 16, 'borderRadius': 8, 'marginRight': 4};
    tangon['sectionIcon'] = offset;
    offset = {};
    offset['marginLeft'] = yankee;
    tangon['soundButtonNotFirst'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot9 = tangon;
    tangon = function(argFoo) { // Original name: SoundPickerButtonRow
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            verify = entity.row;
            option = entity.section;
            var _closure2_slot0 = option;
            michal = entity.channel;
            var _closure2_slot1 = michal;
            report = undefined;
            var _closure2_slot3 = report;
            entity = _closure1_slot9;
            yankee = entity.bind(report)();
            var _closure2_slot2 = yankee;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 10;
            entity = tangon[entity];
            offset = zuuluu.bind(report)(entity);
            tangon = offset.useStateFromStores;
            entity = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.canUseSoundboardEverywhere;
                tangon = _closure1_slot5;
                entity = tangon.getCurrentUser;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(offset)(zuuluu, entity);
            entity = null;
            if(!(entity != option)) { _fun00010_ip = 287; continue _fun00009 }
 109:
            offset = !zuuluu;
            if(!offset) { _fun00010_ip = 163; continue _fun00009 }
 115:
            tangon = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 12;
            zuuluu = romeon[zuuluu];
            romeon = tangon.bind(report)(zuuluu);
            tangon = romeon.isSoundboardSectionNitroLocked;
            zuuluu = michal.guild_id;
            michal = option.category;
            michal = michal.categoryInfo;
            offset = tangon.bind(romeon)(zuuluu, michal);
 163:
            _closure2_slot3 = offset;
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot4;
            michal = {};
            romeon = yankee.row;
            yankee = new Array(1);
            yankee[0] = romeon;
            michal['style'] = yankee;
            if(!offset) { _fun00010_ip = 236; continue _fun00009 }
 198:
            romeon = _closure1_slot6;
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 13;
            oscard = foxtra[oscard];
            oscard = yankee.bind(report)(oscard);
            yankee = oscard.PremiumUpsellGradientBackground;
            oscard = {};
            offset = romeon.bind(report)(yankee, oscard);
 236:
            oscard = new Array(2);
            oscard[0] = offset;
            option = option.soundsByRow;
            verify = option[verify];
            option = verify.map;
            golfie = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.type;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    golfie = 7;
                    zuuluu = zuuluu[golfie];
                    report = undefined;
                    zuuluu = oscard.bind(report)(zuuluu);
                    zuuluu = zuuluu.SoundboardSoundItemType;
                    zuuluu = zuuluu.SOUND;
                    if(!(zuuluu !== tangon)) { _fun00012_ip = 120; continue _fun00011 }
 49:
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = oscard.bind(report)(zuuluu);
                    zuuluu = zuuluu.SoundboardSoundItemType;
                    zuuluu = zuuluu.ADD_SOUND;
                    if(!(zuuluu !== tangon)) { _fun00012_ip = 84; continue _fun00011 }
 82:
                    return report;
 84:
                    zuuluu = global;
                    oscard = zuuluu.Error;
                    zuuluu = oscard.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: oscard}});
                    romeon = 'ADD_SOUND Not implemented';
                    foxtra = tangon;
                    zuuluu = new foxtra[oscard](romeon, yankee);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 120:
                    entity = entity.sound;
                    tangon = _closure1_slot6;
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 14;
                    michal = oscard[michal];
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = michal.SoundButton;
                    michal = {};
                    michal['sound'] = entity;
                    golfie = _closure2_slot1;
                    michal['channel'] = golfie;
                    option = argBar;
                    golfie = 0;
                    option = option > golfie;
                    golfie = null;
                    if(!option) { _fun00012_ip = 198; continue _fun00011 }
 188:
                    option = _closure2_slot2;
                    golfie = option.soundButtonNotFirst;
 198:
                    michal['style'] = golfie;
                    golfie = _closure2_slot3;
                    michal['isSectionLocked'] = golfie;
                    oscard = _closure2_slot0;
                    oscard = oscard.category;
                    verify = oscard.key;
                    option = entity.soundId;
                    entity = global;
                    entity = entity.HermesInternal;
                    golfie = entity.concat;
                    oscard = '';
                    entity = '-';
                    entity = golfie.bind(oscard)(verify, entity, option);
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                }
            };
            golfie = option.bind(verify)(golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 287:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            var _closure2_slot0 = michal;
            oscard = entity.insetBottom;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00014_ip = 28; continue _fun00013 }
 26:
            oscard = 0;
 28:
            option = entity.listRef;
            zuuluu = entity.scrollPosition;
            var _closure2_slot1 = zuuluu;
            zuuluu = entity.onScroll;
            var _closure2_slot2 = zuuluu;
            zuuluu = entity.setCategoryIndex;
            var _closure2_slot3 = zuuluu;
            zuuluu = entity.shouldShowPremiumUpsell;
            var _closure2_slot4 = zuuluu;
            yankee = entity.categories;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            entity = function(argFoo, argBar) { // Original name: calculateCategory
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = global;
                    zuuluu = entity.Math;
                    michal = zuuluu.round;
                    entity = argFoo;
                    oscard = michal.bind(zuuluu)(entity);
                    entity = _closure2_slot7;
                    entity = entity.length;
                    option = 0;
                    michal = option < entity;
                    entity = 0;
                    if(!michal) { _fun00016_ip = 116; continue _fun00015 }
 44:
                    michal = _closure2_slot7;
                    zuuluu = michal[option];
                    michal = argBar;
                    tangon = michal + zuuluu;
                    golfie = oscard >= tangon;
                    zuuluu = 0;
                    michal = 0;
                    entity = 0;
                    if(!golfie) { _fun00016_ip = 116; continue _fun00015 }
 72:
                    golfie = zuuluu + 1;
                    michal = michal + 1;
                    option = _closure2_slot7;
                    option = option.length;
                    entity = golfie;
                    if(!(michal < option)) { _fun00016_ip = 116; continue _fun00015 }
 94:
                    option = _closure2_slot7;
                    option = option[michal];
                    tangon = tangon + option;
                    zuuluu = golfie;
                    entity = zuuluu;
                    if(oscard >= tangon) { _fun00016_ip = 72; continue _fun00015 }
 116:
                    return entity;
                }
            };
            var _closure2_slot11 = entity;
            entity = function(argFoo) { // Original name: getSectionIcon
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = argFoo;
                    entity = report.category;
                    entity = entity.categoryInfo;
                    michal = entity.type;
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 7;
                    entity = entity[oscard];
                    tangon = undefined;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.GUILD;
                    if(!(entity !== michal)) { _fun00018_ip = 511; continue _fun00017 }
 63:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscard];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.DEFAULTS;
                    if(!(entity !== michal)) { _fun00018_ip = 444; continue _fun00017 }
 99:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscard];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.FAVORITES;
                    if(!(entity !== michal)) { _fun00018_ip = 377; continue _fun00017 }
 135:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscard];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.RECENTLY_HEARD;
                    if(!(entity !== michal)) { _fun00018_ip = 310; continue _fun00017 }
 171:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscard];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.FREQUENTLY_USED;
                    if(!(entity !== michal)) { _fun00018_ip = 243; continue _fun00017 }
 204:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscard];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.SEARCH;
                    if(!(entity !== michal)) { _fun00018_ip = 239; continue _fun00017 }
 237:
                    return tangon;
 239:
                    entity = null;
                    return entity;
 243:
                    zuuluu = _closure1_slot6;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 19;
                    entity = verify[entity];
                    michal = option.bind(tangon)(entity);
                    entity = {};
                    oscard = 23;
                    oscard = verify[oscard];
                    oscard = option.bind(tangon)(oscard);
                    entity['source'] = oscard;
                    oscard = _closure2_slot5;
                    oscard = oscard.sectionIcon;
                    entity['style'] = oscard;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 310:
                    zuuluu = _closure1_slot6;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 19;
                    entity = verify[entity];
                    michal = option.bind(tangon)(entity);
                    entity = {};
                    oscard = 22;
                    oscard = verify[oscard];
                    oscard = option.bind(tangon)(oscard);
                    entity['source'] = oscard;
                    oscard = _closure2_slot5;
                    oscard = oscard.sectionIcon;
                    entity['style'] = oscard;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 377:
                    zuuluu = _closure1_slot6;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 19;
                    entity = verify[entity];
                    michal = option.bind(tangon)(entity);
                    entity = {};
                    oscard = 21;
                    oscard = verify[oscard];
                    oscard = option.bind(tangon)(oscard);
                    entity['source'] = oscard;
                    oscard = _closure2_slot5;
                    oscard = oscard.sectionIcon;
                    entity['style'] = oscard;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 444:
                    zuuluu = _closure1_slot6;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 19;
                    entity = verify[entity];
                    michal = option.bind(tangon)(entity);
                    entity = {};
                    oscard = 20;
                    oscard = verify[oscard];
                    oscard = option.bind(tangon)(oscard);
                    entity['source'] = oscard;
                    oscard = _closure2_slot5;
                    oscard = oscard.sectionIcon;
                    entity['style'] = oscard;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 511:
                    zuuluu = _closure1_slot6;
                    michal = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 18;
                    entity = option[oscard];
                    michal = michal.bind(tangon)(entity);
                    entity = {};
                    golfie = _closure1_slot0;
                    oscard = option[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    oscard = oscard.GuildIconSizes;
                    oscard = oscard.XXSMALL_12;
                    entity['size'] = oscard;
                    report = report.category;
                    report = report.categoryInfo;
                    report = report.guild;
                    entity['guild'] = report;
                    report = _closure2_slot5;
                    report = report.sectionIcon;
                    entity['style'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            var _closure2_slot12 = entity;
            entity = function(argFoo) { // Original name: isSectionLocked
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    oscard = argFoo;
                    entity = _closure2_slot10;
                    entity = !entity;
                    if(!entity) { _fun00020_ip = 30; continue _fun00019 }
 16:
                    zuuluu = _closure2_slot6;
                    tangon = zuuluu[oscard];
                    zuuluu = null;
                    entity = zuuluu != tangon;
 30:
                    if(!entity) { _fun00020_ip = 98; continue _fun00019 }
 33:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 12;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.isSoundboardSectionNitroLocked;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.guild_id;
                    michal = _closure2_slot6;
                    michal = michal[oscard];
                    michal = michal.category;
                    michal = michal.categoryInfo;
                    entity = tangon.bind(report)(zuuluu, michal);
 98:
                    return entity;
                }
            };
            var _closure2_slot13 = entity;
            entity = function(argFoo) { // Original name: getSectionPosition
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot13;
                    michal = 1;
                    entity = tangon - michal;
                    report = undefined;
                    entity = zuuluu.bind(report)(entity);
                    oscard = zuuluu.bind(report)(tangon);
                    michal = tangon + michal;
                    zuuluu = zuuluu.bind(report)(michal);
                    if(oscard) { _fun00022_ip = 84; continue _fun00021 }
 41:
                    if(!zuuluu) { _fun00022_ip = 84; continue _fun00021 }
 44:
                    if(entity) { _fun00022_ip = 84; continue _fun00021 }
 47:
                    michal = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 24;
                    entity = tangon[entity];
                    entity = michal.bind(report)(entity);
                    entity = entity.PremiumUpsellSectionDividerPosition;
                    entity = entity.START;
                    _fun00022_ip = 132; continue _fun00021;
 84:
                    michal = null;
                    if(!oscard) { _fun00022_ip = 129; continue _fun00021 }
 89:
                    michal = null;
                    if(zuuluu) { _fun00022_ip = 129; continue _fun00021 }
 94:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 24;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = zuuluu.PremiumUpsellSectionDividerPosition;
                    michal = zuuluu.END;
 129:
                    entity = michal;
 132:
                    return entity;
                }
            };
            var _closure2_slot14 = entity;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.bind(tangon)();
            _closure2_slot5 = zuuluu;
            zuuluu = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 15;
            golfie = offset[golfie];
            verify = zuuluu.bind(tangon)(golfie);
            golfie = verify.useFontScale;
            result = golfie.bind(verify)();
            golfie = 16;
            golfie = offset[golfie];
            verify = zuuluu.bind(tangon)(golfie);
            golfie = verify.useSoundPickerListStyleConfig;
            golfie = golfie.bind(verify)();
            output = golfie.soundsPerRow;
            verify = new Array(0);
            golfie = _closure1_slot11;
            backup = golfie.bind(tangon)(yankee);
            romeon = backup.bind(tangon)();
            golfie = romeon.done;
            foxtra = global;
            if(golfie) { _fun00014_ip = 310; continue _fun00013 }
 248:
            golfie = romeon.value;
            golfie = golfie.items;
            sizing = foxtra.Math;
            kiloes = sizing.ceil;
            golfie = golfie.length;
            golfie = golfie / output;
            kiloes = kiloes.bind(sizing)(golfie);
            golfie = verify.push;
            golfie = golfie.bind(verify)(kiloes);
            kiloes = backup.bind(tangon)();
            golfie = kiloes.done;
            romeon = kiloes;
            if(!golfie) { _fun00014_ip = 248; continue _fun00013 }
 310:
            foxtra = new Array(0);
            golfie = _closure1_slot11;
            sizing = golfie.bind(tangon)(yankee);
            yankee = sizing.bind(tangon)();
            golfie = yankee.done;
            kiloes = 9;
            backup = 18;
            romeon = 8;
            if(golfie) { _fun00014_ip = 443; continue _fun00013 }
 344:
            vacuum = yankee.value;
            echoed = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[kiloes];
            echoed = echoed.bind(tangon)(golfie);
            golfie = vacuum.items;
            update = echoed.bind(tangon)(golfie, output);
            echoed = update.length;
            golfie = _closure1_slot8;
            ctrled = echoed * golfie;
            source = backup * result;
            echoed = foxtra.push;
            golfie = {};
            golfie['category'] = vacuum;
            source = source + romeon;
            source = ctrled + source;
            golfie['height'] = source;
            golfie['soundsByRow'] = update;
            golfie = echoed.bind(foxtra)(golfie);
            echoed = sizing.bind(tangon)();
            golfie = echoed.done;
            yankee = echoed;
            if(!golfie) { _fun00014_ip = 344; continue _fun00013 }
 443:
            _closure2_slot6 = foxtra;
            romeon = _closure1_slot3;
            backup = romeon.useMemo;
            yankee = new Array(1);
            yankee[0] = foxtra;
            golfie = function() {
                zuuluu = _closure2_slot6;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.height;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = backup.bind(romeon)(golfie, yankee);
            _closure2_slot7 = golfie;
            yankee = romeon.useCallback;
            golfie = new Array(2);
            golfie[0] = foxtra;
            golfie[1] = michal;
            michal = function(argFoo, argBar) {
                tangon = _closure1_slot6;
                zuuluu = _closure1_slot10;
                michal = {};
                entity = argBar;
                michal['row'] = entity;
                oscard = _closure2_slot6;
                report = argFoo;
                report = oscard[report];
                michal['section'] = report;
                entity = _closure2_slot0;
                michal['channel'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            golfie = yankee.bind(romeon)(michal, golfie);
            michal = 17;
            yankee = offset[michal];
            foxtra = zuuluu.bind(tangon)(yankee);
            romeon = foxtra.debounce;
            yankee = function(argFoo) {
                report = _closure2_slot11;
                entity = undefined;
                tangon = argFoo;
                zuuluu = 0;
                zuuluu = report.bind(entity)(tangon, zuuluu);
                michal = _closure2_slot3;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            yankee = romeon.bind(foxtra)(yankee);
            _closure2_slot8 = yankee;
            michal = offset[michal];
            romeon = zuuluu.bind(tangon)(michal);
            yankee = romeon.debounce;
            michal = function(argFoo, argBar) {
                report = _closure2_slot11;
                entity = argBar;
                zuuluu = -entity;
                entity = 2;
                tangon = zuuluu / entity;
                entity = undefined;
                zuuluu = argFoo;
                option = report.bind(entity)(zuuluu, tangon);
                tangon = _closure2_slot4;
                zuuluu = tangon.set;
                report = _closure2_slot13;
                oscard = global;
                golfie = oscard.Math;
                oscard = golfie.min;
                michal = _closure2_slot7;
                verify = michal.length;
                michal = 1;
                michal = verify - michal;
                michal = oscard.bind(golfie)(option, michal);
                michal = report.bind(entity)(michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = yankee.bind(romeon)(michal);
            _closure2_slot9 = michal;
            michal = 10;
            michal = offset[michal];
            romeon = zuuluu.bind(tangon)(michal);
            yankee = romeon.useStateFromStores;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.canUseSoundboardEverywhere;
                tangon = _closure1_slot5;
                entity = tangon.getCurrentUser;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = yankee.bind(romeon)(zuuluu, michal);
            _closure2_slot10 = michal;
            zuuluu = _closure1_slot6;
            michal = _closure1_slot1;
            entity = 25;
            entity = offset[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            offset = function(argFoo) { // Original name: onLayout
                tangon = _closure2_slot9;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                zuuluu = entity.height;
                michal = undefined;
                entity = 0;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            entity['onLayout'] = offset;
            entity['sections'] = verify;
            verify = function(argFoo) { // Original name: sectionSize
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = argFoo;
                    tangon = michal[entity];
                    michal = null;
                    if(!(michal != tangon)) { _fun00024_ip = 44; continue _fun00023 }
 20:
                    zuuluu = _closure1_slot13;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(tangon);
                    michal = michal == entity;
                    entity = 42;
                    if(!michal) { _fun00024_ip = 46; continue _fun00023 }
 44:
                    entity = 0;
 46:
                    return entity;
                }
            };
            entity['sectionSize'] = verify;
            verify = function(argFoo) { // Original name: itemSize
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = argFoo;
                    michal = michal[entity];
                    entity = null;
                    michal = entity == michal;
                    entity = 0;
                    if(michal) { _fun00026_ip = 32; continue _fun00025 }
 25:
                    entity = _closure1_slot8;
 32:
                    return entity;
                }
            };
            entity['itemSize'] = verify;
            verify = function(argFoo) { // Original name: sectionFooterSize
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = _closure2_slot14;
                    report = undefined;
                    entity = argFoo;
                    michal = michal.bind(report)(entity);
                    entity = null;
                    michal = entity == michal;
                    entity = 0;
                    if(michal) { _fun00028_ip = 76; continue _fun00027 }
 28:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 24;
                    zuuluu = oscard[michal];
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = zuuluu.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT;
                    michal = oscard[michal];
                    michal = tangon.bind(report)(michal);
                    michal = michal.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
                    entity = zuuluu + michal;
 76:
                    return entity;
                }
            };
            entity['sectionFooterSize'] = verify;
            entity['ref'] = option;
            entity['renderItem'] = golfie;
            golfie = function(argFoo) { // Original name: renderSection
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure2_slot6;
                    entity = entity[zuuluu];
                    michal = _closure2_slot13;
                    report = undefined;
                    option = michal.bind(report)(zuuluu);
                    tangon = _closure1_slot6;
                    zuuluu = _closure1_slot4;
                    michal = {};
                    golfie = _closure1_slot7;
                    oscard = {};
                    offset = _closure2_slot5;
                    offset = offset.sectionHeader;
                    oscard['style'] = offset;
                    offset = option;
                    if(!offset) { _fun00030_ip = 102; continue _fun00029 }
 64:
                    foxtra = _closure1_slot6;
                    yankee = _closure1_slot0;
                    backup = _closure1_slot2;
                    option = 13;
                    option = backup[option];
                    option = yankee.bind(report)(option);
                    yankee = option.PremiumUpsellGradientBackground;
                    option = {};
                    offset = foxtra.bind(report)(yankee, option);
 102:
                    option = new Array(3);
                    option[0] = offset;
                    verify = _closure2_slot12;
                    verify = verify.bind(report)(entity);
                    option[1] = verify;
                    yankee = _closure1_slot6;
                    offset = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    verify = 26;
                    verify = foxtra[verify];
                    verify = offset.bind(report)(verify);
                    offset = verify.Text;
                    verify = {'accessibilityRole': 'header', 'lineClamp': 1, 'variant': 'heading-sm/semibold'};
                    romeon = _closure1_slot13;
                    romeon = romeon.bind(report)(entity);
                    verify['children'] = romeon;
                    verify = yankee.bind(report)(offset, verify);
                    option[2] = verify;
                    oscard['children'] = option;
                    oscard = golfie.bind(report)(zuuluu, oscard);
                    michal['children'] = oscard;
                    entity = entity.category;
                    entity = entity.key;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                }
            };
            entity['renderSection'] = golfie;
            golfie = function(argFoo) { // Original name: renderSectionFooter
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    michal = _closure2_slot14;
                    report = undefined;
                    entity = argFoo;
                    oscard = michal.bind(report)(entity);
                    entity = null;
                    michal = entity != oscard;
                    if(!michal) { _fun00032_ip = 65; continue _fun00031 }
 26:
                    tangon = _closure1_slot6;
                    zuuluu = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 24;
                    michal = golfie[michal];
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = {};
                    michal['position'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 65:
                    return entity;
                }
            };
            entity['renderSectionFooter'] = golfie;
            entity['insetEnd'] = oscard;
            report = function(argFoo) { // Original name: onScroll
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.nativeEvent;
                    entity = tangon.contentOffset;
                    golfie = entity.y;
                    report = _closure2_slot8;
                    entity = undefined;
                    report = report.bind(entity)(golfie);
                    oscard = _closure2_slot9;
                    report = tangon.layoutMeasurement;
                    report = report.height;
                    report = oscard.bind(entity)(golfie, report);
                    oscard = tangon.layoutMeasurement;
                    report = tangon.contentOffset;
                    tangon = tangon.contentSize;
                    oscard = oscard.height;
                    report = report.y;
                    report = oscard + report;
                    oscard = tangon.height;
                    tangon = 20;
                    tangon = oscard - tangon;
                    if(!(!(report >= tangon))) { _fun00034_ip = 143; continue _fun00033 }
 102:
                    tangon = _closure2_slot1;
                    report = null;
                    if(!(report != tangon)) { _fun00034_ip = 126; continue _fun00033 }
 112:
                    oscard = _closure2_slot1;
                    tangon = oscard.set;
                    tangon = tangon.bind(oscard)(golfie);
 126:
                    tangon = _closure2_slot2;
                    if(!(report != tangon)) { _fun00034_ip = 143; continue _fun00033 }
 134:
                    michal = _closure2_slot2;
                    michal = michal.bind(entity)(zuuluu);
 143:
                    return entity;
                }
            };
            entity['onScroll'] = report;
            report = 'handled';
            entity['keyboardShouldPersistTaps'] = report;
            report = true;
            entity['optimizeListItemRender'] = report;
            entity['inActionSheet'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/soundboard/native/SoundboardSoundPickerList.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['SoundboardSoundPickerList'] = michal;
    return entity;
})();