// app/modules/collectibles/native/CollectiblesUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    report = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = report;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun99536: for(var _fun99536_ip = 0; ; ) switch(_fun99536_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun99536_ip = 46; continue _fun99536 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun99536_ip = 55; continue _fun99536 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun99536_ip = 345; continue _fun99536 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun99536_ip = 323; continue _fun99536 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun99536_ip = 283; continue _fun99536 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun99536_ip = 270; continue _fun99536 }
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
            if(!golf) { _fun99536_ip = 163; continue _fun99536 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun99536_ip = 179; continue _fun99536 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun99536_ip = 249; continue _fun99536 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun99536_ip = 249; continue _fun99536 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun99536_ip = 234; continue _fun99536 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun99536_ip = 247; continue _fun99536 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun99536_ip = 265; continue _fun99536;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun99536_ip = 283; continue _fun99536;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun99536_ip = 323; continue _fun99536 }
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
            if(!tango) { _fun99536_ip = 330; continue _fun99536 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun99537: for(var _fun99537_ip = 0; ; ) switch(_fun99537_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun99537_ip = 56; continue _fun99537 }
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
                    _fun99537_ip = 67; continue _fun99537;
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
        _fun99538: for(var _fun99538_ip = 0; ; ) switch(_fun99538_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun99538_ip = 23; continue _fun99538 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun99538_ip = 33; continue _fun99538 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun99538_ip = 70; continue _fun99538 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun99538_ip = 55; continue _fun99538 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    tango = offset[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = offset[tango];
    tango = verify.bind(entity)(tango);
    report = tango.CurrencyCodes;
    var _closure1_slot4 = report;
    tango = tango.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot5 = tango;
    golf = function(argFoo, argBar) { // Original name: extractPriceByPurchaseTypes
        _fun99539: for(var _fun99539_ip = 0; ; ) switch(_fun99539_ip) {
 0:
            entity = argFoo;
            golf = argBar;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 3;
            mike = report[mike];
            verify = undefined;
            tango = tango.bind(verify)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            tango = _closure1_slot0;
            report = _closure1_slot2;
            if(mike) { _fun99539_ip = 77; continue _fun99539 }
 51:
            mike = 7;
            mike = report[mike];
            oscar = tango.bind(verify)(mike);
            mike = oscar.extractPriceByPurchaseTypes;
            mike = mike.bind(oscar)(entity, golf);
            return mike;
 77:
            mike = 4;
            mike = report[mike];
            report = tango.bind(verify)(mike);
            tango = report.isInCollectiblesMobileBundleExperiment;
            mike = 'collectiblesUtils';
            mike = tango.bind(report)(mike);
            if(mike) { _fun99539_ip = 124; continue _fun99539 }
 109:
            mike = _closure1_slot8;
            mike = mike.bind(verify)(entity);
            if(!mike) { _fun99539_ip = 326; continue _fun99539 }
 124:
            mike = _closure1_slot5;
            mike = mike.MOBILE;
            if(!(golf !== mike)) { _fun99539_ip = 155; continue _fun99539 }
 138:
            mike = _closure1_slot5;
            mike = mike.MOBILE_PREMIUM_TIER_2;
            if(!(golf === mike)) { _fun99539_ip = 326; continue _fun99539 }
 155:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 5;
            mike = report[mike];
            report = tango.bind(verify)(mike);
            tango = report.getProduct;
            oscar = entity.googleSkuIds;
            entity = null;
            options = entity == oscar;
            mike = undefined;
            if(options) { _fun99539_ip = 202; continue _fun99539 }
 198:
            mike = oscar[golf];
 202:
            oscar = tango.bind(report)(mike);
            if(!(entity == oscar)) { _fun99539_ip = 213; continue _fun99539 }
 211:
            return verify;
 213:
            mike = oscar.currencyCode;
            entity = mike.toLowerCase;
            mike = entity.bind(mike)();
            entity = {};
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 6;
            tango = offset[golf];
            report = options.bind(verify)(tango);
            tango = report.convertToMinorCurrencyUnits;
            golf = offset[golf];
            options = options.bind(verify)(golf);
            golf = options.convertToMajorCurrencyUnits;
            oscar = oscar.price;
            zulu = _closure1_slot4;
            zulu = zulu.USD;
            zulu = golf.bind(options)(oscar, zulu);
            zulu = tango.bind(report)(zulu, mike);
            entity['amount'] = zulu;
            entity['currency'] = mike;
            mike = 0;
            entity['tax'] = mike;
            mike = false;
            entity['taxInclusive'] = mike;
            return entity;
 326:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot6 = golf;
    oscar = function(argFoo) { // Original name: getBundleTotalAmount
        _fun99540: for(var _fun99540_ip = 0; ; ) switch(_fun99540_ip) {
 0:
            entity = argFoo;
            report = entity.bundledProducts;
            zulu = null;
            if(!(zulu != report)) { _fun99540_ip = 61; continue _fun99540 }
 15:
            mike = report.length;
            entity = 0;
            if(!(entity !== mike)) { _fun99540_ip = 61; continue _fun99540 }
 26:
            tango = report.reduce;
            mike = function(argFoo, argBar) {
                _fun99541: for(var _fun99541_ip = 0; ; ) switch(_fun99541_ip) {
 0:
                    tango = _closure1_slot6;
                    entity = _closure1_slot5;
                    zulu = entity.MOBILE;
                    entity = undefined;
                    mike = argBar;
                    zulu = tango.bind(entity)(mike, zulu);
                    mike = null;
                    tango = mike == zulu;
                    if(tango) { _fun99541_ip = 43; continue _fun99541 }
 37:
                    entity = zulu.amount;
 43:
                    zulu = mike != entity;
                    mike = 0;
                    if(!zulu) { _fun99541_ip = 55; continue _fun99541 }
 52:
                    mike = entity;
 55:
                    entity = argFoo;
                    entity = entity + mike;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, entity);
            zulu = zulu == mike;
            entity = 0;
            if(zulu) { _fun99540_ip = 59; continue _fun99540 }
 56:
            entity = mike;
 59:
            return entity;
 61:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot7 = oscar;
    report = function(argFoo) { // Original name: isNotBundleProduct
        _fun99542: for(var _fun99542_ip = 0; ; ) switch(_fun99542_ip) {
 0:
            zulu = argFoo;
            entity = null;
            entity = entity == zulu;
            oscar = undefined;
            tango = undefined;
            if(entity) { _fun99542_ip = 21; continue _fun99542 }
 16:
            tango = zulu.type;
 21:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 8;
            entity = golf[entity];
            entity = report.bind(oscar)(entity);
            entity = entity.CollectiblesItemType;
            entity = entity.BUNDLE;
            entity = tango !== entity;
            if(!entity) { _fun99542_ip = 71; continue _fun99542 }
 63:
            mike = _closure1_slot3;
            entity = zulu instanceof mike;
 71:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tango = function(argFoo) { // Original name: isGPlaySynced
        _fun99543: for(var _fun99543_ip = 0; ; ) switch(_fun99543_ip) {
 0:
            golf = argFoo;
            zulu = _closure1_slot1;
            entity = _closure1_slot2;
            options = 5;
            entity = entity[options];
            mike = undefined;
            report = zulu.bind(mike)(entity);
            tango = report.getProduct;
            offset = golf.googleSkuIds;
            zulu = null;
            verify = zulu == offset;
            entity = undefined;
            if(verify) { _fun99543_ip = 65; continue _fun99543 }
 51:
            verify = _closure1_slot5;
            verify = verify.MOBILE;
            entity = offset[verify];
 65:
            entity = tango.bind(report)(entity);
            report = _closure1_slot1;
            tango = _closure1_slot2;
            tango = tango[options];
            report = report.bind(mike)(tango);
            tango = report.getProduct;
            golf = golf.googleSkuIds;
            options = zulu == golf;
            mike = undefined;
            if(options) { _fun99543_ip = 122; continue _fun99543 }
 108:
            oscar = _closure1_slot5;
            oscar = oscar.MOBILE_PREMIUM_TIER_2;
            mike = golf[oscar];
 122:
            mike = tango.bind(report)(mike);
            entity = zulu != entity;
            if(!entity) { _fun99543_ip = 138; continue _fun99543 }
 134:
            entity = zulu != mike;
 138:
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    options = function(argFoo) { // Original name: hasAtLeastOneGPlaySynced
        entity = argFoo;
        zulu = entity.products;
        mike = zulu.filter;
        entity = function(argFoo) {
            zulu = _closure1_slot9;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        mike = entity.length;
        entity = 0;
        entity = mike > entity;
        return entity;
    };
    var _closure1_slot10 = options;
    options = 9;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/collectibles/native/CollectiblesUtils.tsx';
    options = verify.bind(offset)(options);
    options = function(argFoo, argBar, argBaz) {
        _fun99546: for(var _fun99546_ip = 0; ; ) switch(_fun99546_ip) {
 0:
            entity = argBar;
            mike = _closure1_slot5;
            tango = argBaz;
            if(tango) { _fun99546_ip = 35; continue _fun99546 }
 16:
            if(entity) { _fun99546_ip = 27; continue _fun99546 }
 19:
            report = mike.DEFAULT;
            _fun99546_ip = 33; continue _fun99546;
 27:
            report = mike.PREMIUM_TIER_2;
 33:
            _fun99546_ip = 55; continue _fun99546;
 35:
            if(entity) { _fun99546_ip = 46; continue _fun99546 }
 38:
            entity = mike.MOBILE;
            _fun99546_ip = 52; continue _fun99546;
 46:
            entity = mike.MOBILE_PREMIUM_TIER_2;
 52:
            report = entity;
 55:
            tango = _closure1_slot6;
            mike = undefined;
            entity = argFoo;
            oscar = tango.bind(mike)(entity, report);
            golf = null;
            tango = golf == oscar;
            entity = '';
            if(tango) { _fun99546_ip = 145; continue _fun99546 }
 83:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 2;
            zulu = report[zulu];
            report = tango.bind(mike)(zulu);
            tango = report.formatPrice;
            options = golf == oscar;
            zulu = undefined;
            if(options) { _fun99546_ip = 124; continue _fun99546 }
 118:
            zulu = oscar.amount;
 124:
            golf = golf == oscar;
            mike = undefined;
            if(golf) { _fun99546_ip = 139; continue _fun99546 }
 133:
            mike = oscar.currency;
 139:
            entity = tango.bind(report)(zulu, mike);
 145:
            return entity;
        }
    };
    zulu['getFormattedPriceForCollectiblesProduct'] = options;
    zulu['extractPriceByPurchaseTypes'] = golf;
    zulu['getBundleTotalAmount'] = oscar;
    oscar = function(argFoo) {
        _fun99547: for(var _fun99547_ip = 0; ; ) switch(_fun99547_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot7;
            report = undefined;
            oscar = entity.bind(report)(zulu);
            tango = 0;
            if(!(tango !== oscar)) { _fun99547_ip = 120; continue _fun99547 }
 23:
            golf = zulu.bundledProducts;
            entity = null;
            if(!(entity != golf)) { _fun99547_ip = 118; continue _fun99547 }
 35:
            golf = _closure1_slot6;
            zulu = zulu.bundledProducts;
            zulu = zulu[tango];
            mike = _closure1_slot5;
            mike = mike.MOBILE;
            mike = golf.bind(report)(zulu, mike);
            zulu = entity == mike;
            report = undefined;
            if(zulu) { _fun99547_ip = 80; continue _fun99547 }
 74:
            report = mike.currency;
 80:
            zulu = entity == report;
            mike = null;
            if(zulu) { _fun99547_ip = 116; continue _fun99547 }
 89:
            zulu = {};
            zulu['amount'] = oscar;
            zulu['currency'] = report;
            zulu['tax'] = tango;
            tango = false;
            zulu['taxInclusive'] = tango;
            mike = zulu;
 116:
            return mike;
 118:
            return entity;
 120:
            entity = null;
            return entity;
        }
    };
    zulu['getBundleTotalFormattedPrice'] = oscar;
    oscar = function(argFoo, argBar) {
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.getProductDiscount;
        mike = argFoo;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        tango = entity.discountPercentage;
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = '';
        entity = '%';
        entity = zulu.bind(mike)(tango, entity);
        return entity;
    };
    zulu['getBundleDiscount'] = oscar;
    zulu['isNotBundleProduct'] = report;
    zulu['isGPlaySynced'] = tango;
    mike = function(argFoo) {
        _fun99549: for(var _fun99549_ip = 0; ; ) switch(_fun99549_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity != tango)) { _fun99549_ip = 92; continue _fun99549 }
 9:
            entity = new Array(0);
            zulu = _closure1_slot11;
            mike = tango.values;
            mike = mike.bind(tango)();
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = tango.bind(report)();
            mike = zulu.done;
            if(mike) { _fun99549_ip = 90; continue _fun99549 }
 48:
            golf = zulu.value;
            mike = _closure1_slot10;
            mike = mike.bind(report)(golf);
            if(!mike) { _fun99549_ip = 75; continue _fun99549 }
 65:
            mike = entity.push;
            mike = mike.bind(entity)(golf);
 75:
            golf = tango.bind(report)();
            mike = golf.done;
            zulu = golf;
            if(!mike) { _fun99549_ip = 48; continue _fun99549 }
 90:
            return entity;
 92:
            entity = new Array(0);
            return entity;
        }
    };
    zulu['filterGPlaySyncedCategories'] = mike;
    return entity;
})();