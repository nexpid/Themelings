// app/modules/channel/getChannelA11yLabel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            var7 = _closure1_slot2;
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
            var1 = var2.xI3TQQ;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = var2.oj+HOs;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = function getStatusLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.ONLINE;
            if(!(var2 !== var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = _closure1_slot7;
            var2 = var2.IDLE;
            if(!(var2 !== var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = _closure1_slot7;
            var2 = var2.DND;
            if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = _closure1_slot7;
            var2 = var2.INVISIBLE;
            if(!(var2 !== var3)) { _fun0002_ip = 5; continue _fun0002 }
case 13:
            var2 = '';
            return var2;
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.humanizeStatus;
            var2 = _closure1_slot7;
            var2 = var2.INVISIBLE;
            var2 = var3.bind(var4)(var2);
            return var2;
case 11:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.humanizeStatus;
            var2 = _closure1_slot7;
            var2 = var2.DND;
            var2 = var3.bind(var4)(var2);
            return var2;
case 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.humanizeStatus;
            var2 = _closure1_slot7;
            var2 = var2.IDLE;
            var2 = var3.bind(var4)(var2);
            return var2;
case 7:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.humanizeStatus;
            var1 = _closure1_slot7;
            var1 = var1.ONLINE;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot6 = var8;
    var5 = var5.StatusTypes;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel/getChannelA11yLabel.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getChannelA11yLabel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channel;
            var3 = var1.unread;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0003_ip = 2; continue _fun0003 }
case 14:
            var3 = false;
case 2:
            var10 = var1.mentionCount;
            if(!(var10 === var5)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var10 = 0;
case 15:
            var21 = var1.userCount;
            var17 = var1.embeddedActivitiesCount;
            var7 = var1.isSubscriptionGated;
            var6 = var1.needSubscriptionToAccess;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var12 = var4.bind(var5)(var2);
            var11 = var12.computeChannelName;
            var4 = _closure1_slot5;
            var2 = _closure1_slot4;
            var11 = var11.bind(var12)(var8, var4, var2);
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var9[var2];
            var2 = var4.bind(var5)(var2);
            var4 = var2.bind(var5)(var8);
            var2 = undefined;
            if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 4;
            var9 = var14[var4];
            var9 = var13.bind(var5)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var4 = var14[var4];
            var4 = var13.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.4qvAtn;
            var2 = var9.bind(var12)(var4);
case 17:
            var9 = var8.type;
            var4 = _closure1_slot6;
            var4 = var4.DM;
            if(!(var4 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var4 = _closure1_slot6;
            var4 = var4.GROUP_DM;
            if(!(var4 !== var9)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_STORE;
            if(!(var4 !== var9)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_DIRECTORY;
            if(!(var4 !== var9)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_ANNOUNCEMENT;
            if(!(var4 !== var9)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_VOICE;
            if(!(var4 !== var9)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_STAGE_VOICE;
            if(!(var4 !== var9)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var12 = _closure1_slot3;
            var9 = var12.has;
            var4 = var8.type;
            var9 = var9.bind(var12)(var4);
            var4 = 0;
            if(var9) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            if(!(!(var10 > var4))) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 4;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var12 = var9.t;
            if(var3) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var9 = var12.s0JADj;
            _fun0003_ip = 39; continue _fun0003;
case 37:
            var9 = var12.smf1CZ;
case 39:
            _fun0003_ip = 40; continue _fun0003;
case 35:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 4;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.t;
            var9 = var12.g8ONM0;
case 40:
            _fun0003_ip = 41; continue _fun0003;
case 33:
            if(!(!(var10 > var4))) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 4;
            var4 = var13[var4];
            var4 = var12.bind(var5)(var4);
            var12 = var4.t;
            if(var3) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var4 = var12.0nZpiF;
            _fun0003_ip = 46; continue _fun0003;
case 44:
            var4 = var12.YlVvmc;
case 46:
            _fun0003_ip = 47; continue _fun0003;
case 42:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 4;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.t;
            var4 = var12.ZL7+I6;
case 47:
            var9 = var4;
case 41:
            _fun0003_ip = 48; continue _fun0003;
case 31:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 4;
            var4 = var13[var4];
            var4 = var12.bind(var5)(var4);
            var4 = var4.t;
            var9 = var4.TPPk2T;
            _fun0003_ip = 48; continue _fun0003;
case 29:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var18 = 4;
            var13 = var4[var18];
            var13 = var12.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var4 = var4[var18];
            var4 = var12.bind(var5)(var4);
            var4 = var4.t;
            var12 = var4.bkpadO;
            var4 = {};
            var4['channelName'] = var11;
            var4 = var13.bind(var14)(var12, var4);
            var12 = new Array(1);
            var12[0] = var4;
            var13 = 0;
            if(!(var10 > var13)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var14 = var12.push;
            var15 = _closure1_slot0;
            var4 = _closure1_slot2;
            var16 = var4[var18];
            var16 = var15.bind(var5)(var16);
            var19 = var16.intl;
            var16 = var19.formatToPlainString;
            var4 = var4[var18];
            var4 = var15.bind(var5)(var4);
            var4 = var4.t;
            var15 = var4.3l1GOx;
            var4 = {};
            var4['mentionCount'] = var10;
            var4 = var16.bind(var19)(var15, var4);
            var4 = var14.bind(var12)(var4);
case 49:
            if(!var3) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var14 = var12.push;
            var19 = _closure1_slot0;
            var4 = _closure1_slot2;
            var15 = var4[var18];
            var15 = var19.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var4 = var4[var18];
            var4 = var19.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.x5zAGZ;
            var4 = var15.bind(var16)(var4);
            var4 = var14.bind(var12)(var4);
case 51:
            var4 = null;
            if(!(var4 != var21)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var20 = var8.userLimit;
            if(!(var4 != var20)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            if(!(!(var20 > var13))) { _fun0003_ip = 57; continue _fun0003 }
case 55:
            var14 = var12.push;
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var16 = var8[var18];
            var16 = var15.bind(var5)(var16);
            var19 = var16.intl;
            var16 = var19.formatToPlainString;
            var8 = var8[var18];
            var8 = var15.bind(var5)(var8);
            var8 = var8.t;
            var15 = var8.GNIiAA;
            var8 = {};
            var8['userCount'] = var21;
            var8 = var16.bind(var19)(var15, var8);
            var8 = var14.bind(var12)(var8);
            _fun0003_ip = 53; continue _fun0003;
case 57:
            var14 = var12.push;
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var16 = var8[var18];
            var16 = var15.bind(var5)(var16);
            var19 = var16.intl;
            var16 = var19.formatToPlainString;
            var8 = var8[var18];
            var8 = var15.bind(var5)(var8);
            var8 = var8.t;
            var15 = var8.6qgTOF;
            var8 = {};
            var8['userCount'] = var21;
            var8['limit'] = var20;
            var8 = var16.bind(var19)(var15, var8);
            var8 = var14.bind(var12)(var8);
case 53:
            var8 = var4 != var17;
            if(!var8) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var8 = var17 > var13;
case 58:
            if(!var8) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var13 = var12.push;
            var14 = _closure1_slot0;
            var8 = _closure1_slot2;
            var15 = var8[var18];
            var15 = var14.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var8 = var8[var18];
            var8 = var14.bind(var5)(var8);
            var8 = var8.t;
            var14 = var8.O6PLYd;
            var8 = {};
            var8['activitiesCount'] = var17;
            var8 = var15.bind(var16)(var14, var8);
            var8 = var13.bind(var12)(var8);
case 60:
            var13 = _closure1_slot8;
            var8 = {};
            var8['isSubscriptionGated'] = var7;
            var8['needSubscriptionToAccess'] = var6;
            var13 = var13.bind(var5)(var8);
            if(!(var4 != var13)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var8 = var12.push;
            var8 = var8.bind(var12)(var13);
case 62:
            if(!(var4 != var2)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var4 = var12.push;
            var4 = var4.bind(var12)(var2);
case 64:
            var8 = var12.join;
            var4 = ', ';
            var4 = var8.bind(var12)(var4);
            return var4;
case 27:
            var4 = 0;
            if(!(!(var10 > var4))) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 4;
            var4 = var12[var4];
            var4 = var8.bind(var5)(var4);
            var8 = var4.t;
            if(var3) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var4 = var8.WJ3MPt;
            _fun0003_ip = 70; continue _fun0003;
case 68:
            var4 = var8.VM7z8f;
case 70:
            _fun0003_ip = 71; continue _fun0003;
case 66:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 4;
            var8 = var13[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.t;
            var4 = var8.sDKIpm;
case 71:
            var9 = var4;
            _fun0003_ip = 48; continue _fun0003;
case 25:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 4;
            var4 = var12[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.t;
            var9 = var4.92EAF2;
            _fun0003_ip = 48; continue _fun0003;
case 23:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 4;
            var4 = var12[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.t;
            var9 = var4.Bo4msg;
            _fun0003_ip = 48; continue _fun0003;
case 21:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 4;
            var4 = var12[var4];
            var4 = var8.bind(var5)(var4);
            var8 = var4.t;
            if(var3) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var4 = var8.lts3Ld;
            _fun0003_ip = 74; continue _fun0003;
case 72:
            var4 = var8.fxxUo/;
case 74:
            var9 = var4;
            _fun0003_ip = 48; continue _fun0003;
case 19:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 4;
            var4 = var12[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.t;
            if(var3) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var3 = var4.fYqXVY;
            _fun0003_ip = 77; continue _fun0003;
case 75:
            var3 = var4.F2MZsu;
case 77:
            var9 = var3;
case 48:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var8 = var3.intl;
            var4 = var8.formatToPlainString;
            var3 = {};
            var3['channelName'] = var11;
            var3['mentionCount'] = var10;
            var4 = var4.bind(var8)(var9, var3);
            var3 = new Array(1);
            var3[0] = var4;
            var4 = _closure1_slot8;
            var1 = {};
            var1['isSubscriptionGated'] = var7;
            var1['needSubscriptionToAccess'] = var6;
            var5 = var4.bind(var5)(var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var4 = var3.push;
            var4 = var4.bind(var3)(var5);
case 78:
            if(!(var1 != var2)) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var1 = var3.push;
            var1 = var1.bind(var3)(var2);
case 80:
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
            if(!(var2 !== var3)) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var4 = new Array(0);
            var3 = var1.type;
            var2 = _closure1_slot6;
            var2 = var2.DM;
            if(!(var3 === var2)) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var2 = null;
            if(!(var2 != var5)) { _fun0004_ip = 84; continue _fun0004 }
case 86:
            var2 = var4.push;
            var3 = _closure1_slot9;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            var1 = var2.bind(var4)(var1);
case 84:
            var2 = var4.length;
            var1 = 0;
            var2 = var2 > var1;
            var1 = undefined;
            if(!var2) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var3 = var4.join;
            var2 = ', ';
            var1 = var3.bind(var4)(var2);
case 87:
            return var1;
case 82:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.C4zCMb;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getChannelA11yHint'] = var2;
    return var1;
})();