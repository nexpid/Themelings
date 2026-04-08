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
            var11 = var1.notification;
            var5 = var1.reaction;
            var1 = var1.onReactionPress;
            var2 = _closure1_slot6;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var10 = var11.message;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var18 = 10;
            var2 = var6[var18];
            var7 = var3.bind(var4)(var2);
            var2 = var7.useNullableMessageAuthor;
            var16 = var2.bind(var7)(var10);
            var2 = 11;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot3;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = var6.bind(var7)(var3, var2);
            var6 = null;
            var7 = var6 == var16;
            var2 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var16.colorString;
case 2:
            var7 = var6 != var2;
            var14 = undefined;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var2;
case 4:
            var2 = 'username';
            var7 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var14;
case 6:
            var2 = var6 != var7;
            var12 = undefined;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = {};
            var2['color'] = var7;
            var12 = var2;
case 8:
            var2 = 'dot';
            var7 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = undefined;
            if(!(var4 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var8 = _closure1_slot5;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 12;
            var2 = var15[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.RoleDot;
            var2 = {};
            var2['color'] = var14;
            var15 = var6 == var16;
            var14 = undefined;
            if(var15) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = var16.colorStrings;
case 13:
            var2['colors'] = var14;
            var13 = var13.newContainerRoleDot;
            var2['containerStyles'] = var13;
            var7 = var8.bind(var4)(var3, var2);
case 10:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 5;
            var2 = var2[var3];
            var15 = var8.bind(var4)(var2);
            var14 = var15.getNotificationTitle;
            var24 = var11.channel;
            var22 = var11.parentChannel;
            var21 = var11.guild;
            var25 = var15;
            var23 = var16;
            var13 = var25[var14](var24, var23, var22, var21, var20);
            var2 = var10.content;
            var8 = var2.length;
            var2 = 0;
            var2 = var2 === var8;
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var10.interaction;
            var2 = var6 !== var8;
case 15:
            if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = var10.interaction;
            var2 = var4 !== var8;
case 17:
            if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = var10.activityInstance;
            var2 = var6 !== var8;
case 19:
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = var10.activityInstance;
            var2 = var4 !== var8;
case 21:
            if(!var2) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 13;
            var8 = var16[var2];
            var8 = var17.bind(var4)(var8);
            var15 = var8.intl;
            var14 = var15.formatToPlainString;
            var2 = var16[var2];
            var2 = var17.bind(var4)(var2);
            var2 = var2.t;
            var8 = var2["7eikg1"];
            var2 = {};
            var16 = var16[var18];
            var19 = var17.bind(var4)(var16);
            var18 = var19.getUserAuthor;
            var16 = var10.interaction;
            var20 = var6 == var16;
            var17 = undefined;
            if(var20) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var17 = var16.user;
case 25:
            var16 = var11.channel;
            var16 = var18.bind(var19)(var17, var16);
            var16 = var16.nick;
            var2['username'] = var16;
            var2 = var14.bind(var15)(var8, var2);
            var10['content'] = var2;
case 23:
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 14;
            var8 = var14[var8];
            var8 = var2.bind(var4)(var8);
            var16 = var8.InAppNotificationReactExperiment;
            var15 = var16.useConfig;
            var8 = {};
            var20 = 'MessageNotification';
            var8['location'] = var20;
            var8 = var15.bind(var16)(var8);
            var16 = var8.quickReact;
            var8 = var8.expandedSize;
            var15 = {};
            var15['message'] = var10;
            var15['notification'] = var11;
            var15['quickReactEnabled'] = var16;
            var15['reaction'] = var5;
            var15['onReactionPress'] = var1;
            var17 = var15.message;
            var1 = var15.notification;
            var5 = var15.quickReactEnabled;
            var18 = var15.reaction;
            var16 = var15.onReactionPress;
            var3 = var14[var3];
            var15 = var2.bind(var4)(var3);
            var3 = var15.useHasPreviewableMedia;
            var15 = var3.bind(var15)(var17);
            var3 = 6;
            var3 = var14[var3];
            var19 = var2.bind(var4)(var3);
            var3 = var19.useCanReactToMessage;
            var1 = var1.channel;
            var1 = var3.bind(var19)(var17, var1);
            var3 = 7;
            var3 = var14[var3];
            var19 = var2.bind(var4)(var3);
            var3 = var19.useInAppNotificationRedesign;
            var3 = var3.bind(var19)(var20);
            var3 = var3.redesignEnabled;
            if(var15) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(!var5) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            if(!var1) { _fun0001_ip = 27; continue _fun0001 }
case 30:
            var15 = _closure1_slot5;
            var5 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 8;
            var1 = var19[var1];
            var1 = var5.bind(var4)(var1);
            var5 = var1.MessageNotificationAccessory;
            var1 = {};
            var1['reaction'] = var18;
            var1['onReactionPress'] = var16;
            var5 = var15.bind(var4)(var5, var1);
            _fun0001_ip = 31; continue _fun0001;
case 27:
            var1 = null;
            if(!var3) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var16 = _closure1_slot5;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 9;
            var3 = var18[var3];
            var3 = var15.bind(var4)(var3);
            var15 = var3.MediaPreviewRightAccessory;
            var3 = {};
            var3['message'] = var17;
            var1 = var16.bind(var4)(var15, var3);
case 32:
            var5 = var1;
case 31:
            var3 = _closure1_slot5;
            var1 = 15;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var15 = _closure1_slot1;
            var16 = 16;
            var14 = var14[var16];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var17 = var10.author;
            var14['user'] = var17;
            var11 = var11.guild;
            var17 = var6 == var11;
            var6 = undefined;
            if(var17) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var6 = var11.id;
case 34:
            var14['guildId'] = var6;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var16 = var11[var16];
            var16 = var6.bind(var4)(var16);
            var16 = var16.AvatarSizes;
            var16 = var16.NORMAL;
            var14['size'] = var16;
            var14 = var3.bind(var4)(var15, var14);
            var1['icon'] = var14;
            var1['label'] = var13;
            var1['labelStyle'] = var12;
            var1['accessoryLabelNode'] = var7;
            var1['rightAccessory'] = var5;
            var7 = _closure1_slot5;
            var5 = 17;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.NativeChannelRowPreview;
            var5 = {};
            var5['message'] = var10;
            var10 = 2;
            if(!var8) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var10 = 3;
case 36:
            var5['lineClamp'] = var10;
            var10 = _closure1_slot4;
            if(var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var8 = var10;
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var9 = 1.2;
            var8 = var9 * var10;
case 40:
            var5['maxHeight'] = var8;
            var5 = var7.bind(var4)(var6, var5);
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