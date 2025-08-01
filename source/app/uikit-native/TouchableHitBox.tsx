// app/uikit-native/TouchableHitBox.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var4 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.StyleSheet;
    var4 = var4.ActivityIndicator;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var9 = var10.create;
    var7 = {};
    var4 = {'flexGrow': 0, 'flexShrink': 1, 'justifyContent': 'center', 'alignItems': 'center', 'backgroundColor': 'transparent', 'alignSelf': 'flex-start'};
    var11 = 8;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var4['borderRadius'] = var11;
    var7['button'] = var4;
    var11 = 10;
    var4 = {'lineHeight': 24, 'margin': 10, 'maxWidth': 60, 'fontSize': 16};
    var7['buttonText'] = var4;
    var4 = {};
    var4['margin'] = var11;
    var7['buttonIcon'] = var4;
    var11 = {};
    var4 = 12;
    var11['margin'] = var4;
    var7['buttonSpinner'] = var11;
    var11 = {};
    var12 = 0.6;
    var11['opacity'] = var12;
    var7['buttonDisabled'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot10 = var7;
    var7 = var2.PureComponent;
    var2 = function(arg1) {
        var4 = function TouchableHitBox() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var6 = var1.disabled;
                var17 = var1.source;
                var16 = var1.text;
                var7 = var1.loading;
                var10 = var1.activeOpacity;
                var12 = var1.onPress;
                var11 = var1.onLongPress;
                var9 = var1.style;
                var3 = var1.IconComponent;
                var23 = var1.iconSize;
                var18 = var1.iconStyle;
                var8 = var1.color;
                var2 = var1.disableColor;
                var4 = undefined;
                var22 = var4 !== var2;
                if(!var22) { _fun0003_ip = 92; continue _fun0003 }
 89:
                var22 = var2;
 92:
                var14 = var1.accessibilityLabel;
                var15 = var1.accessibilityRole;
                var13 = var1.accessibilityState;
                var1 = var1.children;
                var2 = null;
                var19 = var2 != var17;
                var5 = undefined;
                if(!var19) { _fun0003_ip = 222; continue _fun0003 }
 124:
                var21 = _closure1_slot9;
                var20 = _closure1_slot1;
                var24 = _closure1_slot2;
                var19 = 9;
                var19 = var24[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var24 = _closure1_slot10;
                var25 = var24.buttonIcon;
                var24 = new Array(3);
                var24[0] = var25;
                var25 = var6;
                if(!var6) { _fun0003_ip = 187; continue _fun0003 }
 177:
                var26 = _closure1_slot10;
                var25 = var26.buttonDisabled;
 187:
                var24[1] = var25;
                var24[2] = var18;
                var19['style'] = var24;
                var19['source'] = var17;
                var19['color'] = var8;
                var19['size'] = var23;
                var19['disableColor'] = var22;
                var5 = var21.bind(var4)(var20, var19);
 222:
                if(var7) { _fun0003_ip = 452; continue _fun0003 }
 228:
                if(!(var2 == var16)) { _fun0003_ip = 345; continue _fun0003 }
 232:
                if(!(var2 != var3)) { _fun0003_ip = 240; continue _fun0003 }
 236:
                if(!(var2 == var17)) { _fun0003_ip = 267; continue _fun0003 }
 240:
                if(!(var2 == var17)) { _fun0003_ip = 496; continue _fun0003 }
 247:
                var2 = var2 != var1;
                var5 = undefined;
                if(!var2) { _fun0003_ip = 496; continue _fun0003 }
 259:
                var5 = var1;
                _fun0003_ip = 496; continue _fun0003;
 267:
                var2 = _closure1_slot9;
                var1 = {};
                var17 = 'sm';
                var1['size'] = var17;
                var1['color'] = var8;
                var17 = _closure1_slot10;
                var19 = var17.buttonIcon;
                var17 = new Array(3);
                var17[0] = var19;
                var19 = var6;
                if(!var6) { _fun0003_ip = 322; continue _fun0003 }
 312:
                var20 = _closure1_slot10;
                var19 = var20.buttonDisabled;
 322:
                var17[1] = var19;
                var17[2] = var18;
                var1['style'] = var17;
                var5 = var2.bind(var4)(var3, var1);
                _fun0003_ip = 496; continue _fun0003;
 345:
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 10;
                var1 = var17[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.LegacyText;
                var1 = {};
                var17 = 1;
                var1['numberOfLines'] = var17;
                var17 = _closure1_slot10;
                var18 = var17.buttonText;
                var17 = new Array(3);
                var17[0] = var18;
                var18 = var6;
                if(!var6) { _fun0003_ip = 422; continue _fun0003 }
 412:
                var19 = _closure1_slot10;
                var18 = var19.buttonDisabled;
 422:
                var17[1] = var18;
                var18 = {};
                var18['color'] = var8;
                var17[2] = var18;
                var1['style'] = var17;
                var1['children'] = var16;
                var5 = var3.bind(var4)(var2, var1);
                _fun0003_ip = 496; continue _fun0003;
 452:
                var3 = _closure1_slot9;
                var2 = _closure1_slot8;
                var1 = {};
                var16 = _closure1_slot10;
                var16 = var16.buttonSpinner;
                var1['style'] = var16;
                var16 = true;
                var1['animating'] = var16;
                var1['color'] = var8;
                var5 = var3.bind(var4)(var2, var1);
 496:
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 11;
                var1 = var16[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1['accessibilityRole'] = var15;
                var1['accessibilityLabel'] = var14;
                var1['accessibilityState'] = var13;
                var1['onPress'] = var12;
                var1['onLongPress'] = var11;
                var1['activeOpacity'] = var10;
                var8 = _closure1_slot10;
                var10 = var8.button;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var1['style'] = var8;
                if(var6) { _fun0003_ip = 590; continue _fun0003 }
 587:
                var6 = var7;
 590:
                var1['disabled'] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var7);
    var7 = {};
    var8 = function onPress() {
        var1 = undefined;
        return var1;
    };
    var7['onPress'] = var8;
    var2['defaultProps'] = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/TouchableHitBox.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();