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
 0:
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
            if(var6) { _fun0001_ip = 75; continue _fun0001 }
 70:
            var1 = var11.id;
 75:
            var9 = var2.bind(var4)(var1);
            var2 = var8 == var11;
            var1 = null;
            if(var2) { _fun0001_ip = 292; continue _fun0001 }
 92:
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
            if(var13) { _fun0001_ip = 136; continue _fun0001 }
 131:
            var12 = var11.id;
 136:
            var4['teenId'] = var12;
            var13 = var8 == var9;
            var12 = undefined;
            if(var13) { _fun0001_ip = 156; continue _fun0001 }
 150:
            var12 = var9.explicitContentNonFriendDm;
 156:
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
            if(var12) { _fun0001_ip = 210; continue _fun0001 }
 205:
            var10 = var11.id;
 210:
            var4['teenId'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 230; continue _fun0001 }
 224:
            var8 = var9.explicitContentFriendDm;
 230:
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
 292:
            return var1;
        }
    };
    var3['useParentalControlledExplicitContentSettings'] = var4;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(var8) { _fun0002_ip = 75; continue _fun0002 }
 70:
            var2 = var4.id;
 75:
            var2 = var6.bind(var7)(var2);
            if(!(var1 != var4)) { _fun0002_ip = 306; continue _fun0002 }
 87:
            if(!(var1 == var2)) { _fun0002_ip = 93; continue _fun0002 }
 91:
            var2 = {};
 93:
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
            if(var7) { _fun0002_ip = 181; continue _fun0002 }
 141:
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
 181:
            var2['goreContentNonFriendDm'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var7 = var7.bind(var5)(var6);
            var6 = var7.isSetAndNotDefault;
            var6 = var6.bind(var7)(var4);
            if(var6) { _fun0002_ip = 262; continue _fun0002 }
 217:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.resolveGoreSettingWithDefaultsForTeen;
            var6 = {'isDm': true, 'isFriend': true};
            var4 = var7.bind(var8)(var6);
 262:
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
 306:
            return var1;
        }
    };
    var3['useParentalControlledGoreContentSettings'] = var4;
    var4 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(var9) { _fun0003_ip = 75; continue _fun0003 }
 70:
            var3 = var6.id;
 75:
            var3 = var5.bind(var8)(var3);
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var1)(var4);
            var5 = var4.ParentalControlledDefaultGuildsRestrictedV2;
            var4 = var5.useControlledSetting;
            var7 = var2 == var6;
            var1 = undefined;
            if(var7) { _fun0003_ip = 123; continue _fun0003 }
 118:
            var1 = var6.id;
 123:
            var1 = var4.bind(var5)(var1);
            if(!(var2 == var1)) { _fun0003_ip = 147; continue _fun0003 }
 132:
            var4 = !var3;
            var2 = !var4;
            if(!var4) { _fun0003_ip = 144; continue _fun0003 }
 141:
            var2 = var3;
 144:
            var1 = var2;
 147:
            return var1;
        }
    };
    var3['useDefaultGuildsRestricted'] = var4;
    var4 = function useAllowFriendsFromMutualGuildsOnlyForTeen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var7) { _fun0004_ip = 75; continue _fun0004 }
 70:
            var3 = var6.id;
 75:
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
            if(!var1) { _fun0004_ip = 132; continue _fun0004 }
 123:
            var2 = var2.all;
            var1 = !var2;
 132:
            return var1;
        }
    };
    var3['useAllowFriendsFromMutualGuildsOnlyForTeen'] = var4;
    var2 = function useIsParentallyControlled() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            if(var5) { _fun0005_ip = 123; continue _fun0005 }
 117:
            var4 = var1.nsfwAllowed;
 123:
            var1 = false;
            var1 = var1 === var4;
            if(!var1) { _fun0005_ip = 135; continue _fun0005 }
 132:
            var1 = var3;
 135:
            if(!var1) { _fun0005_ip = 141; continue _fun0005 }
 138:
            var1 = var2;
 141:
            return var1;
        }
    };
    var3['useIsParentallyControlled'] = var2;
    return var1;
})();