// app/modules/rpc/server/commands/soundboard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var15 = var2.RPC_LOCAL_SCOPE;
    var10 = var2.RPC_SCOPE_CONFIG;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot6 = var2;
    var2 = {};
    var9 = var4.GET_SOUNDBOARD_SOUNDS;
    var7 = {};
    var11 = {};
    var14 = var10.ANY;
    var12 = 5;
    var13 = var6[var12];
    var13 = var5.bind(var1)(var13);
    var13 = var13.OAuth2Scopes;
    var16 = var13.RPC;
    var13 = new Array(2);
    var13[0] = var16;
    var13[1] = var15;
    var11[var14] = var13;
    var7['scope'] = var11;
    var11 = function handler() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = undefined;
                    var _closure4_slot0 = var6;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var2 = var7[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.maybeFetchSoundboardSounds;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=52);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot4;
                    var3 = var5.getSounds;
                    var6 = var3.bind(var5)();
                    var3 = new Array(0);
                    _closure4_slot0 = var3;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.push;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 7;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.soundboardSoundToAPI;
                            var1 = arg1;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['handler'] = var11;
    var2[var9] = var7;
    var7 = var4.PLAY_SOUNDBOARD_SOUND;
    var4 = {};
    var9 = {};
    var11 = var10.ALL;
    var10 = var6[var12];
    var10 = var5.bind(var1)(var10);
    var10 = var10.OAuth2Scopes;
    var13 = var10.RPC;
    var10 = new Array(2);
    var10[0] = var13;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var12 = var12.RPC_VOICE_WRITE;
    var10[1] = var12;
    var9[var11] = var10;
    var4['scope'] = var9;
    var9 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var4 = var4.bind(var5)();
        var1['guild_id'] = var4;
        var4 = var5.string;
        var4 = var4.bind(var5)();
        var1['sound_id'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['validation'] = var9;
    var8 = function handler(arg1) {
        var2 = arg1;
        var2 = var2.args;
        var3 = var2.guild_id;
        var _closure2_slot0 = var3;
        var2 = var2.sound_id;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.maybeFetchSoundboardSounds;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=49);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 7:
                    var5 = _closure1_slot5;
                    var4 = var5.getCurrentUser;
                    var11 = var4.bind(var5)();
                    var8 = _closure1_slot4;
                    var7 = var8.getSound;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var9 = var7.bind(var8)(var5, var4);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.bind(var6)();
                    var5 = null;
                    var7 = var5 != var9;
                    if(!var7) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var7 = var5 != var11;
case 13:
                    if(!var7) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 10;
                    var8 = var12[var8];
                    var10 = var10.bind(var6)(var8);
                    var8 = var10.canUseSoundboardSound;
                    var7 = var8.bind(var10)(var11, var9, var4);
case 15:
                    if(!(var5 != var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    if(var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var7 = 11;
                    var7 = var10[var7];
                    var13 = var8.bind(var6)(var7);
                    var12 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.INVALID_SOUND;
                    var12['errorCode'] = var7;
                    var7 = var13.prototype;
                    var11 = Object.create(var7, {constructor: {value: var13}});
                    var15 = 'Invalid Sound.';
                    var17 = var11;
                    var16 = var12;
                    var7 = new var17[var13](var16, var15, var14);
                    var7 = var7 instanceof Object ? var7 : var11;
                    throw var7;
case 19:
                    var7 = 12;
                    var7 = var10[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.bind(var6)(var4);
                    if(var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 11;
                    var7 = var10[var7];
                    var11 = var8.bind(var6)(var7);
                    var10 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.INVALID_PERMISSIONS;
                    var10['errorCode'] = var7;
                    var7 = var11.prototype;
                    var8 = Object.create(var7, {constructor: {value: var11}});
                    var15 = 'Invalid Permissions.';
                    var17 = var8;
                    var16 = var10;
                    var7 = new var17[var11](var16, var15, var14);
                    var7 = var7 instanceof Object ? var7 : var8;
                    throw var7;
case 21:
                    if(!(var5 != var9)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 10;
                    var5 = var11[var5];
                    var8 = var7.bind(var6)(var5);
                    var7 = var8.playSound;
                    var5 = var4.id;
                    var10 = _closure1_slot1;
                    var4 = 13;
                    var4 = var11[var4];
                    var4 = var10.bind(var6)(var4);
                    var10 = var4.RPC;
                    var4 = new Array(1);
                    var4[0] = var10;
                    var4 = var7.bind(var8)(var9, var5, var4);
case 23:
                    return var6;
case 17:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = {};
                    var3 = _closure1_slot6;
                    var3 = var3.INVALID_CHANNEL;
                    var5['errorCode'] = var3;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var15 = 'Invalid Channel.';
                    var17 = var4;
                    var16 = var5;
                    var3 = new var17[var6](var16, var15, var14);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 12:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/soundboard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();