// app/modules/reactions/native/ReactionUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var11 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
    var6 = function handleOutOfSuperReactions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot6;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 26; continue _fun0001 }
 22:
            var1 = undefined;
            return var1;
 26:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.isPremium;
            var2 = var1.bind(var2)(var4);
            var1 = undefined;
            if(var2) { _fun0001_ip = 147; continue _fun0001 }
 64:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 12;
            var4 = var2[var4];
            var6 = var5.bind(var7)(var4);
            var5 = var6.openLazy;
            var4 = _closure1_slot0;
            var3 = 14;
            var3 = var2[var3];
            var4 = var4.bind(var7)(var3);
            var3 = 13;
            var3 = var2[var3];
            var2 = var2.paths;
            var4 = var4.bind(var7)(var3, var2);
            var3 = {};
            var2 = arg1;
            var3['onDismiss'] = var2;
            var2 = 'SuperReactionUpsellActionSheet';
            var1 = var5.bind(var6)(var4, var2, var3);
 147:
            return var1;
        }
    };
    var _closure1_slot12 = var6;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot7 = var5;
    var5 = var4.AnalyticsPages;
    var _closure1_slot8 = var5;
    var4 = var4.AnalyticsSections;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var5 = {};
    var7 = 17;
    var4 = var9[var7];
    var4 = var8.bind(var1)(var4);
    var4 = var4.ReactionTypes;
    var10 = var4.NORMAL;
    var4 = 21;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var5[var10] = var4;
    var4 = var9[var7];
    var4 = var8.bind(var1)(var4);
    var4 = var4.ReactionTypes;
    var10 = var4.BURST;
    var4 = 22;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var5[var10] = var4;
    var4 = {};
    var10 = var9[var7];
    var10 = var8.bind(var1)(var10);
    var10 = var10.ReactionTypes;
    var11 = var10.NORMAL;
    var10 = 23;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var10 = var10.ReactionIcon;
    var4[var11] = var10;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ReactionTypes;
    var10 = var7.BURST;
    var7 = 24;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.SuperReactionIcon;
    var4[var10] = var7;
    var7 = 28;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/reactions/native/ReactionUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['handleOutOfSuperReactions'] = var6;
    var6 = function handleAddNewReactions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var9 = arg1;
            var5 = arguments[2];
            var3 = arguments[3];
            var _closure2_slot0 = var9;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 63; continue _fun0002 }
 28:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.ReactionLocations;
            var5 = var2.MESSAGE;
 63:
            var _closure2_slot2 = var5;
            var2 = null;
            var6 = var2 == var3;
            var4 = undefined;
            if(var6) { _fun0002_ip = 84; continue _fun0002 }
 78:
            var4 = var3.burst;
 84:
            var3 = true;
            var8 = var3 === var4;
            var4 = _closure1_slot6;
            var3 = var4.getCurrentUser;
            var6 = var3.bind(var4)();
            if(!(var2 != var6)) { _fun0002_ip = 360; continue _fun0002 }
 113:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
            var3 = var11[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isPremium;
            var6 = var3.bind(var4)(var6);
            var3 = var8;
            if(!var3) { _fun0002_ip = 153; continue _fun0002 }
 150:
            var3 = !var6;
 153:
            if(!var3) { _fun0002_ip = 164; continue _fun0002 }
 156:
            var3 = _closure1_slot12;
            var3 = var3.bind(var1)();
 164:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 15;
            var3 = var11[var3];
            var11 = var4.bind(var1)(var3);
            var4 = var11.getBestActiveInputForChannelId;
            var3 = var9.id;
            var3 = var4.bind(var11)(var3);
            if(!(var2 != var3)) { _fun0002_ip = 214; continue _fun0002 }
 204:
            var2 = var3.closeCustomKeyboard;
            var2 = var2.bind(var3)();
 214:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.openEmojiPickerActionSheet;
            var2 = {};
            var10 = function onPressEmoji(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var10 = arg1;
                    var2 = _closure2_slot0;
                    var7 = var2.id;
                    var6 = _closure2_slot1;
                    var5 = _closure2_slot2;
                    var4 = {};
                    var1 = arg2;
                    var4['burst'] = var1;
                    var2 = null;
                    if(!(var2 != var10)) { _fun0003_ip = 195; continue _fun0003 }
 42:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var8 = undefined;
                    var9 = var9.bind(var8)(var3);
                    var3 = var9.toReactionEmoji;
                    var3 = var3.bind(var9)(var10);
                    var2 = var2 != var4;
                    if(!var2) { _fun0003_ip = 91; continue _fun0003 }
 85:
                    var2 = var4.burst;
 91:
                    if(var2) { _fun0003_ip = 147; continue _fun0003 }
 94:
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 8;
                    var2 = var12[var2];
                    var10 = var9.bind(var8)(var2);
                    var9 = var10.triggerHapticFeedback;
                    var11 = _closure1_slot1;
                    var2 = 9;
                    var2 = var12[var2];
                    var2 = var11.bind(var8)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var9.bind(var10)(var2);
 147:
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 10;
                    var1 = var9[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.addReaction;
                    var18 = var2;
                    var17 = var7;
                    var16 = var6;
                    var15 = var3;
                    var14 = var5;
                    var13 = var4;
                    var1 = var18[var1](var17, var16, var15, var14, var13, var12);
 195:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPressEmoji'] = var10;
            var2['channel'] = var9;
            var9 = _closure1_slot10;
            var9 = var9.REACTION;
            var2['pickerIntention'] = var9;
            if(!var8) { _fun0002_ip = 279; continue _fun0002 }
 276:
            if(var6) { _fun0002_ip = 313; continue _fun0002 }
 279:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 17;
            var6 = var9[var6];
            var6 = var8.bind(var1)(var6);
            var6 = var6.ReactionTypes;
            var6 = var6.NORMAL;
            _fun0002_ip = 345; continue _fun0002;
 313:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 17;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.ReactionTypes;
            var6 = var7.BURST;
 345:
            var2['reactionType'] = var6;
            var2['analyticsObject'] = var5;
            var2 = var3.bind(var4)(var2);
 360:
            return var1;
        }
    };
    var3['handleAddNewReactions'] = var6;
    var6 = function handleViewReactions(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var9 = var5.messageId;
            var8 = var5.channelId;
            var14 = var5.location;
            var1 = undefined;
            if(!(var14 === var1)) { _fun0004_ip = 26; continue _fun0004 }
 24:
            var14 = {};
 26:
            var13 = var5.isPoll;
            var7 = var5.emoji;
            var4 = {'messageId': 0, 'channelId': 0, 'location': 0, 'isPoll': 0, 'emoji': 0};
            var3 = null;
            var21 = var4;
            var20 = null;
            var2 = silentSetPrototypeOf(var21, var20);
            var21 = {};
            var20 = var5;
            var19 = var4;
            var2 = copyDataProperties(var21, var20, var19);
            var6 = _closure1_slot3;
            var5 = var6.getChannel;
            var6 = var5.bind(var6)(var8);
            if(!(var3 != var6)) { _fun0004_ip = 109; continue _fun0004 }
 96:
            var5 = var6.isPrivate;
            var5 = var5.bind(var6)();
            if(var5) { _fun0004_ip = 121; continue _fun0004 }
 109:
            var5 = _closure1_slot8;
            var16 = var5.GUILD_CHANNEL;
            _fun0004_ip = 131; continue _fun0004;
 121:
            var5 = _closure1_slot8;
            var16 = var5.DM_CHANNEL;
 131:
            if(!(var3 != var6)) { _fun0004_ip = 148; continue _fun0004 }
 135:
            var5 = var6.isForumLikeChannel;
            var5 = var5.bind(var6)();
            if(var5) { _fun0004_ip = 177; continue _fun0004 }
 148:
            if(!(var3 != var6)) { _fun0004_ip = 165; continue _fun0004 }
 152:
            var5 = var6.isForumPost;
            var5 = var5.bind(var6)();
            if(var5) { _fun0004_ip = 177; continue _fun0004 }
 165:
            var5 = _closure1_slot9;
            var15 = var5.CHANNEL;
            _fun0004_ip = 187; continue _fun0004;
 177:
            var5 = _closure1_slot9;
            var15 = var5.FORUM_CHANNEL_POST;
 187:
            if(!(var3 == var13)) { _fun0004_ip = 232; continue _fun0004 }
 191:
            var6 = _closure1_slot4;
            var5 = var6.getMessage;
            var6 = var5.bind(var6)(var8, var9);
            var3 = var3 == var6;
            var5 = undefined;
            if(var3) { _fun0004_ip = 226; continue _fun0004 }
 216:
            var3 = var6.isPoll;
            var5 = var3.bind(var6)();
 226:
            var3 = true;
            var13 = var3 === var5;
 232:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 18;
            var5 = var3[var5];
            var12 = var6.bind(var1)(var5);
            var11 = var12.trackWithMetadata;
            var5 = _closure1_slot7;
            var10 = var5.REACTION_ACTION_SHEET_OPENED;
            var5 = {};
            var18 = _closure1_slot5;
            var17 = var18.getGuildId;
            var17 = var17.bind(var18)();
            var5['guild_id'] = var17;
            var5['channel_id'] = var8;
            var5['location_message_id'] = var9;
            var5['location_message_is_poll'] = var13;
            var13 = {};
            var13['page'] = var16;
            var13['section'] = var15;
            var21 = var13;
            var20 = var14;
            var14 = copyDataProperties(var21, var20);
            var5['location'] = var13;
            var5 = var11.bind(var12)(var10, var5);
            var5 = 12;
            var5 = var3[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.openLazy;
            var10 = _closure1_slot0;
            var4 = 14;
            var4 = var3[var4];
            var10 = var10.bind(var1)(var4);
            var4 = 19;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var10.bind(var1)(var4, var3);
            var3 = {};
            var3['messageId'] = var9;
            var3['channelId'] = var8;
            var3['emoji'] = var7;
            var21 = var3;
            var20 = var2;
            var2 = copyDataProperties(var21, var20);
            var2 = 'MessageReactions';
            var2 = var5.bind(var6)(var4, var2, var3);
            return var1;
        }
    };
    var3['handleViewReactions'] = var6;
    var6 = function handleViewPreviewReactions(arg1, arg2, arg3) {
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var4 = var2[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var4 = _closure1_slot0;
        var3 = 14;
        var3 = var2[var3];
        var4 = var4.bind(var1)(var3);
        var3 = 20;
        var3 = var2[var3];
        var2 = var2.paths;
        var4 = var4.bind(var1)(var3, var2);
        var3 = {};
        var2 = arg1;
        var3['messageId'] = var2;
        var2 = arg2;
        var3['channelId'] = var2;
        var2 = arg3;
        var3['emoji'] = var2;
        var2 = 'MessagePreviewReactions';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['handleViewPreviewReactions'] = var6;
    var3['ADD_REACTION_ICONS'] = var5;
    var3['ADD_REACTION_ICON_COMPONENTS'] = var4;
    var2 = function handleRemoveAllReactions(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 25;
        var2 = var10[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var9 = _closure1_slot0;
        var6 = 26;
        var8 = var10[var6];
        var8 = var9.bind(var1)(var8);
        var12 = var8.intl;
        var11 = var12.string;
        var8 = var10[var6];
        var8 = var9.bind(var1)(var8);
        var8 = var8.t;
        var8 = var8.ZbtGBg;
        var8 = var11.bind(var12)(var8);
        var2['title'] = var8;
        var11 = _closure1_slot11;
        var7 = 27;
        var7 = var10[var7];
        var7 = var9.bind(var1)(var7);
        var8 = var7.Text;
        var7 = {};
        var12 = 'text-md/normal';
        var7['variant'] = var12;
        var12 = var10[var6];
        var12 = var9.bind(var1)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = var10[var6];
        var12 = var9.bind(var1)(var12);
        var12 = var12.t;
        var12 = var12.VpjOCg;
        var12 = var13.bind(var14)(var12);
        var7['children'] = var12;
        var7 = var11.bind(var1)(var8, var7);
        var2['children'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.ETE/oK;
        var7 = var8.bind(var11)(var7);
        var2['cancelText'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.oyYWHB;
        var6 = var7.bind(var8)(var6);
        var2['confirmText'] = var6;
        var5 = function onConfirm() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.removeAllReactions;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['handleRemoveAllReactions'] = var2;
    return var1;
})();