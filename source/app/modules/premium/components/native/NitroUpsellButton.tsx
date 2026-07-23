// app/modules/premium/components/native/NitroUpsellButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function NitroUpsellButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.loading;
            var7 = var1.onPress;
            var12 = var1.text;
            var5 = var1.shiny;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = true;
case 2:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 3;
            var1 = var11[var1];
            var6 = var8.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var6 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot4;
            var1 = 4;
            var1 = var11[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var1['text'] = var12;
            var12 = 'lg';
            var1['size'] = var12;
            var1['loading'] = var10;
            var1['onPress'] = var7;
            var7 = 5;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.NitroWheelIcon;
            var7 = {};
            var10 = _closure1_slot1;
            var9 = 6;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.WHITE;
            var7['color'] = var9;
            var9 = 'sm';
            var7['size'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var1['icon'] = var7;
            var7 = 'experimental_premium-primary';
            var1['variant'] = var7;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = !var6;
case 4:
            var1['shiny'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/components/native/NitroUpsellButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();