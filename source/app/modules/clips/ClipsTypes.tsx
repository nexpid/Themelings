// app/modules/clips/ClipsTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = function getClipCropAspectRatio(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot0;
            var3 = var3.PORTRAIT_9_16;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot0;
            var1 = var1.LANDSCAPE_16_9;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = null;
            return var1;
case 4:
            var1 = 1.7777777777777777;
            return var1;
case 2:
            var1 = 0.5625;
            return var1;
        }
    };
    var _closure1_slot1 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var11 = {};
    var1 = 'manual';
    var11['MANUAL'] = var1;
    var1 = 'distributed';
    var11['DISTRIBUTED'] = var1;
    var1 = 'shouting';
    var11['SHOUTING'] = var1;
    var1 = 'laughter';
    var11['LAUGHTER'] = var1;
    var1 = 'game_event';
    var11['GAME_EVENT'] = var1;
    var1 = 'speaking';
    var11['SPEAKING'] = var1;
    var1 = 'soundboard';
    var11['SOUNDBOARD'] = var1;
    var10 = {};
    var1 = 'unknown';
    var10['UNKNOWN'] = var1;
    var1 = 'below_minimum';
    var10['BELOW_MINIMUM'] = var1;
    var1 = 'meets_minimum';
    var10['MEETS_MINIMUM'] = var1;
    var1 = 'meets_auto_enable';
    var10['MEETS_AUTO_ENABLE'] = var1;
    var9 = {};
    var1 = 'max_concurrent_saves';
    var9['MAX_CONCURRENT_SAVES'] = var1;
    var1 = 'no_eligible_source';
    var9['NO_ELIGIBLE_SOURCE'] = var1;
    var1 = 'module_not_loaded';
    var9['MODULE_NOT_LOADED'] = var1;
    var1 = 'buffer_warming_up';
    var9['BUFFER_WARMING_UP'] = var1;
    var1 = 'bridge_shutdown';
    var9['BRIDGE_SHUTDOWN'] = var1;
    var1 = 'recording_not_ready';
    var9['RECORDING_NOT_READY'] = var1;
    var8 = {};
    var1 = 'anger';
    var8['ANGER'] = var1;
    var1 = 'calm';
    var8['CALM'] = var1;
    var1 = 'disgust';
    var8['DISGUST'] = var1;
    var1 = 'fear';
    var8['FEAR'] = var1;
    var1 = 'happy';
    var8['HAPPY'] = var1;
    var1 = 'neutral';
    var8['NEUTRAL'] = var1;
    var1 = 'sad';
    var8['SAD'] = var1;
    var1 = 'surprised';
    var8['SURPRISED'] = var1;
    var7 = {};
    var1 = 'original';
    var7['ORIGINAL'] = var1;
    var1 = '9:16';
    var7['PORTRAIT_9_16'] = var1;
    var1 = '16:9';
    var7['LANDSCAPE_16_9'] = var1;
    var _closure1_slot0 = var7;
    var4 = {};
    var1 = 'clip';
    var4['CLIP'] = var1;
    var1 = 'screenshot';
    var4['SCREENSHOT'] = var1;
    var1 = 'voice_clip';
    var4['VOICE_CLIP'] = var1;
    var2 = {};
    var1 = 'unclassified';
    var2['UNCLASSIFIED'] = var1;
    var1 = 'kill';
    var2['KILL'] = var1;
    var1 = 'multikill';
    var2['MULTIKILL'] = var1;
    var1 = 'death';
    var2['DEATH'] = var1;
    var1 = 'assist';
    var2['ASSIST'] = var1;
    var1 = 'item';
    var2['ITEM'] = var1;
    var1 = 'victory';
    var2['VICTORY'] = var1;
    var1 = 'defeat';
    var2['DEFEAT'] = var1;
    var1 = 'level_up';
    var2['LEVEL_UP'] = var1;
    var1 = 'treasure';
    var2['TREASURE'] = var1;
    var1 = 'objective_kill';
    var2['OBJECTIVE_KILL'] = var1;
    var12 = dependencyMap;
    var1 = 0;
    var13 = var12[var1];
    var12 = require;
    var1 = undefined;
    var14 = var12.bind(var1)(var13);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/clips/ClipsTypes.tsx';
    var12 = var13.bind(var14)(var12);
    var3['ClipSignalTypes'] = var11;
    var3['ClipsHardwareClassification'] = var10;
    var3['ClipsSaveNoOpReason'] = var9;
    var3['Emotion'] = var8;
    var3['ClipCropPreset'] = var7;
    var3['getClipCropAspectRatio'] = var6;
    var5 = function getClipCropBounds(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var4 = var2 == var1;
            var5 = undefined;
            var3 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var1.bounds;
case 6:
            if(!(var2 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot1;
            var6 = var2 == var1;
            var3 = undefined;
            if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var1.preset;
case 10:
            var4 = var4.bind(var5)(var3);
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = {};
            var3['aspectRatio'] = var4;
            var2 = var3;
case 12:
            return var2;
case 8:
            var1 = var1.bounds;
            return var1;
        }
    };
    var3['getClipCropBounds'] = var5;
    var3['ClipType'] = var4;
    var3['GameEventType'] = var2;
    return var1;
})();