// app/modules/user_profile/utils/getActivityPlatform.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.PlatformTypes;
    var _closure1_slot2 = var7;
    var8 = var4.Set;
    var9 = var7.LEAGUE_OF_LEGENDS;
    var4 = new Array(4);
    var4[0] = var9;
    var9 = var7.ROBLOX;
    var4[1] = var9;
    var9 = var7.TWITCH;
    var4[2] = var9;
    var7 = var7.YOUTUBE;
    var4[3] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot3 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/getActivityPlatform.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityPlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var14 = arg1;
            var _closure2_slot0 = var14;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var14.session_id;
            var1 = var4.bind(var5)(var1);
            var15 = null;
            if(!(var15 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 2;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var7 = var4.bind(var5)(var14);
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = 4;
            var7 = var6[var7];
            var7 = var4.bind(var5)(var7);
            var9 = var7.bind(var5)(var14);
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = 5;
            var9 = var8[var9];
            var9 = var7.bind(var5)(var9);
            var11 = var9.bind(var5)(var14);
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = 6;
            var11 = var10[var11];
            var11 = var9.bind(var5)(var11);
            var13 = var11.bind(var5)(var14);
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            if(var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = 7;
            var13 = var12[var13];
            var13 = var11.bind(var5)(var13);
            var13 = var13.bind(var5)(var14);
            if(var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var13 = 8;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.bind(var5)(var14);
            if(var13) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var14 = _closure1_slot0;
            var16 = _closure1_slot1;
            var13 = 3;
            var13 = var16[var13];
            var14 = var14.bind(var5)(var13);
            var13 = var14.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.name;
                var1 = _closure2_slot0;
                var1 = var1.name;
                var1 = var2 === var1;
                return var1;
            };
            var13 = var13.bind(var14)(var3);
            var14 = var15 != var13;
            var3 = null;
            if(!var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var17 = _closure1_slot3;
            var16 = var17.has;
            var14 = var13.type;
            var14 = var16.bind(var17)(var14);
            var3 = null;
            if(!var14) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var3 = var13;
case 15:
            return var3;
case 12:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var3 = 3;
            var3 = var14[var3];
            var14 = var13.bind(var5)(var3);
            var13 = var14.get;
            var3 = _closure1_slot2;
            var3 = var3.META_QUEST_OR_HORIZON;
            var3 = var13.bind(var14)(var3);
            return var3;
case 10:
            var3 = 3;
            var3 = var12[var3];
            var12 = var11.bind(var5)(var3);
            var11 = var12.get;
            var3 = _closure1_slot2;
            var3 = var3.PLAYSTATION;
            var3 = var11.bind(var12)(var3);
            return var3;
case 8:
            var3 = 3;
            var3 = var10[var3];
            var10 = var9.bind(var5)(var3);
            var9 = var10.get;
            var3 = _closure1_slot2;
            var3 = var3.XBOX;
            var3 = var9.bind(var10)(var3);
            return var3;
case 6:
            var3 = 3;
            var3 = var8[var3];
            var8 = var7.bind(var5)(var3);
            var7 = var8.get;
            var3 = _closure1_slot2;
            var3 = var3.CRUNCHYROLL;
            var3 = var7.bind(var8)(var3);
            return var3;
case 4:
            var3 = 3;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.get;
            var2 = _closure1_slot2;
            var2 = var2.SPOTIFY;
            var2 = var3.bind(var4)(var2);
            return var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();