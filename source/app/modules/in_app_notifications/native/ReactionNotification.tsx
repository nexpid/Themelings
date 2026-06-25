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
        var1 = function ReactorNotificationIcon(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var11 = var1.user;
                var9 = var1.guild;
                var1 = var1.isMilestone;
                var2 = _closure1_slot14;
                var5 = undefined;
                var7 = var2.bind(var5)();
                if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var8 = null;
                if(!(var8 == var11)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 13;
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
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var4 = _closure1_slot10;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 8;
                var2 = var2[var10];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Avatar;
                var2 = {};
                var2['user'] = var11;
                var11 = var8 == var9;
                var8 = undefined;
                if(var11) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var8 = var9.id;
case 7:
                var2['guildId'] = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var8 = var9.bind(var5)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.NORMAL;
                var2['size'] = var8;
                var1 = var4.bind(var5)(var3, var2);
case 6:
                _fun0002_ip = 9; continue _fun0002;
case 2:
                var4 = _closure1_slot10;
                var3 = _closure1_slot4;
                var2 = {};
                var7 = var7.clydeNotificationIcon;
                var2['style'] = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 12;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.ClydeIcon;
                var6 = {'color': 'white', 'size': 'md'};
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 9:
                return var1;
            }
        };
        var _closure1_slot15 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var15 = 0;
        var7 = var6[var15];
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
        var16 = 4;
        var4 = var6[var16];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ChannelTypes;
        var _closure1_slot9 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot10 = var7;
        var7 = var4.Fragment;
        var _closure1_slot11 = var7;
        var4 = var4.jsxs;
        var _closure1_slot12 = var4;
        var4 = 8;
        var7 = var6[var4];
        var7 = var5.bind(var1)(var7);
        var7 = var7.AVATAR_SIZE_MAP;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.AvatarSizes;
        var4 = var4.NORMAL;
        var10 = var7[var4];
        var4 = 9;
        var7 = var6[var4];
        var9 = var5.bind(var1)(var7);
        var8 = var9.createStyles;
        var7 = {};
        var12 = {'paddingRight': 4, 'paddingTop': 0};
        var7['newContainerRoleDot'] = var12;
        var12 = {};
        var14 = 'column';
        var12['flexDirection'] = var14;
        var7['container'] = var12;
        var12 = {};
        var14 = 12;
        var12['fontSize'] = var14;
        var7['textEmoji'] = var12;
        var12 = {'height': 16, 'width': 16};
        var14 = 10;
        var17 = var6[var14];
        var18 = var5.bind(var1)(var17);
        var17 = var18.isIOS;
        var18 = var17.bind(var18)();
        var17 = undefined;
        if(var18) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var19 = {};
        var19['translateY'] = var11;
        var18 = new Array(1);
        var18[0] = var19;
        var17 = var18;
case 10:
        var12['transform'] = var17;
        var7['imageEmoji'] = var12;
        var12 = {};
        var17 = var6[var14];
        var18 = var5.bind(var1)(var17);
        var17 = var18.isIOS;
        var17 = var17.bind(var18)();
        var15 = 0;
        if(!var17) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var15 = var16;
case 12:
        var12['marginBottom'] = var15;
        var7['notificationBodyText'] = var12;
        var12 = {};
        var15 = 'italic';
        var12['fontStyle'] = var15;
        var14 = var6[var14];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isIOS;
        var15 = var14.bind(var15)();
        var14 = 'ggsans-MediumItalic, NotoSans-MediumItalic';
        if(!var15) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var14 = 'ggsans-NormalItalic, NotoSans-NormalItalic';
