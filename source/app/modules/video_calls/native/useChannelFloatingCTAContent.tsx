// app/modules/video_calls/native/useChannelFloatingCTAContent.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useChannelFloatingCTAContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelFloatingCTAContent(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 4;
        var5 = var9[var3];
        var4 = undefined;
        var10 = var8.bind(var4)(var5);
        var7 = var10.useStateFromStores;
        var5 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0001_ip = 41; continue _fun0001 }
 16:
                var4 = _closure1_slot5;
                var3 = var4.getChannelId;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot0;
                var1 = var3 === var2;
 41:
                return var1;
            }
        };
        var5 = var7.bind(var10)(var6, var5);
        var7 = _closure1_slot1;
        var6 = 5;
        var6 = var9[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.bind(var4)();
        var _closure2_slot1 = var7;
        var6 = 6;
        var6 = var9[var6];
        var6 = var8.bind(var4)(var6);
        var11 = var6.GameConsoleDetectExperiment;
        var10 = var11.useExperiment;
        var6 = {};
        var12 = 'b8adb8_1';
        var6['location'] = var12;
        var6 = var10.bind(var11)(var6);
        var6 = var6.enable;
        var _closure2_slot2 = var6;
        var _closure2_slot3 = var5;
        var3 = var9[var3];
        var9 = var8.bind(var4)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure1_slot4;
            var1 = var2.isAnyLocalVideoAutoDisabled;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var8.bind(var9)(var4, var3);
        var _closure2_slot4 = var8;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = new Array(0);
                var4 = _closure2_slot4;
                if(!var4) { _fun0002_ip = 63; continue _fun0002 }
 16:
                var5 = var1.push;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var6);
                var4 = var4.DismissibleContent;
                var4 = var4.VOICE_PANEL_BAD_CONNECTION_CTA;
                var4 = var5.bind(var1)(var4);
 63:
                var4 = _closure2_slot3;
                if(!var4) { _fun0002_ip = 117; continue _fun0002 }
 70:
                var5 = var1.push;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var6);
                var4 = var4.DismissibleContent;
                var4 = var4.SOUNDBOARD_MOBILE_FLOATING_CTA;
                var4 = var5.bind(var1)(var4);
 117:
                var4 = _closure2_slot2;
                if(!var4) { _fun0002_ip = 156; continue _fun0002 }
 124:
                var7 = _closure2_slot1;
                var6 = var7.filter;
                var5 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var4 = var3.type;
                        var1 = _closure1_slot6;
                        var1 = var1.PLAYSTATION;
                        var1 = var4 === var1;
                        if(var1) { _fun0003_ip = 47; continue _fun0003 }
 28:
                        var3 = var3.type;
                        var2 = _closure1_slot6;
                        var2 = var2.XBOX;
                        var1 = var3 === var2;
 47:
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var6 = var5.length;
                var5 = 0;
                var4 = var5 === var6;
 156:
                if(!var4) { _fun0002_ip = 206; continue _fun0002 }
 159:
                var5 = var1.push;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var6);
                var4 = var4.DismissibleContent;
                var4 = var4.CONSOLE_LOCAL_DETECT_CTA;
                var4 = var5.bind(var1)(var4);
 206:
                var4 = _closure2_slot1;
                var3 = var4.some;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.twoWayLink;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0002_ip = 278; continue _fun0002 }
 231:
                var3 = var1.push;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.DismissibleContent;
                var2 = var2.DONUT_MOBILE_NUX;
                var2 = var3.bind(var1)(var2);
 278:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();