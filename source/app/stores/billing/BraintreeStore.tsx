// app/stores/billing/BraintreeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun41943: for(var _fun41943_ip = 0; ; ) switch(_fun41943_ip) {
 0:
        report = argBar;
        golf = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscar;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun41944: for(var _fun41944_ip = 0; ; ) switch(_fun41944_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot5;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot4;
                entity = _closure1_slot17;
                entity = entity.bind(zulu)();
                if(entity) { _fun41944_ip = 51; continue _fun41944 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, oscar);
                _fun41944_ip = 92; continue _fun41944;
 51:
                golf = global;
                options = golf.Reflect;
                golf = options.construct;
                if(oscar) { _fun41944_ip = 71; continue _fun41944 }
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
        var _closure1_slot16 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun41945: for(var _fun41945_ip = 0; ; ) switch(_fun41945_ip) {
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
                _fun41945_ip = 74; continue _fun41945;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot17 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot17 = entity;
        mike = global;
        offset = mike.Object;
        verify = offset.defineProperty;
        options = {};
        entity = true;
        options['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zulu, entity, options);
        entity = 0;
        options = oscar[entity];
        entity = undefined;
        options = golf.bind(entity)(options);
        var _closure1_slot2 = options;
        options = 1;
        options = oscar[options];
        options = golf.bind(entity)(options);
        var _closure1_slot3 = options;
        options = 2;
        options = oscar[options];
        options = golf.bind(entity)(options);
        var _closure1_slot4 = options;
        options = 3;
        options = oscar[options];
        options = golf.bind(entity)(options);
        var _closure1_slot5 = options;
        options = 4;
        options = oscar[options];
        options = golf.bind(entity)(options);
        var _closure1_slot6 = options;
        options = 5;
        options = oscar[options];
        options = report.bind(entity)(options);
        verify = options.Endpoints;
        var _closure1_slot7 = verify;
        verify = options.PaymentGateways;
        var _closure1_slot8 = verify;
        options = options.PaymentSourceTypes;
        var _closure1_slot9 = options;
        options = null;
        var _closure1_slot12 = options;
        var _closure1_slot13 = options;
        var _closure1_slot14 = options;
        options = 6;
        options = oscar[options];
        verify = report.bind(entity)(options);
        options = verify.isDesktop;
        options = options.bind(verify)();
        if(!options) { _fun41943_ip = 268; continue _fun41943 }
 234:
        options = mike.window;
        mike = {};
        verify = function() { // Original name: getReturnUrlPrefix
            _fun41948: for(var _fun41948_ip = 0; ; ) switch(_fun41948_ip) {
 0:
                zulu = _closure1_slot10;
                mike = null;
                if(!(mike != zulu)) { _fun41948_ip = 81; continue _fun41948 }
 13:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 7;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.getAPIBaseURL;
                mike = mike.bind(zulu)();
                report = _closure1_slot7;
                tango = report.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                zulu = _closure1_slot8;
                zulu = zulu.BRAINTREE;
                entity = _closure1_slot10;
                entity = tango.bind(report)(zulu, entity);
                entity = mike + entity;
                return entity;
 81:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                golf = 'popupBridgeState is unset';
                options = mike;
                entity = new options[zulu](golf, oscar);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        mike['getReturnUrlPrefix'] = verify;
        verify = function(argFoo) { // Original name: open
            tango = argFoo;
            var _closure1_slot11 = tango;
            mike = global;
            zulu = mike.window;
            mike = zulu.open;
            mike = mike.bind(zulu)(tango);
            mike = _closure1_slot15;
            entity = mike.emitChange;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        mike['open'] = verify;
        options['popupBridge'] = mike;
 268:
        mike = 8;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        options = mike.Store;
        mike = function(argFoo) {
            tango = function() { // Original name: BraintreeStore
                report = this;
                tango = undefined;
                entity = undefined;
                oscar = _closure1_slot2;
                zulu = _closure2_slot0;
                oscar = oscar.bind(tango)(report, zulu);
                mike = _closure1_slot16;
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
            golf = 'getPayPalClient';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot13;
                return entity;
            };
            report['value'] = golf;
            entity[1] = report;
            report = {};
            golf = 'getVenmoClient';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot14;
                return entity;
            };
            report['value'] = golf;
            entity[2] = report;
            report = {};
            golf = 'getLastURL';
            report['key'] = golf;
            oscar = function() { // Original name: value
                entity = _closure1_slot11;
                return entity;
            };
            report['value'] = oscar;
            entity[3] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        verify = mike.bind(entity)(options);
        mike = 'BraintreeStore';
        verify['displayName'] = mike;
        mike = 9;
        mike = oscar[mike];
        foxtrot = golf.bind(entity)(mike);
        mike = {};
        golf = function(argFoo) { // Original name: handleBraintreeCreateClientSuccess
            entity = argFoo;
            mike = entity.client;
            _closure1_slot12 = mike;
            entity = undefined;
            return entity;
        };
        mike['BRAINTREE_CREATE_CLIENT_SUCCESS'] = golf;
        golf = function(argFoo) { // Original name: handleBraintreeCreatePayPalClientSuccess
            entity = argFoo;
            mike = entity.paypalClient;
            _closure1_slot13 = mike;
            entity = undefined;
            return entity;
        };
        mike['BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS'] = golf;
        golf = function(argFoo) { // Original name: handleBillingPopupBridgeCallback
            _fun41958: for(var _fun41958_ip = 0; ; ) switch(_fun41958_ip) {
 0:
                entity = argFoo;
                oscar = entity.paymentSourceType;
                tango = entity.state;
                mike = entity.path;
                entity = entity.query;
                report = _closure1_slot9;
                report = report.PAYPAL;
                if(!(oscar === report)) { _fun41958_ip = 103; continue _fun41958 }
 42:
                zulu = _closure1_slot10;
                if(!(tango === zulu)) { _fun41958_ip = 103; continue _fun41958 }
 50:
                zulu = global;
                zulu = zulu.window;
                zulu = zulu.popupBridge;
                tango = zulu.onComplete;
                report = 'function';
                zulu = typeof tango;
                if(!(report === zulu)) { _fun41958_ip = 103; continue _fun41958 }
 81:
                zulu = {};
                zulu['path'] = mike;
                zulu['queryItems'] = entity;
                mike = undefined;
                entity = null;
                entity = tango.bind(mike)(entity, zulu);
 103:
                entity = undefined;
                return entity;
            }
        };
        mike['BILLING_POPUP_BRIDGE_CALLBACK'] = golf;
        golf = function(argFoo) { // Original name: handleBillingPopupBridgeStateUpdate
            _fun41959: for(var _fun41959_ip = 0; ; ) switch(_fun41959_ip) {
 0:
                entity = argFoo;
                tango = entity.paymentSourceType;
                mike = entity.state;
                zulu = _closure1_slot9;
                zulu = zulu.PAYPAL;
                if(!(tango === zulu)) { _fun41959_ip = 35; continue _fun41959 }
 31:
                var _closure1_slot10 = mike;
 35:
                entity = undefined;
                return entity;
            }
        };
        mike['BILLING_POPUP_BRIDGE_STATE_UPDATE'] = golf;
        golf = function() { // Original name: handleBraintreeTeardownPayPalClient
            entity = null;
            _closure1_slot13 = entity;
            entity = undefined;
            return entity;
        };
        mike['BRAINTREE_TEARDOWN_PAYPAL_CLIENT'] = golf;
        golf = function(argFoo) { // Original name: handleBraintreeCreateVenmoClientSuccess
            entity = argFoo;
            mike = entity.venmoClient;
            _closure1_slot14 = mike;
            entity = undefined;
            return entity;
        };
        mike['BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS'] = golf;
        golf = function() { // Original name: handleBraintreeTeardownVenmoClient
            entity = null;
            _closure1_slot14 = entity;
            entity = undefined;
            return entity;
        };
        mike['BRAINTREE_TEARDOWN_VENMO_CLIENT'] = golf;
        golf = verify.prototype;
        golf = Object.create(golf, {constructor: {value: verify}});
        backup = golf;
        romeo = mike;
        mike = new backup[verify](foxtrot, romeo, yankee);
        mike = mike instanceof Object ? mike : golf;
        var _closure1_slot15 = mike;
        tango = 10;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'stores/billing/BraintreeStore.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();