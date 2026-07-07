// app/modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PurchaseSuccessModalBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var38 = var1.sku;
            var _closure2_slot0 = var38;
            var37 = var1.title;
            var35 = var1.body;
            var21 = var1.finePrint;
            var27 = var1.ctaLabel;
            var26 = var1.ctaIcon;
            var25 = var1.ctaLoading;
            var30 = var1.onCtaPress;
            var29 = var1.onClose;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot16;
            var9 = var1.bind(var4)();
            var _closure2_slot3 = var9;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.width;
            var _closure2_slot4 = var1;
            var3 = _closure1_slot0;
            var2 = 15;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var3 = var5.bind(var7)(var3, var2);
            var2 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 10;
                var3 = var11[var8];
                var9 = undefined;
                var4 = var10.bind(var9)(var3);
                var3 = var4.useSharedValue;
                var6 = 0;
                var13 = var3.bind(var4)(var6);
                var _closure3_slot1 = var13;
                var3 = var11[var8];
                var4 = var10.bind(var9)(var3);
                var3 = var4.useSharedValue;
                var7 = var3.bind(var4)(var6);
                var _closure3_slot2 = var7;
                var6 = _closure1_slot4;
                var4 = var6.useEffect;
                var3 = new Array(3);
                var3[0] = var13;
                var3[1] = var1;
                var3[2] = var7;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = _closure3_slot1;
                        var3 = var4.set;
                        var5 = _closure3_slot0;
                        var10 = 1;
                        var2 = var10;
                        if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 10;
                        var5 = var11[var5];
                        var6 = undefined;
                        var8 = var9.bind(var6)(var5);
                        var7 = var8.withDelay;
                        var5 = 11;
                        var5 = var11[var5];
                        var9 = var9.bind(var6)(var5);
                        var6 = var9.withSpring;
                        var5 = {'duration': 500, 'dampingRatio': 0.7};
                        var6 = var6.bind(var9)(var10, var5);
                        var5 = 200;
                        var2 = var7.bind(var8)(var5, var6);
case 2:
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot2;
                        var2 = var3.set;
                        var4 = _closure3_slot0;
                        var1 = var10;
                        if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 10;
                        var4 = var9[var4];
                        var5 = undefined;
                        var7 = var8.bind(var5)(var4);
                        var6 = var7.withDelay;
                        var4 = 12;
                        var4 = var9[var4];
                        var9 = var8.bind(var5)(var4);
                        var8 = var9.withTiming;
                        var4 = {};
                        var5 = 200;
                        var4['duration'] = var5;
                        var4 = var8.bind(var9)(var10, var4);
                        var1 = var6.bind(var7)(var5, var4);
