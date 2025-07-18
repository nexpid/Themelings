// app/modules/connectivity/native/components/GlobalStatusIndicator.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var9 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
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
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.StyleSheet;
    var _closure1_slot5 = var7;
    var7 = var4.TouchableWithoutFeedback;
    var _closure1_slot6 = var7;
    var8 = var4.NativeEventEmitter;
    var4 = var4.NativeModules;
    var7 = 2;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot12 = var9;
    var9 = var7.Fragment;
    var _closure1_slot13 = var9;
    var7 = var7.jsxs;
    var _closure1_slot14 = var7;
    var12 = var4.DCDStatusBarOverlayViewManager;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot15 = var4;
    var4 = function GlobalStatusIndicatorWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.onPress;
            var _closure2_slot0 = var11;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var6 = var2.bind(var4)();
            var _closure2_slot1 = var6;
            var3 = _closure1_slot0;
            var2 = 9;
            var7 = var5[var2];
            var12 = var3.bind(var4)(var7);
            var10 = var12.useStateFromStores;
            var7 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 27; continue _fun0002 }
 18:
                    var3 = _closure2_slot1;
                    var1 = var3.channelId;
 27:
                    if(!(var2 == var1)) { _fun0002_ip = 48; continue _fun0002 }
 31:
                    var3 = _closure1_slot11;
                    var2 = var3.getChannelId;
                    var1 = var2.bind(var3)();
 48:
                    return var1;
                }
            };
            var10 = var10.bind(var12)(var9, var6, var7);
            var _closure2_slot2 = var10;
            var2 = var5[var2];
            var12 = var3.bind(var4)(var2);
            var9 = var12.useStateFromStores;
            var2 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var2;
            var6 = new Array(1);
            var6[0] = var10;
            var2 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var12)(var7, var2, var6);
            var _closure2_slot3 = var7;
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useVoiceChatNavigationContext;
            var3 = var2.bind(var3)();
            var6 = null;
            var5 = var6 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 209; continue _fun0001 }
 203:
            var2 = var3.openVoice;
 209:
            _closure2_slot4 = var2;
            var9 = _closure1_slot3;
            var5 = var9.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var11;
            var3[2] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 238; continue _fun0003 }
 16:
                    var2 = _closure2_slot4;
                    if(!(var3 != var2)) { _fun0003_ip = 57; continue _fun0003 }
 24:
                    var5 = _closure1_slot8;
                    var4 = var5.getChatOpen;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0003_ip = 210; continue _fun0003 }
 57:
                    var4 = _closure2_slot3;
                    var2 = var4.isPrivate;
                    var4 = var2.bind(var4)();
                    if(var4) { _fun0003_ip = 171; continue _fun0003 }
 77:
                    var5 = _closure2_slot3;
                    var4 = var5.isGuildStageVoice;
                    var4 = var4.bind(var5)();
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    if(var4) { _fun0003_ip = 140; continue _fun0003 }
 102:
                    var4 = 11;
                    var7 = var5[var4];
                    var4 = undefined;
                    var9 = var6.bind(var4)(var7);
                    var8 = var9.openGuildVoiceModal;
                    var7 = _closure2_slot3;
                    var4 = 'RTC Panel';
                    var4 = var8.bind(var9)(var7, var4);
                    _fun0003_ip = 220; continue _fun0003;
 140:
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.openStageChannel;
                    var4 = _closure2_slot3;
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 220; continue _fun0003;
 171:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.openChannelCallModal;
                    var2 = _closure2_slot3;
                    var2 = var4.bind(var5)(var2);
                    _fun0003_ip = 220; continue _fun0003;
 210:
                    var4 = _closure2_slot4;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
 220:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0003_ip = 238; continue _fun0003 }
 228:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 238:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var5.bind(var9)(var2, var3);
            _closure2_slot5 = var5;
            var2 = var9.useRef;
            var2 = var2.bind(var9)(var5);
            _closure2_slot6 = var2;
            var3 = var9.useEffect;
            var2 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot5;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var9)(var2);
            var3 = var9.useEffect;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var5 = _closure1_slot15;
                var4 = var5.addListener;
                var3 = 'StatusBarTapped';
                var2 = function() {
                    var2 = _closure2_slot6;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 27; continue _fun0004 }
 13:
                        var2 = _closure3_slot0;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var10 = var6 != var7;
            var9 = 'text';
            if(!var10) { _fun0001_ip = 337; continue _fun0001 }
 333:
            var9 = 'button';
 337:
            var1['accessibilityRole'] = var9;
            var7 = var6 != var7;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 407; continue _fun0001 }
 350:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 13;
            var9 = var12[var7];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.GaCMgY;
            var6 = var9.bind(var10)(var7);
 407:
            var1['accessibilityHint'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot4;
            var5 = {};
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 14;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8 = var7.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connectivity/native/components/GlobalStatusIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var10 = var2.children;
            var _closure2_slot0 = var10;
            var8 = var2.showWhenParticipantOnScreen;
            var9 = undefined;
            if(!(var8 === var9)) { _fun0005_ip = 28; continue _fun0005 }
 26:
            var8 = false;
 28:
            var5 = var2.forceHide;
            if(!(var5 === var9)) { _fun0005_ip = 40; continue _fun0005 }
 38:
            var5 = false;
 40:
            var _closure2_slot1 = var5;
            var7 = var2.onPress;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var9;
            var _closure2_slot5 = var9;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 16;
            var3 = var11[var3];
            var4 = var6.bind(var9)(var3);
            var3 = var4.useGlobalStatusIndicatorState;
            var8 = var3.bind(var4)(var8);
            var3 = 9;
            var4 = var11[var3];
            var14 = var6.bind(var9)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getContent;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var4 = var13.bind(var14)(var12, var4);
            var3 = var11[var3];
            var11 = var6.bind(var9)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var11)(var6, var3);
            var6 = var8.height;
            _closure2_slot3 = var6;
            var8 = var8.isVisible;
            if(!var8) { _fun0005_ip = 201; continue _fun0005 }
 198:
            var8 = !var5;
 201:
            _closure2_slot4 = var8;
            var9 = var4;
            if(var9) { _fun0005_ip = 214; continue _fun0005 }
 211:
            var9 = var3;
 214:
            _closure2_slot5 = var9;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot13;
                    var2 = {};
                    var8 = _closure1_slot12;
                    var6 = _closure1_slot4;
                    var5 = {};
                    var11 = _closure2_slot5;
                    var1 = undefined;
                    var9 = undefined;
                    if(!var11) { _fun0006_ip = 43; continue _fun0006 }
 37:
                    var9 = 'no-hide-descendants';
 43:
                    var5['importantForAccessibility'] = var9;
                    var9 = _closure2_slot5;
                    var5['accessibilityElementsHidden'] = var9;
                    var9 = _closure1_slot5;
                    var11 = var9.absoluteFill;
                    var9 = new Array(2);
                    var9[0] = var11;
                    var11 = {};
                    var13 = _closure2_slot1;
                    var12 = 0;
                    if(var13) { _fun0006_ip = 90; continue _fun0006 }
 86:
                    var12 = _closure2_slot3;
 90:
                    var11['marginTop'] = var12;
                    var12 = 'hidden';
                    var11['overflow'] = var12;
                    var9[1] = var11;
                    var5['style'] = var9;
                    var9 = _closure2_slot0;
                    var5['children'] = var9;
                    var6 = var8.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure2_slot4;
                    var6 = null;
                    if(!var8) { _fun0006_ip = 166; continue _fun0006 }
 142:
                    var9 = _closure1_slot12;
                    var8 = _closure1_slot16;
                    var7 = {};
                    var10 = _closure2_slot2;
                    var7['onPress'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
 166:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useGlobalStatusIndicatorHeightSharedValue(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 15;
        var5 = var5[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.useSharedValue;
        var1 = var3.height;
        var1 = var5.bind(var6)(var1);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var6 = var3.height;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var1;
        var2 = function() {
            var3 = _closure2_slot1;
            var2 = var3.set;
            var1 = _closure2_slot0;
            var1 = var1.height;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useGlobalStatusIndicatorHeightSharedValue'] = var2;
    return var1;
})();