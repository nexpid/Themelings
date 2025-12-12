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
    var4 = 7;
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
            var7 = var1.powerup;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 2;
            var3 = var9[var3];
            var4 = undefined;
            var6 = var2.bind(var4)(var3);
            var3 = true;
            var8 = var6.bind(var4)(var7, var3);
            var3 = 3;
            var3 = var9[var3];
            var3 = var2.bind(var4)(var3);
            var11 = var3.bind(var4)(var5, var7);
            var6 = _closure1_slot0;
            var3 = 4;
            var3 = var9[var3];
            var10 = var6.bind(var4)(var3);
            var6 = var10.useCalculatePowerupCardStatus;
            var3 = false;
            var6 = var6.bind(var10)(var7, var11, var3);
            var3 = 5;
            var3 = var9[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)(var5, var7);
            var5 = var3.onShowMore;
            var3 = _closure1_slot3;
            var1 = 6;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var9 = var7.title;
            var1['title'] = var9;
            var9 = var7.description;
            var1['description'] = var9;
            var7 = var7.cost;
            var1['cost'] = var7;
            var7 = null;
            var9 = var7 != var8;
            var7 = '';
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8;
case 2:
            var1['imageUrl'] = var7;
            var1['status'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();