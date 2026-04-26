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
        var17 = var6[var14];
        var18 = var5.bind(var1)(var17);
        var17 = var18.isIOS;
        var17 = var17.bind(var18)();
        var15 = 0;
        if(!var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var15 = var16;
case 4:
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
        if(!var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var14 = 'ggsans-NormalItalic, NotoSans-NormalItalic';
case 6:
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
        var4 = function ReactorNotificationIcon(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var11 = var1.user;
                var9 = var1.guild;
                var1 = var1.isMilestone;
                var2 = _closure1_slot14;
                var5 = undefined;
                var7 = var2.bind(var5)();
                if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = null;
                if(!(var8 == var11)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
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
                _fun0002_ip = 12; continue _fun0002;
case 10:
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
                if(var11) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var8 = var9.id;
case 13:
                var2['guildId'] = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var8 = var9.bind(var5)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.NORMAL;
                var2['size'] = var8;
                var1 = var4.bind(var5)(var3, var2);
case 12:
                _fun0002_ip = 15; continue _fun0002;
case 8:
                var4 = _closure1_slot10;
                var3 = _closure1_slot4;
                var2 = {};
                var7 = var7.clydeNotificationIcon;
                var2['style'] = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 12;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.ClydeIcon;
                var6 = {'color': 'white', 'size': 'md'};
                var6 = var4.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 15:
                return var1;
            }
        };
        var _closure1_slot15 = var4;
        var4 = 28;
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
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var2 = _closure1_slot13;
                var9 = var2.bind(var4)();
                var _closure2_slot0 = var9;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 14;
                var2 = var3[var2];
                var2 = var7.bind(var4)(var2);
                var5 = var2.AnimateEmoji;
                var2 = var5.useSetting;
                var11 = var2.bind(var5)();
                var _closure2_slot1 = var11;
                var14 = var1.user;
                var10 = var1.channel;
                var _closure2_slot2 = var10;
                var13 = var1.guild;
                var _closure2_slot3 = var13;
                var27 = var1.parentChannel;
                var _closure2_slot4 = var27;
                var5 = var1.reaction;
                var _closure2_slot5 = var5;
                var8 = var10.type;
                var2 = _closure1_slot9;
                var2 = var2.GUILD_ANNOUNCEMENT;
                var2 = var8 === var2;
                var20 = var1.message;
                var _closure2_slot6 = var20;
                var18 = var20.content;
                var1 = 15;
                var3 = var3[var1];
                var16 = var7.bind(var4)(var3);
                var12 = var16.isReactionMilestoneNotification;
                var8 = var20.reactions;
                var3 = null;
                var17 = var3 == var10;
                var7 = undefined;
                if(var17) { _fun0003_ip = 12; continue _fun0003 }
case 16:
                var7 = var10.type;
case 12:
                var12 = var12.bind(var16)(var8, var7);
                var16 = _closure1_slot3;
                var8 = var16.useCallback;
                var7 = new Array(4);
                var7[0] = var11;
                var7[1] = var5;
                var5 = var9.imageEmoji;
                var7[2] = var5;
                var5 = var9.textEmoji;
                var7[3] = var5;
                var5 = function() {
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
                        var3 = 16;
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
                        var8 = 17;
                        var8 = var10[var8];
                        var8 = var9.bind(var6)(var8);
                        var8 = var8.DEFAULT_EMOJI_SIZE;
                        var3['size'] = var8;
                        var7 = var4.bind(var5)(var3);
case 30:
                        var5 = _closure1_slot10;
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 18;
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
                        var2 = _closure2_slot5;
                        var2 = var2.emoji;
                        var2 = var2.name;
                        return var2;
case 19:
                        return var1;
                    }
                };
                var8 = var8.bind(var16)(var5, var7);
                var11 = var16.useMemo;
                var5 = var20.reactions;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
                            if(var1) { _fun0005_ip = 34; continue _fun0005 }
case 18:
                            var6 = var5.burst;
case 34:
                            var7 = var4 != var6;
                            var1 = 0;
                            if(!var7) { _fun0005_ip = 9; continue _fun0005 }
case 17:
                            var1 = var6;
case 9:
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                            var3 = var5.normal;
case 35:
                            var4 = var4 != var3;
                            var2 = 0;
                            if(!var4) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                            var2 = var3;
case 37:
                            var1 = var1 + var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var17 = var11.bind(var16)(var5, var7);
                if(!var2) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var5 = 1;
                var2 = var5 !== var17;
case 39:
                var26 = null;
                if(var2) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var26 = null;
                if(var12) { _fun0003_ip = 41; continue _fun0003 }
case 43:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 20;
                var5 = var11[var5];
                var7 = var7.bind(var4)(var5);
                var5 = var7.getUserAuthor;
                var26 = var5.bind(var7)(var14, var10);
case 41:
                _closure2_slot7 = var26;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var22 = 21;
                var5 = var5[var22];
                var16 = var7.bind(var4)(var5);
                var11 = var16.useStateFromStores;
                var5 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() {
                    var1 = _closure1_slot5;
                    var1 = var1.roleStyle;
                    return var1;
                };
                var16 = var11.bind(var16)(var7, var5);
                var7 = var3 == var26;
                var5 = undefined;
                if(var7) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                var5 = var26.colorString;
case 44:
                var7 = var3 != var5;
                var21 = undefined;
                if(!var7) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                var21 = var5;
case 46:
                var7 = 'username';
                var5 = undefined;
                if(!(var7 === var16)) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var5 = var21;
case 48:
                _closure2_slot8 = var5;
                var19 = _closure1_slot3;
                var11 = var19.useMemo;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot8;
                        var1 = null;
                        var2 = var1 != var2;
                        var1 = undefined;
                        if(!var2) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                        var2 = {};
                        var3 = _closure2_slot8;
                        var2['color'] = var3;
                        var1 = var2;
case 50:
                        return var1;
                    }
                };
                var5 = var11.bind(var19)(var5, var7);
                _closure2_slot9 = var5;
                var11 = 'dot';
                var7 = undefined;
                if(!(var11 === var16)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var7 = undefined;
                if(!(var4 !== var21)) { _fun0003_ip = 52; continue _fun0003 }
case 54:
                var19 = _closure1_slot10;
                var16 = _closure1_slot0;
                var23 = _closure1_slot2;
                var11 = 8;
                var11 = var23[var11];
                var11 = var16.bind(var4)(var11);
                var16 = var11.RoleDot;
                var11 = {};
                var11['color'] = var21;
                var21 = var3 == var26;
                var23 = undefined;
                if(var21) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                var23 = var26.colorStrings;
case 55:
                var24 = var3 != var23;
                var21 = null;
                if(!var24) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                var21 = var23;
case 57:
                var11['colors'] = var21;
                var21 = var9.newContainerRoleDot;
                var11['containerStyles'] = var21;
                var7 = var19.bind(var4)(var16, var11);
case 52:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 22;
                var11 = var16[var11];
                var23 = var19.bind(var4)(var11);
                var21 = var23.useInAppNotificationRedesign;
                var11 = 'ReactionNotification';
                var11 = var21.bind(var23)(var11);
                var11 = var11.redesignEnabled;
                _closure2_slot10 = var11;
                var24 = _closure1_slot3;
                var25 = var24.useMemo;
                var23 = new Array(4);
                var23[0] = var26;
                var23[1] = var10;
                var23[2] = var13;
                var23[3] = var27;
                var21 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 23;
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
                        var3 = _closure2_slot7;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0007_ip = 59; continue _fun0007 }
