// app/modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var1 = arg1;
        var10 = var1.searchQuery;
        var _closure2_slot0 = var10;
        var2 = var1.selectedUsers;
        var _closure2_slot1 = var2;
        var12 = var1.limit;
        var _closure2_slot2 = var12;
        var3 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 4;
        var1 = var13[var2];
        var11 = undefined;
        var9 = var3.bind(var11)(var1);
        var8 = var9.useStateFromStores;
        var1 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var1;
        var4 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getRecipientStatus;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = var8.bind(var9)(var6, var4);
        var _closure2_slot3 = var4;
        var2 = var13[var2];
        var4 = var3.bind(var11)(var2);
        var3 = var4.useStateFromStores;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getReferralsRemaining;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        var _closure2_slot4 = var1;
        var9 = _closure1_slot5;
        var3 = var9.useState;
        var2 = 0;
        var3 = var3.bind(var9)(var2);
        var16 = _closure1_slot4;
        var15 = 2;
        var3 = var16.bind(var11)(var3, var15);
        var4 = var3[var2];
        var _closure2_slot5 = var4;
        var14 = 1;
        var3 = var3[var14];
        var _closure2_slot6 = var3;
        var4 = var9.useState;
        var3 = new Array(0);
        var3 = var4.bind(var9)(var3);
        var3 = var16.bind(var11)(var3, var15);
        var6 = var3[var2];
        var3 = var3[var14];
        var _closure2_slot7 = var3;
        var3 = var9.useState;
        var8 = false;
        var3 = var3.bind(var9)(var8);
        var4 = var16.bind(var11)(var3, var15);
        var3 = var4[var2];
        var _closure2_slot8 = var3;
        var4 = var4[var14];
        var _closure2_slot9 = var4;
        var4 = var9.useState;
        var4 = var4.bind(var9)(var8);
        var8 = var16.bind(var11)(var4, var15);
        var4 = var8[var2];
        var _closure2_slot10 = var4;
        var8 = var8[var14];
        var _closure2_slot11 = var8;
        var17 = var9.useState;
        var8 = global;
        var8 = var8.Map;
        var18 = var8.prototype;
        var18 = Object.create(var18, {constructor: {value: var8}});
        var21 = var18;
        var8 = new var21[var8](var20);
        var8 = var8 instanceof Object ? var8 : var18;
        var8 = var17.bind(var9)(var8);
        var8 = var16.bind(var11)(var8, var15);
        var2 = var8[var2];
        var _closure2_slot12 = var2;
        var8 = var8[var14];
        var _closure2_slot13 = var8;
        var8 = _closure1_slot1;
        var7 = 5;
        var7 = var13[var7];
        var13 = var8.bind(var11)(var7);
        var7 = null;
        var8 = var7 != var1;
        var7 = 'Referrals remaining should not be null';
        var7 = var13.bind(var11)(var8, var7);
        var7 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                        var3 = global;
                        var2 = var3.Map;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var20 = var4;
                        var2 = new var20[var2](var19);
                        var7 = var2 instanceof Object ? var2 : var4;
                        var6 = _closure1_slot7;
                        var5 = _closure2_slot3;
                        var2 = undefined;
                        var13 = var6.bind(var2)(var5);
                        var6 = var13.bind(var2)();
                        var5 = var6.done;
                        var12 = 7;
                        var11 = 2;
                        var10 = 0;
                        var9 = 1;
                        var8 = 6;
                        if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                        var15 = var6.value;
                        var5 = _closure1_slot4;
                        var5 = var5.bind(var2)(var15, var11);
                        var16 = var5[var10];
                        var15 = var5[var9];
                        var17 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var5 = var17.bind(var2)(var5);
                        var5 = var5.ReferralOfferStatus;
                        var5 = var5.PENDING;
                        if(!(var15 === var5)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                        var15 = _closure2_slot12;
                        var5 = var15.has;
                        var5 = var5.bind(var15)(var16);
                        if(var5) { _fun0004_ip = 40; continue _fun0004 }
case 42:
                        var15 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var12];
                        var15 = var15.bind(var2)(var5);
                        var5 = var15.getUser;
                        var5 = var5.bind(var15)(var16);
                        SaveGenerator(address=193);
case 43:
                        return var5;
case 44:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=14);
                        if(var15) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                        var16 = var7.set;
                        var15 = var5.id;
                        var15 = var16.bind(var7)(var15, var5);
                        _fun0004_ip = 40; continue _fun0004;
case 45:
                        return var5;
