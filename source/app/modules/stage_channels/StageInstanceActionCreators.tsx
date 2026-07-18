// app/modules/stage_channels/StageInstanceActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _startStageInstance() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 2;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var9 = var9.STAGE_INSTANCES;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg1;
                    var9['channel_id'] = var10;
                    var10 = arg2;
                    var9['topic'] = var10;
                    var10 = arg3;
                    var9['privacy_level'] = var10;
                    var10 = arg5;
                    var9['guild_scheduled_event_id'] = var10;
                    var10 = arg4;
                    var9['send_start_notification'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=141);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function _updateStageInstance() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 2;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var11 = _closure1_slot3;
                    var10 = var11.STAGE_INSTANCE;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg2;
                    var9['topic'] = var10;
                    var10 = arg3;
                    var9['privacy_level'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=124);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = var2.body;
                    return var3;
case 10:
                    return var2;
case 5:
                    return var1;
                }
            };
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
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageInstanceActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function startStageInstance() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startStageInstance'] = var4;
    var4 = function updateStageInstance() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateStageInstance'] = var4;
    var2 = function endStageInstance(arg1) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 2;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var10 = _closure1_slot3;
        var9 = var10.STAGE_INSTANCE;
        var8 = arg1;
        var8 = var9.bind(var10)(var8);
        var1['url'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['endStageInstance'] = var2;
    return var1;
})();