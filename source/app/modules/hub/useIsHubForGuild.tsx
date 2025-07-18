// app/modules/hub/useIsHubForGuild.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/useIsHubForGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsHubForGuild(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 81; continue _fun0001 }
 13:
                var5 = _closure1_slot2;
                var4 = var5.getGuild;
                var2 = _closure2_slot0;
                var4 = var4.bind(var5)(var2);
                var5 = var1 == var4;
                var2 = undefined;
                if(var5) { _fun0001_ip = 69; continue _fun0001 }
 43:
                var5 = var4.features;
                var4 = var5.has;
                var3 = _closure1_slot3;
                var3 = var3.HUB;
                var2 = var4.bind(var5)(var3);
 69:
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 79; continue _fun0001 }
 76:
                var1 = var2;
 79:
                return var1;
 81:
                var1 = false;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();