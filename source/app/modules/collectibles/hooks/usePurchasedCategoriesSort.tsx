// app/modules/collectibles/hooks/usePurchasedCategoriesSort.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun99519: for(var _fun99519_ip = 0; ; ) switch(_fun99519_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun99519_ip = 46; continue _fun99519 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun99519_ip = 55; continue _fun99519 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun99519_ip = 345; continue _fun99519 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun99519_ip = 323; continue _fun99519 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun99519_ip = 283; continue _fun99519 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun99519_ip = 270; continue _fun99519 }
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
            if(!golf) { _fun99519_ip = 163; continue _fun99519 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun99519_ip = 179; continue _fun99519 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun99519_ip = 249; continue _fun99519 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun99519_ip = 249; continue _fun99519 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun99519_ip = 234; continue _fun99519 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun99519_ip = 247; continue _fun99519 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun99519_ip = 265; continue _fun99519;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun99519_ip = 283; continue _fun99519;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun99519_ip = 323; continue _fun99519 }
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
            if(!tango) { _fun99519_ip = 330; continue _fun99519 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun99520: for(var _fun99520_ip = 0; ; ) switch(_fun99520_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun99520_ip = 56; continue _fun99520 }
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
                    _fun99520_ip = 67; continue _fun99520;
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
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun99521: for(var _fun99521_ip = 0; ; ) switch(_fun99521_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun99521_ip = 23; continue _fun99521 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun99521_ip = 33; continue _fun99521 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun99521_ip = 70; continue _fun99521 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun99521_ip = 55; continue _fun99521 }
 70:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    tango = tango.useMemo;
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/hooks/usePurchasedCategoriesSort.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        zulu = tango[zulu];
        tango = undefined;
        options = report.bind(tango)(zulu);
        golf = options.useStateFromStores;
        zulu = _closure1_slot3;
        report = new Array(1);
        report[0] = zulu;
        zulu = function() {
            entity = _closure1_slot3;
            entity = entity.purchases;
            return entity;
        };
        report = golf.bind(options)(report, zulu);
        var _closure2_slot1 = report;
        zulu = _closure1_slot2;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun99524: for(var _fun99524_ip = 0; ; ) switch(_fun99524_ip) {
 0:
                zulu = new Array(0);
                mike = new Array(0);
                tango = _closure1_slot4;
                report = _closure2_slot0;
                entity = report.values;
                entity = entity.bind(report)();
                oscar = undefined;
                report = tango.bind(oscar)(entity);
                tango = report.bind(oscar)();
                entity = tango.done;
                if(entity) { _fun99524_ip = 121; continue _fun99524 }
 52:
                options = tango.value;
                offset = options.products;
                verify = offset.every;
                entity = function(argFoo) {
                    entity = global;
                    zulu = entity.Boolean;
                    tango = _closure2_slot1;
                    mike = tango.get;
                    entity = argFoo;
                    entity = entity.skuId;
                    mike = mike.bind(tango)(entity);
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = verify.bind(offset)(entity);
                if(entity) { _fun99524_ip = 96; continue _fun99524 }
 84:
                entity = mike.push;
                entity = entity.bind(mike)(options);
                _fun99524_ip = 106; continue _fun99524;
 96:
                entity = zulu.push;
                entity = entity.bind(zulu)(options);
 106:
                options = report.bind(oscar)();
                entity = options.done;
                tango = options;
                if(!entity) { _fun99524_ip = 52; continue _fun99524 }
 121:
                entity = mike.concat;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['usePurchasedCategoriesSort'] = mike;
    return entity;
})();