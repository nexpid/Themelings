// app/modules/media_engine/MediaEngineActionCreators.tsx
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
    var4 = var4.InputModes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/MediaEngineActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setPushToTalkState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var9 = arguments[1];
            var8 = arguments[2];
            var _closure2_slot0 = var10;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var _closure2_slot1 = var9;
            if(!(var8 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = false;
case 4:
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var1;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 3;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var5 = var7.dispatch;
            var4 = {};
            var11 = 'PUSH_TO_TALK_STATE_CHANGE';
            var4['type'] = var11;
            var4['isActive'] = var10;
            var4['isPriority'] = var9;
            var4['isLatched'] = var8;
            var4 = var5.bind(var7)(var4);
            var5 = _closure1_slot3;
            var4 = var5.getMode;
            var5 = var4.bind(var5)();
            var4 = _closure1_slot4;
            var4 = var4.PUSH_TO_TALK;
            var4 = var5 === var4;
            _closure2_slot3 = var4;
            var5 = _closure1_slot0;
            var4 = 4;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.getPushToTalkLatchingExperimentConfig;
            var4 = {'location': 'doPTT', 'autoTrackExposure': false};
            var4 = var5.bind(var6)(var4);
            var4 = var4.enableLatching;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot3;
            var5 = var6.getModeOptions;
            var5 = var5.bind(var6)();
            var6 = var5.pttLatchingEnabled;
            var5 = true;
            var4 = var5 === var6;
case 6:
            _closure2_slot4 = var4;
            var5 = _closure1_slot3;
            var4 = var5.getMediaEngine;
            var5 = var4.bind(var5)();
            var4 = var5.eachConnection;
            var3 = _closure1_slot5;
            var3 = var3.DEFAULT;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var4 = var5.setForceAudioInput;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 8:
                    var1 = _closure2_slot4;
case 4:
                    if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var7 = _closure2_slot2;
                    var1 = !var7;
case 9:
                    if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var6 = _closure2_slot0;
                    var1 = !var6;
case 11:
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['setPushToTalkState'] = var2;
    return var1;
})();