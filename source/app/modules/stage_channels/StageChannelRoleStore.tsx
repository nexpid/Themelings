// app/modules/stage_channels/StageChannelRoleStore.tsx
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
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function isSpeaker(arg1, arg2) {
        var5 = _closure1_slot14;
        var4 = var5.getVoiceStateForChannel;
        var3 = arg2;
        var2 = arg1;
        var7 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var1 = 11;
        var2 = var5[var1];
        var3 = undefined;
        var6 = var4.bind(var3)(var2);
        var2 = var6.getAudienceRequestToSpeakState;
        var2 = var2.bind(var6)(var7);
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.RequestToSpeakStates;
        var1 = var1.ON_STAGE;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function isModerator(arg1, arg2, arg3) {
        var4 = arg2;
        var2 = _closure1_slot2;
        var9 = _closure1_slot3;
        var1 = 12;
        var1 = var9[var1];
        var8 = undefined;
        var3 = var2.bind(var8)(var1);
        var2 = var3.can;
        var1 = {};
        var7 = _closure1_slot0;
        var6 = 13;
        var6 = var9[var6];
        var6 = var7.bind(var8)(var6);
        var6 = var6.MODERATE_STAGE_CHANNEL_PERMISSIONS;
        var1['permission'] = var6;
        var6 = arg1;
        var1['user'] = var6;
        var1['context'] = var4;
        var6 = arg3;
        var6 = var6.permissionOverwrites;
        var1['overwrites'] = var6;
        var6 = _closure1_slot11;
        var5 = var6.getUnsafeMutableRoles;
        var4 = var4.id;
        var4 = var5.bind(var6)(var4);
        var1['roles'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function buildStageChannelUserRoles(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var8 = arguments[2];
            var11 = undefined;
            if(!(var8 === var11)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var8 = false;
case 39:
            var1 = _closure1_slot16;
            var1 = var1[var4];
            var7 = null;
            if(!(var7 == var1)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var5 = _closure1_slot16;
            var1 = {};
            var5[var4] = var1;
case 41:
            if(!(var8 === var11)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var8 = false;
case 43:
            var5 = _closure1_slot9;
            var1 = var5.getChannel;
            var10 = var1.bind(var5)(var4);
            var1 = var7 == var10;
            var6 = undefined;
            if(var1) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var1 = var10.getGuildId;
            var6 = var1.bind(var10)();
case 45:
            var5 = _closure1_slot12;
            var1 = var5.getGuild;
            var9 = var1.bind(var5)(var6);
            if(!(var7 != var9)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            if(!(var7 != var10)) { _fun0005_ip = 47; continue _fun0005 }
case 49:
            var1 = var10.isGuildStageVoice;
            var1 = var1.bind(var10)();
            if(var1) { _fun0005_ip = 50; continue _fun0005 }
case 47:
            var1 = _closure1_slot17;
            _fun0005_ip = 51; continue _fun0005;
case 50:
            var5 = {};
            var6 = _closure1_slot15;
            var12 = var6.SPEAKER;
            var6 = _closure1_slot21;
            var6 = var6.bind(var11)(var3, var4);
            var5[var12] = var6;
            var6 = _closure1_slot15;
            var6 = var6.MODERATOR;
            var7 = null;
            if(!var8) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var8 = _closure1_slot22;
            var7 = var8.bind(var11)(var3, var9, var10);
case 52:
            var5[var6] = var7;
            var1 = var5;
case 51:
            var2 = _closure1_slot16;
            var2 = var2[var4];
            var2[var3] = var1;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function resetStageChannelRolesForGuild(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getMutableGuildChannelsForGuild;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = global;
            var2 = var1.Object;
            var1 = var2.values;
            var3 = var1.bind(var2)(var3);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.isGuildStageVoice;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot19;
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var2 = var3.value;
            var7 = _closure1_slot16;
            var2 = var2.id;
            var2 = delete var7[var2];
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0006_ip = 55; continue _fun0006 }
case 54:
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var12 = function handleGuildMemberUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var11 = var1.guildId;
            var2 = var1.user;
            var10 = null;
            var1 = var10 != var2;
            if(!var1) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var1 = var10 != var11;
case 56:
            if(!var1) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var9 = var2.id;
            var7 = _closure1_slot16;
            var1 = true;
            for(var3 in var7)
case 60:
            {
                var1 = true;
case 61:
                var13 = var3;
                var14 = _closure1_slot9;
                var12 = var14.getBasicChannel;
                var14 = var12.bind(var14)(var13);
                var12 = var10 != var14;
                if(!var12) { _fun0007_ip = 15; continue _fun0007 }
case 62:
                var14 = var14.guild_id;
                var12 = var14 === var11;
case 15:
                if(!var12) { _fun0007_ip = 60; continue _fun0007 }
case 63:
                var12 = _closure1_slot16;
                var12 = var12[var13];
                var12 = delete var12[var9];
                _fun0007_ip = 60; continue _fun0007;
            }
case 58:
            return var1;
        }
    };
    var6 = function handleGuildCreateOrDelete(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guild;
            var6 = _closure1_slot16;
            var1 = null;
            for(var2 in var6)
case 64:
            {
case 42:
                var10 = var2;
                var11 = _closure1_slot9;
                var9 = var11.getBasicChannel;
                var11 = var9.bind(var11)(var10);
                var9 = var1 != var11;
                if(!var9) { _fun0008_ip = 46; continue _fun0008 }
case 65:
                var12 = var11.guild_id;
                var11 = var8.id;
                var9 = var12 !== var11;
case 46:
                if(var9) { _fun0008_ip = 64; continue _fun0008 }
case 66:
                var9 = _closure1_slot16;
                var9 = delete var9[var10];
                _fun0008_ip = 64; continue _fun0008;
            }
case 13:
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var4 = {};
    var2 = 'speaker';
    var4['SPEAKER'] = var2;
    var2 = 'moderator';
    var4['MODERATOR'] = var2;
    var _closure1_slot15 = var4;
    var2 = {};
    var _closure1_slot16 = var2;
    var2 = {};
    var5 = var4.SPEAKER;
    var10 = false;
    var2[var5] = var10;
    var5 = var4.MODERATOR;
    var2[var5] = var10;
    var _closure1_slot17 = var2;
    var5 = 15;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.Store;
    var5 = function(arg1) {
        var4 = function StageChannelRoleStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 67; continue _fun0009 }
case 60:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 49; continue _fun0009;
case 67:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 49:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var8 = this;
            var7 = var8.waitFor;
            var14 = _closure1_slot10;
            var13 = _closure1_slot9;
            var12 = _closure1_slot12;
            var11 = _closure1_slot13;
            var10 = _closure1_slot14;
            var9 = _closure1_slot11;
            var15 = var8;
            var1 = var15[var7](var14, var13, var12, var11, var10, var9, var8);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'isSpeaker';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.getPermissionsForUser;
            var2 = arg1;
            var1 = arg2;
            var2 = var3.bind(var4)(var2, var1);
            var1 = _closure1_slot15;
            var1 = var1.SPEAKER;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isModerator';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = this;
                var4 = var5.getPermissionsForUser;
                var3 = arg1;
                var2 = arg2;
                var1 = true;
                var2 = var4.bind(var5)(var3, var2, var1);
                var1 = _closure1_slot15;
                var1 = var1.MODERATOR;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0010_ip = 68; continue _fun0010 }
case 43:
                var1 = var2;
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isAudienceMember';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = this;
                var3 = var4.getPermissionsForUser;
                var2 = arg1;
                var1 = arg2;
                var3 = var3.bind(var4)(var2, var1);
                var1 = _closure1_slot15;
                var1 = var1.SPEAKER;
                var1 = var3[var1];
                var1 = !var1;
                if(!var1) { _fun0011_ip = 11; continue _fun0011 }
case 41:
                var2 = _closure1_slot15;
                var2 = var2.MODERATOR;
                var2 = var3[var2];
                var1 = !var2;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getPermissionsForUser';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var4 = arguments[2];
                var5 = undefined;
                if(!(var4 === var5)) { _fun0012_ip = 39; continue _fun0012 }
case 40:
                var4 = false;
case 39:
                var8 = null;
                if(!(var8 != var7)) { _fun0012_ip = 58; continue _fun0012 }
case 35:
                if(!(var8 != var6)) { _fun0012_ip = 58; continue _fun0012 }
case 69:
                var1 = _closure1_slot16;
                var1 = var1[var6];
                var2 = var8 == var1;
                var9 = undefined;
                if(var2) { _fun0012_ip = 60; continue _fun0012 }
case 70:
                var9 = var1[var7];
case 60:
                if(!(var8 == var9)) { _fun0012_ip = 71; continue _fun0012 }
case 8:
                var1 = _closure1_slot23;
                var1 = var1.bind(var5)(var7, var6, var4);
                _fun0012_ip = 72; continue _fun0012;
case 71:
                var2 = var9;
                if(!var4) { _fun0012_ip = 73; continue _fun0012 }
case 4:
                var4 = _closure1_slot15;
                var4 = var4.MODERATOR;
                var4 = var9[var4];
                var2 = var9;
                if(!(var8 == var4)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                var4 = _closure1_slot23;
                var3 = true;
                var2 = var4.bind(var5)(var7, var6, var3);
case 73:
                var1 = var2;
case 72:
                return var1;
case 58:
                var1 = _closure1_slot17;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'StageChannelRoleStore';
    var10['displayName'] = var5;
    var5 = 16;
    var5 = var8[var5];
    var16 = var9.bind(var1)(var5);
    var5 = {};
    var13 = function handleChannelUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channels;
            var2 = _closure1_slot19;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0013_ip = 71; continue _fun0013 }
case 75:
            var2 = var3.value;
            var6 = _closure1_slot16;
            var2 = var2.id;
            var2 = delete var6[var2];
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0013_ip = 75; continue _fun0013 }
case 71:
            return var1;
        }
    };
    var5['CHANNEL_UPDATES'] = var13;
    var13 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var5['CONNECTION_OPEN'] = var13;
    var5['GUILD_MEMBER_REMOVE'] = var12;
    var5['GUILD_MEMBER_UPDATE'] = var12;
    var12 = function handleGuildRoleUpdate(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var5['GUILD_ROLE_UPDATE'] = var12;
    var12 = function handlePassiveUpdateV2(arg1) {
        var3 = _closure1_slot24;
        var1 = arg1;
        var2 = var1.guildId;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var5['PASSIVE_UPDATE_V2'] = var12;
    var11 = function handleVoiceStateUpdates(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var5 = var1.voiceStates;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isEmpty;
            var1 = _closure1_slot16;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            if(!var1) { _fun0014_ip = 66; continue _fun0014 }
case 8:
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg1;
                    var1 = arg2;
                    var6 = var1.userId;
                    var7 = var1.channelId;
                    var4 = null;
                    var3 = var4 == var7;
                    var1 = false;
                    if(var3) { _fun0015_ip = 76; continue _fun0015 }
case 69:
                    var8 = _closure1_slot9;
                    var3 = var8.getChannel;
                    var9 = var3.bind(var8)(var7);
                    var3 = var4 == var9;
                    if(var3) { _fun0015_ip = 77; continue _fun0015 }
case 60:
                    var8 = var9.isGuildStageVoice;
                    var8 = var8.bind(var9)();
                    var3 = !var8;
case 77:
                    if(var3) { _fun0015_ip = 78; continue _fun0015 }
case 34:
                    var5 = _closure1_slot16;
                    var5 = var5[var7];
                    var7 = var4 == var5;
                    var3 = 0;
                    if(var7) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                    var5 = delete var5[var6];
                    var3 = 0;
case 78:
                    var1 = !var3;
case 76:
                    if(var1) { _fun0015_ip = 63; continue _fun0015 }
case 15:
                    var1 = var2;
case 63:
                    return var1;
                }
            };
            var2 = false;
            var1 = var4.bind(var5)(var3, var2);
case 66:
            return var1;
        }
    };
    var5['VOICE_STATE_UPDATES'] = var11;
    var5['GUILD_CREATE'] = var6;
    var5['GUILD_DELETE'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var17 = var6;
    var15 = var5;
    var5 = new var17[var10](var16, var15, var14);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 17;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/StageChannelRoleStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['StagePermissionBuckets'] = var4;
    var3['NO_PERMISSIONS'] = var2;
    return var1;
})();