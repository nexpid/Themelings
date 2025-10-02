// app/modules/profile_customization/native/ProfileCustomizationUtils.tsx
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
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/ProfileCustomizationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useEditBannerSource(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.displayProfile;
            var3 = var1.pendingBanner;
            var6 = null;
            if(!(var6 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var6 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var6 != var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var8.isUsingGuildMemberBanner;
            var1 = var1.bind(var8)();
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var1 = var6 == var8;
            var7 = undefined;
            var5 = undefined;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var8.getPreviewBanner;
            var2 = true;
            var1 = 600;
            var5 = var4.bind(var8)(var3, var2, var1);
case 8:
            var2 = var6 != var5;
            var1 = null;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 1;
            var2 = var9[var2];
            var4 = var4.bind(var7)(var2);
            var2 = var4.makeSource;
            var1 = var2.bind(var4)(var5);
case 10:
            return var1;
case 6:
            var4 = var6 == var8;
            var2 = undefined;
            var1 = undefined;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var8.guildId;
case 12:
            var4 = var6 != var1;
            var1 = null;
            if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 1;
            var4 = var7[var4];
            var5 = var5.bind(var2)(var4);
            var4 = var5.makeSource;
            var6 = var6 == var8;
            var2 = undefined;
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var8.getBannerURL;
            var6 = {'size': 600, 'canAnimate': true};
            var2 = var7.bind(var8)(var6);
case 16:
            var1 = var4.bind(var5)(var2);
case 14:
            return var1;
case 2:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.memoizedImageSource;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['useEditBannerSource'] = var4;
    var4 = function useUserProfileBannerBackgroundColor(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var7 = var2.user;
            var6 = var2.guildId;
            var1 = var2.pendingAvatarSrc;
            var4 = var2.displayProfile;
            var3 = null;
            var2 = var3 == var7;
            var9 = null;
            if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            if(!(var3 != var1)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            if(!(var3 == var1)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var5 = var5[var2];
            var2 = undefined;
            var8 = var8.bind(var2)(var5);
            var5 = var8.getUserAvatarURL;
            var2 = {};
            var12 = var2;
            var11 = var7;
            var10 = copyDataProperties(var12, var11);
            var10 = 'avatar';
            var2[var10] = var3;
            var1 = var5.bind(var8)(var2);
case 22:
            _fun0002_ip = 24; continue _fun0002;
case 20:
            var5 = var7.getAvatarURL;
            var2 = 80;
            var1 = var5.bind(var7)(var6, var2);
case 24:
            var9 = var1;
case 18:
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 0;
            var5 = var10[var1];
            var2 = undefined;
            var6 = var7.bind(var2)(var5);
            var5 = var6.memoizedImageSource;
            var8 = var5.bind(var6)(var9);
            var5 = 2;
            var5 = var10[var5];
            var6 = var7.bind(var2)(var5);
            var5 = var6.rgb2int;
            var1 = var10[var1];
            var7 = var7.bind(var2)(var1);
            var1 = var7.useDominantColorFromImage;
            var1 = var1.bind(var7)(var9, var8);
            var1 = var5.bind(var6)(var1);
            var5 = var3 == var4;
            if(var5) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var2 = var4.primaryColor;
case 25:
            if(!(var3 != var2)) { _fun0002_ip = 27; continue _fun0002 }
case 2:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var3['useUserProfileBannerBackgroundColor'] = var4;
    var2 = function getAvatarSource(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var4 = arg3;
            var11 = null;
            var2 = var11 == var9;
            var1 = null;
            if(var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var5 = undefined;
            if(!(var5 !== var4)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.memoizedImageSource;
            if(!(var11 == var4)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 1;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.getUserAvatarURL;
            var6 = {};
            var14 = var6;
            var13 = var9;
            var10 = copyDataProperties(var14, var13);
            var10 = 'avatar';
            var6[var10] = var11;
            var4 = var7.bind(var8)(var6);
case 32:
            var2 = var2.bind(var3)(var4);
            _fun0003_ip = 34; continue _fun0003;
case 30:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 0;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.memoizedImageSource;
            var8 = var9.getAvatarURL;
            var3 = arg4;
            var7 = !var3;
            var6 = arg2;
            var3 = 80;
            var3 = var8.bind(var9)(var6, var3, var7);
            var2 = var4.bind(var5)(var3);
case 34:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['getAvatarSource'] = var2;
    return var1;
})();