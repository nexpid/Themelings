// app/modules/user_profile/preloadUserBannerImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/preloadUserBannerImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function preloadUserBannerImage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var1 = global;
            var2 = var1.Image;
            var3 = 'undefined';
            var2 = typeof var2;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7.user;
            var3 = null;
            var4 = var3 == var2;
            var9 = undefined;
            var11 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var2.id;
case 4:
            if(!(var3 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var2 = '';
            if(!(var2 !== var11)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var4 = var3 != var8;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var7.guild_member_profile;
            var6 = var3 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var5.banner;
case 10:
            var4 = var3 != var2;
case 8:
            var2 = undefined;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var4 = 0;
            var4 = var12[var4];
            var6 = var10.bind(var9)(var4);
            var5 = var6.getGuildMemberBannerURL;
            var4 = {};
            var4['id'] = var11;
            var4['guildId'] = var8;
            var8 = var7.guild_member_profile;
            var8 = var8.banner;
            var4['banner'] = var8;
            var8 = 1;
            var8 = var12[var8];
            var8 = var10.bind(var9)(var8);
            var10 = var8.GifAutoPlay;
            var8 = var10.getSetting;
            var8 = var8.bind(var10)();
            var4['canAnimate'] = var8;
            var8 = 600;
            var4['size'] = var8;
            var2 = var5.bind(var6)(var4);
case 12:
            var5 = var3 == var7;
            var4 = undefined;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var7.user_profile;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var4 = var5.banner;
case 14:
            if(!(var3 != var4)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 0;
            var4 = var10[var4];
            var6 = var8.bind(var9)(var4);
            var5 = var6.getUserBannerURL;
            var4 = {};
            var4['id'] = var11;
            var7 = var7.user_profile;
            var7 = var7.banner;
            var4['banner'] = var7;
            var7 = 1;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var8 = var7.GifAutoPlay;
            var7 = var8.getSetting;
            var7 = var7.bind(var8)();
            var4['canAnimate'] = var7;
            var7 = 600;
            var4['size'] = var7;
            var2 = var5.bind(var6)(var4);
case 17:
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 19:
            var1 = var1.Image;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var15 = var3;
            var1 = new var15[var1](var14);
            var1 = var1 instanceof Object ? var1 : var3;
            var1['src'] = var2;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();