case 37:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 15;
                        var1 = var7[var1];
                        var9 = var3.bind(var5)(var1);
                        var8 = var9.getNotificationTitle;
                        var13 = _closure2_slot2;
                        var12 = _closure2_slot7;
                        var11 = _closure2_slot4;
                        var10 = _closure2_slot3;
                        var14 = var9;
                        var1 = var14[var8](var13, var12, var11, var10, var9);
                        _fun0007_ip = 60; continue _fun0007;
case 59:
                        var3 = _closure2_slot3;
                        var3 = var4 != var3;
                        var5 = '';
                        var4 = var5;
                        if(!var3) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                        var2 = _closure2_slot3;
                        var7 = var2.name;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = ', ';
                        var4 = var3.bind(var2)(var7);
case 61:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = ' ';
                        var1 = var3.bind(var5)(var6, var2, var4);
case 60:
                        return var1;
                    }
                };
                var25 = var25.bind(var24)(var21, var23);
                _closure2_slot11 = var25;
                var23 = var24.useMemo;
                var21 = new Array(7);
                var21[0] = var11;
                var21[1] = var10;
                var21[2] = var27;
                var21[3] = var13;
                var21[4] = var26;
                var21[5] = var25;
                var21[6] = var5;
                var5 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure2_slot10;
                        if(var1) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                        var1 = {};
                        var2 = 'simple';
                        var1['type'] = var2;
                        var2 = _closure2_slot11;
                        var1['text'] = var2;
                        var2 = _closure2_slot9;
                        var1['labelStyle'] = var2;
                        _fun0008_ip = 65; continue _fun0008;
case 63:
                        var2 = {};
                        var4 = 'message';
                        var2['type'] = var4;
                        var4 = _closure2_slot2;
                        var2['channel'] = var4;
                        var4 = _closure2_slot4;
                        var2['parentChannel'] = var4;
                        var4 = _closure2_slot3;
                        var2['guild'] = var4;
                        var3 = _closure2_slot7;
                        var2['author'] = var3;
                        var1 = var2;
