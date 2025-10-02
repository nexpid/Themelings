// app/modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildsBarSelectedGuildScroller(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = function handleSelectedGuildChange() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var1 = var2.getGuildId;
                    var1 = var1.bind(var2)();
                    var2 = _closure3_slot0;
                    if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = null;
                    var5 = var4 != var1;
                    var2 = null;
                    if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = var1;
case 4:
                    _closure3_slot0 = var2;
                    var3 = _closure2_slot0;
                    var2 = var4 != var1;
                    var4 = null;
                    if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = var1;
case 6:
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var4, var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot1 = var4;
            var2 = null;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot1;
            var2 = var3.addChangeListener;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = var3.removeChangeListener;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();