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
 0:
            var1 = arg1;
            var9 = var1.notification;
            var1 = _closure1_slot6;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = var9.message;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var15 = 5;
            var1 = var5[var15];
            var6 = var3.bind(var4)(var1);
            var1 = var6.useNullableMessageAuthor;
            var13 = var1.bind(var6)(var2);
            var1 = 6;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = var5.bind(var6)(var3, var1);
            var10 = null;
            var5 = var10 == var13;
            var1 = undefined;
            if(var5) { _fun0001_ip = 117; continue _fun0001 }
 111:
            var1 = var13.colorString;
 117:
            var5 = var10 != var1;
            var12 = undefined;
            if(!var5) { _fun0001_ip = 129; continue _fun0001 }
 126:
            var12 = var1;
 129:
            var1 = 'username';
            var5 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 142; continue _fun0001 }
 139:
            var5 = var12;
 142:
            var1 = var10 != var5;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 160; continue _fun0001 }
 151:
            var1 = {};
            var1['color'] = var5;
            var6 = var1;
 160:
            var1 = 'dot';
            var5 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 248; continue _fun0001 }
 170:
            var5 = undefined;
            if(!(var4 !== var12)) { _fun0001_ip = 248; continue _fun0001 }
 176:
            var7 = _closure1_slot5;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 7;
            var1 = var14[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.RoleDot;
            var1 = {};
            var1['color'] = var12;
            var14 = var10 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 227; continue _fun0001 }
 221:
            var12 = var13.colorStrings;
 227:
            var1['colors'] = var12;
            var11 = var11.newContainerRoleDot;
            var1['containerStyles'] = var11;
            var5 = var7.bind(var4)(var3, var1);
 248:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var12 = var3.bind(var4)(var1);
            var11 = var12.getNotificationTitle;
            var21 = var9.channel;
            var19 = var9.parentChannel;
            var18 = var9.guild;
            var22 = var12;
            var20 = var13;
            var7 = var22[var11](var21, var20, var19, var18, var17);
            var1 = var2.content;
            var3 = var1.length;
            var1 = 0;
            var1 = var1 === var3;
            if(!var1) { _fun0001_ip = 329; continue _fun0001 }
 319:
            var3 = var2.interaction;
            var1 = var10 !== var3;
 329:
            if(!var1) { _fun0001_ip = 342; continue _fun0001 }
 332:
            var3 = var2.interaction;
            var1 = var4 !== var3;
 342:
            if(!var1) { _fun0001_ip = 355; continue _fun0001 }
 345:
            var3 = var2.activityInstance;
            var1 = var10 !== var3;
 355:
            if(!var1) { _fun0001_ip = 368; continue _fun0001 }
 358:
            var3 = var2.activityInstance;
            var1 = var4 !== var3;
 368:
            if(!var1) { _fun0001_ip = 496; continue _fun0001 }
 374:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var3 = var13[var1];
            var3 = var14.bind(var4)(var3);
            var12 = var3.intl;
            var11 = var12.formatToPlainString;
            var1 = var13[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.t;
            var3 = var1.7eikg4;
            var1 = {};
            var13 = var13[var15];
            var16 = var14.bind(var4)(var13);
            var15 = var16.getUserAuthor;
            var13 = var2.interaction;
            var17 = var10 == var13;
            var14 = undefined;
            if(var17) { _fun0001_ip = 463; continue _fun0001 }
 458:
            var14 = var13.user;
 463:
            var13 = var9.channel;
            var13 = var15.bind(var16)(var14, var13);
            var13 = var13.nick;
            var1['username'] = var13;
            var1 = var11.bind(var12)(var3, var1);
            var2['content'] = var1;
 496:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var12 = _closure1_slot1;
            var14 = 11;
            var11 = var11[var14];
            var13 = var12.bind(var4)(var11);
            var12 = {};
            var11 = var9.message;
            var11 = var11.author;
            var12['user'] = var11;
            var11 = var9.guild;
            var15 = var10 == var11;
            var10 = undefined;
            if(var15) { _fun0001_ip = 580; continue _fun0001 }
 575:
            var10 = var11.id;
 580:
            var12['guildId'] = var10;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var14 = var11[var14];
            var14 = var10.bind(var4)(var14);
            var14 = var14.AvatarSizes;
            var14 = var14.NORMAL;
            var12['size'] = var14;
            var12 = var3.bind(var4)(var13, var12);
            var1['icon'] = var12;
            var1['label'] = var7;
            var1['labelStyle'] = var6;
            var1['accessoryLabelNode'] = var5;
            var7 = _closure1_slot5;
            var5 = 12;
            var5 = var11[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.NotificationChannelRowPreview;
            var5 = {'channel': null, 'message': null, 'color': 'text-secondary', 'layout': null, 'muted': false, 'lineClamp': 2, 'context': 'notification'};
            var12 = var9.channel;
            var5['channel'] = var12;
            var9 = var9.message;
            var5['message'] = var9;
            var9 = 13;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.ChannelListLayoutTypes;
            var9 = var9.COZY;
            var5['layout'] = var9;
            var8 = _closure1_slot4;
            var5['maxHeight'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();