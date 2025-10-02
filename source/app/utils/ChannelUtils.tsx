// app/utils/ChannelUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var9;
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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
    var1 = function isTypeOrCategory(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var1 = var3 === var1;
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = _closure1_slot22;
            var1 = var3 === var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var7 = function allowChannelAccess(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg2;
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var6 = 8;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var8 = var1.NONE;
            var1 = _closure1_slot4;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 2:
            var2 = _closure1_slot22;
            var1 = var7 === var2;
case 38:
            var11 = var8;
            if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = _closure1_slot2;
            var4 = _closure1_slot3;
            var1 = 9;
            var1 = var4[var1];
            var4 = var2.bind(var5)(var1);
            var2 = var4.add;
            var1 = _closure1_slot13;
            var1 = var1.VIEW_CHANNEL;
            var11 = var2.bind(var4)(var8, var1);
case 39:
            var2 = _closure1_slot26;
            var1 = _closure1_slot21;
            var1 = var2.bind(var5)(var7, var1);
            if(var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var4 = _closure1_slot26;
            var2 = _closure1_slot23;
            var1 = var4.bind(var5)(var7, var2);
case 41:
            var2 = var11;
            if(!var1) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var4 = _closure1_slot2;
            var7 = _closure1_slot3;
            var1 = 9;
            var8 = var7[var1];
            var10 = var4.bind(var5)(var8);
            var9 = var10.add;
            var8 = _closure1_slot13;
            var8 = var8.VIEW_CHANNEL;
            var8 = var9.bind(var10)(var11, var8);
            var1 = var7[var1];
            var7 = var4.bind(var5)(var1);
            var4 = var7.add;
            var1 = _closure1_slot13;
            var1 = var1.CONNECT;
            var2 = var4.bind(var7)(var8, var1);
case 43:
            var1 = {};
            var4 = arg1;
            var1['id'] = var4;
            var4 = arg3;
            var1['type'] = var4;
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.NONE;
            var1['deny'] = var3;
            var1['allow'] = var2;
            return var1;
        }
    };
    var _closure1_slot27 = var7;
    var6 = function computeSummarizedVoiceStates(arg1) {
        var1 = arg1;
        var4 = var1.channels;
        var3 = var1.selectedChannelId;
        var _closure2_slot0 = var3;
        var3 = var1.selectedVoiceChannelId;
        var _closure2_slot1 = var3;
        var1 = var1.voiceStates;
        var _closure2_slot2 = var1;
        var1 = new Array(0);
        var _closure2_slot3 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var5 = var4.id;
                var3 = _closure2_slot1;
                if(!(var5 !== var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var5 = var4.id;
                var3 = _closure2_slot0;
                if(!(var5 !== var3)) { _fun0006_ip = 45; continue _fun0006 }
case 47:
                var3 = _closure2_slot2;
                var2 = var4.id;
                var3 = var3[var2];
                var2 = null;
                if(!(var2 != var3)) { _fun0006_ip = 45; continue _fun0006 }
case 48:
                var2 = var4.isGuildStageVoice;
                var4 = var2.bind(var4)();
                var2 = var3.forEach;
                if(var4) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var4 = function(arg1) {
                    var3 = _closure2_slot3;
                    var2 = var3.push;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var2.bind(var3)(var4);
                _fun0006_ip = 45; continue _fun0006;
case 49:
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = arg1;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 12;
                        var3 = var6[var2];
                        var1 = undefined;
                        var8 = var5.bind(var1)(var3);
                        var7 = var8.getAudienceRequestToSpeakState;
                        var3 = var4.voiceState;
                        var3 = var7.bind(var8)(var3);
                        var2 = var6[var2];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.RequestToSpeakStates;
                        var2 = var2.ON_STAGE;
                        if(!(var3 === var2)) { _fun0007_ip = 51; continue _fun0007 }
case 35:
                        var3 = _closure2_slot3;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
case 51:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 45:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot28 = var6;
    var5 = function getChannelPermalink(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg4;
            var1 = null;
            var1 = var1 == var3;
            var7 = '';
            var6 = var7;
            if(var1) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '?summaryId=';
            var6 = var2.bind(var1)(var3);
case 52:
            var1 = global;
            var2 = var1.location;
            var5 = var2.protocol;
            var2 = var1.location;
            var4 = var2.host;
            var10 = _closure1_slot18;
            var9 = var10.CHANNEL;
            var8 = arg1;
            var3 = arg2;
            var2 = arg3;
            var12 = var9.bind(var10)(var8, var3, var2);
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var14 = '//';
            var16 = var7;
            var15 = var5;
            var13 = var4;
            var11 = var6;
            var1 = var16[var2](var15, var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var _closure1_slot29 = var5;
    var4 = function getChannelThreadPermalink(arg1, arg2, arg3, arg4) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var7 = arg3;
            var4 = arg4;
            var1 = null;
            if(!(var1 != var6)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            if(!(var1 != var5)) { _fun0009_ip = 54; continue _fun0009 }
case 56:
            if(!(var1 != var7)) { _fun0009_ip = 54; continue _fun0009 }
case 57:
            var1 = global;
            var2 = var1.location;
            var9 = var2.protocol;
            var2 = var1.location;
            var8 = var2.host;
            var3 = _closure1_slot18;
            var2 = var3.CHANNEL_THREAD_VIEW;
            var14 = var3;
            var13 = var6;
            var12 = var5;
            var11 = var7;
            var10 = var4;
            var10 = var14[var2](var13, var12, var11, var10, var9);
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var14 = '';
            var12 = '//';
            var13 = var9;
            var11 = var8;
            var1 = var14[var3](var13, var12, var11, var10, var9);
            _fun0009_ip = 58; continue _fun0009;
case 54:
            var3 = _closure1_slot29;
            var2 = undefined;
            var1 = var3.bind(var2)(var6, var5, var4);
case 58:
            return var1;
        }
    };
    var _closure1_slot30 = var4;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var10);
    var1 = 0;
    var10 = var9[var1];
    var1 = undefined;
    var10 = var11.bind(var1)(var10);
    var12 = var10.isGuildSelectableChannelType;
    var _closure1_slot4 = var12;
    var12 = var10.TEXT_CHANNEL_TYPES;
    var _closure1_slot5 = var12;
    var10 = var10.THREAD_CHANNEL_TYPES;
    var _closure1_slot6 = var10;
    var10 = 1;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 2;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 3;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 4;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot10 = var10;
    var10 = 5;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot11 = var10;
    var10 = 6;
    var10 = var9[var10];
    var12 = var11.bind(var1)(var10);
    var10 = var12.ChannelTypes;
    var _closure1_slot12 = var10;
    var13 = var12.Permissions;
    var _closure1_slot13 = var13;
    var13 = var12.GuildFeatures;
    var _closure1_slot14 = var13;
    var13 = var12.BoostedGuildTiers;
    var _closure1_slot15 = var13;
    var13 = var12.BITRATE_MAX;
    var _closure1_slot16 = var13;
    var13 = var12.BITRATE_DEFAULT;
    var _closure1_slot17 = var13;
    var13 = var12.Routes;
    var _closure1_slot18 = var13;
    var12 = var12.AnalyticsPages;
    var _closure1_slot19 = var12;
    var12 = 7;
    var12 = var9[var12];
    var12 = var11.bind(var1)(var12);
    var12 = var12.BoostedGuildFeatures;
    var _closure1_slot20 = var12;
    var12 = var10.GUILD_VOICE;
    var _closure1_slot21 = var12;
    var12 = var10.GUILD_CATEGORY;
    var _closure1_slot22 = var12;
    var10 = var10.GUILD_STAGE_VOICE;
    var _closure1_slot23 = var10;
    var10 = 17;
    var10 = var9[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'utils/ChannelUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = function denyChannelAccessForNonPaidUsers(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg2;
            var1 = _closure1_slot12;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var4 !== var1)) { _fun0010_ip = 59; continue _fun0010 }
case 29:
            var1 = global;
            var3 = var1.Error;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Premium channel feature not supported for channel type ';
            var11 = var2.bind(var1)(var4);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var12 = var2;
            var1 = new var12[var3](var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 59:
            var5 = _closure1_slot2;
            var6 = _closure1_slot3;
            var3 = 8;
            var1 = var6[var3];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var9 = var1.NONE;
            var1 = 9;
            var1 = var6[var1];
            var8 = var5.bind(var4)(var1);
            var2 = var8.add;
            var1 = _closure1_slot13;
            var1 = var1.CONNECT;
            var2 = var2.bind(var8)(var9, var1);
            var1 = {};
            var8 = arg1;
            var1['id'] = var8;
            var8 = _closure1_slot0;
            var7 = 10;
            var7 = var6[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.PermissionOverwriteType;
            var7 = var7.ROLE;
            var1['type'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.NONE;
            var1['allow'] = var3;
            var1['deny'] = var2;
            return var1;
        }
    };
    var3['denyChannelAccessForNonPaidUsers'] = var10;
    var3['allowChannelAccess'] = var7;
    var7 = function permissionOverwritesForRoles(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var11 = arg2;
            var4 = arg3;
            var5 = arguments[3];
            var _closure2_slot0 = var11;
            var9 = undefined;
            if(!(var5 === var9)) { _fun0011_ip = 31; continue _fun0011 }
case 46:
            var5 = false;
case 31:
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var6 = var4.length;
            var3 = 0;
            var3 = var6 > var3;
            if(var3) { _fun0011_ip = 60; continue _fun0011 }
case 61:
            var3 = var5;
case 60:
            if(!var3) { _fun0011_ip = 62; continue _fun0011 }
case 38:
            var5 = var1.push;
            var8 = _closure1_slot0;
            var3 = _closure1_slot3;
            var6 = 10;
            var6 = var3[var6];
            var6 = var8.bind(var9)(var6);
            var6 = var6.PermissionOverwriteType;
            var8 = var6.ROLE;
            var6 = _closure1_slot2;
            var10 = 8;
            var3 = var3[var10];
            var3 = var6.bind(var9)(var3);
            var13 = var3.NONE;
            var3 = _closure1_slot4;
            var3 = var3.bind(var9)(var11);
            if(var3) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var6 = _closure1_slot22;
            var3 = var11 === var6;
case 63:
            var16 = var13;
            if(!var3) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var6 = _closure1_slot2;
            var12 = _closure1_slot3;
            var3 = 9;
            var3 = var12[var3];
            var12 = var6.bind(var9)(var3);
            var6 = var12.add;
            var3 = _closure1_slot13;
            var3 = var3.VIEW_CHANNEL;
            var16 = var6.bind(var12)(var13, var3);
case 65:
            var6 = _closure1_slot26;
            var3 = _closure1_slot21;
            var3 = var6.bind(var9)(var11, var3);
            var6 = var16;
            if(!var3) { _fun0011_ip = 67; continue _fun0011 }
case 68:
            var11 = _closure1_slot2;
            var12 = _closure1_slot3;
            var3 = 9;
            var13 = var12[var3];
            var15 = var11.bind(var9)(var13);
            var14 = var15.add;
            var13 = _closure1_slot13;
            var13 = var13.VIEW_CHANNEL;
            var13 = var14.bind(var15)(var16, var13);
            var3 = var12[var3];
            var12 = var11.bind(var9)(var3);
            var11 = var12.add;
            var3 = _closure1_slot13;
            var3 = var3.CONNECT;
            var6 = var11.bind(var12)(var13, var3);
case 67:
            var3 = {};
            var11 = arg1;
            var3['id'] = var11;
            var3['type'] = var8;
            var8 = _closure1_slot2;
            var7 = _closure1_slot3;
            var7 = var7[var10];
            var7 = var8.bind(var9)(var7);
            var7 = var7.NONE;
            var3['allow'] = var7;
            var3['deny'] = var6;
            var3 = var5.bind(var1)(var3);
case 62:
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.push;
                var7 = _closure1_slot27;
                var6 = _closure2_slot0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var2 = var2.PermissionOverwriteType;
                var5 = var2.ROLE;
                var2 = arg1;
                var2 = var7.bind(var1)(var2, var6, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['permissionOverwritesForRoles'] = var7;
    var7 = function permissionOverwriteForUser(arg1, arg2) {
        var5 = _closure1_slot27;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 10;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.PermissionOverwriteType;
        var3 = var1.MEMBER;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var4)(var2, var1, var3);
        return var1;
    };
    var3['permissionOverwriteForUser'] = var7;
    var7 = function permissionOverwriteForRole(arg1, arg2) {
        var5 = _closure1_slot27;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 10;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.PermissionOverwriteType;
        var3 = var1.ROLE;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var4)(var2, var1, var3);
        return var1;
    };
    var3['permissionOverwriteForRole'] = var7;
    var7 = function permissionOverwritesForAnnouncement(arg1) {
        var2 = {};
        var1 = arg1;
        var2['id'] = var1;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var3 = 10;
        var3 = var5[var3];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var3 = var3.PermissionOverwriteType;
        var3 = var3.ROLE;
        var2['type'] = var3;
        var3 = _closure1_slot13;
        var3 = var3.SEND_MESSAGES;
        var2['deny'] = var3;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var5[var1];
        var1 = var3.bind(var4)(var1);
        var1 = var1.NONE;
        var2['allow'] = var1;
        var1 = new Array(1);
        var1[0] = var2;
        return var1;
    };
    var3['permissionOverwritesForAnnouncement'] = var7;
    var7 = function isChannelFull(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var12 = arg2;
            var2 = arg3;
            var1 = var4.getGuildId;
            var7 = var1.bind(var4)();
            var1 = var2.getGuild;
            var3 = var1.bind(var2)(var7);
            var2 = null;
            var5 = var2 == var3;
            var11 = undefined;
            var1 = undefined;
            if(var5) { _fun0012_ip = 60; continue _fun0012 }
case 69:
            var1 = var3.maxVideoChannelUsers;
case 60:
            var5 = var2 != var1;
            var6 = -1;
            var13 = var6;
            if(!var5) { _fun0012_ip = 30; continue _fun0012 }
case 70:
            var13 = var1;
case 30:
            var5 = var2 == var3;
            var1 = undefined;
            if(var5) { _fun0012_ip = 71; continue _fun0012 }
case 72:
            var1 = var3.maxStageVideoChannelUsers;
case 71:
            var3 = var2 != var1;
            if(!var3) { _fun0012_ip = 73; continue _fun0012 }
case 74:
            var6 = var1;
case 73:
            var3 = _closure1_slot11;
            var5 = var3.countVoiceStatesForChannel;
            var1 = var4.id;
            var5 = var5.bind(var3)(var1);
            var1 = var3.getVoiceStatesForChannel;
            var10 = var1.bind(var3)(var4);
            var9 = _closure1_slot9;
            var3 = var9.can;
            var1 = _closure1_slot13;
            var1 = var1.MOVE_MEMBERS;
            var3 = var3.bind(var9)(var1, var4);
            if(!var3) { _fun0012_ip = 75; continue _fun0012 }
case 76:
            var14 = _closure1_slot9;
            var9 = var14.can;
            var1 = _closure1_slot13;
            var1 = var1.CONNECT;
            var3 = var9.bind(var14)(var1, var4);
case 75:
            var9 = var4.type;
            var1 = _closure1_slot23;
            if(!(var9 !== var1)) { _fun0012_ip = 23; continue _fun0012 }
case 77:
            var1 = var2 != var7;
            if(!var1) { _fun0012_ip = 78; continue _fun0012 }
case 79:
            var14 = var12.hasVideo;
            var9 = var4.id;
            var1 = var14.bind(var12)(var9);
case 78:
            if(!var1) { _fun0012_ip = 80; continue _fun0012 }
case 81:
            var9 = 0;
            var1 = var13 > var9;
case 80:
            if(!var1) { _fun0012_ip = 82; continue _fun0012 }
case 83:
            var9 = 0;
            if(!var3) { _fun0012_ip = 84; continue _fun0012 }
case 21:
            var9 = 1;
case 84:
            var9 = var13 + var9;
            var1 = var5 >= var9;
case 82:
            _fun0012_ip = 27; continue _fun0012;
case 23:
            var2 = var2 != var7;
            if(!var2) { _fun0012_ip = 85; continue _fun0012 }
case 86:
            var9 = var12.hasVideo;
            var7 = var4.id;
            var7 = var9.bind(var12)(var7);
            if(var7) { _fun0012_ip = 87; continue _fun0012 }
case 88:
            var9 = _closure1_slot0;
            var12 = _closure1_slot3;
            var8 = 11;
            var8 = var12[var8];
            var9 = var9.bind(var11)(var8);
            var8 = var9.hasStream;
            var7 = var8.bind(var9)(var10);
case 87:
            var2 = var7;
case 85:
            if(!var2) { _fun0012_ip = 89; continue _fun0012 }
case 90:
            var7 = 0;
            var2 = var6 > var7;
case 89:
            if(!var2) { _fun0012_ip = 8; continue _fun0012 }
case 91:
            var2 = var5 >= var6;
case 8:
            var1 = var2;
case 27:
            var6 = var4.userLimit;
            var2 = 0;
            var2 = var6 > var2;
            if(!var2) { _fun0012_ip = 92; continue _fun0012 }
case 93:
            var4 = var4.userLimit;
            var2 = var5 >= var4;
case 92:
            if(var1) { _fun0012_ip = 94; continue _fun0012 }
case 95:
            if(!var2) { _fun0012_ip = 96; continue _fun0012 }
case 97:
            var2 = !var3;
case 96:
            var1 = var2;
case 94:
            return var1;
        }
    };
    var3['isChannelFull'] = var7;
    var7 = 18;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var3['sanitizeGuildTextChannelName'] = var7;
    var7 = function getBitrateLimit(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var2 = var3.isGuildStageVoice;
            var2 = var2.bind(var3)();
            if(var2) { _fun0013_ip = 98; continue _fun0013 }
case 56:
            var2 = null;
            if(!(var2 != var1)) { _fun0013_ip = 99; continue _fun0013 }
case 34:
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var7 = var1.features;
            var6 = var7.has;
            var2 = _closure1_slot14;
            var2 = var2.VIP_REGIONS;
            var2 = var6.bind(var7)(var2);
            if(var2) { _fun0013_ip = 100; continue _fun0013 }
case 101:
            var2 = _closure1_slot16;
            _fun0013_ip = 102; continue _fun0013;
case 100:
            var7 = _closure1_slot20;
            var6 = _closure1_slot15;
            var6 = var6.TIER_3;
            var6 = var7[var6];
            var6 = var6.limits;
            var2 = var6.bitrate;
case 102:
            var5 = _closure1_slot20;
            var1 = var1.premiumTier;
            var1 = var5[var1];
            var1 = var1.limits;
            var1 = var1.bitrate;
            var1 = var3.bind(var4)(var2, var1);
            _fun0013_ip = 103; continue _fun0013;
case 99:
            var1 = _closure1_slot16;
case 103:
            _fun0013_ip = 104; continue _fun0013;
case 98:
            var1 = _closure1_slot17;
case 104:
            return var1;
        }
    };
    var3['getBitrateLimit'] = var7;
    var3['computeSummarizedVoiceStates'] = var6;
    var6 = function computeSummarizedVoiceUsers(arg1) {
        var1 = arg1;
        var6 = var1.channels;
        var5 = var1.selectedChannelId;
        var4 = var1.selectedVoiceChannelId;
        var1 = var1.voiceStates;
        var3 = _closure1_slot28;
        var2 = {};
        var2['channels'] = var6;
        var2['selectedChannelId'] = var5;
        var2['selectedVoiceChannelId'] = var4;
        var2['voiceStates'] = var1;
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.user;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['computeSummarizedVoiceUsers'] = var6;
    var6 = function isAnyVoiceStateStage(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var12 = arg2;
            var11 = arg3;
            var2 = _closure1_slot24;
            var9 = undefined;
            var1 = arg1;
            var8 = var2.bind(var9)(var1);
            var2 = var8.bind(var9)();
            var1 = var2.done;
            var7 = 12;
            var6 = null;
            var5 = var2;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(var1) { _fun0014_ip = 105; continue _fun0014 }
case 106:
            var15 = var5.value;
            var1 = var15.id;
            var14 = var3;
            var13 = var2;
            if(!(var1 !== var12)) { _fun0014_ip = 107; continue _fun0014 }
case 108:
            var1 = var15.id;
            var17 = var11[var1];
            var4 = var17;
            var14 = var3;
            var13 = var2;
            if(!(var6 != var17)) { _fun0014_ip = 107; continue _fun0014 }
case 109:
            var1 = var15.isGuildStageVoice;
            var1 = var1.bind(var15)();
            var4 = var17;
            var14 = var3;
            var13 = var2;
            if(!var1) { _fun0014_ip = 107; continue _fun0014 }
case 110:
            var1 = _closure1_slot24;
            var16 = var1.bind(var9)(var17);
            var18 = var16.bind(var9)();
            var1 = var18.done;
            var15 = var18;
            var4 = var17;
            var14 = var15;
            var13 = var16;
            if(var1) { _fun0014_ip = 107; continue _fun0014 }
case 15:
            var18 = var15.value;
            var19 = _closure1_slot0;
            var1 = _closure1_slot3;
            var20 = var1[var7];
            var21 = var19.bind(var9)(var20);
            var20 = var21.getAudienceRequestToSpeakState;
            var18 = var18.voiceState;
            var18 = var20.bind(var21)(var18);
            var1 = var1[var7];
            var1 = var19.bind(var9)(var1);
            var1 = var1.RequestToSpeakStates;
            var1 = var1.ON_STAGE;
            if(!(var18 !== var1)) { _fun0014_ip = 111; continue _fun0014 }
case 112:
            var18 = var16.bind(var9)();
            var1 = var18.done;
            var15 = var18;
            var4 = var17;
            var14 = var15;
            var13 = var16;
            if(var1) { _fun0014_ip = 107; continue _fun0014 }
case 113:
            _fun0014_ip = 15; continue _fun0014;
case 111:
            var1 = true;
            return var1;
case 107:
            var15 = var8.bind(var9)();
            var1 = var15.done;
            var3 = var14;
            var2 = var13;
            var5 = var15;
            if(!var1) { _fun0014_ip = 106; continue _fun0014 }
case 105:
            var1 = false;
            return var1;
        }
    };
    var3['isAnyVoiceStateStage'] = var6;
    var6 = function channelTypeString(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot12;
            var2 = var2.DM;
            if(!(var2 !== var3)) { _fun0015_ip = 114; continue _fun0015 }
case 34:
            var2 = _closure1_slot12;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0015_ip = 115; continue _fun0015 }
case 61:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var3)) { _fun0015_ip = 116; continue _fun0015 }
case 117:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var3)) { _fun0015_ip = 118; continue _fun0015 }
case 100:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var3)) { _fun0015_ip = 119; continue _fun0015 }
case 11:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var3)) { _fun0015_ip = 120; continue _fun0015 }
case 121:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_STAGE_VOICE;
            if(!(var2 !== var3)) { _fun0015_ip = 96; continue _fun0015 }
