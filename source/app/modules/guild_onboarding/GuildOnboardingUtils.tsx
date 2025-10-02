// app/modules/guild_onboarding/GuildOnboardingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function getChannelCoverage(arg1, arg2, arg3) {
        var6 = arg1;
        var5 = arg2;
        var4 = arg3;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var8 = var3;
        var1 = new var8[var1](var7);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot0 = var1;
        var3 = var6.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.options;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var5 = null;
                    var2 = var5 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var3 = var3.channelIds;
                    var2 = var5 == var3;
                    var4 = var3;
case 36:
                    if(var2) { _fun0004_ip = 5; continue _fun0004 }
case 38:
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var3.bind(var6)(var1);
        var3 = var5.forEach;
        var1 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.add;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var5)(var1);
        var3 = var4.filter;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = var4.isCategory;
                var1 = var1.bind(var4)();
                var1 = !var1;
                if(!var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var2 = var4.isThread;
                var2 = var2.bind(var4)();
                var1 = !var2;
case 38:
                if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 8;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
case 40:
                return var1;
            }
        };
        var4 = var3.bind(var4)(var1);
        var3 = var4.filter;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var5 = _closure2_slot0;
                var2 = var5.has;
                var1 = var3.id;
                var1 = var2.bind(var5)(var1);
                if(var1) { _fun0006_ip = 42; continue _fun0006 }
case 34:
                var5 = var3.parent_id;
                var2 = null;
                var2 = var2 != var5;
                if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var5 = _closure2_slot0;
                var4 = var5.has;
                var3 = var3.parent_id;
                var2 = var4.bind(var5)(var3);
case 43:
                var1 = var2;
case 42:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var1);
        var1 = new Array(2);
        var1[0] = var3;
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var5 = _closure2_slot0;
                var2 = var5.has;
                var1 = var3.id;
                var1 = var2.bind(var5)(var1);
                if(var1) { _fun0007_ip = 42; continue _fun0007 }
case 34:
                var5 = var3.parent_id;
                var2 = null;
                var2 = var2 != var5;
                if(!var2) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var5 = _closure2_slot0;
                var4 = var5.has;
                var3 = var3.parent_id;
                var2 = var4.bind(var5)(var3);
case 43:
                var1 = var2;
