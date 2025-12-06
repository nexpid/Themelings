// app/modules/checkpoint/native/components/CheckpointMusicButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.useContext;
    var _closure1_slot3 = var7;
    var7 = var4.useEffect;
    var _closure1_slot4 = var7;
    var4 = var4.useRef;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppState;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['padding'] = var11;
    var9['flexGrow'] = var10;
    var4['closeButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/native/components/CheckpointMusicButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CheckpointMusicButton() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot9;
            var4 = undefined;
            var5 = var3.bind(var4)();
            var7 = _closure1_slot3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.CheckpointColorContext;
            var3 = var7.bind(var4)(var3);
            var7 = 7;
            var7 = var8[var7];
            var9 = var6.bind(var4)(var7);
            var7 = var9.useToken;
            var3 = var3.primaryColor;
            var7 = var7.bind(var9)(var3);
            var3 = 8;
            var3 = var8[var3];
            var9 = var6.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var1 = _closure1_slot7;
                var1 = var1.isMuted;
                return var1;
            };
            var9 = var8.bind(var9)(var6, var3);
            var _closure2_slot0 = var9;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 10;
            var3 = var10[var3];
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = 9;
            var3 = var10[var8];
case 4:
            var6 = var6.bind(var4)(var3);
            var8 = _closure1_slot5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
            var3 = var11[var3];
            var14 = var10.bind(var4)(var3);
            var13 = var14.createSound;
            var12 = _closure1_slot1;
            var3 = 12;
            var3 = var11[var3];
            var12 = var12.bind(var4)(var3);
            var3 = 'vibing_wumpus';
            var3 = var13.bind(var14)(var12, var3);
            var3 = var8.bind(var4)(var3);
            var _closure2_slot1 = var3;
            var8 = _closure1_slot4;
            var12 = function() {
                var2 = _closure2_slot1;
                var3 = var2.current;
                var2 = var3.loop;
                var2 = var2.bind(var3)();
                var5 = _closure1_slot6;
                var4 = var5.addEventListener;
                var3 = 'change';
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = 'active';
                        var1 = arg1;
                        if(!(var2 === var1)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = var2.play;
                        var1 = var1.bind(var2)();
                        _fun0002_ip = 7; continue _fun0002;
case 5:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = var2.pause;
                        var1 = var1.bind(var2)();
case 7:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var2 = _closure3_slot0;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var3 = new Array(0);
            var3 = var8.bind(var4)(var12, var3);
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var3 = _closure2_slot0;
                    var1 = 1;
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = 0;
case 8:
                    var2['volume'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var4)(var2, var3);
            var3 = _closure1_slot8;
            var1 = 13;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.HeaderActionButton;
            var1 = {};
            var1['source'] = var6;
            var6 = 14;
            var6 = var11[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.toggleMute;
            var1['onPress'] = var6;
            var6 = 15;
            var8 = var11[var6];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.w4m945;
            var6 = var8.bind(var9)(var6);
            var1['accessibilityLabel'] = var6;
            var6 = {};
            var6['tintColor'] = var7;
            var1['imageStyle'] = var6;
            var5 = var5.closeButton;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();