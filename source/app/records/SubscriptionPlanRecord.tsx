// app/records/SubscriptionPlanRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun38464: for(var _fun38464_ip = 0; ; ) switch(_fun38464_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun38464_ip = 48; continue _fun38464 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun38464_ip = 86; continue _fun38464;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun38465: for(var _fun38465_ip = 0; ; ) switch(_fun38465_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun38465_ip = 74; continue _fun38465;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    tango = function(argFoo, argBar) { // Original name: getPriceFromServer
        mike = argFoo;
        entity = {};
        zulu = mike.amount;
        entity['amount'] = zulu;
        mike = mike.currency;
        entity['currency'] = mike;
        mike = 0;
        entity['tax'] = mike;
        mike = argBar;
        entity['taxInclusive'] = mike;
        return entity;
    };
    var _closure1_slot11 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = options[report];
    oscar = oscar.bind(entity)(report);
    report = 6;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.GIFTABLE_CURRENCIES;
    var _closure1_slot5 = report;
    report = 7;
    report = options[report];
    report = golf.bind(entity)(report);
    verify = report.PremiumSubscriptionSKUs;
    var _closure1_slot6 = verify;
    verify = report.PremiumTypes;
    var _closure1_slot7 = verify;
    report = report.SubscriptionPlans;
    var _closure1_slot8 = report;
    report = function(argFoo) {
        report = function(argFoo) { // Original name: SubscriptionPlanRecord
            _fun38470: for(var _fun38470_ip = 0; ; ) switch(_fun38470_ip) {
 0:
                mike = argFoo;
                report = this;
                oscar = _closure1_slot0;
                tango = _closure2_slot0;
                zulu = undefined;
                oscar = oscar.bind(zulu)(report, tango);
                entity = _closure1_slot9;
                entity = entity.bind(zulu)(report, tango);
                zulu = mike.id;
                entity['id'] = zulu;
                zulu = mike.name;
                entity['name'] = zulu;
                zulu = mike.interval;
                entity['interval'] = zulu;
                zulu = mike.intervalCount;
                entity['intervalCount'] = zulu;
                zulu = mike.taxInclusive;
                entity['taxInclusive'] = zulu;
                zulu = mike.skuId;
                entity['skuId'] = zulu;
                zulu = mike.currency;
                entity['currency'] = zulu;
                zulu = mike.price;
                entity['price'] = zulu;
                zulu = mike.premiumUserPrice;
                entity['premiumUserPrice'] = zulu;
                zulu = mike.prices;
                entity['prices'] = zulu;
                zulu = mike.fallbackPrice;
                if(!zulu) { _fun38470_ip = 201; continue _fun38470 }
 165:
                zulu = mike.fallbackPrice;
                entity['fallbackPrice'] = zulu;
                zulu = mike.fallbackCurrency;
                entity['fallbackCurrency'] = zulu;
                mike = mike.fallbackPremiumUserPrice;
                entity['fallbackPremiumUserPrice'] = mike;
 201:
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot4;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot1;
        oscar = {};
        mike = 'premiumSubscriptionType';
        oscar['key'] = mike;
        mike = function() { // Original name: get
            _fun38471: for(var _fun38471_ip = 0; ; ) switch(_fun38471_ip) {
 0:
                entity = this;
                zulu = entity.skuId;
                mike = _closure1_slot6;
                mike = mike.LEGACY;
                if(!(mike !== zulu)) { _fun38471_ip = 96; continue _fun38471 }
 26:
                mike = _closure1_slot6;
                mike = mike.TIER_2;
                if(!(mike !== zulu)) { _fun38471_ip = 96; continue _fun38471 }
 40:
                mike = _closure1_slot6;
                mike = mike.TIER_1;
                if(!(mike !== zulu)) { _fun38471_ip = 84; continue _fun38471 }
 54:
                mike = _closure1_slot6;
                mike = mike.TIER_0;
                if(!(mike !== zulu)) { _fun38471_ip = 72; continue _fun38471 }
 68:
                mike = null;
                return mike;
 72:
                mike = _closure1_slot7;
                mike = mike.TIER_0;
                return mike;
 84:
                mike = _closure1_slot7;
                mike = mike.TIER_1;
                return mike;
 96:
                entity = _closure1_slot7;
                entity = entity.TIER_2;
                return entity;
            }
        };
        oscar['get'] = mike;
        mike = new Array(9);
        mike[0] = oscar;
        oscar = {};
        golf = 'isGiftableCurrency';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            zulu = _closure1_slot5;
            mike = zulu.has;
            entity = this;
            entity = entity.currency;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['get'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'giftPrice';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun38473: for(var _fun38473_ip = 0; ; ) switch(_fun38473_ip) {
 0:
                entity = this;
                mike = entity.isGiftableCurrency;
                if(mike) { _fun38473_ip = 73; continue _fun38473 }
 12:
                mike = entity.fallbackPrice;
                zulu = 'number';
                mike = typeof mike;
                if(!(zulu !== mike)) { _fun38473_ip = 65; continue _fun38473 }
 29:
                mike = global;
                tango = mike.Error;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                report = 'Missing fallback price for non-giftable currency';
                oscar = zulu;
                mike = new oscar[tango](report, tango);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 65:
                mike = entity.fallbackPrice;
                return mike;
 73:
                entity = entity.price;
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'giftCurrency';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun38474: for(var _fun38474_ip = 0; ; ) switch(_fun38474_ip) {
 0:
                entity = this;
                mike = entity.isGiftableCurrency;
                if(mike) { _fun38474_ip = 73; continue _fun38474 }
 12:
                mike = entity.fallbackCurrency;
                zulu = 'string';
                mike = typeof mike;
                if(!(zulu !== mike)) { _fun38474_ip = 65; continue _fun38474 }
 29:
                mike = global;
                tango = mike.Error;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                report = 'Missing fallback currency for non-giftable currency';
                oscar = zulu;
                mike = new oscar[tango](report, tango);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 65:
                mike = entity.fallbackCurrency;
                return mike;
 73:
                entity = entity.currency;
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'giftPremiumUserPrice';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun38475: for(var _fun38475_ip = 0; ; ) switch(_fun38475_ip) {
 0:
                mike = this;
                entity = mike.isGiftableCurrency;
                if(entity) { _fun38475_ip = 20; continue _fun38475 }
 12:
                entity = mike.fallbackPremiumUserPrice;
                _fun38475_ip = 26; continue _fun38475;
 20:
                entity = mike.premiumUserPrice;
 26:
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[4] = oscar;
        oscar = {};
        golf = 'getPrice';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun38476: for(var _fun38476_ip = 0; ; ) switch(_fun38476_ip) {
 0:
                entity = arguments[0];
                mike = this;
                zulu = undefined;
                if(!(entity === zulu)) { _fun38476_ip = 14; continue _fun38476 }
 12:
                entity = false;
 14:
                if(entity) { _fun38476_ip = 25; continue _fun38476 }
 17:
                entity = mike.price;
                _fun38476_ip = 33; continue _fun38476;
 25:
                entity = mike.giftPrice;
 33:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[5] = oscar;
        oscar = {};
        golf = 'getCurrency';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun38477: for(var _fun38477_ip = 0; ; ) switch(_fun38477_ip) {
 0:
                entity = arguments[0];
                mike = this;
                zulu = undefined;
                if(!(entity === zulu)) { _fun38477_ip = 14; continue _fun38477 }
 12:
                entity = false;
 14:
                if(entity) { _fun38477_ip = 25; continue _fun38477 }
 17:
                entity = mike.currency;
                _fun38477_ip = 33; continue _fun38477;
 25:
                entity = mike.giftCurrency;
 33:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[6] = oscar;
        oscar = {};
        golf = 'getPremiumUserPrice';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun38478: for(var _fun38478_ip = 0; ; ) switch(_fun38478_ip) {
 0:
                entity = arguments[0];
                mike = this;
                zulu = undefined;
                if(!(entity === zulu)) { _fun38478_ip = 14; continue _fun38478 }
 12:
                entity = false;
 14:
                if(entity) { _fun38478_ip = 25; continue _fun38478 }
 17:
                entity = mike.premiumUserPrice;
                _fun38478_ip = 33; continue _fun38478;
 25:
                entity = mike.giftPremiumUserPrice;
 33:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[7] = oscar;
        oscar = {};
        golf = 'toServerData';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = {};
            var _closure3_slot1 = zulu;
            tango = global;
            oscar = tango.Object;
            report = oscar.keys;
            tango = mike.prices;
            report = report.bind(oscar)(tango);
            tango = report.forEach;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = _closure3_slot0;
                mike = mike.prices;
                tango = mike[zulu];
                mike = _closure3_slot1;
                entity = {};
                report = {};
                oscar = tango.countryPrices;
                oscar = oscar.countryCode;
                report['country_code'] = oscar;
                oscar = tango.countryPrices;
                oscar = oscar.prices;
                report['prices'] = oscar;
                entity['country_prices'] = report;
                tango = tango.paymentSourcePrices;
                entity['payment_source_prices'] = tango;
                mike[zulu] = entity;
                entity = undefined;
                return entity;
            };
            entity = tango.bind(report)(entity);
            entity = {};
            tango = mike.id;
            entity['id'] = tango;
            tango = mike.name;
            entity['name'] = tango;
            tango = mike.skuId;
            entity['sku_id'] = tango;
            tango = mike.interval;
            entity['interval'] = tango;
            tango = mike.intervalCount;
            entity['interval_count'] = tango;
            tango = mike.taxInclusive;
            entity['tax_inclusive'] = tango;
            tango = mike.currency;
            entity['currency'] = tango;
            tango = mike.price;
            entity['price'] = tango;
            entity['prices'] = zulu;
            zulu = mike.price;
            entity['price_tier'] = zulu;
            zulu = mike.premiumUserPrice;
            entity['discount_price'] = zulu;
            zulu = mike.fallbackPrice;
            entity['fallback_price'] = zulu;
            zulu = mike.fallbackCurrency;
            entity['fallback_currency'] = zulu;
            mike = mike.fallbackPremiumUserPrice;
            entity['fallback_discount_price'] = mike;
            return entity;
        };
        oscar['value'] = golf;
        mike[8] = oscar;
        oscar = {};
        golf = 'createFromServer';
        oscar['key'] = golf;
        entity = function(argFoo) { // Original name: value
            _fun38481: for(var _fun38481_ip = 0; ; ) switch(_fun38481_ip) {
 0:
                report = argFoo;
                var _closure3_slot0 = report;
                entity = {};
                tango = report.prices;
                mike = null;
                if(!(mike != tango)) { _fun38481_ip = 66; continue _fun38481 }
 23:
                tango = global;
                golf = tango.Object;
                oscar = golf.keys;
                tango = report.prices;
                golf = oscar.bind(golf)(tango);
                oscar = golf.reduce;
                tango = function(argFoo, argBar) {
                    _fun38482: for(var _fun38482_ip = 0; ; ) switch(_fun38482_ip) {
 0:
                        entity = argFoo;
                        zulu = argBar;
                        report = _closure3_slot0;
                        oscar = report.prices;
                        report = null;
                        if(!(report != oscar)) { _fun38482_ip = 157; continue _fun38482 }
 30:
                        mike = _closure3_slot0;
                        mike = mike.prices;
                        report = mike[zulu];
                        mike = {};
                        oscar = {};
                        golf = report.country_prices;
                        golf = golf.country_code;
                        oscar['countryCode'] = golf;
                        golf = report.country_prices;
                        verify = golf.prices;
                        options = verify.map;
                        golf = function(argFoo) {
                            tango = _closure1_slot11;
                            entity = _closure3_slot0;
                            zulu = entity.tax_inclusive;
                            mike = undefined;
                            entity = argFoo;
                            entity = tango.bind(mike)(entity, zulu);
                            return entity;
                        };
                        golf = options.bind(verify)(golf);
                        oscar['prices'] = golf;
                        mike['countryPrices'] = oscar;
                        oscar = global;
                        golf = oscar.Object;
                        oscar = golf.entries;
                        report = report.payment_source_prices;
                        golf = oscar.bind(golf)(report);
                        oscar = golf.reduce;
                        report = function(argFoo, argBar) {
                            _fun38484: for(var _fun38484_ip = 0; ; ) switch(_fun38484_ip) {
 0:
                                entity = argFoo;
                                oscar = argBar;
                                mike = oscar[Symbol.iterator];
                                oscar = mike().next;
                                report = oscar().value;
                                zulu = mike;
                                options = undefined;
                                tango = zulu === options;
                                zulu = undefined;
                                if(tango) { _fun38484_ip = 30; continue _fun38484 }
 27:
                                zulu = report;
 30:
                                report = undefined;
                                if(tango) { _fun38484_ip = 60; continue _fun38484 }
 35:
                                golf = oscar().value;
                                oscar = mike;
                                oscar = oscar === options;
                                report = undefined;
                                tango = oscar;
                                if(oscar) { _fun38484_ip = 60; continue _fun38484 }
 54:
                                report = golf;
                                tango = oscar;
 60:
                                if(tango) { _fun38484_ip = 66; continue _fun38484 }
 63:
                                mike.return();
 66:
                                tango = report.map;
                                mike = function(argFoo) {
                                    tango = _closure1_slot11;
                                    entity = _closure3_slot0;
                                    zulu = entity.tax_inclusive;
                                    mike = undefined;
                                    entity = argFoo;
                                    entity = tango.bind(mike)(entity, zulu);
                                    return entity;
                                };
                                mike = tango.bind(report)(mike);
                                entity[zulu] = mike;
                                return entity;
                            }
                        };
                        tango = {};
                        tango = oscar.bind(golf)(report, tango);
                        mike['paymentSourcePrices'] = tango;
                        entity[zulu] = mike;
                        return entity;
 157:
                        return entity;
                    }
                };
                zulu = {};
                entity = oscar.bind(golf)(tango, zulu);
 66:
                zulu = {};
                tango = report.id;
                zulu['id'] = tango;
                tango = report.name;
                zulu['name'] = tango;
                tango = report.interval;
                zulu['interval'] = tango;
                tango = report.interval_count;
                zulu['intervalCount'] = tango;
                tango = report.tax_inclusive;
                zulu['taxInclusive'] = tango;
                tango = report.sku_id;
                zulu['skuId'] = tango;
                tango = report.currency;
                zulu['currency'] = tango;
                tango = report.price;
                zulu['price'] = tango;
                zulu['prices'] = entity;
                entity = report.discount_price;
                zulu['premiumUserPrice'] = entity;
                entity = report.fallback_price;
                entity = mike != entity;
                if(!entity) { _fun38481_ip = 193; continue _fun38481 }
 181:
                tango = report.fallback_price;
                mike = 0;
                entity = mike !== tango;
 193:
                if(!entity) { _fun38481_ip = 250; continue _fun38481 }
 196:
                entity = global;
                tango = entity.Object;
                mike = tango.assign;
                entity = {};
                oscar = report.fallback_price;
                entity['fallbackPrice'] = oscar;
                oscar = report.fallback_currency;
                entity['fallbackCurrency'] = oscar;
                report = report.fallback_discount_price;
                entity['fallbackPremiumUserPrice'] = report;
                entity = mike.bind(tango)(zulu, entity);
 250:
                entity = _closure2_slot0;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                offset = mike;
                verify = zulu;
                entity = new offset[entity](verify, options);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    report = report.bind(entity)(oscar);
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'records/SubscriptionPlanRecord.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['getPriceFromServer'] = tango;
    mike = function(argFoo) { // Original name: isNoneSubscription
        entity = _closure1_slot8;
        mike = entity.NONE_MONTH;
        zulu = new Array(4);
        zulu[0] = mike;
        mike = entity.NONE_3_MONTH;
        zulu[1] = mike;
        mike = entity.NONE_6_MONTH;
        zulu[2] = mike;
        entity = entity.NONE_YEAR;
        zulu[3] = entity;
        mike = zulu.includes;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isNoneSubscription'] = mike;
    return entity;
})();