case 14:
        var12['fontFamily'] = var14;
        var7['italic'] = var12;
        var7 = var8.bind(var9)(var7);
        var _closure1_slot13 = var7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
        var12 = 11;
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
        var _closure1_slot14 = var4;
        var4 = 28;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/in_app_notifications/native/ReactionNotification.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ReactionNotification(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var5 = var1.notification;
                var4 = undefined;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var1 = _closure1_slot13;
                var10 = var1.bind(var4)();
                var _closure2_slot0 = var10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var3 = var1.AnimateEmoji;
                var1 = var3.useSetting;
                var9 = var1.bind(var3)();
                var _closure2_slot1 = var9;
                var15 = var5.user;
                var22 = var5.channel;
                var _closure2_slot2 = var22;
                var14 = var5.guild;
                var _closure2_slot3 = var14;
                var21 = var5.parentChannel;
                var _closure2_slot4 = var21;
                var3 = var5.reaction;
                var _closure2_slot5 = var3;
                var11 = var22.type;
                var1 = _closure1_slot9;
                var1 = var1.GUILD_ANNOUNCEMENT;
                var1 = var11 === var1;
                var19 = var5.message;
                var _closure2_slot6 = var19;
                var20 = var19.content;
                var5 = 15;
                var5 = var8[var5];
                var11 = var7.bind(var4)(var5);
                var8 = var11.isReactionMilestoneNotification;
                var7 = var19.reactions;
                var18 = null;
                var12 = var18 == var22;
                var5 = undefined;
                if(var12) { _fun0003_ip = 6; continue _fun0003 }
case 16:
                var5 = var22.type;
case 6:
                var13 = var8.bind(var11)(var7, var5);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 16;
                var5 = var8[var5];
                var8 = var7.bind(var4)(var5);
                var7 = var8.useInAppNotificationRedesign;
                var5 = 'ReactionNotification';
                var5 = var7.bind(var8)(var5);
                var11 = var5.redesignEnabled;
                _closure2_slot7 = var11;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var5 = new Array(6);
                var5[0] = var9;
                var5[1] = var3;
                var3 = var10.imageEmoji;
                var5[2] = var3;
                var3 = var10.textEmoji;
                var5[3] = var3;
                var3 = var10.italic;
                var5[4] = var3;
                var5[5] = var11;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var1 = null;
                        var4 = var1 == var3;
                        var6 = undefined;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.name;
case 17:
                        if(!(var1 != var3)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.name;
case 21:
                        if(!(var1 != var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.id;
case 25:
                        if(!(var1 != var3)) { _fun0004_ip = 27; continue _fun0004 }
case 23:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.id;
case 28:
                        var3 = var1 != var3;
                        var7 = undefined;
                        if(!var3) { _fun0004_ip = 30; continue _fun0004 }
case 31:
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
                        if(!var9) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var10 = _closure2_slot5;
                        var10 = var10.emoji;
                        var9 = var10.animated;
case 32:
                        var3['animated'] = var9;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 19;
                        var8 = var10[var8];
                        var8 = var9.bind(var6)(var8);
                        var8 = var8.DEFAULT_EMOJI_SIZE;
                        var3['size'] = var8;
                        var7 = var4.bind(var5)(var3);
case 30:
                        var5 = _closure1_slot10;
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
case 27:
                        var5 = _closure1_slot10;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 17;
                        var3 = var7[var3];
                        var3 = var4.bind(var6)(var3);
                        var4 = var3.Text;
                        var3 = {};
                        var8 = _closure2_slot7;
                        var7 = undefined;
                        if(!var8) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                        var8 = _closure2_slot0;
                        var7 = var8.italic;
case 34:
                        var3['style'] = var7;
                        var7 = 'text-sm/normal';
                        var3['variant'] = var7;
                        var2 = _closure2_slot5;
                        var7 = var2.emoji;
                        var7 = var7.name;
                        var3['children'] = var7;
                        var2 = var2.emoji;
                        var2 = var2.name;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var2;
case 19:
                        return var1;
                    }
                };
                var24 = var7.bind(var8)(var3, var5);
                var7 = var8.useMemo;
                var3 = var19.reactions;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
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
                            if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 18:
                            var6 = var5.burst;
case 36:
                            var7 = var4 != var6;
                            var1 = 0;
                            if(!var7) { _fun0005_ip = 3; continue _fun0005 }
case 17:
                            var1 = var6;
case 3:
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                            var3 = var5.normal;
case 37:
                            var4 = var4 != var3;
                            var2 = 0;
                            if(!var4) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                            var2 = var3;
case 39:
                            var1 = var1 + var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var17 = var7.bind(var8)(var3, var5);
                if(!var1) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var3 = 1;
                var1 = var3 !== var17;
case 41:
                var16 = null;
                if(var1) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var16 = null;
                if(var13) { _fun0003_ip = 43; continue _fun0003 }
case 45:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 22;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.getUserAuthor;
                var16 = var3.bind(var5)(var15, var22);
case 43:
                _closure2_slot8 = var16;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 23;
                var3 = var7[var3];
                var8 = var5.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot5;
                    var1 = var1.roleStyle;
                    return var1;
                };
                var5 = var7.bind(var8)(var5, var3);
                var7 = var18 == var16;
                var3 = undefined;
                if(var7) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                var3 = var16.colorString;
case 46:
                var7 = var18 != var3;
                var12 = undefined;
                if(!var7) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var12 = var3;
case 48:
                var7 = 'username';
                var3 = undefined;
                if(!(var7 === var5)) { _fun0003_ip = 14; continue _fun0003 }
case 50:
                var3 = var12;
case 14:
                _closure2_slot9 = var3;
                var9 = _closure1_slot3;
                var8 = var9.useMemo;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot9;
                        var1 = null;
                        var2 = var1 != var2;
                        var1 = undefined;
                        if(!var2) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                        var2 = {};
                        var3 = _closure2_slot9;
                        var2['color'] = var3;
                        var1 = var2;
case 51:
                        return var1;
                    }
                };
                var9 = var8.bind(var9)(var3, var7);
                _closure2_slot10 = var9;
                var3 = 'dot';
                var7 = undefined;
                if(!(var3 === var5)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                var7 = undefined;
                if(!(var4 !== var12)) { _fun0003_ip = 53; continue _fun0003 }
case 55:
                var8 = _closure1_slot10;
                var5 = _closure1_slot0;
                var23 = _closure1_slot2;
                var3 = 8;
                var3 = var23[var3];
                var3 = var5.bind(var4)(var3);
                var5 = var3.RoleDot;
                var3 = {};
                var3['color'] = var12;
                var12 = var18 == var16;
                var23 = undefined;
                if(var12) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var23 = var16.colorStrings;
case 56:
                var25 = var18 != var23;
                var12 = null;
                if(!var25) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                var12 = var23;
case 58:
                var3['colors'] = var12;
                var12 = var10.newContainerRoleDot;
                var3['containerStyles'] = var12;
                var7 = var8.bind(var4)(var5, var3);
case 53:
                var8 = _closure1_slot3;
                var12 = var8.useMemo;
                var5 = new Array(4);
                var5[0] = var16;
                var5[1] = var22;
                var5[2] = var14;
                var5[3] = var21;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 24;
                        var2 = var4[var2];
                        var5 = undefined;
                        var9 = var3.bind(var5)(var2);
                        var8 = var9.computeChannelName;
                        var13 = _closure2_slot2;
                        var12 = _closure1_slot7;
                        var11 = _closure1_slot6;
                        var10 = true;
                        var14 = var9;
                        var6 = var14[var8](var13, var12, var11, var10, var9);
                        var3 = _closure2_slot8;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0007_ip = 60; continue _fun0007 }
