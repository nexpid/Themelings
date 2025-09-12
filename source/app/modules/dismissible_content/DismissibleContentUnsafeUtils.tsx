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
 0:
            var3 = arg1;
            var2 = arguments[1];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var2 = {};
 14:
            var1 = var2.bypassNewUserCheck;
            if(!(var1 === var4)) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var1 = false;
 26:
            var9 = var2.cooldownDurationMs;
            if(!(var9 === var4)) { _fun0001_ip = 71; continue _fun0001 }
 36:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Millis;
            var9 = var5.WEEK;
 71:
            var11 = var2.guildId;
            if(var1) { _fun0001_ip = 120; continue _fun0001 }
 79:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.disableNewUserDismissibleContent;
            var1 = var1.bind(var2)(var3);
            if(!var1) { _fun0001_ip = 120; continue _fun0001 }
 116:
            var1 = true;
            return var1;
 120:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 5;
            var2 = var2[var6];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isVersionedDismissibleContent;
            var7 = var2.bind(var5)(var3);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            if(var7) { _fun0001_ip = 532; continue _fun0001 }
 168:
            var7 = var5[var6];
            var8 = var2.bind(var4)(var7);
            var7 = var8.isSnowflakeBoundDismissibleContent;
            var7 = var7.bind(var8)(var3);
            if(var7) { _fun0001_ip = 466; continue _fun0001 }
 194:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isTimeRecurringDismissibleContent;
            var10 = var7.bind(var8)(var3);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var10) { _fun0001_ip = 427; continue _fun0001 }
 236:
            var10 = var8[var6];
            var12 = var7.bind(var4)(var10);
            var10 = var12.isSingleUseGuildDismissibleContent;
            var13 = var10.bind(var12)(var3);
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var13) { _fun0001_ip = 401; continue _fun0001 }
 270:
            var6 = var12[var6];
            var13 = var10.bind(var4)(var6);
            var6 = var13.isTimeRecurringGuildDismissibleContent;
            var6 = var6.bind(var13)(var3);
            if(var6) { _fun0001_ip = 367; continue _fun0001 }
 293:
            var6 = _closure1_slot4;
            var6 = var6.settings;
            var13 = var6.userContent;
            var6 = null;
            var14 = var6 == var13;
            var15 = undefined;
            if(var14) { _fun0001_ip = 326; continue _fun0001 }
 320:
            var15 = var13.dismissedContents;
 326:
            var6 = var6 != var15;
            if(!var6) { _fun0001_ip = 365; continue _fun0001 }
 333:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 8;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = var14.hasBit;
            var6 = var13.bind(var14)(var15, var3);
 365:
            return var6;
 367:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 6;
            var6 = var14[var6];
            var13 = var13.bind(var4)(var6);
            var6 = var13.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed;
            var6 = var6.bind(var13)(var3, var11);
            return var6;
 401:
            var6 = 6;
            var6 = var12[var6];
            var10 = var10.bind(var4)(var6);
            var6 = var10.UNSAFE_isSingleUseGuildDismissibleContentDismissed;
            var6 = var6.bind(var10)(var3, var11);
            return var6;
 427:
            var6 = 6;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.isTimeRecurringDismissibleContentDismissed;
            var6 = {};
            var6['cooldownDurationMs'] = var9;
            var6 = var7.bind(var8)(var3, var6);
            var6 = var6.isDismissed;
            return var6;
 466:
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
 532:
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
 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 167; continue _fun0002 }
 16:
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0002_ip = 24; continue _fun0002 }
 22:
                    var7 = {};
 24:
                    SaveGenerator(address=28);
 26:
                    return var3;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 164; continue _fun0002 }
 37:
                    var6 = _closure1_slot6;
                    var4 = {};
                    var9 = true;
                    var4['bypassNewUserCheck'] = var9;
                    var4 = var6.bind(var3)(var8, var4);
                    if(var4) { _fun0002_ip = 161; continue _fun0002 }
 62:
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
 119:
                    return var4;
 121:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 158; continue _fun0002 }
 127:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.markDismissibleContentAsDismissedPostProcessing;
                    var5 = var5.bind(var6)(var8, var7);
                    _fun0002_ip = 161; continue _fun0002;
 158:
                    return var4;
 161:
                    return var3;
 164:
                    return var2;
 167:
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
 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.disableNewUserDismissibleContent;
            var1 = var1.bind(var2)(var5);
            if(var1) { _fun0003_ip = 157; continue _fun0003 }
 42:
            var1 = _closure1_slot4;
            var1 = var1.settings;
            var1 = var1.userContent;
            var3 = null;
            var7 = var3 == var1;
            var2 = undefined;
            if(var7) { _fun0003_ip = 94; continue _fun0003 }
 69:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var5];
            var5 = var3 == var1;
            var2 = undefined;
            if(var5) { _fun0003_ip = 94; continue _fun0003 }
 88:
            var2 = var1.lastDismissedObjectId;
 94:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0003_ip = 145; continue _fun0003 }
 103:
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
 145:
            var1['isDismissed'] = var3;
            var1['lastDismissedSnowflakeId'] = var2;
            return var1;
 157:
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
 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 145; continue _fun0004 }
 16:
                    var4 = undefined;
                    if(!(var7 === var4)) { _fun0004_ip = 24; continue _fun0004 }
 22:
                    var7 = {};
 24:
                    SaveGenerator(address=28);
 26:
                    return var4;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 142; continue _fun0004 }
 34:
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
 99:
                    return var3;
 101:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 139; continue _fun0004 }
 107:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.markDismissibleContentAsDismissedPostProcessing;
                    var5 = var5.bind(var6)(var8, var7);
                    return var4;
 139:
                    return var3;
 142:
                    return var2;
 145:
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
 0:
                    StartGenerator();
                    var7 = arg1;
                    var10 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 144; continue _fun0005 }
 19:
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
 101:
                    return var2;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 141; continue _fun0005 }
 109:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.markDismissibleContentAsDismissedPostProcessing;
                    var4 = var4.bind(var5)(var7, var6);
                    return var3;
 141:
                    return var2;
 144:
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
 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0006_ip = 20; continue _fun0006 }
 18:
            var2 = {};
 20:
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