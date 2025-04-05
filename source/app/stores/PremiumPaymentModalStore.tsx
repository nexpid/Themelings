// app/stores/PremiumPaymentModalStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    offset = function(argFoo) { // Original name: handleSubscribeFailure
        entity = argFoo;
        michal = entity.error;
        _closure1_slot7 = michal;
        entity = undefined;
        return entity;
    };
    verify = function() { // Original name: handleClearError
        entity = null;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot11 = verify;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = null;
    var _closure1_slot7 = michal;
    var _closure1_slot8 = michal;
    var _closure1_slot9 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: PremiumPaymentModalStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot10;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 69; continue _fun00003 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00004_ip = 105; continue _fun00003;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'paymentError';
        report['key'] = entity;
        entity = function() { // Original name: get
            entity = _closure1_slot7;
            return entity;
        };
        report['get'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'getGiftCode';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure1_slot9;
                zuuluu = argFoo;
                entity = null;
                if(!(zuuluu === tangon)) { _fun00006_ip = 20; continue _fun00005 }
 16:
                entity = _closure1_slot8;
 20:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'PremiumPaymentModalStore';
    option['displayName'] = michal;
    michal = 7;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    michal['PREMIUM_PAYMENT_SUBSCRIBE_FAIL'] = offset;
    michal['PREMIUM_PAYMENT_UPDATE_FAIL'] = offset;
    offset = function() { // Original name: handleSubscribeSuccess
        michal = _closure1_slot11;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS'] = offset;
    michal['PREMIUM_PAYMENT_UPDATE_SUCCESS'] = verify;
    michal['PREMIUM_PAYMENT_ERROR_CLEAR'] = verify;
    verify = function(argFoo) { // Original name: handlePayPalTokenizeFailure
        entity = argFoo;
        oscard = entity.message;
        golfie = entity.code;
        tangon = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        michal = michal.BillingError;
        tangon = michal.prototype;
        tangon = Object.create(tangon, {constructor: {value: michal}});
        verify = tangon;
        option = oscard;
        michal = new verify[michal](option, golfie, oscard);
        michal = michal instanceof Object ? michal : tangon;
        _closure1_slot7 = michal;
        return entity;
    };
    michal['BRAINTREE_TOKENIZE_PAYPAL_FAIL'] = verify;
    verify = function(argFoo) { // Original name: handleVenmoTokenizeFailure
        entity = argFoo;
        oscard = entity.message;
        golfie = entity.code;
        tangon = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        michal = michal.BillingError;
        tangon = michal.prototype;
        tangon = Object.create(tangon, {constructor: {value: michal}});
        verify = tangon;
        option = oscard;
        michal = new verify[michal](option, golfie, oscard);
        michal = michal instanceof Object ? michal : tangon;
        _closure1_slot7 = michal;
        return entity;
    };
    michal['BRAINTREE_TOKENIZE_VENMO_FAIL'] = verify;
    verify = function(argFoo) { // Original name: handleSKUPurchaseSuccess
        entity = argFoo;
        zuuluu = entity.giftCode;
        _closure1_slot8 = zuuluu;
        entity = entity.skuId;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    michal['SKU_PURCHASE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleSKUPurchaseFail
        entity = argFoo;
        michal = entity.error;
        _closure1_slot7 = michal;
        entity = undefined;
        return entity;
    };
    michal['SKU_PURCHASE_FAIL'] = verify;
    verify = function(argFoo) { // Original name: handleSKUPurchaseAwaitConfirmation
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.isGift;
            if(!michal) { _fun00008_ip = 25; continue _fun00007 }
 12:
            michal = entity.skuId;
            _closure1_slot9 = michal;
 25:
            entity = undefined;
            return entity;
        }
    };
    michal['SKU_PURCHASE_AWAIT_CONFIRMATION'] = verify;
    tangon = function(argFoo) { // Original name: handleGiftCodeCreate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            entity = entity.giftCode;
            zuuluu = entity.uses;
            michal = 0;
            if(!(michal === zuuluu)) { _fun00010_ip = 51; continue _fun00009 }
 21:
            tangon = entity.sku_id;
            zuuluu = _closure1_slot9;
            if(!(tangon === zuuluu)) { _fun00010_ip = 51; continue _fun00009 }
 38:
            entity = entity.code;
            _closure1_slot8 = entity;
            entity = undefined;
            return entity;
 51:
            entity = false;
            return entity;
        }
    };
    michal['GIFT_CODE_CREATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/PremiumPaymentModalStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();