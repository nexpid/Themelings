// app/stores/billing/BraintreeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscard;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                oscard = argBaz;
                michal = _closure1_slot5;
                zuuluu = undefined;
                entity = argBar;
                verify = michal.bind(zuuluu)(entity);
                michal = _closure1_slot4;
                entity = _closure1_slot17;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 51; continue _fun00003 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tangon, oscard);
                _fun00004_ip = 92; continue _fun00003;
 51:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                if(oscard) { _fun00004_ip = 71; continue _fun00003 }
 67:
                oscard = new Array(0);
 71:
                report = _closure1_slot5;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = golfie.bind(option)(verify, oscard, report);
 92:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure1_slot16 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
                _fun00006_ip = 74; continue _fun00005;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                michal = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot17 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot17 = entity;
        michal = global;
        offset = michal.Object;
        verify = offset.defineProperty;
        option = {};
        entity = true;
        option['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zuuluu, entity, option);
        entity = 0;
        option = oscard[entity];
        entity = undefined;
        option = golfie.bind(entity)(option);
        var _closure1_slot2 = option;
        option = 1;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        var _closure1_slot3 = option;
        option = 2;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        var _closure1_slot4 = option;
        option = 3;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        var _closure1_slot5 = option;
        option = 4;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        var _closure1_slot6 = option;
        option = 5;
        option = oscard[option];
        option = report.bind(entity)(option);
        verify = option.Endpoints;
        var _closure1_slot7 = verify;
        verify = option.PaymentGateways;
        var _closure1_slot8 = verify;
        option = option.PaymentSourceTypes;
        var _closure1_slot9 = option;
        option = null;
        var _closure1_slot12 = option;
        var _closure1_slot13 = option;
        var _closure1_slot14 = option;
        option = 6;
        option = oscard[option];
        verify = report.bind(entity)(option);
        option = verify.isDesktop;
        option = option.bind(verify)();
        if(!option) { _fun00002_ip = 268; continue _fun00001 }
 234:
        option = michal.window;
        michal = {};
        verify = function() { // Original name: getReturnUrlPrefix
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure1_slot10;
                michal = null;
                if(!(michal != zuuluu)) { _fun00008_ip = 81; continue _fun00007 }
 13:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.getAPIBaseURL;
                michal = michal.bind(zuuluu)();
                report = _closure1_slot7;
                tangon = report.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.BRAINTREE;
                entity = _closure1_slot10;
                entity = tangon.bind(report)(zuuluu, entity);
                entity = michal + entity;
                return entity;
 81:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                golfie = 'popupBridgeState is unset';
                option = michal;
                entity = new option[zuuluu](golfie, oscard);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        michal['getReturnUrlPrefix'] = verify;
        verify = function(argFoo) { // Original name: open
            tangon = argFoo;
            var _closure1_slot11 = tangon;
            michal = global;
            zuuluu = michal.window;
            michal = zuuluu.open;
            michal = michal.bind(zuuluu)(tangon);
            michal = _closure1_slot15;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        michal['open'] = verify;
        option['popupBridge'] = michal;
 268:
        michal = 8;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        option = michal.Store;
        michal = function(argFoo) {
            tangon = function() { // Original name: BraintreeStore
                report = this;
                tangon = undefined;
                entity = undefined;
                oscard = _closure1_slot2;
                zuuluu = _closure2_slot0;
                oscard = oscard.bind(tangon)(report, zuuluu);
                michal = _closure1_slot16;
                entity = arguments;
                entity = michal.bind(tangon)(report, zuuluu, entity);
                return entity;
            };
            var _closure2_slot0 = tangon;
            report = _closure1_slot6;
            zuuluu = undefined;
            michal = argFoo;
            michal = report.bind(zuuluu)(tangon, michal);
            michal = _closure1_slot3;
            report = {};
            entity = 'getClient';
            report['key'] = entity;
            entity = function() { // Original name: value
                entity = _closure1_slot12;
                return entity;
            };
            report['value'] = entity;
            entity = new Array(4);
            entity[0] = report;
            report = {};
            golfie = 'getPayPalClient';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot13;
                return entity;
            };
            report['value'] = golfie;
            entity[1] = report;
            report = {};
            golfie = 'getVenmoClient';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot14;
                return entity;
            };
            report['value'] = golfie;
            entity[2] = report;
            report = {};
            golfie = 'getLastURL';
            report['key'] = golfie;
            oscard = function() { // Original name: value
                entity = _closure1_slot11;
                return entity;
            };
            report['value'] = oscard;
            entity[3] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        verify = michal.bind(entity)(option);
        michal = 'BraintreeStore';
        verify['displayName'] = michal;
        michal = 9;
        michal = oscard[michal];
        foxtra = golfie.bind(entity)(michal);
        michal = {};
        golfie = function(argFoo) { // Original name: handleBraintreeCreateClientSuccess
            entity = argFoo;
            michal = entity.client;
            _closure1_slot12 = michal;
            entity = undefined;
            return entity;
        };
        michal['BRAINTREE_CREATE_CLIENT_SUCCESS'] = golfie;
        golfie = function(argFoo) { // Original name: handleBraintreeCreatePayPalClientSuccess
            entity = argFoo;
            michal = entity.paypalClient;
            _closure1_slot13 = michal;
            entity = undefined;
            return entity;
        };
        michal['BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS'] = golfie;
        golfie = function(argFoo) { // Original name: handleBillingPopupBridgeCallback
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                oscard = entity.paymentSourceType;
                tangon = entity.state;
                michal = entity.path;
                entity = entity.query;
                report = _closure1_slot9;
                report = report.PAYPAL;
                if(!(oscard === report)) { _fun00010_ip = 104; continue _fun00009 }
 43:
                zuuluu = _closure1_slot10;
                if(!(tangon === zuuluu)) { _fun00010_ip = 104; continue _fun00009 }
 51:
                zuuluu = global;
                zuuluu = zuuluu.window;
                zuuluu = zuuluu.popupBridge;
                tangon = zuuluu.onComplete;
                report = 'function';
                zuuluu = typeof tangon;
                if(!(report === zuuluu)) { _fun00010_ip = 104; continue _fun00009 }
 82:
                zuuluu = {};
                zuuluu['path'] = michal;
                zuuluu['queryItems'] = entity;
                michal = undefined;
                entity = null;
                entity = tangon.bind(michal)(entity, zuuluu);
 104:
                entity = undefined;
                return entity;
            }
        };
        michal['BILLING_POPUP_BRIDGE_CALLBACK'] = golfie;
        golfie = function(argFoo) { // Original name: handleBillingPopupBridgeStateUpdate
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                tangon = entity.paymentSourceType;
                michal = entity.state;
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.PAYPAL;
                if(!(tangon === zuuluu)) { _fun00012_ip = 35; continue _fun00011 }
 31:
                var _closure1_slot10 = michal;
 35:
                entity = undefined;
                return entity;
            }
        };
        michal['BILLING_POPUP_BRIDGE_STATE_UPDATE'] = golfie;
        golfie = function() { // Original name: handleBraintreeTeardownPayPalClient
            entity = null;
            _closure1_slot13 = entity;
            entity = undefined;
            return entity;
        };
        michal['BRAINTREE_TEARDOWN_PAYPAL_CLIENT'] = golfie;
        golfie = function(argFoo) { // Original name: handleBraintreeCreateVenmoClientSuccess
            entity = argFoo;
            michal = entity.venmoClient;
            _closure1_slot14 = michal;
            entity = undefined;
            return entity;
        };
        michal['BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS'] = golfie;
        golfie = function() { // Original name: handleBraintreeTeardownVenmoClient
            entity = null;
            _closure1_slot14 = entity;
            entity = undefined;
            return entity;
        };
        michal['BRAINTREE_TEARDOWN_VENMO_CLIENT'] = golfie;
        golfie = verify.prototype;
        golfie = Object.create(golfie, {constructor: {value: verify}});
        backup = golfie;
        romeon = michal;
        michal = new backup[verify](foxtra, romeon, yankee);
        michal = michal instanceof Object ? michal : golfie;
        var _closure1_slot15 = michal;
        tangon = 10;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'stores/billing/BraintreeStore.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();