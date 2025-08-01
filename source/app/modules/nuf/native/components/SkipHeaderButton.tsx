// app/modules/nuf/native/components/SkipHeaderButton.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 3;
    var11 = var6[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var1)(var11);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_NORMAL;
    var9['color'] = var10;
    var4['button'] = var9;
    var9 = {};
    var10 = 16;
    var9['paddingRight'] = var10;
    var4['insideNavigatorButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/components/SkipHeaderButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SkipHeaderButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = _closure1_slot3;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 4;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HeaderTextButton;
            var1 = {};
            var12 = var1;
            var11 = var6;
            var7 = copyDataProperties(var12, var11);
            var7 = var9.button;
            var8 = new Array(2);
            var8[0] = var7;
            var10 = var6.insideNavigator;
            var7 = undefined;
            if(!var10) { _fun0001_ip = 89; continue _fun0001 }
 83:
            var7 = var9.insideNavigatorButton;
 89:
            var8[1] = var7;
            var7 = 'labelStyle';
            var1[var7] = var8;
            var6 = var6.label;
            var7 = null;
            if(!(var7 == var6)) { _fun0001_ip = 168; continue _fun0001 }
 113:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = 5;
            var7 = var10[var5];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.5WxrcX;
            var6 = var7.bind(var8)(var5);
 168:
            var5 = 'label';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();