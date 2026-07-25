// app/modules/dismissible_content/useGetDismissibleContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function useGetVisibleContent(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var12 = arg3;
            var9 = arg4;
            var7 = arg5;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var12;
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var7;
            var5 = _closure1_slot7;
            var13 = undefined;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = arg1;
                    var4 = var3.currentlyShown;
                    var3 = var4.has;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var3 = var5.bind(var13)(var3);
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 9;
            var5 = var14[var5];
            var8 = var11.bind(var13)(var5);
            var5 = var8.useAnyOverlayRenderingLocked;
            var10 = var5.bind(var8)();
            var _closure2_slot5 = var10;
            var5 = 10;
            var8 = var14[var5];
            var17 = var11.bind(var13)(var8);
            var16 = var17.useStateFromStores;
            var15 = new Array(0);
            var8 = function() {
                var1 = undefined;
                return var1;
            };
            var8 = var16.bind(var17)(var15, var8);
            var _closure2_slot6 = var8;
            var5 = var14[var5];
            var14 = var11.bind(var13)(var5);
            var13 = var14.useStateFromStores;
            var5 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                    var5 = _closure1_slot6;
                    var4 = var5.hasUserHitDCCap;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var11 = var13.bind(var14)(var11, var5);
            var13 = _closure1_slot3;
            var5 = var13.useRef;
            var5 = var5.bind(var13)(var6);
            var _closure2_slot7 = var5;
            var5['current'] = var6;
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var4 = new Array(7);
            var4[0] = var2;
            var4[1] = var12;
            var4[2] = var11;
            var4[3] = var10;
            var4[4] = var9;
            var4[5] = var8;
            var4[6] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0004_ip = 5; continue _fun0004 }
case 6:
                    var2 = undefined;
                    return var2;
case 5:
                    var5 = _closure1_slot4;
                    var4 = var5.hasLoaded;
                    var3 = _closure1_slot10;
                    var3 = var3.PRELOADED_USER_SETTINGS;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var13 = _closure2_slot0;
                    var3 = _closure2_slot7;
                    var10 = var3.current;
                    var12 = _closure2_slot2;
                    var11 = _closure2_slot3;
                    var8 = _closure2_slot4;
                    var4 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var3 = 7;
                    var3 = var16[var3];
                    var15 = undefined;
                    var6 = var4.bind(var15)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot9;
                    var4 = var3.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN;
                    var3 = {};
                    var14 = _closure1_slot0;
                    var9 = 8;
                    var9 = var16[var9];
                    var9 = var14.bind(var15)(var9);
                    var9 = var9.DismissibleContent;
                    var9 = var9[var13];
                    var3['content_type'] = var9;
                    var13 = var7 != var12;
                    var9 = null;
                    if(!var13) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var9 = var12;
case 9:
                    var3['group_name'] = var9;
                    var12 = var7 != var11;
                    var9 = null;
                    if(!var12) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var9 = var11;
case 11:
                    var3['latest_version'] = var9;
                    var11 = var7 != var10;
                    var9 = null;
                    if(!var11) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var9 = var10;
case 13:
                    var3['guild_id'] = var9;
                    var9 = var7 != var8;
                    var7 = null;
                    if(!var9) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var7 = var8;
case 15:
                    var3['snowflake_id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.requestMarkDismissibleContentAsShown;
                    var20 = _closure2_slot0;
                    var3 = {};
                    var2 = _closure2_slot2;
                    var3['groupName'] = var2;
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    var3['guildId'] = var2;
                    var2 = _closure2_slot3;
                    var3['version'] = var2;
                    var2 = _closure2_slot4;
                    var3['snowflakeId'] = var2;
                    var18 = _closure2_slot5;
                    var17 = _closure2_slot6;
                    var21 = var6;
                    var19 = var3;
                    var1 = var21[var5](var20, var19, var18, var17, var16);
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure2_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 17; continue _fun0005 }
case 6:
                            var4 = _closure1_slot6;
                            var3 = var4.hasUserHitDCCap;
                            var3 = var3.bind(var4)();
                            var4 = !var3;
                            var3 = _closure1_slot8;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var2['content'] = var5;
                            var1 = _closure2_slot2;
                            var2['groupName'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2, var4);
