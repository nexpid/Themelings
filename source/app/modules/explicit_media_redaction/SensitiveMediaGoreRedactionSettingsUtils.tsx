// app/modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var9[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var9[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot4 = var4;
    var6 = function resolveGoreSettingWithDefaults(arg1) {
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
            var2 = 3;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.UNSET_EXPLICIT_CONTENT_REDACTION;
            if(!(var1 === var2)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var8 = _closure1_slot3;
            var2 = var8.getCurrentUser;
            var2 = var2.bind(var8)();
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var8 = 4;
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
            var4 = _closure1_slot7;
            var2 = {};
            var2['isDm'] = var7;
            var2['isFriend'] = var6;
            var2 = var4.bind(var5)(var2);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var8 = _closure1_slot8;
            var4 = {};
            var4['isDm'] = var7;
            var4['isFriend'] = var6;
            var2 = var8.bind(var5)(var4);
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 9:
            var4 = _closure1_slot6;
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
    var _closure1_slot5 = var6;
    var4 = function resultDefaultSettingsForSensitiveContentDefaultsMixed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.isDm;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = false;
case 17:
            var1 = var1.isFriend;
            if(!(var1 === var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = false;
case 19:
            if(!var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            if(var1) { _fun0002_ip = 21; continue _fun0002 }
case 4:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ExplicitContentRedaction;
            var1 = var1.BLOCK;
            _fun0002_ip = 23; continue _fun0002;
case 21:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            var1 = var2.BLUR;
case 23:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function resolveGoreSettingWithDefaultsForAdult(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isDm;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1 = false;
case 17:
            var2 = var2.isFriend;
            if(!(var2 === var4)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = false;
case 19:
            if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 22:
            if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            if(var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var1 = var2.SHOW;
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var1 = var2.BLOCK;
case 26:
            _fun0003_ip = 27; continue _fun0003;
case 6:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            var1 = var2.SHOW;
case 27:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var5 = function resolveGoreSettingWithDefaultsForTeen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isDm;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var1 = false;
case 17:
            var2 = var2.isFriend;
            if(!(var2 === var4)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var2 = false;
case 19:
            if(!var1) { _fun0004_ip = 4; continue _fun0004 }
case 22:
            if(var2) { _fun0004_ip = 6; continue _fun0004 }
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            if(var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var1 = var2.BLUR;
            _fun0004_ip = 26; continue _fun0004;
case 24:
            var1 = var2.BLOCK;
case 26:
            _fun0004_ip = 27; continue _fun0004;
case 6:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            var1 = var2.BLUR;
case 27:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function getGoreContentSettingOrDefault(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            if(!(var5 == var6)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.GoreContentSettings;
            var1 = var2.getSetting;
            var6 = var1.bind(var2)();
case 28:
            var1 = {};
            var7 = _closure1_slot5;
            var3 = {};
            var9 = var5 == var6;
            var4 = undefined;
            var8 = undefined;
            if(var9) { _fun0005_ip = 30; continue _fun0005 }
case 21:
            var8 = var6.goreContentGuilds;
case 30:
            var3['setting'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['goreContentGuilds'] = var3;
            var7 = _closure1_slot5;
            var3 = {};
            var9 = var5 == var6;
            var8 = undefined;
            if(var9) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var8 = var6.goreContentNonFriendDm;
case 31:
            var3['setting'] = var8;
            var8 = true;
            var3['isDm'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['goreContentNonFriendDm'] = var3;
            var3 = _closure1_slot5;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var5 = var6.goreContentFriendDm;
case 33:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['goreContentFriendDm'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var7 = 6;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['resolveGoreSettingWithDefaults'] = var6;
    var3['resolveGoreSettingWithDefaultsForTeen'] = var5;
    var3['getGoreContentSettingOrDefault'] = var4;
    var4 = function(arg1) {
        var3 = _closure1_slot9;
        var1 = undefined;
        var6 = var3.bind(var1)();
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 5;
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
    var2 = function() {
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