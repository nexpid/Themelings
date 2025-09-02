// app/modules/user_profile/native/UserProfileEditFormControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function FormControlText(arg1) {
        var1 = arg1;
        var5 = var1.text;
        var2 = _closure1_slot8;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 6;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
        var6 = var6.formControlText;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function FormControlSubtext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.text;
            var1 = _closure1_slot8;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0001_ip = 93; continue _fun0001 }
 30:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 6;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var7 = var7.formControlText;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 93:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'flexGrow': 1, 'flexShrink': 1, 'flexDirection': 'row', 'alignItems': 'center', 'gap': 12, 'padding': 12, 'borderColor': null, 'borderWidth': 1};
    var4 = 12;
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var10['borderColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var10['borderRadius'] = var11;
    var7['button'] = var10;
    var10 = {'flexGrow': 1, 'flexShrink': 1, 'flexDirection': 'column'};
    var7['buttonTextContainer'] = var10;
    var10 = {'marginRight': 'auto', 'flexShrink': 1};
    var7['formControlText'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEditFormControls.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function UserProfileEditFormButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.label;
            var5 = var1.labelTrailing;
            var17 = var1.buttonText;
            var18 = var1.buttonSubtext;
            var16 = var1.onPress;
            var12 = var1.leading;
            var11 = var1.trailing;
            var15 = var1.accessibilityLabel;
            var13 = var1.accessibilityHint;
            var8 = var1.disabled;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0002_ip = 69; continue _fun0002 }
 67:
            var8 = false;
 69:
            var9 = var1.hideArrow;
            if(!(var9 === var4)) { _fun0002_ip = 81; continue _fun0002 }
 79:
            var9 = false;
 81:
            var1 = _closure1_slot8;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var6 = _closure1_slot0;
            var19 = _closure1_slot1;
            var1 = 7;
            var1 = var19[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Input;
            var1 = {};
            var1['label'] = var7;
            var1['labelTrailing'] = var5;
            var7 = _closure1_slot7;
            var5 = 8;
            var5 = var19[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var16;
            var16 = var14.button;
            var5['style'] = var16;
            var16 = 'button';
            var5['accessibilityRole'] = var16;
            var5['accessibilityLabel'] = var15;
            var5['accessibilityHint'] = var13;
            var13 = {};
            var13['disabled'] = var8;
            var5['accessibilityState'] = var13;
            var5['disabled'] = var8;
            var8 = new Array(4);
            var8[0] = var12;
            var13 = _closure1_slot5;
            var12 = {};
            var14 = var14.buttonTextContainer;
            var12['style'] = var14;
            var16 = _closure1_slot6;
            var15 = _closure1_slot9;
            var14 = {};
            var14['text'] = var17;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot6;
            var16 = _closure1_slot10;
            var15 = {};
            var15['text'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var12['children'] = var14;
            var12 = var7.bind(var4)(var13, var12);
            var8[1] = var12;
            var8[2] = var11;
            var9 = !var9;
            if(!var9) { _fun0002_ip = 341; continue _fun0002 }
 303:
            var12 = _closure1_slot6;
            var11 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 9;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TableRowArrow;
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
 341:
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UserProfileEditFormButton'] = var4;
    var2 = function UserProfileEditFormSwitch(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.label;
            var15 = var1.subLabel;
            var14 = var1.value;
            var _closure2_slot0 = var14;
            var2 = var1.onValueChange;
            var _closure2_slot1 = var2;
            var16 = var1.accessibilityLabel;
            var8 = var1.accessibilityHint;
            var12 = var1.disabled;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0003_ip = 59; continue _fun0003 }
 57:
            var12 = false;
 59:
            var _closure2_slot2 = var4;
            var1 = _closure1_slot8;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isAndroid;
            var19 = var1.bind(var2)();
            var6 = _closure1_slot3;
            var1 = var6.useState;
            var3 = var1.bind(var6)(var14);
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var10 = var2[var1];
            var1 = 1;
            var1 = var2[var1];
            _closure2_slot2 = var1;
            var13 = function handleOnPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 36; continue _fun0004 }
 20:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    var1 = var3.bind(var4)(var2);
 36:
                    return var1;
                }
            };
            var3 = var6.useEffect;
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var6)(var1, var2);
            if(var19) { _fun0003_ip = 189; continue _fun0003 }
 183:
            var7 = _closure1_slot4;
            _fun0003_ip = 215; continue _fun0003;
 189:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.PressableHighlight;
 215:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 7;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Input;
            var1 = {};
            var1['label'] = var5;
            var6 = _closure1_slot7;
            var5 = {};
            var18 = undefined;
            if(!var19) { _fun0003_ip = 265; continue _fun0003 }
 262:
            var18 = var13;
 265:
            var5['onPress'] = var18;
            var17 = function onAccessibilityTap() {
                var3 = _closure2_slot2;
                var1 = _closure2_slot0;
                var2 = !var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 31; continue _fun0005 }
 13:
                        var3 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onAccessibilityTap'] = var17;
            var11 = var11.button;
            var5['style'] = var11;
            var11 = 'switch';
            var5['accessibilityRole'] = var11;
            var17 = null;
            var11 = var15;
            if(!(var17 != var16)) { _fun0003_ip = 311; continue _fun0003 }
 308:
            var11 = var16;
 311:
            var5['accessibilityLabel'] = var11;
            var5['accessibilityHint'] = var8;
            var8 = {};
            var8['disabled'] = var12;
            var8['checked'] = var10;
            var5['accessibilityState'] = var8;
            var5['disabled'] = var12;
            var11 = _closure1_slot6;
            var10 = _closure1_slot9;
            var8 = {};
            var8['text'] = var15;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot6;
            var10 = _closure1_slot0;
            var15 = _closure1_slot1;
            var9 = 11;
            var9 = var15[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.FormSwitch;
            var9 = {};
            var15 = true;
            var9['aria-hidden'] = var15;
            var9['value'] = var14;
            var9['onValueChange'] = var13;
            var9['disabled'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UserProfileEditFormSwitch'] = var2;
    return var1;
})();