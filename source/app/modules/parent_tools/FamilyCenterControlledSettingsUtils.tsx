// app/modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var7 = function isSetAndNotDefault(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 52; continue _fun0001 }
 12:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.UNSET_EXPLICIT_CONTENT_REDACTION;
            var1 = var3 !== var2;
 52:
            return var1;
        }
    };
    var _closure1_slot2 = var7;
    var6 = function getGoreContentSettingOrDefault(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var5 = var1.ParentalControlledGoreContent;
            var3 = var5.getControlledSetting;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 53; continue _fun0002 }
 51:
            var1 = {};
 53:
            var5 = var1.goreContentNonFriendDm;
            var3 = var1.goreContentFriendDm;
            var1 = {};
            var6 = _closure1_slot2;
            var6 = var6.bind(var4)(var5);
            if(var6) { _fun0002_ip = 119; continue _fun0002 }
 79:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 2;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.resolveGoreSettingWithDefaultsForTeen;
            var6 = {};
            var9 = true;
            var6['isDm'] = var9;
            var5 = var7.bind(var8)(var6);
 119:
            var1['goreContentNonFriendDm'] = var5;
            var5 = _closure1_slot2;
            var5 = var5.bind(var4)(var3);
            if(var5) { _fun0002_ip = 181; continue _fun0002 }
 136:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 2;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.resolveGoreSettingWithDefaultsForTeen;
            var5 = {'isDm': true, 'isFriend': true};
            var3 = var6.bind(var7)(var5);
 181:
            var1['goreContentFriendDm'] = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.BLUR;
            var1['goreContentGuilds'] = var2;
            return var1;
        }
    };
    var _closure1_slot3 = var6;
    var5 = function resolveExplicitContentSettingWithDefaultsForTeen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var7 = var2.teenId;
            var1 = var2.setting;
            var2 = var2.isFriend;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0003_ip = 29; continue _fun0003 }
 27:
            var2 = false;
 29:
            var4 = _closure1_slot2;
            var4 = var4.bind(var6)(var1);
            if(var4) { _fun0003_ip = 128; continue _fun0003 }
 44:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 1;
            var4 = var8[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.ParentalControlledLegacyExplicitContent;
            var4 = var5.getControlledSetting;
            var4 = var4.bind(var5)(var7);
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            if(var2) { _fun0003_ip = 116; continue _fun0003 }
 104:
            var2 = var3.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM;
            var2 = var2[var4];
            _fun0003_ip = 126; continue _fun0003;
 116:
            var3 = var3.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM;
            var2 = var3[var4];
 126:
            return var2;
 128:
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function getExplicitContentSettingOrDefault(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.ParentalControlledExplicitContent;
            var1 = var3.getControlledSetting;
            var7 = var1.bind(var3)(var8);
            var1 = {};
            var5 = _closure1_slot4;
            var3 = {};
            var3['teenId'] = var8;
            var6 = null;
            var10 = var6 == var7;
            var9 = undefined;
            if(var10) { _fun0004_ip = 75; continue _fun0004 }
 69:
            var9 = var7.explicitContentNonFriendDm;
 75:
            var3['setting'] = var9;
            var3 = var5.bind(var4)(var3);
            var1['explicitContentNonFriendDm'] = var3;
            var5 = _closure1_slot4;
            var3 = {};
            var3['teenId'] = var8;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0004_ip = 116; continue _fun0004 }
 110:
            var6 = var7.explicitContentFriendDm;
 116:
            var3['setting'] = var6;
            var6 = true;
            var3['isFriend'] = var6;
            var3 = var5.bind(var4)(var3);
            var1['explicitContentFriendDm'] = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.BLUR;
            var1['explicitContentGuilds'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = 4;
    var8 = var8[var1];
    var1 = undefined;
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['isSetAndNotDefault'] = var7;
    var3['getGoreContentSettingOrDefault'] = var6;
    var6 = function(arg1, arg2) {
        var5 = arg1;
        var3 = _closure1_slot3;
        var1 = undefined;
        var7 = var3.bind(var1)(var5);
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 1;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.ParentalControlledGoreContent;
        var3 = var4.updateControlledSetting;
        var2 = {};
        var8 = var2;
        var6 = copyDataProperties(var8, var7);
        var7 = arg2;
        var8 = var2;
        var6 = copyDataProperties(var8, var7);
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var3['updateGoreContentSetting'] = var6;
    var3['resolveExplicitContentSettingWithDefaultsForTeen'] = var5;
    var3['getExplicitContentSettingOrDefault'] = var4;
    var2 = function(arg1, arg2) {
        var5 = arg1;
        var3 = _closure1_slot5;
        var1 = undefined;
        var7 = var3.bind(var1)(var5);
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 1;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.ParentalControlledExplicitContent;
        var3 = var4.updateControlledSetting;
        var2 = {};
        var8 = var2;
        var6 = copyDataProperties(var8, var7);
        var7 = arg2;
        var8 = var2;
        var6 = copyDataProperties(var8, var7);
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var3['updateExplicitContentSetting'] = var2;
    return var1;
})();