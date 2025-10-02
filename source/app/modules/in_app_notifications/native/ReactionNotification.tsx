// app/modules/in_app_notifications/native/ReactionNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingRight': 4, 'paddingTop': 0};
    var4['newContainerRoleDot'] = var9;
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
    var4['container'] = var9;
    var9 = {'marginTop': 4, 'flexGrow': 0, 'flexShrink': 1, 'alignSelf': 'flex-start'};
    var4['reactionContainer'] = var9;
    var9 = {};
    var10 = 12;
    var9['fontSize'] = var10;
    var4['textEmoji'] = var9;
    var9 = {'height': 16, 'width': 16};
    var4['imageEmoji'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/ReactionNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.notification;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot14;
            var9 = var2.bind(var4)();
            var _closure2_slot0 = var9;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var8 = var2.AnimateEmoji;
            var2 = var8.useSetting;
            var2 = var2.bind(var8)();
            var _closure2_slot1 = var2;
            var18 = var1.user;
            var21 = var1.channel;
            var _closure2_slot2 = var21;
            var16 = var1.guild;
            var _closure2_slot3 = var16;
            var12 = var1.parentChannel;
            var _closure2_slot4 = var12;
            var2 = var1.reaction;
            var _closure2_slot5 = var2;
            var8 = var21.type;
            var2 = _closure1_slot10;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var2 = var8 === var2;
            var11 = _closure1_slot6;
            var27 = var1.message;
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var28 = var10;
            var8 = new var28[var11](var27, var26);
            var14 = var8 instanceof Object ? var8 : var10;
            var _closure2_slot6 = var14;
            var1 = var1.message;
            var19 = var1.content;
            var1 = 11;
            var1 = var7[var1];
            var8 = var6.bind(var4)(var1);
            var7 = var8.isReactionMilestoneNotification;
            var6 = var14.reactions;
            var15 = null;
            var10 = var15 == var21;
            var1 = undefined;
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var21.type;
case 2:
            var1 = var7.bind(var8)(var6, var1);
            var24 = function emojiHook() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var4 = var1 == var3;
                    var6 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot5;
                    var4 = var4.emoji;
                    var3 = var4.name;
case 4:
                    if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot5;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot5;
                    var4 = var4.emoji;
                    var3 = var4.name;
case 8:
                    if(!(var1 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure2_slot5;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure2_slot5;
                    var4 = var4.emoji;
                    var3 = var4.id;
case 12:
                    if(!(var1 != var3)) { _fun0002_ip = 14; continue _fun0002 }
case 10:
                    var3 = _closure2_slot5;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var4 = _closure2_slot5;
                    var4 = var4.emoji;
                    var3 = var4.id;
case 15:
                    var3 = var1 != var3;
                    var7 = undefined;
                    if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.getEmojiURL;
                    var3 = {};
                    var9 = _closure2_slot5;
                    var9 = var9.emoji;
                    var9 = var9.id;
                    var3['id'] = var9;
                    var9 = _closure2_slot1;
                    if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var10 = _closure2_slot5;
                    var10 = var10.emoji;
                    var9 = var10.animated;
case 19:
                    var3['animated'] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 13;
                    var8 = var10[var8];
                    var8 = var9.bind(var6)(var8);
                    var8 = var8.DEFAULT_EMOJI_SIZE;
                    var3['size'] = var8;
                    var7 = var4.bind(var5)(var3);
case 17:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 14;
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
case 14:
                    var2 = _closure2_slot5;
                    var2 = var2.emoji;
                    var2 = var2.name;
                    return var2;
case 6:
                    return var1;
                }
            };
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var6 = var14.reactions;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.sumBy;
                var1 = _closure2_slot6;
                var2 = var1.reactions;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.count_details;
                        var4 = null;
                        var1 = var4 == var5;
                        var6 = undefined;
                        if(var1) { _fun0003_ip = 21; continue _fun0003 }
case 5:
                        var6 = var5.burst;
case 21:
                        var7 = var4 != var6;
                        var1 = 0;
                        if(!var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                        var1 = var6;
case 22:
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                        var3 = var5.normal;
case 24:
                        var4 = var4 != var3;
                        var2 = 0;
                        if(!var4) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                        var2 = var3;
case 26:
                        var1 = var1 + var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var17 = var8.bind(var10)(var6, var7);
            if(!var2) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var6 = 1;
            var2 = var6 !== var17;
case 28:
            var13 = null;
            if(var2) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var13 = null;
            if(var1) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.getUserAuthor;
            var13 = var6.bind(var7)(var18, var21);
case 30:
            _closure2_slot7 = var13;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 17;
            var6 = var8[var6];
            var10 = var7.bind(var4)(var6);
            var8 = var10.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var10 = var8.bind(var10)(var7, var6);
            var7 = var15 == var13;
            var6 = undefined;
            if(var7) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var6 = var13.colorString;
case 33:
            var7 = var15 != var6;
            var20 = undefined;
            if(!var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var20 = var6;
case 35:
            var6 = 'username';
            var8 = undefined;
            if(!(var6 === var10)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var8 = var20;
case 37:
            var6 = var15 != var8;
            var7 = undefined;
            if(!var6) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var6 = {};
            var6['color'] = var8;
            var7 = var6;
case 39:
            var8 = 'dot';
            var6 = undefined;
            if(!(var8 === var10)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var6 = undefined;
            if(!(var4 !== var20)) { _fun0001_ip = 41; continue _fun0001 }
case 43:
            var11 = _closure1_slot11;
            var10 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 18;
            var8 = var22[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.RoleDot;
            var8 = {};
            var8['color'] = var20;
            var20 = var15 == var13;
            var22 = undefined;
            if(var20) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var22 = var13.colorStrings;
case 44:
            var23 = var15 != var22;
            var20 = null;
            if(!var23) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var20 = var22;
case 46:
            var8['colors'] = var20;
            var20 = var9.newContainerRoleDot;
            var8['containerStyles'] = var20;
            var6 = var11.bind(var4)(var10, var8);
case 41:
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var8 = new Array(4);
            var8[0] = var13;
            var8[1] = var21;
            var8[2] = var16;
            var8[3] = var12;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 19;
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
                    if(!(var4 != var3)) { _fun0004_ip = 48; continue _fun0004 }
case 26:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var1 = var7[var1];
                    var9 = var3.bind(var5)(var1);
                    var8 = var9.getNotificationTitle;
                    var13 = _closure2_slot2;
                    var12 = _closure2_slot7;
                    var11 = _closure2_slot4;
                    var10 = _closure2_slot3;
                    var14 = var9;
                    var1 = var14[var8](var13, var12, var11, var10, var9);
                    _fun0004_ip = 49; continue _fun0004;
case 48:
                    var3 = _closure2_slot3;
                    var3 = var4 != var3;
                    var5 = '';
                    var4 = var5;
                    if(!var3) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var2 = _closure2_slot3;
                    var7 = var2.name;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = ', ';
                    var4 = var3.bind(var2)(var7);
case 50:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = ' ';
                    var1 = var3.bind(var5)(var6, var2, var4);
case 49:
                    return var1;
                }
            };
            var10 = var10.bind(var11)(var3, var8);
            if(var2) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            if(var1) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var3 = _closure1_slot13;
            var2 = _closure1_slot12;
            var1 = {};
            var12 = _closure1_slot11;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 20;
            var8 = var13[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-normal'};
            if(!(var15 != var19)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var13 = var19.trim;
            var19 = var13.bind(var19)();
            var13 = '';
            if(!(var13 === var19)) { _fun0001_ip = 58; continue _fun0001 }
case 56:
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = 21;
            var20 = var23[var13];
            var20 = var19.bind(var4)(var20);
            var22 = var20.intl;
            var20 = var22.format;
            var13 = var23[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var19 = var13.ZOzpKi;
            var13 = {};
            var13['emojiHook'] = var24;
            var13 = var20.bind(var22)(var19, var13);
            _fun0001_ip = 59; continue _fun0001;
case 58:
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 21;
            var22 = var25[var19];
            var22 = var20.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.format;
            var19 = var25[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.sHV43N;
            var19 = {};
            var19['emojiHook'] = var24;
            var13 = var22.bind(var23)(var20, var19);
case 59:
            var8['children'] = var13;
            var11 = var12.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var13 = _closure1_slot11;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var11 = 22;
            var11 = var20[var11];
            var11 = var19.bind(var4)(var11);
            var12 = var11.NotificationChannelRowPreview;
            var11 = {'channel': null, 'message': null, 'color': 'text-muted', 'layout': null, 'muted': false, 'lineClamp': 2, 'context': 'notification'};
            var11['channel'] = var21;
            var11['message'] = var14;
            var14 = 23;
            var14 = var20[var14];
            var14 = var19.bind(var4)(var14);
            var14 = var14.ChannelListLayoutTypes;
            var14 = var14.COZY;
            var11['layout'] = var14;
            var14 = _closure1_slot9;
            var11['maxHeight'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8[1] = var11;
            var1['children'] = var8;
            var8 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 60; continue _fun0001;
case 54:
            var3 = _closure1_slot11;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 20;
            var1 = var19[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var11 = 21;
            var13 = var19[var11];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var19[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.KTurAQ;
            var11 = {};
            var11['count'] = var17;
            var11 = var13.bind(var14)(var12, var11);
            var1['children'] = var11;
            var8 = var3.bind(var4)(var2, var1);
case 60:
            _fun0001_ip = 61; continue _fun0001;
case 52:
            var3 = _closure1_slot11;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 20;
            var1 = var19[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var11 = 21;
            var13 = var19[var11];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var19[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.Tqk79P;
            var11 = {};
            var11['count'] = var17;
            var11 = var13.bind(var14)(var12, var11);
            var1['children'] = var11;
            var8 = var3.bind(var4)(var2, var1);
case 61:
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 24;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            if(!(var15 == var18)) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var13 = _closure1_slot11;
            var12 = _closure1_slot1;
            var19 = _closure1_slot2;
            var14 = 26;
            var11 = var19[var14];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['guild'] = var16;
            var17 = _closure1_slot0;
            var14 = var19[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.GuildIconSizes;
            var14 = var14.NORMAL;
            var11['size'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            _fun0001_ip = 64; continue _fun0001;
case 62:
            var14 = _closure1_slot11;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var17 = 25;
            var12 = var12[var17];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['user'] = var18;
            var18 = var15 == var16;
            var15 = undefined;
            if(var18) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var15 = var16.id;
case 65:
            var12['guildId'] = var15;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.NORMAL;
            var12['size'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 64:
            var1['icon'] = var11;
            var1['label'] = var10;
            var1['labelStyle'] = var7;
            var1['accessoryLabelNode'] = var6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot4;
            var5 = {};
            var9 = var9.container;
            var5['style'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();