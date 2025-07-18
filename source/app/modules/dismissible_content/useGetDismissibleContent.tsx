// app/modules/dismissible_content/useGetDismissibleContent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function useGetVisibleContent(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = arg2;
            var11 = arg3;
            var7 = arg4;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var11;
            var _closure2_slot3 = var7;
            var5 = _closure1_slot7;
            var9 = undefined;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 39; continue _fun0002 }
 16:
                    var3 = arg1;
                    var4 = var3.currentlyShown;
                    var3 = var4.has;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 39:
                    return var1;
                }
            };
            var3 = var5.bind(var9)(var3);
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 9;
            var5 = var12[var5];
            var8 = var6.bind(var9)(var5);
            var5 = var8.useAnyOverlayRenderingLocked;
            var8 = var5.bind(var8)();
            var _closure2_slot4 = var8;
            var5 = 10;
            var5 = var12[var5];
            var12 = var6.bind(var9)(var5);
            var9 = var12.useStateFromStores;
            var5 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 43; continue _fun0003 }
 16:
                    var5 = _closure1_slot6;
                    var4 = var5.hasUserHitDCCap;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 43:
                    return var1;
                }
            };
            var9 = var9.bind(var12)(var6, var5);
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var4 = new Array(6);
            var4[0] = var2;
            var4[1] = var11;
            var4[2] = var10;
            var4[3] = var9;
            var4[4] = var8;
            var4[5] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0004_ip = 17; continue _fun0004 }
 13:
                    var2 = undefined;
                    return var2;
 17:
                    var5 = _closure1_slot4;
                    var4 = var5.hasLoaded;
                    var3 = _closure1_slot10;
                    var3 = var3.PRELOADED_USER_SETTINGS;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0004_ip = 195; continue _fun0004 }
 51:
                    var12 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var11 = _closure2_slot2;
                    var10 = _closure2_slot3;
                    var4 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var3 = 7;
                    var3 = var15[var3];
                    var14 = undefined;
                    var6 = var4.bind(var14)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot9;
                    var4 = var3.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN;
                    var3 = {};
                    var13 = _closure1_slot0;
                    var9 = 8;
                    var9 = var15[var9];
                    var9 = var13.bind(var14)(var9);
                    var9 = var9.DismissibleContent;
                    var9 = var9[var12];
                    var3['content_type'] = var9;
                    var12 = var7 != var11;
                    var9 = null;
                    if(!var12) { _fun0004_ip = 149; continue _fun0004 }
 146:
                    var9 = var11;
 149:
                    var3['group_name'] = var9;
                    var11 = var7 != var10;
                    var9 = null;
                    if(!var11) { _fun0004_ip = 166; continue _fun0004 }
 163:
                    var9 = var10;
 166:
                    var3['latest_version'] = var9;
                    var9 = var7 != var8;
                    var7 = null;
                    if(!var9) { _fun0004_ip = 185; continue _fun0004 }
 182:
                    var7 = var8;
 185:
                    var3['guild_id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
 195:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.requestMarkDismissibleContentAsShown;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['groupName'] = var6;
                    var6 = _closure2_slot1;
                    var2['guildId'] = var6;
                    var6 = _closure2_slot3;
                    var2['version'] = var6;
                    var1 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = _closure2_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 64; continue _fun0005 }
 13:
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
 64:
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
            if(!var3) { _fun0001_ip = 190; continue _fun0001 }
 178:
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 190; continue _fun0001 }
 187:
            var1 = var2;
 190:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = native4;
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
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/useGetDismissibleContent.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGetDismissibleContent(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure1_slot4;
                    var1 = var1.settings;
                    var2 = var1.userContent;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 36; continue _fun0007 }
 30:
                    var1 = var2.dismissedContents;
 36:
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
            if(var5) { _fun0006_ip = 200; continue _fun0006 }
 167:
            var1 = var8 != var1;
            var8 = null;
            if(!var1) { _fun0006_ip = 222; continue _fun0006 }
 176:
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
            _fun0006_ip = 222; continue _fun0006;
 200:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0008_ip = 63; continue _fun0008 }
 16:
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
 63:
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var1);
            _closure2_slot3 = var1;
            var8 = var1;
 222:
            var1 = _closure1_slot11;
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 89; continue _fun0009 }
 13:
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
 89:
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var6 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var8;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var10 = var9[var1];
            var4 = undefined;
            var13 = var7.bind(var4)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var1 = undefined;
                    if(!(var4 !== var2)) { _fun0011_ip = 84; continue _fun0011 }
 15:
                    var2 = _closure1_slot4;
                    var2 = var2.settings;
                    var6 = var2.userContent;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0011_ip = 81; continue _fun0011 }
 43:
                    var6 = var6.recurringDismissibleContentStates;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0011_ip = 81; continue _fun0011 }
 58:
                    var3 = _closure2_slot0;
                    var3 = var6[var3];
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0011_ip = 81; continue _fun0011 }
 75:
                    var2 = var3.lastDismissedVersion;
 81:
                    var1 = var2;
 84:
                    return var1;
                }
            };
            var10 = var12.bind(var13)(var11, var10);
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
            var _closure2_slot3 = var7;
            var11 = null;
            var _closure2_slot4 = var11;
            var1 = var11 != var5;
            var9 = null;
            if(!var1) { _fun0010_ip = 260; continue _fun0010 }
 135:
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
            if(var1) { _fun0010_ip = 232; continue _fun0010 }
 197:
            var1 = var11 != var10;
            var9 = null;
            if(!var1) { _fun0010_ip = 260; continue _fun0010 }
 206:
            var1 = null;
            if(!var12) { _fun0010_ip = 223; continue _fun0010 }
 211:
            var13 = var10 < var6;
            var1 = null;
            if(!var13) { _fun0010_ip = 223; continue _fun0010 }
 220:
            var1 = var5;
 223:
            _closure2_slot4 = var1;
            var9 = var1;
            _fun0010_ip = 260; continue _fun0010;
 232:
            var1 = null;
            if(!var12) { _fun0010_ip = 253; continue _fun0010 }
 237:
            if(!(var11 != var10)) { _fun0010_ip = 250; continue _fun0010 }
 241:
            var10 = var10 < var6;
            var1 = null;
            if(!var10) { _fun0010_ip = 253; continue _fun0010 }
 250:
            var1 = var5;
 253:
            _closure2_slot4 = var1;
            var9 = var1;
 260:
            var1 = _closure1_slot11;
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 99; continue _fun0012 }
 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.markVersionedDismissibleContentAsDismissed;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var7 = arg1;
                    var1['dismissAction'] = var7;
                    var7 = _closure2_slot2;
                    var1['groupName'] = var7;
                    var6 = _closure2_slot3;
                    var1['guildId'] = var6;
                    var6 = arg2;
                    var1['forceTrack'] = var6;
                    var1['version'] = var2;
                    var1 = var4.bind(var5)(var3, var2, var1);
 99:
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
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var5 = arg1;
            var15 = arg2;
            var7 = arg3;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var7;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 10;
            var1 = var1[var8];
            var4 = undefined;
            var10 = var6.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var1 = undefined;
                    if(!(var4 !== var2)) { _fun0014_ip = 84; continue _fun0014 }
 15:
                    var2 = _closure1_slot4;
                    var2 = var2.settings;
                    var6 = var2.userContent;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0014_ip = 81; continue _fun0014 }
 43:
                    var6 = var6.recurringDismissibleContentStates;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0014_ip = 81; continue _fun0014 }
 58:
                    var3 = _closure2_slot0;
                    var3 = var6[var3];
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0014_ip = 81; continue _fun0014 }
 75:
                    var2 = var3.lastDismissedAtMs;
 81:
                    var1 = var2;
 84:
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var6, var1);
            var10 = null;
            var1 = var10 != var9;
            var12 = undefined;
            if(!var1) { _fun0013_ip = 132; continue _fun0013 }
 83:
            var6 = global;
            var13 = var6.Number;
            var11 = var13.isNaN;
            var1 = var6.Number;
            var1 = var1.bind(var4)(var9);
            var11 = var11.bind(var13)(var1);
            var1 = undefined;
            if(var11) { _fun0013_ip = 129; continue _fun0013 }
 118:
            var6 = var6.Number;
            var1 = var6.bind(var4)(var9);
 129:
            var12 = var1;
 132:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
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
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var10;
            var1 = var10 != var5;
            var8 = null;
            if(!var1) { _fun0013_ip = 416; continue _fun0013 }
 197:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 12;
            var1 = var11[var1];
            var9 = var9.bind(var4)(var1);
            var1 = var9.disableNewUserDismissibleContent;
            var1 = var1.bind(var9)(var5);
            var14 = !var1;
            var11 = 0;
            if(!(var4 !== var12)) { _fun0013_ip = 247; continue _fun0013 }
 237:
            var1 = var15.cooldownDurationMs;
            var11 = var12 + var1;
 247:
            var1 = global;
            var9 = var1.Date;
            var1 = var9.now;
            var9 = var1.bind(var9)();
            var1 = var15.showAfterTimestamp;
            var13 = var10 == var1;
            if(var13) { _fun0013_ip = 315; continue _fun0013 }
 277:
            var1 = var15.showAfterTimestamp;
            var1 = var9 >= var1;
            if(!var1) { _fun0013_ip = 312; continue _fun0013 }
 290:
            var17 = var10 != var12;
            var16 = 0;
            if(!var17) { _fun0013_ip = 302; continue _fun0013 }
 299:
            var16 = var12;
 302:
            var15 = var15.showAfterTimestamp;
            var1 = var16 <= var15;
 312:
            var13 = var1;
 315:
            var16 = _closure1_slot4;
            var15 = var16.hasLoaded;
            var1 = _closure1_slot10;
            var1 = var1.PRELOADED_USER_SETTINGS;
            var1 = var15.bind(var16)(var1);
            if(var1) { _fun0013_ip = 383; continue _fun0013 }
 343:
            var1 = var10 != var12;
            var8 = null;
            if(!var1) { _fun0013_ip = 416; continue _fun0013 }
 352:
            var1 = null;
            if(!var14) { _fun0013_ip = 374; continue _fun0013 }
 357:
            var1 = null;
            if(!var13) { _fun0013_ip = 374; continue _fun0013 }
 362:
            var15 = var9 >= var11;
            var1 = null;
            if(!var15) { _fun0013_ip = 374; continue _fun0013 }
 371:
            var1 = var5;
 374:
            _closure2_slot3 = var1;
            var8 = var1;
            _fun0013_ip = 416; continue _fun0013;
 383:
            var1 = null;
            if(!var14) { _fun0013_ip = 409; continue _fun0013 }
 388:
            var1 = null;
            if(!var13) { _fun0013_ip = 409; continue _fun0013 }
 393:
            if(!(var10 != var12)) { _fun0013_ip = 406; continue _fun0013 }
 397:
            var9 = var9 >= var11;
            var1 = null;
            if(!var9) { _fun0013_ip = 409; continue _fun0013 }
 406:
            var1 = var5;
 409:
            _closure2_slot3 = var1;
            var8 = var1;
 416:
            var1 = _closure1_slot11;
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
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0015_ip = 89; continue _fun0015 }
 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.markTimeRecurringDismissibleContentAsDismissed;
                    var2 = _closure2_slot3;
                    var1 = {};
                    var6 = arg1;
                    var1['dismissAction'] = var6;
                    var6 = _closure2_slot1;
                    var1['groupName'] = var6;
                    var5 = _closure2_slot2;
                    var1['guildId'] = var5;
                    var5 = arg2;
                    var1['forceTrack'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 89:
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
 0:
            var5 = arg1;
            var6 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var8;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var10 = var9[var1];
            var4 = undefined;
            var13 = var7.bind(var4)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var1 = undefined;
                    if(!(var4 !== var2)) { _fun0017_ip = 84; continue _fun0017 }
 15:
                    var2 = _closure1_slot4;
                    var2 = var2.settings;
                    var6 = var2.userContent;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0017_ip = 81; continue _fun0017 }
 43:
                    var6 = var6.recurringDismissibleContentStates;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0017_ip = 81; continue _fun0017 }
 58:
                    var3 = _closure2_slot0;
                    var3 = var6[var3];
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0017_ip = 81; continue _fun0017 }
 75:
                    var2 = var3.lastDismissedObjectId;
 81:
                    var1 = var2;
 84:
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var11, var10);
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
            var _closure2_slot3 = var7;
            var12 = null;
            var _closure2_slot4 = var12;
            var1 = var12 != var5;
            var9 = null;
            if(!var1) { _fun0016_ip = 324; continue _fun0016 }
 135:
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
            if(var1) { _fun0016_ip = 264; continue _fun0016 }
 197:
            var1 = var12 != var13;
            var9 = null;
            if(!var1) { _fun0016_ip = 324; continue _fun0016 }
 206:
            var1 = null;
            if(!var10) { _fun0016_ip = 255; continue _fun0016 }
 211:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 15;
            var11 = var15[var11];
            var14 = var14.bind(var4)(var11);
            var11 = var14.compare;
            var14 = var11.bind(var14)(var6, var13);
            var11 = 1;
            var1 = null;
            if(!(var11 === var14)) { _fun0016_ip = 255; continue _fun0016 }
 252:
            var1 = var5;
 255:
            _closure2_slot4 = var1;
            var9 = var1;
            _fun0016_ip = 324; continue _fun0016;
 264:
            var1 = null;
            if(!var10) { _fun0016_ip = 317; continue _fun0016 }
 269:
            if(!(var12 != var13)) { _fun0016_ip = 314; continue _fun0016 }
 273:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 15;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.compare;
            var11 = var10.bind(var11)(var6, var13);
            var10 = 1;
            var1 = null;
            if(!(var10 === var11)) { _fun0016_ip = 317; continue _fun0016 }
 314:
            var1 = var5;
 317:
            _closure2_slot4 = var1;
            var9 = var1;
 324:
            var1 = _closure1_slot11;
            var4 = var1.bind(var4)(var9, var7, var8);
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
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0018_ip = 94; continue _fun0018 }
 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.markSnowflakeBoundDismissibleContentAsDismissed;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var7 = arg1;
                    var1['dismissAction'] = var7;
                    var7 = _closure2_slot2;
                    var1['groupName'] = var7;
                    var6 = _closure2_slot3;
                    var1['guildId'] = var6;
                    var6 = arg2;
                    var1['forceTrack'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 94:
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
    var4 = function useGetTimeReccuringSnowflakeBoundDismissibleContent(arg1, arg2, arg3, arg4) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
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
            if(var5) { _fun0019_ip = 125; continue _fun0019 }
 89:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 11;
            var10 = var12[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
            var10 = arg2;
            var5 = var11.bind(var12)(var1, var6, var10);
 125:
            var9 = null;
            if(var5) { _fun0019_ip = 137; continue _fun0019 }
 130:
            _closure2_slot3 = var1;
            var9 = var1;
 137:
            var1 = _closure1_slot11;
            var4 = var1.bind(var4)(var9, var7, var8);
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
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0020_ip = 94; continue _fun0020 }
 13:
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
 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGetTimeReccuringSnowflakeBoundDismissibleContent'] = var4;
    var4 = function UNSAFE_useGetSingleUseGuildDismissibleContent(arg1, arg2, arg3) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
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
            if(var5) { _fun0021_ip = 166; continue _fun0021 }
 133:
            var1 = var8 != var1;
            var8 = null;
            if(!var1) { _fun0021_ip = 188; continue _fun0021 }
 142:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot2;
                    var4 = var1[var3];
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0022_ip = 43; continue _fun0022 }
 23:
                    var2 = _closure2_slot2;
                    var2 = var2[var3];
                    var3 = var2.dismissed;
                    var2 = false;
                    var1 = var2 === var3;
 43:
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var1);
            _closure2_slot3 = var1;
            var8 = var1;
            _fun0021_ip = 188; continue _fun0021;
 166:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot2;
                    var5 = null;
                    var1 = var5 == var1;
                    if(var1) { _fun0023_ip = 31; continue _fun0023 }
 19:
                    var4 = _closure2_slot2;
                    var4 = var4[var3];
                    var1 = var5 == var4;
 31:
                    if(var1) { _fun0023_ip = 54; continue _fun0023 }
 34:
                    var2 = _closure2_slot2;
                    var2 = var2[var3];
                    var3 = var2.dismissed;
                    var2 = false;
                    var1 = var2 === var3;
 54:
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var1);
            _closure2_slot3 = var1;
            var8 = var1;
 188:
            var1 = _closure1_slot11;
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
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0024_ip = 90; continue _fun0024 }
 13:
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
 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1[1] = var2;
            return var1;
        }
    };
    var3['UNSAFE_useGetSingleUseGuildDismissibleContent'] = var4;
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
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var1 = _closure1_slot4;
                var1 = var1.settings;
                var2 = var1.userContent;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0025_ip = 36; continue _fun0025 }
 30:
                var1 = var2.dismissedContents;
 36:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var4, var2);
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0026_ip = 63; continue _fun0026 }
 16:
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
 63:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useDangerouslyPeekDismissibleContents'] = var2;
    return var1;
})();