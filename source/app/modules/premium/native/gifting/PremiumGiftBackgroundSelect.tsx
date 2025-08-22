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
 0:
            var1 = arg1;
            var16 = var1.giftStyle;
            var _closure2_slot0 = var16;
            var2 = var1.setGiftStyle;
            var _closure2_slot1 = var2;
            var15 = var1.withConsistentHeight;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0001_ip = 39; continue _fun0001 }
 37:
            var15 = true;
 39:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot9;
            var13 = var1.bind(var4)();
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 7;
            var1 = var20[var1];
            var2 = var21.bind(var4)(var1);
            var1 = var2.useGiftStyles;
            var12 = var1.bind(var2)();
            var7 = _closure1_slot1;
            var1 = 8;
            var1 = var20[var1];
            var2 = var7.bind(var4)(var1);
            var1 = {};
            var3 = 'PremiumGiftBackgroundSelect';
            var1['location'] = var3;
            var9 = var2.bind(var4)(var1);
            var1 = 9;
            var1 = var20[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var19 = var1.width;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = 2;
            var1 = var2.bind(var4)(var3, var1);
            var2 = 0;
            var17 = var1[var2];
            _closure2_slot2 = var17;
            var18 = 1;
            var1 = var1[var18];
            _closure2_slot3 = var1;
            var1 = 4;
            var2 = var20[var1];
            var3 = var21.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var11 = false;
            var8 = var2.bind(var3)(var11);
            _closure2_slot4 = var8;
            var14 = _closure1_slot4;
            var5 = var14.useEffect;
            var3 = new Array(2);
            var3[0] = var17;
            var3[1] = var8;
            var2 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var4 = _closure2_slot2;
                var1 = null;
                var1 = var1 != var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var5.bind(var14)(var2, var3);
            var1 = var20[var1];
            var3 = var21.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function k() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withTiming;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 0;
                    if(!var2) { _fun0002_ip = 56; continue _fun0002 }
 53:
                    var3 = 1;
 56:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 11;
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
            var14 = 11;
            var14 = var20[var14];
            var14 = var21.bind(var4)(var14);
            var14 = var14.STANDARD_EASING;
            var5['STANDARD_EASING'] = var14;
            var14 = 10;
            var14 = var20[var14];
            var14 = var21.bind(var4)(var14);
            var14 = var14.withTiming;
            var5['withTiming'] = var14;
            var5['visibility'] = var8;
            var1['__closure'] = var5;
            var5 = 5743780040676.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot10;
            var1['__initData'] = var5;
            var14 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = _closure1_slot5;
            var5 = 12;
            var5 = var20[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['giftStyle'] = var16;
            var5['withConsistentHeight'] = var15;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot8;
            var6 = {};
            var15 = function onContentSizeChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 27; continue _fun0003 }
 13:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onContentSizeChange'] = var15;
            var16 = var13.contentContainer;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = null;
            var16 = var16 != var17;
            if(!var16) { _fun0001_ip = 467; continue _fun0001 }
 463:
            var16 = var17 < var19;
 467:
            if(!var16) { _fun0001_ip = 479; continue _fun0001 }
 470:
            var17 = {};
            var17['flex'] = var18;
            var16 = var17;
 479:
            var15[1] = var16;
            var6['contentContainerStyle'] = var15;
            var15 = var13.scrollView;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var6['style'] = var13;
            var13 = true;
            var6['horizontal'] = var13;
            var6['showsHorizontalScrollIndicator'] = var11;
            var9 = !var9;
            if(!var9) { _fun0001_ip = 545; continue _fun0001 }
 528:
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var8 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var8;
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1['index'] = var5;
                var1['giftStyle'] = var8;
                var7 = _closure2_slot0;
                var7 = var8 === var7;
                var1['selected'] = var7;
                var6 = function onPress() {
                    var3 = _closure2_slot1;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var9 = var11.bind(var12)(var10);
 545:
            var6['children'] = var9;
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
    var11 = var11.spacing;
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
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function PremiumGiftBackgroundSelect() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 14;
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