case 65:
                        return var1;
                    }
                };
                var5 = var23.bind(var24)(var5, var21);
                var21 = 20;
                var21 = var16[var21];
                var24 = var19.bind(var4)(var21);
                var23 = var24.getUserAuthor;
                var21 = var20.author;
                var21 = var23.bind(var24)(var21, var10);
                var16 = var16[var22];
                var22 = var19.bind(var4)(var16);
                var19 = var22.useStateFromStores;
                var23 = _closure1_slot7;
                var16 = new Array(1);
                var16[0] = var23;
                var15 = function() {
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var16 = var19.bind(var22)(var16, var15);
                var15 = var10.type;
                var10 = _closure1_slot9;
                var10 = var10.GROUP_DM;
                var15 = var15 === var10;
                if(!var15) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                var19 = var20.author;
                var22 = var3 == var19;
                var10 = undefined;
                if(var22) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                var10 = var19.id;
case 68:
                var19 = var3 == var16;
                var3 = undefined;
                if(var19) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                var3 = var16.id;
case 70:
                var15 = var10 !== var3;
case 66:
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var3 = 10;
                var3 = var16[var3];
                var10 = var10.bind(var4)(var3);
                var3 = var10.isIOS;
                var3 = var3.bind(var10)();
                var10 = 'text-md/medium';
                if(!var3) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                var10 = 'text-md/normal';
case 72:
                if(var2) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                if(var12) { _fun0003_ip = 76; continue _fun0003 }
case 77:
                var16 = _closure1_slot0;
                var22 = _closure1_slot2;
                var1 = var22[var1];
                var3 = var16.bind(var4)(var1);
                var2 = var3.getNotificationBodyText;
                var1 = {};
                var1['notificationMessageContent'] = var18;
                var1['isGdmAllReactionNotification'] = var15;
                var1['messageAuthor'] = var21;
                var1['emojiHook'] = var8;
                var19 = var2.bind(var3)(var1);
                var3 = _closure1_slot12;
                var2 = _closure1_slot11;
                var1 = {};
                var18 = _closure1_slot10;
                var8 = 24;
                var8 = var22[var8];
                var8 = var16.bind(var4)(var8);
                var16 = var8.Text;
                var8 = {};
                var8['variant'] = var10;
                var22 = 'text-default';
                var8['color'] = var22;
                var23 = var9.notificationBodyText;
                var22 = new Array(2);
                var22[0] = var23;
                var23 = undefined;
                if(!var11) { _fun0003_ip = 78; continue _fun0003 }
case 79:
                var23 = var9.italic;
case 78:
                var22[1] = var23;
                var8['style'] = var22;
                var8['children'] = var19;
                var16 = var18.bind(var4)(var16, var8);
                var8 = new Array(2);
                var8[0] = var16;
                var19 = _closure1_slot10;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 26;
                var16 = var22[var16];
                var16 = var18.bind(var4)(var16);
                var18 = var16.NativeChannelRowPreview;
                var16 = {};
                var16['message'] = var20;
                var20 = 2;
                var16['lineClamp'] = var20;
                var20 = _closure1_slot8;
                var16['maxHeight'] = var20;
                var16 = var19.bind(var4)(var18, var16);
                var8[1] = var16;
                var1['children'] = var8;
                var8 = var3.bind(var4)(var2, var1);
                _fun0003_ip = 80; continue _fun0003;
case 76:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 24;
                var1 = var16[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1['variant'] = var10;
                var16 = 'text-default';
                var1['color'] = var16;
                var16 = undefined;
                if(!var11) { _fun0003_ip = 81; continue _fun0003 }
case 82:
                var16 = var9.italic;
case 81:
                var1['style'] = var16;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 25;
                var19 = var22[var16];
                var19 = var18.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.format;
                var16 = var22[var16];
                var16 = var18.bind(var4)(var16);
                var16 = var16.t;
                if(var15) { _fun0003_ip = 83; continue _fun0003 }
case 84:
                var18 = var16.KTurAR;
                var15 = {};
                var15['count'] = var17;
                var15 = var19.bind(var20)(var18, var15);
                _fun0003_ip = 85; continue _fun0003;
case 83:
                var18 = var16.J86pqQ;
                var16 = {};
                var16['count'] = var17;
                var21 = var21.nick;
                var16['username'] = var21;
                var15 = var19.bind(var20)(var18, var16);
case 85:
                var1['children'] = var15;
                var8 = var3.bind(var4)(var2, var1);
                _fun0003_ip = 80; continue _fun0003;
case 74:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 24;
                var1 = var15[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1['variant'] = var10;
                var10 = 'text-default';
                var1['color'] = var10;
                var10 = undefined;
                if(!var11) { _fun0003_ip = 86; continue _fun0003 }
case 87:
                var10 = var9.italic;
case 86:
                var1['style'] = var10;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 25;
                var15 = var18[var10];
                var15 = var11.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var10 = var18[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.t;
                var11 = var10.Tqk79E;
                var10 = {};
                var10['count'] = var17;
                var10 = var15.bind(var16)(var11, var10);
                var1['children'] = var10;
                var8 = var3.bind(var4)(var2, var1);
case 80:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 27;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Notification;
                var1 = {};
                var11 = _closure1_slot15;
                var10 = {};
                var10['user'] = var14;
                var10['guild'] = var13;
                var10['isMilestone'] = var12;
                var10 = var3.bind(var4)(var11, var10);
                var1['icon'] = var10;
                var1['accessoryLabelNode'] = var7;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var9.container;
                var6['style'] = var9;
                var6['children'] = var8;
                var6 = var3.bind(var4)(var7, var6);
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