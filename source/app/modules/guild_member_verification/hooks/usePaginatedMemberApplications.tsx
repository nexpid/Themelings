// app/modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var5 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot5 = var4;
    var4 = 3;
    var5 = var7[var4];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MAX_RESULTS_PER_PAGE;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.MAX_VISIBLE_PAGES;
    var4 = var5 * var4;
    var _closure1_slot6 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MEMBER_APPLICATION_FETCH_LIMIT'] = var4;
    var2 = function usePaginatedMemberApplications(arg1) {
        var2 = arg1;
        var7 = var2.guildId;
        var _closure2_slot0 = var7;
        var6 = var2.guildJoinRequests;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot5;
        var3 = var5.useRef;
        var8 = false;
        var3 = var3.bind(var5)(var8);
        var _closure2_slot2 = var3;
        var3 = var5.useState;
        var9 = null;
        var10 = var3.bind(var5)(var9);
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = 2;
        var10 = var4.bind(var3)(var10, var2);
        var2 = 0;
        var2 = var10[var2];
        var _closure2_slot3 = var2;
        var4 = 1;
        var4 = var10[var4];
        var _closure2_slot4 = var4;
        var4 = var5.useRef;
        var4 = var4.bind(var5)(var9);
        var _closure2_slot5 = var4;
        var4 = var5.useRef;
        var4 = var4.bind(var5)(var8);
        var _closure2_slot6 = var4;
        var4 = var5.useCallback;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        var8 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 728; continue _fun0001 }
 13:
                        var13 = arg2;
                        var2 = undefined;
                        var12 = undefined;
                        var7 = undefined;
                        var3 = _closure2_slot2;
                        var3 = var3.current;
                        if(var3) { _fun0001_ip = 725; continue _fun0001 }
 40:
                        var9 = var13;
                        var10 = global;
                        var3 = var10.HermesInternal;
                        var6 = var3.concat;
                        var5 = '';
                        var3 = '-';
                        var6 = var6.bind(var5)(var8, var3, var9);
                        var3 = _closure2_slot5;
                        var3 = var3.current;
                        var5 = false;
                        var14 = false;
                        if(!(var6 !== var3)) { _fun0001_ip = 110; continue _fun0001 }
 88:
                        var3 = _closure2_slot5;
                        var3['current'] = var6;
                        var3 = _closure2_slot6;
                        var3['current'] = var5;
                        var14 = true;
 110:
                        var3 = _closure2_slot6;
                        var3 = var3.current;
                        if(var3) { _fun0001_ip = 725; continue _fun0001 }
 125:
                        var3 = _closure2_slot3;
                        var9 = null;
                        if(!(var9 != var3)) { _fun0001_ip = 144; continue _fun0001 }
 135:
                        var3 = _closure2_slot4;
                        var3 = var3.bind(var2)(var9);
 144:
                        var15 = _closure2_slot1;
                        var18 = var13;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var6 = 3;
                        var11 = var17[var6];
                        var11 = var16.bind(var2)(var11);
                        var11 = var11.GuildJoinRequestApplicationStatuses;
                        var11 = var11.SUBMITTED;
                        var11 = var18 === var11;
                        var6 = var17[var6];
                        var6 = var16.bind(var2)(var6);
                        var6 = var6.GuildJoinRequestSortOrders;
                        var6 = var6.TIMESTAMP_DESC;
                        if(!(var8 !== var6)) { _fun0001_ip = 357; continue _fun0001 }
 218:
                        var8 = {};
                        if(var14) { _fun0001_ip = 269; continue _fun0001 }
 223:
                        var16 = var15.length;
                        var6 = 1;
                        var6 = var16 - var6;
                        var16 = var15[var6];
                        if(var11) { _fun0001_ip = 250; continue _fun0001 }
 242:
                        var6 = var16.actionedAt;
                        _fun0001_ip = 256; continue _fun0001;
 250:
                        var6 = var16.joinRequestId;
 256:
                        var8['after'] = var6;
                        var6 = var8;
                        _fun0001_ip = 480; continue _fun0001;
 269:
                        var19 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var16 = 4;
                        var16 = var20[var16];
                        var18 = var19.bind(var2)(var16);
                        var17 = var18.fromTimestamp;
                        var16 = 5;
                        var16 = var20[var16];
                        var16 = var19.bind(var2)(var16);
                        var21 = var16.bind(var2)();
                        var20 = var21.subtract;
                        var19 = 180;
                        var16 = 'days';
                        var19 = var20.bind(var21)(var19, var16);
                        var16 = var19.valueOf;
                        var16 = var16.bind(var19)();
                        var16 = var17.bind(var18)(var16);
                        var8['after'] = var16;
                        var6 = var8;
                        _fun0001_ip = 480; continue _fun0001;
 357:
                        var8 = {};
                        if(var14) { _fun0001_ip = 405; continue _fun0001 }
 362:
                        var16 = var15.length;
                        var14 = 1;
                        var14 = var16 - var14;
                        var14 = var15[var14];
                        if(var11) { _fun0001_ip = 389; continue _fun0001 }
 381:
                        var11 = var14.actionedAt;
                        _fun0001_ip = 395; continue _fun0001;
 389:
                        var11 = var14.joinRequestId;
 395:
                        var8['before'] = var11;
                        var6 = var8;
                        _fun0001_ip = 480; continue _fun0001;
 405:
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var11 = 4;
                        var11 = var15[var11];
                        var14 = var14.bind(var2)(var11);
                        var11 = var14.fromTimestamp;
                        var10 = var10.Date;
                        var15 = var10.prototype;
                        var15 = Object.create(var15, {constructor: {value: var10}});
                        var25 = var15;
                        var10 = new var25[var10](var24);
                        var15 = var10 instanceof Object ? var10 : var15;
                        var10 = var15.getTime;
                        var10 = var10.bind(var15)();
                        var10 = var11.bind(var14)(var10);
                        var8['before'] = var10;
                        var6 = var8;
 480:
                        var12 = var6;
 483: // try_start_0 // try_start_1
                        var6 = _closure2_slot2;
                        var8 = true;
                        var6['current'] = var8;
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var6 = 6;
                        var6 = var11[var6];
                        var11 = var10.bind(var2)(var6);
                        var10 = var11.fetchGuildJoinRequests;
                        var6 = {};
                        var14 = _closure2_slot0;
                        var6['guildId'] = var14;
                        var6['status'] = var13;
                        var13 = _closure1_slot6;
                        var6['limit'] = var13;
                        var6['force'] = var8;
                        var23 = var12;
                        var24 = var6;
                        var12 = copyDataProperties(var24, var23);
                        var6 = var10.bind(var11)(var6);
                        SaveGenerator(address=567);
 565:
                        return var6;
 567:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                        if(var10) { _fun0001_ip = 616; continue _fun0001 }
 573:
                        var7 = var6;
                        if(!(var9 != var6)) { _fun0001_ip = 614; continue _fun0001 }
 580:
                        var7 = var7.body;
                        var7 = var7.guild_join_requests;
                        var9 = var7.length;
                        var7 = _closure1_slot6;
                        if(!(var9 < var7)) { _fun0001_ip = 614; continue _fun0001 }
 604:
                        var7 = _closure2_slot6;
                        var7['current'] = var8;
 614: // try_end0
                        _fun0001_ip = 699; continue _fun0001;
 616: // try_end1
                        var7 = _closure2_slot2;
                        var7['current'] = var5;
                        return var6;
 629: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 7;
                        var3 = var8[var3];
                        var3 = var6.bind(var2)(var3);
                        var3 = var3.APIError;
                        var6 = var3.prototype;
                        var6 = Object.create(var6, {constructor: {value: var3}});
                        var25 = var6;
                        var24 = var7;
                        var3 = new var25[var3](var24, var23);
                        var7 = var3 instanceof Object ? var3 : var6;
                        var6 = _closure2_slot4;
                        var3 = var7.getAnyErrorMessage;
                        var3 = var3.bind(var7)();
                        var3 = var6.bind(var2)(var3);
 699: // try_end2
                        var3 = _closure2_slot2;
                        var3['current'] = var5;
                        _fun0001_ip = 725; continue _fun0001;
 711: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var4 = _closure2_slot2;
                        var4['current'] = var5;
                        throw var3;
 725:
                        return var2;
 728:
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
        var3 = var1.bind(var3)();
        var1 = new Array(3);
        var1[0] = var2;
        var1[1] = var7;
        var1[2] = var6;
        var3 = var4.bind(var5)(var3, var1);
        var1 = {};
        var1['fetchNextPage'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['usePaginatedMemberApplications'] = var2;
    return var1;
})();