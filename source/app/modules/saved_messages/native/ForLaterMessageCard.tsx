// app/modules/saved_messages/native/ForLaterMessageCard.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var14 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var2 = function ForLaterDeletedMessageCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.savedMessage;
            var _closure2_slot0 = var10;
            var1 = _closure1_slot13;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 9;
            var1 = var11[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {'variant': 'primary', 'border': 'subtle', 'shadow': 'none'};
            var6 = var9.card;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var9.deletedCard;
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot11;
            var5 = 10;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.CircleErrorIcon;
            var5 = {};
            var14 = 'xs';
            var5['size'] = var14;
            var15 = _closure1_slot1;
            var14 = 8;
            var14 = var11[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.colors;
            var14 = var14.ICON_MUTED;
            var5['color'] = var14;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var6 = 11;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var11 = var9.deletedText;
            var6['style'] = var11;
            var10 = var10.saveData;
            var11 = var10.dueAt;
            var10 = null;
            if(!(var10 == var11)) { _fun0001_ip = 299; continue _fun0001 }
 240:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 12;
            var11 = var16[var10];
            var11 = var15.bind(var4)(var11);
            var14 = var11.intl;
            var11 = var14.string;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.o572FR;
            var10 = var11.bind(var14)(var10);
            _fun0001_ip = 356; continue _fun0001;
 299:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 12;
            var14 = var17[var11];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.wuQm+v;
            var10 = var14.bind(var15)(var11);
 356:
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var9.deletedActionButton;
            var6['style'] = var9;
            var11 = _closure1_slot11;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 13;
            var9 = var15[var9];
            var9 = var18.bind(var4)(var9);
            var10 = var9.IconButton;
            var9 = {'variant': 'secondary', 'accessibilityLabel': null, 'size': 'sm'};
            var14 = 12;
            var16 = var15[var14];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var15[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.SvXS1d;
            var14 = var16.bind(var17)(var14);
            var9['accessibilityLabel'] = var14;
            var14 = _closure1_slot1;
            var13 = 14;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var9['icon'] = var13;
            var12 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.removeSavedMessage;
                var1 = _closure2_slot0;
                var1 = var1.saveData;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = function ForLaterMessageCard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.savedMessage;
            var _closure2_slot0 = var5;
            var16 = var1.throttledNow;
            var3 = _closure1_slot13;
            var4 = undefined;
            var11 = var3.bind(var4)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 16;
            var3 = var8[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useSavedMessageChannel;
            var15 = var3.bind(var7)(var5);
            var _closure2_slot1 = var15;
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var7 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 422; continue _fun0003 }
 10:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = _closure2_slot0;
                        var2 = var2.message;
                        var2 = var4.bind(var3)(var2);
                        if(!var2) { _fun0003_ip = 416; continue _fun0003 }
 58:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 16;
                        var2 = var5[var2];
                        var6 = var4.bind(var3)(var2);
                        var5 = var6.savedMessageJumpToMessage;
                        var4 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=102);
 100:
                        return var2;
 102:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 419; continue _fun0003 }
 111:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 18;
                        var4 = var6[var4];
                        var7 = var5.bind(var3)(var4);
                        var4 = var7.pop;
                        var4 = var4.bind(var7)();
                        var4 = 19;
                        var4 = var6[var4];
                        var7 = var5.bind(var3)(var4);
                        var6 = var7.track;
                        var4 = _closure1_slot8;
                        var5 = var4.FOR_LATER_SAVED_MESSAGE_JUMP;
                        var4 = {};
                        var8 = _closure2_slot0;
                        var11 = var8.saveData;
                        var11 = var11.channelId;
                        var4['channel_id'] = var11;
                        var11 = var8.saveData;
                        var11 = var11.messageId;
                        var4['message_id'] = var11;
                        var12 = var8.message;
                        var11 = null;
                        var13 = var11 == var12;
                        var8 = undefined;
                        if(var13) { _fun0003_ip = 232; continue _fun0003 }
 221:
                        var12 = var12.author;
                        var8 = var12.id;
 232:
                        var4['message_author_id'] = var8;
                        var8 = _closure2_slot0;
                        var8 = var8.saveData;
                        var8 = var8.dueAt;
                        if(!(var11 == var8)) { _fun0003_ip = 291; continue _fun0003 }
 257:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var8 = 20;
                        var8 = var13[var8];
                        var8 = var12.bind(var3)(var8);
                        var8 = var8.SavedMessageSortTypes;
                        var8 = var8.BOOKMARK;
                        _fun0003_ip = 323; continue _fun0003;
 291:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 20;
                        var12 = var14[var12];
                        var12 = var13.bind(var3)(var12);
                        var12 = var12.SavedMessageSortTypes;
                        var8 = var12.REMINDER;
 323:
                        var4['type'] = var8;
                        var8 = _closure2_slot0;
                        var8 = var8.saveData;
                        var8 = var8.dueAt;
                        var11 = var11 != var8;
                        var8 = undefined;
                        if(!var11) { _fun0003_ip = 403; continue _fun0003 }
 352:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 21;
                        var10 = var12[var10];
                        var10 = var11.bind(var3)(var10);
                        var11 = var10.bind(var3)();
                        var10 = var11.diff;
                        var9 = _closure2_slot0;
                        var9 = var9.saveData;
                        var9 = var9.dueAt;
                        var8 = var10.bind(var11)(var9);
 403:
                        var4['due_duration'] = var8;
                        var4 = var6.bind(var7)(var5, var4);
 416:
                        return var3;
 419:
                        return var2;
 422:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var7.bind(var4)(var3);
            var3 = new Array(2);
            var3[0] = var5;
            var3[1] = var15;
            var7 = var9.bind(var10)(var7, var3);
            var3 = 22;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.useStateFromStores;
            var9 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var1 = var5 == var1;
                    var2 = undefined;
                    if(var1) { _fun0004_ip = 27; continue _fun0004 }
 18:
                    var1 = _closure2_slot1;
                    var2 = var1.type;
 27:
                    var1 = _closure1_slot9;
                    var1 = var1.UNKNOWN;
                    var1 = var2 === var1;
                    if(var1) { _fun0004_ip = 114; continue _fun0004 }
 47:
                    var2 = _closure2_slot1;
                    var5 = var5 == var2;
                    if(var5) { _fun0004_ip = 75; continue _fun0004 }
 58:
                    var6 = _closure2_slot1;
                    var2 = var6.isPrivate;
                    var2 = var2.bind(var6)();
                    var5 = !var2;
 75:
                    var2 = !var5;
                    if(!var5) { _fun0004_ip = 111; continue _fun0004 }
 81:
                    var6 = _closure1_slot6;
                    var5 = var6.can;
                    var4 = _closure1_slot10;
                    var4 = var4.VIEW_CHANNEL;
                    var3 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var3);
 111:
                    var1 = var2;
 114:
                    return var1;
                }
            };
            var2 = var6.bind(var8)(var3, var2);
            var3 = var5.message;
            var12 = null;
            if(!(var12 != var3)) { _fun0002_ip = 555; continue _fun0002 }
 168:
            if(!(var12 != var15)) { _fun0002_ip = 555; continue _fun0002 }
 175:
            if(!var2) { _fun0002_ip = 555; continue _fun0002 }
 181:
            var6 = _closure1_slot11;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 23;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['savedMessage'] = var5;
            var2['jumpToMessage'] = var7;
            var13 = var6.bind(var4)(var3, var2);
            var2 = var5.saveData;
            var2 = var2.dueAt;
            var14 = var12 != var2;
            var6 = _closure1_slot12;
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Card;
            var2 = {'variant': 'primary', 'border': 'subtle', 'shadow': 'none'};
            var8 = var11.card;
            var2['style'] = var8;
            var2['onPress'] = var7;
            var8 = null;
            if(!var14) { _fun0002_ip = 351; continue _fun0002 }
 298:
            var10 = _closure1_slot11;
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 24;
            var7 = var17[var7];
            var7 = var9.bind(var4)(var7);
            var9 = var7.ForLaterCardReminderHeader;
            var7 = {};
            var7['savedMessage'] = var5;
            var7['throttledNow'] = var16;
            var7['actions'] = var13;
            var8 = var10.bind(var4)(var9, var7);
 351:
            var7 = new Array(4);
            var7[0] = var8;
            var10 = _closure1_slot11;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 25;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.ForLaterCardHeader;
            var8 = {};
            var8['channel'] = var15;
            var12 = null;
            if(var14) { _fun0002_ip = 403; continue _fun0002 }
 400:
            var12 = var13;
 403:
            var8['actions'] = var12;
            var8 = var10.bind(var4)(var9, var8);
            var7[1] = var8;
            var10 = _closure1_slot11;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var11.cardDivider;
            var8['style'] = var12;
            var8 = var10.bind(var4)(var9, var8);
            var7[2] = var8;
            var10 = _closure1_slot11;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var11.messagePreview;
            var8['style'] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 26;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ForLaterMessageRow;
            var11 = {'message': null, 'lineClamp': 2, 'maxHeight': 250};
            var14 = var5.message;
            var11['message'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[3] = var8;
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 555:
            var3 = _closure1_slot11;
            var2 = _closure1_slot14;
            var1 = {};
            var1['savedMessage'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var14.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var12 = 1;
    var8 = var7[var12];
    var5 = native4;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.AnalyticEvents;
    var _closure1_slot8 = var9;
    var9 = var5.ChannelTypes;
    var _closure1_slot9 = var9;
    var5 = var5.Permissions;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot11 = var9;
    var5 = var5.jsxs;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {'gap': 16, 'marginBottom': 16};
    var5['card'] = var11;
    var11 = {'marginHorizontal': 4294967280, 'height': 1, 'alignSelf': 'stretch'};
    var13 = 8;
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_MOD_FAINT;
    var11['backgroundColor'] = var13;
    var5['cardDivider'] = var11;
    var11 = {'position': 'absolute', 'right': 16, 'zIndex': 10};
    var5['actionButton'] = var11;
    var11 = {'marginHorizontal': 4294967284, 'marginVertical': 4294967287};
    var5['messagePreview'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var5['deletedCard'] = var11;
    var11 = {};
    var11['flex'] = var12;
    var5['deletedText'] = var11;
    var11 = {};
    var12 = 'auto';
    var11['marginLeft'] = var12;
    var5['deletedActionButton'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot13 = var5;
    var5 = var8.memo;
    var4 = function ForLaterMessageCardGuard(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var3 = var2.savedMessageKey;
            var _closure2_slot0 = var3;
            var6 = var2.throttledNow;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 22;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var4 = _closure1_slot7;
                var3 = var4.getSavedMessage;
                var1 = _closure2_slot0;
                var2 = var1.channelId;
                var1 = var1.messageId;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var4.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0005_ip = 111; continue _fun0005 }
 85:
            var4 = _closure1_slot11;
            var3 = _closure1_slot15;
            var2 = {};
            var2['savedMessage'] = var7;
            var2['throttledNow'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 111:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/saved_messages/native/ForLaterMessageCard.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ForLaterDeletedMessageCard'] = var2;
    return var1;
})();