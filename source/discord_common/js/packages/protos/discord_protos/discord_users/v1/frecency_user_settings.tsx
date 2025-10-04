// discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var19 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var20 = dependencyMap;
    var _closure1_slot0 = var19;
    var _closure1_slot1 = var20;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot23;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var6 = 0;
    var2 = var20[var6];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var5 = 1;
    var2 = var20[var5];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var4 = 2;
    var2 = var20[var4];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var20[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var20[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var20[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var17 = {};
    var17['NONE'] = var6;
    var2 = 'NONE';
    var17[var6] = var2;
    var17['IMAGE'] = var5;
    var2 = 'IMAGE';
    var17[var5] = var2;
    var17['VIDEO'] = var4;
    var2 = 'VIDEO';
    var17[var4] = var2;
    var _closure1_slot8 = var17;
    var2 = 7;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FrecencyUserSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'versions', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Versions;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(13);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'favorite_gifs', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot9;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'favorite_stickers', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot11;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'sticker_frecency', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot12;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'favorite_emojis', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot13;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'emoji_frecency', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot14;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'application_command_frecency', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot15;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'favorite_soundboard_sounds', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot17;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'application_frecency', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot20;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 10, 'name': 'heard_sound_frecency', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot18;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 11, 'name': 'played_sound_frecency', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot19;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 12, 'name': 'guild_and_channel_frecency', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot21;
                return var1;
            };
            var1['T'] = var8;
            var6[11] = var1;
            var1 = {'no': 13, 'name': 'emoji_reaction_frecency', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot14;
                return var1;
            };
            var1['T'] = var7;
            var6[12] = var1;
            var1 = ['discord_protos.discord_users.v1.FrecencyUserSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var20.pos;
                var3 = arg2;
                var18 = var4 + var3;
                var3 = var20.pos;
                var3 = var3 < var18;
                var17 = undefined;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 6;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=1074, default_jump_address=876, unsigned_min_value=1, unsigned_max_value=13) // Switch table: [804, 748, 692, 636, 580, 524, 468, 412, 356, 300, 244, 188, 132];
case 17:
                var23 = _closure1_slot14;
                var22 = var23.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.emojiReactionFrecency;
                var32 = var23;
                var31 = var20;
                var29 = var19;
                var3 = var32[var22](var31, var30, var29, var28, var27);
                var1['emojiReactionFrecency'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 19:
                var25 = _closure1_slot21;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.guildAndChannelFrecency;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['guildAndChannelFrecency'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 20:
                var25 = _closure1_slot19;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.playedSoundFrecency;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['playedSoundFrecency'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 21:
                var25 = _closure1_slot18;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.heardSoundFrecency;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['heardSoundFrecency'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 22:
                var25 = _closure1_slot20;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.applicationFrecency;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['applicationFrecency'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 23:
                var25 = _closure1_slot17;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.favoriteSoundboardSounds;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['favoriteSoundboardSounds'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 24:
                var25 = _closure1_slot15;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.applicationCommandFrecency;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['applicationCommandFrecency'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 25:
                var25 = _closure1_slot14;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.emojiFrecency;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['emojiFrecency'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 26:
                var25 = _closure1_slot13;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.favoriteEmojis;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['favoriteEmojis'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 27:
                var25 = _closure1_slot12;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.stickerFrecency;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['stickerFrecency'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 28:
                var25 = _closure1_slot11;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.favoriteStickers;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['favoriteStickers'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 29:
                var25 = _closure1_slot9;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.favoriteGifs;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['favoriteGifs'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 30:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.Versions;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.versions;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['versions'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 31:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0004_ip = 18; continue _fun0004 }
case 34:
                var25 = var23;
                if(!(var14 === var23)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 35:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 18:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0004_ip = 16; continue _fun0004 }
case 15:
                return var1;
case 32:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var27 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var8;
                var29 = var7;
                var31 = var32[var5](var31, var30, var29, var28, var27, var26);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var32 = var2;
                var1 = new var32[var3](var31, var30);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.versions;
                if(!var3) { _fun0005_ip = 37; continue _fun0005 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Versions;
                var6 = var7.internalBinaryWrite;
                var4 = var5.versions;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 37:
                var3 = var5.favoriteGifs;
                if(!var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var7 = _closure1_slot9;
                var6 = var7.internalBinaryWrite;
                var4 = var5.favoriteGifs;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 38:
                var3 = var5.favoriteStickers;
                if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var7 = _closure1_slot11;
                var6 = var7.internalBinaryWrite;
                var4 = var5.favoriteStickers;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 40:
                var3 = var5.stickerFrecency;
                if(!var3) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var7 = _closure1_slot12;
                var6 = var7.internalBinaryWrite;
                var4 = var5.stickerFrecency;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 42:
                var3 = var5.favoriteEmojis;
                if(!var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var7 = _closure1_slot13;
                var6 = var7.internalBinaryWrite;
                var4 = var5.favoriteEmojis;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 5;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 44:
                var3 = var5.emojiFrecency;
                if(!var3) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var7 = _closure1_slot14;
                var6 = var7.internalBinaryWrite;
                var4 = var5.emojiFrecency;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 6;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 46:
                var3 = var5.applicationCommandFrecency;
                if(!var3) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                var7 = _closure1_slot15;
                var6 = var7.internalBinaryWrite;
                var4 = var5.applicationCommandFrecency;
                var9 = var1.tag;
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 7;
                var10 = var3[var8];
                var3 = undefined;
                var3 = var11.bind(var3)(var10);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var8 = var9.bind(var1)(var8, var3);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 48:
                var3 = var5.favoriteSoundboardSounds;
                if(!var3) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                var7 = _closure1_slot17;
                var6 = var7.internalBinaryWrite;
                var4 = var5.favoriteSoundboardSounds;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 8;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 50:
                var3 = var5.applicationFrecency;
                if(!var3) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var7 = _closure1_slot20;
                var6 = var7.internalBinaryWrite;
                var4 = var5.applicationFrecency;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 9;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 52:
                var3 = var5.heardSoundFrecency;
                if(!var3) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                var7 = _closure1_slot18;
                var6 = var7.internalBinaryWrite;
                var4 = var5.heardSoundFrecency;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 10;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 54:
                var3 = var5.playedSoundFrecency;
                if(!var3) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                var7 = _closure1_slot19;
                var6 = var7.internalBinaryWrite;
                var4 = var5.playedSoundFrecency;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 11;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 56:
                var3 = var5.guildAndChannelFrecency;
                if(!var3) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                var7 = _closure1_slot21;
                var6 = var7.internalBinaryWrite;
                var4 = var5.guildAndChannelFrecency;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 12;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 58:
                var3 = var5.emojiReactionFrecency;
                if(!var3) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                var7 = _closure1_slot14;
                var6 = var7.internalBinaryWrite;
                var4 = var5.emojiReactionFrecency;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 13;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 60:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 64:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 62:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var16 = var4 instanceof Object ? var4 : var5;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FavoriteGIFs$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'gifs', 'kind': 'map', 'K': 9};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot10;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'hide_tooltip', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.FavoriteGIFs'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['gifs'] = var2;
                var11 = false;
                var1['hideTooltip'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0006_ip = 66; continue _fun0006 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 66:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                if(!(var7 !== var26)) { _fun0007_ip = 71; continue _fun0007 }
case 37:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                var22 = var20;
                if(!(var10 === var20)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 76:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0007_ip = 74; continue _fun0007;
case 72:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 71:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['hideTooltip'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0007_ip = 74; continue _fun0007;
case 69:
                var20 = var15.binaryReadMap1;
                var2 = var1.gifs;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 74:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0007_ip = 68; continue _fun0007 }
case 67:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                if(!(var10 !== var3)) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 82:
                var15 = _closure1_slot10;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0008_ip = 84; continue _fun0008;
case 80:
                var3 = var13.string;
                var7 = var3.bind(var13)();
                var14 = var5;
case 84:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0008_ip = 79; continue _fun0008 }
case 78:
                var5 = null;
                var7 = var5 != var6;
                var3 = '';
                if(!var7) { _fun0008_ip = 85; continue _fun0008 }
case 86:
                var3 = var6;
case 85:
                if(!(var5 == var4)) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                var5 = _closure1_slot10;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 87:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.gifs;
                var10 = var4.bind(var6)(var2);
                var2 = var10.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var11 = 2;
                if(!var8) { _fun0009_ip = 89; continue _fun0009 }
case 90:
                var14 = var10[var9];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.string;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var11, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot10;
                var12 = var13.internalBinaryWrite;
                var8 = var5.gifs;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var9 = var9 + 1;
                var8 = var10.length;
                if(var9 < var8) { _fun0009_ip = 90; continue _fun0009 }
case 89:
                var9 = var5.hideTooltip;
                var8 = false;
                if(!(var8 !== var9)) { _fun0009_ip = 91; continue _fun0009 }
case 92:
                var10 = var1.tag;
                var12 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var12.bind(var4)(var9);
                var9 = var9.WireType;
                var9 = var9.Varint;
                var11 = var10.bind(var1)(var11, var9);
                var10 = var11.bool;
                var9 = var5.hideTooltip;
                var9 = var10.bind(var11)(var9);
case 91:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0009_ip = 93; continue _fun0009 }
case 94:
                if(!(var6 == var3)) { _fun0009_ip = 95; continue _fun0009 }
case 96:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 95:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 93:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var15 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot9 = var15;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FavoriteGIF$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'format', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.discord_users.v1.GIFType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(5);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'src', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'width', 'kind': 'scalar', 'T': 13};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'height', 'kind': 'scalar', 'T': 13};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'order', 'kind': 'scalar', 'T': 13};
            var6[4] = var1;
            var1 = ['discord_protos.discord_users.v1.FavoriteGIF'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'format': 0, 'src': '', 'width': 0, 'height': 0, 'order': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0010_ip = 66; continue _fun0010 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 66:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0011_ip = 13; continue _fun0011 }
case 14:
                var2 = var18.create;
                var1 = var2.bind(var18)();
case 13:
                var3 = var20.pos;
                var2 = arg2;
                var17 = var3 + var2;
                var2 = var20.pos;
                var2 = var2 < var17;
                var16 = undefined;
                var14 = 7;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0011_ip = 97; continue _fun0011 }
case 98:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0011_ip = 99; continue _fun0011 }
case 100:
                if(!(var7 !== var29)) { _fun0011_ip = 23; continue _fun0011 }
case 39:
                if(!(var8 !== var29)) { _fun0011_ip = 101; continue _fun0011 }
case 102:
                if(!(var9 !== var29)) { _fun0011_ip = 103; continue _fun0011 }
case 104:
                if(!(var10 !== var29)) { _fun0011_ip = 105; continue _fun0011 }
case 106:
                var23 = var19.readUnknownField;
                if(!(var11 !== var23)) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var12 !== var23)) { _fun0011_ip = 109; continue _fun0011 }
case 110:
                var25 = var23;
                if(!(var13 === var23)) { _fun0011_ip = 111; continue _fun0011 }
case 112:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var14];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 111:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0011_ip = 109; continue _fun0011;
case 107:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var30 = var18.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var35 = 'Unknown field ';
                var33 = ' (wire type ';
                var31 = ') for ';
                var34 = var29;
                var32 = var28;
                var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var35 = var23;
                var2 = new var35[var24](var34, var33);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 105:
                var2 = var20.uint32;
                var2 = var2.bind(var20)();
                var1['order'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0011_ip = 109; continue _fun0011;
case 103:
                var2 = var20.uint32;
                var2 = var2.bind(var20)();
                var1['height'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0011_ip = 109; continue _fun0011;
case 101:
                var2 = var20.uint32;
                var2 = var2.bind(var20)();
                var1['width'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0011_ip = 109; continue _fun0011;
case 23:
                var2 = var20.string;
                var2 = var2.bind(var20)();
                var1['src'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0011_ip = 109; continue _fun0011;
case 99:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['format'] = var2;
                var22 = var4;
                var21 = var3;
case 109:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0011_ip = 98; continue _fun0011 }
case 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.format;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0012_ip = 68; continue _fun0012 }
case 113:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.format;
                var2 = var4.bind(var6)(var2);
case 68:
                var4 = var5.src;
                var2 = '';
                if(!(var2 !== var4)) { _fun0012_ip = 108; continue _fun0012 }
case 83:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.src;
                var2 = var4.bind(var6)(var2);
case 108:
                var2 = var5.width;
                if(!(var3 !== var2)) { _fun0012_ip = 114; continue _fun0012 }
case 115:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 3;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.uint32;
                var2 = var5.width;
                var2 = var4.bind(var6)(var2);
case 114:
                var2 = var5.height;
                if(!(var3 !== var2)) { _fun0012_ip = 116; continue _fun0012 }
case 117:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 4;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.uint32;
                var2 = var5.height;
                var2 = var4.bind(var6)(var2);
case 116:
                var2 = var5.order;
                if(!(var3 !== var2)) { _fun0012_ip = 118; continue _fun0012 }
case 119:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 5;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.uint32;
                var2 = var5.order;
                var2 = var3.bind(var4)(var2);
case 118:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0012_ip = 120; continue _fun0012 }
case 121:
                var2 = 1;
                if(!(var2 == var4)) { _fun0012_ip = 122; continue _fun0012 }
case 123:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 122:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 120:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var14 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot10 = var14;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FavoriteStickers$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'sticker_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.FavoriteStickers'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['stickerIds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0013_ip = 124; continue _fun0013 }
case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 124:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0014_ip = 13; continue _fun0014 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0014_ip = 126; continue _fun0014 }
case 127:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0014_ip = 128; continue _fun0014 }
case 129:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0014_ip = 130; continue _fun0014 }
case 131:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0014_ip = 132; continue _fun0014 }
case 133:
                var25 = var23;
                if(!(var11 === var23)) { _fun0014_ip = 134; continue _fun0014 }
case 135:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 134:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0014_ip = 132; continue _fun0014;
case 130:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 128:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0014_ip = 93; continue _fun0014 }
case 136:
                var23 = var1.stickerIds;
                var22 = var23.push;
                var2 = var18.fixed64;
                var24 = var2.bind(var18)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0014_ip = 132; continue _fun0014;
case 93:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0014_ip = 132; continue _fun0014 }
case 137:
                var24 = var1.stickerIds;
                var23 = var24.push;
                var2 = var18.fixed64;
                var25 = var2.bind(var18)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0014_ip = 137; continue _fun0014 }
case 132:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0014_ip = 127; continue _fun0014 }
case 126:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.stickerIds;
                var2 = var2.length;
                if(!var2) { _fun0015_ip = 138; continue _fun0015 }
case 139:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.stickerIds;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0015_ip = 140; continue _fun0015 }
case 141:
                var4 = var1.fixed64;
                var2 = var5.stickerIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.stickerIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0015_ip = 141; continue _fun0015 }
