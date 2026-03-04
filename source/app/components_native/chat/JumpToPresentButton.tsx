// app/components_native/chat/JumpToPresentButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderRadius': null, 'position': 'absolute', 'right': 12, 'bottom': '100%', 'marginBottom': 12, 'pointerEvents': 'box-none'};
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/JumpToPresentButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function JumpToPresentButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.channelId;
            var _closure2_slot0 = var13;
            var3 = var2.screenIndex;
            var _closure2_slot1 = var3;
            var11 = var2.onJumpToPresent;
            var2 = _closure1_slot8;
            var5 = undefined;
            var7 = var2.bind(var5)();
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 8;
            var2 = var9[var3];
            var14 = var8.bind(var5)(var2);
            var12 = var14.useStateFromStores;
            var2 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var2;
            var4 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var12.bind(var14)(var6, var4, var2);
            var _closure2_slot2 = var2;
            var4 = _closure1_slot4;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot2;
                    var2 = !var1;
                    var1 = !var2;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = var4.showingAutoComplete;
                    var5 = var6.get;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var6)(var2);
                    var2 = !var2;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = var4.showJumpToPresentButtonChannelId;
                    var5 = var6.get;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure2_slot0;
                    var2 = var4 === var3;
case 4:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var6 = var4.bind(var5)(var2);
            var2 = 9;
            var4 = var9[var2];
            var12 = var8.bind(var5)(var4);
            var4 = var12.useIsVoicePanelMounted;
            var4 = var4.bind(var12)(var13);
            var2 = var9[var2];
            var12 = var8.bind(var5)(var2);
            var2 = var12.useIsVoicePanelOpen;
            var2 = var2.bind(var12)(var13);
            var3 = var9[var3];
            var9 = var8.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var12 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var12;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var2 = var1.jumpReturnTargetId;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var12 = var8.bind(var9)(var3, var1);
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = null;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = null;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = 13;
            var6 = var13[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.MemoedVoicePanelDismissChatButton;
            var6 = {};
            var6 = var9.bind(var5)(var7, var6);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var7 = 10;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.IconButton;
            var7 = {};
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 11;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            if(var12) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = var13.gpoQsB;
            var12 = var14.bind(var15)(var12);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var13 = var13.dpjpOp;
            var12 = var14.bind(var15)(var13);
case 15:
            var7['accessibilityLabel'] = var12;
            var7['onPress'] = var11;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 12;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var7['icon'] = var10;
            var10 = 'secondary';
            var7['variant'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 12:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();