// app/modules/channel/getChannelA11yLabel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function getPremiumChannelIconAllyLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.isSubscriptionGated;
            var1 = var1.needSubscriptionToAccess;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = undefined;
            return var2;
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.xI3TQU;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = var2.oj+HOj;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = function getStatusLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot6;
            var2 = var2.ONLINE;
            if(!(var2 !== var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = _closure1_slot6;
            var2 = var2.IDLE;
            if(!(var2 !== var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = _closure1_slot6;
            var2 = var2.DND;
            if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = _closure1_slot6;
            var2 = var2.INVISIBLE;
            if(!(var2 !== var3)) { _fun0002_ip = 5; continue _fun0002 }
case 13:
            var2 = '';
            return var2;
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.humanizeStatus;
            var2 = _closure1_slot6;
            var2 = var2.INVISIBLE;
            var2 = var3.bind(var4)(var2);
            return var2;
case 11:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.humanizeStatus;
            var2 = _closure1_slot6;
            var2 = var2.DND;
            var2 = var3.bind(var4)(var2);
            return var2;
case 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.humanizeStatus;
            var2 = _closure1_slot6;
            var2 = var2.IDLE;
            var2 = var3.bind(var4)(var2);
            return var2;
case 7:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.humanizeStatus;
            var1 = _closure1_slot6;
            var1 = var1.ONLINE;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.THREAD_CHANNEL_TYPES;
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot5 = var8;
    var5 = var5.StatusTypes;
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel/getChannelA11yLabel.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getChannelA11yLabel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channel;
            var2 = var1.unread;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0003_ip = 2; continue _fun0003 }
case 14:
            var2 = false;
case 2:
            var9 = var1.mentionCount;
            if(!(var9 === var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var9 = 0;
case 15:
            var20 = var1.userCount;
            var16 = var1.embeddedActivitiesCount;
            var6 = var1.isSubscriptionGated;
            var5 = var1.needSubscriptionToAccess;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 5;
            var3 = var10[var3];
            var11 = var8.bind(var4)(var3);
            var10 = var11.computeChannelName;
            var8 = _closure1_slot4;
            var3 = _closure1_slot3;
            var10 = var10.bind(var11)(var7, var8, var3);
            var8 = var7.type;
            var3 = _closure1_slot5;
            var3 = var3.DM;
            if(!(var3 !== var8)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = _closure1_slot5;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_STORE;
            if(!(var3 !== var8)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_DIRECTORY;
            if(!(var3 !== var8)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var8)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var8)) { _fun0003_ip = 27; continue _fun0003 }
case 7:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var3 !== var8)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var11 = _closure1_slot2;
            var8 = var11.has;
            var3 = var7.type;
            var8 = var8.bind(var11)(var3);
            var3 = 0;
            if(var8) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            if(!(!(var9 > var3))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 4;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.t;
            if(var2) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var8 = var11.s0JADg;
            _fun0003_ip = 36; continue _fun0003;
case 34:
            var8 = var11.smf1CQ;
case 36:
            _fun0003_ip = 37; continue _fun0003;
case 32:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 4;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var8 = var11.g8ONMz;
case 37:
            _fun0003_ip = 38; continue _fun0003;
case 30:
            if(!(!(var9 > var3))) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var11 = var3.t;
            if(var2) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var3 = var11.0nZpiI;
            _fun0003_ip = 43; continue _fun0003;
case 41:
            var3 = var11.YlVvmZ;
case 43:
            _fun0003_ip = 44; continue _fun0003;
case 39:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 4;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var3 = var11.ZL7+Iy;
case 44:
            var8 = var3;
case 38:
            _fun0003_ip = 45; continue _fun0003;
case 28:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.TPPk2d;
            _fun0003_ip = 45; continue _fun0003;
case 27:
            var11 = _closure1_slot0;
            var3 = _closure1_slot1;
            var17 = 4;
            var12 = var3[var17];
            var12 = var11.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var3 = var3[var17];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var11 = var3.bkpadH;
            var3 = {};
            var14 = var7.name;
            var3['channelName'] = var14;
            var3 = var12.bind(var13)(var11, var3);
            var11 = new Array(1);
            var11[0] = var3;
            var12 = 0;
            if(!(var9 > var12)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var13 = var11.push;
            var14 = _closure1_slot0;
            var3 = _closure1_slot1;
            var15 = var3[var17];
            var15 = var14.bind(var4)(var15);
            var18 = var15.intl;
            var15 = var18.formatToPlainString;
            var3 = var3[var17];
            var3 = var14.bind(var4)(var3);
            var3 = var3.t;
            var14 = var3.3l1GOz;
            var3 = {};
            var3['mentionCount'] = var9;
            var3 = var15.bind(var18)(var14, var3);
            var3 = var13.bind(var11)(var3);
case 46:
            if(!var2) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var13 = var11.push;
            var18 = _closure1_slot0;
            var3 = _closure1_slot1;
            var14 = var3[var17];
            var14 = var18.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var3 = var3[var17];
            var3 = var18.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.x5zAGR;
            var3 = var14.bind(var15)(var3);
            var3 = var13.bind(var11)(var3);
case 48:
            var3 = null;
            if(!(var3 != var20)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var19 = var7.userLimit;
            if(!(var3 != var19)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            if(!(!(var19 > var12))) { _fun0003_ip = 54; continue _fun0003 }
case 52:
            var13 = var11.push;
            var14 = _closure1_slot0;
            var7 = _closure1_slot1;
            var15 = var7[var17];
            var15 = var14.bind(var4)(var15);
            var18 = var15.intl;
            var15 = var18.formatToPlainString;
            var7 = var7[var17];
            var7 = var14.bind(var4)(var7);
            var7 = var7.t;
            var14 = var7.GNIiAA;
            var7 = {};
            var7['userCount'] = var20;
            var7 = var15.bind(var18)(var14, var7);
            var7 = var13.bind(var11)(var7);
            _fun0003_ip = 50; continue _fun0003;
case 54:
            var13 = var11.push;
            var14 = _closure1_slot0;
            var7 = _closure1_slot1;
            var15 = var7[var17];
            var15 = var14.bind(var4)(var15);
            var18 = var15.intl;
            var15 = var18.formatToPlainString;
            var7 = var7[var17];
            var7 = var14.bind(var4)(var7);
            var7 = var7.t;
            var14 = var7.6qgTOD;
            var7 = {};
            var7['userCount'] = var20;
            var7['limit'] = var19;
            var7 = var15.bind(var18)(var14, var7);
            var7 = var13.bind(var11)(var7);
case 50:
            var7 = var3 != var16;
            if(!var7) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var7 = var16 > var12;
case 55:
            if(!var7) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var12 = var11.push;
            var13 = _closure1_slot0;
            var7 = _closure1_slot1;
            var14 = var7[var17];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.formatToPlainString;
            var7 = var7[var17];
            var7 = var13.bind(var4)(var7);
            var7 = var7.t;
            var13 = var7.O6PLYW;
            var7 = {};
            var7['activitiesCount'] = var16;
            var7 = var14.bind(var15)(var13, var7);
            var7 = var12.bind(var11)(var7);
case 57:
            var12 = _closure1_slot7;
            var7 = {};
            var7['isSubscriptionGated'] = var6;
            var7['needSubscriptionToAccess'] = var5;
            var7 = var12.bind(var4)(var7);
            if(!(var3 != var7)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var3 = var11.push;
            var3 = var3.bind(var11)(var7);
case 59:
            var7 = var11.join;
            var3 = ', ';
            var3 = var7.bind(var11)(var3);
            return var3;
case 25:
            var3 = 0;
            if(!(!(var9 > var3))) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.t;
            if(var2) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var3 = var7.WJ3MPj;
            _fun0003_ip = 65; continue _fun0003;
case 63:
            var3 = var7.VM7z8f;
case 65:
            _fun0003_ip = 66; continue _fun0003;
case 61:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 4;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var3 = var7.sDKIpq;
case 66:
            var8 = var3;
            _fun0003_ip = 45; continue _fun0003;
case 23:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.92EAFx;
            _fun0003_ip = 45; continue _fun0003;
case 21:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.Bo4msr;
            _fun0003_ip = 45; continue _fun0003;
case 19:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.t;
            if(var2) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var3 = var7.lts3LS;
            _fun0003_ip = 69; continue _fun0003;
case 67:
            var3 = var7.fxxUo6;
case 69:
            var8 = var3;
            _fun0003_ip = 45; continue _fun0003;
case 17:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            if(var2) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var2 = var3.fYqXVV;
            _fun0003_ip = 72; continue _fun0003;
case 70:
            var2 = var3.F2MZsr;
case 72:
            var8 = var2;
case 45:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.intl;
            var3 = var7.formatToPlainString;
            var2 = {};
            var2['channelName'] = var10;
            var2['mentionCount'] = var9;
            var2 = var3.bind(var7)(var8, var2);
            var3 = new Array(1);
            var3[0] = var2;
            var2 = _closure1_slot7;
            var1 = {};
            var1['isSubscriptionGated'] = var6;
            var1['needSubscriptionToAccess'] = var5;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var1 = var3.push;
            var1 = var1.bind(var3)(var2);
case 73:
            var2 = var3.join;
            var1 = ', ';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['getStatusLabel'] = var4;
    var2 = function getChannelA11yHint(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channel;
            var3 = var2.muted;
            var5 = var2.userStatus;
            var2 = true;
            if(!(var2 !== var3)) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var4 = new Array(0);
            var3 = var1.type;
            var2 = _closure1_slot5;
            var2 = var2.DM;
            if(!(var3 === var2)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var2 = null;
            if(!(var2 != var5)) { _fun0004_ip = 77; continue _fun0004 }
case 79:
            var2 = var4.push;
            var3 = _closure1_slot8;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            var1 = var2.bind(var4)(var1);
case 77:
            var2 = var4.length;
            var1 = 0;
            var2 = var2 > var1;
            var1 = undefined;
            if(!var2) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var3 = var4.join;
            var2 = ', ';
            var1 = var3.bind(var4)(var2);
case 80:
            return var1;
case 75:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.C4zCMT;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getChannelA11yHint'] = var2;
    return var1;
})();