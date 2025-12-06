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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsSinglePerkCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var6 = var1.powerup;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 1;
            var3 = var8[var3];
            var4 = undefined;
            var7 = var2.bind(var4)(var3);
            var3 = true;
            var7 = var7.bind(var4)(var6, var3);
            var3 = 2;
            var3 = var8[var3];
            var3 = var2.bind(var4)(var3);
            var10 = var3.bind(var4)(var5, var6);
            var5 = _closure1_slot0;
            var3 = 3;
            var3 = var8[var3];
            var9 = var5.bind(var4)(var3);
            var5 = var9.useCalculatePowerupCardStatus;
            var3 = false;
            var5 = var5.bind(var9)(var6, var10, var3);
            var3 = _closure1_slot3;
            var1 = 4;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var6.title;
            var1['title'] = var8;
            var8 = var6.description;
            var1['description'] = var8;
            var6 = var6.cost;
            var1['cost'] = var6;
            var6 = null;
            var8 = var6 != var7;
            var6 = '';
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7;
case 2:
            var1['imageUrl'] = var6;
            var1['status'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();