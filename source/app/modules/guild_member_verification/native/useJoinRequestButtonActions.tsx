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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/useJoinRequestButtonActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useJoinRequestButtonActions(arg1, arg2) {
        var10 = arg1;
        var13 = arg2;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var13;
        var12 = var10.guildId;
        var _closure2_slot2 = var12;
        var8 = var10.userId;
        var _closure2_slot3 = var8;
        var11 = var10.joinRequestId;
        var _closure2_slot4 = var11;
        var7 = _closure1_slot5;
        var3 = var7.useState;
        var2 = false;
        var5 = var3.bind(var7)(var2);
        var3 = _closure1_slot4;
        var14 = undefined;
        var2 = 2;
        var5 = var3.bind(var14)(var5, var2);
        var2 = 0;
        var3 = var5[var2];
        var _closure2_slot5 = var3;
        var2 = 1;
        var2 = var5[var2];
        var _closure2_slot6 = var2;
        var6 = var7.useCallback;
        var5 = function() {
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 4;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var6 = 'JOIN_REQUEST_ERROR';
            var2['key'] = var6;
            var8 = _closure1_slot0;
            var5 = 5;
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
        var _closure2_slot7 = var9;
        var5 = var7.useCallback;
        var6 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 368; continue _fun0001 }
 10:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0001_ip = 363; continue _fun0001 }
 23:
                    var2 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0001_ip = 363; continue _fun0001 }
 36:
                    var2 = _closure2_slot3;
                    if(!(var4 != var2)) { _fun0001_ip = 363; continue _fun0001 }
 47:
                    var2 = _closure2_slot4;
                    if(!(var4 != var2)) { _fun0001_ip = 363; continue _fun0001 }
 58:
                    var7 = _closure1_slot6;
                    var6 = var7.getChannel;
                    var2 = _closure2_slot1;
                    var2 = var6.bind(var7)(var2);
                    if(!(var4 == var2)) { _fun0001_ip = 298; continue _fun0001 }
 86:
                    var4 = _closure2_slot5;
                    if(var4) { _fun0001_ip = 363; continue _fun0001 }
 96:
                    var6 = _closure2_slot6;
                    var7 = undefined;
                    var4 = true;
                    var4 = var6.bind(var7)(var4);
 109: // try_start_0 // try_start_1
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 8;
                    var4 = var8[var4];
                    var8 = var6.bind(var7)(var4);
                    var6 = var8.createOrEnterJoinRequestInterview;
                    var4 = _closure2_slot4;
                    var4 = var6.bind(var8)(var4);
                    SaveGenerator(address=148);
 146:
                    return var4;
 148:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 156; continue _fun0001 }
 154: // try_end0
                    _fun0001_ip = 210; continue _fun0001;
 156: // try_end1
                    var8 = _closure2_slot6;
                    var6 = false;
                    var6 = var8.bind(var7)(var6);
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 7;
                    var6 = var9[var6];
                    var8 = var8.bind(var7)(var6);
                    var6 = var8.hideActionSheet;
                    var6 = var6.bind(var8)();
                    return var4;
 200: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure2_slot7;
                    var4 = var4.bind(var7)();
 210: // try_end2
                    var6 = _closure2_slot6;
                    var4 = false;
                    var4 = var6.bind(var7)(var4);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var6 = var6.bind(var7)(var4);
                    var4 = var6.hideActionSheet;
                    var4 = var4.bind(var6)();
                    _fun0001_ip = 363; continue _fun0001;
 253: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=3);
                    var6 = _closure2_slot6;
                    var5 = false;
                    var5 = var6.bind(var7)(var5);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 7;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.hideActionSheet;
                    var5 = var5.bind(var6)();
                    throw var4;
 298:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var6 = var5[var3];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var6);
                    var6 = var7.selectPrivateChannel;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var2);
                    var2 = 7;
                    var2 = var5[var2];
                    var3 = var4.bind(var3)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var2 = undefined;
                    return var2;
 363:
                    var2 = undefined;
                    return var2;
 368:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var6.bind(var14)(var1);
        var1 = new Array(6);
        var1[0] = var12;
        var1[1] = var11;
        var1[2] = var13;
        var1[3] = var9;
        var1[4] = var3;
        var1[5] = var8;
        var2 = var5.bind(var7)(var2, var1);
        var1 = {};
        var13 = var7.useCallback;
        var5 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 415; continue _fun0002 }
 10:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0002_ip = 410; continue _fun0002 }
 23:
                    var2 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0002_ip = 410; continue _fun0002 }
 36:
                    var2 = _closure2_slot3;
                    if(!(var4 != var2)) { _fun0002_ip = 410; continue _fun0002 }
 47:
                    var2 = _closure2_slot4;
                    if(!(var4 != var2)) { _fun0002_ip = 410; continue _fun0002 }
 58:
                    var4 = _closure2_slot6;
                    var5 = undefined;
                    var2 = true;
                    var2 = var4.bind(var5)(var2);
 71: // try_start_0 // try_start_1
                    var6 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 8;
                    var2 = var12[var2];
                    var10 = var6.bind(var5)(var2);
                    var9 = var10.updateGuildJoinRequest;
                    var8 = _closure2_slot2;
                    var16 = _closure2_slot3;
                    var15 = _closure2_slot4;
                    var11 = _closure1_slot0;
                    var2 = 9;
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
                    if(var6) { _fun0002_ip = 262; continue _fun0002 }
 160:
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var6 = 4;
                    var6 = var13[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.open;
                    var6 = {};
                    var9 = 'JOIN_REQUEST_APPROVE';
                    var6['key'] = var9;
                    var12 = _closure1_slot0;
                    var9 = 5;
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
                    var6 = var7.bind(var8)(var6);
 260: // try_end0
                    _fun0002_ip = 316; continue _fun0002;
 262: // try_end1
                    var7 = _closure2_slot6;
                    var6 = false;
                    var6 = var7.bind(var5)(var6);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.hideActionSheet;
                    var4 = var4.bind(var6)();
                    return var2;
 306: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var5)();
 316: // try_end2
                    var4 = _closure2_slot6;
                    var2 = false;
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    _fun0002_ip = 410; continue _fun0002;
 362: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure2_slot6;
                    var3 = false;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.hideActionSheet;
                    var3 = var3.bind(var4)();
                    throw var2;
 410:
                    var2 = undefined;
                    return var2;
 415:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var6.bind(var14)(var5);
        var5 = new Array(5);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var9;
        var5[3] = var3;
        var5[4] = var8;
        var5 = var13.bind(var7)(var6, var5);
        var1['approveRequest'] = var5;
        var6 = var7.useCallback;
        var5 = new Array(5);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var5[3] = var9;
        var5[4] = var8;
        var4 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure2_slot2;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0003_ip = 24; continue _fun0003 }
 16:
                var2 = _closure2_slot3;
                var1 = var3 != var2;
 24:
                if(!var1) { _fun0003_ip = 35; continue _fun0003 }
 27:
                var2 = _closure2_slot4;
                var1 = var3 != var2;
 35:
                if(!var1) { _fun0003_ip = 158; continue _fun0003 }
 38:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 7;
                var3 = var1[var3];
                var7 = undefined;
                var5 = var4.bind(var7)(var3);
                var4 = var5.openLazy;
                var3 = _closure1_slot0;
                var2 = 11;
                var2 = var1[var2];
                var3 = var3.bind(var7)(var2);
                var2 = 10;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var7)(var2, var1);
                var7 = _closure2_slot4;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'RejectionReason-';
                var2 = var2.bind(var1)(var7);
                var1 = {};
                var7 = _closure2_slot0;
                var1['joinRequest'] = var7;
                var6 = _closure2_slot7;
                var1['onError'] = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
 158:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var1['rejectRequest'] = var4;
        var1['submitting'] = var3;
        var1['handleOpenInterview'] = var2;
        return var1;
    };
    var3['useJoinRequestButtonActions'] = var2;
    return var1;
})();