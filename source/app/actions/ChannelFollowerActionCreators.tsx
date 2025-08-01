// app/actions/ChannelFollowerActionCreators.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function createChannelFollower(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot4;
        var5 = var6.CHANNEL_FOLLOWERS;
        var4 = arg2;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['webhook_channel_id'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['createChannelFollower'] = var7;
    var7 = function fetchChannelFollowerStats(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 268; continue _fun0001 }
 10:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 3;
                    var4 = var2[var5];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'CHANNEL_FOLLOWER_STATS_FETCH_START';
                    var4['type'] = var8;
                    var4 = var6.bind(var7)(var4);
 57: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 2;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {};
                    var11 = _closure1_slot4;
                    var8 = var11.CHANNEL_FOLLOWER_STATS;
                    var10 = _closure2_slot0;
                    var8 = var8.bind(var11)(var10);
                    var4['url'] = var8;
                    var8 = {};
                    var8['channel_id'] = var10;
                    var4['body'] = var8;
                    var8 = true;
                    var4['oldFormErrors'] = var8;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=145);
 143:
                    return var4;
 145:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 210; continue _fun0001 }
 151:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS';
                    var6['type'] = var10;
                    var10 = var4.body;
                    var6['stats'] = var10;
                    var9 = _closure2_slot0;
                    var6['channelId'] = var9;
                    var6 = var7.bind(var8)(var6);
 208: // try_end0
                    _fun0001_ip = 265; continue _fun0001;
 210:
                    return var4;
 213: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'CHANNEL_FOLLOWER_STATS_FETCH_FAILURE';
                    var3['type'] = var6;
                    var6 = _closure2_slot0;
                    var3['channelId'] = var6;
                    var3 = var4.bind(var5)(var3);
 265:
                    return var2;
 268:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchChannelFollowerStats'] = var7;
    var7 = function dismissPublishBump(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED';
        var2['type'] = var5;
        var5 = arg1;
        var2['messageId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['dismissPublishBump'] = var7;
    var4 = function permanentlyHidePublishBump(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['permanentlyHidePublishBump'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ChannelFollowerActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();