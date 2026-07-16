// app/actions/UserActivityActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getMetadata() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var13 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = var13.metadata;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.keys;
                    var3 = var3.bind(var4)(var2);
                    var4 = var3.length;
                    var3 = 0;
                    if(!(!(var4 > var3))) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                    var4 = _closure1_slot4;
                    var3 = var4.getActivityMetadata;
                    var3 = var3.bind(var4)(var9);
                    if(!(var5 == var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var4 = var13.session_id;
                    if(!(var5 != var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 5;
                    var4 = var12[var10];
                    var8 = undefined;
                    var4 = var11.bind(var8)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.get;
                    var4 = {};
                    var16 = _closure1_slot5;
                    var15 = var16.USER_ACTIVITY_METADATA;
                    var14 = var13.session_id;
                    var13 = var13.application_id;
                    var13 = var15.bind(var16)(var9, var14, var13);
                    var4['url'] = var13;
                    var13 = true;
                    var4['oldFormErrors'] = var13;
                    var10 = var12[var10];
                    var11 = var11.bind(var8)(var10);
                    var10 = var11.rejectWithMigratedError;
                    var10 = var10.bind(var11)();
                    var4['rejectWithError'] = var10;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=206);
case 11:
                    return var4;
case 12:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var5 = var4.body;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 3;
                    var6 = var10[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'ACTIVITY_METADATA_UPDATE';
                    var6['type'] = var10;
                    var6['metadata'] = var5;
                    var6['userId'] = var9;
                    var6 = var7.bind(var8)(var6);
                    return var5;
case 13:
                    return var4;
case 9:
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var19 = 'null/undefined session_id';
                    var20 = var5;
                    var4 = new var20[var6](var19, var18);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 7:
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
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/UserActivityActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function sync(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ACTIVITY_SYNC';
        var2['type'] = var5;
        var5 = arg1;
        var2['activity'] = var5;
        var5 = arg2;
        var2['userId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['sync'] = var4;
    var4 = function play(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.getSpotifyMetadataFromActivity;
        var5 = var3.bind(var4)(var6, var5);
        var4 = var5.then;
        var3 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'ACTIVITY_PLAY';
            var1['type'] = var4;
            var5 = _closure2_slot0;
            var1['activity'] = var5;
            var4 = _closure2_slot1;
            var1['userId'] = var4;
            var4 = arg1;
            var1['metadata'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.catch;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'ACTIVITY_PLAY';
            var1['type'] = var4;
            var5 = _closure2_slot0;
            var1['activity'] = var5;
            var4 = _closure2_slot1;
            var1['userId'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['play'] = var4;
    var2 = function getMetadata() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getMetadata'] = var2;
    return var1;
})();