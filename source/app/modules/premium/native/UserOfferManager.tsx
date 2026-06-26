// app/modules/premium/native/UserOfferManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGateways;
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function UserOfferManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var1['actions'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot7;
                        var1 = var3.getCurrentUser;
                        var7 = var1.bind(var3)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.NitroACOMSubscriptionExperiment;
                        var4 = var5.getConfig;
                        var3 = {};
                        var6 = 'UserOfferManager.handlePostConnectionOpen';
                        var3['location'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.enabled;
                        var6 = undefined;
                        if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = {};
                        var3['offerId'] = var1;
                        var4 = _closure1_slot9;
                        var4 = var4.APPLE_ADVANCED_COMMERCE;
                        var3['paymentGatewayOverride'] = var4;
                        var6 = var3;
case 9:
                        var3 = null;
                        var3 = var3 == var7;
                        if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 11:
                        var4 = var7.verified;
                        var3 = !var4;
case 8:
                        if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var4 = 9;
                        var4 = var8[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isPremium;
                        var3 = var4.bind(var5)(var7);
case 12:
                        if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var5 = _closure1_slot8;
                        var4 = var5.isFetchingOffer;
                        var3 = var4.bind(var5)();
case 14:
                        if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 10;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.fetchUserOffer;
                        var3 = 'MobilePremiumOfferManager';
                        var2 = true;
                        var2 = var4.bind(var5)(var3, var2, var6);
case 16:
                        return var1;
                    }
                };
                var1['handlePostConnectionOpen'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/UserOfferManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();