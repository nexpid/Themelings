// app/modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function toggleDismissibleContentShared(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.overrideDCFLastDCDismissed;
            var6 = arg2;
            var3 = null;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2;
case 2:
            var2 = arg3;
            var2 = var4.bind(var5)(var3, var2);
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
        var4 = var8.useIsDismissibleContentDismissed_UNSAFE;
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
                var5 = var3.bind(var6)(var1);
                var3 = var5.isTimeRecurringGuildDismissibleContent;
                var1 = _closure2_slot0;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var4 = var3.bind(var6)(var1);
                var3 = var4.isSnowflakeBoundGuildDismissibleContent;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var1);
                var12 = _closure2_slot0;
                if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var1 = _closure2_slot2;
                var3 = _closure1_slot5;
                var3 = var3.bind(var6)(var12, var1);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var4 = var4.bind(var6)(var3);
                if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var1 = var4.addDismissedContent;
                var1 = var1.bind(var4)(var12);
                var1 = true;
                _fun0002_ip = 18; continue _fun0002;
case 16:
                var3 = var4.removeDismissedContent;
                var3 = var3.bind(var4)(var12);
                var1 = false;
case 18:
                _fun0002_ip = 19; continue _fun0002;
case 14:
                var11 = _closure2_slot1;
                var9 = _closure2_slot2;
                var4 = null;
                var8 = var4 == var11;
                var3 = false;
                if(var8) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var4 = var4 != var11;
                var13 = 1;
                var8 = var13;
                if(!var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 4;
                var4 = var14[var4];
                var10 = var10.bind(var6)(var4);
                var4 = var10.getGuildNextNumTimesDismissed;
                var8 = var4.bind(var10)(var12, var11);
case 22:
                var4 = _closure1_slot5;
                var4 = var4.bind(var6)(var12, var9, var11);
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = 4;
                var10 = var18[var4];
                var10 = var17.bind(var6)(var10);
                if(var9) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var9 = var10.UNSAFE_addSnowflakeBoundGuildDismissedContent;
                var15 = _closure1_slot1;
                var14 = 6;
                var14 = var18[var14];
                var15 = var15.bind(var6)(var14);
                var14 = var15.fromTimestamp;
                var16 = global;
                var19 = var16.Date;
                var16 = var19.now;
                var16 = var16.bind(var19)();
                var4 = var18[var4];
                var4 = var17.bind(var6)(var4);
                var4 = var4.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS;
                var4 = var16 + var4;
                var22 = var14.bind(var15)(var4);
                var24 = var10;
                var23 = var12;
                var21 = var11;
                var20 = var8;
                var4 = var24[var9](var23, var22, var21, var20, var19);
                var4 = true;
                _fun0002_ip = 26; continue _fun0002;
case 24:
                var9 = var10.UNSAFE_removeSnowflakeBoundGuildDismissedContent;
                var8 = var8 - var13;
                var8 = var9.bind(var10)(var12, var11, var8);
                var4 = false;
case 26:
                var3 = var4;
case 20:
                var1 = var3;
case 19:
                _fun0002_ip = 27; continue _fun0002;
case 12:
                var12 = _closure2_slot0;
                var11 = _closure2_slot1;
                var4 = _closure2_slot2;
                var8 = null;
                var9 = var8 == var11;
                var3 = false;
                if(var9) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var9 = var8 != var11;
                var13 = 1;
                var8 = var13;
                if(!var9) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var9 = var14[var9];
                var10 = var10.bind(var6)(var9);
                var9 = var10.getGuildNextNumTimesDismissed;
                var8 = var9.bind(var10)(var12, var11);
case 30:
                var9 = _closure1_slot5;
                var9 = var9.bind(var6)(var12, var4, var11);
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var9 = var14[var9];
                var10 = var10.bind(var6)(var9);
                if(var4) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var4 = var10.UNSAFE_addTimeRecurringGuildDismissedContent;
                var4 = var4.bind(var10)(var12, var11, var8);
                var4 = true;
                _fun0002_ip = 34; continue _fun0002;
case 32:
                var9 = var10.UNSAFE_removeTimeRecurringGuildDismissedContent;
                var8 = var8 - var13;
                var8 = var9.bind(var10)(var12, var11, var8);
                var4 = false;
case 34:
                var3 = var4;
case 28:
                var1 = var3;
case 27:
                _fun0002_ip = 35; continue _fun0002;
case 10:
                var12 = _closure2_slot0;
                var11 = _closure2_slot1;
                var4 = _closure2_slot2;
                var8 = null;
                var9 = var8 == var11;
                var3 = false;
                if(var9) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                var9 = var8 != var11;
                var13 = 1;
                var8 = var13;
                if(!var9) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var9 = var14[var9];
                var10 = var10.bind(var6)(var9);
                var9 = var10.getGuildNextNumTimesDismissed;
                var8 = var9.bind(var10)(var12, var11);
case 38:
                var9 = _closure1_slot5;
                var9 = var9.bind(var6)(var12, var4, var11);
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var9 = var14[var9];
                var10 = var10.bind(var6)(var9);
                if(var4) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var4 = var10.UNSAFE_addGuildDismissedContent;
                var4 = var4.bind(var10)(var12, var11, var8);
                var4 = true;
                _fun0002_ip = 42; continue _fun0002;
case 40:
                var9 = var10.UNSAFE_removeGuildDismissedContent;
                var8 = var8 - var13;
                var8 = var9.bind(var10)(var12, var11, var8);
                var4 = false;
case 42:
                var3 = var4;
case 36:
                var1 = var3;
case 35:
                _fun0002_ip = 43; continue _fun0002;
case 8:
                var8 = _closure2_slot0;
                var3 = _closure2_slot2;
                var4 = _closure1_slot5;
                var4 = var4.bind(var6)(var8, var3);
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                if(var3) { _fun0002_ip = 44; continue _fun0002 }
case 45:
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
                _fun0002_ip = 46; continue _fun0002;
case 44:
                var4 = 5;
                var4 = var9[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.removeDismissedRecurringContent;
                var4 = var4.bind(var5)(var8);
                var3 = false;
case 46:
                var1 = var3;
case 43:
                _fun0002_ip = 47; continue _fun0002;
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
                if(var4) { _fun0002_ip = 48; continue _fun0002 }
case 49:
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
                _fun0002_ip = 50; continue _fun0002;
case 48:
                var4 = 5;
                var4 = var9[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.removeDismissedRecurringContent;
                var4 = var4.bind(var5)(var8);
                var3 = false;
case 50:
                var1 = var3;
case 47:
                _fun0002_ip = 51; continue _fun0002;
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
                if(var3) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                var2 = var7[var2];
                var3 = var4.bind(var6)(var2);
                var2 = var3.addVersionedDismissedContent;
                var2 = var2.bind(var3)(var5, var9, var8);
                var2 = true;
                _fun0002_ip = 54; continue _fun0002;
case 52:
                var3 = 5;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.removeDismissedRecurringContent;
                var3 = var3.bind(var4)(var5);
                var2 = false;
case 54:
                var1 = var2;
case 51:
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