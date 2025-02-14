// app/modules/main_tabs_v2/native/tabs/gravity/useGravityMentionMessages.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun117359: for(var _fun117359_ip = 0; ; ) switch(_fun117359_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun117359_ip = 46; continue _fun117359 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun117359_ip = 55; continue _fun117359 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun117359_ip = 345; continue _fun117359 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun117359_ip = 323; continue _fun117359 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun117359_ip = 283; continue _fun117359 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun117359_ip = 270; continue _fun117359 }
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
            if(!golf) { _fun117359_ip = 163; continue _fun117359 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun117359_ip = 179; continue _fun117359 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun117359_ip = 249; continue _fun117359 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun117359_ip = 249; continue _fun117359 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun117359_ip = 234; continue _fun117359 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun117359_ip = 247; continue _fun117359 }
 234:
            verify = _closure1_slot10;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun117359_ip = 265; continue _fun117359;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun117359_ip = 283; continue _fun117359;
 270:
            golf = _closure1_slot10;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun117359_ip = 323; continue _fun117359 }
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
            if(!tango) { _fun117359_ip = 330; continue _fun117359 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun117360: for(var _fun117360_ip = 0; ; ) switch(_fun117360_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun117360_ip = 56; continue _fun117360 }
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
                    _fun117360_ip = 67; continue _fun117360;
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
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun117361: for(var _fun117361_ip = 0; ; ) switch(_fun117361_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun117361_ip = 23; continue _fun117361 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun117361_ip = 33; continue _fun117361 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun117361_ip = 70; continue _fun117361 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun117361_ip = 55; continue _fun117361 }
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    report = golf[mike];
    mike = argCorge;
    mike = mike.bind(entity)(report);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    report = golf[mike];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/gravity/useGravityMentionMessages.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useMentionMessageItems
        mike = argFoo;
        backup = mike.isFocused;
        var _closure2_slot0 = backup;
        options = mike.mergedNotificationsEnabled;
        var _closure2_slot1 = options;
        zulu = _closure1_slot0;
        output = _closure1_slot2;
        mike = 6;
        report = output[mike];
        offset = undefined;
        verify = zulu.bind(offset)(report);
        golf = verify.useStateFromStoresObject;
        report = _closure1_slot6;
        oscar = new Array(1);
        oscar[0] = report;
        report = function() {
            entity = {};
            mike = _closure1_slot6;
            zulu = mike.getMentions;
            zulu = zulu.bind(mike)();
            entity['messages'] = zulu;
            zulu = mike.loading;
            entity['loading'] = zulu;
            zulu = mike.hasLoadedEver;
            entity['hasLoadedEver'] = zulu;
            zulu = mike.everyoneFilter;
            entity['everyoneFilter'] = zulu;
            mike = mike.roleFilter;
            entity['roleFilter'] = mike;
            return entity;
        };
        oscar = golf.bind(verify)(oscar, report);
        report = oscar.messages;
        var _closure2_slot2 = report;
        foxtrot = oscar.hasLoadedEver;
        var _closure2_slot3 = foxtrot;
        golf = oscar.roleFilter;
        var _closure2_slot4 = golf;
        verify = oscar.everyoneFilter;
        var _closure2_slot5 = verify;
        oscar = output[mike];
        kilo = zulu.bind(offset)(oscar);
        romeo = kilo.useStateFromStoresArray;
        oscar = _closure1_slot8;
        yankee = new Array(2);
        yankee[0] = oscar;
        oscar = _closure1_slot7;
        yankee[1] = oscar;
        oscar = new Array(2);
        oscar[0] = report;
        oscar[1] = options;
        report = function() {
            _fun117364: for(var _fun117364_ip = 0; ; ) switch(_fun117364_ip) {
 0:
                entity = _closure2_slot2;
                offset = null;
                if(!(offset != entity)) { _fun117364_ip = 242; continue _fun117364 }
 16:
                entity = _closure2_slot1;
                if(!entity) { _fun117364_ip = 242; continue _fun117364 }
 26:
                entity = new Array(0);
                zulu = _closure1_slot9;
                mike = _closure2_slot2;
                options = undefined;
                golf = zulu.bind(options)(mike);
                zulu = golf.bind(options)();
                mike = zulu.done;
                oscar = 7;
                report = 0;
                tango = zulu;
                zulu = undefined;
                if(mike) { _fun117364_ip = 240; continue _fun117364 }
 73:
                romeo = tango.value;
                foxtrot = _closure1_slot8;
                yankee = foxtrot.getTrackedAckMessageId;
                mike = romeo.channel_id;
                backup = yankee.bind(foxtrot)(mike);
                yankee = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[oscar];
                foxtrot = yankee.bind(options)(mike);
                yankee = foxtrot.compare;
                mike = romeo.id;
                mike = yankee.bind(foxtrot)(mike, backup);
                if(!(!(mike <= report))) { _fun117364_ip = 222; continue _fun117364 }
 136:
                foxtrot = _closure1_slot7;
                yankee = foxtrot.getChannel;
                mike = romeo.getChannelId;
                mike = mike.bind(romeo)();
                mike = yankee.bind(foxtrot)(mike);
                yankee = offset == mike;
                if(yankee) { _fun117364_ip = 177; continue _fun117364 }
 167:
                foxtrot = mike.isArchivedThread;
                yankee = foxtrot.bind(mike)();
 177:
                if(yankee) { _fun117364_ip = 190; continue _fun117364 }
 180:
                foxtrot = mike.isGroupDM;
                yankee = foxtrot.bind(mike)();
 190:
                if(yankee) { _fun117364_ip = 203; continue _fun117364 }
 193:
                foxtrot = mike.isDM;
                yankee = foxtrot.bind(mike)();
 203:
                zulu = mike;
                if(yankee) { _fun117364_ip = 222; continue _fun117364 }
 209:
                yankee = entity.push;
                yankee = yankee.bind(entity)(romeo);
                zulu = mike;
 222:
                yankee = golf.bind(options)();
                mike = yankee.done;
                tango = yankee;
                if(!mike) { _fun117364_ip = 73; continue _fun117364 }
 240:
                return entity;
 242:
                entity = new Array(0);
                return entity;
            }
        };
        kilo = romeo.bind(kilo)(yankee, report, oscar);
        var _closure2_slot6 = kilo;
        mike = output[mike];
        oscar = zulu.bind(offset)(mike);
        report = oscar.useStateFromStores;
        mike = _closure1_slot5;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            mike = _closure1_slot5;
            entity = mike.getVersion;
            entity = entity.bind(mike)();
            return entity;
        };
        sizing = report.bind(oscar)(zulu, mike);
        var _closure2_slot7 = sizing;
        oscar = _closure1_slot4;
        zulu = oscar.useState;
        mike = new Array(0);
        report = zulu.bind(oscar)(mike);
        zulu = _closure1_slot3;
        mike = 2;
        report = zulu.bind(offset)(report, mike);
        mike = 0;
        zulu = report[mike];
        var _closure2_slot8 = zulu;
        mike = 1;
        mike = report[mike];
        var _closure2_slot9 = mike;
        yankee = oscar.useMemo;
        report = new Array(2);
        report[0] = zulu;
        report[1] = kilo;
        mike = function() {
            report = _closure2_slot8;
            tango = report.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            var _closure3_slot0 = zulu;
            zulu = _closure2_slot6;
            mike = zulu.filter;
            entity = function(argFoo) {
                zulu = _closure3_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = yankee.bind(oscar)(mike, report);
        yankee = _closure1_slot1;
        report = 8;
        tango = output[report];
        tango = yankee.bind(offset)(tango);
        romeo = tango.bind(offset)(backup);
        var _closure2_slot10 = romeo;
        tango = output[report];
        tango = yankee.bind(offset)(tango);
        tango = tango.bind(offset)(sizing);
        var _closure2_slot11 = tango;
        report = output[report];
        report = yankee.bind(offset)(report);
        yankee = report.bind(offset)(foxtrot);
        var _closure2_slot12 = yankee;
        offset = oscar.useEffect;
        report = new Array(7);
        report[0] = sizing;
        report[1] = kilo;
        report[2] = backup;
        report[3] = foxtrot;
        report[4] = romeo;
        report[5] = yankee;
        report[6] = tango;
        tango = function() {
            _fun117369: for(var _fun117369_ip = 0; ; ) switch(_fun117369_ip) {
 0:
                zulu = _closure2_slot10;
                mike = _closure2_slot0;
                mike = zulu === mike;
                if(!mike) { _fun117369_ip = 30; continue _fun117369 }
 18:
                tango = _closure2_slot11;
                zulu = _closure2_slot7;
                mike = tango === zulu;
 30:
                if(!mike) { _fun117369_ip = 45; continue _fun117369 }
 33:
                tango = _closure2_slot12;
                zulu = _closure2_slot3;
                mike = tango === zulu;
 45:
                if(mike) { _fun117369_ip = 63; continue _fun117369 }
 48:
                zulu = _closure2_slot9;
                mike = _closure2_slot6;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 63:
                entity = undefined;
                return entity;
            }
        };
        tango = offset.bind(oscar)(tango, report);
        report = oscar.useEffect;
        tango = new Array(3);
        tango[0] = verify;
        tango[1] = options;
        tango[2] = golf;
        entity = function() {
            _fun117370: for(var _fun117370_ip = 0; ; ) switch(_fun117370_ip) {
 0:
                mike = _closure2_slot1;
                if(!mike) { _fun117370_ip = 55; continue _fun117370 }
 10:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.gravityFetchMentions;
                mike = _closure2_slot4;
                entity = _closure2_slot5;
                entity = zulu.bind(tango)(mike, entity);
 55:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(oscar)(entity, tango);
        entity = {};
        entity['displayUnreadMentionMessages'] = zulu;
        entity['newUnreadMentionMessages'] = mike;
        return entity;
    };
    zulu['default'] = tango;
    zulu['MAX_NUM_MENTIONS_SHOWN'] = mike;
    return entity;
})();