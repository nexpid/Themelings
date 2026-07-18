// app/design/void/GradientBorder/native/GradientBorder.tsx
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
case 0:
            var4 = arg1;
            var10 = var4.children;
            var2 = var4.direction;
            var11 = var4.style;
            var13 = var4.borderWidth;
            var5 = undefined;
            if(!(var13 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = 1;
case 2:
            var12 = var4.borderRadius;
            if(!(var12 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.radii;
            var3 = var1.sm;
            var1 = 1;
            var12 = var3 + var1;
case 4:
            var3 = {'children': 0, 'direction': 0, 'style': 0, 'borderWidth': 0, 'borderRadius': 0};
            var9 = null;
            var20 = var3;
            var19 = null;
            var1 = silentSetPrototypeOf(var20, var19);
            var20 = {};
            var19 = var4;
            var18 = var3;
            var7 = copyDataProperties(var20, var19, var18);
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
            var14 = var1.START;
            var8 = var1.END;
            var2 = var9 != var10;
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot3;
            var2 = var3.isValidElement;
            var2 = var2.bind(var3)(var10);
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 6;
            var2 = var15[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['start'] = var14;
            var2['end'] = var8;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = {};
            var11['borderRadius'] = var12;
            var11['padding'] = var13;
            var8[1] = var11;
            var2['style'] = var8;
            var20 = var2;
            var19 = var7;
            var7 = copyDataProperties(var20, var19);
            var8 = var9 == var10;
            var7 = null;
            if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = _closure1_slot3;
            var8 = var11.isValidElement;
            var8 = var8.bind(var11)(var10);
            var7 = null;
            if(!var8) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var9 = var10.type;
            var8 = _closure1_slot4;
            if(!(var9 === var8)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = _closure1_slot3;
            var9 = var8.Children;
            var8 = var9.only;
            var14 = var8.bind(var9)(var10);
            var11 = _closure1_slot3;
            var9 = var11.cloneElement;
            var8 = {};
            var19 = var14.props;
            var20 = var8;
            var15 = copyDataProperties(var20, var19);
            var16 = {};
            var15 = var14.props;
            var19 = var15.style;
            var20 = var16;
            var15 = copyDataProperties(var20, var19);
            var17 = var12 - var13;
            var15 = 'borderRadius';
            var16[14] = var17;
            var17 = 'hidden';
            var15 = 'overflow';
            var16[14] = var17;
            var15 = 'style';
            var8[14] = var16;
            var7 = var9.bind(var11)(var14, var8);
            _fun0001_ip = 9; continue _fun0001;
case 12:
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var6 = {};
            var11 = {};
            var12 = var12 - var13;
            var11['borderRadius'] = var12;
            var6['style'] = var11;
            var6['children'] = var10;
            var7 = var9.bind(var5)(var8, var6);
case 9:
            var6 = 'children';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 6:
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
    var4 = 'design/void/GradientBorder/native/GradientBorder.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();