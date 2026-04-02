// app/modules/in_app_notifications/native/MessageNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function StandardMessageNotification(arg1) {
        var1 = arg1;
        var9 = var1.message;
        var16 = var1.guildId;
        var11 = var1.title;
        var7 = var1.labelStyle;
        var5 = var1.accessoryLabelNode;
        var4 = _closure1_slot5;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 5;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.Notification;
        var1 = {};
        var14 = _closure1_slot5;
        var13 = _closure1_slot1;
        var15 = 6;
        var12 = var10[var15];
        var13 = var13.bind(var3)(var12);
        var12 = {};
        var17 = var9.author;
        var12['user'] = var17;
        var12['guildId'] = var16;
        var15 = var10[var15];
        var15 = var6.bind(var3)(var15);
        var15 = var15.AvatarSizes;
        var15 = var15.NORMAL;
        var12['size'] = var15;
        var12 = var14.bind(var3)(var13, var12);
        var1['icon'] = var12;
        var1['label'] = var11;
        var1['labelStyle'] = var7;
        var1['accessoryLabelNode'] = var5;
        var7 = _closure1_slot5;
        var5 = 7;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.NativeChannelRowPreview;
        var5 = {};
        var5['message'] = var9;
        var9 = 2;
        var5['lineClamp'] = var9;
        var8 = _closure1_slot4;
        var5['maxHeight'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function ReactableMessageNotification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.message;
            var18 = var1.guildId;
            var10 = var1.title;
            var7 = var1.labelStyle;
            var5 = var1.accessoryLabelNode;
            var11 = var1.onReactionPress;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 8;
            var1 = var17[var1];
            var4 = undefined;
            var1 = var16.bind(var4)(var1);
            var3 = var1.InAppNotificationReactExperiment;
            var2 = var3.useConfig;
            var1 = {};
            var6 = 'MessageNotification';
            var1['location'] = var6;
            var1 = var2.bind(var3)(var1);
            var6 = var1.enabled;
            var3 = _closure1_slot5;
            var1 = 5;
            var1 = var17[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var14 = _closure1_slot5;
            var13 = _closure1_slot1;
            var15 = 6;
            var12 = var17[var15];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var19 = var9.author;
            var12['user'] = var19;
            var12['guildId'] = var18;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.NORMAL;
            var12['size'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var1['icon'] = var12;
            var1['label'] = var10;
            var1['labelStyle'] = var7;
            var1['accessoryLabelNode'] = var5;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot5;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 9;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.IconButton;
            var6 = {'variant': 'secondary', 'size': 'sm'};
            var16 = _closure1_slot5;
            var12 = 10;
            var12 = var15[var12];
            var12 = var14.bind(var4)(var12);
            var13 = var12.ReactionPlusIcon;
            var12 = {};
            var12 = var16.bind(var4)(var13, var12);
            var6['icon'] = var12;
            var6['onPress'] = var11;
            var11 = 11;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.lfIHs4;
            var11 = var12.bind(var13)(var11);
            var6['accessibilityLabel'] = var11;
            var5 = var10.bind(var4)(var7, var6);
case 2:
            var1['rightAccessory'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 7;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.NativeChannelRowPreview;
            var5 = {};
            var5['message'] = var9;
            var9 = 2;
            var5['lineClamp'] = var9;
            var8 = _closure1_slot4;
            var5['maxHeight'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.notification;
            var12 = var1.onReactionPress;
            var1 = _closure1_slot6;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var11 = var10.message;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var17 = 12;
            var1 = var4[var17];
            var6 = var3.bind(var5)(var1);
            var1 = var6.useNullableMessageAuthor;
            var14 = var1.bind(var6)(var11);
            var1 = 13;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = var4.bind(var6)(var3, var1);
            var9 = null;
            var4 = var9 == var14;
            var1 = undefined;
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var14.colorString;
case 4:
            var4 = var9 != var1;
            var13 = undefined;
            if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var13 = var1;
case 6:
            var1 = 'username';
            var4 = undefined;
            if(!(var1 === var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var13;
case 8:
            var1 = var9 != var4;
            var7 = undefined;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = {};
            var1['color'] = var4;
            var7 = var1;
case 10:
            var1 = 'dot';
            var6 = undefined;
            if(!(var1 === var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = undefined;
            if(!(var5 !== var13)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 14;
            var1 = var15[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.RoleDot;
            var1 = {};
            var1['color'] = var13;
            var15 = var9 == var14;
            var13 = undefined;
            if(var15) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var13 = var14.colorStrings;
case 15:
            var1['colors'] = var13;
            var8 = var8.newContainerRoleDot;
            var1['containerStyles'] = var8;
            var6 = var4.bind(var5)(var3, var1);
case 12:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var13 = var3.bind(var5)(var1);
            var8 = var13.getNotificationTitle;
            var23 = var10.channel;
            var21 = var10.parentChannel;
            var20 = var10.guild;
            var24 = var13;
            var22 = var14;
            var8 = var24[var8](var23, var22, var21, var20, var19);
            var1 = var11.content;
            var1 = var1.length;
            var3 = 0;
            var1 = var3 === var1;
            if(!var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = var11.interaction;
            var1 = var9 !== var4;
case 17:
            if(!var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = var11.interaction;
            var1 = var5 !== var4;
case 19:
            if(!var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var4 = var11.activityInstance;
            var1 = var9 !== var4;
case 21:
            if(!var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var4 = var11.activityInstance;
            var1 = var5 !== var4;
case 23:
            if(!var1) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 11;
            var4 = var15[var1];
            var4 = var16.bind(var5)(var4);
            var14 = var4.intl;
            var13 = var14.formatToPlainString;
            var1 = var15[var1];
            var1 = var16.bind(var5)(var1);
            var1 = var1.t;
            var4 = var1["7eikg1"];
            var1 = {};
            var15 = var15[var17];
            var18 = var16.bind(var5)(var15);
            var17 = var18.getUserAuthor;
            var15 = var11.interaction;
            var19 = var9 == var15;
            var16 = undefined;
            if(var19) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var16 = var15.user;
case 27:
            var15 = var10.channel;
            var15 = var17.bind(var18)(var16, var15);
            var15 = var15.nick;
            var1['username'] = var15;
            var1 = var13.bind(var14)(var4, var1);
            var11['content'] = var1;
case 25:
            var1 = var11.attachments;
            if(!(var9 != var1)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var1 = var11.attachments;
            var1 = var1.length;
            if(!(!(var1 > var3))) { _fun0002_ip = 31; continue _fun0002 }
case 29:
            var1 = var11.embeds;
            if(!(var9 != var1)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var1 = var11.embeds;
            var1 = var1.length;
            if(!(!(var1 > var3))) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var4 = _closure1_slot5;
            var3 = _closure1_slot8;
            var1 = {};
            var1['message'] = var11;
            var14 = var10.guild;
            var15 = var9 == var14;
            var13 = undefined;
            if(var15) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var13 = var14.id;
case 34:
            var1['guildId'] = var13;
            var1['title'] = var8;
            var1['labelStyle'] = var7;
            var1['accessoryLabelNode'] = var6;
            var1['onReactionPress'] = var12;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 36; continue _fun0002;
case 31:
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var2['message'] = var11;
            var10 = var10.guild;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var9 = var10.id;
case 37:
            var2['guildId'] = var9;
            var2['title'] = var8;
            var2['labelStyle'] = var7;
            var2['accessoryLabelNode'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();