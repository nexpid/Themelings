// app/modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var6 = function resolveExplicitContentSettingWithDefaults(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.setting;
            var7 = var2.isDm;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var5 = var2.isFriend;
            if(!(var5 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = false;
case 4:
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 2;
            var3 = var8[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.UNSET_EXPLICIT_CONTENT_REDACTION;
            if(!(var1 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var8 = _closure1_slot2;
            var3 = var8.getCurrentUser;
            var3 = var3.bind(var8)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 3;
            var8 = var12[var8];
            var10 = var11.bind(var6)(var8);
            var9 = var10.isSettingTeenByDefault;
            var8 = 4;
            var8 = var12[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.SettingsDefaultFeature;
            var8 = var8.SENSITIVE_CONTENT;
            var8 = var9.bind(var10)(var8);
            if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var2 == var3;
            var2 = undefined;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var3.nsfwAllowed;
case 11:
            var8 = false;
            if(!(var8 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = {};
            var3['isDm'] = var7;
            var3['isFriend'] = var5;
            var2 = var3.isDm;
            if(!(var2 === var6)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = false;
case 15:
            var3 = var3.isFriend;
            if(!(var3 === var6)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = false;
case 17:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = 2;
            var2 = var10[var2];
            var2 = var9.bind(var6)(var2);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.SHOW;
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var8 = 5;
            var8 = var10[var8];
            var8 = var9.bind(var6)(var8);
            var9 = var8.ExplicitContentFilter;
            var8 = var9.getSetting;
            var8 = var8.bind(var9)();
            if(var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = _closure1_slot4;
            var2 = var3[var8];
            _fun0001_ip = 21; continue _fun0001;
case 22:
            var3 = _closure1_slot3;
            var2 = var3[var8];
case 21:
            _fun0001_ip = 24; continue _fun0001;
case 13:
            var8 = _closure1_slot8;
            var3 = {};
            var3['isDm'] = var7;
            var3['isFriend'] = var5;
            var2 = var8.bind(var6)(var3);
case 24:
            _fun0001_ip = 25; continue _fun0001;
case 9:
            var3 = {};
            var3['isDm'] = var7;
            var3['isFriend'] = var5;
            var5 = var3.isDm;
            if(!(var5 === var6)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = false;
case 26:
            var3 = var3.isFriend;
            if(!(var3 === var6)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = false;
case 28:
            if(!var5) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.BLOCK;
            _fun0001_ip = 33; continue _fun0001;
case 30:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 2;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ExplicitContentRedaction;
            var3 = var4.BLUR;
case 33:
            var2 = var3;
case 25:
            return var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function resolveSettingWithDefaultsForTeen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.isDm;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var3 = false;
case 34:
            var1 = var1.isFriend;
            if(!(var1 === var5)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var1 = false;
case 36:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            if(var3) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.BLUR;
            return var3;
case 38:
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.ExplicitContentFilter;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            if(var1) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var1 = _closure1_slot6;
            var1 = var1[var3];
            _fun0002_ip = 42; continue _fun0002;
case 40:
            var2 = _closure1_slot5;
            var1 = var2[var3];
case 42:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function getExplicitContentSettingOrDefault(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            if(!(var5 == var6)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.ExplicitContentSettings;
            var1 = var2.getSetting;
            var6 = var1.bind(var2)();
case 43:
            var1 = {};
            var7 = _closure1_slot7;
            var3 = {};
            var9 = var5 == var6;
            var4 = undefined;
            var8 = undefined;
            if(var9) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var8 = var6.explicitContentGuilds;
case 45:
            var3['setting'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['explicitContentGuilds'] = var3;
            var7 = _closure1_slot7;
            var3 = {};
            var9 = var5 == var6;
            var8 = undefined;
            if(var9) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var8 = var6.explicitContentNonFriendDm;
case 47:
            var3['setting'] = var8;
            var8 = true;
            var3['isDm'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['explicitContentNonFriendDm'] = var3;
            var3 = _closure1_slot7;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var5 = var6.explicitContentFriendDm;
case 49:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['explicitContentFriendDm'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var11[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var12 = var7.ExplicitContentFilterTypes;
    var7 = {};
    var9 = var12.DISABLED;
    var8 = var9.valueOf;
    var13 = var8.bind(var9)();
    var9 = 2;
    var8 = var11[var9];
    var8 = var10.bind(var1)(var8);
    var8 = var8.ExplicitContentRedaction;
    var8 = var8.SHOW;
    var7[12] = var8;
    var13 = var12.NON_FRIENDS;
    var8 = var13.valueOf;
    var13 = var8.bind(var13)();
    var8 = var11[var9];
    var8 = var10.bind(var1)(var8);
    var8 = var8.ExplicitContentRedaction;
    var8 = var8.SHOW;
    var7[12] = var8;
    var13 = var12.FRIENDS_AND_NON_FRIENDS;
    var8 = var13.valueOf;
    var13 = var8.bind(var13)();
    var8 = var11[var9];
    var8 = var10.bind(var1)(var8);
    var8 = var8.ExplicitContentRedaction;
    var8 = var8.BLOCK;
    var7[12] = var8;
    var _closure1_slot3 = var7;
    var7 = {};
    var13 = var12.DISABLED;
    var8 = var13.valueOf;
    var13 = var8.bind(var13)();
    var8 = var11[var9];
    var8 = var10.bind(var1)(var8);
    var8 = var8.ExplicitContentRedaction;
    var8 = var8.SHOW;
    var7[12] = var8;
    var13 = var12.NON_FRIENDS;
    var8 = var13.valueOf;
    var13 = var8.bind(var13)();
    var8 = var11[var9];
    var8 = var10.bind(var1)(var8);
    var8 = var8.ExplicitContentRedaction;
    var8 = var8.BLOCK;
    var7[12] = var8;
    var13 = var12.FRIENDS_AND_NON_FRIENDS;
    var8 = var13.valueOf;
    var13 = var8.bind(var13)();
    var8 = var11[var9];
    var8 = var10.bind(var1)(var8);
    var8 = var8.ExplicitContentRedaction;
    var8 = var8.BLOCK;
    var7[12] = var8;
    var _closure1_slot4 = var7;
    var8 = {};
    var13 = var12.DISABLED;
    var7 = var13.valueOf;
    var13 = var7.bind(var13)();
    var7 = var11[var9];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.BLUR;
    var8[12] = var7;
    var13 = var12.NON_FRIENDS;
    var7 = var13.valueOf;
    var13 = var7.bind(var13)();
    var7 = var11[var9];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.BLUR;
    var8[12] = var7;
    var13 = var12.FRIENDS_AND_NON_FRIENDS;
    var7 = var13.valueOf;
    var13 = var7.bind(var13)();
    var7 = var11[var9];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.BLOCK;
    var8[12] = var7;
    var _closure1_slot5 = var8;
    var7 = {};
    var14 = var12.DISABLED;
    var13 = var14.valueOf;
    var14 = var13.bind(var14)();
    var13 = var11[var9];
    var13 = var10.bind(var1)(var13);
    var13 = var13.ExplicitContentRedaction;
    var13 = var13.BLUR;
    var7[13] = var13;
    var14 = var12.NON_FRIENDS;
    var13 = var14.valueOf;
    var14 = var13.bind(var14)();
    var13 = var11[var9];
    var13 = var10.bind(var1)(var13);
    var13 = var13.ExplicitContentRedaction;
    var13 = var13.BLOCK;
    var7[13] = var13;
    var13 = var12.FRIENDS_AND_NON_FRIENDS;
    var12 = var13.valueOf;
    var12 = var12.bind(var13)();
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLOCK;
    var7[11] = var9;
    var _closure1_slot6 = var7;
    var9 = 7;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM'] = var8;
    var3['TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM'] = var7;
    var3['resolveExplicitContentSettingWithDefaults'] = var6;
    var3['resolveSettingWithDefaultsForTeen'] = var5;
    var3['getExplicitContentSettingOrDefault'] = var4;
    var4 = function updateExplicitContentSetting(arg1) {
        var3 = _closure1_slot9;
        var1 = undefined;
        var6 = var3.bind(var1)();
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 5;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.ExplicitContentSettings;
        var3 = var4.updateSetting;
        var2 = {};
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var6 = arg1;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateExplicitContentSetting'] = var4;
    var2 = function shouldRedactMessageMediaForForum() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var2 = _closure1_slot9;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var3 = var2.explicitContentGuilds;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 6;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getShouldObscureForSetting;
            var1 = var1.bind(var2)(var3);
            return var1;
case 51:
            var1 = false;
            return var1;
        }
    };
    var3['shouldRedactMessageMediaForForum'] = var2;
    return var1;
})();