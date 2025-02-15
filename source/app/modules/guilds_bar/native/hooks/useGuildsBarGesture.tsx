// app/modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot29;
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
            golf = _closure1_slot29;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
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
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: getGuildOrFolderLabel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            tango = mike.type;
            entity = _closure1_slot8;
            entity = entity.GUILD;
            if(!(tango !== entity)) { _fun00008_ip = 119; continue _fun00007 }
 25:
            report = mike.type;
            entity = _closure1_slot8;
            tango = entity.FOLDER;
            verify = undefined;
            entity = undefined;
            if(!(report === tango)) { _fun00008_ip = 117; continue _fun00007 }
 48:
            tango = mike.name;
            report = null;
            if(!(report == tango)) { _fun00008_ip = 114; continue _fun00007 }
 59:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            report = 11;
            oscar = offset[report];
            oscar = options.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = offset[report];
            report = options.bind(verify)(report);
            report = report.t;
            report = report.ebAnWF;
            tango = oscar.bind(golf)(report);
 114:
            entity = tango;
 117:
            _fun00008_ip = 218; continue _fun00007;
 119:
            report = _closure1_slot6;
            tango = report.getGuild;
            mike = mike.id;
            report = tango.bind(report)(mike);
            tango = null;
            oscar = tango == report;
            golf = undefined;
            mike = undefined;
            if(oscar) { _fun00008_ip = 156; continue _fun00007 }
 151:
            mike = report.name;
 156:
            if(!(tango == mike)) { _fun00008_ip = 215; continue _fun00007 }
 160:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 11;
            tango = options[zulu];
            tango = oscar.bind(golf)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.t;
            zulu = zulu.fKYRlJ;
            mike = tango.bind(report)(zulu);
 215:
            entity = mike;
 218:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getDropIndex
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            options = argBar;
            zulu = argBaz;
            mike = 'self';
            if(!(mike === zulu)) { _fun00010_ip = 20; continue _fun00009 }
 17:
            options = entity;
 20:
            mike = _closure1_slot28;
            tango = _closure1_slot7;
            entity = tango.getFlattenedGuildFolderList;
            entity = entity.bind(tango)();
            golf = undefined;
            oscar = mike.bind(golf)(entity);
            tango = oscar.bind(golf)();
            entity = tango.done;
            mike = -1;
            report = tango;
            tango = mike;
            mike = tango;
            if(entity) { _fun00010_ip = 123; continue _fun00009 }
 77:
            verify = tango + 1;
            entity = report.value;
            offset = entity.id;
            entity = options.id;
            mike = verify;
            if(!(offset !== entity)) { _fun00010_ip = 123; continue _fun00009 }
 102:
            offset = oscar.bind(golf)();
            entity = offset.done;
            report = offset;
            tango = verify;
            mike = tango;
            if(!entity) { _fun00010_ip = 77; continue _fun00009 }
 123:
            entity = 'after';
            if(!(entity !== zulu)) { _fun00010_ip = 143; continue _fun00009 }
 131:
            entity = 'convert-after';
            if(!(entity !== zulu)) { _fun00010_ip = 143; continue _fun00009 }
 141:
            return mike;
 143:
            entity = 1;
            entity = mike + entity;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: triggerHapticsAndAnnouncementsIfNecessary
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            zulu = mike.type;
            offset = 'drag-start';
            if(!(offset !== zulu)) { _fun00012_ip = 957; continue _fun00011 }
 21:
            oscar = 'drag-move';
            if(!(oscar !== zulu)) { _fun00012_ip = 202; continue _fun00011 }
 34:
            entity = 'drag-drop';
            if(!(entity === zulu)) { _fun00012_ip = 1130; continue _fun00011 }
 47:
            tango = _closure1_slot15;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 9;
            zulu = yankee[zulu];
            options = undefined;
            zulu = verify.bind(options)(zulu);
            zulu = zulu.HapticFeedbackTypes;
            zulu = zulu.DRAG_AND_DROP_END;
            zulu = tango.bind(options)(zulu);
            tango = _closure1_slot15;
            zulu = tango.flush;
            zulu = zulu.bind(tango)();
            zulu = _closure1_slot16;
            entity = zulu.flush;
            entity = entity.bind(zulu)();
            entity = 10;
            entity = yankee[entity];
            entity = verify.bind(options)(entity);
            tango = entity.AccessibilityAnnouncer;
            zulu = tango.announce;
            entity = 11;
            report = yankee[entity];
            report = verify.bind(options)(report);
            golf = report.intl;
            report = golf.string;
            entity = yankee[entity];
            entity = verify.bind(options)(entity);
            entity = entity.t;
            entity = entity.lMkmz8;
            entity = report.bind(golf)(entity);
            entity = zulu.bind(tango)(entity);
            _fun00012_ip = 1130; continue _fun00011;
 202:
            golf = _closure1_slot17;
            report = null;
            options = report == golf;
            tango = undefined;
            zulu = undefined;
            if(options) { _fun00012_ip = 227; continue _fun00011 }
 222:
            zulu = golf.type;
 227:
            if(!(oscar === zulu)) { _fun00012_ip = 284; continue _fun00011 }
 231:
            zulu = _closure1_slot17;
            zulu = zulu.overNode;
            golf = zulu.id;
            zulu = mike.overNode;
            zulu = zulu.id;
            if(!(golf === zulu)) { _fun00012_ip = 284; continue _fun00011 }
 261:
            zulu = _closure1_slot17;
            golf = zulu.overState;
            zulu = mike.overState;
            if(!(golf !== zulu)) { _fun00012_ip = 1130; continue _fun00011 }
 284:
            golf = _closure1_slot17;
            options = report == golf;
            zulu = undefined;
            if(options) { _fun00012_ip = 302; continue _fun00011 }
 297:
            zulu = golf.type;
 302:
            if(!(oscar !== zulu)) { _fun00012_ip = 335; continue _fun00011 }
 306:
            options = _closure1_slot31;
            golf = mike.dragNode;
            oscar = mike.dragNode;
            zulu = 'self';
            oscar = options.bind(tango)(golf, oscar, zulu);
            _fun00012_ip = 376; continue _fun00011;
 335:
            verify = _closure1_slot31;
            zulu = _closure1_slot17;
            options = zulu.dragNode;
            zulu = _closure1_slot17;
            golf = zulu.overNode;
            zulu = _closure1_slot17;
            zulu = zulu.overState;
            oscar = verify.bind(tango)(options, golf, zulu);
 376:
            verify = _closure1_slot31;
            options = mike.dragNode;
            golf = mike.overNode;
            zulu = mike.overState;
            zulu = verify.bind(tango)(options, golf, zulu);
            golf = _closure1_slot17;
            options = report == golf;
            verify = undefined;
            if(options) { _fun00012_ip = 423; continue _fun00011 }
 418:
            verify = golf.type;
 423:
            options = 'self';
            golf = options;
            if(!(offset !== verify)) { _fun00012_ip = 466; continue _fun00011 }
 434:
            offset = _closure1_slot17;
            yankee = report == offset;
            verify = undefined;
            if(yankee) { _fun00012_ip = 453; continue _fun00011 }
 447:
            verify = offset.overState;
 453:
            offset = report != verify;
            if(!offset) { _fun00012_ip = 463; continue _fun00011 }
 460:
            options = verify;
 463:
            golf = options;
 466:
            if(!(oscar === zulu)) { _fun00012_ip = 497; continue _fun00011 }
 470:
            zulu = _closure1_slot33;
            oscar = mike.overState;
            oscar = zulu.bind(tango)(oscar);
            zulu = zulu.bind(tango)(golf);
            if(!(oscar !== zulu)) { _fun00012_ip = 1130; continue _fun00011 }
 497:
            oscar = _closure1_slot15;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 9;
            zulu = options[zulu];
            zulu = golf.bind(tango)(zulu);
            zulu = zulu.HapticFeedbackTypes;
            zulu = zulu.DRAG_AND_DROP_MOVE;
            zulu = oscar.bind(tango)(zulu);
            zulu = mike.dragNode;
            yankee = mike.overNode;
            golf = mike.overState;
            zulu = 'convert-before';
            if(!(zulu !== golf)) { _fun00012_ip = 864; continue _fun00011 }
 569:
            zulu = 'convert-after';
            if(!(zulu !== golf)) { _fun00012_ip = 864; continue _fun00011 }
 582:
            zulu = 'drop-into';
            if(!(zulu !== golf)) { _fun00012_ip = 770; continue _fun00011 }
 595:
            zulu = 'before';
            if(!(zulu !== golf)) { _fun00012_ip = 693; continue _fun00011 }
 603:
            oscar = 'after';
            zulu = undefined;
            if(!(oscar === golf)) { _fun00012_ip = 936; continue _fun00011 }
 616:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 11;
            options = offset[oscar];
            options = golf.bind(tango)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.t;
            golf = oscar.w8FN9/;
            oscar = {};
            offset = _closure1_slot30;
            offset = offset.bind(tango)(yankee);
            oscar['itemName'] = offset;
            zulu = options.bind(verify)(golf, oscar);
            _fun00012_ip = 936; continue _fun00011;
 693:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 11;
            options = offset[oscar];
            options = golf.bind(tango)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.t;
            golf = oscar.A5aDw8;
            oscar = {};
            offset = _closure1_slot30;
            offset = offset.bind(tango)(yankee);
            oscar['itemName'] = offset;
            zulu = options.bind(verify)(golf, oscar);
            _fun00012_ip = 936; continue _fun00011;
 770:
            options = yankee.type;
            oscar = _closure1_slot8;
            golf = oscar.FOLDER;
            oscar = undefined;
            if(!(options === golf)) { _fun00012_ip = 859; continue _fun00011 }
 791:
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 11;
            verify = romeo[golf];
            verify = options.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.formatToPlainString;
            golf = romeo[golf];
            golf = options.bind(tango)(golf);
            golf = golf.t;
            options = golf.uLDoxc;
            golf = {};
            romeo = yankee.name;
            golf['folderName'] = romeo;
            oscar = verify.bind(offset)(options, golf);
 859:
            zulu = oscar;
            _fun00012_ip = 936; continue _fun00011;
 864:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 11;
            options = offset[oscar];
            options = golf.bind(tango)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.t;
            golf = oscar.qiQ0QE;
            oscar = {};
            offset = _closure1_slot30;
            offset = offset.bind(tango)(yankee);
            oscar['itemName'] = offset;
            zulu = options.bind(verify)(golf, oscar);
 936:
            if(!(report != zulu)) { _fun00012_ip = 1130; continue _fun00011 }
 943:
            entity = _closure1_slot16;
            entity = entity.bind(tango)(zulu);
            _fun00012_ip = 1130; continue _fun00011;
 957:
            tango = _closure1_slot30;
            zulu = mike.node;
            report = undefined;
            offset = tango.bind(report)(zulu);
            zulu = null;
            if(!(zulu != offset)) { _fun00012_ip = 1075; continue _fun00011 }
 983:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 10;
            zulu = yankee[zulu];
            zulu = golf.bind(report)(zulu);
            oscar = zulu.AccessibilityAnnouncer;
            tango = oscar.announce;
            zulu = 11;
            options = yankee[zulu];
            options = golf.bind(report)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            zulu = yankee[zulu];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.t;
            golf = zulu.vHD/JS;
            zulu = {};
            zulu['itemName'] = offset;
            zulu = options.bind(verify)(golf, zulu);
            zulu = tango.bind(oscar)(zulu);
 1075:
            tango = _closure1_slot15;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 9;
            zulu = golf[zulu];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.HapticFeedbackTypes;
            zulu = zulu.DRAG_AND_DROP_START;
            zulu = tango.bind(report)(zulu);
            zulu = _closure1_slot15;
            entity = zulu.flush;
            entity = entity.bind(zulu)();
 1130:
            report = mike.type;
            entity = undefined;
            tango = 'drag-drop';
            zulu = undefined;
            if(!(tango !== report)) { _fun00012_ip = 1152; continue _fun00011 }
 1149:
            zulu = mike;
 1152:
            _closure1_slot17 = zulu;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: isConvertOverState
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argFoo;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun00014_ip = 27; continue _fun00013 }
 12:
            zulu = tango.startsWith;
            mike = 'convert';
            entity = zulu.bind(tango)(mike);
 27:
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: getItemAndNodeFromTouchEvent
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = _closure1_slot9;
            entity = mike.getState;
            entity = entity.bind(mike)();
            zulu = entity.dragRegion;
            mike = entity.scrollPosition;
            entity = mike.get;
            mike = entity.bind(mike)();
            entity = argFoo;
            offset = mike + entity;
            entity = argBar;
            mike = offset;
            if(!entity) { _fun00016_ip = 120; continue _fun00015 }
 54:
            entity = zulu.get;
            entity = entity.bind(zulu)();
            zulu = global;
            report = zulu.Math;
            tango = report.max;
            verify = zulu.Math;
            options = verify.min;
            zulu = entity.max;
            oscar = 2;
            zulu = zulu - oscar;
            zulu = options.bind(verify)(offset, zulu);
            entity = entity.min;
            entity = entity + oscar;
            mike = tango.bind(report)(zulu, entity);
 120:
            entity = argBaz;
            report = entity.current;
            options = null;
            zulu = options == report;
            oscar = undefined;
            entity = undefined;
            if(zulu) { _fun00016_ip = 156; continue _fun00015 }
 141:
            tango = report.getSectionItemFromPosition;
            zulu = argCorge;
            entity = tango.bind(report)(mike, zulu);
 156:
            if(!(options == entity)) { _fun00016_ip = 176; continue _fun00015 }
 160:
            zulu = {};
            zulu['item'] = oscar;
            tango = 0;
            zulu['positionPercentage'] = tango;
            entity = zulu;
 176:
            report = entity.item;
            tango = entity.positionPercentage;
            entity = options != report;
            zulu = undefined;
            if(!entity) { _fun00016_ip = 477; continue _fun00015 }
 199:
            verify = options == report;
            entity = undefined;
            if(verify) { _fun00016_ip = 474; continue _fun00015 }
 211:
            offset = report.section;
            verify = _closure1_slot11;
            verify = verify.GUILDS;
            verify = offset < verify;
            entity = undefined;
            if(verify) { _fun00016_ip = 474; continue _fun00015 }
 238:
            offset = _closure1_slot7;
            verify = offset.getFastListGuildFolders;
            offset = verify.bind(offset)();
            yankee = report.section;
            verify = _closure1_slot11;
            verify = verify.GUILDS;
            verify = yankee - verify;
            verify = offset[verify];
            offset = options != verify;
            entity = undefined;
            if(!offset) { _fun00016_ip = 474; continue _fun00015 }
 287:
            yankee = report.type;
            romeo = _closure1_slot0;
            offset = _closure1_slot2;
            foxtrot = 12;
            offset = offset[foxtrot];
            offset = romeo.bind(oscar)(offset);
            offset = offset.FastListItemTypes;
            offset = offset.SECTION;
            if(!(offset !== yankee)) { _fun00016_ip = 446; continue _fun00015 }
 328:
            romeo = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[foxtrot];
            offset = romeo.bind(oscar)(offset);
            offset = offset.FastListItemTypes;
            offset = offset.ITEM;
            entity = undefined;
            if(!(offset === yankee)) { _fun00016_ip = 474; continue _fun00015 }
 363:
            yankee = verify.type;
            offset = _closure1_slot8;
            offset = offset.ROOT;
            entity = undefined;
            if(!(yankee !== offset)) { _fun00016_ip = 474; continue _fun00015 }
 384:
            romeo = verify.type;
            offset = _closure1_slot8;
            yankee = offset.FOLDER;
            offset = verify;
            if(!(romeo === yankee)) { _fun00016_ip = 420; continue _fun00015 }
 406:
            romeo = verify.children;
            yankee = report.item;
            offset = romeo[yankee];
 420:
            romeo = offset.type;
            yankee = _closure1_slot8;
            yankee = yankee.GUILD;
            entity = undefined;
            if(!(romeo === yankee)) { _fun00016_ip = 474; continue _fun00015 }
 441:
            entity = offset;
            _fun00016_ip = 474; continue _fun00015;
 446:
            if(!(options != verify)) { _fun00016_ip = 472; continue _fun00015 }
 450:
            options = verify.type;
            golf = _closure1_slot8;
            golf = golf.FOLDER;
            entity = verify;
            if(!(options !== golf)) { _fun00016_ip = 474; continue _fun00015 }
 472:
            entity = undefined;
 474:
            zulu = entity;
 477:
            entity = {};
            entity['item'] = report;
            report = global;
            golf = report.Math;
            oscar = golf.floor;
            report = 100;
            tango = report * tango;
            tango = oscar.bind(golf)(tango);
            tango = tango / report;
            entity['overPercentage'] = tango;
            entity['node'] = zulu;
            entity['pointerPosition'] = mike;
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Dimensions;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildsNodeType;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    var _closure1_slot9 = verify;
    tango = 6;
    tango = oscar[tango];
    offset = report.bind(entity)(tango);
    options = offset.GUILD_ITEM_MARGIN;
    tango = offset.GUILD_ITEM_SIZE;
    var _closure1_slot10 = tango;
    offset = offset.FastListRenderSections;
    var _closure1_slot11 = offset;
    var _closure1_slot12 = verify;
    tango = tango + options;
    tango = tango + options;
    var _closure1_slot13 = tango;
    tango = {};
    options = 7;
    verify = oscar[options];
    yankee = report.bind(entity)(verify);
    verify = yankee.makeMutable;
    offset = -1;
    verify = verify.bind(yankee)(offset);
    tango['pan'] = verify;
    verify = oscar[options];
    romeo = report.bind(entity)(verify);
    yankee = romeo.makeMutable;
    verify = new Array(0);
    verify = yankee.bind(romeo)(verify);
    tango['itemMeasurements'] = verify;
    options = oscar[options];
    verify = report.bind(entity)(options);
    options = verify.makeMutable;
    options = options.bind(verify)(offset);
    tango['activeIndex'] = options;
    var _closure1_slot14 = tango;
    tango = 8;
    options = oscar[tango];
    offset = golf.bind(entity)(options);
    options = 9;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.triggerHapticFeedback;
    options = 16;
    options = offset.bind(entity)(verify, options);
    var _closure1_slot15 = options;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    golf = function(argFoo) {
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.AccessibilityAnnouncer;
        zulu = tango.announce;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango = 500;
    tango = options.bind(entity)(golf, tango);
    var _closure1_slot16 = tango;
    var _closure1_slot17 = entity;
    tango = {};
    golf = "function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){const{gestureState,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition}=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState.get().mode!=='drag'){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=timeSincePreviousFrame/1000;scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition.get()+timeInSeconds*scrollSpeed),0),false);}";
    tango['code'] = golf;
    var _closure1_slot18 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx2(event,manager){const{scrollPosition,gestureState,dragRegion,runOnJS,handleTouchesDown}=this.__closure;var _touch$absoluteY;const touch=event.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition.get();if(touch==null||gestureState.get().mode==='cancel'||pointerY<dragRegion.get().min||pointerY>dragRegion.get().max){manager.fail();}else if(event.changedTouches.length===1){runOnJS(handleTouchesDown)(touch.absoluteX,touch.absoluteY);}}";
    tango['code'] = golf;
    var _closure1_slot19 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx3(event,manager){const{gestureState}=this.__closure;if(gestureState.get().mode==='cancel'){manager.fail();}}";
    tango['code'] = golf;
    var _closure1_slot20 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx4({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,runOnJS,handlePress}=this.__closure;if(gestureState.get().mode!=='cancel'){runOnJS(handlePress)(absoluteX,absoluteY);}}";
    tango['code'] = golf;
    var _closure1_slot21 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx5(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;console.log('ZZZZZZ - LongPress.onEnd');if(gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}";
    tango['code'] = golf;
    var _closure1_slot22 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx6(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==null||gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}";
    tango['code'] = golf;
    var _closure1_slot23 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx7(event,manager){const{gestureState,dragDropInProgress,DRAG_GESTURE_MINIMUM_DISTANCE,runOnJS,handleContextMenuDrag,handleGuildDrag}=this.__closure;const touch=event.changedTouches[0];if(gestureState.get().mode!=='pressed'||touch==null){if(gestureState.get().mode==='cancel'||touch==null){manager.fail();dragDropInProgress.set(false);}return;}const diffX=touch.absoluteX-gestureState.get().initialX;const absDiffY=Math.abs(touch.absoluteY-gestureState.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState.set({...gestureState.get(),mode:'contextmenu',absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});dragDropInProgress.set(false);manager.activate();runOnJS(handleContextMenuDrag)(touch.absoluteX,touch.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState.set({...gestureState.get(),mode:'drag',initialX:touch.absoluteX,initialY:touch.absoluteY,absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});manager.activate();dragDropInProgress.set(true);runOnJS(handleGuildDrag)(touch.absoluteY);}}";
    tango['code'] = golf;
    var _closure1_slot24 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx8({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,listInsets,GESTURE_ACCELERATION_RANGE,windowSize,runOnJS,handleGuildDrag,handleContextMenuDrag}=this.__closure;if(gestureState.get().mode==='drag'){if(absoluteX!==gestureState.get().absoluteX||absoluteY!==gestureState.get().absoluteY){let{initialY:initialY}=gestureState.get();const minPushRange=listInsets.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange=windowSize-listInsets.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange&&absoluteY>initialY){initialY=absoluteY;}else if(initialY>maxPushRange&&absoluteY<initialY){initialY=absoluteY;}gestureState.set({...gestureState.get(),absoluteX:absoluteX,absoluteY:absoluteY,initialY:initialY});runOnJS(handleGuildDrag)(absoluteY);}}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleContextMenuDrag)(absoluteX,absoluteY);}}";
    tango['code'] = golf;
    var _closure1_slot25 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx9(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;console.log('ZZZZZZ - Pan.onEnd');if(gestureState.get().mode==='drag'){runOnJS(handleGestureEnd)('drop');}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleGestureEnd)('contextmenu-open');}else{runOnJS(handleGestureEnd)('cancel');}}";
    tango['code'] = golf;
    var _closure1_slot26 = tango;
    tango = {};
    golf = "function useGuildsBarGestureTsx10(){const{runOnJS,handleGestureEnd}=this.__closure;runOnJS(handleGestureEnd)('cancel');}";
    tango['code'] = golf;
    var _closure1_slot27 = tango;
    tango = 26;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useGuildsBarGesture
        verify = _closure1_slot0;
        update = _closure1_slot2;
        sizing = 7;
        zulu = update[sizing];
        options = undefined;
        tango = verify.bind(options)(zulu);
        zulu = tango.useAnimatedRef;
        report = zulu.bind(tango)();
        var _closure2_slot0 = report;
        offset = _closure1_slot4;
        tango = offset.useRef;
        zulu = null;
        tango = tango.bind(offset)(zulu);
        var _closure2_slot1 = tango;
        zulu = update[sizing];
        golf = verify.bind(options)(zulu);
        oscar = golf.useSharedValue;
        zulu = 0;
        control = oscar.bind(golf)(zulu);
        var _closure2_slot2 = control;
        foxtrot = _closure1_slot12;
        zulu = 13;
        oscar = update[zulu];
        oscar = verify.bind(options)(oscar);
        golf = oscar.shallow;
        oscar = function(argFoo) {
            entity = argFoo;
            golf = entity.gestureState;
            oscar = entity.scrollPosition;
            report = entity.dragRegion;
            tango = entity.windowSize;
            zulu = entity.listInsets;
            mike = entity.dragDropInProgress;
            entity = {};
            entity['gestureState'] = golf;
            entity['scrollPosition'] = oscar;
            entity['dragRegion'] = report;
            entity['windowSize'] = tango;
            entity['listInsets'] = zulu;
            entity['dragDropInProgress'] = mike;
            return entity;
        };
        romeo = foxtrot.bind(options)(oscar, golf);
        output = romeo.gestureState;
        var _closure2_slot3 = output;
        golf = romeo.scrollPosition;
        var _closure2_slot4 = golf;
        result = romeo.dragRegion;
        var _closure2_slot5 = result;
        oscar = romeo.windowSize;
        var _closure2_slot6 = oscar;
        yankee = romeo.listInsets;
        var _closure2_slot7 = yankee;
        echo = romeo.dragDropInProgress;
        var _closure2_slot8 = echo;
        zulu = update[zulu];
        zulu = verify.bind(options)(zulu);
        romeo = zulu.shallow;
        zulu = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = argFoo;
                entity = mike.dropSpecs;
                report = mike.dragSpecs;
                mike = global;
                zulu = mike.Set;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                options = tango;
                zulu = new options[zulu](golf);
                tango = zulu instanceof Object ? zulu : tango;
                zulu = null;
                if(!(zulu != report)) { _fun00018_ip = 70; continue _fun00017 }
 49:
                oscar = tango.add;
                report = report.item;
                report = report.recyclerKey;
                report = oscar.bind(tango)(report);
 70:
                if(!(zulu != entity)) { _fun00018_ip = 90; continue _fun00017 }
 74:
                zulu = tango.add;
                entity = entity.dragRecyclerKey;
                entity = zulu.bind(tango)(entity);
 90:
                zulu = tango.size;
                entity = 0;
                zulu = zulu > entity;
                entity = undefined;
                if(!zulu) { _fun00018_ip = 122; continue _fun00017 }
 106:
                zulu = mike.Array;
                mike = zulu.from;
                entity = mike.bind(zulu)(tango);
 122:
                return entity;
            }
        };
        zulu = foxtrot.bind(options)(zulu, romeo);
        foxtrot = offset.useEffect;
        romeo = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = _closure2_slot1;
                golf = entity.current;
                zulu = null;
                tango = zulu == golf;
                entity = undefined;
                report = undefined;
                if(tango) { _fun00020_ip = 49; continue _fun00019 }
 25:
                oscar = golf.computeScrollPosition;
                tango = _closure1_slot11;
                tango = tango.GUILDS;
                report = oscar.bind(golf)(tango);
 49:
                tango = _closure2_slot1;
                oscar = tango.current;
                golf = zulu == oscar;
                tango = undefined;
                if(golf) { _fun00020_ip = 78; continue _fun00019 }
 67:
                oscar = oscar.props;
                tango = oscar.sections;
 78:
                if(!(zulu == tango)) { _fun00020_ip = 86; continue _fun00019 }
 82:
                tango = new Array(0);
 86:
                oscar = tango.length;
                golf = 1;
                verify = oscar - golf;
                options = tango[verify];
                offset = zulu != options;
                tango = 0;
                if(!offset) { _fun00020_ip = 114; continue _fun00019 }
 111:
                tango = options;
 114:
                options = tango - golf;
                mike = _closure2_slot1;
                golf = mike.current;
                tango = zulu == golf;
                mike = undefined;
                if(tango) { _fun00020_ip = 148; continue _fun00019 }
 136:
                tango = golf.computeScrollPosition;
                mike = tango.bind(golf)(verify, options);
 148:
                golf = zulu == report;
                tango = undefined;
                if(golf) { _fun00020_ip = 163; continue _fun00019 }
 157:
                tango = report.scrollPosition;
 163:
                report = zulu != tango;
                oscar = 0;
                if(!report) { _fun00020_ip = 175; continue _fun00019 }
 172:
                oscar = tango;
 175:
                zulu = zulu != mike;
                report = inf;
                if(!zulu) { _fun00020_ip = 207; continue _fun00019 }
 192:
                zulu = mike.scrollPosition;
                mike = mike.size;
                report = zulu + mike;
 207:
                zulu = _closure1_slot9;
                mike = zulu.getState;
                mike = mike.bind(zulu)();
                tango = mike.dragRegion;
                mike = tango.get;
                zulu = mike.bind(tango)();
                mike = zulu.min;
                mike = oscar === mike;
                if(!mike) { _fun00020_ip = 260; continue _fun00019 }
 251:
                zulu = zulu.max;
                mike = report === zulu;
 260:
                if(mike) { _fun00020_ip = 283; continue _fun00019 }
 263:
                zulu = tango.set;
                mike = {};
                mike['min'] = oscar;
                mike['max'] = report;
                mike = zulu.bind(tango)(mike);
 283:
                return entity;
            }
        };
        romeo = foxtrot.bind(offset)(romeo);
        romeo = update[sizing];
        backup = verify.bind(options)(romeo);
        foxtrot = backup.useFrameCallback;
        romeo = function(argFoo) { // Original name: J
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                romeo = entity.timeSincePreviousFrame;
                entity = null;
                if(!(entity != romeo)) { _fun00022_ip = 196; continue _fun00021 }
 18:
                oscar = 0;
                if(!(!(romeo <= oscar))) { _fun00022_ip = 196; continue _fun00021 }
 27:
                mike = _closure2_slot3;
                entity = mike.get;
                entity = entity.bind(mike)();
                mike = entity.mode;
                entity = 'drag';
                if(!(entity === mike)) { _fun00022_ip = 196; continue _fun00021 }
 59:
                mike = _closure2_slot2;
                entity = mike.get;
                mike = entity.bind(mike)();
                entity = 1000;
                yankee = entity * mike;
                zulu = _closure1_slot0;
                backup = _closure1_slot2;
                mike = 7;
                mike = backup[mike];
                verify = undefined;
                report = zulu.bind(verify)(mike);
                tango = report.scrollTo;
                zulu = _closure2_slot0;
                mike = global;
                golf = mike.Math;
                mike = golf.max;
                foxtrot = _closure1_slot1;
                options = 14;
                options = backup[options];
                options = foxtrot.bind(verify)(options);
                foxtrot = _closure2_slot4;
                offset = foxtrot.get;
                offset = offset.bind(foxtrot)();
                entity = romeo / entity;
                entity = entity * yankee;
                entity = offset + entity;
                entity = options.bind(verify)(entity);
                sizing = mike.bind(golf)(entity, oscar);
                kilo = false;
                echo = report;
                result = zulu;
                output = 0;
                entity = echo[tango](result, output, sizing, kilo, backup);
 196:
                entity = undefined;
                return entity;
            }
        };
        kilo = {};
        kilo['gestureState'] = output;
        kilo['pushScroll'] = control;
        sizing = update[sizing];
        sizing = verify.bind(options)(sizing);
        sizing = sizing.scrollTo;
        kilo['scrollTo'] = sizing;
        kilo['scrollerRef'] = report;
        source = _closure1_slot1;
        sizing = 14;
        sizing = update[sizing];
        sizing = source.bind(options)(sizing);
        kilo['roundToNearestPixel'] = sizing;
        kilo['scrollPosition'] = golf;
        romeo['__closure'] = kilo;
        kilo = 3892822493921.0;
        romeo['__workletHash'] = kilo;
        mike = _closure1_slot18;
        romeo['__initData'] = mike;
        mike = false;
        mike = foxtrot.bind(backup)(romeo, mike);
        var _closure2_slot9 = mike;
        backup = offset.useCallback;
        foxtrot = new Array(2);
        foxtrot[0] = control;
        foxtrot[1] = mike;
        romeo = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                oscar = argFoo;
                tango = _closure1_slot9;
                zulu = tango.getState;
                report = zulu.bind(tango)();
                result = report.dragSpecs;
                var _closure3_slot0 = result;
                golf = report.overSpecs;
                tango = report.gestureState;
                zulu = report.dragDropInProgress;
                report = report.setStateShallow;
                offset = _closure2_slot2;
                verify = offset.set;
                backup = 0;
                verify = verify.bind(offset)(backup);
                verify = _closure2_slot9;
                verify = verify.isActive;
                if(!verify) { _fun00024_ip = 105; continue _fun00023 }
 88:
                offset = _closure2_slot9;
                verify = offset.setActive;
                options = false;
                options = verify.bind(offset)(options);
 105:
                options = 'drop';
                if(!(options === oscar)) { _fun00024_ip = 960; continue _fun00023 }
 116:
                foxtrot = null;
                if(!(foxtrot != golf)) { _fun00024_ip = 960; continue _fun00023 }
 125:
                if(!(foxtrot != result)) { _fun00024_ip = 960; continue _fun00023 }
 132:
                sizing = result.item;
                output = golf.item;
                yankee = sizing.type;
                offset = _closure1_slot0;
                options = _closure1_slot2;
                kilo = 12;
                verify = options[kilo];
                options = undefined;
                verify = offset.bind(options)(verify);
                verify = verify.FastListItemTypes;
                verify = verify.SECTION;
                if(!(verify !== yankee)) { _fun00024_ip = 223; continue _fun00023 }
 185:
                offset = _closure1_slot0;
                verify = _closure1_slot2;
                verify = verify[kilo];
                verify = offset.bind(options)(verify);
                verify = verify.FastListItemTypes;
                offset = verify.ITEM;
                verify = undefined;
                if(!(offset === yankee)) { _fun00024_ip = 413; continue _fun00023 }
 223:
                yankee = output.type;
                romeo = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[kilo];
                offset = romeo.bind(options)(offset);
                offset = offset.FastListItemTypes;
                offset = offset.SECTION;
                if(!(offset !== yankee)) { _fun00024_ip = 296; continue _fun00023 }
 261:
                romeo = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[kilo];
                offset = romeo.bind(options)(offset);
                offset = offset.FastListItemTypes;
                offset = offset.ITEM;
                verify = undefined;
                if(!(offset === yankee)) { _fun00024_ip = 413; continue _fun00023 }
 296:
                yankee = output.section;
                offset = sizing.section;
                yankee = yankee < offset;
                romeo = 'before';
                offset = romeo;
                if(yankee) { _fun00024_ip = 410; continue _fun00023 }
 320:
                kilo = output.section;
                yankee = sizing.section;
                echo = kilo > yankee;
                kilo = 'after';
                yankee = kilo;
                if(echo) { _fun00024_ip = 407; continue _fun00023 }
 344:
                update = output.item;
                echo = sizing.item;
                echo = update < echo;
                if(echo) { _fun00024_ip = 404; continue _fun00023 }
 361:
                update = output.item;
                echo = sizing.item;
                echo = update > echo;
                if(echo) { _fun00024_ip = 401; continue _fun00023 }
 378:
                echo = output.item;
                output = sizing.item;
                sizing = undefined;
                if(!(echo === output)) { _fun00024_ip = 398; continue _fun00023 }
 394:
                sizing = 'self';
 398:
                kilo = sizing;
 401:
                romeo = kilo;
 404:
                yankee = romeo;
 407:
                offset = yankee;
 410:
                verify = offset;
 413:
                romeo = 'after';
                offset = 0;
                if(!(romeo === verify)) { _fun00024_ip = 434; continue _fun00023 }
 423:
                verify = result.item;
                offset = verify.layoutSize;
 434:
                verify = golf.state;
                if(!(romeo !== verify)) { _fun00024_ip = 456; continue _fun00023 }
 443:
                verify = golf.item;
                verify = verify.layoutStart;
                _fun00024_ip = 477; continue _fun00023;
 456:
                yankee = golf.item;
                kilo = yankee.layoutStart;
                yankee = result.itemSize;
                verify = kilo + yankee;
 477:
                verify = verify - offset;
                var _closure3_slot1 = verify;
                yankee = result.node;
                var _closure3_slot2 = yankee;
                offset = golf.node;
                var _closure3_slot3 = offset;
                verify = golf.state;
                romeo = romeo === verify;
                var _closure3_slot4 = romeo;
                kilo = golf.state;
                verify = 'convert-before';
                verify = verify === kilo;
                if(verify) { _fun00024_ip = 551; continue _fun00023 }
 536:
                sizing = golf.state;
                kilo = 'convert-after';
                verify = kilo === sizing;
 551:
                if(verify) { _fun00024_ip = 569; continue _fun00023 }
 554:
                sizing = golf.state;
                kilo = 'drop-into';
                verify = kilo === sizing;
 569:
                var _closure3_slot5 = verify;
                verify = golf.state;
                var _closure3_slot6 = verify;
                sizing = 'self';
                if(!(sizing !== verify)) { _fun00024_ip = 597; continue _fun00023 }
 590:
                if(!(foxtrot == verify)) { _fun00024_ip = 741; continue _fun00023 }
 597:
                kilo = _closure1_slot9;
                golf = kilo.getState;
                output = golf.bind(kilo)();
                kilo = output.dropStart;
                golf = {};
                golf['dragNode'] = yankee;
                golf['overNode'] = yankee;
                echo = result.itemTop;
                golf['dropPosition'] = echo;
                echo = result.itemSize;
                golf['itemSize'] = echo;
                result = result.item;
                update = foxtrot == result;
                echo = undefined;
                if(update) { _fun00024_ip = 671; continue _fun00023 }
 665:
                echo = result.recyclerKey;
 671:
                update = foxtrot != echo;
                result = '';
                if(!update) { _fun00024_ip = 685; continue _fun00023 }
 682:
                result = echo;
 685:
                golf['dragRecyclerKey'] = result;
                golf['overState'] = sizing;
                golf = kilo.bind(output)(golf);
                kilo = _closure1_slot32;
                golf = {};
                output = 'drag-drop';
                golf['type'] = output;
                golf['dragNode'] = yankee;
                golf['overNode'] = yankee;
                golf['overState'] = sizing;
                golf = kilo.bind(options)(golf);
                _fun00024_ip = 1143; continue _fun00023;
 741:
                golf = offset.id;
                var _closure3_slot7 = golf;
                sizing = yankee.type;
                kilo = _closure1_slot8;
                kilo = kilo.FOLDER;
                if(!(sizing === kilo)) { _fun00024_ip = 798; continue _fun00023 }
 769:
                sizing = offset.type;
                kilo = _closure1_slot8;
                kilo = kilo.GUILD;
                if(!(sizing === kilo)) { _fun00024_ip = 798; continue _fun00023 }
 788:
                kilo = offset.parentId;
                if(!(foxtrot == kilo)) { _fun00024_ip = 871; continue _fun00023 }
 798:
                sizing = offset.type;
                kilo = _closure1_slot8;
                kilo = kilo.FOLDER;
                if(!(sizing === kilo)) { _fun00024_ip = 881; continue _fun00023 }
 817:
                kilo = offset.expanded;
                if(!kilo) { _fun00024_ip = 881; continue _fun00023 }
 826:
                if(!romeo) { _fun00024_ip = 881; continue _fun00023 }
 829:
                romeo = false;
                _closure3_slot4 = romeo;
                romeo = offset.children;
                backup = romeo[backup];
                kilo = foxtrot == backup;
                romeo = undefined;
                if(kilo) { _fun00024_ip = 858; continue _fun00023 }
 853:
                romeo = backup.id;
 858:
                if(!(foxtrot != romeo)) { _fun00024_ip = 865; continue _fun00023 }
 862:
                golf = romeo;
 865:
                _closure3_slot7 = golf;
                _fun00024_ip = 881; continue _fun00023;
 871:
                golf = offset.parentId;
                _closure3_slot7 = golf;
 881:
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                golf = 15;
                golf = foxtrot[golf];
                romeo = romeo.bind(options)(golf);
                golf = romeo.batchUpdates;
                mike = function() {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        entity = _closure3_slot2;
                        mike = entity.id;
                        entity = _closure3_slot7;
                        if(!(mike !== entity)) { _fun00026_ip = 123; continue _fun00025 }
 20:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 16;
                        zulu = zulu[mike];
                        mike = undefined;
                        verify = tango.bind(mike)(zulu);
                        options = verify.moveById;
                        zulu = _closure3_slot2;
                        golf = zulu.id;
                        oscar = _closure3_slot7;
                        zulu = _closure3_slot5;
                        tango = !zulu;
                        tango = !tango;
                        if(zulu) { _fun00026_ip = 81; continue _fun00025 }
 77:
                        tango = _closure3_slot4;
 81:
                        offset = _closure3_slot5;
                        backup = verify;
                        foxtrot = golf;
                        romeo = oscar;
                        yankee = tango;
                        zulu = backup[options](foxtrot, romeo, yankee, offset, verify);
                        zulu = _closure1_slot3;
                        entity = function* () {
                            entity = function* () { // Original name: ?anon_0_
                                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun00028_ip = 81; continue _fun00027 }
 7: // try_start_0
                                    report = _closure1_slot0;
                                    tango = _closure1_slot2;
                                    zulu = 17;
                                    tango = tango[zulu];
                                    zulu = undefined;
                                    tango = report.bind(zulu)(tango);
                                    zulu = tango.saveGuildFolders;
                                    report = _closure1_slot7;
                                    mike = report.getCompatibleGuildFolders;
                                    mike = mike.bind(report)();
                                    mike = zulu.bind(tango)(mike);
                                    SaveGenerator(address=63);
 61:
                                    return mike;
 63:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(zulu) { _fun00028_ip = 71; continue _fun00027 }
 69: // try_end0
                                    _fun00028_ip = 76; continue _fun00027;
 71:
                                    return mike;
 74: // catch_target0
                                    CatchBlockStart(arg_register=1);
 76:
                                    mike = undefined;
                                    return mike;
 81:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        entity = zulu.bind(mike)(entity);
                        entity = entity.bind(mike)();
 123:
                        mike = _closure1_slot9;
                        entity = mike.getState;
                        tango = entity.bind(mike)();
                        zulu = tango.dropStart;
                        mike = {};
                        entity = _closure3_slot2;
                        mike['dragNode'] = entity;
                        entity = _closure3_slot3;
                        mike['overNode'] = entity;
                        entity = _closure3_slot1;
                        mike['dropPosition'] = entity;
                        entity = _closure3_slot0;
                        options = entity.item;
                        oscar = null;
                        verify = oscar == options;
                        entity = undefined;
                        golf = undefined;
                        if(verify) { _fun00026_ip = 203; continue _fun00025 }
 197:
                        golf = options.recyclerKey;
 203:
                        options = oscar != golf;
                        oscar = '';
                        if(!options) { _fun00026_ip = 217; continue _fun00025 }
 214:
                        oscar = golf;
 217:
                        mike['dragRecyclerKey'] = oscar;
                        oscar = _closure3_slot0;
                        oscar = oscar.itemSize;
                        mike['itemSize'] = oscar;
                        report = _closure3_slot6;
                        mike['overState'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                mike = golf.bind(romeo)(mike);
                golf = _closure1_slot32;
                mike = {};
                romeo = 'drag-drop';
                mike['type'] = romeo;
                mike['dragNode'] = yankee;
                mike['overNode'] = offset;
                mike['overState'] = verify;
                mike = golf.bind(options)(mike);
                _fun00024_ip = 1143; continue _fun00023;
 960:
                mike = 'contextmenu-open';
                if(!(mike === oscar)) { _fun00024_ip = 1061; continue _fun00023 }
 970:
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 18;
                mike = mike[entity];
                entity = undefined;
                entity = oscar.bind(entity)(mike);
                mike = entity.ContextMenuStore;
                entity = mike.getState;
                entity = entity.bind(mike)();
                oscar = entity.menu;
                entity = null;
                if(!(entity != oscar)) { _fun00024_ip = 1061; continue _fun00023 }
 1020:
                mike = oscar.requestClose;
                entity = oscar.state;
                golf = entity.activeIndex;
                entity = golf.get;
                golf = entity.bind(golf)();
                entity = -1;
                entity = entity === golf;
                entity = mike.bind(oscar)(entity);
 1061:
                mike = {};
                entity = undefined;
                mike['dragSpecs'] = entity;
                mike['overSpecs'] = entity;
                entity = report.bind(entity)(mike);
                entity = tango.get;
                report = entity.bind(tango)();
                entity = report.mode;
                oscar = null;
                if(!(oscar != entity)) { _fun00024_ip = 1143; continue _fun00023 }
 1100:
                mike = tango.set;
                entity = {};
                control = entity;
                source = report;
                report = copyDataProperties(control, source);
                report = 'mode';
                entity[report] = oscar;
                entity = mike.bind(tango)(entity);
                mike = zulu.set;
                entity = false;
                entity = mike.bind(zulu)(entity);
 1143:
                entity = undefined;
                return entity;
            }
        };
        kilo = backup.bind(offset)(romeo, foxtrot);
        var _closure2_slot10 = kilo;
        backup = offset.useCallback;
        foxtrot = function(argFoo, argBar) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zulu = _closure1_slot9;
                mike = zulu.getState;
                mike = mike.bind(zulu)();
                oscar = mike.gestureState;
                tango = mike.dragDropInProgress;
                golf = _closure1_slot34;
                report = _closure2_slot1;
                entity = undefined;
                mike = argBar;
                zulu = false;
                mike = golf.bind(entity)(mike, zulu, report);
                mike = mike.item;
                report = oscar.get;
                golf = report.bind(oscar)();
                options = null;
                mike = options == mike;
                if(!mike) { _fun00030_ip = 86; continue _fun00029 }
 77:
                report = golf.mode;
                mike = options == report;
 86:
                if(!mike) { _fun00030_ip = 134; continue _fun00029 }
 89:
                report = oscar.set;
                mike = {};
                yankee = mike;
                offset = golf;
                golf = copyDataProperties(yankee, offset);
                options = 'cancel';
                golf = 'mode';
                mike[golf] = options;
                mike = report.bind(oscar)(mike);
                mike = tango.set;
                mike = mike.bind(tango)(zulu);
 134:
                return entity;
            }
        };
        romeo = new Array(0);
        romeo = backup.bind(offset)(foxtrot, romeo);
        var _closure2_slot11 = romeo;
        sizing = offset.useCallback;
        backup = new Array(1);
        backup[0] = kilo;
        foxtrot = function(argFoo, argBar) {
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                oscar = argFoo;
                golf = argBar;
                zulu = _closure1_slot9;
                entity = zulu.getState;
                entity = entity.bind(zulu)();
                zulu = entity.dragSpecs;
                output = entity.scrollPosition;
                report = entity.gestureState;
                verify = entity.dragDropInProgress;
                tango = entity.setStateShallow;
                offset = _closure1_slot34;
                zulu = _closure2_slot1;
                entity = undefined;
                options = false;
                zulu = offset.bind(entity)(golf, options, zulu);
                kilo = zulu.item;
                yankee = zulu.node;
                romeo = null;
                if(!(romeo != kilo)) { _fun00032_ip = 98; continue _fun00031 }
 94:
                if(!(romeo == yankee)) { _fun00032_ip = 150; continue _fun00031 }
 98:
                offset = report.set;
                zulu = {};
                backup = report.get;
                control = backup.bind(report)();
                vacuum = zulu;
                backup = copyDataProperties(vacuum, control);
                backup = 'mode';
                zulu[backup] = romeo;
                zulu = offset.bind(report)(zulu);
                zulu = verify.set;
                zulu = zulu.bind(verify)(options);
                _fun00032_ip = 921; continue _fun00031;
 150:
                verify = {};
                verify['node'] = yankee;
                verify['item'] = kilo;
                zulu = kilo.layoutStart;
                verify['itemTop'] = zulu;
                zulu = kilo.layoutSize;
                verify['itemSize'] = zulu;
                offset = _closure1_slot5;
                options = offset.get;
                zulu = 'window';
                zulu = options.bind(offset)(zulu);
                offset = zulu.height;
                options = _closure1_slot0;
                backup = _closure1_slot2;
                zulu = 19;
                zulu = backup[zulu];
                options = options.bind(entity)(zulu);
                zulu = options.isAndroid;
                zulu = zulu.bind(options)();
                options = offset;
                if(!zulu) { _fun00032_ip = 289; continue _fun00031 }
 241:
                backup = _closure1_slot0;
                sizing = _closure1_slot2;
                zulu = 20;
                zulu = sizing[zulu];
                backup = backup.bind(entity)(zulu);
                zulu = backup.getSafeAreaInsets;
                zulu = zulu.bind(backup)();
                backup = zulu.top;
                zulu = zulu.bottom;
                zulu = backup + zulu;
                options = offset + zulu;
 289:
                zulu = _closure1_slot14;
                backup = zulu.activeIndex;
                offset = backup.set;
                zulu = -1;
                zulu = offset.bind(backup)(zulu);
                offset = _closure1_slot0;
                backup = _closure1_slot2;
                zulu = 21;
                zulu = backup[zulu];
                offset = offset.bind(entity)(zulu);
                zulu = offset.getIsScreenReaderEnabled;
                zulu = zulu.bind(offset)();
                if(zulu) { _fun00032_ip = 781; continue _fun00031 }
 351:
                backup = yankee.type;
                zulu = _closure1_slot8;
                zulu = zulu.GUILD;
                if(!(zulu !== backup)) { _fun00032_ip = 455; continue _fun00031 }
 370:
                zulu = _closure1_slot8;
                offset = zulu.FOLDER;
                zulu = undefined;
                if(!(offset === backup)) { _fun00032_ip = 555; continue _fun00031 }
 389:
                offset = {};
                backup = yankee.id;
                offset['key'] = backup;
                backup = yankee.name;
                offset['title'] = backup;
                sizing = _closure1_slot0;
                result = _closure1_slot2;
                backup = 23;
                backup = result[backup];
                result = sizing.bind(entity)(backup);
                sizing = result.getGuildFolderMenuItems;
                backup = yankee.id;
                backup = sizing.bind(result)(backup);
                offset['items'] = backup;
                zulu = offset;
                _fun00032_ip = 555; continue _fun00031;
 455:
                sizing = _closure1_slot6;
                backup = sizing.getGuild;
                offset = yankee.id;
                backup = backup.bind(sizing)(offset);
                offset = {};
                sizing = yankee.id;
                offset['key'] = sizing;
                result = romeo == backup;
                sizing = undefined;
                if(result) { _fun00032_ip = 503; continue _fun00031 }
 494:
                result = backup.toString;
                sizing = result.bind(backup)();
 503:
                offset['title'] = sizing;
                if(!(romeo == backup)) { _fun00032_ip = 517; continue _fun00031 }
 511:
                romeo = new Array(0);
                _fun00032_ip = 547; continue _fun00031;
 517:
                result = _closure1_slot1;
                echo = _closure1_slot2;
                sizing = 22;
                sizing = echo[sizing];
                sizing = result.bind(entity)(sizing);
                backup = backup.id;
                romeo = sizing.bind(entity)(backup);
 547:
                offset['items'] = romeo;
                zulu = offset;
 555:
                backup = zulu.items;
                var _closure3_slot0 = backup;
                update = zulu.key;
                sizing = zulu.title;
                offset = backup.length;
                zulu = 0;
                if(!(offset > zulu)) { _fun00032_ip = 807; continue _fun00031 }
 589:
                offset = _closure1_slot0;
                romeo = _closure1_slot2;
                zulu = 18;
                zulu = romeo[zulu];
                romeo = offset.bind(entity)(zulu);
                offset = romeo.showContextMenu;
                zulu = {};
                result = global;
                result = result.HermesInternal;
                echo = result.concat;
                result = '';
                result = echo.bind(result)(update);
                zulu['key'] = result;
                zulu['title'] = sizing;
                zulu['items'] = backup;
                backup = _closure1_slot10;
                result = 12;
                sizing = result + backup;
                sizing = sizing + result;
                zulu['x'] = sizing;
                sizing = kilo.layoutStart;
                kilo = output.get;
                kilo = kilo.bind(output)();
                kilo = sizing - kilo;
                zulu['y'] = kilo;
                kilo = 'left';
                zulu['positionX'] = kilo;
                kilo = 'below';
                zulu['positionY'] = kilo;
                zulu['width'] = backup;
                zulu['height'] = backup;
                backup = _closure1_slot14;
                zulu['state'] = backup;
                backup = new Array(0);
                zulu['dividerIndexes'] = backup;
                backup = 'never';
                zulu['keyboardShouldPersistTaps'] = backup;
                backup = function(argFoo) { // Original name: requestClose
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        entity = argFoo;
                        if(entity) { _fun00034_ip = 54; continue _fun00033 }
 6:
                        mike = _closure3_slot0;
                        entity = _closure1_slot14;
                        zulu = entity.activeIndex;
                        entity = zulu.get;
                        entity = entity.bind(zulu)();
                        mike = mike[entity];
                        entity = null;
                        if(!(entity != mike)) { _fun00034_ip = 54; continue _fun00033 }
 45:
                        entity = mike.action;
                        entity = entity.bind(mike)();
 54:
                        mike = _closure1_slot14;
                        tango = mike.activeIndex;
                        zulu = tango.set;
                        mike = -1;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hideContextMenu;
                        mike = mike.bind(zulu)();
                        zulu = _closure2_slot10;
                        mike = 'contextmenu-close';
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    }
                };
                zulu['requestClose'] = backup;
                foxtrot = function() { // Original name: onClose
                    entity = undefined;
                    return entity;
                };
                zulu['onClose'] = foxtrot;
                zulu = offset.bind(romeo)(zulu);
                _fun00032_ip = 807; continue _fun00031;
 781:
                offset = _closure1_slot32;
                zulu = {};
                romeo = 'drag-start';
                zulu['type'] = romeo;
                zulu['node'] = yankee;
                zulu = offset.bind(entity)(zulu);
 807:
                zulu = {};
                zulu['dragSpecs'] = verify;
                zulu['overSpecs'] = entity;
                zulu['windowSize'] = options;
                zulu = tango.bind(entity)(zulu);
                tango = report.set;
                zulu = {};
                options = 'pressed';
                zulu['mode'] = options;
                zulu['initialY'] = golf;
                zulu['initialX'] = oscar;
                zulu['absoluteY'] = golf;
                zulu['absoluteX'] = oscar;
                zulu = tango.bind(report)(zulu);
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 9;
                zulu = oscar[mike];
                tango = report.bind(entity)(zulu);
                zulu = tango.triggerHapticFeedback;
                mike = oscar[mike];
                mike = report.bind(entity)(mike);
                mike = mike.HapticFeedbackTypes;
                mike = mike.IMPACT_MEDIUM;
                mike = zulu.bind(tango)(mike);
 921:
                return entity;
            }
        };
        foxtrot = sizing.bind(offset)(foxtrot, backup);
        var _closure2_slot12 = foxtrot;
        source = offset.useCallback;
        sizing = function(argFoo, argBar) {
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 18;
            zulu = zulu[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            report = oscar.updateContextMenuState;
            tango = _closure1_slot14;
            zulu = argFoo;
            mike = argBar;
            mike = report.bind(oscar)(zulu, mike, tango);
            return entity;
        };
        backup = new Array(0);
        sizing = source.bind(offset)(sizing, backup);
        var _closure2_slot13 = sizing;
        source = offset.useCallback;
        backup = new Array(2);
        backup[0] = control;
        backup[1] = mike;
        mike = function(argFoo) {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                foxtrot = argFoo;
                tango = _closure1_slot9;
                zulu = tango.getState;
                tango = zulu.bind(tango)();
                result = tango.overSpecs;
                var _closure3_slot0 = result;
                zulu = tango.dragSpecs;
                var _closure3_slot1 = zulu;
                verify = tango.windowSize;
                var _closure3_slot2 = verify;
                report = tango.setStateShallow;
                var _closure3_slot3 = report;
                offset = tango.listInsets;
                tango = tango.gestureState;
                output = null;
                if(!(output != zulu)) { _fun00036_ip = 1252; continue _fun00035 }
 83:
                zulu = tango.get;
                report = zulu.bind(tango)();
                oscar = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 21;
                zulu = tango[zulu];
                tango = undefined;
                oscar = oscar.bind(tango)(zulu);
                zulu = oscar.getIsScreenReaderEnabled;
                zulu = zulu.bind(oscar)();
                if(zulu) { _fun00036_ip = 141; continue _fun00035 }
 127:
                oscar = _closure3_slot1;
                oscar = oscar.node;
                zulu = output == oscar;
 141:
                if(zulu) { _fun00036_ip = 148; continue _fun00035 }
 144:
                zulu = output != result;
 148:
                if(zulu) { _fun00036_ip = 187; continue _fun00035 }
 151:
                oscar = _closure1_slot32;
                zulu = {};
                golf = 'drag-start';
                zulu['type'] = golf;
                golf = _closure3_slot1;
                golf = golf.node;
                zulu['node'] = golf;
                zulu = oscar.bind(tango)(zulu);
 187:
                yankee = global;
                zulu = yankee.Map;
                oscar = zulu.prototype;
                oscar = Object.create(oscar, {constructor: {value: zulu}});
                context = oscar;
                zulu = new context[zulu](record);
                sizing = zulu instanceof Object ? zulu : oscar;
                zulu = output != result;
                if(!zulu) { _fun00036_ip = 235; continue _fun00035 }
 222:
                golf = result.state;
                oscar = 'self';
                zulu = oscar !== golf;
 235:
                if(!zulu) { _fun00036_ip = 305; continue _fun00035 }
 238:
                golf = sizing.set;
                zulu = _closure3_slot1;
                zulu = zulu.item;
                oscar = zulu.recyclerKey;
                zulu = 0;
                zulu = golf.bind(sizing)(oscar, zulu);
                golf = sizing.set;
                zulu = result.item;
                oscar = zulu.recyclerKey;
                zulu = _closure3_slot1;
                options = zulu.itemSize;
                zulu = 2;
                zulu = zulu * options;
                zulu = golf.bind(sizing)(oscar, zulu);
 305:
                options = _closure1_slot34;
                sequence = _closure2_slot1;
                golf = true;
                context = undefined;
                record = foxtrot;
                config = true;
                vacuum = sizing;
                options = context[options](record, config, sequence, vacuum, control);
                oscar = options.item;
                source = options.overPercentage;
                update = options.node;
                options = output == result;
                romeo = undefined;
                if(options) { _fun00036_ip = 369; continue _fun00035 }
 358:
                options = result.node;
                romeo = options.id;
 369:
                backup = output == update;
                options = undefined;
                if(backup) { _fun00036_ip = 383; continue _fun00035 }
 378:
                options = update.id;
 383:
                if(!(romeo === options)) { _fun00036_ip = 409; continue _fun00035 }
 387:
                romeo = output == result;
                options = undefined;
                if(romeo) { _fun00036_ip = 402; continue _fun00035 }
 396:
                options = result.percentage;
 402:
                if(!(options !== source)) { _fun00036_ip = 923; continue _fun00035 }
 409:
                romeo = _closure1_slot0;
                options = _closure1_slot2;
                backup = 18;
                options = options[backup];
                options = romeo.bind(tango)(options);
                romeo = options.ContextMenuStore;
                options = romeo.getState;
                options = options.bind(romeo)();
                options = options.menu;
                if(!(output != options)) { _fun00036_ip = 482; continue _fun00035 }
 455:
                romeo = _closure1_slot0;
                options = _closure1_slot2;
                options = options[backup];
                romeo = romeo.bind(tango)(options);
                options = romeo.hideContextMenu;
                options = options.bind(romeo)();
 482:
                backup = oscar;
                options = source;
                romeo = update;
                if(!(output != oscar)) { _fun00036_ip = 684; continue _fun00035 }
 498:
                kilo = output == result;
                echo = undefined;
                if(kilo) { _fun00036_ip = 518; continue _fun00035 }
 507:
                kilo = result.item;
                echo = kilo.recyclerKey;
 518:
                kilo = oscar.recyclerKey;
                backup = oscar;
                options = source;
                romeo = update;
                if(!(echo !== kilo)) { _fun00036_ip = 684; continue _fun00035 }
 540:
                kilo = sizing.clear;
                kilo = kilo.bind(sizing)();
                kilo = _closure3_slot1;
                kilo = kilo.item;
                echo = kilo.recyclerKey;
                kilo = oscar.recyclerKey;
                if(!(echo !== kilo)) { _fun00036_ip = 645; continue _fun00035 }
 575:
                update = sizing.set;
                kilo = _closure3_slot1;
                kilo = kilo.item;
                kilo = kilo.recyclerKey;
                source = output != kilo;
                echo = '';
                if(!source) { _fun00036_ip = 609; continue _fun00035 }
 606:
                echo = kilo;
 609:
                kilo = 0;
                kilo = update.bind(sizing)(echo, kilo);
                echo = sizing.set;
                kilo = oscar.recyclerKey;
                update = _closure1_slot13;
                oscar = 2;
                oscar = oscar * update;
                oscar = echo.bind(sizing)(kilo, oscar);
 645:
                kilo = _closure1_slot34;
                sequence = _closure2_slot1;
                context = undefined;
                record = foxtrot;
                config = true;
                vacuum = sizing;
                oscar = context[kilo](record, config, sequence, vacuum, control);
                backup = oscar.item;
                options = oscar.overPercentage;
                romeo = oscar.node;
 684:
                oscar = _closure3_slot1;
                record = oscar.node;
                oscar = _closure3_slot1;
                sequence = oscar.item;
                oscar = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: getOverState
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        oscar = argFoo;
                        zulu = argBar;
                        golf = argBaz;
                        verify = argCorge;
                        tango = argGrault;
                        options = null;
                        if(!(options != golf)) { _fun00038_ip = 33; continue _fun00037 }
 21:
                        if(!(options != verify)) { _fun00038_ip = 33; continue _fun00037 }
 25:
                        if(!(options != oscar)) { _fun00038_ip = 33; continue _fun00037 }
 29:
                        if(!(options == zulu)) { _fun00038_ip = 37; continue _fun00037 }
 33:
                        entity = undefined;
                        return entity;
 37:
                        mike = oscar.id;
                        entity = zulu.id;
                        if(!(mike !== entity)) { _fun00038_ip = 658; continue _fun00037 }
 54:
                        yankee = golf.type;
                        offset = _closure1_slot0;
                        entity = _closure1_slot2;
                        foxtrot = 12;
                        mike = entity[foxtrot];
                        entity = undefined;
                        mike = offset.bind(entity)(mike);
                        mike = mike.FastListItemTypes;
                        mike = mike.SECTION;
                        if(!(mike !== yankee)) { _fun00038_ip = 138; continue _fun00037 }
 100:
                        offset = _closure1_slot0;
                        mike = _closure1_slot2;
                        mike = mike[foxtrot];
                        mike = offset.bind(entity)(mike);
                        mike = mike.FastListItemTypes;
                        offset = mike.ITEM;
                        mike = undefined;
                        if(!(offset === yankee)) { _fun00038_ip = 262; continue _fun00037 }
 138:
                        yankee = verify.type;
                        romeo = _closure1_slot0;
                        offset = _closure1_slot2;
                        offset = offset[foxtrot];
                        offset = romeo.bind(entity)(offset);
                        offset = offset.FastListItemTypes;
                        offset = offset.SECTION;
                        if(!(offset !== yankee)) { _fun00038_ip = 211; continue _fun00037 }
 176:
                        romeo = _closure1_slot0;
                        offset = _closure1_slot2;
                        offset = offset[foxtrot];
                        offset = romeo.bind(entity)(offset);
                        offset = offset.FastListItemTypes;
                        offset = offset.ITEM;
                        mike = undefined;
                        if(!(offset === yankee)) { _fun00038_ip = 262; continue _fun00037 }
 211:
                        offset = verify.recyclerKey;
                        verify = golf.recyclerKey;
                        golf = 'self';
                        if(!(offset !== verify)) { _fun00038_ip = 259; continue _fun00037 }
 231:
                        verify = 0.5;
                        offset = tango < verify;
                        verify = 'after';
                        if(!offset) { _fun00038_ip = 256; continue _fun00037 }
 252:
                        verify = 'before';
 256:
                        golf = verify;
 259:
                        mike = golf;
 262:
                        offset = oscar.type;
                        golf = _closure1_slot8;
                        verify = golf.FOLDER;
                        yankee = zulu.type;
                        golf = _closure1_slot8;
                        golf = golf.FOLDER;
                        golf = yankee === golf;
                        if(!(offset === verify)) { _fun00038_ip = 443; continue _fun00037 }
 303:
                        verify = 'after';
                        if(!(verify === mike)) { _fun00038_ip = 420; continue _fun00037 }
 311:
                        if(!golf) { _fun00038_ip = 326; continue _fun00037 }
 314:
                        verify = zulu.expanded;
                        if(verify) { _fun00038_ip = 656; continue _fun00037 }
 326:
                        if(golf) { _fun00038_ip = 420; continue _fun00037 }
 329:
                        verify = zulu.parentId;
                        if(!(options != verify)) { _fun00038_ip = 420; continue _fun00037 }
 339:
                        offset = _closure1_slot7;
                        verify = offset.getGuildsTree;
                        yankee = verify.bind(offset)();
                        offset = yankee.getNode;
                        verify = zulu.parentId;
                        verify = offset.bind(yankee)(verify);
                        if(!(options != verify)) { _fun00038_ip = 420; continue _fun00037 }
 374:
                        offset = verify.children;
                        verify = verify.children;
                        yankee = verify.length;
                        verify = 1;
                        verify = yankee - verify;
                        verify = offset[verify];
                        if(!(options != verify)) { _fun00038_ip = 420; continue _fun00037 }
 404:
                        offset = verify.id;
                        verify = zulu.id;
                        if(!(offset !== verify)) { _fun00038_ip = 420; continue _fun00037 }
 418:
                        return entity;
 420:
                        verify = 'before';
                        if(!(verify === mike)) { _fun00038_ip = 443; continue _fun00037 }
 428:
                        if(golf) { _fun00038_ip = 443; continue _fun00037 }
 431:
                        golf = zulu.parentId;
                        if(!(options != golf)) { _fun00038_ip = 443; continue _fun00037 }
 441:
                        return entity;
 443:
                        golf = 'self';
                        if(!(golf !== mike)) { _fun00038_ip = 654; continue _fun00037 }
 454:
                        if(!(options != mike)) { _fun00038_ip = 654; continue _fun00037 }
 461:
                        verify = oscar.type;
                        golf = _closure1_slot8;
                        golf = golf.GUILD;
                        if(!(verify === golf)) { _fun00038_ip = 509; continue _fun00037 }
 480:
                        verify = zulu.type;
                        golf = _closure1_slot8;
                        golf = golf.GUILD;
                        if(!(verify === golf)) { _fun00038_ip = 509; continue _fun00037 }
 499:
                        golf = zulu.parentId;
                        if(!(options != golf)) { _fun00038_ip = 592; continue _fun00037 }
 509:
                        golf = oscar.type;
                        oscar = _closure1_slot8;
                        oscar = oscar.GUILD;
                        if(!(golf === oscar)) { _fun00038_ip = 636; continue _fun00037 }
 528:
                        oscar = zulu.type;
                        report = _closure1_slot8;
                        report = report.FOLDER;
                        if(!(oscar === report)) { _fun00038_ip = 636; continue _fun00037 }
 547:
                        zulu = zulu.expanded;
                        if(zulu) { _fun00038_ip = 636; continue _fun00037 }
 556:
                        zulu = 0.35;
                        if(!(tango > zulu)) { _fun00038_ip = 636; continue _fun00037 }
 570:
                        zulu = 0.65;
                        if(!(tango < zulu)) { _fun00038_ip = 636; continue _fun00037 }
 584:
                        zulu = 'drop-into';
                        return zulu;
 592:
                        zulu = 0.35;
                        if(!(tango > zulu)) { _fun00038_ip = 636; continue _fun00037 }
 606:
                        zulu = 0.65;
                        if(!(tango < zulu)) { _fun00038_ip = 636; continue _fun00037 }
 620:
                        zulu = 'before';
                        if(!(zulu !== mike)) { _fun00038_ip = 646; continue _fun00037 }
 628:
                        zulu = 'after';
                        if(!(zulu !== mike)) { _fun00038_ip = 638; continue _fun00037 }
 636:
                        return mike;
 638:
                        zulu = 'convert-after';
                        return zulu;
 646:
                        zulu = 'convert-before';
                        return zulu;
 654:
                        return mike;
 656:
                        return entity;
 658:
                        entity = 'self';
                        return entity;
                    }
                };
                context = undefined;
                config = romeo;
                vacuum = backup;
                control = options;
                oscar = context[oscar](record, config, sequence, vacuum, control, source);
                kilo = romeo;
                romeo = oscar;
                if(!(output == romeo)) { _fun00036_ip = 758; continue _fun00035 }
 735:
                oscar = _closure3_slot1;
                kilo = oscar.node;
                oscar = _closure3_slot1;
                backup = oscar.item;
                romeo = 'self';
 758:
                oscar = output != kilo;
                if(!oscar) { _fun00036_ip = 769; continue _fun00035 }
 765:
                oscar = output != result;
 769:
                if(!oscar) { _fun00036_ip = 818; continue _fun00035 }
 772:
                sizing = _closure1_slot32;
                oscar = {};
                echo = 'drag-move';
                oscar['type'] = echo;
                echo = _closure3_slot1;
                echo = echo.node;
                oscar['dragNode'] = echo;
                oscar['overNode'] = kilo;
                oscar['overState'] = romeo;
                oscar = sizing.bind(tango)(oscar);
 818:
                oscar = output == kilo;
                if(oscar) { _fun00036_ip = 829; continue _fun00035 }
 825:
                oscar = output == backup;
 829:
                if(oscar) { _fun00036_ip = 896; continue _fun00035 }
 832:
                echo = output == result;
                sizing = undefined;
                if(echo) { _fun00036_ip = 847; continue _fun00035 }
 841:
                sizing = result.node;
 847:
                sizing = sizing === kilo;
                if(!sizing) { _fun00036_ip = 872; continue _fun00035 }
 854:
                update = output == result;
                echo = undefined;
                if(update) { _fun00036_ip = 868; continue _fun00035 }
 863:
                echo = result.item;
 868:
                sizing = echo === backup;
 872:
                if(!sizing) { _fun00036_ip = 893; continue _fun00035 }
 875:
                echo = output == result;
                output = undefined;
                if(echo) { _fun00036_ip = 889; continue _fun00035 }
 884:
                output = result.state;
 889:
                sizing = output === romeo;
 893:
                oscar = sizing;
 896:
                if(oscar) { _fun00036_ip = 923; continue _fun00035 }
 899:
                oscar = {};
                oscar['node'] = kilo;
                oscar['item'] = backup;
                oscar['state'] = romeo;
                oscar['percentage'] = options;
                _closure3_slot0 = oscar;
 923:
                oscar = offset.get;
                oscar = oscar.bind(offset)();
                oscar = oscar.start;
                options = 160;
                romeo = oscar + options;
                oscar = offset.get;
                oscar = oscar.bind(offset)();
                oscar = oscar.end;
                oscar = verify - oscar;
                sizing = oscar - options;
                if(!(!(foxtrot < romeo))) { _fun00036_ip = 1051; continue _fun00035 }
 970:
                verify = foxtrot > sizing;
                kilo = 0;
                oscar = 0;
                if(!verify) { _fun00036_ip = 1128; continue _fun00035 }
 984:
                backup = yankee.Math;
                offset = backup.max;
                verify = report.initialY;
                verify = offset.bind(backup)(verify, sizing);
                backup = yankee.Math;
                offset = backup.max;
                output = yankee.Math;
                sizing = output.min;
                verify = foxtrot - verify;
                verify = sizing.bind(output)(verify, options);
                verify = verify / options;
                oscar = offset.bind(backup)(verify, kilo);
                _fun00036_ip = 1128; continue _fun00035;
 1051:
                offset = yankee.Math;
                verify = offset.min;
                report = report.initialY;
                report = verify.bind(offset)(report, romeo);
                offset = yankee.Math;
                verify = offset.max;
                romeo = yankee.Math;
                yankee = romeo.min;
                report = report - foxtrot;
                report = yankee.bind(romeo)(report, options);
                options = report / options;
                report = 0;
                options = verify.bind(offset)(options, report);
                report = -1;
                oscar = report * options;
 1128:
                options = _closure2_slot2;
                report = options.set;
                report = report.bind(options)(oscar);
                report = 0;
                report = report === oscar;
                if(!report) { _fun00036_ip = 1164; continue _fun00035 }
 1151:
                oscar = _closure2_slot9;
                oscar = oscar.isActive;
                if(oscar) { _fun00036_ip = 1197; continue _fun00035 }
 1164:
                if(report) { _fun00036_ip = 1177; continue _fun00035 }
 1167:
                oscar = _closure2_slot9;
                report = oscar.isActive;
 1177:
                if(report) { _fun00036_ip = 1214; continue _fun00035 }
 1180:
                oscar = _closure2_slot9;
                report = oscar.setActive;
                report = report.bind(oscar)(golf);
                _fun00036_ip = 1214; continue _fun00035;
 1197:
                oscar = _closure2_slot9;
                report = oscar.setActive;
                zulu = false;
                zulu = report.bind(oscar)(zulu);
 1214:
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 15;
                mike = report[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.batchUpdates;
                entity = function() {
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        mike = _closure3_slot1;
                        oscar = null;
                        if(!(oscar != mike)) { _fun00040_ip = 235; continue _fun00039 }
 16:
                        mike = _closure3_slot1;
                        mike = mike.node;
                        tango = mike.type;
                        mike = _closure1_slot8;
                        mike = mike.FOLDER;
                        if(!(tango === mike)) { _fun00040_ip = 235; continue _fun00039 }
 51:
                        mike = _closure3_slot1;
                        mike = mike.node;
                        mike = mike.expanded;
                        if(!mike) { _fun00040_ip = 235; continue _fun00039 }
 73:
                        tango = _closure1_slot1;
                        report = _closure1_slot2;
                        mike = 16;
                        mike = report[mike];
                        report = undefined;
                        golf = tango.bind(report)(mike);
                        tango = golf.toggleGuildFolderExpand;
                        mike = _closure3_slot1;
                        mike = mike.node;
                        mike = mike.id;
                        mike = tango.bind(golf)(mike);
                        tango = _closure1_slot7;
                        mike = tango.getGuildsTree;
                        golf = mike.bind(tango)();
                        tango = golf.getNode;
                        mike = _closure3_slot1;
                        mike = mike.node;
                        mike = mike.id;
                        tango = tango.bind(golf)(mike);
                        mike = _closure3_slot1;
                        mike = mike.node;
                        mike = tango !== mike;
                        if(!mike) { _fun00040_ip = 206; continue _fun00039 }
 178:
                        oscar = oscar == tango;
                        report = undefined;
                        if(oscar) { _fun00040_ip = 192; continue _fun00039 }
 187:
                        report = tango.type;
 192:
                        zulu = _closure1_slot8;
                        zulu = zulu.FOLDER;
                        mike = report === zulu;
 206:
                        if(!mike) { _fun00040_ip = 235; continue _fun00039 }
 209:
                        mike = {};
                        options = _closure3_slot1;
                        verify = mike;
                        zulu = copyDataProperties(verify, options);
                        zulu = 'node';
                        mike[zulu] = tango;
                        _closure3_slot1 = mike;
 235:
                        zulu = _closure3_slot3;
                        mike = {};
                        tango = _closure3_slot0;
                        mike['overSpecs'] = tango;
                        tango = _closure3_slot1;
                        mike['dragSpecs'] = tango;
                        entity = _closure3_slot2;
                        mike['windowSize'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
 1252:
                entity = undefined;
                return entity;
            }
        };
        backup = source.bind(offset)(mike, backup);
        var _closure2_slot14 = backup;
        mike = 24;
        mike = update[mike];
        verify = verify.bind(options)(mike);
        options = verify.useExternalScrollEventHandler;
        mike = {};
        update = 'guilds';
        mike['id'] = update;
        mike = options.bind(verify)(mike);
        var _closure2_slot15 = mike;
        verify = offset.useCallback;
        options = new Array(2);
        options[0] = backup;
        options[1] = mike;
        mike = function(argFoo) {
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                entity = argFoo;
                oscar = _closure2_slot15;
                mike = entity.nativeEvent;
                mike = mike.contentOffset;
                report = mike.y;
                mike = entity.nativeEvent;
                mike = mike.contentSize;
                tango = mike.height;
                entity = entity.nativeEvent;
                entity = entity.layoutMeasurement;
                mike = entity.height;
                entity = undefined;
                mike = oscar.bind(entity)(report, tango, mike);
                tango = _closure1_slot9;
                mike = tango.getState;
                mike = mike.bind(tango)();
                tango = mike.gestureState;
                mike = tango.get;
                mike = mike.bind(tango)();
                report = mike.mode;
                tango = 'drag';
                if(!(tango === report)) { _fun00042_ip = 127; continue _fun00041 }
 112:
                zulu = _closure2_slot14;
                mike = mike.absoluteY;
                mike = zulu.bind(entity)(mike);
 127:
                return entity;
            }
        };
        mike = verify.bind(offset)(mike, options);
        verify = offset.useMemo;
        options = new Array(12);
        options[0] = echo;
        options[1] = result;
        options[2] = output;
        options[3] = sizing;
        options[4] = kilo;
        options[5] = backup;
        options[6] = foxtrot;
        options[7] = romeo;
        options[8] = yankee;
        options[9] = golf;
        options[10] = report;
        options[11] = oscar;
        oscar = function() {
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            report = 25;
            mike = foxtrot[report];
            yankee = undefined;
            mike = romeo.bind(yankee)(mike);
            tango = mike.Gesture;
            zulu = tango.Simultaneous;
            mike = foxtrot[report];
            mike = romeo.bind(yankee)(mike);
            oscar = mike.Gesture;
            mike = oscar.LongPress;
            options = mike.bind(oscar)();
            oscar = options.onTouchesDown;
            mike = function(argFoo, argBar) { // Original name: c
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    report = argFoo;
                    zulu = argBar;
                    entity = report.changedTouches;
                    options = 0;
                    mike = entity[options];
                    oscar = null;
                    golf = oscar == mike;
                    entity = undefined;
                    tango = undefined;
                    if(golf) { _fun00044_ip = 37; continue _fun00043 }
 31:
                    tango = mike.absoluteY;
 37:
                    golf = oscar != tango;
                    options = 0;
                    if(!golf) { _fun00044_ip = 49; continue _fun00043 }
 46:
                    options = tango;
 49:
                    verify = _closure2_slot4;
                    golf = verify.get;
                    golf = golf.bind(verify)();
                    golf = options + golf;
                    if(!(oscar != mike)) { _fun00044_ip = 221; continue _fun00043 }
 76:
                    options = _closure2_slot3;
                    oscar = options.get;
                    oscar = oscar.bind(options)();
                    options = oscar.mode;
                    oscar = 'cancel';
                    if(!(oscar !== options)) { _fun00044_ip = 221; continue _fun00043 }
 102:
                    options = _closure2_slot5;
                    oscar = options.get;
                    oscar = oscar.bind(options)();
                    oscar = oscar.min;
                    if(!(!(golf < oscar))) { _fun00044_ip = 221; continue _fun00043 }
 124:
                    options = _closure2_slot5;
                    oscar = options.get;
                    oscar = oscar.bind(options)();
                    oscar = oscar.max;
                    if(!(!(golf > oscar))) { _fun00044_ip = 221; continue _fun00043 }
 146:
                    report = report.changedTouches;
                    oscar = report.length;
                    report = 1;
                    if(!(report === oscar)) { _fun00044_ip = 231; continue _fun00043 }
 164:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 7;
                    report = golf[report];
                    oscar = oscar.bind(entity)(report);
                    report = oscar.runOnJS;
                    tango = _closure2_slot11;
                    report = report.bind(oscar)(tango);
                    tango = mike.absoluteX;
                    mike = mike.absoluteY;
                    mike = report.bind(entity)(tango, mike);
                    _fun00044_ip = 231; continue _fun00043;
 221:
                    mike = zulu.fail;
                    mike = mike.bind(zulu)();
 231:
                    return entity;
                }
            };
            verify = {};
            offset = _closure2_slot4;
            verify['scrollPosition'] = offset;
            kilo = _closure2_slot3;
            verify['gestureState'] = kilo;
            offset = _closure2_slot5;
            verify['dragRegion'] = offset;
            offset = 7;
            backup = foxtrot[offset];
            backup = romeo.bind(yankee)(backup);
            backup = backup.runOnJS;
            verify['runOnJS'] = backup;
            backup = _closure2_slot11;
            verify['handleTouchesDown'] = backup;
            mike['__closure'] = verify;
            verify = 1127400463379.0;
            mike['__workletHash'] = verify;
            verify = _closure1_slot19;
            mike['__initData'] = verify;
            options = oscar.bind(options)(mike);
            oscar = options.onTouchesMove;
            mike = function(argFoo, argBar) { // Original name: u
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    mike = argBar;
                    zulu = _closure2_slot3;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    zulu = entity.mode;
                    entity = 'cancel';
                    if(!(entity === zulu)) { _fun00046_ip = 42; continue _fun00045 }
 32:
                    entity = mike.fail;
                    entity = entity.bind(mike)();
 42:
                    entity = undefined;
                    return entity;
                }
            };
            verify = {};
            verify['gestureState'] = kilo;
            mike['__closure'] = verify;
            verify = 5904183613334.0;
            mike['__workletHash'] = verify;
            verify = _closure1_slot20;
            mike['__initData'] = verify;
            options = oscar.bind(options)(mike);
            oscar = options.onStart;
            mike = function(argFoo) { // Original name: s
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    tango = entity.absoluteX;
                    zulu = entity.absoluteY;
                    report = _closure2_slot3;
                    mike = report.get;
                    mike = mike.bind(report)();
                    report = mike.mode;
                    mike = 'cancel';
                    if(!(mike !== report)) { _fun00048_ip = 89; continue _fun00047 }
 44:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 7;
                    report = report[mike];
                    mike = undefined;
                    oscar = oscar.bind(mike)(report);
                    report = oscar.runOnJS;
                    entity = _closure2_slot12;
                    entity = report.bind(oscar)(entity);
                    entity = entity.bind(mike)(tango, zulu);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            verify = {};
            verify['gestureState'] = kilo;
            backup = foxtrot[offset];
            backup = romeo.bind(yankee)(backup);
            backup = backup.runOnJS;
            verify['runOnJS'] = backup;
            backup = _closure2_slot12;
            verify['handlePress'] = backup;
            mike['__closure'] = verify;
            verify = 2121892092583.0;
            mike['__workletHash'] = verify;
            verify = _closure1_slot21;
            mike['__initData'] = verify;
            options = oscar.bind(options)(mike);
            oscar = options.onEnd;
            mike = function() { // Original name: o
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    mike = mike.mode;
                    zulu = 'cancel';
                    if(!(zulu === mike)) { _fun00050_ip = 73; continue _fun00049 }
 29:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 7;
                    tango = tango[mike];
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    tango = report.runOnJS;
                    entity = _closure2_slot10;
                    entity = tango.bind(report)(entity);
                    entity = entity.bind(mike)(zulu);
 73:
                    entity = undefined;
                    return entity;
                }
            };
            backup = {};
            backup['gestureState'] = kilo;
            verify = foxtrot[offset];
            verify = romeo.bind(yankee)(verify);
            verify = verify.runOnJS;
            backup['runOnJS'] = verify;
            verify = _closure2_slot10;
            backup['handleGestureEnd'] = verify;
            mike['__closure'] = backup;
            backup = 14140541035324.0;
            mike['__workletHash'] = backup;
            backup = _closure1_slot22;
            mike['__initData'] = backup;
            options = oscar.bind(options)(mike);
            oscar = options.onTouchesCancelled;
            mike = function() { // Original name: a
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    zulu = mike.mode;
                    mike = null;
                    mike = mike != zulu;
                    if(!mike) { _fun00052_ip = 56; continue _fun00051 }
 30:
                    tango = _closure2_slot3;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    tango = zulu.mode;
                    zulu = 'cancel';
                    mike = zulu !== tango;
 56:
                    if(mike) { _fun00052_ip = 107; continue _fun00051 }
 59:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    mike = zulu[mike];
                    zulu = undefined;
                    tango = tango.bind(zulu)(mike);
                    mike = tango.runOnJS;
                    entity = _closure2_slot10;
                    mike = mike.bind(tango)(entity);
                    entity = 'cancel';
                    entity = mike.bind(zulu)(entity);
 107:
                    entity = undefined;
                    return entity;
                }
            };
            backup = {};
            backup['gestureState'] = kilo;
            sizing = foxtrot[offset];
            sizing = romeo.bind(yankee)(sizing);
            sizing = sizing.runOnJS;
            backup['runOnJS'] = sizing;
            backup['handleGestureEnd'] = verify;
            mike['__closure'] = backup;
            backup = 12544175038727.0;
            mike['__workletHash'] = backup;
            backup = _closure1_slot23;
            mike['__initData'] = backup;
            mike = oscar.bind(options)(mike);
            report = foxtrot[report];
            report = romeo.bind(yankee)(report);
            oscar = report.Gesture;
            report = oscar.Pan;
            options = report.bind(oscar)();
            oscar = options.manualActivation;
            report = true;
            options = oscar.bind(options)(report);
            oscar = options.simultaneousWithExternalGesture;
            report = _closure2_slot0;
            options = oscar.bind(options)(report);
            oscar = options.shouldCancelWhenOutside;
            report = false;
            options = oscar.bind(options)(report);
            oscar = options.onTouchesMove;
            report = function(argFoo, argBar) { // Original name: r
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    tango = argBar;
                    entity = argFoo;
                    mike = entity.changedTouches;
                    entity = 0;
                    entity = mike[entity];
                    report = _closure2_slot3;
                    zulu = report.get;
                    zulu = zulu.bind(report)();
                    report = zulu.mode;
                    zulu = 'pressed';
                    if(!(zulu === report)) { _fun00054_ip = 53; continue _fun00053 }
 47:
                    zulu = null;
                    if(!(zulu == entity)) { _fun00054_ip = 125; continue _fun00053 }
 53:
                    report = _closure2_slot3;
                    zulu = report.get;
                    zulu = zulu.bind(report)();
                    report = zulu.mode;
                    zulu = 'cancel';
                    zulu = zulu !== report;
                    if(!zulu) { _fun00054_ip = 88; continue _fun00053 }
 82:
                    report = null;
                    zulu = report != entity;
 88:
                    if(zulu) { _fun00054_ip = 565; continue _fun00053 }
 94:
                    zulu = tango.fail;
                    zulu = zulu.bind(tango)();
                    oscar = _closure2_slot8;
                    report = oscar.set;
                    zulu = false;
                    zulu = report.bind(oscar)(zulu);
                    _fun00054_ip = 565; continue _fun00053;
 125:
                    report = entity.absoluteX;
                    verify = _closure2_slot3;
                    zulu = verify.get;
                    zulu = zulu.bind(verify)();
                    zulu = zulu.initialX;
                    oscar = report - zulu;
                    zulu = global;
                    golf = zulu.Math;
                    report = golf.abs;
                    options = entity.absoluteY;
                    zulu = verify.get;
                    zulu = zulu.bind(verify)();
                    zulu = zulu.absoluteY;
                    zulu = options - zulu;
                    report = report.bind(golf)(zulu);
                    zulu = 10;
                    if(!(oscar > zulu)) { _fun00054_ip = 212; continue _fun00053 }
 205:
                    if(!(!(oscar > report))) { _fun00054_ip = 405; continue _fun00053 }
 212:
                    if(!(report > zulu)) { _fun00054_ip = 565; continue _fun00053 }
 219:
                    oscar = _closure2_slot3;
                    report = oscar.set;
                    zulu = {};
                    golf = oscar.get;
                    offset = golf.bind(oscar)();
                    yankee = zulu;
                    golf = copyDataProperties(yankee, offset);
                    options = 'drag';
                    golf = 'mode';
                    zulu[golf] = options;
                    options = entity.absoluteX;
                    golf = 'initialX';
                    zulu[golf] = options;
                    options = entity.absoluteY;
                    golf = 'initialY';
                    zulu[golf] = options;
                    options = entity.absoluteX;
                    golf = 'absoluteX';
                    zulu[golf] = options;
                    options = entity.absoluteY;
                    golf = 'absoluteY';
                    zulu[golf] = options;
                    zulu = report.bind(oscar)(zulu);
                    zulu = tango.activate;
                    zulu = zulu.bind(tango)();
                    oscar = _closure2_slot8;
                    report = oscar.set;
                    zulu = true;
                    zulu = report.bind(oscar)(zulu);
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 7;
                    zulu = oscar[zulu];
                    oscar = undefined;
                    golf = report.bind(oscar)(zulu);
                    report = golf.runOnJS;
                    zulu = _closure2_slot14;
                    report = report.bind(golf)(zulu);
                    zulu = entity.absoluteY;
                    zulu = report.bind(oscar)(zulu);
                    _fun00054_ip = 565; continue _fun00053;
 405:
                    oscar = _closure2_slot3;
                    report = oscar.set;
                    zulu = {};
                    golf = oscar.get;
                    offset = golf.bind(oscar)();
                    yankee = zulu;
                    golf = copyDataProperties(yankee, offset);
                    options = 'contextmenu';
                    golf = 'mode';
                    zulu[golf] = options;
                    options = entity.absoluteX;
                    golf = 'absoluteX';
                    zulu[golf] = options;
                    options = entity.absoluteY;
                    golf = 'absoluteY';
                    zulu[golf] = options;
                    zulu = report.bind(oscar)(zulu);
                    oscar = _closure2_slot8;
                    report = oscar.set;
                    zulu = false;
                    zulu = report.bind(oscar)(zulu);
                    zulu = tango.activate;
                    zulu = zulu.bind(tango)();
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 7;
                    zulu = tango[zulu];
                    tango = undefined;
                    report = report.bind(tango)(zulu);
                    zulu = report.runOnJS;
                    mike = _closure2_slot13;
                    zulu = zulu.bind(report)(mike);
                    mike = entity.absoluteX;
                    entity = entity.absoluteY;
                    entity = zulu.bind(tango)(mike, entity);
 565:
                    entity = undefined;
                    return entity;
                }
            };
            backup = {};
            backup['gestureState'] = kilo;
            sizing = _closure2_slot8;
            backup['dragDropInProgress'] = sizing;
            sizing = 10;
            backup['DRAG_GESTURE_MINIMUM_DISTANCE'] = sizing;
            sizing = foxtrot[offset];
            sizing = romeo.bind(yankee)(sizing);
            sizing = sizing.runOnJS;
            backup['runOnJS'] = sizing;
            sizing = _closure2_slot13;
            backup['handleContextMenuDrag'] = sizing;
            output = _closure2_slot14;
            backup['handleGuildDrag'] = output;
            report['__closure'] = backup;
            backup = 12774213912809.0;
            report['__workletHash'] = backup;
            backup = _closure1_slot24;
            report['__initData'] = backup;
            options = oscar.bind(options)(report);
            oscar = options.onUpdate;
            report = function(argFoo) { // Original name: n
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    entity = argFoo;
                    options = entity.absoluteX;
                    zulu = entity.absoluteY;
                    tango = _closure2_slot3;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    tango = mike.mode;
                    mike = 'drag';
                    if(!(mike !== tango)) { _fun00056_ip = 125; continue _fun00055 }
 44:
                    tango = _closure2_slot3;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    tango = mike.mode;
                    mike = 'contextmenu';
                    if(!(mike === tango)) { _fun00056_ip = 381; continue _fun00055 }
 75:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 7;
                    mike = tango[mike];
                    tango = undefined;
                    oscar = report.bind(tango)(mike);
                    report = oscar.runOnJS;
                    mike = _closure2_slot13;
                    mike = report.bind(oscar)(mike);
                    mike = mike.bind(tango)(options, zulu);
                    _fun00056_ip = 381; continue _fun00055;
 125:
                    tango = _closure2_slot3;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.absoluteX;
                    if(!(options === mike)) { _fun00056_ip = 174; continue _fun00055 }
 148:
                    tango = _closure2_slot3;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.absoluteY;
                    if(!(zulu !== mike)) { _fun00056_ip = 381; continue _fun00055 }
 174:
                    tango = _closure2_slot3;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    golf = mike.initialY;
                    verify = _closure2_slot7;
                    mike = verify.get;
                    mike = mike.bind(verify)();
                    mike = mike.start;
                    report = 160;
                    mike = mike + report;
                    oscar = _closure2_slot6;
                    tango = verify.get;
                    tango = tango.bind(verify)();
                    tango = tango.end;
                    tango = oscar - tango;
                    tango = tango - report;
                    mike = golf < mike;
                    if(!mike) { _fun00056_ip = 255; continue _fun00055 }
 251:
                    mike = zulu > golf;
 255:
                    if(mike) { _fun00056_ip = 272; continue _fun00055 }
 258:
                    tango = golf > tango;
                    if(!tango) { _fun00056_ip = 269; continue _fun00055 }
 265:
                    tango = zulu < golf;
 269:
                    mike = tango;
 272:
                    if(!mike) { _fun00056_ip = 278; continue _fun00055 }
 275:
                    golf = zulu;
 278:
                    report = _closure2_slot3;
                    tango = report.set;
                    mike = {};
                    oscar = report.get;
                    offset = oscar.bind(report)();
                    yankee = mike;
                    oscar = copyDataProperties(yankee, offset);
                    oscar = 'absoluteX';
                    mike[oscar] = options;
                    oscar = 'absoluteY';
                    mike[oscar] = zulu;
                    oscar = 'initialY';
                    mike[oscar] = golf;
                    mike = tango.bind(report)(mike);
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 7;
                    tango = tango[mike];
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    tango = report.runOnJS;
                    entity = _closure2_slot14;
                    entity = tango.bind(report)(entity);
                    entity = entity.bind(mike)(zulu);
 381:
                    entity = undefined;
                    return entity;
                }
            };
            backup = {};
            backup['gestureState'] = kilo;
            echo = _closure2_slot7;
            backup['listInsets'] = echo;
            echo = 160;
            backup['GESTURE_ACCELERATION_RANGE'] = echo;
            result = _closure2_slot6;
            backup['windowSize'] = result;
            result = foxtrot[offset];
            result = romeo.bind(yankee)(result);
            result = result.runOnJS;
            backup['runOnJS'] = result;
            backup['handleGuildDrag'] = output;
            backup['handleContextMenuDrag'] = sizing;
            report['__closure'] = backup;
            backup = 6609028064197.0;
            report['__workletHash'] = backup;
            backup = _closure1_slot25;
            report['__initData'] = backup;
            options = oscar.bind(options)(report);
            oscar = options.onEnd;
            report = function() { // Original name: t
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    zulu = mike.mode;
                    mike = 'drag';
                    if(!(mike !== zulu)) { _fun00058_ip = 162; continue _fun00057 }
 32:
                    zulu = _closure2_slot3;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    zulu = mike.mode;
                    mike = 'contextmenu';
                    if(!(mike !== zulu)) { _fun00058_ip = 110; continue _fun00057 }
 60:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 7;
                    mike = tango[mike];
                    tango = undefined;
                    report = zulu.bind(tango)(mike);
                    zulu = report.runOnJS;
                    mike = _closure2_slot10;
                    zulu = zulu.bind(report)(mike);
                    mike = 'cancel';
                    mike = zulu.bind(tango)(mike);
                    _fun00058_ip = 210; continue _fun00057;
 110:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 7;
                    mike = tango[mike];
                    tango = undefined;
                    report = zulu.bind(tango)(mike);
                    zulu = report.runOnJS;
                    mike = _closure2_slot10;
                    zulu = zulu.bind(report)(mike);
                    mike = 'contextmenu-open';
                    mike = zulu.bind(tango)(mike);
                    _fun00058_ip = 210; continue _fun00057;
 162:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    mike = zulu[mike];
                    zulu = undefined;
                    tango = tango.bind(zulu)(mike);
                    mike = tango.runOnJS;
                    entity = _closure2_slot10;
                    mike = mike.bind(tango)(entity);
                    entity = 'drop';
                    entity = mike.bind(zulu)(entity);
 210:
                    entity = undefined;
                    return entity;
                }
            };
            backup = {};
            backup['gestureState'] = kilo;
            kilo = foxtrot[offset];
            kilo = romeo.bind(yankee)(kilo);
            kilo = kilo.runOnJS;
            backup['runOnJS'] = kilo;
            backup['handleGestureEnd'] = verify;
            report['__closure'] = backup;
            backup = 5379785936371.0;
            report['__workletHash'] = backup;
            backup = _closure1_slot26;
            report['__initData'] = backup;
            oscar = oscar.bind(options)(report);
            report = oscar.onTouchesCancelled;
            entity = function() { // Original name: e
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.runOnJS;
                mike = _closure2_slot10;
                zulu = zulu.bind(tango)(mike);
                mike = 'cancel';
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            options = {};
            offset = foxtrot[offset];
            offset = romeo.bind(yankee)(offset);
            offset = offset.runOnJS;
            options['runOnJS'] = offset;
            options['handleGestureEnd'] = verify;
            entity['__closure'] = options;
            options = 5147009641124.0;
            entity['__workletHash'] = options;
            golf = _closure1_slot27;
            entity['__initData'] = golf;
            entity = report.bind(oscar)(entity);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar = verify.bind(offset)(oscar, options);
        verify = offset.useEffect;
        options = function() {
            zulu = _closure1_slot9;
            mike = zulu.subscribe;
            entity = function(argFoo) {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.dragSpecs;
                    mike = entity.dropSpecs;
                    entity = null;
                    if(!(entity == zulu)) { _fun00060_ip = 56; continue _fun00059 }
 21:
                    if(!(entity == mike)) { _fun00060_ip = 56; continue _fun00059 }
 25:
                    mike = _closure2_slot1;
                    tango = mike.current;
                    if(!(entity != tango)) { _fun00060_ip = 85; continue _fun00059 }
 41:
                    zulu = tango.setDisableRecycling;
                    mike = false;
                    mike = zulu.bind(tango)(mike);
                    _fun00060_ip = 85; continue _fun00059;
 56:
                    mike = _closure2_slot1;
                    zulu = mike.current;
                    if(!(entity != zulu)) { _fun00060_ip = 85; continue _fun00059 }
 72:
                    mike = zulu.setDisableRecycling;
                    entity = true;
                    entity = mike.bind(zulu)(entity);
 85:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = new Array(0);
        entity = verify.bind(offset)(options, entity);
        entity = {};
        entity['scrollPosition'] = golf;
        entity['gesture'] = oscar;
        entity['scrollerRef'] = report;
        entity['fastListRef'] = tango;
        entity['persistantKeys'] = zulu;
        entity['onFastListScroll'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();