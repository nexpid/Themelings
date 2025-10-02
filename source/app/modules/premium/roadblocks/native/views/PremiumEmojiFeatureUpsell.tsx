// app/modules/premium/roadblocks/native/views/PremiumEmojiFeatureUpsell.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {'position': 'absolute', 'bottom': null, 'left': 0, 'right': 0};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.spacing;
        var4 = var3.PX_12;
        var3 = arg1;
        var3 = var3 + var4;
        var2['bottom'] = var3;
        var1['container'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function PremiumEmojiFeatureUpsellTsx1(){const{shouldShow,animatedSheetIndex,inActionSheet}=this.__closure;return shouldShow.get()&&(animatedSheetIndex.get()===1||!inActionSheet||Math.round(animatedSheetIndex.get())===-1);}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/roadblocks/native/views/PremiumEmojiFeatureUpsell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumEmojiFeatureUpsell(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.inActionSheet;
            var _closure2_slot0 = var9;
            var11 = var2.shouldShow;
            var _closure2_slot1 = var11;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var10 = var2.bottom;
            var2 = 6;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var6 = _closure1_slot6;
            var4 = _closure1_slot0;
            var3 = 7;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.EXPRESSION_FOOTER_HEIGHT;
            var3 = var3 + var10;
            var6 = var6.bind(var5)(var3);
            var12 = _closure1_slot3;
            var10 = var12.useContext;
            var3 = 8;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.PortalKeyboardContext;
            var3 = var10.bind(var12)(var3);
            var10 = var3.animatedSheetIndex;
            var _closure2_slot2 = var10;
            var3 = 9;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useDerivedValue;
            var1 = function c() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot2;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 1;
                    var2 = var2 === var4;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot0;
                    var2 = !var4;
case 4:
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = global;
                    var5 = var4.Math;
                    var4 = var5.round;
                    var6 = _closure2_slot2;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var4 = var4.bind(var5)(var3);
                    var3 = -1;
                    var2 = var3 === var4;
case 6:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var7 = {};
            var7['shouldShow'] = var11;
            var7['animatedSheetIndex'] = var10;
            var7['inActionSheet'] = var9;
            var1['__closure'] = var7;
            var7 = 8727441639198.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot7;
            var1['__initData'] = var7;
            var9 = var3.bind(var4)(var1);
            var1 = null;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 10;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['shouldShow'] = var9;
            var9 = _closure1_slot0;
            var8 = 11;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.EntitlementFeatureNames;
            var8 = var8.EMOJIS_EVERYWHERE;
            var6['featureName'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();