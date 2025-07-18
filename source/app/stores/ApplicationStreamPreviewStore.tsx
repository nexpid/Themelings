// app/stores/ApplicationStreamPreviewStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var9 = function reset() {
        var1 = {};
        _closure1_slot9 = var1;
        var1 = {};
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.StreamTypes;
    var _closure1_slot8 = var8;
    var8 = {};
    var _closure1_slot9 = var8;
    var8 = {};
    var _closure1_slot10 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ApplicationStreamPreviewStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getPreviewURL';
        var5['key'] = var1;
        var1 = function value(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var7 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.encodeStreamKey;
                var4 = {};
                var3 = null;
                if(!(var3 == var7)) { _fun0003_ip = 54; continue _fun0003 }
 42:
                var8 = _closure1_slot8;
                var8 = var8.CALL;
                _fun0003_ip = 64; continue _fun0003;
 54:
                var9 = _closure1_slot8;
                var8 = var9.GUILD;
 64:
                var4['streamType'] = var8;
                var4['guildId'] = var7;
                var7 = arg2;
                var4['channelId'] = var7;
                var7 = arg3;
                var4['ownerId'] = var7;
                var4 = var5.bind(var6)(var4);
                var2 = _closure1_slot9;
                var2 = var2[var4];
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 115; continue _fun0003 }
 110:
                var1 = var2.url;
 115:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldFetchPreview';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.encodeStreamKey;
                var1 = {};
                var5 = null;
                if(!(var5 == var6)) { _fun0004_ip = 54; continue _fun0004 }
 42:
                var7 = _closure1_slot8;
                var7 = var7.CALL;
                _fun0004_ip = 64; continue _fun0004;
 54:
                var8 = _closure1_slot8;
                var7 = var8.GUILD;
 64:
                var1['streamType'] = var7;
                var1['guildId'] = var6;
                var6 = arg2;
                var1['channelId'] = var6;
                var6 = arg3;
                var1['ownerId'] = var6;
                var4 = var3.bind(var4)(var1);
                var1 = _closure1_slot9;
                var1 = var1[var4];
                var3 = _closure1_slot10;
                var3 = var3[var4];
                var7 = var5 != var3;
                var6 = 0;
                if(!var7) { _fun0004_ip = 121; continue _fun0004 }
 118:
                var6 = var3;
 121:
                var3 = var5 != var1;
                if(!var3) { _fun0004_ip = 155; continue _fun0004 }
 128:
                var7 = global;
                var8 = var7.Date;
                var7 = var8.now;
                var8 = var7.bind(var8)();
                var7 = var1.expires;
                var3 = var8 > var7;
 155:
                var1 = var5 == var1;
                if(!var1) { _fun0004_ip = 169; continue _fun0004 }
 162:
                var5 = 5;
                var1 = var6 < var5;
 169:
                if(var1) { _fun0004_ip = 175; continue _fun0004 }
 172:
                var1 = var3;
 175:
                if(!var1) { _fun0004_ip = 195; continue _fun0004 }
 178:
                var3 = _closure1_slot11;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
 195:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPreviewURLForStreamKey';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.decodeStreamKey;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var4 = var1.guildId;
            var3 = var1.channelId;
            var2 = var1.ownerId;
            var1 = var5.getPreviewURL;
            var1 = var1.bind(var5)(var4, var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getIsPreviewLoading';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.encodeStreamKey;
                var2 = {};
                var6 = null;
                if(!(var6 == var5)) { _fun0005_ip = 54; continue _fun0005 }
 42:
                var6 = _closure1_slot8;
                var6 = var6.CALL;
                _fun0005_ip = 64; continue _fun0005;
 54:
                var7 = _closure1_slot8;
                var6 = var7.GUILD;
 64:
                var2['streamType'] = var6;
                var2['guildId'] = var5;
                var5 = arg2;
                var2['channelId'] = var5;
                var5 = arg3;
                var2['ownerId'] = var5;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot11;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ApplicationStreamPreviewStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var9;
    var2['LOGOUT'] = var9;
    var9 = function handleStreamPreviewFetch(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.streamKey;
            var4 = _closure1_slot10;
            var2 = var4[var3];
            var5 = null;
            var6 = var5 != var2;
            var5 = 0;
            if(!var6) { _fun0006_ip = 34; continue _fun0006 }
 31:
            var5 = var2;
 34:
            var2 = 1;
            var2 = var5 + var2;
            var4[var3] = var2;
            var2 = _closure1_slot11;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['STREAM_PREVIEW_FETCH_START'] = var9;
    var9 = function handleStreamPreviewFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.streamKey;
        var5 = var1.previewURL;
        var4 = _closure1_slot9;
        var2 = {};
        var2['url'] = var5;
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var6 = var5.bind(var6)();
        var5 = 120000;
        var5 = var6 + var5;
        var2['expires'] = var5;
        var4[var3] = var2;
        var4 = _closure1_slot10;
        var2 = 0;
        var4[var3] = var2;
        var2 = _closure1_slot11;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['STREAM_PREVIEW_FETCH_SUCCESS'] = var9;
    var9 = function handleStreamPreviewFetchFail(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.streamKey;
            var6 = var1.retryAfter;
            var4 = _closure1_slot9;
            var2 = {};
            var7 = null;
            var2['url'] = var7;
            var5 = global;
            var8 = var5.Date;
            var5 = var8.now;
            var5 = var5.bind(var8)();
            if(!(var7 == var6)) { _fun0007_ip = 69; continue _fun0007 }
 51:
            var7 = _closure1_slot10;
            var8 = var7[var3];
            var7 = 10000;
            var6 = var7 * var8;
 69:
            var5 = var5 + var6;
            var2['expires'] = var5;
            var4[var3] = var2;
            var2 = _closure1_slot11;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['STREAM_PREVIEW_FETCH_FAIL'] = var9;
    var4 = function handleVoiceStateUpdates(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.voiceStates;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 6;
            var1 = var1[var7];
            var6 = undefined;
            var4 = var3.bind(var6)(var1);
            var3 = var4.isEmpty;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var1);
            var1 = !var1;
            if(var1) { _fun0008_ip = 90; continue _fun0008 }
 55:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isEmpty;
            var2 = _closure1_slot10;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
 90:
            if(!var1) { _fun0008_ip = 114; continue _fun0008 }
 93:
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg2;
                    var5 = var1.userId;
                    var7 = var1.guildId;
                    var6 = var1.channelId;
                    var1 = var1.selfStream;
                    if(var1) { _fun0009_ip = 131; continue _fun0009 }
 27:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.encodeStreamKey;
                    var2 = {};
                    var8 = null;
                    if(!(var8 == var7)) { _fun0009_ip = 78; continue _fun0009 }
 66:
                    var8 = _closure1_slot8;
                    var8 = var8.CALL;
                    _fun0009_ip = 88; continue _fun0009;
 78:
                    var9 = _closure1_slot8;
                    var8 = var9.GUILD;
 88:
                    var2['streamType'] = var8;
                    var2['guildId'] = var7;
                    var2['channelId'] = var6;
                    var2['ownerId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot9;
                    var3 = delete var3[var2];
                    var1 = _closure1_slot10;
                    var1 = delete var1[var2];
                    var1 = true;
                    return var1;
 131:
                    var1 = arg1;
                    return var1;
                }
            };
            var2 = false;
            var1 = var4.bind(var5)(var3, var2);
 114:
            return var1;
        }
    };
    var2['VOICE_STATE_UPDATES'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ApplicationStreamPreviewStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();