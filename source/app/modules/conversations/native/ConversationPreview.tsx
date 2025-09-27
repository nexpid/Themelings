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
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = {};
            var2 = {};
            var3 = 'hidden';
            var2['overflow'] = var3;
            var1['container'] = var2;
            var2 = {};
            var4 = 'primary';
            var3 = arg1;
            var4 = var4 === var3;
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 4;
            var7 = var5[var6];
            var5 = undefined;
            var7 = var8.bind(var5)(var7);
            var8 = var7.colors;
            if(var4) { _fun0001_ip = 71; continue _fun0001 }
 63:
            var7 = var8.CARD_PRIMARY_BG;
            _fun0001_ip = 77; continue _fun0001;
 71:
            var7 = var8.CARD_SECONDARY_BG;
 77:
            var2['backgroundColor'] = var7;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['padding'] = var7;
            var1['previewContainer'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.colors;
            if(var4) { _fun0001_ip = 152; continue _fun0001 }
 144:
            var4 = var7.CARD_SECONDARY_BG;
            _fun0001_ip = 158; continue _fun0001;
 152:
            var4 = var7.CARD_PRIMARY_BG;
 158:
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
 0:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var2 = var5[var1];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var2 = var7.useConversationContext;
            var2 = var2.bind(var7)();
            var12 = var2.keyMessage;
            var _closure2_slot0 = var12;
            var15 = var2.conversation;
            var _closure2_slot1 = var15;
            var13 = var2.conversationProps;
            var _closure2_slot2 = var13;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useConversationRenderContext;
            var1 = var1.bind(var2)();
            var1 = var1.trackItemInteraction;
            var _closure2_slot3 = var1;
            var2 = 6;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useDestinationICYMIExperiment;
            var2 = {};
            var7 = 'ConversationPreview';
            var2['location'] = var7;
            var2 = var3.bind(var5)(var2);
            var8 = var2.isBottomSheetInteractions;
            var _closure2_slot4 = var8;
            var7 = null;
            var3 = var7 == var15;
            var2 = undefined;
            if(var3) { _fun0002_ip = 155; continue _fun0002 }
 150:
            var2 = var15.title;
 155:
            var2 = var7 != var2;
            var3 = 'primary';
            if(!var2) { _fun0002_ip = 170; continue _fun0002 }
 166:
            var3 = 'secondary';
 170:
            var2 = _closure1_slot8;
            var10 = var2.bind(var4)(var3);
            var5 = _closure1_slot3;
            var11 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var12;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0003_ip = 179; continue _fun0003 }
 16:
                    var1 = _closure2_slot0;
                    if(!(var3 != var1)) { _fun0003_ip = 179; continue _fun0003 }
 27:
                    var1 = _closure2_slot1;
                    var4 = var1.messages;
                    var3 = var4.findIndex;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var3.bind(var4)(var1);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.messageHasImageOrVideo;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0003_ip = 162; continue _fun0003 }
 100:
                    var1 = _closure2_slot1;
                    var1 = var1.messages;
                    var3 = var1.length;
                    var1 = 1;
                    if(!(!(var3 <= var1))) { _fun0003_ip = 162; continue _fun0003 }
 122:
                    var1 = -1;
                    if(!(var1 !== var5)) { _fun0003_ip = 162; continue _fun0003 }
 132:
                    var1 = _closure2_slot1;
                    var4 = var1.messages;
                    var3 = var4.slice;
                    var1 = 2;
                    var1 = var5 + var1;
                    var1 = var3.bind(var4)(var5, var1);
                    _fun0003_ip = 177; continue _fun0003;
 162:
                    var3 = _closure2_slot0;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 177:
                    return var1;
 179:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var11 = var11.bind(var5)(var2, var3);
            var _closure2_slot5 = var11;
            var3 = var5.useCallback;
            var2 = new Array(6);
            var2[0] = var13;
            var2[1] = var15;
            var2[2] = var12;
            var2[3] = var8;
            var2[4] = var1;
            var1 = var11.length;
            var2[5] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0004_ip = 138; continue _fun0004 }
 13:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0004_ip = 34; continue _fun0004 }
 26:
                    var4 = _closure2_slot0;
                    var2 = var3 != var4;
 34:
                    if(!var2) { _fun0004_ip = 259; continue _fun0004 }
 40:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0004_ip = 65; continue _fun0004 }
 48:
                    var4 = _closure2_slot3;
                    var3 = undefined;
                    var2 = 'press_message';
                    var2 = var4.bind(var3)(var2);
 65:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.navigateToMessage;
                    var2 = _closure2_slot1;
                    var3 = var2.channel;
                    var4 = var3.id;
                    var2 = var2.guild;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    _fun0004_ip = 259; continue _fun0004;
 138:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 190; continue _fun0004 }
 148:
                    var4 = _closure2_slot3;
                    var2 = _closure2_slot5;
                    var3 = var2.length;
                    var2 = 1;
                    var2 = var3 > var2;
                    var3 = 'press_preview';
                    if(!var2) { _fun0004_ip = 183; continue _fun0004 }
 177:
                    var3 = 'press_preview_with_peek';
 183:
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
 190:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.openConversation;
                    var2 = {};
                    var8 = _closure2_slot2;
                    var9 = var2;
                    var5 = copyDataProperties(var9, var8);
                    var6 = 'icymi-bottom-sheet';
                    var5 = 'renderLocation';
                    var2[var5] = var6;
                    var1 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2, var1);
 259:
                    var1 = undefined;
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
            if(var8) { _fun0002_ip = 305; continue _fun0002 }
 300:
            var5 = var15.title;
 305:
            var5 = var7 != var5;
            var7 = null;
            if(!var5) { _fun0002_ip = 398; continue _fun0002 }
 314:
            var12 = _closure1_slot6;
            var8 = _closure1_slot5;
            var5 = {};
            var13 = var10.previewContainer;
            var5['style'] = var13;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 10;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var15 = var15.title;
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var5['children'] = var13;
            var7 = var12.bind(var4)(var8, var5);
 398:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var10.chatContainer;
            var6['style'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 241; continue _fun0005 }
 12:
                    var3 = _closure2_slot5;
                    var3 = var3.length;
                    var4 = 1;
                    var3 = var3 > var4;
                    var6 = undefined;
                    var8 = undefined;
                    if(!var3) { _fun0005_ip = 99; continue _fun0005 }
 38:
                    var3 = _closure2_slot5;
                    var3 = var3.length;
                    var4 = var3 - var4;
                    var3 = arg2;
                    var8 = undefined;
                    if(!(var3 === var4)) { _fun0005_ip = 99; continue _fun0005 }
 60:
                    var4 = var2.id;
                    var3 = _closure2_slot0;
                    var5 = var1 == var3;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 87; continue _fun0005 }
 78:
                    var5 = _closure2_slot0;
                    var3 = var5.id;
 87:
                    var8 = undefined;
                    if(!(var4 !== var3)) { _fun0005_ip = 99; continue _fun0005 }
 93:
                    var8 = 'bottomPreview';
 99:
                    var5 = _closure1_slot6;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 11;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var3['message'] = var2;
                    var7 = _closure2_slot1;
                    var10 = var1 == var7;
                    var7 = undefined;
                    if(var10) { _fun0005_ip = 154; continue _fun0005 }
 145:
                    var10 = _closure2_slot1;
                    var7 = var10.channel;
 154:
                    var3['channel'] = var7;
                    var7 = true;
                    var3['hideTimestamp'] = var7;
                    var3['previewType'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var1 == var8;
                    var8 = undefined;
                    if(var10) { _fun0005_ip = 192; continue _fun0005 }
 183:
                    var9 = _closure2_slot1;
                    var8 = var9.title;
 192:
                    var9 = var1 != var8;
                    var8 = 'primary';
                    if(!var9) { _fun0005_ip = 207; continue _fun0005 }
 203:
                    var8 = 'secondary';
 207:
                    var3['backgroundVariant'] = var8;
                    var3['disableNavigateOnPress'] = var7;
                    var3['truncate'] = var7;
                    var3['renderLoadingSpacer'] = var7;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var2;
 241:
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/ConversationPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationPreview(arg1) {
        var3 = arg1;
        var9 = var3.conversationProps;
        var8 = var3.MediaComponent;
        var6 = var3.trackItemInteraction;
        var2 = {'conversationProps': 0, 'MediaComponent': 0, 'trackItemInteraction': 0};
        var11 = null;
        var12 = var2;
        var1 = silentSetPrototypeOf(var12, var11);
        var12 = {};
        var11 = var3;
        var10 = var2;
        var11 = copyDataProperties(var12, var11, var10);
        var4 = _closure1_slot6;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 12;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ConversationProvider;
        var1 = {};
        var1['conversationProps'] = var9;
        var1['MediaComponent'] = var8;
        var1['trackItemInteraction'] = var6;
        var6 = _closure1_slot9;
        var5 = {};
        var12 = var5;
        var7 = copyDataProperties(var12, var11);
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['ConversationPreview'] = var2;
    return var1;
})();