case 140:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 138:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0015_ip = 142; continue _fun0015 }
case 143:
                var2 = 1;
                if(!(var2 == var4)) { _fun0015_ip = 144; continue _fun0015 }
case 115:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 144:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 142:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var13 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot11 = var13;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function StickerFrecency$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'stickers', 'kind': 'map', 'K': 6};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.StickerFrecency'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['stickers'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0016_ip = 145; continue _fun0016 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 145:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0017_ip = 13; continue _fun0017 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0017_ip = 136; continue _fun0017 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0017_ip = 21; continue _fun0017 }
case 70:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0017_ip = 146; continue _fun0017 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0017_ip = 148; continue _fun0017 }
case 138:
                var22 = var20;
                if(!(var10 === var20)) { _fun0017_ip = 19; continue _fun0017 }
case 75:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0017_ip = 148; continue _fun0017;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.stickers;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 148:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0017_ip = 68; continue _fun0017 }
case 136:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0018_ip = 149; continue _fun0018 }
case 79:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0018_ip = 80; continue _fun0018 }
case 81:
                if(!(var10 !== var3)) { _fun0018_ip = 82; continue _fun0018 }
case 83:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 82:
                var15 = _closure1_slot16;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0018_ip = 150; continue _fun0018;
case 80:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 150:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0018_ip = 79; continue _fun0018 }
case 149:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0018_ip = 72; continue _fun0018 }
case 38:
                var3 = var6;
