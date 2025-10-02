// app/modules/launchpad/native/LaunchPadSearchResultUser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function UserResult(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var25 = var2.user;
            var _closure2_slot0 = var25;
            var20 = var2.comparator;
            var28 = var2.channel;
            var27 = var2.lastMessage;
            var19 = var2.unread;
            var3 = undefined;
            if(!(var19 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = false;
case 2:
            var17 = var2.mentionCount;
            if(!(var17 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var17 = 0;
case 4:
            var18 = var2.muted;
            if(!(var18 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var18 = false;
case 6:
            var23 = var2.isTyping;
            if(!(var23 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var23 = false;
case 8:
            var2 = _closure1_slot15;
            var6 = var2.bind(var3)();
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var29 = var2.bind(var3)();
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var2 = var25.id;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openPrivateChannel;
                var2 = {};
                var5 = _closure2_slot0;
                var6 = var5.id;
                var5 = new Array(1);
                var5[0] = var6;
                var2['recipientIds'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var7.bind(var8)(var2, var4);
            var4 = _closure1_slot0;
            var2 = 14;
            var2 = var5[var2];
            var8 = var4.bind(var3)(var2);
            var2 = var8.useFontScale;
            var9 = var2.bind(var8)();
            var2 = 15;
            var8 = var5[var2];
            var12 = var4.bind(var3)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var1 = _closure1_slot5;
                var1 = var1.locale;
                return var1;
            };
            var16 = var11.bind(var12)(var10, var8);
            var8 = var5[var2];
            var12 = var4.bind(var3)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var26 = var11.bind(var12)(var10, var8);
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.useStateFromStoresObject;
            var8 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var1 = {};
                var6 = _closure1_slot7;
                var5 = var6.isMobileOnline;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['isMobileOnline'] = var4;
                var6 = _closure1_slot7;
                var5 = var6.getStatus;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['status'] = var4;
                var4 = _closure1_slot7;
                var3 = var4.getActivities;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['activities'] = var2;
                return var1;
            };
            var1 = var4.bind(var5)(var2, var1);
            var30 = var1.isMobileOnline;
            var32 = var1.status;
            var31 = var1.activities;
            var21 = null;
            var1 = var21 != var27;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var5 = var2.bind(var3)(var1);
            var2 = var5.extractTimestamp;
            var1 = var27.id;
            var4 = var2.bind(var5)(var1);
case 10:
            var1 = var21 != var4;
            var15 = null;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var1 = var5[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.getRelativeTimestamp;
            var15 = var1.bind(var2)(var4);
case 12:
            var1 = 'text-muted';
            var24 = var1;
            if(!var19) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var24 = var1;
            if(var18) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var24 = 'text-normal';
case 14:
            var13 = _closure1_slot1;
            var33 = _closure1_slot2;
            var1 = 18;
            var1 = var33[var1];
            var2 = var13.bind(var3)(var1);
            var5 = _closure1_slot12;
            var4 = _closure1_slot0;
            var1 = 19;
            var1 = var33[var1];
            var1 = var4.bind(var3)(var1);
            var4 = var1.PressableHighlight;
            var1 = {};
            var1['onPress'] = var7;
            var7 = var6.pressableUnderlayColor;
            var7 = var7.backgroundColor;
            var1['underlayColor'] = var7;
            var7 = var6.pressable;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var8 = var29.container;
            var8 = var8.borderRadius;
            var7['borderRadius'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var6 = 20;
            var6 = var33[var6];
            var8 = var13.bind(var3)(var6);
            var10 = _closure1_slot14;
            var7 = _closure1_slot13;
            var6 = {};
            var22 = _closure1_slot12;
            var11 = 21;
            var11 = var33[var11];
            var12 = var13.bind(var3)(var11);
            var11 = {};
            var11['unread'] = var19;
            var34 = _closure1_slot11;
            var34 = var34.ALL_MESSAGES;
            var11['resolvedUnreadSetting'] = var34;
            var12 = var22.bind(var3)(var12, var11);
            var11 = new Array(3);
            var11[0] = var12;
            var22 = _closure1_slot12;
            var12 = 22;
            var12 = var33[var12];
            var13 = var13.bind(var3)(var12);
            var12 = {};
            var12['user'] = var25;
            var12['guildId'] = var3;
            var12['isMobileOnline'] = var30;
            var30 = var25.isSystemUser;
            var33 = var30.bind(var25)();
            var30 = null;
            if(var33) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var33 = _closure1_slot10;
            var33 = var33.OFFLINE;
            var30 = null;
            if(!(var32 !== var33)) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var30 = var32;
case 17:
            var12['status'] = var30;
            var32 = _closure1_slot1;
            var33 = _closure1_slot2;
            var30 = 23;
            var30 = var33[var30];
            var30 = var32.bind(var3)(var30);
            var30 = var30.bind(var3)(var31);
            var12['streaming'] = var30;
            var30 = var29.icon;
            var30 = var30.margin;
            var12['style'] = var30;
            var29 = var29.icon;
            var29 = var29.avatarSize;
            var12['size'] = var29;
            var26 = !var26;
            if(!var26) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var29 = var23;
            if(var29) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var29 = var19;
case 22:
            var26 = var29;
case 20:
            var12['animate'] = var26;
            var12['typing'] = var23;
            var23 = true;
            var12['autoStatusCutout'] = var23;
            var12 = var22.bind(var3)(var13, var12);
            var11[1] = var12;
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var12 = 24;
            var12 = var22[var12];
            var13 = var13.bind(var3)(var12);
            var12 = {};
            if(!(var21 == var20)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var23 = _closure1_slot1;
            var26 = _closure1_slot2;
            var22 = 25;
            var22 = var26[var22];
            var23 = var23.bind(var3)(var22);
            var22 = var23.getUserTag;
            var20 = var22.bind(var23)(var25);
case 24:
            var12['name'] = var20;
            var22 = var21 != var27;
            var20 = undefined;
            if(!var22) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var21 = var21 != var28;
            var20 = undefined;
            if(!var21) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var23 = _closure1_slot12;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = 26;
            var21 = var26[var21];
            var21 = var25.bind(var3)(var21);
            var22 = var21.PrivateChannelRowPreview;
            var21 = {};
            var21['channel'] = var28;
            var21['message'] = var27;
            var21['color'] = var24;
            var21['muted'] = var18;
            var24 = 27;
            var24 = var26[var24];
            var24 = var25.bind(var3)(var24);
            var24 = var24.ChannelListLayoutTypes;
            var24 = var24.COMPACT;
            var21['layout'] = var24;
            var20 = var23.bind(var3)(var22, var21);
case 26:
            var12['subtitle'] = var20;
            var12['unread'] = var19;
            var19 = _closure1_slot11;
            var19 = var19.ALL_MESSAGES;
            var12['resolvedUnreadSetting'] = var19;
            var12['muted'] = var18;
            var12['lastMessageTimestampString'] = var15;
            var12['mentionCount'] = var17;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var14 = 28;
            var14 = var18[var14];
            var15 = var15.bind(var3)(var14);
            var14 = {};
            var14['mentionCount'] = var17;
            var14['locale'] = var16;
            var14 = var15.bind(var3)(var14);
            var12['mentionBadge'] = var14;
            var12 = var13.bind(var3)(var12);
            var11[2] = var12;
            var6['children'] = var11;
            var7 = var10.bind(var3)(var7, var6);
            var6 = {};
            var6['fontScale'] = var9;
            var6 = var8.bind(var3)(var7, var6);
            var1['children'] = var6;
            var1 = var5.bind(var3)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function UserResultWithChannel(arg1) {
        var5 = arg1;
        var1 = var5.user;
        var _closure2_slot0 = var1;
        var11 = var5.channel;
        var _closure2_slot1 = var11;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 15;
        var7 = var10[var3];
        var4 = undefined;
        var12 = var6.bind(var4)(var7);
        var9 = var12.useStateFromStores;
        var7 = _closure1_slot9;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var4 = _closure1_slot9;
            var3 = var4.isChannelMuted;
            var1 = _closure2_slot1;
            var2 = var1.id;
            var1 = undefined;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var7 = var9.bind(var12)(var8, var7);
        var8 = 29;
        var8 = var10[var8];
        var9 = var6.bind(var4)(var8);
        var8 = var9.useBaseChannelUnreadBadgeState;
        var8 = var8.bind(var9)(var11, var7);
        var9 = var8.unread;
        var8 = var8.mentionCount;
        var3 = var10[var3];
        var12 = var6.bind(var4)(var3);
        var6 = var12.useStateFromStores;
        var13 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var13;
        var2 = function() {
            var4 = _closure1_slot8;
            var3 = var4.isTyping;
            var2 = _closure2_slot1;
            var2 = var2.id;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var6.bind(var12)(var3, var2);
        var3 = _closure1_slot1;
        var2 = 30;
        var2 = var10[var2];
        var2 = var3.bind(var4)(var2);
        var10 = var2.bind(var4)(var11, var9);
        var3 = _closure1_slot12;
        var2 = _closure1_slot16;
        var1 = {};
        var15 = var1;
        var14 = var5;
        var5 = copyDataProperties(var15, var14);
        var5 = 'channel';
        var1[var5] = var11;
        var5 = 'lastMessage';
        var1[var5] = var10;
        var5 = 'unread';
        var1[var5] = var9;
        var5 = 'mentionCount';
        var1[var5] = var8;
        var5 = 'muted';
        var1[var5] = var7;
        var5 = 'isTyping';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var11 = 1;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var8 = var4.Fragment;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['pressable'] = var10;
    var10 = {};
    var11 = 11;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACTIVE;
    var10['backgroundColor'] = var11;
    var4['pressableUnderlayColor'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var2 = var6.user;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 15;
            var8 = var7[var3];
            var5 = undefined;
            var12 = var4.bind(var5)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var8;
            var9 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getDMFromUserId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var11.bind(var12)(var10, var9);
            var _closure2_slot1 = var9;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var7)(var3, var1);
            var1 = null;
            if(!(var1 == var7)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var4 = _closure1_slot12;
            var3 = _closure1_slot16;
            var1 = {};
            var14 = var1;
            var13 = var6;
            var8 = copyDataProperties(var14, var13);
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 31; continue _fun0002;
case 29:
            var4 = _closure1_slot12;
            var3 = _closure1_slot17;
            var2 = {};
            var14 = var2;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var6 = 'channel';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/LaunchPadSearchResultUser.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();