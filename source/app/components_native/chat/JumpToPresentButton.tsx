// app/components_native/chat/JumpToPresentButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot3 = var4;
        var4 = 2;
        var7 = var6[var4];
        var7 = var11.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.useChatInputContainerHeight;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var10 = 7;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.radii;
        var12 = var12.round;
        var9['borderRadius'] = var12;
        var12 = 'absolute';
        var9['position'] = var12;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.modules;
        var12 = var12.mobile;
        var12 = var12.JUMP_TO_PRESENT_RIGHT_SPACING;
        var9['right'] = var12;
        var4['container'] = var9;
        var9 = {'bottom': '100%', 'marginBottom': null, 'pointerEvents': 'box-none'};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.modules;
        var10 = var10.mobile;
        var10 = var10.JUMP_TO_PRESENT_BOTTOM_SPACING;
        var9['marginBottom'] = var10;
        var4['containerIOS'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot9 = var4;
        var4 = 8;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.isIOS;
        var4 = var4.bind(var7)();
        if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = function(arg1) {
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useToken;
            var6 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.JUMP_TO_PRESENT_BOTTOM_SPACING;
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var4 = _closure1_slot5;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var2 = var2 + var3;
            var1['bottom'] = var2;
            return var1;
        };
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var4 = function() {
            var1 = null;
            return var1;
        };
case 4:
        var _closure1_slot10 = var4;
        var4 = 18;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/chat/JumpToPresentButton.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function JumpToPresentButton(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var15 = var1.channelId;
                var _closure2_slot0 = var15;
                var2 = var1.screenIndex;
                var _closure2_slot1 = var2;
                var10 = var1.onJumpToPresent;
                var1 = _closure1_slot9;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var1 = _closure1_slot10;
                var2 = var1.bind(var4)(var2);
                var3 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 10;
                var1 = var13[var1];
                var3 = var3.bind(var4)(var1);
                var1 = 'JumpToPresentButton';
                var6 = var3.bind(var4)(var1);
                var12 = _closure1_slot0;
                var11 = 11;
                var1 = var13[var11];
                var16 = var12.bind(var4)(var1);
                var14 = var16.useStateFromStores;
                var1 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var1;
                var3 = function() {
                    var2 = _closure1_slot6;
                    var1 = var2.isConnected;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = new Array(0);
                var1 = var14.bind(var16)(var5, var3, var1);
                var _closure2_slot2 = var1;
                var3 = _closure1_slot4;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = arg1;
                        var1 = _closure2_slot2;
                        var2 = !var1;
                        var1 = !var2;
                        if(var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                        var6 = var4.showingAutoComplete;
                        var5 = var6.get;
                        var2 = _closure2_slot1;
                        var2 = var5.bind(var6)(var2);
                        var2 = !var2;
                        if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var6 = var4.showJumpToPresentButtonChannelId;
                        var5 = var6.get;
                        var4 = _closure2_slot1;
                        var4 = var5.bind(var6)(var4);
                        var3 = _closure2_slot0;
                        var2 = var4 === var3;
case 7:
                        var1 = var2;
case 5:
                        return var1;
                    }
                };
                var5 = var3.bind(var4)(var1);
                var1 = 12;
                var3 = var13[var1];
                var14 = var12.bind(var4)(var3);
                var3 = var14.useIsVoicePanelMounted;
                var3 = var3.bind(var14)(var15);
                var1 = var13[var1];
                var14 = var12.bind(var4)(var1);
                var1 = var14.useIsVoicePanelOpen;
                var1 = var1.bind(var14)(var15);
                var11 = var13[var11];
                var13 = var12.bind(var4)(var11);
                var12 = var13.useStateFromStores;
                var14 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var14;
                var9 = function() {
                    var3 = _closure1_slot7;
                    var2 = var3.getMessages;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.jumpReturnTargetId;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var11 = var12.bind(var13)(var11, var9);
                if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                var1 = null;
                return var1;
case 9:
                var1 = null;
                var9 = var2;
                if(!(var1 == var9)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var9 = var8.containerIOS;
case 13:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 13;
                var2 = var13[var1];
                var2 = var12.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var13[var1];
                var1 = var12.bind(var4)(var1);
                var1 = var1.t;
                if(var11) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var11 = var1.gpoQsB;
                var11 = var2.bind(var3)(var11);
                _fun0002_ip = 17; continue _fun0002;
case 15:
                var1 = var1.dpjpOp;
                var11 = var2.bind(var3)(var1);
case 17:
                var3 = _closure1_slot8;
                var2 = _closure1_slot3;
                var1 = {};
                var12 = var8.container;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var9;
                var1['style'] = var8;
                var9 = _closure1_slot8;
                if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 17;
                var5 = var12[var5];
                var5 = var8.bind(var4)(var5);
                var8 = var5.MemoedVoicePanelDismissChatButton;
                var5 = {};
                var5 = var9.bind(var4)(var8, var5);
                _fun0002_ip = 20; continue _fun0002;
case 18:
                if(var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 16;
                var6 = var14[var6];
                var6 = var8.bind(var4)(var6);
                var8 = var6.IconButton;
                var6 = {};
                var6['accessibilityLabel'] = var11;
                var6['onPress'] = var10;
                var13 = _closure1_slot1;
                var12 = 15;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var6['icon'] = var12;
                var12 = 'primary-overlay';
                var6['variant'] = var12;
                var6 = var9.bind(var4)(var8, var6);
                _fun0002_ip = 23; continue _fun0002;
case 21:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 14;
                var7 = var13[var7];
                var8 = var12.bind(var4)(var7);
                var7 = {};
                var7['accessibilityLabel'] = var11;
                var11 = 15;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var7['icon'] = var11;
                var7['onPress'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 23:
                var5 = var6;
case 20:
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();