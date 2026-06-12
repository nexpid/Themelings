// app/modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var2 = function GiftBackgroundSelect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.giftStyle;
            var13 = var1.withConsistentHeight;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = true;
case 2:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot9;
            var10 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 7;
            var1 = var18[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var16 = var1.width;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = 2;
            var1 = var2.bind(var4)(var3, var1);
            var2 = 0;
            var14 = var1[var2];
            _closure2_slot0 = var14;
            var15 = 1;
            var1 = var1[var15];
            _closure2_slot1 = var1;
            var19 = _closure1_slot0;
            var1 = 4;
            var2 = var18[var1];
            var3 = var19.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var9 = false;
            var8 = var2.bind(var3)(var9);
            _closure2_slot2 = var8;
            var11 = _closure1_slot4;
            var5 = var11.useEffect;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var8;
            var2 = function() {
                var3 = _closure2_slot2;
                var2 = var3.set;
                var4 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var5.bind(var11)(var2, var3);
            var1 = var18[var1];
            var3 = var19.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function N() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withTiming;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 0;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = 1;
case 4:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 9;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.STANDARD_EASING;
                    var2['easing'] = var6;
                    var6 = 100;
                    var2['duration'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var11 = 9;
            var11 = var18[var11];
            var11 = var19.bind(var4)(var11);
            var11 = var11.STANDARD_EASING;
            var5['STANDARD_EASING'] = var11;
            var11 = 8;
            var11 = var18[var11];
            var11 = var19.bind(var4)(var11);
            var11 = var11.withTiming;
            var5['withTiming'] = var11;
            var5['visibility'] = var8;
            var1['__closure'] = var5;
            var5 = 5743780040676.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot10;
            var1['__initData'] = var5;
            var11 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = _closure1_slot5;
            var5 = 10;
            var5 = var18[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['giftStyle'] = var17;
            var5['withConsistentHeight'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot8;
            var6 = {};
            var12 = function onContentSizeChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onContentSizeChange'] = var12;
            var13 = var10.contentContainer;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = null;
            var13 = var13 != var14;
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = var14 < var16;
case 8:
            if(!var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = {};
            var14['flex'] = var15;
            var13 = var14;
case 10:
            var12[1] = var13;
            var6['contentContainerStyle'] = var12;
            var12 = var10.scrollView;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var6['style'] = var10;
            var10 = true;
            var6['horizontal'] = var10;
            var6['showsHorizontalScrollIndicator'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var11 = 1;
    var8 = var7[var11];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ScrollView;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot5 = var8;
    var8 = var5.Fragment;
    var _closure1_slot6 = var8;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var8 = var12.bind(var1)(var5);
    var5 = var8.createAnimatedComponent;
    var5 = var5.bind(var8)(var9);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 6;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_24;
    var10['marginTop'] = var11;
    var5['scrollView'] = var10;
    var10 = {};
    var11 = 'center';
    var10['justifyContent'] = var11;
    var5['contentContainer'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot9 = var5;
    var5 = {};
    var8 = 'function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}';
    var5['code'] = var8;
    var _closure1_slot10 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function PremiumGiftBackgroundSelect() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 11;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.useNativeGiftContext;
        var2 = var2.bind(var3)();
        var6 = var2.giftStyle;
        var5 = var2.setGiftStyle;
        var3 = _closure1_slot5;
        var2 = _closure1_slot11;
        var1 = {};
        var1['giftStyle'] = var6;
        var1['setGiftStyle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['GiftBackgroundSelect'] = var2;
    return var1;
})();