case 122:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var3)) { _fun0015_ip = 123; continue _fun0015 }
case 124:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_STORE;
            if(!(var2 !== var3)) { _fun0015_ip = 125; continue _fun0015 }
case 126:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var3)) { _fun0015_ip = 16; continue _fun0015 }
case 127:
            var2 = null;
            return var2;
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.vHCZws;
            var2 = var3.bind(var4)(var2);
            return var2;
case 125:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.P1/Erq;
            var2 = var3.bind(var4)(var2);
            return var2;
case 123:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.l1dkSE;
            var2 = var3.bind(var4)(var2);
            return var2;
case 96:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.EErMzM;
            var2 = var3.bind(var4)(var2);
            return var2;
case 120:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.BVZqJi;
            var2 = var3.bind(var4)(var2);
            return var2;
case 119:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.seKITE;
            var2 = var3.bind(var4)(var2);
            return var2;
case 118:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.GbryDQ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 116:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Pnajj4;
            var2 = var3.bind(var4)(var2);
            return var2;
case 115:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.e5y+go;
            var2 = var3.bind(var4)(var2);
            return var2;
case 114:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 13;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.jN2DfX;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['channelTypeString'] = var6;
    var6 = function getPrivateChannelUserTagsString(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var10 = arg2;
            var1 = null;
            if(!(var1 != var4)) { _fun0016_ip = 128; continue _fun0016 }
case 129:
            var2 = var10.getCurrentUser;
            var2 = var2.bind(var10)();
            var3 = var1 == var2;
            var9 = undefined;
            var8 = undefined;
            if(var3) { _fun0016_ip = 130; continue _fun0016 }
case 131:
            var8 = var2.id;
case 130:
            if(!(var1 != var8)) { _fun0016_ip = 132; continue _fun0016 }
case 133:
            var7 = new Array(0);
            var3 = _closure1_slot24;
            var6 = var3.bind(var9)(var4);
            var4 = var6.bind(var9)();
            var3 = var4.done;
            var5 = var4;
            var4 = undefined;
            if(var3) { _fun0016_ip = 134; continue _fun0016 }
case 135:
            var11 = var5.value;
            if(!(var8 !== var11)) { _fun0016_ip = 136; continue _fun0016 }
case 74:
            var3 = var10.getUser;
            var3 = var3.bind(var10)(var11);
            var4 = var3;
            if(!(var1 != var3)) { _fun0016_ip = 136; continue _fun0016 }
case 137:
            var11 = var7.push;
            var11 = var11.bind(var7)(var3);
            var4 = var3;
case 136:
            var11 = var6.bind(var9)();
            var3 = var11.done;
            var5 = var11;
            if(!var3) { _fun0016_ip = 135; continue _fun0016 }
case 134:
            var3 = var7.length;
            var8 = 0;
            if(!(var8 !== var3)) { _fun0016_ip = 138; continue _fun0016 }
case 139:
            var4 = var7.slice;
            var3 = 2;
            var5 = var4.bind(var7)(var8, var3);
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.isProvisional;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    if(var1) { _fun0017_ip = 140; continue _fun0017 }
case 141:
                    var1 = var3.getUserTag;
                    var1 = var1.bind(var3)(var4);
                    _fun0017_ip = 7; continue _fun0017;
case 140:
                    var2 = var3.getName;
                    var1 = var2.bind(var3)(var4);
case 7:
                    return var1;
                }
            };
            var6 = var4.bind(var5)(var3);
            var3 = _closure1_slot0;
            var10 = _closure1_slot3;
            var2 = 13;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.BXG0Eh;
            var2 = {};
            var9 = var7.length;
            var2['users'] = var9;
            var8 = var6[var8];
            var2['user1'] = var8;
            var8 = 1;
            var8 = var6[var8];
            var2['user2'] = var8;
            var7 = var7.length;
            var6 = var6.length;
            var6 = var7 - var6;
            var2['extras'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 138:
            return var1;
case 132:
            return var1;
case 128:
            return var1;
        }
    };
    var3['getPrivateChannelUserTagsString'] = var6;
    var6 = function getMentionIconType(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0018_ip = 142; continue _fun0018 }
