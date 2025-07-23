// app/modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function toggleDismissibleContentShared(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.overrideDCFLastDCDismissed;
            var6 = arg2;
            var2 = null;
            if(var6) { _fun0001_ip = 45; continue _fun0001 }
 42:
            var2 = var5;
 45:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function toggleDismissibleContentDismissState(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 8;
            var5 = var3[var6];
            var3 = undefined;
            var7 = var7.bind(var3)(var5);
            var5 = var7.isVersionedDismissibleContent;
            var5 = var5.bind(var7)(var4);
            if(var5) { _fun0002_ip = 248; continue _fun0002 }
 47:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isSnowflakeBoundDismissibleContent;
            var5 = var5.bind(var7)(var4);
            if(var5) { _fun0002_ip = 234; continue _fun0002 }
 81:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isTimeRecurringDismissibleContent;
            var5 = var5.bind(var7)(var4);
            if(var5) { _fun0002_ip = 220; continue _fun0002 }
 112:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isSingleUseGuildDismissibleContent;
            var5 = var5.bind(var7)(var4);
            if(var5) { _fun0002_ip = 206; continue _fun0002 }
 143:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var5 = var5.bind(var3)(var1);
            var1 = var5.isTimeRecurringGuildDismissibleContent;
            var1 = var1.bind(var5)(var4);
            if(var1) { _fun0002_ip = 192; continue _fun0002 }
 174:
            var5 = function toggleSingleUseDismissibleContent(arg1, arg2) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.hasBit;
                var1 = arg2;
                var3 = var3.bind(var4)(var1, var5);
                var _closure3_slot1 = var3;
                var1 = {};
                var1['isDismissed'] = var3;
                var2 = function handleToggleDismissState() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var6 = _closure1_slot4;
                        var5 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5, var3);
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 4;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        if(var3) { _fun0003_ip = 66; continue _fun0003 }
 49:
                        var5 = var4.addDismissedContent;
                        var3 = _closure3_slot0;
                        var3 = var5.bind(var4)(var3);
                        _fun0003_ip = 81; continue _fun0003;
 66:
                        var3 = var4.removeDismissedContent;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 81:
                        return var1;
                    }
                };
                var1['handleToggleDismissState'] = var2;
                return var1;
            };
            var1 = arg2;
            var1 = var5.bind(var3)(var4, var1);
            _fun0002_ip = 204; continue _fun0002;
 192:
            var5 = function toggleTimeRecurringGuildDismissibleContent(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot3;
                    var3 = var4.getGuildId;
                    var4 = var3.bind(var4)();
                    var _closure3_slot1 = var4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 95; continue _fun0004 }
 36:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var1 = var3.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed;
                    var3 = var1.bind(var3)(var5, var4);
                    var _closure3_slot2 = var3;
                    var1 = {};
                    var1['isDismissed'] = var3;
                    var3 = function handleToggleDismissState() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 105; continue _fun0005 }
 13:
                            var6 = _closure1_slot4;
                            var4 = _closure3_slot0;
                            var2 = _closure3_slot2;
                            var5 = undefined;
                            var2 = var6.bind(var5)(var4, var2);
                            var2 = _closure3_slot2;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 3;
                            var3 = var6[var3];
                            var4 = var4.bind(var5)(var3);
                            if(var2) { _fun0005_ip = 85; continue _fun0005 }
 63:
                            var5 = var4.UNSAFE_addTimeRecurringGuildDismissedContent;
                            var3 = _closure3_slot0;
                            var2 = _closure3_slot1;
                            var2 = var5.bind(var4)(var3, var2);
                            _fun0005_ip = 105; continue _fun0005;
 85:
                            var3 = var4.UNSAFE_removeTimeRecurringGuildDismissedContent;
                            var2 = _closure3_slot0;
                            var1 = _closure3_slot1;
                            var1 = var3.bind(var4)(var2, var1);
 105:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['handleToggleDismissState'] = var3;
                    return var1;
 95:
                    var1 = {};
                    var3 = false;
                    var1['isDismissed'] = var3;
                    var2 = function handleToggleDismissState() {
                        var1 = undefined;
                        return var1;
                    };
                    var1['handleToggleDismissState'] = var2;
                    return var1;
                }
            };
            var1 = var5.bind(var3)(var4);
 204:
            _fun0002_ip = 218; continue _fun0002;
 206:
            var5 = function toggleSingleUseGuildDismissibleContent(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot3;
                    var3 = var4.getGuildId;
                    var4 = var3.bind(var4)();
                    var _closure3_slot1 = var4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 95; continue _fun0006 }
 36:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var1 = var3.UNSAFE_isSingleUseGuildDismissibleContentDismissed;
                    var3 = var1.bind(var3)(var5, var4);
                    var _closure3_slot2 = var3;
                    var1 = {};
                    var1['isDismissed'] = var3;
                    var3 = function handleToggleDismissState() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 105; continue _fun0007 }
 13:
                            var6 = _closure1_slot4;
                            var4 = _closure3_slot0;
                            var2 = _closure3_slot2;
                            var5 = undefined;
                            var2 = var6.bind(var5)(var4, var2);
                            var2 = _closure3_slot2;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 3;
                            var3 = var6[var3];
                            var4 = var4.bind(var5)(var3);
                            if(var2) { _fun0007_ip = 85; continue _fun0007 }
 63:
                            var5 = var4.UNSAFE_addGuildDismissedContent;
                            var3 = _closure3_slot0;
                            var2 = _closure3_slot1;
                            var2 = var5.bind(var4)(var3, var2);
                            _fun0007_ip = 105; continue _fun0007;
 85:
                            var3 = var4.UNSAFE_removeGuildDismissedContent;
                            var2 = _closure3_slot0;
                            var1 = _closure3_slot1;
                            var1 = var3.bind(var4)(var2, var1);
 105:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['handleToggleDismissState'] = var3;
                    return var1;
 95:
                    var1 = {};
                    var3 = false;
                    var1['isDismissed'] = var3;
                    var2 = function handleToggleDismissState() {
                        var1 = undefined;
                        return var1;
                    };
                    var1['handleToggleDismissState'] = var2;
                    return var1;
                }
            };
            var1 = var5.bind(var3)(var4);
 218:
            _fun0002_ip = 232; continue _fun0002;
 220:
            var5 = function toggleTimeRecurringDismissibleContent(arg1) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var1 = var3.isTimeRecurringDismissibleContentDismissed;
                var1 = var1.bind(var3)(var4);
                var3 = var1.isDismissed;
                var _closure3_slot1 = var3;
                var1 = {};
                var1['isDismissed'] = var3;
                var2 = function handleToggleDismissState() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var6 = _closure1_slot4;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4, var3);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        if(var3) { _fun0008_ip = 66; continue _fun0008 }
 37:
                        var3 = 3;
                        var3 = var5[var3];
                        var7 = var4.bind(var1)(var3);
                        var6 = var7.addTimeRecurringDismissedContent;
                        var3 = _closure3_slot0;
                        var3 = var6.bind(var7)(var3);
                        _fun0008_ip = 93; continue _fun0008;
 66:
                        var3 = 4;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.removeDismissedRecurringContent;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 93:
                        return var1;
                    }
                };
                var1['handleToggleDismissState'] = var2;
                return var1;
            };
            var1 = var5.bind(var3)(var4);
 232:
            _fun0002_ip = 246; continue _fun0002;
 234:
            var5 = function toggleSnowflakeBoundDismissibleContent(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 5;
                var3 = var8[var3];
                var7 = undefined;
                var4 = var4.bind(var7)(var3);
                var3 = var4.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                var6 = _closure1_slot1;
                var1 = 6;
                var1 = var8[var1];
                var7 = var6.bind(var7)(var1);
                var6 = var7.fromTimestamp;
                var1 = global;
                var8 = var1.Date;
                var1 = var8.now;
                var1 = var1.bind(var8)();
                var1 = var6.bind(var7)(var1);
                var1 = var3.bind(var4)(var5, var1);
                var3 = var1.isDismissed;
                var _closure3_slot1 = var3;
                var1 = {};
                var1['isDismissed'] = var3;
                var2 = function handleToggleDismissState() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var5 = _closure1_slot4;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4, var3);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        if(var3) { _fun0009_ip = 130; continue _fun0009 }
 37:
                        var3 = 3;
                        var6 = var5[var3];
                        var8 = var4.bind(var1)(var6);
                        var7 = var8.addSnowflakeBoundDismissedContent;
                        var6 = _closure3_slot0;
                        var10 = _closure1_slot1;
                        var9 = 6;
                        var9 = var5[var9];
                        var10 = var10.bind(var1)(var9);
                        var9 = var10.fromTimestamp;
                        var11 = global;
                        var12 = var11.Date;
                        var11 = var12.now;
                        var11 = var11.bind(var12)();
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS;
                        var3 = var11 + var3;
                        var3 = var9.bind(var10)(var3);
                        var3 = var7.bind(var8)(var6, var3);
                        _fun0009_ip = 157; continue _fun0009;
 130:
                        var3 = 4;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.removeDismissedRecurringContent;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 157:
                        return var1;
                    }
                };
                var1['handleToggleDismissState'] = var2;
                return var1;
            };
            var1 = var5.bind(var3)(var4);
 246:
            _fun0002_ip = 260; continue _fun0002;
 248:
            var2 = function toggleVersionedDismissibleContent(arg1) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var3 = undefined;
                var7 = var5.bind(var3)(var1);
                var1 = var7.getVersionedDismissibleContentCurrentVersion;
                var1 = var1.bind(var7)(var4);
                var _closure3_slot1 = var1;
                var1 = 3;
                var1 = var6[var1];
                var3 = var5.bind(var3)(var1);
                var1 = var3.isVersionedDismissibleContentDismissed;
                var1 = var1.bind(var3)(var4);
                var3 = var1.isDismissed;
                var _closure3_slot2 = var3;
                var1 = {};
                var1['isDismissed'] = var3;
                var2 = function handleToggleDismissState() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var6 = _closure1_slot4;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot2;
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4, var3);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        if(var3) { _fun0010_ip = 71; continue _fun0010 }
 37:
                        var3 = 3;
                        var3 = var5[var3];
                        var8 = var4.bind(var1)(var3);
                        var7 = var8.addVersionedDismissedContent;
                        var6 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var3 = var7.bind(var8)(var6, var3);
                        _fun0010_ip = 98; continue _fun0010;
 71:
                        var3 = 4;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.removeDismissedRecurringContent;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 98:
                        return var1;
                    }
                };
                var1['handleToggleDismissState'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var4);
 260:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();