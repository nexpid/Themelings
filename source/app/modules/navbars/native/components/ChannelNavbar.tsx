// app/modules/navbars/native/components/ChannelNavbar.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var14 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var12 = 1;
    var4 = var7[var12];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var7[var11];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = var4.ChannelTypes;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ContentDismissActionType;
    var _closure1_slot14 = var5;
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.StatusSizes;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot17 = var5;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {'height': '100%', 'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['navbarTitleContainer'] = var10;
    var10 = {};
    var15 = 15;
    var15 = var7[var15];
    var18 = var14.bind(var1)(var15);
    var17 = var13.DISPLAY_SEMIBOLD;
    var13 = 16;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var16 = var15.HEADER_PRIMARY;
    var15 = 18;
    var20 = var18.bind(var1)(var17, var16, var15);
    var21 = var10;
    var15 = copyDataProperties(var21, var20);
    var15 = 'flexShrink';
    var10[var15] = var12;
    var4['navbarTitlePrimaryText'] = var10;
    var10 = {'fontSize': 12, 'lineHeight': 16, 'color': null, 'marginTop': 4294967292};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_MUTED;
    var10['color'] = var15;
    var4['navbarTitleSecondaryText'] = var10;
    var10 = {'height': 18, 'width': 18, 'marginRight': 8};
    var4['channelIcon'] = var10;
    var10 = {};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CHANNEL_ICON;
    var10['color'] = var15;
    var4['channelIconColor'] = var10;
    var10 = {'height': 20, 'width': 20, 'tintColor': null, 'marginTop': 0, 'marginRight': 8};
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_MUTED;
    var10['tintColor'] = var13;
    var4['homeIcon'] = var10;
    var10 = {};
    var10['marginRight'] = var11;
    var4['premiumIcon'] = var10;
    var10 = {'height': 16, 'width': 16, 'marginRight': 4};
    var4['channelEmoji'] = var10;
    var10 = {'marginLeft': 1, 'marginTop': 4};
    var4['status'] = var10;
    var10 = {'flex': 1, 'flexGrow': 1};
    var4['channelTextContainer'] = var10;
    var10 = {};
    var10['flexGrow'] = var12;
    var4['channelNameContainer'] = var10;
    var10 = {};
    var12 = 'left';
    var10['textAlign'] = var12;
    var4['channelName'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['flexRow'] = var10;
    var10 = {};
    var10['marginStart'] = var11;
    var4['premiumAccessory'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var6 = var3.onPressTitle;
            var12 = var3.channelId;
            var _closure2_slot0 = var12;
            var10 = var3.guildId;
            var1 = var3.threadDraft;
            var _closure2_slot1 = var1;
            var5 = var3.style;
            var3 = _closure1_slot19;
            var4 = undefined;
            var8 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var16 = 17;
            var9 = var11[var16];
            var15 = var3.bind(var4)(var9);
            var14 = var15.useStateFromStores;
            var9 = _closure1_slot5;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var14.bind(var15)(var13, var9);
            var9 = var11[var16];
            var18 = var3.bind(var4)(var9);
            var17 = var18.useStateFromStores;
            var15 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var15;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure2_slot0;
                    var1 = _closure1_slot13;
                    var4 = var1.GUILD_HOME;
                    var1 = null;
                    if(!(var5 !== var4)) { _fun0002_ip = 44; continue _fun0002 }
 26:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 44:
                    return var1;
                }
            };
            var13 = var17.bind(var18)(var13, var9);
            var _closure2_slot2 = var13;
            var9 = var11[var16];
            var19 = var3.bind(var4)(var9);
            var18 = var19.useStateFromStores;
            var9 = _closure1_slot8;
            var17 = new Array(1);
            var17[0] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 44; continue _fun0003 }
 30:
                    var5 = _closure2_slot2;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
 44:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var9 = var18.bind(var19)(var17, var9);
            var16 = var11[var16];
            var18 = var3.bind(var4)(var16);
            var17 = var18.useStateFromStores;
            var16 = new Array(1);
            var16[0] = var15;
            var15 = new Array(2);
            var15[0] = var13;
            var15[1] = var1;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0004_ip = 27; continue _fun0004 }
 13:
                    var1 = _closure2_slot1;
                    var1 = var1.parentChannelId;
                    if(!(var5 == var1)) { _fun0004_ip = 116; continue _fun0004 }
 27:
                    var1 = _closure2_slot2;
                    var3 = var5 != var1;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 114; continue _fun0004 }
 40:
                    var3 = _closure2_slot2;
                    var3 = var3.parent_id;
                    var3 = var5 != var3;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 114; continue _fun0004 }
 59:
                    var7 = _closure1_slot6;
                    var6 = var7.has;
                    var4 = _closure2_slot2;
                    var4 = var4.type;
                    var4 = var6.bind(var7)(var4);
                    var1 = null;
                    if(!var4) { _fun0004_ip = 114; continue _fun0004 }
 90:
                    var5 = _closure1_slot7;
                    var4 = var5.getChannel;
                    var3 = _closure2_slot2;
                    var3 = var3.parent_id;
                    var1 = var4.bind(var5)(var3);
 114:
                    _fun0004_ip = 143; continue _fun0004;
 116:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot1;
                    var2 = var2.parentChannelId;
                    var1 = var3.bind(var4)(var2);
 143:
                    return var1;
                }
            };
            var16 = var17.bind(var18)(var16, var2, var15);
            var18 = 21;
            var2 = var11[var18];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useSelectedSpecialNavigationPath;
            var15 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 22;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 18;
            var17 = var3[var11];
            var17 = var20.bind(var4)(var17);
            var19 = var17.intl;
            var17 = var19.string;
            var3 = var3[var11];
            var3 = var20.bind(var4)(var3);
            var3 = var3.t;
            if(var14) { _fun0001_ip = 335; continue _fun0001 }
 322:
            var14 = var3.ZTNur6;
            var14 = var17.bind(var19)(var14);
            _fun0001_ip = 346; continue _fun0001;
 335:
            var3 = var3.ai6Lbm;
            var14 = var17.bind(var19)(var3);
 346:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var18];
            var3 = var17.bind(var4)(var3);
            var3 = var3.SpecialNavigationPath;
            var3 = var3.FRIENDS;
            if(!(var15 !== var3)) { _fun0001_ip = 1743; continue _fun0001 }
 382:
            var3 = _closure1_slot13;
            var3 = var3.GUILD_HOME;
            if(!(var12 !== var3)) { _fun0001_ip = 1565; continue _fun0001 }
 399:
            if(var2) { _fun0001_ip = 1417; continue _fun0001 }
 405:
            var12 = null;
            if(!(var12 != var1)) { _fun0001_ip = 434; continue _fun0001 }
 411:
            if(!(var12 != var13)) { _fun0001_ip = 1131; continue _fun0001 }
 418:
            var2 = var13.isForumLikeChannel;
            var2 = var2.bind(var13)();
            if(!var2) { _fun0001_ip = 1131; continue _fun0001 }
 434:
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 27;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.shouldNSFWGateGuild;
            var2 = var2.bind(var3)(var10);
            if(var2) { _fun0001_ip = 1037; continue _fun0001 }
 471:
            if(!(var12 != var13)) { _fun0001_ip = 995; continue _fun0001 }
 478:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 28;
            var2 = var10[var2];
            var18 = var3.bind(var4)(var2);
            var17 = var18.computeChannelName;
            var15 = _closure1_slot11;
            var2 = _closure1_slot10;
            var19 = var17.bind(var18)(var13, var15, var2);
            var2 = 19;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getChannelIconWithGuild;
            var18 = var2.bind(var3)(var13, var9);
            var2 = var13.isDM;
            var2 = var2.bind(var13)();
            if(var2) { _fun0001_ip = 796; continue _fun0001 }
 559:
            var2 = var13.isThread;
            var3 = var2.bind(var13)();
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var11];
            var9 = var15.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var2 = var2[var11];
            var2 = var15.bind(var4)(var2);
            var2 = var2.t;
            if(var3) { _fun0001_ip = 688; continue _fun0001 }
 613:
            var15 = var2.UbNmGR;
            var3 = {};
            var3['channelName'] = var19;
            var22 = var9.bind(var10)(var15, var3);
            var17 = _closure1_slot17;
            var15 = _closure1_slot20;
            var3 = {};
            var3['onPressTitle'] = var6;
            var3['style'] = var5;
            var21 = _closure1_slot21;
            var20 = {};
            var20['title'] = var19;
            var20['accessibleTitle'] = var22;
            var20['icon'] = var18;
            var20 = var17.bind(var4)(var21, var20);
            var3['children'] = var20;
            var3 = var17.bind(var4)(var15, var3);
            return var3;
 688:
            var3 = var2.OkzL+f;
            var2 = {};
            var2['channelName'] = var19;
            var17 = var9.bind(var10)(var3, var2);
            var9 = _closure1_slot17;
            var3 = _closure1_slot20;
            var2 = {};
            var2['onPressTitle'] = var6;
            var2['style'] = var5;
            var15 = _closure1_slot21;
            var10 = {};
            var10['title'] = var19;
            var10['accessibleTitle'] = var17;
            var10['icon'] = var18;
            var17 = var12 != var16;
            if(!var17) { _fun0001_ip = 773; continue _fun0001 }
 752:
            var21 = _closure1_slot17;
            var20 = _closure1_slot22;
            var19 = {};
            var19['parentChannel'] = var16;
            var17 = var21.bind(var4)(var20, var19);
 773:
            var10['subTitle'] = var17;
            var10 = var9.bind(var4)(var15, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 796:
            var2 = var13.getRecipientId;
            var10 = var2.bind(var13)();
            var2 = var13.isSystemDM;
            var2 = var2.bind(var13)();
            var15 = _closure1_slot17;
            var9 = _closure1_slot23;
            var3 = {};
            var3['userId'] = var10;
            var17 = var8.navbarTitlePrimaryText;
            var3['style'] = var17;
            var19 = var15.bind(var4)(var9, var3);
            var17 = null;
            if(var2) { _fun0001_ip = 880; continue _fun0001 }
 851:
            var9 = _closure1_slot17;
            var3 = _closure1_slot24;
            var2 = {};
            var2['userId'] = var10;
            var15 = var8.status;
            var2['style'] = var15;
            var17 = var9.bind(var4)(var3, var2);
 880:
            var9 = _closure1_slot17;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 20;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var10;
            var15 = var12 == var13;
            var10 = undefined;
            if(var15) { _fun0001_ip = 924; continue _fun0001 }
 919:
            var10 = var13.guild_id;
 924:
            var2['guildId'] = var10;
            var15 = var9.bind(var4)(var3, var2);
            var9 = _closure1_slot17;
            var3 = _closure1_slot20;
            var2 = {};
            var2['onPressTitle'] = var6;
            var2['style'] = var5;
            var13 = _closure1_slot21;
            var10 = {};
            var10['title'] = var19;
            var10['icon'] = var18;
            var10['titleSuffix'] = var17;
            var10['subTitle'] = var15;
            var10 = var9.bind(var4)(var13, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 995:
            var9 = _closure1_slot17;
            var3 = _closure1_slot20;
            var2 = {};
            var2['style'] = var5;
            var13 = _closure1_slot21;
            var10 = {};
            var10['title'] = var14;
            var10 = var9.bind(var4)(var13, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 1037:
            var9 = _closure1_slot17;
            var3 = _closure1_slot20;
            var2 = {};
            var2['style'] = var5;
            var13 = _closure1_slot21;
            var10 = {};
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var11];
            var15 = var18.bind(var4)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var14 = var14[var11];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.HbPHt7;
            var14 = var15.bind(var17)(var14);
            var10['title'] = var14;
            var10 = var9.bind(var4)(var13, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 1131:
            var2 = var1.name;
            if(!(var12 != var2)) { _fun0001_ip = 1156; continue _fun0001 }
 1140:
            var2 = var1.name;
            var3 = var2.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0001_ip = 1210; continue _fun0001 }
 1156:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var11];
            var3 = var10.bind(var4)(var3);
            var9 = var3.intl;
            var3 = var9.string;
            var2 = var2[var11];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.4WNcpq;
            var15 = var3.bind(var9)(var2);
            _fun0001_ip = 1215; continue _fun0001;
 1210:
            var15 = var1.name;
 1215:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 19;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getThreadChannelIcon;
            var1 = var1.isPrivate;
            var9 = _closure1_slot12;
            if(var1) { _fun0001_ip = 1262; continue _fun0001 }
 1254:
            var1 = var9.PUBLIC_THREAD;
            _fun0001_ip = 1268; continue _fun0001;
 1262:
            var1 = var9.PRIVATE_THREAD;
 1268:
            var13 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var11];
            var3 = var2.bind(var4)(var3);
            var9 = var3.intl;
            var3 = var9.formatToPlainString;
            var1 = var1[var11];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.OkzL+f;
            var1 = {};
            var1['channelName'] = var15;
            var14 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot20;
            var1 = {};
            var1['style'] = var5;
            var10 = _closure1_slot21;
            var9 = {};
            var9['title'] = var15;
            var9['accessibleTitle'] = var14;
            var9['icon'] = var13;
            var12 = var12 != var16;
            if(!var12) { _fun0001_ip = 1394; continue _fun0001 }
 1373:
            var15 = _closure1_slot17;
            var14 = _closure1_slot22;
            var13 = {};
            var13['parentChannel'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 1394:
            var9['subTitle'] = var12;
            var9 = var3.bind(var4)(var10, var9);
            var1['children'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 1417:
            var3 = _closure1_slot17;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 25;
            var1 = var13[var1];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var9 = 26;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var1['source'] = var9;
            var9 = var8.premiumIcon;
            var1['style'] = var9;
            var12 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot20;
            var1 = {};
            var1['style'] = var5;
            var10 = _closure1_slot21;
            var9 = {};
            var16 = _closure1_slot0;
            var14 = var13[var11];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var11];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.KzCF//;
            var13 = var14.bind(var15)(var13);
            var9['title'] = var13;
            var9['icon'] = var12;
            var9 = var3.bind(var4)(var10, var9);
            var1['children'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 1565:
            var3 = _closure1_slot17;
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var9 = 23;
            var1 = var10[var9];
            var2 = var12.bind(var4)(var1);
            var1 = {};
            var9 = var10[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.Sizes;
            var9 = var9.CUSTOM;
            var1['size'] = var9;
            var9 = 24;
            var9 = var10[var9];
            var9 = var12.bind(var4)(var9);
            var1['source'] = var9;
            var8 = var8.homeIcon;
            var1['style'] = var8;
            var9 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot20;
            var1 = {};
            var1['onPressTitle'] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot21;
            var6 = {};
            var14 = _closure1_slot0;
            var12 = var10[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var10[var11];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.Ym2Ri4;
            var10 = var12.bind(var13)(var10);
            var6['title'] = var10;
            var6['icon'] = var9;
            var6 = var3.bind(var4)(var8, var6);
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 1743:
            var3 = _closure1_slot17;
            var2 = _closure1_slot20;
            var1 = {};
            var1['style'] = var5;
            var6 = _closure1_slot21;
            var5 = {};
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var11];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var11];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.TdEu5e;
            var7 = var8.bind(var9)(var7);
            var5['title'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = function ChannelTitleWrapper(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var6 = var1.children;
            var9 = var1.onPressTitle;
            var8 = var1.style;
            var1 = _closure1_slot19;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var9)) { _fun0005_ip = 130; continue _fun0005 }
 38:
            var4 = _closure1_slot17;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 29;
            var1 = var10[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.PressableOpacity;
            var1 = {};
            var11 = var7.navbarTitleContainer;
            var10 = new Array(2);
            var10[0] = var11;
            var10[1] = var8;
            var1['style'] = var10;
            var10 = 'header';
            var1['accessibilityRole'] = var10;
            var1['onPress'] = var9;
            var9 = function onAccessibilityTap() {
                var1 = null;
                return var1;
            };
            var1['onAccessibilityTap'] = var9;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 172; continue _fun0005;
 130:
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var7.navbarTitleContainer;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 172:
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var5 = function ChannelTitleContent(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var13 = var1.title;
            var11 = var1.icon;
            var10 = var1.titleSuffix;
            var8 = var1.subTitle;
            var14 = var1.accessibleTitle;
            var2 = _closure1_slot19;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var6 = null;
            var2 = var6 != var11;
            if(!var2) { _fun0006_ip = 163; continue _fun0006 }
 53:
            var3 = _closure1_slot3;
            var2 = var3.isValidElement;
            var3 = var2.bind(var3)(var11);
            var2 = var11;
            if(var3) { _fun0006_ip = 160; continue _fun0006 }
 74:
            var7 = _closure1_slot17;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 23;
            var3 = var16[var12];
            var5 = var15.bind(var4)(var3);
            var3 = {};
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.Sizes;
            var12 = var12.CUSTOM;
            var3['size'] = var12;
            var3['source'] = var11;
            var11 = var9.channelIcon;
            var3['style'] = var11;
            var11 = var9.channelIconColor;
            var11 = var11.color;
            var3['color'] = var11;
            var2 = var7.bind(var4)(var5, var3);
 160:
            var6 = var2;
 163:
            var3 = _closure1_slot3;
            var2 = var3.isValidElement;
            var2 = var2.bind(var3)(var13);
            var11 = var13;
            if(var2) { _fun0006_ip = 281; continue _fun0006 }
 184:
            var5 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var9.channelNameContainer;
            var2['style'] = var7;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 30;
            var7 = var15[var7];
            var7 = var12.bind(var4)(var7);
            var12 = var7.Text;
            var7 = {'style': null, 'lineClamp': 1, 'variant': 'heading-md/bold', 'color': 'header-primary', 'accessibilityLabel': null, 'maxFontSizeMultiplier': 1, 'accessibilityRole': 'header'};
            var15 = var9.channelName;
            var7['style'] = var15;
            var7['accessibilityLabel'] = var14;
            var7['children'] = var13;
            var7 = var5.bind(var4)(var12, var7);
            var2['children'] = var7;
            var11 = var5.bind(var4)(var3, var2);
 281:
            var3 = _closure1_slot18;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var9.flexRow;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = var9.channelTextContainer;
            var6['style'] = var7;
            var7 = {};
            var9 = var9.flexRow;
            var7['style'] = var9;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var7['children'] = var9;
            var9 = var3.bind(var4)(var2, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var6['children'] = var7;
            var6 = var3.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var5;
    var5 = function ParentChannelSubTitle(arg1) {
        var1 = arg1;
        var10 = var1.parentChannel;
        var1 = _closure1_slot19;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot17;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 30;
        var1 = var7[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'lineClamp': 1, 'style': null, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
        var5 = var5.navbarTitleSecondaryText;
        var1['style'] = var5;
        var5 = 18;
        var9 = var7[var5];
        var9 = var6.bind(var4)(var9);
        var14 = var9.intl;
        var13 = var14.formatToPlainString;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.t;
        var12 = var5.BjYvHB;
        var11 = {};
        var5 = 28;
        var9 = var7[var5];
        var16 = var6.bind(var4)(var9);
        var15 = var16.computeChannelName;
        var9 = _closure1_slot11;
        var8 = _closure1_slot10;
        var15 = var15.bind(var16)(var10, var9, var8);
        var11['channelName'] = var15;
        var11 = var13.bind(var14)(var12, var11);
        var1['accessibilityLabel'] = var11;
        var5 = var7[var5];
        var7 = var6.bind(var4)(var5);
        var6 = var7.computeChannelName;
        var17 = true;
        var21 = var7;
        var20 = var10;
        var19 = var9;
        var18 = var8;
        var5 = var21[var6](var20, var19, var18, var17, var16);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var5;
    var5 = function DMChannelName(arg1) {
        var1 = arg1;
        var11 = var1.userId;
        var _closure2_slot0 = var11;
        var6 = var1.style;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 17;
        var3 = var10[var3];
        var4 = undefined;
        var9 = var7.bind(var4)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot11;
        var5 = new Array(2);
        var5[0] = var3;
        var3 = _closure1_slot10;
        var5[1] = var3;
        var3 = new Array(1);
        var3[0] = var11;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure1_slot10;
                var1 = var2.getNickname;
                var5 = _closure2_slot0;
                var2 = var1.bind(var2)(var5);
                var4 = _closure1_slot11;
                var1 = var4.getUser;
                var5 = var1.bind(var4)(var5);
                var1 = null;
                if(!(var1 == var2)) { _fun0007_ip = 79; continue _fun0007 }
 46:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 31;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.getName;
                var2 = var3.bind(var4)(var5);
 79:
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0007_ip = 93; continue _fun0007 }
 90:
                var1 = var2;
 93:
                return var1;
            }
        };
        var5 = var8.bind(var9)(var5, var2, var3);
        var3 = _closure1_slot17;
        var1 = 32;
        var1 = var10[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.LegacyText;
        var1 = {'numberOfLines': 1, 'style': null, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 1, 'accessibilityRole': 'header'};
        var1['style'] = var6;
        var6 = 18;
        var8 = var10[var6];
        var8 = var7.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.formatToPlainString;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.t;
        var7 = var6.fYqXVV;
        var6 = {};
        var6['channelName'] = var5;
        var6 = var8.bind(var9)(var7, var6);
        var1['accessibilityLabel'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var5;
    var5 = function ConnectedStatus(arg1) {
        var2 = arg1;
        var5 = var2.style;
        var2 = var2.userId;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 17;
        var2 = var10[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var3 = var7.useStateFromStoresObject;
        var8 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() {
            var1 = {};
            var6 = _closure1_slot9;
            var3 = var6.getStatus;
            var5 = _closure2_slot0;
            var3 = var3.bind(var6)(var5);
            var1['status'] = var3;
            var3 = var6.isMobileOnline;
            var3 = var3.bind(var6)(var5);
            var1['isMobileOnline'] = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 33;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var6.getActivities;
            var2 = var2.bind(var6)(var5);
            var2 = var3.bind(var4)(var2);
            var1['streaming'] = var2;
            return var1;
        };
        var1 = var3.bind(var7)(var2, var1);
        var8 = var1.status;
        var9 = var1.isMobileOnline;
        var7 = var1.streaming;
        var3 = _closure1_slot17;
        var2 = _closure1_slot1;
        var1 = 34;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['isMobileOnline'] = var9;
        var1['status'] = var8;
        var1['streaming'] = var7;
        var6 = _closure1_slot16;
        var6 = var6.SMALL;
        var1['size'] = var6;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var5;
    var5 = 40;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/navbars/native/components/ChannelNavbar.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var6 = var2.onPressTitle;
            var2 = var2.channelId;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot19;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 17;
            var7 = var8[var2];
            var11 = var3.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var10.bind(var11)(var9, var7);
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.useStateFromStores;
            var9 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var3.bind(var8)(var2, var1);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 18;
            var2 = var10[var1];
            var2 = var9.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            if(var8) { _fun0008_ip = 182; continue _fun0008 }
 169:
            var8 = var1.ZTNur6;
            var13 = var2.bind(var3)(var8);
            _fun0008_ip = 193; continue _fun0008;
 182:
            var1 = var1.ai6Lbm;
            var13 = var2.bind(var3)(var1);
 193:
            var8 = null;
            var1 = var8 != var7;
            var9 = null;
            if(!var1) { _fun0008_ip = 235; continue _fun0008 }
 204:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getChannelIcon;
            var9 = var1.bind(var2)(var7);
 235:
            if(!(var8 != var7)) { _fun0008_ip = 252; continue _fun0008 }
 239:
            var1 = var7.isDM;
            var1 = var1.bind(var7)();
            if(var1) { _fun0008_ip = 320; continue _fun0008 }
 252:
            var3 = _closure1_slot17;
            var2 = _closure1_slot20;
            var1 = {};
            var1['onPressTitle'] = var6;
            var11 = _closure1_slot21;
            var10 = {};
            var15 = var8 == var7;
            var14 = undefined;
            if(var15) { _fun0008_ip = 287; continue _fun0008 }
 282:
            var14 = var7.name;
 287:
            if(!(var8 != var14)) { _fun0008_ip = 294; continue _fun0008 }
 291:
            var13 = var14;
 294:
            var10['title'] = var13;
            var10['icon'] = var9;
            var10 = var3.bind(var4)(var11, var10);
            var1['children'] = var10;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 320:
            var1 = var7.getRecipientId;
            var11 = var1.bind(var7)();
            var1 = var7.isSystemDM;
            var1 = var1.bind(var7)();
            var10 = _closure1_slot17;
            var3 = _closure1_slot23;
            var2 = {};
            var2['userId'] = var11;
            var13 = var12.navbarTitlePrimaryText;
            var2['style'] = var13;
            var10 = var10.bind(var4)(var3, var2);
            var8 = null;
            if(var1) { _fun0008_ip = 404; continue _fun0008 }
 375:
            var3 = _closure1_slot17;
            var2 = _closure1_slot24;
            var1 = {};
            var1['userId'] = var11;
            var12 = var12.status;
            var1['style'] = var12;
            var8 = var3.bind(var4)(var2, var1);
 404:
            var3 = _closure1_slot17;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 20;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['userId'] = var11;
            var7 = var7.guild_id;
            var1['guildId'] = var7;
            var7 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot20;
            var1 = {};
            var1['onPressTitle'] = var6;
            var6 = _closure1_slot21;
            var5 = {};
            var5['title'] = var10;
            var5['icon'] = var9;
            var5['titleSuffix'] = var8;
            var5['subTitle'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChannelTitleWithoutRoute'] = var5;
    var3['ChannelTitle'] = var4;
    var2 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var8 = var1.buttons;
            var1 = var1.style;
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var2['style'] = var1;
            var1 = null;
            var6 = var1 == var8;
            var1 = undefined;
            var5 = undefined;
            if(var6) { _fun0009_ip = 63; continue _fun0009 }
 44:
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var15 = var1.onPress;
                    var _closure3_slot0 = var15;
                    var14 = var1.onLongPress;
                    var16 = var1.source;
                    var17 = var1.color;
                    var12 = var1.style;
                    var18 = var1.accessibilityLabel;
                    var9 = var1.children;
                    var13 = var1.disabled;
                    var7 = var1.hasActivitiesPrivateChannelTooltip;
                    var5 = _closure1_slot18;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var8 = _closure1_slot17;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 35;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var1);
                    var1 = {};
                    var19 = 'button';
                    var1['accessibilityRole'] = var19;
                    var1['accessibilityLabel'] = var18;
                    var1['color'] = var17;
                    var1['source'] = var16;
                    if(!var7) { _fun0010_ip = 129; continue _fun0010 }
 122:
                    var15 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0011_ip = 27; continue _fun0011 }
 13:
                            var3 = _closure3_slot0;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
 27:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 36;
                            var2 = var7[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                            var2 = 37;
                            var2 = var7[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.DismissibleContent;
                            var3 = var2.ACTIVITY_GDM_CALL_TOOLTIP;
                            var2 = {};
                            var6 = _closure1_slot14;
                            var6 = var6.AUTO;
                            var2['dismissAction'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
 129:
                    var1['onPress'] = var15;
                    var1['onLongPress'] = var14;
                    var1['disabled'] = var13;
                    var1['style'] = var12;
                    var1['children'] = var9;
                    var6 = var8.bind(var2)(var6, var1);
                    var1 = new Array(2);
                    var1[0] = var6;
                    var6 = null;
                    if(!var7) { _fun0010_ip = 268; continue _fun0010 }
 169:
                    var9 = _closure1_slot17;
                    var8 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var7 = 38;
                    var7 = var14[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = {};
                    var13 = _closure1_slot0;
                    var12 = 37;
                    var12 = var14[var12];
                    var12 = var13.bind(var2)(var12);
                    var12 = var12.DismissibleContent;
                    var13 = var12.ACTIVITY_GDM_CALL_TOOLTIP;
                    var12 = new Array(1);
                    var12[0] = var13;
                    var7['contentTypes'] = var12;
                    var11 = _closure1_slot15;
                    var11 = var11.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
                    var7['groupName'] = var11;
                    var10 = function children(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.visibleContent;
                            var1 = var1.markAsDismissed;
                            var _closure4_slot0 = var1;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 37;
                            var1 = var5[var1];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var1);
                            var1 = var1.DismissibleContent;
                            var3 = var1.ACTIVITY_GDM_CALL_TOOLTIP;
                            var1 = null;
                            if(!(var4 === var3)) { _fun0012_ip = 108; continue _fun0012 }
 64:
                            var4 = _closure1_slot17;
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 39;
                            var2 = var7[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = {};
                            var6 = function onClosePress() {
                                var3 = _closure4_slot0;
                                var1 = _closure1_slot14;
                                var2 = var1.UNKNOWN;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2['onClosePress'] = var6;
                            var1 = var4.bind(var5)(var3, var2);
 108:
                            return var1;
                        }
                    };
                    var7['children'] = var10;
                    var6 = var9.bind(var2)(var8, var7);
 268:
                    var1[1] = var6;
                    var3['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6);
 63:
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['ChannelButtons'] = var2;
    return var1;
})();