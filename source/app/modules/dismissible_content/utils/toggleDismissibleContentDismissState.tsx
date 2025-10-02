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
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.overrideDCFLastDCDismissed;
            var6 = arg2;
            var2 = null;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5;
case 2:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useToggleDismissibleContentDismissState(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 7;
        var3 = var11[var3];
        var5 = undefined;
        var9 = var4.bind(var5)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getGuildId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var8.bind(var9)(var6, var3);
        var _closure2_slot1 = var6;
        var3 = 8;
        var3 = var11[var3];
        var8 = var4.bind(var5)(var3);
        var4 = var8.UNSAFE_useIsDismissibleContentDismissed;
        var3 = {};
        var10 = _closure1_slot1;
        var9 = 9;
        var9 = var11[var9];
        var9 = var10.bind(var5)(var9);
        var9 = var9.Millis;
        var9 = var9.WEEK;
        var3['cooldownDurationMs'] = var9;
        var3['guildId'] = var6;
        var3 = var4.bind(var8)(var7, var3);
        var _closure2_slot2 = var3;
        var4 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var3;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 10;
                var1 = var1[var4];
                var6 = undefined;
                var5 = var2.bind(var6)(var1);
                var3 = var5.isVersionedDismissibleContent;
                var1 = _closure2_slot0;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var5 = var3.bind(var6)(var1);
                var3 = var5.isSnowflakeBoundDismissibleContent;
                var1 = _closure2_slot0;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var5 = var3.bind(var6)(var1);
                var3 = var5.isTimeRecurringDismissibleContent;
                var1 = _closure2_slot0;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var5 = var3.bind(var6)(var1);
                var3 = var5.isSingleUseGuildDismissibleContent;
                var1 = _closure2_slot0;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var4 = var3.bind(var6)(var1);
                var3 = var4.isTimeRecurringGuildDismissibleContent;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var1);
                var12 = _closure2_slot0;
                if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var1 = _closure2_slot2;
                var3 = _closure1_slot5;
                var3 = var3.bind(var6)(var12, var1);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var4 = var4.bind(var6)(var3);
                if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var1 = var4.addDismissedContent;
                var1 = var1.bind(var4)(var12);
                var1 = true;
                _fun0002_ip = 16; continue _fun0002;
case 14:
                var3 = var4.removeDismissedContent;
                var3 = var3.bind(var4)(var12);
                var1 = false;
case 16:
                _fun0002_ip = 17; continue _fun0002;
case 12:
                var11 = _closure2_slot1;
                var4 = _closure2_slot2;
                var8 = null;
                var9 = var8 == var11;
                var3 = false;
                if(var9) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var9 = var8 != var11;
                var13 = 1;
                var8 = var13;
                if(!var9) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var9 = var14[var9];
                var10 = var10.bind(var6)(var9);
                var9 = var10.getGuildNextNumTimesDismissed;
                var8 = var9.bind(var10)(var12, var11);
