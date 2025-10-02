// app/modules/remixing/native/components/RemixingButton.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'alignSelf': 'auto', 'height': 40, 'width': 40, 'borderRadius': 20, 'alignItems': 'center', 'justifyContent': 'center', 'marginHorizontal': 4, 'overflow': 'hidden', 'backgroundColor': 'rgba(0, 0, 0, 0.7)'};
    var4['touchable'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginHorizontal'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/RemixingButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.accessibilityLabel;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var8 = var1.icon;
            var7 = var1.iconSize;
            var13 = var1.style;
            var12 = var1.iconStyle;
            var5 = var1.disabled;
            var11 = var1.onLongPress;
            var1 = var1.withHaptics;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = true;
case 2:
            var _closure2_slot1 = var1;
            var3 = _closure1_slot3;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 3;
            var1 = var10[var1];
            var2 = var9.bind(var4)(var1);
            var1 = {};
            var16 = 'button';
            var1['accessibilityRole'] = var16;
            var1['accessibilityLabel'] = var15;
            var14 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var3 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
case 4:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var1['onPress'] = var14;
            var1['onLongPress'] = var11;
            var1['iconSize'] = var7;
            var11 = _closure1_slot4;
            var14 = var11.touchable;
            var6 = new Array(2);
            var6[0] = var14;
            var6[1] = var13;
            var1['style'] = var6;
            var1['disabled'] = var5;
            var5 = 5;
            var5 = var10[var5];
            var6 = var9.bind(var4)(var5);
            var5 = {};
            var13 = var11.icon;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var5['style'] = var11;
            var5['source'] = var8;
            var8 = 6;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.WHITE_500;
            var5['color'] = var8;
            var5['size'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();