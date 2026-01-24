// app/modules/guild_onboarding/DefaultChannelThresholdUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
case 36:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 36; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _isDefaultChannelThresholdMetAfterDelete() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var2 = null;
                    var2 = var2 == var7;
                    if(var2) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var6 = _closure1_slot13;
                    var5 = undefined;
                    var4 = arg2;
                    var3 = {'removingView': true, 'removingChat': true};
                    var3 = var6.bind(var5)(var7, var4, var3);
                    SaveGenerator(address=56);
case 4:
                    return var3;
case 28:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    var2 = var3;
                    if(!var4) { _fun0004_ip = 39; continue _fun0004 }
case 41:
                    return var3;
case 39:
                    return var2;
case 37:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function isChattableChannelThresholdMetAfterChannelChange() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _isChattableChannelThresholdMetAfterChannelChange() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    var8 = arg2;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var _closure4_slot0 = var8;
                    var6 = _closure1_slot5;
                    var2 = var6.getGuild;
                    var6 = var2.bind(var6)(var9);
                    var19 = null;
                    if(!(var19 != var6)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var2 = var19 != var6;
                    if(!var2) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var11 = var6.features;
                    var7 = var19 == var11;
                    var6 = undefined;
                    if(var7) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var10 = var11.has;
                    var7 = _closure1_slot8;
                    var7 = var7.GUILD_ONBOARDING;
                    var6 = var10.bind(var11)(var7);
case 48:
                    var2 = var6;
case 46:
                    if(var2) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var6 = true;
                    return var6;
case 50:
                    if(!var2) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var7 = _closure1_slot6;
                    var6 = var7.shouldFetchPrompts;
                    var2 = var6.bind(var7)(var9);
case 52:
                    if(!var2) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 5;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var2 = var6.fetchOnboardingPrompts;
                    var2 = var2.bind(var6)(var9);
                    SaveGenerator(address=162);
case 56:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 57; continue _fun0005 }
case 54:
                    var7 = _closure1_slot6;
                    var6 = var7.getDefaultChannelIds;
                    var10 = var6.bind(var7)(var9);
                    var7 = _closure1_slot6;
                    var6 = var7.isAdvancedMode;
                    var6 = var6.bind(var7)(var9);
                    var7 = var10;
                    if(!var6) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var13 = new Array(0);
                    var11 = _closure1_slot10;
                    var12 = _closure1_slot6;
                    var6 = var12.getOnboardingPromptsForOnboarding;
                    var6 = var6.bind(var12)(var9);
                    var18 = undefined;
                    var17 = var11.bind(var18)(var6);
                    var12 = var17.bind(var18)();
                    var6 = var12.done;
                    var16 = var12;
                    var15 = undefined;
                    var14 = undefined;
                    var12 = undefined;
                    if(var6) { _fun0005_ip = 60; continue _fun0005 }
case 24:
                    var6 = var16.value;
                    var21 = var6.required;
                    var20 = var12;
                    if(!var21) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var21 = _closure1_slot10;
                    var6 = var6.options;
                    var22 = var21.bind(var18)(var6);
                    var23 = var22.bind(var18)();
                    var6 = var23.done;
                    var21 = var23;
                    var15 = var21;
                    var14 = var22;
                    var20 = var12;
                    if(var6) { _fun0005_ip = 61; continue _fun0005 }
case 63:
                    var23 = var21.value;
                    var6 = var23.channelIds;
                    if(!(var19 != var6)) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                    var24 = var13.push;
                    var28 = var23.channelIds;
                    var6 = new Array(0);
                    var29 = var6;
                    var27 = 0;
                    var25 = arraySpread(var29, var28, var27);
                    var29 = var24;
                    var28 = var6;
                    var27 = var13;
                    var6 = apply(var29, var28, var27);
case 64:
                    var24 = var22.bind(var18)();
                    var6 = var24.done;
                    var21 = var24;
                    var15 = var21;
                    var14 = var22;
                    var20 = var23;
                    if(!var6) { _fun0005_ip = 63; continue _fun0005 }
case 61:
                    var21 = var17.bind(var18)();
                    var6 = var21.done;
                    var12 = var20;
                    var16 = var21;
                    if(!var6) { _fun0005_ip = 24; continue _fun0005 }
