// app/modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'alignItems': 'flex-end', 'justifyContent': 'center', 'flexDirection': 'row'};
    var4['container'] = var9;
    var9 = {};
    var10 = 300;
    var9['height'] = var10;
    var4['consistentHeight'] = var9;
    var9 = {'maxWidth': 375, 'width': '100%', 'height': 'auto'};
    var4['animation'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0};
    var4['baseAnimation'] = var9;
    var9 = {};
    var10 = 275;
    var9['height'] = var10;
    var4['lottie'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftBackgroundAnimation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var27 = var2.giftStyle;
            var _closure2_slot0 = var27;
            var6 = var2.withConsistentHeight;
            var2 = _closure1_slot9;
            var4 = undefined;
            var19 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var9 = var8.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var5.bind(var9)(var3, var2);
            var _closure2_slot1 = var9;
            var5 = _closure1_slot4;
            var2 = var5.useRef;
            var3 = null;
            var26 = var2.bind(var5)(var3);
            var _closure2_slot2 = var26;
            var2 = var5.useRef;
            var14 = var2.bind(var5)(var3);
            var _closure2_slot3 = var14;
            var3 = var5.useState;
            var13 = 7;
            var2 = var7[var13];
            var2 = var8.bind(var4)(var2);
            var2 = var2.AnimationState;
            var2 = var2.ACTION;
            var2 = var3.bind(var5)(var2);
            var16 = _closure1_slot3;
            var12 = 2;
            var2 = var16.bind(var4)(var2, var12);
            var22 = 0;
            var11 = var2[var22];
            var _closure2_slot4 = var11;
            var20 = 1;
            var2 = var2[var20];
            var _closure2_slot5 = var2;
            var2 = var5.useState;
            var2 = var2.bind(var5)(var4);
            var2 = var16.bind(var4)(var2, var12);
            var21 = var2[var22];
            var _closure2_slot6 = var21;
            var2 = var2[var20];
            var _closure2_slot7 = var2;
            var2 = var5.useState;
            var2 = var2.bind(var5)(var4);
            var2 = var16.bind(var4)(var2, var12);
            var3 = var2[var22];
            var _closure2_slot8 = var3;
            var2 = var2[var20];
            var _closure2_slot9 = var2;
            var2 = var5.useState;
            var15 = false;
            var2 = var2.bind(var5)(var15);
            var12 = var16.bind(var4)(var2, var12);
            var2 = var12[var22];
            var _closure2_slot10 = var2;
            var12 = var12[var20];
            var _closure2_slot11 = var12;
            var17 = var5.useMemo;
            var16 = new Array(1);
            var16[0] = var27;
            var12 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var1);
                var3 = var4.getGiftAnimationData;
                var2 = _closure2_slot0;
                var1 = 7;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.AnimationState;
                var1 = var1.ACTION;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var25 = var17.bind(var5)(var12, var16);
            var17 = var5.useMemo;
            var16 = new Array(1);
            var16[0] = var27;
            var12 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var1);
                var3 = var4.getGiftAnimationData;
                var2 = _closure2_slot0;
                var1 = 7;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.AnimationState;
                var1 = var1.LOOP;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var12 = var17.bind(var5)(var12, var16);
            var18 = 8;
            var7 = var7[var18];
            var8 = var8.bind(var4)(var7);
            var7 = var8.getLottieType;
            var16 = var7.bind(var8)(var27);
            var8 = var5.useMemo;
            var7 = new Array(4);
            var7[0] = var3;
            var7[1] = var21;
            var7[2] = var27;
            var7[3] = var11;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot0;
                    if(!(var3 !== var1)) { _fun0002_ip = 133; continue _fun0002 }
 15:
                    var4 = _closure2_slot7;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var6 = _closure2_slot11;
                    var7 = _closure2_slot4;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 7;
                    var4 = var4[var5];
                    var4 = var8.bind(var3)(var4);
                    var4 = var4.AnimationState;
                    var4 = var4.LOOP;
                    var4 = var7 !== var4;
                    if(!var4) { _fun0002_ip = 90; continue _fun0002 }
 80:
                    var8 = _closure2_slot8;
                    var7 = null;
                    var4 = var7 != var8;
 90:
                    var4 = var6.bind(var3)(var4);
                    var2 = _closure2_slot5;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.AnimationState;
                    var1 = var1.ACTION;
                    var1 = var2.bind(var3)(var1);
 133:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var5)(var3, var7);
            var7 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var2 = _closure2_slot10;
                    if(var2) { _fun0003_ip = 140; continue _fun0003 }
 16:
                    var7 = _closure2_slot4;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 7;
                    var3 = var3[var6];
                    var4 = undefined;
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AnimationState;
                    var3 = var3.LOOP;
                    var3 = var7 === var3;
                    if(var3) { _fun0003_ip = 67; continue _fun0003 }
 64:
                    var3 = var5;
 67:
                    if(var3) { _fun0003_ip = 153; continue _fun0003 }
 70:
                    var7 = _closure2_slot9;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = var2[var6];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.AnimationState;
                    var3 = var3.ACTION;
                    var3 = var7.bind(var4)(var3);
                    var3 = _closure2_slot5;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.AnimationState;
                    var2 = var2.LOOP;
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 153; continue _fun0003;
 140:
                    var3 = _closure2_slot11;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 153:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = var7.bind(var5)(var2, var3);
            var7 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.AnimationState;
                    var3 = var3.LOOP;
                    if(!(var4 !== var3)) { _fun0004_ip = 75; continue _fun0004 }
 48:
                    var3 = _closure2_slot3;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 100; continue _fun0004 }
 63:
                    var3 = var4.reset;
                    var3 = var3.bind(var4)();
                    _fun0004_ip = 100; continue _fun0004;
 75:
                    var2 = _closure2_slot2;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 100; continue _fun0004 }
 90:
                    var2 = var3.reset;
                    var2 = var2.bind(var3)();
 100:
                    return var1;
                }
            };
            var2 = var7.bind(var5)(var2, var3);
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0005_ip = 35; continue _fun0005 }
 10:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 35; continue _fun0005 }
 25:
                    var1 = var2.reset;
                    var1 = var1.bind(var2)();
 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var19.container;
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 515; continue _fun0001 }
 509:
            var6 = var19.consistentHeight;
 515:
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var23 = _closure1_slot2;
            var6 = 9;
            var5 = var23[var6];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var28 = var19.baseAnimation;
            var17 = new Array(4);
            var17[0] = var28;
            var28 = var19.animation;
            var17[1] = var28;
            var28 = _closure1_slot0;
            var23 = var23[var18];
            var23 = var28.bind(var4)(var23);
            var23 = var23.LottieType;
            var23 = var23.LOTTIE;
            var23 = var16 === var23;
            if(!var23) { _fun0001_ip = 611; continue _fun0001 }
 605:
            var23 = var19.lottie;
 611:
            var17[2] = var23;
            var23 = {};
            var21 = var21 === var27;
            var27 = 0;
            if(!var21) { _fun0001_ip = 664; continue _fun0001 }
 626:
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var13];
            var28 = var29.bind(var4)(var28);
            var28 = var28.AnimationState;
            var28 = var28.LOOP;
            var27 = 0;
            if(!(var11 !== var28)) { _fun0001_ip = 664; continue _fun0001 }
 661:
            var27 = var20;
 664:
            var23['opacity'] = var27;
            var17[3] = var23;
            var5['style'] = var17;
            var23 = _closure1_slot0;
            var17 = _closure1_slot2;
            var27 = var17[var18];
            var27 = var23.bind(var4)(var27);
            var27 = var27.LottieType;
            var27 = var27.LOTTIE;
            var27 = var16 === var27;
            var5['hardwareAccelerationAndroid'] = var27;
            var5['ref'] = var26;
            var5['source'] = var25;
            var25 = !var9;
            var5['autoPlay'] = var25;
            var5['onAnimationFinish'] = var24;
            var5['loop'] = var15;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var6 = var17[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var24 = var19.animation;
            var15 = new Array(3);
            var15[0] = var24;
            var17 = var17[var18];
            var17 = var23.bind(var4)(var17);
            var17 = var17.LottieType;
            var17 = var17.LOTTIE;
            var17 = var16 === var17;
            if(!var17) { _fun0001_ip = 821; continue _fun0001 }
 815:
            var17 = var19.lottie;
 821:
            var15[1] = var17;
            var17 = {};
            var19 = 0;
            if(!var21) { _fun0001_ip = 870; continue _fun0001 }
 832:
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var13];
            var21 = var23.bind(var4)(var21);
            var21 = var21.AnimationState;
            var21 = var21.LOOP;
            var19 = 0;
            if(!(var11 === var21)) { _fun0001_ip = 870; continue _fun0001 }
 867:
            var19 = var20;
 870:
            var17['opacity'] = var19;
            var15[2] = var17;
            var6['style'] = var15;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var15 = var17.bind(var4)(var15);
            var15 = var15.LottieType;
            var15 = var15.LOTTIE;
            var15 = var16 === var15;
            var6['hardwareAccelerationAndroid'] = var15;
            var6['ref'] = var14;
            var6['source'] = var12;
            var9 = !var9;
            if(!var9) { _fun0001_ip = 967; continue _fun0001 }
 934:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var10 = var12.bind(var4)(var10);
            var10 = var10.AnimationState;
            var10 = var10.LOOP;
            var9 = var11 === var10;
 967:
            var6['autoPlay'] = var9;
            var9 = true;
            var6['loop'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();