case 143:
            var1 = var5.isMediaChannel;
            var4 = var1.bind(var5)();
            var3 = var5.type;
            var1 = _closure1_slot12;
            var1 = var1.GUILD_VOICE;
            if(!(var3 !== var1)) { _fun0018_ip = 86; continue _fun0018 }
case 133:
            var3 = var5.type;
            var1 = _closure1_slot12;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var3 !== var1)) { _fun0018_ip = 144; continue _fun0018 }
case 145:
            var6 = _closure1_slot6;
            var3 = var6.has;
            var1 = var5.type;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0018_ip = 146; continue _fun0018 }
case 147:
            var3 = var5.type;
            var1 = _closure1_slot12;
            var1 = var1.GUILD_FORUM;
            if(!(var3 !== var1)) { _fun0018_ip = 148; continue _fun0018 }
case 13:
            var6 = var5.type;
            var1 = _closure1_slot12;
            var3 = var1.GUILD_MEDIA;
            var1 = 'media';
            if(!(var6 !== var3)) { _fun0018_ip = 149; continue _fun0018 }
case 58:
            var7 = _closure1_slot5;
            var6 = var7.has;
            var3 = var5.type;
            var6 = var6.bind(var7)(var3);
            var3 = undefined;
            if(!var6) { _fun0018_ip = 126; continue _fun0018 }
