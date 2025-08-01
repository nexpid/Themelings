// app/modules/video_calls/native/useIsVideoMode.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function isVideoMode() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arguments[0];
            var7 = arguments[1];
            var5 = arguments[2];
            var6 = arguments[3];
            var4 = arguments[4];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 28; continue _fun0001 }
 21:
            var3 = _closure1_slot3;
 28:
            if(!(var7 === var1)) { _fun0001_ip = 39; continue _fun0001 }
 32:
            var7 = _closure1_slot5;
 39:
            if(!(var5 === var1)) { _fun0001_ip = 50; continue _fun0001 }
 43:
            var5 = _closure1_slot2;
 50:
            if(!(var6 === var1)) { _fun0001_ip = 61; continue _fun0001 }
 54:
            var6 = _closure1_slot6;
 61:
            if(!(var4 === var1)) { _fun0001_ip = 72; continue _fun0001 }
 65:
            var4 = _closure1_slot4;
 72:
            var2 = var3.getChannel;
            var1 = var7.getVoiceChannelId;
            var1 = var1.bind(var7)();
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 157; continue _fun0001 }
 101:
            var2 = var5.getAllActiveStreams;
            var2 = var2.bind(var5)();
            var5 = var2.length;
            var2 = 0;
            var2 = var5 > var2;
            if(var2) { _fun0001_ip = 141; continue _fun0001 }
 125:
            var5 = var6.hasVideo;
            var3 = var3.id;
            var2 = var5.bind(var6)(var3);
 141:
            if(var2) { _fun0001_ip = 154; continue _fun0001 }
 144:
            var3 = var4.isVideoEnabled;
            var2 = var3.bind(var4)();
 154:
            var1 = var2;
 157:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/useIsVideoMode.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(5);
        var2[0] = var5;
        var5 = _closure1_slot5;
        var2[1] = var5;
        var5 = _closure1_slot4;
        var2[2] = var5;
        var5 = _closure1_slot6;
        var2[3] = var5;
        var1 = _closure1_slot2;
        var2[4] = var1;
        var1 = function() {
            var7 = _closure1_slot7;
            var12 = _closure1_slot3;
            var11 = _closure1_slot5;
            var10 = _closure1_slot2;
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var13 = undefined;
            var1 = var13[var7](var12, var11, var10, var9, var8, var7);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['isVideoMode'] = var2;
    return var1;
})();