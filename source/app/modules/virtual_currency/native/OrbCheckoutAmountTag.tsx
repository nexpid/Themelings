// app/modules/virtual_currency/native/OrbCheckoutAmountTag.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 3;
    var11 = var6[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var1)(var11);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9['gap'] = var10;
    var4['orbAmountTag'] = var9;
    var9 = {'width': 14, 'height': 14};
    var4['orbsIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/OrbCheckoutAmountTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.orbAmount;
            var1 = _closure1_slot5;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var11.orbAmountTag;
            var1['style'] = var5;
            var8 = _closure1_slot3;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 4;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.OrbsIcon;
            var5 = {'size': 'custom', 'color': 'icon-primary'};
            var11 = var11.orbsIcon;
            var5['style'] = var11;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var9 = 'text-md/semibold';
            var6['variant'] = var9;
            var9 = null;
            if(!(var9 != var10)) { _fun0001_ip = 208; continue _fun0001 }
 143:
            var13 = _closure1_slot0;
            var16 = _closure1_slot1;
            var11 = 6;
            var14 = var16[var11];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.formatToPlainString;
            var11 = var16[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.t;
            var13 = var11.W4DfeH;
            var11 = {};
            var11['orbAmount'] = var10;
            var11 = var14.bind(var15)(var13, var11);
            _fun0001_ip = 263; continue _fun0001;
 208:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var12 = 6;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.pfChQk;
            var11 = var13.bind(var14)(var12);
 263:
            var6['accessibilityLabel'] = var11;
            var11 = var9 == var10;
            var9 = '--';
            if(var11) { _fun0001_ip = 283; continue _fun0001 }
 280:
            var9 = var10;
 283:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();