case 40:
                        var15 = var13.bind(var2)();
                        var5 = var15.done;
                        var6 = var15;
                        if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 38:
                        var5 = _closure2_slot13;
                        var5 = var5.bind(var2)(var7);
                        var4 = _closure2_slot7;
                        var6 = var3.Array;
                        var5 = var6.from;
                        var3 = var7.values;
                        var3 = var3.bind(var7)();
                        var3 = var5.bind(var6)(var3);
                        var3 = var4.bind(var2)(var3);
                        return var2;
case 36:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var7 = var7.bind(var11)();
        var8 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                        if(var4) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                        var6 = var2;
                        var _closure5_slot0 = var2;
                        var3 = arg2;
                        var2 = undefined;
                        var14 = undefined;
                        var _closure5_slot1 = var2;
                        var15 = undefined;
                        var16 = undefined;
                        var _closure5_slot2 = var2;
                        var7 = _closure2_slot8;
                        if(var7) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                        var7 = _closure2_slot10;
                        if(var7) { _fun0005_ip = 49; continue _fun0005 }
case 51:
                        var8 = var6;
                        var7 = null;
                        if(!(var7 != var8)) { _fun0005_ip = 49; continue _fun0005 }
case 52:
                        var7 = _closure2_slot4;
                        var13 = 0;
                        if(!(var13 !== var7)) { _fun0005_ip = 49; continue _fun0005 }
case 53: // try_start_0 // try_start_2
                        var8 = _closure2_slot9;
                        var7 = true;
                        var7 = var8.bind(var2)(var7);
                        var8 = _closure2_slot12;
                        var7 = var8.values;
                        var20 = var7.bind(var8)();
                        var7 = new Array(0);
                        var21 = var7;
                        var19 = 0;
                        var8 = arraySpread(var21, var20, var19);
                        _closure5_slot1 = var7;
                        var9 = _closure1_slot7;
                        var8 = _closure2_slot3;
                        var8 = var9.bind(var2)(var8);
                        var15 = var8;
                        var8 = var8.bind(var2)();
                        var14 = var8;
                        var8 = var8.done;
                        var12 = 7;
                        var11 = 2;
                        var10 = 1;
                        var9 = 6;
                        if(var8) { _fun0005_ip = 54; continue _fun0005 }
case 16:
                        var8 = var14;
                        var17 = var8.value;
                        var8 = _closure1_slot4;
                        var8 = var8.bind(var2)(var17, var11);
                        var16 = var8[var13];
                        var17 = var8[var10];
                        var18 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var9];
                        var8 = var18.bind(var2)(var8);
                        var8 = var8.ReferralOfferStatus;
                        var8 = var8.PENDING;
                        if(!(var17 === var8)) { _fun0005_ip = 55; continue _fun0005 }
case 38:
                        var18 = _closure2_slot12;
                        var17 = var18.has;
                        var8 = var16;
                        var8 = var17.bind(var18)(var8);
                        if(var8) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                        var17 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var12];
                        var18 = var17.bind(var2)(var8);
                        var17 = var18.getUser;
                        var8 = var16;
                        var8 = var17.bind(var18)(var8);
                        SaveGenerator(address=293);
case 57:
                        return var8;
case 58:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=16);
                        if(var17) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                        var18 = _closure5_slot1;
                        var17 = var18.push;
                        var17 = var17.bind(var18)(var8);
                        _fun0005_ip = 55; continue _fun0005;
case 59: // try_end0 // try_end2
                        var18 = _closure2_slot9;
                        var17 = false;
                        var17 = var18.bind(var2)(var17);
                        return var8;
case 55: // try_start_1 // try_start_3
                        var8 = var15;
                        var8 = var8.bind(var2)();
                        var14 = var8;
                        var8 = var8.done;
                        if(!var8) { _fun0005_ip = 16; continue _fun0005 }
case 54:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.fetchReferralEligibleUsers;
                        var7 = var6;
                        var6 = _closure2_slot0;
                        var3 = var8.bind(var9)(var7, var6, var3);
                        SaveGenerator(address=391);
case 61:
                        return var3;
case 62:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(var6) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                        _closure5_slot2 = var3;
                        var7 = _closure2_slot7;
                        var6 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var2 = _closure5_slot2;
                                var5 = var2.users;
                                var4 = var5.filter;
                                var2 = function(arg1) {
                                    var3 = _closure2_slot1;
                                    var2 = var3.has;
                                    var1 = arg1;
                                    var1 = var1.id;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = !var1;
                                    return var1;
                                };
                                var4 = var4.bind(var5)(var2);
                                var5 = _closure5_slot1;
                                var2 = var5.filter;
                                var1 = function(arg1) {
                                    var3 = _closure2_slot1;
                                    var2 = var3.has;
                                    var1 = arg1;
                                    var1 = var1.id;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = !var1;
                                    return var1;
                                };
                                var1 = var2.bind(var5)(var1);
                                _closure5_slot1 = var1;
                                var1 = _closure5_slot0;
                                var6 = 0;
                                if(!(var6 !== var1)) { _fun0006_ip = 65; continue _fun0006 }
