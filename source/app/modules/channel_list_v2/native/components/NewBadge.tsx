// app/modules/channel_list_v2/native/components/NewBadge.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'textAlign': 'center', 'textTransform': 'uppercase'};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var6 = undefined;
            var5 = var5.bind(var6)(var3);
            var3 = var5.isIOS;
            var5 = var3.bind(var5)();
            var3 = 0;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 1;
case 2:
            var2['marginTop'] = var3;
            var1['text'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'paddingHorizontal': 6, 'paddingVertical': 3};
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var7 = 5;
            var3 = var8[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.radii;
            var3 = var3.round;
            var2['borderRadius'] = var3;
            var3 = 6;
            var5 = _closure1_slot0;
            var3 = var8[var3];
            var8 = var5.bind(var6)(var3);
            var5 = var8.isThemeLight;
            var3 = arg2;
            var3 = var5.bind(var8)(var3);
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = arg1;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.colors;
            var3 = var3.BG_BRAND;
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.colors;
            var3 = var4.TOAST_BG;
case 7:
            var2['backgroundColor'] = var3;
            var1['base'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/components/NewBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NewBadge() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 7;
            var1 = var12[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var9 = var1.bind(var4)();
            var1 = 8;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.bind(var4)();
            var1 = _closure1_slot5;
            var8 = var1.bind(var4)(var9, var11);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var8.base;
            var1['style'] = var5;
            var10 = _closure1_slot0;
            var5 = 9;
            var5 = var12[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var13 = 'text-xxs/bold';
            var5['variant'] = var13;
            var8 = var8.text;
            var5['style'] = var8;
            var8 = 6;
            var8 = var12[var8];
            var10 = var10.bind(var4)(var8);
            var8 = var10.isThemeLight;
            var8 = var8.bind(var10)(var11);
            if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = 'text-brand';
            if(!var9) { _fun0002_ip = 10; continue _fun0002 }
case 8:
            var8 = 'always-white';
case 10:
            var5['color'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 10;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.y2b7CA;
            var7 = var8.bind(var9)(var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();