// app/modules/settings/native/renderer/SettingHookHarness.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NodeType;
    var _closure1_slot5 = var5;
    var5 = new Array(0);
    var _closure1_slot6 = var5;
    var5 = var4.Map;
    var9 = var5.prototype;
    var9 = Object.create(var9, {constructor: {value: var5}});
    var14 = var9;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot7 = var5;
    var4 = var4.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var14 = var5;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot8 = var4;
    var5 = var8.memo;
    var4 = function SettingHookHarness() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot4;
            var4 = var5.getField;
            var1 = 'blocklist';
            var15 = var4.bind(var5)(var1);
            var14 = new Array(0);
            var _closure2_slot0 = var14;
            var13 = new Array(0);
            var _closure2_slot1 = var13;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.entries;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 4;
            var1 = var7[var1];
            var12 = undefined;
            var1 = var6.bind(var12)(var1);
            var1 = var1.SETTING_RENDERER_CONFIG;
            var11 = var4.bind(var5)(var1);
            var1 = var11.length;
            var10 = 0;
            var4 = var10 < var1;
            var1 = null;
            var9 = false;
            var8 = 2;
            var7 = 1;
            var6 = 0;
            var5 = undefined;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = var11[var6];
            var4 = _closure1_slot2;
            var4 = var4.bind(var12)(var16, var8);
            var19 = var4[var10];
            var17 = var4[var7];
            var16 = var17.usePredicate;
            var18 = var1 == var16;
            var4 = undefined;
            if(var18) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var16.bind(var12)();
case 4:
            var16 = var9 === var4;
            if(!var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var15.has;
            var4 = var4.bind(var15)(var19);
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = var14.push;
            var4 = var4.bind(var14)(var19);
            _fun0001_ip = 9; continue _fun0001;
case 6:
            var4 = !var16;
            if(var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var16 = var15.has;
            var4 = var16.bind(var15)(var19);
case 10:
            if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 12:
            var4 = var13.push;
            var4 = var4.bind(var13)(var19);
case 9:
            var16 = var17.type;
            var4 = _closure1_slot5;
            var4 = var4.GUILD_SELECTOR;
            if(!(var16 !== var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = var17.useTitle;
            var18 = var4.bind(var17)();
            var16 = _closure1_slot7;
            var4 = var16.set;
            var4 = var4.bind(var16)(var19, var18);
            var4 = var17.useSearchTerms;
            var16 = var1 == var4;
            var4 = undefined;
            if(var16) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var16 = var17.useSearchTerms;
            var4 = var16.bind(var17)();
case 15:
            var18 = _closure1_slot8;
            var17 = var18.set;
            var16 = var4;
            if(!(var1 == var4)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var16 = _closure1_slot6;
case 17:
            var16 = var17.bind(var18)(var19, var16);
            var5 = var4;
case 13:
            var6 = var6 + 1;
            var4 = var11.length;
            if(var6 < var4) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            var4 = _closure1_slot3;
            var3 = var4.useEffect;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var3 = var3.length;
                    var4 = 0;
                    if(!(!(var3 > var4))) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var3 = _closure2_slot1;
                    var3 = var3.length;
                    if(!(var3 > var4)) { _fun0002_ip = 21; continue _fun0002 }
case 19:
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
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/settings/native/renderer/SettingHookHarness.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function getCachedSettingTitle(arg1) {
        var3 = _closure1_slot7;
        var2 = var3.get;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getCachedSettingTitle'] = var4;
    var2 = function getCachedSettingSearchTerms(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = var4.get;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = _closure1_slot6;
case 22:
            return var1;
        }
    };
    var3['getCachedSettingSearchTerms'] = var2;
    return var1;
})();