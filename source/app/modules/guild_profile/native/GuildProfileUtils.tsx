// app/modules/guild_profile/native/GuildProfileUtils.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/native/GuildProfileUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useProfilePrimaryColor(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            var6 = null;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.brandColorPrimary;
            var1 = var4 == var1;
            var6 = null;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.getGuildIconURL;
            var1 = {};
            var7 = var2.id;
            var1['id'] = var7;
            var7 = var2.icon;
            var1['icon'] = var7;
            var7 = 64;
            var1['size'] = var7;
            var6 = var3.bind(var5)(var1);
case 2:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = arg2;
            var1 = var5.bind(var3)(var6, var1);
            var5 = var4 == var2;
            if(var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var2.brandColorPrimary;
case 5:
            if(!(var4 != var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var2.brandColorPrimary;
case 7:
            return var1;
        }
    };
    var3['useProfilePrimaryColor'] = var4;
    var2 = function getProfilePrimaryColor(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = var2.brandColorPrimary;
            if(!(var1 == var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 2;
            var4 = var4[var6];
            var5 = undefined;
            var8 = var7.bind(var5)(var4);
            var7 = var8.getGuildIconURL;
            var4 = {};
            var9 = var2.id;
            var4['id'] = var9;
            var9 = var2.icon;
            var4['icon'] = var9;
            var9 = 64;
            var4['size'] = var9;
            var7 = var7.bind(var8)(var4);
            if(!(var1 != var7)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 3;
            var10 = var4[var8];
            var11 = var9.bind(var5)(var10);
            var10 = var11.maybeFetchColors;
            var10 = var10.bind(var11)(var7);
            var4 = var4[var8];
            var4 = var9.bind(var5)(var4);
            var9 = var4.useColorStore;
            var4 = var9.getState;
            var4 = var4.bind(var9)();
            var4 = var4.palette;
            var9 = var4[var7];
            var4 = var1 == var9;
            var7 = undefined;
            if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = 0;
            var7 = var9[var4];
case 15:
            if(!(var1 == var7)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            return var1;
case 17:
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var7, var8);
            var7 = 0;
            var11 = var4[var7];
            var8 = 1;
            var9 = var4[var8];
            var7 = var4[var6];
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var10 = 4;
            var4 = var4[var10];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['r'] = var11;
            var4['g'] = var9;
            var4['b'] = var7;
            var6 = var6.bind(var5)(var4);
            var4 = var6.toHsl;
            var4 = var4.bind(var6)();
            var9 = var4.h;
            var7 = var4.s;
            var6 = var4.l;
            var4 = _closure1_slot4;
            var4 = var4.desaturateUserColors;
            if(!var4) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = _closure1_slot4;
            var8 = var4.saturation;
case 19:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['h'] = var9;
            var7 = var7 * var8;
            var3['s'] = var7;
            var3['l'] = var6;
            var4 = var4.bind(var5)(var3);
            var3 = var4.toHexString;
            var3 = var3.bind(var4)();
            return var3;
case 13:
            return var1;
case 11:
            var2 = var2.brandColorPrimary;
            return var2;
case 9:
            return var1;
        }
    };
    var3['getProfilePrimaryColor'] = var2;
    return var1;
})();