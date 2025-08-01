// app/modules/messages/native/renderer/row_data/ReferencedMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ReplyLoaded(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.repliedMessage;
            var _closure2_slot0 = var3;
            var14 = var2.isMentioningReply;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(1);
            var5[0] = var3;
            var2 = function() {
                var1 = {'rowType': null, 'message': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'changeType': null, 'roleStyle': 'hidden'};
                var3 = _closure1_slot9;
                var3 = var3.MESSAGE;
                var1['rowType'] = var3;
                var3 = _closure2_slot0;
                var1['message'] = var3;
                var2 = _closure1_slot7;
                var2 = var2.NOOP;
                var1['changeType'] = var2;
                return var1;
            };
            var15 = var6.bind(var7)(var2, var5);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getMessageStickers;
            var2 = var2.bind(var5)(var3);
            var2 = var2.length;
            var5 = 0;
            if(!(!(var2 > var5))) { _fun0001_ip = 393; continue _fun0001 }
 103:
            var6 = var3.hasFlag;
            var2 = _closure1_slot10;
            var2 = var2.IS_VOICE_MESSAGE;
            var2 = var6.bind(var3)(var2);
            if(var2) { _fun0001_ip = 329; continue _fun0001 }
 130:
            var6 = var3.hasFlag;
            var2 = _closure1_slot10;
            var2 = var2.IS_COMPONENTS_V2;
            var2 = var6.bind(var3)(var2);
            if(var2) { _fun0001_ip = 262; continue _fun0001 }
 154:
            var2 = var3.embeds;
            var2 = var2.length;
            var2 = var2 > var5;
            if(var2) { _fun0001_ip = 187; continue _fun0001 }
 172:
            var3 = var3.attachments;
            var3 = var3.length;
            var2 = var3 > var5;
 187:
            var6 = undefined;
            if(!var2) { _fun0001_ip = 455; continue _fun0001 }
 195:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var3 = var8[var2];
            var3 = var7.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.JAKsMz;
            var2 = var3.bind(var5)(var2);
            _closure2_slot1 = var2;
            var6 = var2;
            _fun0001_ip = 455; continue _fun0001;
 262:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var3 = var8[var2];
            var3 = var7.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.Xxm5i4;
            var2 = var3.bind(var5)(var2);
            _closure2_slot1 = var2;
            var6 = var2;
            _fun0001_ip = 455; continue _fun0001;
 329:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var3 = var8[var2];
            var3 = var7.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.6bhHra;
            var2 = var3.bind(var5)(var2);
            _closure2_slot1 = var2;
            var6 = var2;
            _fun0001_ip = 455; continue _fun0001;
 393:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var3 = var8[var2];
            var3 = var7.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.7K5LmZ;
            var2 = var3.bind(var5)(var2);
            _closure2_slot1 = var2;
            var6 = var2;
 455:
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var1 = {};
                var2 = _closure1_slot8;
                var2 = var2.LOADED;
                var1['state'] = var2;
                var2 = _closure2_slot1;
                var1['systemContent'] = var2;
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 8;
            var1 = var16[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.DataWithChildren;
            var1 = {};
            var6 = 'referencedMessage';
            var1['keyPath'] = var6;
            var1['rowProps'] = var5;
            var7 = _closure1_slot11;
            var12 = _closure1_slot1;
            var8 = 9;
            var5 = var16[var8];
            var5 = var12.bind(var4)(var5);
            var6 = var5.Provider;
            var5 = {};
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.NestedMessageType;
            var8 = var8.REPLIED_MESSAGE;
            var5['value'] = var8;
            var10 = _closure1_slot11;
            var8 = 10;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.RenderMessageOptionsOverride;
            var8 = {};
            var13 = false;
            var8['renderReplies'] = var13;
            var13 = _closure1_slot11;
            var11 = 11;
            var11 = var16[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['row'] = var15;
            var11['isMentioningReply'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function ReplyNotLoaded(arg1) {
        var1 = arg1;
        var1 = var1.replyHint;
        var4 = _closure1_slot11;
        var3 = _closure1_slot12;
        var2 = {};
        var5 = _closure1_slot8;
        var5 = var5.SYSTEM;
        var2['state'] = var5;
        var2['content'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Changeset;
    var _closure1_slot7 = var7;
    var7 = var4.ReferencedMessageRowState;
    var _closure1_slot8 = var7;
    var4 = var4.RowType;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageFlags;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'referencedMessage';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/ReferencedMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ReferencedMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.message;
            var1 = var8.messageReference;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var9 = var7[var3];
            var4 = undefined;
            var12 = var6.bind(var4)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getMessageByReference;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var11.bind(var12)(var10, var1, var9);
            var _closure2_slot1 = var1;
            var3 = var7[var3];
            var9 = var6.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var10 = var1.message;
            var3 = new Array(2);
            var3[0] = var10;
            var10 = var1.state;
            var3[1] = var10;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = var1.state;
                    var1 = _closure1_slot5;
                    var1 = var1.LOADED;
                    var1 = var4 === var1;
                    if(!var1) { _fun0003_ip = 56; continue _fun0003 }
 32:
                    var4 = _closure1_slot6;
                    var3 = var4.isBlockedForMessage;
                    var2 = _closure2_slot1;
                    var2 = var2.message;
                    var1 = var3.bind(var4)(var2);
 56:
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var6, var2, var3);
            if(var2) { _fun0002_ip = 453; continue _fun0002 }
 152:
            var3 = var1.state;
            var2 = _closure1_slot5;
            var2 = var2.LOADED;
            if(!(var2 !== var3)) { _fun0002_ip = 394; continue _fun0002 }
 174:
            var2 = _closure1_slot5;
            var2 = var2.NOT_LOADED;
            if(!(var2 !== var3)) { _fun0002_ip = 316; continue _fun0002 }
 191:
            var2 = _closure1_slot5;
            var2 = var2.DELETED;
            if(!(var2 !== var3)) { _fun0002_ip = 238; continue _fun0002 }
 205:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var1);
            return var4;
 238:
            var6 = _closure1_slot11;
            var3 = _closure1_slot14;
            var2 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 7;
            var9 = var12[var7];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.mE3KJC;
            var7 = var9.bind(var10)(var7);
            var2['replyHint'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 316:
            var6 = _closure1_slot11;
            var3 = _closure1_slot14;
            var2 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 7;
            var9 = var12[var7];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.1i+hMj;
            var7 = var9.bind(var10)(var7);
            var2['replyHint'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 394:
            var7 = var1.message;
            var3 = _closure1_slot11;
            var2 = _closure1_slot13;
            var1 = {};
            var1['repliedMessage'] = var7;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 13;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.bind(var4)(var8, var7);
            var1['isMentioningReply'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 453:
            var3 = _closure1_slot11;
            var2 = _closure1_slot14;
            var1 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 7;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.1i+hMj;
            var5 = var6.bind(var7)(var5);
            var1['replyHint'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();