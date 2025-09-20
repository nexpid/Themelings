// app/components_native/chat/JumpToPresentButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
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
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var4 = 2;
        var7 = var6[var4];
        var7 = var11.bind(var1)(var7);
        var _closure1_slot5 = var7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.useChatInputContainerHeight;
        var _closure1_slot6 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot10 = var4;
        var4 = 7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'borderRadius': null, 'position': 'absolute', 'right': 12, 'pointerEvents': 'box-none'};
        var10 = 8;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.radii;
        var12 = var12.round;
        var9['borderRadius'] = var12;
        var4['container'] = var9;
        var9 = {};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.INTERACTIVE_NORMAL;
        var9['backgroundColor'] = var10;
        var4['iconColor'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot11 = var4;
        var4 = 13;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.isIOS;
        var4 = var4.bind(var7)();
        if(var4) { _fun0001_ip = 342; continue _fun0001 }
 333:
        var4 = function() {
            var1 = 0;
            return var1;
        };
        _fun0001_ip = 349; continue _fun0001;
 342:
        var4 = function useKeyboardAdjustmentIOS() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 9;
                var1 = var10[var1];
                var9 = undefined;
                var1 = var4.bind(var9)(var1);
                var1 = var1.bind(var9)();
                var2 = var1.bottom;
                var1 = 10;
                var1 = var10[var1];
                var4 = var4.bind(var9)(var1);
                var1 = {'includeCustomKeyboardHeight': true, 'includeKeyboardHeight': true};
                var1 = var4.bind(var9)(var1);
                var1 = var1.insets;
                var _closure2_slot0 = var1;
                var8 = _closure1_slot0;
                var4 = 11;
                var4 = var10[var4];
                var7 = var8.bind(var9)(var4);
                var6 = var7.useKeyboardContextForType;
                var4 = 12;
                var4 = var10[var4];
                var4 = var8.bind(var9)(var4);
                var4 = var4.KeyboardTypes;
                var4 = var4.SYSTEM;
                var4 = var6.bind(var7)(var4);
                var4 = var4.keyboardWillOpen;
                var _closure2_slot1 = var4;
                var8 = _closure1_slot3;
                var6 = var8.useRef;
                var3 = var1.bottom;
                var3 = var6.bind(var8)(var3);
                var _closure2_slot2 = var3;
                var7 = var8.useEffect;
                var6 = new Array(2);
                var6[0] = var4;
                var9 = var1.bottom;
                var6[1] = var9;
                var5 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot1;
                        if(var2) { _fun0003_ip = 29; continue _fun0003 }
 10:
                        var2 = _closure2_slot2;
                        var1 = _closure2_slot0;
                        var1 = var1.bottom;
                        var2['current'] = var1;
 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var7.bind(var8)(var5, var6);
                if(var4) { _fun0002_ip = 202; continue _fun0002 }
 195:
                var1 = var1.bottom;
                _fun0002_ip = 207; continue _fun0002;
 202:
                var1 = var3.current;
 207:
                var1 = var1 - var2;
                return var1;
            }
        };
 349:
        var _closure1_slot12 = var4;
        var4 = 20;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/chat/JumpToPresentButton.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function JumpToPresentButton(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var10 = var1.channelId;
                var _closure2_slot0 = var10;
                var4 = var1.screenIndex;
                var _closure2_slot1 = var4;
                var9 = var1.didTapJump;
                var1 = _closure1_slot11;
                var5 = undefined;
                var6 = var1.bind(var5)();
                var2 = _closure1_slot5;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = arg1;
                        var5 = var3.showingAutoComplete;
                        var4 = var5.get;
                        var1 = _closure2_slot1;
                        var1 = var4.bind(var5)(var1);
                        var1 = !var1;
                        if(!var1) { _fun0005_ip = 60; continue _fun0005 }
 32:
                        var5 = var3.showJumpToPresentButtonChannelId;
                        var4 = var5.get;
                        var3 = _closure2_slot1;
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure2_slot0;
                        var1 = var3 === var2;
 60:
                        return var1;
                    }
                };
                var1 = var2.bind(var5)(var1);
                var2 = _closure1_slot6;
                var17 = var2.bind(var5)(var4);
                var _closure2_slot2 = var17;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 14;
                var4 = var12[var2];
                var7 = var11.bind(var5)(var4);
                var4 = var7.useIsVoicePanelMounted;
                var4 = var4.bind(var7)(var10);
                var2 = var12[var2];
                var7 = var11.bind(var5)(var2);
                var2 = var7.useIsVoicePanelOpen;
                var2 = var2.bind(var7)(var10);
                var7 = 15;
                var10 = var12[var7];
                var15 = var11.bind(var5)(var10);
                var14 = var15.useStateFromStores;
                var10 = _closure1_slot9;
                var13 = new Array(1);
                var13[0] = var10;
                var10 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.getMessages;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.jumpReturnTargetId;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var10 = var14.bind(var15)(var13, var10);
                var13 = _closure1_slot12;
                var13 = var13.bind(var5)();
                var _closure2_slot3 = var13;
                var14 = var12[var7];
                var18 = var11.bind(var5)(var14);
                var16 = var18.useStateFromStores;
                var14 = _closure1_slot8;
                var15 = new Array(1);
                var15[0] = var14;
                var14 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = _closure1_slot8;
                        var2 = var3.getChannel;
                        var1 = _closure2_slot0;
                        var2 = var2.bind(var3)(var1);
                        var3 = null;
                        var4 = var3 == var2;
                        var1 = undefined;
                        if(var4) { _fun0006_ip = 41; continue _fun0006 }
 35:
                        var1 = var2.rateLimitPerUser;
 41:
                        var1 = var3 != var1;
                        if(!var1) { _fun0006_ip = 60; continue _fun0006 }
 48:
                        var3 = var2.rateLimitPerUser;
                        var2 = 0;
                        var1 = var3 > var2;
 60:
                        return var1;
                    }
                };
                var16 = var16.bind(var18)(var15, var14);
                var _closure2_slot4 = var16;
                var7 = var12[var7];
                var14 = var11.bind(var5)(var7);
                var12 = var14.useStateFromStoresObject;
                var7 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() {
                    var1 = {};
                    var2 = _closure1_slot7;
                    var3 = var2.shouldShow;
                    var1['hasChatInputBanner'] = var3;
                    var2 = var2.bannerHeight;
                    var1['bannerHeight'] = var2;
                    return var1;
                };
                var7 = var12.bind(var14)(var11, var7);
                var15 = var7.hasChatInputBanner;
                var _closure2_slot5 = var15;
                var14 = var7.bannerHeight;
                var _closure2_slot6 = var14;
                var12 = _closure1_slot3;
                var11 = var12.useMemo;
                var7 = new Array(5);
                var7[0] = var17;
                var7[1] = var16;
                var7[2] = var15;
                var7[3] = var14;
                var7[4] = var13;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = {};
                        var4 = _closure2_slot2;
                        var3 = 12;
                        var5 = var4 + var3;
                        var6 = _closure2_slot4;
                        var3 = 0;
                        if(!var6) { _fun0007_ip = 28; continue _fun0007 }
 25:
                        var3 = 16;
 28:
                        var6 = _closure2_slot5;
                        var4 = 0;
                        if(!var6) { _fun0007_ip = 41; continue _fun0007 }
 37:
                        var4 = _closure2_slot6;
 41:
                        var3 = var5 + var3;
                        var3 = var3 + var4;
                        var2 = _closure2_slot3;
                        var2 = var3 + var2;
                        var1['bottom'] = var2;
                        return var1;
                    }
                };
                var7 = var11.bind(var12)(var3, var7);
                if(var1) { _fun0004_ip = 419; continue _fun0004 }
 329:
                var1 = null;
                if(!var4) { _fun0004_ip = 414; continue _fun0004 }
 334:
                var1 = null;
                if(!var2) { _fun0004_ip = 414; continue _fun0004 }
 339:
                var4 = _closure1_slot10;
                var3 = _closure1_slot4;
                var2 = {};
                var12 = var6.container;
                var11 = new Array(2);
                var11[0] = var12;
                var11[1] = var7;
                var2['style'] = var11;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 16;
                var11 = var13[var11];
                var11 = var12.bind(var5)(var11);
                var12 = var11.MemoedVoicePanelDismissChatButton;
                var11 = {};
                var11 = var4.bind(var5)(var12, var11);
                var2['children'] = var11;
                var1 = var4.bind(var5)(var3, var2);
 414:
                _fun0004_ip = 609; continue _fun0004;
 419:
                var4 = _closure1_slot10;
                var3 = _closure1_slot4;
                var2 = {};
                var11 = var6.container;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var7;
                var2['style'] = var6;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 17;
                var6 = var11[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.IconButton;
                var6 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 18;
                var12 = var15[var11];
                var12 = var14.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var5)(var11);
                var11 = var11.t;
                if(var10) { _fun0004_ip = 540; continue _fun0004 }
 525:
                var10 = var11.gpoQsL;
                var10 = var12.bind(var13)(var10);
                _fun0004_ip = 553; continue _fun0004;
 540:
                var11 = var11.dpjpOj;
                var10 = var12.bind(var13)(var11);
 553:
                var6['accessibilityLabel'] = var10;
                var6['onPress'] = var9;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 19;
                var8 = var10[var8];
                var8 = var9.bind(var5)(var8);
                var6['icon'] = var8;
                var8 = 'secondary';
                var6['variant'] = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 609:
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();