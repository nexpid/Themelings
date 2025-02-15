// app/modules/channel_list_v2/native/hooks/useViewableChannelListItems.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
            verify = _closure1_slot4;
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
            golf = _closure1_slot4;
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
    var _closure1_slot3 = entity;
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
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/hooks/useViewableChannelListItems.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useViewableChannelListItems
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        entity = 1;
        zulu = golf[entity];
        mike = undefined;
        verify = oscar.bind(mike)(zulu);
        options = verify.useSharedValue;
        zulu = new Array(0);
        zulu = options.bind(verify)(zulu);
        var _closure2_slot0 = zulu;
        entity = golf[entity];
        oscar = oscar.bind(mike)(entity);
        mike = oscar.useSharedValue;
        entity = new Array(0);
        mike = mike.bind(oscar)(entity);
        var _closure2_slot1 = mike;
        entity = {};
        golf = _closure1_slot2;
        oscar = golf.useCallback;
        report = new Array(2);
        report[0] = zulu;
        report[1] = mike;
        tango = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                tango = entity.viewableItems;
                offset = new Array(0);
                report = new Array(0);
                zulu = _closure1_slot3;
                entity = undefined;
                options = zulu.bind(entity)(tango);
                tango = options.bind(entity)();
                zulu = tango.done;
                golf = 'channel';
                oscar = 2;
                if(zulu) { _fun00008_ip = 193; continue _fun00007 }
 53:
                zulu = tango.value;
                verify = zulu.isViewable;
                if(!verify) { _fun00008_ip = 100; continue _fun00007 }
 67:
                romeo = _closure1_slot0;
                yankee = _closure1_slot1;
                yankee = yankee[oscar];
                foxtrot = romeo.bind(entity)(yankee);
                romeo = foxtrot.isReadableItem;
                yankee = zulu.item;
                verify = romeo.bind(foxtrot)(yankee);
 100:
                if(!verify) { _fun00008_ip = 175; continue _fun00007 }
 103:
                yankee = offset.push;
                verify = zulu.item;
                verify = verify.kind;
                if(!(golf !== verify)) { _fun00008_ip = 135; continue _fun00007 }
 122:
                verify = zulu.item;
                verify = verify.threadId;
                _fun00008_ip = 150; continue _fun00007;
 135:
                romeo = zulu.item;
                romeo = romeo.channel;
                verify = romeo.id;
 150:
                verify = yankee.bind(offset)(verify);
                verify = report.push;
                zulu = zulu.item;
                zulu = zulu.index;
                zulu = verify.bind(report)(zulu);
 175:
                verify = options.bind(entity)();
                zulu = verify.done;
                tango = verify;
                if(!zulu) { _fun00008_ip = 53; continue _fun00007 }
 193:
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 3;
                mike = oscar[zulu];
                verify = tango.bind(entity)(mike);
                options = verify.updateSharedValueArrayIfChanged;
                golf = _closure2_slot0;
                golf = options.bind(verify)(golf, offset);
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.updateSharedValueArrayIfChanged;
                mike = _closure2_slot1;
                mike = zulu.bind(tango)(mike, report);
                return entity;
            }
        };
        tango = oscar.bind(golf)(tango, report);
        entity['handleViewableItemsChanged'] = tango;
        entity['viewableItemIds'] = zulu;
        entity['viewableIndices'] = mike;
        return entity;
    };
    zulu['useViewableChannelListItems'] = mike;
    return entity;
})();