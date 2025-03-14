// app/utils/native/IAPUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function(argFoo) { // Original name: mapToIAPProduct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.countryCode;
            report = null;
            entity = report != entity;
            tangon = '';
            if(!entity) { _fun00002_ip = 92; continue _fun00001 }
 22:
            entity = zuuluu.countryCode;
            michal = entity.length;
            entity = 3;
            if(!(entity !== michal)) { _fun00002_ip = 48; continue _fun00001 }
 40:
            entity = zuuluu.countryCode;
            _fun00002_ip = 89; continue _fun00001;
 48:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 5;
            oscard = oscard[michal];
            michal = undefined;
            michal = golfie.bind(michal)(oscard);
            oscard = michal.CountryCodesISO3to2;
            michal = zuuluu.countryCode;
            entity = oscard[michal];
 89:
            tangon = entity;
 92:
            entity = {};
            michal = zuuluu.productId;
            entity['identifier'] = michal;
            michal = global;
            golfie = michal.parseFloat;
            oscard = zuuluu.price;
            michal = undefined;
            oscard = golfie.bind(michal)(oscard);
            entity['price'] = oscard;
            option = zuuluu.localizedPrice;
            oscard = report == option;
            report = undefined;
            if(oscard) { _fun00002_ip = 176; continue _fun00001 }
 146:
            golfie = option.split;
            oscard = /[0-9]/;
            golfie = golfie.bind(option)(oscard);
            oscard = 0;
            report = golfie[oscard];
 176:
            entity['currencySymbol'] = report;
            oscard = zuuluu.currency;
            report = oscard.toLowerCase;
            report = report.bind(oscard)();
            entity['currencyCode'] = report;
            report = zuuluu.price;
            entity['priceString'] = report;
            entity['countryCode'] = tangon;
            tangon = false;
            entity['downloadable'] = tangon;
            tangon = zuuluu.description;
            entity['description'] = tangon;
            tangon = zuuluu.title;
            entity['title'] = tangon;
            tangon = 'discounts';
            tangon = tangon in zuuluu;
            michal = undefined;
            if(!tangon) { _fun00002_ip = 266; continue _fun00001 }
 260:
            michal = zuuluu.discounts;
 266:
            entity['discounts'] = michal;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: serializePurchaseResponse
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            report = undefined;
            oscard = zuuluu.bind(report)(entity);
            entity = michal.transactionId;
            tangon = null;
            zuuluu = tangon != entity;
            entity = 'should have transactionId';
            entity = oscard.bind(report)(zuuluu, entity);
            entity = {};
            zuuluu = michal.originalTransactionDateIOS;
            entity['originalTransactionDate'] = zuuluu;
            zuuluu = michal.originalTransactionIdentifierIOS;
            tangon = tangon != zuuluu;
            zuuluu = undefined;
            if(!tangon) { _fun00004_ip = 99; continue _fun00003 }
 80:
            tangon = global;
            oscard = tangon.parseInt;
            tangon = michal.originalTransactionIdentifierIOS;
            zuuluu = oscard.bind(report)(tangon);
 99:
            entity['originalTransactionIdentifier'] = zuuluu;
            zuuluu = michal.transactionDate;
            entity['transactionDate'] = zuuluu;
            zuuluu = global;
            tangon = zuuluu.parseInt;
            zuuluu = michal.transactionId;
            zuuluu = tangon.bind(report)(zuuluu);
            entity['transactionIdentifier'] = zuuluu;
            zuuluu = michal.productId;
            entity['productIdentifier'] = zuuluu;
            michal = michal.transactionReceipt;
            entity['transactionReceipt'] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    tangon = function(argFoo) { // Original name: convertToUUID
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 10;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.v5;
        michal = _closure1_slot6;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = tangon;
    entity = global;
    offset = entity.Object;
    oscard = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.NativeModules;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.NAMESPACE_SNOWFLAKE_UUID;
    var _closure1_slot6 = oscard;
    oscard = report.InAppUtils;
    var _closure1_slot7 = oscard;
    report = report.RNIapIosSk2;
    var _closure1_slot8 = report;
    report = {};
    oscard = function() { // Original name: loadProducts
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.isIOS;
            entity = entity.bind(michal)();
            michal = global;
            tangon = michal.Promise;
            if(entity) { _fun00006_ip = 63; continue _fun00005 }
 46:
            michal = tangon.resolve;
            entity = new Array(0);
            entity = michal.bind(tangon)(entity);
            _fun00006_ip = 90; continue _fun00005;
 63:
            michal = tangon.prototype;
            zuuluu = Object.create(michal, {constructor: {value: tangon}});
            report = function(argFoo, argBar) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = argBar;
                var _closure3_slot1 = michal;
                report = global;
                tangon = report.Promise;
                zuuluu = tangon.all;
                golfie = report.Promise;
                michal = golfie.prototype;
                oscard = Object.create(michal, {constructor: {value: golfie}});
                option = function(argFoo, argBar) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = argBar;
                    var _closure4_slot1 = entity;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 7;
                    zuuluu = offset[entity];
                    entity = undefined;
                    report = verify.bind(entity)(zuuluu);
                    tangon = report.getSubscriptions;
                    zuuluu = {};
                    oscard = global;
                    option = oscard.Object;
                    golfie = option.values;
                    oscard = 8;
                    oscard = offset[oscard];
                    oscard = verify.bind(entity)(oscard);
                    oscard = oscard.ProductIds;
                    oscard = golfie.bind(option)(oscard);
                    zuuluu['skus'] = oscard;
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.then;
                    zuuluu = function(argFoo) {
                        tangon = argFoo;
                        zuuluu = _closure4_slot0;
                        michal = tangon.map;
                        entity = function(argFoo) {
                            zuuluu = _closure1_slot9;
                            michal = undefined;
                            entity = argFoo;
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        michal = michal.bind(tangon)(entity);
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.catch;
                    michal = function(argFoo) {
                        zuuluu = _closure4_slot1;
                        entity = undefined;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                verify = oscard;
                michal = new verify[golfie](option, golfie);
                oscard = michal instanceof Object ? michal : oscard;
                michal = new Array(2);
                michal[0] = oscard;
                golfie = report.Promise;
                report = golfie.prototype;
                oscard = Object.create(report, {constructor: {value: golfie}});
                option = function(argFoo, argBar) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = argBar;
                    var _closure4_slot1 = entity;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 7;
                    zuuluu = offset[entity];
                    entity = undefined;
                    report = verify.bind(entity)(zuuluu);
                    tangon = report.getProducts;
                    zuuluu = {};
                    oscard = global;
                    option = oscard.Object;
                    golfie = option.values;
                    oscard = 8;
                    oscard = offset[oscard];
                    oscard = verify.bind(entity)(oscard);
                    oscard = oscard.ProductIds;
                    oscard = golfie.bind(option)(oscard);
                    zuuluu['skus'] = oscard;
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.then;
                    zuuluu = function(argFoo) {
                        tangon = argFoo;
                        zuuluu = _closure4_slot0;
                        michal = tangon.map;
                        entity = function(argFoo) {
                            zuuluu = _closure1_slot9;
                            michal = undefined;
                            entity = argFoo;
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        michal = michal.bind(tangon)(entity);
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.catch;
                    michal = function(argFoo) {
                        zuuluu = _closure4_slot1;
                        entity = undefined;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                verify = oscard;
                report = new verify[golfie](option, golfie);
                report = report instanceof Object ? report : oscard;
                michal[1] = report;
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        report = tangon().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        oscard = undefined;
                        if(zuuluu) { _fun00008_ip = 27; continue _fun00007 }
 24:
                        oscard = report;
 27:
                        report = undefined;
                        if(zuuluu) { _fun00008_ip = 57; continue _fun00007 }
 32:
                        golfie = tangon().value;
                        tangon = michal;
                        tangon = tangon === entity;
                        report = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00008_ip = 57; continue _fun00007 }
 51:
                        report = golfie;
                        zuuluu = tangon;
 57:
                        if(zuuluu) { _fun00008_ip = 63; continue _fun00007 }
 60:
                        michal.return();
 63:
                        zuuluu = _closure3_slot0;
                        michal = new Array(0);
                        verify = 0;
                        yankee = michal;
                        offset = oscard;
                        verify = arraySpread(yankee, offset, verify);
                        yankee = michal;
                        offset = report;
                        tangon = arraySpread(yankee, offset, verify);
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.catch;
                entity = function(argFoo) {
                    zuuluu = _closure3_slot1;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            oscard = zuuluu;
            michal = new oscard[tangon](report, tangon);
            entity = michal instanceof Object ? michal : zuuluu;
 90:
            return entity;
        }
    };
    report['loadProducts'] = oscard;
    oscard = function(argFoo, argBar, argBaz) { // Original name: purchaseProduct
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00010_ip = 288; continue _fun00009 }
 10:
                        golfie = argFoo;
                        zuuluu = argBar;
                        michal = undefined;
                        oscard = undefined;
                        report = _closure1_slot4;
                        tangon = report.getCurrentUser;
                        report = tangon.bind(report)();
                        tangon = null;
                        if(!(tangon == report)) { _fun00010_ip = 89; continue _fun00009 }
 42:
                        report = zuuluu;
                        tangon = global;
                        offset = tangon.Error;
                        tangon = offset.prototype;
                        verify = Object.create(tangon, {constructor: {value: offset}});
                        foxtra = 'purchaseProduct: no valid user';
                        backup = verify;
                        tangon = new backup[offset](foxtra, romeon);
                        tangon = tangon instanceof Object ? tangon : verify;
                        tangon = report.bind(michal)(tangon);
                        _fun00010_ip = 285; continue _fun00009;
 89: // try_start_0
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        offset = 7;
                        tangon = tangon[offset];
                        report = report.bind(michal)(tangon);
                        tangon = report.clearTransactionIOS;
                        tangon = tangon.bind(report)();
                        SaveGenerator(address=123);
 121:
                        return tangon;
 123:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(report) { _fun00010_ip = 275; continue _fun00009 }
 132:
                        verify = _closure1_slot0;
                        report = _closure1_slot2;
                        report = report[offset];
                        offset = verify.bind(michal)(report);
                        verify = offset.requestPurchase;
                        report = {};
                        romeon = _closure2_slot0;
                        report['sku'] = romeon;
                        romeon = _closure2_slot2;
                        report['appAccountToken'] = romeon;
                        yankee = _closure2_slot1;
                        report['withOffer'] = yankee;
                        report = verify.bind(offset)(report);
                        SaveGenerator(address=198);
 196:
                        return report;
 198:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                        if(verify) { _fun00010_ip = 272; continue _fun00009 }
 204:
                        oscard = report;
                        verify = global;
                        offset = verify.Object;
                        offset = report instanceof offset;
                        if(offset) { _fun00010_ip = 256; continue _fun00009 }
 222:
                        yankee = verify.Error;
                        verify = yankee.prototype;
                        offset = Object.create(verify, {constructor: {value: yankee}});
                        foxtra = 'Unable to select a platform, no request was made';
                        backup = offset;
                        verify = new backup[yankee](foxtra, romeon);
                        verify = verify instanceof Object ? verify : offset;
                        throw verify;
 256:
                        option = _closure1_slot10;
                        oscard = option.bind(michal)(oscard);
                        oscard = golfie.bind(michal)(oscard);
 270: // try_end0
                        _fun00010_ip = 285; continue _fun00009;
 272:
                        return report;
 275:
                        return tangon;
 278: // catch_target0
                        CatchBlockStart(arg_register=3);
                        zuuluu = zuuluu.bind(michal)(tangon);
 285:
                        return michal;
 288:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        tangon = michal.bind(entity)();
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    report['purchaseProduct'] = oscard;
    oscard = function() { // Original name: canMakePayments
        entity = global;
        zuuluu = entity.Promise;
        entity = zuuluu.prototype;
        michal = Object.create(entity, {constructor: {value: zuuluu}});
        tangon = function(argFoo, argBar) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            zuuluu = _closure1_slot7;
            michal = zuuluu.canMakePayments;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    if(zuuluu) { _fun00012_ip = 48; continue _fun00011 }
 6:
                    tangon = _closure3_slot1;
                    entity = global;
                    entity = entity.Error;
                    michal = entity.prototype;
                    michal = Object.create(michal, {constructor: {value: entity}});
                    oscard = michal;
                    entity = new oscard[entity](report);
                    michal = entity instanceof Object ? entity : michal;
                    entity = undefined;
                    entity = tangon.bind(entity)(michal);
 48:
                    michal = _closure3_slot0;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    report['canMakePayments'] = oscard;
    oscard = function() { // Original name: restorePurchases
        zuuluu = _closure1_slot4;
        michal = zuuluu.getCurrentUser;
        michal = michal.bind(zuuluu)();
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo, argBar) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            report = _closure1_slot7;
            tangon = report.restorePurchasesForUser;
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(zuuluu);
            oscard = golfie.v3;
            zuuluu = _closure2_slot0;
            zuuluu = zuuluu.id;
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = oscard.toString;
            zuuluu = zuuluu.bind(oscard)();
            michal = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    if(zuuluu) { _fun00014_ip = 25; continue _fun00013 }
 9:
                    report = _closure3_slot0;
                    tangon = undefined;
                    michal = argBar;
                    michal = report.bind(tangon)(michal);
                    _fun00014_ip = 36; continue _fun00013;
 25:
                    michal = _closure3_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 36:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    report['restorePurchases'] = oscard;
    oscard = function() { // Original name: receiptData
        entity = global;
        zuuluu = entity.Promise;
        entity = zuuluu.prototype;
        michal = Object.create(entity, {constructor: {value: zuuluu}});
        tangon = function(argFoo, argBar) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            zuuluu = _closure1_slot7;
            michal = zuuluu.receiptData;
            entity = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = argFoo;
                    if(michal) { _fun00016_ip = 25; continue _fun00015 }
 9:
                    tangon = _closure3_slot0;
                    zuuluu = undefined;
                    michal = argBar;
                    michal = tangon.bind(zuuluu)(michal);
                    _fun00016_ip = 70; continue _fun00015;
 25:
                    zuuluu = _closure3_slot1;
                    entity = global;
                    tangon = entity.Error;
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    report = 'No Receipt Available';
                    oscard = michal;
                    entity = new oscard[tangon](report, tangon);
                    michal = entity instanceof Object ? entity : michal;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 70:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    report['receiptData'] = oscard;
    oscard = function() { // Original name: loadGenericProducts
        option = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 7;
        zuuluu = verify[michal];
        golfie = undefined;
        oscard = option.bind(golfie)(zuuluu);
        tangon = oscard.getProducts;
        zuuluu = {};
        report = 8;
        offset = verify[report];
        offset = option.bind(golfie)(offset);
        offset = offset.ProductIds;
        yankee = offset.GENERIC_CONSUMABLE;
        offset = new Array(1);
        offset[0] = yankee;
        zuuluu['skus'] = offset;
        oscard = tangon.bind(oscard)(zuuluu);
        tangon = oscard.then;
        zuuluu = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.map;
            entity = function(argFoo) {
                zuuluu = _closure1_slot9;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = tangon.bind(oscard)(zuuluu);
        michal = verify[michal];
        tangon = option.bind(golfie)(michal);
        zuuluu = tangon.getSubscriptions;
        michal = {};
        report = verify[report];
        report = option.bind(golfie)(report);
        report = report.ProductIds;
        golfie = report.GENERIC_SUBSCRIPTION;
        report = new Array(1);
        report[0] = golfie;
        michal['skus'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.map;
            entity = function(argFoo) {
                zuuluu = _closure1_slot9;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = zuuluu.bind(tangon)(michal);
        michal = global;
        tangon = michal.Promise;
        zuuluu = tangon.all;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argFoo;
                entity = report[Symbol.iterator];
                report = entity().next;
                zuuluu = report().value;
                michal = entity;
                golfie = undefined;
                michal = michal === golfie;
                tangon = undefined;
                if(michal) { _fun00018_ip = 27; continue _fun00017 }
 24:
                tangon = zuuluu;
 27:
                zuuluu = undefined;
                if(michal) { _fun00018_ip = 57; continue _fun00017 }
 32:
                oscard = report().value;
                report = entity;
                report = report === golfie;
                zuuluu = undefined;
                michal = report;
                if(report) { _fun00018_ip = 57; continue _fun00017 }
 51:
                zuuluu = oscard;
                michal = report;
 57:
                if(michal) { _fun00018_ip = 63; continue _fun00017 }
 60:
                entity.return();
 63:
                entity = new Array(0);
                option = 0;
                offset = entity;
                verify = tangon;
                option = arraySpread(offset, verify, option);
                offset = entity;
                verify = zuuluu;
                michal = arraySpread(offset, verify, option);
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    report['loadGenericProducts'] = oscard;
    oscard = 14;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/native/IAPUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['convertToUUID'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: makeIAPRequest
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00020_ip = 349; continue _fun00019 }
 10:
                        oscard = argFoo;
                        zuuluu = argBar;
                        michal = undefined;
                        offset = undefined;
                        verify = undefined;
                        golfie = _closure1_slot4;
                        tangon = golfie.getCurrentUser;
                        golfie = tangon.bind(golfie)();
                        offset = golfie;
                        tangon = null;
                        if(!(tangon == golfie)) { _fun00020_ip = 94; continue _fun00019 }
 47:
                        golfie = zuuluu;
                        tangon = global;
                        yankee = tangon.Error;
                        tangon = yankee.prototype;
                        option = Object.create(tangon, {constructor: {value: yankee}});
                        foxtra = 'purchaseProduct: no valid user';
                        backup = option;
                        tangon = new backup[yankee](foxtra, romeon);
                        tangon = tangon instanceof Object ? tangon : option;
                        tangon = golfie.bind(michal)(tangon);
                        _fun00020_ip = 346; continue _fun00019;
 94: // try_start_0
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        tangon = 7;
                        tangon = option[tangon];
                        option = golfie.bind(michal)(tangon);
                        golfie = option.requestPurchase;
                        tangon = {};
                        romeon = _closure2_slot0;
                        tangon['requestJSONString'] = romeon;
                        yankee = _closure2_slot1;
                        tangon['sku'] = yankee;
                        yankee = _closure1_slot11;
                        offset = offset.id;
                        offset = yankee.bind(michal)(offset);
                        tangon['appAccountToken'] = offset;
                        offset = false;
                        tangon['andDangerouslyFinishTransactionAutomaticallyIOS'] = offset;
                        tangon = golfie.bind(option)(tangon);
                        SaveGenerator(address=180);
 178:
                        return tangon;
 180:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(golfie) { _fun00020_ip = 305; continue _fun00019 }
 186:
                        verify = tangon;
                        option = global;
                        golfie = option.Object;
                        golfie = tangon instanceof golfie;
                        if(golfie) { _fun00020_ip = 238; continue _fun00019 }
 204:
                        yankee = option.Error;
                        golfie = yankee.prototype;
                        offset = Object.create(golfie, {constructor: {value: yankee}});
                        foxtra = 'Unable to select a platform, no request was made';
                        backup = offset;
                        golfie = new backup[yankee](foxtra, romeon);
                        golfie = golfie instanceof Object ? golfie : offset;
                        throw golfie;
 238:
                        golfie = oscard;
                        oscard = {};
                        offset = _closure1_slot10;
                        yankee = verify;
                        offset = offset.bind(michal)(yankee);
                        oscard['purchaseResponse'] = offset;
                        offset = option.Array;
                        option = offset.isArray;
                        option = option.bind(offset)(yankee);
                        offset = verify;
                        if(option) { _fun00020_ip = 287; continue _fun00019 }
 282:
                        option = offset;
                        _fun00020_ip = 293; continue _fun00019;
 287:
                        verify = 0;
                        option = offset[verify];
 293:
                        oscard['originalPurchase'] = option;
                        oscard = golfie.bind(michal)(oscard);
 303: // try_end0
                        _fun00020_ip = 346; continue _fun00019;
 305:
                        return tangon;
 308: // catch_target0
                        CatchBlockStart(arg_register=3);
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        report = 11;
                        report = golfie[report];
                        oscard = oscard.bind(michal)(report);
                        report = oscard.captureBillingException;
                        report = report.bind(oscard)(tangon);
                        zuuluu = zuuluu.bind(michal)(tangon);
 346:
                        return michal;
 349:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        tangon = michal.bind(entity)();
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['makeIAPRequest'] = tangon;
    tangon = function(argFoo) { // Original name: useCanPurchaseIAP
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        zuuluu = 13;
        golfie = oscard[zuuluu];
        tangon = undefined;
        yankee = report.bind(tangon)(golfie);
        offset = yankee.useStateFromStores;
        golfie = _closure1_slot4;
        verify = new Array(1);
        verify[0] = golfie;
        option = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = _closure1_slot4;
                entity = michal.getCurrentUser;
                zuuluu = entity.bind(michal)();
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00022_ip = 33; continue _fun00021 }
 27:
                michal = zuuluu.verified;
 33:
                entity = entity != michal;
                if(!entity) { _fun00022_ip = 43; continue _fun00021 }
 40:
                entity = michal;
 43:
                return entity;
            }
        };
        golfie = new Array(0);
        golfie = offset.bind(yankee)(verify, option, golfie);
        var _closure2_slot1 = golfie;
        zuuluu = oscard[zuuluu];
        tangon = report.bind(tangon)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot5;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = _closure1_slot5;
                entity = michal.isReady;
                entity = entity.bind(michal)();
                entity = !entity;
                if(entity) { _fun00024_ip = 84; continue _fun00023 }
 23:
                zuuluu = _closure1_slot5;
                michal = zuuluu.isBusy;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00024_ip = 81; continue _fun00023 }
 40:
                oscard = _closure2_slot0;
                zuuluu = null;
                zuuluu = zuuluu == oscard;
                if(zuuluu) { _fun00024_ip = 78; continue _fun00023 }
 56:
                oscard = _closure1_slot5;
                report = oscard.isPurchasingProduct;
                tangon = _closure2_slot0;
                tangon = report.bind(oscard)(tangon);
                zuuluu = !tangon;
 78:
                michal = zuuluu;
 81:
                entity = michal;
 84:
                if(entity) { _fun00024_ip = 97; continue _fun00023 }
 87:
                michal = _closure2_slot1;
                entity = !michal;
 97:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = !entity;
        return entity;
    };
    zuuluu['useCanPurchaseIAP'] = tangon;
    michal = function() { // Original name: isStorekit2Avaiable
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            entity = zuuluu[entity];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(entity);
            entity = tangon.isIOS;
            entity = entity.bind(tangon)();
            if(!entity) { _fun00026_ip = 74; continue _fun00025 }
 38:
            report = _closure1_slot8;
            tangon = null;
            tangon = tangon == report;
            zuuluu = undefined;
            if(tangon) { _fun00026_ip = 67; continue _fun00025 }
 53:
            tangon = _closure1_slot8;
            michal = tangon.isAvailable;
            zuuluu = michal.bind(tangon)();
 67:
            michal = 1;
            entity = michal === zuuluu;
 74:
            return entity;
        }
    };
    zuuluu['isStorekit2Avaiable'] = michal;
    return entity;
})();