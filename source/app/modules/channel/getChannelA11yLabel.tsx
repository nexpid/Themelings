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
 0:
            var1 = arg1;
            var2 = var1.isSubscriptionGated;
            var1 = var1.needSubscriptionToAccess;
            if(var2) { _fun0001_ip = 22; continue _fun0001 }
 18:
            var2 = undefined;
            return var2;
 22:
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
            if(var1) { _fun0001_ip = 89; continue _fun0001 }
 74:
            var1 = var2.xI3TQU;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 102; continue _fun0001;
 89:
            var2 = var2.oj+HOj;
            var1 = var3.bind(var4)(var2);
 102:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = function getStatusLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot6;
            var2 = var2.ONLINE;
            if(!(var2 !== var3)) { _fun0002_ip = 209; continue _fun0002 }
 23:
            var2 = _closure1_slot6;
            var2 = var2.IDLE;
            if(!(var2 !== var3)) { _fun0002_ip = 164; continue _fun0002 }
 40:
            var2 = _closure1_slot6;
            var2 = var2.DND;
            if(!(var2 !== var3)) { _fun0002_ip = 119; continue _fun0002 }
 54:
            var2 = _closure1_slot6;
            var2 = var2.INVISIBLE;
            if(!(var2 !== var3)) { _fun0002_ip = 74; continue _fun0002 }
 68:
            var2 = '';
            return var2;
 74:
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
 119:
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
 164:
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
 209:
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
 0:
            var1 = arg1;
            var7 = var1.channel;
            var2 = var1.unread;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0003_ip = 22; continue _fun0003 }
 20:
            var2 = false;
 22:
            var9 = var1.mentionCount;
            if(!(var9 === var4)) { _fun0003_ip = 34; continue _fun0003 }
 32:
            var9 = 0;
 34:
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
            if(!(var3 !== var8)) { _fun0003_ip = 1222; continue _fun0003 }
 124:
            var3 = _closure1_slot5;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var8)) { _fun0003_ip = 1171; continue _fun0003 }
 141:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_STORE;
            if(!(var3 !== var8)) { _fun0003_ip = 1136; continue _fun0003 }
 158:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_DIRECTORY;
            if(!(var3 !== var8)) { _fun0003_ip = 1098; continue _fun0003 }
 175:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var8)) { _fun0003_ip = 1003; continue _fun0003 }
 192:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var8)) { _fun0003_ip = 466; continue _fun0003 }
 209:
            var3 = _closure1_slot5;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var3 !== var8)) { _fun0003_ip = 430; continue _fun0003 }
 226:
            var11 = _closure1_slot2;
            var8 = var11.has;
            var3 = var7.type;
            var8 = var8.bind(var11)(var3);
            var3 = 0;
            if(var8) { _fun0003_ip = 337; continue _fun0003 }
 250:
            if(!(!(var9 > var3))) { _fun0003_ip = 302; continue _fun0003 }
 254:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 4;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.t;
            if(var2) { _fun0003_ip = 292; continue _fun0003 }
 282:
            var8 = var11.s0JADg;
            _fun0003_ip = 300; continue _fun0003;
 292:
            var8 = var11.smf1CQ;
 300:
            _fun0003_ip = 335; continue _fun0003;
 302:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 4;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var8 = var11.g8ONMz;
 335:
            _fun0003_ip = 425; continue _fun0003;
 337:
            if(!(!(var9 > var3))) { _fun0003_ip = 389; continue _fun0003 }
 341:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var11 = var3.t;
            if(var2) { _fun0003_ip = 379; continue _fun0003 }
 369:
            var3 = var11.0nZpiI;
            _fun0003_ip = 387; continue _fun0003;
 379:
            var3 = var11.YlVvmZ;
 387:
            _fun0003_ip = 422; continue _fun0003;
 389:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 4;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var3 = var11.ZL7+Iy;
 422:
            var8 = var3;
 425:
            _fun0003_ip = 1269; continue _fun0003;
 430:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.TPPk2d;
            _fun0003_ip = 1269; continue _fun0003;
 466:
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
            if(!(var9 > var12)) { _fun0003_ip = 622; continue _fun0003 }
 550:
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
 622:
            if(!var2) { _fun0003_ip = 689; continue _fun0003 }
 625:
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
 689:
            var3 = null;
            if(!(var3 != var20)) { _fun0003_ip = 862; continue _fun0003 }
 698:
            var19 = var7.userLimit;
            if(!(var3 != var19)) { _fun0003_ip = 712; continue _fun0003 }
 708:
            if(!(!(var19 > var12))) { _fun0003_ip = 786; continue _fun0003 }
 712:
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
            _fun0003_ip = 862; continue _fun0003;
 786:
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
 862:
            var7 = var3 != var16;
            if(!var7) { _fun0003_ip = 873; continue _fun0003 }
 869:
            var7 = var16 > var12;
 873:
            if(!var7) { _fun0003_ip = 950; continue _fun0003 }
 876:
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
 950:
            var12 = _closure1_slot7;
            var7 = {};
            var7['isSubscriptionGated'] = var6;
            var7['needSubscriptionToAccess'] = var5;
            var7 = var12.bind(var4)(var7);
            if(!(var3 != var7)) { _fun0003_ip = 985; continue _fun0003 }
 975:
            var3 = var11.push;
            var3 = var3.bind(var11)(var7);
 985:
            var7 = var11.join;
            var3 = ', ';
            var3 = var7.bind(var11)(var3);
            return var3;
 1003:
            var3 = 0;
            if(!(!(var9 > var3))) { _fun0003_ip = 1057; continue _fun0003 }
 1009:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.t;
            if(var2) { _fun0003_ip = 1047; continue _fun0003 }
 1037:
            var3 = var7.WJ3MPj;
            _fun0003_ip = 1055; continue _fun0003;
 1047:
            var3 = var7.VM7z8f;
 1055:
            _fun0003_ip = 1090; continue _fun0003;
 1057:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 4;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var3 = var7.sDKIpq;
 1090:
            var8 = var3;
            _fun0003_ip = 1269; continue _fun0003;
 1098:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.92EAFx;
            _fun0003_ip = 1269; continue _fun0003;
 1136:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.Bo4msr;
            _fun0003_ip = 1269; continue _fun0003;
 1171:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.t;
            if(var2) { _fun0003_ip = 1209; continue _fun0003 }
 1199:
            var3 = var7.lts3LS;
            _fun0003_ip = 1217; continue _fun0003;
 1209:
            var3 = var7.fxxUo6;
 1217:
            var8 = var3;
            _fun0003_ip = 1269; continue _fun0003;
 1222:
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            if(var2) { _fun0003_ip = 1258; continue _fun0003 }
 1250:
            var2 = var3.fYqXVV;
            _fun0003_ip = 1266; continue _fun0003;
 1258:
            var2 = var3.F2MZsr;
 1266:
            var8 = var2;
 1269:
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
            if(!(var1 != var2)) { _fun0003_ip = 1362; continue _fun0003 }
 1352:
            var1 = var3.push;
            var1 = var1.bind(var3)(var2);
 1362:
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
 0:
            var2 = arg1;
            var1 = var2.channel;
            var3 = var2.muted;
            var5 = var2.userStatus;
            var2 = true;
            if(!(var2 !== var3)) { _fun0004_ip = 113; continue _fun0004 }
 26:
            var4 = new Array(0);
            var3 = var1.type;
            var2 = _closure1_slot5;
            var2 = var2.DM;
            if(!(var3 === var2)) { _fun0004_ip = 79; continue _fun0004 }
 52:
            var2 = null;
            if(!(var2 != var5)) { _fun0004_ip = 79; continue _fun0004 }
 58:
            var2 = var4.push;
            var3 = _closure1_slot8;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            var1 = var2.bind(var4)(var1);
 79:
            var2 = var4.length;
            var1 = 0;
            var2 = var2 > var1;
            var1 = undefined;
            if(!var2) { _fun0004_ip = 111; continue _fun0004 }
 95:
            var3 = var4.join;
            var2 = ', ';
            var1 = var3.bind(var4)(var2);
 111:
            return var1;
 113:
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