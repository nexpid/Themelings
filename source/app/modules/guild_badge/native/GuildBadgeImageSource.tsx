// app/modules/guild_badge/native/GuildBadgeImageSource.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var12 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function resolveImageSource(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var1 = var1.premium;
            if(!var1) { _fun0001_ip = 27; continue _fun0001 }
 15:
            var3 = var2.premiumImageSource;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 97; continue _fun0001 }
 27:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isThemeLight;
            var1 = arg3;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 81; continue _fun0001 }
 69:
            var3 = var2.imageSourceLight;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 89; continue _fun0001 }
 81:
            var1 = var2.imageSource;
            _fun0001_ip = 95; continue _fun0001;
 89:
            var1 = var2.imageSourceLight;
 95:
            _fun0001_ip = 103; continue _fun0001;
 97:
            var1 = var2.premiumImageSource;
 103:
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var5 = {};
    var6 = 0;
    var9 = var8[var6];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var10 = var9.STAFF;
    var9 = {};
    var11 = 1;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var9['imageSource'] = var13;
    var5[var10] = var9;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var10 = var9.PARTNERED;
    var9 = {};
    var13 = 2;
    var13 = var8[var13];
    var13 = var12.bind(var1)(var13);
    var9['imageSource'] = var13;
    var5[var10] = var9;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var10 = var9.VERIFIED;
    var9 = {};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var9['imageSource'] = var13;
    var5[var10] = var9;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var10 = var9.COMMUNITY;
    var9 = {};
    var13 = 3;
    var13 = var8[var13];
    var13 = var12.bind(var1)(var13);
    var9['imageSource'] = var13;
    var13 = 4;
    var13 = var8[var13];
    var13 = var12.bind(var1)(var13);
    var9['imageSourceLight'] = var13;
    var13 = 5;
    var13 = var8[var13];
    var13 = var12.bind(var1)(var13);
    var9['premiumImageSource'] = var13;
    var5[var10] = var9;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var10 = var9.DISCOVERABLE;
    var9 = {};
    var13 = 6;
    var13 = var8[var13];
    var13 = var12.bind(var1)(var13);
    var9['imageSource'] = var13;
    var13 = 7;
    var13 = var8[var13];
    var13 = var12.bind(var1)(var13);
    var9['imageSourceLight'] = var13;
    var13 = 8;
    var13 = var8[var13];
    var13 = var12.bind(var1)(var13);
    var9['premiumImageSource'] = var13;
    var5[var10] = var9;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var10 = var9.VERIFIED_AND_PARTNERED;
    var9 = {};
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var9['imageSource'] = var11;
    var5[var10] = var9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.BadgeCategory;
    var9 = var6.NONE;
    var6 = {};
    var5[var9] = var6;
    var _closure1_slot2 = var5;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_badge/native/GuildBadgeImageSource.tsx';
    var6 = var7.bind(var8)(var6);
    var3['badgeVariants'] = var5;
    var3['resolveImageSource'] = var4;
    var2 = function getGuildBadgeImageSource(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 10;
            var1 = var4[var1];
            var6 = undefined;
            var7 = var3.bind(var6)(var1);
            var5 = var7.getGuildTraits;
            var1 = arg1;
            var5 = var5.bind(var7)(var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.getBadgeCategory;
            var3 = var1.bind(var3)(var5);
            var1 = _closure1_slot2;
            var4 = var1[var3];
            var1 = null;
            var3 = var1 == var4;
            if(var3) { _fun0002_ip = 92; continue _fun0002 }
 78:
            var3 = _closure1_slot3;
            var2 = arg2;
            var1 = var3.bind(var6)(var4, var5, var2);
 92:
            return var1;
        }
    };
    var3['getGuildBadgeImageSource'] = var2;
    return var1;
})();