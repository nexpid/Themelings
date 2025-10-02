// app/modules/user_profile/native/UserProfileTextButtonGroup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PROFILE_SIDE_PADDING;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 12};
    var4['container'] = var9;
    var9 = {};
    var9['flexGrow'] = var10;
    var4['buttonArea'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileTextButtonGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileTextButtonGroup(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.primaryButton;
            var7 = var1.secondaryButton;
            var12 = var1.maxWidth;
            var9 = var1.style;
            var1 = _closure1_slot6;
            var6 = undefined;
            var8 = var1.bind(var6)();
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var10 = var1.width;
            var2 = null;
            var5 = var10;
            if(!(var2 != var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = global;
            var4 = var1.Math;
            var1 = var4.min;
            var5 = var1.bind(var4)(var10, var12);
case 2:
            var1 = _closure1_slot3;
            var4 = 2;
            var1 = var4 * var1;
            var5 = var5 - var1;
            var1 = 12;
            var1 = var5 - var1;
            var16 = var1 / var4;
            if(!(var2 == var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2 == var7;
            var1 = null;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            if(!(var2 != var11)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(!(var2 != var7)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = _closure1_slot5;
            var4 = _closure1_slot2;
            var2 = {};
            var12 = var8.container;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var9;
            var2['style'] = var10;
            var13 = _closure1_slot4;
            var10 = {};
            var14 = var8.buttonArea;
            var12 = new Array(2);
            var12[0] = var14;
            var14 = {};
            var14['minWidth'] = var16;
            var12[1] = var14;
            var10['style'] = var12;
            var10['children'] = var11;
            var12 = var13.bind(var6)(var4, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = {};
            var15 = var8.buttonArea;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = {};
            var15['minWidth'] = var16;
            var14[1] = var15;
            var12['style'] = var14;
            var12['children'] = var7;
            var12 = var13.bind(var6)(var4, var12);
            var10[1] = var12;
            var2['children'] = var10;
            var2 = var5.bind(var6)(var4, var2);
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var10 = _closure1_slot4;
            var5 = _closure1_slot2;
            var4 = {};
            var13 = var8.container;
            var12 = new Array(2);
            var12[0] = var13;
            var12[1] = var9;
            var4['style'] = var12;
            var4['children'] = var11;
            var2 = var10.bind(var6)(var5, var4);
case 11:
            _fun0001_ip = 12; continue _fun0001;
case 7:
            var5 = _closure1_slot4;
            var4 = _closure1_slot2;
            var3 = {};
            var10 = var8.container;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['style'] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 12:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();