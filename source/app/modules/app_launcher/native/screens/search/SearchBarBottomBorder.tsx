// app/modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 3;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var9['borderBottomColor'] = var11;
    var9['borderBottomWidth'] = var10;
    var4['border'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePinnedSearchBarBottomBorder(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.key;
            var12 = var2.triggerScrollHeight;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0001_ip = 25; continue _fun0001 }
 22:
            var12 = 1;
 25:
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var5;
            var2 = _closure1_slot5;
            var7 = var2.bind(var5)();
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 4;
            var4 = var9[var2];
            var10 = var13.bind(var5)(var4);
            var8 = var10.useSharedValue;
            var4 = 0;
            var14 = var8.bind(var10)(var4);
            _closure2_slot1 = var14;
            var11 = _closure1_slot3;
            var10 = var11.useEffect;
            var8 = new Array(2);
            var8[0] = var6;
            var8[1] = var14;
            var4 = function() {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = var10.bind(var11)(var4, var8);
            var10 = var11.useCallback;
            var8 = new Array(1);
            var8[0] = var14;
            var4 = function(arg1) {
                var1 = arg1;
                var3 = var1.offset;
                var2 = _closure2_slot1;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var4 = var10.bind(var11)(var4, var8);
            var8 = var9[var2];
            var10 = var13.bind(var5)(var8);
            var8 = var10.useAnimatedStyle;
            var1 = function u() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var7 = undefined;
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.withSpring;
                    var8 = _closure2_slot1;
                    var6 = var8.get;
                    var6 = var6.bind(var8)();
                    var3 = _closure2_slot0;
                    var6 = var6 > var3;
                    var3 = 0;
                    if(!var6) { _fun0002_ip = 64; continue _fun0002 }
 61:
                    var3 = 1;
 64:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 6;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.springStandard;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var15 = 5;
            var15 = var9[var15];
            var15 = var13.bind(var5)(var15);
            var15 = var15.withSpring;
            var11['withSpring'] = var15;
            var11['scrollPosition'] = var14;
            var11['triggerScrollHeight'] = var12;
            var12 = 6;
            var12 = var9[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.springStandard;
            var11['springStandard'] = var12;
            var1['__closure'] = var11;
            var11 = 5466161440826.0;
            var1['__workletHash'] = var11;
            var11 = _closure1_slot6;
            var1['__initData'] = var11;
            var8 = var8.bind(var10)(var1);
            var1 = {};
            var1['scrollHandler'] = var4;
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var9 = var7.border;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2 = var4.bind(var5)(var3, var2, var6);
            var1['bottomBorderComponent'] = var2;
            return var1;
        }
    };
    var3['usePinnedSearchBarBottomBorder'] = var2;
    return var1;
})();