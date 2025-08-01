// app/uikit-native/GradientBorder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var2 = function GradientBorder(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var10 = var6.children;
            var2 = var6.direction;
            var9 = var6.style;
            var13 = var6.borderWidth;
            var5 = undefined;
            if(!(var13 === var5)) { _fun0001_ip = 34; continue _fun0001 }
 31:
            var13 = 1;
 34:
            var12 = var6.borderRadius;
            if(!(var12 === var5)) { _fun0001_ip = 84; continue _fun0001 }
 43:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.radii;
            var3 = var1.sm;
            var1 = 1;
            var12 = var3 + var1;
 84:
            var4 = {'children': 0, 'direction': 0, 'style': 0, 'borderWidth': 0, 'borderRadius': 0};
            var3 = null;
            var19 = var4;
            var18 = null;
            var1 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var6;
            var17 = var4;
            var7 = copyDataProperties(var19, var18, var17);
            var1 = function getStartEnd(arg1) {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.match;
                var3 = arg1;
                var6 = var4.bind(var5)(var3);
                var5 = var6.with;
                var3 = _closure1_slot8;
                var4 = var3.HORIZONTAL;
                var3 = function() {
                    var1 = _closure1_slot5;
                    return var1;
                };
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.with;
                var3 = _closure1_slot8;
                var4 = var3.VERTICAL;
                var3 = function() {
                    var1 = _closure1_slot6;
                    return var1;
                };
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.with;
                var3 = _closure1_slot8;
                var4 = var3.DIAGONAL;
                var3 = function() {
                    var1 = {};
                    var2 = {'x': 0, 'y': 0};
                    var1['START'] = var2;
                    var2 = {'x': 1, 'y': 1};
                    var1['END'] = var2;
                    return var1;
                };
                var4 = var5.bind(var6)(var4, var3);
                var3 = var4.with;
                var2 = _closure1_slot8;
                var2 = var2.ANTI_DIAGONAL;
                var1 = function() {
                    var1 = {};
                    var2 = {'x': 0, 'y': 1};
                    var1['START'] = var2;
                    var2 = {'x': 1, 'y': 0};
                    var1['END'] = var2;
                    return var1;
                };
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.exhaustive;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var1.bind(var5)(var2);
            var11 = var1.START;
            var8 = var1.END;
            var2 = var3 != var10;
            var1 = null;
            if(!var2) { _fun0001_ip = 424; continue _fun0001 }
 159:
            var4 = _closure1_slot3;
            var2 = var4.isValidElement;
            var2 = var2.bind(var4)(var10);
            var1 = null;
            if(!var2) { _fun0001_ip = 424; continue _fun0001 }
 185:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 6;
            var2 = var14[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['start'] = var11;
            var2['end'] = var8;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var9['borderRadius'] = var12;
            var9['padding'] = var13;
            var8[1] = var9;
            var2['style'] = var8;
            var19 = var2;
            var18 = var7;
            var7 = copyDataProperties(var19, var18);
            var8 = var10.type;
            var7 = _closure1_slot4;
            if(!(var8 === var7)) { _fun0001_ip = 375; continue _fun0001 }
 268:
            var7 = _closure1_slot3;
            var8 = var7.Children;
            var7 = var8.only;
            var11 = var7.bind(var8)(var10);
            var9 = _closure1_slot3;
            var8 = var9.cloneElement;
            var7 = {};
            var18 = var11.props;
            var19 = var7;
            var14 = copyDataProperties(var19, var18);
            var15 = {};
            var14 = var11.props;
            var18 = var14.style;
            var19 = var15;
            var14 = copyDataProperties(var19, var18);
            var16 = var12 - var13;
            var14 = 'borderRadius';
            var15[var14] = var16;
            var16 = 'hidden';
            var14 = 'overflow';
            var15[var14] = var16;
            var14 = 'style';
            var7[var14] = var15;
            var7 = var8.bind(var9)(var11, var7);
            _fun0001_ip = 409; continue _fun0001;
 375:
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var6 = {};
            var11 = {};
            var12 = var12 - var13;
            var11['borderRadius'] = var12;
            var6['style'] = var11;
            var6['children'] = var10;
            var7 = var9.bind(var5)(var8, var6);
 409:
            var6 = 'children';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 424:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.HorizontalGradient;
    var _closure1_slot5 = var8;
    var4 = var4.VerticalGradient;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = 'horizontal';
    var4['HORIZONTAL'] = var8;
    var8 = 'vertical';
    var4['VERTICAL'] = var8;
    var8 = 'diagonal';
    var4['DIAGONAL'] = var8;
    var8 = 'anti-diagonal';
    var4['ANTI_DIAGONAL'] = var8;
    var _closure1_slot8 = var4;
    var2['Direction'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/GradientBorder.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();