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
 0:
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
            var8 = var8.spacing;
            var8 = var8.PX_32;
            var2['width'] = var8;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_32;
            var2['height'] = var3;
            var3 = 1;
            var5 = arg1;
            if(!var5) { _fun0001_ip = 129; continue _fun0001 }
 125:
            var3 = _closure1_slot8;
 129:
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
 0:
            var2 = arg1;
            var8 = var2.channel;
            var _closure2_slot0 = var8;
            var4 = var2.channelSelected;
            var3 = var2.hasUnreadMessages;
            var _closure2_slot1 = var3;
            var12 = var2.isStreaming;
            var3 = var2.muted;
            var7 = var2.ignored;
            var6 = var2.blocked;
            var10 = var2.status;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var2 = _closure1_slot10;
            if(var3) { _fun0002_ip = 82; continue _fun0002 }
 79:
            var3 = var7;
 82:
            if(var3) { _fun0002_ip = 88; continue _fun0002 }
 85:
            var3 = var6;
 88:
            if(!var3) { _fun0002_ip = 94; continue _fun0002 }
 91:
            var3 = !var4;
 94:
            var6 = var2.bind(var5)(var3);
            var3 = _closure1_slot4;
            var2 = var3.getId;
            var2 = var2.bind(var3)();
            _closure2_slot2 = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var7 = var4[var2];
            var14 = var3.bind(var5)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getTypingUsers;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var6 = var1;
                    for(var3 in var6)
 41:
                    {
 50:
                        var2 = var3;
                        var1 = _closure2_slot2;
                        if(var2 === var1) { _fun0003_ip = 41; continue _fun0003 }
 61:
                        var1 = true;
                        return var1;
                    }
 65:
                    var1 = false;
                    return var1;
                }
            };
            var11 = var13.bind(var14)(var11, var7);
            _closure2_slot3 = var11;
            var7 = var4[var2];
            var15 = var3.bind(var5)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot3;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure1_slot3;
                    var1 = var1.useReducedMotion;
                    var1 = !var1;
                    if(!var1) { _fun0004_ip = 36; continue _fun0004 }
 19:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 33; continue _fun0004 }
 29:
                    var2 = _closure2_slot1;
 33:
                    var1 = var2;
 36:
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var13, var7);
            var13 = var4[var2];
            var16 = var3.bind(var5)(var13);
            var15 = var16.useStateFromStores;
            var13 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getUser;
                    var5 = _closure2_slot0;
                    var1 = var5.isDM;
                    var6 = var1.bind(var5)();
                    var5 = true;
                    var1 = undefined;
                    if(!(var5 === var6)) { _fun0005_ip = 52; continue _fun0005 }
 38:
                    var5 = _closure2_slot0;
                    var4 = var5.getRecipientId;
                    var1 = var4.bind(var5)();
 52:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var16 = var15.bind(var16)(var14, var13);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var13 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isDM;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0006_ip = 58; continue _fun0006 }
 26:
                    var4 = _closure1_slot5;
                    var3 = var4.isMobileOnline;
                    var5 = _closure2_slot0;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
 58:
                    return var1;
                }
            };
            var15 = var3.bind(var4)(var2, var1);
            var1 = var8.isGroupDM;
            var1 = var1.bind(var8)();
            if(var1) { _fun0002_ip = 463; continue _fun0002 }
 304:
            var13 = null;
            var2 = var13 != var16;
            var1 = null;
            if(!var2) { _fun0002_ip = 461; continue _fun0002 }
 318:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var14 = 12;
            var2 = var2[var14];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['user'] = var16;
            var17 = var16.avatarDecoration;
            var2['avatarDecoration'] = var17;
            var2['guildId'] = var5;
            var2['isMobileOnline'] = var15;
            var15 = var16.isSystemUser;
            var15 = var15.bind(var16)();
            var13 = null;
            if(var15) { _fun0002_ip = 386; continue _fun0002 }
 383:
            var13 = var10;
 386:
            var2['status'] = var13;
            var2['streaming'] = var12;
            var12 = var6.avatar;
            var2['style'] = var12;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var12 = var13.bind(var5)(var12);
            var12 = var12.AvatarSizes;
            var12 = var12.REFRESH_MEDIUM_32;
            var2['size'] = var12;
            var2['animate'] = var7;
            var2['typing'] = var11;
            var11 = true;
            var2['autoStatusCutout'] = var11;
            var1 = var4.bind(var5)(var3, var2);
 461:
            _fun0002_ip = 550; continue _fun0002;
 463:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['status'] = var10;
            var10 = _closure1_slot0;
            var9 = 12;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.AvatarSizes;
            var9 = var9.REFRESH_MEDIUM_32;
            var2['size'] = var9;
            var2['channel'] = var8;
            var2['animate'] = var7;
            var6 = var6.avatar;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 550:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();