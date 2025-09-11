// app/modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var2 = function toggleDismissibleContentDismissState(arg1) {
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
            if(var5) { _fun0002_ip = 244; continue _fun0002 }
 47:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isSnowflakeBoundDismissibleContent;
            var5 = var5.bind(var7)(var4);
            if(var5) { _fun0002_ip = 230; continue _fun0002 }
 81:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isTimeRecurringDismissibleContent;
            var5 = var5.bind(var7)(var4);
            if(var5) { _fun0002_ip = 216; continue _fun0002 }
 112:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isSingleUseGuildDismissibleContent;
            var5 = var5.bind(var7)(var4);
            if(var5) { _fun0002_ip = 202; continue _fun0002 }
 143:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var5 = var5.bind(var3)(var1);
            var1 = var5.isTimeRecurringGuildDismissibleContent;
            var1 = var1.bind(var5)(var4);
            if(var1) { _fun0002_ip = 188; continue _fun0002 }
 174:
            var1 = function toggleSingleUseDismissibleContent(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = function isDismissed() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.UNSAFE_isDismissibleContentDismissed;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var _closure3_slot1 = var4;
                var1 = {};
                var3 = undefined;
                var3 = var4.bind(var3)();
                var1['isDismissed'] = var3;
                var2 = function handleToggleDismissState() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure3_slot1;
                        var5 = undefined;
                        var1 = var1.bind(var5)();
                        var6 = _closure1_slot4;
                        var4 = _closure3_slot0;
                        var4 = var6.bind(var5)(var4, var1);
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        if(var1) { _fun0003_ip = 72; continue _fun0003 }
 53:
                        var3 = var4.addDismissedContent;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var1);
                        var1 = true;
                        _fun0003_ip = 89; continue _fun0003;
 72:
                        var3 = var4.removeDismissedContent;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        var1 = false;
 89:
                        return var1;
                    }
                };
                var1['handleToggleDismissState'] = var2;
                return var1;
            };
            var1 = var1.bind(var3)(var4);
            _fun0002_ip = 200; continue _fun0002;
 188:
            var5 = function toggleTimeRecurringGuildDismissibleContent(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var4 = function isDismissed() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = _closure3_slot1;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0005_ip = 61; continue _fun0005 }
 16:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 3;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed;
                            var3 = _closure3_slot0;
                            var2 = _closure3_slot1;
                            var1 = var4.bind(var5)(var3, var2);
 61:
                            return var1;
                        }
                    };
                    var _closure3_slot3 = var4;
                    var5 = _closure1_slot3;
                    var1 = var5.getGuildId;
                    var6 = var1.bind(var5)();
                    var _closure3_slot1 = var6;
                    var1 = null;
                    var5 = var1 != var6;
                    var1 = 1;
                    if(!var5) { _fun0004_ip = 87; continue _fun0004 }
 53:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var8.bind(var3)(var5);
                    var3 = var5.getGuildNextNumTimesDismissed;
                    var1 = var3.bind(var5)(var7, var6);
 87:
                    var _closure3_slot2 = var1;
                    var1 = {};
                    var3 = undefined;
                    var3 = var4.bind(var3)();
                    var1['isDismissed'] = var3;
                    var2 = function handleToggleDismissState() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var3 = _closure3_slot1;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0006_ip = 128; continue _fun0006 }
 13:
                            var1 = _closure3_slot3;
                            var5 = undefined;
                            var1 = var1.bind(var5)();
                            var6 = _closure1_slot4;
                            var4 = _closure3_slot0;
                            var4 = var6.bind(var5)(var4, var1);
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 3;
                            var3 = var6[var3];
                            var6 = var4.bind(var5)(var3);
                            if(var1) { _fun0006_ip = 92; continue _fun0006 }
 63:
                            var5 = var6.UNSAFE_addTimeRecurringGuildDismissedContent;
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot1;
                            var1 = _closure3_slot2;
                            var1 = var5.bind(var6)(var4, var3, var1);
                            var1 = true;
                            _fun0006_ip = 126; continue _fun0006;
 92:
                            var5 = var6.UNSAFE_removeTimeRecurringGuildDismissedContent;
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot1;
                            var7 = _closure3_slot2;
                            var2 = 1;
                            var2 = var7 - var2;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var1 = false;
 126:
                            return var1;
 128:
                            var1 = false;
                            return var1;
                        }
                    };
                    var1['handleToggleDismissState'] = var2;
                    return var1;
                }
            };
            var1 = var5.bind(var3)(var4);
 200:
            _fun0002_ip = 214; continue _fun0002;
 202:
            var5 = function toggleSingleUseGuildDismissibleContent(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var4 = function isDismissed() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var3 = _closure3_slot1;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0008_ip = 61; continue _fun0008 }
 16:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 3;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.UNSAFE_isSingleUseGuildDismissibleContentDismissed;
                            var3 = _closure3_slot0;
                            var2 = _closure3_slot1;
                            var1 = var4.bind(var5)(var3, var2);
 61:
                            return var1;
                        }
                    };
                    var _closure3_slot3 = var4;
                    var5 = _closure1_slot3;
                    var1 = var5.getGuildId;
                    var6 = var1.bind(var5)();
                    var _closure3_slot1 = var6;
                    var1 = null;
                    var5 = var1 != var6;
                    var1 = 1;
                    if(!var5) { _fun0007_ip = 87; continue _fun0007 }
 53:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var8.bind(var3)(var5);
                    var3 = var5.getGuildNextNumTimesDismissed;
                    var1 = var3.bind(var5)(var7, var6);
 87:
                    var _closure3_slot2 = var1;
                    var1 = {};
                    var3 = undefined;
                    var3 = var4.bind(var3)();
                    var1['isDismissed'] = var3;
                    var2 = function handleToggleDismissState() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = _closure3_slot1;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0009_ip = 128; continue _fun0009 }
 13:
                            var1 = _closure3_slot3;
                            var5 = undefined;
                            var1 = var1.bind(var5)();
                            var6 = _closure1_slot4;
                            var4 = _closure3_slot0;
                            var4 = var6.bind(var5)(var4, var1);
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 3;
                            var3 = var6[var3];
                            var6 = var4.bind(var5)(var3);
                            if(var1) { _fun0009_ip = 92; continue _fun0009 }
 63:
                            var5 = var6.UNSAFE_addGuildDismissedContent;
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot1;
                            var1 = _closure3_slot2;
                            var1 = var5.bind(var6)(var4, var3, var1);
                            var1 = true;
                            _fun0009_ip = 126; continue _fun0009;
 92:
                            var5 = var6.UNSAFE_removeGuildDismissedContent;
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot1;
                            var7 = _closure3_slot2;
                            var2 = 1;
                            var2 = var7 - var2;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var1 = false;
 126:
                            return var1;
 128:
                            var1 = false;
                            return var1;
                        }
                    };
                    var1['handleToggleDismissState'] = var2;
                    return var1;
                }
            };
            var1 = var5.bind(var3)(var4);
 214:
            _fun0002_ip = 228; continue _fun0002;
 216:
            var5 = function toggleTimeRecurringDismissibleContent(arg1) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var4 = function isDismissed() {
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 3;
                    var1 = var8[var1];
                    var7 = undefined;
                    var4 = var2.bind(var7)(var1);
                    var3 = var4.isTimeRecurringDismissibleContentDismissed;
                    var2 = _closure3_slot0;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 7;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.Millis;
                    var5 = var5.WEEK;
                    var1['cooldownDurationMs'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = var1.isDismissed;
                    return var1;
                };
                var _closure3_slot2 = var4;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var5.bind(var3)(var1);
                var5 = var6.getNextNumTimesDismissed;
                var1 = {};
                var1 = var5.bind(var6)(var7, var1);
                var _closure3_slot1 = var1;
                var1 = {};
                var3 = var4.bind(var3)();
                var1['isDismissed'] = var3;
                var2 = function handleToggleDismissState() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = _closure3_slot2;
                        var5 = undefined;
                        var1 = var1.bind(var5)();
                        var6 = _closure1_slot4;
                        var4 = _closure3_slot0;
                        var4 = var6.bind(var5)(var4, var1);
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        if(var1) { _fun0010_ip = 77; continue _fun0010 }
 41:
                        var1 = 3;
                        var1 = var6[var1];
                        var8 = var4.bind(var5)(var1);
                        var7 = var8.addTimeRecurringDismissedContent;
                        var3 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var1 = var7.bind(var8)(var3, var1);
                        var1 = true;
                        _fun0010_ip = 106; continue _fun0010;
 77:
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.removeDismissedRecurringContent;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        var1 = false;
 106:
                        return var1;
                    }
                };
                var1['handleToggleDismissState'] = var2;
                return var1;
            };
            var1 = var5.bind(var3)(var4);
 228:
            _fun0002_ip = 242; continue _fun0002;
 230:
            var5 = function toggleSnowflakeBoundDismissibleContent(arg1) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var4 = function isDismissed() {
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var6 = undefined;
                    var4 = var3.bind(var6)(var2);
                    var3 = var4.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                    var2 = _closure3_slot0;
                    var5 = _closure1_slot1;
                    var1 = 6;
                    var1 = var7[var1];
                    var6 = var5.bind(var6)(var1);
                    var5 = var6.fromTimestamp;
                    var1 = global;
                    var7 = var1.Date;
                    var1 = var7.now;
                    var1 = var1.bind(var7)();
                    var1 = var5.bind(var6)(var1);
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = var1.isDismissed;
                    return var1;
                };
                var _closure3_slot2 = var4;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var5.bind(var3)(var1);
                var5 = var6.getNextNumTimesDismissed;
                var1 = {};
                var1 = var5.bind(var6)(var7, var1);
                var _closure3_slot1 = var1;
                var1 = {};
                var3 = var4.bind(var3)();
                var1['isDismissed'] = var3;
                var2 = function handleToggleDismissState() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = _closure3_slot2;
                        var5 = undefined;
                        var1 = var1.bind(var5)();
                        var6 = _closure1_slot4;
                        var4 = _closure3_slot0;
                        var4 = var6.bind(var5)(var4, var1);
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        if(var1) { _fun0011_ip = 141; continue _fun0011 }
 41:
                        var1 = 3;
                        var7 = var6[var1];
                        var9 = var4.bind(var5)(var7);
                        var8 = var9.addSnowflakeBoundDismissedContent;
                        var7 = _closure3_slot0;
                        var10 = _closure1_slot1;
                        var3 = 6;
                        var3 = var6[var3];
                        var10 = var10.bind(var5)(var3);
                        var3 = var10.fromTimestamp;
                        var11 = global;
                        var12 = var11.Date;
                        var11 = var12.now;
                        var11 = var11.bind(var12)();
                        var1 = var6[var1];
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS;
                        var1 = var11 + var1;
                        var3 = var3.bind(var10)(var1);
                        var1 = _closure3_slot1;
                        var1 = var8.bind(var9)(var7, var3, var1);
                        var1 = true;
                        _fun0011_ip = 170; continue _fun0011;
 141:
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.removeDismissedRecurringContent;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        var1 = false;
 170:
                        return var1;
                    }
                };
                var1['handleToggleDismissState'] = var2;
                return var1;
            };
            var1 = var5.bind(var3)(var4);
 242:
            _fun0002_ip = 256; continue _fun0002;
 244:
            var2 = function toggleVersionedDismissibleContent(arg1) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var4 = function isDismissed() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isVersionedDismissibleContentDismissed;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.isDismissed;
                    return var1;
                };
                var _closure3_slot3 = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var3 = undefined;
                var8 = var5.bind(var3)(var1);
                var1 = var8.getVersionedDismissibleContentCurrentVersion;
                var1 = var1.bind(var8)(var7);
                var _closure3_slot1 = var1;
                var1 = 3;
                var1 = var6[var1];
                var6 = var5.bind(var3)(var1);
                var5 = var6.getNextNumTimesDismissed;
                var1 = {};
                var1 = var5.bind(var6)(var7, var1);
                var _closure3_slot2 = var1;
                var1 = {};
                var3 = var4.bind(var3)();
                var1['isDismissed'] = var3;
                var2 = function handleToggleDismissState() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = _closure3_slot3;
                        var5 = undefined;
                        var1 = var1.bind(var5)();
                        var6 = _closure1_slot4;
                        var4 = _closure3_slot0;
                        var4 = var6.bind(var5)(var4, var1);
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        if(var1) { _fun0012_ip = 82; continue _fun0012 }
 41:
                        var1 = 3;
                        var1 = var6[var1];
                        var9 = var4.bind(var5)(var1);
                        var8 = var9.addVersionedDismissedContent;
                        var7 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var1 = _closure3_slot2;
                        var1 = var8.bind(var9)(var7, var3, var1);
                        var1 = true;
                        _fun0012_ip = 111; continue _fun0012;
 82:
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.removeDismissedRecurringContent;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        var1 = false;
 111:
                        return var1;
                    }
                };
                var1['handleToggleDismissState'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var4);
 256:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();