case 72:
                if(!(var5 == var4)) { _fun0018_ip = 151; continue _fun0018 }
case 152:
                var5 = _closure1_slot16;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 151:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.stickers;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0019_ip = 153; continue _fun0019 }
case 90:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.Bit64;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.fixed64;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot16;
                var12 = var13.internalBinaryWrite;
                var8 = var5.stickers;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0019_ip = 90; continue _fun0019 }
case 153:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0019_ip = 154; continue _fun0019 }
case 155:
                if(!(var6 == var3)) { _fun0019_ip = 156; continue _fun0019 }
case 157:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 156:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 154:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var12 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot12 = var12;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FavoriteEmojis$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'emojis', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.FavoriteEmojis'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['emojis'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0020_ip = 124; continue _fun0020 }
case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 124:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0021_ip = 13; continue _fun0021 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0021_ip = 158; continue _fun0021 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0021_ip = 21; continue _fun0021 }
case 70:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0021_ip = 146; continue _fun0021 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0021_ip = 91; continue _fun0021 }
case 138:
                var22 = var20;
                if(!(var10 === var20)) { _fun0021_ip = 19; continue _fun0021 }
case 75:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0021_ip = 91; continue _fun0021;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var21 = var1.emojis;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 91:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0021_ip = 68; continue _fun0021 }
case 158:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.emojis;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0022_ip = 159; continue _fun0022 }
case 160:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var10.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var10 = var9.bind(var1)(var6, var3);
                var9 = var10.string;
                var3 = var5.emojis;
                var3 = var3[var8];
                var3 = var9.bind(var10)(var3);
                var8 = var8 + 1;
                var3 = var5.emojis;
                var3 = var3.length;
                if(var8 < var3) { _fun0022_ip = 160; continue _fun0022 }
