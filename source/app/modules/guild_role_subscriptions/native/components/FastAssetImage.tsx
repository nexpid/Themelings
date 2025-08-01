// app/modules/guild_role_subscriptions/native/components/FastAssetImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/FastAssetImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FastAssetImage(arg1) {
        var1 = arg1;
        var11 = var1.applicationId;
        var _closure2_slot0 = var11;
        var10 = var1.asset;
        var _closure2_slot1 = var10;
        var7 = var1.style;
        var8 = _closure1_slot4;
        var3 = var8.useState;
        var6 = var3.bind(var8)();
        var5 = _closure1_slot3;
        var4 = undefined;
        var3 = 2;
        var5 = var5.bind(var4)(var6, var3);
        var3 = 0;
        var9 = var5[var3];
        var _closure2_slot2 = var9;
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot3 = var3;
        var6 = var8.useCallback;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function(arg1) {
            var3 = _closure2_slot3;
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var2 = var1.width;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var6 = var6.bind(var8)(var3, var5);
        var5 = var8.useMemo;
        var3 = new Array(3);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot1;
                var8 = null;
                var1 = var8 == var1;
                var6 = undefined;
                var7 = undefined;
                if(var1) { _fun0001_ip = 30; continue _fun0001 }
 20:
                var1 = _closure2_slot1;
                var7 = var1.application_id;
 30:
                if(!(var8 == var7)) { _fun0001_ip = 38; continue _fun0001 }
 34:
                var7 = _closure2_slot0;
 38:
                var1 = {};
                var2 = _closure2_slot1;
                var4 = var8 != var2;
                var5 = '';
                var2 = var5;
                if(!var4) { _fun0001_ip = 126; continue _fun0001 }
 58:
                var4 = var8 != var7;
                var2 = var5;
                if(!var4) { _fun0001_ip = 126; continue _fun0001 }
 68:
                var4 = _closure2_slot2;
                var4 = var8 != var4;
                var2 = var5;
                if(!var4) { _fun0001_ip = 126; continue _fun0001 }
 82:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 3;
                var4 = var8[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.getAssetURL;
                var4 = _closure2_slot1;
                var3 = _closure2_slot2;
                var2 = var5.bind(var6)(var7, var4, var3);
 126:
                var1['uri'] = var2;
                return var1;
            }
        };
        var5 = var5.bind(var8)(var2, var3);
        var3 = _closure1_slot5;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 4;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['style'] = var7;
        var1['onLayout'] = var6;
        var1['source'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();