// app/modules/message_request/native/spam/SpamMessageList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PendingSpamMessageRequestRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.messageRequest;
            var2 = var1.goToMessageRequestPreview;
            var _closure2_slot0 = var2;
            var8 = var1.isLastRow;
            var1 = var1.hasSingleMessageRequest;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot10;
            var4 = undefined;
            var23 = var2.bind(var4)();
            var30 = var14.user;
            var _closure2_slot2 = var30;
            var11 = var14.channel;
            var _closure2_slot3 = var11;
            var12 = var11.id;
            var _closure2_slot4 = var12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 7;
            var6 = var3[var6];
            var10 = var2.bind(var4)(var6);
            var9 = var10.useLongestChannelMessageBeforeReply;
            var6 = var11.getRecipientId;
            var6 = var6.bind(var11)();
            var6 = var9.bind(var10)(var12, var6);
            var _closure2_slot5 = var6;
            var11 = _closure1_slot3;
            var10 = var11.useCallback;
            var9 = function() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE';
                var2['key'] = var8;
                var10 = _closure1_slot0;
                var5 = 6;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.pIQ3h4;
                var5 = var8.bind(var9)(var5);
                var2['content'] = var5;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = new Array(0);
            var6 = var10.bind(var11)(var9, var6);
            var11 = _closure1_slot3;
            var10 = var11.useCallback;
            var9 = new Array(2);
            var9[0] = var12;
            var9[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0002_ip = 76; continue _fun0002 }
 10:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var5 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.transitionToChannel;
                    var2 = _closure2_slot4;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot1;
                    var1 = 11;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var1, var9);
            var1 = 12;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useMessageRequestActions;
            var1 = {};
            var1['user'] = var30;
            var1['onAcceptSuccess'] = var9;
            var1['onError'] = var6;
            var1 = var2.bind(var3)(var1);
            var2 = var1.rejectMessageRequest;
            var _closure2_slot6 = var2;
            var27 = var1.isAcceptLoading;
            var20 = var1.isRejectLoading;
            var25 = var1.isUserProfileLoading;
            var24 = var1.isOptimisticAccepted;
            var19 = var1.isOptimisticRejected;
            var1 = var1.markAsNotSpam;
            var _closure2_slot7 = var1;
            var22 = function handleRejectMessageRequest() {
                var3 = _closure2_slot6;
                var1 = _closure2_slot3;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot8 = var22;
            var29 = function handleAcceptMessageRequest() {
                var4 = _closure2_slot7;
                var3 = _closure2_slot3;
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var _closure2_slot9 = var29;
            var9 = function handleSelectRow() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.track;
                var2 = _closure1_slot7;
                var4 = var2.MESSAGE_REQUEST_PREVIEW_VIEWED;
                var3 = {};
                var2 = true;
                var3['is_spam'] = var2;
                var7 = _closure2_slot3;
                var7 = var7.id;
                var3['channel_id'] = var7;
                var7 = _closure2_slot2;
                var7 = var7.id;
                var3['other_user_id'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var _closure2_slot10 = var9;
            var21 = var27;
            if(var21) { _fun0001_ip = 314; continue _fun0001 }
 311:
            var21 = var20;
 314:
            if(var21) { _fun0001_ip = 320; continue _fun0001 }
 317:
            var21 = var25;
 320:
            if(var21) { _fun0001_ip = 326; continue _fun0001 }
 323:
            var21 = var24;
 326:
            if(var21) { _fun0001_ip = 332; continue _fun0001 }
 329:
            var21 = var19;
 332:
            var3 = _closure1_slot9;
            var31 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = 14;
            var1 = var6[var16];
            var1 = var31.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['onPress'] = var9;
            var26 = 'button';
            var1['accessibilityRole'] = var26;
            var10 = {};
            var9 = _closure1_slot11;
            var9 = var9.ACCEPT_SPAM_MESSAGE;
            var10['name'] = var9;
            var28 = 6;
            var9 = var6[var28];
            var9 = var31.bind(var4)(var9);
            var12 = var9.intl;
            var11 = var12.string;
            var9 = var6[var28];
            var9 = var31.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.apePSU;
            var9 = var11.bind(var12)(var9);
            var10['label'] = var9;
            var9 = new Array(3);
            var9[0] = var10;
            var10 = {};
            var11 = _closure1_slot11;
            var11 = var11.IGNORE_SPAM_MESSAGE;
            var10['name'] = var11;
            var11 = var6[var28];
            var11 = var31.bind(var4)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var6[var28];
            var11 = var31.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.MWOV9P;
            var11 = var12.bind(var13)(var11);
            var10['label'] = var11;
            var9[1] = var10;
            var10 = {};
            var11 = _closure1_slot11;
            var11 = var11.PREVIEW_SPAM_MESSAGE;
            var10['name'] = var11;
            var11 = var6[var28];
            var11 = var31.bind(var4)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var6[var28];
            var11 = var31.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.I6PFLC;
            var11 = var12.bind(var13)(var11);
            var10['label'] = var11;
            var9[2] = var10;
            var1['accessibilityActions'] = var9;
            var5 = function onAccessibilityAction(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var3 = _closure1_slot11;
                    var3 = var3.ACCEPT_SPAM_MESSAGE;
                    if(!(var3 !== var2)) { _fun0003_ip = 93; continue _fun0003 }
 31:
                    var3 = _closure1_slot11;
                    var3 = var3.IGNORE_SPAM_MESSAGE;
                    if(!(var3 !== var2)) { _fun0003_ip = 78; continue _fun0003 }
 45:
                    var1 = _closure1_slot11;
                    var1 = var1.PREVIEW_SPAM_MESSAGE;
                    if(!(var1 !== var2)) { _fun0003_ip = 63; continue _fun0003 }
 59:
                    var1 = undefined;
                    return var1;
 63:
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
 78:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
 93:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var1['onAccessibilityAction'] = var5;
            var5 = var23.pressableRow;
            var1['style'] = var5;
            var10 = _closure1_slot9;
            var9 = _closure1_slot5;
            var5 = {};
            var11 = var23.rowContainer;
            var5['style'] = var11;
            var13 = _closure1_slot8;
            var12 = _closure1_slot1;
            var11 = 15;
            var11 = var6[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var15 = var14.channel;
            var11['channel'] = var15;
            var14 = var14.user;
            var11['otherUser'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot9;
            var13 = _closure1_slot5;
            var12 = {};
            var15 = var23.actionContainer;
            var12['style'] = var15;
            var18 = _closure1_slot8;
            var15 = var6[var16];
            var15 = var31.bind(var4)(var15);
            var17 = var15.PressableOpacity;
            var15 = {};
            var15['accessibilityRole'] = var26;
            var32 = var6[var28];
            var32 = var31.bind(var4)(var32);
            var34 = var32.intl;
            var33 = var34.formatToPlainString;
            var6 = var6[var28];
            var6 = var31.bind(var4)(var6);
            var6 = var6.t;
            var32 = var6.6p0yBg;
            var31 = {};
            var6 = null;
            var36 = var6 == var30;
            var35 = undefined;
            if(var36) { _fun0001_ip = 801; continue _fun0001 }
 792:
            var36 = var30.toString;
            var35 = var36.bind(var30)();
 801:
            var31['name'] = var35;
            var31 = var33.bind(var34)(var32, var31);
            var15['accessibilityLabel'] = var31;
            var15['onPress'] = var29;
            var15['disabled'] = var21;
            var31 = var23.actionButton;
            var29 = new Array(2);
            var29[0] = var31;
            var31 = var23.acceptButton;
            var29[1] = var31;
            var15['style'] = var29;
            if(var27) { _fun0001_ip = 942; continue _fun0001 }
 854:
            if(var25) { _fun0001_ip = 942; continue _fun0001 }
 857:
            if(var24) { _fun0001_ip = 942; continue _fun0001 }
 860:
            var27 = _closure1_slot8;
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var29 = 16;
            var24 = var32[var29];
            var25 = var31.bind(var4)(var24);
            var24 = {};
            var29 = var32[var29];
            var29 = var31.bind(var4)(var29);
            var29 = var29.Sizes;
            var29 = var29.SMALL;
            var24['size'] = var29;
            var29 = true;
            var24['disableColor'] = var29;
            var29 = 17;
            var29 = var32[var29];
            var29 = var31.bind(var4)(var29);
            var24['source'] = var29;
            var24 = var27.bind(var4)(var25, var24);
            _fun0001_ip = 968; continue _fun0001;
 942:
            var29 = _closure1_slot8;
            var27 = _closure1_slot4;
            var25 = {};
            var31 = var23.activityIndicator;
            var25['style'] = var31;
            var24 = var29.bind(var4)(var27, var25);
 968:
            var15['children'] = var24;
            var17 = var18.bind(var4)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var18 = _closure1_slot8;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var16 = var24[var16];
            var16 = var25.bind(var4)(var16);
            var17 = var16.PressableOpacity;
            var16 = {};
            var16['accessibilityRole'] = var26;
            var26 = var24[var28];
            var26 = var25.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.formatToPlainString;
            var24 = var24[var28];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var25 = var24.C9Xe6+;
            var24 = {};
            var29 = var6 == var30;
            var28 = undefined;
            if(var29) { _fun0001_ip = 1078; continue _fun0001 }
 1069:
            var29 = var30.toString;
            var28 = var29.bind(var30)();
 1078:
            var24['name'] = var28;
            var24 = var26.bind(var27)(var25, var24);
            var16['accessibilityLabel'] = var24;
            var16['onPress'] = var22;
            var16['disabled'] = var21;
            var21 = var23.actionButton;
            var16['style'] = var21;
            if(var20) { _fun0001_ip = 1198; continue _fun0001 }
 1113:
            if(var19) { _fun0001_ip = 1198; continue _fun0001 }
 1116:
            var21 = _closure1_slot8;
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 16;
            var19 = var25[var22];
            var20 = var24.bind(var4)(var19);
            var19 = {};
            var22 = var25[var22];
            var22 = var24.bind(var4)(var22);
            var22 = var22.Sizes;
            var22 = var22.SMALL;
            var19['size'] = var22;
            var22 = true;
            var19['disableColor'] = var22;
            var22 = 18;
            var22 = var25[var22];
            var22 = var24.bind(var4)(var22);
            var19['source'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            _fun0001_ip = 1224; continue _fun0001;
 1198:
            var22 = _closure1_slot8;
            var21 = _closure1_slot4;
            var20 = {};
            var23 = var23.activityIndicator;
            var20['style'] = var23;
            var19 = var22.bind(var4)(var21, var20);
 1224:
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var5['children'] = var11;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(var8) { _fun0001_ip = 1325; continue _fun0001 }
 1275:
            var9 = _closure1_slot8;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 19;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.FormDivider;
            var7 = {'iconPush': true, 'outer': true};
            var6 = var9.bind(var4)(var8, var7);
 1325:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot4 = var7;
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.FlatList;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'marginTop': 6, 'marginBottom': 10};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var12;
    var4['sectionContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': 14, 'marginBottom': 12};
    var4['rowContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'height': '100%'};
    var4['actionContainer'] = var9;
    var9 = {'backgroundColor': null, 'tintColor': null, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'height': 32, 'width': 32};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_NORMAL;
    var9['tintColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var4['actionButton'] = var9;
    var9 = {};
    var12 = 16;
    var9['marginRight'] = var12;
    var4['acceptButton'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var4['pressableRow'] = var9;
    var9 = {'height': 16, 'width': 16};
    var4['activityIndicator'] = var9;
    var9 = {'flex': 1, 'paddingHorizontal': 16, 'alignSelf': 'stretch'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['list'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'accept-spam-message-request';
    var4['ACCEPT_SPAM_MESSAGE'] = var7;
    var7 = 'ignore-spam-message-request';
    var4['IGNORE_SPAM_MESSAGE'] = var7;
    var7 = 'preview-spam-message-request';
    var4['PREVIEW_SPAM_MESSAGE'] = var7;
    var _closure1_slot11 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/native/spam/SpamMessageList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SpamMessageList(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.goToMessageRequestPreview;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot10;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var _closure2_slot1 = var8;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 20;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var9 = var1.bottom;
            var10 = _closure1_slot0;
            var1 = 21;
            var1 = var6[var1];
            var2 = var10.bind(var4)(var1);
            var1 = var2.useSpamMessageRequestCount;
            var1 = var1.bind(var2)();
            var _closure2_slot2 = var1;
            var1 = 22;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var2 = var1.bind(var4)();
            var _closure2_slot3 = var2;
            var1 = 23;
            var1 = var6[var1];
            var10 = var10.bind(var4)(var1);
            var1 = var10.useListHasSingleSpamMessageRequest;
            var1 = var1.bind(var10)();
            var _closure2_slot4 = var1;
            var1 = 24;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 13;
                var2 = var7[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var6 = var8.track;
                var2 = _closure1_slot7;
                var4 = var2.SPAM_MESSAGE_REQUESTS_VIEWED;
                var2 = {};
                var9 = _closure2_slot2;
                var2['num_spam_message_requests'] = var9;
                var2 = var6.bind(var8)(var4, var2);
                var2 = 25;
                var2 = var7[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.increment;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 26;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.MetricEvents;
                var5 = var5.SPAM_MESSAGE_REQUEST_VIEW;
                var2['name'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var1 = var2.length;
            var11 = 0;
            if(!(var11 !== var1)) { _fun0004_ip = 338; continue _fun0004 }
 175:
            var6 = ['header-section'];
            var15 = 1;
            var17 = var6;
            var16 = var2;
            var1 = arraySpread(var17, var16, var15);
            var3 = _closure1_slot8;
            var2 = _closure1_slot6;
            var1 = {};
            var10 = var8.list;
            var8 = new Array(2);
            var8[0] = var10;
            var10 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 28;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            var11 = 0;
            if(!var12) { _fun0004_ip = 261; continue _fun0004 }
 258:
            var11 = var9;
 261:
            var10['marginBottom'] = var11;
            var8[1] = var10;
            var1['style'] = var8;
            var8 = {};
            var10 = 0.01;
            var8['right'] = var10;
            var1['scrollIndicatorInsets'] = var8;
            var8 = {};
            var8['paddingBottom'] = var9;
            var9 = 12;
            var8['paddingTop'] = var9;
            var1['contentContainerStyle'] = var8;
            var7 = function renderItem(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.item;
                    var _closure3_slot0 = var1;
                    var4 = 'string';
                    var3 = typeof var1;
                    if(!(var4 !== var3)) { _fun0005_ip = 154; continue _fun0005 }
 28:
                    var5 = _closure1_slot8;
                    var4 = _closure1_slot12;
                    var3 = {};
                    var3['messageRequest'] = var1;
                    var2 = function goToMessageRequestPreview() {
                        var3 = _closure2_slot0;
                        var1 = _closure3_slot0;
                        var1 = var1.channel;
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['goToMessageRequestPreview'] = var2;
                    var2 = var1.channel;
                    var8 = var2.id;
                    var7 = _closure2_slot3;
                    var9 = var7.length;
                    var2 = 1;
                    var2 = var9 - var2;
                    var9 = var7[var2];
                    var2 = null;
                    var10 = var2 == var9;
                    var2 = undefined;
                    var7 = undefined;
                    if(var10) { _fun0005_ip = 114; continue _fun0005 }
 104:
                    var9 = var9.channel;
                    var7 = var9.id;
 114:
                    var7 = var8 === var7;
                    var3['isLastRow'] = var7;
                    var6 = _closure2_slot4;
                    var3['hasSingleMessageRequest'] = var6;
                    var1 = var1.channel;
                    var1 = var1.id;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    _fun0005_ip = 314; continue _fun0005;
 154:
                    var5 = _closure1_slot8;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.sectionContainer;
                    var3['style'] = var6;
                    var8 = _closure1_slot8;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 29;
                    var6 = var14[var2];
                    var2 = undefined;
                    var6 = var10.bind(var2)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'eyebrow', 'color': 'header-secondary'};
                    var9 = 6;
                    var11 = var14[var9];
                    var11 = var10.bind(var2)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var14[var9];
                    var9 = var10.bind(var2)(var9);
                    var9 = var9.t;
                    var10 = var9.aNh5KS;
                    var9 = {};
                    var13 = _closure2_slot3;
                    var13 = var13.length;
                    var9['count'] = var13;
                    var9 = var11.bind(var12)(var10, var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 314:
                    return var1;
                }
            };
            var1['renderItem'] = var7;
            var1['data'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 338:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 27;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = _closure1_slot0;
            var5 = 6;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.hasFPT;
            var5 = var6.bind(var7)(var5);
            var1['bodyText'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();