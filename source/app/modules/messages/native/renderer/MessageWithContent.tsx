// app/modules/messages/native/renderer/MessageWithContent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function DataMessage(arg1) {
        var3 = arg1;
        var5 = var3.children;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['children'] = var1;
        var9 = {};
        var8 = var3;
        var7 = var2;
        var6 = copyDataProperties(var9, var8, var7);
        var4 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.DataWithChildren;
        var1 = {};
        var1['rowProps'] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function MessageRowWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.row;
            var5 = var3.children;
            var17 = var1.message;
            var _closure2_slot0 = var17;
            var15 = var1.isEditing;
            var20 = var1.separatorBefore;
            var22 = var1.canAddNewReactions;
            var24 = var1.reactionsTheme;
            var19 = var1.messageFrame;
            var18 = var1.truncation;
            var21 = var1.renderContentOnly;
            var13 = var1.addReactionLabel;
            var3 = var1.alwaysShowAddReaction;
            var4 = undefined;
            var12 = var4 !== var3;
            if(!var12) { _fun0001_ip = 91; continue _fun0001 }
 88:
            var12 = var3;
 91:
            var7 = var1.overrideBackgroundHighlight;
            var11 = var1.canReply;
            var10 = var1.canEdit;
            var8 = _closure1_slot3;
            var3 = var8.useContext;
            var9 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 7;
            var1 = var23[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var3.bind(var8)(var1);
            var8 = _closure1_slot0;
            var3 = 8;
            var3 = var23[var3];
            var9 = var8.bind(var4)(var3);
            var3 = var9.useMessageRendererTheme;
            var16 = var3.bind(var9)();
            var14 = _closure1_slot3;
            var9 = var14.useContext;
            var3 = 9;
            var3 = var23[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.RenderMessageOptionsContext;
            var3 = var9.bind(var14)(var3);
            var9 = var3.enableSwipeActions;
            var3 = 10;
            var14 = var23[var3];
            var27 = var8.bind(var4)(var14);
            var26 = var27.useStateFromStores;
            var14 = _closure1_slot5;
            var25 = new Array(1);
            var25[0] = var14;
            var14 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getMessage;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var14 = var26.bind(var27)(var25, var14);
            var3 = var23[var3];
            var23 = var8.bind(var4)(var3);
            var8 = var23.useStateFromStores;
            var25 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var25;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.gradientPreset;
                return var1;
            };
            var23 = var8.bind(var23)(var3, var2);
            var8 = null;
            if(!(var8 == var1)) { _fun0001_ip = 323; continue _fun0001 }
 295:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.Message;
            _fun0001_ip = 327; continue _fun0001;
 323:
            var3 = _closure1_slot10;
 327:
            var2 = _closure1_slot8;
            var1 = {};
            var1['canAddNewReactions'] = var22;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 12;
            var27 = var26[var22];
            var27 = var25.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var26[var22];
            var27 = var25.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.lfIHs7;
            var27 = var28.bind(var29)(var27);
            var1['addNewReactionAccessibilityLabel'] = var27;
            var27 = var26[var22];
            var27 = var25.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var26[var22];
            var27 = var25.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.5IEsGx;
            var27 = var28.bind(var29)(var27);
            var1['replyAccessibilityLabel'] = var27;
            var27 = var26[var22];
            var27 = var25.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var26[var22];
            var27 = var25.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.I3ltXF;
            var27 = var28.bind(var29)(var27);
            var1['forwardAccessibilityLabel'] = var27;
            var27 = var26[var22];
            var27 = var25.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var26[var22];
            var27 = var25.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.rBIGBA;
            var27 = var28.bind(var29)(var27);
            var1['threadAccessibilityLabel'] = var27;
            var1['reactionsTheme'] = var24;
            var23 = var8 != var23;
            var1['usingGradientTheme'] = var23;
            var23 = var26[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.IOS/dX;
            var22 = var23.bind(var24)(var22);
            var1['highlightLabel'] = var22;
            var1['renderContentOnly'] = var21;
            var1['separatorBefore'] = var20;
            var1['messageFrame'] = var19;
            var1['truncation'] = var18;
            var1['addReactionLabel'] = var13;
            var1['alwaysShowAddReaction'] = var12;
            if(!(var8 == var7)) { _fun0001_ip = 693; continue _fun0001 }
 642:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 13;
            var8 = var13[var8];
            var13 = var12.bind(var4)(var8);
            var12 = var13.createBackgroundHighlight;
            var8 = {};
            var8['message'] = var17;
            var8['theme'] = var16;
            var8['isEditing'] = var15;
            var8['isAutomodBlockedMessage'] = var14;
            var7 = var12.bind(var13)(var8);
 693:
            var1['backgroundHighlight'] = var7;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 13;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.createSwipeActions;
            var6 = var9;
            if(!var9) { _fun0001_ip = 733; continue _fun0001 }
 730:
            var6 = var11;
 733:
            if(!var9) { _fun0001_ip = 739; continue _fun0001 }
 736:
            var9 = var10;
 739:
            var6 = var7.bind(var8)(var6, var9);
            var1['swipeActions'] = var6;
            var1['children'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var4.RowType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageFlags;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/MessageWithContent.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function MessageWithContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.row;
            var19 = var1.messageContent;
            var8 = _closure1_slot3;
            var6 = var8.useContext;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 9;
            var4 = var1[var4];
            var5 = undefined;
            var4 = var3.bind(var5)(var4);
            var4 = var4.RenderMessageOptionsContext;
            var4 = var6.bind(var8)(var4);
            var15 = var4.renderCodedLinks;
            var16 = var4.renderGiftCode;
            var13 = var4.renderActivityInviteEmbed;
            var17 = var4.renderThreadEmbeds;
            var10 = var4.renderReplies;
            var12 = var4.renderPolls;
            var8 = _closure1_slot3;
            var6 = var8.useContext;
            var11 = _closure1_slot1;
            var9 = 7;
            var4 = var1[var9];
            var4 = var11.bind(var5)(var4);
            var4 = var6.bind(var8)(var4);
            var1 = var1[var9];
            var1 = var3.bind(var5)(var1);
            var1 = var1.NestedMessageType;
            var1 = var1.REPLIED_MESSAGE;
            var18 = var4 === var1;
            if(var18) { _fun0002_ip = 189; continue _fun0002 }
 156:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var3.bind(var5)(var1);
            var1 = var1.NestedMessageType;
            var1 = var1.THREAD_EMBED;
            var18 = var4 === var1;
 189:
            var14 = var7.message;
            var1 = var7.canShowImages;
            var11 = var5 === var1;
            if(var11) { _fun0002_ip = 210; continue _fun0002 }
 207:
            var11 = var1;
 210:
            var1 = var7.renderContentOnly;
            var21 = var7.pushFeedbackType;
            var8 = _closure1_slot9;
            var6 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = 6;
            var3 = var20[var3];
            var3 = var6.bind(var5)(var3);
            var6 = var3.DataWithChildren;
            var3 = {};
            var20 = 'message';
            var3['keyPath'] = var20;
            var3['rowProps'] = var19;
            var1 = !var1;
            if(!var1) { _fun0002_ip = 277; continue _fun0002 }
 274:
            var1 = var10;
 277:
            if(!var1) { _fun0002_ip = 321; continue _fun0002 }
 280:
            var19 = var14.type;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 14;
            var10 = var22[var10];
            var10 = var20.bind(var5)(var10);
            var10 = var10.MessageTypes;
            var10 = var10.REPLY;
            var1 = var19 === var10;
 321:
            if(!var1) { _fun0002_ip = 360; continue _fun0002 }
 324:
            var20 = _closure1_slot8;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 15;
            var10 = var22[var10];
            var19 = var19.bind(var5)(var10);
            var10 = {};
            var10['message'] = var14;
            var1 = var20.bind(var5)(var19, var10);
 360:
            var10 = new Array(16);
            var10[0] = var1;
            var1 = !var18;
            if(var18) { _fun0002_ip = 377; continue _fun0002 }
 374:
            var1 = var17;
 377:
            if(!var1) { _fun0002_ip = 401; continue _fun0002 }
 380:
            var18 = var14.hasFlag;
            var17 = _closure1_slot7;
            var17 = var17.HAS_THREAD;
            var1 = var18.bind(var14)(var17);
 401:
            if(!var1) { _fun0002_ip = 440; continue _fun0002 }
 404:
            var19 = _closure1_slot8;
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 16;
            var17 = var20[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['message'] = var14;
            var1 = var19.bind(var5)(var18, var17);
 440:
            var10[1] = var1;
            var1 = null;
            var17 = var1 != var21;
            if(!var17) { _fun0002_ip = 494; continue _fun0002 }
 453:
            var20 = _closure1_slot8;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var18 = 17;
            var18 = var22[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['message'] = var14;
            var18['pushFeedbackType'] = var21;
            var17 = var20.bind(var5)(var19, var18);
 494:
            var10[2] = var17;
            var18 = var14.hasFlag;
            var17 = _closure1_slot7;
            var17 = var17.EPHEMERAL;
            var17 = var18.bind(var14)(var17);
            if(!var17) { _fun0002_ip = 558; continue _fun0002 }
 522:
            var20 = _closure1_slot8;
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var18 = 18;
            var18 = var21[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['message'] = var14;
            var17 = var20.bind(var5)(var19, var18);
 558:
            var10[3] = var17;
            if(!var16) { _fun0002_ip = 601; continue _fun0002 }
 565:
            var19 = _closure1_slot8;
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 19;
            var17 = var20[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['message'] = var14;
            var16 = var19.bind(var5)(var18, var17);
 601:
            var10[4] = var16;
            if(!var15) { _fun0002_ip = 644; continue _fun0002 }
 608:
            var18 = _closure1_slot8;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var16 = 20;
            var16 = var19[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['message'] = var14;
            var15 = var18.bind(var5)(var17, var16);
 644:
            var10[5] = var15;
            if(!var13) { _fun0002_ip = 661; continue _fun0002 }
 651:
            var15 = var14.author;
            var13 = var1 != var15;
 661:
            if(!var13) { _fun0002_ip = 674; continue _fun0002 }
 664:
            var15 = var14.activity;
            var13 = var1 != var15;
 674:
            if(!var13) { _fun0002_ip = 724; continue _fun0002 }
 677:
            var17 = _closure1_slot8;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 21;
            var15 = var18[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var15['message'] = var14;
            var18 = var14.activity;
            var15['activity'] = var18;
            var13 = var17.bind(var5)(var16, var15);
 724:
            var10[6] = var13;
            var18 = _closure1_slot8;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 22;
            var13 = var17[var13];
            var16 = var15.bind(var5)(var13);
            var13 = {};
            var13['message'] = var14;
            var13 = var18.bind(var5)(var16, var13);
            var10[7] = var13;
            var16 = _closure1_slot8;
            var13 = 23;
            var13 = var17[var13];
            var15 = var15.bind(var5)(var13);
            var13 = {};
            var13['message'] = var14;
            var13 = var16.bind(var5)(var15, var13);
            var10[8] = var13;
            var15 = var14.id;
            var13 = var14.channel_id;
            var13 = var15 === var13;
            if(!var13) { _fun0002_ip = 853; continue _fun0002 }
 817:
            var17 = _closure1_slot8;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 24;
            var15 = var18[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var15['message'] = var14;
            var13 = var17.bind(var5)(var16, var15);
 853:
            var10[9] = var13;
            var16 = var14.type;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var15 = 14;
            var13 = var13[var15];
            var13 = var17.bind(var5)(var13);
            var13 = var13.MessageTypes;
            var13 = var13.PREMIUM_REFERRAL;
            var13 = var16 === var13;
            if(!var13) { _fun0002_ip = 937; continue _fun0002 }
 901:
            var18 = _closure1_slot8;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var16 = 25;
            var16 = var19[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['message'] = var14;
            var13 = var18.bind(var5)(var17, var16);
 937:
            var10[10] = var13;
            if(!var11) { _fun0002_ip = 980; continue _fun0002 }
 944:
            var17 = _closure1_slot8;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 26;
            var13 = var18[var13];
            var16 = var16.bind(var5)(var13);
            var13 = {};
            var13['message'] = var14;
            var11 = var17.bind(var5)(var16, var13);
 980:
            var10[11] = var11;
            var16 = _closure1_slot8;
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 27;
            var11 = var17[var11];
            var13 = var13.bind(var5)(var11);
            var11 = {};
            var11['message'] = var14;
            var11 = var16.bind(var5)(var13, var11);
            var10[12] = var11;
            var11 = var14.isPoll;
            var13 = var11.bind(var14)();
            var11 = null;
            if(!var13) { _fun0002_ip = 1080; continue _fun0002 }
 1039:
            var11 = null;
            if(!var12) { _fun0002_ip = 1080; continue _fun0002 }
 1044:
            var16 = _closure1_slot8;
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 28;
            var12 = var17[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['message'] = var14;
            var11 = var16.bind(var5)(var13, var12);
 1080:
            var10[13] = var11;
            var13 = var14.type;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var15];
            var11 = var12.bind(var5)(var11);
            var11 = var11.MessageTypes;
            var12 = var11.VOICE_HANGOUT_INVITE;
            var11 = null;
            if(!(var13 === var12)) { _fun0002_ip = 1160; continue _fun0002 }
 1124:
            var15 = _closure1_slot8;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 29;
            var12 = var16[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['message'] = var14;
            var11 = var15.bind(var5)(var13, var12);
 1160:
            var10[14] = var11;
            var13 = _closure1_slot8;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 30;
            var11 = var15[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['message'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[15] = var11;
            var3['children'] = var10;
            var6 = var8.bind(var5)(var6, var3);
            var3 = var1 != var4;
            if(!var3) { _fun0002_ip = 1254; continue _fun0002 }
 1221:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var8.bind(var5)(var1);
            var1 = var1.NestedMessageType;
            var1 = var1.BLOCKED_MESSAGE;
            var3 = var4 !== var1;
 1254:
            var1 = var6;
            if(var3) { _fun0002_ip = 1285; continue _fun0002 }
 1260:
            var4 = _closure1_slot8;
            var3 = _closure1_slot11;
            var2 = {};
            var2['row'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1285:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function generateMessageRowData(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg1;
            var3 = arg2;
            var14 = var9.changeType;
            var11 = var9.message;
            var26 = var9.roleStyle;
            var25 = var9.isFirst;
            var13 = var9.isEditing;
            var15 = var9.separatorBefore;
            var7 = var9.canAddNewReactions;
            var18 = var9.reactionsTheme;
            var1 = var9.isSystemDM;
            var6 = undefined;
            var23 = var6 !== var1;
            if(!var23) { _fun0003_ip = 71; continue _fun0003 }
 68:
            var23 = var1;
 71:
            var1 = var9.canShowImages;
            var24 = var6 === var1;
            if(var24) { _fun0003_ip = 87; continue _fun0003 }
 84:
            var24 = var1;
 87:
            var12 = var9.messageFrame;
            var10 = var9.truncation;
            var16 = var9.renderContentOnly;
            var8 = var9.addReactionLabel;
            var22 = var9.pushFeedbackType;
            var1 = var9.alwaysShowAddReaction;
            var5 = var6 !== var1;
            if(!var5) { _fun0003_ip = 133; continue _fun0003 }
 130:
            var5 = var1;
 133:
            var4 = var9.overrideBackgroundHighlight;
            var21 = var9.showContentInventoryEntryFallbackEmbed;
            var1 = {};
            var17 = _closure1_slot6;
            var17 = var17.MESSAGE;
            var1['type'] = var17;
            var20 = _closure1_slot1;
            var17 = _closure1_slot2;
            var19 = 31;
            var19 = var17[var19];
            var20 = var20.bind(var6)(var19);
            var19 = {};
            var19['options'] = var3;
            var19['message'] = var11;
            var19['roleStyle'] = var26;
            var19['isFirst'] = var25;
            var19['isEditing'] = var13;
            var19['canShowImages'] = var24;
            var19['isSystemDM'] = var23;
            var23 = false;
            var19['isInlineReplyPreview'] = var23;
            var19['pushFeedbackType'] = var22;
            var19['renderContentOnly'] = var16;
            var19['showContentInventoryEntryFallbackEmbed'] = var21;
            var19 = var20.bind(var6)(var19);
            var1['message'] = var19;
            var1['canAddNewReactions'] = var7;
            var20 = _closure1_slot0;
            var7 = 12;
            var19 = var17[var7];
            var19 = var20.bind(var6)(var19);
            var22 = var19.intl;
            var21 = var22.string;
            var19 = var17[var7];
            var19 = var20.bind(var6)(var19);
            var19 = var19.t;
            var19 = var19.lfIHs7;
            var19 = var21.bind(var22)(var19);
            var1['addNewReactionAccessibilityLabel'] = var19;
            var1['reactionsTheme'] = var18;
            var18 = var17[var7];
            var18 = var20.bind(var6)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var7];
            var17 = var20.bind(var6)(var17);
            var17 = var17.t;
            var17 = var17.IOS/dX;
            var17 = var18.bind(var19)(var17);
            var1['highlightLabel'] = var17;
            var1['renderContentOnly'] = var16;
            var1['separatorBefore'] = var15;
            var1['changeType'] = var14;
            var1['messageFrame'] = var12;
            var1['truncation'] = var10;
            var1['addReactionLabel'] = var8;
            var1['alwaysShowAddReaction'] = var5;
            var12 = null;
            if(!(var12 == var4)) { _fun0003_ip = 484; continue _fun0003 }
 406:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 13;
            var5 = var10[var5];
            var10 = var8.bind(var6)(var5);
            var8 = var10.createBackgroundHighlight;
            var5 = {};
            var5['message'] = var11;
            var14 = arg3;
            var5['theme'] = var14;
            var5['isEditing'] = var13;
            var14 = _closure1_slot5;
            var13 = var14.getMessage;
            var11 = var11.id;
            var11 = var13.bind(var14)(var11);
            var11 = var12 != var11;
            var5['isAutomodBlockedMessage'] = var11;
            var4 = var8.bind(var10)(var5);
 484:
            var1['backgroundHighlight'] = var4;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 13;
            var4 = var8[var4];
            var8 = var5.bind(var6)(var4);
            var5 = var8.createSwipeActions;
            var4 = var3.enableSwipeActions;
            if(!var4) { _fun0003_ip = 530; continue _fun0003 }
 524:
            var4 = var9.canReply;
 530:
            var3 = var3.enableSwipeActions;
            if(!var3) { _fun0003_ip = 545; continue _fun0003 }
 539:
            var3 = var9.canEdit;
 545:
            var3 = var5.bind(var8)(var4, var3);
            var1['swipeActions'] = var3;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var8 = var3.intl;
            var4 = var8.string;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.5IEsGx;
            var3 = var4.bind(var8)(var3);
            var1['replyAccessibilityLabel'] = var3;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var8 = var3.intl;
            var4 = var8.string;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.I3ltXF;
            var3 = var4.bind(var8)(var3);
            var1['forwardAccessibilityLabel'] = var3;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.rBIGBA;
            var2 = var3.bind(var4)(var2);
            var1['threadAccessibilityLabel'] = var2;
            return var1;
        }
    };
    var3['generateMessageRowData'] = var2;
    return var1;
})();