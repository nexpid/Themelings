// app/modules/connections/ConnectionsHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var4 = function usePlatformAllowed(arg1) {
        var2 = arg1;
        var2 = var2.forUserProfile;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 7;
        var6 = var5[var3];
        var3 = undefined;
        var8 = var4.bind(var3)(var6);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var7.bind(var8)(var6, var2);
        var _closure2_slot1 = var2;
        var2 = 8;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var5 = var2.PlayStationVoiceExperiment;
        var4 = var5.useExperiment;
        var3 = {};
        var2 = 'f2f7ef_1';
        var3['location'] = var2;
        var2 = {};
        var6 = false;
        var2['autoTrackExposure'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var2 = var2.allowPlayStationStaging;
        var _closure2_slot2 = var2;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var4 = var3.type;
                var2 = _closure1_slot8;
                var2 = var2.PLAYSTATION_STAGING;
                if(!(var4 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot1;
                var6 = undefined;
                var4 = var6 === var4;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure1_slot10;
                var1 = var3.type;
                var1 = var5[var1];
                var5 = null;
                var4 = var5 == var1;
                var6 = var1;
case 4:
                if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = var6.includes;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var5.bind(var6)(var1);
                var4 = !var1;
case 6:
                var1 = !var4;
                if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var2 = _closure2_slot0;
                var4 = !var2;
                var2 = !var4;
                if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var2 = var3.enabled;
case 10:
                var1 = var2;
case 8:
                _fun0001_ip = 12; continue _fun0001;
case 2:
                var1 = _closure2_slot2;
case 12:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot14 = var4;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var10 = 1;
    var9 = var7[var10];
    var8 = metroImportAll;
    var8 = var8.bind(var1)(var9);
    var _closure1_slot4 = var8;
    var12 = 2;
    var8 = var7[var12];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.ACTIVITY_PLATFORM_TYPES;
    var _closure1_slot7 = var9;
    var8 = var8.PlatformTypes;
    var _closure1_slot8 = var8;
    var9 = 5;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.KeyboardKeysUpdated;
    var _closure1_slot9 = var9;
    var9 = {};
    var14 = var8.INSTAGRAM;
    var13 = ['1036753656588017764'];
    var9[var14] = var13;
    var _closure1_slot10 = var9;
    var14 = var5.Map;
    var9 = var8.INSTAGRAM;
    var13 = new Array(2);
    var13[0] = var9;
    var17 = var5.Date;
    var9 = var17.prototype;
    var15 = Object.create(var9, {constructor: {value: var17}});
    var20 = 2023;
    var18 = 18;
    var21 = var15;
    var19 = var10;
    var9 = new var21[var17](var20, var19, var18, var17);
    var15 = var9 instanceof Object ? var9 : var15;
    var9 = var15.getTime;
    var9 = var9.bind(var15)();
    var13[1] = var9;
    var9 = new Array(1);
    var9[0] = var13;
    var13 = var14.prototype;
    var13 = Object.create(var13, {constructor: {value: var14}});
    var21 = var13;
    var20 = var9;
    var9 = new var21[var14](var20, var19);
    var9 = var9 instanceof Object ? var9 : var13;
    var _closure1_slot11 = var9;
    var9 = 6;
    var9 = var7[var9];
    var9 = var11.bind(var1)(var9);
    var9 = var9.Millis;
    var11 = var9.DAY;
    var9 = 30;
    var9 = var9 * var11;
    var _closure1_slot12 = var9;
    var9 = var5.Map;
    var5 = var8.PLAYSTATION;
    var11 = new Array(2);
    var11[0] = var5;
    var11[1] = var12;
    var5 = new Array(5);
    var5[0] = var11;
    var13 = var8.XBOX;
    var11 = new Array(2);
    var11[0] = var13;
    var11[1] = var12;
    var5[1] = var11;
    var12 = var8.SPOTIFY;
    var11 = new Array(2);
    var11[0] = var12;
    var11[1] = var10;
    var5[2] = var11;
    var12 = var8.STEAM;
    var11 = new Array(2);
    var11[0] = var12;
    var11[1] = var10;
    var5[3] = var11;
    var11 = var8.TWITCH;
    var8 = new Array(2);
    var8[0] = var11;
    var8[1] = var10;
    var5[4] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var21 = var8;
    var20 = var5;
    var5 = new var21[var9](var20, var19);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot13 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/connections/ConnectionsHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['usePlatformAllowed'] = var4;
    var4 = function usePlatforms() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 7;
        var2 = var5[var2];
        var6 = undefined;
        var7 = var4.bind(var6)(var2);
        var5 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getAccounts;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var5.bind(var7)(var4, var2);
        var _closure2_slot0 = var2;
        var5 = _closure1_slot14;
        var4 = {};
        var7 = false;
        var4['forUserProfile'] = var7;
        var5 = var5.bind(var6)(var4);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var6 = var4.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot0 = var1;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.add;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var6.bind(var4)(var2, var3);
        var _closure2_slot2 = var6;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var2 = undefined;
            var4 = var6.bind(var2)(var1);
            var3 = var4.sortBy;
            var1 = 10;
            var1 = var7[var1];
            var6 = var6.bind(var2)(var1);
            var2 = var6.filter;
            var1 = _closure2_slot1;
            var2 = var2.bind(var6)(var1);
            var1 = new Array(5);
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot11;
                    var3 = var5.has;
                    var1 = var4.type;
                    var1 = var3.bind(var5)(var1);
                    if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var6 = _closure1_slot11;
                    var5 = var6.get;
                    var4 = var4.type;
                    var5 = var5.bind(var6)(var4);
                    var4 = null;
                    var6 = var4 != var5;
                    var4 = 0;
                    if(!var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var4 = var5;
case 15:
                    var2 = _closure1_slot12;
                    var2 = var4 + var2;
                    var1 = var3 < var2;
case 13:
                    var1 = !var1;
                    return var1;
                }
            };
            var1[0] = var6;
            var6 = function(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1[1] = var6;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.hasMetadata;
                return var1;
            };
            var1[2] = var6;
            var6 = function(arg1) {
                var3 = _closure1_slot7;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var1[3] = var6;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.name;
                return var1;
            };
            var1[4] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePlatforms'] = var4;
    var4 = function useEmptyStatePlatforms() {
        var5 = _closure1_slot14;
        var4 = {};
        var3 = false;
        var4['forUserProfile'] = var3;
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var2 = undefined;
            var4 = var6.bind(var2)(var1);
            var3 = var4.sortBy;
            var1 = 10;
            var1 = var7[var1];
            var6 = var6.bind(var2)(var1);
            var2 = var6.filter;
            var1 = _closure2_slot0;
            var2 = var2.bind(var6)(var1);
            var1 = new Array(2);
            var6 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot13;
                    var2 = var3.get;
                    var1 = arg1;
                    var1 = var1.type;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = var1;
case 17:
                    var1 = -1;
                    var1 = var1 * var2;
                    return var1;
                }
            };
            var1[0] = var6;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.name;
                return var1;
            };
            var1[1] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useEmptyStatePlatforms'] = var4;
    var2 = function useLegacyPlatformType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = function handleKeyDown(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.key;
                    var1 = _closure1_slot9;
                    var1 = var1.SHIFT;
                    if(!(var2 === var1)) { _fun0005_ip = 5; continue _fun0005 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot1 = var2;
            var2 = function handleKeyUp(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.key;
                    var1 = _closure1_slot9;
                    var1 = var1.SHIFT;
                    if(!(var2 === var1)) { _fun0006_ip = 5; continue _fun0006 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot2 = var2;
            var7 = _closure1_slot4;
            var5 = var7.useState;
            var3 = false;
            var8 = var5.bind(var7)(var3);
            var6 = _closure1_slot3;
            var5 = undefined;
            var3 = 2;
            var6 = var6.bind(var5)(var8, var3);
            var3 = 0;
            var3 = var6[var3];
            var5 = 1;
            var5 = var6[var5];
            var _closure2_slot0 = var5;
            var6 = var7.useEffect;
            var5 = function() {
                var2 = global;
                var6 = var2.window;
                var5 = var6.addEventListener;
                var4 = _closure2_slot1;
                var3 = 'keydown';
                var3 = var5.bind(var6)(var3, var4);
                var4 = var2.window;
                var3 = var4.addEventListener;
                var2 = _closure2_slot2;
                var1 = 'keyup';
                var1 = var3.bind(var4)(var1, var2);
                var1 = function() {
                    var2 = global;
                    var6 = var2.window;
                    var5 = var6.removeEventListener;
                    var4 = _closure2_slot1;
                    var3 = 'keydown';
                    var3 = var5.bind(var6)(var3, var4);
                    var4 = var2.window;
                    var3 = var4.removeEventListener;
                    var2 = _closure2_slot2;
                    var1 = 'keyup';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var6.bind(var7)(var5, var1);
            var1 = var4;
            if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = _closure1_slot8;
            var3 = var3.TWITTER;
            var1 = var4;
            if(!(var1 === var3)) { _fun0004_ip = 19; continue _fun0004 }
case 2:
            var2 = _closure1_slot8;
            var1 = var2.TWITTER_LEGACY;
case 19:
            return var1;
        }
    };
    var3['useLegacyPlatformType'] = var2;
    return var1;
})();