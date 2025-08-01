// app/modules/go_live/utils/StreamerApplicationSelectors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _findPlayingActivity(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = _closure1_slot4;
        var1 = var1.PLAYING;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot5 = var1;
    var6 = function getStreamerActivityByUserId(arg1, arg2) {
        var4 = arg2;
        var3 = var4.findActivity;
        var2 = _closure1_slot5;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var6;
    var5 = function getStreamerActivity(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 36; continue _fun0001 }
 12:
            var5 = _closure1_slot6;
            var4 = var2.ownerId;
            var3 = undefined;
            var2 = arg2;
            var1 = var5.bind(var3)(var4, var2);
 36:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function getStreamerApplication(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 62; continue _fun0002 }
 9:
            var4 = _closure1_slot7;
            var3 = undefined;
            var2 = arg2;
            var4 = var4.bind(var3)(var5, var2);
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0002_ip = 60; continue _fun0002 }
 36:
            var3 = {};
            var5 = var4.application_id;
            var3['id'] = var5;
            var4 = var4.name;
            var3['name'] = var4;
            var2 = var3;
 60:
            return var2;
 62:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = function streamApplicationEqualityCheck(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = var6 === var5;
            if(var1) { _fun0003_ip = 63; continue _fun0003 }
 13:
            var3 = null;
            var2 = var3 != var6;
            if(!var2) { _fun0003_ip = 26; continue _fun0003 }
 22:
            var2 = var3 != var5;
 26:
            if(!var2) { _fun0003_ip = 60; continue _fun0003 }
 29:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var2 = var3.bind(var4)(var6, var5);
 60:
            var1 = var2;
 63:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ActivityTypes;
    var _closure1_slot4 = var7;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/go_live/utils/StreamerApplicationSelectors.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getStreamerActivityByUserId'] = var6;
    var3['getStreamerActivity'] = var5;
    var3['getStreamerApplication'] = var4;
    var2 = function useGetStreamApplication(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(1);
        var3[0] = var7;
        var8 = _closure1_slot9;
        var10 = function() {
            var4 = _closure1_slot8;
            var3 = _closure2_slot0;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var12 = var6;
        var11 = var4;
        var9 = var3;
        var1 = var12[var5](var11, var10, var9, var8, var7);
        return var1;
    };
    var3['useGetStreamApplication'] = var2;
    return var1;
})();