case 159:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0022_ip = 161; continue _fun0022 }
case 131:
                if(!(var6 == var3)) { _fun0022_ip = 162; continue _fun0022 }
case 39:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 162:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 161:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var11 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot13 = var11;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function EmojiFrecency$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'emojis', 'kind': 'map', 'K': 9};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.EmojiFrecency'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['emojis'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0023_ip = 145; continue _fun0023 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 145:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0024_ip = 13; continue _fun0024 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0024_ip = 136; continue _fun0024 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0024_ip = 21; continue _fun0024 }
case 70:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0024_ip = 146; continue _fun0024 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0024_ip = 148; continue _fun0024 }
case 138:
                var22 = var20;
                if(!(var10 === var20)) { _fun0024_ip = 19; continue _fun0024 }
case 75:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0024_ip = 148; continue _fun0024;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.emojis;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 148:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0024_ip = 68; continue _fun0024 }
case 136:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0025_ip = 78; continue _fun0025 }
case 79:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0025_ip = 80; continue _fun0025 }
case 81:
                if(!(var10 !== var3)) { _fun0025_ip = 82; continue _fun0025 }
case 83:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 82:
                var15 = _closure1_slot16;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0025_ip = 84; continue _fun0025;
case 80:
                var3 = var13.string;
                var7 = var3.bind(var13)();
                var14 = var5;
case 84:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0025_ip = 79; continue _fun0025 }
case 78:
                var5 = null;
                var7 = var5 != var6;
                var3 = '';
                if(!var7) { _fun0025_ip = 85; continue _fun0025 }
case 86:
                var3 = var6;
case 85:
                if(!(var5 == var4)) { _fun0025_ip = 87; continue _fun0025 }
case 88:
                var5 = _closure1_slot16;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 87:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.emojis;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0026_ip = 89; continue _fun0026 }
case 90:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.string;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot16;
                var12 = var13.internalBinaryWrite;
                var8 = var5.emojis;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0026_ip = 90; continue _fun0026 }
