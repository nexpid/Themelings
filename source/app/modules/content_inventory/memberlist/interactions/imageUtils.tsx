// app/modules/content_inventory/memberlist/interactions/imageUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun115115: for(var _fun115115_ip = 0; ; ) switch(_fun115115_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun115115_ip = 46; continue _fun115115 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun115115_ip = 55; continue _fun115115 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun115115_ip = 345; continue _fun115115 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun115115_ip = 323; continue _fun115115 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun115115_ip = 283; continue _fun115115 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun115115_ip = 270; continue _fun115115 }
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
            if(!golf) { _fun115115_ip = 163; continue _fun115115 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun115115_ip = 179; continue _fun115115 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun115115_ip = 249; continue _fun115115 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun115115_ip = 249; continue _fun115115 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun115115_ip = 234; continue _fun115115 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun115115_ip = 247; continue _fun115115 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun115115_ip = 265; continue _fun115115;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun115115_ip = 283; continue _fun115115;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun115115_ip = 323; continue _fun115115 }
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
            if(!tango) { _fun115115_ip = 330; continue _fun115115 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun115116: for(var _fun115116_ip = 0; ; ) switch(_fun115116_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun115116_ip = 56; continue _fun115116 }
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
                    _fun115116_ip = 67; continue _fun115116;
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
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun115117: for(var _fun115117_ip = 0; ; ) switch(_fun115117_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun115117_ip = 23; continue _fun115117 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun115117_ip = 33; continue _fun115117 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun115117_ip = 70; continue _fun115117 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun115117_ip = 55; continue _fun115117 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.badgeIconPosition;
    var _closure1_slot2 = golf;
    golf = tango.badgeTextPosition;
    var _closure1_slot3 = golf;
    golf = tango.fontFamily;
    var _closure1_slot4 = golf;
    golf = tango.fontWeight;
    var _closure1_slot5 = golf;
    golf = tango.spaceBetweenBadgeIconAndText;
    var _closure1_slot6 = golf;
    tango = tango.spaceBetweenBadges;
    var _closure1_slot7 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/content_inventory/memberlist/interactions/imageUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: drawBadges
        _fun115118: for(var _fun115118_ip = 0; ; ) switch(_fun115118_ip) {
 0:
            entity = argFoo;
            romeo = entity.canvas;
            zulu = entity.badges;
            yankee = entity.startPosition;
            offset = entity.maxWidth;
            tango = romeo.setFont;
            mike = {};
            entity = 12;
            mike['size'] = entity;
            entity = _closure1_slot4;
            mike['family'] = entity;
            entity = _closure1_slot5;
            mike['weight'] = entity;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            entity = 1;
            report = report[entity];
            entity = undefined;
            report = oscar.bind(entity)(report);
            report = report.TextTruncationMethod;
            report = report.None;
            mike['truncate'] = report;
            mike = tango.bind(romeo)(mike);
            mike = _closure1_slot8;
            options = mike.bind(entity)(zulu);
            zulu = options.bind(entity)();
            mike = zulu.done;
            golf = true;
            oscar = 0.6;
            report = null;
            tango = undefined;
            if(mike) { _fun115118_ip = 323; continue _fun115118 }
 147:
            mike = zulu.value;
            sizing = mike.iconPath;
            backup = mike.text;
            output = yankee;
            if(!(report != tango)) { _fun115118_ip = 192; continue _fun115118 }
 170:
            foxtrot = tango.w;
            mike = tango.x;
            foxtrot = foxtrot + mike;
            mike = _closure1_slot7;
            output = foxtrot + mike;
 192:
            if(!(report == tango)) { _fun115118_ip = 206; continue _fun115118 }
 196:
            mike = _closure1_slot6;
            kilo = yankee + mike;
            _fun115118_ip = 236; continue _fun115118;
 206:
            foxtrot = tango.w;
            mike = tango.x;
            foxtrot = foxtrot + mike;
            mike = _closure1_slot7;
            foxtrot = foxtrot + mike;
            mike = _closure1_slot6;
            kilo = foxtrot + mike;
 236:
            foxtrot = romeo.drawPath;
            mike = {};
            mike['x'] = output;
            output = _closure1_slot2;
            mike['y'] = output;
            control = romeo;
            source = sizing;
            update = mike;
            echo = true;
            result = oscar;
            mike = control[foxtrot](source, update, echo, result, output);
            foxtrot = romeo.drawText;
            mike = {};
            mike['x'] = kilo;
            kilo = _closure1_slot3;
            mike['y'] = kilo;
            mike['w'] = offset;
            tango = foxtrot.bind(romeo)(backup, mike, golf);
            foxtrot = options.bind(entity)();
            mike = foxtrot.done;
            zulu = foxtrot;
            if(!mike) { _fun115118_ip = 147; continue _fun115118 }
 323:
            return entity;
        }
    };
    zulu['drawBadges'] = tango;
    mike = function(argFoo) { // Original name: drawAvatars
        _fun115119: for(var _fun115119_ip = 0; ; ) switch(_fun115119_ip) {
 0:
            entity = argFoo;
            backup = entity.canvas;
            foxtrot = entity.avatarSrcs;
            mike = entity.position;
            romeo = mike.x;
            yankee = mike.y;
            offset = entity.avatarImageSize;
            entity = foxtrot.length;
            verify = 0;
            mike = verify < entity;
            options = 8;
            oscar = 1;
            entity = undefined;
            report = 50;
            tango = 2;
            zulu = true;
            if(!mike) { _fun115119_ip = 281; continue _fun115119 }
 72:
            mike = foxtrot.length;
            mike = mike - oscar;
            if(!(verify < mike)) { _fun115119_ip = 154; continue _fun115119 }
 85:
            sizing = backup.clipRoundedRect;
            kilo = {};
            output = verify + oscar;
            mike = offset - options;
            mike = output * mike;
            mike = romeo + mike;
            mike = mike - tango;
            kilo['x'] = mike;
            mike = yankee - oscar;
            kilo['y'] = mike;
            mike = offset + tango;
            kilo['w'] = mike;
            mike = offset + tango;
            kilo['h'] = mike;
            mike = offset / tango;
            mike = sizing.bind(backup)(kilo, mike, zulu);
 154:
            result = backup.drawRoundedImage;
            output = foxtrot[verify];
            sizing = {};
            mike = offset - options;
            mike = verify * mike;
            mike = romeo + mike;
            sizing['x'] = mike;
            sizing['y'] = yankee;
            kilo = {};
            kilo['w'] = offset;
            kilo['h'] = offset;
            mike = {};
            update = _closure1_slot0;
            echo = _closure1_slot1;
            echo = echo[oscar];
            echo = update.bind(entity)(echo);
            echo = echo.FillMode;
            echo = echo.Cover;
            mike['fillMode'] = echo;
            record = backup;
            config = output;
            sequence = sizing;
            vacuum = kilo;
            control = report;
            source = mike;
            mike = record[result](config, sequence, vacuum, control, source, update);
            mike = backup.restoreContext;
            mike = mike.bind(backup)();
            verify = verify + 1;
            mike = foxtrot.length;
            if(verify < mike) { _fun115119_ip = 72; continue _fun115119 }
 281:
            return entity;
        }
    };
    zulu['drawAvatars'] = mike;
    return entity;
})();