case 60:
                    var6 = global;
                    var12 = var6.Set;
                    var6 = new Array(0);
                    var29 = var6;
                    var28 = var10;
                    var27 = 0;
                    var27 = arraySpread(var29, var28, var27);
                    var29 = var6;
                    var28 = var13;
                    var10 = arraySpread(var29, var28, var27);
                    var10 = var12.prototype;
                    var10 = Object.create(var10, {constructor: {value: var12}});
                    var30 = var10;
                    var29 = var6;
                    var6 = new var30[var12](var29, var28);
                    var28 = var6 instanceof Object ? var6 : var10;
                    var6 = new Array(0);
                    var29 = var6;
                    var27 = 0;
                    var10 = arraySpread(var29, var28, var27);
                    var7 = var6;
case 58:
                    var6 = var7.includes;
                    var6 = var6.bind(var7)(var8);
                    if(var6) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                    var6 = true;
                    return var6;
case 66:
                    var6 = var5.removingChat;
                    if(var6) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                    var5 = var5.removingView;
                    if(var5) { _fun0005_ip = 68; continue _fun0005 }
case 70:
                    var5 = true;
                    return var5;
case 68:
                    var6 = _closure1_slot6;
                    var5 = var6.getDefaultChannelIds;
                    var8 = var5.bind(var6)(var9);
                    var6 = _closure1_slot6;
                    var5 = var6.isAdvancedMode;
                    var5 = var5.bind(var6)(var9);
                    if(var5) { _fun0005_ip = 71; continue _fun0005 }
case 72:
                    var7 = new Array(0);
                    _fun0005_ip = 73; continue _fun0005;
case 71:
                    var6 = _closure1_slot6;
                    var5 = var6.getOnboardingPromptsForOnboarding;
                    var7 = var5.bind(var6)(var9);
case 73:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 6;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var10.bind(var5)(var6);
                    var5 = var6.getMinimumSetOfDefaultChannelIds;
                    var26 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = arg1;
                            var1 = _closure4_slot0;
                            var1 = var4 !== var1;
                            if(!var1) { _fun0006_ip = 74; continue _fun0006 }
case 75:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.isChattableChannelId;
                            var1 = var2.bind(var3)(var4);
case 74:
                            return var1;
                        }
                    };
                    var30 = var6;
                    var29 = var9;
                    var28 = var8;
                    var27 = var7;
                    var4 = var30[var5](var29, var28, var27, var26, var25);
                    var4 = var4.length;
                    var3 = _closure1_slot7;
                    var3 = var4 < var3;
                    var3 = !var3;
                    return var3;
case 57:
                    return var2;
case 44:
                    var2 = true;
                    return var2;
case 42:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _checkChattableChannelThresholdMetAfterChannelPermissionDeny() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var8 = arg2;
                    var10 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 76; continue _fun0007 }
case 40:
                    var3 = var2.getGuildId;
                    var6 = var3.bind(var2)();
                    var4 = null;
                    if(!(var4 != var6)) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                    var12 = var8;
                    if(!(var4 != var10)) { _fun0007_ip = 79; continue _fun0007 }
case 2:
                    var11 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var3 = 7;
                    var5 = var13[var3];
                    var9 = undefined;
                    var7 = var11.bind(var9)(var5);
                    var5 = var7.filter;
                    var3 = var13[var3];
                    var9 = var11.bind(var9)(var3);
                    var3 = var9.invert;
                    var3 = var3.bind(var9)(var10);
                    var12 = var5.bind(var7)(var8, var3);
case 79:
                    var3 = var2.permissionOverwrites;
                    var3 = var3[var6];
                    if(!(var4 == var3)) { _fun0007_ip = 80; continue _fun0007 }
case 81:
                    var7 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var4 = 7;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5);
                    var5 = var7.deserialize;
                    var4 = 0;
                    var11 = var5.bind(var7)(var4);
                    _fun0007_ip = 82; continue _fun0007;
case 80:
                    var10 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var8 = 7;
                    var4 = var13[var8];
                    var9 = undefined;
                    var7 = var10.bind(var9)(var4);
                    var5 = var7.filter;
                    var4 = var3.deny;
                    var8 = var13[var8];
                    var9 = var10.bind(var9)(var8);
                    var8 = var9.invert;
                    var3 = var3.allow;
                    var3 = var8.bind(var9)(var3);
                    var11 = var5.bind(var7)(var4, var3);
