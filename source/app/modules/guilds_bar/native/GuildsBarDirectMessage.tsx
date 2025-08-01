// app/modules/guilds_bar/native/GuildsBarDirectMessage.tsx
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.GUILD_ITEM_SIZE;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['width'] = var11;
    var10['height'] = var11;
    var4['dm'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarDirectMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.channelId;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot10;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var2 = var5[var1];
            var7 = var6.bind(var4)(var2);
            var2 = var7.useGuildsBarAnimatedWrapperStyles;
            var9 = true;
            var15 = var2.bind(var7)(var9, var9);
            var2 = 10;
            var7 = var5[var2];
            var12 = var6.bind(var4)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getMentionCountForPrivateChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = var1.count;
                return var1;
            };
            var12 = var11.bind(var12)(var8, var7);
            var _closure2_slot1 = var12;
            var2 = var5[var2];
            var8 = var6.bind(var4)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var6 = new Array(3);
            var6[0] = var2;
            var2 = _closure1_slot7;
            var6[1] = var2;
            var2 = _closure1_slot6;
            var6[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    var3 = var2 == var4;
                    var6 = undefined;
                    var8 = undefined;
                    if(var3) { _fun0002_ip = 42; continue _fun0002 }
 37:
                    var8 = var4.type;
 42:
                    var3 = _closure1_slot8;
                    var5 = var3.DM;
                    var3 = undefined;
                    if(!(var8 === var5)) { _fun0002_ip = 83; continue _fun0002 }
 58:
                    var9 = _closure1_slot7;
                    var8 = var9.getUser;
                    var5 = var4.getRecipientId;
                    var5 = var5.bind(var4)();
                    var3 = var8.bind(var9)(var5);
 83:
                    if(!(var2 == var4)) { _fun0002_ip = 144; continue _fun0002 }
 87:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 12;
                    var5 = var10[var2];
                    var5 = var9.bind(var6)(var5);
                    var8 = var5.intl;
                    var5 = var8.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.zLZPmp;
                    var2 = var5.bind(var8)(var2);
                    _fun0002_ip = 195; continue _fun0002;
 144:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 11;
                    var1 = var8[var1];
                    var5 = var5.bind(var6)(var1);
                    var1 = {};
                    var1['channel'] = var4;
                    var7 = _closure2_slot1;
                    var8 = 0;
                    var8 = var7 > var8;
                    var1['unread'] = var8;
                    var1['mentionCount'] = var7;
                    var2 = var5.bind(var6)(var1);
 195:
                    var1 = {};
                    var1['channel'] = var4;
                    var1['dmRecipient'] = var3;
                    var1['label'] = var2;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var6, var2);
            var11 = var2.channel;
            var _closure2_slot2 = var11;
            var8 = var2.dmRecipient;
            var _closure2_slot3 = var8;
            var14 = var2.label;
            var2 = _closure1_slot1;
            var6 = 13;
            var6 = var5[var6];
            var7 = var2.bind(var4)(var6);
            var6 = {};
            var6['mentionCount'] = var12;
            var7 = var7.bind(var4)(var6);
            var6 = var7.badge;
            var7 = var7.cutouts;
            var17 = _closure1_slot3;
            var16 = var17.useMemo;
            var12 = new Array(2);
            var12[0] = var11;
            var12[1] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var1;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var2) { _fun0003_ip = 70; continue _fun0003 }
 20:
                    var6 = _closure2_slot2;
                    var2 = var6.isDM;
                    var2 = var2.bind(var6)();
                    var1 = undefined;
                    if(!var2) { _fun0003_ip = 70; continue _fun0003 }
 39:
                    var2 = _closure2_slot3;
                    var4 = var4 == var2;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 67; continue _fun0003 }
 52:
                    var4 = _closure2_slot3;
                    var3 = var4.getAvatarSource;
                    var2 = var3.bind(var4)(var5);
 67:
                    var1 = var2;
 70:
                    return var1;
                }
            };
            var12 = var16.bind(var17)(var8, var12);
            var16 = var17.useMemo;
            var8 = new Array(1);
            var8[0] = var11;
            var3 = function() {
                var1 = {};
                var3 = function onPress() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 58; continue _fun0004 }
 13:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 14;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.transitionToChannel;
                        var1 = _closure2_slot2;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
 58:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onPress'] = var3;
                var2 = function onLongPress() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 58; continue _fun0005 }
 13:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.openChannelLongPressActionSheet;
                        var1 = _closure2_slot2;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
 58:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onLongPress'] = var2;
                return var1;
            };
            var8 = var16.bind(var17)(var3, var8);
            var3 = _closure1_slot9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'selected': false, 'circle': null, 'unread': true};
            var5 = null;
            var16 = var5 != var11;
            if(!var16) { _fun0001_ip = 333; continue _fun0001 }
 323:
            var17 = var11.isMultiUserDM;
            var16 = var17.bind(var11)();
 333:
            var16 = !var16;
            var1['circle'] = var16;
            var1['styles'] = var15;
            var1['label'] = var14;
            var1['overState'] = var4;
            var1['config'] = var8;
            var1['cutouts'] = var7;
            var1['externalChildren'] = var6;
            if(!(var5 != var11)) { _fun0001_ip = 387; continue _fun0001 }
 374:
            var6 = var11.isMultiUserDM;
            var6 = var6.bind(var11)();
            if(var6) { _fun0001_ip = 444; continue _fun0001 }
 387:
            var6 = var5 != var12;
            var5 = null;
            if(!var6) { _fun0001_ip = 442; continue _fun0001 }
 396:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 18;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var13 = var13.dm;
            var6['style'] = var13;
            var6['source'] = var12;
            var5 = var8.bind(var4)(var7, var6);
 442:
            _fun0001_ip = 543; continue _fun0001;
 444:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 16;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['channel'] = var11;
            var11 = _closure1_slot0;
            var10 = 17;
            var13 = var12[var10];
            var13 = var11.bind(var4)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.LARGE_48;
            var6['size'] = var13;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.REFRESH_MEDIUM_32;
            var6['pileSizeOverride'] = var10;
            var6['animate'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 543:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarDirectMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();