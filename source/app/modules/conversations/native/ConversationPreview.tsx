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
    var4 = function ConversationPreviewBase(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.backgroundVariant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 21; continue _fun0002 }
 17:
            var5 = 'primary';
 21:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useConversationContext;
            var1 = var1.bind(var2)();
            var2 = var1.keyMessage;
            _closure2_slot0 = var2;
            var15 = var1.conversation;
            _closure2_slot1 = var15;
            var1 = var1.conversationProps;
            _closure2_slot2 = var1;
            var3 = _closure1_slot8;
            var10 = var3.bind(var4)(var5);
            var5 = _closure1_slot3;
            var7 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var2;
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
                    var1 = 6;
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
            var11 = var7.bind(var5)(var2, var3);
            _closure2_slot3 = var11;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openConversation;
                var2 = _closure2_slot2;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['onPress'] = var5;
            var5 = var10.container;
            var1['style'] = var5;
            var7 = null;
            var8 = var7 == var15;
            var5 = undefined;
            if(var8) { _fun0002_ip = 212; continue _fun0002 }
 207:
            var5 = var15.title;
 212:
            var5 = var7 != var5;
            var7 = null;
            if(!var5) { _fun0002_ip = 305; continue _fun0002 }
 221:
            var12 = _closure1_slot6;
            var8 = _closure1_slot5;
            var5 = {};
            var13 = var10.previewContainer;
            var5['style'] = var13;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 8;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var15 = var15.title;
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var5['children'] = var13;
            var7 = var12.bind(var4)(var8, var5);
 305:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var10.chatContainer;
            var6['style'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 236; continue _fun0004 }
 12:
                    var3 = _closure2_slot3;
                    var3 = var3.length;
                    var4 = 1;
                    var3 = var3 > var4;
                    var6 = undefined;
                    var8 = undefined;
                    if(!var3) { _fun0004_ip = 99; continue _fun0004 }
 38:
                    var3 = _closure2_slot3;
                    var3 = var3.length;
                    var4 = var3 - var4;
                    var3 = arg2;
                    var8 = undefined;
                    if(!(var3 === var4)) { _fun0004_ip = 99; continue _fun0004 }
 60:
                    var4 = var2.id;
                    var3 = _closure2_slot0;
                    var5 = var1 == var3;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 87; continue _fun0004 }
 78:
                    var5 = _closure2_slot0;
                    var3 = var5.id;
 87:
                    var8 = undefined;
                    if(!(var4 !== var3)) { _fun0004_ip = 99; continue _fun0004 }
 93:
                    var8 = 'bottomPreview';
 99:
                    var5 = _closure1_slot6;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var3['message'] = var2;
                    var7 = _closure2_slot1;
                    var10 = var1 == var7;
                    var7 = undefined;
                    if(var10) { _fun0004_ip = 154; continue _fun0004 }
 145:
                    var10 = _closure2_slot1;
                    var7 = var10.channel;
 154:
                    var3['channel'] = var7;
                    var7 = true;
                    var3['hideTimestamp'] = var7;
                    var3['truncate'] = var7;
                    var3['previewType'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var1 == var8;
                    var8 = undefined;
                    if(var10) { _fun0004_ip = 197; continue _fun0004 }
 188:
                    var9 = _closure2_slot1;
                    var8 = var9.title;
 197:
                    var9 = var1 != var8;
                    var8 = 'primary';
                    if(!var9) { _fun0004_ip = 212; continue _fun0004 }
 208:
                    var8 = 'secondary';
 212:
                    var3['backgroundVariant'] = var8;
                    var3['disableNavigateOnPress'] = var7;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var2;
 236:
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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/ConversationPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationPreview(arg1) {
        var3 = arg1;
        var8 = var3.conversationProps;
        var6 = var3.MediaComponent;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['conversationProps'] = var1;
        var2['MediaComponent'] = var1;
        var11 = {};
        var10 = var3;
        var9 = var2;
        var10 = copyDataProperties(var11, var10, var9);
        var4 = _closure1_slot6;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ConversationProvider;
        var1 = {};
        var1['conversationProps'] = var8;
        var1['MediaComponent'] = var6;
        var6 = _closure1_slot9;
        var5 = {};
        var11 = var5;
        var7 = copyDataProperties(var11, var10);
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['ConversationPreview'] = var2;
    return var1;
})();