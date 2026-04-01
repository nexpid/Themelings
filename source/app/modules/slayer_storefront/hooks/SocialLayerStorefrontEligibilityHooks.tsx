// app/modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var5 = function useUsersPlayingStorefrontEnabledGamesApplicationIds(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var9 = var2.userIds;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var6 = var4[var2];
            var2 = undefined;
            var8 = var3.bind(var2)(var6);
            var7 = var8.useStateFromStoresArray;
            var10 = _closure1_slot6;
            var6 = new Array(2);
            var6[0] = var10;
            var5 = _closure1_slot7;
            var6[1] = var5;
            var5 = new Array(1);
            var5[0] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot0;
                    var8 = undefined;
                    var7 = var3.bind(var8)(var2);
                    var3 = var7.bind(var8)();
                    var2 = var3.done;
                    var6 = null;
                    var5 = var3;
                    var4 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0005_ip = 36; continue _fun0005 }
case 5:
                    var12 = var5.value;
                    var10 = _closure1_slot8;
                    var11 = _closure1_slot6;
                    var2 = var11.getActivities;
                    var2 = var2.bind(var11)(var12);
                    var12 = var10.bind(var8)(var2);
                    var10 = var12.bind(var8)();
                    var2 = var10.done;
                    var11 = var10;
                    var10 = var3;
                    var3 = var10;
                    if(var2) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var14 = var11.value;
                    var2 = var14.application_id;
                    if(!(var6 != var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var15 = _closure1_slot7;
                    var13 = var15.getApplicationIdFromDetectableId;
                    var2 = var14.application_id;
                    var2 = var13.bind(var15)(var2);
                    var10 = var2;
                    if(!(var6 != var2)) { _fun0005_ip = 39; continue _fun0005 }
case 41:
                    var13 = var1.push;
                    var13 = var13.bind(var1)(var2);
                    var10 = var2;
case 39:
                    var15 = var12.bind(var8)();
                    var2 = var15.done;
                    var11 = var15;
                    var4 = var14;
                    var3 = var10;
                    if(!var2) { _fun0005_ip = 38; continue _fun0005 }
case 37:
                    var10 = var7.bind(var8)();
                    var2 = var10.done;
                    var5 = var10;
                    if(!var2) { _fun0005_ip = 5; continue _fun0005 }
case 36:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6, var1, var5);
            var1 = 8;
            var1 = var4[var1];
            var2 = var3.bind(var2)(var1);
            var1 = var2.useSlayerStorefrontDevApplicationIdOverride;
            var3 = var1.bind(var2)();
            var2 = null;
            var1 = var5;
            if(!(var2 != var3)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var2 = new Array(1);
            var11 = 0;
            var13 = var2;
            var12 = var5;
            var4 = arraySpread(var13, var12, var11);
            var2[3] = var3;
            var3 = 1;
            var3 = var4 + var3;
            var1 = var2;
case 42:
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot7;
        var3[1] = var1;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = new Array(0);
                var3 = _closure1_slot8;
                var4 = _closure1_slot3;
                var2 = var4.getRunningGames;
                var2 = var2.bind(var4)();
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var5 = null;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var2 = var4.value;
                var10 = var2.id;
                var9 = var3;
                if(!(var5 != var10)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var11 = _closure1_slot3;
                var10 = var11.isDetectionEnabled;
                var10 = var10.bind(var11)(var2);
                var9 = var3;
                if(!var10) { _fun0006_ip = 46; continue _fun0006 }
case 48:
                var11 = _closure1_slot7;
                var10 = var11.getApplicationIdFromDetectableId;
                var2 = var2.id;
                var2 = var10.bind(var11)(var2);
                var9 = var2;
                if(!(var5 != var2)) { _fun0006_ip = 46; continue _fun0006 }
case 49:
                var10 = var1.push;
                var10 = var10.bind(var1)(var2);
                var9 = var2;
case 46:
                var10 = var6.bind(var7)();
                var2 = var10.done;
                var3 = var9;
                var4 = var10;
                if(!var2) { _fun0006_ip = 45; continue _fun0006 }
case 44:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(arg1) {
        var2 = arg1;
        var6 = var2.userIds;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var7 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot7;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = new Array(0);
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var9 = undefined;
                var8 = var3.bind(var9)(var2);
                var3 = var8.bind(var9)();
                var2 = var3.done;
                var7 = null;
                var6 = 7;
                var5 = var3;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var13 = var5.value;
                var11 = _closure1_slot8;
                var12 = _closure1_slot2;
                var2 = var12.getUserOutbox;
                var12 = var2.bind(var12)(var13);
                var13 = var7 == var12;
                var2 = undefined;
                if(var13) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var2 = var12.entries;
case 52:
                if(!(var7 == var2)) { _fun0007_ip = 38; continue _fun0007 }
case 54:
                var2 = new Array(0);
case 38:
                var13 = var11.bind(var9)(var2);
                var11 = var13.bind(var9)();
                var2 = var11.done;
                var12 = var11;
                var11 = var3;
                var3 = var11;
                if(var2) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var15 = var12.value;
                var14 = var11;
                if(!(var7 != var15)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var16 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var16 = var16.bind(var9)(var2);
                var2 = var16.isGamingLikeEntry;
                var2 = var2.bind(var16)(var15);
                var14 = var11;
                if(!var2) { _fun0007_ip = 57; continue _fun0007 }
case 59:
                var17 = _closure1_slot7;
                var16 = var17.getApplicationIdFromDetectableId;
                var2 = var15.extra;
                var2 = var2.application_id;
                var2 = var16.bind(var17)(var2);
                var14 = var2;
                if(!(var7 != var2)) { _fun0007_ip = 57; continue _fun0007 }
case 22:
                var16 = var1.push;
                var16 = var16.bind(var1)(var2);
                var14 = var2;
case 57:
                var16 = var13.bind(var9)();
                var2 = var16.done;
                var11 = var14;
                var12 = var16;
                var4 = var15;
                var3 = var11;
                if(!var2) { _fun0007_ip = 56; continue _fun0007 }
case 55:
                var11 = var8.bind(var9)();
                var2 = var11.done;
                var5 = var11;
                if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 50:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds'] = var6;
    var6 = function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var7 = _closure1_slot4;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot7;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = new Array(0);
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var10 = undefined;
                var9 = var3.bind(var10)(var2);
                var3 = var9.bind(var10)();
                var2 = var3.done;
                var8 = null;
                var7 = var3;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                var13 = var7.value;
                var12 = _closure1_slot4;
                var2 = var12.getMutualGuilds;
                var14 = var2.bind(var12)(var13);
                var13 = var4;
                var12 = var3;
                if(!(var8 != var14)) { _fun0008_ip = 62; continue _fun0008 }
case 9:
                var2 = _closure1_slot8;
                var16 = var2.bind(var10)(var14);
                var17 = var16.bind(var10)();
                var2 = var17.done;
                var15 = var17;
                var14 = var3;
                var6 = var15;
                var5 = var16;
                var13 = var4;
                var12 = var14;
                if(var2) { _fun0008_ip = 62; continue _fun0008 }
case 56:
                var18 = var15.value;
                var17 = _closure1_slot7;
                var2 = var17.getStorefrontGuildIds;
                var19 = var2.bind(var17)();
                var17 = var19.has;
                var2 = var18.guild;
                var2 = var2.id;
                var2 = var17.bind(var19)(var2);
                if(!var2) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                var19 = _closure1_slot7;
                var17 = var19.getApplicationIdFromGuildId;
                var2 = var18.guild;
                var2 = var2.id;
                var2 = var17.bind(var19)(var2);
                var14 = var2;
                if(!(var8 != var2)) { _fun0008_ip = 63; continue _fun0008 }
case 65:
                var17 = var1.push;
                var17 = var17.bind(var1)(var2);
                var14 = var2;
case 63:
                var19 = var16.bind(var10)();
                var2 = var19.done;
                var15 = var19;
                var6 = var15;
                var5 = var16;
                var13 = var18;
                var12 = var14;
                if(!var2) { _fun0008_ip = 56; continue _fun0008 }
case 62:
                var14 = var9.bind(var10)();
                var2 = var14.done;
                var4 = var13;
                var3 = var12;
                var7 = var14;
                if(!var2) { _fun0008_ip = 61; continue _fun0008 }
case 60:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds'] = var6;
    var3['useUsersPlayingStorefrontEnabledGamesApplicationIds'] = var5;
    var5 = function useAreUsersPlayingStorefrontEnabledGames(arg1) {
        var1 = arg1;
        var1 = var1.userIds;
        var3 = _closure1_slot10;
        var2 = {};
        var2['userIds'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.length;
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var3['useAreUsersPlayingStorefrontEnabledGames'] = var5;
    var5 = function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot7;
        var2[1] = var1;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = new Array(0);
                var3 = _closure1_slot8;
                var5 = _closure1_slot3;
                var4 = var5.getGamesSeen;
                var2 = false;
                var2 = var4.bind(var5)(var2, var2);
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var5 = null;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                var2 = var4.value;
                var9 = var2.id;
                if(!(var5 != var9)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                var10 = _closure1_slot7;
                var9 = var10.getApplicationIdFromDetectableId;
                var2 = var2.id;
                var2 = var9.bind(var10)(var2);
                var3 = var2;
                if(!(var5 != var2)) { _fun0009_ip = 68; continue _fun0009 }
case 70:
                var9 = var1.push;
                var9 = var9.bind(var1)(var2);
                var3 = var2;
case 68:
                var9 = var6.bind(var7)();
                var2 = var9.done;
                var4 = var9;
                if(!var2) { _fun0009_ip = 67; continue _fun0009 }
case 66:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds'] = var5;
    var3['useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds'] = var4;
    var4 = function useIsCurrentUserPlayingSocialLayerStorefrontGames() {
        var2 = _closure1_slot11;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var2 = var1.length;
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var3['useIsCurrentUserPlayingSocialLayerStorefrontGames'] = var4;
    var2 = function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 6;
        var6 = var7[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getGuildIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var9.bind(var10)(var8, var6);
        var _closure2_slot0 = var6;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = new Array(0);
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                var9 = var3.value;
                var8 = _closure1_slot7;
                var2 = var8.getApplicationIdFromGuildId;
                var8 = var2.bind(var8)(var9);
                if(!(var4 != var8)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                var2 = var1.push;
                var2 = var2.bind(var1)(var8);
case 73:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0010_ip = 72; continue _fun0010 }
case 71:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds'] = var2;
    return var1;
})();