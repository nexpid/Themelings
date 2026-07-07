// app/modules/conversations/components/native/ConversationFocusView.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_32;
    var9['paddingBottom'] = var12;
    var4['listContent'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['paddingVertical'] = var12;
    var12 = 'center';
    var9['alignItems'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_32;
    var9['gap'] = var10;
    var4['pendingContent'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/components/native/ConversationFocusView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationFocusView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.channelId;
            var _closure2_slot0 = var10;
            var1 = _closure1_slot9;
            var6 = undefined;
            var8 = var1.bind(var6)();
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var9 = var2.bind(var6)(var1);
            var5 = var9.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var1;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot6;
                    var4 = var5.getSelectedConversation;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot6;
                    var6 = var7.getConversationMetadata;
                    var5 = _closure2_slot0;
                    var1 = var2.id;
                    var6 = var6.bind(var7)(var5, var1);
                    var1 = {};
                    var5 = var2.id;
                    var1['selectedConversationId'] = var5;
                    var7 = var4 == var6;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var6.fullyHydrated;
case 4:
                    var4 = var4 != var5;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var5;
case 6:
                    var1['fullyHydrated'] = var4;
                    var4 = var2.startMessageId;
                    var1['startMessageId'] = var4;
                    var5 = _closure1_slot6;
                    var4 = var5.isConversationFetchPending;
                    var3 = var2.id;
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['isFullFetchPending'] = var2;
                    return var1;
case 2:
                    var1 = {'selectedConversationId': null, 'fullyHydrated': false, 'startMessageId': null};
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var4, var1, var2);
            var9 = var1.selectedConversationId;
            var2 = var1.fullyHydrated;
            var12 = var1.startMessageId;
            var _closure2_slot1 = var12;
            var1 = var1.isFullFetchPending;
            var11 = _closure1_slot3;
            var5 = var11.useCallback;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var12;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.closeConversationsAndJumpToMessage;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var5.bind(var11)(var3, var4);
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var1 = {};
            var5 = var8.pendingContent;
            var1['style'] = var5;
            var11 = _closure1_slot4;
            var5 = {};
            var5 = var4.bind(var6)(var11, var5);
            var1['children'] = var5;
            var1 = var4.bind(var6)(var3, var1);
            _fun0001_ip = 13; continue _fun0001;
case 10:
            if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = null;
            if(!(var2 == var9)) { _fun0001_ip = 16; continue _fun0001 }
case 14:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var5 = var8.pendingContent;
            var2['style'] = var5;
            var13 = _closure1_slot7;
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 8;
            var5 = var14[var5];
            var5 = var18.bind(var6)(var5);
            var11 = var5.Text;
            var5 = {'variant': 'text-md/normal', 'color': 'text-muted'};
            var20 = 9;
            var16 = var14[var20];
            var16 = var18.bind(var6)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var14[var20];
            var14 = var18.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.eylmYW;
            var14 = var16.bind(var17)(var14);
            var5['children'] = var14;
            var11 = var13.bind(var6)(var11, var5);
            var5 = new Array(2);
            var5[0] = var11;
            var11 = null;
            var11 = var11 != var12;
            if(!var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var14 = _closure1_slot7;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 10;
            var12 = var16[var12];
            var12 = var19.bind(var6)(var12);
            var13 = var12.Button;
            var12 = {};
            var17 = 'tertiary';
            var12['variant'] = var17;
            var17 = var16[var20];
            var17 = var19.bind(var6)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var6)(var16);
            var16 = var16.t;
            var16 = var16.aBNTxl;
            var16 = var17.bind(var18)(var16);
            var12['text'] = var16;
            var12['onPress'] = var15;
            var11 = var14.bind(var6)(var13, var12);
case 17:
            var5[1] = var11;
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 19; continue _fun0001;
case 16:
            var5 = _closure1_slot7;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
            var3 = var11[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.BottomSheetScrollView;
            var3 = {};
            var8 = var8.listContent;
            var3['contentContainerStyle'] = var8;
            var8 = _closure1_slot1;
            var7 = 12;
            var7 = var11[var7];
            var8 = var8.bind(var6)(var7);
            var7 = {};
            var7['channelId'] = var10;
            var7['conversationId'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 19:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();