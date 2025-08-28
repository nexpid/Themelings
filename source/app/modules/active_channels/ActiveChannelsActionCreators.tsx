// app/modules/active_channels/ActiveChannelsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchActiveChannels() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 378; continue _fun0001 }
 13:
                    var7 = arg1;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0001_ip = 25; continue _fun0001 }
 22:
                    var2 = 10;
 25:
                    var14 = var2;
                    var8 = undefined;
                    var12 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=38);
 36:
                    return var9;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 375; continue _fun0001 }
 47:
                    var10 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 2;
                    var3 = var3[var4];
                    var11 = var10.bind(var9)(var3);
                    var10 = var11.dispatch;
                    var3 = {};
                    var13 = 'ACTIVE_CHANNELS_FETCH_START';
                    var3['type'] = var13;
                    var13 = var7;
                    var3['guildId'] = var13;
                    var3 = var10.bind(var11)(var3);
 99: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 3;
                    var3 = var11[var3];
                    var3 = var10.bind(var9)(var3);
                    var11 = var3.HTTP;
                    var10 = var11.get;
                    var3 = {};
                    var16 = _closure1_slot4;
                    var15 = var16.ACTIVE_CHANNELS;
                    var13 = var7;
                    var13 = var15.bind(var16)(var13);
                    var3['url'] = var13;
                    var13 = {};
                    var13['channel_limit'] = var14;
                    var3['query'] = var13;
                    var13 = true;
                    var3['rejectWithError'] = var13;
                    var3 = var10.bind(var11)(var3);
                    SaveGenerator(address=182);
 180:
                    return var3;
 182:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 286; continue _fun0001 }
 188:
                    var6 = var3;
                    var10 = var3.body;
                    var12 = var10;
                    var11 = null;
                    var13 = var11 == var10;
                    var10 = undefined;
                    if(var13) { _fun0001_ip = 216; continue _fun0001 }
 210:
                    var10 = var12.channels;
 216:
                    var8 = var10;
                    if(!(var11 == var10)) { _fun0001_ip = 229; continue _fun0001 }
 223:
                    var12 = new Array(0);
                    _fun0001_ip = 232; continue _fun0001;
 229:
                    var12 = var8;
 232:
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var4];
                    var11 = var10.bind(var9)(var8);
                    var10 = var11.dispatch;
                    var8 = {};
                    var13 = 'ACTIVE_CHANNELS_FETCH_SUCCESS';
                    var8['type'] = var13;
                    var13 = var7;
                    var8['guildId'] = var13;
                    var8['channels'] = var12;
                    var8 = var10.bind(var11)(var8);
 283: // try_end0
                    return var6;
 286:
                    return var3;
 289: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = var10[var4];
                    var6 = var8.bind(var9)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var11 = 'ACTIVE_CHANNELS_FETCH_FAILURE';
                    var4['type'] = var11;
                    var4['guildId'] = var7;
                    var7 = 4;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var18 = var8;
                    var17 = var3;
                    var7 = new var18[var7](var17, var16);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var4['error'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
 375:
                    return var2;
 378:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/active_channels/ActiveChannelsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchActiveChannels() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchActiveChannels'] = var2;
    return var1;
})();