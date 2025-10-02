// app/utils/InstantInviteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot18;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot18;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.ChannelTypes;
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.InviteTargetTypes;
    var _closure1_slot11 = var2;
    var5 = {};
    var2 = 'GROUP_DM';
    var5['GROUP_DM'] = var2;
    var2 = 'DM';
    var5['DM'] = var2;
    var2 = 'FRIEND';
    var5['FRIEND'] = var2;
    var2 = 'CHANNEL';
    var5['CHANNEL'] = var2;
    var _closure1_slot12 = var5;
    var2 = function isGuildMember(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot5;
            var3 = var4.isMember;
            var2 = arg2;
            var1 = var3.bind(var4)(var5, var2);
case 36:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var2 = function addDmUsers(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var19 = var1.omitUserIds;
            var18 = var1.maxRowsWithoutQuery;
            var17 = var1.omitGuildId;
            var16 = var1.shownUserIds;
            var15 = var1.rows;
            var14 = var1.counts;
            var13 = var1.includeGroupDms;
            var12 = var1.limit;
            var3 = _closure1_slot17;
            var2 = _closure1_slot9;
            var1 = var2.getPrivateChannelIds;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var10 = var3.bind(var1)(var2);
            var3 = var10.bind(var1)();
            var2 = var3.done;
            var9 = 0;
            var8 = false;
            var7 = null;
            var6 = var3;
            var5 = 0;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 13:
            var21 = var6.value;
            if(!(var7 != var18)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            if(!(var18 > var9)) { _fun0005_ip = 39; continue _fun0005 }
case 41:
            var2 = var15.length;
            if(!(!(var2 >= var18))) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            if(!(var7 != var12)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            if(!(!(var5 >= var12))) { _fun0005_ip = 38; continue _fun0005 }
case 42:
            var20 = _closure1_slot4;
            var2 = var20.getChannel;
            var24 = var2.bind(var20)(var21);
            var22 = var5;
            var21 = var4;
            var20 = var3;
            if(!(var7 != var24)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var2 = var24.isPrivate;
            var2 = var2.bind(var24)();
            var22 = var5;
            var21 = var4;
            var20 = var3;
            if(!var2) { _fun0005_ip = 44; continue _fun0005 }
case 46:
            if(!var13) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var23 = var24.type;
            var2 = _closure1_slot10;
            var2 = var2.GROUP_DM;
            if(!(var23 !== var2)) { _fun0005_ip = 49; continue _fun0005 }
case 47:
            var25 = _closure1_slot6;
            var23 = var25.lastMessageId;
            var2 = var24.id;
            var2 = var23.bind(var25)(var2);
            var22 = var5;
            var21 = var4;
            var20 = var3;
            if(!(var7 != var2)) { _fun0005_ip = 44; continue _fun0005 }
case 50:
            var2 = var24.getRecipientId;
            var23 = var2.bind(var24)();
            var22 = var5;
            var21 = var23;
            var20 = var3;
            if(!(var7 != var23)) { _fun0005_ip = 44; continue _fun0005 }
case 51:
            var2 = var19.has;
            var2 = var2.bind(var19)(var23);
            var22 = var5;
            var21 = var23;
            var20 = var3;
            if(var2) { _fun0005_ip = 44; continue _fun0005 }
case 52:
            var2 = var16.has;
            var2 = var2.bind(var16)(var23);
            var22 = var5;
            var21 = var23;
            var20 = var3;
            if(var2) { _fun0005_ip = 44; continue _fun0005 }
case 53:
            var25 = _closure1_slot8;
            var2 = var25.getUser;
            var2 = var2.bind(var25)(var23);
            var22 = var5;
            var21 = var23;
            var20 = var2;
            if(!(var7 != var2)) { _fun0005_ip = 44; continue _fun0005 }
case 54:
            var25 = var2.bot;
            var22 = var5;
            var21 = var23;
            var20 = var2;
            if(var25) { _fun0005_ip = 44; continue _fun0005 }
case 55:
            var26 = _closure1_slot13;
            var25 = var2.id;
            var25 = var26.bind(var1)(var17, var25);
            var22 = var5;
            var21 = var23;
            var20 = var2;
            if(var25) { _fun0005_ip = 44; continue _fun0005 }
case 56:
            var26 = var16.add;
            var25 = var2.id;
            var25 = var26.bind(var16)(var25);
            var26 = var15.push;
            var25 = {};
            var27 = _closure1_slot12;
            var27 = var27.DM;
            var25['type'] = var27;
            var25['item'] = var2;
            var25['isSuggested'] = var8;
            var25 = var26.bind(var15)(var25);
            var25 = var14.numDms;
            var25 = var25 + 1;
            var14['numDms'] = var25;
            var22 = var5 + 1;
            var21 = var23;
            var20 = var2;
            _fun0005_ip = 44; continue _fun0005;
case 49:
            var23 = var15.push;
            var2 = {};
            var25 = _closure1_slot12;
            var25 = var25.GROUP_DM;
            var2['type'] = var25;
            var2['item'] = var24;
            var2['isSuggested'] = var8;
            var2 = var23.bind(var15)(var2);
            var2 = var14.numGroupDms;
            var2 = var2 + 1;
            var14['numGroupDms'] = var2;
            var22 = var5 + 1;
            var21 = var4;
            var20 = var3;
case 44:
            var23 = var10.bind(var1)();
            var2 = var23.done;
            var5 = var22;
            var4 = var21;
            var3 = var20;
            var6 = var23;
            if(!var2) { _fun0005_ip = 13; continue _fun0005 }
case 38:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var2 = {};
    var10 = 10;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_30_MINUTES;
    var7 = var6.value;
    var6 = {'value': 30, 'type': 'minutes'};
    var2[var7] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_1_HOUR;
    var7 = var6.value;
    var6 = {'value': 1, 'type': 'hours'};
    var2[var7] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_6_HOURS;
    var7 = var6.value;
    var6 = {'value': 6, 'type': 'hours'};
    var2[var7] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_12_HOURS;
    var11 = var6.value;
    var7 = 12;
    var6 = {'value': 12, 'type': 'hours'};
    var2[var11] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_1_DAY;
    var11 = var6.value;
    var6 = {'value': 1, 'type': 'days'};
    var2[var11] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_7_DAYS;
    var11 = var6.value;
    var6 = {'value': 7, 'type': 'days'};
    var2[var11] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_14_DAYS;
    var11 = var6.value;
    var6 = {'value': 14, 'type': 'days'};
    var2[var11] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_30_DAYS;
    var11 = var6.value;
    var6 = {'value': 30, 'type': 'days'};
    var2[var11] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_60_DAYS;
    var11 = var6.value;
    var6 = {'value': 60, 'type': 'days'};
    var2[var11] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_FOREVER;
    var11 = var6.value;
    var6 = {'value': 0, 'type': 'never'};
    var2[var11] = var6;
    var _closure1_slot15 = var2;
    var2 = var9[var10];
    var2 = var8.bind(var1)(var2);
    var6 = var2.INVITE_OPTIONS_14_DAYS;
    var2 = new Array(3);
    var2[0] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_30_DAYS;
    var2[1] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.INVITE_OPTIONS_60_DAYS;
    var2[2] = var6;
    var _closure1_slot16 = var2;
    var6 = {};
    var11 = function getMaxAgeOptionByValue(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var7 = var3.MAX_AGE_OPTIONS;
            var3 = new Array(0);
            var6 = 0;
            var8 = var3;
            var6 = arraySpread(var8, var7, var6);
            var7 = _closure1_slot16;
            var8 = var3;
            var2 = arraySpread(var8, var7, var6);
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var1 = null;
case 57:
            return var1;
        }
    };
    var6['getMaxAgeOptionByValue'] = var11;
    var11 = function getMaxAgeOptions(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var3 = var2.MAX_AGE_OPTIONS;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot16;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var3);
                var1 = !var1;
                if(var1) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var2 = _closure2_slot0;
                var7 = null;
                var5 = var7 == var2;
                var2 = undefined;
                if(var5) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var4 = _closure2_slot0;
                var5 = var4.includeExperimentalValues;
                var4 = var7 == var5;
                var2 = undefined;
                if(var4) { _fun0007_ip = 61; continue _fun0007 }
case 63:
                var4 = var5.includes;
                var4 = var7 == var4;
                var2 = undefined;
                if(var4) { _fun0007_ip = 61; continue _fun0007 }
case 64:
                var4 = var5.includes;
                var3 = var3.value;
                var2 = var4.bind(var5)(var3);
case 61:
                var1 = var2;
case 59:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var6['getMaxAgeOptions'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.MAX_USES_OPTIONS;
    var6['getMaxUsesOptions'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_FOREVER;
    var6['INVITE_OPTIONS_FOREVER'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_1_DAY;
    var6['INVITE_OPTIONS_1_DAY'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_7_DAYS;
    var6['INVITE_OPTIONS_7_DAYS'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_14_DAYS;
    var6['INVITE_OPTIONS_14_DAYS'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_30_DAYS;
    var6['INVITE_OPTIONS_30_DAYS'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_60_DAYS;
    var6['INVITE_OPTIONS_60_DAYS'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_12_HOURS;
    var6['INVITE_OPTIONS_12_HOURS'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_6_HOURS;
    var6['INVITE_OPTIONS_6_HOURS'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_8_HOURS;
    var6['INVITE_OPTIONS_8_HOURS'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_1_HOUR;
    var6['INVITE_OPTIONS_1_HOUR'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_30_MINUTES;
    var6['INVITE_OPTIONS_30_MINUTES'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_UNLIMITED;
    var6['INVITE_OPTIONS_UNLIMITED'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_ONCE;
    var6['INVITE_OPTIONS_ONCE'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_5_TIMES;
    var6['INVITE_OPTIONS_5_TIMES'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_10_TIMES;
    var6['INVITE_OPTIONS_10_TIMES'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_25_TIMES;
    var6['INVITE_OPTIONS_25_TIMES'] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.INVITE_OPTIONS_50_TIMES;
    var6['INVITE_OPTIONS_50_TIMES'] = var11;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var10 = var10.INVITE_OPTIONS_100_TIMES;
    var6['INVITE_OPTIONS_100_TIMES'] = var10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/InstantInviteUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['RowTypes'] = var5;
    var5 = function generateRowsForQuery(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var11 = var2.query;
            var5 = var2.inviteTargetType;
            var10 = var2.omitUserIds;
            var6 = var2.suggestedUserIds;
            var7 = var2.suggestedChannelIds;
            var9 = var2.maxRowsWithoutQuery;
            var8 = var2.omitGuildId;
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var25 = var3;
            var2 = new var25[var2](var24);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = new Array(0);
            var2 = {'numFriends': 0, 'numDms': 0, 'numGroupDms': 0, 'numGuildMembers': 0, 'numChannels': 0};
            var17 = 0;
            var12 = '';
            if(!(var12 !== var11)) { _fun0008_ip = 50; continue _fun0008 }
case 65:
            var15 = {};
            var15['query'] = var11;
            var15['rows'] = var3;
            var15['counts'] = var2;
            var11 = _closure1_slot11;
            var11 = var11.EMBEDDED_APPLICATION;
            if(!(var5 === var11)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var13 = {};
            var24 = var13;
            var23 = var15;
            var11 = copyDataProperties(var24, var23);
            var11 = 'inviteTargetType';
            var13[var11] = var5;
            var12 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var6 = var2.query;
                    var3 = var2.rows;
                    var _closure3_slot0 = var3;
                    var3 = var2.counts;
                    var _closure3_slot1 = var3;
                    var4 = var2.inviteTargetType;
                    var3 = _closure1_slot11;
                    var3 = var3.EMBEDDED_APPLICATION;
                    if(!(var4 === var3)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.queryChannels;
                    var2 = {};
                    var2['query'] = var6;
                    var6 = 3;
                    var2['limit'] = var6;
                    var2['guildId'] = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var6 = var1.record;
                        var5 = var1.score;
                        var4 = _closure3_slot0;
                        var3 = var4.push;
                        var2 = {};
                        var7 = _closure1_slot12;
                        var7 = var7.CHANNEL;
                        var2['type'] = var7;
                        var2['item'] = var6;
                        var6 = false;
                        var2['isSuggested'] = var6;
                        var2['score'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot1;
                        var1 = var2.numChannels;
                        var1 = var1 + 1;
                        var2['numChannels'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = undefined;
            var11 = var12.bind(var11)(var13);
case 66:
            var16 = {};
            var24 = var16;
            var23 = var15;
            var11 = copyDataProperties(var24, var23);
            var14 = 'omitUserIds';
            var16[var14] = var10;
            var13 = 'shownUserIds';
            var16[var13] = var4;
            var11 = function(arg1) {
                var1 = arg1;
                var6 = var1.query;
                var3 = var1.omitUserIds;
                var _closure3_slot0 = var3;
                var3 = var1.shownUserIds;
                var _closure3_slot1 = var3;
                var3 = var1.rows;
                var _closure3_slot2 = var3;
                var1 = var1.counts;
                var _closure3_slot3 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.queryDMUsers;
                var3 = {};
                var3['query'] = var6;
                var6 = 50;
                var3['limit'] = var6;
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var6 = var1.record;
                        var5 = var1.score;
                        var4 = _closure3_slot0;
                        var3 = var4.has;
                        var2 = var6.id;
                        var2 = var3.bind(var4)(var2);
                        if(var2) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                        var4 = _closure1_slot4;
                        var3 = var4.getDMFromUserId;
                        var2 = var6.id;
                        var9 = var3.bind(var4)(var2);
                        var4 = null;
                        var2 = var4 != var9;
                        if(!var2) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                        var8 = _closure1_slot6;
                        var3 = var8.lastMessageId;
                        var3 = var3.bind(var8)(var9);
                        var2 = var4 != var3;
case 72:
                        if(!var2) { _fun0010_ip = 70; continue _fun0010 }
case 74:
                        var4 = _closure3_slot1;
                        var3 = var4.add;
                        var2 = var6.id;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure3_slot2;
                        var3 = var4.push;
                        var2 = {};
                        var7 = _closure1_slot12;
                        var7 = var7.DM;
                        var2['type'] = var7;
                        var2['item'] = var6;
                        var6 = false;
                        var2['isSuggested'] = var6;
                        var2['score'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot3;
                        var1 = var2.numDms;
                        var1 = var1 + 1;
                        var2['numDms'] = var1;
case 70:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var12 = undefined;
            var11 = var11.bind(var12)(var16);
            var11 = function(arg1) {
                var1 = arg1;
                var6 = var1.query;
                var3 = var1.rows;
                var _closure3_slot0 = var3;
                var1 = var1.counts;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.queryGroupDMs;
                var3 = {'query': null, 'limit': 50, 'fuzzy': false};
                var3['query'] = var6;
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var6 = var1.record;
                    var5 = var1.score;
                    var4 = _closure3_slot0;
                    var3 = var4.push;
                    var2 = {};
                    var7 = _closure1_slot12;
                    var7 = var7.GROUP_DM;
                    var2['type'] = var7;
                    var2['item'] = var6;
                    var6 = false;
                    var2['isSuggested'] = var6;
                    var2['score'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure3_slot1;
                    var1 = var2.numGroupDms;
                    var1 = var1 + 1;
                    var2['numGroupDms'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11 = var11.bind(var12)(var15);
            var11 = {};
            var24 = var11;
            var23 = var15;
            var15 = copyDataProperties(var24, var23);
            var11[var14] = var10;
            var11[var13] = var4;
            var1 = function(arg1) {
                var1 = arg1;
                var6 = var1.query;
                var3 = var1.rows;
                var _closure3_slot0 = var3;
                var3 = var1.counts;
                var _closure3_slot1 = var3;
                var3 = var1.omitUserIds;
                var _closure3_slot2 = var3;
                var1 = var1.shownUserIds;
                var _closure3_slot3 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.queryFriends;
                var3 = {'query': null, 'limit': 500, '_fuzzy': false};
                var3['query'] = var6;
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var6 = var1.record;
                        var5 = var1.score;
                        var4 = _closure3_slot2;
                        var3 = var4.has;
                        var2 = var6.id;
                        var2 = var3.bind(var4)(var2);
                        if(var2) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                        var7 = _closure3_slot3;
                        var4 = var7.has;
                        var3 = var6.id;
                        var2 = var4.bind(var7)(var3);
case 75:
                        if(var2) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                        var4 = _closure3_slot3;
                        var3 = var4.add;
                        var2 = var6.id;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure3_slot0;
                        var3 = var4.push;
                        var2 = {};
                        var7 = _closure1_slot12;
                        var7 = var7.FRIEND;
                        var2['type'] = var7;
                        var2['item'] = var6;
                        var6 = false;
                        var2['isSuggested'] = var6;
                        var2['score'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot1;
                        var1 = var2.numFriends;
                        var1 = var1 + 1;
                        var2['numFriends'] = var1;
case 77:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var1.bind(var12)(var11);
            _fun0008_ip = 79; continue _fun0008;
case 50:
            var1 = {};
            var1['omitUserIds'] = var10;
            var1['maxRowsWithoutQuery'] = var9;
            var1['omitGuildId'] = var8;
            var1['shownUserIds'] = var4;
            var1['rows'] = var3;
            var1['counts'] = var2;
            var4 = _closure1_slot11;
            var4 = var4.EMBEDDED_APPLICATION;
            if(!(var5 === var4)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var5 = _closure1_slot14;
            var4 = {};
            var24 = var4;
            var23 = var1;
            var8 = copyDataProperties(var24, var23);
            var9 = false;
            var8 = 'includeGroupDms';
            var4[var8] = var9;
            var9 = 1;
            var8 = 'limit';
            var4[var8] = var9;
            var13 = undefined;
            var4 = var5.bind(var13)(var4);
            var4 = {};
            var24 = var4;
            var23 = var1;
            var5 = copyDataProperties(var24, var23);
            var5 = 'suggestedChannelIds';
            var4[var5] = var7;
            var5 = var4.suggestedChannelIds;
            var12 = var4.maxRowsWithoutQuery;
            var11 = var4.rows;
            var10 = var4.counts;
            var9 = null;
            if(!(var9 != var5)) { _fun0008_ip = 80; continue _fun0008 }
case 82:
            var4 = _closure1_slot17;
            var8 = var4.bind(var13)(var5);
            var5 = var8.bind(var13)();
            var4 = var5.done;
            var7 = true;
            if(var4) { _fun0008_ip = 80; continue _fun0008 }
case 83:
            var15 = var5.value;
            if(!(var9 != var12)) { _fun0008_ip = 84; continue _fun0008 }
case 85:
            if(!(var12 > var17)) { _fun0008_ip = 84; continue _fun0008 }
case 86:
            var4 = var11.length;
            if(!(!(var4 >= var12))) { _fun0008_ip = 80; continue _fun0008 }
case 84:
            var14 = _closure1_slot4;
            var4 = var14.getChannel;
            var15 = var4.bind(var14)(var15);
            if(!(var9 != var15)) { _fun0008_ip = 87; continue _fun0008 }
case 88:
            var14 = var11.push;
            var4 = {};
            var18 = _closure1_slot12;
            var18 = var18.CHANNEL;
            var4['type'] = var18;
            var4['item'] = var15;
            var4['isSuggested'] = var7;
            var4 = var14.bind(var11)(var4);
            var4 = var10.numChannels;
            var4 = var4 + 1;
            var10['numChannels'] = var4;
case 87:
            var14 = var8.bind(var13)();
            var4 = var14.done;
            var5 = var14;
            if(!var4) { _fun0008_ip = 83; continue _fun0008 }
case 80:
            var4 = {};
            var24 = var4;
            var23 = var1;
            var5 = copyDataProperties(var24, var23);
            var5 = 'suggestedUserIds';
            var4[var5] = var6;
            var18 = var4.omitUserIds;
            var5 = var4.suggestedUserIds;
            var14 = var4.maxRowsWithoutQuery;
            var13 = var4.omitGuildId;
            var12 = var4.shownUserIds;
            var11 = var4.rows;
            var10 = var4.counts;
            var15 = null;
            if(!(var15 != var5)) { _fun0008_ip = 89; continue _fun0008 }
case 90:
            var4 = _closure1_slot17;
            var9 = undefined;
            var8 = var4.bind(var9)(var5);
            var5 = var8.bind(var9)();
            var4 = var5.done;
            var7 = true;
            var6 = var5;
            var5 = undefined;
            if(var4) { _fun0008_ip = 89; continue _fun0008 }
case 91:
            var21 = var6.value;
            if(!(var15 != var14)) { _fun0008_ip = 92; continue _fun0008 }
case 93:
            if(!(var14 > var17)) { _fun0008_ip = 92; continue _fun0008 }
case 94:
            var4 = var11.length;
            if(!(!(var4 >= var14))) { _fun0008_ip = 89; continue _fun0008 }
case 92:
            var4 = var18.has;
            var4 = var4.bind(var18)(var21);
            var19 = var5;
            if(var4) { _fun0008_ip = 95; continue _fun0008 }
case 96:
            var4 = var12.has;
            var4 = var4.bind(var12)(var21);
            var19 = var5;
            if(var4) { _fun0008_ip = 95; continue _fun0008 }
case 97:
            var20 = _closure1_slot8;
            var4 = var20.getUser;
            var4 = var4.bind(var20)(var21);
            var20 = var15 == var4;
            if(var20) { _fun0008_ip = 98; continue _fun0008 }
case 99:
            var22 = _closure1_slot13;
            var21 = var4.id;
            var20 = var22.bind(var9)(var13, var21);
case 98:
            var19 = var4;
            if(var20) { _fun0008_ip = 95; continue _fun0008 }
case 100:
            var21 = var12.add;
            var20 = var4.id;
            var20 = var21.bind(var12)(var20);
            var21 = var11.push;
            var20 = {};
            var22 = _closure1_slot12;
            var22 = var22.FRIEND;
            var20['type'] = var22;
            var20['item'] = var4;
            var20['isSuggested'] = var7;
            var20 = var21.bind(var11)(var20);
            var20 = var10.numFriends;
            var20 = var20 + 1;
            var10['numFriends'] = var20;
            var19 = var4;
case 95:
            var20 = var8.bind(var9)();
            var4 = var20.done;
            var5 = var19;
            var6 = var20;
            if(!var4) { _fun0008_ip = 91; continue _fun0008 }
case 89:
            var5 = _closure1_slot14;
            var4 = {};
            var24 = var4;
            var23 = var1;
            var6 = copyDataProperties(var24, var23);
            var7 = true;
            var6 = 'includeGroupDms';
            var4[var6] = var7;
            var14 = undefined;
            var4 = var5.bind(var14)(var4);
            var13 = var1.omitUserIds;
            var12 = var1.maxRowsWithoutQuery;
            var11 = var1.omitGuildId;
            var10 = var1.shownUserIds;
            var9 = var1.rows;
            var8 = var1.counts;
            var4 = _closure1_slot17;
            var5 = _closure1_slot7;
            var1 = var5.getFriendIDs;
            var1 = var1.bind(var5)();
            var7 = var4.bind(var14)(var1);
            var4 = var7.bind(var14)();
            var1 = var4.done;
            var6 = false;
            var5 = var4;
            var4 = undefined;
            if(var1) { _fun0008_ip = 79; continue _fun0008 }
case 101:
            var20 = var5.value;
            if(!(var15 != var12)) { _fun0008_ip = 102; continue _fun0008 }
case 103:
            if(!(var12 > var17)) { _fun0008_ip = 102; continue _fun0008 }
case 104:
            var1 = var9.length;
            if(!(!(var1 >= var12))) { _fun0008_ip = 79; continue _fun0008 }
case 102:
            var1 = var13.has;
            var1 = var1.bind(var13)(var20);
            var18 = var4;
            if(var1) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            var1 = var10.has;
            var1 = var1.bind(var10)(var20);
            var18 = var4;
            if(var1) { _fun0008_ip = 105; continue _fun0008 }
case 107:
            var19 = _closure1_slot8;
            var1 = var19.getUser;
            var1 = var1.bind(var19)(var20);
            var19 = var15 == var1;
            if(var19) { _fun0008_ip = 108; continue _fun0008 }
case 109:
            var21 = _closure1_slot13;
            var20 = var1.id;
            var19 = var21.bind(var14)(var11, var20);
case 108:
            var18 = var1;
            if(var19) { _fun0008_ip = 105; continue _fun0008 }
case 110:
            var20 = var9.push;
            var19 = {};
            var21 = _closure1_slot12;
            var21 = var21.FRIEND;
            var19['type'] = var21;
            var19['item'] = var1;
            var19['isSuggested'] = var6;
            var19 = var20.bind(var9)(var19);
            var19 = var8.numFriends;
            var19 = var19 + 1;
            var8['numFriends'] = var19;
            var18 = var1;
case 105:
            var19 = var7.bind(var14)();
            var1 = var19.done;
            var4 = var18;
            var5 = var19;
            if(!var1) { _fun0008_ip = 101; continue _fun0008 }
case 79:
            var1 = {};
            var1['rows'] = var3;
            var1['counts'] = var2;
            return var1;
        }
    };
    var3['generateRowsForQuery'] = var5;
    var5 = function getMostRecentDMedUser(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var10 = arg1;
            var9 = arg2;
            var2 = _closure1_slot17;
            var3 = _closure1_slot9;
            var1 = var3.getPrivateChannelIds;
            var1 = var1.bind(var3)();
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var1 = null;
            var5 = var3;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0012_ip = 111; continue _fun0012 }
case 112:
            var12 = var5.value;
            var11 = _closure1_slot4;
            var2 = var11.getChannel;
            var13 = var2.bind(var11)(var12);
            var12 = var4;
            var11 = var3;
            if(!(var1 != var13)) { _fun0012_ip = 23; continue _fun0012 }
case 113:
            var2 = var13.isDM;
            var2 = var2.bind(var13)();
            var12 = var4;
            var11 = var3;
            if(!var2) { _fun0012_ip = 23; continue _fun0012 }
case 114:
            var15 = _closure1_slot6;
            var14 = var15.lastMessageId;
            var2 = var13.id;
            var2 = var14.bind(var15)(var2);
            var12 = var4;
            var11 = var3;
            if(!(var1 != var2)) { _fun0012_ip = 23; continue _fun0012 }
case 115:
            var2 = var13.getRecipientId;
            var14 = var2.bind(var13)();
            var11 = var3;
            var12 = var14;
            if(!(var1 != var12)) { _fun0012_ip = 23; continue _fun0012 }
case 116:
            var2 = var10.has;
            var2 = var2.bind(var10)(var14);
            var12 = var14;
            var11 = var3;
            if(var2) { _fun0012_ip = 23; continue _fun0012 }
case 70:
            var13 = _closure1_slot8;
            var2 = var13.getUser;
            var2 = var2.bind(var13)(var14);
            var12 = var14;
            var11 = var2;
            if(!(var1 != var2)) { _fun0012_ip = 23; continue _fun0012 }
case 117:
            var13 = var2.bot;
            var12 = var14;
            var11 = var2;
            if(var13) { _fun0012_ip = 23; continue _fun0012 }
case 118:
            var15 = _closure1_slot13;
            var13 = var2.id;
            var13 = var15.bind(var7)(var9, var13);
            var12 = var14;
            var11 = var2;
            if(var13) { _fun0012_ip = 23; continue _fun0012 }
case 119:
            return var2;
case 23:
            var13 = var6.bind(var7)();
            var2 = var13.done;
            var4 = var12;
            var3 = var11;
            var5 = var13;
            if(!var2) { _fun0012_ip = 112; continue _fun0012 }
case 111:
            return var1;
        }
    };
    var3['getMostRecentDMedUser'] = var5;
    var5 = function getUsersAlreadyJoined(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channel;
            var4 = var2.inviteTargetType;
            var6 = var2.applicationId;
            var2 = _closure1_slot11;
            var2 = var2.EMBEDDED_APPLICATION;
            if(!(var4 === var2)) { _fun0013_ip = 120; continue _fun0013 }
case 121:
            var2 = null;
            if(!(var2 != var1)) { _fun0013_ip = 120; continue _fun0013 }
case 122:
            var2 = _closure1_slot17;
            var4 = _closure1_slot3;
            var3 = var4.getEmbeddedActivitiesForChannel;
            var1 = var1.id;
            var1 = var3.bind(var4)(var1);
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = var2;
            if(var1) { _fun0013_ip = 120; continue _fun0013 }
case 123:
            var1 = var3.value;
            var2 = var1.applicationId;
            if(!(var2 !== var6)) { _fun0013_ip = 40; continue _fun0013 }
case 124:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0013_ip = 120; continue _fun0013 }
case 125:
            _fun0013_ip = 123; continue _fun0013;
case 40:
            var2 = global;
            var3 = var2.Set;
            var8 = var1.userIds;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var9 = var2;
            var1 = new var9[var3](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
case 120:
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var9 = var2;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getUsersAlreadyJoined'] = var5;
    var5 = function maxAgeString(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var1 = global;
            var3 = var1.parseInt;
            var6 = undefined;
            var2 = arg2;
            var1 = 10;
            var9 = var3.bind(var6)(var2, var1);
            var1 = 0;
            var1 = var1 === var9;
            var3 = _closure1_slot15;
            var5 = var3[var4];
            var10 = var5.value;
            var3 = var3[var4];
            var4 = var3.type;
            var3 = 'minutes';
            if(!(var3 !== var4)) { _fun0014_ip = 126; continue _fun0014 }
case 30:
            var3 = 'hours';
            if(!(var3 !== var4)) { _fun0014_ip = 127; continue _fun0014 }
case 128:
            var3 = 'days';
            if(!(var3 !== var4)) { _fun0014_ip = 117; continue _fun0014 }
case 9:
            var3 = 'never';
            if(!(var3 !== var4)) { _fun0014_ip = 124; continue _fun0014 }
case 11:
            var3 = '';
            return var3;
case 124:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 11;
            var3 = var11[var4];
            var3 = var8.bind(var6)(var3);
            var7 = var3.intl;
            if(var1) { _fun0014_ip = 129; continue _fun0014 }
case 130:
            var12 = var7.formatToPlainString;
            var3 = var11[var4];
            var3 = var8.bind(var6)(var3);
            var3 = var3.t;
            var5 = var3.yJnTxM;
            var3 = {};
            var3['numUses'] = var9;
            var3 = var12.bind(var7)(var5, var3);
            _fun0014_ip = 48; continue _fun0014;
case 129:
            var5 = var7.string;
            var4 = var11[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.QrHBnJ;
            var3 = var5.bind(var7)(var4);
case 48:
            return var3;
case 117:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 11;
            var7 = var5[var3];
            var7 = var4.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var5[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.t;
            if(var1) { _fun0014_ip = 131; continue _fun0014 }
case 132:
            var5 = var4.TfuB9P;
            var3 = {};
            var3['numDays'] = var10;
            var3['numUses'] = var9;
            var3 = var7.bind(var8)(var5, var3);
            _fun0014_ip = 133; continue _fun0014;
case 131:
            var5 = var4.T96qsr;
            var4 = {};
            var4['numDays'] = var10;
            var3 = var7.bind(var8)(var5, var4);
case 133:
            return var3;
case 127:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 11;
            var7 = var5[var3];
            var7 = var4.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var5[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.t;
            if(var1) { _fun0014_ip = 134; continue _fun0014 }
case 135:
            var5 = var4.NgZgAA;
            var3 = {};
            var3['numHours'] = var10;
            var3['numUses'] = var9;
            var3 = var7.bind(var8)(var5, var3);
            _fun0014_ip = 136; continue _fun0014;
case 134:
            var5 = var4.ZVdJMz;
            var4 = {};
            var4['numHours'] = var10;
            var3 = var7.bind(var8)(var5, var4);
case 136:
            return var3;
case 126:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            if(var1) { _fun0014_ip = 137; continue _fun0014 }
case 138:
            var8 = var4.formatToPlainString;
            var1 = var7[var2];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var3 = var1.eDRWJC;
            var1 = {};
            var1['numUses'] = var9;
            var1 = var8.bind(var4)(var3, var1);
            _fun0014_ip = 139; continue _fun0014;
case 137:
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2./WbTXF;
            var1 = var3.bind(var4)(var2);
case 139:
            return var1;
        }
    };
    var3['maxAgeString'] = var5;
    var4 = function urgentShareMessageString(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 140; continue _fun0015 }
case 141:
            var2 = _closure1_slot15;
            var4 = var2[var3];
            var6 = var4.value;
            var2 = var2[var3];
            var3 = var2.type;
            var2 = 'minutes';
            if(!(var2 !== var3)) { _fun0015_ip = 142; continue _fun0015 }
case 143:
            var2 = 'hours';
            if(!(var2 !== var3)) { _fun0015_ip = 144; continue _fun0015 }
case 78:
            var2 = 'days';
            if(!(var2 !== var3)) { _fun0015_ip = 145; continue _fun0015 }
case 35:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.RHbY6O;
            var2 = {};
            var2['link'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 145:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.gLIlkZ;
            var2 = {};
            var2['numDays'] = var6;
            var2['link'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 144:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.3d9BlJ;
            var2 = {};
            var2['numHours'] = var6;
            var2['link'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 142:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var3 = var8[var1];
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var7.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.N3VHk5;
            var1 = {};
            var1['numMinutes'] = var6;
            var1['link'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 140:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.RHbY6O;
            var1 = {};
            var1['link'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['urgentShareMessageString'] = var4;
    var3['EXPERIMENTAL_MAX_AGE_OPTIONS'] = var2;
    return var1;
})();