case 39:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 15;
                        var1 = var7[var1];
                        var9 = var3.bind(var5)(var1);
                        var8 = var9.getNotificationTitle;
                        var13 = _closure2_slot2;
                        var12 = _closure2_slot8;
                        var11 = _closure2_slot4;
                        var10 = _closure2_slot3;
                        var14 = var9;
                        var1 = var14[var8](var13, var12, var11, var10, var9);
                        _fun0007_ip = 61; continue _fun0007;
case 60:
                        var3 = _closure2_slot3;
                        var3 = var4 != var3;
                        var5 = '';
                        var4 = var5;
                        if(!var3) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                        var2 = _closure2_slot3;
                        var7 = var2.name;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = ', ';
                        var4 = var3.bind(var2)(var7);
case 62:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = ' ';
                        var1 = var3.bind(var5)(var6, var2, var4);
case 61:
                        return var1;
                    }
                };
                var12 = var12.bind(var8)(var3, var5);
                _closure2_slot11 = var12;
                var5 = var8.useMemo;
                var3 = new Array(7);
                var3[0] = var11;
                var3[1] = var22;
                var3[2] = var21;
                var3[3] = var14;
                var3[4] = var16;
                var3[5] = var12;
                var3[6] = var9;
                var2 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure2_slot7;
                        if(var1) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                        var1 = {};
                        var2 = 'simple';
                        var1['type'] = var2;
                        var2 = _closure2_slot11;
                        var1['text'] = var2;
                        var2 = _closure2_slot10;
                        var1['labelStyle'] = var2;
                        _fun0008_ip = 66; continue _fun0008;
case 64:
                        var2 = {};
                        var4 = 'message';
                        var2['type'] = var4;
                        var4 = _closure2_slot2;
                        var2['channel'] = var4;
                        var4 = _closure2_slot4;
                        var2['parentChannel'] = var4;
                        var4 = _closure2_slot3;
                        var2['guild'] = var4;
                        var3 = _closure2_slot8;
                        var2['author'] = var3;
                        var1 = var2;
