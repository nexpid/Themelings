// app/modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsMultiPerkCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.guildId;
            var _closure2_slot0 = var11;
            var10 = var2.listing;
            var _closure2_slot1 = var10;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var9 = var3.bind(var5)(var11, var10);
            var7 = _closure1_slot0;
            var3 = 4;
            var3 = var6[var3];
            var12 = var7.bind(var5)(var3);
            var8 = var12.useStateFromStores;
            var3 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var8 = var8.bind(var12)(var7, var3);
            var3 = 5;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['guildId'] = var11;
            var6 = var10.powerups;
            var3['powerups'] = var6;
            var7 = var4.bind(var5)(var3);
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var10;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot0;
                var2['guildId'] = var5;
                var4 = _closure2_slot1;
                var2['listing'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var4.bind(var6)(var1, var3);
            var4 = null;
            var3 = var4 == var7;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4 == var9;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var10 = var9.title;
            var2['title'] = var10;
            var10 = var9.description;
            var2['description'] = var10;
            var10 = var7.cost;
            var2['cost'] = var10;
            var9 = var9.image;
            if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = var9.animatedUrl;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var8 = var9.staticUrl;
case 7:
            var2['imageUrl'] = var8;
            var8 = var7.status;
            var2['status'] = var8;
            var7 = var7.costDecorator;
            var2['costDecorator'] = var7;
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();