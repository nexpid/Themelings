// app/uikit-native/ProgressCircle.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.View;
    var _closure1_slot8 = var9;
    var10 = var7.StyleSheet;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot9 = var9;
    var7 = var7.jsxs;
    var _closure1_slot10 = var7;
    var9 = var10.create;
    var7 = {};
    var11 = {'alignItems': 'center', 'justifyContent': 'center'};
    var7['progressCircle'] = var11;
    var11 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var7['circle'] = var11;
    var11 = {'position': 'relative', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var7['circleOverlay'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot11 = var7;
    var4 = var4.Component;
    var2 = function(arg1) {
        var4 = function ProgressCircle() {
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
                var1 = _closure1_slot12;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'renderCircle';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var1 = var1.props;
            var6 = var1.percent;
            var7 = var1.color;
            var13 = var1.size;
            var14 = var1.strokeWidth;
            var11 = global;
            var3 = var11.Math;
            var2 = var3.min;
            var5 = var11.Math;
            var4 = var5.max;
            var1 = 0;
            var1 = var4.bind(var5)(var6, var1);
            var10 = 100;
            var8 = var2.bind(var3)(var1, var10);
            var1 = var13 - var14;
            var12 = 2;
            var15 = var1 / var12;
            var1 = var11.Math;
            var1 = var1.PI;
            var1 = var15 * var1;
            var9 = var1 * var12;
            var4 = _closure1_slot9;
            var2 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 8;
            var1 = var17[var5];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var16 = var11.HermesInternal;
            var19 = var16.concat;
            var18 = '0 0 ';
            var16 = ' ';
            var18 = var19.bind(var18)(var13, var16, var13);
            var1['viewBox'] = var18;
            var18 = _closure1_slot11;
            var18 = var18.circle;
            var1['style'] = var18;
            var6 = _closure1_slot0;
            var5 = var17[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.Circle;
            var5 = {};
            var17 = 'none';
            var5['fill'] = var17;
            var17 = var13 / var12;
            var5['cx'] = var17;
            var17 = var13 / var12;
            var5['cy'] = var17;
            var5['r'] = var15;
            var5['strokeWidth'] = var14;
            var14 = 'round';
            var5['strokeLinecap'] = var14;
            var23 = var13 / var12;
            var21 = var13 / var12;
            var11 = var11.HermesInternal;
            var13 = var11.concat;
            var24 = 'rotate(-90 ';
            var20 = ')';
            var22 = var16;
            var11 = var24[var13](var23, var22, var21, var20, var19);
            var5['transform'] = var11;
            var5['stroke'] = var7;
            var7 = {};
            var7['strokeDasharray'] = var9;
            var10 = var8 / var10;
            var8 = 1;
            var8 = var8 - var10;
            var8 = var8 * var9;
            var7['strokeDashoffset'] = var8;
            var5['style'] = var7;
            var5 = var4.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = this;
                var1 = var5.props;
                var7 = var1.style;
                var6 = var1.children;
                var4 = _closure1_slot10;
                var3 = _closure1_slot8;
                var2 = {};
                var1 = _closure1_slot11;
                var8 = var1.progressCircle;
                var1 = new Array(2);
                var1[0] = var8;
                var1[1] = var7;
                var2['style'] = var1;
                var1 = var5.renderCircle;
                var5 = var1.bind(var5)();
                var1 = new Array(2);
                var1[0] = var5;
                var5 = null;
                var7 = var5 != var6;
                if(!var7) { _fun0003_ip = 122; continue _fun0003 }
 86:
                var9 = _closure1_slot9;
                var8 = _closure1_slot8;
                var7 = {};
                var10 = _closure1_slot11;
                var10 = var10.circleOverlay;
                var7['style'] = var10;
                var7['children'] = var6;
                var6 = undefined;
                var5 = var9.bind(var6)(var8, var7);
 122:
                var1[1] = var5;
                var2['children'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = {'size': 20, 'strokeWidth': 0.9};
    var7 = 9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.GUILD_BOOSTING_PINK;
    var4['color'] = var7;
    var2['defaultProps'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/ProgressCircle.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();