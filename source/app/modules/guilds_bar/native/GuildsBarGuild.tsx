// app/modules/guilds_bar/native/GuildsBarGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.getGuildIconSource;
    var _closure1_slot4 = var8;
    var4 = var4.getGuildIconURL;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useItemDragState;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TRANSITION_PHYSICS;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Fragment;
    var _closure1_slot14 = var8;
    var8 = var4.jsxs;
    var _closure1_slot15 = var8;
    var4 = var4.jsx;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 12;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.modules;
    var13 = var13.mobile;
    var13 = var13.GUILD_BAR_ITEM_SIZE;
    var10['width'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.GUILD_BAR_ITEM_SIZE;
    var10['height'] = var11;
    var4['guildIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}";
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.guildId;
            var _closure2_slot0 = var13;
            var8 = var1.isDragPreview;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = false;
case 2:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var2 = _closure1_slot1;
            var30 = _closure1_slot2;
            var1 = 13;
            var1 = var30[var1];
            var5 = var2.bind(var4)(var1);
            var1 = 'GuildsBarGuild';
            var22 = var5.bind(var4)(var1);
            var1 = _closure1_slot17;
            var9 = var1.bind(var4)();
            var35 = _closure1_slot0;
            var1 = 14;
            var1 = var30[var1];
            var7 = var35.bind(var4)(var1);
            var5 = var7.useToken;
            var1 = 12;
            var1 = var30[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.GUILD_BAR_ITEM_SIZE;
            var7 = var5.bind(var7)(var1);
            _closure2_slot1 = var7;
            var1 = 15;
            var5 = var30[var1];
            var11 = var35.bind(var4)(var5);
            var10 = var11.useGuildsBarAnimatedWrapperStyles;
            var5 = {'disableSelectedColor': true, 'disableBGColor': true};
            var10 = var10.bind(var11)(var5);
            var5 = 16;
            var5 = var30[var5];
            var5 = var35.bind(var4)(var5);
            var12 = var5.MobileHomeDrawerExperiment;
            var11 = var12.useConfig;
            var5 = {};
            var14 = 'guilds';
            var5['location'] = var14;
            var5 = var11.bind(var12)(var5);
            var24 = var5.enableHome;
            var11 = 17;
            var5 = var30[var11];
            var16 = var35.bind(var4)(var5);
            var15 = var16.useStateFromStoresObject;
            var5 = _closure1_slot9;
            var14 = new Array(3);
            var14[0] = var5;
            var5 = _closure1_slot6;
            var14[1] = var5;
            var5 = _closure1_slot7;
            var14[2] = var5;
            var12 = new Array(1);
            var12[0] = var13;
            var5 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var3 = var4.getGuildId;
                var3 = var3.bind(var4)();
                var4 = _closure2_slot0;
                var3 = var3 === var4;
                var1['selected'] = var3;
                var5 = _closure1_slot6;
                var3 = var5.isUnavailable;
                var3 = var3.bind(var5)(var4);
                var1['isUnavailable'] = var3;
                var3 = _closure1_slot7;
                var2 = var3.hasUnread;
                var2 = var2.bind(var3)(var4);
                var1['unread'] = var2;
                var2 = var3.getMentionCount;
                var2 = var2.bind(var3)(var4);
                var1['mentionCount'] = var2;
                var2 = var3.getIsMentionLowImportance;
                var2 = var2.bind(var3)(var4);
                var1['isMentionLowImportance'] = var2;
                return var1;
            };
            var14 = var15.bind(var16)(var14, var5, var12);
            var12 = var14.selected;
            _closure2_slot2 = var12;
            var5 = var14.isUnavailable;
            _closure2_slot3 = var5;
            var18 = var14.mentionCount;
            _closure2_slot4 = var18;
            var20 = var14.unread;
            _closure2_slot5 = var20;
            var15 = var14.isMentionLowImportance;
            var11 = var30[var11];
            var19 = var35.bind(var4)(var11);
            var17 = var19.useStateFromStores;
            var11 = _closure1_slot8;
            var16 = new Array(1);
            var16[0] = var11;
            var14 = new Array(3);
            var14[0] = var13;
            var14[1] = var7;
            var14[2] = var12;
            var7 = 19;
            var7 = var30[var7];
            var36 = var2.bind(var4)(var7);
            var38 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot8;
                    var2 = var5.getGuild;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var5)(var1);
                    var5 = null;
                    var1 = var5 != var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var9 = _closure1_slot5;
                    var8 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var2 = var9.bind(var6)(var7, var8, var1);
case 4:
                    var1 = {};
                    var9 = var5 == var7;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var8 = var7.name;
case 6:
                    var1['guildName'] = var8;
                    var1['icon'] = var2;
                    var8 = var5 != var2;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = var5 != var7;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var5 = _closure1_slot4;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 18;
                    var8 = var10[var4];
                    var8 = var9.bind(var6)(var8);
                    var8 = var8.ImageSizes;
                    var4 = var10[var4];
                    var4 = var9.bind(var6)(var4);
                    var4 = var4.GuildIconSizes;
                    var4 = var4.LARGE;
                    var4 = var8[var4];
                    var3 = _closure2_slot2;
                    var2 = var5.bind(var6)(var7, var4, var3);
case 8:
                    var1['asset'] = var2;
                    return var1;
                }
            };
            var40 = var19;
            var39 = var16;
            var37 = var14;
            var7 = var40[var17](var39, var38, var37, var36, var35);
            var21 = var7.asset;
            var11 = var7.icon;
            var14 = var7.guildName;
            _closure2_slot6 = var14;
            var7 = 20;
            var7 = var30[var7];
            var7 = var2.bind(var4)(var7);
            var7 = var7.bind(var4)(var13, var18, var15);
            var17 = var7.badgeTopRight;
            var16 = var7.badgeBottomRight;
            var27 = var7.cutouts;
            var7 = var7.mediaState;
            _closure2_slot7 = var7;
            var32 = _closure1_slot3;
            var23 = var32.useMemo;
            var19 = new Array(2);
            var19[0] = var13;
            var19[1] = var5;
            var15 = function() {
                var1 = {};
                var2 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var5 = _closure1_slot8;
                        var3 = var5.getGuild;
                        var1 = _closure2_slot0;
                        var3 = var3.bind(var5)(var1);
                        var1 = null;
                        if(!(var1 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var1 = _closure2_slot3;
                        if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                        var3 = _closure1_slot10;
                        var1 = var3.getGuildFolders;
                        var5 = var1.bind(var3)();
                        var3 = var5.findIndex;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var3 = var1.guildIds;
                            var2 = var3.includes;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var7 = var3.bind(var5)(var1);
                        var1 = -1;
                        if(!(var7 > var1)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.track;
                        var1 = _closure1_slot13;
                        var3 = var1.GUILD_CLICKED;
                        var1 = {};
                        var8 = _closure2_slot0;
                        var1['guild_id'] = var8;
                        var1['index'] = var7;
                        var1 = var5.bind(var6)(var3, var1);
case 14:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 24;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var1)(var2);
                        return var1;
case 11:
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 21;
                        var1 = var9[var1];
                        var8 = undefined;
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var7 = _closure1_slot0;
                        var4 = 22;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var10 = var5.intl;
                        var6 = var10.string;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var5 = var5.t;
                        var5 = var5.R0RpRX;
                        var5 = var6.bind(var10)(var5);
                        var1['title'] = var5;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        var4 = var4.m9gRVN;
                        var4 = var5.bind(var6)(var4);
                        var1['body'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1['onPress'] = var2;
                return var1;
            };
            var15 = var23.bind(var32)(var15, var19);
            var23 = var32.useMemo;
            var19 = new Array(3);
            var19[0] = var14;
            var19[1] = var18;
            var19[2] = var20;
            var18 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 3; continue _fun0004 }
case 16:
                    var2 = _closure2_slot4;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0004_ip = 17; continue _fun0004 }
case 3:
                    var2 = _closure2_slot5;
                    var1 = true;
                    if(!(var1 !== var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 22;
                    var3 = var7[var1];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1["/uzRss"];
                    var1 = {};
                    var5 = _closure2_slot6;
                    var1['guildName'] = var5;
                    var5 = _closure2_slot4;
                    var1['mentions'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0004_ip = 20; continue _fun0004;
case 18:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 22;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.lzqe42;
                    var2 = {};
                    var7 = _closure2_slot6;
                    var2['guildName'] = var7;
                    var1 = var4.bind(var5)(var3, var2);
case 20:
                    _fun0004_ip = 21; continue _fun0004;
case 17:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 22;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2["/uzRss"];
                    var2 = {};
                    var7 = _closure2_slot6;
                    var2['guildName'] = var7;
                    var6 = _closure2_slot4;
                    var2['mentions'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 21:
                    return var1;
                }
            };
            var19 = var23.bind(var32)(var18, var19);
            var23 = var32.useMemo;
            var18 = new Array(1);
            var18[0] = var7;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = new Array(0);
                    var2 = _closure2_slot7;
                    var2 = var2.activeEvent;
                    if(!var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var3 = var4.push;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 22;
                    var5 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.dHvJ2p;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
case 22:
                    var2 = _closure2_slot7;
                    var2 = var2.liveStage;
                    if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var3 = var4.push;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 22;
                    var5 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.OO7ndG;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
case 24:
                    var2 = _closure2_slot7;
                    var2 = var2.screenshare;
                    if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var3 = var4.push;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 22;
                    var5 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.wsHMZ7;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
case 26:
                    var2 = _closure2_slot7;
                    var2 = var2.video;
                    if(!var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = var4.push;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 22;
                    var5 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.BrLCS0;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
case 28:
                    var2 = _closure2_slot7;
                    var2 = var2.audio;
                    if(!var2) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var3 = var4.push;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 22;
                    var5 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.jPBhKy;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
case 30:
                    var1 = _closure2_slot7;
                    var1 = var1.activity;
                    if(!var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var2 = var4.push;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 22;
                    var3 = var8[var1];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var5 = var3.intl;
                    var3 = var5.string;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.Y3Gii5;
                    var1 = var3.bind(var5)(var1);
                    var1 = var2.bind(var4)(var1);
case 32:
                    var2 = var4.length;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = undefined;
                    if(!var2) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var3 = var4.join;
                    var2 = ' ';
                    var1 = var3.bind(var4)(var2);
case 34:
                    return var1;
                }
            };
            var18 = var23.bind(var32)(var7, var18);
            var7 = 25;
            var7 = var30[var7];
            var7 = var2.bind(var4)(var7);
            var11 = var7.bind(var4)(var13, var11, var21);
            var7 = _closure1_slot11;
            var7 = var7.bind(var4)(var13, var8);
            var8 = var7.isDragTarget;
            _closure2_slot8 = var8;
            var25 = var7.dragState;
            var21 = var7.overState;
            var29 = var7.itemSize;
            var33 = var7.dragDropInProgress;
            _closure2_slot9 = var33;
            var26 = var32.useMemo;
            var23 = new Array(1);
            var23[0] = var13;
            var7 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 26;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var _closure3_slot0 = var5;
                var1 = {};
                var4 = var5.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.label;
                    var1['name'] = var3;
                    var2 = var2.label;
                    var1['label'] = var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['accessibilityActions'] = var3;
                var2 = function onAccessibilityAction(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.label;
                            var1 = _closure4_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.actionName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var3)(var1);
                        var4 = null;
                        var1 = var4 == var2;
                        if(var1) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                        var3 = var2.action;
                        var1 = var4 == var3;
case 36:
                        if(var1) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
case 38:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var2;
                return var1;
            };
            var7 = var26.bind(var32)(var7, var23);
            var28 = var7.accessibilityActions;
            var26 = var7.onAccessibilityAction;
            var7 = 27;
            var7 = var30[var7];
            var23 = var35.bind(var4)(var7);
            var7 = var23.useSharedValue;
            var23 = var7.bind(var23)(var13);
            _closure2_slot10 = var23;
            var31 = var32.useCallback;
            var7 = function y(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot9;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    if(!var4) { _fun0007_ip = 37; continue _fun0007 }
case 40:
                    var2 = _closure2_slot10;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var4 = var2 === var1;
case 37:
                    if(!var4) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var1 = _closure2_slot8;
                    var4 = !var1;
case 41:
                    var5 = _closure2_slot10;
                    var2 = var5.set;
                    var7 = _closure2_slot0;
                    var1 = null;
                    var7 = var1 != var7;
                    if(!var7) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var1 = _closure2_slot0;
case 43:
                    var1 = var2.bind(var5)(var1);
                    var1 = {};
                    var2 = {};
                    if(var4) { _fun0007_ip = 45; continue _fun0007 }
case 9:
                    var5 = var3.targetOriginY;
                    _fun0007_ip = 46; continue _fun0007;
case 45:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 28;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.withSpring;
                    var8 = var3.targetOriginY;
                    var7 = _closure1_slot12;
                    var6 = 'animate-always';
                    var5 = var9.bind(var10)(var8, var7, var6);
case 46:
                    var2['originY'] = var5;
                    if(var4) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var4 = var3.targetHeight;
                    _fun0007_ip = 49; continue _fun0007;
case 47:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 28;
                    var7 = var7[var6];
                    var6 = undefined;
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.withSpring;
                    var7 = var3.targetHeight;
                    var6 = _closure1_slot12;
                    var5 = 'animate-always';
                    var4 = var8.bind(var9)(var7, var6, var5);
case 49:
                    var2['height'] = var4;
                    var1['animations'] = var2;
                    var2 = {};
                    var4 = var3.currentOriginY;
                    var2['originY'] = var4;
                    var3 = var3.currentHeight;
                    var2['height'] = var3;
                    var1['initialValues'] = var2;
                    return var1;
                }
            };
            var3 = {};
            var3['dragDropInProgress'] = var33;
            var3['sharedId'] = var23;
            var3['guildId'] = var13;
            var3['isDragTarget'] = var8;
            var34 = 28;
            var34 = var30[var34];
            var34 = var35.bind(var4)(var34);
            var34 = var34.withSpring;
            var3['withSpring'] = var34;
            var34 = _closure1_slot12;
            var3['TRANSITION_PHYSICS'] = var34;
            var7['__closure'] = var3;
            var3 = 14096669603718.0;
            var7['__workletHash'] = var3;
            var3 = _closure1_slot18;
            var7['__initData'] = var3;
            var3 = new Array(4);
            var3[0] = var13;
            var3[1] = var23;
            var3[2] = var8;
            var3[3] = var33;
            var7 = var31.bind(var32)(var7, var3);
            var3 = _closure1_slot16;
            var1 = var30[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['id'] = var13;
            var1['draggedItemSize'] = var29;
            var1['accessibilityActions'] = var28;
            var1['onAccessibilityAction'] = var26;
            var26 = undefined;
            if(var8) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var26 = var27;
case 50:
            var1['cutouts'] = var26;
            var1['selected'] = var12;
            var1['isDragTarget'] = var8;
            var1['dragState'] = var25;
            var1['sharedId'] = var23;
            var22 = !var22;
            if(!var22) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var23 = !var12;
            if(!var23) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var23 = !var24;
case 54:
            var22 = var23;
case 52:
            var1['circle'] = var22;
            var1['overState'] = var21;
            var1['unread'] = var20;
            var1['label'] = var19;
            var1['hint'] = var18;
            var1['config'] = var15;
            var1['styles'] = var10;
            var1['isDragPreview'] = var8;
            var1['layout'] = var7;
            var10 = _closure1_slot15;
            var8 = _closure1_slot14;
            var7 = {};
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var7['children'] = var15;
            var7 = var10.bind(var4)(var8, var7);
            var1['externalChildren'] = var7;
            var10 = _closure1_slot16;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 29;
            var7 = var15[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['guildId'] = var13;
            var7 = var10.bind(var4)(var8, var7);
            var1['expandedChildren'] = var7;
            if(var5) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var5 = null;
            if(!(var5 == var11)) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var8 = _closure1_slot16;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 18;
            var5 = var13[var10];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['value'] = var14;
            var5['selected'] = var12;
            var5['animate'] = var12;
            var12 = _closure1_slot0;
            var10 = var13[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.GuildIconSizes;
            var10 = var10.LARGE;
            var5['size'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 60; continue _fun0001;
case 58:
            var10 = _closure1_slot16;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 30;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['source'] = var11;
            var11 = var9.guildIcon;
            var7['style'] = var11;
            var5 = var10.bind(var4)(var8, var7);
case 60:
            _fun0001_ip = 61; continue _fun0001;
case 56:
            var8 = _closure1_slot16;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 30;
            var6 = var12[var6];
            var7 = var11.bind(var4)(var6);
            var6 = {};
            var10 = 31;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var6['source'] = var10;
            var9 = var9.guildIcon;
            var6['style'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 61:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();