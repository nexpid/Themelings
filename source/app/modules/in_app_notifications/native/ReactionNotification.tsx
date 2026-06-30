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
                var2 = _closure1_slot12;
                var5 = undefined;
                var7 = var2.bind(var5)();
                if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var8 = null;
                if(!(var8 == var11)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 11;
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
                var4 = _closure1_slot8;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 6;
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
                var4 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = {};
                var7 = var7.clydeNotificationIcon;
                var2['style'] = var7;
                var8 = _closure1_slot8;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 10;
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
        var _closure1_slot13 = var1;
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
        var4 = var5.bind(var1)(var4);
        var4 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
        var _closure1_slot6 = var4;
        var16 = 4;
        var4 = var6[var16];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ChannelTypes;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot8 = var7;
        var7 = var4.Fragment;
        var _closure1_slot9 = var7;
        var4 = var4.jsxs;
        var _closure1_slot10 = var4;
        var4 = 6;
        var7 = var6[var4];
        var7 = var5.bind(var1)(var7);
        var7 = var7.AVATAR_SIZE_MAP;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.AvatarSizes;
        var4 = var4.NORMAL;
        var10 = var7[var4];
        var4 = 7;
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
        var14 = 8;
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
        var _closure1_slot11 = var7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
        var12 = 9;
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
        var _closure1_slot12 = var4;
        var4 = 24;
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
                var1 = _closure1_slot11;
                var10 = var1.bind(var4)();
                var _closure2_slot0 = var10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 12;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var3 = var1.AnimateEmoji;
                var1 = var3.useSetting;
                var9 = var1.bind(var3)();
                var _closure2_slot1 = var9;
                var15 = var5.user;
                var12 = var5.channel;
                var _closure2_slot2 = var12;
                var14 = var5.guild;
                var _closure2_slot3 = var14;
                var11 = var5.parentChannel;
                var _closure2_slot4 = var11;
                var3 = var5.reaction;
                var _closure2_slot5 = var3;
                var13 = var12.type;
                var1 = _closure1_slot7;
                var1 = var1.GUILD_ANNOUNCEMENT;
                var1 = var13 === var1;
                var18 = var5.message;
                var _closure2_slot6 = var18;
                var19 = var18.content;
                var5 = 13;
                var5 = var8[var5];
                var13 = var7.bind(var4)(var5);
                var8 = var13.isReactionMilestoneNotification;
                var7 = var18.reactions;
                var16 = null;
                var17 = var16 == var12;
                var5 = undefined;
                if(var17) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var5 = var12.type;
case 16:
                var13 = var8.bind(var13)(var7, var5);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var5 = new Array(5);
                var5[0] = var9;
                var5[1] = var3;
                var3 = var10.imageEmoji;
                var5[2] = var3;
                var3 = var10.textEmoji;
                var5[3] = var3;
                var3 = var10.italic;
                var5[4] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var1 = null;
                        var4 = var1 == var3;
                        var6 = undefined;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.name;
case 18:
                        if(!(var1 != var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.name;
case 22:
                        if(!(var1 != var3)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.id;
case 26:
                        if(!(var1 != var3)) { _fun0004_ip = 28; continue _fun0004 }
case 24:
                        var3 = _closure2_slot5;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var4 = _closure2_slot5;
                        var4 = var4.emoji;
                        var3 = var4.id;
case 29:
                        var3 = var1 != var3;
                        var7 = undefined;
                        if(!var3) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 15;
                        var3 = var5[var3];
                        var5 = var4.bind(var6)(var3);
                        var4 = var5.getEmojiURL;
                        var3 = {};
                        var9 = _closure2_slot5;
                        var9 = var9.emoji;
                        var9 = var9.id;
                        var3['id'] = var9;
                        var9 = _closure2_slot1;
                        if(!var9) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var10 = _closure2_slot5;
                        var10 = var10.emoji;
                        var9 = var10.animated;
case 33:
                        var3['animated'] = var9;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 16;
                        var8 = var10[var8];
                        var8 = var9.bind(var6)(var8);
                        var8 = var8.DEFAULT_EMOJI_SIZE;
                        var3['size'] = var8;
                        var7 = var4.bind(var5)(var3);
case 31:
                        var5 = _closure1_slot8;
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 17;
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
case 28:
                        var5 = _closure1_slot8;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 14;
                        var3 = var7[var3];
                        var3 = var4.bind(var6)(var3);
                        var4 = var3.Text;
                        var3 = {};
                        var7 = _closure2_slot0;
                        var7 = var7.italic;
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
case 20:
                        return var1;
                    }
                };
                var23 = var7.bind(var8)(var3, var5);
                var7 = var8.useMemo;
                var3 = var18.reactions;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
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
                            if(var1) { _fun0005_ip = 35; continue _fun0005 }
case 19:
                            var6 = var5.burst;
case 35:
                            var7 = var4 != var6;
                            var1 = 0;
                            if(!var7) { _fun0005_ip = 3; continue _fun0005 }
case 18:
                            var1 = var6;
case 3:
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                            var3 = var5.normal;
case 36:
                            var4 = var4 != var3;
                            var2 = 0;
                            if(!var4) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                            var2 = var3;
case 38:
                            var1 = var1 + var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var17 = var7.bind(var8)(var3, var5);
                if(!var1) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                var3 = 1;
                var1 = var3 !== var17;
case 40:
                var9 = null;
                if(var1) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                var9 = null;
                if(var13) { _fun0003_ip = 42; continue _fun0003 }
case 44:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 19;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.getUserAuthor;
                var9 = var3.bind(var5)(var15, var12);
case 42:
                _closure2_slot7 = var9;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 20;
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
                var7 = var16 == var9;
                var3 = undefined;
                if(var7) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var3 = var9.colorString;
case 45:
                var7 = var16 != var3;
                var20 = undefined;
                if(!var7) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var20 = var3;
case 47:
                var3 = 'dot';
                var7 = undefined;
                if(!(var3 === var5)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                var7 = undefined;
                if(!(var7 !== var20)) { _fun0003_ip = 49; continue _fun0003 }
case 51:
                var8 = _closure1_slot8;
                var5 = _closure1_slot0;
                var21 = _closure1_slot2;
                var3 = 6;
                var3 = var21[var3];
                var3 = var5.bind(var4)(var3);
                var5 = var3.RoleDot;
                var3 = {};
                var3['color'] = var20;
                var20 = var16 == var9;
                var21 = undefined;
                if(var20) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var21 = var9.colorStrings;
case 52:
                var22 = var16 != var21;
                var20 = null;
                if(!var22) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var20 = var21;
case 54:
                var3['colors'] = var20;
                var20 = var10.newContainerRoleDot;
                var3['containerStyles'] = var20;
                var7 = var8.bind(var4)(var5, var3);
case 49:
                var8 = _closure1_slot3;
                var5 = var8.useMemo;
                var3 = new Array(4);
                var3[0] = var12;
                var3[1] = var11;
                var3[2] = var14;
                var3[3] = var9;
                var2 = function() {
                    var1 = {};
                    var2 = 'message';
                    var1['type'] = var2;
                    var3 = _closure2_slot2;
                    var1['channel'] = var3;
                    var3 = _closure2_slot4;
                    var1['parentChannel'] = var3;
                    var3 = _closure2_slot3;
                    var1['guild'] = var3;
                    var2 = _closure2_slot7;
                    var1['author'] = var2;
                    return var1;
                };
                var5 = var5.bind(var8)(var2, var3);
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                var8 = 'text-md/medium';
                if(!var2) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var8 = 'text-md/normal';
case 56:
                if(var1) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                if(var13) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                var3 = _closure1_slot10;
                var2 = _closure1_slot9;
                var1 = {};
                var12 = _closure1_slot8;
                var11 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 14;
                var9 = var20[var9];
                var9 = var11.bind(var4)(var9);
                var11 = var9.Text;
                var9 = {};
                var9['variant'] = var8;
                var20 = 'text-default';
                var9['color'] = var20;
                var21 = var10.notificationBodyText;
                var20 = new Array(2);
                var20[0] = var21;
                var21 = var10.italic;
                var20[1] = var21;
                var9['style'] = var20;
                if(!(var16 != var19)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                var16 = var19.trim;
                var19 = var16.bind(var19)();
                var16 = '';
                if(!(var16 === var19)) { _fun0003_ip = 64; continue _fun0003 }
case 62:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 21;
                var20 = var22[var16];
                var20 = var19.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var16 = var22[var16];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var19 = var16.ZOzpKt;
                var16 = {};
                var16['emojiHook'] = var23;
                var16 = var20.bind(var21)(var19, var16);
                _fun0003_ip = 65; continue _fun0003;
case 64:
                var20 = _closure1_slot0;
                var24 = _closure1_slot2;
                var19 = 21;
                var21 = var24[var19];
                var21 = var20.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var19 = var24[var19];
                var19 = var20.bind(var4)(var19);
                var19 = var19.t;
                var20 = var19.sHV43G;
                var19 = {};
                var19['emojiHook'] = var23;
                var16 = var21.bind(var22)(var20, var19);
case 65:
                var9['children'] = var16;
                var11 = var12.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var16 = _closure1_slot8;
                var12 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 22;
                var11 = var19[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.NativeChannelRowPreview;
                var11 = {};
                var11['message'] = var18;
                var18 = 2;
                var11['lineClamp'] = var18;
                var18 = _closure1_slot6;
                var11['maxHeight'] = var18;
                var11 = var16.bind(var4)(var12, var11);
                var9[1] = var11;
                var1['children'] = var9;
                var9 = var3.bind(var4)(var2, var1);
                _fun0003_ip = 66; continue _fun0003;
case 60:
                var3 = _closure1_slot8;
                var12 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = 14;
                var1 = var19[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1['variant'] = var8;
                var11 = 'text-default';
                var1['color'] = var11;
                var11 = var10.italic;
                var1['style'] = var11;
                var11 = 21;
                var16 = var19[var11];
                var16 = var12.bind(var4)(var16);
                var18 = var16.intl;
                var16 = var18.format;
                var11 = var19[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.t;
                var12 = var11.KTurAR;
                var11 = {};
                var11['count'] = var17;
                var11 = var16.bind(var18)(var12, var11);
                var1['children'] = var11;
                var9 = var3.bind(var4)(var2, var1);
case 66:
                _fun0003_ip = 67; continue _fun0003;
case 58:
                var3 = _closure1_slot8;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 14;
                var1 = var18[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1['variant'] = var8;
                var8 = 'text-default';
                var1['color'] = var8;
                var8 = var10.italic;
                var1['style'] = var8;
                var8 = 21;
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
case 67:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 23;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Notification;
                var1 = {};
                var12 = _closure1_slot8;
                var11 = _closure1_slot13;
                var8 = {};
                var8['user'] = var15;
                var8['guild'] = var14;
                var8['isMilestone'] = var13;
                var8 = var12.bind(var4)(var11, var8);
                var1['icon'] = var8;
                var1['accessoryLabelNode'] = var7;
                var8 = _closure1_slot8;
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