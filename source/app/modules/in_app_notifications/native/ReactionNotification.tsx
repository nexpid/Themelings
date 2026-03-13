// app/modules/in_app_notifications/native/ReactionNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var14 = 0;
        var7 = var6[var14];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var11 = 2;
        var4 = var6[var11];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var15 = 4;
        var4 = var6[var15];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
        var _closure1_slot9 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ChannelTypes;
        var _closure1_slot10 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot11 = var7;
        var7 = var4.Fragment;
        var _closure1_slot12 = var7;
        var4 = var4.jsxs;
        var _closure1_slot13 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.AVATAR_SIZE_MAP;
        var4 = 10;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.AvatarSizes;
        var4 = var4.NORMAL;
        var10 = var7[var4];
        var4 = 11;
        var7 = var6[var4];
        var9 = var5.bind(var1)(var7);
        var8 = var9.createStyles;
        var7 = {};
        var12 = {'paddingRight': 4, 'paddingTop': 0};
        var7['newContainerRoleDot'] = var12;
        var12 = {};
        var16 = 'column';
        var12['flexDirection'] = var16;
        var7['container'] = var12;
        var12 = {};
        var16 = 12;
        var12['fontSize'] = var16;
        var7['textEmoji'] = var12;
        var12 = {'height': 16, 'width': 16};
        var17 = var6[var16];
        var18 = var5.bind(var1)(var17);
        var17 = var18.isIOS;
        var18 = var17.bind(var18)();
        var17 = undefined;
        if(var18) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var19 = {};
        var19['translateY'] = var11;
        var18 = new Array(1);
        var18[0] = var19;
        var17 = var18;
