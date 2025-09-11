// app/modules/dismissible_content/useGetDismissibleContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
 0:
                var3 = _closure2_slot0;
                var2 = null;
                var1 = null;
                if(!(var1 !== var3)) { _fun0006_ip = 69; continue _fun0006 }
 15:
                var3 = _closure1_slot4;
                var3 = var3.settings;
                var5 = var3.userContent;
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0006_ip = 66; continue _fun0006 }
 43:
                var5 = var5.recurringDismissibleContentStates;
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0006_ip = 66; continue _fun0006 }
 58:
                var4 = _closure2_slot0;
                var3 = var5[var4];
 66:
                var1 = var3;
 69:
                if(!(var2 == var1)) { _fun0006_ip = 80; continue _fun0006 }
 73:
                var1 = _closure1_slot11;
 80:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function canShowTimeRecurringContent(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var10 = arg3;
            var1 = arg4;
            var6 = null;
            var4 = var6 != var7;
            var2 = undefined;
            var3 = undefined;
            if(!var4) { _fun0007_ip = 74; continue _fun0007 }
 25:
            var5 = global;
            var11 = var5.Number;
            var9 = var11.isNaN;
            var4 = var5.Number;
            var4 = var4.bind(var2)(var7);
            var9 = var9.bind(var11)(var4);
            var4 = undefined;
            if(var9) { _fun0007_ip = 71; continue _fun0007 }
 60:
            var5 = var5.Number;
            var4 = var5.bind(var2)(var7);
 71:
            var3 = var4;
 74:
            var11 = 0;
            var5 = 0;
            if(!(var2 !== var3)) { _fun0007_ip = 92; continue _fun0007 }
 82:
            var2 = var1.cooldownDurationMs;
            var5 = var3 + var2;
 92:
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var4 = var2.bind(var4)();
            var2 = var1.showAfterTimestamp;
            var7 = var6 == var2;
            if(var7) { _fun0007_ip = 160; continue _fun0007 }
 122:
            var2 = var1.showAfterTimestamp;
            var2 = var4 >= var2;
            if(!var2) { _fun0007_ip = 157; continue _fun0007 }
 135:
            var9 = var6 != var3;
            var12 = 0;
            if(!var9) { _fun0007_ip = 147; continue _fun0007 }
 144:
            var12 = var3;
 147:
            var9 = var1.showAfterTimestamp;
            var2 = var12 <= var9;
 157:
            var7 = var2;
 160:
            var2 = var1.numTimesToRecur;
            var2 = var6 == var2;
            if(var2) { _fun0007_ip = 183; continue _fun0007 }
 173:
            var9 = var1.numTimesToRecur;
            var2 = var11 === var9;
 183:
            if(var2) { _fun0007_ip = 190; continue _fun0007 }
 186:
            var2 = var6 == var10;
 190:
            if(var2) { _fun0007_ip = 203; continue _fun0007 }
 193:
            var1 = var1.numTimesToRecur;
            var2 = var10 < var1;
 203:
            var11 = _closure1_slot4;
            var9 = var11.hasLoaded;
            var1 = _closure1_slot10;
            var1 = var1.PRELOADED_USER_SETTINGS;
            var1 = var9.bind(var11)(var1);
            if(var1) { _fun0007_ip = 248; continue _fun0007 }
 234:
            var9 = var6 != var3;
            if(!var9) { _fun0007_ip = 245; continue _fun0007 }
 241:
            var9 = var6 != var10;
 245:
            var1 = var9;
 248:
            if(!var1) { _fun0007_ip = 254; continue _fun0007 }
 251:
            var1 = var8;
 254:
            if(!var1) { _fun0007_ip = 260; continue _fun0007 }
 257:
            var1 = var7;
 260:
            if(!var1) { _fun0007_ip = 277; continue _fun0007 }
 263:
            var3 = var6 == var3;
            if(var3) { _fun0007_ip = 274; continue _fun0007 }
 270:
            var3 = var4 >= var5;
 274:
            var1 = var3;
 277:
            if(!var1) { _fun0007_ip = 283; continue _fun0007 }
 280:
            var1 = var2;
 283:
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure1_slot4;
                    var1 = var1.settings;
                    var2 = var1.userContent;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 36; continue _fun0009 }
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
            if(var5) { _fun0008_ip = 201; continue _fun0008 }
 167:
            var1 = var8 != var1;
            var8 = null;
            if(!var1) { _fun0008_ip = 224; continue _fun0008 }
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
            _fun0008_ip = 224; continue _fun0008;
 201:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0010_ip = 63; continue _fun0010 }
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
 224:
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
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0011_ip = 89; continue _fun0011 }
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
            if(!var1) { _fun0012_ip = 234; continue _fun0012 }
 109:
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
            if(var1) { _fun0012_ip = 206; continue _fun0012 }
 171:
            var1 = var11 != var10;
            var9 = null;
            if(!var1) { _fun0012_ip = 234; continue _fun0012 }
 180:
            var1 = null;
            if(!var12) { _fun0012_ip = 197; continue _fun0012 }
 185:
            var13 = var10 < var6;
            var1 = null;
            if(!var13) { _fun0012_ip = 197; continue _fun0012 }
 194:
            var1 = var5;
 197:
            _closure2_slot3 = var1;
            var9 = var1;
            _fun0012_ip = 234; continue _fun0012;
 206:
            var1 = null;
            if(!var12) { _fun0012_ip = 227; continue _fun0012 }
 211:
            if(!(var11 != var10)) { _fun0012_ip = 224; continue _fun0012 }
 215:
            var10 = var10 < var6;
            var1 = null;
            if(!var10) { _fun0012_ip = 227; continue _fun0012 }
 224:
            var1 = var5;
 227:
            _closure2_slot3 = var1;
            var9 = var1;
 234:
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
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 99; continue _fun0013 }
 13:
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
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
            if(!var9) { _fun0014_ip = 173; continue _fun0014 }
 105:
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
            if(!var9) { _fun0014_ip = 166; continue _fun0014 }
 163:
            var1 = var5;
 166:
            _closure2_slot2 = var1;
            var8 = var1;
 173:
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
 0:
                    var2 = _closure2_slot2;
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
            if(!var1) { _fun0016_ip = 298; continue _fun0016 }
 109:
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
            if(var1) { _fun0016_ip = 238; continue _fun0016 }
 171:
            var1 = var12 != var13;
            var9 = null;
            if(!var1) { _fun0016_ip = 298; continue _fun0016 }
 180:
            var1 = null;
            if(!var10) { _fun0016_ip = 229; continue _fun0016 }
 185:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 15;
            var11 = var15[var11];
            var14 = var14.bind(var4)(var11);
            var11 = var14.compare;
            var14 = var11.bind(var14)(var6, var13);
            var11 = 1;
            var1 = null;
            if(!(var11 === var14)) { _fun0016_ip = 229; continue _fun0016 }
 226:
            var1 = var5;
 229:
            _closure2_slot3 = var1;
            var9 = var1;
            _fun0016_ip = 298; continue _fun0016;
 238:
            var1 = null;
            if(!var10) { _fun0016_ip = 291; continue _fun0016 }
 243:
            if(!(var12 != var13)) { _fun0016_ip = 288; continue _fun0016 }
 247:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 15;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.compare;
            var11 = var10.bind(var11)(var6, var13);
            var10 = 1;
            var1 = null;
            if(!(var10 === var11)) { _fun0016_ip = 291; continue _fun0016 }
 288:
            var1 = var5;
 291:
            _closure2_slot3 = var1;
            var9 = var1;
 298:
            var1 = _closure1_slot12;
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
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0017_ip = 94; continue _fun0017 }
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
    var3['useGetSnowflakeBoundDismissibleContent'] = var4;
    var4 = function useGetTimeReccuringSnowflakeBoundDismissibleContent(arg1, arg2, arg3, arg4) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
            if(var5) { _fun0018_ip = 125; continue _fun0018 }
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
            if(var5) { _fun0018_ip = 137; continue _fun0018 }
 130:
            _closure2_slot3 = var1;
            var9 = var1;
 137:
            var1 = _closure1_slot12;
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
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0019_ip = 94; continue _fun0019 }
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
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
            if(var5) { _fun0020_ip = 167; continue _fun0020 }
 133:
            var1 = var8 != var1;
            var8 = null;
            if(!var1) { _fun0020_ip = 190; continue _fun0020 }
 142:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot2;
                    var4 = var1[var3];
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0021_ip = 43; continue _fun0021 }
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
            _fun0020_ip = 190; continue _fun0020;
 167:
            var5 = var9.find;
            var1 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot2;
                    var5 = null;
                    var1 = var5 == var1;
                    if(var1) { _fun0022_ip = 31; continue _fun0022 }
 19:
                    var4 = _closure2_slot2;
                    var4 = var4[var3];
                    var1 = var5 == var4;
 31:
                    if(var1) { _fun0022_ip = 54; continue _fun0022 }
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
 190:
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
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0023_ip = 90; continue _fun0023 }
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
    var4 = function UNSAFE_useGetTimeRecurringGuildDismissibleContent(arg1, arg2, arg3, arg4) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
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
            if(!var8) { _fun0024_ip = 111; continue _fun0024 }
 83:
            var10 = var1 == var11;
            var8 = null;
            if(var10) { _fun0024_ip = 108; continue _fun0024 }
 92:
            var12 = var1 == var11;
            var10 = undefined;
            if(var12) { _fun0024_ip = 105; continue _fun0024 }
 101:
            var10 = var11[var5];
 105:
            var8 = var10;
 108:
            var9 = var8;
 111:
            var8 = var1 == var9;
            var13 = undefined;
            if(var8) { _fun0024_ip = 126; continue _fun0024 }
 120:
            var13 = var9.numTimesDismissed;
 126:
            var _closure2_slot2 = var1;
            var10 = var1 != var5;
            var8 = null;
            if(!var10) { _fun0024_ip = 225; continue _fun0024 }
 139:
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
            if(var10) { _fun0024_ip = 188; continue _fun0024 }
 182:
            var11 = var9.lastDismissedAtMs;
 188:
            var10 = _closure1_slot14;
            var14 = arg3;
            var18 = undefined;
            var17 = var12;
            var16 = var11;
            var15 = var13;
            var9 = var18[var10](var17, var16, var15, var14, var13);
            var1 = null;
            if(!var9) { _fun0024_ip = 218; continue _fun0024 }
 215:
            var1 = var5;
 218:
            _closure2_slot2 = var1;
            var8 = var1;
 225:
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
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0025_ip = 90; continue _fun0025 }
 13:
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
    var3['UNSAFE_useGetTimeRecurringGuildDismissibleContent'] = var4;
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
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var1 = _closure1_slot4;
                var1 = var1.settings;
                var2 = var1.userContent;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0026_ip = 36; continue _fun0026 }
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
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0027_ip = 63; continue _fun0027 }
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