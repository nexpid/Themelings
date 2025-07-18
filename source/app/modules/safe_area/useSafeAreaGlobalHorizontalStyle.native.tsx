// app/modules/safe_area/useSafeAreaGlobalHorizontalStyle.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MEDIA_MODAL_KEY;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot6 = var7;
    var7 = var4.OAUTH2_ERROR_RESULT_MODAL_KEY;
    var _closure1_slot7 = var7;
    var4 = var4.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/useSafeAreaGlobalHorizontalStyle.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSafeAreaGlobalHorizontalStyle() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot4;
            var4 = undefined;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.shouldDisableSafeAreas;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var5.bind(var4)(var3);
            var _closure2_slot0 = var6;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useOpenModalKey;
            var9 = var3.bind(var5)();
            var3 = null;
            var5 = var3 != var9;
            if(!var5) { _fun0001_ip = 149; continue _fun0001 }
 66:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.isVoiceChannelModalKey;
            var3 = var3.bind(var7)(var9);
            if(var3) { _fun0001_ip = 146; continue _fun0001 }
 100:
            var7 = _closure1_slot5;
            var8 = new Array(4);
            var8[0] = var7;
            var7 = _closure1_slot6;
            var8[1] = var7;
            var7 = _closure1_slot8;
            var8[2] = var7;
            var7 = _closure1_slot7;
            var8[3] = var7;
            var7 = var8.includes;
            var3 = var7.bind(var8)(var9);
 146:
            var5 = var3;
 149:
            var _closure2_slot1 = var5;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var _closure2_slot2 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = !var1;
                    if(!var4) { _fun0002_ip = 20; continue _fun0002 }
 13:
                    var1 = _closure2_slot1;
                    var4 = !var1;
 20:
                    var1 = {};
                    var6 = _closure2_slot0;
                    var5 = undefined;
                    if(var6) { _fun0002_ip = 49; continue _fun0002 }
 31:
                    var6 = _closure2_slot1;
                    var5 = undefined;
                    if(var6) { _fun0002_ip = 49; continue _fun0002 }
 40:
                    var6 = _closure2_slot2;
                    var5 = var6.right;
 49:
                    var1['paddingRight'] = var5;
                    var2 = undefined;
                    if(!var4) { _fun0002_ip = 68; continue _fun0002 }
 59:
                    var3 = _closure2_slot2;
                    var2 = var3.left;
 68:
                    var1['paddingLeft'] = var2;
                    var2 = 1;
                    var1['flex'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();