case 66:
                        return var1;
                    }
                };
                var5 = var5.bind(var8)(var2, var3);
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                var8 = 'text-md/medium';
                if(!var2) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                var8 = 'text-md/normal';
case 67:
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                if(var13) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                var3 = _closure1_slot12;
                var2 = _closure1_slot11;
                var1 = {};
                var16 = _closure1_slot10;
                var12 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 17;
                var9 = var21[var9];
                var9 = var12.bind(var4)(var9);
                var12 = var9.Text;
                var9 = {};
                var9['variant'] = var8;
                var21 = 'text-default';
                var9['color'] = var21;
                var22 = var10.notificationBodyText;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = undefined;
                if(!var11) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                var22 = var10.italic;
case 73:
                var21[1] = var22;
                var9['style'] = var21;
                if(!(var18 != var20)) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                var18 = var20.trim;
                var20 = var18.bind(var20)();
                var18 = '';
                if(!(var18 === var20)) { _fun0003_ip = 77; continue _fun0003 }
case 75:
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var18 = 25;
                var21 = var23[var18];
                var21 = var20.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var18 = var23[var18];
                var18 = var20.bind(var4)(var18);
                var18 = var18.t;
                var20 = var18.ZOzpKt;
                var18 = {};
                var18['emojiHook'] = var24;
                var18 = var21.bind(var22)(var20, var18);
                _fun0003_ip = 78; continue _fun0003;
case 77:
                var21 = _closure1_slot0;
                var25 = _closure1_slot2;
                var20 = 25;
                var22 = var25[var20];
                var22 = var21.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.format;
                var20 = var25[var20];
                var20 = var21.bind(var4)(var20);
                var20 = var20.t;
                var21 = var20.sHV43G;
                var20 = {};
                var20['emojiHook'] = var24;
                var18 = var22.bind(var23)(var21, var20);
case 78:
                var9['children'] = var18;
                var12 = var16.bind(var4)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var18 = _closure1_slot10;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 26;
                var12 = var20[var12];
                var12 = var16.bind(var4)(var12);
                var16 = var12.NativeChannelRowPreview;
                var12 = {};
                var12['message'] = var19;
                var19 = 2;
                var12['lineClamp'] = var19;
                var19 = _closure1_slot8;
                var12['maxHeight'] = var19;
                var12 = var18.bind(var4)(var16, var12);
                var9[1] = var12;
                var1['children'] = var9;
                var9 = var3.bind(var4)(var2, var1);
                _fun0003_ip = 79; continue _fun0003;
case 71:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 17;
                var1 = var12[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1['variant'] = var8;
                var12 = 'text-default';
                var1['color'] = var12;
                var12 = undefined;
                if(!var11) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                var12 = var10.italic;
case 80:
                var1['style'] = var12;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 25;
                var18 = var20[var12];
                var18 = var16.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.format;
                var12 = var20[var12];
                var12 = var16.bind(var4)(var12);
                var12 = var12.t;
                var16 = var12.KTurAR;
                var12 = {};
                var12['count'] = var17;
                var12 = var18.bind(var19)(var16, var12);
                var1['children'] = var12;
                var9 = var3.bind(var4)(var2, var1);
case 79:
                _fun0003_ip = 82; continue _fun0003;
case 69:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 17;
                var1 = var12[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1['variant'] = var8;
                var8 = 'text-default';
                var1['color'] = var8;
                var8 = undefined;
                if(!var11) { _fun0003_ip = 83; continue _fun0003 }
case 84:
                var8 = var10.italic;
case 83:
                var1['style'] = var8;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 25;
                var12 = var18[var8];
                var12 = var11.bind(var4)(var12);
                var16 = var12.intl;
                var12 = var16.format;
                var8 = var18[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var11 = var8.Tqk79E;
                var8 = {};
                var8['count'] = var17;
                var8 = var12.bind(var16)(var11, var8);
                var1['children'] = var8;
                var9 = var3.bind(var4)(var2, var1);
case 82:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 27;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Notification;
                var1 = {};
                var12 = _closure1_slot10;
                var11 = _closure1_slot15;
                var8 = {};
                var8['user'] = var15;
                var8['guild'] = var14;
                var8['isMilestone'] = var13;
                var8 = var12.bind(var4)(var11, var8);
                var1['icon'] = var8;
                var1['accessoryLabelNode'] = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.container;
                var6['style'] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var1['children'] = var6;
                var1['header'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();