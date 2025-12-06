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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsMultiPerkCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var4 = var1.listing;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var8 = var1.bind(var5)(var4);
            var7 = _closure1_slot0;
            var1 = 3;
            var1 = var9[var1];
            var11 = var7.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var7 = var10.bind(var11)(var7, var1);
            var1 = 4;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['guildId'] = var6;
            var4 = var4.powerups;
            var1['powerups'] = var4;
            var6 = var3.bind(var5)(var1);
            var4 = null;
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4 == var8;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = var8.title;
            var2['title'] = var9;
            var9 = var8.description;
            var2['description'] = var9;
            var9 = var6.cost;
            var2['cost'] = var9;
            var8 = var8.image;
            if(var7) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = var8.animatedUrl;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var7 = var8.staticUrl;
case 7:
            var2['imageUrl'] = var7;
            var7 = var6.status;
            var2['status'] = var7;
            var6 = var6.costDecorator;
            var2['costDecorator'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();