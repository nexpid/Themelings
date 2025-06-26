// app/records/SubscriptionPlanRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    tangon = function(argFoo, argBar) { // Original name: getPriceFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.amount;
        entity['amount'] = zuuluu;
        michal = michal.currency;
        entity['currency'] = michal;
        michal = 0;
        entity['tax'] = michal;
        michal = argBar;
        entity['taxInclusive'] = michal;
        return entity;
    };
    var _closure1_slot10 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = option[report];
    oscard = oscard.bind(entity)(report);
    report = 6;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.GIFTABLE_CURRENCIES;
    var _closure1_slot5 = report;
    report = 7;
    report = option[report];
    report = golfie.bind(entity)(report);
    verify = report.PremiumSubscriptionSKUs;
    var _closure1_slot6 = verify;
    verify = report.PremiumTypes;
    var _closure1_slot7 = verify;
    report = report.SubscriptionPlans;
    var _closure1_slot8 = report;
    report = function(argFoo) {
        report = function(argFoo) { // Original name: SubscriptionPlanRecord
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                report = this;
                entity = _closure1_slot0;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(report, zuuluu);
                entity = _closure1_slot3;
                offset = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot2;
                entity = _closure1_slot9;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 65; continue _fun00003 }
 52:
                entity = offset.apply;
                entity = entity.bind(offset)(report, tangon);
                _fun00004_ip = 103; continue _fun00003;
 65:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(tangon)(report);
                golfie = oscard.constructor;
                oscard = new Array(0);
                entity = option.bind(verify)(offset, oscard, golfie);
 103:
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = michal.id;
                entity['id'] = zuuluu;
                zuuluu = michal.name;
                entity['name'] = zuuluu;
                zuuluu = michal.interval;
                entity['interval'] = zuuluu;
                zuuluu = michal.intervalCount;
                entity['intervalCount'] = zuuluu;
                zuuluu = michal.taxInclusive;
                entity['taxInclusive'] = zuuluu;
                zuuluu = michal.skuId;
                entity['skuId'] = zuuluu;
                zuuluu = michal.currency;
                entity['currency'] = zuuluu;
                zuuluu = michal.price;
                entity['price'] = zuuluu;
                zuuluu = michal.premiumUserPrice;
                entity['premiumUserPrice'] = zuuluu;
                zuuluu = michal.prices;
                entity['prices'] = zuuluu;
                zuuluu = michal.fallbackPrice;
                if(!zuuluu) { _fun00004_ip = 260; continue _fun00003 }
 236:
                zuuluu = michal.fallbackPrice;
                entity['fallbackPrice'] = zuuluu;
                michal = michal.fallbackCurrency;
                entity['fallbackCurrency'] = michal;
 260:
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot4;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot1;
        oscard = {};
        michal = 'premiumSubscriptionType';
        oscard['key'] = michal;
        michal = function() { // Original name: get
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                zuuluu = entity.skuId;
                michal = _closure1_slot6;
                michal = michal.LEGACY;
                if(!(michal !== zuuluu)) { _fun00006_ip = 96; continue _fun00005 }
 26:
                michal = _closure1_slot6;
                michal = michal.TIER_2;
                if(!(michal !== zuuluu)) { _fun00006_ip = 96; continue _fun00005 }
 40:
                michal = _closure1_slot6;
                michal = michal.TIER_1;
                if(!(michal !== zuuluu)) { _fun00006_ip = 84; continue _fun00005 }
 54:
                michal = _closure1_slot6;
                michal = michal.TIER_0;
                if(!(michal !== zuuluu)) { _fun00006_ip = 72; continue _fun00005 }
 68:
                michal = null;
                return michal;
 72:
                michal = _closure1_slot7;
                michal = michal.TIER_0;
                return michal;
 84:
                michal = _closure1_slot7;
                michal = michal.TIER_1;
                return michal;
 96:
                entity = _closure1_slot7;
                entity = entity.TIER_2;
                return entity;
            }
        };
        oscard['get'] = michal;
        michal = new Array(5);
        michal[0] = oscard;
        oscard = {};
        golfie = 'isGiftableCurrency';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            zuuluu = _closure1_slot5;
            michal = zuuluu.has;
            entity = this;
            entity = entity.currency;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard['get'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'giftPrice';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = this;
                michal = entity.isGiftableCurrency;
                if(michal) { _fun00008_ip = 75; continue _fun00007 }
 14:
                michal = entity.fallbackPrice;
                zuuluu = 'number';
                michal = typeof michal;
                if(!(zuuluu !== michal)) { _fun00008_ip = 67; continue _fun00007 }
 31:
                michal = global;
                tangon = michal.Error;
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                report = 'Missing fallback price for non-giftable currency';
                oscard = zuuluu;
                michal = new oscard[tangon](report, tangon);
                michal = michal instanceof Object ? michal : zuuluu;
                throw michal;
 67:
                michal = entity.fallbackPrice;
                return michal;
 75:
                entity = entity.price;
                return entity;
            }
        };
        oscard['get'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'getPrice';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = arguments[0];
                michal = this;
                zuuluu = undefined;
                if(!(entity === zuuluu)) { _fun00010_ip = 14; continue _fun00009 }
 12:
                entity = false;
 14:
                if(entity) { _fun00010_ip = 25; continue _fun00009 }
 17:
                entity = michal.price;
                _fun00010_ip = 33; continue _fun00009;
 25:
                entity = michal.giftPrice;
 33:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'toServerData';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = {};
            var _closure3_slot1 = zuuluu;
            tangon = global;
            oscard = tangon.Object;
            report = oscard.keys;
            tangon = michal.prices;
            report = report.bind(oscard)(tangon);
            tangon = report.forEach;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = _closure3_slot0;
                michal = michal.prices;
                tangon = michal[zuuluu];
                michal = _closure3_slot1;
                entity = {};
                report = {};
                oscard = tangon.countryPrices;
                oscard = oscard.countryCode;
                report['country_code'] = oscard;
                oscard = tangon.countryPrices;
                oscard = oscard.prices;
                report['prices'] = oscard;
                entity['country_prices'] = report;
                tangon = tangon.paymentSourcePrices;
                entity['payment_source_prices'] = tangon;
                michal[zuuluu] = entity;
                entity = undefined;
                return entity;
            };
            entity = tangon.bind(report)(entity);
            entity = {};
            tangon = michal.id;
            entity['id'] = tangon;
            tangon = michal.name;
            entity['name'] = tangon;
            tangon = michal.skuId;
            entity['sku_id'] = tangon;
            tangon = michal.interval;
            entity['interval'] = tangon;
            tangon = michal.intervalCount;
            entity['interval_count'] = tangon;
            tangon = michal.taxInclusive;
            entity['tax_inclusive'] = tangon;
            tangon = michal.currency;
            entity['currency'] = tangon;
            tangon = michal.price;
            entity['price'] = tangon;
            entity['prices'] = zuuluu;
            zuuluu = michal.price;
            entity['price_tier'] = zuuluu;
            zuuluu = michal.premiumUserPrice;
            entity['discount_price'] = zuuluu;
            zuuluu = michal.fallbackPrice;
            entity['fallback_price'] = zuuluu;
            michal = michal.fallbackCurrency;
            entity['fallback_currency'] = michal;
            return entity;
        };
        oscard['value'] = golfie;
        michal[4] = oscard;
        oscard = {};
        golfie = 'createFromServer';
        oscard['key'] = golfie;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                var _closure3_slot0 = report;
                entity = {};
                tangon = report.prices;
                michal = null;
                if(!(michal != tangon)) { _fun00012_ip = 66; continue _fun00011 }
 23:
                tangon = global;
                golfie = tangon.Object;
                oscard = golfie.keys;
                tangon = report.prices;
                golfie = oscard.bind(golfie)(tangon);
                oscard = golfie.reduce;
                tangon = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        zuuluu = argBar;
                        report = _closure3_slot0;
                        oscard = report.prices;
                        report = null;
                        if(!(report != oscard)) { _fun00014_ip = 157; continue _fun00013 }
 30:
                        michal = _closure3_slot0;
                        michal = michal.prices;
                        report = michal[zuuluu];
                        michal = {};
                        oscard = {};
                        golfie = report.country_prices;
                        golfie = golfie.country_code;
                        oscard['countryCode'] = golfie;
                        golfie = report.country_prices;
                        verify = golfie.prices;
                        option = verify.map;
                        golfie = function(argFoo) {
                            tangon = _closure1_slot10;
                            entity = _closure3_slot0;
                            zuuluu = entity.tax_inclusive;
                            michal = undefined;
                            entity = argFoo;
                            entity = tangon.bind(michal)(entity, zuuluu);
                            return entity;
                        };
                        golfie = option.bind(verify)(golfie);
                        oscard['prices'] = golfie;
                        michal['countryPrices'] = oscard;
                        oscard = global;
                        golfie = oscard.Object;
                        oscard = golfie.entries;
                        report = report.payment_source_prices;
                        golfie = oscard.bind(golfie)(report);
                        oscard = golfie.reduce;
                        report = function(argFoo, argBar) {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                entity = argFoo;
                                oscard = argBar;
                                michal = oscard[Symbol.iterator];
                                oscard = michal().next;
                                report = oscard().value;
                                zuuluu = michal;
                                option = undefined;
                                tangon = zuuluu === option;
                                zuuluu = undefined;
                                if(tangon) { _fun00016_ip = 30; continue _fun00015 }
 27:
                                zuuluu = report;
 30:
                                report = undefined;
                                if(tangon) { _fun00016_ip = 60; continue _fun00015 }
 35:
                                golfie = oscard().value;
                                oscard = michal;
                                oscard = oscard === option;
                                report = undefined;
                                tangon = oscard;
                                if(oscard) { _fun00016_ip = 60; continue _fun00015 }
 54:
                                report = golfie;
                                tangon = oscard;
 60:
                                if(tangon) { _fun00016_ip = 66; continue _fun00015 }
 63:
                                michal.return();
 66:
                                tangon = report.map;
                                michal = function(argFoo) {
                                    tangon = _closure1_slot10;
                                    entity = _closure3_slot0;
                                    zuuluu = entity.tax_inclusive;
                                    michal = undefined;
                                    entity = argFoo;
                                    entity = tangon.bind(michal)(entity, zuuluu);
                                    return entity;
                                };
                                michal = tangon.bind(report)(michal);
                                entity[zuuluu] = michal;
                                return entity;
                            }
                        };
                        tangon = {};
                        tangon = oscard.bind(golfie)(report, tangon);
                        michal['paymentSourcePrices'] = tangon;
                        entity[zuuluu] = michal;
                        return entity;
 157:
                        return entity;
                    }
                };
                zuuluu = {};
                entity = oscard.bind(golfie)(tangon, zuuluu);
 66:
                zuuluu = {};
                tangon = report.id;
                zuuluu['id'] = tangon;
                tangon = report.name;
                zuuluu['name'] = tangon;
                tangon = report.interval;
                zuuluu['interval'] = tangon;
                tangon = report.interval_count;
                zuuluu['intervalCount'] = tangon;
                tangon = report.tax_inclusive;
                zuuluu['taxInclusive'] = tangon;
                tangon = report.sku_id;
                zuuluu['skuId'] = tangon;
                tangon = report.currency;
                zuuluu['currency'] = tangon;
                tangon = report.price;
                zuuluu['price'] = tangon;
                zuuluu['prices'] = entity;
                entity = report.discount_price;
                zuuluu['premiumUserPrice'] = entity;
                entity = report.fallback_price;
                entity = michal != entity;
                if(!entity) { _fun00012_ip = 193; continue _fun00011 }
 181:
                tangon = report.fallback_price;
                michal = 0;
                entity = michal !== tangon;
 193:
                if(!entity) { _fun00012_ip = 239; continue _fun00011 }
 196:
                entity = global;
                tangon = entity.Object;
                michal = tangon.assign;
                entity = {};
                oscard = report.fallback_price;
                entity['fallbackPrice'] = oscard;
                report = report.fallback_currency;
                entity['fallbackCurrency'] = report;
                entity = michal.bind(tangon)(zuuluu, entity);
 239:
                entity = _closure2_slot0;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                offset = michal;
                verify = zuuluu;
                entity = new offset[entity](verify, option);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    report = report.bind(entity)(oscard);
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'records/SubscriptionPlanRecord.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['getPriceFromServer'] = tangon;
    michal = function(argFoo) { // Original name: isNoneSubscription
        entity = _closure1_slot8;
        michal = entity.NONE_MONTH;
        zuuluu = new Array(4);
        zuuluu[0] = michal;
        michal = entity.NONE_3_MONTH;
        zuuluu[1] = michal;
        michal = entity.NONE_6_MONTH;
        zuuluu[2] = michal;
        entity = entity.NONE_YEAR;
        zuuluu[3] = entity;
        michal = zuuluu.includes;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isNoneSubscription'] = michal;
    return entity;
})();