// app/modules/display_name_styles/native/effects/PerLetterEffect.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.Text;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'hidden';
    var9['overflow'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/effects/PerLetterEffect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PerLetterEffect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.name;
            var _closure2_slot0 = var10;
            var9 = var2.textStyle;
            var7 = var2.textProps;
            var11 = var2.colors;
            var _closure2_slot1 = var11;
            var2 = _closure1_slot7;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var8 = _closure1_slot3;
            var3 = var8.useMemo;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var11;
            var1 = function() {
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var3 = 0;
                var _closure3_slot1 = var3;
                var3 = _closure1_slot0;
                var2 = 5;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.splitGraphemes;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var4 = _closure3_slot0;
                        var9 = 0;
                        var4['lastIndex'] = var9;
                        var2 = var4.test;
                        var2 = var2.bind(var4)(var1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = var1.trim;
                        var4 = var4.bind(var1)();
                        var4 = var4.length;
                        var2 = var9 === var4;
case 2:
                        var5 = _closure2_slot1;
                        var6 = null;
                        var7 = var6 != var5;
                        var5 = undefined;
                        var8 = undefined;
                        if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var7 = _closure2_slot1;
                        var7 = var7.length;
                        var7 = var7 > var9;
                        var8 = undefined;
                        if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                        var8 = undefined;
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                        var7 = _closure2_slot1;
                        var9 = _closure3_slot1;
                        var4 = var7.length;
                        var4 = var9 % var4;
                        var8 = var7[var4];
case 4:
                        if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var2 = _closure3_slot1;
                        var2 = var2 + 1;
                        _closure3_slot1 = var2;
case 8:
                        var4 = _closure1_slot6;
                        var3 = _closure1_slot5;
                        var2 = {};
                        var7 = var6 != var8;
                        var6 = undefined;
                        if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var7 = {};
                        var7['color'] = var8;
                        var6 = var7;
case 10:
                        var2['style'] = var6;
                        var2['children'] = var1;
                        var1 = arg2;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 6;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var14 = var5;
            var13 = var7;
            var11 = copyDataProperties(var14, var13);
            var12 = 'simple';
            var11 = 'textBreakStrategy';
            var5[10] = var12;
            var12 = true;
            var11 = 'accessible';
            var5[10] = var12;
            var7 = var7.accessibilityLabel;
            var11 = null;
            if(!(var11 != var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var7;
case 12:
            var7 = 'accessibilityLabel';
            var5[6] = var10;
            var7 = 'style';
            var5[6] = var9;
            var7 = 'children';
            var5[6] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();