case 89:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0026_ip = 163; continue _fun0026 }
case 92:
                if(!(var6 == var3)) { _fun0026_ip = 164; continue _fun0026 }
case 165:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 164:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 163:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var10 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot14 = var10;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ApplicationCommandFrecency$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'application_commands', 'kind': 'map', 'K': 9};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.ApplicationCommandFrecency'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['applicationCommands'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0027_ip = 145; continue _fun0027 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 145:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0028_ip = 13; continue _fun0028 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0028_ip = 136; continue _fun0028 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0028_ip = 21; continue _fun0028 }
case 70:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0028_ip = 146; continue _fun0028 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0028_ip = 148; continue _fun0028 }
case 138:
                var22 = var20;
                if(!(var10 === var20)) { _fun0028_ip = 19; continue _fun0028 }
case 75:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0028_ip = 148; continue _fun0028;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.applicationCommands;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 148:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0028_ip = 68; continue _fun0028 }
case 136:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0029_ip = 78; continue _fun0029 }
case 79:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0029_ip = 80; continue _fun0029 }
case 81:
                if(!(var10 !== var3)) { _fun0029_ip = 82; continue _fun0029 }
case 83:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 82:
                var15 = _closure1_slot16;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0029_ip = 84; continue _fun0029;
case 80:
                var3 = var13.string;
                var7 = var3.bind(var13)();
                var14 = var5;
case 84:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0029_ip = 79; continue _fun0029 }
case 78:
                var5 = null;
                var7 = var5 != var6;
                var3 = '';
                if(!var7) { _fun0029_ip = 85; continue _fun0029 }
case 86:
                var3 = var6;
case 85:
                if(!(var5 == var4)) { _fun0029_ip = 87; continue _fun0029 }
case 88:
                var5 = _closure1_slot16;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 87:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.applicationCommands;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0030_ip = 89; continue _fun0030 }
case 90:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.string;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot16;
                var12 = var13.internalBinaryWrite;
                var8 = var5.applicationCommands;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0030_ip = 90; continue _fun0030 }
case 89:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0030_ip = 163; continue _fun0030 }
case 92:
                if(!(var6 == var3)) { _fun0030_ip = 164; continue _fun0030 }
case 165:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 164:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 163:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var9 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot15 = var9;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FrecencyItem$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'total_uses', 'kind': 'scalar', 'T': 13};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'recent_uses', 'kind': 'scalar', 'repeat': 1, 'T': 4};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'frecency', 'kind': 'scalar', 'T': 5};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'score', 'kind': 'scalar', 'T': 5};
            var6[3] = var1;
            var1 = ['discord_protos.discord_users.v1.FrecencyItem'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'totalUses': 0, 'recentUses': null, 'frecency': 0, 'score': 0};
                var2 = new Array(0);
                var1['recentUses'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0031_ip = 17; continue _fun0031 }
case 166:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 17:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0032_ip = 13; continue _fun0032 }
case 14:
                var2 = var18.create;
                var1 = var2.bind(var18)();
case 13:
                var3 = var20.pos;
                var2 = arg2;
                var17 = var3 + var2;
                var2 = var20.pos;
                var2 = var2 < var17;
                var16 = undefined;
                var14 = 7;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 4;
                var9 = 3;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0032_ip = 167; continue _fun0032 }
case 4:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var8);
                var30 = var2[var6];
                var24 = var2[var7];
                if(!(var7 !== var30)) { _fun0032_ip = 168; continue _fun0032 }
case 169:
                if(!(var8 !== var30)) { _fun0032_ip = 170; continue _fun0032 }
case 171:
                if(!(var9 !== var30)) { _fun0032_ip = 172; continue _fun0032 }
case 173:
                if(!(var10 !== var30)) { _fun0032_ip = 43; continue _fun0032 }
case 174:
                var25 = var19.readUnknownField;
                if(!(var11 !== var25)) { _fun0032_ip = 175; continue _fun0032 }
case 133:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var24);
                var23 = var5;
                var22 = var25;
                var21 = var2;
                if(!(var12 !== var25)) { _fun0032_ip = 176; continue _fun0032 }
case 177:
                var27 = var25;
                if(!(var13 === var25)) { _fun0032_ip = 146; continue _fun0032 }
case 178:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var14];
                var26 = var28.bind(var16)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 146:
                var35 = var18.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var24;
                var31 = var2;
                var26 = var36[var27](var35, var34, var33, var32, var31, var30);
                var23 = var5;
                var22 = var25;
                var21 = var2;
                _fun0032_ip = 176; continue _fun0032;
case 175:
                var2 = global;
                var25 = var2.globalThis;
                var26 = var25.Error;
                var31 = var18.typeName;
                var2 = var2.HermesInternal;
                var28 = var2.concat;
                var36 = 'Unknown field ';
                var34 = ' (wire type ';
                var32 = ') for ';
                var35 = var30;
                var33 = var24;
                var35 = var36[var28](var35, var34, var33, var32, var31, var30);
                var25 = var26.prototype;
                var25 = Object.create(var25, {constructor: {value: var26}});
                var36 = var25;
                var2 = new var36[var26](var35, var34);
                var2 = var2 instanceof Object ? var2 : var25;
                throw var2;
