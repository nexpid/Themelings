// app/modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 6;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupExpiringNotificationsConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var7 = 0;
            var2 = var6[var7];
            var10 = undefined;
            var2 = var5.bind(var10)(var2);
            var4 = var2.bind(var10)(var3);
            var2 = 1;
            var2 = var6[var2];
            var2 = var5.bind(var10)(var2);
            var6 = var2.bind(var10)(var3);
            var2 = var4.length;
            var5 = var2 > var7;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.length;
            var5 = var2 > var7;
case 2:
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = {};
            var3 = false;
            var2['shouldShow'] = var3;
            var3 = new Array(0);
            var2['expiringPowerups'] = var3;
            var3 = new Array(0);
            var2['expiringPowerupNames'] = var3;
            var3 = new Array(0);
            var2['warnings'] = var3;
            return var2;
case 4:
            var2 = var6.length;
            var2 = var2 > var7;
            var12 = undefined;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 2;
            var2 = var13[var2];
            var2 = var3.bind(var10)(var2);
            var9 = var2.intl;
            var3 = var9.string;
            var11 = _closure1_slot1;
            var2 = 3;
            var2 = var13[var2];
            var2 = var11.bind(var10)(var2);
            var2 = var2.B3OfL/;
            var12 = var3.bind(var9)(var2);
case 6:
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.title;
                return var1;
            };
            var16 = var3.bind(var4)(var2);
            var3 = new Array(0);
            var17 = var3;
            var15 = 0;
            var9 = arraySpread(var17, var16, var15);
            var2 = null;
            if(!(var2 == var12)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = new Array(0);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var11 = new Array(1);
            var11[0] = var12;
            var2 = var11;
case 10:
            var17 = var3;
            var16 = var2;
            var15 = var9;
            var2 = arraySpread(var17, var16, var15);
            var2 = new Array(0);
            var9 = var4.some;
            var8 = function(arg1) {
                var1 = arg1;
                var2 = var1.skuId;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.VANITY_URL_POWERUP_SKU_ID;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var9.bind(var4)(var8);
            if(!var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = var2.push;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 2;
            var8 = var14[var8];
            var8 = var11.bind(var10)(var8);
            var12 = var8.intl;
            var11 = var12.string;
            var13 = _closure1_slot1;
            var8 = 5;
            var8 = var14[var8];
            var8 = var13.bind(var10)(var8);
            var8 = var8.Sfr0Jw;
            var8 = var11.bind(var12)(var8);
            var8 = var9.bind(var2)(var8);
case 11:
            var6 = var6.length;
            if(!(var6 > var7)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var2.push;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 2;
            var7 = var11[var7];
            var7 = var8.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var9 = _closure1_slot1;
            var1 = 3;
            var1 = var11[var1];
            var1 = var9.bind(var10)(var1);
            var1 = var1.wiungr;
            var1 = var7.bind(var8)(var1);
            var1 = var6.bind(var2)(var1);
case 13:
            var1 = {};
            var1['shouldShow'] = var5;
            var1['expiringPowerups'] = var4;
            var1['expiringPowerupNames'] = var3;
            var1['warnings'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();