case 4:
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var4.bind(var6)(var1, var3);
                var1 = {};
                var3 = var11[var8];
                var6 = var10.bind(var9)(var3);
                var4 = var6.useAnimatedStyle;
                var3 = function o() {
                    var1 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 10;
                    var3 = var7[var2];
                    var5 = undefined;
                    var11 = var6.bind(var5)(var3);
                    var10 = var11.interpolate;
                    var4 = _closure3_slot1;
                    var3 = var4.get;
                    var9 = var3.bind(var4)();
                    var8 = [0, 1];
                    var3 = [0.1, 1];
                    var3 = var10.bind(var11)(var9, var8, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var2 = var7[var2];
                    var7 = var6.bind(var5)(var2);
                    var6 = var7.interpolate;
                    var2 = var4.get;
                    var5 = var2.bind(var4)();
                    var4 = [0, 1];
                    var2 = [0, 1];
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                };
                var12 = {};
                var14 = var11[var8];
                var14 = var10.bind(var9)(var14);
                var14 = var14.interpolate;
                var12['interpolate'] = var14;
                var12['springInput'] = var13;
                var3['__closure'] = var12;
                var12 = 7750024112371.0;
                var3['__workletHash'] = var12;
                var12 = _closure1_slot18;
                var3['__initData'] = var12;
                var3 = var4.bind(var6)(var3);
                var1['previewViewStyle'] = var3;
                var3 = var11[var8];
                var6 = var10.bind(var9)(var3);
                var4 = var6.useAnimatedStyle;
                var3 = function l() {
                    var1 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 10;
                    var3 = var7[var2];
                    var5 = undefined;
                    var11 = var6.bind(var5)(var3);
                    var10 = var11.interpolate;
                    var4 = _closure3_slot1;
                    var3 = var4.get;
                    var9 = var3.bind(var4)();
                    var8 = [0, 1];
                    var3 = [0, 1];
                    var3 = var10.bind(var11)(var9, var8, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var2 = var7[var2];
                    var7 = var6.bind(var5)(var2);
                    var6 = var7.interpolate;
                    var2 = var4.get;
                    var5 = var2.bind(var4)();
                    var4 = [0, 1];
                    var2 = [0.75, 1];
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                };
                var12 = {};
                var14 = var11[var8];
                var14 = var10.bind(var9)(var14);
                var14 = var14.interpolate;
                var12['interpolate'] = var14;
                var12['springInput'] = var13;
                var3['__closure'] = var12;
                var12 = 3400602564931.0;
                var3['__workletHash'] = var12;
                var12 = _closure1_slot19;
                var3['__initData'] = var12;
                var3 = var4.bind(var6)(var3);
                var1['textViewStyle'] = var3;
                var3 = var11[var8];
                var4 = var10.bind(var9)(var3);
                var3 = var4.useAnimatedStyle;
                var2 = function c() {
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.interpolate;
                    var3 = _closure3_slot2;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = [0, 1];
                    var2 = [0.5, 0];
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                };
                var6 = {};
                var8 = var11[var8];
                var8 = var10.bind(var9)(var8);
                var8 = var8.interpolate;
                var6['interpolate'] = var8;
                var6['linearInput'] = var7;
                var2['__closure'] = var6;
                var6 = 4092396015860.0;
                var2['__workletHash'] = var6;
                var5 = _closure1_slot20;
                var2['__initData'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['curtainViewStyle'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var3);
            var34 = var2.previewViewStyle;
            var23 = var2.textViewStyle;
            var10 = var2.curtainViewStyle;
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var38;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 16;
                    var2 = var1[var7];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var3 = var6.getCardBackgroundImageURL;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var6)(var2);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.getCardImageURL;
                    var4 = _closure2_slot0;
                    var3 = var5.bind(var6)(var4);
case 6:
                    var2 = var2 == var3;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = var3.toString;
                    var1 = var2.bind(var3)();
case 8:
                    return var1;
                }
            };
            var14 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot4;
                var1['width'] = var2;
                return var1;
            };
            var7 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var1 = _closure1_slot21;
            var1 = var2.bind(var3)(var1);
            var _closure2_slot1 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var8 = 0;
                    var6 = var7[var8];
                    var4 = var7.slice;
                    var3 = 1;
                    var3 = var4.bind(var7)(var3);
                    var4 = null;
                    if(!(var4 != var6)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var7 = var3.length;
                    if(!(var8 !== var7)) { _fun0004_ip = 12; continue _fun0004 }
case 10:
                    var8 = var3.length;
                    var7 = _closure1_slot21;
                    var9 = var7.length;
                    var7 = 2;
                    var7 = var9 / var7;
                    if(!(!(var8 >= var7))) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 13;
                    var8 = var11[var7];
                    var9 = var10.bind(var1)(var8);
                    var8 = var9.triggerHapticFeedback;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.HapticFeedbackTypes;
                    var7 = var7.IMPACT_MEDIUM;
                    var7 = var8.bind(var9)(var7);
                    _fun0004_ip = 15; continue _fun0004;
case 13:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 13;
                    var8 = var11[var7];
                    var9 = var10.bind(var1)(var8);
                    var8 = var9.triggerHapticFeedback;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.HapticFeedbackTypes;
                    var7 = var7.IMPACT_LIGHT;
                    var7 = var8.bind(var9)(var7);
                    _fun0004_ip = 15; continue _fun0004;
case 12:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 13;
                    var7 = var10[var5];
                    var8 = var9.bind(var1)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.IMPACT_HEAVY;
                    var5 = var7.bind(var8)(var5);
case 15:
                    if(!(var4 != var6)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var4 = global;
                    var5 = var4.setTimeout;
                    var4 = _closure2_slot2;
                    var4 = var5.bind(var1)(var4, var6);
case 16:
                    var2 = _closure2_slot1;
                    var2['current'] = var3;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            _closure2_slot2 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = function() {
                    var2 = _closure2_slot1;
                    var1 = new Array(0);
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.lockOrientation;
                var1 = _closure1_slot12;
                var1 = var1.PORTRAIT;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.restoreDefaultOrientation;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = var9.root;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var28 = null;
            var7 = var28 != var14;
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = _closure1_slot14;
            var8 = _closure1_slot5;
            var5 = {};
            var13 = {};
            var13['uri'] = var14;
            var5['source'] = var13;
            var13 = var9.backdropImage;
            var5['style'] = var13;
            var13 = 4;
            var5['blurRadius'] = var13;
            var13 = 'cover';
            var5['resizeMode'] = var13;
            var7 = var12.bind(var4)(var8, var5);
case 18:
            var5 = new Array(4);
            var5[0] = var7;
            var12 = _closure1_slot14;
            var19 = _closure1_slot1;
            var31 = _closure1_slot2;
            var7 = 18;
            var7 = var31[var7];
            var8 = var19.bind(var4)(var7);
            var7 = {};
            var13 = var9.backdropGradient;
            var7['style'] = var13;
            var13 = _closure1_slot13;
            var13 = var13.START;
            var7['start'] = var13;
            var13 = _closure1_slot13;
            var13 = var13.END;
            var7['end'] = var13;
            var13 = [0.4, 0.75, 1];
            var7['locations'] = var13;
            var13 = ['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)', '#000000'];
            var7['colors'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var12 = _closure1_slot15;
            var33 = _closure1_slot0;
            var7 = 19;
            var7 = var31[var7];
            var7 = var33.bind(var4)(var7);
            var8 = var7.SafeAreaPaddingView;
            var7 = {'style': null, 'top': true, 'bottom': true, 'left': true, 'right': true};
            var13 = var9.main;
            var7['style'] = var13;
            var24 = true;
            var15 = _closure1_slot14;
            var14 = _closure1_slot7;
            var13 = {};
            var16 = var9.header;
            var13['style'] = var16;
            var18 = _closure1_slot14;
            var16 = 20;
            var16 = var31[var16];
            var16 = var33.bind(var4)(var16);
            var17 = var16.HeaderBackButton;
            var16 = {};
            var16['onPress'] = var29;
            var11 = function backImage() {
                var4 = _closure1_slot14;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.XSmallIcon;
                var1 = {};
                var5 = 'lg';
                var1['size'] = var5;
                var5 = _closure2_slot3;
                var5 = var5.closeButtonIcon;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var16['backImage'] = var11;
            var32 = 22;
            var11 = var31[var32];
            var11 = var33.bind(var4)(var11);
            var22 = var11.intl;
            var20 = var22.string;
            var11 = var31[var32];
            var11 = var33.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.cpT0Cq;
            var11 = var20.bind(var22)(var11);
            var16['accessibilityLabel'] = var11;
            var11 = false;
            var16['labelVisible'] = var11;
            var16 = var18.bind(var4)(var17, var16);
            var13['children'] = var16;
            var14 = var15.bind(var4)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var16 = _closure1_slot15;
            var15 = _closure1_slot6;
            var14 = {};
            var17 = {};
            var18 = 1;
            var17['flex'] = var18;
            var14['style'] = var17;
            var17 = var9.body;
            var14['contentContainerStyle'] = var17;
            var14['alwaysBounceVertical'] = var11;
            var20 = _closure1_slot14;
            var11 = 10;
            var17 = var31[var11];
            var17 = var19.bind(var4)(var17);
            var18 = var17.View;
            var17 = {};
            var36 = var9.preview;
            var22 = new Array(2);
            var22[0] = var36;
            var22[1] = var34;
            var17['style'] = var22;
            var36 = _closure1_slot14;
            var22 = 23;
            var22 = var31[var22];
            var34 = var19.bind(var4)(var22);
            var22 = {};
            var22['sku'] = var38;
            var38 = 250;
            var22['size'] = var38;
            var22 = var36.bind(var4)(var34, var22);
            var17['children'] = var22;
            var18 = var20.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot15;
            var18 = var31[var11];
            var18 = var19.bind(var4)(var18);
            var19 = var18.View;
            var18 = {};
            var34 = var9.messages;
            var22 = new Array(2);
            var22[0] = var34;
            var22[1] = var23;
            var18['style'] = var22;
            var36 = _closure1_slot14;
            var22 = 24;
            var23 = var31[var22];
            var23 = var33.bind(var4)(var23);
            var34 = var23.Text;
            var23 = {'variant': 'heading-xl/semibold', 'color': 'text-overlay-light'};
            var38 = var9.title;
            var23['style'] = var38;
            var23['children'] = var37;
            var34 = var36.bind(var4)(var34, var23);
            var23 = new Array(2);
            var23[0] = var34;
            var34 = _closure1_slot14;
            var31 = var31[var22];
            var31 = var33.bind(var4)(var31);
            var33 = var31.Text;
            var31 = {'variant': 'text-md/medium', 'color': 'text-overlay-light'};
            var36 = var9.description;
            var31['style'] = var36;
            var31['children'] = var35;
            var31 = var34.bind(var4)(var33, var31);
            var23[1] = var31;
            var18['children'] = var23;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var16 = _closure1_slot15;
            var15 = _closure1_slot7;
            var14 = {};
            var17 = var9.footer;
            var14['style'] = var17;
            var18 = var28 != var21;
            if(!var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var20 = _closure1_slot14;
            var19 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var22];
            var17 = var19.bind(var4)(var17);
            var19 = var17.Text;
            var17 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var22 = var9.finePrint;
            var17['style'] = var22;
            var17['children'] = var21;
            var18 = var20.bind(var4)(var19, var17);
case 20:
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot14;
            var19 = _closure1_slot7;
            var18 = {};
            var21 = var9.cta;
            var18['style'] = var21;
            var23 = _closure1_slot14;
            var22 = _closure1_slot0;
            var31 = _closure1_slot2;
            var21 = 25;
            var21 = var31[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Button;
            var21 = {};
            if(!(var28 != var30)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var29 = var30;
case 22:
            var21['onPress'] = var29;
            if(!(var28 == var27)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var31 = _closure1_slot0;
            var28 = _closure1_slot2;
            var29 = var28[var32];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var28[var32];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.cpT0Cq;
            var27 = var29.bind(var30)(var28);
case 24:
            var21['text'] = var27;
            var21['icon'] = var26;
            var21['loading'] = var25;
            var25 = 'lg';
            var21['size'] = var25;
            var21['grow'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[2] = var14;
            var7['children'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var11 = var9.curtain;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var9 = 'none';
            var6['pointerEvents'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = var4.Orientation;
    var _closure1_slot12 = var7;
    var4 = var4.VerticalGradient;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 8;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var12 = {};
    var12['flex'] = var13;
    var10 = 9;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BLACK;
    var12['backgroundColor'] = var14;
    var7['root'] = var12;
    var12 = {'position': 'absolute', 'inset': 0, 'opacity': 0.45};
    var7['backdropImage'] = var12;
    var12 = {'position': 'absolute', 'inset': 0};
    var7['backdropGradient'] = var12;
    var12 = {'position': 'absolute', 'inset': 0};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BLACK;
    var12['backgroundColor'] = var14;
    var7['curtain'] = var12;
    var12 = {};
    var12['flex'] = var13;
    var7['main'] = var12;
    var12 = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center'};
    var13 = 'center';
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var12['paddingHorizontal'] = var14;
    var7['header'] = var12;
    var12 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var12['tintColor'] = var14;
    var7['closeButtonIcon'] = var12;
    var12 = {'flexGrow': 1, 'flexDirection': 'column', 'justifyContent': 'center'};
    var7['body'] = var12;
    var12 = {'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
    var7['preview'] = var12;
    var12 = {'paddingTop': null, 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'flex-start'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_24;
    var12['paddingTop'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var12['gap'] = var14;
    var7['messages'] = var12;
    var12 = {};
    var12['textAlign'] = var13;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_32;
    var12['marginHorizontal'] = var14;
    var7['title'] = var12;
    var12 = {};
    var12['textAlign'] = var13;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_32;
    var12['marginHorizontal'] = var14;
    var7['description'] = var12;
    var12 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var12['marginBottom'] = var14;
    var7['footer'] = var12;
    var12 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_24;
    var12['marginHorizontal'] = var14;
    var7['cta'] = var12;
    var12 = {};
    var12['textAlign'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_24;
    var12['marginHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var12['marginBottom'] = var13;
    var7['finePrint'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot16 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['marginRight'] = var10;
    var4['linkAccountIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
    var _closure1_slot21 = var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SocialLayerStorefrontProductSelfPurchaseSuccessModal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var7 = var1.skuId;
            var _closure2_slot0 = var7;
            var3 = var1.orbsReward;
            var8 = var1.analyticsLocations;
            var _closure2_slot1 = var8;
            var5 = var1.onClose;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var1 = _closure1_slot17;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var11 = var3.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var10.bind(var11)(var9, var1);
            var _closure2_slot2 = var12;
            var1 = 26;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.useGetOrFetchApplication;
            var15 = null;
            var9 = var15 == var12;
            var1 = undefined;
            if(var9) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var1 = var12.applicationId;
case 26:
            var18 = var3.bind(var6)(var1);
            _closure2_slot3 = var18;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 27;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var6 = var15 != var18;
            var1 = null;
            if(!var6) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var1 = var18;
case 28:
            var3 = var3.bind(var4)(var1);
            var6 = var3.fetched;
            _closure2_slot4 = var6;
            var1 = var3.hasAlreadyLinked;
            _closure2_slot5 = var1;
            var9 = var3.canStartAuthorization;
            _closure2_slot6 = var9;
            var17 = var3.startAuthorization;
            _closure2_slot7 = var17;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 28;
            var3 = var11[var3];
            var11 = var10.bind(var4)(var3);
            var10 = var11.useSocialLayerStorefrontMobileAccountLinkingDisabled;
            var16 = var15 == var12;
            var3 = undefined;
            if(var16) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var3 = var12.applicationId;
case 30:
            var3 = var10.bind(var11)(var3);
            var16 = _closure1_slot4;
            var11 = var16.useMemo;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var3 = new Array(0);
                    _fun0006_ip = 34; continue _fun0006;
case 32:
                    var3 = _closure2_slot1;
case 34:
                    var1 = new Array(1);
                    var6 = 0;
                    var8 = var1;
                    var7 = var3;
                    var3 = arraySpread(var8, var7, var6);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 29;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS;
                    var1[2] = var2;
                    var2 = 1;
                    var2 = var3 + var2;
                    return var1;
                }
            };
            var16 = var11.bind(var16)(var8, var10);
            _closure2_slot8 = var16;
            var11 = _closure1_slot4;
            var10 = var11.useRef;
            var8 = {};
            var8['analyticsLocations'] = var16;
            var8['skuId'] = var7;
            var20 = var15 == var12;
            var19 = undefined;
            if(var20) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var19 = var12.applicationId;
case 35:
            var8['applicationId'] = var19;
            var8['canStartAuthorization'] = var9;
            var8 = var10.bind(var11)(var8);
            _closure2_slot9 = var8;
            var19 = _closure1_slot4;
            var11 = var19.useEffect;
            var10 = new Array(1);
            var10[0] = var9;
            var8 = function() {
                var2 = _closure2_slot9;
                var2 = var2.current;
                var1 = _closure2_slot6;
                var2['canStartAuthorization'] = var1;
                var1 = undefined;
                return var1;
            };
            var8 = var11.bind(var19)(var8, var10);
            var19 = _closure1_slot4;
            var11 = var19.useEffect;
            var10 = new Array(2);
            var10[0] = var6;
            var10[1] = var1;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var1 = _closure2_slot9;
                    var1 = var1.current;
                    var9 = var1.analyticsLocations;
                    var8 = var1.skuId;
                    var7 = var1.applicationId;
                    var5 = var1.canStartAuthorization;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot11;
                    var2 = var1.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED;
                    var1 = {};
                    var1['location_stack'] = var9;
                    var1['sku_id'] = var8;
                    var1['application_id'] = var7;
                    var7 = false;
                    var1['is_gift'] = var7;
                    var6 = _closure2_slot5;
                    var1['is_account_linked'] = var6;
                    var1['can_start_authorization'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var11.bind(var19)(var8, var10);
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var8 = new Array(4);
            var8[0] = var17;
            var8[1] = var16;
            var8[2] = var7;
            var16 = var15 == var12;
            var7 = undefined;
            if(var16) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var7 = var12.applicationId;
case 39:
            var8[3] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 30;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.track;
                    var2 = _closure1_slot11;
                    var3 = var2.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED;
                    var2 = {};
                    var7 = _closure2_slot8;
                    var2['location_stack'] = var7;
                    var7 = _closure2_slot0;
                    var2['sku_id'] = var7;
                    var8 = _closure2_slot2;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var8 = _closure2_slot2;
                    var7 = var8.applicationId;
case 41:
                    var2['application_id'] = var7;
                    var7 = false;
                    var2['is_gift'] = var7;
                    var2 = var5.bind(var6)(var3, var2);
                    var3 = _closure2_slot7;
                    var2 = {};
                    var4 = _closure2_slot8;
                    var2['analyticsLocations'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var7 = var10.bind(var11)(var7, var8);
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 31;
            var8 = var11[var8];
            var10 = var10.bind(var4)(var8);
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 30;
                    var2 = var9[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var8 = _closure2_slot8;
                    var2['location_stack'] = var8;
                    var8 = _closure1_slot0;
                    var6 = 32;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY;
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var2['sku_id'] = var6;
                    var8 = _closure2_slot2;
                    var6 = null;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(var8) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var7 = _closure2_slot2;
                    var6 = var7.applicationId;
case 43:
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var8 = var10.bind(var4)(var8);
            var19 = _closure1_slot0;
            var8 = _closure1_slot2;
            var16 = 22;
            var10 = var8[var16];
            var10 = var19.bind(var4)(var10);
            var17 = var10.intl;
            var10 = var17.string;
            if(var1) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var20 = _closure1_slot1;
            var11 = 33;
            var11 = var8[var11];
            var11 = var20.bind(var4)(var11);
            var11 = var11.bRPsNX;
            var11 = var10.bind(var17)(var11);
            _fun0005_ip = 47; continue _fun0005;
case 45:
            var8 = var8[var16];
            var8 = var19.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8["5glWta"];
            var11 = var10.bind(var17)(var8);
case 47:
            var8 = !var1;
            if(!var8) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var8 = var9;
case 48:
            if(!var8) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var8 = !var3;
case 50:
            _closure2_slot10 = var8;
            var10 = _closure1_slot4;
            var9 = var10.useMemo;
            var3 = new Array(4);
            var3[0] = var1;
            var3[1] = var8;
            var19 = var15 == var18;
            var17 = undefined;
            if(var19) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var17 = var18.name;
case 52:
            var3[2] = var17;
            var17 = var15 == var12;
            var15 = undefined;
            if(var17) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var15 = var12.name;
case 54:
            var3[3] = var15;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0010_ip = 15; continue _fun0010 }
case 56:
                    var1 = _closure2_slot10;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 22;
                    var5 = var7[var3];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    if(var1) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var10 = _closure1_slot1;
                    var1 = 33;
                    var1 = var7[var1];
                    var1 = var10.bind(var8)(var1);
                    var10 = var1.eNNnIG;
                    var1 = {};
                    var12 = _closure2_slot3;
                    var11 = null;
                    var13 = var11 == var12;
                    var12 = undefined;
                    if(var13) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                    var13 = _closure2_slot3;
                    var12 = var13.name;
case 59:
                    var13 = var11 != var12;
                    var11 = '';
                    if(!var13) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                    var11 = var12;
case 61:
                    var1['applicationName'] = var11;
                    var1 = var5.bind(var6)(var10, var1);
                    _fun0010_ip = 63; continue _fun0010;
case 57:
                    var3 = var7[var3];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.t;
                    var4 = var3.EgCl+Q;
                    var3 = {};
                    var7 = _closure2_slot2;
                    var10 = null;
                    var7 = var10 == var7;
                    var12 = undefined;
                    if(var7) { _fun0010_ip = 64; continue _fun0010 }
case 26:
                    var7 = _closure2_slot2;
                    var12 = var7.name;
case 64:
                    var13 = var10 != var12;
                    var7 = '';
                    var11 = var7;
                    if(!var13) { _fun0010_ip = 4; continue _fun0010 }
case 65:
                    var11 = var12;
case 4:
                    var3['skuName'] = var11;
                    var11 = _closure2_slot3;
                    var11 = var10 == var11;
                    var8 = undefined;
                    if(var11) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var11 = _closure2_slot3;
                    var8 = var11.name;
case 66:
                    var10 = var10 != var8;
                    if(!var10) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var7 = var8;
case 68:
                    var3['applicationName'] = var7;
                    var1 = var5.bind(var6)(var4, var3);
case 63:
                    _fun0010_ip = 70; continue _fun0010;
case 15:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 22;
                    var4 = var6[var2];
                    var7 = undefined;
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var6[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.t;
                    var3 = var2.W2znvX;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var8 = null;
                    var6 = var8 == var6;
                    var11 = undefined;
                    if(var6) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                    var6 = _closure2_slot2;
                    var11 = var6.name;
case 71:
                    var12 = var8 != var11;
                    var6 = '';
                    var10 = var6;
                    if(!var12) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var10 = var11;
case 73:
                    var2['skuName'] = var10;
                    var10 = _closure2_slot3;
                    var10 = var8 == var10;
                    var7 = undefined;
                    if(var10) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var9 = _closure2_slot3;
                    var7 = var9.name;
case 75:
                    var8 = var8 != var7;
                    if(!var8) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var6 = var7;
case 77:
                    var2['applicationName'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 70:
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var2, var3);
            var9 = undefined;
            if(var1) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var16];
            var3 = var2.bind(var4)(var3);
            var15 = var3.intl;
            var3 = var15.formatToPlainString;
            var1 = var1[var16];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.TTj7ME;
            var1 = {};
            var17 = _closure1_slot10;
            var1['numDays'] = var17;
            var9 = var3.bind(var15)(var2, var1);
case 79:
            var3 = _closure1_slot14;
            var2 = _closure1_slot22;
            var1 = {};
            var1['sku'] = var12;
            var1['title'] = var11;
            var1['body'] = var10;
            var1['finePrint'] = var9;
            var9 = undefined;
            if(!var8) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var15 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var16];
            var11 = var15.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var16];
            var10 = var15.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.VDAhr+;
            var9 = var11.bind(var12)(var10);
case 81:
            var1['ctaLabel'] = var9;
            var9 = undefined;
            if(!var8) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            var12 = _closure1_slot14;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 34;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ExperimentalGameControllerLinkIcon;
            var10 = {};
            var15 = 'xs';
            var10['size'] = var15;
            var15 = _closure1_slot1;
            var14 = 9;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.colors;
            var14 = var14.WHITE;
            var10['color'] = var14;
            var13 = var13.linkAccountIcon;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 83:
            var1['ctaIcon'] = var9;
            var6 = !var6;
            var1['ctaLoading'] = var6;
            var6 = undefined;
            if(!var8) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var6 = var7;
case 85:
            var1['onCtaPress'] = var6;
            var1['onClose'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SocialLayerStorefrontProductSelfPurchaseSuccessModal'] = var4;
    var2 = function SocialLayerStorefrontProductGiftPurchaseSuccessModal(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.skuId;
            var _closure2_slot0 = var3;
            var3 = var1.orbsReward;
            var10 = var1.recipient;
            var _closure2_slot1 = var10;
            var3 = var1.analyticsLocations;
            var _closure2_slot2 = var3;
            var5 = var1.onClose;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 15;
            var6 = var11[var4];
            var4 = undefined;
            var12 = var9.bind(var4)(var6);
            var8 = var12.useStateFromStores;
            var6 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot9;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var12)(var7, var6);
            var _closure2_slot3 = var8;
            var12 = _closure1_slot4;
            var7 = var12.useMemo;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0012_ip = 32; continue _fun0012 }
case 33:
                    var3 = new Array(0);
                    _fun0012_ip = 34; continue _fun0012;
case 32:
                    var3 = _closure2_slot2;
case 34:
                    var1 = new Array(1);
                    var6 = 0;
                    var8 = var1;
                    var7 = var3;
                    var3 = arraySpread(var8, var7, var6);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 29;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS;
                    var1[2] = var2;
                    var2 = 1;
                    var2 = var3 + var2;
                    return var1;
                }
            };
            var3 = var7.bind(var12)(var3, var6);
            var _closure2_slot4 = var3;
            var6 = _closure1_slot1;
            var3 = 31;
            var3 = var11[var3];
            var6 = var6.bind(var4)(var3);
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 30;
                    var2 = var9[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var8 = _closure2_slot4;
                    var2['location_stack'] = var8;
                    var8 = _closure1_slot0;
                    var6 = 32;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY;
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var2['sku_id'] = var6;
                    var8 = _closure2_slot3;
                    var6 = null;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(var8) { _fun0013_ip = 43; continue _fun0013 }
case 44:
                    var7 = _closure2_slot3;
                    var6 = var7.applicationId;
case 43:
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var3 = var6.bind(var4)(var3);
            var3 = 22;
            var6 = var11[var3];
            var6 = var9.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var11[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3["5glWta"];
            var7 = var6.bind(var7)(var3);
            var9 = _closure1_slot4;
            var6 = var9.useMemo;
            var3 = null;
            var3 = var3 == var8;
            var11 = undefined;
            if(var3) { _fun0011_ip = 87; continue _fun0011 }
case 88:
            var11 = var8.name;
case 87:
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var10;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 22;
                    var3 = var5[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var5[var1];
                    var1 = var2.bind(var9)(var1);
                    var1 = var1.t;
                    var2 = var1["2VjPTw"];
                    var1 = {};
                    var8 = _closure2_slot3;
                    var5 = null;
                    var10 = var5 == var8;
                    var8 = undefined;
                    if(var10) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                    var10 = _closure2_slot3;
                    var8 = var10.name;
case 89:
                    var1['itemName'] = var8;
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 35;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.getName;
                    var6 = _closure2_slot1;
                    var6 = var7.bind(var8)(var6);
                    var7 = var5 != var6;
                    var5 = 'your recipient';
                    if(!var7) { _fun0014_ip = 13; continue _fun0014 }
case 91:
                    var5 = var6;
case 13:
                    var1['giftRecipient'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var2, var3);
            var3 = _closure1_slot14;
            var2 = _closure1_slot22;
            var1 = {};
            var1['sku'] = var8;
            var1['title'] = var7;
            var1['body'] = var6;
            var1['onClose'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SocialLayerStorefrontProductGiftPurchaseSuccessModal'] = var2;
    return var1;
})();