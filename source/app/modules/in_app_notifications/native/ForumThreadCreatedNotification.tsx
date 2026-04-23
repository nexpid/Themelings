// app/modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumThreadCreatedNotification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.notification;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var9 = var1.thread;
            var _closure2_slot0 = var9;
            var10 = var1.threadCreator;
            var15 = var1.parentChannel;
            var _closure2_slot1 = var15;
            var14 = var1.guild;
            var _closure2_slot2 = var14;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 2;
            var3 = var3[var7];
            var3 = var5.bind(var4)(var3);
            var16 = var3.bind(var4)(var15);
            var3 = null;
            if(!(var3 == var16)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 3;
            var6 = var12[var5];
            var6 = var11.bind(var4)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5["/YzI63"];
            var16 = var6.bind(var8)(var5);
case 2:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var6.bind(var4)(var5);
            var11 = var5.bind(var4)(var9);
            if(!(var3 == var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var5 = var8[var3];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3["/YzI63"];
            var11 = var5.bind(var6)(var3);
case 4:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 3;
            var5 = var13[var3];
            var5 = var12.bind(var4)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var13[var3];
            var5 = var12.bind(var4)(var5);
            var5 = var5.t;
            var6 = var5["2IGVl5"];
            var5 = {};
            var5['channelName'] = var16;
            var16 = var14.name;
            var5['guildName'] = var16;
            var8 = var7.bind(var8)(var6, var5);
            _closure2_slot3 = var8;
            var5 = var13[var3];
            var5 = var12.bind(var4)(var5);
            var7 = var5.intl;
            var6 = var7.formatToPlainString;
            var3 = var13[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.jPhTvT;
            var3 = {};
            var3['channelName'] = var11;
            var11 = var10.toString;
            var11 = var11.bind(var10)();
            var3['userUsername'] = var11;
            var6 = var6.bind(var7)(var5, var3);
            var3 = 4;
            var3 = var13[var3];
            var7 = var12.bind(var4)(var3);
            var5 = var7.useInAppNotificationRedesign;
            var3 = 'ForumThreadCreatedNotification';
            var3 = var5.bind(var7)(var3);
            var16 = var3.redesignEnabled;
            _closure2_slot4 = var16;
            var3 = 5;
            var3 = var13[var3];
            var5 = var12.bind(var4)(var3);
            var3 = var5.getUserAuthor;
            var11 = var3.bind(var5)(var10, var9);
            _closure2_slot5 = var11;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var3 = new Array(6);
            var3[0] = var16;
            var3[1] = var9;
            var3[2] = var15;
            var3[3] = var14;
            var3[4] = var11;
            var3[5] = var8;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = {};
                    var2 = 'simple';
                    var1['type'] = var2;
                    var2 = _closure2_slot3;
                    var1['text'] = var2;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var2 = {};
                    var4 = 'message';
                    var2['type'] = var4;
                    var4 = _closure2_slot0;
                    var2['channel'] = var4;
                    var4 = _closure2_slot1;
                    var2['parentChannel'] = var4;
                    var4 = _closure2_slot2;
                    var2['guild'] = var4;
                    var3 = _closure2_slot5;
                    var2['author'] = var3;
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot4;
            var1 = 6;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var11 = 7;
            var7 = var13[var11];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Avatar;
            var7 = {};
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.AvatarSizes;
            var11 = var11.NORMAL;
            var7['size'] = var11;
            var7['user'] = var10;
            var9 = var9.guild_id;
            var7['guildId'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var1['icon'] = var7;
            var1['textChildren'] = var6;
            var1['header'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();