// app/uikit-native/refresh/form/FormHint.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Platform;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'fontSize': 14, 'marginBottom': 0};
    var10 = 4;
    var11 = var6[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var1)(var11);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9['color'] = var10;
    var4['formHintText'] = var9;
    var9 = {};
    var10 = 12;
    var9['paddingHorizontal'] = var10;
    var4['redesignHorizontalPadding'] = var9;
    var9 = {};
    var10 = 16;
    var9['paddingHorizontal'] = var10;
    var4['horizonatalPadding'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormHint.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormHint(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.inset;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var9 = false;
 17:
            var8 = var1.style;
            var6 = var1.children;
            var1 = _closure1_slot4;
            var7 = var1.bind(var5)();
            var4 = _closure1_slot2;
            var3 = var4.useContext;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 5;
            var1 = var11[var1];
            var1 = var10.bind(var5)(var1);
            var1 = var1.RedesignCompatContext;
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot3;
            var3 = _closure1_slot0;
            var10 = _closure1_slot1;
            if(var1) { _fun0001_ip = 164; continue _fun0001 }
 94:
            var1 = 7;
            var1 = var10[var1];
            var1 = var3.bind(var5)(var1);
            var2 = var1.LegacyText;
            var1 = {};
            var12 = var7.formHintText;
            var11 = new Array(3);
            var11[0] = var12;
            var12 = !var9;
            if(!var12) { _fun0001_ip = 140; continue _fun0001 }
 134:
            var12 = var7.horizonatalPadding;
 140:
            var11[1] = var12;
            var11[2] = var8;
            var1['style'] = var11;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 233; continue _fun0001;
 164:
            var2 = 6;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var9 = !var9;
            if(!var9) { _fun0001_ip = 207; continue _fun0001 }
 201:
            var9 = var7.redesignHorizontalPadding;
 207:
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 233:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();