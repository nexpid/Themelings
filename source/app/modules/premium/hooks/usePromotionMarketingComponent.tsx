// app/modules/premium/hooks/usePromotionMarketingComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/usePromotionMarketingComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePromotionMarketingComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.maybeFetchActivePromotions;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var6)(var2, var1);
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 5;
            var1 = var7[var5];
            var9 = undefined;
            var11 = var6.bind(var9)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var8 = new Array(2);
            var8[0] = var1;
            var2 = _closure1_slot4;
            var8[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getMarketingComponentByType;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var8 = var2.promotionId;
                    var7 = _closure1_slot5;
                    var6 = var7.getPromotionByTypeAndId;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 6;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var9.bind(var5)(var3);
                    var3 = var3.PromotionTypes;
                    var3 = var3.MARKETING_MOMENT;
                    var3 = var6.bind(var7)(var3, var8);
                    var6 = var1 == var3;
                    if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var3.trialId;
case 4:
                    if(!(var1 != var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot4;
                    var4 = var5.getUserTrialOffer;
                    var3 = var3.trialId;
                    var4 = var4.bind(var5)(var3);
                    if(!(var1 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var4.expires_at;
                    if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 10:
                    var3 = global;
                    var6 = var3.Date;
                    var5 = var6.parse;
                    var4 = var4.expires_at;
                    var4 = var5.bind(var6)(var4);
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    if(!(!(var4 < var3))) { _fun0002_ip = 8; continue _fun0002 }
case 6:
                    return var2;
case 8:
                    return var1;
case 2:
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var8, var2);
            var _closure2_slot1 = var2;
            var5 = var7[var5];
            var7 = var6.bind(var9)(var5);
            var6 = var7.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getPromotionByTypeAndId;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 6;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.PromotionTypes;
                    var2 = var1.MARKETING_MOMENT;
                    var7 = _closure2_slot1;
                    var1 = null;
                    var7 = var1 == var7;
                    if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var6 = _closure2_slot1;
                    var5 = var6.promotionId;
case 11:
                    var6 = var1 != var5;
                    var1 = '';
                    if(!var6) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var1 = var5;
case 13:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5, var1);
            var1 = null;
            var6 = var1 == var5;
            var8 = undefined;
            if(var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var5.endDate;
case 15:
            var _closure2_slot2 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useState;
            var5 = false;
            var6 = var6.bind(var7)(var5);
            var5 = _closure1_slot2;
            var3 = 2;
            var6 = var5.bind(var9)(var6, var3);
            var3 = 0;
            var3 = var6[var3];
            var5 = 1;
            var5 = var6[var5];
            var _closure2_slot3 = var5;
            var5 = var7.useRef;
            var5 = var5.bind(var7)(var1);
            var _closure2_slot4 = var5;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var8;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var5 = _closure2_slot3;
                    var2 = undefined;
                    var4 = false;
                    var4 = var5.bind(var2)(var4);
                    var4 = global;
                    var5 = var4.clearTimeout;
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    var4 = var5.bind(var2)(var4);
                    return var2;
case 17:
                    var4 = _closure2_slot2;
                    var2 = var4.getTime;
                    var5 = var2.bind(var4)();
                    var2 = global;
                    var6 = var2.Date;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var6 = var5 - var4;
                    var4 = 0;
                    if(!(var6 > var4)) { _fun0004_ip = 4; continue _fun0004 }
case 19:
                    var5 = 86400000;
                    if(!(!(var6 < var5))) { _fun0004_ip = 20; continue _fun0004 }
case 4:
                    if(!(var6 <= var4)) { _fun0004_ip = 21; continue _fun0004 }
case 7:
                    var7 = _closure2_slot3;
                    var5 = undefined;
                    var4 = true;
                    var4 = var7.bind(var5)(var4);
                    _fun0004_ip = 21; continue _fun0004;
case 20:
                    var7 = _closure2_slot3;
                    var5 = undefined;
                    var4 = false;
                    var4 = var7.bind(var5)(var4);
                    var7 = var2.clearTimeout;
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    var4 = var7.bind(var5)(var4);
                    var3 = _closure2_slot4;
                    var4 = var2.setTimeout;
                    var2 = function() {
                        var3 = _closure2_slot3;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2, var6);
                    var3['current'] = var2;
case 21:
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var1 = _closure2_slot4;
                        var2 = var1.current;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var1 = null;
            if(var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var3['usePromotionMarketingComponent'] = var2;
    return var1;
})();