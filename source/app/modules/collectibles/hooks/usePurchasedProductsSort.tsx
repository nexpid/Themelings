// app/modules/collectibles/hooks/usePurchasedProductsSort.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun99747: for(var _fun99747_ip = 0; ; ) switch(_fun99747_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun99747_ip = 46; continue _fun99747 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun99747_ip = 55; continue _fun99747 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun99747_ip = 345; continue _fun99747 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun99747_ip = 323; continue _fun99747 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun99747_ip = 283; continue _fun99747 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun99747_ip = 270; continue _fun99747 }
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
            if(!golf) { _fun99747_ip = 163; continue _fun99747 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun99747_ip = 179; continue _fun99747 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun99747_ip = 249; continue _fun99747 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun99747_ip = 249; continue _fun99747 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun99747_ip = 234; continue _fun99747 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun99747_ip = 247; continue _fun99747 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun99747_ip = 265; continue _fun99747;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun99747_ip = 283; continue _fun99747;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun99747_ip = 323; continue _fun99747 }
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
            if(!tango) { _fun99747_ip = 330; continue _fun99747 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun99748: for(var _fun99748_ip = 0; ; ) switch(_fun99748_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun99748_ip = 56; continue _fun99748 }
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
                    _fun99748_ip = 67; continue _fun99748;
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
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun99749: for(var _fun99749_ip = 0; ; ) switch(_fun99749_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun99749_ip = 23; continue _fun99749 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun99749_ip = 33; continue _fun99749 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun99749_ip = 70; continue _fun99749 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun99749_ip = 55; continue _fun99749 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    verify = 0;
    tango = oscar[verify];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.useMemo;
    var _closure1_slot3 = tango;
    options = 1;
    tango = oscar[options];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = {};
    tango['NOT_PURCHASED'] = verify;
    golf = 'NOT_PURCHASED';
    tango[verify] = golf;
    tango['PARTIAL_OWNED_VARIANTS_GROUP'] = options;
    golf = 'PARTIAL_OWNED_VARIANTS_GROUP';
    tango[options] = golf;
    options = 2;
    tango['PARTIAL_OWNED_BUNDLE'] = options;
    golf = 'PARTIAL_OWNED_BUNDLE';
    tango[options] = golf;
    options = 3;
    tango['PURCHASED'] = options;
    golf = 'PURCHASED';
    tango[options] = golf;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/hooks/usePurchasedProductsSort.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        report = argFoo;
        var _closure2_slot0 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 2;
        zulu = tango[zulu];
        tango = undefined;
        options = oscar.bind(tango)(zulu);
        golf = options.useStateFromStores;
        zulu = _closure1_slot4;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            entity = _closure1_slot4;
            entity = entity.purchases;
            return entity;
        };
        oscar = golf.bind(options)(oscar, zulu);
        zulu = _closure1_slot3;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun99752: for(var _fun99752_ip = 0; ; ) switch(_fun99752_ip) {
 0:
                zulu = new Array(4);
                entity = new Array(0);
                zulu[0] = entity;
                entity = new Array(0);
                zulu[1] = entity;
                entity = new Array(0);
                zulu[2] = entity;
                entity = new Array(0);
                zulu[3] = entity;
                report = _closure1_slot6;
                tango = _closure2_slot0;
                mike = tango.values;
                tango = mike.bind(tango)();
                mike = undefined;
                golf = report.bind(mike)(tango);
                report = golf.bind(mike)();
                tango = report.done;
                oscar = 3;
                if(tango) { _fun99752_ip = 212; continue _fun99752 }
 84:
                verify = report.value;
                options = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[oscar];
                offset = options.bind(mike)(tango);
                options = offset.getProductPurchaseState;
                tango = _closure1_slot4;
                options = options.bind(offset)(tango, verify);
                tango = options.isPurchased;
                yankee = options.isPartiallyOwnedBundle;
                offset = options.isPartiallyOwnedVariantsGroup;
                options = _closure1_slot5;
                if(yankee) { _fun99752_ip = 177; continue _fun99752 }
 147:
                if(offset) { _fun99752_ip = 169; continue _fun99752 }
 150:
                if(tango) { _fun99752_ip = 161; continue _fun99752 }
 153:
                tango = options.NOT_PURCHASED;
                _fun99752_ip = 167; continue _fun99752;
 161:
                tango = options.PURCHASED;
 167:
                _fun99752_ip = 175; continue _fun99752;
 169:
                tango = options.PARTIAL_OWNED_VARIANTS_GROUP;
 175:
                _fun99752_ip = 183; continue _fun99752;
 177:
                tango = options.PARTIAL_OWNED_BUNDLE;
 183:
                options = zulu[tango];
                tango = options.push;
                tango = tango.bind(options)(verify);
                options = golf.bind(mike)();
                tango = options.done;
                report = options;
                if(!tango) { _fun99752_ip = 84; continue _fun99752 }
 212:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                entity = 4;
                entity = report[entity];
                entity = tango.bind(mike)(entity);
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['usePurchasedProductsSort'] = mike;
    return entity;
})();