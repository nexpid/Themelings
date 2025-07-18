// app/modules/messages/native/renderer/row_data/ThreadEmbed.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ThreadEmbedWithMessage(arg1) {
        var2 = arg1;
        var8 = var2.title;
        var7 = var2.messageCountLabel;
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
        var6['title'] = var8;
        var6['messageCountLabel'] = var7;
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
            var8 = var2.title;
            var5 = var2.messageCountLabel;
            var1 = var2.messagePreviewString;
            var7 = var2.archived;
            var4 = _closure1_slot9;
            var3 = _closure1_slot10;
            var2 = {};
            var2['title'] = var8;
            var2['messageCountLabel'] = var5;
            var2['messagePreviewString'] = var1;
            var2['archived'] = var7;
            var1 = undefined;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 112; continue _fun0001 }
 65:
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
 112:
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
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var4 = undefined;
            var10 = var6.bind(var4)(var2);
            var9 = var10.useStateFromStoresObject;
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
            var2 = var9.bind(var10)(var7, var1, var2);
            var1 = var2.mostRecentMessage;
            var9 = var2.messageCount;
            var7 = var3.name;
            var2 = 12;
            var2 = var8[var2];
            var8 = var6.bind(var4)(var2);
            var6 = var8.formatMobileMessageCountLabel;
            var2 = var3.id;
            var6 = var6.bind(var8)(var9, var2);
            var2 = null;
            if(!(var2 != var9)) { _fun0002_ip = 140; continue _fun0002 }
 134:
            var8 = 0;
            if(!(!(var9 > var8))) { _fun0002_ip = 234; continue _fun0002 }
 140:
            var10 = _closure1_slot9;
            var9 = _closure1_slot12;
            var8 = {};
            var8['title'] = var7;
            var8['messageCountLabel'] = var6;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 13;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.HYtNyM;
            var11 = var12.bind(var13)(var11);
            var8['messagePreviewString'] = var11;
            var11 = false;
            var8['archived'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            return var8;
 234:
            var3 = var3.threadMetadata;
            if(!(var2 != var3)) { _fun0002_ip = 256; continue _fun0002 }
 244:
            var3 = var3.archived;
            if(var3) { _fun0002_ip = 607; continue _fun0002 }
 256:
            if(!(var2 != var1)) { _fun0002_ip = 513; continue _fun0002 }
 263:
            var3 = var1.type;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 14;
            var2 = var2[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.MessageTypes;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0002_ip = 513; continue _fun0002 }
 307:
            var3 = var1.type;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.MessageTypes;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var3 !== var2)) { _fun0002_ip = 513; continue _fun0002 }
 348:
            var2 = var1.blocked;
            if(var2) { _fun0002_ip = 397; continue _fun0002 }
 357:
            var2 = var1.ignored;
            if(var2) { _fun0002_ip = 397; continue _fun0002 }
 366:
            var8 = _closure1_slot9;
            var3 = _closure1_slot11;
            var2 = {};
            var2['title'] = var7;
            var2['messageCountLabel'] = var6;
            var2['message'] = var1;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
 397:
            var8 = var1.blocked;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 13;
            var2 = var10[var1];
            var2 = var9.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            if(var8) { _fun0002_ip = 463; continue _fun0002 }
 450:
            var8 = var1.G7p6v7;
            var8 = var2.bind(var3)(var8);
            _fun0002_ip = 474; continue _fun0002;
 463:
            var1 = var1.XAkOo6;
            var8 = var2.bind(var3)(var1);
 474:
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var1['title'] = var7;
            var1['messageCountLabel'] = var6;
            var1['messagePreviewString'] = var8;
            var8 = false;
            var1['archived'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 513:
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var1['title'] = var7;
            var1['messageCountLabel'] = var6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 13;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.ZTo4HR;
            var8 = var9.bind(var10)(var8);
            var1['messagePreviewString'] = var8;
            var8 = false;
            var1['archived'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 607:
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var1['title'] = var7;
            var1['messageCountLabel'] = var6;
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
    var4 = native4;
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