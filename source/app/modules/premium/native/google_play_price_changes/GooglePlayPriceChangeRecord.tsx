// app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
            _closure1_slot6 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    report = report.bind(entity)(tangon);
    tangon = {};
    golfie = 'PRICE_CHANGE_MODE_UNSPECIFIED';
    tangon['PRICE_CHANGE_MODE_UNSPECIFIED'] = golfie;
    golfie = 'PRICE_DECREASE';
    tangon['PRICE_DECREASE'] = golfie;
    golfie = 'PRICE_INCREASE';
    tangon['PRICE_INCREASE'] = golfie;
    golfie = 'OPT_OUT_PRICE_INCREASE';
    tangon['OPT_OUT_PRICE_INCREASE'] = golfie;
    var _closure1_slot5 = tangon;
    michal = function(argFoo) {
        report = function(argFoo) { // Original name: GooglePlayPriceChangeRecord
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
                entity = _closure1_slot6;
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
                zuuluu = michal.userId;
                entity['userId'] = zuuluu;
                zuuluu = michal.subscriptionId;
                entity['subscriptionId'] = zuuluu;
                zuuluu = michal.oldCurrency;
                entity['oldCurrency'] = zuuluu;
                zuuluu = michal.oldPrice;
                entity['oldPrice'] = zuuluu;
                zuuluu = michal.newCurrency;
                entity['newCurrency'] = zuuluu;
                zuuluu = michal.newPrice;
                entity['newPrice'] = zuuluu;
                zuuluu = michal.priceChangeMode;
                entity['priceChangeMode'] = zuuluu;
                zuuluu = michal.expectedChargeTime;
                entity['expectedChargeTime'] = zuuluu;
                michal = michal.priceChangeId;
                entity['priceChangeId'] = michal;
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
        michal = 'isPriceIncrease';
        oscard['key'] = michal;
        michal = function() { // Original name: get
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = this;
                tangon = zuuluu.priceChangeMode;
                entity = _closure1_slot5;
                entity = entity.PRICE_INCREASE;
                entity = tangon === entity;
                if(entity) { _fun00006_ip = 49; continue _fun00005 }
 29:
                zuuluu = zuuluu.priceChangeMode;
                michal = _closure1_slot5;
                michal = michal.OPT_OUT_PRICE_INCREASE;
                entity = zuuluu === michal;
 49:
                return entity;
            }
        };
        oscard['get'] = michal;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = {};
        golfie = 'isOptOutPriceIncrease';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.priceChangeMode;
            entity = _closure1_slot5;
            entity = entity.OPT_OUT_PRICE_INCREASE;
            entity = michal === entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'isPriceDecrease';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.priceChangeMode;
            entity = _closure1_slot5;
            entity = entity.PRICE_DECREASE;
            entity = michal === entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'isInFuture';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.expectedChargeTime;
            entity = global;
            entity = entity.Date;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            tangon = zuuluu;
            entity = new tangon[entity](zuuluu);
            zuuluu = entity instanceof Object ? entity : zuuluu;
            entity = zuuluu.toISOString;
            entity = entity.bind(zuuluu)();
            entity = michal > entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'createFromServer';
        oscard['key'] = golfie;
        entity = function(argFoo) { // Original name: value
            michal = argFoo;
            zuuluu = _closure2_slot0;
            entity = {};
            tangon = michal.user_id;
            entity['userId'] = tangon;
            tangon = michal.subscription_id;
            entity['subscriptionId'] = tangon;
            tangon = michal.old_currency;
            entity['oldCurrency'] = tangon;
            tangon = michal.old_price;
            entity['oldPrice'] = tangon;
            tangon = michal.new_currency;
            entity['newCurrency'] = tangon;
            tangon = michal.new_price;
            entity['newPrice'] = tangon;
            tangon = michal.price_change_mode;
            entity['priceChangeMode'] = tangon;
            tangon = michal.expected_charge_time;
            entity['expectedChargeTime'] = tangon;
            michal = michal.price_change_id;
            entity['priceChangeId'] = michal;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = michal;
            report = entity;
            entity = new oscard[zuuluu](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    michal = michal.bind(entity)(report);
    report = 6;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = michal;
    zuuluu['GooglePlayPriceChangeMode'] = tangon;
    zuuluu['GooglePlayPriceChangeRecord'] = michal;
    return entity;
})();