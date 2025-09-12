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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useToggleDismissibleContentDismissState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 6;
            var4 = var2[var4];
            var6 = undefined;
            var10 = var8.bind(var6)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var9.bind(var10)(var7, var4);
            var _closure2_slot1 = var10;
            var4 = 7;
            var4 = var2[var4];
            var9 = var8.bind(var6)(var4);
            var7 = var9.UNSAFE_useIsDismissibleContentDismissed;
            var4 = {};
            var12 = _closure1_slot1;
            var11 = 8;
            var11 = var2[var11];
            var11 = var12.bind(var6)(var11);
            var11 = var11.Millis;
            var11 = var11.WEEK;
            var4['cooldownDurationMs'] = var11;
            var4['guildId'] = var10;
            var4 = var7.bind(var9)(var5, var4);
            var _closure2_slot2 = var4;
            var7 = 9;
            var2 = var2[var7];
            var8 = var8.bind(var6)(var2);
            var2 = var8.isVersionedDismissibleContent;
            var2 = var2.bind(var8)(var5);
            if(var2) { _fun0002_ip = 407; continue _fun0002 }
 164:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var8 = var8.bind(var6)(var2);
            var2 = var8.isSnowflakeBoundDismissibleContent;
            var2 = var2.bind(var8)(var5);
            if(var2) { _fun0002_ip = 383; continue _fun0002 }
 198:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var8 = var8.bind(var6)(var2);
            var2 = var8.isTimeRecurringDismissibleContent;
            var2 = var2.bind(var8)(var5);
            if(var2) { _fun0002_ip = 359; continue _fun0002 }
 232:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var8 = var8.bind(var6)(var2);
            var2 = var8.isSingleUseGuildDismissibleContent;
            var2 = var2.bind(var8)(var5);
            if(var2) { _fun0002_ip = 335; continue _fun0002 }
 263:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var2 = var2.bind(var6)(var1);
            var1 = var2.isTimeRecurringGuildDismissibleContent;
            var1 = var1.bind(var2)(var5);
            var2 = {};
            var2['isDismissed'] = var4;
            if(var1) { _fun0002_ip = 318; continue _fun0002 }
 301:
            var1 = function handleToggleDismissState() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var3 = _closure1_slot4;
                    var5 = undefined;
                    var3 = var3.bind(var5)(var4, var1);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    if(var1) { _fun0003_ip = 64; continue _fun0003 }
 49:
                    var1 = var3.addDismissedContent;
                    var1 = var1.bind(var3)(var4);
                    var1 = true;
                    _fun0003_ip = 77; continue _fun0003;
 64:
                    var2 = var3.removeDismissedContent;
                    var2 = var2.bind(var3)(var4);
                    var1 = false;
 77:
                    return var1;
                }
            };
            var2['handleToggleDismissState'] = var1;
            var1 = var2;
            _fun0002_ip = 333; continue _fun0002;
 318:
            var5 = function handleToggleDismissState() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var4 = null;
                    var5 = var4 == var7;
                    var1 = false;
                    if(var5) { _fun0004_ip = 156; continue _fun0004 }
 29:
                    var5 = var4 != var7;
                    var9 = 1;
                    var4 = var9;
                    if(!var5) { _fun0004_ip = 79; continue _fun0004 }
 42:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 3;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var10.bind(var5)(var6);
                    var5 = var6.getGuildNextNumTimesDismissed;
                    var4 = var5.bind(var6)(var8, var7);
 79:
                    var6 = _closure1_slot4;
                    var10 = undefined;
                    var6 = var6.bind(var10)(var8, var2);
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 3;
                    var5 = var11[var5];
                    var6 = var6.bind(var10)(var5);
                    if(var2) { _fun0004_ip = 134; continue _fun0004 }
 117:
                    var2 = var6.UNSAFE_addTimeRecurringGuildDismissedContent;
                    var2 = var2.bind(var6)(var8, var7, var4);
                    var2 = true;
                    _fun0004_ip = 153; continue _fun0004;
 134:
                    var5 = var6.UNSAFE_removeTimeRecurringGuildDismissedContent;
                    var4 = var4 - var9;
                    var4 = var5.bind(var6)(var8, var7, var4);
                    var2 = false;
 153:
                    var1 = var2;
 156:
                    return var1;
                }
            };
            var2['handleToggleDismissState'] = var5;
            var1 = var2;
 333:
            _fun0002_ip = 357; continue _fun0002;
 335:
            var2 = {};
            var2['isDismissed'] = var4;
            var5 = function handleToggleDismissState() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var4 = null;
                    var5 = var4 == var7;
                    var1 = false;
                    if(var5) { _fun0005_ip = 156; continue _fun0005 }
 29:
                    var5 = var4 != var7;
                    var9 = 1;
                    var4 = var9;
                    if(!var5) { _fun0005_ip = 79; continue _fun0005 }
 42:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 3;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var10.bind(var5)(var6);
                    var5 = var6.getGuildNextNumTimesDismissed;
                    var4 = var5.bind(var6)(var8, var7);
 79:
                    var6 = _closure1_slot4;
                    var10 = undefined;
                    var6 = var6.bind(var10)(var8, var2);
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 3;
                    var5 = var11[var5];
                    var6 = var6.bind(var10)(var5);
                    if(var2) { _fun0005_ip = 134; continue _fun0005 }
 117:
                    var2 = var6.UNSAFE_addGuildDismissedContent;
                    var2 = var2.bind(var6)(var8, var7, var4);
                    var2 = true;
                    _fun0005_ip = 153; continue _fun0005;
 134:
                    var5 = var6.UNSAFE_removeGuildDismissedContent;
                    var4 = var4 - var9;
                    var4 = var5.bind(var6)(var8, var7, var4);
                    var2 = false;
 153:
                    var1 = var2;
 156:
                    return var1;
                }
            };
            var2['handleToggleDismissState'] = var5;
            var1 = var2;
 357:
            _fun0002_ip = 381; continue _fun0002;
 359:
            var2 = {};
            var2['isDismissed'] = var4;
            var5 = function handleToggleDismissState() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var3 = _closure1_slot4;
                    var5 = undefined;
                    var3 = var3.bind(var5)(var4, var1);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if(var1) { _fun0006_ip = 88; continue _fun0006 }
 37:
                    var1 = 3;
                    var2 = var6[var1];
                    var7 = var3.bind(var5)(var2);
                    var2 = var7.addTimeRecurringDismissedContent;
                    var1 = var6[var1];
                    var9 = var3.bind(var5)(var1);
                    var8 = var9.getNextNumTimesDismissed;
                    var1 = {};
                    var1 = var8.bind(var9)(var4, var1);
                    var1 = var2.bind(var7)(var4, var1);
                    var1 = true;
                    _fun0006_ip = 113; continue _fun0006;
 88:
                    var2 = 4;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.removeDismissedRecurringContent;
                    var2 = var2.bind(var3)(var4);
                    var1 = false;
 113:
                    return var1;
                }
            };
            var2['handleToggleDismissState'] = var5;
            var1 = var2;
 381:
            _fun0002_ip = 405; continue _fun0002;
 383:
            var2 = {};
            var2['isDismissed'] = var4;
            var5 = function handleToggleDismissState() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var3 = var3[var1];
                    var5 = undefined;
                    var7 = var6.bind(var5)(var3);
                    var6 = var7.getNextNumTimesDismissed;
                    var3 = {};
                    var8 = var6.bind(var7)(var4, var3);
                    var3 = _closure1_slot4;
                    var3 = var3.bind(var5)(var4, var2);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if(var2) { _fun0007_ip = 160; continue _fun0007 }
 71:
                    var2 = var6[var1];
                    var7 = var3.bind(var5)(var2);
                    var2 = var7.addSnowflakeBoundDismissedContent;
                    var10 = _closure1_slot1;
                    var9 = 5;
                    var9 = var6[var9];
                    var10 = var10.bind(var5)(var9);
                    var9 = var10.fromTimestamp;
                    var11 = global;
                    var12 = var11.Date;
                    var11 = var12.now;
                    var11 = var11.bind(var12)();
                    var1 = var6[var1];
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS;
                    var1 = var11 + var1;
                    var1 = var9.bind(var10)(var1);
                    var1 = var2.bind(var7)(var4, var1, var8);
                    var1 = true;
                    _fun0007_ip = 185; continue _fun0007;
 160:
                    var2 = 4;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.removeDismissedRecurringContent;
                    var2 = var2.bind(var3)(var4);
                    var1 = false;
 185:
                    return var1;
                }
            };
            var2['handleToggleDismissState'] = var5;
            var1 = var2;
 405:
            _fun0002_ip = 429; continue _fun0002;
 407:
            var2 = {};
            var2['isDismissed'] = var4;
            var3 = function handleToggleDismissState() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 2;
                    var1 = var3[var1];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var1);
                    var1 = var8.getVersionedDismissibleContentCurrentVersion;
                    var8 = var1.bind(var8)(var4);
                    var1 = 3;
                    var3 = var3[var1];
                    var9 = var7.bind(var5)(var3);
                    var7 = var9.getNextNumTimesDismissed;
                    var3 = {};
                    var7 = var7.bind(var9)(var4, var3);
                    var3 = _closure1_slot4;
                    var3 = var3.bind(var5)(var4, var2);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if(var2) { _fun0008_ip = 120; continue _fun0008 }
 94:
                    var1 = var6[var1];
                    var2 = var3.bind(var5)(var1);
                    var1 = var2.addVersionedDismissedContent;
                    var1 = var1.bind(var2)(var4, var8, var7);
                    var1 = true;
                    _fun0008_ip = 145; continue _fun0008;
 120:
                    var2 = 4;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.removeDismissedRecurringContent;
                    var2 = var2.bind(var3)(var4);
                    var1 = false;
 145:
                    return var1;
                }
            };
            var2['handleToggleDismissState'] = var3;
            var1 = var2;
 429:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();