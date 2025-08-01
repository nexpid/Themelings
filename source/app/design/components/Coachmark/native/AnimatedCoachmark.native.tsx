// app/design/components/Coachmark/native/AnimatedCoachmark.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
            var10 = arg2;
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
            var5[0] = var10;
            var7 = _closure1_slot5;
            var7 = var7.absoluteFill;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = 'box-none';
            var1['pointerEvents'] = var5;
            var5 = null;
            var7 = var5 != var9;
            if(!var7) { _fun0001_ip = 147; continue _fun0001 }
 88:
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 5;
            var6 = var11[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.CoachmarkContainer;
            var6 = {};
            var13 = var6;
            var12 = var9;
            var9 = copyDataProperties(var13, var12);
            var9 = 'enterExitAnimatedStyles';
            var6[var9] = var10;
            var5 = var8.bind(var3)(var7, var6);
 147:
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
    var4 = 'design/components/Coachmark/native/AnimatedCoachmark.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
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
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 6;
            var6 = var10[var4];
            var4 = undefined;
            var6 = var3.bind(var4)(var6);
            var6 = var6.AccessibilityPreferencesContext;
            var6 = var7.bind(var11)(var6);
            var6 = var6.reducedMotion;
            var7 = var6.enabled;
            var6 = var11.useState;
            var13 = var6.bind(var11)(var12);
            var9 = _closure1_slot3;
            var6 = 2;
            var6 = var9.bind(var4)(var13, var6);
            var9 = var6[var2];
            var2 = 1;
            var2 = var6[var2];
            var _closure2_slot1 = var2;
            var2 = 7;
            var2 = var10[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.tooltipEnterExitAnimation;
            var2 = var8.position;
            var6 = var3.bind(var6)(var2);
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
            if(!var9) { _fun0002_ip = 221; continue _fun0002 }
 218:
            var7 = var8;
 221:
            var1['item'] = var7;
            var1['entering'] = var6;
            var1['exiting'] = var6;
            var5 = _closure1_slot7;
            var1['renderItem'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['AnimatedCoachmark'] = var2;
    return var1;
})();