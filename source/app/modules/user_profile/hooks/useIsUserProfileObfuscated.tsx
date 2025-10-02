// app/modules/user_profile/hooks/useIsUserProfileObfuscated.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useIsUserProfileObfuscated.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsUserProfileObfuscated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 1;
            var4 = var6[var4];
            var6 = undefined;
            var5 = var5.bind(var6)(var4);
            var4 = var5.useStateFromStores;
            var7 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getUserProfile;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3, var1);
            var5 = null;
            var4 = var5 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.bio;
case 2:
            var7 = '';
            var1 = var7 === var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var5 == var3;
            var4 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var3.pronouns;
case 6:
            var1 = var7 === var4;
case 4:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var3.banner;
case 10:
            var1 = var6 === var4;
case 8:
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var3.accentColor;
case 14:
            var1 = var6 === var4;
case 12:
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var3.banner;
case 18:
            var1 = var6 === var4;
case 16:
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = var2.flags;
            var2 = var2.publicFlags;
            var1 = var4 === var2;
case 20:
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = var5 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = var3.badges;
case 24:
            var2 = var5 == var2;
            if(var2) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = var3.badges;
            var5 = var5 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
case 30:
            var4 = var3.length;
case 28:
            var3 = 0;
            var2 = var3 === var4;
case 26:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();