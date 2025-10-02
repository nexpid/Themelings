// app/modules/parent_tools/hooks/useParentalControlSettings.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/hooks/useParentalControlSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var2.bind(var5)(var1);
            var1 = var6.useSelectedTeen;
            var11 = var1.bind(var6)();
            var1 = 3;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var4 = var1.ParentalControlledExplicitContent;
            var2 = var4.useControlledSetting;
            var8 = null;
            var6 = var8 == var11;
            var1 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var11.id;
case 2:
            var9 = var2.bind(var4)(var1);
            var2 = var8 == var11;
            var1 = null;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = {};
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var7 = 4;
            var4 = var4[var7];
            var10 = var6.bind(var5)(var4);
            var6 = var10.resolveExplicitContentSettingWithDefaultsForTeen;
            var4 = {};
            var13 = var8 == var11;
            var12 = undefined;
            if(var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var11.id;
case 6:
            var4['teenId'] = var12;
            var13 = var8 == var9;
            var12 = undefined;
            if(var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = var9.explicitContentNonFriendDm;
case 8:
            var4['setting'] = var12;
            var4 = var6.bind(var10)(var4);
            var2['explicitContentNonFriendDm'] = var4;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var7 = var6.bind(var5)(var4);
            var6 = var7.resolveExplicitContentSettingWithDefaultsForTeen;
            var4 = {};
            var12 = var8 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var11.id;
case 10:
            var4['teenId'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var9.explicitContentFriendDm;
case 12:
            var4['setting'] = var8;
            var8 = true;
            var4['isFriend'] = var8;
            var4 = var6.bind(var7)(var4);
            var2['explicitContentFriendDm'] = var4;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.BLUR;
            var2['explicitContentGuilds'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useParentalControlledExplicitContentSettings'] = var4;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var1 = var4.useSelectedTeen;
            var4 = var1.bind(var4)();
            var1 = 3;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var7 = var1.ParentalControlledGoreContent;
            var6 = var7.useControlledSetting;
            var1 = null;
            var8 = var1 == var4;
            var2 = undefined;
            if(var8) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = var4.id;
case 2:
            var2 = var6.bind(var7)(var2);
            if(!(var1 != var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            if(!(var1 == var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = {};
case 16:
            var6 = var2.goreContentNonFriendDm;
            var4 = var2.goreContentFriendDm;
            var2 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot1;
            var8 = 4;
            var7 = var7[var8];
            var9 = var9.bind(var5)(var7);
            var7 = var9.isSetAndNotDefault;
            var7 = var7.bind(var9)(var6);
            if(var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 6;
            var7 = var10[var7];
            var10 = var9.bind(var5)(var7);
            var9 = var10.resolveGoreSettingWithDefaultsForTeen;
            var7 = {};
            var11 = true;
            var7['isDm'] = var11;
            var6 = var9.bind(var10)(var7);
case 18:
            var2['goreContentNonFriendDm'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var7 = var7.bind(var5)(var6);
            var6 = var7.isSetAndNotDefault;
            var6 = var6.bind(var7)(var4);
            if(var6) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.resolveGoreSettingWithDefaultsForTeen;
            var6 = {'isDm': true, 'isFriend': true};
            var4 = var7.bind(var8)(var6);
case 20:
            var2['goreContentFriendDm'] = var4;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.BLUR;
            var2['goreContentGuilds'] = var3;
            return var2;
case 14:
            return var1;
        }
    };
    var3['useParentalControlledGoreContentSettings'] = var4;
    var4 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var5 = var2[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var5);
            var5 = var6.useSelectedTeen;
            var6 = var5.bind(var6)();
            var7 = 3;
            var2 = var2[var7];
            var2 = var3.bind(var1)(var2);
            var8 = var2.ParentalControlledDefaultGuildsRestricted;
            var5 = var8.useControlledSetting;
            var2 = null;
            var9 = var2 == var6;
            var3 = undefined;
            if(var9) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var3 = var6.id;
case 2:
            var3 = var5.bind(var8)(var3);
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var1)(var4);
            var5 = var4.ParentalControlledDefaultGuildsRestrictedV2;
            var4 = var5.useControlledSetting;
            var7 = var2 == var6;
            var1 = undefined;
            if(var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = var6.id;
case 22:
            var1 = var4.bind(var5)(var1);
            if(!(var2 == var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = !var3;
            var2 = !var4;
            if(!var4) { _fun0003_ip = 26; continue _fun0003 }
case 19:
            var2 = var3;
case 26:
            var1 = var2;
case 24:
            return var1;
        }
    };
    var3['useDefaultGuildsRestricted'] = var4;
    var4 = function useAllowFriendsFromMutualGuildsOnlyForTeen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var4 = var7[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var4 = var6.useSelectedTeen;
            var6 = var4.bind(var6)();
            var4 = 3;
            var4 = var7[var4];
            var4 = var5.bind(var3)(var4);
            var5 = var4.ParentalControlledFriendSourceFlags;
            var4 = var5.useControlledSetting;
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var3 = var6.id;
case 2:
            var5 = var4.bind(var5)(var3);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.computeFlags;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var1, var2);
            var1 = var2.mutualGuilds;
            if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 22:
            var2 = var2.all;
            var1 = !var2;
case 25:
            return var1;
        }
    };
    var3['useAllowFriendsFromMutualGuildsOnlyForTeen'] = var4;
    var2 = function useIsParentallyControlled() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 8;
            var2 = var6[var2];
            var4 = undefined;
            var7 = var5.bind(var4)(var2);
            var3 = var7.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var7)(var2, var1);
            var2 = 9;
            var2 = var6[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useHasActiveLinks;
            var3 = var2.bind(var3)();
            var2 = 10;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.useIsFamilyCenterV2Enabled;
            var2 = 'settings-controls';
            var2 = var5.bind(var6)(var2);
            var5 = null;
            var5 = var5 == var1;
            if(var5) { _fun0005_ip = 22; continue _fun0005 }
case 27:
            var4 = var1.nsfwAllowed;
case 22:
            var1 = false;
            var1 = var1 === var4;
            if(!var1) { _fun0005_ip = 28; continue _fun0005 }
case 25:
            var1 = var3;
case 28:
            if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 29:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var3['useIsParentallyControlled'] = var2;
    return var1;
})();