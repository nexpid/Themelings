// app/modules/soundboard/native/SoundboardSoundPickerList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun103487: for(var _fun103487_ip = 0; ; ) switch(_fun103487_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun103487_ip = 46; continue _fun103487 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun103487_ip = 55; continue _fun103487 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun103487_ip = 345; continue _fun103487 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun103487_ip = 323; continue _fun103487 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun103487_ip = 283; continue _fun103487 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun103487_ip = 270; continue _fun103487 }
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
            if(!golf) { _fun103487_ip = 163; continue _fun103487 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun103487_ip = 179; continue _fun103487 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun103487_ip = 249; continue _fun103487 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun103487_ip = 249; continue _fun103487 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun103487_ip = 234; continue _fun103487 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun103487_ip = 247; continue _fun103487 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun103487_ip = 265; continue _fun103487;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun103487_ip = 283; continue _fun103487;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun103487_ip = 323; continue _fun103487 }
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
            if(!tango) { _fun103487_ip = 330; continue _fun103487 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun103488: for(var _fun103488_ip = 0; ; ) switch(_fun103488_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun103488_ip = 56; continue _fun103488 }
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
                    _fun103488_ip = 67; continue _fun103488;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun103489: for(var _fun103489_ip = 0; ; ) switch(_fun103489_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun103489_ip = 23; continue _fun103489 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun103489_ip = 33; continue _fun103489 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun103489_ip = 70; continue _fun103489 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun103489_ip = 55; continue _fun103489 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getSectionLabel
        _fun103490: for(var _fun103490_ip = 0; ; ) switch(_fun103490_ip) {
 0:
            entity = argFoo;
            mike = entity.category;
            mike = mike.categoryInfo;
            tango = mike.type;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            golf = 7;
            zulu = zulu[golf];
            oscar = undefined;
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.SoundboardSoundGridSectionType;
            zulu = zulu.GUILD;
            if(!(zulu !== tango)) { _fun103490_ip = 471; continue _fun103490 }
 63:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.SoundboardSoundGridSectionType;
            zulu = zulu.DEFAULTS;
            if(!(zulu !== tango)) { _fun103490_ip = 414; continue _fun103490 }
 99:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.SoundboardSoundGridSectionType;
            zulu = zulu.FAVORITES;
            if(!(zulu !== tango)) { _fun103490_ip = 357; continue _fun103490 }
 135:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.SoundboardSoundGridSectionType;
            zulu = zulu.SEARCH;
            if(!(zulu !== tango)) { _fun103490_ip = 353; continue _fun103490 }
 171:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.SoundboardSoundGridSectionType;
            zulu = zulu.RECENTLY_HEARD;
            if(!(zulu !== tango)) { _fun103490_ip = 296; continue _fun103490 }
 204:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.SoundboardSoundGridSectionType;
            zulu = zulu.FREQUENTLY_USED;
            if(!(zulu !== tango)) { _fun103490_ip = 239; continue _fun103490 }
 237:
            return oscar;
 239:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 8;
            tango = options[zulu];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.+cGVV1;
            zulu = tango.bind(report)(zulu);
            return zulu;
 296:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 8;
            tango = options[zulu];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.8i/+SE;
            zulu = tango.bind(report)(zulu);
            return zulu;
 353:
            zulu = null;
            return zulu;
 357:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 8;
            tango = options[zulu];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.y3LQCA;
            zulu = tango.bind(report)(zulu);
            return zulu;
 414:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 8;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.Rtvk9f;
            mike = zulu.bind(tango)(mike);
            return mike;
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
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.SOUND_BUTTON_HEIGHT;
    romeo = tango.SOUND_ROW_HORIZONTAL_PADDING;
    yankee = tango.SOUND_ROW_SPACING;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.ACTION_SHEET_BACKGROUND_COLOR;
    tango = 5;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot6 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 8;
    backup = options + tango;
    var _closure1_slot8 = backup;
    tango = 6;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'height': null, 'display': 'flex', 'flexDirection': 'row'};
    offset['height'] = backup;
    offset['paddingHorizontal'] = romeo;
    tango['row'] = offset;
    offset = {'flex': 1, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingTop': 16, 'paddingBottom': 8};
    offset['backgroundColor'] = foxtrot;
    offset['paddingHorizontal'] = romeo;
    tango['sectionHeader'] = offset;
    offset = {'height': 16, 'width': 16, 'borderRadius': 8, 'marginRight': 4};
    tango['sectionIcon'] = offset;
    offset = {};
    offset['marginLeft'] = yankee;
    tango['soundButtonNotFirst'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot9 = tango;
    tango = function(argFoo) { // Original name: SoundPickerButtonRow
        _fun103491: for(var _fun103491_ip = 0; ; ) switch(_fun103491_ip) {
 0:
            entity = argFoo;
            verify = entity.row;
            options = entity.section;
            var _closure2_slot0 = options;
            mike = entity.channel;
            var _closure2_slot1 = mike;
            report = undefined;
            var _closure2_slot3 = report;
            entity = _closure1_slot9;
            yankee = entity.bind(report)();
            var _closure2_slot2 = yankee;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 10;
            entity = tango[entity];
            offset = zulu.bind(report)(entity);
            tango = offset.useStateFromStores;
            entity = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 11;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.canUseSoundboardEverywhere;
                tango = _closure1_slot5;
                entity = tango.getCurrentUser;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(offset)(zulu, entity);
            entity = null;
            if(!(entity != options)) { _fun103491_ip = 287; continue _fun103491 }
 109:
            offset = !zulu;
            if(!offset) { _fun103491_ip = 163; continue _fun103491 }
 115:
            tango = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 12;
            zulu = romeo[zulu];
            romeo = tango.bind(report)(zulu);
            tango = romeo.isSoundboardSectionNitroLocked;
            zulu = mike.guild_id;
            mike = options.category;
            mike = mike.categoryInfo;
            offset = tango.bind(romeo)(zulu, mike);
 163:
            _closure2_slot3 = offset;
            tango = _closure1_slot7;
            zulu = _closure1_slot4;
            mike = {};
            romeo = yankee.row;
            yankee = new Array(1);
            yankee[0] = romeo;
            mike['style'] = yankee;
            if(!offset) { _fun103491_ip = 236; continue _fun103491 }
 198:
            romeo = _closure1_slot6;
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 13;
            oscar = foxtrot[oscar];
            oscar = yankee.bind(report)(oscar);
            yankee = oscar.PremiumUpsellGradientBackground;
            oscar = {};
            offset = romeo.bind(report)(yankee, oscar);
 236:
            oscar = new Array(2);
            oscar[0] = offset;
            options = options.soundsByRow;
            verify = options[verify];
            options = verify.map;
            golf = function(argFoo, argBar) {
                _fun103493: for(var _fun103493_ip = 0; ; ) switch(_fun103493_ip) {
 0:
                    entity = argFoo;
                    tango = entity.type;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    golf = 7;
                    zulu = zulu[golf];
                    report = undefined;
                    zulu = oscar.bind(report)(zulu);
                    zulu = zulu.SoundboardSoundItemType;
                    zulu = zulu.SOUND;
                    if(!(zulu !== tango)) { _fun103493_ip = 120; continue _fun103493 }
 49:
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = oscar.bind(report)(zulu);
                    zulu = zulu.SoundboardSoundItemType;
                    zulu = zulu.ADD_SOUND;
                    if(!(zulu !== tango)) { _fun103493_ip = 84; continue _fun103493 }
 82:
                    return report;
 84:
                    zulu = global;
                    oscar = zulu.Error;
                    zulu = oscar.prototype;
                    tango = Object.create(zulu, {constructor: {value: oscar}});
                    romeo = 'ADD_SOUND Not implemented';
                    foxtrot = tango;
                    zulu = new foxtrot[oscar](romeo, yankee);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 120:
                    entity = entity.sound;
                    tango = _closure1_slot6;
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 14;
                    mike = oscar[mike];
                    mike = zulu.bind(report)(mike);
                    zulu = mike.SoundButton;
                    mike = {};
                    mike['sound'] = entity;
                    golf = _closure2_slot1;
                    mike['channel'] = golf;
                    options = argBar;
                    golf = 0;
                    options = options > golf;
                    golf = null;
                    if(!options) { _fun103493_ip = 198; continue _fun103493 }
 188:
                    options = _closure2_slot2;
                    golf = options.soundButtonNotFirst;
 198:
                    mike['style'] = golf;
                    golf = _closure2_slot3;
                    mike['isSectionLocked'] = golf;
                    oscar = _closure2_slot0;
                    oscar = oscar.category;
                    verify = oscar.key;
                    options = entity.soundId;
                    entity = global;
                    entity = entity.HermesInternal;
                    golf = entity.concat;
                    oscar = '';
                    entity = '-';
                    entity = golf.bind(oscar)(verify, entity, options);
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                }
            };
            golf = options.bind(verify)(golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 287:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun103494: for(var _fun103494_ip = 0; ; ) switch(_fun103494_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            var _closure2_slot0 = mike;
            oscar = entity.insetBottom;
            tango = undefined;
            if(!(oscar === tango)) { _fun103494_ip = 28; continue _fun103494 }
 26:
            oscar = 0;
 28:
            offset = entity.listRef;
            zulu = entity.scrollPosition;
            var _closure2_slot1 = zulu;
            zulu = entity.onScroll;
            var _closure2_slot2 = zulu;
            zulu = entity.setCategoryIndex;
            var _closure2_slot3 = zulu;
            zulu = entity.shouldShowPremiumUpsell;
            var _closure2_slot4 = zulu;
            verify = entity.categories;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            entity = function(argFoo, argBar) { // Original name: calculateCategory
                _fun103495: for(var _fun103495_ip = 0; ; ) switch(_fun103495_ip) {
 0:
                    entity = global;
                    zulu = entity.Math;
                    mike = zulu.round;
                    entity = argFoo;
                    oscar = mike.bind(zulu)(entity);
                    entity = _closure2_slot7;
                    entity = entity.length;
                    options = 0;
                    mike = options < entity;
                    entity = 0;
                    if(!mike) { _fun103495_ip = 116; continue _fun103495 }
 44:
                    mike = _closure2_slot7;
                    zulu = mike[options];
                    mike = argBar;
                    tango = mike + zulu;
                    golf = oscar >= tango;
                    zulu = 0;
                    mike = 0;
                    entity = 0;
                    if(!golf) { _fun103495_ip = 116; continue _fun103495 }
 72:
                    golf = zulu + 1;
                    mike = mike + 1;
                    options = _closure2_slot7;
                    options = options.length;
                    entity = golf;
                    if(!(mike < options)) { _fun103495_ip = 116; continue _fun103495 }
 94:
                    options = _closure2_slot7;
                    options = options[mike];
                    tango = tango + options;
                    zulu = golf;
                    entity = zulu;
                    if(oscar >= tango) { _fun103495_ip = 72; continue _fun103495 }
 116:
                    return entity;
                }
            };
            var _closure2_slot11 = entity;
            entity = function(argFoo) { // Original name: getSectionIcon
                _fun103496: for(var _fun103496_ip = 0; ; ) switch(_fun103496_ip) {
 0:
                    report = argFoo;
                    entity = report.category;
                    entity = entity.categoryInfo;
                    mike = entity.type;
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 7;
                    entity = entity[oscar];
                    tango = undefined;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.GUILD;
                    if(!(entity !== mike)) { _fun103496_ip = 511; continue _fun103496 }
 63:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscar];
                    entity = zulu.bind(tango)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.DEFAULTS;
                    if(!(entity !== mike)) { _fun103496_ip = 444; continue _fun103496 }
 99:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscar];
                    entity = zulu.bind(tango)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.FAVORITES;
                    if(!(entity !== mike)) { _fun103496_ip = 377; continue _fun103496 }
 135:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscar];
                    entity = zulu.bind(tango)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.RECENTLY_HEARD;
                    if(!(entity !== mike)) { _fun103496_ip = 310; continue _fun103496 }
 171:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscar];
                    entity = zulu.bind(tango)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.FREQUENTLY_USED;
                    if(!(entity !== mike)) { _fun103496_ip = 243; continue _fun103496 }
 204:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscar];
                    entity = zulu.bind(tango)(entity);
                    entity = entity.SoundboardSoundGridSectionType;
                    entity = entity.SEARCH;
                    if(!(entity !== mike)) { _fun103496_ip = 239; continue _fun103496 }
 237:
                    return tango;
 239:
                    entity = null;
                    return entity;
 243:
                    zulu = _closure1_slot6;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 19;
                    entity = verify[entity];
                    mike = options.bind(tango)(entity);
                    entity = {};
                    oscar = 23;
                    oscar = verify[oscar];
                    oscar = options.bind(tango)(oscar);
                    entity['source'] = oscar;
                    oscar = _closure2_slot5;
                    oscar = oscar.sectionIcon;
                    entity['style'] = oscar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
 310:
                    zulu = _closure1_slot6;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 19;
                    entity = verify[entity];
                    mike = options.bind(tango)(entity);
                    entity = {};
                    oscar = 22;
                    oscar = verify[oscar];
                    oscar = options.bind(tango)(oscar);
                    entity['source'] = oscar;
                    oscar = _closure2_slot5;
                    oscar = oscar.sectionIcon;
                    entity['style'] = oscar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
 377:
                    zulu = _closure1_slot6;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 19;
                    entity = verify[entity];
                    mike = options.bind(tango)(entity);
                    entity = {};
                    oscar = 21;
                    oscar = verify[oscar];
                    oscar = options.bind(tango)(oscar);
                    entity['source'] = oscar;
                    oscar = _closure2_slot5;
                    oscar = oscar.sectionIcon;
                    entity['style'] = oscar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
 444:
                    zulu = _closure1_slot6;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 19;
                    entity = verify[entity];
                    mike = options.bind(tango)(entity);
                    entity = {};
                    oscar = 20;
                    oscar = verify[oscar];
                    oscar = options.bind(tango)(oscar);
                    entity['source'] = oscar;
                    oscar = _closure2_slot5;
                    oscar = oscar.sectionIcon;
                    entity['style'] = oscar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
 511:
                    zulu = _closure1_slot6;
                    mike = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 18;
                    entity = options[oscar];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    golf = _closure1_slot0;
                    oscar = options[oscar];
                    oscar = golf.bind(tango)(oscar);
                    oscar = oscar.GuildIconSizes;
                    oscar = oscar.XXSMALL_12;
                    entity['size'] = oscar;
                    report = report.category;
                    report = report.categoryInfo;
                    report = report.guild;
                    entity['guild'] = report;
                    report = _closure2_slot5;
                    report = report.sectionIcon;
                    entity['style'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            var _closure2_slot12 = entity;
            entity = function(argFoo) { // Original name: isSectionLocked
                _fun103497: for(var _fun103497_ip = 0; ; ) switch(_fun103497_ip) {
 0:
                    oscar = argFoo;
                    entity = _closure2_slot10;
                    entity = !entity;
                    if(!entity) { _fun103497_ip = 30; continue _fun103497 }
 16:
                    zulu = _closure2_slot6;
                    tango = zulu[oscar];
                    zulu = null;
                    entity = zulu != tango;
 30:
                    if(!entity) { _fun103497_ip = 98; continue _fun103497 }
 33:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 12;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.isSoundboardSectionNitroLocked;
                    zulu = _closure2_slot0;
                    zulu = zulu.guild_id;
                    mike = _closure2_slot6;
                    mike = mike[oscar];
                    mike = mike.category;
                    mike = mike.categoryInfo;
                    entity = tango.bind(report)(zulu, mike);
 98:
                    return entity;
                }
            };
            var _closure2_slot13 = entity;
            entity = function(argFoo) { // Original name: getSectionPosition
                _fun103498: for(var _fun103498_ip = 0; ; ) switch(_fun103498_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure2_slot13;
                    mike = 1;
                    entity = tango - mike;
                    report = undefined;
                    entity = zulu.bind(report)(entity);
                    oscar = zulu.bind(report)(tango);
                    mike = tango + mike;
                    zulu = zulu.bind(report)(mike);
                    if(oscar) { _fun103498_ip = 84; continue _fun103498 }
 41:
                    if(!zulu) { _fun103498_ip = 84; continue _fun103498 }
 44:
                    if(entity) { _fun103498_ip = 84; continue _fun103498 }
 47:
                    mike = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 24;
                    entity = tango[entity];
                    entity = mike.bind(report)(entity);
                    entity = entity.PremiumUpsellSectionDividerPosition;
                    entity = entity.START;
                    _fun103498_ip = 132; continue _fun103498;
 84:
                    mike = null;
                    if(!oscar) { _fun103498_ip = 129; continue _fun103498 }
 89:
                    mike = null;
                    if(zulu) { _fun103498_ip = 129; continue _fun103498 }
 94:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 24;
                    zulu = oscar[zulu];
                    zulu = tango.bind(report)(zulu);
                    zulu = zulu.PremiumUpsellSectionDividerPosition;
                    mike = zulu.END;
 129:
                    entity = mike;
 132:
                    return entity;
                }
            };
            var _closure2_slot14 = entity;
            zulu = _closure1_slot9;
            zulu = zulu.bind(tango)();
            _closure2_slot5 = zulu;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            golf = 15;
            golf = options[golf];
            yankee = zulu.bind(tango)(golf);
            golf = yankee.useFontScale;
            result = golf.bind(yankee)();
            golf = 16;
            golf = options[golf];
            yankee = zulu.bind(tango)(golf);
            golf = yankee.useSoundPickerListStyleConfig;
            golf = golf.bind(yankee)();
            output = golf.soundsPerRow;
            yankee = new Array(0);
            golf = _closure1_slot11;
            backup = golf.bind(tango)(verify);
            romeo = backup.bind(tango)();
            golf = romeo.done;
            foxtrot = global;
            if(golf) { _fun103494_ip = 310; continue _fun103494 }
 248:
            golf = romeo.value;
            golf = golf.items;
            sizing = foxtrot.Math;
            kilo = sizing.ceil;
            golf = golf.length;
            golf = golf / output;
            kilo = kilo.bind(sizing)(golf);
            golf = yankee.push;
            golf = golf.bind(yankee)(kilo);
            kilo = backup.bind(tango)();
            golf = kilo.done;
            romeo = kilo;
            if(!golf) { _fun103494_ip = 248; continue _fun103494 }
 310:
            foxtrot = new Array(0);
            golf = _closure1_slot11;
            sizing = golf.bind(tango)(verify);
            verify = sizing.bind(tango)();
            golf = verify.done;
            kilo = 9;
            backup = 18;
            romeo = 8;
            if(golf) { _fun103494_ip = 443; continue _fun103494 }
 344:
            vacuum = verify.value;
            echo = _closure1_slot1;
            golf = _closure1_slot2;
            golf = golf[kilo];
            echo = echo.bind(tango)(golf);
            golf = vacuum.items;
            update = echo.bind(tango)(golf, output);
            echo = update.length;
            golf = _closure1_slot8;
            control = echo * golf;
            source = backup * result;
            echo = foxtrot.push;
            golf = {};
            golf['category'] = vacuum;
            source = source + romeo;
            source = control + source;
            golf['height'] = source;
            golf['soundsByRow'] = update;
            golf = echo.bind(foxtrot)(golf);
            echo = sizing.bind(tango)();
            golf = echo.done;
            verify = echo;
            if(!golf) { _fun103494_ip = 344; continue _fun103494 }
 443:
            _closure2_slot6 = foxtrot;
            romeo = _closure1_slot3;
            backup = romeo.useMemo;
            verify = new Array(1);
            verify[0] = foxtrot;
            golf = function() {
                zulu = _closure2_slot6;
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.height;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = backup.bind(romeo)(golf, verify);
            _closure2_slot7 = golf;
            verify = romeo.useCallback;
            golf = new Array(2);
            golf[0] = foxtrot;
            golf[1] = mike;
            mike = function(argFoo, argBar) {
                tango = _closure1_slot6;
                zulu = _closure1_slot10;
                mike = {};
                entity = argBar;
                mike['row'] = entity;
                oscar = _closure2_slot6;
                report = argFoo;
                report = oscar[report];
                mike['section'] = report;
                entity = _closure2_slot0;
                mike['channel'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            verify = verify.bind(romeo)(mike, golf);
            mike = 17;
            golf = options[mike];
            foxtrot = zulu.bind(tango)(golf);
            romeo = foxtrot.debounce;
            golf = function(argFoo) {
                report = _closure2_slot11;
                entity = undefined;
                tango = argFoo;
                zulu = 0;
                zulu = report.bind(entity)(tango, zulu);
                mike = _closure2_slot3;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            golf = romeo.bind(foxtrot)(golf);
            _closure2_slot8 = golf;
            mike = options[mike];
            romeo = zulu.bind(tango)(mike);
            golf = romeo.debounce;
            mike = function(argFoo, argBar) {
                report = _closure2_slot11;
                entity = argBar;
                zulu = -entity;
                entity = 2;
                tango = zulu / entity;
                entity = undefined;
                zulu = argFoo;
                options = report.bind(entity)(zulu, tango);
                tango = _closure2_slot4;
                zulu = tango.set;
                report = _closure2_slot13;
                oscar = global;
                golf = oscar.Math;
                oscar = golf.min;
                mike = _closure2_slot7;
                verify = mike.length;
                mike = 1;
                mike = verify - mike;
                mike = oscar.bind(golf)(options, mike);
                mike = report.bind(entity)(mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = golf.bind(romeo)(mike);
            _closure2_slot9 = mike;
            mike = 10;
            mike = options[mike];
            romeo = zulu.bind(tango)(mike);
            golf = romeo.useStateFromStores;
            mike = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 11;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.canUseSoundboardEverywhere;
                tango = _closure1_slot5;
                entity = tango.getCurrentUser;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = golf.bind(romeo)(zulu, mike);
            _closure2_slot10 = mike;
            zulu = _closure1_slot6;
            golf = _closure1_slot1;
            entity = 25;
            entity = options[entity];
            mike = golf.bind(tango)(entity);
            entity = {};
            romeo = function(argFoo) { // Original name: onLayout
                tango = _closure2_slot9;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                zulu = entity.height;
                mike = undefined;
                entity = 0;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            entity['onLayout'] = romeo;
            entity['sections'] = yankee;
            yankee = function(argFoo) { // Original name: sectionSize
                _fun103506: for(var _fun103506_ip = 0; ; ) switch(_fun103506_ip) {
 0:
                    mike = _closure2_slot6;
                    entity = argFoo;
                    tango = mike[entity];
                    mike = null;
                    if(!(mike != tango)) { _fun103506_ip = 44; continue _fun103506 }
 20:
                    zulu = _closure1_slot13;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango);
                    mike = mike == entity;
                    entity = 42;
                    if(!mike) { _fun103506_ip = 46; continue _fun103506 }
 44:
                    entity = 0;
 46:
                    return entity;
                }
            };
            entity['sectionSize'] = yankee;
            yankee = function(argFoo) { // Original name: itemSize
                _fun103507: for(var _fun103507_ip = 0; ; ) switch(_fun103507_ip) {
 0:
                    mike = _closure2_slot6;
                    entity = argFoo;
                    mike = mike[entity];
                    entity = null;
                    mike = entity == mike;
                    entity = 0;
                    if(mike) { _fun103507_ip = 32; continue _fun103507 }
 25:
                    entity = _closure1_slot8;
 32:
                    return entity;
                }
            };
            entity['itemSize'] = yankee;
            yankee = function(argFoo) { // Original name: sectionFooterSize
                _fun103508: for(var _fun103508_ip = 0; ; ) switch(_fun103508_ip) {
 0:
                    mike = _closure2_slot14;
                    report = undefined;
                    entity = argFoo;
                    mike = mike.bind(report)(entity);
                    entity = null;
                    mike = entity == mike;
                    entity = 0;
                    if(mike) { _fun103508_ip = 76; continue _fun103508 }
 28:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 24;
                    zulu = oscar[mike];
                    zulu = tango.bind(report)(zulu);
                    zulu = zulu.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT;
                    mike = oscar[mike];
                    mike = tango.bind(report)(mike);
                    mike = mike.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
                    entity = zulu + mike;
 76:
                    return entity;
                }
            };
            entity['sectionFooterSize'] = yankee;
            entity['ref'] = offset;
            entity['renderItem'] = verify;
            verify = function(argFoo) { // Original name: renderSection
                _fun103509: for(var _fun103509_ip = 0; ; ) switch(_fun103509_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure2_slot6;
                    entity = entity[zulu];
                    mike = _closure2_slot13;
                    report = undefined;
                    options = mike.bind(report)(zulu);
                    tango = _closure1_slot6;
                    zulu = _closure1_slot4;
                    mike = {};
                    golf = _closure1_slot7;
                    oscar = {};
                    offset = _closure2_slot5;
                    offset = offset.sectionHeader;
                    oscar['style'] = offset;
                    offset = options;
                    if(!offset) { _fun103509_ip = 102; continue _fun103509 }
 64:
                    foxtrot = _closure1_slot6;
                    yankee = _closure1_slot0;
                    backup = _closure1_slot2;
                    options = 13;
                    options = backup[options];
                    options = yankee.bind(report)(options);
                    yankee = options.PremiumUpsellGradientBackground;
                    options = {};
                    offset = foxtrot.bind(report)(yankee, options);
 102:
                    options = new Array(3);
                    options[0] = offset;
                    verify = _closure2_slot12;
                    verify = verify.bind(report)(entity);
                    options[1] = verify;
                    yankee = _closure1_slot6;
                    offset = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    verify = 26;
                    verify = foxtrot[verify];
                    verify = offset.bind(report)(verify);
                    offset = verify.Text;
                    verify = {'lineClamp': 1, 'variant': 'heading-sm/semibold'};
                    romeo = _closure1_slot13;
                    romeo = romeo.bind(report)(entity);
                    verify['children'] = romeo;
                    verify = yankee.bind(report)(offset, verify);
                    options[2] = verify;
                    oscar['children'] = options;
                    oscar = golf.bind(report)(zulu, oscar);
                    mike['children'] = oscar;
                    entity = entity.category;
                    entity = entity.key;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                }
            };
            entity['renderSection'] = verify;
            verify = function(argFoo) { // Original name: renderSectionFooter
                _fun103510: for(var _fun103510_ip = 0; ; ) switch(_fun103510_ip) {
 0:
                    mike = _closure2_slot14;
                    report = undefined;
                    entity = argFoo;
                    oscar = mike.bind(report)(entity);
                    entity = null;
                    mike = entity != oscar;
                    if(!mike) { _fun103510_ip = 65; continue _fun103510 }
 26:
                    tango = _closure1_slot6;
                    zulu = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 24;
                    mike = golf[mike];
                    zulu = zulu.bind(report)(mike);
                    mike = {};
                    mike['position'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 65:
                    return entity;
                }
            };
            entity['renderSectionFooter'] = verify;
            entity['insetEnd'] = oscar;
            report = function(argFoo) { // Original name: onScroll
                _fun103511: for(var _fun103511_ip = 0; ; ) switch(_fun103511_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.nativeEvent;
                    entity = tango.contentOffset;
                    golf = entity.y;
                    report = _closure2_slot8;
                    entity = undefined;
                    report = report.bind(entity)(golf);
                    oscar = _closure2_slot9;
                    report = tango.layoutMeasurement;
                    report = report.height;
                    report = oscar.bind(entity)(golf, report);
                    oscar = tango.layoutMeasurement;
                    report = tango.contentOffset;
                    tango = tango.contentSize;
                    oscar = oscar.height;
                    report = report.y;
                    report = oscar + report;
                    oscar = tango.height;
                    tango = 20;
                    tango = oscar - tango;
                    if(!(!(report >= tango))) { _fun103511_ip = 143; continue _fun103511 }
 102:
                    tango = _closure2_slot1;
                    report = null;
                    if(!(report != tango)) { _fun103511_ip = 126; continue _fun103511 }
 112:
                    oscar = _closure2_slot1;
                    tango = oscar.set;
                    tango = tango.bind(oscar)(golf);
 126:
                    tango = _closure2_slot2;
                    if(!(report != tango)) { _fun103511_ip = 143; continue _fun103511 }
 134:
                    mike = _closure2_slot2;
                    mike = mike.bind(entity)(zulu);
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
            report = {};
            oscar = 27;
            oscar = options[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.spacing;
            oscar = oscar.PX_32;
            report['paddingBottom'] = oscar;
            entity['contentContainerStyle'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 28;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundboard/native/SoundboardSoundPickerList.tsx';
    tango = report.bind(oscar)(tango);
    zulu['SoundboardSoundPickerList'] = mike;
    return entity;
})();