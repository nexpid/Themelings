// app/modules/media_engine/MediaEngineActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/MediaEngineActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setPushToTalkState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var7 = arguments[1];
            var _closure2_slot0 = var8;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var _closure2_slot1 = var7;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 2;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var9 = 'PUSH_TO_TALK_STATE_CHANGE';
            var4['type'] = var9;
            var4['isActive'] = var8;
            var4['isPriority'] = var7;
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot2;
            var4 = var5.getMediaEngine;
            var5 = var4.bind(var5)();
            var4 = var5.eachConnection;
            var3 = _closure1_slot3;
            var3 = var3.DEFAULT;
            var2 = function(arg1) {
                var5 = arg1;
                var4 = var5.setForceAudioInput;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = false;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['setPushToTalkState'] = var2;
    return var1;
})();