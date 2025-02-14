// app/utils/native/IAPUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    entity = function(argFoo) { // Original name: mapToIAPProduct
        _fun65944: for(var _fun65944_ip = 0; ; ) switch(_fun65944_ip) {
 0:
            zulu = argFoo;
            entity = zulu.countryCode;
            report = null;
            entity = report != entity;
            tango = '';
            if(!entity) { _fun65944_ip = 92; continue _fun65944 }
 22:
            entity = zulu.countryCode;
            mike = entity.length;
            entity = 3;
            if(!(entity !== mike)) { _fun65944_ip = 48; continue _fun65944 }
 40:
            entity = zulu.countryCode;
            _fun65944_ip = 89; continue _fun65944;
 48:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 4;
            oscar = oscar[mike];
            mike = undefined;
            mike = golf.bind(mike)(oscar);
            oscar = mike.CountryCodesISO3to2;
            mike = zulu.countryCode;
            entity = oscar[mike];
 89:
            tango = entity;
 92:
            entity = {};
            mike = zulu.productId;
            entity['identifier'] = mike;
            mike = global;
            golf = mike.parseFloat;
            oscar = zulu.price;
            mike = undefined;
            oscar = golf.bind(mike)(oscar);
            entity['price'] = oscar;
            options = zulu.localizedPrice;
            oscar = report == options;
            report = undefined;
            if(oscar) { _fun65944_ip = 176; continue _fun65944 }
 146:
            golf = options.split;
            oscar = /[0-9]/;
            golf = golf.bind(options)(oscar);
            oscar = 0;
            report = golf[oscar];
 176:
            entity['currencySymbol'] = report;
            oscar = zulu.currency;
            report = oscar.toLowerCase;
            report = report.bind(oscar)();
            entity['currencyCode'] = report;
            report = zulu.price;
            entity['priceString'] = report;
            entity['countryCode'] = tango;
            tango = false;
            entity['downloadable'] = tango;
            tango = zulu.description;
            entity['description'] = tango;
            tango = zulu.title;
            entity['title'] = tango;
            tango = 'discounts';
            tango = tango in zulu;
            mike = undefined;
            if(!tango) { _fun65944_ip = 266; continue _fun65944 }
 260:
            mike = zulu.discounts;
 266:
            entity['discounts'] = mike;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: serializePurchaseResponse
        _fun65945: for(var _fun65945_ip = 0; ; ) switch(_fun65945_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            report = undefined;
            oscar = zulu.bind(report)(entity);
            entity = mike.transactionId;
            tango = null;
            zulu = tango != entity;
            entity = 'should have transactionId';
            entity = oscar.bind(report)(zulu, entity);
            entity = {};
            zulu = mike.originalTransactionDateIOS;
            entity['originalTransactionDate'] = zulu;
            zulu = mike.originalTransactionIdentifierIOS;
            tango = tango != zulu;
            zulu = undefined;
            if(!tango) { _fun65945_ip = 99; continue _fun65945 }
 80:
            tango = global;
            oscar = tango.parseInt;
            tango = mike.originalTransactionIdentifierIOS;
            zulu = oscar.bind(report)(tango);
 99:
            entity['originalTransactionIdentifier'] = zulu;
            zulu = mike.transactionDate;
            entity['transactionDate'] = zulu;
            zulu = global;
            tango = zulu.parseInt;
            zulu = mike.transactionId;
            zulu = tango.bind(report)(zulu);
            entity['transactionIdentifier'] = zulu;
            zulu = mike.productId;
            entity['productIdentifier'] = zulu;
            mike = mike.transactionReceipt;
            entity['transactionReceipt'] = mike;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    tango = function(argFoo) { // Original name: convertToUUID
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.v3;
        entity = argFoo;
        mike = mike.bind(zulu)(entity);
        entity = mike.toString;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    oscar = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.NativeModules;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = report.InAppUtils;
    var _closure1_slot6 = oscar;
    report = report.RNIapIosSk2;
    var _closure1_slot7 = report;
    report = {};
    oscar = function() { // Original name: loadProducts
        _fun65947: for(var _fun65947_ip = 0; ; ) switch(_fun65947_ip) {
 0:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 8;
            zulu = tango[zulu];
            tango = undefined;
            report = report.bind(tango)(zulu);
            zulu = report.isIOS;
            zulu = zulu.bind(report)();
            if(zulu) { _fun65947_ip = 65; continue _fun65947 }
 40:
            zulu = global;
            oscar = zulu.Promise;
            report = oscar.resolve;
            zulu = new Array(0);
            zulu = report.bind(oscar)(zulu);
            return zulu;
 65:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            report = entity.IOSPremiumTrialsExperiment;
            tango = report.getCurrentConfig;
            zulu = {};
            entity = '1bc394_1';
            zulu['location'] = entity;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            entity = entity.enabled;
            zulu = global;
            zulu = zulu.Promise;
            if(entity) { _fun65947_ip = 149; continue _fun65947 }
 140:
            entity = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                report = _closure1_slot6;
                tango = report.loadProducts;
                zulu = global;
                golf = zulu.Object;
                oscar = golf.values;
                options = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 7;
                zulu = zulu[entity];
                entity = undefined;
                zulu = options.bind(entity)(zulu);
                zulu = zulu.ProductIds;
                zulu = oscar.bind(golf)(zulu);
                mike = function(argFoo, argBar) {
                    _fun65960: for(var _fun65960_ip = 0; ; ) switch(_fun65960_ip) {
 0:
                        zulu = argFoo;
                        if(zulu) { _fun65960_ip = 25; continue _fun65960 }
 9:
                        report = _closure3_slot0;
                        tango = undefined;
                        mike = argBar;
                        mike = report.bind(tango)(mike);
                        _fun65960_ip = 36; continue _fun65960;
 25:
                        mike = _closure3_slot1;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
 36:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            _fun65947_ip = 156; continue _fun65947;
 149:
            entity = function(argFoo, argBar) {
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = argBar;
                var _closure3_slot1 = mike;
                report = global;
                tango = report.Promise;
                zulu = tango.all;
                golf = report.Promise;
                mike = golf.prototype;
                oscar = Object.create(mike, {constructor: {value: golf}});
                options = function(argFoo, argBar) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = argBar;
                    var _closure4_slot1 = entity;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 6;
                    zulu = offset[entity];
                    entity = undefined;
                    report = verify.bind(entity)(zulu);
                    tango = report.getSubscriptions;
                    zulu = {};
                    oscar = global;
                    options = oscar.Object;
                    golf = options.values;
                    oscar = 7;
                    oscar = offset[oscar];
                    oscar = verify.bind(entity)(oscar);
                    oscar = oscar.ProductIds;
                    oscar = golf.bind(options)(oscar);
                    zulu['skus'] = oscar;
                    report = tango.bind(report)(zulu);
                    tango = report.then;
                    zulu = function(argFoo) {
                        tango = argFoo;
                        zulu = _closure4_slot0;
                        mike = tango.map;
                        entity = function(argFoo) {
                            zulu = _closure1_slot8;
                            mike = undefined;
                            entity = argFoo;
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        mike = mike.bind(tango)(entity);
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.catch;
                    mike = function(argFoo) {
                        zulu = _closure4_slot1;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                verify = oscar;
                mike = new verify[golf](options, golf);
                oscar = mike instanceof Object ? mike : oscar;
                mike = new Array(2);
                mike[0] = oscar;
                golf = report.Promise;
                report = golf.prototype;
                oscar = Object.create(report, {constructor: {value: golf}});
                options = function(argFoo, argBar) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = argBar;
                    var _closure4_slot1 = entity;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 6;
                    zulu = offset[entity];
                    entity = undefined;
                    report = verify.bind(entity)(zulu);
                    tango = report.getProducts;
                    zulu = {};
                    oscar = global;
                    options = oscar.Object;
                    golf = options.values;
                    oscar = 7;
                    oscar = offset[oscar];
                    oscar = verify.bind(entity)(oscar);
                    oscar = oscar.ProductIds;
                    oscar = golf.bind(options)(oscar);
                    zulu['skus'] = oscar;
                    report = tango.bind(report)(zulu);
                    tango = report.then;
                    zulu = function(argFoo) {
                        tango = argFoo;
                        zulu = _closure4_slot0;
                        mike = tango.map;
                        entity = function(argFoo) {
                            zulu = _closure1_slot8;
                            mike = undefined;
                            entity = argFoo;
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        mike = mike.bind(tango)(entity);
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.catch;
                    mike = function(argFoo) {
                        zulu = _closure4_slot1;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                verify = oscar;
                report = new verify[golf](options, golf);
                report = report instanceof Object ? report : oscar;
                mike[1] = report;
                tango = zulu.bind(tango)(mike);
                zulu = tango.then;
                mike = function(argFoo) {
                    _fun65957: for(var _fun65957_ip = 0; ; ) switch(_fun65957_ip) {
 0:
                        tango = argFoo;
                        mike = tango[Symbol.iterator];
                        tango = mike().next;
                        report = tango().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        oscar = undefined;
                        if(zulu) { _fun65957_ip = 27; continue _fun65957 }
 24:
                        oscar = report;
 27:
                        report = undefined;
                        if(zulu) { _fun65957_ip = 57; continue _fun65957 }
 32:
                        golf = tango().value;
                        tango = mike;
                        tango = tango === entity;
                        report = undefined;
                        zulu = tango;
                        if(tango) { _fun65957_ip = 57; continue _fun65957 }
 51:
                        report = golf;
                        zulu = tango;
 57:
                        if(zulu) { _fun65957_ip = 63; continue _fun65957 }
 60:
                        mike.return();
 63:
                        zulu = _closure3_slot0;
                        mike = new Array(0);
                        verify = 0;
                        yankee = mike;
                        offset = oscar;
                        verify = arraySpread(yankee, offset, verify);
                        yankee = mike;
                        offset = report;
                        tango = arraySpread(yankee, offset, verify);
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    }
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.catch;
                entity = function(argFoo) {
                    zulu = _closure3_slot1;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
 156:
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            verify = mike;
            options = entity;
            entity = new verify[zulu](options, golf);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    report['loadProducts'] = oscar;
    oscar = function(argFoo, argBar, argBaz) { // Original name: purchaseProduct
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun65964: for(var _fun65964_ip = 0; ; ) switch(_fun65964_ip) {
 0:
                        StartGenerator();
                        report = argFoo;
                        mike = argBar;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                        if(options) { _fun65964_ip = 423; continue _fun65964 }
 18:
                        golf = report;
                        var _closure5_slot0 = report;
                        zulu = mike;
                        var _closure5_slot1 = mike;
                        mike = undefined;
                        oscar = undefined;
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        report = 9;
                        report = offset[report];
                        report = verify.bind(mike)(report);
                        yankee = report.IOSPremiumTrialsExperiment;
                        offset = yankee.getCurrentConfig;
                        verify = {};
                        report = '1bc394_2';
                        verify['location'] = report;
                        report = {};
                        romeo = false;
                        report['autoTrackExposure'] = romeo;
                        report = offset.bind(yankee)(verify, report);
                        verify = report.enabled;
                        offset = _closure1_slot4;
                        report = offset.getCurrentUser;
                        report = report.bind(offset)();
                        offset = null;
                        if(!(offset == report)) { _fun65964_ip = 169; continue _fun65964 }
 122:
                        yankee = zulu;
                        offset = global;
                        foxtrot = offset.Error;
                        offset = foxtrot.prototype;
                        romeo = Object.create(offset, {constructor: {value: foxtrot}});
                        sizing = 'purchaseProduct: no valid user';
                        output = romeo;
                        offset = new output[foxtrot](sizing, kilo);
                        offset = offset instanceof Object ? offset : romeo;
                        offset = yankee.bind(mike)(offset);
                        _fun65964_ip = 420; continue _fun65964;
 169:
                        if(verify) { _fun65964_ip = 224; continue _fun65964 }
 172:
                        yankee = _closure1_slot6;
                        offset = yankee.purchaseProductForUser;
                        verify = _closure2_slot0;
                        romeo = _closure1_slot10;
                        report = report.id;
                        report = romeo.bind(mike)(report);
                        tango = function(argFoo, argBar) {
                            _fun65965: for(var _fun65965_ip = 0; ; ) switch(_fun65965_ip) {
 0:
                                zulu = argFoo;
                                tango = argBar;
                                if(zulu) { _fun65965_ip = 41; continue _fun65965 }
 9:
                                mike = null;
                                if(!(mike != tango)) { _fun65965_ip = 41; continue _fun65965 }
 15:
                                entity = tango.productIdentifier;
                                if(!(mike != entity)) { _fun65965_ip = 41; continue _fun65965 }
 25:
                                mike = _closure5_slot0;
                                entity = undefined;
                                entity = mike.bind(entity)(tango);
                                _fun65965_ip = 55; continue _fun65965;
 41:
                                mike = _closure5_slot1;
                                entity = undefined;
                                entity = mike.bind(entity)(zulu);
 55:
                                entity = undefined;
                                return entity;
                            }
                        };
                        tango = offset.bind(yankee)(verify, report, tango);
                        _fun65964_ip = 420; continue _fun65964;
 224: // try_start_0
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        offset = 6;
                        tango = tango[offset];
                        report = report.bind(mike)(tango);
                        tango = report.clearTransactionIOS;
                        tango = tango.bind(report)();
                        SaveGenerator(address=258);
 256:
                        return tango;
 258:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(report) { _fun65964_ip = 410; continue _fun65964 }
 267:
                        verify = _closure1_slot0;
                        report = _closure1_slot2;
                        report = report[offset];
                        offset = verify.bind(mike)(report);
                        verify = offset.requestPurchase;
                        report = {};
                        romeo = _closure2_slot0;
                        report['sku'] = romeo;
                        romeo = _closure2_slot2;
                        report['appAccountToken'] = romeo;
                        yankee = _closure2_slot1;
                        report['withOffer'] = yankee;
                        report = verify.bind(offset)(report);
                        SaveGenerator(address=333);
 331:
                        return report;
 333:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                        if(verify) { _fun65964_ip = 407; continue _fun65964 }
 339:
                        oscar = report;
                        verify = global;
                        offset = verify.Object;
                        offset = report instanceof offset;
                        if(offset) { _fun65964_ip = 391; continue _fun65964 }
 357:
                        yankee = verify.Error;
                        verify = yankee.prototype;
                        offset = Object.create(verify, {constructor: {value: yankee}});
                        sizing = 'Unable to select a platform, no request was made';
                        output = offset;
                        verify = new output[yankee](sizing, kilo);
                        verify = verify instanceof Object ? verify : offset;
                        throw verify;
 391:
                        options = _closure1_slot9;
                        oscar = options.bind(mike)(oscar);
                        oscar = golf.bind(mike)(oscar);
 405: // try_end0
                        _fun65964_ip = 420; continue _fun65964;
 407:
                        return report;
 410:
                        return tango;
 413: // catch_target0
                        CatchBlockStart(arg_register=3);
                        zulu = zulu.bind(mike)(tango);
 420:
                        return mike;
 423:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        tango = mike.bind(entity)();
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    report['purchaseProduct'] = oscar;
    oscar = function() { // Original name: canMakePayments
        entity = global;
        zulu = entity.Promise;
        entity = zulu.prototype;
        mike = Object.create(entity, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            zulu = _closure1_slot6;
            mike = zulu.canMakePayments;
            entity = function(argFoo) {
                _fun65969: for(var _fun65969_ip = 0; ; ) switch(_fun65969_ip) {
 0:
                    zulu = argFoo;
                    if(zulu) { _fun65969_ip = 48; continue _fun65969 }
 6:
                    tango = _closure3_slot1;
                    entity = global;
                    entity = entity.Error;
                    mike = entity.prototype;
                    mike = Object.create(mike, {constructor: {value: entity}});
                    oscar = mike;
                    entity = new oscar[entity](report);
                    mike = entity instanceof Object ? entity : mike;
                    entity = undefined;
                    entity = tango.bind(entity)(mike);
 48:
                    mike = _closure3_slot0;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    report['canMakePayments'] = oscar;
    oscar = function() { // Original name: restorePurchases
        zulu = _closure1_slot4;
        mike = zulu.getCurrentUser;
        mike = mike.bind(zulu)();
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            report = _closure1_slot6;
            tango = report.restorePurchasesForUser;
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 10;
            zulu = zulu[entity];
            entity = undefined;
            golf = oscar.bind(entity)(zulu);
            oscar = golf.v3;
            zulu = _closure2_slot0;
            zulu = zulu.id;
            oscar = oscar.bind(golf)(zulu);
            zulu = oscar.toString;
            zulu = zulu.bind(oscar)();
            mike = function(argFoo, argBar) {
                _fun65972: for(var _fun65972_ip = 0; ; ) switch(_fun65972_ip) {
 0:
                    zulu = argFoo;
                    if(zulu) { _fun65972_ip = 25; continue _fun65972 }
 9:
                    report = _closure3_slot0;
                    tango = undefined;
                    mike = argBar;
                    mike = report.bind(tango)(mike);
                    _fun65972_ip = 36; continue _fun65972;
 25:
                    mike = _closure3_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 36:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    report['restorePurchases'] = oscar;
    oscar = function() { // Original name: receiptData
        entity = global;
        zulu = entity.Promise;
        entity = zulu.prototype;
        mike = Object.create(entity, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            zulu = _closure1_slot6;
            mike = zulu.receiptData;
            entity = function(argFoo, argBar) {
                _fun65975: for(var _fun65975_ip = 0; ; ) switch(_fun65975_ip) {
 0:
                    mike = argFoo;
                    if(mike) { _fun65975_ip = 25; continue _fun65975 }
 9:
                    tango = _closure3_slot0;
                    zulu = undefined;
                    mike = argBar;
                    mike = tango.bind(zulu)(mike);
                    _fun65975_ip = 70; continue _fun65975;
 25:
                    zulu = _closure3_slot1;
                    entity = global;
                    tango = entity.Error;
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    report = 'No Receipt Available';
                    oscar = mike;
                    entity = new oscar[tango](report, tango);
                    mike = entity instanceof Object ? entity : mike;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 70:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    report['receiptData'] = oscar;
    oscar = function() { // Original name: loadGenericProducts
        options = _closure1_slot0;
        verify = _closure1_slot2;
        mike = 6;
        zulu = verify[mike];
        golf = undefined;
        oscar = options.bind(golf)(zulu);
        tango = oscar.getProducts;
        zulu = {};
        report = 7;
        offset = verify[report];
        offset = options.bind(golf)(offset);
        offset = offset.ProductIds;
        yankee = offset.GENERIC_CONSUMABLE;
        offset = new Array(1);
        offset[0] = yankee;
        zulu['skus'] = offset;
        oscar = tango.bind(oscar)(zulu);
        tango = oscar.then;
        zulu = function(argFoo) {
            zulu = argFoo;
            mike = zulu.map;
            entity = function(argFoo) {
                zulu = _closure1_slot8;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = tango.bind(oscar)(zulu);
        mike = verify[mike];
        tango = options.bind(golf)(mike);
        zulu = tango.getSubscriptions;
        mike = {};
        report = verify[report];
        report = options.bind(golf)(report);
        report = report.ProductIds;
        golf = report.GENERIC_SUBSCRIPTION;
        report = new Array(1);
        report[0] = golf;
        mike['skus'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            zulu = argFoo;
            mike = zulu.map;
            entity = function(argFoo) {
                zulu = _closure1_slot8;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = zulu.bind(tango)(mike);
        mike = global;
        tango = mike.Promise;
        zulu = tango.all;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            _fun65981: for(var _fun65981_ip = 0; ; ) switch(_fun65981_ip) {
 0:
                report = argFoo;
                entity = report[Symbol.iterator];
                report = entity().next;
                zulu = report().value;
                mike = entity;
                golf = undefined;
                mike = mike === golf;
                tango = undefined;
                if(mike) { _fun65981_ip = 27; continue _fun65981 }
 24:
                tango = zulu;
 27:
                zulu = undefined;
                if(mike) { _fun65981_ip = 57; continue _fun65981 }
 32:
                oscar = report().value;
                report = entity;
                report = report === golf;
                zulu = undefined;
                mike = report;
                if(report) { _fun65981_ip = 57; continue _fun65981 }
 51:
                zulu = oscar;
                mike = report;
 57:
                if(mike) { _fun65981_ip = 63; continue _fun65981 }
 60:
                entity.return();
 63:
                entity = new Array(0);
                options = 0;
                offset = entity;
                verify = tango;
                options = arraySpread(offset, verify, options);
                offset = entity;
                verify = zulu;
                mike = arraySpread(offset, verify, options);
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    report['loadGenericProducts'] = oscar;
    oscar = 13;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/native/IAPUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['convertToUUID'] = tango;
    tango = function(argFoo, argBar) { // Original name: makeIAPRequest
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun65985: for(var _fun65985_ip = 0; ; ) switch(_fun65985_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun65985_ip = 349; continue _fun65985 }
 10:
                        oscar = argFoo;
                        zulu = argBar;
                        mike = undefined;
                        offset = undefined;
                        verify = undefined;
                        golf = _closure1_slot4;
                        tango = golf.getCurrentUser;
                        golf = tango.bind(golf)();
                        offset = golf;
                        tango = null;
                        if(!(tango == golf)) { _fun65985_ip = 94; continue _fun65985 }
 47:
                        golf = zulu;
                        tango = global;
                        yankee = tango.Error;
                        tango = yankee.prototype;
                        options = Object.create(tango, {constructor: {value: yankee}});
                        foxtrot = 'purchaseProduct: no valid user';
                        backup = options;
                        tango = new backup[yankee](foxtrot, romeo);
                        tango = tango instanceof Object ? tango : options;
                        tango = golf.bind(mike)(tango);
                        _fun65985_ip = 346; continue _fun65985;
 94: // try_start_0
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        tango = 6;
                        tango = options[tango];
                        options = golf.bind(mike)(tango);
                        golf = options.requestPurchase;
                        tango = {};
                        romeo = _closure2_slot0;
                        tango['requestJSONString'] = romeo;
                        yankee = _closure2_slot1;
                        tango['sku'] = yankee;
                        yankee = _closure1_slot10;
                        offset = offset.id;
                        offset = yankee.bind(mike)(offset);
                        tango['appAccountToken'] = offset;
                        offset = false;
                        tango['andDangerouslyFinishTransactionAutomaticallyIOS'] = offset;
                        tango = golf.bind(options)(tango);
                        SaveGenerator(address=180);
 178:
                        return tango;
 180:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(golf) { _fun65985_ip = 305; continue _fun65985 }
 186:
                        verify = tango;
                        options = global;
                        golf = options.Object;
                        golf = tango instanceof golf;
                        if(golf) { _fun65985_ip = 238; continue _fun65985 }
 204:
                        yankee = options.Error;
                        golf = yankee.prototype;
                        offset = Object.create(golf, {constructor: {value: yankee}});
                        foxtrot = 'Unable to select a platform, no request was made';
                        backup = offset;
                        golf = new backup[yankee](foxtrot, romeo);
                        golf = golf instanceof Object ? golf : offset;
                        throw golf;
 238:
                        golf = oscar;
                        oscar = {};
                        offset = _closure1_slot9;
                        yankee = verify;
                        offset = offset.bind(mike)(yankee);
                        oscar['purchaseResponse'] = offset;
                        offset = options.Array;
                        options = offset.isArray;
                        options = options.bind(offset)(yankee);
                        offset = verify;
                        if(options) { _fun65985_ip = 287; continue _fun65985 }
 282:
                        options = offset;
                        _fun65985_ip = 293; continue _fun65985;
 287:
                        verify = 0;
                        options = offset[verify];
 293:
                        oscar['originalPurchase'] = options;
                        oscar = golf.bind(mike)(oscar);
 303: // try_end0
                        _fun65985_ip = 346; continue _fun65985;
 305:
                        return tango;
 308: // catch_target0
                        CatchBlockStart(arg_register=3);
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        report = 11;
                        report = golf[report];
                        oscar = oscar.bind(mike)(report);
                        report = oscar.captureBillingException;
                        report = report.bind(oscar)(tango);
                        zulu = zulu.bind(mike)(tango);
 346:
                        return mike;
 349:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        tango = mike.bind(entity)();
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['makeIAPRequest'] = tango;
    tango = function(argFoo) { // Original name: useCanPurchaseIAP
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        zulu = 12;
        golf = oscar[zulu];
        tango = undefined;
        yankee = report.bind(tango)(golf);
        offset = yankee.useStateFromStores;
        golf = _closure1_slot4;
        verify = new Array(1);
        verify[0] = golf;
        options = function() {
            _fun65988: for(var _fun65988_ip = 0; ; ) switch(_fun65988_ip) {
 0:
                mike = _closure1_slot4;
                entity = mike.getCurrentUser;
                zulu = entity.bind(mike)();
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun65988_ip = 33; continue _fun65988 }
 27:
                mike = zulu.verified;
 33:
                entity = entity != mike;
                if(!entity) { _fun65988_ip = 43; continue _fun65988 }
 40:
                entity = mike;
 43:
                return entity;
            }
        };
        golf = new Array(0);
        golf = offset.bind(yankee)(verify, options, golf);
        var _closure2_slot1 = golf;
        zulu = oscar[zulu];
        tango = report.bind(tango)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot5;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun65989: for(var _fun65989_ip = 0; ; ) switch(_fun65989_ip) {
 0:
                mike = _closure1_slot5;
                entity = mike.isReady;
                entity = entity.bind(mike)();
                entity = !entity;
                if(entity) { _fun65989_ip = 84; continue _fun65989 }
 23:
                zulu = _closure1_slot5;
                mike = zulu.isBusy;
                mike = mike.bind(zulu)();
                if(!mike) { _fun65989_ip = 81; continue _fun65989 }
 40:
                oscar = _closure2_slot0;
                zulu = null;
                zulu = zulu == oscar;
                if(zulu) { _fun65989_ip = 78; continue _fun65989 }
 56:
                oscar = _closure1_slot5;
                report = oscar.isPurchasingProduct;
                tango = _closure2_slot0;
                tango = report.bind(oscar)(tango);
                zulu = !tango;
 78:
                mike = zulu;
 81:
                entity = mike;
 84:
                if(entity) { _fun65989_ip = 97; continue _fun65989 }
 87:
                mike = _closure2_slot1;
                entity = !mike;
 97:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        entity = !entity;
        return entity;
    };
    zulu['useCanPurchaseIAP'] = tango;
    mike = function() { // Original name: isStorekit2Avaiable
        _fun65990: for(var _fun65990_ip = 0; ; ) switch(_fun65990_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 8;
            entity = zulu[entity];
            zulu = undefined;
            tango = tango.bind(zulu)(entity);
            entity = tango.isIOS;
            entity = entity.bind(tango)();
            if(!entity) { _fun65990_ip = 74; continue _fun65990 }
 38:
            report = _closure1_slot7;
            tango = null;
            tango = tango == report;
            zulu = undefined;
            if(tango) { _fun65990_ip = 67; continue _fun65990 }
 53:
            tango = _closure1_slot7;
            mike = tango.isAvailable;
            zulu = mike.bind(tango)();
 67:
            mike = 1;
            entity = mike === zulu;
 74:
            return entity;
        }
    };
    zulu['isStorekit2Avaiable'] = mike;
    return entity;
})();