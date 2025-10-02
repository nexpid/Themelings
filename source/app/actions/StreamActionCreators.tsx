// app/actions/StreamActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var10;
    var1 = function isVoiceChannelFull(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg2;
            var3 = _closure1_slot9;
            var1 = var3.getChannel;
            var6 = var1.bind(var3)(var4);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var1 = null;
            var3 = var1 != var6;
            var1 = 'Cannot join a null voice channel';
            var1 = var7.bind(var5)(var3, var1);
            var3 = _closure1_slot12;
            var1 = var3.isInChannel;
            var1 = var1.bind(var3)(var4);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 15;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.isChannelFull;
            var3 = _closure1_slot12;
            var2 = _closure1_slot10;
            var1 = var4.bind(var5)(var6, var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var7 = function watchStream(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.getGoLiveDefaultMultiwatchExperimentConfig;
            var4 = {};
            var8 = 'StreamActionCreators.watchStream';
            var4['location'] = var8;
            var4 = var5.bind(var6)(var4);
            var12 = var4.defaultWatchMultipleStreams;
            var5 = _closure1_slot4;
            var4 = var5.getRemoteSessionId;
            var4 = var4.bind(var5)();
            var6 = null;
            if(!(var6 == var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var2.guildId;
            var10 = var2.channelId;
            if(!(var6 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot18;
            var4 = var4.bind(var1)(var1, var10);
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 13;
            var4 = var8[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.encodeStreamKey;
            var5 = var4.bind(var5)(var2);
            var8 = var6 == var7;
            var4 = undefined;
            if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var7.forceMultiple;
case 8:
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = _closure1_slot7;
            var8 = var9.getAllActiveStreamsForChannel;
            var10 = var8.bind(var9)(var10);
            var9 = var10.filter;
            var8 = function(arg1) {
                var1 = arg1;
                var2 = var1.ownerId;
                var3 = _closure1_slot8;
                var1 = var3.getId;
                var1 = var1.bind(var3)();
                var1 = var2 !== var1;
                return var1;
            };
            var8 = var9.bind(var10)(var8);
            var9 = var8.length;
            var8 = _closure1_slot17;
            var4 = var9 >= var8;
case 10:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 12;
            var8 = var10[var8];
            var10 = var9.bind(var1)(var8);
            var9 = var10.dispatch;
            var8 = {};
            var11 = 'STREAM_WATCH';
            var8['type'] = var11;
            var8['streamKey'] = var5;
            var11 = var4;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = var12;
case 12:
            var8['allowMultiple'] = var11;
            var8 = var9.bind(var10)(var8);
            if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var6 != var7;
            if(!var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = var7.noFocus;
case 16:
            var4 = var6;
case 14:
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 18:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.selectParticipant;
            var2 = var2.channelId;
            var2 = var3.bind(var4)(var2, var5);
case 4:
            return var1;
        }
    };
    var _closure1_slot19 = var7;
    var6 = function watchStreamAndTransitionToStream(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.guildId;
            var6 = var3.channelId;
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = _closure1_slot18;
            var1 = undefined;
            var1 = var2.bind(var1)(var1, var6);
            if(var1) { _fun0003_ip = 21; continue _fun0003 }
case 19:
            var5 = _closure1_slot19;
            var2 = undefined;
            var4 = arg2;
            var4 = var5.bind(var2)(var3, var4);
            var7 = _closure1_slot5;
            var5 = var7.getWindowOpen;
            var4 = _closure1_slot15;
            var4 = var4.CHANNEL_CALL_POPOUT;
            var4 = var5.bind(var7)(var4);
            var7 = _closure1_slot11;
            var5 = var7.getVoiceChannelId;
            var5 = var5.bind(var7)();
            if(!var4) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var4 = var5 === var6;
case 22:
            if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 24:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 18;
            var1 = var5[var1];
            var1 = var4.bind(var2)(var1);
            var1 = var1.bind(var2)(var3);
case 21:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot20 = var6;
    var5 = function stopStream(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var3 = arguments[1];
            var2 = arguments[2];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var3 = true;
case 25:
            if(!(var2 === var1)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var2 = true;
case 27:
            if(!var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var2 = _closure1_slot22;
            var2 = var2.bind(var1)(var6, var3);
case 29:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'STREAM_STOP';
            var2['type'] = var7;
            var2['streamKey'] = var6;
            var5 = _closure1_slot14;
            var5 = var5.APP;
            var2['appContext'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot21 = var5;
    var4 = function closeStream(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var5 = true;
case 31:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'STREAM_CLOSE';
            var2['type'] = var6;
            var6 = arg1;
            var2['streamKey'] = var6;
            var2['canShowFeedback'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var1 = function _fetchStreamPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var14 = arg1;
                    var13 = arg2;
                    var9 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 33; continue _fun0006 }
case 20:
                    var12 = var14;
                    var11 = var13;
                    var10 = var9;
                    var2 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var8 = _closure1_slot6;
                    var5 = var8.shouldFetchPreview;
                    var5 = var5.bind(var8)(var14, var13, var9);
                    if(!var5) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 13;
                    var5 = var9[var5];
                    var9 = var8.bind(var2)(var5);
                    var8 = var9.encodeStreamKey;
                    var5 = {};
                    var14 = var12;
                    var13 = null;
                    if(!(var13 == var14)) { _fun0006_ip = 36; continue _fun0006 }
case 7:
                    var13 = _closure1_slot16;
                    var13 = var13.CALL;
                    _fun0006_ip = 37; continue _fun0006;
case 36:
                    var14 = _closure1_slot16;
                    var13 = var14.GUILD;
case 37:
                    var5['streamType'] = var13;
                    var5['guildId'] = var12;
                    var5['channelId'] = var11;
                    var5['ownerId'] = var10;
                    var11 = var8.bind(var9)(var5);
                    var7 = var11;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 12;
                    var8 = var8[var5];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var12 = 'STREAM_PREVIEW_FETCH_START';
                    var8['type'] = var12;
                    var8['streamKey'] = var11;
                    var8 = var9.bind(var10)(var8);
case 38: // try_start_0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 19;
                    var8 = var10[var8];
                    var8 = var9.bind(var2)(var8);
                    var10 = var8.HTTP;
                    var9 = var10.get;
                    var8 = {};
                    var13 = _closure1_slot13;
                    var12 = var13.STREAM_PREVIEW;
                    var11 = var7;
                    var11 = var12.bind(var13)(var11);
                    var8['url'] = var11;
                    var11 = {};
                    var12 = global;
                    var13 = var12.Date;
                    var12 = var13.now;
                    var12 = var12.bind(var13)();
                    var11['version'] = var12;
                    var8['query'] = var11;
                    var11 = true;
                    var8['oldFormErrors'] = var11;
                    var11 = false;
                    var8['rejectWithError'] = var11;
                    var8 = var9.bind(var10)(var8);
                    SaveGenerator(address=297);
case 39:
                    return var8;
case 40:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var5];
                    var11 = var10.bind(var2)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var12 = 'STREAM_PREVIEW_FETCH_SUCCESS';
                    var9['type'] = var12;
                    var12 = var7;
                    var9['streamKey'] = var12;
                    var12 = var8.body;
                    var12 = var12.url;
                    var9['previewURL'] = var12;
                    var9 = var10.bind(var11)(var9);
case 43: // try_end0
                    _fun0006_ip = 34; continue _fun0006;
case 41:
                    return var8;
case 44: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var4 = var8;
                    var9 = var8.status;
                    var8 = 429;
                    if(!(var8 === var9)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var4 = var4.body;
                    var8 = var4.retry_after;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 20;
                    var4 = var10[var4];
                    var4 = var9.bind(var2)(var4);
                    var4 = var4.Millis;
                    var4 = var4.SECOND;
                    var6 = var8 * var4;
case 45:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'STREAM_PREVIEW_FETCH_FAIL';
                    var3['type'] = var8;
                    var3['streamKey'] = var7;
                    var3['retryAfter'] = var6;
                    var3 = var4.bind(var5)(var3);
case 34:
                    return var2;
case 33:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function _notifyStreamStart() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var5 = arg1;
case 49: // try_start_0
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 21;
                    var2 = var10[var2];
                    var9 = undefined;
                    var4 = var3.bind(var9)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot13;
                    var6 = var8.STREAM_NOTIFY;
                    var5 = var6.bind(var8)(var5);
                    var2['url'] = var5;
                    var5 = true;
                    var2['oldFormErrors'] = var5;
                    var6 = {};
                    var8 = _closure1_slot0;
                    var7 = 22;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.NetworkActionNames;
                    var7 = var7.STREAM_NOTIFY;
                    var6['event'] = var7;
                    var2['trackedActionData'] = var6;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=125);
case 50:
                    return var2;
case 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 21: // try_end0
                    _fun0007_ip = 53; continue _fun0007;
case 52:
                    return var2;
case 54: // catch_target0
                    CatchBlockStart(arg_register=1);
case 53:
                    var2 = undefined;
                    return var2;
case 47:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var8 = global;
    var14 = var8.Object;
    var13 = var14.defineProperty;
    var11 = {};
    var1 = true;
    var11['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var11);
    var1 = 0;
    var11 = var10[var1];
    var1 = undefined;
    var11 = var12.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot5 = var11;
    var11 = 3;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var11 = 4;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot7 = var11;
    var11 = 5;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot8 = var11;
    var11 = 6;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot9 = var11;
    var11 = 7;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot10 = var11;
    var11 = 8;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot11 = var11;
    var11 = 9;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot12 = var11;
    var11 = 10;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var12 = var11.Endpoints;
    var _closure1_slot13 = var12;
    var12 = var11.AppContext;
    var _closure1_slot14 = var12;
    var11 = var11.PopoutWindowKeys;
    var _closure1_slot15 = var11;
    var11 = 11;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var11 = var11.StreamTypes;
    var _closure1_slot16 = var11;
    var8 = var8.Number;
    var8 = var8.MAX_VALUE;
    var _closure1_slot17 = var8;
    var8 = 27;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'actions/StreamActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function startStream(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'STREAM_START';
            var2['type'] = var7;
            var7 = null;
            if(!(var7 == var6)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var7 = _closure1_slot16;
            var7 = var7.CALL;
            _fun0008_ip = 57; continue _fun0008;
case 55:
            var8 = _closure1_slot16;
            var7 = var8.GUILD;
case 57:
            var2['streamType'] = var7;
            var2['guildId'] = var6;
            var6 = arg2;
            var2['channelId'] = var6;
            var5 = _closure1_slot14;
            var5 = var5.APP;
            var2['appContext'] = var5;
            var9 = arg3;
            var10 = var2;
            var5 = copyDataProperties(var10, var9);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['startStream'] = var8;
    var8 = function setStreamPaused(arg1, arg2) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 13;
        var3 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.encodeStreamKey;
        var3 = arg1;
        var5 = var5.bind(var6)(var3);
        var3 = _closure1_slot1;
        var2 = 12;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'STREAM_SET_PAUSED';
        var2['type'] = var6;
        var2['streamKey'] = var5;
        var5 = arg2;
        var2['paused'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setStreamPaused'] = var8;
    var3['watchStream'] = var7;
    var7 = function toggleSelfStreamHidden(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'STREAM_UPDATE_SELF_HIDDEN';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['selfStreamHidden'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['toggleSelfStreamHidden'] = var7;
    var3['watchStreamAndTransitionToStream'] = var6;
    var3['stopStream'] = var5;
    var3['closeStream'] = var4;
    var4 = function fetchStreamPreview() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchStreamPreview'] = var4;
    var4 = function setLayout(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'STREAM_LAYOUT_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['layout'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setLayout'] = var4;
    var4 = function setHackyMacMode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'STREAM_SET_HACKY_MAC_MODE';
        var2['type'] = var5;
        var5 = arg1;
        var2['enabled'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setHackyMacMode'] = var4;
    var4 = function notifyStreamStart() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['notifyStreamStart'] = var4;
    var4 = function updateStreamSettings(arg1) {
        var5 = arg1;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 23;
        var3 = var4[var1];
        var1 = undefined;
        var9 = var6.bind(var1)(var3);
        var8 = var9.trackStreamSettingsUpdate;
        var7 = var5.preset;
        var6 = var5.resolution;
        var3 = var5.frameRate;
        var3 = var8.bind(var9)(var7, var6, var3);
        var3 = _closure1_slot1;
        var2 = 12;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'STREAM_UPDATE_SETTINGS';
        var2['type'] = var6;
        var12 = var2;
        var11 = var5;
        var5 = copyDataProperties(var12, var11);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateStreamSettings'] = var4;
    var4 = function changeStreamRegion(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var7 = _closure1_slot13;
        var6 = var7.STREAM;
        var5 = arg1;
        var5 = var6.bind(var7)(var5);
        var2['url'] = var5;
        var5 = {};
        var6 = arg2;
        var5['region'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var2['rejectWithError'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['changeStreamRegion'] = var4;
    var4 = function stopOwnStream() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
            var4 = true;
case 31:
            var5 = _closure1_slot7;
            var3 = var5.getCurrentUserActiveStream;
            var6 = var3.bind(var5)();
            var3 = null;
            if(!(var3 != var6)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var3 = _closure1_slot21;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.encodeStreamKey;
            var2 = var2.bind(var5)(var6);
            var2 = var3.bind(var1)(var2, var4);
case 58:
            return var1;
        }
    };
    var3['stopOwnStream'] = var4;
    var2 = function joinPrivateChannelAndWatchStream(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot8;
            var1 = var4.getId;
            var5 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 13;
            var4 = var4[var1];
            var1 = undefined;
            var8 = var7.bind(var1)(var4);
            var7 = var8.decodeStreamKey;
            var4 = arg2;
            var4 = var7.bind(var8)(var4);
            var _closure2_slot1 = var4;
            var7 = _closure1_slot11;
            var4 = var7.getVoiceChannelId;
            var7 = var4.bind(var7)();
            var4 = null;
            var4 = var4 != var7;
            if(!var4) { _fun0010_ip = 60; continue _fun0010 }
case 61:
            var4 = var7 !== var6;
case 60:
            if(!var4) { _fun0010_ip = 62; continue _fun0010 }
case 63:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 24;
            var4 = var8[var4];
            var7 = var7.bind(var1)(var4);
            var4 = var7.disconnect;
            var4 = var4.bind(var7)();
case 62:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 25;
            var3 = var7[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.addRecipient;
            var9 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.call;
                var12 = _closure2_slot0;
                var9 = null;
                var8 = function() {
                    var3 = _closure1_slot20;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var13 = var7;
                var11 = false;
                var10 = false;
                var2 = var13[var6](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var13 = var4;
            var12 = var6;
            var11 = var5;
            var10 = undefined;
            var2 = var13[var3](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['joinPrivateChannelAndWatchStream'] = var2;
    return var1;
})();