case 43:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['score'] = var2;
                var23 = var5;
                var22 = var4;
                var21 = var3;
                _fun0032_ip = 176; continue _fun0032;
case 172:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['frecency'] = var2;
                var23 = var5;
                var22 = var4;
                var21 = var3;
                _fun0032_ip = 176; continue _fun0032;
case 170:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var25.bind(var16)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var24 !== var2)) { _fun0032_ip = 179; continue _fun0032 }
case 42:
                var25 = var1.recentUses;
                var24 = var25.push;
                var2 = var20.uint64;
                var26 = var2.bind(var20)();
                var2 = var26.toString;
                var2 = var2.bind(var26)();
                var2 = var24.bind(var25)(var2);
                var23 = var5;
                var22 = var4;
                var21 = var3;
                _fun0032_ip = 176; continue _fun0032;
case 179:
                var2 = var20.int32;
                var24 = var2.bind(var20)();
                var2 = var20.pos;
                var24 = var24 + var2;
                var2 = var20.pos;
                var22 = var4;
                var21 = var3;
                var23 = var24;
                if(!(var2 < var23)) { _fun0032_ip = 176; continue _fun0032 }
case 180:
                var26 = var1.recentUses;
                var25 = var26.push;
                var2 = var20.uint64;
                var27 = var2.bind(var20)();
                var2 = var27.toString;
                var2 = var2.bind(var27)();
                var2 = var25.bind(var26)(var2);
                var2 = var20.pos;
                var23 = var24;
                var22 = var4;
                var21 = var3;
                if(var2 < var24) { _fun0032_ip = 180; continue _fun0032 }
case 181:
                _fun0032_ip = 176; continue _fun0032;
case 168:
                var2 = var20.uint32;
                var2 = var2.bind(var20)();
                var1['totalUses'] = var2;
                var23 = var5;
                var22 = var4;
                var21 = var3;
case 176:
                var2 = var20.pos;
                var5 = var23;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0032_ip = 4; continue _fun0032 }
case 167:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.totalUses;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0033_ip = 127; continue _fun0033 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.uint32;
                var2 = var5.totalUses;
                var2 = var4.bind(var6)(var2);
case 127:
                var2 = var5.recentUses;
                var2 = var2.length;
                if(!var2) { _fun0033_ip = 182; continue _fun0033 }
case 183:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 2;
                var4 = var6.bind(var1)(var2, var4);
                var2 = var4.fork;
                var2 = var2.bind(var4)();
                var2 = var5.recentUses;
                var2 = var2.length;
                var2 = var3 < var2;
                var4 = 0;
                if(!var2) { _fun0033_ip = 184; continue _fun0033 }
case 177:
                var6 = var1.uint64;
                var2 = var5.recentUses;
                var2 = var2[var4];
                var2 = var6.bind(var1)(var2);
                var4 = var4 + 1;
                var2 = var5.recentUses;
                var2 = var2.length;
                if(var4 < var2) { _fun0033_ip = 177; continue _fun0033 }
case 184:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 182:
                var2 = var5.frecency;
                if(!(var3 !== var2)) { _fun0033_ip = 71; continue _fun0033 }
case 185:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 3;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.frecency;
                var2 = var4.bind(var6)(var2);
case 71:
                var2 = var5.score;
                if(!(var3 !== var2)) { _fun0033_ip = 101; continue _fun0033 }
case 186:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 4;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.score;
                var2 = var3.bind(var4)(var2);
case 101:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0033_ip = 187; continue _fun0033 }
case 188:
                var2 = 1;
                if(!(var2 == var4)) { _fun0033_ip = 189; continue _fun0033 }
case 121:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 189:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 187:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot16 = var8;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FavoriteSoundboardSounds$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'sound_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.FavoriteSoundboardSounds'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['soundIds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0034_ip = 124; continue _fun0034 }
case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 124:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0035_ip = 13; continue _fun0035 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0035_ip = 126; continue _fun0035 }
case 127:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0035_ip = 128; continue _fun0035 }
case 129:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0035_ip = 130; continue _fun0035 }
case 131:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0035_ip = 132; continue _fun0035 }
case 133:
                var25 = var23;
                if(!(var11 === var23)) { _fun0035_ip = 134; continue _fun0035 }
case 135:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 134:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0035_ip = 132; continue _fun0035;
case 130:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 128:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0035_ip = 93; continue _fun0035 }
case 136:
                var23 = var1.soundIds;
                var22 = var23.push;
                var2 = var18.fixed64;
                var24 = var2.bind(var18)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0035_ip = 132; continue _fun0035;
case 93:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0035_ip = 132; continue _fun0035 }
case 137:
                var24 = var1.soundIds;
                var23 = var24.push;
                var2 = var18.fixed64;
                var25 = var2.bind(var18)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0035_ip = 137; continue _fun0035 }
case 132:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0035_ip = 127; continue _fun0035 }
case 126:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.soundIds;
                var2 = var2.length;
                if(!var2) { _fun0036_ip = 138; continue _fun0036 }
