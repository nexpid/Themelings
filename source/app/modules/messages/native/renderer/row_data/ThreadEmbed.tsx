// app/modules/messages/native/renderer/row_data/ThreadEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ThreadEmbedWithMessage(arg1) {
        var2 = arg1;
        var9 = var2.title;
        var8 = var2.messageCountLabel;
        var7 = var2.messageCountAccessibilityLabel;
        var5 = var2.message;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {'rowType': null, 'message': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'changeType': null, 'roleStyle': 'hidden'};
            var3 = _closure1_slot8;
            var3 = var3.MESSAGE;
            var1['rowType'] = var3;
            var3 = _closure2_slot0;
            var1['message'] = var3;
            var2 = _closure1_slot6;
            var2 = var2.NOOP;
            var1['changeType'] = var2;
            return var1;
        };
        var14 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot9;
        var16 = _closure1_slot0;
        var15 = _closure1_slot2;
        var5 = 5;
        var1 = var15[var5];
        var3 = undefined;
        var1 = var16.bind(var3)(var1);
        var2 = var1.DataWithChildren;
        var1 = {};
        var6 = 'threadEmbed';
        var1['keyPath'] = var6;
        var6 = {};
        var6['title'] = var9;
        var6['messageCountLabel'] = var8;
        var6['messageCountAccessibilityLabel'] = var7;
        var1['rowProps'] = var6;
        var7 = _closure1_slot9;
        var5 = var15[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.DataWithChildren;
        var5 = {};
        var8 = 'referencedMessage';
        var5['keyPath'] = var8;
        var8 = {};
        var9 = _closure1_slot7;
        var9 = var9.LOADED;
        var8['state'] = var9;
        var5['rowProps'] = var8;
        var10 = _closure1_slot9;
        var12 = _closure1_slot1;
        var13 = 6;
        var8 = var15[var13];
        var8 = var12.bind(var3)(var8);
        var9 = var8.Provider;
        var8 = {};
        var13 = var15[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.NestedMessageType;
        var13 = var13.THREAD_EMBED;
        var8['value'] = var13;
        var13 = _closure1_slot9;
        var11 = 7;
        var11 = var15[var11];
        var12 = var12.bind(var3)(var11);
        var11 = {};
        var11['row'] = var14;
        var11 = var13.bind(var3)(var12, var11);
        var8['children'] = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function ThreadEmbedMissingMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.title;
            var8 = var2.messageCountLabel;
            var5 = var2.messageCountAccessibilityLabel;
            var1 = var2.messagePreviewString;
            var7 = var2.archived;
            var4 = _closure1_slot9;
            var3 = _closure1_slot10;
            var2 = {};
            var2['title'] = var9;
            var2['messageCountLabel'] = var8;
            var2['messageCountAccessibilityLabel'] = var5;
            var2['messagePreviewString'] = var1;
            var2['archived'] = var7;
            var1 = undefined;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 123; continue _fun0001 }
 76:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 8;
            var7 = var10[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.getAssetUriForEmbed;
            var9 = _closure1_slot1;
            var6 = 9;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var5 = var7.bind(var8)(var6);
 123:
            var2['archivedIconUrl'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function ThreadEmbedBuilder(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var11 = var2.messageId;
            var _closure2_slot0 = var11;
            var3 = var2.channel;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var4 = undefined;
            var10 = var6.bind(var4)(var2);
            var8 = var10.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                var1 = {};
                var10 = _closure1_slot4;
                var9 = var10.getMostRecentMessage;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 11;
                var4 = var8[var2];
                var5 = undefined;
                var11 = var7.bind(var5)(var4);
                var4 = var11.castMessageIdAsChannelId;
                var6 = _closure2_slot0;
                var4 = var4.bind(var11)(var6);
                var4 = var9.bind(var10)(var4);
                var1['mostRecentMessage'] = var4;
                var4 = _closure1_slot4;
                var3 = var4.getCount;
                var2 = var8[var2];
                var5 = var7.bind(var5)(var2);
                var2 = var5.castMessageIdAsChannelId;
                var2 = var2.bind(var5)(var6);
                var2 = var3.bind(var4)(var2);
                var1['messageCount'] = var2;
                return var1;
            };
            var2 = var8.bind(var10)(var7, var1, var2);
            var1 = var2.mostRecentMessage;
            var10 = var2.messageCount;
            var8 = var3.name;
            var2 = 12;
            var7 = var9[var2];
            var12 = var6.bind(var4)(var7);
            var11 = var12.formatMobileMessageCountLabel;
            var7 = var3.id;
            var7 = var11.bind(var12)(var10, var7);
            var2 = var9[var2];
            var9 = var6.bind(var4)(var2);
            var6 = var9.formatMessageCountLabel;
            var2 = var3.id;
            var6 = var6.bind(var9)(var10, var2);
            var2 = null;
            if(!(var2 != var10)) { _fun0002_ip = 166; continue _fun0002 }
 160:
            var9 = 0;
            if(!(!(var10 > var9))) { _fun0002_ip = 265; continue _fun0002 }
 166:
            var11 = _closure1_slot9;
            var10 = _closure1_slot12;
            var9 = {};
            var9['title'] = var8;
            var9['messageCountLabel'] = var7;
            var9['messageCountAccessibilityLabel'] = var6;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 13;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.HYtNyM;
            var12 = var13.bind(var14)(var12);
            var9['messagePreviewString'] = var12;
            var12 = false;
            var9['archived'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            return var9;
 265:
            var3 = var3.threadMetadata;
            if(!(var2 != var3)) { _fun0002_ip = 287; continue _fun0002 }
 275:
            var3 = var3.archived;
            if(var3) { _fun0002_ip = 653; continue _fun0002 }
 287:
            if(!(var2 != var1)) { _fun0002_ip = 554; continue _fun0002 }
 294:
            var3 = var1.type;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 14;
            var2 = var2[var10];
            var2 = var9.bind(var4)(var2);
            var2 = var2.MessageTypes;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0002_ip = 554; continue _fun0002 }
 338:
            var3 = var1.type;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var9.bind(var4)(var2);
            var2 = var2.MessageTypes;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var3 !== var2)) { _fun0002_ip = 554; continue _fun0002 }
 379:
            var2 = var1.blocked;
            if(var2) { _fun0002_ip = 433; continue _fun0002 }
 388:
            var2 = var1.ignored;
            if(var2) { _fun0002_ip = 433; continue _fun0002 }
 397:
            var9 = _closure1_slot9;
            var3 = _closure1_slot11;
            var2 = {};
            var2['title'] = var8;
            var2['messageCountLabel'] = var7;
            var2['messageCountAccessibilityLabel'] = var6;
            var2['message'] = var1;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 433:
            var9 = var1.blocked;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 13;
            var2 = var11[var1];
            var2 = var10.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var1 = var1.t;
            if(var9) { _fun0002_ip = 499; continue _fun0002 }
 486:
            var9 = var1.G7p6v7;
            var9 = var2.bind(var3)(var9);
            _fun0002_ip = 510; continue _fun0002;
 499:
            var1 = var1.XAkOo6;
            var9 = var2.bind(var3)(var1);
 510:
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var1['title'] = var8;
            var1['messageCountLabel'] = var7;
            var1['messageCountAccessibilityLabel'] = var6;
            var1['messagePreviewString'] = var9;
            var9 = false;
            var1['archived'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 554:
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var1['title'] = var8;
            var1['messageCountLabel'] = var7;
            var1['messageCountAccessibilityLabel'] = var6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 13;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.ZTo4HR;
            var9 = var10.bind(var11)(var9);
            var1['messagePreviewString'] = var9;
            var9 = false;
            var1['archived'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 653:
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var1['title'] = var8;
            var1['messageCountLabel'] = var7;
            var1['messageCountAccessibilityLabel'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 13;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.ZTo4HR;
            var5 = var6.bind(var7)(var5);
            var1['messagePreviewString'] = var5;
            var5 = true;
            var1['archived'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Changeset;
    var _closure1_slot6 = var7;
    var7 = var4.ReferencedMessageRowState;
    var _closure1_slot7 = var7;
    var4 = var4.RowType;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'threadEmbed';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/ThreadEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ThreadEmbed(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var7 = var2.message;
            var _closure2_slot0 = var7;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var9 = var7.id;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.castMessageIdAsChannelId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var8)(var4, var1, var3);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0003_ip = 119; continue _fun0003 }
 90:
            var4 = _closure1_slot9;
            var3 = _closure1_slot13;
            var2 = {};
            var7 = var7.id;
            var2['messageId'] = var7;
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 119:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();