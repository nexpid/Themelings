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
            var19 = var2.channel;
            var1 = var2.unread;
            var10 = undefined;
            if(!(var1 === var10)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = false;
case 10:
            var16 = var2.mentionCount;
            if(!(var16 === var10)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var16 = 0;
case 12:
            var22 = var2.voiceStates;
            var13 = var2.embeddedActivitiesCount;
            var7 = var2.isSubscriptionGated;
            var5 = var2.needSubscriptionToAccess;
            var8 = var2.isIncomingCall;
            if(!(var8 === var10)) { _fun0002_ip = 14; continue _fun0002 }
case 9:
            var8 = false;
case 14:
            var4 = var2.isOngoingCall;
            if(!(var4 === var10)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = false;
case 15:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var12 = var3.bind(var10)(var2);
            var11 = var12.computeChannelName;
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var17 = var11.bind(var12)(var19, var3, var2);
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var9[var2];
            var2 = var3.bind(var10)(var2);
            var3 = var2.bind(var10)(var19);
            var2 = undefined;
            if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 17:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 4;
            var9 = var14[var3];
            var9 = var12.bind(var10)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var3 = var14[var3];
            var3 = var12.bind(var10)(var3);
            var3 = var3.t;
            var3 = var3["4qvAtn"];
            var2 = var9.bind(var11)(var3);
case 2:
            var9 = var19.type;
            var3 = _closure1_slot6;
            var3 = var3.DM;
            if(!(var3 !== var9)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = _closure1_slot6;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var9)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_STORE;
            if(!(var3 !== var9)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_DIRECTORY;
            if(!(var3 !== var9)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var9)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var9)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var3 !== var9)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var11 = _closure1_slot3;
            var9 = var11.has;
            var3 = var19.type;
            var9 = var9.bind(var11)(var3);
            var3 = 0;
            if(var9) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            if(!(!(var16 > var3))) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 4;
            var9 = var12[var9];
            var9 = var11.bind(var10)(var9);
            var9 = var9.t;
            if(var1) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var15 = var9.s0JADj;
            _fun0002_ip = 38; continue _fun0002;
case 36:
            var15 = var9.smf1CZ;
case 38:
            _fun0002_ip = 39; continue _fun0002;
case 34:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 4;
            var9 = var12[var9];
            var9 = var11.bind(var10)(var9);
            var9 = var9.t;
            var15 = var9.g8ONM0;
case 39:
            _fun0002_ip = 40; continue _fun0002;
case 32:
            if(!(!(var16 > var3))) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 4;
            var3 = var11[var3];
            var3 = var9.bind(var10)(var3);
            var9 = var3.t;
            if(var1) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var3 = var9["0nZpiF"];
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var3 = var9.YlVvmc;
case 45:
            _fun0002_ip = 46; continue _fun0002;
case 41:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 4;
            var9 = var12[var9];
            var9 = var11.bind(var10)(var9);
            var9 = var9.t;
            var3 = var9.ZL7+I6;
case 46:
            var15 = var3;
case 40:
            var11 = undefined;
            _fun0002_ip = 47; continue _fun0002;
case 30:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 4;
            var3 = var12[var3];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            var15 = var3.TPPk2T;
            var11 = undefined;
            _fun0002_ip = 47; continue _fun0002;
case 28:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var23 = 4;
            var12 = var3[var23];
            var12 = var9.bind(var10)(var12);
            var14 = var12.intl;
            var12 = var14.formatToPlainString;
            var3 = var3[var23];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            var9 = var3.bkpadO;
            var3 = {};
            var3['channelName'] = var17;
            var3 = var12.bind(var14)(var9, var3);
            var12 = new Array(1);
            var12[0] = var3;
            var9 = 0;
            if(!(var16 > var9)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var14 = var12.push;
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var20 = var3[var23];
            var20 = var18.bind(var10)(var20);
            var21 = var20.intl;
            var20 = var21.formatToPlainString;
            var3 = var3[var23];
            var3 = var18.bind(var10)(var3);
            var3 = var3.t;
            var18 = var3["3l1GOx"];
            var3 = {};
            var3['mentionCount'] = var16;
            var3 = var20.bind(var21)(var18, var3);
            var3 = var14.bind(var12)(var3);
case 48:
            if(!var1) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var14 = var12.push;
            var21 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = var3[var23];
            var18 = var21.bind(var10)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var3 = var3[var23];
            var3 = var21.bind(var10)(var3);
            var3 = var3.t;
            var3 = var3.x5zAGZ;
            var3 = var18.bind(var20)(var3);
            var3 = var14.bind(var12)(var3);
case 50:
            var21 = var19.userLimit;
            var3 = null;
            if(!(var3 != var22)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var14 = var22.length;
            if(!(var14 > var9)) { _fun0002_ip = 52; continue _fun0002 }
case 54:
            var14 = var22.length;
            var18 = 3;
            var26 = var14 - var18;
            var14 = var22.slice;
            var20 = var14.bind(var22)(var9, var18);
            var18 = var20.map;
            var14 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.nick;
                    var4 = var2.user;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 55; continue _fun0003 }
case 11:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getName;
                    var1 = var2.bind(var3)(var4);
case 55:
                    return var1;
                }
            };
            var20 = var18.bind(var20)(var14);
            var18 = var20.join;
            var14 = ', ';
            var18 = var18.bind(var20)(var14);
            var14 = var12.push;
            var14 = var14.bind(var12)(var18);
            if(!(var26 > var9)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var18 = var12.push;
            var20 = _closure1_slot0;
            var14 = _closure1_slot2;
            var24 = var14[var23];
            var24 = var20.bind(var10)(var24);
            var25 = var24.intl;
            var24 = var25.formatToPlainString;
            var14 = var14[var23];
            var14 = var20.bind(var10)(var14);
            var14 = var14.t;
            var20 = var14.sfgpgr;
            var14 = {};
            var14['overflow'] = var26;
            var14 = var24.bind(var25)(var20, var14);
            var14 = var18.bind(var12)(var14);
case 56:
            var3 = var3 != var21;
            if(!var3) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var3 = var21 > var9;
case 58:
            if(!var3) { _fun0002_ip = 52; continue _fun0002 }
case 60:
            var9 = var12.push;
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = var3[var23];
            var18 = var14.bind(var10)(var18);
            var20 = var18.intl;
            var18 = var20.formatToPlainString;
            var3 = var3[var23];
            var3 = var14.bind(var10)(var3);
            var3 = var3.t;
            var14 = var3["6qgTOF"];
            var3 = {};
            var22 = var22.length;
            var3['userCount'] = var22;
            var3['limit'] = var21;
            var3 = var18.bind(var20)(var14, var3);
            var3 = var9.bind(var12)(var3);
case 52:
            var9 = var12.join;
            var3 = ', ';
            var11 = var9.bind(var12)(var3);
            var15 = undefined;
            _fun0002_ip = 47; continue _fun0002;
case 26:
            var3 = 0;
            if(!(!(var16 > var3))) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 4;
            var3 = var12[var3];
            var3 = var9.bind(var10)(var3);
            var9 = var3.t;
            if(var1) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var3 = var9.WJ3MPt;
            _fun0002_ip = 65; continue _fun0002;
case 63:
            var3 = var9.VM7z8f;
case 65:
            _fun0002_ip = 66; continue _fun0002;
case 61:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 4;
            var9 = var14[var9];
            var9 = var12.bind(var10)(var9);
            var9 = var9.t;
            var3 = var9.sDKIpm;
case 66:
            var15 = var3;
            var11 = undefined;
            _fun0002_ip = 47; continue _fun0002;
case 24:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 4;
            var3 = var12[var3];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            var15 = var3["92EAF2"];
            var11 = undefined;
            _fun0002_ip = 47; continue _fun0002;
case 22:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 4;
            var3 = var12[var3];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            var15 = var3.Bo4msg;
            var11 = undefined;
            _fun0002_ip = 47; continue _fun0002;
case 20:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var20 = 4;
            var3 = var3[var20];
            var3 = var9.bind(var10)(var3);
            var14 = var3.intl;
            var12 = var14.formatToPlainString;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var20];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            if(var1) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var9 = var3.lts3Ld;
            _fun0002_ip = 69; continue _fun0002;
case 67:
            var9 = var3.fxxUo/;
case 69:
            var3 = {};
            var3['channelName'] = var17;
            var3 = var12.bind(var14)(var9, var3);
            var12 = new Array(2);
            var12[0] = var3;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = var3[var20];
            var14 = var9.bind(var10)(var14);
            var18 = var14.intl;
            var14 = var18.formatToPlainString;
            var3 = var3[var20];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            var9 = var3.CxSA5N;
            var3 = {};
            var19 = var19.recipients;
            var20 = var19.length;
            var19 = 1;
            var19 = var20 + var19;
            var3['members'] = var19;
            var3 = var14.bind(var18)(var9, var3);
            var12[1] = var3;
            var9 = var12.join;
            var3 = ', ';
            var11 = var9.bind(var12)(var3);
            var15 = undefined;
            _fun0002_ip = 47; continue _fun0002;
case 18:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 4;
            var3 = var12[var3];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            if(var1) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var1 = var3.fYqXVY;
            _fun0002_ip = 72; continue _fun0002;
case 70:
            var1 = var3.F2MZsu;
case 72:
            var15 = var1;
            var11 = undefined;
case 47:
            var1 = null;
            if(!(var1 == var11)) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            if(!(var1 == var15)) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var3 = new Array(0);
            _fun0002_ip = 77; continue _fun0002;
case 75:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 4;
            var9 = var14[var9];
            var9 = var12.bind(var10)(var9);
            var14 = var9.intl;
            var12 = var14.formatToPlainString;
            var9 = {};
            var9['channelName'] = var17;
            var9['mentionCount'] = var16;
            var12 = var12.bind(var14)(var15, var9);
            var9 = new Array(1);
            var9[0] = var12;
            var3 = var9;
case 77:
            _fun0002_ip = 78; continue _fun0002;
case 73:
            var9 = new Array(1);
            var9[0] = var11;
            var3 = var9;
case 78:
            if(var8) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            if(!var4) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var8 = var3.push;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 4;
            var9 = var14[var4];
            var9 = var12.bind(var10)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var4 = var14[var4];
            var4 = var12.bind(var10)(var4);
            var4 = var4.t;
            var4 = var4.NGg/fm;
            var4 = var9.bind(var11)(var4);
            var4 = var8.bind(var3)(var4);
            _fun0002_ip = 81; continue _fun0002;
case 79:
            var8 = var3.push;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 4;
            var9 = var14[var4];
            var9 = var12.bind(var10)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var4 = var14[var4];
            var4 = var12.bind(var10)(var4);
            var4 = var4.t;
            var4 = var4.fk1/bX;
            var4 = var9.bind(var11)(var4);
            var4 = var8.bind(var3)(var4);
case 81:
            var4 = var1 != var13;
            if(!var4) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var8 = 0;
            var4 = var13 > var8;
case 83:
            if(!var4) { _fun0002_ip = 85; continue _fun0002 }
case 86:
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
case 85:
            var4 = {};
            var4['isSubscriptionGated'] = var7;
            var4['needSubscriptionToAccess'] = var5;
            var7 = var4.isSubscriptionGated;
            var4 = var4.needSubscriptionToAccess;
            var5 = undefined;
            if(!var7) { _fun0002_ip = 87; continue _fun0002 }
case 88:
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
            if(var4) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var4 = var6.xI3TQQ;
            var4 = var7.bind(var8)(var4);
            _fun0002_ip = 91; continue _fun0002;
case 89:
            var6 = var6.oj+HOs;
            var4 = var7.bind(var8)(var6);
case 91:
            var5 = var4;
case 87:
            if(!(var1 != var5)) { _fun0002_ip = 92; continue _fun0002 }
case 93:
            var4 = var3.push;
            var4 = var4.bind(var3)(var5);
case 92:
            if(!(var1 != var2)) { _fun0002_ip = 94; continue _fun0002 }
case 95:
            var1 = var3.push;
            var1 = var1.bind(var3)(var2);
case 94:
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
            var4 = var2.muted;
            var5 = var2.userStatus;
            var2 = var2.isFavorite;
            var3 = new Array(0);
            if(!var2) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var6 = var3.push;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 4;
            var7 = var11[var2];
            var9 = undefined;
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var2 = var11[var2];
            var2 = var10.bind(var9)(var2);
            var2 = var2.t;
            var2 = var2.cCPjSK;
            var2 = var7.bind(var8)(var2);
            var2 = var6.bind(var3)(var2);
case 96:
            var2 = true;
            if(!(var2 !== var4)) { _fun0004_ip = 98; continue _fun0004 }
case 99:
            var4 = var1.type;
            var2 = _closure1_slot6;
            var2 = var2.DM;
            if(!(var4 === var2)) { _fun0004_ip = 100; continue _fun0004 }
case 101:
            var2 = null;
            if(!(var2 != var5)) { _fun0004_ip = 100; continue _fun0004 }
case 102:
            var2 = var3.push;
            var4 = _closure1_slot8;
            var1 = undefined;
            var1 = var4.bind(var1)(var5);
            var1 = var2.bind(var3)(var1);
case 100:
            var2 = var3.length;
            var1 = 0;
            var2 = var2 > var1;
            var1 = undefined;
            if(!var2) { _fun0004_ip = 103; continue _fun0004 }
case 104:
            var4 = var3.join;
            var2 = ', ';
            var1 = var4.bind(var3)(var2);
case 103:
            return var1;
case 98:
            var2 = var3.push;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 4;
            var4 = var8[var1];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.C4zCMb;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = ', ';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getChannelA11yHint'] = var2;
    return var1;
})();