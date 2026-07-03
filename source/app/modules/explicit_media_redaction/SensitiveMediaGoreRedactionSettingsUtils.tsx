// app/modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function resolveGoreSettingWithDefaults(arg1) {
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
            var3 = 3;
            var3 = var8[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.UNSET_EXPLICIT_CONTENT_REDACTION;
            if(!(var1 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var8 = _closure1_slot3;
            var3 = var8.getCurrentUser;
            var3 = var3.bind(var8)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 4;
            var8 = var12[var8];
            var10 = var11.bind(var6)(var8);
            var9 = var10.isSettingTeenByDefault;
            var8 = 5;
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
            if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            if(var3) { _fun0001_ip = 21; continue _fun0001 }
case 19:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 3;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.ExplicitContentRedaction;
            if(var2) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = var3.SHOW;
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var2 = var3.BLOCK;
            _fun0001_ip = 24; continue _fun0001;
case 21:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 3;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.ExplicitContentRedaction;
            var2 = var3.SHOW;
case 24:
            _fun0001_ip = 25; continue _fun0001;
case 13:
            var8 = _closure1_slot6;
            var3 = {};
            var3['isDm'] = var7;
            var3['isFriend'] = var5;
            var2 = var8.bind(var6)(var3);
case 25:
            _fun0001_ip = 26; continue _fun0001;
case 9:
            var3 = {};
            var3['isDm'] = var7;
            var3['isFriend'] = var5;
            var5 = var3.isDm;
            if(!(var5 === var6)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var5 = false;
case 27:
            var3 = var3.isFriend;
            if(!(var3 === var6)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var3 = false;
case 29:
            if(!var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(var3) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.BLOCK;
            _fun0001_ip = 34; continue _fun0001;
case 31:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ExplicitContentRedaction;
            var3 = var4.BLUR;
case 34:
            var2 = var3;
case 26:
            return var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot5 = var6;
    var5 = function resolveGoreSettingWithDefaultsForTeen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isDm;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var1 = false;
case 35:
            var2 = var2.isFriend;
            if(!(var2 === var4)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var2 = false;
case 37:
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 39:
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            if(var1) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var1 = var2.BLUR;
            _fun0002_ip = 42; continue _fun0002;
case 40:
            var1 = var2.BLOCK;
case 42:
            _fun0002_ip = 43; continue _fun0002;
case 6:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            var1 = var2.BLUR;
case 43:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function getGoreContentSettingOrDefault(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            if(!(var5 == var6)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.GoreContentSettings;
            var1 = var2.getSetting;
            var6 = var1.bind(var2)();
case 44:
            var1 = {};
            var7 = _closure1_slot5;
            var3 = {};
            var9 = var5 == var6;
            var4 = undefined;
            var8 = undefined;
            if(var9) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var8 = var6.goreContentGuilds;
case 46:
            var3['setting'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['goreContentGuilds'] = var3;
            var7 = _closure1_slot5;
            var3 = {};
            var9 = var5 == var6;
            var8 = undefined;
            if(var9) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var8 = var6.goreContentNonFriendDm;
case 48:
            var3['setting'] = var8;
            var8 = true;
            var3['isDm'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['goreContentNonFriendDm'] = var3;
            var3 = _closure1_slot5;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0003_ip = 12; continue _fun0003 }
case 50:
            var5 = var6.goreContentFriendDm;
case 12:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['goreContentFriendDm'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var10 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot2 = var7;
    var7 = 1;
    var10 = var9[var7];
    var7 = metroImportDefault;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.HelpdeskArticles;
    var _closure1_slot4 = var7;
    var7 = 7;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['resolveGoreSettingWithDefaults'] = var6;
    var3['resolveGoreSettingWithDefaultsForTeen'] = var5;
    var3['getGoreContentSettingOrDefault'] = var4;
    var4 = function updateGoreContentSetting(arg1) {
        var3 = _closure1_slot7;
        var1 = undefined;
        var6 = var3.bind(var1)();
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 6;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.GoreContentSettings;
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
    var3['updateGoreContentSetting'] = var4;
    var2 = function useSensitiveContentFilterHelpArticle() {
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = function() {
            var1 = _closure1_slot4;
            var1 = var1.EXPLICIT_MEDIA_REDACTION;
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSensitiveContentFilterHelpArticle'] = var2;
    return var1;
})();