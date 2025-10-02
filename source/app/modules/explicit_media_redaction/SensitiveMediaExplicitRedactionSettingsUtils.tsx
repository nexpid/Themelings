// app/modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var11[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var5 = var4.ExplicitContentFilterTypes;
    var6 = {};
    var7 = var5.DISABLED;
    var4 = var7.valueOf;
    var8 = var4.bind(var7)();
    var4 = 2;
    var7 = var11[var4];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.SHOW;
    var6[var8] = var7;
    var8 = var5.NON_FRIENDS;
    var7 = var8.valueOf;
    var8 = var7.bind(var8)();
    var7 = var11[var4];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.SHOW;
    var6[var8] = var7;
    var8 = var5.FRIENDS_AND_NON_FRIENDS;
    var7 = var8.valueOf;
    var8 = var7.bind(var8)();
    var7 = var11[var4];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.BLOCK;
    var6[var8] = var7;
    var _closure1_slot3 = var6;
    var6 = {};
    var8 = var5.DISABLED;
    var7 = var8.valueOf;
    var8 = var7.bind(var8)();
    var7 = var11[var4];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.SHOW;
    var6[var8] = var7;
    var8 = var5.NON_FRIENDS;
    var7 = var8.valueOf;
    var8 = var7.bind(var8)();
    var7 = var11[var4];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.BLOCK;
    var6[var8] = var7;
    var8 = var5.FRIENDS_AND_NON_FRIENDS;
    var7 = var8.valueOf;
    var8 = var7.bind(var8)();
    var7 = var11[var4];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ExplicitContentRedaction;
    var7 = var7.BLOCK;
    var6[var8] = var7;
    var _closure1_slot4 = var6;
    var8 = {};
    var7 = var5.DISABLED;
    var6 = var7.valueOf;
    var7 = var6.bind(var7)();
    var6 = var11[var4];
    var6 = var10.bind(var1)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.BLUR;
    var8[var7] = var6;
    var7 = var5.NON_FRIENDS;
    var6 = var7.valueOf;
    var7 = var6.bind(var7)();
    var6 = var11[var4];
    var6 = var10.bind(var1)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.BLUR;
    var8[var7] = var6;
    var7 = var5.FRIENDS_AND_NON_FRIENDS;
    var6 = var7.valueOf;
    var7 = var6.bind(var7)();
    var6 = var11[var4];
    var6 = var10.bind(var1)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.BLOCK;
    var8[var7] = var6;
    var _closure1_slot5 = var8;
    var7 = {};
    var9 = var5.DISABLED;
    var6 = var9.valueOf;
    var9 = var6.bind(var9)();
    var6 = var11[var4];
    var6 = var10.bind(var1)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.BLUR;
    var7[var9] = var6;
    var9 = var5.NON_FRIENDS;
    var6 = var9.valueOf;
    var9 = var6.bind(var9)();
    var6 = var11[var4];
    var6 = var10.bind(var1)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.BLOCK;
    var7[var9] = var6;
    var6 = var5.FRIENDS_AND_NON_FRIENDS;
    var5 = var6.valueOf;
    var5 = var5.bind(var6)();
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var4.ExplicitContentRedaction;
    var4 = var4.BLOCK;
    var7[var5] = var4;
    var _closure1_slot6 = var7;
    var6 = function resolveExplicitContentSettingWithDefaults(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.setting;
            var7 = var2.isDm;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var6 = var2.isFriend;
            if(!(var6 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = false;
case 4:
            var4 = null;
            if(!(var4 != var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.UNSET_EXPLICIT_CONTENT_REDACTION;
            if(!(var1 === var2)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var8 = _closure1_slot2;
            var2 = var8.getCurrentUser;
            var2 = var2.bind(var8)();
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var8 = 3;
            var8 = var10[var8];
            var10 = var9.bind(var5)(var8);
            var9 = var10.isEligibleForSettingsDefaultsAggregate;
            var8 = 'resolveSettingWithDefaults';
            var8 = var9.bind(var10)(var8);
            if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var4 == var2;
            var4 = undefined;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = var2.nsfwAllowed;
case 11:
            var2 = false;
            if(!(var2 !== var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = _closure1_slot8;
            var2 = {};
            var2['isDm'] = var7;
            var2['isFriend'] = var6;
            var2 = var4.bind(var5)(var2);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var8 = _closure1_slot9;
            var4 = {};
            var4['isDm'] = var7;
            var4['isFriend'] = var6;
            var2 = var8.bind(var5)(var4);
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 9:
            var4 = _closure1_slot10;
            var3 = {};
            var3['isDm'] = var7;
            var3['isFriend'] = var6;
            var2 = var4.bind(var5)(var3);
case 16:
            return var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var4 = function resolveSettingWithDefaultsForAdult(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.isDm;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var3 = false;
case 17:
            var1 = var1.isFriend;
            if(!(var1 === var5)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = false;
case 19:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.SHOW;
            return var3;
case 21:
            var3 = 4;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.ExplicitContentFilter;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            if(var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var1 = _closure1_slot4;
            var1 = var1[var3];
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var2 = _closure1_slot3;
            var1 = var2[var3];
case 25:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var5 = function resolveSettingWithDefaultsForTeen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.isDm;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = false;
case 17:
            var1 = var1.isFriend;
            if(!(var1 === var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = false;
case 19:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.BLUR;
            return var3;
case 21:
            var3 = 4;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.ExplicitContentFilter;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var1 = _closure1_slot6;
            var1 = var1[var3];
            _fun0003_ip = 25; continue _fun0003;
case 23:
            var2 = _closure1_slot5;
            var1 = var2[var3];
case 25:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function resultDefaultSettingsForSensitiveContentDefaultsMixed(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.isDm;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = false;
case 17:
            var1 = var1.isFriend;
            if(!(var1 === var4)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var1 = false;
case 19:
            if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            if(var1) { _fun0004_ip = 26; continue _fun0004 }
case 4:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ExplicitContentRedaction;
            var1 = var1.BLOCK;
            _fun0004_ip = 28; continue _fun0004;
case 26:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            var1 = var2.BLUR;
case 28:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = function getExplicitContentSettingOrDefault(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            if(!(var5 == var6)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.ExplicitContentSettings;
            var1 = var2.getSetting;
            var6 = var1.bind(var2)();
case 29:
            var1 = {};
            var7 = _closure1_slot7;
            var3 = {};
            var9 = var5 == var6;
            var4 = undefined;
            var8 = undefined;
            if(var9) { _fun0005_ip = 31; continue _fun0005 }
case 26:
            var8 = var6.explicitContentGuilds;
case 31:
            var3['setting'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['explicitContentGuilds'] = var3;
            var7 = _closure1_slot7;
            var3 = {};
            var9 = var5 == var6;
            var8 = undefined;
            if(var9) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var8 = var6.explicitContentNonFriendDm;
case 32:
            var3['setting'] = var8;
            var8 = true;
            var3['isDm'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['explicitContentNonFriendDm'] = var3;
            var3 = _closure1_slot7;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var5 = var6.explicitContentFriendDm;
case 34:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['explicitContentFriendDm'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var9 = 6;
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
    var4 = function(arg1) {
        var3 = _closure1_slot11;
        var1 = undefined;
        var6 = var3.bind(var1)();
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 4;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var2 = _closure1_slot11;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var3 = var2.explicitContentGuilds;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 5;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getShouldObscureForSetting;
            var1 = var1.bind(var2)(var3);
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var3['shouldRedactMessageMediaForForum'] = var2;
    return var1;
})();