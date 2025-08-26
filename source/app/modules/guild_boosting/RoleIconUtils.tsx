// app/modules/guild_boosting/RoleIconUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var8 = var7.Endpoints;
    var _closure1_slot3 = var8;
    var7 = var7.GuildFeatures;
    var _closure1_slot4 = var7;
    var7 = var4.location;
    var16 = var7.protocol;
    var7 = var4.window;
    var7 = var7.GLOBAL_ENV;
    var14 = var7.CDN_HOST;
    var7 = var4.HermesInternal;
    var10 = var7.concat;
    var9 = '';
    var15 = '//';
    var13 = '/role-icons';
    var17 = var9;
    var7 = var17[var10](var16, var15, var14, var13, var12);
    var _closure1_slot5 = var7;
    var7 = var4.location;
    var8 = var7.protocol;
    var7 = var4.window;
    var7 = var7.GLOBAL_ENV;
    var7 = var7.API_ENDPOINT;
    var4 = var4.HermesInternal;
    var4 = var4.concat;
    var4 = var4.bind(var9)(var8, var7);
    var _closure1_slot6 = var4;
    var4 = 1;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.isAndroid;
    var4 = var4.bind(var7)();
    var _closure1_slot7 = var4;
    var4 = function getRoleIconSource(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = arg2;
            var12 = var1.id;
            var1 = var1.icon;
            var5 = null;
            if(!(var5 == var1)) { _fun0001_ip = 26; continue _fun0001 }
 22:
            var2 = undefined;
            return var2;
 26:
            var3 = var1.startsWith;
            var2 = 'data:';
            var2 = var3.bind(var1)(var2);
            if(var2) { _fun0001_ip = 330; continue _fun0001 }
 49:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var14 = undefined;
            var2 = var3.bind(var14)(var2);
            var2 = var2.SUPPORTS_WEBP;
            var11 = 'png';
            if(!var2) { _fun0001_ip = 93; continue _fun0001 }
 87:
            var11 = 'webp';
 93:
            var2 = var5 != var7;
            var10 = '';
            var9 = 'quality=lossless';
            var8 = var10;
            if(!var2) { _fun0001_ip = 199; continue _fun0001 }
 113:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 3;
            var3 = var15[var2];
            var6 = var13.bind(var14)(var3);
            var3 = var6.getBestMediaProxySize;
            var2 = var15[var2];
            var13 = var13.bind(var14)(var2);
            var2 = var13.getDevicePixelRatio;
            var2 = var2.bind(var13)();
            var2 = var7 * var2;
            var3 = var3.bind(var6)(var2);
            var2 = 'size=';
            var3 = var2 + var3;
            var6 = _closure1_slot7;
            var2 = var10;
            if(var6) { _fun0001_ip = 193; continue _fun0001 }
 187:
            var2 = '&quality=lossless';
 193:
            var9 = var2;
            var8 = var3;
 199:
            var3 = global;
            var2 = var3.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.CDN_HOST;
            if(!(var5 == var2)) { _fun0001_ip = 273; continue _fun0001 }
 223:
            var7 = _closure1_slot6;
            var5 = _closure1_slot3;
            var2 = var5.ROLE_ICON;
            var24 = var2.bind(var5)(var12, var1);
            var2 = var3.HermesInternal;
            var5 = var2.concat;
            var23 = '?';
            var26 = var10;
            var25 = var7;
            var22 = var8;
            var2 = var26[var5](var25, var24, var23, var22, var21);
            _fun0001_ip = 328; continue _fun0001;
 273:
            var25 = _closure1_slot5;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var5 = '/';
            var20 = '.';
            var18 = '?';
            var26 = var10;
            var24 = var5;
            var23 = var12;
            var22 = var5;
            var21 = var1;
            var19 = var11;
            var17 = var8;
            var16 = var9;
            var2 = var26[var6](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
 328:
            return var2;
 330:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/RoleIconUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 134; continue _fun0002 }
 12:
            var2 = var7.unicodeEmoji;
            var2 = var1 != var2;
            var3 = undefined;
            var4 = undefined;
            if(!var2) { _fun0002_ip = 92; continue _fun0002 }
 29:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 2;
            var5 = var9[var2];
            var6 = var8.bind(var3)(var5);
            var5 = var6.getByName;
            var2 = var9[var2];
            var10 = var8.bind(var3)(var2);
            var9 = var10.convertSurrogateToName;
            var8 = var7.unicodeEmoji;
            var2 = false;
            var2 = var9.bind(var10)(var8, var2);
            var4 = var5.bind(var6)(var2);
 92:
            var2 = {};
            var6 = _closure1_slot8;
            var5 = arg2;
            var5 = var6.bind(var3)(var7, var5);
            var2['customIconSrc'] = var5;
            var5 = var1 != var4;
            var3 = undefined;
            if(!var5) { _fun0002_ip = 127; continue _fun0002 }
 124:
            var3 = var4;
 127:
            var2['unicodeEmoji'] = var3;
            return var2;
 134:
            return var1;
        }
    };
    var3['getRoleIconData'] = var4;
    var4 = function(arg1, arg2) {
        var4 = arg1;
        var3 = var4.replace;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 3;
        var2 = var8[var1];
        var6 = undefined;
        var5 = var7.bind(var6)(var2);
        var2 = var5.getBestMediaProxySize;
        var1 = var8[var1];
        var6 = var7.bind(var6)(var1);
        var1 = var6.getDevicePixelRatio;
        var6 = var1.bind(var6)();
        var1 = arg2;
        var1 = var1 * var6;
        var5 = var2.bind(var5)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'size=';
        var2 = var2.bind(var1)(var5);
        var1 = /size=[0-9]+/g;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['replaceRoleIconSourceSize'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var3 = var5.startsWith;
            var1 = _closure1_slot5;
            var1 = var3.bind(var5)(var1);
            if(var1) { _fun0003_ip = 90; continue _fun0003 }
 24:
            var3 = var5.startsWith;
            var7 = _closure1_slot6;
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var4 = '';
            var2 = '/roles';
            var2 = var6.bind(var4)(var7, var2);
            var2 = var3.bind(var5)(var2);
            if(!var2) { _fun0003_ip = 87; continue _fun0003 }
 71:
            var4 = var5.includes;
            var3 = '/icons/';
            var2 = var4.bind(var5)(var3);
 87:
            var1 = var2;
 90:
            return var1;
        }
    };
    var3['isRoleIconAssetUrl'] = var4;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg2;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0004_ip = 35; continue _fun0004 }
 14:
            var3 = var3.tags;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0004_ip = 35; continue _fun0004 }
 29:
            var1 = var3.subscription_listing_id;
 35:
            var1 = var2 != var1;
            if(var1) { _fun0004_ip = 74; continue _fun0004 }
 42:
            var2 = arg1;
            var4 = var2.features;
            var3 = var4.has;
            var2 = _closure1_slot4;
            var2 = var2.ROLE_ICONS;
            var1 = var3.bind(var4)(var2);
 74:
            return var1;
        }
    };
    var3['canGuildUseRoleIcons'] = var2;
    return var1;
})();