case 139:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.soundIds;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0036_ip = 140; continue _fun0036 }
case 141:
                var4 = var1.fixed64;
                var2 = var5.soundIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.soundIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0036_ip = 141; continue _fun0036 }
case 140:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 138:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0036_ip = 142; continue _fun0036 }
case 143:
                var2 = 1;
                if(!(var2 == var4)) { _fun0036_ip = 144; continue _fun0036 }
case 115:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 144:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 142:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var7 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot17 = var7;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function HeardSoundFrecency$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'heard_sounds', 'kind': 'map', 'K': 9};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.HeardSoundFrecency'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['heardSounds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0037_ip = 145; continue _fun0037 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 145:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0038_ip = 13; continue _fun0038 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0038_ip = 136; continue _fun0038 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0038_ip = 21; continue _fun0038 }
case 70:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0038_ip = 146; continue _fun0038 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0038_ip = 148; continue _fun0038 }
case 138:
                var22 = var20;
                if(!(var10 === var20)) { _fun0038_ip = 19; continue _fun0038 }
case 75:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0038_ip = 148; continue _fun0038;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.heardSounds;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 148:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0038_ip = 68; continue _fun0038 }
case 136:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0039_ip = 78; continue _fun0039 }
case 79:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0039_ip = 80; continue _fun0039 }
case 81:
                if(!(var10 !== var3)) { _fun0039_ip = 82; continue _fun0039 }
case 83:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 82:
                var15 = _closure1_slot16;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0039_ip = 84; continue _fun0039;
case 80:
                var3 = var13.string;
                var7 = var3.bind(var13)();
                var14 = var5;
case 84:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0039_ip = 79; continue _fun0039 }
case 78:
                var5 = null;
                var7 = var5 != var6;
                var3 = '';
                if(!var7) { _fun0039_ip = 85; continue _fun0039 }
case 86:
                var3 = var6;
case 85:
                if(!(var5 == var4)) { _fun0039_ip = 87; continue _fun0039 }
case 88:
                var5 = _closure1_slot16;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 87:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.heardSounds;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0040_ip = 89; continue _fun0040 }
case 90:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.string;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot16;
                var12 = var13.internalBinaryWrite;
                var8 = var5.heardSounds;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0040_ip = 90; continue _fun0040 }
case 89:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0040_ip = 163; continue _fun0040 }
case 92:
                if(!(var6 == var3)) { _fun0040_ip = 164; continue _fun0040 }
case 165:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 164:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 163:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot18 = var6;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlayedSoundFrecency$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'played_sounds', 'kind': 'map', 'K': 9};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.PlayedSoundFrecency'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['playedSounds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0041_ip = 145; continue _fun0041 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 145:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0042_ip = 13; continue _fun0042 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0042_ip = 136; continue _fun0042 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0042_ip = 21; continue _fun0042 }
case 70:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0042_ip = 146; continue _fun0042 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0042_ip = 148; continue _fun0042 }
case 138:
                var22 = var20;
                if(!(var10 === var20)) { _fun0042_ip = 19; continue _fun0042 }
case 75:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0042_ip = 148; continue _fun0042;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.playedSounds;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 148:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0042_ip = 68; continue _fun0042 }
case 136:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0043_ip = 78; continue _fun0043 }
case 79:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0043_ip = 80; continue _fun0043 }
case 81:
                if(!(var10 !== var3)) { _fun0043_ip = 82; continue _fun0043 }
case 83:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 82:
                var15 = _closure1_slot16;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0043_ip = 84; continue _fun0043;
case 80:
                var3 = var13.string;
                var7 = var3.bind(var13)();
                var14 = var5;
case 84:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0043_ip = 79; continue _fun0043 }
case 78:
                var5 = null;
                var7 = var5 != var6;
                var3 = '';
                if(!var7) { _fun0043_ip = 85; continue _fun0043 }
case 86:
                var3 = var6;
case 85:
                if(!(var5 == var4)) { _fun0043_ip = 87; continue _fun0043 }
case 88:
                var5 = _closure1_slot16;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 87:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.playedSounds;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0044_ip = 89; continue _fun0044 }
case 90:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.string;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot16;
                var12 = var13.internalBinaryWrite;
                var8 = var5.playedSounds;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0044_ip = 90; continue _fun0044 }
case 89:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0044_ip = 163; continue _fun0044 }
case 92:
                if(!(var6 == var3)) { _fun0044_ip = 164; continue _fun0044 }
case 165:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 164:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 163:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var25 = var5;
    var4 = new var25[var4](var24);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot19 = var5;
    var4 = var20[var2];
    var4 = var19.bind(var1)(var4);
    var21 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ApplicationFrecency$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'applications', 'kind': 'map', 'K': 9};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.ApplicationFrecency'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['applications'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0045_ip = 145; continue _fun0045 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 145:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0046_ip = 13; continue _fun0046 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0046_ip = 136; continue _fun0046 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0046_ip = 21; continue _fun0046 }
