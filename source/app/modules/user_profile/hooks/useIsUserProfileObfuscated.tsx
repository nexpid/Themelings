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
 0:
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
            if(var4) { _fun0001_ip = 81; continue _fun0001 }
 75:
            var1 = var3.bio;
 81:
            var7 = '';
            var1 = var7 === var1;
            if(!var1) { _fun0001_ip = 111; continue _fun0001 }
 92:
            var8 = var5 == var3;
            var4 = undefined;
            if(var8) { _fun0001_ip = 107; continue _fun0001 }
 101:
            var4 = var3.pronouns;
 107:
            var1 = var7 === var4;
 111:
            if(!var1) { _fun0001_ip = 133; continue _fun0001 }
 114:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 129; continue _fun0001 }
 123:
            var4 = var3.banner;
 129:
            var1 = var6 === var4;
 133:
            if(!var1) { _fun0001_ip = 155; continue _fun0001 }
 136:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 151; continue _fun0001 }
 145:
            var4 = var3.accentColor;
 151:
            var1 = var6 === var4;
 155:
            if(!var1) { _fun0001_ip = 177; continue _fun0001 }
 158:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 173; continue _fun0001 }
 167:
            var4 = var3.banner;
 173:
            var1 = var6 === var4;
 177:
            if(!var1) { _fun0001_ip = 195; continue _fun0001 }
 180:
            var4 = var2.flags;
            var2 = var2.publicFlags;
            var1 = var4 === var2;
 195:
            if(!var1) { _fun0001_ip = 258; continue _fun0001 }
 198:
            var4 = var5 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 213; continue _fun0001 }
 207:
            var2 = var3.badges;
 213:
            var2 = var5 == var2;
            if(var2) { _fun0001_ip = 255; continue _fun0001 }
 220:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 249; continue _fun0001 }
 229:
            var3 = var3.badges;
            var5 = var5 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 249; continue _fun0001 }
 244:
            var4 = var3.length;
 249:
            var3 = 0;
            var2 = var3 === var4;
 255:
            var1 = var2;
 258:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();