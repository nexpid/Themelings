// app/modules/dismissible_content/DismissibleContentUnsafeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function UNSAFE_isDismissibleContentDismissed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arguments[1];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var1 = var2.bypassNewUserCheck;
            if(!(var1 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
case 4:
            var9 = var2.cooldownDurationMs;
            if(!(var9 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Millis;
            var9 = var5.WEEK;
case 6:
            var11 = var2.guildId;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.disableNewUserDismissibleContent;
            var1 = var1.bind(var2)(var3);
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var1 = true;
            return var1;
case 8:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 5;
            var2 = var2[var6];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isVersionedDismissibleContent;
            var7 = var2.bind(var5)(var3);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var5[var6];
            var8 = var2.bind(var4)(var7);
            var7 = var8.isSnowflakeBoundDismissibleContent;
            var7 = var7.bind(var8)(var3);
            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isTimeRecurringDismissibleContent;
            var10 = var7.bind(var8)(var3);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = var8[var6];
            var12 = var7.bind(var4)(var10);
            var10 = var12.isSingleUseGuildDismissibleContent;
            var13 = var10.bind(var12)(var3);
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var6 = var12[var6];
            var13 = var10.bind(var4)(var6);
            var6 = var13.isTimeRecurringGuildDismissibleContent;
            var6 = var6.bind(var13)(var3);
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = _closure1_slot4;
            var6 = var6.settings;
            var13 = var6.userContent;
            var6 = null;
            var14 = var6 == var13;
            var15 = undefined;
            if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var15 = var13.dismissedContents;
case 21:
            var6 = var6 != var15;
            if(!var6) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 8;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = var14.hasBit;
            var6 = var13.bind(var14)(var15, var3);
case 23:
            return var6;
case 19:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 6;
            var6 = var14[var6];
            var13 = var13.bind(var4)(var6);
            var6 = var13.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed;
            var6 = var6.bind(var13)(var3, var11);
            return var6;
case 17:
            var6 = 6;
            var6 = var12[var6];
            var10 = var10.bind(var4)(var6);
            var6 = var10.UNSAFE_isSingleUseGuildDismissibleContentDismissed;
            var6 = var6.bind(var10)(var3, var11);
            return var6;
case 15:
            var6 = 6;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.isTimeRecurringDismissibleContentDismissed;
            var6 = {};
            var6['cooldownDurationMs'] = var9;
            var6 = var7.bind(var8)(var3, var6);
            var6 = var6.isDismissed;
            return var6;
case 13:
            var6 = _closure1_slot8;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var8 = var7.bind(var4)(var1);
            var7 = var8.fromTimestamp;
            var1 = global;
            var9 = var1.Date;
            var1 = var9.now;
            var1 = var1.bind(var9)();
            var1 = var7.bind(var8)(var1);
            var1 = var6.bind(var4)(var3, var1);
            var1 = var1.isDismissed;
            return var1;
case 11:
            var1 = 6;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isVersionedDismissibleContentDismissed;
            var1 = var1.bind(var2)(var3);
            var1 = var1.isDismissed;
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var1 = function _UNSAFE_markDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0002_ip = 5; continue _fun0002 }
case 27:
                    var7 = {};
case 5:
                    SaveGenerator(address=28);
case 4:
                    return var3;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var6 = _closure1_slot6;
                    var4 = {};
                    var9 = true;
                    var4['bypassNewUserCheck'] = var9;
                    var4 = var6.bind(var3)(var8, var4);
                    if(var4) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var9 = 6;
                    var4 = var10[var9];
                    var11 = var6.bind(var3)(var4);
                    var4 = var11.markDismissibleContentAsDismissedPreProcessing;
                    var4 = var4.bind(var11)(var8, var7);
                    var4 = 10;
                    var4 = var10[var4];
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.addDismissedContent;
                    var4 = var4.bind(var6)(var8);
                    SaveGenerator(address=121);
case 33:
                    return var4;
case 34:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.markDismissibleContentAsDismissedPostProcessing;
                    var5 = var5.bind(var6)(var8, var7);
                    _fun0002_ip = 31; continue _fun0002;
case 35:
                    return var4;
case 31:
                    return var3;
case 29:
                    return var2;
case 25:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function UNSAFE_isSnowflakeBoundDismissibleContentDismissed(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.disableNewUserDismissibleContent;
            var1 = var1.bind(var2)(var5);
            if(var1) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var1 = _closure1_slot4;
            var1 = var1.settings;
            var1 = var1.userContent;
            var3 = null;
            var7 = var3 == var1;
            var2 = undefined;
            if(var7) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var5];
            var5 = var3 == var1;
            var2 = undefined;
            if(var5) { _fun0003_ip = 39; continue _fun0003 }
case 41:
            var2 = var1.lastDismissedObjectId;
case 39:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.compare;
            var4 = arg2;
            var5 = var5.bind(var6)(var4, var2);
            var4 = 1;
            var3 = var4 !== var5;
case 42:
            var1['isDismissed'] = var3;
            var1['lastDismissedSnowflakeId'] = var2;
            return var1;
case 37:
            var1 = {'isDismissed': true, 'lastDismissedSnowflakeId': null};
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = function _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 42; continue _fun0004 }
case 26:
                    var4 = undefined;
                    if(!(var7 === var4)) { _fun0004_ip = 5; continue _fun0004 }
case 27:
                    var7 = {};
case 5:
                    SaveGenerator(address=28);
case 4:
                    return var4;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 6;
                    var10 = var3[var9];
                    var11 = var6.bind(var4)(var10);
                    var10 = var11.markDismissibleContentAsDismissedPreProcessing;
                    var10 = var10.bind(var11)(var8, var7);
                    var3 = var3[var9];
                    var11 = var6.bind(var4)(var3);
                    var10 = var11.UNSAFE_addGuildDismissedContent;
                    var6 = arg2;
                    var3 = 1;
                    var3 = var10.bind(var11)(var8, var6, var3);
                    SaveGenerator(address=101);
case 46:
                    return var3;
case 47:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.markDismissibleContentAsDismissedPostProcessing;
                    var5 = var5.bind(var6)(var8, var7);
                    return var4;
case 48:
                    return var3;
case 44:
                    return var2;
case 42:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var10 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 6;
                    var9 = var2[var8];
                    var3 = undefined;
                    var11 = var5.bind(var3)(var9);
                    var9 = var11.getGuildNextNumTimesDismissed;
                    var9 = var9.bind(var11)(var7, var10);
                    var11 = var2[var8];
                    var12 = var5.bind(var3)(var11);
                    var11 = var12.markDismissibleContentAsDismissedPreProcessing;
                    var11 = var11.bind(var12)(var7, var6);
                    var2 = var2[var8];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.UNSAFE_addTimeRecurringGuildDismissedContent;
                    var2 = var2.bind(var5)(var7, var10, var9);
                    SaveGenerator(address=103);
case 47:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.markDismissibleContentAsDismissedPostProcessing;
                    var4 = var4.bind(var5)(var7, var6);
                    return var3;
case 52:
                    return var2;
case 50:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/dismissible_content/DismissibleContentUnsafeUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['UNSAFE_isDismissibleContentDismissed'] = var5;
    var5 = function UNSAFE_useIsDismissibleContentDismissed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var2 = {};
case 54:
            var _closure2_slot1 = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot4;
            var2 = new Array(2);
            var2[0] = var6;
            var5 = _closure1_slot5;
            var2[1] = var5;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UNSAFE_useIsDismissibleContentDismissed'] = var5;
    var5 = function UNSAFE_markDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['UNSAFE_markDismissibleContentAsDismissed'] = var5;
    var3['UNSAFE_isSnowflakeBoundDismissibleContentDismissed'] = var4;
    var4 = function UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['UNSAFE_markSingleUseGuildDismissibleContentAsDismissed'] = var4;
    var2 = function UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed'] = var2;
    return var1;
})();