case 20:
                var9 = _closure1_slot5;
                var9 = var9.bind(var6)(var12, var4);
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var9 = var14[var9];
                var10 = var10.bind(var6)(var9);
                if(var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var4 = var10.UNSAFE_addTimeRecurringGuildDismissedContent;
                var4 = var4.bind(var10)(var12, var11, var8);
                var4 = true;
                _fun0002_ip = 24; continue _fun0002;
case 22:
                var9 = var10.UNSAFE_removeTimeRecurringGuildDismissedContent;
                var8 = var8 - var13;
                var8 = var9.bind(var10)(var12, var11, var8);
                var4 = false;
case 24:
                var3 = var4;
case 18:
                var1 = var3;
case 17:
                _fun0002_ip = 25; continue _fun0002;
case 10:
                var12 = _closure2_slot0;
                var11 = _closure2_slot1;
                var4 = _closure2_slot2;
                var8 = null;
                var9 = var8 == var11;
                var3 = false;
                if(var9) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                var9 = var8 != var11;
                var13 = 1;
                var8 = var13;
                if(!var9) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var9 = var14[var9];
                var10 = var10.bind(var6)(var9);
                var9 = var10.getGuildNextNumTimesDismissed;
                var8 = var9.bind(var10)(var12, var11);
case 28:
                var9 = _closure1_slot5;
                var9 = var9.bind(var6)(var12, var4);
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var9 = var14[var9];
                var10 = var10.bind(var6)(var9);
                if(var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var4 = var10.UNSAFE_addGuildDismissedContent;
                var4 = var4.bind(var10)(var12, var11, var8);
                var4 = true;
                _fun0002_ip = 32; continue _fun0002;
case 30:
                var9 = var10.UNSAFE_removeGuildDismissedContent;
                var8 = var8 - var13;
                var8 = var9.bind(var10)(var12, var11, var8);
                var4 = false;
case 32:
                var3 = var4;
case 26:
                var1 = var3;
case 25:
                _fun0002_ip = 33; continue _fun0002;
case 8:
                var8 = _closure2_slot0;
                var3 = _closure2_slot2;
                var4 = _closure1_slot5;
                var4 = var4.bind(var6)(var8, var3);
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                if(var3) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                var3 = 4;
                var4 = var9[var3];
                var10 = var5.bind(var6)(var4);
                var4 = var10.addTimeRecurringDismissedContent;
                var3 = var9[var3];
                var12 = var5.bind(var6)(var3);
                var11 = var12.getNextNumTimesDismissed;
                var3 = {};
                var3 = var11.bind(var12)(var8, var3);
                var3 = var4.bind(var10)(var8, var3);
                var3 = true;
                _fun0002_ip = 36; continue _fun0002;
case 34:
                var4 = 5;
                var4 = var9[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.removeDismissedRecurringContent;
                var4 = var4.bind(var5)(var8);
                var3 = false;
case 36:
                var1 = var3;
case 33:
                _fun0002_ip = 37; continue _fun0002;
case 6:
                var8 = _closure2_slot0;
                var4 = _closure2_slot2;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var5 = var5[var3];
                var10 = var9.bind(var6)(var5);
                var9 = var10.getNextNumTimesDismissed;
                var5 = {};
                var11 = var9.bind(var10)(var8, var5);
                var5 = _closure1_slot5;
                var5 = var5.bind(var6)(var8, var4);
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                if(var4) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var4 = var9[var3];
                var10 = var5.bind(var6)(var4);
                var4 = var10.addSnowflakeBoundDismissedContent;
                var13 = _closure1_slot1;
                var12 = 6;
                var12 = var9[var12];
                var13 = var13.bind(var6)(var12);
                var12 = var13.fromTimestamp;
                var14 = global;
                var15 = var14.Date;
                var14 = var15.now;
                var14 = var14.bind(var15)();
                var3 = var9[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS;
                var3 = var14 + var3;
                var3 = var12.bind(var13)(var3);
                var3 = var4.bind(var10)(var8, var3, var11);
                var3 = true;
                _fun0002_ip = 40; continue _fun0002;
case 38:
                var4 = 5;
                var4 = var9[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.removeDismissedRecurringContent;
                var4 = var4.bind(var5)(var8);
                var3 = false;
case 40:
                var1 = var3;
case 37:
                _fun0002_ip = 41; continue _fun0002;
case 4:
                var5 = _closure2_slot0;
                var3 = _closure2_slot2;
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var9 = var8.bind(var6)(var2);
                var2 = var9.getVersionedDismissibleContentCurrentVersion;
                var9 = var2.bind(var9)(var5);
                var2 = 4;
                var4 = var4[var2];
                var10 = var8.bind(var6)(var4);
                var8 = var10.getNextNumTimesDismissed;
                var4 = {};
                var8 = var8.bind(var10)(var5, var4);
                var4 = _closure1_slot5;
                var4 = var4.bind(var6)(var5, var3);
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                if(var3) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var2 = var7[var2];
                var3 = var4.bind(var6)(var2);
                var2 = var3.addVersionedDismissedContent;
                var2 = var2.bind(var3)(var5, var9, var8);
                var2 = true;
                _fun0002_ip = 44; continue _fun0002;
case 42:
                var3 = 5;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.removeDismissedRecurringContent;
                var3 = var3.bind(var4)(var5);
                var2 = false;
case 44:
                var1 = var2;
case 41:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = {};
        var1['isDismissed'] = var3;
        var1['handleToggleDismissState'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();