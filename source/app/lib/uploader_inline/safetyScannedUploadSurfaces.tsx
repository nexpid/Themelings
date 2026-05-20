// app/lib/uploader_inline/safetyScannedUploadSurfaces.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.UploadTypes;
    var _closure1_slot0 = var4;
    var4 = {};
    var5 = 'USER_DEFAULT_PROFILE_AVATAR';
    var4['USER_DEFAULT_PROFILE_AVATAR'] = var5;
    var5 = 'USER_DEFAULT_PROFILE_BANNER';
    var4['USER_DEFAULT_PROFILE_BANNER'] = var5;
    var5 = 'USER_GUILD_PROFILE_AVATAR';
    var4['USER_GUILD_PROFILE_AVATAR'] = var5;
    var5 = 'USER_GUILD_PROFILE_BANNER';
    var4['USER_GUILD_PROFILE_BANNER'] = var5;
    var5 = 'GUILD_ICON';
    var4['GUILD_ICON'] = var5;
    var5 = 'GUILD_BANNER';
    var4['GUILD_BANNER'] = var5;
    var5 = 'GUILD_DISCOVERY_SPLASH';
    var4['GUILD_DISCOVERY_SPLASH'] = var5;
    var5 = 'GUILD_INVITE_SPLASH';
    var4['GUILD_INVITE_SPLASH'] = var5;
    var5 = 'EMOJI';
    var4['EMOJI'] = var5;
    var5 = 'STICKER';
    var4['STICKER'] = var5;
    var _closure1_slot1 = var4;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/uploader_inline/safetyScannedUploadSurfaces.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SafetyScannedUploadSurface'] = var4;
    var2 = function getSafetyScannedUploadSurfaceForProfileCustomization(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = _closure1_slot0;
            var1 = var1.AVATAR;
            if(!(var1 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot0;
            var1 = var1.BANNER;
            if(!(var1 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot0;
            var1 = var1.GUILD_BANNER;
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot0;
            var1 = var1.VIDEO_BACKGROUND;
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var1 = _closure1_slot0;
            var1 = var1.SCHEDULED_EVENT_IMAGE;
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var1 = _closure1_slot0;
            var1 = var1.HOME_HEADER;
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 10:
            var1 = _closure1_slot0;
            var1 = var1.AVATAR_DECORATION;
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 11:
            var1 = _closure1_slot0;
            var1 = var1.GUILD_ICON;
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            var1 = undefined;
            return var1;
case 6:
            var1 = null;
            return var1;
case 4:
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = _closure1_slot1;
            var1 = var1.USER_DEFAULT_PROFILE_BANNER;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var4 = _closure1_slot1;
            var1 = var4.USER_GUILD_PROFILE_BANNER;
case 15:
            return var1;
case 2:
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = _closure1_slot1;
            var1 = var1.USER_DEFAULT_PROFILE_AVATAR;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var2 = _closure1_slot1;
            var1 = var2.USER_GUILD_PROFILE_AVATAR;
case 18:
            return var1;
        }
    };
    var3['getSafetyScannedUploadSurfaceForProfileCustomization'] = var2;
    return var1;
})();