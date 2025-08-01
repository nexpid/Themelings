// app/modules/guild_settings/GuildRoleMemberActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchMemberCountsFromBackend() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 254; continue _fun0001 }
 10:
                    var5 = arg1;
 13: // try_start_0
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var8 = 3;
                    var2 = var7[var8];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var2);
                    var4 = var9.dispatch;
                    var2 = {};
                    var10 = 'GUILD_ROLE_MEMBER_COUNT_FETCH_START';
                    var2['type'] = var10;
                    var11 = var5;
                    var2['guildId'] = var11;
                    var2 = var4.bind(var9)(var2);
                    var4 = _closure1_slot0;
                    var2 = 4;
                    var2 = var7[var2];
                    var2 = var4.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var10 = _closure1_slot5;
                    var9 = var10.GUILD_ROLE_MEMBER_COUNTS;
                    var9 = var9.bind(var10)(var11);
                    var2['url'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=129);
 127:
                    return var2;
 129:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 193; continue _fun0001 }
 135:
                    var7 = var2.body;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var8 = 'GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS';
                    var3['type'] = var8;
                    var8 = var5;
                    var3['guildId'] = var8;
                    var3['roleMemberCount'] = var7;
                    var3 = var4.bind(var6)(var3);
 191: // try_end0
                    _fun0001_ip = 249; continue _fun0001;
 193:
                    return var2;
 196: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE';
                    var2['type'] = var6;
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
 249:
                    var2 = undefined;
                    return var2;
 254:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _fetchMemberCounts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 65; continue _fun0002 }
 10:
                    var3 = _closure1_slot4;
                    var2 = var3.shouldFetch;
                    var2 = var2.bind(var3)(var4);
                    if(!var2) { _fun0002_ip = 57; continue _fun0002 }
 31:
                    var3 = function fetchMemberCountsFromBackend() {
                        var1 = undefined;
                        var4 = _closure1_slot7;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    SaveGenerator(address=51);
 49:
                    return var2;
 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 62; continue _fun0002 }
 57:
                    var3 = undefined;
                    return var3;
 62:
                    return var2;
 65:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = {};
    var7 = 10000;
    var4['maxAge'] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildRoleMemberActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchMemberCounts() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchMemberCounts'] = var4;
    var2 = function requestMembersForRole(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = arguments[2];
            var3 = undefined;
            if(!(var1 === var3)) { _fun0003_ip = 17; continue _fun0003 }
 15:
            var1 = true;
 17:
            var2 = global;
            var4 = var2.HermesInternal;
            var8 = var4.concat;
            var7 = '';
            var4 = '-';
            var9 = var8.bind(var7)(var6, var4, var5);
            if(!var1) { _fun0003_ip = 71; continue _fun0003 }
 48:
            var4 = _closure1_slot6;
            var1 = var4.get;
            var1 = var1.bind(var4)(var9);
            var4 = null;
            if(!(var4 == var1)) { _fun0003_ip = 108; continue _fun0003 }
 71:
            var8 = _closure1_slot6;
            var7 = var8.set;
            var1 = true;
            var1 = var7.bind(var8)(var9, var1);
            var1 = function doRequestMembersForRole(arg1, arg2) {
                var8 = arg1;
                var _closure3_slot0 = var8;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.HTTP;
                var3 = var4.get;
                var2 = {};
                var7 = _closure1_slot5;
                var6 = var7.GUILD_ROLE_MEMBER_IDS;
                var5 = arg2;
                var5 = var6.bind(var7)(var8, var5);
                var2['url'] = var5;
                var5 = false;
                var2['rejectWithError'] = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function(arg1) {
                    var1 = arg1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.requestMembersById;
                    var4 = _closure3_slot0;
                    var3 = var1.body;
                    var2 = false;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1 = var1.body;
                    var1 = var1.length;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var1.bind(var3)(var6, var5);
            _fun0003_ip = 125; continue _fun0003;
 108:
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)(var4);
 125:
            return var1;
        }
    };
    var3['requestMembersForRole'] = var2;
    return var1;
})();