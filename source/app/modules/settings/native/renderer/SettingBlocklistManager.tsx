// app/modules/settings/native/renderer/SettingBlocklistManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function SettingBlocklistManager() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot4;
            var4 = var5.getField;
            var1 = 'blocklist';
            var14 = var4.bind(var5)(var1);
            var13 = new Array(0);
            var _closure2_slot0 = var13;
            var12 = new Array(0);
            var _closure2_slot1 = var12;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.entries;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var11 = undefined;
            var1 = var6.bind(var11)(var1);
            var1 = var1.SETTING_RENDERER_CONFIG;
            var10 = var4.bind(var5)(var1);
            var1 = var10.length;
            var9 = 0;
            var4 = var9 < var1;
            var8 = false;
            var7 = 2;
            var6 = 1;
            var1 = null;
            var5 = 0;
            if(!var4) { _fun0001_ip = 227; continue _fun0001 }
 113:
            var15 = var10[var5];
            var4 = _closure1_slot2;
            var4 = var4.bind(var11)(var15, var7);
            var15 = var4[var9];
            var4 = var4[var6];
            var16 = var4.usePredicate;
            var17 = var1 == var16;
            var4 = undefined;
            if(var17) { _fun0001_ip = 154; continue _fun0001 }
 150:
            var4 = var16.bind(var11)();
 154:
            var16 = var8 === var4;
            if(!var16) { _fun0001_ip = 186; continue _fun0001 }
 161:
            var4 = var14.has;
            var4 = var4.bind(var14)(var15);
            if(var4) { _fun0001_ip = 186; continue _fun0001 }
 174:
            var4 = var13.push;
            var4 = var4.bind(var13)(var15);
            _fun0001_ip = 215; continue _fun0001;
 186:
            var4 = !var16;
            if(var16) { _fun0001_ip = 202; continue _fun0001 }
 192:
            var16 = var14.has;
            var4 = var16.bind(var14)(var15);
 202:
            if(!var4) { _fun0001_ip = 215; continue _fun0001 }
 205:
            var4 = var12.push;
            var4 = var4.bind(var12)(var15);
 215:
            var5 = var5 + 1;
            var4 = var10.length;
            if(var5 < var4) { _fun0001_ip = 113; continue _fun0001 }
 227:
            var4 = _closure1_slot3;
            var3 = var4.useEffect;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var3 = var3.length;
                    var4 = 0;
                    if(!(!(var3 > var4))) { _fun0002_ip = 33; continue _fun0002 }
 20:
                    var3 = _closure2_slot1;
                    var3 = var3.length;
                    if(!(var3 > var4)) { _fun0002_ip = 147; continue _fun0002 }
 33:
                    var3 = _closure1_slot4;
                    var5 = var3.getField;
                    var4 = 'blocklist';
                    var8 = var5.bind(var3)(var4);
                    var4 = global;
                    var4 = var4.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var9 = var5;
                    var4 = new var9[var4](var8, var7);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var _closure3_slot0 = var4;
                    var7 = _closure2_slot0;
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    var5 = _closure2_slot1;
                    var2 = var5.forEach;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.delete;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var5)(var1);
                    var2 = var3.setState;
                    var1 = {};
                    var1['blocklist'] = var4;
                    var1 = var2.bind(var3)(var1);
 147:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/native/renderer/SettingBlocklistManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();