// app/modules/interaction_components/InteractionComponentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
            verify = _closure1_slot6;
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
            golf = _closure1_slot6;
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
    var _closure1_slot5 = entity;
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
    var _closure1_slot6 = entity;
    report = function(argFoo) { // Original name: flattenComponents
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = {};
            zulu = _closure1_slot5;
            report = undefined;
            mike = argFoo;
            tango = zulu.bind(report)(mike);
            zulu = tango.bind(report)();
            mike = zulu.done;
            if(mike) { _fun00008_ip = 61; continue _fun00007 }
 31:
            golf = _closure1_slot8;
            mike = zulu.value;
            mike = golf.bind(report)(entity, mike);
            golf = tango.bind(report)();
            mike = golf.done;
            zulu = golf;
            if(!mike) { _fun00008_ip = 31; continue _fun00007 }
 61:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    entity = function(argFoo, argBar) { // Original name: flattenComponent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscar = argFoo;
            zulu = argBar;
            var _closure2_slot0 = oscar;
            entity = zulu.id;
            oscar[entity] = zulu;
            golf = zulu.type;
            options = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 2;
            report = entity[verify];
            entity = undefined;
            report = options.bind(entity)(report);
            report = report.ComponentType;
            report = report.ACTION_ROW;
            if(!(report !== golf)) { _fun00010_ip = 198; continue _fun00009 }
 70:
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            report = options.bind(entity)(report);
            report = report.ComponentType;
            report = report.SECTION;
            if(!(report !== golf)) { _fun00010_ip = 159; continue _fun00009 }
 103:
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            report = options.bind(entity)(report);
            report = report.ComponentType;
            report = report.CONTAINER;
            if(!(report === golf)) { _fun00010_ip = 219; continue _fun00009 }
 136:
            options = zulu.components;
            golf = options.forEach;
            report = function(argFoo) {
                tango = _closure1_slot8;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = argFoo;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            report = golf.bind(options)(report);
            _fun00010_ip = 219; continue _fun00009;
 159:
            options = zulu.components;
            golf = options.forEach;
            report = function(argFoo) {
                tango = _closure1_slot8;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = argFoo;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            report = golf.bind(options)(report);
            report = _closure1_slot8;
            tango = zulu.accessory;
            tango = report.bind(entity)(oscar, tango);
            _fun00010_ip = 219; continue _fun00009;
 198:
            tango = zulu.components;
            zulu = tango.forEach;
            mike = function(argFoo) {
                tango = _closure1_slot8;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = argFoo;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 219:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    tango = function(argFoo, argBar) { // Original name: findChildComponent
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            var _closure2_slot0 = tango;
            oscar = mike.type;
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            options = 2;
            golf = zulu[options];
            zulu = undefined;
            golf = verify.bind(zulu)(golf);
            golf = golf.ComponentType;
            golf = golf.ACTION_ROW;
            if(!(golf !== oscar)) { _fun00012_ip = 222; continue _fun00011 }
 61:
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = verify.bind(zulu)(golf);
            golf = golf.ComponentType;
            golf = golf.SECTION;
            if(!(golf !== oscar)) { _fun00012_ip = 164; continue _fun00011 }
 94:
            golf = _closure1_slot0;
            report = _closure1_slot2;
            report = report[options];
            report = golf.bind(zulu)(report);
            report = report.ComponentType;
            report = report.CONTAINER;
            if(!(report !== oscar)) { _fun00012_ip = 129; continue _fun00011 }
 127:
            return zulu;
 129:
            oscar = mike.components;
            report = oscar.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            report = report.bind(oscar)(zulu);
            zulu = null;
            oscar = zulu != report;
            if(!oscar) { _fun00012_ip = 162; continue _fun00011 }
 159:
            zulu = report;
 162:
            return zulu;
 164:
            zulu = mike.accessory;
            zulu = zulu.id;
            if(!(zulu !== tango)) { _fun00012_ip = 214; continue _fun00011 }
 179:
            report = mike.components;
            tango = report.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = null;
            report = zulu != tango;
            if(!report) { _fun00012_ip = 212; continue _fun00011 }
 209:
            zulu = tango;
 212:
            _fun00012_ip = 220; continue _fun00011;
 214:
            zulu = mike.accessory;
 220:
            return zulu;
 222:
            zulu = mike.components;
            mike = zulu.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = null;
            zulu = entity != mike;
            if(!zulu) { _fun00012_ip = 255; continue _fun00011 }
 252:
            entity = mike;
 255:
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    entity = function(argFoo, argBar, argBaz) { // Original name: transformComponent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            oscar = argBar;
            report = argBaz;
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = report;
            verify = function(argFoo, argBar) { // Original name: getChildComponent
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    golf = _closure2_slot1;
                    report = new Array(1);
                    oscar = 0;
                    options = report;
                    zulu = arraySpread(options, golf, oscar);
                    mike = argBar;
                    report[zulu] = mike;
                    mike = 1;
                    mike = zulu + mike;
                    tango = _closure1_slot10;
                    zulu = _closure2_slot0;
                    mike = undefined;
                    entity = argFoo;
                    mike = tango.bind(mike)(entity, zulu, report);
                    entity = null;
                    zulu = entity == mike;
                    if(zulu) { _fun00016_ip = 70; continue _fun00015 }
 67:
                    entity = mike;
 70:
                    return entity;
                }
            };
            var _closure2_slot3 = verify;
            options = _closure1_slot4;
            golf = mike.type;
            tango = undefined;
            golf = options.bind(tango)(golf);
            if(golf) { _fun00014_ip = 54; continue _fun00013 }
 50:
            golf = null;
            return golf;
 54:
            offset = oscar.includeEmojiSrc;
            var _closure2_slot2 = offset;
            golf = mike.type;
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            options = 2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.ACTION_ROW;
            if(!(oscar !== golf)) { _fun00014_ip = 2707; continue _fun00013 }
 108:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.BUTTON;
            if(!(oscar !== golf)) { _fun00014_ip = 2561; continue _fun00013 }
 144:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.STRING_SELECT;
            if(!(oscar !== golf)) { _fun00014_ip = 2373; continue _fun00013 }
 180:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.TEXT_INPUT;
            if(!(oscar !== golf)) { _fun00014_ip = 2244; continue _fun00013 }
 216:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.USER_SELECT;
            if(!(oscar !== golf)) { _fun00014_ip = 2069; continue _fun00013 }
 252:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.ROLE_SELECT;
            if(!(oscar !== golf)) { _fun00014_ip = 1894; continue _fun00013 }
 288:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.MENTIONABLE_SELECT;
            if(!(oscar !== golf)) { _fun00014_ip = 1719; continue _fun00013 }
 324:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.CHANNEL_SELECT;
            if(!(oscar !== golf)) { _fun00014_ip = 1533; continue _fun00013 }
 360:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.SECTION;
            if(!(oscar !== golf)) { _fun00014_ip = 1372; continue _fun00013 }
 396:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.TEXT_DISPLAY;
            if(!(oscar !== golf)) { _fun00014_ip = 1313; continue _fun00013 }
 432:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.THUMBNAIL;
            if(!(oscar !== golf)) { _fun00014_ip = 1209; continue _fun00013 }
 468:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.MEDIA_GALLERY;
            if(!(oscar !== golf)) { _fun00014_ip = 1133; continue _fun00013 }
 504:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.FILE;
            if(!(oscar !== golf)) { _fun00014_ip = 1020; continue _fun00013 }
 540:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.SEPARATOR;
            if(!(oscar !== golf)) { _fun00014_ip = 905; continue _fun00013 }
 576:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.CONTENT_INVENTORY_ENTRY;
            if(!(oscar !== golf)) { _fun00014_ip = 826; continue _fun00013 }
 612:
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.CONTAINER;
            if(!(oscar !== golf)) { _fun00014_ip = 649; continue _fun00013 }
 645:
            oscar = null;
            return oscar;
 649:
            yankee = mike.components;
            golf = yankee.map;
            oscar = function(argFoo, argBar) {
                tango = _closure2_slot3;
                zulu = undefined;
                mike = argFoo;
                entity = argBar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            foxtrot = golf.bind(yankee)(oscar);
            golf = foxtrot.filter;
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 5;
            oscar = yankee[oscar];
            oscar = romeo.bind(tango)(oscar);
            oscar = oscar.isNotNullish;
            golf = golf.bind(foxtrot)(oscar);
            oscar = {};
            yankee = yankee[options];
            yankee = romeo.bind(tango)(yankee);
            yankee = yankee.ComponentType;
            yankee = yankee.CONTAINER;
            oscar['type'] = yankee;
            yankee = _closure1_slot11;
            yankee = yankee.bind(tango)(report);
            oscar['id'] = yankee;
            romeo = mike.accent_color;
            yankee = null;
            romeo = yankee != romeo;
            yankee = undefined;
            if(!romeo) { _fun00014_ip = 803; continue _fun00013 }
 763:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            romeo = 8;
            romeo = backup[romeo];
            kilo = foxtrot.bind(tango)(romeo);
            backup = kilo.int2hsl;
            foxtrot = mike.accent_color;
            romeo = false;
            yankee = backup.bind(kilo)(foxtrot, romeo);
 803:
            oscar['accentColor'] = yankee;
            yankee = mike.spoiler;
            oscar['spoiler'] = yankee;
            oscar['components'] = golf;
            return oscar;
 826:
            golf = mike.content_inventory_entry;
            oscar = null;
            golf = oscar == golf;
            if(golf) { _fun00014_ip = 903; continue _fun00013 }
 841:
            golf = {};
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[options];
            yankee = romeo.bind(tango)(yankee);
            yankee = yankee.ComponentType;
            yankee = yankee.CONTENT_INVENTORY_ENTRY;
            golf['type'] = yankee;
            yankee = _closure1_slot11;
            yankee = yankee.bind(tango)(report);
            golf['id'] = yankee;
            yankee = mike.content_inventory_entry;
            golf['contentInventoryEntry'] = yankee;
            oscar = golf;
 903:
            return oscar;
 905:
            oscar = {};
            yankee = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = yankee.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.SEPARATOR;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            romeo = mike.divider;
            yankee = null;
            golf = yankee == romeo;
            if(golf) { _fun00014_ip = 971; continue _fun00013 }
 968:
            golf = romeo;
 971:
            oscar['divider'] = golf;
            golf = mike.spacing;
            if(!(yankee == golf)) { _fun00014_ip = 1014; continue _fun00013 }
 985:
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[options];
            yankee = romeo.bind(tango)(yankee);
            yankee = yankee.SeparatorSpacingSize;
            golf = yankee.SMALL;
 1014:
            oscar['spacing'] = golf;
            return oscar;
 1020:
            oscar = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = romeo[options];
            golf = yankee.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.FILE;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = 7;
            golf = romeo[golf];
            romeo = yankee.bind(tango)(golf);
            yankee = romeo.toUnfurledMediaItem;
            golf = mike.file;
            golf = yankee.bind(romeo)(golf);
            oscar['file'] = golf;
            golf = mike.name;
            oscar['name'] = golf;
            golf = mike.size;
            oscar['size'] = golf;
            golf = mike.spoiler;
            oscar['spoiler'] = golf;
            return oscar;
 1133:
            oscar = {};
            yankee = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = yankee.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.MEDIA_GALLERY;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            romeo = mike.items;
            yankee = romeo.map;
            golf = function(argFoo) {
                mike = argFoo;
                entity = {};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 7;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.toUnfurledMediaItem;
                zulu = mike.media;
                zulu = tango.bind(report)(zulu);
                entity['media'] = zulu;
                zulu = mike.description;
                entity['description'] = zulu;
                mike = mike.spoiler;
                entity['spoiler'] = mike;
                return entity;
            };
            golf = yankee.bind(romeo)(golf);
            oscar['items'] = golf;
            return oscar;
 1209:
            oscar = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = romeo[options];
            golf = yankee.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.THUMBNAIL;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = 7;
            golf = romeo[golf];
            romeo = yankee.bind(tango)(golf);
            yankee = romeo.toUnfurledMediaItem;
            golf = mike.media;
            golf = yankee.bind(romeo)(golf);
            oscar['media'] = golf;
            golf = mike.description;
            oscar['description'] = golf;
            golf = mike.spoiler;
            oscar['spoiler'] = golf;
            return oscar;
 1313:
            oscar = {};
            yankee = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = yankee.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.TEXT_DISPLAY;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = mike.content;
            oscar['content'] = golf;
            return oscar;
 1372:
            yankee = mike.components;
            golf = yankee.map;
            oscar = function(argFoo, argBar) {
                tango = _closure2_slot3;
                zulu = undefined;
                mike = argFoo;
                entity = argBar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            yankee = golf.bind(yankee)(oscar);
            golf = yankee.filter;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 5;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(tango)(oscar);
            oscar = oscar.isNotNullish;
            yankee = golf.bind(yankee)(oscar);
            golf = mike.accessory;
            oscar = yankee.length;
            verify = verify.bind(tango)(golf, oscar);
            foxtrot = yankee.length;
            romeo = null;
            golf = 0;
            oscar = null;
            if(!(golf !== foxtrot)) { _fun00014_ip = 1531; continue _fun00013 }
 1461:
            golf = romeo == verify;
            oscar = null;
            if(golf) { _fun00014_ip = 1531; continue _fun00013 }
 1470:
            golf = {};
            foxtrot = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[options];
            romeo = foxtrot.bind(tango)(romeo);
            romeo = romeo.ComponentType;
            romeo = romeo.SECTION;
            golf['type'] = romeo;
            romeo = _closure1_slot11;
            romeo = romeo.bind(tango)(report);
            golf['id'] = romeo;
            golf['components'] = yankee;
            golf['accessory'] = verify;
            oscar = golf;
 1531:
            return oscar;
 1533:
            oscar = {};
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = verify.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.CHANNEL_SELECT;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = mike.custom_id;
            oscar['customId'] = golf;
            golf = mike.disabled;
            oscar['disabled'] = golf;
            golf = mike.placeholder;
            verify = null;
            if(!(verify == golf)) { _fun00014_ip = 1668; continue _fun00013 }
 1613:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = backup[verify];
            verify = foxtrot.bind(tango)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golf = yankee.bind(romeo)(verify);
 1668:
            oscar['placeholder'] = golf;
            golf = mike.min_values;
            oscar['minValues'] = golf;
            golf = mike.max_values;
            oscar['maxValues'] = golf;
            golf = mike.channel_types;
            oscar['channelTypes'] = golf;
            golf = mike.default_values;
            oscar['defaultValues'] = golf;
            return oscar;
 1719:
            oscar = {};
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = verify.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.MENTIONABLE_SELECT;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = mike.custom_id;
            oscar['customId'] = golf;
            golf = mike.disabled;
            oscar['disabled'] = golf;
            golf = mike.placeholder;
            verify = null;
            if(!(verify == golf)) { _fun00014_ip = 1854; continue _fun00013 }
 1799:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = backup[verify];
            verify = foxtrot.bind(tango)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golf = yankee.bind(romeo)(verify);
 1854:
            oscar['placeholder'] = golf;
            golf = mike.min_values;
            oscar['minValues'] = golf;
            golf = mike.max_values;
            oscar['maxValues'] = golf;
            golf = mike.default_values;
            oscar['defaultValues'] = golf;
            return oscar;
 1894:
            oscar = {};
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = verify.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.ROLE_SELECT;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = mike.custom_id;
            oscar['customId'] = golf;
            golf = mike.disabled;
            oscar['disabled'] = golf;
            golf = mike.placeholder;
            verify = null;
            if(!(verify == golf)) { _fun00014_ip = 2029; continue _fun00013 }
 1974:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = backup[verify];
            verify = foxtrot.bind(tango)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golf = yankee.bind(romeo)(verify);
 2029:
            oscar['placeholder'] = golf;
            golf = mike.min_values;
            oscar['minValues'] = golf;
            golf = mike.max_values;
            oscar['maxValues'] = golf;
            golf = mike.default_values;
            oscar['defaultValues'] = golf;
            return oscar;
 2069:
            oscar = {};
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = verify.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.USER_SELECT;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = mike.custom_id;
            oscar['customId'] = golf;
            golf = mike.disabled;
            oscar['disabled'] = golf;
            golf = mike.placeholder;
            verify = null;
            if(!(verify == golf)) { _fun00014_ip = 2204; continue _fun00013 }
 2149:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = backup[verify];
            verify = foxtrot.bind(tango)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golf = yankee.bind(romeo)(verify);
 2204:
            oscar['placeholder'] = golf;
            golf = mike.min_values;
            oscar['minValues'] = golf;
            golf = mike.max_values;
            oscar['maxValues'] = golf;
            golf = mike.default_values;
            oscar['defaultValues'] = golf;
            return oscar;
 2244:
            oscar = {};
            golf = mike.type;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = mike.style;
            oscar['style'] = golf;
            golf = mike.custom_id;
            oscar['customId'] = golf;
            golf = mike.label;
            oscar['label'] = golf;
            golf = mike.value;
            oscar['value'] = golf;
            golf = mike.placeholder;
            oscar['placeholder'] = golf;
            golf = mike.disabled;
            oscar['disabled'] = golf;
            verify = mike.required;
            golf = null;
            golf = golf != verify;
            if(!golf) { _fun00014_ip = 2344; continue _fun00013 }
 2341:
            golf = verify;
 2344:
            oscar['required'] = golf;
            golf = mike.min_length;
            oscar['minLength'] = golf;
            golf = mike.max_length;
            oscar['maxLength'] = golf;
            return oscar;
 2373:
            oscar = {};
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[options];
            golf = verify.bind(tango)(golf);
            golf = golf.ComponentType;
            golf = golf.STRING_SELECT;
            oscar['type'] = golf;
            golf = _closure1_slot11;
            golf = golf.bind(tango)(report);
            oscar['id'] = golf;
            golf = mike.custom_id;
            oscar['customId'] = golf;
            golf = mike.disabled;
            oscar['disabled'] = golf;
            yankee = mike.options;
            verify = yankee.map;
            golf = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = argFoo;
                    entity = {};
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 6;
                    mike = oscar[mike];
                    oscar = undefined;
                    mike = report.bind(oscar)(mike);
                    mike = mike.SelectOptionType;
                    mike = mike.STRING;
                    entity['type'] = mike;
                    mike = zulu.label;
                    entity['label'] = mike;
                    mike = zulu.value;
                    entity['value'] = mike;
                    mike = zulu.default;
                    entity['default'] = mike;
                    mike = zulu.description;
                    entity['description'] = mike;
                    report = zulu.emoji;
                    mike = null;
                    report = mike != report;
                    mike = undefined;
                    if(!report) { _fun00018_ip = 122; continue _fun00017 }
 99:
                    report = _closure1_slot3;
                    tango = zulu.emoji;
                    zulu = _closure2_slot2;
                    mike = report.bind(oscar)(tango, zulu);
 122:
                    entity['emoji'] = mike;
                    return entity;
                }
            };
            golf = verify.bind(yankee)(golf);
            oscar['options'] = golf;
            golf = mike.placeholder;
            verify = null;
            if(!(verify == golf)) { _fun00014_ip = 2532; continue _fun00013 }
 2477:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = backup[verify];
            verify = foxtrot.bind(tango)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golf = yankee.bind(romeo)(verify);
 2532:
            oscar['placeholder'] = golf;
            golf = mike.min_values;
            oscar['minValues'] = golf;
            golf = mike.max_values;
            oscar['maxValues'] = golf;
            return oscar;
 2561:
            golf = mike.emoji;
            oscar = null;
            oscar = oscar != golf;
            golf = undefined;
            if(!oscar) { _fun00014_ip = 2594; continue _fun00013 }
 2578:
            verify = _closure1_slot3;
            oscar = mike.emoji;
            golf = verify.bind(tango)(oscar, offset);
 2594:
            oscar = {};
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[options];
            verify = offset.bind(tango)(verify);
            verify = verify.ComponentType;
            verify = verify.BUTTON;
            oscar['type'] = verify;
            verify = _closure1_slot11;
            verify = verify.bind(tango)(report);
            oscar['id'] = verify;
            verify = mike.custom_id;
            oscar['customId'] = verify;
            verify = mike.style;
            oscar['style'] = verify;
            verify = mike.disabled;
            oscar['disabled'] = verify;
            verify = mike.url;
            oscar['url'] = verify;
            verify = mike.label;
            oscar['label'] = verify;
            oscar['emoji'] = golf;
            golf = mike.sku_id;
            oscar['skuId'] = golf;
            return oscar;
 2707:
            oscar = mike.components;
            mike = oscar.map;
            entity = function(argFoo, argBar) {
                tango = _closure2_slot3;
                zulu = undefined;
                mike = argFoo;
                entity = argBar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            verify = mike.bind(oscar)(entity);
            mike = verify.filter;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 5;
            entity = oscar[entity];
            entity = golf.bind(tango)(entity);
            entity = entity.isNotNullish;
            mike = mike.bind(verify)(entity);
            entity = {};
            oscar = oscar[options];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.ComponentType;
            oscar = oscar.ACTION_ROW;
            entity['type'] = oscar;
            zulu = _closure1_slot11;
            zulu = zulu.bind(tango)(report);
            entity['id'] = zulu;
            entity['components'] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: indicesToId
        report = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.asComponentId;
        tango = report.join;
        entity = ',';
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = function(argFoo, argBar) { // Original name: getEmoji
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscar = argFoo;
            entity = {};
            mike = oscar.id;
            entity['id'] = mike;
            mike = oscar.name;
            entity['name'] = mike;
            mike = oscar.animated;
            entity['animated'] = mike;
            report = undefined;
            zulu = argBar;
            mike = undefined;
            if(!zulu) { _fun00020_ip = 127; continue _fun00019 }
 44:
            tango = oscar.id;
            zulu = null;
            zulu = zulu != tango;
            mike = undefined;
            if(!zulu) { _fun00020_ip = 127; continue _fun00019 }
 60:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 0;
            zulu = golf[zulu];
            report = tango.bind(report)(zulu);
            tango = report.getEmojiURL;
            zulu = {};
            golf = oscar.id;
            zulu['id'] = golf;
            oscar = oscar.animated;
            if(oscar) { _fun00020_ip = 110; continue _fun00019 }
 108:
            oscar = false;
 110:
            zulu['animated'] = oscar;
            oscar = 48;
            zulu['size'] = oscar;
            mike = tango.bind(report)(zulu);
 127:
            entity['src'] = mike;
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: canShowComponent
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = 2;
            mike = mike[oscar];
            zulu = undefined;
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.ACTION_ROW;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 47:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.BUTTON;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 83:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.STRING_SELECT;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 119:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.TEXT_INPUT;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 155:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.USER_SELECT;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 191:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.ROLE_SELECT;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 227:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.MENTIONABLE_SELECT;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 263:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.CHANNEL_SELECT;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 299:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.SECTION;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 335:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.TEXT_DISPLAY;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 371:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.THUMBNAIL;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 407:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.MEDIA_GALLERY;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 443:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.FILE;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 479:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.SEPARATOR;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 512:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.CONTAINER;
            if(!(mike !== tango)) { _fun00022_ip = 619; continue _fun00021 }
 545:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.ComponentType;
            mike = mike.CONTENT_INVENTORY_ENTRY;
            if(!(mike !== tango)) { _fun00022_ip = 580; continue _fun00021 }
 578:
            return zulu;
 580:
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 4;
            entity = tango[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.isContentInventoryEmbedEnabled;
            entity = 'canShowComponent';
            entity = mike.bind(zulu)(entity);
            return entity;
 619:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = 9;
    oscar = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/interaction_components/InteractionComponentUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo, argBar, argBaz) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            mike = argFoo;
            report = argBar;
            tango = null;
            entity = tango == mike;
            golf = undefined;
            oscar = undefined;
            if(entity) { _fun00024_ip = 30; continue _fun00023 }
 19:
            entity = mike.data;
            oscar = entity.interactionType;
 30:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            entity = options.bind(golf)(entity);
            entity = entity.InteractionTypes;
            entity = entity.MESSAGE_COMPONENT;
            verify = null;
            if(!(oscar === entity)) { _fun00024_ip = 134; continue _fun00023 }
 71:
            entity = tango == mike;
            oscar = undefined;
            if(entity) { _fun00024_ip = 85; continue _fun00023 }
 80:
            oscar = mike.state;
 85:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 3;
            entity = offset[entity];
            entity = options.bind(golf)(entity);
            entity = entity.InteractionState;
            entity = entity.FAILED;
            verify = null;
            if(!(oscar === entity)) { _fun00024_ip = 134; continue _fun00023 }
 123:
            entity = mike.data;
            verify = entity.componentId;
 134:
            oscar = tango != verify;
            entity = null;
            if(!oscar) { _fun00024_ip = 156; continue _fun00023 }
 143:
            options = _closure1_slot9;
            oscar = argBaz;
            entity = options.bind(golf)(oscar, verify);
 156:
            if(!(tango == entity)) { _fun00024_ip = 162; continue _fun00023 }
 160:
            return golf;
 162:
            oscar = tango == report;
            entity = undefined;
            if(oscar) { _fun00024_ip = 177; continue _fun00023 }
 171:
            entity = report.interactionError;
 177:
            if(!(tango == entity)) { _fun00024_ip = 324; continue _fun00023 }
 184:
            report = tango == mike;
            tango = undefined;
            if(report) { _fun00024_ip = 199; continue _fun00023 }
 193:
            tango = mike.errorCode;
 199:
            mike = 429;
            if(!(mike !== tango)) { _fun00024_ip = 266; continue _fun00023 }
 209:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            mike = 1;
            tango = options[mike];
            tango = oscar.bind(golf)(tango);
            report = tango.intl;
            tango = report.string;
            mike = options[mike];
            mike = oscar.bind(golf)(mike);
            mike = mike.t;
            mike = mike.VCsUJi;
            mike = tango.bind(report)(mike);
            _fun00024_ip = 321; continue _fun00023;
 266:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 1;
            tango = options[zulu];
            tango = oscar.bind(golf)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.t;
            zulu = zulu.fitPBQ;
            mike = tango.bind(report)(zulu);
 321:
            entity = mike;
 324:
            return entity;
        }
    };
    zulu['getLayoutComponentErrorText'] = oscar;
    zulu['flattenComponents'] = report;
    zulu['findChildComponent'] = tango;
    tango = function(argFoo) { // Original name: getAllTextDisplayContent
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tango = _closure1_slot7;
            zulu = undefined;
            mike = argFoo;
            tango = tango.bind(zulu)(mike);
            mike = global;
            zulu = mike.Object;
            mike = zulu.values;
            tango = mike.bind(zulu)(tango);
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 2;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.ComponentType;
                entity = entity.TEXT_DISPLAY;
                entity = mike === entity;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.content;
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.join;
            entity = '\n';
            mike = mike.bind(zulu)(entity);
            zulu = '';
            entity = null;
            if(!(zulu !== mike)) { _fun00026_ip = 94; continue _fun00025 }
 91:
            entity = mike;
 94:
            return entity;
        }
    };
    zulu['getAllTextDisplayContent'] = tango;
    mike = function(argFoo) { // Original name: transformComponents
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tango = argFoo;
            mike = arguments[1];
            zulu = undefined;
            if(!(mike === zulu)) { _fun00028_ip = 16; continue _fun00027 }
 14:
            mike = {};
 16:
            var _closure2_slot0 = mike;
            zulu = tango.map;
            mike = function(argFoo, argBar) {
                report = _closure1_slot10;
                tango = _closure2_slot0;
                zulu = new Array(1);
                entity = argBar;
                zulu[0] = entity;
                mike = undefined;
                entity = argFoo;
                entity = report.bind(mike)(entity, tango, zulu);
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['transformComponents'] = mike;
    return entity;
})();