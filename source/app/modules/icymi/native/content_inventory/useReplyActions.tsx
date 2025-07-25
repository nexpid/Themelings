// app/modules/icymi/native/content_inventory/useReplyActions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/content_inventory/useReplyActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.content;
            var _closure2_slot0 = var9;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 7;
            var2 = var1[var7];
            var11 = var8.bind(var5)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var1.author_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var11)(var6, var2);
            var _closure2_slot1 = var10;
            var2 = 'unknown';
            var _closure2_slot2 = var2;
            var6 = var9.content_type;
            var11 = 8;
            var1 = var1[var11];
            var1 = var8.bind(var5)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.TOP_GAME;
            if(!(var1 !== var6)) { _fun0001_ip = 212; continue _fun0001 }
 131:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var8.bind(var5)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.PLAYED_GAME;
            if(!(var1 !== var6)) { _fun0001_ip = 212; continue _fun0001 }
 164:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var8.bind(var5)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.CUSTOM_STATUS;
            if(!(var1 === var6)) { _fun0001_ip = 225; continue _fun0001 }
 197:
            var1 = 'hotwheels_custom_status';
            _closure2_slot2 = var1;
            var2 = var1;
            _fun0001_ip = 225; continue _fun0001;
 212:
            var1 = 'hotwheels_gaming_activity';
            _closure2_slot2 = var1;
            var2 = var1;
 225:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var8 = var6.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 52; continue _fun0002 }
 13:
                    var4 = _closure1_slot5;
                    var3 = var4.getDMFromUserId;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var3 = var3.bind(var4)(var2);
                    var2 = var4.getChannel;
                    var2 = var2.bind(var4)(var3);
                    return var2;
 52:
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var6, var1);
            _closure2_slot3 = var1;
            var6 = null;
            var12 = var6 != var1;
            _closure2_slot4 = var12;
            var11 = _closure1_slot4;
            var8 = var11.useEffect;
            var7 = new Array(2);
            var7[0] = var12;
            var12 = var6 == var1;
            var6 = undefined;
            if(var12) { _fun0001_ip = 317; continue _fun0001 }
 312:
            var6 = var1.id;
 317:
            var7[1] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0003_ip = 14; continue _fun0003 }
 10:
                    var1 = undefined;
                    return var1;
 14:
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.clearAll;
                            var7 = _closure2_slot3;
                            var3 = null;
                            var7 = var3 == var7;
                            var3 = undefined;
                            if(var7) { _fun0004_ip = 58; continue _fun0004 }
 49:
                            var6 = _closure2_slot3;
                            var3 = var6.id;
 58:
                            var2 = _closure1_slot6;
                            var2 = var2.ChannelMessage;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var6 = var8.bind(var11)(var6, var7);
            var6 = _closure1_slot4;
            var7 = var6.useCallback;
            var4 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 736; continue _fun0005 }
 13:
                            var2 = _closure2_slot1;
                            var13 = null;
                            if(!(var13 != var2)) { _fun0005_ip = 725; continue _fun0005 }
 29:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var2 = var4[var2];
                            var11 = undefined;
                            var4 = var3.bind(var11)(var2);
                            var3 = var4.getOrEnsurePrivateChannel;
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            SaveGenerator(address=78);
 76:
                            return var2;
 78:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0005_ip = 733; continue _fun0005 }
 87:
                            var4 = _closure1_slot5;
                            var3 = var4.getChannel;
                            var3 = var3.bind(var4)(var2);
                            if(!(var13 != var3)) { _fun0005_ip = 590; continue _fun0005 }
 108:
                            var4 = _closure2_slot0;
                            var6 = var4.content_type;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 8;
                            var4 = var9[var4];
                            var4 = var8.bind(var11)(var4);
                            var4 = var4.ContentInventoryEntryType;
                            var4 = var4.CUSTOM_STATUS;
                            if(!(var6 !== var4)) { _fun0005_ip = 227; continue _fun0005 }
 154:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 15;
                            var4 = var8[var4];
                            var8 = var6.bind(var11)(var4);
                            var6 = var8.sendMessageWithEmbed;
                            var4 = {};
                            var4['channel'] = var3;
                            var4['content'] = var5;
                            var9 = _closure2_slot0;
                            var4['entry'] = var9;
                            var9 = false;
                            var4['whenReady'] = var9;
                            var4 = var6.bind(var8)(var4);
                            SaveGenerator(address=215);
 213:
                            return var4;
 215:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                            if(!var6) { _fun0005_ip = 590; continue _fun0005 }
 224:
                            return var4;
 227:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 11;
                            var4 = var8[var4];
                            var9 = var6.bind(var11)(var4);
                            var8 = var9.getStatusReplyContent;
                            var4 = {};
                            var6 = _closure2_slot0;
                            var12 = var6.extra;
                            var12 = var12.status;
                            var4['status'] = var12;
                            var6 = var6.extra;
                            var6 = var6.emoji_name;
                            var12 = var13 != var6;
                            var15 = '';
                            var6 = var15;
                            if(!var12) { _fun0005_ip = 446; continue _fun0005 }
 303:
                            var12 = _closure2_slot0;
                            var12 = var12.extra;
                            var12 = var12.emoji_id;
                            if(!(var13 != var12)) { _fun0005_ip = 362; continue _fun0005 }
 323:
                            var13 = global;
                            var14 = var13.String;
                            var12 = _closure2_slot0;
                            var12 = var12.extra;
                            var12 = var12.emoji_id;
                            var14 = var14.bind(var11)(var12);
                            var12 = '0';
                            if(!(var12 === var14)) { _fun0005_ip = 398; continue _fun0005 }
 362:
                            var12 = _closure2_slot0;
                            var12 = var12.extra;
                            var14 = var12.emoji_name;
                            var12 = global;
                            var12 = var12.HermesInternal;
                            var12 = var12.concat;
                            var12 = var12.bind(var15)(var14);
                            _fun0005_ip = 443; continue _fun0005;
 398:
                            var14 = _closure2_slot0;
                            var14 = var14.extra;
                            var16 = var14.emoji_name;
                            var13 = var13.HermesInternal;
                            var15 = var13.concat;
                            var14 = '`:';
                            var13 = ':`';
                            var12 = var15.bind(var14)(var16, var13);
 443:
                            var6 = var12;
 446:
                            var4['emojiStr'] = var6;
                            var4['reply'] = var5;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var12 = 12;
                            var12 = var6[var12];
                            var14 = var5.bind(var11)(var12);
                            var13 = var14.getName;
                            var12 = _closure2_slot1;
                            var12 = var13.bind(var14)(var12);
                            var4['username'] = var12;
                            var10 = _closure2_slot0;
                            var10 = var10.extra;
                            var10 = var10.attachments;
                            var4['attachments'] = var10;
                            var9 = var8.bind(var9)(var4);
                            var4 = 13;
                            var4 = var6[var4];
                            var8 = var5.bind(var11)(var4);
                            var4 = var8.parse;
                            var8 = var4.bind(var8)(var3, var9);
                            var4 = 14;
                            var4 = var6[var4];
                            var6 = var5.bind(var11)(var4);
                            var5 = var6.sendMessage;
                            var4 = var3.id;
                            var3 = false;
                            var3 = var5.bind(var6)(var4, var8, var3);
                            SaveGenerator(address=581);
 579:
                            return var3;
 581:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 730; continue _fun0005 }
 590:
                            var5 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var4 = 16;
                            var4 = var12[var4];
                            var6 = var5.bind(var11)(var4);
                            var4 = var6.hideActionSheet;
                            var4 = var4.bind(var6)();
                            var4 = 17;
                            var4 = var12[var4];
                            var6 = var5.bind(var11)(var4);
                            var5 = var6.open;
                            var4 = {};
                            var8 = 'content_inventory_message_sent';
                            var4['key'] = var8;
                            var10 = _closure1_slot0;
                            var7 = 18;
                            var8 = var12[var7];
                            var8 = var10.bind(var11)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var12[var7];
                            var7 = var10.bind(var11)(var7);
                            var7 = var7.t;
                            var7 = var7.fjcCk5;
                            var7 = var8.bind(var9)(var7);
                            var4['content'] = var7;
                            var7 = function icon() {
                                var4 = _closure1_slot9;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 19;
                                var1 = var3[var1];
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.ChatCheckIcon;
                                var1 = {};
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            };
                            var4['icon'] = var7;
                            var4 = var5.bind(var6)(var4);
 725:
                            var4 = undefined;
                            return var4;
 730:
                            return var3;
 733:
                            return var2;
 736:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var5 = var4.bind(var5)();
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var9;
            var7 = var7.bind(var6)(var5, var4);
            _closure2_slot5 = var7;
            var5 = var6.useCallback;
            var8 = var9.id;
            var4 = new Array(3);
            var4[0] = var8;
            var4[1] = var2;
            var4[2] = var7;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var8 = var1.ICYMIAnalytics;
                    var7 = var8.trackItemInteraction;
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var5 = _closure2_slot2;
                    var2 = 'press_emoji_send';
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var2 = _closure2_slot5;
                    var5 = var4.id;
                    var1 = null;
                    if(!(var1 == var5)) { _fun0006_ip = 91; continue _fun0006 }
 84:
                    var1 = var4.surrogates;
                    _fun0006_ip = 119; continue _fun0006;
 91:
                    var6 = var4.name;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = ':';
                    var1 = var5.bind(var4)(var6, var4);
 119:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var5.bind(var6)(var2, var4);
            _closure2_slot6 = var8;
            var4 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var8;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openEmojiPickerActionSheet;
                    var2 = {'pickerIntention': null, 'autoFocus': false, 'startExpanded': false};
                    var6 = _closure1_slot8;
                    var6 = var6.REACTION;
                    var2['pickerIntention'] = var6;
                    var6 = _closure2_slot6;
                    var2['onPressEmoji'] = var6;
                    var8 = _closure2_slot3;
                    var6 = null;
                    var8 = var6 != var8;
                    var6 = undefined;
                    if(!var8) { _fun0007_ip = 92; continue _fun0007 }
 88:
                    var6 = _closure2_slot3;
 92:
                    var2['channel'] = var6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 22;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.ReactionTypes;
                    var5 = var5.NORMAL;
                    var2['reactionType'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var1, var2);
            var1 = {};
            var5 = var6.useCallback;
            var4 = new Array(4);
            var4[0] = var10;
            var4[1] = var9;
            var4[2] = var8;
            var4[3] = var7;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 301; continue _fun0008 }
 16:
                    var2 = _closure2_slot0;
                    var4 = var2.content_type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 8;
                    var2 = var2[var6];
                    var8 = undefined;
                    var2 = var5.bind(var8)(var2);
                    var2 = var2.ContentInventoryEntryType;
                    var2 = var2.CUSTOM_STATUS;
                    var11 = 'hotwheels_custom_status';
                    if(!(var2 !== var4)) { _fun0008_ip = 149; continue _fun0008 }
 73:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var8)(var2);
                    var2 = var2.ContentInventoryEntryType;
                    var2 = var2.TOP_GAME;
                    if(!(var2 !== var4)) { _fun0008_ip = 143; continue _fun0008 }
 106:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var8)(var2);
                    var2 = var2.ContentInventoryEntryType;
                    var2 = var2.PLAYED_GAME;
                    var11 = 'unknown';
                    if(!(var2 === var4)) { _fun0008_ip = 149; continue _fun0008 }
 143:
                    var11 = 'hotwheels_gaming_activity';
 149:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 20;
                    var4 = var2[var4];
                    var4 = var7.bind(var8)(var4);
                    var10 = var4.ICYMIAnalytics;
                    var9 = var10.trackItemInteraction;
                    var6 = _closure2_slot0;
                    var5 = var6.id;
                    var4 = 'press_reply_react';
                    var4 = var9.bind(var10)(var5, var11, var4);
                    var4 = _closure1_slot1;
                    var3 = 16;
                    var3 = var2[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.openLazy;
                    var3 = 24;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 23;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var2['content'] = var6;
                    var6 = _closure2_slot1;
                    var2['author'] = var6;
                    var6 = _closure2_slot5;
                    var2['sendMessage'] = var6;
                    var1 = _closure2_slot6;
                    var2['onPressEmoji'] = var1;
                    var1 = 'ReactActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
 301:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            var1['openReplyActionSheet'] = var3;
            var1['openEmojiPicker'] = var2;
            return var1;
        }
    };
    var3['useReplyActions'] = var2;
    return var1;
})();