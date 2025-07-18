// app/modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var8[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.ExplicitContentFilterTypes;
    var4 = {};
    var9 = var6.DISABLED;
    var5 = var9.valueOf;
    var10 = var5.bind(var9)();
    var5 = 2;
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.SHOW;
    var4[var10] = var9;
    var10 = var6.NON_FRIENDS;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.SHOW;
    var4[var10] = var9;
    var10 = var6.FRIENDS_AND_NON_FRIENDS;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLOCK;
    var4[var10] = var9;
    var _closure1_slot3 = var4;
    var4 = {};
    var10 = var6.DISABLED;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.SHOW;
    var4[var10] = var9;
    var10 = var6.NON_FRIENDS;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLOCK;
    var4[var10] = var9;
    var10 = var6.FRIENDS_AND_NON_FRIENDS;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLOCK;
    var4[var10] = var9;
    var _closure1_slot4 = var4;
    var4 = {};
    var10 = var6.DISABLED;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLUR;
    var4[var10] = var9;
    var10 = var6.NON_FRIENDS;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLUR;
    var4[var10] = var9;
    var10 = var6.FRIENDS_AND_NON_FRIENDS;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLOCK;
    var4[var10] = var9;
    var _closure1_slot5 = var4;
    var4 = {};
    var10 = var6.DISABLED;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLUR;
    var4[var10] = var9;
    var10 = var6.NON_FRIENDS;
    var9 = var10.valueOf;
    var10 = var9.bind(var10)();
    var9 = var8[var5];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ExplicitContentRedaction;
    var9 = var9.BLOCK;
    var4[var10] = var9;
    var9 = var6.FRIENDS_AND_NON_FRIENDS;
    var6 = var9.valueOf;
    var6 = var6.bind(var9)();
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.ExplicitContentRedaction;
    var5 = var5.BLOCK;
    var4[var6] = var5;
    var _closure1_slot6 = var4;
    var5 = function resolveExplicitContentSettingWithDefaults(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.setting;
            var7 = var2.isDm;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var7 = false;
 23:
            var6 = var2.isFriend;
            if(!(var6 === var5)) { _fun0001_ip = 35; continue _fun0001 }
 33:
            var6 = false;
 35:
            var4 = null;
            if(!(var4 != var1)) { _fun0001_ip = 83; continue _fun0001 }
 41:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.UNSET_EXPLICIT_CONTENT_REDACTION;
            if(!(var1 === var2)) { _fun0001_ip = 297; continue _fun0001 }
 83:
            var8 = _closure1_slot2;
            var2 = var8.getCurrentUser;
            var2 = var2.bind(var8)();
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var11 = 3;
            var8 = var8[var11];
            var9 = var9.bind(var5)(var8);
            var8 = var9.isEligibleForSensitiveContentDefaultsMixed;
            var10 = 'resolveSettingWithDefaults';
            var8 = var8.bind(var9)(var10);
            if(var8) { _fun0001_ip = 274; continue _fun0001 }
 142:
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var11];
            var9 = var9.bind(var5)(var8);
            var8 = var9.isEligibleForSensitiveContentDefaultsAllBlur;
            var8 = var8.bind(var9)(var10);
            if(var8) { _fun0001_ip = 240; continue _fun0001 }
 173:
            var8 = var4 == var2;
            var4 = undefined;
            if(var8) { _fun0001_ip = 188; continue _fun0001 }
 182:
            var4 = var2.nsfwAllowed;
 188:
            var2 = false;
            if(!(var2 !== var4)) { _fun0001_ip = 217; continue _fun0001 }
 194:
            var4 = _closure1_slot8;
            var2 = {};
            var2['isDm'] = var7;
            var2['isFriend'] = var6;
            var2 = var4.bind(var5)(var2);
            _fun0001_ip = 238; continue _fun0001;
 217:
            var8 = _closure1_slot9;
            var4 = {};
            var4['isDm'] = var7;
            var4['isFriend'] = var6;
            var2 = var8.bind(var5)(var4);
 238:
            _fun0001_ip = 272; continue _fun0001;
 240:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 2;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.ExplicitContentRedaction;
            var2 = var4.BLUR;
 272:
            _fun0001_ip = 295; continue _fun0001;
 274:
            var4 = _closure1_slot10;
            var3 = {};
            var3['isDm'] = var7;
            var3['isFriend'] = var6;
            var2 = var4.bind(var5)(var3);
 295:
            return var2;
 297:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function resolveSettingWithDefaultsForAdult(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.isDm;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0002_ip = 17; continue _fun0002 }
 15:
            var3 = false;
 17:
            var1 = var1.isFriend;
            if(!(var1 === var5)) { _fun0002_ip = 29; continue _fun0002 }
 27:
            var1 = false;
 29:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            if(var3) { _fun0002_ip = 69; continue _fun0002 }
 43:
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.SHOW;
            return var3;
 69:
            var3 = 4;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.ExplicitContentFilter;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            if(var1) { _fun0002_ip = 110; continue _fun0002 }
 100:
            var1 = _closure1_slot4;
            var1 = var1[var3];
            _fun0002_ip = 118; continue _fun0002;
 110:
            var2 = _closure1_slot3;
            var1 = var2[var3];
 118:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function resolveSettingWithDefaultsForTeen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.isDm;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0003_ip = 17; continue _fun0003 }
 15:
            var3 = false;
 17:
            var1 = var1.isFriend;
            if(!(var1 === var5)) { _fun0003_ip = 29; continue _fun0003 }
 27:
            var1 = false;
 29:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            if(var3) { _fun0003_ip = 69; continue _fun0003 }
 43:
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.BLUR;
            return var3;
 69:
            var3 = 4;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.ExplicitContentFilter;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            if(var1) { _fun0003_ip = 110; continue _fun0003 }
 100:
            var1 = _closure1_slot6;
            var1 = var1[var3];
            _fun0003_ip = 118; continue _fun0003;
 110:
            var2 = _closure1_slot5;
            var1 = var2[var3];
 118:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function resultDefaultSettingsForSensitiveContentDefaultsMixed(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.isDm;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0004_ip = 17; continue _fun0004 }
 15:
            var2 = false;
 17:
            var1 = var1.isFriend;
            if(!(var1 === var4)) { _fun0004_ip = 29; continue _fun0004 }
 27:
            var1 = false;
 29:
            if(!var2) { _fun0004_ip = 72; continue _fun0004 }
 32:
            if(var1) { _fun0004_ip = 72; continue _fun0004 }
 35:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ExplicitContentRedaction;
            var1 = var1.BLOCK;
            _fun0004_ip = 107; continue _fun0004;
 72:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            var1 = var2.BLUR;
 107:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = function getExplicitContentSettingOrDefault(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var5 = null;
            if(!(var5 == var6)) { _fun0005_ip = 50; continue _fun0005 }
 9:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.ExplicitContentSettings;
            var1 = var2.getSetting;
            var6 = var1.bind(var2)();
 50:
            var1 = {};
            var7 = _closure1_slot7;
            var3 = {};
            var9 = var5 == var6;
            var4 = undefined;
            var8 = undefined;
            if(var9) { _fun0005_ip = 78; continue _fun0005 }
 72:
            var8 = var6.explicitContentGuilds;
 78:
            var3['setting'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['explicitContentGuilds'] = var3;
            var7 = _closure1_slot7;
            var3 = {};
            var9 = var5 == var6;
            var8 = undefined;
            if(var9) { _fun0005_ip = 114; continue _fun0005 }
 108:
            var8 = var6.explicitContentNonFriendDm;
 114:
            var3['setting'] = var8;
            var8 = true;
            var3['isDm'] = var8;
            var3 = var7.bind(var4)(var3);
            var1['explicitContentNonFriendDm'] = var3;
            var3 = _closure1_slot7;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0005_ip = 165; continue _fun0005 }
 159:
            var5 = var6.explicitContentFriendDm;
 165:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['explicitContentFriendDm'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['resolveExplicitContentSettingWithDefaults'] = var5;
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
 0:
            var3 = _closure1_slot2;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0006_ip = 71; continue _fun0006 }
 22:
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
 71:
            var1 = false;
            return var1;
        }
    };
    var3['shouldRedactMessageMediaForForum'] = var2;
    return var1;
})();