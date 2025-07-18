// app/modules/premium/promotions/PromotionsManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function PromotionsManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var3 = _closure2_slot1;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 84; continue _fun0002 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 118; continue _fun0002;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var3.bind(var4)(var5, var1);
                var3 = {};
                var6 = var1.onPostConnectionOpen;
                var5 = var6.bind;
                var5 = var5.bind(var6)(var1);
                var3['POST_CONNECTION_OPEN'] = var5;
                var6 = var1.onPostConnectionOpen;
                var5 = var6.bind;
                var5 = var5.bind(var6)(var1);
                var3['EXPERIMENTS_FETCH_SUCCESS'] = var5;
                var1['actions'] = var3;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 116; continue _fun0003 }
 7:
                            var4 = _closure1_slot9;
                            var2 = var4.getCurrentUser;
                            var7 = var2.bind(var4)();
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var4 = var4[var2];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var4);
                            var5 = var6.isPremiumExactly;
                            var4 = _closure1_slot10;
                            var4 = var4.TIER_2;
                            var4 = var5.bind(var6)(var7, var4);
                            if(var4) { _fun0003_ip = 113; continue _fun0003 }
 70:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 9;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.maybeFetchActiveBogoPromotion;
                            var3 = var3.bind(var4)();
                            SaveGenerator(address=104);
 102:
                            return var3;
 104:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(!var4) { _fun0003_ip = 113; continue _fun0003 }
 110:
                            return var3;
 113:
                            return var2;
 116:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['maybeFetchBogoPromotion'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var7 = 'onPostConnectionOpen';
        var5['key'] = var7;
        var7 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 50; continue _fun0004 }
 10:
                    var2 = var3.maybeFetchActiveOutboundPromotions;
                    var2 = var2.bind(var3)();
                    var2 = var3.maybeFetchBogoPromotion;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=36);
 34:
                    return var2;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 47; continue _fun0004 }
 42:
                    var3 = undefined;
                    return var3;
 47:
                    return var2;
 50:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var1 = function onPostConnectionOpen() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'maybeFetchActiveOutboundPromotions';
        var5['key'] = var7;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot9;
                var1 = var3.getCurrentUser;
                var7 = var1.bind(var3)();
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var3 = var6[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.isPremiumExactly;
                var3 = _closure1_slot10;
                var3 = var3.TIER_2;
                var3 = var4.bind(var5)(var7, var3);
                var5 = _closure1_slot0;
                var4 = 10;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var7 = var4.OutboundPromoDesktopUpsellExperiment;
                var6 = var7.getCurrentConfig;
                var5 = {};
                var4 = 'maybeFetchActiveOutboundPromotions';
                var5['location'] = var4;
                var4 = {};
                var8 = false;
                var4['autoTrackExposure'] = var8;
                var4['disable'] = var3;
                var4 = var6.bind(var7)(var5, var4);
                var4 = var4.enabled;
                if(var3) { _fun0005_ip = 131; continue _fun0005 }
 128:
                var3 = var4;
 131:
                if(!var3) { _fun0005_ip = 164; continue _fun0005 }
 134:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchActiveOutboundPromotions;
                var2 = var2.bind(var3)();
 164:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();