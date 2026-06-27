// app/modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsSinglePerkCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var8 = var1.powerup;
            var5 = var1.badge;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 2;
            var3 = var10[var3];
            var4 = undefined;
            var7 = var2.bind(var4)(var3);
            var3 = true;
            var9 = var7.bind(var4)(var8, var3);
            var3 = 3;
            var3 = var10[var3];
            var3 = var2.bind(var4)(var3);
            var12 = var3.bind(var4)(var6, var8);
            var3 = 4;
            var3 = var10[var3];
            var7 = var2.bind(var4)(var3);
            var3 = 'GuildPowerupsSinglePerkCard';
            var11 = var7.bind(var4)(var6, var8, var3);
            var7 = _closure1_slot0;
            var3 = 5;
            var3 = var10[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useCalculatePowerupCardStatus;
            var7 = var3.bind(var7)(var8, var12, var11);
            var3 = 6;
            var3 = var10[var3];
            var3 = var2.bind(var4)(var3);
            var6 = var3.bind(var4)(var6, var8);
            var3 = _closure1_slot3;
            var1 = 7;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var8.title;
            var1['title'] = var10;
            var10 = var8.description;
            var1['description'] = var10;
            var8 = var8.cost;
            var1['cost'] = var8;
            var8 = null;
            var10 = var8 != var9;
            var8 = '';
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var9;
case 2:
            var1['imageUrl'] = var8;
            var1['status'] = var7;
            var1['onPress'] = var6;
            var1['badge'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();