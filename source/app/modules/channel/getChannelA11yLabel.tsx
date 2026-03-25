// app/modules/channel/getChannelA11yLabel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getStatusLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.ONLINE;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot7;
            var2 = var2.IDLE;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot7;
            var2 = var2.DND;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot7;
            var2 = var2.INVISIBLE;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = '';
            return var2;
case 8:
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
case 6:
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
case 4:
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
case 2:
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channel;
            var1 = var2.unread;
            var10 = undefined;
            if(!(var1 === var10)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = false;
case 10:
            var14 = var2.mentionCount;
            if(!(var14 === var10)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var14 = 0;
case 12:
            var19 = var2.voiceStates;
            var13 = var2.embeddedActivitiesCount;
            var7 = var2.isSubscriptionGated;
            var5 = var2.needSubscriptionToAccess;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var11 = var4.bind(var10)(var2);
            var9 = var11.computeChannelName;
            var4 = _closure1_slot5;
            var2 = _closure1_slot4;
            var15 = var9.bind(var11)(var3, var4, var2);
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var8[var2];
            var2 = var4.bind(var10)(var2);
            var4 = var2.bind(var10)(var3);
            var2 = undefined;
            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 4;
            var8 = var12[var4];
            var8 = var11.bind(var10)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var4 = var12[var4];
            var4 = var11.bind(var10)(var4);
            var4 = var4.t;
            var4 = var4["4qvAtn"];
            var2 = var8.bind(var9)(var4);
case 14:
            var8 = var3.type;
            var4 = _closure1_slot6;
            var4 = var4.DM;
            if(!(var4 !== var8)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot6;
            var4 = var4.GROUP_DM;
            if(!(var4 !== var8)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_STORE;
            if(!(var4 !== var8)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_DIRECTORY;
            if(!(var4 !== var8)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_ANNOUNCEMENT;
            if(!(var4 !== var8)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_VOICE;
            if(!(var4 !== var8)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var4 = _closure1_slot6;
            var4 = var4.GUILD_STAGE_VOICE;
            if(!(var4 !== var8)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var9 = _closure1_slot3;
            var8 = var9.has;
            var4 = var3.type;
            var8 = var8.bind(var9)(var4);
            var4 = 0;
            if(var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            if(!(!(var14 > var4))) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 4;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.t;
            if(var1) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var12 = var8.s0JADj;
            _fun0002_ip = 36; continue _fun0002;
case 34:
            var12 = var8.smf1CZ;
case 36:
            _fun0002_ip = 37; continue _fun0002;
case 32:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 4;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.t;
            var12 = var8.g8ONM0;
case 37:
            _fun0002_ip = 38; continue _fun0002;
case 30:
            if(!(!(var14 > var4))) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var4 = var9[var4];
            var4 = var8.bind(var10)(var4);
            var8 = var4.t;
            if(var1) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var4 = var8["0nZpiF"];
            _fun0002_ip = 43; continue _fun0002;
case 41:
            var4 = var8.YlVvmc;
case 43:
            _fun0002_ip = 44; continue _fun0002;
case 39:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 4;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.t;
            var4 = var8.ZL7+I6;
case 44:
            var12 = var4;
case 38:
            var8 = undefined;
            _fun0002_ip = 45; continue _fun0002;
case 28:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 4;
            var4 = var11[var4];
            var4 = var9.bind(var10)(var4);
            var4 = var4.t;
            var12 = var4.TPPk2T;
            var8 = undefined;
            _fun0002_ip = 45; continue _fun0002;
case 26:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var20 = 4;
            var11 = var4[var20];
            var11 = var9.bind(var10)(var11);
            var16 = var11.intl;
            var11 = var16.formatToPlainString;
            var4 = var4[var20];
            var4 = var9.bind(var10)(var4);
            var4 = var4.t;
            var9 = var4.bkpadO;
            var4 = {};
            var4['channelName'] = var15;
            var4 = var11.bind(var16)(var9, var4);
            var9 = new Array(1);
            var9[0] = var4;
            var4 = 0;
            if(!(var14 > var4)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var16 = var9.push;
            var17 = _closure1_slot0;
            var11 = _closure1_slot2;
            var18 = var11[var20];
            var18 = var17.bind(var10)(var18);
            var21 = var18.intl;
            var18 = var21.formatToPlainString;
            var11 = var11[var20];
            var11 = var17.bind(var10)(var11);
            var11 = var11.t;
            var17 = var11["3l1GOx"];
            var11 = {};
            var11['mentionCount'] = var14;
            var11 = var18.bind(var21)(var17, var11);
            var11 = var16.bind(var9)(var11);
case 46:
            if(!var1) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var16 = var9.push;
            var21 = _closure1_slot0;
            var11 = _closure1_slot2;
            var17 = var11[var20];
            var17 = var21.bind(var10)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var11 = var11[var20];
            var11 = var21.bind(var10)(var11);
            var11 = var11.t;
            var11 = var11.x5zAGZ;
            var11 = var17.bind(var18)(var11);
            var11 = var16.bind(var9)(var11);
case 48:
            var18 = var3.userLimit;
            var3 = null;
            if(!(var3 != var19)) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var11 = var19.length;
            if(!(var11 > var4)) { _fun0002_ip = 50; continue _fun0002 }
case 52:
            var11 = var19.length;
            var16 = 3;
            var23 = var11 - var16;
            var11 = var19.slice;
            var17 = var11.bind(var19)(var4, var16);
            var16 = var17.map;
            var11 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.nick;
                    var4 = var2.user;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 53; continue _fun0003 }
case 11:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getName;
                    var1 = var2.bind(var3)(var4);
case 53:
                    return var1;
                }
            };
            var17 = var16.bind(var17)(var11);
            var16 = var17.join;
            var11 = ', ';
            var16 = var16.bind(var17)(var11);
            var11 = var9.push;
            var11 = var11.bind(var9)(var16);
            if(!(var23 > var4)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var16 = var9.push;
            var17 = _closure1_slot0;
            var11 = _closure1_slot2;
            var21 = var11[var20];
            var21 = var17.bind(var10)(var21);
            var22 = var21.intl;
            var21 = var22.formatToPlainString;
            var11 = var11[var20];
            var11 = var17.bind(var10)(var11);
            var11 = var11.t;
            var17 = var11.sfgpgr;
            var11 = {};
            var11['overflow'] = var23;
            var11 = var21.bind(var22)(var17, var11);
            var11 = var16.bind(var9)(var11);
case 54:
            var3 = var3 != var18;
            if(!var3) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var3 = var18 > var4;
case 56:
            if(!var3) { _fun0002_ip = 50; continue _fun0002 }
case 58:
            var4 = var9.push;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var16 = var3[var20];
            var16 = var11.bind(var10)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var3 = var3[var20];
            var3 = var11.bind(var10)(var3);
            var3 = var3.t;
            var11 = var3["6qgTOF"];
            var3 = {};
            var19 = var19.length;
            var3['userCount'] = var19;
            var3['limit'] = var18;
            var3 = var16.bind(var17)(var11, var3);
            var3 = var4.bind(var9)(var3);
case 50:
            var4 = var9.join;
            var3 = ', ';
            var8 = var4.bind(var9)(var3);
            var12 = undefined;
            _fun0002_ip = 45; continue _fun0002;
case 24:
            var3 = 0;
            if(!(!(var14 > var3))) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var4.bind(var10)(var3);
            var4 = var3.t;
            if(var1) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var3 = var4.WJ3MPt;
            _fun0002_ip = 63; continue _fun0002;
case 61:
            var3 = var4.VM7z8f;
case 63:
            _fun0002_ip = 64; continue _fun0002;
case 59:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 4;
            var4 = var11[var4];
            var4 = var9.bind(var10)(var4);
            var4 = var4.t;
            var3 = var4.sDKIpm;
case 64:
            var12 = var3;
            var8 = undefined;
            _fun0002_ip = 45; continue _fun0002;
case 22:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var4.bind(var10)(var3);
            var3 = var3.t;
            var12 = var3["92EAF2"];
            var8 = undefined;
            _fun0002_ip = 45; continue _fun0002;
case 20:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var4.bind(var10)(var3);
            var3 = var3.t;
            var12 = var3.Bo4msg;
            var8 = undefined;
            _fun0002_ip = 45; continue _fun0002;
case 18:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var4.bind(var10)(var3);
            var4 = var3.t;
            if(var1) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var3 = var4.lts3Ld;
            _fun0002_ip = 67; continue _fun0002;
case 65:
            var3 = var4.fxxUo/;
case 67:
            var12 = var3;
            var8 = undefined;
            _fun0002_ip = 45; continue _fun0002;
case 16:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var4.bind(var10)(var3);
            var3 = var3.t;
            if(var1) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var1 = var3.fYqXVY;
            _fun0002_ip = 70; continue _fun0002;
case 68:
            var1 = var3.F2MZsu;
case 70:
            var12 = var1;
            var8 = undefined;
case 45:
            var1 = null;
            if(!(var1 == var8)) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            if(!(var1 == var12)) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var3 = new Array(0);
            _fun0002_ip = 75; continue _fun0002;
case 73:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 4;
            var4 = var11[var4];
            var4 = var9.bind(var10)(var4);
            var11 = var4.intl;
            var9 = var11.formatToPlainString;
            var4 = {};
            var4['channelName'] = var15;
            var4['mentionCount'] = var14;
            var9 = var9.bind(var11)(var12, var4);
            var4 = new Array(1);
            var4[0] = var9;
            var3 = var4;
case 75:
            _fun0002_ip = 76; continue _fun0002;
case 71:
            var4 = new Array(1);
            var4[0] = var8;
            var3 = var4;
case 76:
            var4 = var1 != var13;
            if(!var4) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var8 = 0;
            var4 = var13 > var8;
case 77:
            if(!var4) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var8 = var3.push;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 4;
            var11 = var14[var4];
            var11 = var9.bind(var10)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var4 = var14[var4];
            var4 = var9.bind(var10)(var4);
            var4 = var4.t;
            var9 = var4.O6PLYd;
            var4 = {};
            var4['activitiesCount'] = var13;
            var4 = var11.bind(var12)(var9, var4);
            var4 = var8.bind(var3)(var4);
case 79:
            var4 = {};
            var4['isSubscriptionGated'] = var7;
            var4['needSubscriptionToAccess'] = var5;
            var7 = var4.isSubscriptionGated;
            var4 = var4.needSubscriptionToAccess;
            var5 = undefined;
            if(!var7) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 4;
            var7 = var11[var6];
            var7 = var9.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.t;
            if(var4) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var4 = var6.xI3TQQ;
            var4 = var7.bind(var8)(var4);
            _fun0002_ip = 85; continue _fun0002;
case 83:
            var6 = var6.oj+HOs;
            var4 = var7.bind(var8)(var6);
case 85:
            var5 = var4;
case 81:
            if(!(var1 != var5)) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var4 = var3.push;
            var4 = var4.bind(var3)(var5);
case 86:
            if(!(var1 != var2)) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            var1 = var3.push;
            var1 = var1.bind(var3)(var2);
case 88:
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
            if(!(var2 !== var3)) { _fun0004_ip = 90; continue _fun0004 }
case 91:
            var4 = new Array(0);
            var3 = var1.type;
            var2 = _closure1_slot6;
            var2 = var2.DM;
            if(!(var3 === var2)) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var2 = null;
            if(!(var2 != var5)) { _fun0004_ip = 92; continue _fun0004 }
case 94:
            var2 = var4.push;
            var3 = _closure1_slot8;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            var1 = var2.bind(var4)(var1);
case 92:
            var2 = var4.length;
            var1 = 0;
            var2 = var2 > var1;
            var1 = undefined;
            if(!var2) { _fun0004_ip = 95; continue _fun0004 }
case 96:
            var3 = var4.join;
            var2 = ', ';
            var1 = var3.bind(var4)(var2);
case 95:
            return var1;
case 90:
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