case 2:
        var12['transform'] = var17;
        var7['imageEmoji'] = var12;
        var12 = {};
        var16 = var6[var16];
        var17 = var5.bind(var1)(var16);
        var16 = var17.isIOS;
        var16 = var16.bind(var17)();
        var14 = 0;
        if(!var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var14 = var15;
case 4:
        var12['marginBottom'] = var14;
        var7['notificationBodyText'] = var12;
        var7 = var8.bind(var9)(var7);
        var _closure1_slot14 = var7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
        var12 = 13;
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BACKGROUND_BRAND;
        var9['backgroundColor'] = var12;
        var9['width'] = var10;
        var9['height'] = var10;
        var10 = var10 / var11;
        var9['borderRadius'] = var10;
        var4['clydeNotificationIcon'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot15 = var4;
        var4 = function ReactorNotificationIcon(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var11 = var1.user;
                var9 = var1.guild;
                var1 = var1.isMilestone;
                var2 = _closure1_slot15;
                var5 = undefined;
                var7 = var2.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var8 = null;
                if(!(var8 == var11)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 15;
                var1 = var12[var4];
                var2 = var2.bind(var5)(var1);
                var1 = {};
                var1['guild'] = var9;
                var10 = _closure1_slot0;
                var4 = var12[var4];
                var4 = var10.bind(var5)(var4);
                var4 = var4.GuildIconSizes;
                var4 = var4.NORMAL;
                var1['size'] = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var4 = _closure1_slot11;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var10 = 10;
                var2 = var2[var10];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var2['user'] = var11;
                var11 = var8 == var9;
                var8 = undefined;
                if(var11) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var8 = var9.id;
case 11:
                var2['guildId'] = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var8 = var9.bind(var5)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.NORMAL;
                var2['size'] = var8;
                var1 = var4.bind(var5)(var3, var2);
case 10:
                _fun0002_ip = 13; continue _fun0002;
case 6:
                var4 = _closure1_slot11;
                var3 = _closure1_slot4;
                var2 = {};
                var7 = var7.clydeNotificationIcon;
                var2['style'] = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 14;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.ClydeIcon;
                var6 = {'color': 'white', 'size': 'md'};
                var6 = var4.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 13:
                return var1;
            }
        };
        var _closure1_slot16 = var4;
        var4 = 31;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/in_app_notifications/native/ReactionNotification.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var1 = var1.notification;
                var4 = undefined;
                var _closure2_slot7 = var4;
                var2 = _closure1_slot14;
                var8 = var2.bind(var4)();
                var _closure2_slot0 = var8;
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var2 = var3[var2];
                var2 = var9.bind(var4)(var2);
                var6 = var2.AnimateEmoji;
                var2 = var6.useSetting;
                var16 = var2.bind(var6)();
                var _closure2_slot1 = var16;
                var15 = var1.user;
                var23 = var1.channel;
                var _closure2_slot2 = var23;
                var14 = var1.guild;
                var _closure2_slot3 = var14;
                var10 = var1.parentChannel;
                var _closure2_slot4 = var10;
                var6 = var1.reaction;
                var _closure2_slot5 = var6;
                var11 = var23.type;
                var2 = _closure1_slot10;
                var2 = var2.GUILD_ANNOUNCEMENT;
                var2 = var11 === var2;
                var13 = _closure1_slot6;
                var28 = var1.message;
                var12 = var13.prototype;
                var12 = Object.create(var12, {constructor: {value: var13}});
                var29 = var12;
                var11 = new var29[var13](var28, var27);
                var19 = var11 instanceof Object ? var11 : var12;
                var _closure2_slot6 = var19;
                var1 = var1.message;
                var17 = var1.content;
                var1 = 17;
                var3 = var3[var1];
                var13 = var9.bind(var4)(var3);
                var12 = var13.isReactionMilestoneNotification;
                var11 = var19.reactions;
                var3 = null;
                var18 = var3 == var23;
                var9 = undefined;
                if(var18) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var9 = var23.type;
case 14:
                var13 = var12.bind(var13)(var11, var9);
                var12 = _closure1_slot3;
                var11 = var12.useCallback;
                var9 = new Array(4);
                var9[0] = var16;
                var9[1] = var6;
                var6 = var8.imageEmoji;
                var9[2] = var6;
                var6 = var8.textEmoji;
                var9[3] = var6;
                var6 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var1 = null;
                        var4 = var1 == var3;
                        var6 = undefined;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.name;
case 16:
                        if(!(var1 != var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.name;
case 20:
                        if(!(var1 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.id;
case 24:
                        if(!(var1 != var3)) { _fun0004_ip = 26; continue _fun0004 }
case 22:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.id;
case 27:
                        var3 = var1 != var3;
                        var7 = undefined;
                        if(!var3) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 18;
                        var3 = var5[var3];
                        var5 = var4.bind(var6)(var3);
                        var4 = var5.getEmojiURL;
                        var3 = {};
                        var9 = _closure2_slot5;
                        var9 = var9.emoji;
                        var9 = var9.id;
                        var3['id'] = var9;
                        var9 = _closure2_slot1;
                        if(!var9) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var10 = _closure2_slot5;
                        var10 = var10.emoji;
                        var9 = var10.animated;
case 31:
                        var3['animated'] = var9;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 19;
                        var8 = var10[var8];
                        var8 = var9.bind(var6)(var8);
                        var8 = var8.DEFAULT_EMOJI_SIZE;
                        var3['size'] = var8;
                        var7 = var4.bind(var5)(var3);
case 29:
                        var5 = _closure1_slot11;
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 20;
                        var3 = var8[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = {};
                        var8 = _closure2_slot0;
                        var9 = var8.textEmoji;
                        var3['textEmojiStyle'] = var9;
                        var8 = var8.imageEmoji;
                        var3['fastImageStyle'] = var8;
                        var3['src'] = var7;
                        var7 = _closure2_slot5;
                        var7 = var7.emoji;
                        var7 = var7.name;
                        var3['name'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var3;
case 26:
                        var2 = _closure2_slot5;
                        var2 = var2.emoji;
                        var2 = var2.name;
                        return var2;
case 18:
                        return var1;
                    }
                };
                var16 = var11.bind(var12)(var6, var9);
                var11 = var12.useMemo;
                var6 = var19.reactions;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.sumBy;
                    var1 = _closure2_slot6;
                    var2 = var1.reactions;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var5 = var1.count_details;
                            var4 = null;
                            var1 = var4 == var5;
                            var6 = undefined;
                            if(var1) { _fun0005_ip = 33; continue _fun0005 }
case 17:
                            var6 = var5.burst;
case 33:
                            var7 = var4 != var6;
                            var1 = 0;
                            if(!var7) { _fun0005_ip = 7; continue _fun0005 }
case 16:
                            var1 = var6;
case 7:
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                            var3 = var5.normal;
case 34:
                            var4 = var4 != var3;
                            var2 = 0;
                            if(!var4) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                            var2 = var3;
case 36:
                            var1 = var1 + var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var18 = var11.bind(var12)(var6, var9);
                if(!var2) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                var6 = 1;
                var2 = var6 !== var18;
case 38:
                var22 = null;
                if(var2) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                var22 = null;
                if(var13) { _fun0003_ip = 40; continue _fun0003 }
case 42:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 22;
                var6 = var11[var6];
                var9 = var9.bind(var4)(var6);
                var6 = var9.getUserAuthor;
                var22 = var6.bind(var9)(var15, var23);
case 40:
                _closure2_slot7 = var22;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var21 = 23;
                var6 = var6[var21];
                var12 = var9.bind(var4)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() {
                    var1 = _closure1_slot5;
                    var1 = var1.roleStyle;
                    return var1;
                };
                var12 = var11.bind(var12)(var9, var6);
                var9 = var3 == var22;
                var6 = undefined;
                if(var9) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var6 = var22.colorString;
case 43:
                var9 = var3 != var6;
                var24 = undefined;
                if(!var9) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var24 = var6;
case 45:
                var6 = 'username';
                var11 = undefined;
                if(!(var6 === var12)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var11 = var24;
case 47:
                var6 = var3 != var11;
                var9 = undefined;
                if(!var6) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                var6 = {};
                var6['color'] = var11;
                var9 = var6;
case 49:
                var11 = 'dot';
                var6 = undefined;
                if(!(var11 === var12)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                var6 = undefined;
                if(!(var4 !== var24)) { _fun0003_ip = 51; continue _fun0003 }
case 53:
                var20 = _closure1_slot11;
                var12 = _closure1_slot0;
                var25 = _closure1_slot2;
                var11 = 24;
                var11 = var25[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.RoleDot;
                var11 = {};
                var11['color'] = var24;
                var24 = var3 == var22;
                var25 = undefined;
                if(var24) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var25 = var22.colorStrings;
case 54:
                var26 = var3 != var25;
                var24 = null;
                if(!var26) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var24 = var25;
case 56:
                var11['colors'] = var24;
                var24 = var8.newContainerRoleDot;
                var11['containerStyles'] = var24;
                var6 = var20.bind(var4)(var12, var11);
case 51:
                var20 = _closure1_slot3;
                var12 = var20.useMemo;
                var11 = new Array(4);
                var11[0] = var22;
                var11[1] = var23;
                var11[2] = var14;
                var11[3] = var10;
                var10 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 25;
                        var2 = var4[var2];
                        var5 = undefined;
                        var9 = var3.bind(var5)(var2);
                        var8 = var9.computeChannelName;
                        var13 = _closure2_slot2;
                        var12 = _closure1_slot8;
                        var11 = _closure1_slot7;
                        var10 = true;
                        var14 = var9;
                        var6 = var14[var8](var13, var12, var11, var10, var9);
                        var3 = _closure2_slot7;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0006_ip = 58; continue _fun0006 }
case 36:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 17;
                        var1 = var7[var1];
                        var9 = var3.bind(var5)(var1);
                        var8 = var9.getNotificationTitle;
                        var13 = _closure2_slot2;
                        var12 = _closure2_slot7;
                        var11 = _closure2_slot4;
                        var10 = _closure2_slot3;
                        var14 = var9;
                        var1 = var14[var8](var13, var12, var11, var10, var9);
                        _fun0006_ip = 59; continue _fun0006;
case 58:
                        var3 = _closure2_slot3;
                        var3 = var4 != var3;
                        var5 = '';
                        var4 = var5;
                        if(!var3) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                        var2 = _closure2_slot3;
                        var7 = var2.name;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = ', ';
                        var4 = var3.bind(var2)(var7);
case 60:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = ' ';
                        var1 = var3.bind(var5)(var6, var2, var4);
case 59:
                        return var1;
                    }
                };
                var10 = var12.bind(var20)(var10, var11);
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var20 = 22;
                var20 = var11[var20];
                var24 = var12.bind(var4)(var20);
                var22 = var24.getUserAuthor;
                var20 = var19.author;
                var20 = var22.bind(var24)(var20, var23);
                var11 = var11[var21];
                var21 = var12.bind(var4)(var11);
                var12 = var21.useStateFromStores;
                var22 = _closure1_slot8;
                var11 = new Array(1);
                var11[0] = var22;
                var7 = function() {
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var12 = var12.bind(var21)(var11, var7);
                var11 = var23.type;
                var7 = _closure1_slot10;
                var7 = var7.GROUP_DM;
                var11 = var11 === var7;
                if(!var11) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                var21 = var19.author;
                var22 = var3 == var21;
                var7 = undefined;
                if(var22) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                var7 = var21.id;
case 64:
                var21 = var3 == var12;
                var3 = undefined;
                if(var21) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                var3 = var12.id;
case 66:
                var11 = var7 !== var3;
case 62:
                if(var2) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                if(var13) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = var3[var1];
                var12 = var2.bind(var4)(var1);
                var7 = var12.getNotificationBodyText;
                var1 = {};
                var1['notificationMessageContent'] = var17;
                var1['isGdmAllReactionNotification'] = var11;
                var1['messageAuthor'] = var20;
                var1['emojiHook'] = var16;
                var16 = var7.bind(var12)(var1);
                var1 = 12;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isIOS;
                var1 = var1.bind(var2)();
                var24 = 'text-md/medium';
                if(!var1) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                var24 = 'text-md/normal';
case 72:
                var3 = _closure1_slot13;
                var2 = _closure1_slot12;
                var1 = {};
                var17 = _closure1_slot11;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var7 = 26;
                var7 = var22[var7];
                var7 = var21.bind(var4)(var7);
                var12 = var7.Text;
                var7 = {};
                var7['variant'] = var24;
                var24 = 'text-default';
                var7['color'] = var24;
                var24 = var8.notificationBodyText;
                var7['style'] = var24;
                var7['children'] = var16;
                var12 = var17.bind(var4)(var12, var7);
                var7 = new Array(2);
                var7[0] = var12;
                var12 = 28;
                var12 = var22[var12];
                var12 = var21.bind(var4)(var12);
                var16 = var12.NativeMessageChannelRowPreview;
                var12 = {'channel': null, 'message': null, 'color': 'text-muted', 'layout': null, 'muted': false, 'lineClamp': 2};
                var12['channel'] = var23;
                var12['message'] = var19;
                var19 = 29;
                var19 = var22[var19];
                var19 = var21.bind(var4)(var19);
                var19 = var19.ChannelListLayoutTypes;
                var19 = var19.COZY;
                var12['layout'] = var19;
                var19 = _closure1_slot9;
                var12['maxHeight'] = var19;
                var12 = var17.bind(var4)(var16, var12);
                var7[1] = var12;
                var1['children'] = var7;
                var7 = var3.bind(var4)(var2, var1);
                _fun0003_ip = 74; continue _fun0003;
case 70:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 26;
                var1 = var12[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/normal', 'color': 'text-default'};
                var16 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 27;
                var17 = var21[var12];
                var17 = var16.bind(var4)(var17);
                var19 = var17.intl;
                var17 = var19.format;
                var12 = var21[var12];
                var12 = var16.bind(var4)(var12);
                var12 = var12.t;
                if(var11) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                var16 = var12.KTurAR;
                var11 = {};
                var11['count'] = var18;
                var11 = var17.bind(var19)(var16, var11);
                _fun0003_ip = 77; continue _fun0003;
case 75:
                var16 = var12.J86pqQ;
                var12 = {};
                var12['count'] = var18;
                var20 = var20.nick;
                var12['username'] = var20;
                var11 = var17.bind(var19)(var16, var12);
case 77:
                var1['children'] = var11;
                var7 = var3.bind(var4)(var2, var1);
                _fun0003_ip = 74; continue _fun0003;
case 68:
                var3 = _closure1_slot11;
                var12 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = 26;
                var1 = var19[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/normal', 'color': 'text-default'};
                var11 = 27;
                var16 = var19[var11];
                var16 = var12.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var11 = var19[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.t;
                var12 = var11.Tqk79E;
                var11 = {};
                var11['count'] = var18;
                var11 = var16.bind(var17)(var12, var11);
                var1['children'] = var11;
                var7 = var3.bind(var4)(var2, var1);
case 74:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 30;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Notification;
                var1 = {};
                var12 = _closure1_slot16;
                var11 = {};
                var11['user'] = var15;
                var11['guild'] = var14;
                var11['isMilestone'] = var13;
                var11 = var3.bind(var4)(var12, var11);
                var1['icon'] = var11;
                var1['label'] = var10;
                var1['labelStyle'] = var9;
                var1['accessoryLabelNode'] = var6;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.container;
                var5['style'] = var8;
                var5['children'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();