// app/modules/checkpoint/CheckpointActionCreators.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = arg2;
                    var2 = var2.withMessage;
                    var _closure4_slot0 = var2;
                    var4 = undefined;
                    SaveGenerator(address=34);
case 4:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = global;
                    var8 = var3.Promise;
                    var7 = var8.all;
                    var9 = var10.map;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 5;
                    var3 = var12[var3];
                    var3 = var11.bind(var4)(var3);
                    var3 = var3.getOrResolveChannelIdFromDestinationId;
                    var3 = var9.bind(var10)(var3);
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=105);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var7 = var3.filter;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 6;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.isNotNullish;
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var6 = arg1;
                            var3 = _closure1_slot4;
                            var2 = var3.getChannel;
                            var7 = var2.bind(var3)(var6);
                            var9 = null;
                            if(!(var9 != var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.parse;
                            var2 = _closure4_slot0;
                            var9 = var9 != var2;
                            var2 = '';
                            if(!var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            var2 = _closure4_slot0;
case 14:
                            var5 = var4.bind(var5)(var7, var2);
                            var2 = new Array(0);
                            var5['components'] = var2;
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 8;
                            var1 = var4[var1];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.sendMessage;
                            var11 = false;
                            var10 = {'location': 'checkpoint', 'withCheckpoint': true};
                            var14 = var4;
                            var13 = var6;
                            var12 = var5;
                            var1 = var14[var3](var13, var12, var11, var10, var9);
case 12:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkpoint/CheckpointActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function fetchCheckpointData() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 4;
        var5 = var4[var2];
        var1 = undefined;
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'CHECKPOINT_FETCH_START';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHECKPOINT_FETCH_FAILED';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['fetchCheckpointData'] = var4;
    var3['sendCheckpointMessage'] = var2;
    return var1;
})();