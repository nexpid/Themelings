// app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MUTED_OPACITY_CONTENT;
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
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {};
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 9;
            var8 = var7[var3];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var8 = var7[var3];
            var8 = var6.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['marginRight'] = var8;
            var8 = var7[var3];
            var8 = var6.bind(var5)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE;
            var2['width'] = var8;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE;
            var2['height'] = var3;
            var3 = 1;
            var5 = arg1;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot8;
case 2:
            var2['opacity'] = var3;
            var1['avatar'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function MessagesItemChannelAvatar(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var8 = var2.channel;
            var _closure2_slot0 = var8;
            var7 = var2.channelSelected;
            var3 = var2.hasUnreadMessages;
            var _closure2_slot1 = var3;
            var13 = var2.isStreaming;
            var6 = var2.muted;
            var11 = var2.ignored;
            var9 = var2.blocked;
            var10 = var2.status;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 10;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = 'MessagesItemChannelAvatar';
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot10;
            if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = var11;
case 4:
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var9;
case 6:
            if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = !var7;
case 8:
            var6 = var3.bind(var5)(var6);
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = 11;
            var3 = var3[var18];
            var3 = var7.bind(var5)(var3);
            var3 = var3.AvatarSizes;
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = var3.REFRESH_MEDIUM_32;
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var9 = var3.NORMAL;
case 12:
            var4 = _closure1_slot4;
            var3 = var4.getId;
            var3 = var3.bind(var4)();
            _closure2_slot2 = var3;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 12;
            var7 = var11[var3];
            var15 = var4.bind(var5)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getTypingUsers;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var6 = var1;
                    for(var3 in var6)
case 13:
                    {
case 14:
                        var2 = var3;
                        var1 = _closure2_slot2;
                        if(var2 === var1) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                        var1 = true;
                        return var1;
                    }
case 16:
                    var1 = false;
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var12, var7);
            _closure2_slot3 = var12;
            var7 = var11[var3];
            var16 = var4.bind(var5)(var7);
            var15 = var16.useStateFromStores;
            var7 = _closure1_slot3;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure1_slot3;
                    var1 = var1.useReducedMotion;
                    var1 = !var1;
                    if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var2 = _closure2_slot1;
case 19:
                    var1 = var2;
case 17:
                    return var1;
                }
            };
            var7 = var15.bind(var16)(var14, var7);
            var14 = var11[var3];
            var17 = var4.bind(var5)(var14);
            var16 = var17.useStateFromStores;
            var14 = _closure1_slot7;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getUser;
                    var5 = _closure2_slot0;
                    var1 = var5.isDM;
                    var6 = var1.bind(var5)();
                    var5 = true;
                    var1 = undefined;
                    if(!(var5 === var6)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var5 = _closure2_slot0;
                    var4 = var5.getRecipientId;
                    var1 = var4.bind(var5)();
case 21:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var16 = var16.bind(var17)(var15, var14);
            var14 = var11[var3];
            var20 = var4.bind(var5)(var14);
            var19 = var20.useStateFromStores;
            var14 = _closure1_slot5;
            var17 = new Array(1);
            var17[0] = var14;
            var15 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isDM;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var4 = _closure1_slot5;
                    var3 = var4.isMobileOnline;
                    var5 = _closure2_slot0;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
case 23:
                    return var1;
                }
            };
            var17 = var19.bind(var20)(var17, var15);
            var3 = var11[var3];
            var11 = var4.bind(var5)(var3);
            var4 = var11.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var14;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isDM;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var4 = _closure1_slot5;
                    var3 = var4.isVROnline;
                    var5 = _closure2_slot0;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
case 23:
                    return var1;
                }
            };
            var15 = var4.bind(var11)(var3, var1);
            var1 = var8.isGroupDM;
            var1 = var1.bind(var8)();
            if(var1) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var14 = null;
            var3 = var14 != var16;
            var1 = null;
            if(!var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var11 = _closure1_slot9;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var18];
            var3 = var4.bind(var5)(var3);
            var4 = var3.Avatar;
            var3 = {};
            var3['user'] = var16;
            var18 = var16.avatarDecoration;
            var3['avatarDecoration'] = var18;
            var3['guildId'] = var5;
            var3['isMobileOnline'] = var17;
            var3['isVROnline'] = var15;
            var15 = var16.isSystemUser;
            var15 = var15.bind(var16)();
            var14 = null;
            if(var15) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var14 = var10;
case 29:
            var3['status'] = var14;
            var3['streaming'] = var13;
            var13 = var6.avatar;
            var3['style'] = var13;
            var3['size'] = var9;
            var3['animate'] = var7;
            var3['typing'] = var12;
            var12 = true;
            var3['autoStatusCutout'] = var12;
            var1 = var11.bind(var5)(var4, var3);
case 27:
            _fun0002_ip = 31; continue _fun0002;
case 25:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 13;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['status'] = var10;
            var2['size'] = var9;
            var2['channel'] = var8;
            var2['animate'] = var7;
            var6 = var6.avatar;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();