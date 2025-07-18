// app/modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var2 = function GiftBackgroundSelect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.giftStyle;
            var _closure2_slot0 = var15;
            var2 = var1.setGiftStyle;
            var _closure2_slot1 = var2;
            var14 = var1.withConsistentHeight;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0001_ip = 39; continue _fun0001 }
 37:
            var14 = true;
 39:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot9;
            var12 = var1.bind(var4)();
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 7;
            var1 = var19[var1];
            var2 = var20.bind(var4)(var1);
            var1 = var2.useGiftStyles;
            var11 = var1.bind(var2)();
            var7 = _closure1_slot1;
            var1 = 8;
            var1 = var19[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var18 = var1.width;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = 2;
            var1 = var2.bind(var4)(var3, var1);
            var2 = 0;
            var16 = var1[var2];
            _closure2_slot2 = var16;
            var17 = 1;
            var1 = var1[var17];
            _closure2_slot3 = var1;
            var1 = 4;
            var2 = var19[var1];
            var3 = var20.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var10 = false;
            var8 = var2.bind(var3)(var10);
            _closure2_slot4 = var8;
            var13 = _closure1_slot4;
            var5 = var13.useEffect;
            var3 = new Array(2);
            var3[0] = var16;
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
            var2 = var5.bind(var13)(var2, var3);
            var1 = var19[var1];
            var3 = var20.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function C() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
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
                    var6 = 10;
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
            var13 = 10;
            var13 = var19[var13];
            var13 = var20.bind(var4)(var13);
            var13 = var13.STANDARD_EASING;
            var5['STANDARD_EASING'] = var13;
            var13 = 9;
            var13 = var19[var13];
            var13 = var20.bind(var4)(var13);
            var13 = var13.withTiming;
            var5['withTiming'] = var13;
            var5['visibility'] = var8;
            var1['__closure'] = var5;
            var5 = 5743780040676.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot10;
            var1['__initData'] = var5;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = _closure1_slot5;
            var5 = 11;
            var5 = var19[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['giftStyle'] = var15;
            var5['withConsistentHeight'] = var14;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot8;
            var6 = {};
            var14 = function onContentSizeChange(arg1) {
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
            var6['onContentSizeChange'] = var14;
            var15 = var12.contentContainer;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = null;
            var15 = var15 != var16;
            if(!var15) { _fun0001_ip = 437; continue _fun0001 }
 433:
            var15 = var16 < var18;
 437:
            if(!var15) { _fun0001_ip = 449; continue _fun0001 }
 440:
            var16 = {};
            var16['flex'] = var17;
            var15 = var16;
 449:
            var14[1] = var15;
            var6['contentContainerStyle'] = var14;
            var14 = var12.scrollView;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var6['style'] = var12;
            var12 = true;
            var6['horizontal'] = var12;
            var6['showsHorizontalScrollIndicator'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                var8 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var8;
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
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
            var9 = var10.bind(var11)(var9);
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
    var5 = native4;
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
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function PremiumGiftBackgroundSelect() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 13;
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