case 150:
            var3 = 'text';
case 126:
            var1 = var3;
case 149:
            _fun0018_ip = 151; continue _fun0018;
case 148:
            var3 = 'forum';
            if(!var4) { _fun0018_ip = 16; continue _fun0018 }
case 127:
            var3 = 'media';
case 16:
            var1 = var3;
case 151:
            _fun0018_ip = 152; continue _fun0018;
case 146:
            var3 = var5.isForumPost;
            var4 = var3.bind(var5)();
            var3 = 'thread';
            if(!var4) { _fun0018_ip = 22; continue _fun0018 }
case 79:
            var3 = 'post';
case 22:
            var1 = var3;
case 152:
            _fun0018_ip = 107; continue _fun0018;
case 144:
            var6 = _closure1_slot9;
            var4 = var6.can;
            var3 = _closure1_slot13;
            var3 = var3.CONNECT;
            var4 = var4.bind(var6)(var3, var5);
            var3 = 'stage-locked';
            if(!var4) { _fun0018_ip = 18; continue _fun0018 }
case 82:
            var3 = 'stage';
case 18:
            var1 = var3;
case 107:
            _fun0018_ip = 128; continue _fun0018;
case 86:
            var4 = _closure1_slot9;
            var3 = var4.can;
            var2 = _closure1_slot13;
            var2 = var2.CONNECT;
            var3 = var3.bind(var4)(var2, var5);
            var2 = 'voice-locked';
            if(!var3) { _fun0018_ip = 153; continue _fun0018 }
