// app/modules/reanimated/native/useStateFromSharedValue.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun76984: for(var _fun76984_ip = 0; ; ) switch(_fun76984_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun76984_ip = 46; continue _fun76984 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun76984_ip = 55; continue _fun76984 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun76984_ip = 345; continue _fun76984 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun76984_ip = 323; continue _fun76984 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun76984_ip = 283; continue _fun76984 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun76984_ip = 270; continue _fun76984 }
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
            if(!golf) { _fun76984_ip = 163; continue _fun76984 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun76984_ip = 179; continue _fun76984 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun76984_ip = 249; continue _fun76984 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun76984_ip = 249; continue _fun76984 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun76984_ip = 234; continue _fun76984 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun76984_ip = 247; continue _fun76984 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun76984_ip = 265; continue _fun76984;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun76984_ip = 283; continue _fun76984;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun76984_ip = 323; continue _fun76984 }
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
            if(!tango) { _fun76984_ip = 330; continue _fun76984 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun76985: for(var _fun76985_ip = 0; ; ) switch(_fun76985_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun76985_ip = 56; continue _fun76985 }
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
                    _fun76985_ip = 67; continue _fun76985;
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
        _fun76986: for(var _fun76986_ip = 0; ; ) switch(_fun76986_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun76986_ip = 23; continue _fun76986 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun76986_ip = 33; continue _fun76986 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun76986_ip = 70; continue _fun76986 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun76986_ip = 55; continue _fun76986 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: useListenerSubscription
        oscar = argFoo;
        report = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = report;
        tango = _closure1_slot3;
        zulu = tango.useLayoutEffect;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun76988: for(var _fun76988_ip = 0; ; ) switch(_fun76988_ip) {
 0:
                tango = _closure1_slot5;
                zulu = tango.get;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                zulu = null;
                if(!(zulu == mike)) { _fun76988_ip = 50; continue _fun76988 }
 32:
                oscar = _closure2_slot0;
                tango = function(argFoo) { // Original name: createListenerState
                    entity = global;
                    entity = entity.Set;
                    zulu = entity.prototype;
                    zulu = Object.create(zulu, {constructor: {value: entity}});
                    report = zulu;
                    entity = new report[entity](tango);
                    zulu = entity instanceof Object ? entity : zulu;
                    var _closure4_slot0 = zulu;
                    entity = {};
                    tango = argFoo;
                    entity['sharedValue'] = tango;
                    entity['listeners'] = zulu;
                    mike = function(argFoo) { // Original name: valueListener
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot1;
                        entity = 2;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.batchUpdates;
                        mike = function() {
                            _fun76991: for(var _fun76991_ip = 0; ; ) switch(_fun76991_ip) {
 0:
                                zulu = _closure1_slot8;
                                mike = _closure4_slot0;
                                entity = undefined;
                                report = zulu.bind(entity)(mike);
                                zulu = report.bind(entity)();
                                mike = zulu.done;
                                if(mike) { _fun76991_ip = 65; continue _fun76991 }
 36:
                                oscar = zulu.value;
                                mike = _closure5_slot0;
                                mike = oscar.bind(entity)(mike);
                                oscar = report.bind(entity)();
                                mike = oscar.done;
                                zulu = oscar;
                                if(!mike) { _fun76991_ip = 36; continue _fun76991 }
 65:
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    entity['valueListener'] = mike;
                    mike = _closure1_slot4;
                    mike = mike + 1;
                    _closure1_slot4 = mike;
                    entity['listenerId'] = mike;
                    return entity;
                };
                zulu = undefined;
                mike = tango.bind(zulu)(oscar);
 50:
                var _closure3_slot0 = mike;
                oscar = mike.listeners;
                tango = oscar.add;
                zulu = _closure2_slot1;
                zulu = tango.bind(oscar)(zulu);
                zulu = mike.listeners;
                tango = zulu.size;
                zulu = 1;
                if(!(zulu === tango)) { _fun76988_ip = 225; continue _fun76988 }
 95:
                tango = _closure1_slot5;
                zulu = tango.set;
                oscar = _closure2_slot0;
                zulu = zulu.bind(tango)(oscar, mike);
                yankee = _closure1_slot0;
                romeo = _closure1_slot1;
                offset = 3;
                zulu = romeo[offset];
                report = undefined;
                golf = yankee.bind(report)(zulu);
                tango = golf.runOnUI;
                zulu = function(argFoo, argBar, argBaz) { // Original name: s
                    tango = argBaz;
                    mike = argBar;
                    var _closure4_slot0 = mike;
                    zulu = tango.addListener;
                    mike = argFoo;
                    entity = function(argFoo) {
                        mike = _closure1_slot0;
                        zulu = _closure1_slot1;
                        entity = 3;
                        entity = zulu[entity];
                        zulu = undefined;
                        tango = mike.bind(zulu)(entity);
                        mike = tango.runOnJS;
                        entity = _closure4_slot0;
                        mike = mike.bind(tango)(entity);
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike, entity);
                    entity = undefined;
                    return entity;
                };
                verify = {};
                offset = romeo[offset];
                offset = yankee.bind(report)(offset);
                offset = offset.runOnJS;
                verify['runOnJS'] = offset;
                zulu['__closure'] = verify;
                verify = 568027628003.0;
                zulu['__workletHash'] = verify;
                options = _closure1_slot6;
                zulu['__initData'] = options;
                tango = tango.bind(golf)(zulu);
                zulu = mike.listenerId;
                mike = mike.valueListener;
                mike = tango.bind(report)(zulu, mike, oscar);
 225:
                entity = function() {
                    _fun76994: for(var _fun76994_ip = 0; ; ) switch(_fun76994_ip) {
 0:
                        entity = _closure3_slot0;
                        report = entity.listeners;
                        tango = report.delete;
                        entity = _closure2_slot1;
                        entity = tango.bind(report)(entity);
                        entity = _closure3_slot0;
                        entity = entity.listeners;
                        tango = entity.size;
                        entity = 0;
                        if(!(entity === tango)) { _fun76994_ip = 164; continue _fun76994 }
 51:
                        oscar = _closure1_slot0;
                        report = _closure1_slot1;
                        tango = 3;
                        tango = report[tango];
                        report = undefined;
                        golf = oscar.bind(report)(tango);
                        oscar = golf.runOnUI;
                        tango = function(argFoo, argBar) { // Original name: r
                            zulu = argBar;
                            mike = zulu.removeListener;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        options = {};
                        tango['__closure'] = options;
                        options = 15997703035823.0;
                        tango['__workletHash'] = options;
                        options = _closure1_slot7;
                        tango['__initData'] = options;
                        tango = oscar.bind(golf)(tango);
                        mike = _closure3_slot0;
                        mike = mike.listenerId;
                        zulu = _closure2_slot0;
                        mike = tango.bind(report)(mike, zulu);
                        mike = _closure1_slot5;
                        entity = mike.delete;
                        entity = entity.bind(mike)(zulu);
 164:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        entity = undefined;
        return entity;
    };
    var _closure1_slot10 = entity;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    options = oscar[entity];
    golf = argBaz;
    entity = undefined;
    golf = golf.bind(entity)(options);
    var _closure1_slot2 = golf;
    golf = 1;
    options = oscar[golf];
    golf = argCorge;
    golf = golf.bind(entity)(options);
    var _closure1_slot3 = golf;
    golf = 9999999;
    var _closure1_slot4 = golf;
    tango = tango.Map;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    foxtrot = golf;
    tango = new foxtrot[tango](romeo);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot5 = tango;
    tango = {};
    golf = 'function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}';
    tango['code'] = golf;
    var _closure1_slot6 = tango;
    tango = {};
    golf = 'function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}';
    tango['code'] = golf;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/reanimated/native/useStateFromSharedValue.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useStateFromSharedValue
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useState;
        entity = function() {
            mike = _closure2_slot0;
            entity = mike.get;
            entity = entity.bind(mike)();
            return entity;
        };
        oscar = zulu.bind(tango)(entity);
        zulu = _closure1_slot2;
        tango = undefined;
        entity = 2;
        oscar = zulu.bind(tango)(oscar, entity);
        entity = 0;
        entity = oscar[entity];
        zulu = 1;
        zulu = oscar[zulu];
        mike = _closure1_slot10;
        mike = mike.bind(tango)(report, zulu);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: useDerivedStateFromSharedValue
        report = argFoo;
        options = argBar;
        var _closure2_slot0 = report;
        var _closure2_slot1 = options;
        oscar = _closure1_slot3;
        tango = oscar.useState;
        entity = function() {
            zulu = _closure2_slot1;
            mike = _closure2_slot0;
            entity = mike.get;
            mike = entity.bind(mike)();
            entity = undefined;
            entity = zulu.bind(entity)(mike, entity);
            return entity;
        };
        golf = tango.bind(oscar)(entity);
        oscar = _closure1_slot2;
        tango = undefined;
        entity = 2;
        golf = oscar.bind(tango)(golf, entity);
        entity = 0;
        entity = golf[entity];
        oscar = 1;
        oscar = golf[oscar];
        var _closure2_slot2 = oscar;
        golf = _closure1_slot3;
        oscar = golf.useRef;
        oscar = oscar.bind(golf)(options);
        var _closure2_slot3 = oscar;
        options = _closure1_slot3;
        golf = options.useLayoutEffect;
        oscar = function() {
            mike = _closure2_slot3;
            entity = _closure2_slot1;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        oscar = golf.bind(options)(oscar);
        options = _closure1_slot3;
        golf = options.useCallback;
        oscar = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = _closure2_slot2;
            mike = undefined;
            entity = function(argFoo) {
                tango = _closure2_slot3;
                zulu = tango.current;
                mike = _closure3_slot0;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        zulu = new Array(0);
        zulu = golf.bind(options)(oscar, zulu);
        mike = _closure1_slot10;
        mike = mike.bind(tango)(report, zulu);
        return entity;
    };
    zulu['useDerivedStateFromSharedValue'] = mike;
    return entity;
})();