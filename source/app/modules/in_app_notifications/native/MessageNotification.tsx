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
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'paddingRight': 4, 'paddingTop': 0};
    var4['newContainerRoleDot'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function MessageNotification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.notification;
            var6 = var1.reaction;
            var5 = var1.onExpandPress;
            var1 = var1.expandedContentVisible;
            var2 = _closure1_slot6;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var16 = var15.message;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var19 = 11;
            var2 = var7[var19];
            var8 = var3.bind(var4)(var2);
            var2 = var8.useNullableMessageAuthor;
            var17 = var2.bind(var8)(var16);
            var2 = 12;
            var2 = var7[var2];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot3;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = var7.bind(var8)(var3, var2);
            var13 = null;
            var7 = var13 == var17;
            var2 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var17.colorString;
case 2:
            var7 = var13 != var2;
            var11 = undefined;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var2;
case 4:
            var2 = 'username';
            var7 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var11;
case 6:
            var2 = var13 != var7;
            var8 = undefined;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = {};
            var2['color'] = var7;
            var8 = var2;
case 8:
            var2 = 'dot';
            var7 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = undefined;
            if(!(var4 !== var11)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var9 = _closure1_slot5;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 13;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.RoleDot;
            var2 = {};
            var2['color'] = var11;
            var14 = var13 == var17;
            var11 = undefined;
            if(var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = var17.colorStrings;
case 13:
            var2['colors'] = var11;
            var10 = var10.newContainerRoleDot;
            var2['containerStyles'] = var10;
            var7 = var9.bind(var4)(var3, var2);
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var14 = 5;
            var2 = var2[var14];
            var11 = var3.bind(var4)(var2);
            var10 = var11.getNotificationTitle;
            var26 = var15.channel;
            var24 = var15.parentChannel;
            var23 = var15.guild;
            var27 = var11;
            var25 = var17;
            var9 = var27[var10](var26, var25, var24, var23, var22);
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
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 14;
            var3 = var17[var2];
            var3 = var18.bind(var4)(var3);
            var11 = var3.intl;
            var10 = var11.formatToPlainString;
            var2 = var17[var2];
            var2 = var18.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["7eikg1"];
            var2 = {};
            var17 = var17[var19];
            var20 = var18.bind(var4)(var17);
            var19 = var20.getUserAuthor;
            var17 = var16.interaction;
            var21 = var13 == var17;
            var18 = undefined;
            if(var21) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var18 = var17.user;
case 25:
            var17 = var15.channel;
            var17 = var19.bind(var20)(var18, var17);
            var17 = var17.nick;
            var2['username'] = var17;
            var2 = var10.bind(var11)(var3, var2);
            var16['content'] = var2;
case 23:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var2 = var11.bind(var4)(var2);
            var17 = var2.InAppNotificationReactExperiment;
            var3 = var17.useConfig;
            var2 = {};
            var19 = 'MessageNotification';
            var2['location'] = var19;
            var2 = var3.bind(var17)(var2);
            var18 = var2.quickReact;
            var3 = var2.expandedSize;
            var2 = 16;
            var2 = var10[var2];
            var17 = var11.bind(var4)(var2);
            var2 = var17.useInAppNotificationRedesign;
            var2 = var2.bind(var17)(var19);
            var2 = var2.redesignEnabled;
            var17 = {};
            var17['message'] = var16;
            var17['notification'] = var15;
            var17['quickReactEnabled'] = var18;
            var17['redesignEnabled'] = var2;
            var17['reaction'] = var6;
            var17['onExpandPress'] = var5;
            var17['expandedContentVisible'] = var1;
            var18 = var17.message;
            var1 = var17.notification;
            var6 = var17.quickReactEnabled;
            var5 = var17.redesignEnabled;
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
            if(var14) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(!var6) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            if(!var1) { _fun0001_ip = 27; continue _fun0001 }
case 30:
            var14 = _closure1_slot5;
            var6 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 7;
            var1 = var21[var1];
            var1 = var6.bind(var4)(var1);
            var6 = var1.MessageNotificationAccessory;
            var1 = {};
            var1['reaction'] = var20;
            var1['onExpandPress'] = var19;
            var1['expandedContentVisible'] = var17;
            var6 = var14.bind(var4)(var6, var1);
            _fun0001_ip = 31; continue _fun0001;
case 27:
            var1 = null;
            if(!var5) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var17 = _closure1_slot5;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 8;
            var5 = var19[var5];
            var5 = var14.bind(var4)(var5);
            var14 = var5.MediaPreviewRightAccessory;
            var5 = {};
            var5['message'] = var18;
            var1 = var17.bind(var4)(var14, var5);
case 32:
            var6 = var1;
case 31:
            var1 = {};
            var1['message'] = var16;
            var1['expandedSize'] = var3;
            var1['redesignEnabled'] = var2;
            var3 = var1.message;
            var2 = var1.expandedSize;
            var1 = var1.redesignEnabled;
            var5 = {};
            var5['message'] = var3;
            var3 = 2;
            if(!var2) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var3 = 3;
case 34:
            var5['lineClamp'] = var3;
            var14 = _closure1_slot4;
            if(var2) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var2 = var14;
            _fun0001_ip = 38; continue _fun0001;
case 36:
            var3 = 1.2;
            var2 = var3 * var14;
case 38:
            var5['maxHeight'] = var2;
            var3 = _closure1_slot5;
            if(var1) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 9;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.NativeChannelRowPreview;
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 10;
            var1 = var17[var1];
            var2 = var14.bind(var4)(var1);
case 41:
            var1 = {};
            var26 = var1;
            var25 = var5;
            var5 = copyDataProperties(var26, var25);
            var5 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot5;
            var1 = 17;
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
            if(var16) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var13 = var15.id;
case 42:
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
            var1['label'] = var9;
            var1['labelStyle'] = var8;
            var1['accessoryLabelNode'] = var7;
            var1['rightAccessory'] = var6;
            var1['children'] = var5;
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