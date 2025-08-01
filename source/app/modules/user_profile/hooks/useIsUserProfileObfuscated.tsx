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
            if(var4) { _fun0001_ip = 79; continue _fun0001 }
 73:
            var1 = var3.bio;
 79:
            var7 = '';
            var1 = var7 === var1;
            if(!var1) { _fun0001_ip = 109; continue _fun0001 }
 90:
            var8 = var5 == var3;
            var4 = undefined;
            if(var8) { _fun0001_ip = 105; continue _fun0001 }
 99:
            var4 = var3.pronouns;
 105:
            var1 = var7 === var4;
 109:
            if(!var1) { _fun0001_ip = 131; continue _fun0001 }
 112:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 127; continue _fun0001 }
 121:
            var4 = var3.banner;
 127:
            var1 = var6 === var4;
 131:
            if(!var1) { _fun0001_ip = 153; continue _fun0001 }
 134:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 149; continue _fun0001 }
 143:
            var4 = var3.accentColor;
 149:
            var1 = var6 === var4;
 153:
            if(!var1) { _fun0001_ip = 175; continue _fun0001 }
 156:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 171; continue _fun0001 }
 165:
            var4 = var3.banner;
 171:
            var1 = var6 === var4;
 175:
            if(!var1) { _fun0001_ip = 193; continue _fun0001 }
 178:
            var4 = var2.flags;
            var2 = var2.publicFlags;
            var1 = var4 === var2;
 193:
            if(!var1) { _fun0001_ip = 256; continue _fun0001 }
 196:
            var4 = var5 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 211; continue _fun0001 }
 205:
            var2 = var3.badges;
 211:
            var2 = var5 == var2;
            if(var2) { _fun0001_ip = 253; continue _fun0001 }
 218:
            var7 = var5 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 247; continue _fun0001 }
 227:
            var3 = var3.badges;
            var5 = var5 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 247; continue _fun0001 }
 242:
            var4 = var3.length;
 247:
            var3 = 0;
            var2 = var3 === var4;
 253:
            var1 = var2;
 256:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();