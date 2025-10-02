// app/modules/user_profile/utils/trackUserAvatarUpdated.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/trackUserAvatarUpdated.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackUserAvatarUpdated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.avatarHash;
            var11 = var2.avatarId;
            var9 = var2.isGuildProfile;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var7 = var2.avatarAssetOrigin;
            if(!(var7 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.AssetOriginTypes;
            var7 = var2.NEW_ASSET;
case 4:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot3;
            var3 = var2.USER_AVATAR_UPDATED;
            var2 = {};
            var10 = _closure1_slot0;
            var12 = 3;
            var12 = var8[var12];
            var13 = var10.bind(var1)(var12);
            var12 = var13.isAnimatedIconHash;
            var12 = var12.bind(var13)(var14);
            var2['animated'] = var12;
            var2['is_guild_profile'] = var9;
            var9 = 1;
            var8 = var8[var9];
            var8 = var10.bind(var1)(var8);
            var8 = var8.AssetOriginTypes;
            var10 = var8.ARCHIVED_ASSET;
            var8 = undefined;
            if(!(var7 === var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = global;
            var10 = var10.Number;
            var8 = var10.bind(var1)(var11);
case 6:
            var2['recent_avatar_id'] = var8;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AssetOriginTypes;
            var6 = var6.EDITED_ARCHIVED_ASSET;
            var6 = var7 === var6;
            var2['is_edited_recent_avatar'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackUserAvatarUpdated'] = var2;
    return var1;
})();