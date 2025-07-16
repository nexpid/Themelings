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
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot9 = tangon;
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
    verify = report.PremiumSubscriptionSKUs;
    var _closure1_slot5 = verify;
    verify = report.PremiumTypes;
    var _closure1_slot6 = verify;
    report = report.SubscriptionPlans;
    var _closure1_slot7 = report;
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
                entity = _closure1_slot8;
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
                michal = michal.prices;
                entity['prices'] = michal;
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
                michal = _closure1_slot5;
                michal = michal.LEGACY;
                if(!(michal !== zuuluu)) { _fun00006_ip = 96; continue _fun00005 }
 26:
                michal = _closure1_slot5;
                michal = michal.TIER_2;
                if(!(michal !== zuuluu)) { _fun00006_ip = 96; continue _fun00005 }
 40:
                michal = _closure1_slot5;
                michal = michal.TIER_1;
                if(!(michal !== zuuluu)) { _fun00006_ip = 84; continue _fun00005 }
 54:
                michal = _closure1_slot5;
                michal = michal.TIER_0;
                if(!(michal !== zuuluu)) { _fun00006_ip = 72; continue _fun00005 }
 68:
                michal = null;
                return michal;
 72:
                michal = _closure1_slot6;
                michal = michal.TIER_0;
                return michal;
 84:
                michal = _closure1_slot6;
                michal = michal.TIER_1;
                return michal;
 96:
                entity = _closure1_slot6;
                entity = entity.TIER_2;
                return entity;
            }
        };
        oscard['get'] = michal;
        michal = new Array(2);
        michal[0] = oscard;
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
            michal = michal.price;
            entity['price_tier'] = michal;
            return entity;
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'createFromServer';
        oscard['key'] = golfie;
        entity = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                michal = {};
                report = tangon.prices;
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00008_ip = 66; continue _fun00007 }
 23:
                zuuluu = global;
                oscard = zuuluu.Object;
                report = oscard.keys;
                zuuluu = tangon.prices;
                oscard = report.bind(oscard)(zuuluu);
                report = oscard.reduce;
                zuuluu = function(argFoo, argBar) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        zuuluu = argBar;
                        report = _closure3_slot0;
                        oscard = report.prices;
                        report = null;
                        if(!(report != oscard)) { _fun00010_ip = 157; continue _fun00009 }
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
                            tangon = _closure1_slot9;
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
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                                if(tangon) { _fun00012_ip = 30; continue _fun00011 }
 27:
                                zuuluu = report;
 30:
                                report = undefined;
                                if(tangon) { _fun00012_ip = 60; continue _fun00011 }
 35:
                                golfie = oscard().value;
                                oscard = michal;
                                oscard = oscard === option;
                                report = undefined;
                                tangon = oscard;
                                if(oscard) { _fun00012_ip = 60; continue _fun00011 }
 54:
                                report = golfie;
                                tangon = oscard;
 60:
                                if(tangon) { _fun00012_ip = 66; continue _fun00011 }
 63:
                                michal.return();
 66:
                                tangon = report.map;
                                michal = function(argFoo) {
                                    tangon = _closure1_slot9;
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
                entity = {};
                michal = report.bind(oscard)(zuuluu, entity);
 66:
                zuuluu = _closure2_slot0;
                entity = {};
                report = tangon.id;
                entity['id'] = report;
                report = tangon.name;
                entity['name'] = report;
                report = tangon.interval;
                entity['interval'] = report;
                report = tangon.interval_count;
                entity['intervalCount'] = report;
                report = tangon.tax_inclusive;
                entity['taxInclusive'] = report;
                report = tangon.sku_id;
                entity['skuId'] = report;
                report = tangon.currency;
                entity['currency'] = report;
                tangon = tangon.price;
                entity['price'] = tangon;
                entity['prices'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                verify = michal;
                option = entity;
                entity = new verify[zuuluu](option, golfie);
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
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'records/SubscriptionPlanRecord.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['getPriceFromServer'] = tangon;
    michal = function(argFoo) { // Original name: isNoneSubscription
        entity = _closure1_slot7;
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