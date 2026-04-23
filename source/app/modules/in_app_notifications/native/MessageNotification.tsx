// app/modules/in_app_notifications/native/MessageNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'paddingRight': 4, 'paddingTop': 0};
    var4['newContainerRoleDot'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function MessageNotification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.notification;
            var7 = var1.reaction;
            var6 = var1.onExpandPress;
            var1 = var1.expandedContentVisible;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot7;
            var10 = var2.bind(var4)();
            var15 = var14.message;
            var25 = var14.channel;
            var _closure2_slot0 = var25;
            var24 = var14.parentChannel;
            var _closure2_slot1 = var24;
            var23 = var14.guild;
            var _closure2_slot2 = var23;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var18 = 11;
            var2 = var8[var18];
            var9 = var3.bind(var4)(var2);
            var2 = var9.useNullableMessageAuthor;
            var22 = var2.bind(var9)(var15);
            var _closure2_slot3 = var22;
            var2 = 12;
            var2 = var8[var2];
            var9 = var3.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = var8.bind(var9)(var3, var2);
            var12 = null;
            var8 = var12 == var22;
            var2 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var22.colorString;
case 2:
            var8 = var12 != var2;
            var13 = undefined;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var2;
case 4:
            var8 = 'username';
            var2 = undefined;
            if(!(var8 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var13;
case 6:
            _closure2_slot4 = var2;
            var16 = _closure1_slot3;
            var9 = var16.useMemo;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = {};
                    var3 = _closure2_slot4;
                    var2['color'] = var3;
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var20 = var9.bind(var16)(var2, var8);
            _closure2_slot5 = var20;
            var2 = 'dot';
            var8 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = undefined;
            if(!(var4 !== var13)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var9 = _closure1_slot6;
            var3 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 13;
            var2 = var16[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.RoleDot;
            var2 = {};
            var2['color'] = var13;
            var16 = var12 == var22;
            var13 = undefined;
            if(var16) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var13 = var22.colorStrings;
case 13:
            var2['colors'] = var13;
            var10 = var10.newContainerRoleDot;
            var2['containerStyles'] = var10;
            var8 = var9.bind(var4)(var3, var2);
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 5;
            var2 = var2[var13];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getNotificationTitle;
            var31 = var3;
            var30 = var25;
            var29 = var22;
            var28 = var24;
            var27 = var23;
            var21 = var31[var2](var30, var29, var28, var27, var26);
            _closure2_slot6 = var21;
            var2 = var15.content;
            var3 = var2.length;
            var2 = 0;
            var2 = var2 === var3;
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var15.interaction;
            var2 = var12 !== var3;
case 15:
            if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = var15.interaction;
            var2 = var4 !== var3;
case 17:
            if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = var15.activityInstance;
            var2 = var12 !== var3;
case 19:
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var3 = var15.activityInstance;
            var2 = var4 !== var3;
case 21:
            if(!var2) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 14;
            var3 = var16[var2];
            var3 = var17.bind(var4)(var3);
            var10 = var3.intl;
            var9 = var10.formatToPlainString;
            var2 = var16[var2];
            var2 = var17.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["7eikg1"];
            var2 = {};
            var16 = var16[var18];
            var19 = var17.bind(var4)(var16);
            var18 = var19.getUserAuthor;
            var16 = var15.interaction;
            var26 = var12 == var16;
            var17 = undefined;
            if(var26) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var17 = var16.user;
case 25:
            var16 = var14.channel;
            var16 = var18.bind(var19)(var17, var16);
            var16 = var16.nick;
            var2['username'] = var16;
            var2 = var9.bind(var10)(var3, var2);
            var15['content'] = var2;
case 23:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 15;
            var2 = var9[var2];
            var2 = var10.bind(var4)(var2);
            var16 = var2.InAppNotificationReactExperiment;
            var3 = var16.useConfig;
            var2 = {};
            var18 = 'MessageNotification';
            var2['location'] = var18;
            var2 = var3.bind(var16)(var2);
            var17 = var2.quickReact;
            var3 = var2.expandedSize;
            var2 = 16;
            var2 = var9[var2];
            var16 = var10.bind(var4)(var2);
            var2 = var16.useInAppNotificationRedesign;
            var2 = var2.bind(var16)(var18);
            var2 = var2.redesignEnabled;
            _closure2_slot7 = var2;
            var19 = _closure1_slot3;
            var18 = var19.useMemo;
            var16 = new Array(7);
            var16[0] = var2;
            var16[1] = var25;
            var16[2] = var24;
            var16[3] = var23;
            var16[4] = var22;
            var16[5] = var21;
            var16[6] = var20;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var1 = {};
                    var2 = 'simple';
                    var1['type'] = var2;
                    var2 = _closure2_slot6;
                    var1['text'] = var2;
                    var2 = _closure2_slot5;
                    var1['labelStyle'] = var2;
                    _fun0003_ip = 29; continue _fun0003;
case 27:
                    var2 = {};
                    var4 = 'message';
                    var2['type'] = var4;
                    var4 = _closure2_slot0;
                    var2['channel'] = var4;
                    var4 = _closure2_slot1;
                    var2['parentChannel'] = var4;
                    var4 = _closure2_slot2;
                    var2['guild'] = var4;
                    var3 = _closure2_slot3;
                    var2['author'] = var3;
                    var1 = var2;
case 29:
                    return var1;
                }
            };
            var5 = var18.bind(var19)(var5, var16);
            var16 = {};
            var16['message'] = var15;
            var16['notification'] = var14;
            var16['quickReactEnabled'] = var17;
            var16['redesignEnabled'] = var2;
            var16['reaction'] = var7;
            var16['onExpandPress'] = var6;
            var16['expandedContentVisible'] = var1;
            var17 = var16.message;
            var1 = var16.notification;
            var7 = var16.quickReactEnabled;
            var6 = var16.redesignEnabled;
            var19 = var16.reaction;
            var18 = var16.onExpandPress;
            var16 = var16.expandedContentVisible;
            var13 = var9[var13];
            var20 = var10.bind(var4)(var13);
            var13 = var20.useHasPreviewableMedia;
            var13 = var13.bind(var20)(var17);
            var20 = 6;
            var20 = var9[var20];
            var21 = var10.bind(var4)(var20);
            var20 = var21.useCanReactToMessage;
            var1 = var1.channel;
            var1 = var20.bind(var21)(var17, var1);
            if(var13) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            if(!var7) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            if(!var1) { _fun0001_ip = 30; continue _fun0001 }
case 33:
            var13 = _closure1_slot6;
            var7 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 7;
            var1 = var20[var1];
            var1 = var7.bind(var4)(var1);
            var7 = var1.MessageNotificationAccessory;
            var1 = {};
            var1['reaction'] = var19;
            var1['onExpandPress'] = var18;
            var1['expandedContentVisible'] = var16;
            var7 = var13.bind(var4)(var7, var1);
            _fun0001_ip = 34; continue _fun0001;
case 30:
            var1 = null;
            if(!var6) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var16 = _closure1_slot6;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 8;
            var6 = var18[var6];
            var6 = var13.bind(var4)(var6);
            var13 = var6.MediaPreviewRightAccessory;
            var6 = {};
            var6['message'] = var17;
            var1 = var16.bind(var4)(var13, var6);
case 35:
            var7 = var1;
case 34:
            var1 = {};
            var1['message'] = var15;
            var1['expandedSize'] = var3;
            var1['redesignEnabled'] = var2;
            var3 = var1.message;
            var2 = var1.expandedSize;
            var1 = var1.redesignEnabled;
            var6 = {};
            var6['message'] = var3;
            var3 = 2;
            if(!var2) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var3 = 3;
case 37:
            var6['lineClamp'] = var3;
            var13 = _closure1_slot5;
            if(var2) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var2 = var13;
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var3 = 1.2;
            var2 = var3 * var13;
case 41:
            var6['maxHeight'] = var2;
            var3 = _closure1_slot6;
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.NativeChannelRowPreview;
            _fun0001_ip = 44; continue _fun0001;
case 42:
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 10;
            var1 = var16[var1];
            var2 = var13.bind(var4)(var1);
case 44:
            var1 = {};
            var30 = var1;
            var29 = var6;
            var6 = copyDataProperties(var30, var29);
            var6 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot6;
            var1 = 17;
            var1 = var9[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var13 = 13;
            var9 = var9[var13];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Avatar;
            var9 = {};
            var15 = var15.author;
            var9['user'] = var15;
            var14 = var14.guild;
            var15 = var12 == var14;
            var12 = undefined;
            if(var15) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var12 = var14.id;
case 45:
            var9['guildId'] = var12;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.AvatarSizes;
            var11 = var11.NORMAL;
            var9['size'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var1['icon'] = var9;
            var1['accessoryLabelNode'] = var8;
            var1['rightAccessory'] = var7;
            var1['children'] = var6;
            var1['header'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();