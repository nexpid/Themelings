// app/modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
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
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var10 = 9;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var9['backgroundColor'] = var13;
    var4['root'] = var9;
    var9 = {'position': 'absolute', 'inset': 0, 'opacity': 0.45};
    var4['backdropImage'] = var9;
    var9 = {'position': 'absolute', 'inset': 0};
    var4['backdropGradient'] = var9;
    var9 = {'position': 'absolute', 'inset': 0};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var9['backgroundColor'] = var13;
    var4['curtain'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['main'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center'};
    var12 = 'center';
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var4['header'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9['tintColor'] = var13;
    var4['closeButtonIcon'] = var9;
    var9 = {'flexGrow': 1, 'flexDirection': 'column', 'justifyContent': 'center'};
    var4['body'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['preview'] = var9;
    var9 = {'paddingTop': null, 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'flex-start'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9['paddingTop'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['messages'] = var9;
    var9 = {};
    var9['textAlign'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var9['marginHorizontal'] = var13;
    var4['title'] = var9;
    var9 = {};
    var9['textAlign'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var9['marginHorizontal'] = var13;
    var4['description'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginBottom'] = var13;
    var4['footer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9['marginHorizontal'] = var13;
    var4['cta'] = var9;
    var9 = {};
    var9['textAlign'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['marginHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['marginBottom'] = var10;
    var4['finePrint'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
    var _closure1_slot20 = var4;
    var4 = function PurchaseSuccessModalBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var33 = var1.sku;
            var _closure2_slot0 = var33;
            var32 = var1.title;
            var30 = var1.body;
            var20 = var1.finePrint;
            var25 = var1.onClose;
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
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
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
                var12 = _closure1_slot17;
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
                var12 = _closure1_slot18;
                var3['__initData'] = var12;
                var3 = var4.bind(var6)(var3);
                var1['textViewStyle'] = var3;
                var3 = var11[var8];
                var4 = var10.bind(var9)(var3);
                var3 = var4.useAnimatedStyle;
                var2 = function s() {
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
                var5 = _closure1_slot19;
                var2['__initData'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['curtainViewStyle'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var3);
            var31 = var2.previewViewStyle;
            var26 = var2.textViewStyle;
            var10 = var2.curtainViewStyle;
            var5 = _closure1_slot4;
            var6 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var33;
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
            var15 = var6.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot4;
                var1['width'] = var2;
                return var1;
            };
            var6 = var3.bind(var5)(var1, var2);
            var2 = var5.useRef;
            var1 = _closure1_slot20;
            var1 = var2.bind(var5)(var1);
            var _closure2_slot1 = var1;
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
                    var7 = _closure1_slot20;
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
            var5[1] = var6;
            var1['style'] = var5;
            var6 = null;
            var8 = var6 != var15;
            if(!var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = _closure1_slot14;
            var12 = _closure1_slot5;
            var5 = {};
            var14 = {};
            var14['uri'] = var15;
            var5['source'] = var14;
            var14 = var9.backdropImage;
            var5['style'] = var14;
            var14 = 4;
            var5['blurRadius'] = var14;
            var14 = 'cover';
            var5['resizeMode'] = var14;
            var8 = var13.bind(var4)(var12, var5);
case 18:
            var5 = new Array(4);
            var5[0] = var8;
            var29 = _closure1_slot14;
            var21 = _closure1_slot1;
            var27 = _closure1_slot2;
            var8 = 18;
            var8 = var27[var8];
            var12 = var21.bind(var4)(var8);
            var8 = {};
            var13 = var9.backdropGradient;
            var8['style'] = var13;
            var13 = _closure1_slot13;
            var14 = var13.START;
            var8['start'] = var14;
            var13 = var13.END;
            var8['end'] = var13;
            var13 = [0.4, 0.75, 1];
            var8['locations'] = var13;
            var13 = ['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)', '#000000'];
            var8['colors'] = var13;
            var8 = var29.bind(var4)(var12, var8);
            var5[1] = var8;
            var14 = _closure1_slot15;
            var28 = _closure1_slot0;
            var8 = 19;
            var8 = var27[var8];
            var8 = var28.bind(var4)(var8);
            var13 = var8.SafeAreaPaddingView;
            var12 = {'style': null, 'top': true, 'bottom': true, 'left': true, 'right': true};
            var8 = var9.main;
            var12['style'] = var8;
            var23 = true;
            var17 = _closure1_slot7;
            var8 = {};
            var15 = var9.header;
            var8['style'] = var15;
            var15 = 20;
            var15 = var27[var15];
            var15 = var28.bind(var4)(var15);
            var16 = var15.HeaderBackButton;
            var15 = {};
            var15['onPress'] = var25;
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
            var15['backImage'] = var11;
            var24 = 22;
            var11 = var27[var24];
            var11 = var28.bind(var4)(var11);
            var19 = var11.intl;
            var18 = var19.string;
            var11 = var27[var24];
            var11 = var28.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.cpT0Cq;
            var11 = var18.bind(var19)(var11);
            var15['accessibilityLabel'] = var11;
            var11 = false;
            var15['labelVisible'] = var11;
            var15 = var29.bind(var4)(var16, var15);
            var8['children'] = var15;
            var8 = var29.bind(var4)(var17, var8);
            var15 = new Array(3);
            var15[0] = var8;
            var16 = _closure1_slot6;
            var8 = {};
            var18 = {};
            var19 = 1;
            var18['flex'] = var19;
            var8['style'] = var18;
            var18 = var9.body;
            var8['contentContainerStyle'] = var18;
            var8['alwaysBounceVertical'] = var11;
            var11 = 10;
            var18 = var27[var11];
            var18 = var21.bind(var4)(var18);
            var19 = var18.View;
            var18 = {};
            var34 = var9.preview;
            var22 = new Array(2);
            var22[0] = var34;
            var22[1] = var31;
            var18['style'] = var22;
            var22 = 23;
            var22 = var27[var22];
            var31 = var21.bind(var4)(var22);
            var22 = {};
            var22['sku'] = var33;
            var33 = 250;
            var22['size'] = var33;
            var22 = var29.bind(var4)(var31, var22);
            var18['children'] = var22;
            var19 = var29.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var27[var11];
            var19 = var21.bind(var4)(var19);
            var22 = var19.View;
            var19 = {};
            var31 = var9.messages;
            var21 = new Array(2);
            var21[0] = var31;
            var21[1] = var26;
            var19['style'] = var21;
            var21 = 24;
            var26 = var27[var21];
            var26 = var28.bind(var4)(var26);
            var31 = var26.Text;
            var26 = {'variant': 'heading-xl/semibold', 'color': 'white'};
            var33 = var9.title;
            var26['style'] = var33;
            var26['children'] = var32;
            var31 = var29.bind(var4)(var31, var26);
            var26 = new Array(2);
            var26[0] = var31;
            var27 = var27[var21];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Text;
            var27 = {'variant': 'text-md/medium', 'color': 'white'};
            var31 = var9.description;
            var27['style'] = var31;
            var27['children'] = var30;
            var27 = var29.bind(var4)(var28, var27);
            var26[1] = var27;
            var19['children'] = var26;
            var19 = var14.bind(var4)(var22, var19);
            var18[1] = var19;
            var8['children'] = var18;
            var8 = var14.bind(var4)(var16, var8);
            var15[1] = var8;
            var16 = {};
            var8 = var9.footer;
            var16['style'] = var8;
            var6 = var6 != var20;
            if(!var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var19 = _closure1_slot14;
            var18 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var21];
            var8 = var18.bind(var4)(var8);
            var18 = var8.Text;
            var8 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var21 = var9.finePrint;
            var8['style'] = var21;
            var8['children'] = var20;
            var6 = var19.bind(var4)(var18, var8);
case 20:
            var18 = new Array(2);
            var18[0] = var6;
            var8 = _closure1_slot14;
            var20 = _closure1_slot7;
            var19 = {};
            var6 = var9.cta;
            var19['style'] = var6;
            var27 = _closure1_slot0;
            var6 = _closure1_slot2;
            var21 = 25;
            var21 = var6[var21];
            var21 = var27.bind(var4)(var21);
            var22 = var21.Button;
            var21 = {};
            var21['onPress'] = var25;
            var25 = var6[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var6[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.cpT0Cq;
            var24 = var25.bind(var26)(var24);
            var21['text'] = var24;
            var24 = 'lg';
            var21['size'] = var24;
            var21['grow'] = var23;
            var21 = var8.bind(var4)(var22, var21);
            var19['children'] = var21;
            var19 = var8.bind(var4)(var20, var19);
            var18[1] = var19;
            var16['children'] = var18;
            var16 = var14.bind(var4)(var17, var16);
            var15[2] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5[2] = var12;
            var7 = _closure1_slot1;
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
    var _closure1_slot21 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.skuId;
            var _closure2_slot0 = var2;
            var2 = var1.orbsReward;
            var5 = var1.onClose;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var10 = var6.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var10)(var8, var2);
            var _closure2_slot1 = var9;
            var2 = 26;
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.useGetOrFetchApplication;
            var11 = null;
            var8 = var11 == var9;
            var2 = undefined;
            if(var8) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = var9.applicationId;
case 22:
            var13 = var6.bind(var7)(var2);
            _closure2_slot2 = var13;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 27;
            var2 = var7[var2];
            var6 = var6.bind(var4)(var2);
            var7 = var11 != var13;
            var2 = null;
            if(!var7) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var2 = var13;
case 24:
            var2 = var6.bind(var4)(var2);
            var2 = var2.hasAlreadyLinked;
            _closure2_slot3 = var2;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 28;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 29;
                    var2 = var8[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = 30;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY;
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var2['sku_id'] = var6;
                    var8 = _closure2_slot1;
                    var6 = null;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(var8) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var7 = _closure2_slot1;
                    var6 = var7.applicationId;
case 26:
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var6 = var7.bind(var4)(var6);
            var14 = _closure1_slot0;
            var6 = _closure1_slot2;
            var12 = 22;
            var7 = var6[var12];
            var7 = var14.bind(var4)(var7);
            var10 = var7.intl;
            var7 = var10.string;
            if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 15:
            var15 = _closure1_slot1;
            var8 = 31;
            var8 = var6[var8];
            var8 = var15.bind(var4)(var8);
            var8 = var8.bRPsNX;
            var8 = var7.bind(var10)(var8);
            _fun0005_ip = 29; continue _fun0005;
case 28:
            var6 = var6[var12];
            var6 = var14.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6["5glWta"];
            var8 = var7.bind(var10)(var6);
case 29:
            var10 = _closure1_slot4;
            var7 = var10.useMemo;
            var6 = new Array(3);
            var6[0] = var2;
            var15 = var11 == var9;
            var14 = undefined;
            if(var15) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var14 = var9.name;
case 30:
            var6[1] = var14;
            var14 = var11 == var13;
            var11 = undefined;
            if(var14) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var11 = var13.name;
case 32:
            var6[2] = var11;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var8 = _closure2_slot3;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 22;
                    var4 = var6[var2];
                    var7 = undefined;
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    if(var8) { _fun0007_ip = 23; continue _fun0007 }
case 34:
                    var8 = _closure1_slot1;
                    var1 = 31;
                    var1 = var6[var1];
                    var1 = var8.bind(var7)(var1);
                    var8 = var1.eNNnIG;
                    var1 = {};
                    var11 = _closure2_slot2;
                    var10 = null;
                    var12 = var10 == var11;
                    var11 = undefined;
                    if(var12) { _fun0007_ip = 27; continue _fun0007 }
case 35:
                    var12 = _closure2_slot2;
                    var11 = var12.name;
case 27:
                    var12 = var10 != var11;
                    var10 = '';
                    if(!var12) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var10 = var11;
case 36:
                    var1['applicationName'] = var10;
                    var1 = var4.bind(var5)(var8, var1);
                    _fun0007_ip = 38; continue _fun0007;
case 23:
                    var2 = var6[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.t;
                    var3 = var2.W2znvX;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var8 = null;
                    var6 = var8 == var6;
                    var11 = undefined;
                    if(var6) { _fun0007_ip = 24; continue _fun0007 }
case 39:
                    var6 = _closure2_slot1;
                    var11 = var6.name;
case 24:
                    var12 = var8 != var11;
                    var6 = '';
                    var10 = var6;
                    if(!var12) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var10 = var11;
case 40:
                    var2['skuName'] = var10;
                    var10 = _closure2_slot2;
                    var10 = var8 == var10;
                    var7 = undefined;
                    if(var10) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var9 = _closure2_slot2;
                    var7 = var9.name;
case 42:
                    var8 = var8 != var7;
                    if(!var8) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var6 = var7;
case 44:
                    var2['applicationName'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 38:
                    return var1;
                }
            };
            var7 = var7.bind(var10)(var3, var6);
            var6 = undefined;
            if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var12];
            var10 = var3.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var2 = var2[var12];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.TTj7ME;
            var2 = {};
            var12 = _closure1_slot10;
            var2['numDays'] = var12;
            var6 = var10.bind(var11)(var3, var2);
case 46:
            var3 = _closure1_slot14;
            var2 = _closure1_slot21;
            var1 = {};
            var1['sku'] = var9;
            var1['title'] = var8;
            var1['body'] = var7;
            var1['finePrint'] = var6;
            var1['onClose'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SocialLayerStorefrontProductSelfPurchaseSuccessModal'] = var4;
    var2 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.skuId;
            var _closure2_slot0 = var3;
            var3 = var1.orbsReward;
            var10 = var1.recipient;
            var _closure2_slot1 = var10;
            var5 = var1.onClose;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 15;
            var3 = var11[var3];
            var4 = undefined;
            var8 = var9.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var7.bind(var8)(var6, var3);
            var _closure2_slot2 = var8;
            var6 = _closure1_slot1;
            var3 = 28;
            var3 = var11[var3];
            var6 = var6.bind(var4)(var3);
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 29;
                    var2 = var8[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = 30;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY;
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var2['sku_id'] = var6;
                    var8 = _closure2_slot2;
                    var6 = null;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(var8) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var7 = _closure2_slot2;
                    var6 = var7.applicationId;
case 26:
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
            if(var3) { _fun0008_ip = 4; continue _fun0008 }
case 48:
            var11 = var8.name;
case 4:
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var10;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                    var8 = _closure2_slot2;
                    var5 = null;
                    var10 = var5 == var8;
                    var8 = undefined;
                    if(var10) { _fun0010_ip = 35; continue _fun0010 }
case 49:
                    var10 = _closure2_slot2;
                    var8 = var10.name;
case 35:
                    var1['itemName'] = var8;
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 32;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.getName;
                    var6 = _closure2_slot1;
                    var6 = var7.bind(var8)(var6);
                    var7 = var5 != var6;
                    var5 = 'your recipient';
                    if(!var7) { _fun0010_ip = 13; continue _fun0010 }
case 50:
                    var5 = var6;
case 13:
                    var1['giftRecipient'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var2, var3);
            var3 = _closure1_slot14;
            var2 = _closure1_slot21;
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