case 25:
            var2 = 'voice';
case 153:
            var1 = var2;
case 128:
            return var1;
case 142:
            var1 = 'text';
            return var1;
        }
    };
    var3['getMentionIconType'] = var6;
    var6 = function previousTextChannelRouteForGuild(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot7;
            var3 = var5.getChannel;
            var6 = _closure1_slot10;
            var2 = var6.getLastSelectedChannelId;
            var2 = var2.bind(var6)();
            var2 = var3.bind(var5)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0019_ip = 101; continue _fun0019 }
case 130:
            var5 = var2.getGuildId;
            var5 = var5.bind(var2)();
            if(!(var5 === var4)) { _fun0019_ip = 101; continue _fun0019 }
case 38:
            var6 = var2.type;
            var5 = _closure1_slot12;
            var5 = var5.GUILD_TEXT;
            if(!(var6 !== var5)) { _fun0019_ip = 154; continue _fun0019 }
case 101:
            var6 = _closure1_slot8;
            var5 = var6.getDefaultChannel;
            var5 = var5.bind(var6)(var4);
            var6 = var3 != var5;
            var3 = null;
            if(!var6) { _fun0019_ip = 155; continue _fun0019 }
case 156:
            var3 = var5.id;
case 155:
            _fun0019_ip = 102; continue _fun0019;
