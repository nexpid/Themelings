// app/modules/guild_member_verification/native/useJoinRequestButtonActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/useJoinRequestButtonActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useJoinRequestButtonActions(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var14 = arg2;
            var10 = arg3;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var14;
            var _closure2_slot2 = var10;
            var2 = null;
            var1 = var11;
            if(!(var2 == var1)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var1 = {};
 34:
            var13 = var1.guildId;
            var _closure2_slot3 = var13;
            var8 = var1.userId;
            var _closure2_slot4 = var8;
            var12 = var1.joinRequestId;
            var _closure2_slot5 = var12;
            var7 = _closure1_slot5;
            var3 = var7.useState;
            var2 = false;
            var5 = var3.bind(var7)(var2);
            var3 = _closure1_slot4;
            var15 = undefined;
            var2 = 2;
            var5 = var3.bind(var15)(var5, var2);
            var2 = 0;
            var3 = var5[var2];
            var _closure2_slot6 = var3;
            var2 = 1;
            var2 = var5[var2];
            var _closure2_slot7 = var2;
            var6 = var7.useCallback;
            var5 = function() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 6;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'JOIN_REQUEST_ERROR';
                var2['key'] = var6;
                var8 = _closure1_slot0;
                var5 = 7;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.R0RpRU;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var9 = var6.bind(var7)(var5, var2);
            var _closure2_slot8 = var9;
            var5 = var7.useCallback;
            var6 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 531; continue _fun0002 }
 10:
                        var2 = undefined;
                        var7 = undefined;
                        var3 = _closure2_slot6;
                        if(var3) { _fun0002_ip = 528; continue _fun0002 }
 27:
                        var3 = _closure2_slot3;
                        var8 = null;
                        if(!(var8 != var3)) { _fun0002_ip = 528; continue _fun0002 }
 40:
                        var3 = _closure2_slot4;
                        if(!(var8 != var3)) { _fun0002_ip = 528; continue _fun0002 }
 51:
                        var3 = _closure2_slot5;
                        if(!(var8 != var3)) { _fun0002_ip = 528; continue _fun0002 }
 62:
                        var9 = _closure1_slot6;
                        var5 = var9.getChannel;
                        var3 = _closure2_slot1;
                        var3 = var5.bind(var9)(var3);
                        if(!(var8 == var3)) { _fun0002_ip = 419; continue _fun0002 }
 90:
                        var5 = _closure2_slot6;
                        if(var5) { _fun0002_ip = 528; continue _fun0002 }
 100:
                        var9 = _closure2_slot7;
                        var5 = true;
                        var5 = var9.bind(var2)(var5);
 111: // try_start_0 // try_start_1
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 10;
                        var5 = var10[var5];
                        var11 = var9.bind(var2)(var5);
                        var10 = var11.createOrEnterJoinRequestInterview;
                        var5 = _closure2_slot5;
                        var9 = false;
                        var5 = var10.bind(var11)(var5, var9);
                        SaveGenerator(address=153);
 151:
                        return var5;
 153:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                        if(var10) { _fun0002_ip = 276; continue _fun0002 }
 159:
                        var7 = var5;
                        if(!(var8 != var5)) { _fun0002_ip = 232; continue _fun0002 }
 166:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 8;
                        var10 = var12[var10];
                        var11 = var11.bind(var2)(var10);
                        var12 = _closure1_slot7;
                        var10 = var12.CHANNEL;
                        var10 = var10.bind(var12)(var8, var7);
                        var7 = {'openChannel': true, 'navigationReplace': false};
                        var7 = var11.bind(var2)(var10, var7);
                        SaveGenerator(address=226);
 224:
                        return var7;
 226:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                        if(var10) { _fun0002_ip = 234; continue _fun0002 }
 232: // try_end0
                        _fun0002_ip = 328; continue _fun0002;
 234: // try_end1
                        var10 = _closure2_slot7;
                        var10 = var10.bind(var2)(var9);
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 9;
                        var10 = var12[var10];
                        var11 = var11.bind(var2)(var10);
                        var10 = var11.hideActionSheet;
                        var10 = var10.bind(var11)();
                        return var7;
 276:
                        var7 = _closure2_slot7;
                        var7 = var7.bind(var2)(var9);
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 9;
                        var7 = var10[var7];
                        var9 = var9.bind(var2)(var7);
                        var7 = var9.hideActionSheet;
                        var7 = var7.bind(var9)();
                        return var5;
 318: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        var5 = _closure2_slot8;
                        var5 = var5.bind(var2)();
 328: // try_end2
                        var7 = _closure2_slot7;
                        var5 = false;
                        var5 = var7.bind(var2)(var5);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 9;
                        var5 = var9[var5];
                        var7 = var7.bind(var2)(var5);
                        var5 = var7.hideActionSheet;
                        var5 = var5.bind(var7)();
                        _fun0002_ip = 528; continue _fun0002;
 374: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=4);
                        var7 = _closure2_slot7;
                        var6 = false;
                        var6 = var7.bind(var2)(var6);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 9;
                        var6 = var9[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.hideActionSheet;
                        var6 = var6.bind(var7)();
                        throw var5;
 419:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 8;
                        var5 = var7[var5];
                        var6 = var6.bind(var2)(var5);
                        var7 = _closure1_slot7;
                        var5 = var7.CHANNEL;
                        var3 = var3.id;
                        var5 = var5.bind(var7)(var8, var3);
                        var3 = {'openChannel': true, 'navigationReplace': false};
                        var3 = var6.bind(var2)(var5, var3);
                        SaveGenerator(address=484);
 482:
                        return var3;
 484:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 525; continue _fun0002 }
 490:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 9;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.hideActionSheet;
                        var4 = var4.bind(var5)();
                        var4 = undefined;
                        return var4;
 525:
                        return var3;
 528:
                        return var2;
 531:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var6.bind(var15)(var1);
            var1 = new Array(6);
            var1[0] = var13;
            var1[1] = var12;
            var1[2] = var14;
            var1[3] = var9;
            var1[4] = var3;
            var1[5] = var8;
            var2 = var5.bind(var7)(var2, var1);
            var1 = {};
            var14 = var7.useCallback;
            var5 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 428; continue _fun0003 }
 10:
                        var2 = _closure2_slot6;
                        if(var2) { _fun0003_ip = 423; continue _fun0003 }
 23:
                        var2 = _closure2_slot3;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0003_ip = 423; continue _fun0003 }
 36:
                        var2 = _closure2_slot4;
                        if(!(var4 != var2)) { _fun0003_ip = 423; continue _fun0003 }
 47:
                        var2 = _closure2_slot5;
                        if(!(var4 != var2)) { _fun0003_ip = 423; continue _fun0003 }
 58:
                        var4 = _closure2_slot7;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
 71: // try_start_0 // try_start_1
                        var6 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 10;
                        var2 = var12[var2];
                        var10 = var6.bind(var5)(var2);
                        var9 = var10.updateGuildJoinRequest;
                        var8 = _closure2_slot3;
                        var16 = _closure2_slot4;
                        var15 = _closure2_slot5;
                        var11 = _closure1_slot0;
                        var2 = 11;
                        var2 = var12[var2];
                        var2 = var11.bind(var5)(var2);
                        var2 = var2.GuildJoinRequestApplicationStatuses;
                        var14 = var2.APPROVED;
                        var18 = var10;
                        var17 = var8;
                        var2 = var18[var9](var17, var16, var15, var14, var13);
                        SaveGenerator(address=154);
 152:
                        return var2;
 154:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 275; continue _fun0003 }
 160:
                        var7 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var6 = 6;
                        var6 = var13[var6];
                        var8 = var7.bind(var5)(var6);
                        var7 = var8.open;
                        var6 = {};
                        var9 = 'JOIN_REQUEST_APPROVE';
                        var6['key'] = var9;
                        var12 = _closure1_slot0;
                        var9 = 7;
                        var10 = var13[var9];
                        var10 = var12.bind(var5)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var9 = var13[var9];
                        var9 = var12.bind(var5)(var9);
                        var9 = var9.t;
                        var9 = var9.WXHcq6;
                        var9 = var10.bind(var11)(var9);
                        var6['content'] = var9;
                        var9 = function icon() {
                            var4 = _closure1_slot8;
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 12;
                            var1 = var7[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.CircleCheckIcon;
                            var1 = {};
                            var6 = _closure1_slot1;
                            var5 = 13;
                            var8 = var7[var5];
                            var8 = var6.bind(var3)(var8);
                            var8 = var8.colors;
                            var8 = var8.STATUS_POSITIVE_BACKGROUND;
                            var1['color'] = var8;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.colors;
                            var5 = var5.STATUS_POSITIVE_TEXT;
                            var1['secondaryColor'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var6['icon'] = var9;
                        var6 = var7.bind(var8)(var6);
 273: // try_end0
                        _fun0003_ip = 329; continue _fun0003;
 275: // try_end1
                        var7 = _closure2_slot7;
                        var6 = false;
                        var6 = var7.bind(var5)(var6);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.hideActionSheet;
                        var4 = var4.bind(var6)();
                        return var2;
 319: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var2 = _closure2_slot8;
                        var2 = var2.bind(var5)();
 329: // try_end2
                        var4 = _closure2_slot7;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 9;
                        var2 = var6[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.hideActionSheet;
                        var2 = var2.bind(var4)();
                        _fun0003_ip = 423; continue _fun0003;
 375: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot7;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 9;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.hideActionSheet;
                        var3 = var3.bind(var4)();
                        throw var2;
 423:
                        var2 = undefined;
                        return var2;
 428:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var15)(var5);
            var5 = new Array(5);
            var5[0] = var13;
            var5[1] = var12;
            var5[2] = var9;
            var5[3] = var3;
            var5[4] = var8;
            var5 = var14.bind(var7)(var6, var5);
            var1['approveRequest'] = var5;
            var6 = var7.useCallback;
            var5 = new Array(6);
            var5[0] = var13;
            var5[1] = var12;
            var5[2] = var11;
            var5[3] = var10;
            var5[4] = var9;
            var5[5] = var8;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0004_ip = 24; continue _fun0004 }
 16:
                    var2 = _closure2_slot3;
                    var1 = var3 != var2;
 24:
                    if(!var1) { _fun0004_ip = 35; continue _fun0004 }
 27:
                    var2 = _closure2_slot4;
                    var1 = var3 != var2;
 35:
                    if(!var1) { _fun0004_ip = 46; continue _fun0004 }
 38:
                    var2 = _closure2_slot5;
                    var1 = var3 != var2;
 46:
                    if(!var1) { _fun0004_ip = 181; continue _fun0004 }
 52:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 9;
                    var3 = var1[var3];
                    var7 = undefined;
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 15;
                    var2 = var1[var2];
                    var3 = var3.bind(var7)(var2);
                    var2 = 14;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var7)(var2, var1);
                    var7 = _closure2_slot5;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'RejectionReason-';
                    var2 = var2.bind(var1)(var7);
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1['joinRequest'] = var7;
                    var7 = _closure2_slot8;
                    var1['onError'] = var7;
                    var6 = _closure2_slot2;
                    var1['onDismiss'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 181:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var1['rejectRequest'] = var4;
            var1['submitting'] = var3;
            var1['handleOpenInterview'] = var2;
            return var1;
        }
    };
    var3['useJoinRequestButtonActions'] = var2;
    return var1;
})();