case 17:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var4 = null;
            var1 = null;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function useGetRecurringDismissibleContentState(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                var1 = null;
                if(!(var1 !== var3)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var3 = _closure1_slot4;
                var3 = var3.settings;
                var5 = var3.userContent;
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0006_ip = 23; continue _fun0006 }
case 4:
                var5 = var5.recurringDismissibleContentStates;
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var4 = _closure2_slot0;
                var3 = var5[var4];
case 23:
                var1 = var3;
case 21:
                if(!(var2 == var1)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                var1 = _closure1_slot11;
case 25:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function canShowTimeRecurringContent(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var10 = arg3;
            var1 = arg4;
            var6 = null;
            var4 = var6 != var7;
            var2 = undefined;
            var3 = undefined;
            if(!var4) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var5 = global;
            var11 = var5.Number;
            var9 = var11.isNaN;
            var4 = var5.Number;
            var4 = var4.bind(var2)(var7);
            var9 = var9.bind(var11)(var4);
            var4 = undefined;
            if(var9) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var5 = var5.Number;
            var4 = var5.bind(var2)(var7);
case 29:
            var3 = var4;
case 27:
            var11 = 0;
            var5 = 0;
            if(!(var2 !== var3)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var2 = var1.cooldownDurationMs;
            var5 = var3 + var2;
case 31:
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var4 = var2.bind(var4)();
            var2 = var1.showAfterTimestamp;
            var7 = var6 == var2;
            if(var7) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var2 = var1.showAfterTimestamp;
            var2 = var4 >= var2;
            if(!var2) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var9 = var6 != var3;
            var12 = 0;
            if(!var9) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var12 = var3;
case 37:
            var9 = var1.showAfterTimestamp;
            var2 = var12 <= var9;
case 35:
            var7 = var2;
case 33:
            var2 = var1.numTimesToRecur;
            var2 = var6 == var2;
            if(var2) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var9 = var1.numTimesToRecur;
            var2 = var11 === var9;
case 39:
            if(var2) { _fun0007_ip = 41; continue _fun0007 }
case 42:
            var2 = var6 == var10;
case 41:
            if(var2) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var1 = var1.numTimesToRecur;
            var2 = var10 < var1;
case 43:
            var11 = _closure1_slot4;
            var9 = var11.hasLoaded;
            var1 = _closure1_slot10;
            var1 = var1.PRELOADED_USER_SETTINGS;
            var1 = var9.bind(var11)(var1);
            if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var9 = var6 != var3;
            if(!var9) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var9 = var6 != var10;
case 47:
            var1 = var9;
case 45:
            if(!var1) { _fun0007_ip = 19; continue _fun0007 }
case 49:
            var1 = var8;
case 19:
            if(!var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var1 = var7;
case 50:
            if(!var1) { _fun0007_ip = 52; continue _fun0007 }
case 20:
            var3 = var6 == var3;
            if(var3) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var3 = var4 >= var5;
case 53:
            var1 = var3;
case 52:
            if(!var1) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var1 = var2;
case 55:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.removeCandidateContent;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsTypes;
    var _closure1_slot10 = var4;
    var4 = {};
    var _closure1_slot11 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/useGetDismissibleContent.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGetDismissibleContent(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg2;
            var _closure2_slot0 = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 10;
            var1 = var9[var5];
            var4 = undefined;
            var11 = var8.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure1_slot4;
                    var1 = var1.settings;
                    var2 = var1.userContent;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var1 = var2.dismissedContents;
case 57:
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var6, var1);
            var _closure2_slot1 = var1;
            var5 = var9[var5];
            var11 = var8.bind(var4)(var5);
            var10 = var11.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var10.bind(var11)(var6, var5);
            var _closure2_slot2 = var6;
            var5 = 12;
            var5 = var9[var5];
            var9 = var8.bind(var4)(var5);
            var8 = var9.useNewUserDismissibleContent;
            var5 = arg1;
            var9 = var8.bind(var9)(var5);
            var8 = null;
            var _closure2_slot3 = var8;
            var11 = _closure1_slot4;
            var10 = var11.hasLoaded;
            var5 = _closure1_slot10;
            var5 = var5.PRELOADED_USER_SETTINGS;
            var5 = var10.bind(var11)(var5);
            if(var5) { _fun0008_ip = 16; continue _fun0008 }
case 59:
            var1 = var8 != var1;
            var8 = null;
            if(!var1) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var5 = var9.find;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.hasBit;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            };
            var1 = var5.bind(var9)(var1);
            _closure2_slot3 = var1;
            var8 = var1;
            _fun0008_ip = 60; continue _fun0008;
case 16:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0010_ip = 62; continue _fun0010 }
case 3:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.hasBit;
                    var3 = _closure2_slot1;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
case 62:
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var1);
            _closure2_slot3 = var1;
            var8 = var1;
case 60:
            var1 = _closure1_slot12;
            var4 = var1.bind(var4)(var8, var6, var7);
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0011_ip = 63; continue _fun0011 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = _closure2_slot3;
                    var1 = {};
                    var6 = arg1;
                    var1['dismissAction'] = var6;
                    var6 = _closure2_slot0;
                    var1['groupName'] = var6;
                    var5 = _closure2_slot2;
                    var1['guildId'] = var5;
                    var5 = arg2;
                    var1['forceTrack'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetDismissibleContent'] = var4;
    var4 = function useGetVersionedDismissibleContent(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var8;
            var1 = _closure1_slot13;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var10 = var1.lastDismissedVersion;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var11 = var7.bind(var4)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var11)(var7, var1);
            var _closure2_slot2 = var7;
            var11 = null;
            var _closure2_slot3 = var11;
            var1 = var11 != var5;
            var9 = null;
            if(!var1) { _fun0012_ip = 64; continue _fun0012 }
case 65:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 12;
            var1 = var13[var1];
            var12 = var12.bind(var4)(var1);
            var1 = var12.disableNewUserDismissibleContent;
            var1 = var1.bind(var12)(var5);
            var12 = !var1;
            var14 = _closure1_slot4;
            var13 = var14.hasLoaded;
            var1 = _closure1_slot10;
            var1 = var1.PRELOADED_USER_SETTINGS;
            var1 = var13.bind(var14)(var1);
            if(var1) { _fun0012_ip = 66; continue _fun0012 }
case 40:
            var1 = var11 != var10;
            var9 = null;
            if(!var1) { _fun0012_ip = 64; continue _fun0012 }
case 67:
            var1 = null;
            if(!var12) { _fun0012_ip = 68; continue _fun0012 }
case 69:
            var13 = var10 < var6;
            var1 = null;
            if(!var13) { _fun0012_ip = 68; continue _fun0012 }
case 70:
            var1 = var5;
case 68:
            _closure2_slot3 = var1;
            var9 = var1;
            _fun0012_ip = 64; continue _fun0012;
case 66:
            var1 = null;
            if(!var12) { _fun0012_ip = 71; continue _fun0012 }
case 72:
            if(!(var11 != var10)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
            var10 = var10 < var6;
            var1 = null;
            if(!var10) { _fun0012_ip = 71; continue _fun0012 }
case 73:
            var1 = var5;
case 71:
            _closure2_slot3 = var1;
            var9 = var1;
case 64:
            var1 = _closure1_slot12;
            var19 = undefined;
            var18 = var9;
            var17 = var7;
            var16 = var8;
            var15 = var6;
            var4 = var19[var1](var18, var17, var16, var15, var14);
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 75; continue _fun0013 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.markVersionedDismissibleContentAsDismissed;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var7 = arg1;
                    var1['dismissAction'] = var7;
                    var7 = _closure2_slot1;
                    var1['groupName'] = var7;
                    var6 = _closure2_slot2;
                    var1['guildId'] = var6;
                    var6 = arg2;
                    var1['forceTrack'] = var6;
                    var1['version'] = var2;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetVersionedDismissibleContent'] = var4;
    var4 = function useGetTimeRecurringDismissibleContent(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var5 = arg1;
            var7 = arg3;
            var _closure2_slot0 = var7;
            var1 = _closure1_slot13;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var13 = var1.lastDismissedAtMs;
            var12 = var1.numTimesDismissed;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var9 = var6.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var8.bind(var9)(var6, var1);
            var _closure2_slot1 = var6;
            var1 = null;
            var _closure2_slot2 = var1;
            var9 = var1 != var5;
            var8 = null;
            if(!var9) { _fun0014_ip = 11; continue _fun0014 }
case 76:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 12;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.disableNewUserDismissibleContent;
            var9 = var9.bind(var10)(var5);
            var17 = !var9;
            var10 = _closure1_slot14;
            var14 = arg2;
            var18 = undefined;
            var16 = var13;
            var15 = var12;
            var9 = var18[var10](var17, var16, var15, var14, var13);
            var1 = null;
            if(!var9) { _fun0014_ip = 77; continue _fun0014 }
case 78:
            var1 = var5;
case 77:
            _closure2_slot2 = var1;
            var8 = var1;
case 11:
            var1 = _closure1_slot12;
            var4 = var1.bind(var4)(var8, var6, var7);
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0015_ip = 63; continue _fun0015 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.markTimeRecurringDismissibleContentAsDismissed;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = arg1;
                    var1['dismissAction'] = var6;
                    var6 = _closure2_slot0;
                    var1['groupName'] = var6;
                    var5 = _closure2_slot1;
                    var1['guildId'] = var5;
                    var5 = arg2;
                    var1['forceTrack'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetTimeRecurringDismissibleContent'] = var4;
    var4 = function useGetSnowflakeBoundDismissibleContent(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var8;
            var1 = _closure1_slot13;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var13 = var1.lastDismissedObjectId;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var10 = var7.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var10)(var7, var1);
            var _closure2_slot2 = var7;
            var12 = null;
            var _closure2_slot3 = var12;
            var1 = var12 != var5;
            var9 = null;
            if(!var1) { _fun0016_ip = 79; continue _fun0016 }
case 65:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 12;
            var1 = var11[var1];
            var10 = var10.bind(var4)(var1);
            var1 = var10.disableNewUserDismissibleContent;
            var1 = var1.bind(var10)(var5);
            var10 = !var1;
            var14 = _closure1_slot4;
            var11 = var14.hasLoaded;
            var1 = _closure1_slot10;
            var1 = var1.PRELOADED_USER_SETTINGS;
            var1 = var11.bind(var14)(var1);
            if(var1) { _fun0016_ip = 80; continue _fun0016 }
case 40:
            var1 = var12 != var13;
            var9 = null;
            if(!var1) { _fun0016_ip = 79; continue _fun0016 }
case 67:
            var1 = null;
            if(!var10) { _fun0016_ip = 81; continue _fun0016 }
case 69:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 15;
            var11 = var15[var11];
            var14 = var14.bind(var4)(var11);
            var11 = var14.compare;
            var14 = var11.bind(var14)(var6, var13);
            var11 = 1;
            var1 = null;
            if(!(var11 === var14)) { _fun0016_ip = 81; continue _fun0016 }
case 82:
            var1 = var5;
case 81:
            _closure2_slot3 = var1;
            var9 = var1;
            _fun0016_ip = 79; continue _fun0016;
case 80:
            var1 = null;
            if(!var10) { _fun0016_ip = 83; continue _fun0016 }
case 47:
            if(!(var12 != var13)) { _fun0016_ip = 84; continue _fun0016 }
case 85:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 15;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.compare;
            var11 = var10.bind(var11)(var6, var13);
            var10 = 1;
            var1 = null;
            if(!(var10 === var11)) { _fun0016_ip = 83; continue _fun0016 }
case 84:
            var1 = var5;
case 83:
            _closure2_slot3 = var1;
            var9 = var1;
case 79:
            var1 = _closure1_slot12;
            var21 = undefined;
            var20 = var9;
            var19 = var7;
            var18 = var8;
            var17 = undefined;
            var16 = var6;
            var4 = var21[var1](var20, var19, var18, var17, var16, var15);
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0017_ip = 86; continue _fun0017 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.markSnowflakeBoundDismissibleContentAsDismissed;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var7 = arg1;
                    var1['dismissAction'] = var7;
                    var7 = _closure2_slot1;
                    var1['groupName'] = var7;
                    var6 = _closure2_slot2;
                    var1['guildId'] = var6;
                    var6 = arg2;
                    var1['forceTrack'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetSnowflakeBoundDismissibleContent'] = var4;
    var4 = function useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg1, arg2, arg3, arg4) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var7 = arg3;
            var8 = arg4;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var8;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = undefined;
            var11 = var9.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuildDismissedContentState;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var10.bind(var11)(var9, var1);
            var12 = null;
            var9 = var12 != var5;
            var1 = null;
            if(!var9) { _fun0018_ip = 87; continue _fun0018 }
case 31:
            var10 = var12 == var11;
            var9 = null;
            if(var10) { _fun0018_ip = 88; continue _fun0018 }
case 89:
            var13 = var12 == var11;
            var10 = undefined;
            if(var13) { _fun0018_ip = 90; continue _fun0018 }
case 91:
            var10 = var11[var5];
case 90:
            var9 = var10;
case 88:
            var1 = var9;
case 87:
            var9 = var12 == var1;
            var13 = undefined;
            if(var9) { _fun0018_ip = 36; continue _fun0018 }
case 92:
            var13 = var1.lastDismissedObjectId;
case 36:
            var _closure2_slot3 = var12;
            var1 = var12 != var5;
            var9 = null;
            if(!var1) { _fun0018_ip = 93; continue _fun0018 }
case 94:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 12;
            var1 = var11[var1];
            var10 = var10.bind(var4)(var1);
            var1 = var10.disableNewUserDismissibleContent;
            var1 = var1.bind(var10)(var5);
            var10 = !var1;
            var14 = _closure1_slot4;
            var11 = var14.hasLoaded;
            var1 = _closure1_slot10;
            var1 = var1.PRELOADED_USER_SETTINGS;
            var1 = var11.bind(var14)(var1);
            if(var1) { _fun0018_ip = 56; continue _fun0018 }
case 72:
            var1 = var12 != var13;
            var9 = null;
            if(!var1) { _fun0018_ip = 93; continue _fun0018 }
case 95:
            var1 = null;
            if(!var10) { _fun0018_ip = 96; continue _fun0018 }
case 97:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 15;
            var11 = var15[var11];
            var14 = var14.bind(var4)(var11);
            var11 = var14.compare;
            var14 = var11.bind(var14)(var6, var13);
            var11 = 1;
            var1 = null;
            if(!(var11 === var14)) { _fun0018_ip = 96; continue _fun0018 }
case 98:
            var1 = var5;
case 96:
            _closure2_slot3 = var1;
            var9 = var1;
            _fun0018_ip = 93; continue _fun0018;
case 56:
            var1 = null;
            if(!var10) { _fun0018_ip = 99; continue _fun0018 }
case 100:
            if(!(var12 != var13)) { _fun0018_ip = 101; continue _fun0018 }
case 102:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 15;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.compare;
            var11 = var10.bind(var11)(var6, var13);
            var10 = 1;
            var1 = null;
            if(!(var10 === var11)) { _fun0018_ip = 99; continue _fun0018 }
case 101:
            var1 = var5;
case 99:
            _closure2_slot3 = var1;
            var9 = var1;
case 93:
            var1 = _closure1_slot12;
            var21 = undefined;
            var20 = var9;
            var19 = var7;
            var18 = var8;
            var17 = undefined;
            var16 = var6;
            var4 = var21[var1](var20, var19, var18, var17, var16, var15);
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0019_ip = 103; continue _fun0019 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed;
                    var12 = _closure2_slot3;
                    var11 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var8 = arg1;
                    var1['dismissAction'] = var8;
                    var7 = _closure2_slot2;
                    var1['groupName'] = var7;
                    var1['guildId'] = var2;
                    var7 = arg2;
                    var1['forceTrack'] = var7;
                    var13 = var6;
                    var10 = var2;
                    var9 = var1;
                    var1 = var13[var5](var12, var11, var10, var9, var8);
case 103:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetSnowflakeBoundGuildDismissibleContent_UNSAFE'] = var4;
    var4 = function useGetTimeRecurringSnowflakeBoundDismissibleContent(arg1, arg2, arg3, arg4) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var6 = arg3;
            var8 = arg4;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var8;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 10;
            var5 = var5[var4];
            var4 = undefined;
            var10 = var7.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var10)(var7, var5);
            var _closure2_slot2 = var7;
            var9 = null;
            var _closure2_slot3 = var9;
            var5 = var9 == var1;
            if(var5) { _fun0020_ip = 104; continue _fun0020 }
case 105:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 11;
            var10 = var12[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
            var10 = arg2;
            var5 = var11.bind(var12)(var1, var6, var10);
case 104:
            var9 = null;
            if(var5) { _fun0020_ip = 106; continue _fun0020 }
case 107:
            _closure2_slot3 = var1;
            var9 = var1;
case 106:
            var1 = _closure1_slot12;
            var18 = undefined;
            var17 = var9;
            var16 = var7;
            var15 = var8;
            var14 = undefined;
            var13 = var6;
            var4 = var18[var1](var17, var16, var15, var14, var13, var12);
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0021_ip = 86; continue _fun0021 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.markSnowflakeBoundDismissibleContentAsDismissed;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var7 = arg1;
                    var1['dismissAction'] = var7;
                    var7 = _closure2_slot1;
                    var1['groupName'] = var7;
                    var6 = _closure2_slot2;
                    var1['guildId'] = var6;
                    var6 = arg2;
                    var1['forceTrack'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetTimeRecurringSnowflakeBoundDismissibleContent'] = var4;
    var4 = function useGetSingleUseGuildDismissibleContent_UNSAFE(arg1, arg2, arg3) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var6 = arg2;
            var7 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var4 = undefined;
            var11 = var8.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuildDismissedContentState;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var10.bind(var11)(var5, var1);
            var _closure2_slot2 = var1;
            var5 = 12;
            var5 = var9[var5];
            var9 = var8.bind(var4)(var5);
            var8 = var9.useNewUserDismissibleContent;
            var5 = arg1;
            var9 = var8.bind(var9)(var5);
            var8 = null;
            var _closure2_slot3 = var8;
            var11 = _closure1_slot4;
            var10 = var11.hasLoaded;
            var5 = _closure1_slot10;
            var5 = var5.PRELOADED_USER_SETTINGS;
            var5 = var10.bind(var11)(var5);
            if(var5) { _fun0022_ip = 59; continue _fun0022 }
case 36:
            var1 = var8 != var1;
            var8 = null;
            if(!var1) { _fun0022_ip = 70; continue _fun0022 }
case 38:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot2;
                    var4 = var1[var3];
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0023_ip = 4; continue _fun0023 }
case 108:
                    var2 = _closure2_slot2;
                    var2 = var2[var3];
                    var3 = var2.dismissed;
                    var2 = false;
                    var1 = var2 === var3;
case 4:
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var1);
            _closure2_slot3 = var1;
            var8 = var1;
            _fun0022_ip = 70; continue _fun0022;
case 59:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot2;
                    var5 = null;
                    var1 = var5 == var1;
                    if(var1) { _fun0024_ip = 109; continue _fun0024 }
case 110:
                    var4 = _closure2_slot2;
                    var4 = var4[var3];
                    var1 = var5 == var4;
case 109:
                    if(var1) { _fun0024_ip = 111; continue _fun0024 }
case 112:
                    var2 = _closure2_slot2;
                    var2 = var2[var3];
                    var3 = var2.dismissed;
                    var2 = false;
                    var1 = var2 === var3;
case 111:
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var1);
            _closure2_slot3 = var1;
            var8 = var1;
case 70:
            var1 = _closure1_slot12;
            var4 = var1.bind(var4)(var8, var6, var7);
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function(arg1, arg2) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0025_ip = 113; continue _fun0025 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var7 = arg1;
                    var1['dismissAction'] = var7;
                    var6 = _closure2_slot1;
                    var1['groupName'] = var6;
                    var1['guildId'] = var2;
                    var6 = arg2;
                    var1['forceTrack'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetSingleUseGuildDismissibleContent_UNSAFE'] = var4;
    var4 = function useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg1, arg2, arg3, arg4) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var7 = arg4;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var7;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = undefined;
            var10 = var8.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuildDismissedContentState;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var9.bind(var10)(var8, var1);
            var1 = null;
            var8 = var1 != var5;
            var9 = null;
            if(!var8) { _fun0026_ip = 114; continue _fun0026 }
case 115:
            var10 = var1 == var11;
            var8 = null;
            if(var10) { _fun0026_ip = 91; continue _fun0026 }
case 86:
            var12 = var1 == var11;
            var10 = undefined;
            if(var12) { _fun0026_ip = 76; continue _fun0026 }
case 116:
            var10 = var11[var5];
case 76:
            var8 = var10;
case 91:
            var9 = var8;
case 114:
            var8 = var1 == var9;
            var13 = undefined;
            if(var8) { _fun0026_ip = 117; continue _fun0026 }
case 34:
            var13 = var9.numTimesDismissed;
case 117:
            var _closure2_slot2 = var1;
            var10 = var1 != var5;
            var8 = null;
            if(!var10) { _fun0026_ip = 97; continue _fun0026 }
case 118:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 12;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.disableNewUserDismissibleContent;
            var10 = var10.bind(var11)(var5);
            var12 = !var10;
            var10 = var1 == var9;
            var11 = undefined;
            if(var10) { _fun0026_ip = 41; continue _fun0026 }
case 119:
            var11 = var9.lastDismissedAtMs;
case 41:
            var10 = _closure1_slot14;
            var14 = arg3;
            var18 = undefined;
            var17 = var12;
            var16 = var11;
            var15 = var13;
            var9 = var18[var10](var17, var16, var15, var14, var13);
            var1 = null;
            if(!var9) { _fun0026_ip = 120; continue _fun0026 }
case 74:
            var1 = var5;
case 120:
            _closure2_slot2 = var1;
            var8 = var1;
case 97:
            var1 = _closure1_slot12;
            var4 = var1.bind(var4)(var8, var6, var7);
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function(arg1, arg2) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0027_ip = 113; continue _fun0027 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var7 = arg1;
                    var1['dismissAction'] = var7;
                    var6 = _closure2_slot1;
                    var1['groupName'] = var6;
                    var1['guildId'] = var2;
                    var6 = arg2;
                    var1['forceTrack'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetTimeRecurringGuildDismissibleContent_UNSAFE'] = var4;
    var2 = function useDangerouslyPeekDismissibleContents(arg1) {
        var3 = arg1;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 10;
        var5 = var5[var4];
        var4 = undefined;
        var6 = var6.bind(var4)(var5);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var1 = _closure1_slot4;
                var1 = var1.settings;
                var2 = var1.userContent;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0028_ip = 57; continue _fun0028 }
case 58:
                var1 = var2.dismissedContents;
case 57:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var4, var2);
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0029_ip = 62; continue _fun0029 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.hasBit;
                var3 = _closure2_slot0;
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
                var1 = !var2;
case 62:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useDangerouslyPeekDismissibleContents'] = var2;
    return var1;
})();