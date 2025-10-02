// app/modules/icymi/native/ICYMIShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var12;
    var1 = function contentTypeToIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot22;
            var2 = var2.POPULAR_MESSAGE;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot22;
            var2 = var2.IMAGE;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot22;
            var2 = var2.VIDEO;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot22;
            var2 = var2.TRENDING_TOPIC;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot22;
            var2 = var2.PRO_TIP;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.LightbulbIcon;
            return var2;
case 10:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.LightbulbIcon;
            return var2;
case 8:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.FireIcon;
            return var2;
case 6:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.CirclePlayIcon;
            return var2;
case 4:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ImageIcon;
            return var2;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.FireIcon;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function contentTypeToText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = false;
case 12:
            var3 = _closure1_slot22;
            var3 = var3.POPULAR_MESSAGE;
            if(!(var3 !== var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = _closure1_slot22;
            var3 = var3.IMAGE;
            if(!(var3 !== var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = _closure1_slot22;
            var3 = var3.VIDEO;
            if(!(var3 !== var4)) { _fun0002_ip = 18; continue _fun0002 }
case 9:
            var3 = _closure1_slot22;
            var3 = var3.LINK;
            if(!(var3 !== var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var3 = _closure1_slot22;
            var3 = var3.THREAD;
            if(!(var3 !== var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = _closure1_slot22;
            var3 = var3.FORUM_POST;
            if(!(var3 !== var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = _closure1_slot22;
            var3 = var3.CHANGED_STATUS;
            if(!(var3 !== var4)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var3 = _closure1_slot22;
            var3 = var3.INTERESTING;
            if(!(var3 !== var4)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var3 = _closure1_slot22;
            var3 = var3.ANNOUNCEMENT;
            if(!(var3 !== var4)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var3 = _closure1_slot22;
            var3 = var3.FILE;
            if(!(var3 !== var4)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var3 = _closure1_slot22;
            var3 = var3.TRENDING_TOPIC;
            if(!(var3 !== var4)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var3 = _closure1_slot22;
            var3 = var3.PRO_TIP;
            if(!(var3 !== var4)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            return var5;
case 35:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.0ktiVV;
            var3 = var4.bind(var6)(var3);
            return var3;
case 33:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.aDAwS0;
            var3 = var4.bind(var6)(var3);
            return var3;
case 31:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.pYrnTU;
            var3 = var4.bind(var6)(var3);
            return var3;
case 29:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var2 = var3.2ih63d;
            var2 = var4.bind(var6)(var2);
            _fun0002_ip = 39; continue _fun0002;
case 37:
            var3 = var3.E0MW8P;
            var2 = var4.bind(var6)(var3);
case 39:
            return var2;
case 27:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.TahE/v;
            var2 = var3.bind(var4)(var2);
            return var2;
case 25:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.TGrUmp;
            var2 = var3.bind(var4)(var2);
            return var2;
case 23:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Q9/6BQ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 21:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.DwLrLC;
            var2 = var3.bind(var4)(var2);
            return var2;
case 19:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.oj5yvL;
            var2 = var3.bind(var4)(var2);
            return var2;
case 18:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.swhcPD;
            var2 = var3.bind(var4)(var2);
            return var2;
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gmOWAg;
            var2 = var3.bind(var4)(var2);
            return var2;
case 14:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.H/2+cn;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var8 = function navigateToPost(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var10 = arg1;
            var6 = arg3;
            var5 = arguments[3];
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var6;
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var5 = false;
case 40:
            var3 = global;
            var7 = var3.setTimeout;
            var4 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.ack;
                var13 = _closure2_slot0;
                var4 = {};
                var8 = _closure1_slot12;
                var8 = var8.ICYMI;
                var4['page'] = var8;
                var8 = _closure1_slot11;
                var8 = var8.ACK_MESSAGE_VIEWED;
                var4['object'] = var8;
                var3 = _closure1_slot10;
                var3 = var3.ACK_SEMI_AUTOMATIC;
                var4['objectType'] = var3;
                var9 = _closure2_slot1;
                var14 = var7;
                var12 = var4;
                var11 = true;
                var10 = true;
                var2 = var14[var6](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var3 = 1500;
            var3 = var7.bind(var1)(var4, var3);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 16;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var9 = _closure1_slot18;
            var7 = var9.CHANNEL;
            var4 = arg2;
            var7 = var7.bind(var9)(var4, var10, var6);
            var4 = {'openChannel': true, 'navigationReplace': false};
            var4 = var8.bind(var1)(var7, var4);
            var4 = null;
            var4 = var4 == var6;
            if(var4) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var4 = var5;
case 42:
            if(var4) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.runAfterInteractions;
            var3 = function() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 18;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchMessages;
                var2 = {};
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var5 = _closure1_slot15;
                var2['limit'] = var5;
                var5 = {};
                var7 = _closure2_slot1;
                var5['messageId'] = var7;
                var7 = true;
                var5['flash'] = var7;
                var7 = _closure1_slot0;
                var6 = 19;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.JumpTypes;
                var6 = var6.ANIMATED;
                var5['jumpType'] = var6;
                var2['jump'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = 150;
            var2 = var4.bind(var5)(var3, var2);
case 44:
            return var1;
        }
    };
    var _closure1_slot27 = var8;
    var7 = function Separator() {
        var2 = _closure1_slot23;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot19;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.separator;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot28 = var7;
    var6 = function truncateUsername(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var3 = var5.length;
            var2 = 20;
            var1 = var5;
            if(!(var3 > var2)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var4 = var5.slice;
            var3 = 0;
            var2 = 17;
            var5 = var4.bind(var5)(var3, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '...';
            var1 = var4.bind(var3)(var5, var2);
case 46:
            return var1;
        }
    };
    var _closure1_slot29 = var6;
    var1 = function CutoutGuildIconWithUser(arg1) {
        var1 = arg1;
        var12 = var1.guild;
        var11 = var1.author;
        var1 = _closure1_slot23;
        var4 = undefined;
        var13 = var1.bind(var4)();
        var3 = _closure1_slot19;
        var2 = _closure1_slot31;
        var1 = {};
        var1['guild'] = var12;
        var7 = _closure1_slot19;
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var8 = 23;
        var5 = var10[var8];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var14 = true;
        var5['animate'] = var14;
        var13 = var13.authorIcon;
        var5['style'] = var13;
        var12 = var12.id;
        var5['guildId'] = var12;
        var5['user'] = var11;
        var9 = _closure1_slot0;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.AvatarSizes;
        var8 = var8.XSMALL;
        var5['size'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['icon'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot30 = var1;
    var5 = function CutoutGuildIcon(arg1) {
        var1 = arg1;
        var15 = var1.guild;
        var6 = var1.icon;
        var4 = _closure1_slot20;
        var3 = _closure1_slot4;
        var2 = {};
        var1 = {'width': 40, 'height': 40};
        var2['style'] = var1;
        var8 = _closure1_slot19;
        var10 = _closure1_slot1;
        var14 = _closure1_slot2;
        var11 = 24;
        var5 = var14[var11];
        var1 = undefined;
        var7 = var10.bind(var1)(var5);
        var5 = {};
        var12 = {'shape': null, 'x': 16, 'y': 14, 'size': 32};
        var13 = _closure1_slot0;
        var11 = var14[var11];
        var11 = var13.bind(var1)(var11);
        var11 = var11.CutoutShape;
        var11 = var11.Circle;
        var12['shape'] = var11;
        var11 = new Array(1);
        var11[0] = var12;
        var5['cutouts'] = var11;
        var11 = _closure1_slot19;
        var12 = 25;
        var9 = var14[var12];
        var10 = var10.bind(var1)(var9);
        var9 = {};
        var9['guild'] = var15;
        var12 = var14[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.GuildIconSizes;
        var12 = var12.NORMAL;
        var9['size'] = var12;
        var9 = var11.bind(var1)(var10, var9);
        var5['children'] = var9;
        var7 = var8.bind(var1)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot31 = var5;
    var4 = function GuildContentPost(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var28 = var1.guild;
            var _closure2_slot0 = var28;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var39 = var1.timestamp;
            var33 = var1.hideTimestamp;
            var6 = var1.children;
            var16 = var1.avatar;
            var34 = var1.title;
            var26 = var1.subtitle;
            var2 = var1.id;
            var _closure2_slot2 = var2;
            var2 = var1.type;
            var _closure2_slot3 = var2;
            var10 = var1.onHeaderPress;
            var9 = var1.onHeaderLongPress;
            var31 = var1.disableInteractions;
            var1 = _closure1_slot23;
            var4 = undefined;
            var27 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 26;
            var1 = var5[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useFontScale;
            var13 = var1.bind(var2)();
            var3 = _closure1_slot20;
            var2 = _closure1_slot21;
            var1 = {};
            var8 = _closure1_slot19;
            var25 = 27;
            var5 = var5[var25];
            var5 = var7.bind(var4)(var5);
            var7 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var10;
            var5['onLongPress'] = var9;
            var9 = var27.content;
            var5['style'] = var9;
            var11 = _closure1_slot19;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = 1.8;
            if(!(!(var13 > var12))) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var12 = var27.channelNameAndAccessory;
            _fun0005_ip = 50; continue _fun0005;
case 48:
            var12 = var27.channelNameAndAccessoryLarge;
case 50:
            var9['style'] = var12;
            var14 = _closure1_slot20;
            var13 = _closure1_slot4;
            var12 = {};
            var15 = var27.header;
            var12['style'] = var15;
            var15 = new Array(2);
            var15[0] = var16;
            var18 = _closure1_slot20;
            var17 = _closure1_slot4;
            var16 = {};
            var19 = var27.headerInfo;
            var16['style'] = var19;
            var21 = _closure1_slot20;
            var20 = _closure1_slot4;
            var19 = {};
            var22 = var27.title;
            var19['style'] = var22;
            var29 = _closure1_slot20;
            var24 = _closure1_slot4;
            var22 = {};
            var32 = var27.titleLeft;
            var22['style'] = var32;
            var32 = new Array(2);
            var32[0] = var34;
            var33 = !var33;
            if(!var33) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var36 = _closure1_slot19;
            var38 = _closure1_slot0;
            var40 = _closure1_slot2;
            var34 = 28;
            var34 = var40[var34];
            var34 = var38.bind(var4)(var34);
            var35 = var34.Text;
            var34 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            var37 = 29;
            var37 = var40[var37];
            var38 = var38.bind(var4)(var37);
            var37 = var38.getRelativeTimestamp;
            var37 = var37.bind(var38)(var39);
            var34['children'] = var37;
            var33 = var36.bind(var4)(var35, var34);
case 51:
            var32[1] = var33;
            var22['children'] = var32;
            var24 = var29.bind(var4)(var24, var22);
            var22 = new Array(2);
            var22[0] = var24;
            var29 = null;
            var24 = null;
            if(var31) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var28 = var29 == var28;
            var24 = null;
            if(var28) { _fun0005_ip = 53; continue _fun0005 }
case 55:
            var29 = _closure1_slot19;
            var31 = _closure1_slot0;
            var35 = _closure1_slot2;
            var25 = var35[var25];
            var25 = var31.bind(var4)(var25);
            var28 = var25.PressableOpacity;
            var25 = {};
            var30 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 30;
                    var1 = var3[var1];
                    var5 = undefined;
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.openDetailsActionSheet;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1['guildId'] = var6;
                    var7 = _closure2_slot1;
                    var6 = null;
                    var6 = var6 == var7;
                    if(var6) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var6 = _closure2_slot1;
                    var5 = var6.id;
case 56:
                    var1['channelId'] = var5;
                    var5 = _closure2_slot2;
                    var1['id'] = var5;
                    var4 = _closure2_slot3;
                    var1['type'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var25['onPress'] = var30;
            var30 = var27.subtitleTrailing;
            var25['style'] = var30;
            var30 = 8;
            var25['hitSlop'] = var30;
            var32 = _closure1_slot19;
            var30 = 31;
            var30 = var35[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.MoreHorizontalIcon;
            var30 = {};
            var34 = _closure1_slot1;
            var33 = 22;
            var33 = var35[var33];
            var33 = var34.bind(var4)(var33);
            var33 = var33.colors;
            var33 = var33.INTERACTIVE_MUTED;
            var30['color'] = var33;
            var33 = 'sm';
            var30['size'] = var33;
            var30 = var32.bind(var4)(var31, var30);
            var25['children'] = var30;
            var24 = var29.bind(var4)(var28, var25);
case 53:
            var22[1] = var24;
            var19['children'] = var22;
            var20 = var21.bind(var4)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var22 = _closure1_slot19;
            var21 = _closure1_slot4;
            var20 = {};
            var24 = var27.subTitleContainer;
            var20['style'] = var24;
            var25 = _closure1_slot19;
            var24 = _closure1_slot4;
            var23 = {};
            var27 = var27.subtitle;
            var23['style'] = var27;
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var13 = var12[var1];
    var9 = metroImportAll;
    var1 = undefined;
    var9 = var9.bind(var1)(var13);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var9 = var9.View;
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var10 = var9.AnalyticsObjectTypes;
    var _closure1_slot10 = var10;
    var10 = var9.AnalyticsObjects;
    var _closure1_slot11 = var10;
    var10 = var9.AnalyticsPages;
    var _closure1_slot12 = var10;
    var10 = var9.ChannelTypes;
    var _closure1_slot13 = var10;
    var10 = var9.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot14 = var10;
    var10 = var9.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot15 = var10;
    var10 = var9.MessageFlags;
    var _closure1_slot16 = var10;
    var10 = var9.Permissions;
    var _closure1_slot17 = var10;
    var9 = var9.Routes;
    var _closure1_slot18 = var9;
    var9 = 8;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var10 = var9.jsx;
    var _closure1_slot19 = var10;
    var10 = var9.jsxs;
    var _closure1_slot20 = var10;
    var9 = var9.Fragment;
    var _closure1_slot21 = var9;
    var9 = {};
    var10 = 'POPULAR_MESSAGE';
    var9['POPULAR_MESSAGE'] = var10;
    var10 = 'IMAGE';
    var9['IMAGE'] = var10;
    var10 = 'VIDEO';
    var9['VIDEO'] = var10;
    var10 = 'LINK';
    var9['LINK'] = var10;
    var10 = 'THREAD';
    var9['THREAD'] = var10;
    var10 = 'CHANGED_STATUS';
    var9['CHANGED_STATUS'] = var10;
    var10 = 'INTERESTING';
    var9['INTERESTING'] = var10;
    var10 = 'ANNOUNCEMENT';
    var9['ANNOUNCEMENT'] = var10;
    var10 = 'FORUM_POST';
    var9['FORUM_POST'] = var10;
    var10 = 'FILE';
    var9['FILE'] = var10;
    var10 = 'TRENDING_TOPIC';
    var9['TRENDING_TOPIC'] = var10;
    var10 = 'PRO_TIP';
    var9['PRO_TIP'] = var10;
    var _closure1_slot22 = var9;
    var10 = 20;
    var10 = var12[var10];
    var14 = var11.bind(var1)(var10);
    var13 = var14.createICYMIStyles;
    var10 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var8 = arg1;
            var1 = {};
            var2 = {'flex': 1, 'marginTop': null, 'overflow': 'hidden'};
            var7 = 1;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var10 = 21;
            var4 = var4[var10];
            var5 = undefined;
            var6 = var6.bind(var5)(var4);
            var4 = var6.isAndroid;
            var9 = var4.bind(var6)();
            var6 = 0;
            if(!var9) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var6 = -2;
case 58:
            var2['marginTop'] = var6;
            var1['simplePostContent'] = var2;
            var2 = {'flex': 1, 'marginTop': null, 'overflow': 'hidden'};
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var9 = var9.bind(var5)(var6);
            var6 = var9.isAndroid;
            var6 = var6.bind(var9)();
            var4 = 0;
            if(!var6) { _fun0007_ip = 42; continue _fun0007 }
case 60:
            var4 = -2;
case 42:
            var2['marginTop'] = var4;
            var4 = var8.margin;
            var2['paddingTop'] = var4;
            var1['content'] = var2;
            var2 = {'position': 'absolute', 'right': 4294967292, 'bottom': 4294967294, 'padding': 4};
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 22;
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.round;
            var2['borderRadius'] = var9;
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var9;
            var1['insetIconWrapper'] = var2;
            var2 = {'position': 'absolute', 'right': 4294967292, 'bottom': 4294967294};
            var1['authorIcon'] = var2;
            var2 = {};
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.HEADER_MUTED;
            var2['tintColor'] = var9;
            var1['moreDetailsIcon'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
            var9 = var8.margin;
            var2['paddingBottom'] = var9;
            var9 = var8.margin;
            var2['marginHorizontal'] = var9;
            var1['channelNameAndAccessory'] = var2;
            var2 = {};
            var9 = 'column';
            var2['flexDirection'] = var9;
            var9 = var8.margin;
            var2['paddingBottom'] = var9;
            var9 = var8.margin;
            var2['marginHorizontal'] = var9;
            var1['channelNameAndAccessoryLarge'] = var2;
            var2 = {'flexDirection': 'row', 'flexGrow': 1};
            var1['header'] = var2;
            var2 = {'flexGrow': 1, 'flexShrink': 1};
            var8 = var8.margin;
            var2['marginLeft'] = var8;
            var1['headerInfo'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginBottom': 2};
            var1['title'] = var2;
            var2 = {'flexShrink': 1, 'flexGrow': 0, 'flexDirection': 'row', 'alignItems': 'center', 'gap': 6};
            var1['titleLeft'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'space-between'};
            var8 = var6[var3];
            var8 = var4.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.sm;
            var2['borderRadius'] = var8;
            var1['subTitleContainer'] = var2;
            var2 = {'flexShrink': 1, 'flexGrow': 0, 'width': '100%'};
            var1['subtitle'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var8 = var6[var3];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['gap'] = var8;
            var1['summarySubtitle'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var8 = var6[var3];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['gap'] = var8;
            var1['genContentSubtitle'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 2, 'flex': 1};
            var1['genContentSubtitleChannel'] = var2;
            var2 = {};
            var2['paddingVertical'] = var7;
            var1['subtitleTrailing'] = var2;
            var2 = {'height': 1, 'width': '100%'};
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BORDER_SUBTLE;
            var2['backgroundColor'] = var7;
            var1['separator'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var1['eventsSubtitle'] = var2;
            var2 = {'padding': 8, 'backgroundColor': null, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var7;
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.md;
            var2['borderRadius'] = var7;
            var1['comments'] = var2;
            var2 = {'flexGrow': 1, 'flexShrink': 1, 'marginRight': 12};
            var1['recentCommentText'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 2, 'justifySelf': 'end'};
            var1['commentCount'] = var2;
            var2 = {'width': 20, 'height': 20};
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.INTERACTIVE_NORMAL;
            var2['tintColor'] = var7;
            var1['commentsIcon'] = var2;
            var2 = {};
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.TEXT_LOW_CONTRAST;
            var2['tintColor'] = var3;
            var1['chevron'] = var2;
            return var1;
        }
    };
    var10 = var13.bind(var14)(var10);
    var _closure1_slot23 = var10;
    var10 = {};
    var13 = 'function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}';
    var10['code'] = var13;
    var _closure1_slot24 = var10;
    var10 = 52;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/icymi/native/ICYMIShared.tsx';
    var10 = var11.bind(var12)(var10);
    var3['ContentType'] = var9;
    var3['navigateToPost'] = var8;
    var3['Separator'] = var7;
    var3['truncateUsername'] = var6;
    var3['CutoutGuildIcon'] = var5;
    var3['GuildContentPost'] = var4;
    var4 = function AnnouncementContentPost(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var22 = var2.guild;
            var _closure2_slot0 = var22;
            var9 = var2.channel;
            var _closure2_slot1 = var9;
            var18 = var2.author;
            var _closure2_slot2 = var18;
            var10 = var2.timestamp;
            var5 = var2.children;
            var6 = var2.id;
            var _closure2_slot3 = var6;
            var16 = var2.mentioned;
            var8 = var2.onHeaderPress;
            var7 = var2.onHeaderLongPress;
            var2 = _closure1_slot23;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 32;
            var2 = var11[var2];
            var12 = var3.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot7;
                var3 = var4.getMember;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure2_slot2;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var11.bind(var12)(var3, var2);
            var2 = null;
            var11 = var2 == var3;
            var20 = undefined;
            if(var11) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            var20 = var3.colorString;
case 61:
            if(!(var2 == var20)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            var20 = _closure1_slot14;
case 63:
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 33;
            var2 = var21[var2];
            var12 = var17.bind(var4)(var2);
            var11 = var12.useName;
            var3 = var22.id;
            var2 = var9.id;
            var19 = var11.bind(var12)(var3, var2, var18);
            var11 = _closure1_slot3;
            var3 = var11.useCallback;
            var12 = var18.id;
            var2 = new Array(3);
            var2[0] = var12;
            var12 = var9.id;
            var2[1] = var12;
            var2[2] = var6;
            var1 = function() {
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 34;
                var2 = var5[var1];
                var1 = undefined;
                var9 = var3.bind(var1)(var2);
                var8 = var9.itemInteracted;
                var7 = _closure2_slot3;
                var6 = 'announcement';
                var2 = 'open_profile';
                var2 = var8.bind(var9)(var7, var6, var2);
                var2 = 35;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot2;
                var5 = var5.id;
                var2['userId'] = var5;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var2['channelId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14 = var3.bind(var11)(var1, var2);
            var3 = _closure1_slot19;
            var2 = _closure1_slot32;
            var1 = {};
            var1['guild'] = var22;
            var1['channel'] = var9;
            var1['timestamp'] = var10;
            var12 = _closure1_slot19;
            var11 = _closure1_slot30;
            var10 = {};
            var10['guild'] = var22;
            var10['author'] = var18;
            var10 = var12.bind(var4)(var11, var10);
            var1['avatar'] = var10;
            var18 = _closure1_slot19;
            var12 = 28;
            var10 = var21[var12];
            var10 = var17.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-muted'};
            var23 = {};
            var24 = 225;
            var23['maxWidth'] = var24;
            var10['style'] = var23;
            var22 = var22.name;
            var10['children'] = var22;
            var9 = var9.id;
            var9 = var18.bind(var4)(var11, var10, var9);
            var1['title'] = var9;
            var11 = _closure1_slot20;
            var9 = var21[var12];
            var9 = var17.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'lineClamp': 2, 'variant': 'text-md/normal', 'color': 'header-secondary'};
            var15 = var15.subtitle;
            var9['style'] = var15;
            var18 = _closure1_slot19;
            var12 = var21[var12];
            var12 = var17.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {};
            var22 = 'text-md/semibold';
            var12['variant'] = var22;
            var12['onPress'] = var14;
            var14 = {};
            var14['color'] = var20;
            var12['style'] = var14;
            var14 = _closure1_slot29;
            var19 = var14.bind(var4)(var19);
            var14 = ' ';
            var19 = var19 + var14;
            var12['children'] = var19;
            var15 = var18.bind(var4)(var15, var12);
            var12 = new Array(3);
            var12[0] = var15;
            var18 = _closure1_slot19;
            var15 = 36;
            var15 = var21[var15];
            var15 = var17.bind(var4)(var15);
            var17 = var15.AnnouncementsIcon;
            var15 = {};
            var19 = 'sm';
            var15['size'] = var19;
            var20 = _closure1_slot1;
            var19 = 22;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.colors;
            var19 = var19.HEADER_SECONDARY;
            var15['color'] = var19;
            var15 = var18.bind(var4)(var17, var15);
            var12[1] = var15;
            var15 = _closure1_slot26;
            var13 = _closure1_slot22;
            var13 = var13.ANNOUNCEMENT;
            var13 = var15.bind(var4)(var13, var16);
            var13 = var14 + var13;
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var1['subtitle'] = var9;
            var1['onHeaderPress'] = var8;
            var1['onHeaderLongPress'] = var7;
            var1['id'] = var6;
            var6 = 'announcement';
            var1['type'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['AnnouncementContentPost'] = var4;
    var4 = function GuildEventPost(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var11 = var1.guild;
            var _closure2_slot0 = var11;
            var9 = var1.channel;
            var _closure2_slot1 = var9;
            var5 = var1.children;
            var8 = var1.event;
            var _closure2_slot2 = var8;
            var7 = var1.type;
            var _closure2_slot3 = var7;
            var6 = var1.onHeaderPress;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot23;
            var13 = var1.bind(var4)();
            var16 = var8.host_id;
            var12 = null;
            if(!(var12 == var16)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var16 = var8.creator_id;
case 65:
            _closure2_slot4 = var16;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 37;
            var1 = var10[var1];
            var14 = var3.bind(var4)(var1);
            var10 = var14.useEnsureHydratedUsers;
            var3 = var8.guild_id;
            if(!(var12 == var16)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var1 = new Array(0);
            _fun0009_ip = 69; continue _fun0009;
case 67:
            var15 = new Array(1);
            var15[0] = var16;
            var1 = var15;
case 69:
            var1 = var10.bind(var14)(var3, var1);
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 32;
            var14 = var10[var1];
            var17 = var3.bind(var4)(var14);
            var16 = var17.useStateFromStores;
            var14 = _closure1_slot9;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getUser;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var16.bind(var17)(var15, var14);
            _closure2_slot5 = var19;
            var1 = var10[var1];
            var14 = var3.bind(var4)(var1);
            var10 = var14.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var5 = _closure1_slot7;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2);
case 70:
                    return var1;
                }
            };
            var1 = var10.bind(var14)(var3, var1);
            _closure2_slot6 = var1;
            var14 = _closure1_slot3;
            var10 = var14.useCallback;
            var3 = new Array(5);
            var3[0] = var19;
            var16 = var12 == var9;
            var15 = undefined;
            if(var16) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var15 = var9.id;
case 72:
            var3[1] = var15;
            var15 = var8.id;
            var3[2] = var15;
            var16 = var12 == var1;
            var15 = undefined;
            if(var16) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var15 = var1.highestRoleId;
case 74:
            var3[3] = var15;
            var3[4] = var7;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0011_ip = 63; continue _fun0011 }
case 71:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 34;
                    var1 = var4[var1];
                    var3 = undefined;
                    var10 = var2.bind(var3)(var1);
                    var9 = var10.itemInteracted;
                    var1 = _closure2_slot2;
                    var8 = var1.id;
                    var7 = _closure2_slot3;
                    var1 = 'open_profile';
                    var1 = var9.bind(var10)(var8, var7, var1);
                    var1 = 35;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var4 = _closure2_slot5;
                    var4 = var4.id;
                    var1['userId'] = var4;
                    var4 = _closure2_slot6;
                    var7 = var6 == var4;
                    var4 = undefined;
                    if(var7) { _fun0011_ip = 60; continue _fun0011 }
case 76:
                    var7 = _closure2_slot6;
                    var4 = var7.highestRoleId;
case 60:
                    var1['roleId'] = var4;
                    var4 = _closure2_slot1;
                    var6 = var6 == var4;
                    var4 = undefined;
                    if(var6) { _fun0011_ip = 77; continue _fun0011 }
case 67:
                    var5 = _closure2_slot1;
                    var4 = var5.id;
case 77:
                    var1['channelId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = var10.bind(var14)(var2, var3);
            var2 = var12 == var1;
            var24 = undefined;
            if(var2) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var24 = var1.colorString;
case 78:
            if(!(var12 == var24)) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            var24 = _closure1_slot14;
case 80:
            var1 = var8.host_id;
            var17 = var12 != var1;
            var3 = _closure1_slot19;
            var2 = _closure1_slot32;
            var1 = {};
            var1['guild'] = var11;
            var1['channel'] = var9;
            var9 = 0;
            var1['timestamp'] = var9;
            var9 = true;
            var1['hideTimestamp'] = var9;
            if(!(var12 == var19)) { _fun0009_ip = 27; continue _fun0009 }
case 82:
            var14 = _closure1_slot19;
            var10 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 25;
            var9 = var20[var15];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['guild'] = var11;
            var16 = _closure1_slot0;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.GuildIconSizes;
            var15 = var15.NORMAL;
            var9['size'] = var15;
            var9 = var14.bind(var4)(var10, var9);
            _fun0009_ip = 83; continue _fun0009;
case 27:
            var15 = _closure1_slot19;
            var14 = _closure1_slot30;
            var10 = {};
            var10['guild'] = var11;
            var10['author'] = var19;
            var9 = var15.bind(var4)(var14, var10);
case 83:
            var1['avatar'] = var9;
            var20 = _closure1_slot19;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var16 = 28;
            var14 = var9[var16];
            var14 = var10.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-muted'};
            var21 = {};
            var22 = 225;
            var21['maxWidth'] = var22;
            var14['style'] = var21;
            var11 = var11.name;
            var14['children'] = var11;
            var11 = var8.id;
            var11 = var20.bind(var4)(var15, var14, var11);
            var1['title'] = var11;
            var11 = _closure1_slot19;
            var9 = var9[var16];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'lineClamp': 2, 'variant': 'text-md/normal', 'color': 'header-secondary'};
            var13 = var13.subtitle;
            var9['style'] = var13;
            var14 = _closure1_slot20;
            var13 = _closure1_slot21;
            if(!(var12 == var19)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var12 = {};
            var21 = _closure1_slot19;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = 38;
            var15 = var26[var15];
            var15 = var25.bind(var4)(var15);
            var20 = var15.CalendarIcon;
            var15 = {};
            var22 = 'sm';
            var15['size'] = var22;
            var27 = _closure1_slot1;
            var22 = 22;
            var22 = var26[var22];
            var22 = var27.bind(var4)(var22);
            var22 = var22.colors;
            var22 = var22.HEADER_SECONDARY;
            var15['color'] = var22;
            var20 = var21.bind(var4)(var20, var15);
            var15 = new Array(2);
            var15[0] = var20;
            var20 = 14;
            var21 = var26[var20];
            var21 = var25.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var26[var20];
            var20 = var25.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.T7MIsb;
            var21 = var21.bind(var22)(var20);
            var20 = ' ';
            var20 = var20 + var21;
            var15[1] = var20;
            var12['children'] = var15;
            _fun0009_ip = 86; continue _fun0009;
case 84:
            var15 = {};
            var22 = _closure1_slot19;
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = var25[var16];
            var16 = var21.bind(var4)(var16);
            var20 = var16.Text;
            var16 = {};
            var26 = 'text-md/semibold';
            var16['variant'] = var26;
            var16['onPress'] = var23;
            var23 = {};
            var23['color'] = var24;
            var16['style'] = var23;
            var23 = _closure1_slot29;
            var19 = var19.username;
            var23 = var23.bind(var4)(var19);
            var19 = ' ';
            var23 = var23 + var19;
            var16['children'] = var23;
            var20 = var22.bind(var4)(var20, var16);
            var16 = new Array(3);
            var16[0] = var20;
            var22 = _closure1_slot19;
            var20 = 38;
            var20 = var25[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.CalendarIcon;
            var20 = {};
            var23 = 'sm';
            var20['size'] = var23;
            var24 = _closure1_slot1;
            var23 = 22;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.HEADER_SECONDARY;
            var20['color'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var16[1] = var20;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 14;
            var20 = var23[var18];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var18 = var23[var18];
            var18 = var22.bind(var4)(var18);
            var18 = var18.t;
            if(var17) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var17 = var18.Vu15sb;
            var17 = var20.bind(var21)(var17);
            var17 = var19 + var17;
            _fun0009_ip = 89; continue _fun0009;
case 87:
            var18 = var18.42OrOz;
            var18 = var20.bind(var21)(var18);
            var17 = var19 + var18;
case 89:
            var16[2] = var17;
            var15['children'] = var16;
            var12 = var15;
case 86:
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var1['subtitle'] = var9;
            var8 = var8.id;
            var1['id'] = var8;
            var1['type'] = var7;
            var1['onHeaderPress'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildEventPost'] = var4;
    var4 = function SummaryContentPost(arg1) {
        var3 = arg1;
        var11 = var3.guild;
        var19 = var3.channel;
        var _closure2_slot0 = var19;
        var2 = var3.author;
        var _closure2_slot1 = var2;
        var12 = var3.timestamp;
        var5 = var3.children;
        var10 = var3.id;
        var _closure2_slot2 = var10;
        var9 = var3.type;
        var _closure2_slot3 = var9;
        var8 = var3.disableInteractions;
        var7 = var3.onHeaderPress;
        var6 = var3.onHeaderLongPress;
        var3 = _closure1_slot23;
        var4 = undefined;
        var14 = var3.bind(var4)();
        var13 = _closure1_slot3;
        var3 = var13.useCallback;
        var15 = var2.id;
        var2 = new Array(4);
        var2[0] = var15;
        var15 = var19.id;
        var2[1] = var15;
        var2[2] = var10;
        var2[3] = var9;
        var1 = function() {
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 34;
            var2 = var5[var1];
            var1 = undefined;
            var9 = var3.bind(var1)(var2);
            var8 = var9.itemInteracted;
            var7 = _closure2_slot2;
            var6 = _closure2_slot3;
            var2 = 'open_profile';
            var2 = var8.bind(var9)(var7, var6, var2);
            var2 = 35;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = {};
            var5 = _closure2_slot1;
            var5 = var5.id;
            var2['userId'] = var5;
            var4 = _closure2_slot0;
            var4 = var4.id;
            var2['channelId'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var23 = var3.bind(var13)(var1, var2);
        var3 = _closure1_slot19;
        var2 = _closure1_slot32;
        var1 = {};
        var1['guild'] = var11;
        var1['channel'] = var19;
        var1['timestamp'] = var12;
        var15 = _closure1_slot19;
        var13 = _closure1_slot31;
        var12 = {};
        var12['guild'] = var11;
        var20 = _closure1_slot19;
        var18 = _closure1_slot4;
        var17 = {};
        var21 = var14.insetIconWrapper;
        var17['style'] = var21;
        var26 = _closure1_slot19;
        var21 = _closure1_slot0;
        var22 = _closure1_slot2;
        var24 = 39;
        var24 = var22[var24];
        var24 = var21.bind(var4)(var24);
        var25 = var24.TextIcon;
        var24 = {'size': 'xs', 'color': 'header-primary'};
        var24 = var26.bind(var4)(var25, var24);
        var17['children'] = var24;
        var17 = var20.bind(var4)(var18, var17);
        var12['icon'] = var17;
        var12 = var15.bind(var4)(var13, var12);
        var1['avatar'] = var12;
        var17 = _closure1_slot19;
        var15 = 28;
        var12 = var22[var15];
        var12 = var21.bind(var4)(var12);
        var13 = var12.Text;
        var12 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-muted'};
        var18 = {};
        var20 = 225;
        var18['maxWidth'] = var20;
        var12['style'] = var18;
        var20 = 1;
        var11 = var11.name;
        var12['children'] = var11;
        var11 = var19.id;
        var11 = var17.bind(var4)(var13, var12, var11);
        var1['title'] = var11;
        var13 = _closure1_slot20;
        var12 = _closure1_slot4;
        var11 = {};
        var14 = var14.summarySubtitle;
        var11['style'] = var14;
        var18 = _closure1_slot19;
        var14 = var22[var15];
        var14 = var21.bind(var4)(var14);
        var17 = var14.Text;
        var14 = {};
        var24 = 'text-md/semibold';
        var14['variant'] = var24;
        var14['onPress'] = var23;
        var23 = {};
        var23['flexShrink'] = var20;
        var14['style'] = var23;
        var14['lineClamp'] = var20;
        var19 = var19.name;
        var14['children'] = var19;
        var17 = var18.bind(var4)(var17, var14);
        var14 = new Array(3);
        var14[0] = var17;
        var19 = _closure1_slot19;
        var18 = _closure1_slot1;
        var17 = 40;
        var17 = var22[var17];
        var18 = var18.bind(var4)(var17);
        var17 = {};
        var17 = var19.bind(var4)(var18, var17);
        var14[1] = var17;
        var17 = _closure1_slot19;
        var15 = var22[var15];
        var15 = var21.bind(var4)(var15);
        var16 = var15.Text;
        var15 = {'variant': 'text-md/medium', 'color': 'text-brand'};
        var18 = 14;
        var19 = var22[var18];
        var19 = var21.bind(var4)(var19);
        var20 = var19.intl;
        var19 = var20.string;
        var18 = var22[var18];
        var18 = var21.bind(var4)(var18);
        var18 = var18.t;
        var18 = var18.zQJqxM;
        var18 = var19.bind(var20)(var18);
        var15['children'] = var18;
        var15 = var17.bind(var4)(var16, var15);
        var14[2] = var15;
        var11['children'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var1['subtitle'] = var11;
        var1['id'] = var10;
        var1['type'] = var9;
        var1['disableInteractions'] = var8;
        var1['onHeaderPress'] = var7;
        var1['onHeaderLongPress'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SummaryContentPost'] = var4;
    var4 = function MessageContentPost(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var24 = var3.guild;
            var _closure2_slot0 = var24;
            var10 = var3.channel;
            var _closure2_slot1 = var10;
            var11 = var3.timestamp;
            var18 = var3.author;
            var _closure2_slot2 = var18;
            var2 = var3.message;
            var _closure2_slot3 = var2;
            var5 = var3.children;
            var7 = var3.id;
            var _closure2_slot4 = var7;
            var6 = var3.type;
            var _closure2_slot5 = var6;
            var9 = var3.onHeaderPress;
            var8 = var3.onHeaderLongPress;
            var12 = _closure1_slot3;
            var4 = var12.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure2_slot1;
                var3 = _closure2_slot3;
                var2 = function determineContentType(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var4 = arg1;
                        var3 = arg2;
                        var6 = var4.type;
                        var5 = _closure1_slot13;
                        var5 = var5.GUILD_ANNOUNCEMENT;
                        if(!(var6 !== var5)) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                        var5 = var4.type;
                        var4 = _closure1_slot13;
                        var4 = var4.GUILD_FORUM;
                        if(!(var5 !== var4)) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                        var5 = var3.reactions;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0013_ip = 42; continue _fun0013 }
case 58:
                        var6 = var3.reactions;
                        var5 = var6.map;
                        var4 = function(arg1) {
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                var4 = arg1;
                                var1 = var4.count_details;
                                var5 = null;
                                var2 = var5 == var1;
                                var1 = 0;
                                if(var2) { _fun0014_ip = 94; continue _fun0014 }
case 95:
                                var2 = var4.count_details;
                                var6 = var2.burst;
                                var7 = var5 != var6;
                                var2 = 0;
                                if(!var7) { _fun0014_ip = 96; continue _fun0014 }
case 97:
                                var2 = var6;
case 96:
                                var4 = var4.count_details;
                                var4 = var4.normal;
                                var5 = var5 != var4;
                                var3 = 0;
                                if(!var5) { _fun0014_ip = 9; continue _fun0014 }
case 98:
                                var3 = var4;
case 9:
                                var1 = var2 + var3;
case 94:
                                return var1;
                            }
                        };
                        var5 = var5.bind(var6)(var4);
                        var6 = var5.length;
                        var4 = 0;
                        if(!(var4 !== var6)) { _fun0013_ip = 42; continue _fun0013 }
case 99:
                        var4 = var5.reduce;
                        var2 = function(arg1, arg2) {
                            var2 = arg1;
                            var1 = arg2;
                            var1 = var2 + var1;
                            return var1;
                        };
                        var4 = var4.bind(var5)(var2);
                        var2 = 10;
                        if(!(!(var4 > var2))) { _fun0013_ip = 100; continue _fun0013 }
case 42:
                        var2 = var3.attachments;
                        var2 = var2.length;
                        var6 = 0;
                        if(!(!(var2 > var6))) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                        var2 = var3.embeds;
                        var2 = var2.length;
                        if(!(!(var2 > var6))) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                        var2 = _closure1_slot22;
                        var2 = var2.INTERESTING;
                        _fun0013_ip = 105; continue _fun0013;
case 103:
                        var4 = _closure1_slot22;
                        var2 = var4.LINK;
case 105:
                        _fun0013_ip = 106; continue _fun0013;
case 101:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var8 = 9;
                        var4 = var4[var8];
                        var7 = undefined;
                        var9 = var5.bind(var7)(var4);
                        var5 = var9.isValidImageAttachment;
                        var4 = var3.attachments;
                        var4 = var4[var6];
                        var4 = var5.bind(var9)(var4);
                        if(var4) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.isValidVideoAttachment;
                        var3 = var3.attachments;
                        var3 = var3[var6];
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot22;
                        if(var3) { _fun0013_ip = 109; continue _fun0013 }
case 33:
                        var3 = var4.FILE;
                        _fun0013_ip = 110; continue _fun0013;
case 109:
                        var3 = var4.VIDEO;
case 110:
                        _fun0013_ip = 111; continue _fun0013;
case 107:
                        var4 = _closure1_slot22;
                        var3 = var4.IMAGE;
case 111:
                        var2 = var3;
case 106:
                        return var2;
case 100:
                        var2 = _closure1_slot22;
                        var2 = var2.POPULAR_MESSAGE;
                        return var2;
case 92:
                        var2 = _closure1_slot22;
                        var2 = var2.FORUM_POST;
                        return var2;
case 90:
                        var1 = _closure1_slot22;
                        var1 = var1.ANNOUNCEMENT;
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var16 = var4.bind(var12)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 32;
            var2 = var4[var2];
            var4 = undefined;
            var13 = var3.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot7;
                var3 = var4.getMember;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure2_slot2;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var12.bind(var13)(var3, var2);
            var2 = null;
            var12 = var2 == var3;
            var23 = undefined;
            if(var12) { _fun0012_ip = 112; continue _fun0012 }
case 105:
            var23 = var3.colorString;
case 112:
            if(!(var2 == var23)) { _fun0012_ip = 113; continue _fun0012 }
case 114:
            var23 = _closure1_slot14;
case 113:
            var17 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = 33;
            var2 = var22[var2];
            var13 = var17.bind(var4)(var2);
            var12 = var13.useName;
            var3 = var24.id;
            var2 = var10.id;
            var20 = var12.bind(var13)(var3, var2, var18);
            var2 = _closure1_slot25;
            var19 = var2.bind(var4)(var16);
            var3 = _closure1_slot3;
            var12 = var3.useCallback;
            var13 = var18.id;
            var2 = new Array(4);
            var2[0] = var13;
            var13 = var10.id;
            var2[1] = var13;
            var2[2] = var7;
            var2[3] = var6;
            var1 = function() {
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 34;
                var2 = var5[var1];
                var1 = undefined;
                var9 = var3.bind(var1)(var2);
                var8 = var9.itemInteracted;
                var7 = _closure2_slot4;
                var6 = _closure2_slot5;
                var2 = 'open_profile';
                var2 = var8.bind(var9)(var7, var6, var2);
                var2 = 35;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot2;
                var5 = var5.id;
                var2['userId'] = var5;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var2['channelId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15 = var12.bind(var3)(var1, var2);
            var2 = var3.useContext;
            var1 = 41;
            var1 = var22[var1];
            var1 = var17.bind(var4)(var1);
            var1 = var1.ICYMIContext;
            var1 = var2.bind(var3)(var1);
            var21 = var1.margin;
            var3 = _closure1_slot19;
            var2 = _closure1_slot32;
            var1 = {};
            var1['guild'] = var24;
            var1['channel'] = var10;
            var1['timestamp'] = var11;
            var13 = _closure1_slot19;
            var12 = _closure1_slot30;
            var11 = {};
            var11['guild'] = var24;
            var11['author'] = var18;
            var11 = var13.bind(var4)(var12, var11);
            var1['avatar'] = var11;
            var18 = _closure1_slot19;
            var13 = 28;
            var11 = var22[var13];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var25 = {};
            var26 = 225;
            var25['maxWidth'] = var26;
            var11['style'] = var25;
            var24 = var24.name;
            var11['children'] = var24;
            var10 = var10.id;
            var10 = var18.bind(var4)(var12, var11, var10);
            var1['title'] = var10;
            var12 = _closure1_slot20;
            var10 = var22[var13];
            var10 = var17.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'lineClamp': 2, 'variant': 'text-md/normal', 'color': 'header-secondary'};
            var18 = {};
            var18['marginRight'] = var21;
            var10['style'] = var18;
            var18 = _closure1_slot19;
            var13 = var22[var13];
            var13 = var17.bind(var4)(var13);
            var17 = var13.Text;
            var13 = {};
            var21 = {};
            var21['color'] = var23;
            var13['style'] = var21;
            var13['onPress'] = var15;
            var15 = 'text-md/semibold';
            var13['variant'] = var15;
            var15 = _closure1_slot29;
            var20 = var15.bind(var4)(var20);
            var15 = ' ';
            var20 = var20 + var15;
            var13['children'] = var20;
            var17 = var18.bind(var4)(var17, var13);
            var13 = new Array(3);
            var13[0] = var17;
            var18 = _closure1_slot19;
            var17 = {};
            var20 = 'sm';
            var17['size'] = var20;
            var21 = _closure1_slot1;
            var20 = 22;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.colors;
            var20 = var20.HEADER_SECONDARY;
            var17['color'] = var20;
            var17 = var18.bind(var4)(var19, var17);
            var13[1] = var17;
            var14 = _closure1_slot26;
            var14 = var14.bind(var4)(var16);
            var14 = var15 + var14;
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var1['subtitle'] = var10;
            var1['onHeaderPress'] = var9;
            var1['onHeaderLongPress'] = var8;
            var1['id'] = var7;
            var1['type'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MessageContentPost'] = var4;
    var4 = function GeneratedCandidateContentPost(arg1) {
        var3 = arg1;
        var9 = var3.guild;
        var _closure2_slot0 = var9;
        var20 = var3.channel;
        var _closure2_slot1 = var20;
        var5 = var3.children;
        var6 = var3.id;
        var _closure2_slot2 = var6;
        var10 = var3.timestamp;
        var2 = var3.type;
        var _closure2_slot3 = var2;
        var8 = var3.onHeaderPress;
        var7 = var3.onHeaderLongPress;
        var3 = _closure1_slot23;
        var4 = undefined;
        var16 = var3.bind(var4)();
        var11 = _closure1_slot3;
        var12 = var11.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure2_slot3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 42;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.GeneratedCandidateType;
                var1 = var1.PRO_TIP;
                if(!(var3 !== var1)) { _fun0015_ip = 115; continue _fun0015 }
case 70:
                var1 = _closure1_slot22;
                var1 = var1.TRENDING_TOPIC;
                _fun0015_ip = 116; continue _fun0015;
case 115:
                var2 = _closure1_slot22;
                var1 = var2.PRO_TIP;
case 116:
                return var1;
            }
        };
        var24 = var12.bind(var11)(var2, var3);
        var3 = var11.useCallback;
        var12 = var20.id;
        var2 = new Array(3);
        var2[0] = var12;
        var12 = var9.id;
        var2[1] = var12;
        var2[2] = var6;
        var1 = function() {
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 34;
            var2 = var2[var1];
            var1 = undefined;
            var8 = var4.bind(var1)(var2);
            var7 = var8.itemInteracted;
            var6 = _closure2_slot2;
            var5 = 'generated_candidate';
            var4 = 'open_channel';
            var4 = var7.bind(var8)(var6, var5, var4);
            var5 = _closure1_slot27;
            var3 = _closure2_slot1;
            var12 = var3.id;
            var2 = _closure2_slot0;
            var11 = var2.id;
            var9 = false;
            var13 = undefined;
            var10 = undefined;
            var2 = var13[var5](var12, var11, var10, var9, var8);
            return var1;
        };
        var21 = var3.bind(var11)(var1, var2);
        var1 = _closure1_slot25;
        var22 = var1.bind(var4)(var24);
        var3 = _closure1_slot19;
        var2 = _closure1_slot32;
        var1 = {};
        var1['guild'] = var9;
        var1['channel'] = var20;
        var1['timestamp'] = var10;
        var12 = _closure1_slot19;
        var11 = _closure1_slot31;
        var10 = {};
        var10['guild'] = var9;
        var15 = _closure1_slot19;
        var14 = _closure1_slot4;
        var13 = {};
        var17 = var16.insetIconWrapper;
        var13['style'] = var17;
        var18 = _closure1_slot19;
        var17 = {'size': 'xs', 'color': 'text-brand'};
        var17 = var18.bind(var4)(var22, var17);
        var13['children'] = var17;
        var13 = var15.bind(var4)(var14, var13);
        var10['icon'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var1['avatar'] = var10;
        var12 = _closure1_slot19;
        var18 = _closure1_slot0;
        var23 = _closure1_slot2;
        var17 = 28;
        var10 = var23[var17];
        var10 = var18.bind(var4)(var10);
        var11 = var10.Text;
        var10 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-muted'};
        var13 = {};
        var14 = 225;
        var13['maxWidth'] = var14;
        var10['style'] = var13;
        var22 = 1;
        var9 = var9.name;
        var10['children'] = var9;
        var9 = var20.id;
        var9 = var12.bind(var4)(var11, var10, var9);
        var1['title'] = var9;
        var11 = _closure1_slot20;
        var10 = _closure1_slot4;
        var9 = {};
        var12 = var16.genContentSubtitle;
        var9['style'] = var12;
        var14 = _closure1_slot19;
        var12 = var23[var17];
        var12 = var18.bind(var4)(var12);
        var13 = var12.Text;
        var12 = {'variant': 'text-md/medium', 'color': 'text-brand'};
        var15 = _closure1_slot26;
        var15 = var15.bind(var4)(var24);
        var12['children'] = var15;
        var13 = var14.bind(var4)(var13, var12);
        var12 = new Array(3);
        var12[0] = var13;
        var15 = _closure1_slot19;
        var13 = var23[var17];
        var13 = var18.bind(var4)(var13);
        var14 = var13.Text;
        var13 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
        var24 = 14;
        var25 = var23[var24];
        var25 = var18.bind(var4)(var25);
        var26 = var25.intl;
        var25 = var26.string;
        var24 = var23[var24];
        var24 = var18.bind(var4)(var24);
        var24 = var24.t;
        var24 = var24.CHUAYm;
        var24 = var25.bind(var26)(var24);
        var13['children'] = var24;
        var13 = var15.bind(var4)(var14, var13);
        var12[1] = var13;
        var15 = _closure1_slot20;
        var14 = _closure1_slot4;
        var13 = {};
        var16 = var16.genContentSubtitleChannel;
        var13['style'] = var16;
        var25 = _closure1_slot19;
        var16 = 39;
        var16 = var23[var16];
        var16 = var18.bind(var4)(var16);
        var24 = var16.TextIcon;
        var16 = {'size': 'xs', 'color': 'header-primary'};
        var24 = var25.bind(var4)(var24, var16);
        var16 = new Array(2);
        var16[0] = var24;
        var19 = _closure1_slot19;
        var17 = var23[var17];
        var17 = var18.bind(var4)(var17);
        var18 = var17.Text;
        var17 = {'variant': 'text-md/semibold', 'onPress': null, 'style': null, 'lineClamp': 1, 'ellipsizeMode': 'tail'};
        var17['onPress'] = var21;
        var21 = {};
        var21['flex'] = var22;
        var17['style'] = var21;
        var20 = var20.name;
        var17['children'] = var20;
        var17 = var19.bind(var4)(var18, var17);
        var16[1] = var17;
        var13['children'] = var16;
        var13 = var15.bind(var4)(var14, var13);
        var12[2] = var13;
        var9['children'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var1['subtitle'] = var9;
        var1['onHeaderPress'] = var8;
        var1['onHeaderLongPress'] = var7;
        var1['id'] = var6;
        var6 = 'generated_candidate';
        var1['type'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['GeneratedCandidateContentPost'] = var4;
    var4 = function SimplePost(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var11 = var1.children;
            var9 = var1.hideDivider;
            var1 = var1.highlight;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0016_ip = 117; continue _fun0016 }
case 118:
            var1 = false;
case 117:
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot23;
            var12 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 43;
            var3 = var16[var3];
            var3 = var5.bind(var4)(var3);
            var13 = var3.bind(var4)();
            var17 = _closure1_slot0;
            var3 = 44;
            var3 = var16[var3];
            var10 = var17.bind(var4)(var3);
            var7 = var10.useToken;
            var3 = 22;
            var6 = var16[var3];
            var6 = var5.bind(var4)(var6);
            var6 = var6.colors;
            var6 = var6.BACKGROUND_MESSAGE_HIGHLIGHT;
            var15 = var7.bind(var10)(var6, var13);
            _closure2_slot1 = var15;
            var6 = 45;
            var6 = var16[var6];
            var7 = var17.bind(var4)(var6);
            var6 = var7.hexWithOpacity;
            var3 = var16[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.unsafe_rawColors;
            var5 = var3.BRAND_360;
            var3 = 0.25;
            var13 = var6.bind(var7)(var5, var3);
            _closure2_slot2 = var13;
            var14 = 46;
            var3 = var16[var14];
            var6 = var17.bind(var4)(var3);
            var5 = var6.useSharedValue;
            var3 = 0;
            var7 = var5.bind(var6)(var3);
            _closure2_slot3 = var7;
            var3 = var16[var14];
            var6 = var17.bind(var4)(var3);
            var5 = var6.useAnimatedStyle;
            var3 = function c() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 46;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var5 = var6.interpolateColor;
                var4 = _closure2_slot3;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var7 = _closure2_slot1;
                var3 = new Array(2);
                var3[0] = var7;
                var2 = _closure2_slot2;
                var3[1] = var2;
                var2 = [0, 1];
                var2 = var5.bind(var6)(var4, var2, var3);
                var1['backgroundColor'] = var2;
                return var1;
            };
            var10 = {};
            var16 = var16[var14];
            var16 = var17.bind(var4)(var16);
            var16 = var16.interpolateColor;
            var10['interpolateColor'] = var16;
            var10['progress'] = var7;
            var10['bgColor'] = var15;
            var10['bgColorHighlighted'] = var13;
            var3['__closure'] = var10;
            var10 = 11116019021445.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot24;
            var3['__initData'] = var10;
            var13 = var5.bind(var6)(var3);
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var7;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0017_ip = 119; continue _fun0017 }
case 120:
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 46;
                    var1 = var12[var7];
                    var10 = undefined;
                    var6 = var11.bind(var10)(var1);
                    var5 = var6.withSequence;
                    var1 = 47;
                    var4 = var12[var1];
                    var14 = var11.bind(var10)(var4);
                    var13 = var14.withTiming;
                    var8 = {};
                    var9 = 500;
                    var8['duration'] = var9;
                    var4 = 1;
                    var4 = var13.bind(var14)(var4, var8);
                    var7 = var12[var7];
                    var8 = var11.bind(var10)(var7);
                    var7 = var8.withDelay;
                    var1 = var12[var1];
                    var12 = var11.bind(var10)(var1);
                    var11 = var12.withTiming;
                    var10 = {};
                    var1 = 350;
                    var10['duration'] = var1;
                    var1 = 0;
                    var1 = var11.bind(var12)(var1, var10);
                    var1 = var7.bind(var8)(var9, var1);
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
case 119:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot20;
            var2 = _closure1_slot21;
            var5 = {};
            var10 = _closure1_slot19;
            if(var1) { _fun0016_ip = 121; continue _fun0016 }
case 122:
            var6 = _closure1_slot4;
            var1 = {};
            var7 = var12.simplePostContent;
            var1['style'] = var7;
            var1['children'] = var11;
            var6 = var10.bind(var4)(var6, var1);
            var1 = new Array(2);
            var1[0] = var6;
            var6 = null;
            if(var9) { _fun0016_ip = 123; continue _fun0016 }
case 124:
            var16 = _closure1_slot19;
            var15 = _closure1_slot28;
            var7 = {};
            var6 = var16.bind(var4)(var15, var7);
case 123:
            var1[1] = var6;
            var5['children'] = var1;
            var1 = var5;
            _fun0016_ip = 125; continue _fun0016;
case 121:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var14 = var12.simplePostContent;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var6['style'] = var12;
            var6['children'] = var11;
            var7 = var10.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(var9) { _fun0016_ip = 126; continue _fun0016 }
case 127:
            var10 = _closure1_slot19;
            var9 = _closure1_slot28;
            var8 = {};
            var7 = var10.bind(var4)(var9, var8);
case 126:
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 125:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SimplePost'] = var4;
    var2 = function ThreadAsComments(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guild;
            var6 = var1.parentMessage;
            var _closure2_slot0 = var6;
            var5 = var1.onPress;
            var7 = var1.style;
            var1 = var1.inForum;
            var3 = _closure1_slot23;
            var4 = undefined;
            var13 = var3.bind(var4)();
            var9 = null;
            var3 = var9 != var1;
            if(!var3) { _fun0018_ip = 59; continue _fun0018 }
case 128:
            var3 = var1;
case 59:
            var1 = function useThread(arg1, arg2, arg3) {
                var5 = arg1;
                var8 = arg2;
                var9 = arg3;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var8;
                var _closure3_slot2 = var9;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 32;
                var3 = var3[var2];
                var2 = undefined;
                var7 = var4.bind(var2)(var3);
                var4 = var7.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = _closure1_slot5;
                var3[1] = var2;
                var2 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var1 = {};
                        var7 = _closure1_slot6;
                        var6 = var7.getChannel;
                        var4 = _closure3_slot1;
                        var5 = var4.id;
                        var5 = var6.bind(var7)(var5);
                        var1['thread'] = var5;
                        var6 = _closure1_slot5;
                        var5 = var6.getCount;
                        var4 = var4.id;
                        var5 = var5.bind(var6)(var4);
                        var4 = null;
                        var6 = var4 != var5;
                        var4 = 0;
                        if(!var6) { _fun0019_ip = 116; continue _fun0019 }
case 58:
                        var4 = var5;
case 116:
                        var1['messageCount'] = var4;
                        var4 = _closure1_slot5;
                        var3 = var4.getMostRecentMessage;
                        var2 = _closure3_slot1;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        var1['mostRecentMessage'] = var2;
                        return var1;
                    }
                };
                var2 = var4.bind(var7)(var3, var2);
                var4 = var2.thread;
                var3 = var2.messageCount;
                var2 = var2.mostRecentMessage;
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var10 = var5.id;
                var5 = new Array(3);
                var5[0] = var10;
                var5[1] = var9;
                var5[2] = var8;
                var1 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var5 = _closure3_slot1;
                        var4 = var5.hasFlag;
                        var3 = _closure1_slot16;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0020_ip = 129; continue _fun0020 }
case 15:
                        var3 = _closure3_slot2;
case 129:
                        if(!var3) { _fun0020_ip = 56; continue _fun0020 }
case 97:
                        var6 = _closure1_slot5;
                        var5 = var6.getMostRecentMessage;
                        var4 = _closure3_slot1;
                        var4 = var4.id;
                        var5 = var5.bind(var6)(var4);
                        var4 = null;
                        var3 = var4 == var5;
case 56:
                        if(!var3) { _fun0020_ip = 44; continue _fun0020 }
case 130:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 48;
                        var4 = var5[var2];
                        var2 = undefined;
                        var8 = var3.bind(var2)(var4);
                        var7 = var8.preload;
                        var4 = _closure3_slot0;
                        var6 = var4.id;
                        var4 = _closure3_slot1;
                        var1 = var4.id;
                        var1 = var7.bind(var8)(var6, var1);
                        var1 = 18;
                        var1 = var5[var1];
                        var3 = var3.bind(var2)(var1);
                        var2 = var3.fetchMessages;
                        var1 = {'channelId': null, 'isPreload': true, 'limit': 25};
                        var4 = var4.id;
                        var1['channelId'] = var4;
                        var1 = var2.bind(var3)(var1);
case 44:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var6.bind(var7)(var1, var5);
                var1 = {};
                var1['thread'] = var4;
                var1['messageCount'] = var3;
                var1['mostRecentMessage'] = var2;
                return var1;
            };
            var3 = var1.bind(var4)(var8, var6, var3);
            var8 = var3.thread;
            var1 = var3.messageCount;
            var15 = var3.mostRecentMessage;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 32;
            var3 = var11[var3];
            var11 = var6.bind(var4)(var3);
            var6 = var11.useStateFromStores;
            var12 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                var4 = _closure1_slot8;
                var3 = var4.canWithPartialContext;
                var1 = _closure1_slot17;
                var2 = var1.VIEW_CHANNEL;
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var1['channelId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var6.bind(var11)(var3, var2);
            if(var2) { _fun0018_ip = 131; continue _fun0018 }
case 102:
            return var9;
case 131:
            if(!(var9 != var8)) { _fun0018_ip = 132; continue _fun0018 }
case 64:
            if(!(var9 != var15)) { _fun0018_ip = 132; continue _fun0018 }
case 133:
            var2 = 99;
            var2 = var1 > var2;
            var19 = '99+';
            if(var2) { _fun0018_ip = 134; continue _fun0018 }
case 135:
            var19 = var1;
case 134:
            var3 = _closure1_slot20;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 27;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var12 = var13.comments;
            var11 = new Array(2);
            var11[0] = var12;
            var11[1] = var7;
            var1['style'] = var11;
            var1['onPress'] = var5;
            var12 = _closure1_slot19;
            var11 = _closure1_slot1;
            var14 = 23;
            var6 = var6[var14];
            var11 = var11.bind(var4)(var6);
            var6 = {};
            var16 = var9 == var15;
            var9 = undefined;
            if(var16) { _fun0018_ip = 33; continue _fun0018 }
case 136:
            var9 = var15.author;
case 33:
            var6['user'] = var9;
            var8 = var8.guild_id;
            var6['guildId'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var14 = var8[var14];
            var14 = var9.bind(var4)(var14);
            var14 = var14.AvatarSizes;
            var14 = var14.XSMALL;
            var6['size'] = var14;
            var11 = var12.bind(var4)(var11, var6);
            var6 = new Array(3);
            var6[0] = var11;
            var11 = _closure1_slot19;
            var14 = 28;
            var8 = var8[var14];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/semibold', 'lineClamp': 1};
            var12 = var13.recentCommentText;
            var8['style'] = var12;
            var12 = var15.content;
            var16 = var12.length;
            var12 = 0;
            if(!(!(var16 > var12))) { _fun0018_ip = 37; continue _fun0018 }
case 137:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 14;
            var16 = var20[var12];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var12 = var20[var12];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.6kp9Hx;
            var12 = var16.bind(var17)(var12);
            _fun0018_ip = 138; continue _fun0018;
case 37:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 51;
            var16 = var18[var16];
            var18 = var17.bind(var4)(var16);
            var17 = var18.parseInlineReply;
            var16 = var15.content;
            var15 = true;
            var12 = var17.bind(var18)(var16, var15);
case 138:
            var8['children'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var6[1] = var8;
            var11 = _closure1_slot20;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var13.commentCount;
            var8['style'] = var12;
            var18 = _closure1_slot19;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 49;
            var12 = var17[var12];
            var12 = var15.bind(var4)(var12);
            var16 = var12.ChatIcon;
            var12 = {};
            var20 = var13.commentsIcon;
            var12['style'] = var20;
            var16 = var18.bind(var4)(var16, var12);
            var12 = new Array(3);
            var12[0] = var16;
            var18 = _closure1_slot19;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'text-sm/bold', 'color': 'interactive-normal'};
            var14['children'] = var19;
            var14 = var18.bind(var4)(var16, var14);
            var12[1] = var14;
            var16 = _closure1_slot19;
            var14 = 50;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.ChevronSmallRightIcon;
            var14 = {};
            var17 = var13.chevron;
            var14['style'] = var17;
            var17 = 'xxs';
            var14['size'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var12[2] = var14;
            var8['children'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var6[2] = var8;
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 132:
            var3 = _closure1_slot20;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 27;
            var1 = var14[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var8 = var13.comments;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot19;
            var5 = 28;
            var5 = var14[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/semibold', 'color': 'text-muted', 'lineClamp': 1};
            var8 = var13.recentCommentText;
            var5['style'] = var8;
            var8 = 14;
            var9 = var14[var8];
            var9 = var11.bind(var4)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var8 = var14[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.VMWjXV;
            var8 = var9.bind(var12)(var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var13.commentCount;
            var6['style'] = var9;
            var15 = _closure1_slot19;
            var9 = 49;
            var9 = var14[var9];
            var9 = var11.bind(var4)(var9);
            var12 = var9.ChatIcon;
            var9 = {};
            var16 = var13.commentsIcon;
            var9['style'] = var16;
            var12 = var15.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot19;
            var10 = 50;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ChevronSmallRightIcon;
            var10 = {};
            var13 = var13.chevron;
            var10['style'] = var13;
            var13 = 'xxs';
            var10['size'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ThreadAsComments'] = var2;
    return var1;
})();