case 70:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0046_ip = 146; continue _fun0046 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0046_ip = 148; continue _fun0046 }
case 138:
                var22 = var20;
                if(!(var10 === var20)) { _fun0046_ip = 19; continue _fun0046 }
case 75:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0046_ip = 148; continue _fun0046;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.applications;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 148:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0046_ip = 68; continue _fun0046 }
case 136:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0047_ip = 78; continue _fun0047 }
case 79:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0047_ip = 80; continue _fun0047 }
case 81:
                if(!(var10 !== var3)) { _fun0047_ip = 82; continue _fun0047 }
case 83:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 82:
                var15 = _closure1_slot16;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0047_ip = 84; continue _fun0047;
case 80:
                var3 = var13.string;
                var7 = var3.bind(var13)();
                var14 = var5;
case 84:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0047_ip = 79; continue _fun0047 }
case 78:
                var5 = null;
                var7 = var5 != var6;
                var3 = '';
                if(!var7) { _fun0047_ip = 85; continue _fun0047 }
case 86:
                var3 = var6;
case 85:
                if(!(var5 == var4)) { _fun0047_ip = 87; continue _fun0047 }
case 88:
                var5 = _closure1_slot16;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 87:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.applications;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0048_ip = 89; continue _fun0048 }
case 90:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.string;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot16;
                var12 = var13.internalBinaryWrite;
                var8 = var5.applications;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0048_ip = 90; continue _fun0048 }
case 89:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0048_ip = 163; continue _fun0048 }
case 92:
                if(!(var6 == var3)) { _fun0048_ip = 164; continue _fun0048 }
case 165:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 164:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 163:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var21);
    var21 = var4.prototype;
    var21 = Object.create(var21, {constructor: {value: var4}});
    var25 = var21;
    var4 = new var25[var4](var24);
    var4 = var4 instanceof Object ? var4 : var21;
    var _closure1_slot20 = var4;
    var2 = var20[var2];
    var2 = var19.bind(var1)(var2);
    var21 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function GuildAndChannelFrecency$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var1 = {'no': 1, 'name': 'guild_and_channels', 'kind': 'map', 'K': 6};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.GuildAndChannelFrecency'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['guildAndChannels'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0049_ip = 145; continue _fun0049 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 145:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0050_ip = 13; continue _fun0050 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0050_ip = 136; continue _fun0050 }
case 68:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0050_ip = 21; continue _fun0050 }
case 70:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0050_ip = 146; continue _fun0050 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0050_ip = 148; continue _fun0050 }
case 138:
                var22 = var20;
                if(!(var10 === var20)) { _fun0050_ip = 19; continue _fun0050 }
case 75:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0050_ip = 148; continue _fun0050;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.guildAndChannels;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 148:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0050_ip = 68; continue _fun0050 }
case 136:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0051_ip = 149; continue _fun0051 }
case 79:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0051_ip = 80; continue _fun0051 }
case 81:
                if(!(var10 !== var3)) { _fun0051_ip = 82; continue _fun0051 }
case 83:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 82:
                var15 = _closure1_slot16;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0051_ip = 150; continue _fun0051;
case 80:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 150:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0051_ip = 79; continue _fun0051 }
case 149:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0051_ip = 72; continue _fun0051 }
case 38:
                var3 = var6;
case 72:
                if(!(var5 == var4)) { _fun0051_ip = 151; continue _fun0051 }
case 152:
                var5 = _closure1_slot16;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 151:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.guildAndChannels;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0052_ip = 153; continue _fun0052 }
case 90:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.Bit64;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.fixed64;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot16;
                var12 = var13.internalBinaryWrite;
                var8 = var5.guildAndChannels;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0052_ip = 90; continue _fun0052 }
case 153:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0052_ip = 154; continue _fun0052 }
case 155:
                if(!(var6 == var3)) { _fun0052_ip = 156; continue _fun0052 }
case 157:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 156:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 154:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var21);
    var21 = var2.prototype;
    var21 = Object.create(var21, {constructor: {value: var2}});
    var25 = var21;
    var2 = new var25[var2](var24);
    var2 = var2 instanceof Object ? var2 : var21;
    var _closure1_slot21 = var2;
    var18 = 8;
    var18 = var20[var18];
    var20 = var19.bind(var1)(var18);
    var19 = var20.fileFinishedImporting;
    var18 = '../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx';
    var18 = var19.bind(var20)(var18);
    var3['GIFType'] = var17;
    var3['FrecencyUserSettings'] = var16;
    var3['FavoriteGIFs'] = var15;
    var3['FavoriteGIF'] = var14;
    var3['FavoriteStickers'] = var13;
    var3['StickerFrecency'] = var12;
    var3['FavoriteEmojis'] = var11;
    var3['EmojiFrecency'] = var10;
    var3['ApplicationCommandFrecency'] = var9;
    var3['FrecencyItem'] = var8;
    var3['FavoriteSoundboardSounds'] = var7;
    var3['HeardSoundFrecency'] = var6;
    var3['PlayedSoundFrecency'] = var5;
    var3['ApplicationFrecency'] = var4;
    var3['GuildAndChannelFrecency'] = var2;
    return var1;
})();