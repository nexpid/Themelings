// app/stores/PremiumPaymentModalStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    offset = function(argFoo) { // Original name: handleSubscribeFailure
        entity = argFoo;
        mike = entity.error;
        _closure1_slot7 = mike;
        entity = undefined;
        return entity;
    };
    verify = function() { // Original name: handleClearError
        entity = null;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot12 = verify;
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = null;
    var _closure1_slot7 = mike;
    var _closure1_slot8 = mike;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: PremiumPaymentModalStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
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
        golf = 'getGiftCode';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = _closure1_slot9;
                zulu = argFoo;
                entity = null;
                if(!(zulu === tango)) { _fun00006_ip = 20; continue _fun00005 }
 16:
                entity = _closure1_slot8;
 20:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'PremiumPaymentModalStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    mike['PREMIUM_PAYMENT_SUBSCRIBE_FAIL'] = offset;
    mike['PREMIUM_PAYMENT_UPDATE_FAIL'] = offset;
    offset = function() { // Original name: handleSubscribeSuccess
        mike = _closure1_slot12;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS'] = offset;
    mike['PREMIUM_PAYMENT_UPDATE_SUCCESS'] = verify;
    mike['PREMIUM_PAYMENT_ERROR_CLEAR'] = verify;
    verify = function(argFoo) { // Original name: handlePayPalTokenizeFailure
        entity = argFoo;
        oscar = entity.message;
        golf = entity.code;
        tango = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        mike = tango.bind(entity)(mike);
        mike = mike.BillingError;
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        verify = tango;
        options = oscar;
        mike = new verify[mike](options, golf, oscar);
        mike = mike instanceof Object ? mike : tango;
        _closure1_slot7 = mike;
        return entity;
    };
    mike['BRAINTREE_TOKENIZE_PAYPAL_FAIL'] = verify;
    verify = function(argFoo) { // Original name: handleVenmoTokenizeFailure
        entity = argFoo;
        oscar = entity.message;
        golf = entity.code;
        tango = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        mike = tango.bind(entity)(mike);
        mike = mike.BillingError;
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        verify = tango;
        options = oscar;
        mike = new verify[mike](options, golf, oscar);
        mike = mike instanceof Object ? mike : tango;
        _closure1_slot7 = mike;
        return entity;
    };
    mike['BRAINTREE_TOKENIZE_VENMO_FAIL'] = verify;
    verify = function(argFoo) { // Original name: handleSKUPurchaseSuccess
        entity = argFoo;
        zulu = entity.giftCode;
        _closure1_slot8 = zulu;
        entity = entity.skuId;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    mike['SKU_PURCHASE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleSKUPurchaseFail
        entity = argFoo;
        mike = entity.error;
        _closure1_slot7 = mike;
        entity = undefined;
        return entity;
    };
    mike['SKU_PURCHASE_FAIL'] = verify;
    verify = function(argFoo) { // Original name: handleSKUPurchaseAwaitConfirmation
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            mike = entity.isGift;
            if(!mike) { _fun00008_ip = 25; continue _fun00007 }
 12:
            mike = entity.skuId;
            _closure1_slot9 = mike;
 25:
            entity = undefined;
            return entity;
        }
    };
    mike['SKU_PURCHASE_AWAIT_CONFIRMATION'] = verify;
    tango = function(argFoo) { // Original name: handleGiftCodeCreate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            entity = entity.giftCode;
            zulu = entity.uses;
            mike = 0;
            if(!(mike === zulu)) { _fun00010_ip = 51; continue _fun00009 }
 21:
            tango = entity.sku_id;
            zulu = _closure1_slot9;
            if(!(tango === zulu)) { _fun00010_ip = 51; continue _fun00009 }
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
    mike['GIFT_CODE_CREATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/PremiumPaymentModalStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();