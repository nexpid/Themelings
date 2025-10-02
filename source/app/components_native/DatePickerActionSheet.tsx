// app/components_native/DatePickerActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function closeActionSheet() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.hideActionSheet;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function DateRangeError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.show;
            var _closure2_slot0 = var6;
            var11 = var1.errorText;
            var1 = _closure1_slot8;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var1 = null;
            var10 = var3.bind(var5)(var1);
            var _closure2_slot1 = var10;
            var7 = _closure1_slot4;
            var5 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setAccessibilityFocus;
                var2 = {};
                var5 = _closure2_slot1;
                var2['ref'] = var5;
                var5 = 200;
                var2['delay'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var5.bind(var7)(var1, var3);
            var14 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var3 = var5[var1];
            var7 = var14.bind(var4)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function S() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var1 = var4[var1];
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.STANDARD_EASING;
                    var5['easing'] = var1;
                    var3 = _closure2_slot0;
                    var1 = 150;
                    if(!var3) { _fun0002_ip = 54; continue _fun0002 }
 51:
                    var1 = 200;
 54:
                    var5['duration'] = var1;
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 17;
                    var3 = var3[var8];
                    var10 = var4.bind(var7)(var3);
                    var9 = var10.withTiming;
                    var11 = _closure2_slot0;
                    var3 = 0;
                    if(!var11) { _fun0002_ip = 97; continue _fun0002 }
 94:
                    var3 = 1;
 97:
                    var3 = var9.bind(var10)(var3, var5);
                    var1['opacity'] = var3;
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var10 = var9.bind(var7)(var3);
                    var9 = var10.withTiming;
                    var11 = _closure2_slot0;
                    var3 = 0;
                    if(!var11) { _fun0002_ip = 144; continue _fun0002 }
 138:
                    var3 = 500;
 144:
                    var3 = var9.bind(var10)(var3, var5);
                    var1['maxHeight'] = var3;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.withTiming;
                    var6 = _closure2_slot0;
                    var4 = 0;
                    if(!var6) { _fun0002_ip = 189; continue _fun0002 }
 186:
                    var4 = 12;
 189:
                    var2 = var2.bind(var3)(var4, var5);
                    var1['paddingVertical'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var13 = 16;
            var13 = var5[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.STANDARD_EASING;
            var12['STANDARD_EASING'] = var13;
            var12['show'] = var6;
            var13 = 17;
            var13 = var5[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.withTiming;
            var12['withTiming'] = var13;
            var2['__closure'] = var12;
            var12 = 11991491746736.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot11;
            var2['__initData'] = var12;
            var7 = var3.bind(var7)(var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var12 = var9.rangeErrorContainer;
            var5 = new Array(2);
            var5[0] = var12;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = !var6;
            var1['accessibilityElementsHidden'] = var5;
            var5 = 'no-hide-descendants';
            if(!var6) { _fun0001_ip = 268; continue _fun0001 }
 264:
            var5 = 'auto';
 268:
            var1['importantForAccessibility'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot5;
            var5 = {'ref': null, 'accessible': true, 'accessibilityRole': 'alert'};
            var5['ref'] = var10;
            var9 = var9.rangeError;
            var5['style'] = var9;
            var10 = _closure1_slot6;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 18;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'status-danger-text'};
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.Fonts;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var13 = 'flex-start';
    var10['justifyContent'] = var13;
    var7['rangeErrorContainer'] = var10;
    var13 = {'backgroundColor': null, 'padding': 12, 'marginHorizontal': 12};
    var10 = 6;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.STATUS_DANGER_BACKGROUND;
    var13['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13['borderRadius'] = var14;
    var7['rangeError'] = var13;
    var13 = {'display': 'flex', 'alignItems': 'center'};
    var7['datetimePickerContainer'] = var13;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginVertical': 6, 'paddingHorizontal': 12, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'flex-end'};
    var4['footer'] = var9;
    var9 = {};
    var13 = 7;
    var13 = var6[var13];
    var13 = var11.bind(var1)(var13);
    var12 = var12.DISPLAY_SEMIBOLD;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var11 = var10.TEXT_NORMAL;
    var10 = 16;
    var16 = var13.bind(var1)(var12, var11, var10);
    var17 = var9;
    var10 = copyDataProperties(var17, var16);
    var4['actionButtonText'] = var9;
    var9 = {};
    var10 = 24;
    var9['marginLeft'] = var10;
    var4['actionButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = function ActionSheetHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var8 = var1.title;
            var9 = var1.handleCancel;
            var14 = var1.handleSubmit;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var4 = _closure1_slot6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.BottomSheetTitleHeader;
            if(var1) { _fun0003_ip = 278; continue _fun0003 }
 90:
            var1 = {};
            var1['title'] = var8;
            var15 = _closure1_slot6;
            var2 = 12;
            var11 = var10[var2];
            var11 = var7.bind(var5)(var11);
            var12 = var11.ActionSheetHeaderPressableText;
            var11 = {};
            var11['onPress'] = var9;
            var13 = 13;
            var16 = var10[var13];
            var16 = var7.bind(var5)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var10[var13];
            var16 = var7.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.ETE/oK;
            var16 = var17.bind(var18)(var16);
            var11['label'] = var16;
            var11 = var15.bind(var5)(var12, var11);
            var1['leading'] = var11;
            var12 = _closure1_slot6;
            var2 = var10[var2];
            var2 = var7.bind(var5)(var2);
            var11 = var2.ActionSheetHeaderPressableText;
            var2 = {};
            var2['onPress'] = var14;
            var14 = var10[var13];
            var14 = var7.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var10[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.R3BPHx;
            var13 = var14.bind(var15)(var13);
            var2['label'] = var13;
            var2 = var12.bind(var5)(var11, var2);
            var1['trailing'] = var2;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 329; continue _fun0003;
 278:
            var2 = {};
            var2['title'] = var8;
            var8 = _closure1_slot6;
            var6 = 11;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.ActionSheetCloseButton;
            var6 = {};
            var6['onPress'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['trailing'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 329:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = function ActionSheetFooter(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var19 = var1.handleCancel;
            var10 = var1.handleSubmit;
            var17 = var1.canSubmit;
            var1 = _closure1_slot9;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isAndroid;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!var2) { _fun0004_ip = 534; continue _fun0004 }
 71:
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var11.footer;
            var2['style'] = var6;
            var9 = _closure1_slot6;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 19;
            var6 = var16[var13];
            var8 = var14.bind(var5)(var6);
            var6 = {};
            var18 = true;
            var6['shrink'] = var18;
            var12 = var16[var13];
            var12 = var14.bind(var5)(var12);
            var12 = var12.Sizes;
            var12 = var12.MEDIUM;
            var6['size'] = var12;
            var12 = var16[var13];
            var12 = var14.bind(var5)(var12);
            var12 = var12.Colors;
            var12 = var12.TRANSPARENT;
            var6['color'] = var12;
            var12 = var11.actionButtonText;
            var6['textStyle'] = var12;
            var15 = _closure1_slot0;
            var12 = 13;
            var20 = var16[var12];
            var20 = var15.bind(var5)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var16[var12];
            var20 = var15.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.ETE/oK;
            var20 = var21.bind(var22)(var20);
            var6['text'] = var20;
            var20 = var16[var12];
            var20 = var15.bind(var5)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var16[var12];
            var20 = var15.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.ETE/oK;
            var20 = var21.bind(var22)(var20);
            var6['accessibilityLabel'] = var20;
            var20 = var11.actionButton;
            var6['style'] = var20;
            var6['onPress'] = var19;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot6;
            var7 = var16[var13];
            var8 = var14.bind(var5)(var7);
            var7 = {};
            var7['shrink'] = var18;
            var17 = !var17;
            var7['disabled'] = var17;
            var17 = var16[var13];
            var17 = var14.bind(var5)(var17);
            var17 = var17.Sizes;
            var17 = var17.MEDIUM;
            var7['size'] = var17;
            var13 = var16[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.Colors;
            var13 = var13.TRANSPARENT;
            var7['color'] = var13;
            var13 = var11.actionButtonText;
            var7['textStyle'] = var13;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var17 = var13.intl;
            var14 = var17.string;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.cY+Ooa;
            var13 = var14.bind(var17)(var13);
            var7['text'] = var13;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.cY+Ooa;
            var12 = var13.bind(var14)(var12);
            var7['accessibilityLabel'] = var12;
            var11 = var11.actionButton;
            var7['style'] = var11;
            var7['onPress'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 534:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/DatePickerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var16 = var2.mode;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0005_ip = 20; continue _fun0005 }
 16:
            var16 = 'date';
 20:
            var12 = var2.title;
            if(!(var12 === var4)) { _fun0005_ip = 89; continue _fun0005 }
 29:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var5 = var8[var3];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.epc9sr;
            var12 = var5.bind(var6)(var3);
 89:
            var9 = var2.startDate;
            var28 = var2.maximumDate;
            var _closure2_slot0 = var28;
            var29 = var2.minimumDate;
            var _closure2_slot1 = var29;
            var3 = var2.onSubmit;
            var _closure2_slot2 = var3;
            var5 = var2.onCancel;
            var _closure2_slot3 = var5;
            var3 = var2.requireDateChanged;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var14 = function isAboveMin(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0006_ip = 47; continue _fun0006 }
 19:
                    var3 = var4.getTime;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot1;
                    var2 = var4.getTime;
                    var2 = var2.bind(var4)();
                    var1 = var3 >= var2;
 47:
                    return var1;
                }
            };
            var _closure2_slot13 = var14;
            var21 = function isBelowMax(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0007_ip = 47; continue _fun0007 }
 19:
                    var3 = var4.getTime;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot0;
                    var2 = var4.getTime;
                    var2 = var2.bind(var4)();
                    var1 = var3 <= var2;
 47:
                    return var1;
                }
            };
            var _closure2_slot14 = var21;
            var2 = _closure1_slot8;
            var13 = var2.bind(var4)();
            var2 = null;
            if(!(var2 == var9)) { _fun0005_ip = 240; continue _fun0005 }
 212:
            var7 = global;
            var7 = var7.Date;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var36 = var8;
            var7 = new var36[var7](var35);
            var9 = var7 instanceof Object ? var7 : var8;
 240:
            _closure2_slot4 = var9;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var8 = var7.bind(var8)(var9);
            var11 = _closure1_slot3;
            var7 = 2;
            var9 = var11.bind(var4)(var8, var7);
            var10 = 0;
            var20 = var9[var10];
            _closure2_slot5 = var20;
            var8 = 1;
            var9 = var9[var8];
            _closure2_slot6 = var9;
            var15 = _closure1_slot4;
            var9 = var15.useState;
            var3 = !var3;
            var3 = var9.bind(var15)(var3);
            var3 = var11.bind(var4)(var3, var7);
            var9 = var3[var10];
            _closure2_slot7 = var9;
            var3 = var3[var8];
            _closure2_slot8 = var3;
            var17 = _closure1_slot4;
            var15 = var17.useState;
            var3 = true;
            var3 = var15.bind(var17)(var3);
            var3 = var11.bind(var4)(var3, var7);
            var15 = var3[var10];
            _closure2_slot9 = var15;
            var3 = var3[var8];
            _closure2_slot10 = var3;
            var17 = _closure1_slot4;
            var15 = var17.useState;
            var3 = false;
            var3 = var15.bind(var17)(var3);
            var3 = var11.bind(var4)(var3, var7);
            var15 = var3[var10];
            var3 = var3[var8];
            _closure2_slot11 = var3;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 20;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var23 = var3.bind(var4)();
            var7 = _closure1_slot4;
            var3 = var7.useRef;
            var3 = var3.bind(var7)(var20);
            _closure2_slot12 = var3;
            var3 = var2 != var28;
            var18 = undefined;
            if(!var3) { _fun0005_ip = 509; continue _fun0005 }
 454:
            var3 = global;
            var17 = var3.Date;
            var3 = var28.getFullYear;
            var3 = var3.bind(var28)();
            var35 = var3 + var8;
            var3 = var17.prototype;
            var7 = Object.create(var3, {constructor: {value: var17}});
            var31 = -1;
            var36 = var7;
            var34 = 0;
            var33 = var8;
            var32 = 0;
            var3 = new var36[var17](var35, var34, var33, var32, var31, var30);
            var18 = var3 instanceof Object ? var3 : var7;
 509:
            var2 = var2 != var29;
            var17 = undefined;
            if(!var2) { _fun0005_ip = 563; continue _fun0005 }
 518:
            var2 = global;
            var7 = var2.Date;
            var2 = var29.getFullYear;
            var35 = var2.bind(var29)();
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var36 = var3;
            var34 = 0;
            var33 = var8;
            var32 = 0;
            var2 = new var36[var7](var35, var34, var33, var32, var31);
            var17 = var2 instanceof Object ? var2 : var3;
 563:
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var20;
            var2 = function() {
                var2 = _closure2_slot12;
                var1 = _closure2_slot5;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 21;
            var8 = var7[var2];
            var10 = var3.bind(var4)(var8);
            var8 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot12;
                    var2 = _closure2_slot4;
                    var3['current'] = var2;
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 37; continue _fun0008 }
 27:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 37:
                    var2 = _closure1_slot13;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var11 = var10.bind(var4)(var8);
            var8 = var7[var2];
            var10 = var3.bind(var4)(var8);
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot12;
                    var5 = var2.current;
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0009_ip = 23; continue _fun0009 }
 19:
                    var2 = _closure2_slot9;
 23:
                    if(!var2) { _fun0009_ip = 65; continue _fun0009 }
 26:
                    var4 = _closure2_slot2;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.bind(var3)(var5);
                    var2 = var4.bind(var3)(var2);
 65:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0009_ip = 87; continue _fun0009 }
 72:
                    var3 = _closure2_slot11;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
                    _fun0009_ip = 100; continue _fun0009;
 87:
                    var2 = _closure1_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 100:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var10.bind(var4)(var8);
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0010_ip = 99; continue _fun0010 }
 9:
                    var2 = _closure2_slot1;
                    var2 = var5 == var2;
                    if(!var2) { _fun0010_ip = 31; continue _fun0010 }
 23:
                    var4 = _closure2_slot0;
                    var2 = var5 == var4;
 31:
                    if(var2) { _fun0010_ip = 66; continue _fun0010 }
 34:
                    var5 = _closure2_slot10;
                    var2 = _closure2_slot13;
                    var4 = undefined;
                    var2 = var2.bind(var4)(var3);
                    if(!var2) { _fun0010_ip = 61; continue _fun0010 }
 52:
                    var6 = _closure2_slot14;
                    var2 = var6.bind(var4)(var3);
 61:
                    var2 = var5.bind(var4)(var2);
 66:
                    var5 = _closure2_slot11;
                    var2 = undefined;
                    var4 = false;
                    var4 = var5.bind(var2)(var4);
                    var5 = _closure2_slot8;
                    var4 = true;
                    var4 = var5.bind(var2)(var4);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var2)(var3);
 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var2.bind(var4)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var1 = 23;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var1['onDismiss'] = var5;
            var8 = _closure1_slot6;
            var7 = _closure1_slot10;
            var5 = {};
            var5['title'] = var12;
            var5['handleCancel'] = var11;
            var5['handleSubmit'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            var1['header'] = var5;
            var8 = _closure1_slot6;
            var7 = _closure1_slot14;
            var5 = {};
            var12 = var15;
            if(!var15) { _fun0005_ip = 750; continue _fun0005 }
 742:
            var14 = var14.bind(var4)(var20);
            var12 = !var14;
 750:
            var5['show'] = var12;
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var14 = 13;
            var12 = var26[var14];
            var12 = var22.bind(var4)(var12);
            var25 = var12.intl;
            var24 = var25.formatToPlainString;
            var12 = var26[var14];
            var12 = var22.bind(var4)(var12);
            var12 = var12.t;
            var22 = var12.FsJO5+;
            var12 = {};
            var30 = _closure1_slot1;
            var27 = 22;
            var26 = var26[var27];
            var26 = var30.bind(var4)(var26);
            var30 = var26.bind(var4)(var29);
            var26 = var30.format;
            var29 = 'L';
            var26 = var26.bind(var30)(var29);
            var12['minDate'] = var26;
            var12 = var24.bind(var25)(var22, var12);
            var5['errorText'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var12 = _closure1_slot6;
            var8 = _closure1_slot14;
            var7 = {};
            if(!var15) { _fun0005_ip = 895; continue _fun0005 }
 887:
            var21 = var21.bind(var4)(var20);
            var15 = !var21;
 895:
            var7['show'] = var15;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var15 = var24[var14];
            var15 = var22.bind(var4)(var15);
            var26 = var15.intl;
            var25 = var26.formatToPlainString;
            var14 = var24[var14];
            var14 = var22.bind(var4)(var14);
            var14 = var14.t;
            var21 = var14.R7r9VF;
            var15 = {};
            var14 = _closure1_slot1;
            var27 = var24[var27];
            var27 = var14.bind(var4)(var27);
            var28 = var27.bind(var4)(var28);
            var27 = var28.format;
            var27 = var27.bind(var28)(var29);
            var15['maxDate'] = var27;
            var15 = var25.bind(var26)(var21, var15);
            var7['errorText'] = var15;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var12 = _closure1_slot6;
            var8 = _closure1_slot5;
            var7 = {};
            var13 = var13.datetimePickerContainer;
            var7['style'] = var13;
            var15 = _closure1_slot6;
            var13 = 24;
            var13 = var24[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var21 = 25;
            var21 = var24[var21];
            var22 = var22.bind(var4)(var21);
            var21 = var22.isThemeLight;
            var22 = var21.bind(var22)(var23);
            var21 = 'dark';
            if(!var22) { _fun0005_ip = 1077; continue _fun0005 }
 1073:
            var21 = 'light';
 1077:
            var13['theme'] = var21;
            var13['date'] = var20;
            var13['onDateChange'] = var19;
            var13['maximumDate'] = var18;
            var13['minimumDate'] = var17;
            var13['mode'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var7['children'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot12;
            var6 = {};
            var6['handleCancel'] = var11;
            var6['handleSubmit'] = var10;
            var6['canSubmit'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();