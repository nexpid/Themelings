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
            var15 = var1.notification;
            var8 = var1.reaction;
            var7 = var1.onExpandPress;
            var1 = var1.expandedContentVisible;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot7;
            var10 = var2.bind(var4)();
            var16 = var15.message;
            var26 = var15.channel;
            var _closure2_slot0 = var26;
            var25 = var15.parentChannel;
            var _closure2_slot1 = var25;
            var24 = var15.guild;
            var _closure2_slot2 = var24;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var18 = 11;
            var2 = var5[var18];
            var9 = var3.bind(var4)(var2);
            var2 = var9.useNullableMessageAuthor;
            var23 = var2.bind(var9)(var16);
            var _closure2_slot3 = var23;
            var2 = 12;
            var2 = var5[var2];
            var9 = var3.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = var5.bind(var9)(var3, var2);
            var13 = null;
            var5 = var13 == var23;
            var2 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var23.colorString;
case 2:
            var5 = var13 != var2;
            var11 = undefined;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var2;
case 4:
            var5 = 'username';
            var2 = undefined;
            if(!(var5 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var11;
case 6:
            _closure2_slot4 = var2;
            var14 = _closure1_slot3;
            var9 = var14.useMemo;
            var5 = new Array(1);
            var5[0] = var2;
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
            var21 = var9.bind(var14)(var2, var5);
            _closure2_slot5 = var21;
            var2 = 'dot';
            var9 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = undefined;
            if(!(var4 !== var11)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var5 = _closure1_slot6;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 13;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.RoleDot;
            var2 = {};
            var2['color'] = var11;
            var14 = var13 == var23;
            var11 = undefined;
            if(var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = var23.colorStrings;
case 13:
            var2['colors'] = var11;
            var10 = var10.newContainerRoleDot;
            var2['containerStyles'] = var10;
            var9 = var5.bind(var4)(var3, var2);
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var14 = 5;
            var2 = var2[var14];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getNotificationTitle;
            var32 = var3;
            var31 = var26;
            var30 = var23;
            var29 = var25;
            var28 = var24;
            var22 = var32[var2](var31, var30, var29, var28, var27);
            _closure2_slot6 = var22;
            var2 = var16.content;
            var3 = var2.length;
            var2 = 0;
            var2 = var2 === var3;
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var16.interaction;
            var2 = var13 !== var3;
case 15:
            if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = var16.interaction;
            var2 = var4 !== var3;
case 17:
            if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = var16.activityInstance;
            var2 = var13 !== var3;
case 19:
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var3 = var16.activityInstance;
            var2 = var4 !== var3;
case 21:
            if(!var2) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var17 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 14;
            var3 = var11[var2];
            var3 = var17.bind(var4)(var3);
            var10 = var3.intl;
            var5 = var10.formatToPlainString;
            var2 = var11[var2];
            var2 = var17.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["7eikg1"];
            var2 = {};
            var11 = var11[var18];
            var19 = var17.bind(var4)(var11);
            var18 = var19.getUserAuthor;
            var11 = var16.interaction;
            var20 = var13 == var11;
            var17 = undefined;
            if(var20) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var17 = var11.user;
case 25:
            var11 = var15.channel;
            var11 = var18.bind(var19)(var17, var11);
            var11 = var11.nick;
            var2['username'] = var11;
            var2 = var5.bind(var10)(var3, var2);
            var16['content'] = var2;
case 23:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var2 = var11.bind(var4)(var2);
            var17 = var2.InAppNotificationReactExperiment;
            var5 = var17.useConfig;
            var2 = {};
            var3 = 'MessageNotification';
            var2['location'] = var3;
            var2 = var5.bind(var17)(var2);
            var18 = var2.quickReact;
            var5 = var2.expandedSize;
            var2 = 16;
            var2 = var10[var2];
            var17 = var11.bind(var4)(var2);
            var2 = var17.useInAppNotificationRedesign;
            var2 = var2.bind(var17)(var3);
            var2 = var2.redesignEnabled;
            _closure2_slot7 = var2;
            var20 = _closure1_slot3;
            var19 = var20.useMemo;
            var17 = new Array(7);
            var17[0] = var2;
            var17[1] = var26;
            var17[2] = var25;
            var17[3] = var24;
            var17[4] = var23;
            var17[5] = var22;
            var17[6] = var21;
            var6 = function() {
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
            var6 = var19.bind(var20)(var6, var17);
            var17 = {};
            var17['message'] = var16;
            var17['notification'] = var15;
            var17['quickReactEnabled'] = var18;
            var17['redesignEnabled'] = var2;
            var17['reaction'] = var8;
            var17['onExpandPress'] = var7;
            var17['expandedContentVisible'] = var1;
            var18 = var17.message;
            var1 = var17.notification;
            var8 = var17.quickReactEnabled;
            var7 = var17.redesignEnabled;
            var20 = var17.reaction;
            var19 = var17.onExpandPress;
            var17 = var17.expandedContentVisible;
            var14 = var10[var14];
            var21 = var11.bind(var4)(var14);
            var14 = var21.useHasPreviewableMedia;
            var14 = var14.bind(var21)(var18);
            var21 = 6;
            var21 = var10[var21];
            var22 = var11.bind(var4)(var21);
            var21 = var22.useCanReactToMessage;
            var1 = var1.channel;
            var1 = var21.bind(var22)(var18, var1);
            if(var14) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            if(!var8) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            if(!var1) { _fun0001_ip = 30; continue _fun0001 }
case 33:
            var14 = _closure1_slot6;
            var8 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 7;
            var1 = var21[var1];
            var1 = var8.bind(var4)(var1);
            var8 = var1.MessageNotificationAccessory;
            var1 = {};
            var1['reaction'] = var20;
            var1['onExpandPress'] = var19;
            var1['expandedContentVisible'] = var17;
            var8 = var14.bind(var4)(var8, var1);
            _fun0001_ip = 34; continue _fun0001;
case 30:
            var1 = null;
            if(!var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var17 = _closure1_slot6;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 8;
            var7 = var19[var7];
            var7 = var14.bind(var4)(var7);
            var14 = var7.MediaPreviewRightAccessory;
            var7 = {};
            var7['message'] = var18;
            var1 = var17.bind(var4)(var14, var7);
case 35:
            var8 = var1;
case 34:
            var1 = {};
            var1['message'] = var16;
            var1['expandedSize'] = var5;
            var1['redesignEnabled'] = var2;
            var5 = var1.message;
            var2 = var1.expandedSize;
            var1 = var1.redesignEnabled;
            var7 = {};
            var7['message'] = var5;
            var5 = 2;
            if(!var2) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var5 = 3;
case 37:
            var7['lineClamp'] = var5;
            var14 = _closure1_slot5;
            if(var2) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var2 = var14;
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var5 = 1.2;
            var2 = var5 * var14;
case 41:
            var7['maxHeight'] = var2;
            var5 = _closure1_slot6;
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 9;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.NativeChannelRowPreview;
            _fun0001_ip = 44; continue _fun0001;
case 42:
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 10;
            var1 = var17[var1];
            var2 = var14.bind(var4)(var1);
case 44:
            var1 = {};
            var31 = var1;
            var30 = var7;
            var7 = copyDataProperties(var31, var30);
            var7 = var5.bind(var4)(var2, var1);
            var1 = 17;
            var1 = var10[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useCanExpandInAppNotification;
            var1 = var1.bind(var2)(var3);
            var5 = var1.canExpand;
            var3 = _closure1_slot6;
            var1 = 18;
            var1 = var10[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var14 = 13;
            var10 = var10[var14];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Avatar;
            var10 = {};
            var16 = var16.author;
            var10['user'] = var16;
            var15 = var15.guild;
            var16 = var13 == var15;
            var13 = undefined;
            if(var16) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var13 = var15.id;
case 45:
            var10['guildId'] = var13;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var12 = var13.bind(var4)(var12);
            var12 = var12.AvatarSizes;
            var12 = var12.NORMAL;
            var10['size'] = var12;
            var10 = var3.bind(var4)(var11, var10);
            var1['icon'] = var10;
            var1['accessoryLabelNode'] = var9;
            var1['rightAccessory'] = var8;
            var1['children'] = var7;
            var1['header'] = var6;
            var1['showDragHandle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();