case 42:
                var1 = !var1;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot15 = var1;
    var4 = function isChattableChannel(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 9;
            var2 = var5[var2];
            var8 = undefined;
            var6 = var3.bind(var8)(var2);
            var5 = var6.canChannelBeDefault;
            var3 = var7.guild_id;
            var2 = var7.id;
            var2 = var5.bind(var6)(var3, var2);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var3 = var7.isForumChannel;
            var3 = var3.bind(var7)();
            var6 = _closure1_slot2;
            var9 = _closure1_slot3;
            var5 = 10;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.canEveryoneRole;
            var4 = _closure1_slot10;
            if(var3) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var3 = var4.SEND_MESSAGES;
            var3 = var5.bind(var6)(var3, var7);
            _fun0008_ip = 51; continue _fun0008;
case 49:
            var4 = var4.SEND_MESSAGES_IN_THREADS;
            var3 = var5.bind(var6)(var4, var7);
case 51:
            var2 = var3;
case 47:
            var1 = var2;
case 45:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var1 = function getFlattenedDefaultChannels(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var12 = arg2;
            var11 = arguments[2];
            var10 = arguments[3];
            var9 = undefined;
            if(!(var11 === var9)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
            var11 = function r(arg1) {
                var1 = arg1;
                return var1;
            };
case 52:
            if(!(var10 === var9)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var10 = function l() {
                var1 = true;
                return var1;
            };
case 54:
            var1 = new Array(0);
            var3 = _closure1_slot13;
            var5 = _closure1_slot5;
            var4 = var5.getChannels;
            var2 = arg1;
            var4 = var4.bind(var5)(var2);
            var2 = _closure1_slot6;
            var2 = var4[var2];
            var7 = var3.bind(var9)(var2);
            var3 = var7.bind(var9)();
            var2 = var3.done;
            var6 = null;
            var5 = 9;
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var2 = var4.value;
            var2 = var2.channel;
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var13 = var13[var5];
            var16 = var14.bind(var9)(var13);
            var15 = var16.canChannelBeDefault;
            var14 = var2.guild_id;
            var13 = var2.id;
            var14 = var15.bind(var16)(var14, var13);
            var13 = var3;
            if(!var14) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var15 = var12.includes;
            var14 = var2.id;
            var14 = var15.bind(var12)(var14);
            if(!var14) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var14 = var2.isCategory;
            var14 = var14.bind(var2)();
            if(!var14) { _fun0009_ip = 62; continue _fun0009 }
case 60:
            var14 = var2.isThread;
            var14 = var14.bind(var2)();
            var13 = var3;
            if(var14) { _fun0009_ip = 58; continue _fun0009 }
case 63:
            var14 = var2.parent_id;
            var13 = var3;
            if(!(var6 != var14)) { _fun0009_ip = 58; continue _fun0009 }
case 64:
            var15 = var12.includes;
            var14 = var2.parent_id;
            var14 = var15.bind(var12)(var14);
            var13 = var3;
            if(!var14) { _fun0009_ip = 58; continue _fun0009 }
case 62:
            var2 = var11.bind(var9)(var2);
            var14 = var10.bind(var9)(var2);
            var13 = var2;
            if(!var14) { _fun0009_ip = 58; continue _fun0009 }
case 65:
            var14 = var1.push;
            var14 = var14.bind(var1)(var2);
            var13 = var2;
case 58:
            var14 = var7.bind(var9)();
            var2 = var14.done;
            var3 = var13;
            var4 = var14;
            if(!var2) { _fun0009_ip = 57; continue _fun0009 }
case 56:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function areStatesEqual(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var7 = arg2;
            var2 = 0;
            var1 = var4[var2];
            var3 = var1.length;
            var1 = var7[var2];
            var1 = var1.length;
            var1 = var3 === var1;
            if(!var1) { _fun0010_ip = 66; continue _fun0010 }
case 33:
            var3 = 1;
            var5 = var4[var3];
            var5 = var5.length;
            var3 = var7[var3];
            var3 = var3.length;
            var1 = var5 === var3;
case 66:
            if(!var1) { _fun0010_ip = 51; continue _fun0010 }
case 7:
            var9 = _closure1_slot1;
            var5 = _closure1_slot3;
            var8 = 12;
            var5 = var5[var8];
            var6 = undefined;
            var9 = var9.bind(var6)(var5);
            var5 = var4[var2];
            var2 = var7[var2];
            var2 = var9.bind(var6)(var5, var2);
            if(!var2) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var3 = var3[var8];
            var5 = var5.bind(var6)(var3);
            var3 = 1;
            var4 = var4[var3];
            var3 = var7[var3];
            var2 = var5.bind(var6)(var4, var3);
case 67:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var10 = var8[var6];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.GuildFeatures;
    var _closure1_slot9 = var9;
    var6 = var6.Permissions;
    var _closure1_slot10 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.GuildMemberFlags;
    var _closure1_slot11 = var6;
    var9 = var5.Date;
    var5 = var9.prototype;
    var6 = Object.create(var5, {constructor: {value: var9}});
    var14 = 1682488800000.0;
    var15 = var6;
    var5 = new var15[var9](var14, var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot12 = var5;
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_onboarding/GuildOnboardingUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ONBOARDING_EPOCH'] = var5;
    var5 = function useGuildOnboardingSettingsAvailable(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot7;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot8;
        var2[1] = var5;
        var1 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = _closure1_slot7;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var7 = var3.bind(var4)(var1);
                var1 = null;
                var4 = var1 == var7;
                if(var4) { _fun0011_ip = 69; continue _fun0011 }
case 33:
                var5 = var7.features;
                var3 = var5.has;
                var1 = _closure1_slot9;
                var1 = var1.COMMUNITY;
                var1 = var3.bind(var5)(var1);
                var4 = !var1;
case 69:
                var1 = !var4;
                var6 = _closure1_slot8;
                var5 = var6.can;
                var3 = _closure1_slot10;
                var3 = var3.MANAGE_GUILD;
                var3 = var5.bind(var6)(var3, var7);
                var5 = var6.can;
                var2 = _closure1_slot10;
                var2 = var2.MANAGE_ROLES;
                var2 = var5.bind(var6)(var2, var7);
                if(var4) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                var1 = var3;
case 70:
                if(!var1) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                var1 = var2;
case 72:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useGuildOnboardingSettingsAvailable'] = var5;
    var5 = function isGuildOnboardingSettingsAvailable(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot7;
            var3 = var4.getGuild;
            var1 = arg1;
            var7 = var3.bind(var4)(var1);
            var1 = null;
            var4 = var1 == var7;
            if(var4) { _fun0012_ip = 66; continue _fun0012 }
case 36:
            var5 = var7.features;
            var3 = var5.has;
            var1 = _closure1_slot9;
            var1 = var1.COMMUNITY;
            var1 = var3.bind(var5)(var1);
            var4 = !var1;
case 66:
            var1 = !var4;
            var6 = _closure1_slot8;
            var5 = var6.can;
            var3 = _closure1_slot10;
            var3 = var3.MANAGE_GUILD;
            var3 = var5.bind(var6)(var3, var7);
            var5 = var6.can;
            var2 = _closure1_slot10;
            var2 = var2.MANAGE_ROLES;
            var2 = var5.bind(var6)(var2, var7);
            if(var4) { _fun0012_ip = 74; continue _fun0012 }
case 75:
            var1 = var3;
case 74:
            if(!var1) { _fun0012_ip = 76; continue _fun0012 }
case 77:
            var1 = var2;
case 76:
            return var1;
        }
    };
    var3['isGuildOnboardingSettingsAvailable'] = var5;
    var5 = function isBlockedByOnboarding(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var3 = null;
            if(!(var3 != var2)) { _fun0013_ip = 78; continue _fun0013 }
case 46:
            var6 = var2.features;
            var5 = var6.has;
            var4 = _closure1_slot9;
            var4 = var4.GUILD_ONBOARDING;
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0013_ip = 78; continue _fun0013 }
case 79:
            if(!(var3 != var1)) { _fun0013_ip = 80; continue _fun0013 }
case 81:
            var4 = var1.joinedAt;
            if(!(var3 != var4)) { _fun0013_ip = 80; continue _fun0013 }
case 35:
            var4 = global;
            var6 = var4.Date;
            var9 = var1.joinedAt;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var10 = var5;
            var4 = new var10[var6](var9, var8);
            var5 = var4 instanceof Object ? var4 : var5;
            var4 = _closure1_slot12;
            if(!(!(var5 < var4))) { _fun0013_ip = 82; continue _fun0013 }
case 75:
            var1 = var1.flags;
            var4 = var3 != var1;
            var3 = 0;
            if(!var4) { _fun0013_ip = 83; continue _fun0013 }
case 84:
            var3 = var1;
case 83:
            var4 = _closure1_slot2;
            var1 = _closure1_slot3;
            var7 = 7;
            var1 = var1[var7];
            var6 = undefined;
            var5 = var4.bind(var6)(var1);
            var4 = var5.hasFlag;
            var1 = _closure1_slot11;
            var1 = var1.STARTED_ONBOARDING;
            var1 = var4.bind(var5)(var3, var1);
            var5 = var3;
            if(!var1) { _fun0013_ip = 85; continue _fun0013 }
case 16:
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hasFlag;
            var2 = _closure1_slot11;
            var2 = var2.COMPLETED_ONBOARDING;
            var2 = var3.bind(var4)(var5, var2);
            var1 = !var2;
case 85:
            return var1;
case 82:
            var1 = false;
            return var1;
case 80:
            var1 = false;
            return var1;
case 78:
            var1 = false;
            return var1;
        }
    };
    var3['isBlockedByOnboarding'] = var5;
    var5 = function getChannelCoverageForOnboarding(arg1, arg2, arg3) {
        var5 = _closure1_slot15;
        var4 = _closure1_slot5;
        var3 = var4.getChannels;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot6;
        var3 = var2[var1];
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.channel;
            return var1;
        };
        var4 = var2.bind(var3)(var1);
        var3 = undefined;
        var2 = arg2;
        var1 = arg3;
        var1 = var5.bind(var3)(var2, var1, var4);
        return var1;
    };
    var3['getChannelCoverageForOnboarding'] = var5;
    var5 = function useChannelCoverageForOnboarding(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot15;
        var6 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 6;
        var3 = var4[var3];
        var4 = undefined;
        var8 = var6.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getChannels;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var7.bind(var8)(var6, var3);
        var2 = _closure1_slot6;
        var3 = var3[var2];
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.channel;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = arg2;
        var1 = arg3;
        var1 = var5.bind(var4)(var2, var1, var3);
        return var1;
    };
    var3['useChannelCoverageForOnboarding'] = var5;
    var5 = function isChattableChannelId(arg1) {
        var3 = _closure1_slot16;
        var4 = _closure1_slot4;
        var2 = var4.getChannel;
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['isChattableChannelId'] = var5;
    var3['isChattableChannel'] = var4;
    var4 = function useIsChattableChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getChannel;
                var1 = _closure2_slot0;
                var4 = var3.bind(var4)(var1);
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var5.bind(var3)(var1);
                var1 = var5.isNotNullish;
                var1 = var1.bind(var5)(var4);
                if(!var1) { _fun0014_ip = 86; continue _fun0014 }
case 87:
                var2 = _closure1_slot16;
                var1 = var2.bind(var3)(var4);
case 86:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsChattableChannel'] = var4;
    var4 = function getMinimumSetOfDefaultChannelIds(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var8 = arg1;
            var4 = arg3;
            var7 = arguments[3];
            var _closure2_slot0 = var8;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0015_ip = 55; continue _fun0015 }
case 88:
            var7 = function t() {
                var1 = true;
                return var1;
            };
case 55:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var6;
            var5 = _closure1_slot17;
            var11 = arg2;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var13 = undefined;
            var12 = var8;
            var9 = var7;
            var1 = var13[var5](var12, var11, var10, var9, var8);
            _closure2_slot2 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.required;
                    if(!var1) { _fun0016_ip = 89; continue _fun0016 }
case 32:
                    var9 = _closure1_slot17;
                    var8 = _closure2_slot0;
                    var4 = var3.options;
                    var5 = 0;
                    var10 = var4[var5];
                    var4 = null;
                    var11 = var4 == var10;
                    var7 = undefined;
                    var6 = undefined;
                    if(var11) { _fun0016_ip = 66; continue _fun0016 }
case 90:
                    var6 = var10.channelIds;
case 66:
                    if(!(var4 == var6)) { _fun0016_ip = 42; continue _fun0016 }
case 69:
                    var6 = new Array(0);
case 42:
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var6 = var9.bind(var7)(var8, var6, var4);
                    var4 = var3.options;
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var1 = arg1;
                            var3 = arg2;
                            var5 = var3.channelIds;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0017_ip = 91; continue _fun0017 }
case 29:
                            var7 = _closure1_slot17;
                            var11 = _closure2_slot0;
                            var10 = var3.channelIds;
                            var12 = undefined;
                            var9 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.id;
                                return var1;
                            };
                            var8 = function(arg1) {
                                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                    var4 = arg1;
                                    var3 = _closure2_slot1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var4);
                                    if(!var1) { _fun0018_ip = 92; continue _fun0018 }
case 29:
                                    var3 = _closure2_slot2;
                                    var2 = var3.includes;
                                    var2 = var2.bind(var3)(var4);
                                    var1 = !var2;
case 92:
                                    return var1;
                                }
                            };
                            var2 = var12[var7](var11, var10, var9, var8, var7);
                            var4 = var2.length;
                            var3 = var1.length;
                            if(!(var4 < var3)) { _fun0017_ip = 93; continue _fun0017 }