case 82:
                    var5 = {};
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var10 = 7;
                    var3 = var3[var10];
                    var13 = undefined;
                    var7 = var4.bind(var13)(var3);
                    var4 = var7.has;
                    var3 = _closure1_slot9;
                    var3 = var3.VIEW_CHANNEL;
                    var3 = var4.bind(var7)(var12, var3);
                    if(!var3) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                    var7 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var4 = var4[var10];
                    var8 = var7.bind(var13)(var4);
                    var7 = var8.has;
                    var4 = _closure1_slot9;
                    var4 = var4.VIEW_CHANNEL;
                    var4 = var7.bind(var8)(var11, var4);
                    var3 = !var4;
case 83:
                    var5['removingView'] = var3;
                    var4 = false;
                    var5['removingChat'] = var4;
                    var3 = var2.isForumLikeChannel;
                    var14 = var3.bind(var2)();
                    var7 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var3 = var3[var10];
                    var8 = var7.bind(var13)(var3);
                    var7 = var8.has;
                    var3 = _closure1_slot9;
                    if(var14) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                    var14 = var3.SEND_MESSAGES;
                    var14 = var7.bind(var8)(var12, var14);
                    if(!var14) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                    var16 = _closure1_slot2;
                    var15 = _closure1_slot3;
                    var15 = var15[var10];
                    var17 = var16.bind(var13)(var15);
                    var16 = var17.has;
                    var15 = _closure1_slot9;
                    var15 = var15.SEND_MESSAGES;
                    var15 = var16.bind(var17)(var11, var15);
                    var14 = !var15;
case 87:
                    var5['removingChat'] = var14;
                    _fun0007_ip = 89; continue _fun0007;
case 85:
                    var3 = var3.SEND_MESSAGES_IN_THREADS;
                    var3 = var7.bind(var8)(var12, var3);
                    if(!var3) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                    var8 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var7 = var7[var10];
                    var10 = var8.bind(var13)(var7);
                    var8 = var10.has;
                    var7 = _closure1_slot9;
                    var7 = var7.SEND_MESSAGES_IN_THREADS;
                    var7 = var8.bind(var10)(var11, var7);
                    var3 = !var7;
case 90:
                    var5['removingChat'] = var3;
case 89:
                    var3 = var5.removingChat;
                    if(var3) { _fun0007_ip = 92; continue _fun0007 }
case 93:
                    var3 = var5.removingView;
                    if(var3) { _fun0007_ip = 92; continue _fun0007 }
case 94:
                    var3 = true;
                    return var3;
case 92:
                    var7 = _closure1_slot6;
                    var3 = var7.isAdvancedMode;
                    var8 = var3.bind(var7)(var6);
                    var3 = _closure1_slot13;
                    var2 = var2.id;
                    var2 = var3.bind(var13)(var6, var2, var5);
                    SaveGenerator(address=550);
case 95:
                    return var2;
case 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 97; continue _fun0007 }
case 98:
                    var5 = !var2;
                    var3 = !var5;
                    if(!var5) { _fun0007_ip = 99; continue _fun0007 }
case 100:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var5 = 8;
                    var5 = var10[var5];
                    var7 = var6.bind(var13)(var5);
                    var6 = var7.show;
                    var5 = {};
                    var15 = _closure1_slot0;
                    var14 = 9;
                    var11 = var10[var14];
                    var11 = var15.bind(var13)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var10[var14];
                    var10 = var15.bind(var13)(var10);
                    var10 = var10.t;
                    var10 = var10.ut7sq0;
                    var10 = var11.bind(var12)(var10);
                    var5['title'] = var10;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var11 = var9[var14];
                    var11 = var10.bind(var13)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var9[var14];
                    var9 = var10.bind(var13)(var9);
                    var9 = var9.t;
                    if(var8) { _fun0007_ip = 101; continue _fun0007 }
case 102:
                    var10 = var9.5sm9rH;
                    var8 = {};
                    var8 = var11.bind(var12)(var10, var8);
                    _fun0007_ip = 103; continue _fun0007;
case 101:
                    var10 = var9.w9Oz5K;
                    var9 = {};
                    var8 = var11.bind(var12)(var10, var9);
case 103:
                    var5['body'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var3 = false;
case 99:
                    return var3;
case 97:
                    return var2;
case 77:
                    var2 = true;
                    return var2;
case 76:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot8 = var7;
    var7 = var4.GuildSettingsSections;
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/DefaultChannelThresholdUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isDefaultChannelThresholdMetAfterDelete() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['isDefaultChannelThresholdMetAfterDelete'] = var4;
    var2 = function checkChattableChannelThresholdMetAfterChannelPermissionDeny() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['checkChattableChannelThresholdMetAfterChannelPermissionDeny'] = var2;
    return var1;
})();