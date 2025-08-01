// app/modules/notification_center/native/ForYouItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function ForYouFooter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.loading;
            var1 = null;
            if(!var2) { _fun0001_ip = 57; continue _fun0001 }
 14:
            var5 = _closure1_slot20;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.ForYouMentionPlaceholder;
            var2 = {};
            var1 = var5.bind(var4)(var3, var2);
 57:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function getMessagePreviewIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot29;
            var2 = var2.ATTACHMENT;
            if(!(var2 !== var3)) { _fun0002_ip = 100; continue _fun0002 }
 20:
            var2 = _closure1_slot29;
            var2 = var2.STICKER;
            if(!(var2 !== var3)) { _fun0002_ip = 76; continue _fun0002 }
 34:
            var2 = _closure1_slot29;
            var2 = var2.VOICE_MESSAGE;
            if(!(var2 !== var3)) { _fun0002_ip = 52; continue _fun0002 }
 48:
            var2 = null;
            return var2;
 52:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 24;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 76:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 23;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 100:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function Callout(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.item;
            var13 = var1.acked;
            var12 = var1.compactMode;
            var1 = _closure1_slot28;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot2;
            var14 = _closure1_slot3;
            var1 = 16;
            var1 = var14[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getParser;
            var1 = _closure1_slot25;
            var1 = var1.bind(var4)();
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot21;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var11.calloutContainer;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var8 = _closure1_slot20;
            var7 = _closure1_slot7;
            var5 = {};
            var15 = var11.messagePreviewBarV2;
            var5['style'] = var15;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot20;
            var7 = _closure1_slot0;
            var6 = 14;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            if(var13) { _fun0003_ip = 173; continue _fun0003 }
 165:
            var13 = var11.calloutTextNotAcked;
            _fun0003_ip = 179; continue _fun0003;
 173:
            var13 = var11.calloutTextAcked;
 179:
            var11 = new Array(1);
            var11[0] = var13;
            var6['style'] = var11;
            var11 = 'redesign/message-preview/medium';
            var6['variant'] = var11;
            var11 = 10;
            if(!var12) { _fun0003_ip = 210; continue _fun0003 }
 207:
            var11 = 3;
 210:
            var6['lineClamp'] = var11;
            var9 = var9.callout;
            var9 = var10.bind(var4)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function ForYouMessagePreviewV2(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var9 = var2.item;
            var _closure2_slot0 = var9;
            var11 = var2.acked;
            var12 = var2.compactMode;
            var7 = var2.roleStyle;
            var2 = _closure1_slot28;
            var4 = undefined;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot2;
            var13 = _closure1_slot3;
            var2 = 16;
            var2 = var13[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.getNotifCenterV2MessagePreviewParser;
            var2 = _closure1_slot26;
            var3 = var2.bind(var4)();
            var2 = _closure1_slot27;
            var14 = var5.bind(var6)(var3, var2, var7);
            var2 = {};
            var2['item'] = var9;
            var2 = var2.item;
            var5 = _closure1_slot0;
            var20 = 18;
            var3 = var13[var20];
            var3 = var5.bind(var4)(var3);
            var7 = var3.intl;
            var6 = var7.string;
            var3 = var13[var20];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.BOi07O;
            var7 = var6.bind(var7)(var3);
            var8 = 19;
            var3 = var13[var8];
            var16 = var5.bind(var4)(var3);
            var6 = var16.hasFlag;
            var5 = var2.message;
            var10 = null;
            var15 = var10 == var5;
            var3 = undefined;
            if(var15) { _fun0004_ip = 193; continue _fun0004 }
 188:
            var3 = var5.flags;
 193:
            var18 = var10 != var3;
            var15 = 0;
            var5 = 0;
            if(!var18) { _fun0004_ip = 207; continue _fun0004 }
 204:
            var5 = var3;
 207:
            var3 = _closure1_slot16;
            var3 = var3.IS_VOICE_MESSAGE;
            var16 = var6.bind(var16)(var5, var3);
            var3 = var2.message;
            var5 = var10 == var3;
            var21 = undefined;
            if(var5) { _fun0004_ip = 242; continue _fun0004 }
 237:
            var21 = var3.type;
 242:
            var3 = _closure1_slot18;
            var18 = var3.POLL_RESULT;
            var5 = var2.message;
            var6 = var10 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 272; continue _fun0004 }
 266:
            var3 = var5.attachments;
 272:
            if(!(var10 == var3)) { _fun0004_ip = 280; continue _fun0004 }
 276:
            var3 = new Array(0);
 280:
            var6 = var3.length;
            var5 = var2.message;
            var22 = var10 == var5;
            var3 = undefined;
            if(var22) { _fun0004_ip = 305; continue _fun0004 }
 299:
            var3 = var5.stickers;
 305:
            if(!(var10 == var3)) { _fun0004_ip = 313; continue _fun0004 }
 309:
            var3 = new Array(0);
 313:
            var5 = var3.length;
            var22 = var2.message;
            var23 = var10 == var22;
            var3 = undefined;
            if(var23) { _fun0004_ip = 338; continue _fun0004 }
 332:
            var3 = var22.embeds;
 338:
            if(!(var10 == var3)) { _fun0004_ip = 346; continue _fun0004 }
 342:
            var3 = new Array(0);
 346:
            var3 = var3.length;
            if(!(var21 !== var18)) { _fun0004_ip = 715; continue _fun0004 }
 358:
            if(!(!(var5 > var15))) { _fun0004_ip = 651; continue _fun0004 }
 365:
            var18 = _closure1_slot0;
            var5 = _closure1_slot3;
            if(var16) { _fun0004_ip = 592; continue _fun0004 }
 379:
            var8 = var5[var8];
            var22 = var18.bind(var4)(var8);
            var21 = var22.hasFlag;
            var16 = var2.message;
            var23 = var10 == var16;
            var8 = undefined;
            if(var23) { _fun0004_ip = 413; continue _fun0004 }
 408:
            var8 = var16.flags;
 413:
            var23 = var10 != var8;
            var16 = 0;
            if(!var23) { _fun0004_ip = 425; continue _fun0004 }
 422:
            var16 = var8;
 425:
            var8 = _closure1_slot16;
            var8 = var8.IS_COMPONENTS_V2;
            var8 = var21.bind(var22)(var16, var8);
            if(var8) { _fun0004_ip = 533; continue _fun0004 }
 444:
            var8 = var6 > var15;
            if(var8) { _fun0004_ip = 455; continue _fun0004 }
 451:
            var8 = var3 > var15;
 455:
            var3 = undefined;
            var6 = var7;
            if(!var8) { _fun0004_ip = 818; continue _fun0004 }
 466:
            var22 = _closure1_slot0;
            var8 = _closure1_slot3;
            var16 = var8[var20];
            var16 = var22.bind(var4)(var16);
            var21 = var16.intl;
            var16 = var21.string;
            var8 = var8[var20];
            var8 = var22.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.JAKsMz;
            var6 = var16.bind(var21)(var8);
            var16 = _closure1_slot29;
            var3 = var16.ATTACHMENT;
            _fun0004_ip = 818; continue _fun0004;
 533:
            var22 = _closure1_slot0;
            var8 = _closure1_slot3;
            var16 = var8[var20];
            var16 = var22.bind(var4)(var16);
            var21 = var16.intl;
            var16 = var21.string;
            var8 = var8[var20];
            var8 = var22.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Xxm5i4;
            var6 = var16.bind(var21)(var8);
            var3 = undefined;
            _fun0004_ip = 818; continue _fun0004;
 592:
            var8 = var5[var20];
            var8 = var18.bind(var4)(var8);
            var16 = var8.intl;
            var8 = var16.string;
            var5 = var5[var20];
            var5 = var18.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.6bhHra;
            var6 = var8.bind(var16)(var5);
            var8 = _closure1_slot29;
            var3 = var8.VOICE_MESSAGE;
            _fun0004_ip = 818; continue _fun0004;
 651:
            var18 = _closure1_slot0;
            var5 = _closure1_slot3;
            var8 = var5[var20];
            var8 = var18.bind(var4)(var8);
            var16 = var8.intl;
            var8 = var16.string;
            var5 = var5[var20];
            var5 = var18.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.7K5LmZ;
            var6 = var8.bind(var16)(var5);
            var8 = _closure1_slot29;
            var3 = var8.STICKER;
            _fun0004_ip = 818; continue _fun0004;
 715:
            var5 = var2.message;
            var16 = var10 == var5;
            var8 = undefined;
            if(var16) { _fun0004_ip = 748; continue _fun0004 }
 729:
            var5 = var5.embeds;
            var16 = var10 == var5;
            var8 = undefined;
            if(var16) { _fun0004_ip = 748; continue _fun0004 }
 744:
            var8 = var5[var15];
 748:
            var15 = _closure1_slot1;
            var16 = _closure1_slot3;
            var5 = 20;
            var5 = var16[var5];
            var5 = var15.bind(var4)(var5);
            var8 = var5.bind(var4)(var8);
            var5 = var10 != var8;
            var3 = undefined;
            var6 = var7;
            if(!var5) { _fun0004_ip = 818; continue _fun0004 }
 785:
            var7 = _closure1_slot0;
            var15 = _closure1_slot3;
            var5 = 21;
            var5 = var15[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.formatPollResultNotificationCenterText;
            var6 = var5.bind(var7)(var8);
            var3 = undefined;
 818:
            var2 = var2.message;
            var5 = var10 == var2;
            var7 = undefined;
            if(var5) { _fun0004_ip = 837; continue _fun0004 }
 832:
            var7 = var2.content;
 837:
            var5 = var10 != var7;
            if(!var5) { _fun0004_ip = 852; continue _fun0004 }
 844:
            var2 = '';
            var5 = var2 !== var7;
 852:
            var2 = {};
            if(!var5) { _fun0004_ip = 860; continue _fun0004 }
 857:
            var6 = var7;
 860:
            var2['content'] = var6;
            var5 = !var5;
            var2['isSystemMessage'] = var5;
            var2['iconType'] = var3;
            var21 = var2.content;
            var23 = var2.isSystemMessage;
            var22 = var2.iconType;
            var20 = var9.guild_id;
            var _closure2_slot1 = var20;
            var18 = var9.message_channel_id;
            var _closure2_slot2 = var18;
            var16 = var9.message_id;
            var7 = _closure1_slot0;
            var2 = 25;
            var2 = var13[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useShouldFilterKeywords;
            var15 = var2.bind(var3)();
            var2 = 26;
            var3 = var13[var2];
            var8 = var7.bind(var4)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var6.bind(var8)(var5, var3);
            var3 = var13[var2];
            var8 = var7.bind(var4)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var6.bind(var8)(var5, var3);
            var2 = var13[var2];
            var5 = var7.bind(var4)(var2);
            var3 = var5.useStateFromStoresArray;
            var6 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = _closure1_slot13;
                    var4 = var6.getUser;
                    var1 = _closure2_slot0;
                    var7 = var1.message;
                    var2 = null;
                    var8 = var2 == var7;
                    var1 = undefined;
                    if(var8) { _fun0005_ip = 47; continue _fun0005 }
 36:
                    var7 = var7.author;
                    var1 = var7.id;
 47:
                    var4 = var4.bind(var6)(var1);
                    var1 = new Array(1);
                    var1[0] = var4;
                    var3 = _closure2_slot0;
                    var4 = var3.message;
                    var6 = var2 == var4;
                    var3 = undefined;
                    if(var6) { _fun0005_ip = 112; continue _fun0005 }
 78:
                    var6 = var4.mentions;
                    var4 = var2 == var6;
                    var3 = undefined;
                    if(var4) { _fun0005_ip = 112; continue _fun0005 }
 93:
                    var5 = var6.map;
                    var4 = function(arg1) {
                        var3 = _closure1_slot13;
                        var2 = var3.getUser;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
 112:
                    if(!(var2 == var3)) { _fun0005_ip = 120; continue _fun0005 }
 116:
                    var3 = new Array(0);
 120:
                    var9 = 1;
                    var11 = var1;
                    var10 = var3;
                    var2 = arraySpread(var11, var10, var9);
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot21;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var17.messagePreviewContainerV2;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var8 = _closure1_slot20;
            var6 = _closure1_slot7;
            var5 = {};
            var24 = var17.messagePreviewBarV2;
            var5['style'] = var24;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot21;
            var6 = 14;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            if(var11) { _fun0004_ip = 1163; continue _fun0004 }
 1155:
            var13 = var17.messagePreviewTextV2NotAcked;
            _fun0004_ip = 1169; continue _fun0004;
 1163:
            var13 = var17.messagePreviewTextV2Acked;
 1169:
            var11 = new Array(2);
            var11[0] = var13;
            var13 = undefined;
            if(!var23) { _fun0004_ip = 1188; continue _fun0004 }
 1182:
            var13 = var17.messagePreviewSystemTextV2;
 1188:
            var11[1] = var13;
            var6['style'] = var11;
            var11 = 'redesign/message-preview/medium';
            var6['variant'] = var11;
            var11 = 10;
            if(!var12) { _fun0004_ip = 1215; continue _fun0004 }
 1212:
            var11 = 3;
 1215:
            var6['lineClamp'] = var11;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var11 = 27;
            var11 = var13[var11];
            var13 = var12.bind(var4)(var11);
            var12 = var13.renderMessageContentMarkup;
            var11 = {};
            var11['content'] = var21;
            var11['guildId'] = var20;
            var11['channelId'] = var18;
            var11['messageId'] = var16;
            var16 = var9.message;
            var18 = var10 == var16;
            var9 = undefined;
            if(var18) { _fun0004_ip = 1289; continue _fun0004 }
 1278:
            var16 = var16.author;
            var9 = var16.id;
 1289:
            var11['authorId'] = var9;
            var9 = {};
            var9['shouldFilterKeywords'] = var15;
            var11 = var12.bind(var13)(var14, var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var10 = var10 != var22;
            if(!var10) { _fun0004_ip = 1437; continue _fun0004 }
 1323:
            var13 = _closure1_slot20;
            var12 = _closure1_slot7;
            var11 = {};
            var14 = var17.messagePreviewIconV2Container;
            var11['style'] = var14;
            var16 = _closure1_slot20;
            var15 = _closure1_slot1;
            var20 = _closure1_slot3;
            var18 = 28;
            var14 = var20[var18];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var21 = _closure1_slot33;
            var21 = var21.bind(var4)(var22);
            var14['source'] = var21;
            var19 = _closure1_slot0;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.IconSizes;
            var18 = var18.SMALL;
            var14['size'] = var18;
            var17 = var17.messagePreviewIconV2;
            var14['style'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 1437:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function ApplicationName(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var3 = var2.applicationId;
            var _closure2_slot0 = var3;
            var7 = var2.textVariant;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 26;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var8 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getApplication;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var6)(var3, var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0006_ip = 138; continue _fun0006 }
 81:
            var6 = _closure1_slot20;
            var4 = _closure1_slot1;
            var8 = _closure1_slot3;
            var3 = 29;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['application'] = var1;
            var3['textVariant'] = var7;
            var7 = 16;
            var3['iconSize'] = var7;
            var1 = var1.id;
            var1 = var6.bind(var5)(var4, var3, var1);
            _fun0006_ip = 154; continue _fun0006;
 138:
            var4 = _closure1_slot20;
            var3 = _closure1_slot7;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 154:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function ScrollToTopRef(arg1) {
        var1 = arg1;
        var3 = var1.scrollRef;
        var4 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 53;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.useScrollToTop;
        var1 = var1.bind(var2)(var3);
        var1 = null;
        return var1;
    };
    var _closure1_slot37 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var15 = 1;
    var4 = var6[var15];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot6 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot7 = var8;
    var13 = var4.StyleSheet;
    var4 = var4.RefreshControl;
    var _closure1_slot8 = var4;
    var17 = 4;
    var4 = var6[var17];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var14 = 6;
    var4 = var6[var14];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var16 = 8;
    var4 = var6[var16];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot15 = var8;
    var8 = var4.MessageFlags;
    var _closure1_slot16 = var8;
    var8 = var4.AnalyticsLocations;
    var _closure1_slot17 = var8;
    var4 = var4.MessageTypes;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationTypes;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot20 = var8;
    var4 = var4.jsxs;
    var _closure1_slot21 = var4;
    var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 1000};
    var _closure1_slot22 = var4;
    var4 = 13;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var18 = {};
    var19 = 14;
    var11 = var6[var19];
    var11 = var5.bind(var1)(var11);
    var11 = var11.TextStyleSheet;
    var23 = var11.text-md/medium;
    var24 = var18;
    var11 = copyDataProperties(var24, var23);
    var11 = 15;
    var20 = var6[var11];
    var20 = var12.bind(var1)(var20);
    var20 = var20.colors;
    var21 = var20.HEADER_PRIMARY;
    var20 = 'color';
    var18[var20] = var21;
    var8['strong'] = var18;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot23 = var8;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var18 = {};
    var19 = var6[var19];
    var19 = var5.bind(var1)(var19);
    var19 = var19.TextStyleSheet;
    var23 = var19.text-md/medium;
    var24 = var18;
    var19 = copyDataProperties(var24, var23);
    var19 = var6[var11];
    var19 = var12.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.TEXT_MUTED;
    var18[var20] = var19;
    var8['strong'] = var18;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot24 = var8;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var18 = {};
    var19 = var6[var11];
    var19 = var12.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.MENTION_FOREGROUND;
    var18['color'] = var19;
    var19 = var6[var11];
    var19 = var12.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.MENTION_BACKGROUND;
    var18['backgroundColor'] = var19;
    var8['mention'] = var18;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot25 = var8;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var18 = {};
    var19 = var6[var11];
    var19 = var12.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.MENTION_FOREGROUND;
    var18['color'] = var19;
    var19 = 'transparent';
    var18['backgroundColor'] = var19;
    var8['mention'] = var18;
    var18 = {};
    var19 = 'normal';
    var18['fontStyle'] = var19;
    var8['em'] = var18;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot26 = var8;
    var8 = {};
    var9 = 'redesign/message-preview/medium';
    var8['channelMentionText'] = var9;
    var _closure1_slot27 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var15;
    var4['container'] = var10;
    var10 = {'marginHorizontal': 4, 'paddingHorizontal': 12, 'paddingVertical': 8, 'marginBottom': 4, 'borderRadius': null, 'flexDirection': 'row', 'justifyContent': 'space-between'};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.lg;
    var10['borderRadius'] = var18;
    var4['row'] = var10;
    var10 = {};
    var10['paddingVertical'] = var14;
    var4['rowCompact'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_MOD_FAINT;
    var10['backgroundColor'] = var14;
    var4['rowActive'] = var10;
    var10 = {'flexDirection': 'column', 'flex': 1};
    var4['col'] = var10;
    var10 = {'flex': 1, 'flexDirection': 'row'};
    var4['rowContentContainer'] = var10;
    var10 = {'top': 28, 'backgroundColor': null, 'height': 8, 'width': 8, 'borderRadius': null, 'position': 'absolute', 'left': 4294967288};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_ACTIVE;
    var10['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var4['unreadIndicator'] = var10;
    var10 = {'top': 28, 'backgroundColor': null, 'height': 8, 'width': 8, 'borderRadius': null, 'position': 'absolute', 'left': 4};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BRAND;
    var10['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var4['unreadIndicatorV2'] = var10;
    var10 = {};
    var14 = 18;
    var10['top'] = var14;
    var4['unreadIndicatorCompactV2'] = var10;
    var10 = {};
    var10['flex'] = var15;
    var4['rowText'] = var10;
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between'};
    var4['rowTextV2'] = var10;
    var10 = {};
    var14 = 20;
    var10['lineHeight'] = var14;
    var4['rowBody'] = var10;
    var10 = {};
    var18 = 30;
    var10['marginRight'] = var18;
    var4['rowBodyV2'] = var10;
    var10 = {};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_MUTED;
    var10['color'] = var18;
    var4['rowBodyAcked'] = var10;
    var10 = {};
    var10['lineHeight'] = var14;
    var4['rowTime'] = var10;
    var10 = {};
    var14 = -24;
    var10['marginLeft'] = var14;
    var4['rowTimeV2'] = var10;
    var10 = {'alignItems': 'flex-start', 'marginRight': 4};
    var4['item'] = var10;
    var10 = {'alignItems': 'flex-start', 'marginRight': 4, 'marginLeft': 8};
    var4['itemV2'] = var10;
    var10 = {};
    var14 = 32;
    var10['paddingLeft'] = var14;
    var4['actionButtons'] = var10;
    var10 = {'height': 24, 'width': 24};
    var4['checkbox'] = var10;
    var10 = {'marginTop': 4, 'flexDirection': 'row', 'marginRight': 16};
    var4['calloutContainer'] = var10;
    var10 = {'marginRight': 8, 'borderLeftColor': null, 'borderLeftWidth': 3, 'borderRadius': 2, 'height': 'auto'};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_MODIFIER_ACCENT;
    var10['borderLeftColor'] = var18;
    var4['calloutBar'] = var10;
    var10 = {};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_MUTED;
    var10['color'] = var18;
    var4['calloutTextAcked'] = var10;
    var10 = {};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_NORMAL;
    var10['color'] = var18;
    var4['calloutTextNotAcked'] = var10;
    var10 = {'marginTop': 4, 'padding': 8, 'backgroundColor': null, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center'};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var18;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var10['borderRadius'] = var18;
    var4['messagePreviewContainer'] = var10;
    var10 = {'marginTop': 4, 'flexDirection': 'row', 'marginRight': 16};
    var4['messagePreviewContainerV2'] = var10;
    var10 = {'marginRight': 8, 'borderLeftColor': null, 'borderLeftWidth': 3, 'borderRadius': 2, 'height': 'auto'};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_MODIFIER_ACCENT;
    var10['borderLeftColor'] = var18;
    var4['messagePreviewBarV2'] = var10;
    var10 = {};
    var10['paddingTop'] = var17;
    var4['messagePreviewIconV2Container'] = var10;
    var10 = {};
    var10['marginLeft'] = var17;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.HEADER_SECONDARY;
    var10['tintColor'] = var17;
    var4['messagePreviewIconV2'] = var10;
    var10 = {};
    var10['marginRight'] = var16;
    var4['messagePreviewAvatar'] = var10;
    var10 = {};
    var10['flex'] = var15;
    var4['messagePreviewText'] = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_MUTED;
    var10['color'] = var15;
    var4['messagePreviewTextV2Acked'] = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_NORMAL;
    var10['color'] = var15;
    var4['messagePreviewTextV2NotAcked'] = var10;
    var10 = {'fontStyle': 'italic', 'fontWeight': 'normal'};
    var4['messagePreviewSystemTextV2'] = var10;
    var10 = {};
    var10['paddingLeft'] = var14;
    var4['lifecycleContainer'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_NORMAL;
    var10['color'] = var14;
    var4['refreshSpinner'] = var10;
    var10 = {};
    var13 = var13.hairlineWidth;
    var10['borderTopWidth'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.DIVIDER_SUBTLE;
    var10['borderTopColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['marginTop'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10['marginBottom'] = var11;
    var4['forYouDivider'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'sticker';
    var4['STICKER'] = var8;
    var8 = 'voice_message';
    var4['VOICE_MESSAGE'] = var8;
    var8 = 'attachment';
    var4['ATTACHMENT'] = var8;
    var _closure1_slot29 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var21 = var1.item;
            var _closure2_slot0 = var21;
            var5 = var1.ackedBeforeId;
            var15 = var1.rowIndex;
            var _closure2_slot1 = var15;
            var20 = var1.isSoftAcked;
            var12 = var1.onSoftAckItem;
            var _closure2_slot2 = var12;
            var16 = var1.forceHoistItem;
            var11 = var1.isForceHoisted;
            var19 = var1.compactMode;
            var23 = var1.roleStyle;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot28;
            var29 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 30;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useNotificationCenterItemAcked;
            var1 = var1.bind(var2)(var21, var5);
            var _closure2_slot3 = var1;
            if(var20) { _fun0007_ip = 137; continue _fun0007 }
 134:
            var20 = var1;
 137:
            var7 = _closure1_slot0;
            var14 = _closure1_slot3;
            var2 = 31;
            var2 = var14[var2];
            var5 = var7.bind(var4)(var2);
            var2 = var5.useNavigation;
            var10 = var2.bind(var5)();
            _closure2_slot4 = var10;
            var8 = _closure1_slot6;
            var6 = var8.useCallback;
            var5 = new Array(1);
            var5[0] = var21;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.deeplink;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 102; continue _fun0008 }
 19:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 32;
                    var4 = var5[var3];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var4);
                    var1 = _closure2_slot0;
                    var1 = var1.deeplink;
                    var1 = var4.bind(var3)(var1);
                    var4 = var1.payload;
                    var1 = 33;
                    var1 = var5[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {'payload': null, 'safe': true, 'navigationReplace': false};
                    var1['payload'] = var4;
                    var1 = var2.bind(var3)(var1);
 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var6.bind(var8)(var2, var5);
            _closure2_slot5 = var9;
            var6 = var8.useCallback;
            var5 = new Array(6);
            var5[0] = var1;
            var5[1] = var21;
            var5[2] = var9;
            var5[3] = var15;
            var5[4] = var12;
            var5[5] = var10;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0009_ip = 25; continue _fun0009 }
 10:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 25:
                    var1 = _closure2_slot0;
                    var3 = var1.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var9 = 34;
                    var2 = var1[var9];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.NotificationCenterLocalItems;
                    var2 = var2.FRIEND_REQUESTS_GROUPED;
                    if(!(var3 === var2)) { _fun0009_ip = 116; continue _fun0009 }
 75:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 116; continue _fun0009 }
 85:
                    var5 = _closure2_slot4;
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = 'requests';
                    var3['screen'] = var2;
                    var2 = 'friends';
                    var2 = var4.bind(var5)(var2, var3);
 116:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 35;
                    var2 = var6[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot15;
                    var3 = var2.NOTIFICATION_CENTER_ACTION;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var6 = var6[var9];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.NotificationCenterActionTypes;
                    var6 = var6.CLICKED;
                    var2['action_type'] = var6;
                    var6 = _closure2_slot0;
                    var8 = var6.id;
                    var2['notification_center_id'] = var8;
                    var8 = var6.type;
                    var2['item_type'] = var8;
                    var8 = _closure2_slot3;
                    var2['acked'] = var8;
                    var7 = _closure2_slot1;
                    var2['item_index'] = var7;
                    var6 = var6.deeplink;
                    var2['deeplink'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var2, var5);
            var17 = var8.useCallback;
            var5 = new Array(1);
            var5[0] = var21;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var5 = new Array(0);
                    var1 = _closure2_slot0;
                    var7 = var1.type;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 34;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var8.bind(var1)(var4);
                    var4 = var4.NotificationCenterItems;
                    var4 = var4.TRENDING_CONTENT;
                    if(!(var7 !== var4)) { _fun0010_ip = 194; continue _fun0010 }
 62:
                    var7 = var5.push;
                    var4 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 18;
                    var11 = var10[var8];
                    var11 = var9.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.08rqg4;
                    var8 = var11.bind(var12)(var8);
                    var4['label'] = var8;
                    var11 = _closure1_slot1;
                    var8 = 36;
                    var8 = var10[var8];
                    var8 = var11.bind(var1)(var8);
                    var4['icon'] = var8;
                    var8 = 37;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.LightbulbIcon;
                    var4['IconComponent'] = var8;
                    var8 = function onPress() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0: // try_start_0
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var2 = 41;
                            var2 = var6[var2];
                            var4 = undefined;
                            var5 = var3.bind(var4)(var2);
                            var2 = 40;
                            var3 = var6[var2];
                            var2 = var6.paths;
                            var5 = var5.bind(var4)(var3, var2);
                            var3 = _closure1_slot1;
                            var2 = 42;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.openLazy;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var6 = var6.type;
                            var2['notificationType'] = var6;
                            var1 = _closure1_slot17;
                            var1 = var1.NOTIFICATION_CENTER;
                            var2['location'] = var1;
                            var1 = 'NotificationSurvey';
                            var1 = var3.bind(var4)(var5, var1, var2);
 111: // try_end0
                            _fun0011_ip = 218; continue _fun0011;
 113: // catch_target0
                            CatchBlockStart(arg_register=0);
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var1 = 39;
                            var1 = var9[var1];
                            var8 = undefined;
                            var3 = var2.bind(var8)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var5 = 'USER_SURVEY_ERROR';
                            var1['key'] = var5;
                            var7 = _closure1_slot0;
                            var4 = 18;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.HO9Lf3;
                            var4 = var5.bind(var6)(var4);
                            var1['content'] = var4;
                            var1 = var2.bind(var3)(var1);
 218:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4['onPress'] = var8;
                    var4 = var7.bind(var5)(var4);
                    _fun0010_ip = 321; continue _fun0010;
 194:
                    var7 = var5.push;
                    var4 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 18;
                    var11 = var10[var8];
                    var11 = var9.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.gSMz//;
                    var8 = var11.bind(var12)(var8);
                    var4['label'] = var8;
                    var11 = _closure1_slot1;
                    var8 = 36;
                    var8 = var10[var8];
                    var8 = var11.bind(var1)(var8);
                    var4['icon'] = var8;
                    var8 = 37;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.LightbulbIcon;
                    var4['IconComponent'] = var8;
                    var8 = function onPress() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var1 = undefined;
                            var2 = undefined;
                            var4 = undefined;
 6: // try_start_0
                            var5 = _closure2_slot0;
                            var6 = var5.deeplink;
                            var2 = var6;
                            var5 = null;
                            var6 = var5 != var6;
                            var7 = '';
                            if(!var6) { _fun0012_ip = 38; continue _fun0012 }
 35:
                            var7 = var2;
 38:
                            var6 = var7.match;
                            var2 = /channels\\/(\d*)\\/(\d*)\\/(\d*)\?summaryId=(\d*)/;
                            var2 = var6.bind(var7)(var2);
                            var4 = var2;
                            if(!(var5 != var2)) { _fun0012_ip = 210; continue _fun0012 }
 73:
                            var6 = _closure1_slot5;
                            var5 = var4;
                            var4 = 5;
                            var7 = var6.bind(var1)(var5, var4);
                            var4 = 0;
                            var4 = var7[var4];
                            var4 = 1;
                            var9 = var7[var4];
                            var4 = 2;
                            var4 = var7[var4];
                            var5 = 3;
                            var5 = var7[var5];
                            var6 = 4;
                            var10 = var7[var6];
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var6 = 38;
                            var6 = var8[var6];
                            var8 = var7.bind(var1)(var6);
                            var7 = var8.openGuildHighlightNotificationForPush;
                            var6 = {};
                            var6['id'] = var5;
                            var6['channel_id'] = var4;
                            var4 = _closure1_slot19;
                            var13 = var4.TRENDING_CONTENT_PUSH;
                            var2 = _closure1_slot17;
                            var12 = var2.NOTIFICATION_CENTER;
                            var2 = {};
                            var2['summary_id'] = var10;
                            var16 = var8;
                            var15 = var9;
                            var14 = var6;
                            var11 = var2;
                            var2 = var16[var7](var15, var14, var13, var12, var11, var10);
 205: // try_end0
                            _fun0012_ip = 375; continue _fun0012;
 210: // try_start_1
                            var2 = global;
                            var4 = var2.Error;
                            var3 = _closure2_slot0;
                            var5 = var3.deeplink;
                            var2 = var2.HermesInternal;
                            var3 = var2.concat;
                            var2 = 'Invalid deeplink: ';
                            var15 = var3.bind(var2)(var5);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {constructor: {value: var4}});
                            var16 = var3;
                            var2 = new var16[var4](var15, var14);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
 272: // try_end1 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=1);
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var2 = 39;
                            var2 = var9[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var6 = 'USER_SURVEY_ERROR';
                            var2['key'] = var6;
                            var8 = _closure1_slot0;
                            var5 = 18;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.HO9Lf3;
                            var5 = var6.bind(var7)(var5);
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
 375:
                            return var1;
                        }
                    };
                    var4['onPress'] = var8;
                    var4 = var7.bind(var5)(var4);
 321:
                    var3 = _closure2_slot0;
                    var4 = var3.local_id;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0010_ip = 488; continue _fun0010 }
 340:
                    var4 = var5.unshift;
                    var3 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 18;
                    var10 = var9[var7];
                    var10 = var8.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.D8z9jo;
                    var7 = var10.bind(var11)(var7);
                    var3['label'] = var7;
                    var10 = _closure1_slot1;
                    var7 = 43;
                    var7 = var9[var7];
                    var7 = var10.bind(var1)(var7);
                    var3['icon'] = var7;
                    var7 = 44;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.TrashIcon;
                    var3['IconComponent'] = var7;
                    var8 = _closure1_slot4;
                    var7 = function* () {
                        var1 = function* anon_0_() {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0013_ip = 180; continue _fun0013 }
 10: // try_start_0
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 45;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.deleteNotificationCenterItem;
                                var2 = _closure2_slot0;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=57);
 55:
                                return var2;
 57:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0013_ip = 65; continue _fun0013 }
 63: // try_end0
                                _fun0013_ip = 175; continue _fun0013;
 65:
                                return var2;
 68: // catch_target0
                                CatchBlockStart(arg_register=1);
                                var3 = _closure1_slot1;
                                var10 = _closure1_slot3;
                                var2 = 39;
                                var2 = var10[var2];
                                var9 = undefined;
                                var4 = var3.bind(var9)(var2);
                                var3 = var4.open;
                                var2 = {};
                                var6 = 'REMOVE_NOTIFICATION_ERROR';
                                var2['key'] = var6;
                                var8 = _closure1_slot0;
                                var5 = 18;
                                var6 = var10[var5];
                                var6 = var8.bind(var9)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var10[var5];
                                var5 = var8.bind(var9)(var5);
                                var5 = var5.t;
                                var5 = var5.WDxhvL;
                                var5 = var6.bind(var7)(var5);
                                var2['content'] = var5;
                                var2 = var3.bind(var4)(var2);
 175:
                                var2 = undefined;
                                return var2;
 180:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var7 = var8.bind(var1)(var7);
                    var _closure3_slot0 = var7;
                    var6 = function() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3['onPress'] = var6;
                    var3 = var4.bind(var5)(var3);
 488:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 46;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showSimpleActionSheet;
                    var2 = {};
                    var6 = 'ForYouItemLongPress';
                    var2['key'] = var6;
                    var2['options'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var5 = var17.bind(var8)(var2, var5);
            var2 = var8.useState;
            var17 = var2.bind(var8)(var4);
            var8 = _closure1_slot5;
            var2 = 2;
            var8 = var8.bind(var4)(var17, var2);
            var2 = 0;
            var31 = var8[var2];
            var2 = 1;
            var35 = var8[var2];
            var17 = 47;
            var2 = var14[var17];
            var7 = var7.bind(var4)(var2);
            var2 = var7.useItemActionButtonPropsV2;
            var42 = var7;
            var41 = var21;
            var40 = var9;
            var39 = var10;
            var38 = var16;
            var37 = var11;
            var36 = var12;
            var34 = var19;
            var2 = var42[var2](var41, var40, var39, var38, var37, var36, var35, var34, var33);
            var11 = var2.actionButtons;
            var10 = var2.actionsNode;
            var8 = var2.accessibilityActions;
            var7 = var2.onAccessibilityAction;
            var9 = _closure1_slot2;
            var2 = 16;
            var16 = var14[var2];
            var22 = var9.bind(var4)(var16);
            var18 = var22.getParser;
            var16 = _closure1_slot24;
            var16 = var16.bind(var4)();
            var30 = var18.bind(var22)(var16);
            var2 = var14[var2];
            var14 = var9.bind(var4)(var2);
            var9 = var14.getParser;
            var2 = _closure1_slot23;
            var2 = var2.bind(var4)();
            var27 = var9.bind(var14)(var2);
            var14 = null;
            var16 = null;
            if(var1) { _fun0007_ip = 529; continue _fun0007 }
 453:
            var9 = _closure1_slot20;
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var17];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ForYouItemActionButtons;
            var1 = {'aria-hidden': true, 'accessibilityLabel': ''};
            var1['item'] = var21;
            var1['rowIndex'] = var15;
            var1['onSoftAckItem'] = var12;
            var1['actionButtons'] = var11;
            var1['actionsNode'] = var10;
            var1['compactMode'] = var19;
            var16 = var9.bind(var4)(var2, var1);
 529:
            var25 = 'text-md/semibold';
            if(!var20) { _fun0007_ip = 540; continue _fun0007 }
 536:
            var25 = 'text-md/medium';
 540:
            _closure2_slot6 = var25;
            if(!(var14 == var31)) { _fun0007_ip = 591; continue _fun0007 }
 548:
            var2 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 48;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['item'] = var21;
            var3 = function renderApplication(arg1) {
                var4 = _closure1_slot20;
                var3 = _closure1_slot36;
                var2 = {};
                var1 = arg1;
                var2['applicationId'] = var1;
                var1 = _closure2_slot6;
                var2['textVariant'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['renderApplication'] = var3;
            var31 = var2.bind(var4)(var1);
 591:
            var2 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 49;
            var1 = var9[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.extractTimestamp;
            var1 = var21.id;
            var28 = var2.bind(var3)(var1);
            var3 = _closure1_slot21;
            var2 = _closure1_slot0;
            var1 = 50;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var9 = 'button';
            var1['accessibilityRole'] = var9;
            var1['accessibilityActions'] = var8;
            var1['onAccessibilityAction'] = var7;
            var8 = var29.row;
            var7 = new Array(2);
            var7[0] = var8;
            var9 = !var19;
            var8 = !var9;
            if(var9) { _fun0007_ip = 702; continue _fun0007 }
 696:
            var8 = var29.rowCompact;
 702:
            var7[1] = var8;
            var1['style'] = var7;
            var1['onPress'] = var6;
            var1['onAccessibilityTap'] = var6;
            var1['onLongPress'] = var5;
            var5 = var29.rowActive;
            var5 = var5.backgroundColor;
            var1['underlayColor'] = var5;
            var5 = var21.enableBadge;
            var6 = null;
            if(!var5) { _fun0007_ip = 809; continue _fun0007 }
 751:
            var6 = null;
            if(var20) { _fun0007_ip = 809; continue _fun0007 }
 756:
            var8 = _closure1_slot20;
            var7 = _closure1_slot7;
            var5 = {};
            var10 = var29.unreadIndicatorV2;
            var9 = new Array(2);
            var9[0] = var10;
            var11 = !var19;
            var10 = !var11;
            if(var11) { _fun0007_ip = 795; continue _fun0007 }
 789:
            var10 = var29.unreadIndicatorCompactV2;
 795:
            var9[1] = var10;
            var5['style'] = var9;
            var6 = var8.bind(var4)(var7, var5);
 809:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var29.itemV2;
            var6['style'] = var9;
            var11 = _closure1_slot20;
            var22 = _closure1_slot0;
            var18 = _closure1_slot3;
            var9 = 51;
            var9 = var18[var9];
            var9 = var22.bind(var4)(var9);
            var10 = var9.ForYouItemImage;
            var9 = {};
            var9['item'] = var21;
            var9['compactMode'] = var19;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = {'flex': 1, 'flexDirection': 'row'};
            var6['style'] = var9;
            var11 = _closure1_slot21;
            var10 = _closure1_slot7;
            var9 = {};
            var12 = var29.col;
            var9['style'] = var12;
            var17 = _closure1_slot21;
            var15 = _closure1_slot7;
            var12 = {};
            var26 = var29.rowText;
            var24 = new Array(2);
            var24[0] = var26;
            var26 = var29.rowTextV2;
            var24[1] = var26;
            var12['style'] = var24;
            var24 = _closure1_slot20;
            var26 = 14;
            var18 = var18[var26];
            var18 = var22.bind(var4)(var18);
            var22 = var18.Text;
            var18 = {};
            var18['variant'] = var25;
            var32 = var29.rowBody;
            var25 = new Array(3);
            var25[0] = var32;
            var32 = var29.rowBodyV2;
            var25[1] = var32;
            var33 = !var20;
            var32 = !var33;
            if(var33) { _fun0007_ip = 1050; continue _fun0007 }
 1044:
            var32 = var29.rowBodyAcked;
 1050:
            var25[2] = var32;
            var18['style'] = var25;
            var25 = 'text-normal';
            var18['color'] = var25;
            var33 = 'string';
            var32 = typeof var31;
            var25 = var31;
            if(!(var33 === var32)) { _fun0007_ip = 1100; continue _fun0007 }
 1082:
            if(var20) { _fun0007_ip = 1092; continue _fun0007 }
 1085:
            var27 = var27.bind(var4)(var31);
            _fun0007_ip = 1097; continue _fun0007;
 1092:
            var27 = var30.bind(var4)(var31);
 1097:
            var25 = var27;
 1100:
            var18['children'] = var25;
            var22 = var24.bind(var4)(var22, var18);
            var18 = new Array(2);
            var18[0] = var22;
            var25 = _closure1_slot20;
            var24 = _closure1_slot0;
            var22 = _closure1_slot3;
            var22 = var22[var26];
            var22 = var24.bind(var4)(var22);
            var24 = var22.Text;
            var22 = {'variant': 'text-xs/medium', 'style': null, 'color': 'header-secondary'};
            var27 = var29.rowTime;
            var26 = new Array(3);
            var26[0] = var27;
            var27 = var29.rowTimeV2;
            var26[1] = var27;
            var30 = !var20;
            var27 = !var30;
            if(var30) { _fun0007_ip = 1197; continue _fun0007 }
 1191:
            var27 = var29.rowBodyAcked;
 1197:
            var26[2] = var27;
            var22['style'] = var26;
            var27 = _closure1_slot0;
            var29 = _closure1_slot3;
            var26 = 52;
            var30 = var29[var26];
            var32 = var27.bind(var4)(var30);
            var31 = var32.getRelativeTimestamp;
            var30 = false;
            var30 = var31.bind(var32)(var28, var30);
            var22['accessibilityLabel'] = var30;
            var26 = var29[var26];
            var27 = var27.bind(var4)(var26);
            var26 = var27.getRelativeTimestamp;
            var26 = var26.bind(var27)(var28);
            var22['children'] = var26;
            var22 = var25.bind(var4)(var24, var22);
            var18[1] = var22;
            var12['children'] = var18;
            var15 = var17.bind(var4)(var15, var12);
            var12 = new Array(4);
            var12[0] = var15;
            var17 = var21.message;
            var18 = var14 == var17;
            var15 = undefined;
            if(var18) { _fun0007_ip = 1316; continue _fun0007 }
 1311:
            var15 = var17.content;
 1316:
            var17 = var14 != var15;
            var15 = null;
            if(!var17) { _fun0007_ip = 1360; continue _fun0007 }
 1325:
            var22 = _closure1_slot20;
            var18 = _closure1_slot35;
            var17 = {};
            var17['item'] = var21;
            var17['acked'] = var20;
            var17['compactMode'] = var19;
            var17['roleStyle'] = var23;
            var15 = var22.bind(var4)(var18, var17);
 1360:
            var12[1] = var15;
            var15 = var21.callout;
            var15 = var14 != var15;
            var14 = null;
            if(!var15) { _fun0007_ip = 1409; continue _fun0007 }
 1379:
            var18 = _closure1_slot20;
            var17 = _closure1_slot34;
            var15 = {};
            var15['item'] = var21;
            var15['acked'] = var20;
            var15['compactMode'] = var19;
            var14 = var18.bind(var4)(var17, var15);
 1409:
            var12[2] = var14;
            var15 = _closure1_slot20;
            var14 = _closure1_slot7;
            var13 = {};
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[3] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot30 = var4;
    var4 = function extractKey(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot31 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var15 = var2.items;
            var14 = var2.onScroll;
            var10 = var2.loadMore;
            var _closure2_slot0 = var10;
            var13 = var2.loadingMore;
            var5 = var2.nestedInLaunchPad;
            var1 = var2.shouldScrollToTop;
            var _closure2_slot1 = var1;
            var22 = var2.isSoftAcked;
            var _closure2_slot2 = var22;
            var21 = var2.onSoftAckItem;
            var _closure2_slot3 = var21;
            var20 = var2.forceHoistItem;
            var _closure2_slot4 = var20;
            var19 = var2.isForceHoisted;
            var _closure2_slot5 = var19;
            var25 = var2.suggestedFriendAdded;
            var _closure2_slot6 = var25;
            var24 = var2.onAddSuggestionAnimationFinish;
            var _closure2_slot7 = var24;
            var2 = var2.panelVariant;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0014_ip = 123; continue _fun0014 }
 121:
            var2 = false;
 123:
            var _closure2_slot8 = var2;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var3 = _closure1_slot28;
            var17 = var3.bind(var4)();
            _closure2_slot9 = var17;
            var8 = _closure1_slot0;
            var12 = _closure1_slot3;
            var3 = 54;
            var7 = var12[var3];
            var7 = var8.bind(var4)(var7);
            var11 = var7.NotificationCenterAckedBeforeId;
            var7 = var11.useSetting;
            var11 = var7.bind(var11)();
            _closure2_slot10 = var11;
            var7 = 26;
            var16 = var12[var7];
            var26 = var8.bind(var4)(var16);
            var23 = var26.useStateFromStores;
            var16 = _closure1_slot9;
            var18 = new Array(1);
            var18[0] = var16;
            var16 = function() {
                var1 = _closure1_slot9;
                var1 = var1.roleStyle;
                return var1;
            };
            var23 = var23.bind(var26)(var18, var16);
            _closure2_slot11 = var23;
            var7 = var12[var7];
            var26 = var8.bind(var4)(var7);
            var18 = var26.useStateFromStores;
            var7 = _closure1_slot14;
            var16 = new Array(1);
            var16[0] = var7;
            var7 = function() {
                var2 = _closure1_slot14;
                var1 = var2.isRefreshing;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var18.bind(var26)(var16, var7);
            _closure2_slot12 = var18;
            var3 = var12[var3];
            var3 = var8.bind(var4)(var3);
            var7 = var3.ChannelListLayoutSetting;
            var3 = var7.useSetting;
            var7 = var3.bind(var7)();
            var3 = 55;
            var3 = var12[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.ChannelListLayoutTypes;
            var3 = var3.COMPACT;
            var16 = var7 === var3;
            _closure2_slot13 = var16;
            var3 = _closure1_slot6;
            var12 = var3.useCallback;
            var8 = new Array(1);
            var8[0] = var10;
            var7 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var12.bind(var3)(var7, var8);
            _closure2_slot14 = var12;
            var8 = var3.useCallback;
            var26 = var17.forYouDivider;
            var7 = new Array(12);
            var7[0] = var26;
            var7[1] = var25;
            var7[2] = var24;
            var7[3] = var23;
            var7[4] = var11;
            var7[5] = var22;
            var7[6] = var21;
            var7[7] = var20;
            var7[8] = var19;
            var7[9] = var16;
            var7[10] = var12;
            var7[11] = var2;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var7 = var1.index;
                    var2 = var5.kind;
                    var1 = 'read-section-header';
                    if(!(var1 !== var2)) { _fun0015_ip = 756; continue _fun0015 }
 31:
                    var1 = 'recent-activity-section-header';
                    if(!(var1 !== var2)) { _fun0015_ip = 711; continue _fun0015 }
 44:
                    var1 = 'suggested-friends-header';
                    if(!(var1 !== var2)) { _fun0015_ip = 661; continue _fun0015 }
 57:
                    var1 = 'suggested-friends-row';
                    if(!(var1 !== var2)) { _fun0015_ip = 581; continue _fun0015 }
 70:
                    var1 = 'suggested-friends-show-all-row';
                    if(!(var1 !== var2)) { _fun0015_ip = 513; continue _fun0015 }
 83:
                    var1 = 'for-you-divider';
                    if(!(var1 !== var2)) { _fun0015_ip = 473; continue _fun0015 }
 96:
                    var1 = 'notification-center-item';
                    if(!(var1 !== var2)) { _fun0015_ip = 327; continue _fun0015 }
 109:
                    var1 = 'mentions-placeholder';
                    if(!(var1 !== var2)) { _fun0015_ip = 282; continue _fun0015 }
 122:
                    var1 = 'unread-cleared-placeholder';
                    if(!(var1 !== var2)) { _fun0015_ip = 237; continue _fun0015 }
 132:
                    var1 = 'load-more';
                    if(!(var1 !== var2)) { _fun0015_ip = 180; continue _fun0015 }
 142:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 63;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.assertNever;
                    var2 = var2.bind(var3)(var5);
                    return var1;
 180:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 62;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ForYouLoadMore;
                    var1 = {};
                    var6 = _closure2_slot14;
                    var1['onPressLoad'] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 237:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 61;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ForYouUnreadClearedState;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 282:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ForYouMentionPlaceholder;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 327:
                    var6 = _closure1_slot20;
                    var4 = _closure1_slot30;
                    var3 = {};
                    var3['item'] = var5;
                    var2 = _closure2_slot10;
                    var3['ackedBeforeId'] = var2;
                    var9 = _closure2_slot2;
                    var8 = var5.id;
                    var2 = undefined;
                    var8 = var9.bind(var2)(var8);
                    var3['isSoftAcked'] = var8;
                    var8 = _closure2_slot3;
                    var3['onSoftAckItem'] = var8;
                    var8 = _closure2_slot4;
                    var3['forceHoistItem'] = var8;
                    var8 = _closure2_slot5;
                    var3['isForceHoisted'] = var8;
                    var3['rowIndex'] = var7;
                    var7 = _closure2_slot13;
                    var3['compactMode'] = var7;
                    var7 = _closure2_slot11;
                    var3['roleStyle'] = var7;
                    var10 = var5.id;
                    var9 = _closure2_slot11;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var7 = '';
                    var1 = '-';
                    var1 = var8.bind(var7)(var10, var1, var9);
                    var1 = var6.bind(var2)(var4, var3, var1);
                    return var1;
 473:
                    var4 = _closure1_slot20;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var1 = _closure2_slot9;
                    var1 = var1.forYouDivider;
                    var2['style'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
 513:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 60;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ForYouSuggestedFriendShowAllRow;
                    var1 = {};
                    var6 = var5.suggestedFriends;
                    var1['suggestedFriends'] = var6;
                    var6 = _closure2_slot8;
                    var1['panelVariant'] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 581:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 59;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = var5.suggestedFriend;
                    var1['suggestedFriend'] = var6;
                    var7 = _closure2_slot6;
                    var1['onAddSuggestion'] = var7;
                    var7 = _closure2_slot7;
                    var1['onAddSuggestionAnimationFinish'] = var7;
                    var6 = _closure2_slot8;
                    var1['panelVariant'] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 661:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 58;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = var5.showDivider;
                    var1['showDivider'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 711:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 57;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ForYouRecentActivitySectionHeader;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 756:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 56;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ForYouReadSectionHeader;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var12 = var8.bind(var3)(var2, var7);
            var7 = var3.useRef;
            var2 = null;
            var20 = var7.bind(var3)(var2);
            _closure2_slot15 = var20;
            var7 = var3.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0016_ip = 50; continue _fun0016 }
 10:
                    var1 = _closure2_slot15;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0016_ip = 50; continue _fun0016 }
 25:
                    var2 = var3.scrollToOffset;
                    var1 = {'animated': false, 'offset': 0};
                    var1 = var2.bind(var3)(var1);
 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var3)(var1, var2);
            var7 = var3.useCallback;
            var2 = new Array(1);
            var2[0] = var18;
            var1 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0017_ip = 45; continue _fun0017 }
 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.refreshNotifications;
                    var1 = var1.bind(var2)();
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var7.bind(var3)(var1, var2);
            var2 = var3.useState;
            var1 = 0;
            var7 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var2 = 2;
            var2 = var3.bind(var4)(var7, var2);
            var21 = var2[var1];
            var1 = 1;
            var1 = var2[var1];
            _closure2_slot16 = var1;
            var3 = _closure1_slot21;
            var2 = _closure1_slot7;
            var1 = {};
            var7 = var17.container;
            var1['style'] = var7;
            var6 = function onLayout(arg1) {
                var3 = _closure2_slot16;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onLayout'] = var6;
            var6 = !var5;
            if(!var6) { _fun0014_ip = 636; continue _fun0014 }
 615:
            var8 = _closure1_slot20;
            var7 = _closure1_slot37;
            var5 = {};
            var5['scrollRef'] = var20;
            var6 = var8.bind(var4)(var7, var5);
 636:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot20;
            var16 = _closure1_slot0;
            var22 = _closure1_slot3;
            var6 = 65;
            var6 = var22[var6];
            var6 = var16.bind(var4)(var6);
            var7 = var6.FlashList;
            var6 = {};
            var6['ref'] = var20;
            var6['data'] = var15;
            var20 = _closure1_slot20;
            var15 = 66;
            var15 = var22[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.ForYouEmptyState;
            var15 = {};
            var15['height'] = var21;
            var15 = var20.bind(var4)(var16, var15);
            var6['ListEmptyComponent'] = var15;
            var6['onScroll'] = var14;
            var16 = _closure1_slot20;
            var15 = _closure1_slot8;
            var14 = {};
            var14['onRefresh'] = var19;
            var14['refreshing'] = var18;
            var17 = var17.refreshSpinner;
            var17 = var17.color;
            var14['tintColor'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var6['refreshControl'] = var14;
            var14 = 70;
            var6['estimatedItemSize'] = var14;
            var14 = _closure1_slot31;
            var6['keyExtractor'] = var14;
            var6['renderItem'] = var12;
            var6['extraData'] = var11;
            var6['onEndReached'] = var10;
            var10 = 0.8;
            var6['onEndReachedThreshold'] = var10;
            var12 = _closure1_slot20;
            var11 = _closure1_slot32;
            var10 = {};
            var10['loading'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var6['ListFooterComponent'] = var10;
            var9 = _closure1_slot22;
            var6['viewabilityConfig'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 67;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/native/ForYouItems.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ForYouItems'] = var2;
    return var1;
})();