case 35:
                            var1 = var2;
case 93:
                            return var1;
case 91:
                            var1 = new Array(0);
                            return var1;
                        }
                    };
                    var13 = var3.bind(var4)(var2, var6);
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var1 = new Array(0);
                    var14 = var1;
                    var12 = 0;
                    var4 = arraySpread(var14, var13, var12);
                    var14 = var2;
                    var13 = var1;
                    var12 = var3;
                    var1 = apply(var14, var13, var12);
case 89:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['getMinimumSetOfDefaultChannelIds'] = var4;
    var4 = function getChattableDefaultChannels(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var9 = arg1;
            var4 = _closure1_slot17;
            var5 = undefined;
            var2 = arg2;
            var2 = var4.bind(var5)(var9, var2);
            var4 = {};
            var6 = _closure1_slot13;
            var8 = _closure1_slot5;
            var7 = var8.getChannels;
            var7 = var7.bind(var8)(var9);
            var3 = _closure1_slot6;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.bind(var5)();
            var3 = var6.done;
            if(var3) { _fun0019_ip = 68; continue _fun0019 }
case 86:
            var8 = var6.value;
            var3 = var8.channel;
            var3 = var3.id;
            var4[var3] = var8;
            var8 = var7.bind(var5)();
            var3 = var8.done;
            var6 = var8;
            if(!var3) { _fun0019_ip = 86; continue _fun0019 }
case 68:
            var6 = var2.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3 = var6.bind(var2)(var3);
            var1 = function filterChattableChannels(arg1, arg2) {
                var3 = arg1;
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var3 = _closure1_slot16;
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var4 = var2[var1];
                        var1 = null;
                        var5 = var1 == var4;
                        var2 = undefined;
                        var1 = undefined;
                        if(var5) { _fun0020_ip = 94; continue _fun0020 }
case 95:
                        var1 = var4.channel;
case 94:
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var1.bind(var5)(var3, var4);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['getChattableDefaultChannels'] = var4;
    var4 = function useChattableDefaultChannels(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var7;
        var9 = _closure1_slot18;
        var11 = function() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var2 = new Array(0);
                var3 = new Array(0);
                var11 = {};
                var4 = _closure1_slot13;
                var6 = _closure1_slot5;
                var5 = var6.getChannels;
                var1 = _closure2_slot0;
                var5 = var5.bind(var6)(var1);
                var1 = _closure1_slot6;
                var1 = var5[var1];
                var8 = undefined;
                var7 = var4.bind(var8)(var1);
                var4 = var7.bind(var8)();
                var1 = var4.done;
                var6 = null;
                var5 = 9;
                if(var1) { _fun0021_ip = 96; continue _fun0021 }
case 97:
                var1 = var4.value;
                var13 = _closure1_slot0;
                var12 = _closure1_slot3;
                var12 = var12[var5];
                var15 = var13.bind(var8)(var12);
                var14 = var15.canChannelBeDefault;
                var12 = var1.channel;
                var13 = var12.guild_id;
                var12 = var1.channel;
                var12 = var12.id;
                var12 = var14.bind(var15)(var13, var12);
                if(!var12) { _fun0021_ip = 18; continue _fun0021 }
case 98:
                var15 = _closure2_slot1;
                var14 = var15.has;
                var13 = var1.channel;
                var13 = var13.id;
                var13 = var14.bind(var15)(var13);
                if(!var13) { _fun0021_ip = 99; continue _fun0021 }
case 15:
                var15 = var1.channel;
                var14 = var15.isCategory;
                var14 = var14.bind(var15)();
                var13 = !var14;
case 99:
                if(var13) { _fun0021_ip = 100; continue _fun0021 }
case 16:
                var15 = var1.channel;
                var14 = var15.isThread;
                var14 = var14.bind(var15)();
                var14 = !var14;
                if(!var14) { _fun0021_ip = 101; continue _fun0021 }
case 63:
                var15 = var1.channel;
                var15 = var15.parent_id;
                var14 = var6 != var15;
case 101:
                if(!var14) { _fun0021_ip = 102; continue _fun0021 }
case 103:
                var17 = _closure2_slot1;
                var16 = var17.has;
                var15 = var1.channel;
                var15 = var15.parent_id;
                var14 = var16.bind(var17)(var15);
case 102:
                var13 = var14;
case 100:
                var12 = var13;
case 18:
                if(!var12) { _fun0021_ip = 104; continue _fun0021 }
case 105:
                var12 = var1.channel;
                var12 = var12.id;
                var11[var12] = var1;
                var13 = var2.push;
                var12 = var1.channel;
                var12 = var13.bind(var2)(var12);
                var13 = _closure1_slot16;
                var12 = var1.channel;
                var12 = var13.bind(var8)(var12);
                if(!var12) { _fun0021_ip = 104; continue _fun0021 }
case 106:
                var12 = var3.push;
                var1 = var1.channel;
                var1 = var1.id;
                var1 = var12.bind(var3)(var1);
case 104:
                var12 = var7.bind(var8)();
                var1 = var12.done;
                var4 = var12;
                if(!var1) { _fun0021_ip = 97; continue _fun0021 }
case 96:
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var13 = var6;
        var12 = var4;
        var10 = var3;
        var1 = var13[var5](var12, var11, var10, var9, var8);
        return var1;
    };
    var3['useChattableDefaultChannels'] = var4;
    var4 = function getSelectedRoleIds(arg1) {
        var4 = arg1;
        var1 = global;
        var3 = var1.Set;
        var2 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.roleIds;
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = var2.flat;
        var4 = var1.bind(var2)();
        var2 = var4.filter;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var1 = 11;
        var5 = var5[var1];
        var1 = undefined;
        var1 = var6.bind(var1)(var5);
        var1 = var1.isNotNullish;
        var7 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getSelectedRoleIds'] = var4;
    var2 = function getSelectedChannelIds(arg1) {
        var4 = arg1;
        var1 = global;
        var3 = var1.Set;
        var2 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.channelIds;
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = var2.flat;
        var4 = var1.bind(var2)();
        var2 = var4.filter;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var1 = 11;
        var5 = var5[var1];
        var1 = undefined;
        var1 = var6.bind(var1)(var5);
        var1 = var1.isNotNullish;
        var7 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getSelectedChannelIds'] = var2;
    return var1;
})();