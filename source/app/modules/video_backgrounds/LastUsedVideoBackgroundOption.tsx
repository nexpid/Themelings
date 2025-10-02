// app/modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getOptionFromSettingsFiltered(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg2;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var3 = var1[var6];
            var5 = undefined;
            var10 = var4.bind(var5)(var3);
            var9 = var10.getVideoBackgroundOptionFromProto;
            var8 = var7.id;
            var3 = arg1;
            var3 = var9.bind(var10)(var3, var8);
            var1 = var1[var6];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isCustomBackgroundOption;
            var1 = var1.bind(var4)(var3);
            if(!var1) { _fun0001_ip = 107; continue _fun0001 }
 71:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.canUseCustomBackgrounds;
            var4 = var1.bind(var4)(var7);
            var1 = null;
            if(!var4) { _fun0001_ip = 157; continue _fun0001 }
 107:
            var7 = 'number';
            var4 = typeof var3;
            if(!(var7 === var4)) { _fun0001_ip = 151; continue _fun0001 }
 118:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isDefaultBackgroundOption;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            if(!var4) { _fun0001_ip = 154; continue _fun0001 }
 151:
            var2 = var3;
 154:
            var1 = var2;
 157:
            return var1;
        }
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getLastUsedVideoBackgroundOption(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot6;
            var1 = _closure1_slot4;
            var1 = var1.settings;
            var1 = var1.voiceAndVideo;
            var2 = null;
            var5 = var2 == var1;
            var3 = undefined;
            var2 = undefined;
            if(var5) { _fun0002_ip = 42; continue _fun0002 }
 36:
            var2 = var1.videoBackgroundFilterDesktop;
 42:
            var1 = arg1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['getLastUsedVideoBackgroundOption'] = var4;
    var2 = function useLastUsedVideoBackgroundOption() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var3 = var7[var4];
            var6 = undefined;
            var10 = var5.bind(var6)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.settings;
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var4 = var7[var4];
            var8 = var5.bind(var6)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var7.bind(var8)(var5, var4);
            var _closure2_slot0 = var5;
            var3 = var3.voiceAndVideo;
            var4 = null;
            var4 = var4 == var3;
            if(var4) { _fun0003_ip = 121; continue _fun0003 }
 115:
            var6 = var3.videoBackgroundFilterDesktop;
 121:
            var _closure2_slot1 = var6;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0004_ip = 39; continue _fun0004 }
 16:
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 39:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useLastUsedVideoBackgroundOption'] = var2;
    return var1;
})();