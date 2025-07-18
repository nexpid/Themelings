// app/actions/UserActivityActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                    StartGenerator();
                    var10 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 296; continue _fun0001 }
 16:
                    var2 = var10.metadata;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0001_ip = 60; continue _fun0001 }
 28:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.keys;
                    var3 = var3.bind(var4)(var2);
                    var4 = var3.length;
                    var3 = 0;
                    if(!(!(var4 > var3))) { _fun0001_ip = 293; continue _fun0001 }
 60:
                    var4 = _closure1_slot4;
                    var3 = var4.getActivityMetadata;
                    var3 = var3.bind(var4)(var9);
                    if(!(var5 == var3)) { _fun0001_ip = 290; continue _fun0001 }
 87:
                    var4 = var10.session_id;
                    if(!(var5 != var4)) { _fun0001_ip = 254; continue _fun0001 }
 100:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var8 = undefined;
                    var4 = var5.bind(var8)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.get;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var13 = _closure1_slot5;
                    var12 = var13.USER_ACTIVITY_METADATA;
                    var11 = var10.session_id;
                    var10 = var10.application_id;
                    var10 = var12.bind(var13)(var9, var11, var10);
                    var4['url'] = var10;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=186);
 184:
                    return var4;
 186:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 251; continue _fun0001 }
 192:
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
 251:
                    return var4;
 254:
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var16 = 'null/undefined session_id';
                    var17 = var5;
                    var4 = new var17[var6](var16, var15);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
 290:
                    return var3;
 293:
                    return var2;
 296:
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