case 154:
            var3 = var2.id;
case 102:
            var2 = _closure1_slot18;
            var1 = var2.CHANNEL;
            var1 = var1.bind(var2)(var4, var3);
            return var1;
        }
    };
    var3['previousTextChannelRouteForGuild'] = var6;
    var3['getChannelPermalink'] = var5;
    var3['getChannelThreadPermalink'] = var4;
    var4 = function getChannelLinkToCopy(arg1, arg2, arg3, arg4) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = arg4;
            var4 = var2.getGuildId;
            var7 = var4.bind(var2)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 15;
            var4 = var6[var4];
            var6 = undefined;
            var5 = var5.bind(var6)(var4);
            var4 = var5.canUseMediaPostEmbed;
            var5 = var4.bind(var5)(var7, var3);
            var4 = null;
            if(!(var4 != var3)) { _fun0020_ip = 157; continue _fun0020 }
case 117:
            if(var5) { _fun0020_ip = 158; continue _fun0020 }
case 157:
            if(!(var4 == var1)) { _fun0020_ip = 159; continue _fun0020 }
case 145:
            var9 = _closure1_slot29;
            var5 = var2.id;
            var4 = arg3;
            var1 = var9.bind(var6)(var7, var5, var4);
case 159:
            _fun0020_ip = 139; continue _fun0020;
