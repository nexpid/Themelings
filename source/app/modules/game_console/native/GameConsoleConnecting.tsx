// app/modules/game_console/native/GameConsoleConnecting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.StyleSheet;
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.toggleFocus;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var12 = 'center';
    var10 = 'justifyContent';
    var9[var10] = var12;
    var10 = 'alignItems';
    var9[var10] = var12;
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var11 = var10.BLACK;
    var10 = 'backgroundColor';
    var9[var10] = var11;
    var4['root'] = var9;
    var9 = {};
    var10 = '75%';
    var9['width'] = var10;
    var4['animation'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/GameConsoleConnecting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameConsoleConnecting(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.awaitingRemoteSessionInfo;
            var3 = _closure1_slot10;
            var4 = undefined;
            var6 = var3.bind(var4)();
            var10 = _closure1_slot3;
            var5 = var10.useRef;
            var3 = null;
            var9 = var5.bind(var10)(var3);
            var _closure2_slot0 = var9;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var11 = var5.bind(var4)(var3);
            var8 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var8 = var8.bind(var11)(var5, var3);
            var _closure2_slot1 = var8;
            var5 = var10.useEffect;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 35; continue _fun0002 }
 10:
                    var1 = _closure2_slot0;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 35; continue _fun0002 }
 25:
                    var1 = var2.reset;
                    var1 = var1.bind(var2)();
 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var10)(var2, var3);
            var2 = var1.type;
            var1 = _closure1_slot8;
            var1 = var1.XBOX;
            if(!(var1 !== var2)) { _fun0001_ip = 318; continue _fun0001 }
 146:
            var1 = _closure1_slot8;
            var1 = var1.PLAYSTATION;
            if(!(var1 !== var2)) { _fun0001_ip = 242; continue _fun0001 }
 160:
            var1 = _closure1_slot8;
            var1 = var1.PLAYSTATION_STAGING;
            if(!(var1 !== var2)) { _fun0001_ip = 242; continue _fun0001 }
 174:
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {'animating': true, 'size': 'large'};
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 7;
            var5 = var11[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.unsafe_rawColors;
            var5 = var5.WHITE_500;
            var1['color'] = var5;
            var5 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 392; continue _fun0001;
 242:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 9;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var6.animation;
            var1['style'] = var10;
            var1['ref'] = var9;
            var11 = _closure1_slot0;
            var10 = 11;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var1['source'] = var10;
            var10 = !var8;
            var1['autoPlay'] = var10;
            var5 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 392; continue _fun0001;
 318:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 9;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var6.animation;
            var1['style'] = var10;
            var1['ref'] = var9;
            var10 = _closure1_slot0;
            var9 = 10;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var1['source'] = var9;
            var8 = !var8;
            var1['autoPlay'] = var8;
            var5 = var3.bind(var4)(var2, var1);
 392:
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = _closure1_slot7;
            var1['onPress'] = var7;
            var6 = var6.root;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();