// app/design/components/Tooltip/native/AnimatedTooltip.native.tsx
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
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = function renderTooltipItem(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var4 = _closure1_slot6;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = new Array(2);
            var7 = arg2;
            var5[0] = var7;
            var7 = _closure1_slot5;
            var7 = var7.absoluteFill;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = 'box-none';
            var1['pointerEvents'] = var5;
            var5 = null;
            var7 = var5 != var9;
            if(!var7) { _fun0001_ip = 136; continue _fun0001 }
 88:
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 5;
            var6 = var10[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.Tooltip;
            var6 = {};
            var12 = var6;
            var11 = var9;
            var9 = copyDataProperties(var12, var11);
            var5 = var8.bind(var3)(var7, var6);
 136:
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Tooltip/native/AnimatedTooltip.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AnimatedTooltip(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var12 = var5.visible;
            var _closure2_slot0 = var12;
            var2 = null;
            var4 = Object.create(var2);
            var2 = 0;
            var4['visible'] = var2;
            var16 = {};
            var15 = var5;
            var14 = var4;
            var8 = copyDataProperties(var16, var15, var14);
            var11 = _closure1_slot4;
            var7 = var11.useContext;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 6;
            var3 = var10[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.AccessibilityPreferencesContext;
            var3 = var7.bind(var11)(var3);
            var3 = var3.reducedMotion;
            var7 = var3.enabled;
            var3 = 7;
            var3 = var10[var3];
            var9 = var6.bind(var4)(var3);
            var6 = var9.tooltipEnterExitAnimation;
            var3 = var8.position;
            var6 = var6.bind(var9)(var3);
            var9 = var11.useState;
            var3 = false;
            var13 = var9.bind(var11)(var3);
            var9 = _closure1_slot3;
            var3 = 2;
            var3 = var9.bind(var4)(var13, var3);
            var9 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot1 = var2;
            var3 = var11.useEffect;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var11)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['useReducedMotion'] = var7;
            var7 = undefined;
            if(!var9) { _fun0002_ip = 223; continue _fun0002 }
 220:
            var7 = var8;
 223:
            var1['item'] = var7;
            var1['entering'] = var6;
            var1['exiting'] = var6;
            var5 = _closure1_slot7;
            var1['renderItem'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['AnimatedTooltip'] = var2;
    return var1;
})();