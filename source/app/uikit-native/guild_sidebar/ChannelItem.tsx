// app/uikit-native/guild_sidebar/ChannelItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var14 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var2 = function getChannelMode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.muted;
            var7 = var2.selected;
            var3 = var2.unread;
            var6 = var2.locked;
            var5 = var2.channel;
            if(var7) { _fun0001_ip = 259; continue _fun0001 }
 41:
            if(var6) { _fun0001_ip = 223; continue _fun0001 }
 47:
            if(var1) { _fun0001_ip = 187; continue _fun0001 }
 53:
            if(var3) { _fun0001_ip = 92; continue _fun0001 }
 56:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var6 = var6[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var6);
            var1 = var1.ChannelModes;
            var1 = var1.DEFAULT;
            _fun0001_ip = 185; continue _fun0001;
 92:
            var6 = var2.resolvedUnreadSetting;
            var2 = _closure1_slot12;
            var2 = var2.ALL_MESSAGES;
            if(!(var6 !== var2)) { _fun0001_ip = 148; continue _fun0001 }
 112:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var6 = var6[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = var2.ChannelModes;
            var2 = var2.UNREAD_LESS_IMPORTANT;
            _fun0001_ip = 182; continue _fun0001;
 148:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 13;
            var7 = var7[var6];
            var6 = undefined;
            var6 = var8.bind(var6)(var7);
            var6 = var6.ChannelModes;
            var2 = var6.UNREAD_IMPORTANT;
 182:
            var1 = var2;
 185:
            _fun0001_ip = 221; continue _fun0001;
 187:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var6 = var6[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = var2.ChannelModes;
            var1 = var2.MUTED;
 221:
            _fun0001_ip = 257; continue _fun0001;
 223:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var6 = var6[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = var2.ChannelModes;
            var1 = var2.LOCKED;
 257:
            _fun0001_ip = 331; continue _fun0001;
 259:
            var2 = var5.isGuildVocal;
            var2 = var2.bind(var5)();
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 13;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.ChannelModes;
            if(var2) { _fun0001_ip = 308; continue _fun0001 }
 300:
            var2 = var4.SELECTED;
            _fun0001_ip = 328; continue _fun0001;
 308:
            if(var3) { _fun0001_ip = 319; continue _fun0001 }
 311:
            var3 = var4.RELEVANT;
            _fun0001_ip = 325; continue _fun0001;
 319:
            var3 = var4.UNREAD_IMPORTANT;
 325:
            var2 = var3;
 328:
            var1 = var2;
 331:
            return var1;
        }
    };
    var _closure1_slot17 = var2;
    var1 = function ChannelIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot16;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var7 = var3.channel;
            var12 = var3.locked;
            var2 = var3.isRulesChannel;
            var11 = var3.isChannelLive;
            var6 = var3.selected;
            var13 = var3.mode;
            var5 = var7.type;
            var3 = _closure1_slot9;
            var3 = var3.DM;
            if(!(var5 !== var3)) { _fun0002_ip = 447; continue _fun0002 }
 72:
            var5 = var7.type;
            var3 = _closure1_slot9;
            var3 = var3.GROUP_DM;
            if(!(var5 === var3)) { _fun0002_ip = 172; continue _fun0002 }
 91:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 14;
            var3 = var8[var3];
            var8 = var5.bind(var4)(var3);
            var5 = var8.getChannelIconSource;
            var3 = {};
            var10 = var7.id;
            var3['id'] = var10;
            var10 = var7.icon;
            var3['icon'] = var10;
            var10 = var7.getApplicationId;
            var10 = var10.bind(var7)();
            var3['applicationId'] = var10;
            var10 = 20;
            var3['size'] = var10;
            var8 = var5.bind(var8)(var3);
            var3 = null;
            if(!(var3 == var8)) { _fun0002_ip = 399; continue _fun0002 }
 172:
            if(var2) { _fun0002_ip = 259; continue _fun0002 }
 175:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 18;
            var3 = var10[var2];
            var16 = var5.bind(var4)(var3);
            var15 = var16.getChannelIcon;
            var3 = {};
            var14 = false;
            var3['isRulesChannel'] = var14;
            var3['locked'] = var12;
            var3 = var15.bind(var16)(var7, var3);
            var2 = var10[var2];
            var10 = var5.bind(var4)(var2);
            var5 = var10.getChannelIconComponent;
            var2 = {};
            var2['isRulesChannel'] = var14;
            var2['locked'] = var12;
            var12 = var5.bind(var10)(var7, var2);
            var10 = var3;
            _fun0002_ip = 301; continue _fun0002;
 259:
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 16;
            var2 = var14[var2];
            var10 = var3.bind(var4)(var2);
            var5 = _closure1_slot0;
            var2 = 17;
            var2 = var14[var2];
            var2 = var5.bind(var4)(var2);
            var12 = var2.BookCheckIcon;
 301:
            var5 = _closure1_slot13;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 13;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.BaseChannelIcon;
            var2 = {};
            var2['mode'] = var13;
            var2['source'] = var10;
            var2['isChannelLive'] = var11;
            var10 = undefined;
            if(!var11) { _fun0002_ip = 357; continue _fun0002 }
 351:
            var10 = var9.channelIconLive;
 357:
            var2['style'] = var10;
            var10 = null;
            if(!(var10 == var12)) { _fun0002_ip = 371; continue _fun0002 }
 367:
            var10 = {};
            _fun0002_ip = 381; continue _fun0002;
 371:
            var11 = {};
            var11['IconComponent'] = var12;
            var10 = var11;
 381:
            var19 = var2;
            var18 = var10;
            var10 = copyDataProperties(var19, var18);
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 399:
            var5 = _closure1_slot13;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var9 = var9.groupDmAvatar;
            var2['style'] = var9;
            var2['source'] = var8;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 447:
            var3 = _closure1_slot13;
            var2 = _closure1_slot19;
            var1 = {};
            var5 = var7.getRecipientId;
            var5 = var5.bind(var7)();
            var1['userId'] = var5;
            var5 = null;
            var5 = var5 != var6;
            if(!var5) { _fun0002_ip = 483; continue _fun0002 }
 480:
            var5 = var6;
 483:
            var1['selected'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function DMChannelIcon(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var13 = var1.userId;
            var _closure2_slot0 = var13;
            var6 = var1.selected;
            var3 = _closure1_slot16;
            var4 = undefined;
            var7 = var3.bind(var4)();
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 19;
            var5 = var11[var3];
            var14 = var10.bind(var4)(var5);
            var12 = var14.useStateFromStores;
            var5 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var5;
            var8 = new Array(1);
            var8[0] = var13;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var14)(var9, var5, var8);
            var3 = var11[var3];
            var9 = var10.bind(var4)(var3);
            var8 = var9.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                var1 = {};
                var5 = _closure1_slot6;
                var3 = var5.getStatus;
                var4 = _closure2_slot0;
                var3 = var3.bind(var5)(var4);
                var1['status'] = var3;
                var3 = _closure1_slot6;
                var2 = var3.isMobileOnline;
                var2 = var2.bind(var3)(var4);
                var1['isMobileOnline'] = var2;
                return var1;
            };
            var2 = var8.bind(var9)(var5, var2, var3);
            var8 = var2.status;
            var5 = var2.isMobileOnline;
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var9 = 20;
            var1 = var11[var9];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var12;
            var1['guildId'] = var4;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.AvatarSizes;
            var9 = var9.XSMALL_20;
            var1['size'] = var9;
            var9 = var7.dmAvatar;
            var1['style'] = var9;
            var1['status'] = var8;
            var1['isMobileOnline'] = var5;
            var8 = var7.avatarStatus;
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0003_ip = 249; continue _fun0003 }
 243:
            var6 = var7.avatarStatusSelected;
 249:
            var5[1] = var6;
            var1['statusStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = ['channel', 'subtitle', 'hideIcon', 'children', 'textStyle', 'channelInfo', 'onPress'];
    var _closure1_slot3 = var1;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var14.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var9 = var7[var8];
    var8 = native4;
    var8 = var8.bind(var1)(var9);
    var9 = 2;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.View;
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var14.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var12 = 4;
    var9 = var7[var12];
    var9 = var14.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var7[var9];
    var9 = var14.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var7[var9];
    var10 = var6.bind(var1)(var9);
    var9 = var10.ChannelTypes;
    var _closure1_slot9 = var9;
    var10 = var10.Routes;
    var _closure1_slot10 = var10;
    var10 = 7;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.StaticChannelRoute;
    var _closure1_slot11 = var10;
    var15 = 8;
    var10 = var7[var15];
    var10 = var6.bind(var1)(var10);
    var10 = var10.UnreadSetting;
    var _closure1_slot12 = var10;
    var10 = 9;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var11 = var10.jsx;
    var _closure1_slot13 = var11;
    var10 = var10.jsxs;
    var _closure1_slot14 = var10;
    var10 = var5.Set;
    var11 = var9.GUILD_VOICE;
    var5 = new Array(2);
    var5[0] = var11;
    var9 = var9.GUILD_STAGE_VOICE;
    var5[1] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var20 = var9;
    var19 = var5;
    var5 = new var20[var10](var19, var18);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot15 = var5;
    var5 = 10;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var13 = 11;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_360;
    var11['tintColor'] = var16;
    var5['channelIconLive'] = var11;
    var11 = {};
    var11['marginRight'] = var15;
    var5['dmAvatar'] = var11;
    var11 = {};
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOBILE_SECONDARY;
    var11['backgroundColor'] = var13;
    var5['avatarStatus'] = var11;
    var11 = {'width': 20, 'height': 20, 'borderRadius': 10, 'marginRight': 8};
    var5['groupDmAvatar'] = var11;
    var11 = {};
    var11['paddingStart'] = var12;
    var5['channelInfoContainer'] = var11;
    var11 = {};
    var12 = 12;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.DARK_393C42_LIGHT_DEE0E4;
    var11['backgroundColor'] = var12;
    var5['avatarStatusSelected'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot16 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var12 = arg1;
            var1 = _closure1_slot16;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var21 = var12.channel;
            var _closure2_slot0 = var21;
            var16 = var12.subtitle;
            var11 = var12.hideIcon;
            var6 = var12.children;
            var15 = var12.textStyle;
            var18 = var12.channelInfo;
            var1 = var12.onPress;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot4;
            var1 = _closure1_slot3;
            var5 = var2.bind(var4)(var12, var1);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var21.id;
            var1 = var2.bind(var4)(var1);
            var17 = var1.isSubscriptionGated;
            var20 = var1.needSubscriptionToAccess;
            var _closure2_slot2 = var20;
            var1 = _closure1_slot17;
            var13 = var1.bind(var4)(var12);
            var14 = null;
            if(!(var14 == var18)) { _fun0004_ip = 145; continue _fun0004 }
 140:
            var8 = null;
            if(!var17) { _fun0004_ip = 229; continue _fun0004 }
 145:
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var10 = var10.channelInfoContainer;
            var1['style'] = var10;
            var10 = new Array(2);
            var10[0] = var18;
            var14 = null;
            if(!var17) { _fun0004_ip = 215; continue _fun0004 }
 178:
            var19 = _closure1_slot13;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var17 = 22;
            var17 = var22[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['locked'] = var20;
            var14 = var19.bind(var4)(var18, var17);
 215:
            var10[1] = var14;
            var1['children'] = var10;
            var8 = var3.bind(var4)(var2, var1);
 229:
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 13;
            var1 = var14[var10];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['mode'] = var13;
            var17 = _closure1_slot0;
            var14 = var14[var10];
            var14 = var17.bind(var4)(var14);
            var14 = var14.ChannelModes;
            var14 = var14.UNREAD_IMPORTANT;
            var14 = var13 === var14;
            if(var14) { _fun0004_ip = 324; continue _fun0004 }
 291:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var10];
            var17 = var18.bind(var4)(var17);
            var17 = var17.ChannelModes;
            var17 = var17.UNREAD_LESS_IMPORTANT;
            var14 = var13 === var17;
 324:
            var1['unread'] = var14;
            var1['hideIcon'] = var11;
            var14 = _closure1_slot13;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = var19[var10];
            var10 = var18.bind(var4)(var10);
            var11 = var10.BaseChannelName;
            var10 = {};
            var10['mode'] = var13;
            var17 = 23;
            var17 = var19[var17];
            var20 = var18.bind(var4)(var17);
            var19 = var20.computeChannelName;
            var18 = _closure1_slot8;
            var17 = _closure1_slot7;
            var17 = var19.bind(var20)(var21, var18, var17);
            var10['name'] = var17;
            var10['subtitle'] = var16;
            var10['textStyle'] = var15;
            var10 = var14.bind(var4)(var11, var10);
            var1['name'] = var10;
            var11 = _closure1_slot13;
            var10 = _closure1_slot18;
            var9 = {};
            var25 = var9;
            var24 = var12;
            var12 = copyDataProperties(var25, var24);
            var12 = 'mode';
            var9[var12] = var13;
            var9 = var11.bind(var4)(var10, var9);
            var1['icon'] = var9;
            var1['channelInfo'] = var8;
            var7 = function onPress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0005_ip = 39; continue _fun0005 }
 10:
                    var5 = _closure1_slot15;
                    var3 = var5.has;
                    var2 = _closure2_slot0;
                    var2 = var2.type;
                    var2 = var3.bind(var5)(var2);
                    if(var2) { _fun0005_ip = 65; continue _fun0005 }
 39:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 133; continue _fun0005 }
 49:
                    var5 = _closure2_slot1;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var5.bind(var3)(var2);
                    _fun0005_ip = 133; continue _fun0005;
 65:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.transitionTo;
                    var6 = _closure1_slot10;
                    var5 = var6.CHANNEL;
                    var4 = _closure2_slot0;
                    var4 = var4.guild_id;
                    var1 = _closure1_slot11;
                    var1 = var1.ROLE_SUBSCRIPTIONS;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
 133:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var7;
            var25 = var1;
            var24 = var5;
            var5 = copyDataProperties(var25, var24);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/guild_sidebar/ChannelItem.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getChannelMode'] = var2;
    return var1;
})();