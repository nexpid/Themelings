// app/modules/video_calls/native/components/RevealProvider.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var6 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var2 = function useRevealProviderValue(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var9 = arg2;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 5;
            var5 = var12[var3];
            var7 = undefined;
            var11 = var4.bind(var7)(var5);
            var10 = var11.useStateFromStores;
            var5 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getKey;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var10 = var10.bind(var11)(var8, var5);
            var11 = _closure1_slot1;
            var5 = 6;
            var5 = var12[var5];
            var5 = var11.bind(var7)(var5);
            var8 = var5.bind(var7)(var9);
            var5 = _closure1_slot9;
            var5 = var5.bind(var7)();
            var3 = var12[var3];
            var14 = var4.bind(var7)(var3);
            var13 = var14.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var4 = var13.bind(var14)(var4, var3);
            var3 = 7;
            var3 = var12[var3];
            var11 = var11.bind(var7)(var3);
            var3 = var9.id;
            var3 = var11.bind(var7)(var3);
            if(var6) { _fun0001_ip = 155; continue _fun0001 }
 152:
            var6 = var10;
 155:
            if(var6) { _fun0001_ip = 161; continue _fun0001 }
 158:
            var6 = var8;
 161:
            if(var6) { _fun0001_ip = 170; continue _fun0001 }
 164:
            var8 = null;
            var6 = var8 === var9;
 170:
            if(var6) { _fun0001_ip = 176; continue _fun0001 }
 173:
            var6 = var5;
 176:
            if(var6) { _fun0001_ip = 182; continue _fun0001 }
 179:
            var6 = var4;
 182:
            var _closure2_slot0 = var6;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.isIOS;
            var4 = var4.bind(var5)();
            var4 = !var4;
            var5 = !var4;
            if(var4) { _fun0001_ip = 228; continue _fun0001 }
 225:
            var5 = var3;
 228:
            var _closure2_slot1 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['reveal'] = var3;
                var2 = _closure2_slot1;
                var1['prefersDeferringSystemGestures'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var4 = {};
    var10 = true;
    var4['value'] = var10;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var4);
    var1 = 0;
    var9 = var8[var1];
    var4 = native4;
    var1 = undefined;
    var9 = var4.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var4 = 1;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.useChannelCallStore;
    var _closure1_slot6 = var6;
    var6 = var4.focusTimeout;
    var _closure1_slot7 = var6;
    var6 = var4.resetFocusTimer;
    var _closure1_slot8 = var6;
    var4 = var4.useIsVoiceChatFocused;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.jsx;
    var _closure1_slot10 = var6;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var6 = var9.createContext;
    var4 = {};
    var4['reveal'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/video_calls/native/components/RevealProvider.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function RevealProvider(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.channel;
            var7 = var1.children;
            var14 = var1.showStatus;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0002_ip = 29; continue _fun0002 }
 27:
            var14 = false;
 29:
            var1 = var1.useThemedBarStyle;
            if(!(var1 === var4)) { _fun0002_ip = 41; continue _fun0002 }
 39:
            var1 = false;
 41:
            var _closure2_slot0 = var4;
            var8 = _closure1_slot6;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.focus;
                return var1;
            };
            var12 = var8.bind(var4)(var3);
            _closure2_slot0 = var12;
            var3 = _closure1_slot13;
            var5 = var3.bind(var4)(var12, var5);
            var10 = var5.reveal;
            var9 = var5.prefersDeferringSystemGestures;
            var11 = _closure1_slot3;
            var8 = var11.useEffect;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0003_ip = 29; continue _fun0003 }
 13:
                    var3 = _closure1_slot7;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
                    _fun0003_ip = 39; continue _fun0003;
 29:
                    var2 = _closure1_slot8;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var11)(var2, var3);
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = 'light-content';
            var12 = var3;
            if(!var1) { _fun0002_ip = 169; continue _fun0002 }
 152:
            var1 = 'dark';
            var12 = var3;
            if(!(var1 !== var2)) { _fun0002_ip = 169; continue _fun0002 }
 163:
            var12 = 'dark-content';
 169:
            var3 = _closure1_slot11;
            var1 = _closure1_slot12;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var11 = _closure1_slot10;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 10;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var13 = !var10;
            if(!var13) { _fun0002_ip = 224; continue _fun0002 }
 221:
            var13 = !var14;
 224:
            var5['hidden'] = var13;
            var13 = true;
            var5['animated'] = var13;
            var5['barStyle'] = var12;
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 11;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = !var10;
            if(!var10) { _fun0002_ip = 294; continue _fun0002 }
 291:
            var10 = !var9;
 294:
            var6['prefersHidden'] = var10;
            var6['prefersDeferringSystemGestures'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['RevealContext'] = var4;
    var3['useRevealProviderValue'] = var2;
    return var1;
})();