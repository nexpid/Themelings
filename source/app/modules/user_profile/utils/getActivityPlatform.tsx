// app/modules/user_profile/utils/getActivityPlatform.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/getActivityPlatform.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityPlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var6 = var3.bind(var4)(var11);
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            if(var6) { _fun0001_ip = 297; continue _fun0001 }
 53:
            var6 = 3;
            var6 = var5[var6];
            var6 = var3.bind(var4)(var6);
            var8 = var6.bind(var4)(var11);
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            if(var8) { _fun0001_ip = 263; continue _fun0001 }
 84:
            var8 = 4;
            var8 = var7[var8];
            var8 = var6.bind(var4)(var8);
            var10 = var8.bind(var4)(var11);
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            if(var10) { _fun0001_ip = 229; continue _fun0001 }
 112:
            var10 = 5;
            var10 = var9[var10];
            var10 = var8.bind(var4)(var10);
            var10 = var10.bind(var4)(var11);
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 2;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            if(var10) { _fun0001_ip = 207; continue _fun0001 }
 152:
            var10 = var11.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.name;
                var1 = _closure2_slot0;
                var1 = var1.name;
                var1 = var2 === var1;
                return var1;
            };
            var10 = var10.bind(var11)(var2);
            var13 = null;
            var12 = var13 != var10;
            var2 = null;
            if(!var12) { _fun0001_ip = 205; continue _fun0001 }
 178:
            var15 = _closure1_slot3;
            var14 = var15.has;
            var12 = var10.type;
            var12 = var14.bind(var15)(var12);
            var2 = null;
            if(!var12) { _fun0001_ip = 205; continue _fun0001 }
 202:
            var2 = var10;
 205:
            return var2;
 207:
            var10 = var11.get;
            var2 = _closure1_slot2;
            var2 = var2.PLAYSTATION;
            var2 = var10.bind(var11)(var2);
            return var2;
 229:
            var2 = 2;
            var2 = var9[var2];
            var9 = var8.bind(var4)(var2);
            var8 = var9.get;
            var2 = _closure1_slot2;
            var2 = var2.XBOX;
            var2 = var8.bind(var9)(var2);
            return var2;
 263:
            var2 = 2;
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.get;
            var2 = _closure1_slot2;
            var2 = var2.CRUNCHYROLL;
            var2 = var6.bind(var7)(var2);
            return var2;
 297:
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.get;
            var1 = _closure1_slot2;
            var1 = var1.SPOTIFY;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();