case 30:
                                var1 = new Array(0);
                                var8 = arg1;
                                var9 = var1;
                                var7 = 0;
                                var7 = arraySpread(var9, var8, var7);
                                var9 = var1;
                                var8 = var4;
                                var2 = arraySpread(var9, var8, var7);
                                _fun0006_ip = 66; continue _fun0006;
case 65:
                                var5 = _closure2_slot1;
                                var2 = var5.values;
                                var8 = var2.bind(var5)();
                                var2 = new Array(0);
                                var9 = var2;
                                var7 = 0;
                                var7 = arraySpread(var9, var8, var7);
                                var6 = _closure5_slot1;
                                var3 = var6.values;
                                var8 = var3.bind(var6)();
                                var9 = var2;
                                var7 = arraySpread(var9, var8, var7);
                                var9 = var2;
                                var8 = var4;
                                var3 = arraySpread(var9, var8, var7);
                                var1 = var2;
case 66:
                                return var1;
                            }
                        };
                        var6 = var7.bind(var2)(var6);
                        var6 = _closure2_slot13;
                        var5 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var1 = global;
                                var3 = var1.Map;
                                var1 = var3.prototype;
                                var2 = Object.create(var1, {constructor: {value: var3}});
                                var9 = arg1;
                                var10 = var2;
                                var1 = new var10[var3](var9, var8);
                                var1 = var1 instanceof Object ? var1 : var2;
                                var3 = _closure1_slot7;
                                var2 = _closure5_slot1;
                                var5 = undefined;
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.bind(var5)();
                                var2 = var3.done;
                                if(var2) { _fun0007_ip = 67; continue _fun0007 }
case 51:
                                var7 = var3.value;
                                var6 = var1.set;
                                var2 = var7.id;
                                var2 = var6.bind(var1)(var2, var7);
                                var6 = var4.bind(var5)();
                                var2 = var6.done;
                                var3 = var6;
                                if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 67:
                                return var1;
                            }
                        };
                        var5 = var6.bind(var2)(var5);
                        var6 = _closure2_slot6;
                        var5 = var3.nextIndex;
                        var5 = var6.bind(var2)(var5);
case 68: // try_end1
                        _fun0005_ip = 69; continue _fun0005;
case 63: // try_end3
                        var6 = _closure2_slot9;
                        var5 = false;
                        var5 = var6.bind(var2)(var5);
                        return var3;
case 70: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot11;
                        var3 = true;
                        var3 = var5.bind(var2)(var3);
case 69: // try_end4
                        var5 = _closure2_slot9;
                        var3 = false;
                        var3 = var5.bind(var2)(var3);
                        _fun0005_ip = 49; continue _fun0005;
case 71: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot9;
                        var4 = false;
                        var4 = var5.bind(var2)(var4);
                        throw var3;
case 49:
                        return var2;
case 47:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var11 = var8.bind(var11)();
        var _closure2_slot14 = var11;
        var8 = {};
        var8['limit'] = var12;
        var8['getNextRows'] = var11;
        var8['getLocalReferrals'] = var7;
        var _closure2_slot15 = var8;
        var7 = var9.useRef;
        var7 = var7.bind(var9)(var8);
        var _closure2_slot16 = var7;
        var8 = var9.useEffect;
        var7 = function() {
            var2 = _closure2_slot16;
            var1 = _closure2_slot15;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var7 = var8.bind(var9)(var7);
        var8 = var9.useEffect;
        var7 = new Array(2);
        var7[0] = var10;
        var7[1] = var1;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure2_slot16;
                var2 = var2.current;
                var4 = var2.getNextRows;
                var3 = var2.limit;
                var5 = var2.getLocalReferrals;
                var1 = _closure2_slot4;
                var2 = 0;
                if(!(!(var1 > var2))) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                var1 = undefined;
                var1 = var5.bind(var1)();
                _fun0008_ip = 4; continue _fun0008;
case 72:
                var1 = undefined;
                var1 = var4.bind(var1)(var2, var3);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var8.bind(var9)(var1, var7);
        var1 = {};
        var1['eligibleUsers'] = var6;
        var5 = function fetchUsers() {
            var4 = _closure2_slot14;
            var3 = _closure2_slot5;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['fetchUsers'] = var5;
        var1['hasError'] = var4;
        var1['isFetching'] = var3;
        var1['resendUsers'] = var2;
        return var1;
    };
    var3['useReferralProgramEligibleUsers'] = var2;
    return var1;
})();