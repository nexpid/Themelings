// app/modules/in_app_notifications/native/MessageNotification.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
            if(var5) { _fun0001_ip = 119; continue _fun0001 }
 113:
            var1 = var13.colorString;
 119:
            var5 = var10 != var1;
            var12 = undefined;
            if(!var5) { _fun0001_ip = 131; continue _fun0001 }
 128:
            var12 = var1;
 131:
            var1 = 'username';
            var5 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 144; continue _fun0001 }
 141:
            var5 = var12;
 144:
            var1 = var10 != var5;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 162; continue _fun0001 }
 153:
            var1 = {};
            var1['color'] = var5;
            var6 = var1;
 162:
            var1 = 'dot';
            var5 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 250; continue _fun0001 }
 172:
            var5 = undefined;
            if(!(var4 !== var12)) { _fun0001_ip = 250; continue _fun0001 }
 178:
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
            if(var14) { _fun0001_ip = 229; continue _fun0001 }
 223:
            var12 = var13.colorStrings;
 229:
            var1['colors'] = var12;
            var11 = var11.newContainerRoleDot;
            var1['containerStyles'] = var11;
            var5 = var7.bind(var4)(var3, var1);
 250:
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
            if(!var1) { _fun0001_ip = 331; continue _fun0001 }
 321:
            var3 = var2.interaction;
            var1 = var10 !== var3;
 331:
            if(!var1) { _fun0001_ip = 344; continue _fun0001 }
 334:
            var3 = var2.interaction;
            var1 = var4 !== var3;
 344:
            if(!var1) { _fun0001_ip = 357; continue _fun0001 }
 347:
            var3 = var2.activityInstance;
            var1 = var10 !== var3;
 357:
            if(!var1) { _fun0001_ip = 370; continue _fun0001 }
 360:
            var3 = var2.activityInstance;
            var1 = var4 !== var3;
 370:
            if(!var1) { _fun0001_ip = 498; continue _fun0001 }
 376:
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
            if(var17) { _fun0001_ip = 465; continue _fun0001 }
 460:
            var14 = var13.user;
 465:
            var13 = var9.channel;
            var13 = var15.bind(var16)(var14, var13);
            var13 = var13.nick;
            var1['username'] = var13;
            var1 = var11.bind(var12)(var3, var1);
            var2['content'] = var1;
 498:
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
            if(var15) { _fun0001_ip = 582; continue _fun0001 }
 577:
            var10 = var11.id;
 582:
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