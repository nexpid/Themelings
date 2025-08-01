// app/modules/video_calls/native/components/SingleScreenshare.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.resetFocus;
    var _closure1_slot2 = var7;
    var4 = var4.toggleFocus;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BLACK;
    var9['backgroundColor'] = var10;
    var4['stageStreamContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/SingleScreenshare.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.participant;
            var7 = var1.channel;
            var _closure2_slot0 = var7;
            var2 = _closure1_slot5;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 5;
            var3 = var9[var3];
            var10 = var2.bind(var4)(var3);
            var3 = function() {
                var2 = _closure1_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var10.bind(var4)(var3);
            var3 = _closure1_slot4;
            var1 = 6;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['participant'] = var8;
            var8 = function onSingleTap() {
                var2 = _closure1_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onSingleTap'] = var8;
            var5 = function onDoubleTap() {
                var3 = _closure1_slot2;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.selectParticipant;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = null;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onDoubleTap'] = var5;
            var5 = var7.isGuildStageVoice;
            var7 = var5.bind(var7)();
            var5 = undefined;
            if(!var7) { _fun0001_ip = 133; continue _fun0001 }
 127:
            var5 = var6.stageStreamContainer;
 133:
            var1['containerStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();