case 158:
            var5 = _closure1_slot30;
            var13 = var3.id;
            var12 = var2.id;
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var8 = 16;
            var8 = var10[var8];
            var9 = var9.bind(var6)(var8);
            var8 = var9.castChannelIdAsMessageId;
            var2 = var2.id;
            var11 = var8.bind(var9)(var2);
            var15 = undefined;
            var14 = var7;
            var1 = var15[var5](var14, var13, var12, var11, var10);
case 139:
            return var1;
        }
    };
    var3['getChannelLinkToCopy'] = var4;
    var2 = function getChannelAnalyticsPage(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0021_ip = 160; continue _fun0021 }
case 161:
            var4 = var2.type;
            var3 = _closure1_slot12;
            var3 = var3.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var4)) { _fun0021_ip = 162; continue _fun0021 }
case 163:
            var3 = _closure1_slot12;
            var3 = var3.GUILD_TEXT;
            if(!(var3 !== var4)) { _fun0021_ip = 162; continue _fun0021 }
case 61:
            var3 = _closure1_slot12;
            var3 = var3.GUILD_FORUM;
            if(!(var3 !== var4)) { _fun0021_ip = 162; continue _fun0021 }
case 164:
            var3 = _closure1_slot12;
            var3 = var3.GUILD_MEDIA;
            if(!(var3 !== var4)) { _fun0021_ip = 162; continue _fun0021 }
case 101:
            var3 = _closure1_slot12;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var4)) { _fun0021_ip = 165; continue _fun0021 }
case 51:
            var3 = _closure1_slot12;
            var3 = var3.DM;
            if(!(var3 !== var4)) { _fun0021_ip = 165; continue _fun0021 }
case 39:
            return var1;
case 165:
            var3 = _closure1_slot19;
            var3 = var3.DM_CHANNEL;
            return var3;
case 162:
            var2 = _closure1_slot19;
            var2 = var2.GUILD_CHANNEL;
            return var2;
case 160:
            return var1;
        }
    };
    var3['getChannelAnalyticsPage'] = var2;
    return var1;
})();