// app/modules/conversations/native/ConversationPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg2;
            var4 = arg3;
            var1 = {};
            var2 = {};
            var3 = 'hidden';
            var2['overflow'] = var3;
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 4;
            var8 = var5[var6];
            var5 = undefined;
            var8 = var9.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.xl;
            var2['borderRadius'] = var8;
            var1['container'] = var2;
            var2 = {};
            var9 = 'primary';
            var8 = arg1;
            var8 = var9 === var8;
            var9 = var7;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var4;
case 2:
            var2['backgroundColor'] = var9;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var9 = var10.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['padding'] = var9;
            var1['previewContainer'] = var2;
            var2 = {};
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var7;
case 4:
            var2['backgroundColor'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var2['padding'] = var3;
            var1['chatContainer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = function ConversationPreviewBase() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = _closure1_slot3;
            var5 = var7.useContext;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.ConversationContext;
            var15 = var5.bind(var7)(var1);
            var _closure2_slot0 = var15;
            var1 = 6;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useConversationInteractionHandler;
            var7 = null;
            var5 = var7 == var15;
            var1 = undefined;
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var15.conversationProps;
case 6:
            var1 = var2.bind(var3)(var1);
            var _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useDestinationICYMIExperiment;
            var2 = {};
            var8 = 'ConversationPreview';
            var2['location'] = var8;
            var2 = var3.bind(var5)(var2);
            var8 = var2.isBottomSheetInteractions;
            var _closure2_slot2 = var8;
            var3 = var7 == var15;
            var2 = undefined;
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var15.conversation;
            var5 = var7 == var3;
            var2 = undefined;
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var2 = var3.title;
case 8:
            var2 = var7 != var2;
            var10 = 'primary';
            if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var10 = 'secondary';
case 11:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useConversationBackgroundColors;
            var2 = var2.bind(var3)();
            var5 = var2.primaryBackground;
            var3 = var2.secondaryBackground;
            var2 = _closure1_slot8;
            var10 = var2.bind(var4)(var10, var5, var3);
            var5 = _closure1_slot3;
            var11 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var1;
                    var6 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var4 = _closure2_slot0;
                    var1 = var4.conversation;
case 13:
                    if(!(var3 != var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var1 = _closure2_slot0;
                    var1 = var1.keyMessage;
                    if(!(var3 != var1)) { _fun0003_ip = 15; continue _fun0003 }
case 17:
                    var1 = _closure2_slot0;
                    var3 = var1.conversation;
                    var5 = var3.messages;
                    var4 = var5.findIndex;
                    var3 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure2_slot0;
                            var4 = null;
                            var6 = var4 == var1;
                            var1 = undefined;
                            if(var6) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                            var3 = _closure2_slot0;
                            var3 = var3.keyMessage;
                            var4 = var4 == var3;
                            var1 = undefined;
                            if(var4) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                            var1 = var3.id;
case 18:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.messageHasImageOrVideo;
                    var1 = var1.keyMessage;
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0003_ip = 21; continue _fun0003 }
case 4:
                    var1 = _closure2_slot0;
                    var1 = var1.conversation;
                    var1 = var1.messages;
                    var3 = var1.length;
                    var1 = 1;
                    if(!(!(var3 <= var1))) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var1 = -1;
                    if(!(var1 !== var5)) { _fun0003_ip = 21; continue _fun0003 }
case 10:
                    var1 = _closure2_slot0;
                    var1 = var1.conversation;
                    var4 = var1.messages;
                    var3 = var4.slice;
                    var1 = 2;
                    var1 = var5 + var1;
                    var1 = var3.bind(var4)(var5, var1);
                    _fun0003_ip = 23; continue _fun0003;
case 21:
                    var2 = _closure2_slot0;
                    var3 = var2.keyMessage;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 23:
                    return var1;
case 15:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var11 = var11.bind(var5)(var2, var3);
            var _closure2_slot3 = var11;
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var15;
            var2[1] = var8;
            var2[2] = var1;
            var1 = var11.length;
            var2[3] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var3 = _closure2_slot0;
                    var2 = var3.conversationProps;
case 13:
                    if(!(var4 != var2)) { _fun0005_ip = 24; continue _fun0005 }
case 16:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var2 = _closure2_slot0;
                    var2 = var2.conversation;
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var3 = _closure2_slot0;
                    var3 = var3.keyMessage;
                    var2 = var4 != var3;
case 27:
                    if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 29:
                    var3 = _closure2_slot1;
                    var2 = 'press_message';
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.navigateToMessage;
                    var2 = _closure2_slot0;
                    var3 = var2.conversation;
                    var3 = var3.channel;
                    var4 = var3.id;
                    var3 = var2.conversation;
                    var3 = var3.guild;
                    var3 = var3.id;
                    var2 = var2.keyMessage;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var4, var3, var2);
                    _fun0005_ip = 24; continue _fun0005;
case 25:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var4 = var2.length;
                    var2 = 1;
                    var4 = var4 > var2;
                    var2 = 'press_preview_message';
                    if(!var4) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var2 = 'press_preview_with_peek';
case 30:
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openConversation;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var9 = var5.conversationProps;
                    var10 = var2;
                    var5 = copyDataProperties(var10, var9);
                    var6 = 'icymi-bottom-sheet';
                    var5 = 'renderLocation';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
case 24:
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['onPress'] = var5;
            var5 = var10.container;
            var1['style'] = var5;
            var8 = var7 == var15;
            var5 = undefined;
            if(var8) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var8 = var15.conversation;
            var12 = var7 == var8;
            var5 = undefined;
            if(var12) { _fun0002_ip = 32; continue _fun0002 }
case 34:
            var5 = var8.title;
case 32:
            var5 = var7 != var5;
            var7 = null;
            if(!var5) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var12 = _closure1_slot6;
            var8 = _closure1_slot5;
            var5 = {};
            var13 = var10.previewContainer;
            var5['style'] = var13;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 12;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var15 = var15.conversation;
            var15 = var15.title;
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var5['children'] = var13;
            var7 = var12.bind(var4)(var8, var5);
case 35:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var10.chatContainer;
            var6['style'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var3 = _closure2_slot3;
                    var3 = var3.length;
                    var4 = 1;
                    var3 = var3 > var4;
                    var6 = undefined;
                    var8 = undefined;
                    if(!var3) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var3 = _closure2_slot3;
                    var3 = var3.length;
                    var4 = var3 - var4;
                    var3 = arg2;
                    var8 = undefined;
                    if(!(var3 === var4)) { _fun0006_ip = 39; continue _fun0006 }
case 41:
                    var4 = var2.id;
                    var3 = _closure2_slot0;
                    var5 = var1 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 42; continue _fun0006 }
case 27:
                    var5 = _closure2_slot0;
                    var5 = var5.keyMessage;
                    var7 = var1 == var5;
                    var3 = undefined;
                    if(var7) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var3 = var5.id;
case 42:
                    var8 = undefined;
                    if(!(var4 !== var3)) { _fun0006_ip = 39; continue _fun0006 }
case 44:
                    var8 = 'bottomPreview';
case 39:
                    var5 = _closure1_slot6;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var3['message'] = var2;
                    var7 = _closure2_slot0;
                    var10 = var1 == var7;
                    var7 = undefined;
                    if(var10) { _fun0006_ip = 25; continue _fun0006 }
case 45:
                    var10 = _closure2_slot0;
                    var10 = var10.conversation;
                    var11 = var1 == var10;
                    var7 = undefined;
                    if(var11) { _fun0006_ip = 25; continue _fun0006 }
case 46:
                    var7 = var10.channel;
case 25:
                    var3['channel'] = var7;
                    var7 = true;
                    var3['hideTimestamp'] = var7;
                    var3['previewType'] = var8;
                    var8 = _closure2_slot0;
                    var10 = var1 == var8;
                    var8 = undefined;
                    if(var10) { _fun0006_ip = 47; continue _fun0006 }
case 31:
                    var9 = _closure2_slot0;
                    var9 = var9.conversation;
                    var10 = var1 == var9;
                    var8 = undefined;
                    if(var10) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var8 = var9.title;
case 47:
                    var9 = var1 != var8;
                    var8 = 'primary';
                    if(!var9) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var8 = 'secondary';
case 49:
                    var3['backgroundVariant'] = var8;
                    var3['disableNavigateOnPress'] = var7;
                    var3['truncate'] = var7;
                    var3['renderLoadingSpacer'] = var7;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var2;
case 37:
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/ConversationPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationPreview(arg1) {
        var3 = arg1;
        var6 = var3.conversationProps;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['conversationProps'] = var1;
        var10 = {};
        var9 = var3;
        var8 = var2;
        var9 = copyDataProperties(var10, var9, var8);
        var4 = _closure1_slot6;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ConversationProvider;
        var1 = {};
        var1['conversationProps'] = var6;
        var6 = _closure1_slot9;
        var5 = {};
        var10 = var5;
        var7 = copyDataProperties(var10, var9);
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['ConversationPreview'] = var2;
    return var1;
})();