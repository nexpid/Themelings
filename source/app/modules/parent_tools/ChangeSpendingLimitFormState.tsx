// app/modules/parent_tools/ChangeSpendingLimitFormState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/ChangeSpendingLimitFormState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChangeSpendingLimitFormState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var18 = arg1;
            var _closure2_slot0 = var18;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var3 = var8[var3];
            var19 = undefined;
            var3 = var6.bind(var19)(var3);
            var4 = var3.ParentalControlledSpendingLimit;
            var3 = var4.useControlledSetting;
            var5 = var3.bind(var4)(var18);
            var _closure2_slot1 = var5;
            var4 = 5;
            var3 = var8[var4];
            var11 = var6.bind(var19)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var3;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getSpendingLimit;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var10.bind(var11)(var9, var7);
            var4 = var8[var4];
            var8 = var6.bind(var19)(var4);
            var6 = var8.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getMonthlyPurchases;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var3.total_amount;
case 2:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var3 = var6.bind(var8)(var4, var3);
            var9 = null;
            var6 = var9 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.currency;
case 6:
            if(!(var9 == var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var9 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var7.currency;
case 10:
            var4 = var6;
case 8:
            var7 = var9 != var4;
            var6 = 'usd';
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var4;
case 12:
            var4 = var6.toLowerCase;
            var13 = var4.bind(var6)();
            var _closure2_slot2 = var13;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 6;
            var4 = var7[var4];
            var4 = var6.bind(var19)(var4);
            var4 = var4.CurrencyExponents;
            var4 = var4[var13];
            var6 = var9 != var4;
            var21 = 2;
            var11 = var21;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var4;
case 14:
            var _closure2_slot3 = var11;
            var14 = _closure1_slot4;
            var7 = var14.useMemo;
            var6 = new Array(1);
            var6[0] = var13;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getCurrencySymbol;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var7.bind(var14)(var4, var6);
            var7 = var14.useMemo;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 7;
            var4 = var8[var4];
            var4 = var6.bind(var19)(var4);
            var6 = var4.getNextRenewalDateLabel;
            var4 = new Array(0);
            var4 = var7.bind(var14)(var6, var4);
            var7 = var14.useState;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = '';
                    if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = global;
                    var4 = var3.String;
                    var3 = _closure2_slot1;
                    var3 = var3.amount;
                    var6 = _closure2_slot3;
                    var7 = 10;
                    var2 = exponentiationOperator(var7, var6);
                    var3 = var3 / var2;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 16:
                    return var1;
                }
            };
            var7 = var7.bind(var14)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var19)(var7, var21);
            var10 = 0;
            var15 = var6[var10];
            var20 = 1;
            var6 = var6[var20];
            var _closure2_slot4 = var6;
            var8 = var14.useCallback;
            var7 = new Array(1);
            var7[0] = var11;
            var6 = function(arg1) {
                var3 = _closure2_slot4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.sanitizeAmountInput;
                var4 = _closure2_slot3;
                var1 = arg1;
                var1 = var5.bind(var6)(var1, var4);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var14 = var8.bind(var14)(var6, var7);
            var6 = '';
            var7 = var6 === var15;
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var9 != var5;
case 18:
            var _closure2_slot5 = var7;
            var5 = global;
            var6 = var5.parseFloat;
            var22 = var6.bind(var19)(var15);
            var8 = var5.Number;
            var6 = var8.isNaN;
            var6 = var6.bind(var8)(var22);
            var16 = !var6;
            if(!var16) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = var22 >= var10;
case 20:
            var6 = var7;
            if(var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var16;
case 22:
            var _closure2_slot6 = var6;
            var8 = null;
            if(!var16) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var17 = var5.Math;
            var16 = var17.round;
            var24 = 10;
            var23 = var11;
            var5 = exponentiationOperator(var24, var23);
            var5 = var22 * var5;
            var8 = var16.bind(var17)(var5);
case 24:
            var _closure2_slot7 = var8;
            var17 = _closure1_slot4;
            var16 = var17.useState;
            var5 = false;
            var16 = var16.bind(var17)(var5);
            var5 = _closure1_slot3;
            var16 = var5.bind(var19)(var16, var21);
            var5 = var16[var10];
            var16 = var16[var20];
            var _closure2_slot8 = var16;
            var16 = var17.useCallback;
            var2 = _closure1_slot2;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 26:
                        var2 = _closure2_slot6;
                        if(!var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var4 = _closure2_slot8;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 29: // try_start_0
                        var2 = _closure2_slot5;
                        if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 5:
                        var4 = _closure2_slot7;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var7 = var2.ParentalControlledSpendingLimit;
                        var6 = var7.updateControlledSetting;
                        var4 = _closure2_slot0;
                        var2 = {};
                        var8 = _closure2_slot7;
                        var2['amount'] = var8;
                        var8 = _closure2_slot2;
                        var2['currency'] = var8;
                        var2 = var6.bind(var7)(var4, var2);
                        SaveGenerator(address=125);
case 33:
                        return var2;
case 34:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(!var4) { _fun0004_ip = 31; continue _fun0004 }
case 35: // try_end0
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 30: // try_start_1
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var7 = var2.ParentalControlledSpendingLimit;
                        var6 = var7.updateControlledSetting;
                        var4 = _closure2_slot0;
                        var2 = null;
                        var2 = var6.bind(var7)(var4, var2);
                        SaveGenerator(address=196);
case 36:
                        return var2;
case 37:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 38; continue _fun0004 }
case 31: // try_end1
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
case 27:
                        var4 = undefined;
                        return var4;
case 38:
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 39: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot8;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 14:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var19)(var1);
            var1 = new Array(5);
            var1[0] = var6;
            var1[1] = var7;
            var1[2] = var8;
            var1[3] = var18;
            var1[4] = var13;
            var2 = var16.bind(var17)(var2, var1);
            var1 = {};
            var1['amountInput'] = var15;
            var1['handleAmountChange'] = var14;
            var1['currency'] = var13;
            var1['currencySymbol'] = var12;
            var1['exponent'] = var11;
            var1['isClearingCap'] = var7;
            var7 = var9 != var3;
            if(!var7) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var7 = var3 > var10;
case 40:
            if(!var7) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var7 = var9 != var8;
case 42:
            if(!var7) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var7 = var8 <= var3;
case 44:
            var1['isOverspending'] = var7;
            var1['canSave'] = var6;
            var1['isSubmitting'] = var5;
            var1['renewalDate'] = var4;
            var1['monthlySpend'] = var3;
            var1['save'] = var2;
            return var1;
        }
    };
    var3['useChangeSpendingLimitFormState'] = var2;
    return var1;
})();