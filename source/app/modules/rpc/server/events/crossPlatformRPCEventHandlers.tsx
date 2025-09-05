// app/modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var15 = function messageEvents(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.args;
            var5 = var2.channel_id;
            var3 = var1.socket;
            var4 = _closure1_slot8;
            var2 = var4.getChannel;
            var2 = var2.bind(var4)(var5);
            var4 = null;
            if(!(var4 != var2)) { _fun0001_ip = 236; continue _fun0001 }
 46:
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 14;
            var4 = var6[var4];
            var6 = undefined;
            var8 = var7.bind(var6)(var4);
            var7 = var8.hasMessageReadPermission;
            var4 = var3.application;
            var4 = var4.id;
            var3 = var3.authorization;
            var3 = var3.scopes;
            var3 = var7.bind(var8)(var2, var4, var3);
            if(!var3) { _fun0001_ip = 236; continue _fun0001 }
 109:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 16;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.userCannotSeeNSFWContent;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0001_ip = 145; continue _fun0001 }
 143:
            return var6;
 145:
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 15;
            var3 = var7[var3];
            var6 = var4.bind(var6)(var3);
            var4 = {};
            var3 = _closure1_slot16;
            var3 = var3.INVALID_CHANNEL;
            var4['errorCode'] = var3;
            var7 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Invalid nsfw channel id: ';
            var10 = var3.bind(var2)(var7);
            var3 = var6.prototype;
            var3 = Object.create(var3, {constructor: {value: var6}});
            var12 = var3;
            var11 = var4;
            var2 = new var12[var6](var11, var10, var9);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
 236:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot16;
            var1 = var1.INVALID_CHANNEL;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid channel id: ';
            var10 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var12 = var2;
            var11 = var3;
            var1 = new var12[var4](var11, var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var10 = function speakingEvents(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.args;
            var5 = var1.channel_id;
            var3 = null;
            if(!(var3 != var5)) { _fun0002_ip = 41; continue _fun0002 }
 20:
            var4 = _closure1_slot8;
            var2 = var4.getChannel;
            var2 = var2.bind(var4)(var5);
            if(!(var3 != var2)) { _fun0002_ip = 45; continue _fun0002 }
 41:
            var2 = undefined;
            return var2;
 45:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot16;
            var1 = var1.INVALID_CHANNEL;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid channel id: ';
            var6 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var8 = var2;
            var7 = var3;
            var1 = new var8[var4](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
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
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.getGuildIconURL;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var16 = var2.RPC_AUTHENTICATED_SCOPE;
    var14 = var2.RPC_LOCAL_SCOPE;
    var11 = var2.RPC_SCOPE_CONFIG;
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.ApplicationFlags;
    var _closure1_slot15 = var4;
    var4 = var2.RPCErrors;
    var _closure1_slot16 = var4;
    var4 = var2.RPCEvents;
    var17 = function messageEventsValidation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var5 = var4.bind(var5)();
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var1['channel_id'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var12 = function speakingEventsValidation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var3 = var1.bind(var2)(var5);
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var6 = var4.bind(var5)();
        var5 = var6.allow;
        var4 = null;
        var4 = var5.bind(var6)(var4);
        var1['channel_id'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2 = {};
    var9 = var4.GUILD_STATUS;
    var7 = {};
    var13 = 17;
    var18 = var6[var13];
    var18 = var5.bind(var1)(var18);
    var18 = var18.OAuth2Scopes;
    var18 = var18.RPC;
    var7['scope'] = var18;
    var18 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var5 = var4.bind(var5)();
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var1['guild_id'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var18;
    var18 = function handler(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var1 = var1.args;
            var5 = var1.guild_id;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot10;
            var3 = var4.getGuild;
            var4 = var3.bind(var4)(var5);
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 52; continue _fun0003 }
 43:
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.prevState;
                    var3 = var1.dispatch;
                    var5 = _closure1_slot10;
                    var2 = var5.getGuild;
                    var1 = _closure2_slot0;
                    var10 = var2.bind(var5)(var1);
                    var7 = null;
                    if(!(var7 == var10)) { _fun0004_ip = 48; continue _fun0004 }
 44:
                    var1 = undefined;
                    return var1;
 48:
                    var1 = {};
                    var5 = {};
                    var2 = var10.id;
                    var5['id'] = var2;
                    var2 = var10.name;
                    var5['name'] = var2;
                    var9 = _closure1_slot6;
                    var2 = undefined;
                    var8 = 128;
                    var8 = var9.bind(var2)(var10, var8);
                    var9 = var7 != var8;
                    var7 = null;
                    if(!var9) { _fun0004_ip = 97; continue _fun0004 }
 94:
                    var7 = var8;
 97:
                    var5['icon_url'] = var7;
                    var1['guild'] = var5;
                    var5 = 0;
                    var1['online'] = var5;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 18;
                    var4 = var7[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.isEqual;
                    var4 = var4.bind(var5)(var6, var1);
                    if(var4) { _fun0004_ip = 153; continue _fun0004 }
 148:
                    var2 = var3.bind(var2)(var1);
 153:
                    return var1;
                }
            };
            return var2;
 52:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot16;
            var1 = var1.INVALID_GUILD;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid guild id: ';
            var6 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var8 = var2;
            var7 = var3;
            var1 = new var8[var4](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var18;
    var2[var9] = var7;
    var9 = var4.VOICE_STATE_CREATE;
    var7 = {};
    var18 = {};
    var20 = var11.ANY;
    var19 = var6[var13];
    var19 = var5.bind(var1)(var19);
    var19 = var19.OAuth2Scopes;
    var21 = var19.RPC;
    var19 = new Array(2);
    var19[0] = var21;
    var21 = var6[var13];
    var21 = var5.bind(var1)(var21);
    var21 = var21.OAuth2Scopes;
    var21 = var21.RPC_VOICE_READ;
    var19[1] = var21;
    var18[var20] = var19;
    var7['scope'] = var18;
    var18 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var5 = var4.bind(var5)();
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var1['channel_id'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var18;
    var18 = function handler(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.args;
            var5 = var1.channel_id;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var4 = var3.bind(var4)(var5);
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 52; continue _fun0005 }
 43:
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.prevState;
                    var1 = var1.dispatch;
                    var _closure3_slot0 = var1;
                    var5 = undefined;
                    var _closure3_slot2 = var5;
                    var7 = _closure1_slot8;
                    var4 = var7.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var7)(var1);
                    var _closure3_slot1 = var1;
                    var4 = null;
                    if(!(var4 == var1)) { _fun0006_ip = 62; continue _fun0006 }
 60:
                    return var5;
 62:
                    var4 = var1.getGuildId;
                    var4 = var4.bind(var1)();
                    _closure3_slot2 = var4;
                    var4 = global;
                    var7 = var4.Object;
                    var4 = var7.values;
                    var9 = _closure1_slot14;
                    var8 = var9.getVoiceStatesForChannel;
                    var1 = var1.id;
                    var1 = var8.bind(var9)(var1);
                    var1 = var4.bind(var7)(var1);
                    if(!var6) { _fun0006_ip = 174; continue _fun0006 }
 117:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 18;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.differenceBy;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.userId;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var1, var6, var3);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = _closure3_slot0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 14;
                        var4 = var4[var2];
                        var2 = undefined;
                        var7 = var5.bind(var2)(var4);
                        var6 = var7.transformVoiceState;
                        var5 = _closure3_slot2;
                        var1 = _closure3_slot1;
                        var4 = var1.id;
                        var1 = arg1;
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 174:
                    return var1;
                }
            };
            return var2;
 52:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot16;
            var1 = var1.INVALID_CHANNEL;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid channel id: ';
            var6 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var8 = var2;
            var7 = var3;
            var1 = new var8[var4](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var18;
    var2[var9] = var7;
    var9 = var4.VOICE_STATE_DELETE;
    var7 = {};
    var18 = {};
    var20 = var11.ANY;
    var19 = var6[var13];
    var19 = var5.bind(var1)(var19);
    var19 = var19.OAuth2Scopes;
    var21 = var19.RPC;
    var19 = new Array(2);
    var19[0] = var21;
    var21 = var6[var13];
    var21 = var5.bind(var1)(var21);
    var21 = var21.OAuth2Scopes;
    var21 = var21.RPC_VOICE_READ;
    var19[1] = var21;
    var18[var20] = var19;
    var7['scope'] = var18;
    var18 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var5 = var4.bind(var5)();
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var1['channel_id'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var18;
    var18 = function handler(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var1 = var1.args;
            var5 = var1.channel_id;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var4 = var3.bind(var4)(var5);
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 52; continue _fun0007 }
 43:
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.prevState;
                    var1 = var1.dispatch;
                    var _closure3_slot0 = var1;
                    var5 = undefined;
                    var _closure3_slot2 = var5;
                    var7 = _closure1_slot8;
                    var4 = var7.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var7)(var1);
                    var _closure3_slot1 = var1;
                    var4 = null;
                    if(!(var4 == var1)) { _fun0008_ip = 62; continue _fun0008 }
 60:
                    return var5;
 62:
                    var4 = var1.getGuildId;
                    var4 = var4.bind(var1)();
                    _closure3_slot2 = var4;
                    var4 = global;
                    var7 = var4.Object;
                    var4 = var7.values;
                    var9 = _closure1_slot14;
                    var8 = var9.getVoiceStatesForChannel;
                    var1 = var1.id;
                    var1 = var8.bind(var9)(var1);
                    var1 = var4.bind(var7)(var1);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 18;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.differenceBy;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.userId;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var6, var1, var3);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = _closure3_slot0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 14;
                        var4 = var4[var2];
                        var2 = undefined;
                        var7 = var5.bind(var2)(var4);
                        var6 = var7.transformVoiceState;
                        var5 = _closure3_slot2;
                        var1 = _closure3_slot1;
                        var4 = var1.id;
                        var1 = arg1;
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            return var2;
 52:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot16;
            var1 = var1.INVALID_CHANNEL;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid channel id: ';
            var6 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var8 = var2;
            var7 = var3;
            var1 = new var8[var4](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var18;
    var2[var9] = var7;
    var9 = var4.VOICE_STATE_UPDATE;
    var7 = {};
    var18 = {};
    var20 = var11.ANY;
    var19 = var6[var13];
    var19 = var5.bind(var1)(var19);
    var19 = var19.OAuth2Scopes;
    var21 = var19.RPC;
    var19 = new Array(2);
    var19[0] = var21;
    var21 = var6[var13];
    var21 = var5.bind(var1)(var21);
    var21 = var21.OAuth2Scopes;
    var21 = var21.RPC_VOICE_READ;
    var19[1] = var21;
    var18[var20] = var19;
    var7['scope'] = var18;
    var18 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var5 = var4.bind(var5)();
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var1['channel_id'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var18;
    var18 = function handler(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var1 = var1.args;
            var5 = var1.channel_id;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var4 = var3.bind(var4)(var5);
            var3 = null;
            if(!(var3 != var4)) { _fun0009_ip = 52; continue _fun0009 }
 43:
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.prevState;
                    var1 = var1.dispatch;
                    var _closure3_slot0 = var1;
                    var8 = undefined;
                    var _closure3_slot2 = var8;
                    var5 = _closure1_slot8;
                    var4 = var5.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var _closure3_slot1 = var1;
                    var4 = null;
                    if(!(var4 == var1)) { _fun0010_ip = 62; continue _fun0010 }
 60:
                    return var8;
 62:
                    var4 = var1.getGuildId;
                    var4 = var4.bind(var1)();
                    _closure3_slot2 = var4;
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.values;
                    var9 = _closure1_slot14;
                    var7 = var9.getVoiceStatesForChannel;
                    var1 = var1.id;
                    var1 = var7.bind(var9)(var1);
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.map;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.transformVoiceState;
                        var3 = _closure3_slot2;
                        var1 = _closure3_slot1;
                        var2 = var1.id;
                        var1 = arg1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var1);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 18;
                    var4 = var9[var3];
                    var5 = var7.bind(var8)(var4);
                    var4 = var5.differenceWith;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.isEqual;
                    var4 = var4.bind(var5)(var1, var6, var3);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            return var2;
 52:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot16;
            var1 = var1.INVALID_CHANNEL;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid channel id: ';
            var6 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var8 = var2;
            var7 = var3;
            var1 = new var8[var4](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var18;
    var2[var9] = var7;
    var9 = var4.VOICE_CONNECTION_STATUS;
    var7 = {};
    var18 = {};
    var20 = var11.ANY;
    var19 = var6[var13];
    var19 = var5.bind(var1)(var19);
    var19 = var19.OAuth2Scopes;
    var21 = var19.RPC;
    var19 = new Array(2);
    var19[0] = var21;
    var21 = var6[var13];
    var21 = var5.bind(var1)(var21);
    var21 = var21.OAuth2Scopes;
    var21 = var21.RPC_VOICE_READ;
    var19[1] = var21;
    var18[var20] = var19;
    var7['scope'] = var18;
    var18 = function handler() {
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var6 = var1.prevState;
                var3 = var1.dispatch;
                var1 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 14;
                var5 = var7[var2];
                var2 = undefined;
                var10 = var8.bind(var2)(var5);
                var9 = var10.getVoiceConnectionState;
                var8 = _closure1_slot12;
                var5 = var8.getState;
                var5 = var5.bind(var8)();
                var5 = var9.bind(var10)(var5);
                var1['state'] = var5;
                var5 = var8.getHostname;
                var5 = var5.bind(var8)();
                var1['hostname'] = var5;
                var5 = var8.getPings;
                var5 = var5.bind(var8)();
                var1['pings'] = var5;
                var5 = var8.getAveragePing;
                var5 = var5.bind(var8)();
                var1['average_ping'] = var5;
                var5 = var8.getLastPing;
                var5 = var5.bind(var8)();
                var1['last_ping'] = var5;
                var5 = _closure1_slot1;
                var4 = 18;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.isEqual;
                var4 = var4.bind(var5)(var1, var6);
                if(var4) { _fun0011_ip = 170; continue _fun0011 }
 165:
                var2 = var3.bind(var2)(var1);
 170:
                return var1;
            }
        };
        return var1;
    };
    var7['handler'] = var18;
    var2[var9] = var7;
    var9 = var4.MESSAGE_CREATE;
    var7 = {};
    var18 = var6[var13];
    var18 = var5.bind(var1)(var18);
    var18 = var18.OAuth2Scopes;
    var18 = var18.RPC;
    var7['scope'] = var18;
    var7['validation'] = var17;
    var7['handler'] = var15;
    var2[var9] = var7;
    var9 = var4.MESSAGE_UPDATE;
    var7 = {};
    var18 = var6[var13];
    var18 = var5.bind(var1)(var18);
    var18 = var18.OAuth2Scopes;
    var18 = var18.RPC;
    var7['scope'] = var18;
    var7['validation'] = var17;
    var7['handler'] = var15;
    var2[var9] = var7;
    var9 = var4.MESSAGE_DELETE;
    var7 = {};
    var18 = var6[var13];
    var18 = var5.bind(var1)(var18);
    var18 = var18.OAuth2Scopes;
    var18 = var18.RPC;
    var7['scope'] = var18;
    var7['validation'] = var17;
    var7['handler'] = var15;
    var2[var9] = var7;
    var9 = var4.SPEAKING_START;
    var7 = {};
    var15 = {};
    var18 = var11.ANY;
    var17 = var6[var13];
    var17 = var5.bind(var1)(var17);
    var17 = var17.OAuth2Scopes;
    var19 = var17.RPC;
    var17 = new Array(3);
    var17[0] = var19;
    var19 = var6[var13];
    var19 = var5.bind(var1)(var19);
    var19 = var19.OAuth2Scopes;
    var19 = var19.RPC_VOICE_READ;
    var17[1] = var19;
    var17[2] = var14;
    var15[var18] = var17;
    var7['scope'] = var15;
    var7['validation'] = var12;
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.SPEAKING_STOP;
    var7 = {};
    var15 = {};
    var18 = var11.ANY;
    var17 = var6[var13];
    var17 = var5.bind(var1)(var17);
    var17 = var17.OAuth2Scopes;
    var19 = var17.RPC;
    var17 = new Array(3);
    var17[0] = var19;
    var19 = var6[var13];
    var19 = var5.bind(var1)(var19);
    var19 = var19.OAuth2Scopes;
    var19 = var19.RPC_VOICE_READ;
    var17[1] = var19;
    var17[2] = var14;
    var15[var18] = var17;
    var7['scope'] = var15;
    var7['validation'] = var12;
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.GUILD_CREATE;
    var7 = {};
    var10 = var6[var13];
    var10 = var5.bind(var1)(var10);
    var10 = var10.OAuth2Scopes;
    var10 = var10.RPC;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.CHANNEL_CREATE;
    var7 = {};
    var10 = var6[var13];
    var10 = var5.bind(var1)(var10);
    var10 = var10.OAuth2Scopes;
    var10 = var10.RPC;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.GAME_JOIN;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = var6[var13];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var17 = var12.RPC;
    var12 = new Array(2);
    var12[0] = var17;
    var12[1] = var14;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.GAME_SPECTATE;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = var6[var13];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var17 = var12.RPC;
    var12 = new Array(2);
    var12[0] = var17;
    var12[1] = var14;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ACTIVITY_JOIN;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = var6[var13];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var17 = var12.RPC;
    var12 = new Array(3);
    var12[0] = var17;
    var12[1] = var16;
    var12[2] = var14;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ACTIVITY_JOIN_REQUEST;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = var6[var13];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var17 = var12.RPC;
    var12 = new Array(2);
    var12[0] = var17;
    var12[1] = var14;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ACTIVITY_SPECTATE;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = var6[var13];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var17 = var12.RPC;
    var12 = new Array(3);
    var12[0] = var17;
    var12[1] = var16;
    var12[2] = var14;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ACTIVITY_INVITE;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = var6[var13];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var17 = var12.RPC;
    var12 = new Array(2);
    var12[0] = var17;
    var12[1] = var14;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ACTIVITY_PIP_MODE_UPDATE;
    var7 = {};
    var7['scope'] = var1;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ACTIVITY_LAYOUT_MODE_UPDATE;
    var7 = {};
    var7['scope'] = var1;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
    var7 = 19;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.activityInstanceConnectedParticipantsUpdateEvent;
    var2[var9] = var7;
    var9 = var4.THERMAL_STATE_UPDATE;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = new Array(1);
    var12[0] = var16;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ORIENTATION_UPDATE;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = new Array(1);
    var12[0] = var16;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.VOICE_CHANNEL_SELECT;
    var7 = {};
    var10 = var6[var13];
    var10 = var5.bind(var1)(var10);
    var10 = var10.OAuth2Scopes;
    var10 = var10.RPC;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.NOTIFICATION_CREATE;
    var7 = {};
    var10 = {};
    var15 = var11.ALL;
    var12 = var6[var13];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var17 = var12.RPC;
    var12 = new Array(2);
    var12[0] = var17;
    var17 = var6[var13];
    var17 = var5.bind(var1)(var17);
    var17 = var17.OAuth2Scopes;
    var17 = var17.RPC_NOTIFICATIONS_READ;
    var12[1] = var17;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.RELATIONSHIP_UPDATE;
    var7 = {};
    var10 = var6[var13];
    var10 = var5.bind(var1)(var10);
    var10 = var10.OAuth2Scopes;
    var10 = var10.RELATIONSHIPS_READ;
    var7['scope'] = var10;
    var10 = function handler(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var2 = var1.socket;
            var7 = _closure1_slot2;
            var3 = _closure1_slot3;
            var8 = 20;
            var5 = var3[var8];
            var4 = undefined;
            var6 = var7.bind(var4)(var5);
            var5 = var6.has;
            var3 = var3[var8];
            var7 = var7.bind(var4)(var3);
            var3 = var7.deserialize;
            var2 = var2.application;
            var9 = var2.flags;
            var2 = null;
            var10 = var2 != var9;
            var2 = 0;
            if(!var10) { _fun0012_ip = 78; continue _fun0012 }
 75:
            var2 = var9;
 78:
            var3 = var3.bind(var7)(var2);
            var7 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var8];
            var8 = var7.bind(var4)(var2);
            var7 = var8.deserialize;
            var2 = _closure1_slot15;
            var2 = var2.DISABLE_RELATIONSHIPS_ACCESS;
            var2 = var7.bind(var8)(var2);
            var2 = var5.bind(var6)(var3, var2);
            if(var2) { _fun0012_ip = 132; continue _fun0012 }
 130:
            return var4;
 132:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 15;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot16;
            var1 = var1.INVALID_PERMISSIONS;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var11 = 'Missing Permissions';
            var13 = var2;
            var12 = var3;
            var1 = new var13[var4](var12, var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.CURRENT_USER_UPDATE;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = new Array(2);
    var12[0] = var14;
    var17 = var6[var13];
    var17 = var5.bind(var1)(var17);
    var17 = var17.OAuth2Scopes;
    var17 = var17.IDENTIFY;
    var12[1] = var17;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = arg1;
                var8 = var1.prevState;
                var4 = var1.dispatch;
                var1 = {};
                var5 = _closure1_slot13;
                var3 = var5.getCurrentUser;
                var3 = var3.bind(var5)();
                var1['currentUser'] = var3;
                var3 = var1.currentUser;
                var5 = null;
                var3 = var5 == var3;
                if(var3) { _fun0013_ip = 90; continue _fun0013 }
 52:
                var5 = var5 != var8;
                if(!var5) { _fun0013_ip = 87; continue _fun0013 }
 59:
                var9 = _closure1_slot1;
                var7 = _closure1_slot3;
                var6 = 21;
                var6 = var7[var6];
                var7 = undefined;
                var6 = var9.bind(var7)(var6);
                var5 = var6.bind(var7)(var1, var8);
 87:
                var3 = var5;
 90:
                if(var3) { _fun0013_ip = 131; continue _fun0013 }
 93:
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 22;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var1.currentUser;
                var2 = var5.bind(var3)(var2);
                var2 = var4.bind(var3)(var2);
 131:
                return var1;
            }
        };
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.CURRENT_GUILD_MEMBER_UPDATE;
    var7 = {};
    var10 = {};
    var15 = var11.ALL;
    var12 = var6[var13];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var17 = var12.IDENTIFY;
    var12 = new Array(2);
    var12[0] = var17;
    var17 = var6[var13];
    var17 = var5.bind(var1)(var17);
    var17 = var17.OAuth2Scopes;
    var17 = var17.GUILDS_MEMBERS_READ;
    var12[1] = var17;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler(arg1) {
        var2 = arg1;
        var2 = var2.args;
        var2 = var2.guild_id;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = arg1;
                var8 = var1.prevState;
                var4 = var1.dispatch;
                var1 = {};
                var6 = _closure1_slot9;
                var5 = var6.getSelfMember;
                var3 = _closure2_slot0;
                var3 = var5.bind(var6)(var3);
                var1['currentGuildMember'] = var3;
                var3 = var1.currentGuildMember;
                var5 = null;
                var3 = var5 == var3;
                if(var3) { _fun0014_ip = 99; continue _fun0014 }
 61:
                var5 = var5 != var8;
                if(!var5) { _fun0014_ip = 96; continue _fun0014 }
 68:
                var9 = _closure1_slot1;
                var7 = _closure1_slot3;
                var6 = 21;
                var6 = var7[var6];
                var7 = undefined;
                var6 = var9.bind(var7)(var6);
                var5 = var6.bind(var7)(var1, var8);
 96:
                var3 = var5;
 99:
                if(var3) { _fun0014_ip = 140; continue _fun0014 }
 102:
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 23;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var1.currentGuildMember;
                var2 = var5.bind(var3)(var2);
                var2 = var4.bind(var3)(var2);
 140:
                return var1;
            }
        };
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ENTITLEMENT_CREATE;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = new Array(2);
    var12[0] = var14;
    var12[1] = var16;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.ENTITLEMENT_DELETE;
    var7 = {};
    var10 = {};
    var15 = var11.ANY;
    var12 = new Array(2);
    var12[0] = var14;
    var12[1] = var16;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = undefined;
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.SCREENSHARE_STATE_UPDATE;
    var7 = {};
    var10 = {};
    var15 = var11.ALL;
    var12 = new Array(2);
    var12[0] = var14;
    var16 = var6[var13];
    var16 = var5.bind(var1)(var16);
    var16 = var16.OAuth2Scopes;
    var16 = var16.RPC_SCREENSHARE_READ;
    var12[1] = var16;
    var10[var15] = var12;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = arg1;
                var6 = var1.prevState;
                var3 = var1.dispatch;
                var2 = _closure1_slot7;
                var1 = var2.getStreamerActiveStreamMetadata;
                var9 = var1.bind(var2)();
                var5 = null;
                var7 = var5 == var9;
                var2 = undefined;
                var1 = undefined;
                if(var7) { _fun0015_ip = 52; continue _fun0015 }
 46:
                var1 = var9.pid;
 52:
                var7 = var5 != var1;
                var1 = null;
                if(!var7) { _fun0015_ip = 82; continue _fun0015 }
 61:
                var10 = _closure1_slot5;
                var8 = var10.getGameForPID;
                var7 = var9.pid;
                var1 = var8.bind(var10)(var7);
 82:
                var8 = var5 == var1;
                var7 = undefined;
                if(var8) { _fun0015_ip = 96; continue _fun0015 }
 91:
                var7 = var1.id;
 96:
                var7 = var5 != var7;
                var8 = null;
                if(!var7) { _fun0015_ip = 125; continue _fun0015 }
 105:
                var10 = _closure1_slot4;
                var7 = var10.getApplication;
                var1 = var1.id;
                var8 = var7.bind(var10)(var1);
 125:
                var1 = var5 != var8;
                var7 = null;
                if(!var1) { _fun0015_ip = 159; continue _fun0015 }
 134:
                var10 = _closure1_slot1;
                var11 = _closure1_slot3;
                var1 = 24;
                var1 = var11[var1];
                var1 = var10.bind(var2)(var1);
                var7 = var1.bind(var2)(var8);
 159:
                var1 = var5 == var9;
                var8 = undefined;
                if(var1) { _fun0015_ip = 174; continue _fun0015 }
 168:
                var8 = var9.sourceName;
 174:
                var1 = {};
                var10 = var5 != var9;
                var1['active'] = var10;
                var11 = var5 == var9;
                var10 = undefined;
                if(var11) { _fun0015_ip = 200; continue _fun0015 }
 194:
                var10 = var9.pid;
 200:
                var11 = var5 != var10;
                var9 = null;
                if(!var11) { _fun0015_ip = 212; continue _fun0015 }
 209:
                var9 = var10;
 212:
                var1['pid'] = var9;
                var7 = var5 != var7;
                if(!(var5 == var7)) { _fun0015_ip = 229; continue _fun0015 }
 225:
                var7 = var5 != var8;
 229:
                var5 = null;
                if(!var7) { _fun0015_ip = 243; continue _fun0015 }
 234:
                var7 = {};
                var7['name'] = var8;
                var5 = var7;
 243:
                var1['application'] = var5;
                var5 = _closure1_slot1;
                var7 = _closure1_slot3;
                var4 = 18;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.isEqual;
                var4 = var4.bind(var5)(var1, var6);
                if(var4) { _fun0015_ip = 287; continue _fun0015 }
 282:
                var2 = var3.bind(var2)(var1);
 287:
                return var1;
            }
        };
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var9 = var4.VIDEO_STATE_UPDATE;
    var7 = {};
    var10 = {};
    var12 = var11.ALL;
    var11 = new Array(2);
    var11[0] = var14;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.OAuth2Scopes;
    var13 = var13.RPC_VIDEO_READ;
    var11[1] = var13;
    var10[var12] = var11;
    var7['scope'] = var10;
    var10 = function handler() {
        var1 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = arg1;
                var6 = var1.prevState;
                var3 = var1.dispatch;
                var1 = {};
                var5 = _closure1_slot11;
                var4 = var5.isVideoEnabled;
                var4 = var4.bind(var5)();
                var1['active'] = var4;
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 18;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.isEqual;
                var4 = var4.bind(var5)(var1, var6);
                if(var4) { _fun0016_ip = 80; continue _fun0016 }
 75:
                var2 = var3.bind(var2)(var1);
 80:
                return var1;
            }
        };
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var7 = var4.AUTHORIZE_REQUEST;
    var4 = {};
    var4['scope'] = var1;
    var8 = function handler() {
        var1 = undefined;
        return var1;
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();