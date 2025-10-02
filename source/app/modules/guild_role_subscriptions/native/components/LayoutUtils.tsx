// app/modules/guild_role_subscriptions/native/components/LayoutUtils.tsx
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var7 = var4.Fragment;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/LayoutUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GappedList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.children;
            var2 = var1.gap;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 4;
case 2:
            var _closure2_slot0 = var2;
            var1 = var1.renderGap;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var6 = _closure1_slot2;
            var3 = var6.Children;
            var2 = var3.toArray;
            var7 = var2.bind(var3)(var7);
            var3 = var7.filter;
            var2 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var8 = var3.bind(var7)(var2);
            _closure2_slot2 = var8;
            var3 = _closure1_slot3;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var6.Children;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var1 = new Array(2);
                    var5 = arg1;
                    var1[0] = var5;
                    var5 = _closure2_slot2;
                    var8 = var5.length;
                    var5 = 1;
                    var8 = var8 - var5;
                    var5 = arg2;
                    var5 = var5 !== var8;
                    if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var9 = _closure2_slot1;
                    var8 = null;
                    if(!(var8 == var9)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var10 = _closure1_slot3;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 2;
                    var6 = var9[var6];
                    var9 = undefined;
                    var8 = var8.bind(var9)(var6);
                    var6 = {};
                    var11 = _closure2_slot0;
                    var6['size'] = var11;
                    var6 = var10.bind(var9)(var8, var6);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var8 = _closure2_slot1;
                    var7 = undefined;
                    var6 = var8.bind(var7)();
case 8:
                    var5 = var6;
case 4:
                    var1[1] = var5;
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var8, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GappedList'] = var2;
    return var1;
})();