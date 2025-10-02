// app/modules/user_profile/native/ApplicationIconAndName.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var7 = var4.Fragment;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var3 = arg1;
        var1 = {};
        var2 = {};
        var2['width'] = var3;
        var2['height'] = var3;
        var3 = -1;
        var2['marginTop'] = var3;
        var3 = 4;
        var2['marginRight'] = var3;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.radii;
        var3 = var3.xs;
        var2['borderRadius'] = var3;
        var1['gameIcon'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/ApplicationIconAndName.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ApplicationIconAndName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.application;
            var11 = var1.textVariant;
            var14 = var1.iconSize;
            var9 = var1.useComma;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var1 = _closure1_slot6;
            var5 = var1.bind(var4)(var14);
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var13 = _closure1_slot3;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 3;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var5 = var5.gameIcon;
            var7['style'] = var5;
            var5 = 'contain';
            var7['resizeMode'] = var5;
            var5 = {};
            var12 = var10.getIconURL;
            var15 = var12.bind(var10)(var14);
            var12 = null;
            var16 = var12 != var15;
            var12 = '';
            var14 = var12;
            if(!var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var15;
case 4:
            var5['uri'] = var14;
            var7['source'] = var5;
            var5 = true;
            var7['disableColor'] = var5;
            var5 = var10.id;
            var7 = var13.bind(var4)(var8, var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot3;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 4;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var6['variant'] = var11;
            var11 = var10.name;
            var10 = var12;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = ', ';
case 6:
            var9 = global;
            var9 = var9.HermesInternal;
            var9 = var9.concat;
            var9 = var9.bind(var12)(var11, var10);
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