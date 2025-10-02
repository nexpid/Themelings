// app/utils/native/InstantInviteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var25 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var26 = dependencyMap;
    var _closure1_slot0 = var25;
    var _closure1_slot1 = var26;
    var27 = function makeOption(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var1 = arguments[2];
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            var _closure2_slot1 = var1;
            var1 = {};
            var3 = arg1;
            var1['value'] = var3;
            var5 = function get label() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var3 = 'label';
            Object.defineProperty(var1, var3, {get: var5, set: var4, enumerable: true});
            var3 = function get descriptiveLabel() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var2 = 'descriptiveLabel';
            Object.defineProperty(var1, var2, {get: var3, set: var4, enumerable: true});
            return var1;
        }
    };
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var7 = 0;
    var4 = var26[var7];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var6 = 1;
    var4 = var26[var6];
    var4 = var25.bind(var1)(var4);
    var8 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot3 = var8;
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot4 = var4;
    var4 = var26[var6];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var26[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var26[var4];
    var4 = var25.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var5 = function() {
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
        var1 = var1.PqEzn5;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function() {
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
        var1 = var1.5u4A6e;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var23 = var27.bind(var1)(var7, var5, var4);
    var5 = 604800;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.k2UNz8;
        var1 = {};
        var5 = 7;
        var1['days'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var22 = var27.bind(var1)(var5, var4);
    var5 = 1209600;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.k2UNz8;
        var1 = {};
        var5 = 14;
        var1['days'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var21 = var27.bind(var1)(var5, var4);
    var5 = 2592000;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.k2UNz8;
        var1 = {};
        var5 = 30;
        var1['days'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var20 = var27.bind(var1)(var5, var4);
    var5 = 5184000;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.k2UNz8;
        var1 = {};
        var5 = 60;
        var1['days'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var19 = var27.bind(var1)(var5, var4);
    var5 = 86400;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.k2UNz8;
        var1 = {};
        var5 = 1;
        var1['days'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var18 = var27.bind(var1)(var5, var4);
    var5 = 43200;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.xCjYxM;
        var1 = {};
        var5 = 12;
        var1['hours'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var17 = var27.bind(var1)(var5, var4);
    var5 = 21600;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.xCjYxM;
        var1 = {};
        var5 = 6;
        var1['hours'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var16 = var27.bind(var1)(var5, var4);
    var5 = 28800;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.xCjYxM;
        var1 = {};
        var5 = 8;
        var1['hours'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var15 = var27.bind(var1)(var5, var4);
    var5 = 3600;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.xCjYxM;
        var1 = {};
        var5 = 1;
        var1['hours'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var14 = var27.bind(var1)(var5, var4);
    var8 = 1800;
    var5 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.opVZ9v;
        var1 = {};
        var5 = 30;
        var1['mins'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.iXLF9f;
        var1 = {};
        var5 = 30;
        var1['minutes'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var13 = var27.bind(var1)(var8, var5, var4);
    var12 = new Array(10);
    var12[0] = var23;
    var12[1] = var19;
    var12[2] = var20;
    var12[3] = var21;
    var12[4] = var22;
    var12[5] = var18;
    var12[6] = var17;
    var12[7] = var16;
    var12[8] = var14;
    var12[9] = var13;
    var5 = function() {
        var1 = '∞';
        return var1;
    };
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.gPl14O;
        var1 = {};
        var5 = 0;
        var1['maxUses'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var11 = var27.bind(var1)(var7, var5, var4);
    var5 = function() {
        var1 = '1';
        return var1;
    };
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.gPl14O;
        var1 = {};
        var5 = 1;
        var1['maxUses'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var10 = var27.bind(var1)(var6, var5, var4);
    var6 = 5;
    var5 = function() {
        var1 = '5';
        return var1;
    };
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.gPl14O;
        var1 = {};
        var5 = 5;
        var1['maxUses'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9 = var27.bind(var1)(var6, var5, var4);
    var6 = 10;
    var5 = function() {
        var1 = '10';
        return var1;
    };
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.gPl14O;
        var1 = {};
        var5 = 10;
        var1['maxUses'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var8 = var27.bind(var1)(var6, var5, var4);
    var6 = 25;
    var5 = function() {
        var1 = '25';
        return var1;
    };
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.gPl14O;
        var1 = {};
        var5 = 25;
        var1['maxUses'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7 = var27.bind(var1)(var6, var5, var4);
    var6 = 50;
    var5 = function() {
        var1 = '50';
        return var1;
    };
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.gPl14O;
        var1 = {};
        var5 = 50;
        var1['maxUses'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6 = var27.bind(var1)(var6, var5, var4);
    var24 = 100;
    var5 = function() {
        var1 = '100';
        return var1;
    };
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.gPl14O;
        var1 = {};
        var5 = 100;
        var1['maxUses'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5 = var27.bind(var1)(var24, var5, var4);
    var4 = new Array(7);
    var4[0] = var11;
    var4[1] = var10;
    var4[2] = var9;
    var4[3] = var8;
    var4[4] = var7;
    var4[5] = var6;
    var4[6] = var5;
    var24 = 7;
    var24 = var26[var24];
    var26 = var25.bind(var1)(var24);
    var25 = var26.fileFinishedImporting;
    var24 = 'utils/native/InstantInviteUtils.tsx';
    var24 = var25.bind(var26)(var24);
    var3['INVITE_OPTIONS_FOREVER'] = var23;
    var3['INVITE_OPTIONS_7_DAYS'] = var22;
    var3['INVITE_OPTIONS_14_DAYS'] = var21;
    var3['INVITE_OPTIONS_30_DAYS'] = var20;
    var3['INVITE_OPTIONS_60_DAYS'] = var19;
    var3['INVITE_OPTIONS_1_DAY'] = var18;
    var3['INVITE_OPTIONS_12_HOURS'] = var17;
    var3['INVITE_OPTIONS_6_HOURS'] = var16;
    var3['INVITE_OPTIONS_8_HOURS'] = var15;
    var3['INVITE_OPTIONS_1_HOUR'] = var14;
    var3['INVITE_OPTIONS_30_MINUTES'] = var13;
    var3['MAX_AGE_OPTIONS'] = var12;
    var3['INVITE_OPTIONS_UNLIMITED'] = var11;
    var3['INVITE_OPTIONS_ONCE'] = var10;
    var3['INVITE_OPTIONS_5_TIMES'] = var9;
    var3['INVITE_OPTIONS_10_TIMES'] = var8;
    var3['INVITE_OPTIONS_25_TIMES'] = var7;
    var3['INVITE_OPTIONS_50_TIMES'] = var6;
    var3['INVITE_OPTIONS_100_TIMES'] = var5;
    var3['MAX_USES_OPTIONS'] = var4;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var9 = arg2;
            var1 = null;
            if(!(var1 != var9)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var1 != var6;
            var2 = null;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = _closure1_slot6;
            var7 = var8.canWithPartialContext;
            var4 = _closure1_slot7;
            var5 = var4.CREATE_INSTANT_INVITE;
            var4 = {};
            var4['channelId'] = var6;
            var5 = var7.bind(var8)(var5, var4);
            var4 = _closure1_slot3;
            var8 = var9[var4];
            var7 = var8.concat;
            var4 = _closure1_slot4;
            var4 = var9[var4];
            var8 = var7.bind(var8)(var4);
            var7 = var8.find;
            var4 = function(arg1) {
                var1 = arg1;
                var4 = var1.channel;
                var3 = _closure1_slot6;
                var2 = var3.can;
                var1 = _closure1_slot7;
                var1 = var1.CREATE_INSTANT_INVITE;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var1 != var4;
            var2 = null;
            if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 10:
            var4 = var4.channel;
            var2 = var4.id;
            _fun0002_ip = 6; continue _fun0002;
case 8:
            var4 = _closure1_slot2;
            var3 = var4.getChannel;
            var4 = var3.bind(var4)(var6);
            var3 = var6;
            if(!(var1 != var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = var4.isThread;
            var5 = var5.bind(var4)();
            var3 = var6;
            if(!var5) { _fun0002_ip = 11; continue _fun0002 }
case 13:
            var5 = var4.parent_id;
            var3 = var6;
            if(!(var1 != var5)) { _fun0002_ip = 11; continue _fun0002 }
case 14:
            var3 = var4.parent_id;
case 11:
            var2 = var3;
case 6:
            return var2;
case 4:
            return var1;
        }
    };
    var3['getInviteChannelId'] = var4;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var5 = null;
            var2 = var5 == var8;
            var9 = undefined;
            var1 = undefined;
            if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 2:
            var1 = var8.vanityURLCode;
case 7:
            var2 = var5 == var1;
            if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 5;
            var3 = var10[var3];
            var6 = var6.bind(var9)(var3);
            var3 = var6.canViewInviteModal;
            var1 = _closure1_slot6;
            var1 = var3.bind(var6)(var1, var8);
            var2 = !var1;
case 15:
            var1 = !var2;
            if(!var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var5 != var7;
            if(!var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var3 = _closure1_slot3;
            var9 = var7[var3];
            var8 = var9.find;
            var3 = function(arg1) {
                var1 = arg1;
                var4 = var1.channel;
                var3 = _closure1_slot6;
                var2 = var3.can;
                var1 = _closure1_slot7;
                var1 = var1.CREATE_INSTANT_INVITE;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            };
            var3 = var8.bind(var9)(var3);
            var3 = var5 != var3;
            if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 21:
            var6 = _closure1_slot4;
            var7 = var7[var6];
            var6 = var7.find;
            var4 = function(arg1) {
                var1 = arg1;
                var4 = var1.channel;
                var3 = _closure1_slot6;
                var2 = var3.can;
                var1 = _closure1_slot7;
                var1 = var1.CREATE_INSTANT_INVITE;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var3 = var5 != var4;
case 12:
            var2 = var3;
case 19:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var3['shouldRenderInvite'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var8 = undefined;
            var7 = var2.bind(var8)(var1);
            var5 = var7.useStateFromStoresObject;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = var9.id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannels;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var5.bind(var7)(var3, var1, var2);
            var5 = null;
            var2 = var5 == var9;
            var1 = undefined;
            if(var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var1 = var9.vanityURLCode;
case 22:
            var2 = var5 == var1;
            if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var3 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 5;
            var1 = var10[var1];
            var8 = var3.bind(var8)(var1);
            var3 = var8.canViewInviteModal;
            var1 = _closure1_slot6;
            var1 = var3.bind(var8)(var1, var9);
            var2 = !var1;
case 24:
            var1 = !var2;
            if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var2 = var5 == var7;
            if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var3 = _closure1_slot3;
            var9 = var7[var3];
            var8 = var9.find;
            var3 = function(arg1) {
                var1 = arg1;
                var4 = var1.channel;
                var3 = _closure1_slot6;
                var2 = var3.can;
                var1 = _closure1_slot7;
                var1 = var1.CREATE_INSTANT_INVITE;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            };
            var3 = var8.bind(var9)(var3);
            var3 = var5 != var3;
            if(var3) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var6 = _closure1_slot4;
            var7 = var7[var6];
            var6 = var7.find;
            var4 = function(arg1) {
                var1 = arg1;
                var4 = var1.channel;
                var3 = _closure1_slot6;
                var2 = var3.can;
                var1 = _closure1_slot7;
                var1 = var1.CREATE_INSTANT_INVITE;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var3 = var5 != var4;
case 30:
            var2 = var3;
case 28:
            var1 = var2;
case 26:
            return var1;
        }
    };
    var3['useShouldShowInviteInActionBar'] = var2;
    return var1;
})();