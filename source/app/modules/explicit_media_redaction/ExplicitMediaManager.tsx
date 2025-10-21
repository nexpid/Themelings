// app/modules/explicit_media_redaction/ExplicitMediaManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function createCompositeKey(arg1) {
        var1 = arg1;
        var5 = var1.channel_id;
        var4 = var1.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function resetManager() {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.values;
        var1 = _closure1_slot19;
        var4 = var3.bind(var4)(var1);
        var3 = var4.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.timeout;
            var1 = global;
            var2 = var1.clearTimeout;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        var1 = {};
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function maybeCancelTimeout(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var1 = var8.id;
            var4 = null;
            if(!(var4 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var8.channel_id;
            if(!(var4 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = _closure1_slot22;
            var5 = undefined;
            var2 = var2.bind(var5)(var8);
            var3 = _closure1_slot19;
            var3 = var3[var2];
            if(!(var4 == var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = false;
            return var3;
case 9:
            var3 = _closure1_slot19;
            var3 = var3[var2];
            var4 = var3.timeout;
            var7 = var3.setAt;
            var6 = function handleMediaScanCompleteReporting(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var12 = arg1;
                    var5 = arg2;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 15;
                    var6 = var1[var4];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.TimeoutCancelSource;
                    var6 = var6.UPDATE;
                    if(!(var5 === var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var11 = var12.attachments;
                    var6 = null;
                    if(!(var6 == var11)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var11 = new Array(0);
case 13:
                    var10 = var12.embeds;
                    if(!(var6 == var10)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var10 = new Array(0);
case 15:
                    var7 = var11.filter;
                    var6 = function(arg1) {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 16;
                        var1 = var8[var1];
                        var6 = undefined;
                        var4 = var7.bind(var6)(var1);
                        var3 = var4.isMediaFlaggedForHarmType;
                        var1 = 17;
                        var1 = var8[var1];
                        var1 = var7.bind(var6)(var1);
                        var1 = var1.ContentHarmType;
                        var2 = var1.EXPLICIT;
                        var1 = {};
                        var5 = 18;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.ObscuredMediaTypes;
                        var5 = var5.Attachment;
                        var1['type'] = var5;
                        var5 = arg1;
                        var1['media'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var9 = var7.bind(var11)(var6);
                    var6 = var10.filter;
                    var3 = function(arg1) {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 16;
                        var1 = var8[var1];
                        var6 = undefined;
                        var4 = var7.bind(var6)(var1);
                        var3 = var4.isMediaFlaggedForHarmType;
                        var1 = 17;
                        var1 = var8[var1];
                        var1 = var7.bind(var6)(var1);
                        var1 = var1.ContentHarmType;
                        var2 = var1.EXPLICIT;
                        var1 = {};
                        var5 = 18;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.ObscuredMediaTypes;
                        var5 = var5.Embed;
                        var1['type'] = var5;
                        var5 = arg1;
                        var1['media'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var8 = var6.bind(var10)(var3);
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var4];
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.trackExplicitMediaScanComplete;
                    var3 = {};
                    var13 = var12.id;
                    var3['messageId'] = var13;
                    var12 = var12.channel_id;
                    var3['channelId'] = var12;
                    var11 = var11.length;
                    var3['numOfAttachments'] = var11;
                    var10 = var10.length;
                    var3['numOfEmbeds'] = var10;
                    var9 = var9.length;
                    var3['numOfExplicitAttachments'] = var9;
                    var8 = var8.length;
                    var3['numOfExplicitEmbeds'] = var8;
                    var3 = var6.bind(var7)(var3);
case 11:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackScanTiming;
                    var2 = arg3;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                }
            };
            var3 = arg2;
            var3 = var6.bind(var5)(var8, var3, var7);
            var3 = global;
            var3 = var3.clearTimeout;
            var3 = var3.bind(var5)(var4);
            var1 = _closure1_slot19;
            var1 = delete var1[var2];
            var1 = true;
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function withoutScheduledTimeout(arg1) {
        var4 = _closure1_slot22;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var1 = _closure1_slot19;
        var2 = var1[var2];
        var1 = null;
        var1 = var1 == var2;
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function handleUnscannedMessages(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var4 = arg2;
            var6 = null;
            var3 = var4;
            if(!(var6 == var3)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var3 = {};
case 17:
            var7 = var3.forceBatchScan;
            var1 = undefined;
            var5 = var1 !== var7;
            if(!var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var5 = var7;
case 19:
            var7 = var3.jitter;
            var3 = var1 !== var7;
            if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 21:
            var3 = var7;
case 9:
            if(!(var6 != var4)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var4 = var4.isMessageUpdate;
            if(var4) { _fun0004_ip = 24; continue _fun0004 }
case 22:
            var6 = var8.filter;
            var4 = _closure1_slot25;
            var4 = var6.bind(var8)(var4);
            _fun0004_ip = 25; continue _fun0004;
case 24:
            var7 = var8.filter;
            var6 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hasUnscannedMedia;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var7.bind(var8)(var6);
            var7 = var8.filter;
            var6 = _closure1_slot25;
            var4 = var7.bind(var8)(var6);
case 25:
            var _closure2_slot0 = var4;
            var7 = var4.forEach;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot22;
                    var1 = undefined;
                    var4 = var3.bind(var1)(var4);
                    var3 = _closure1_slot19;
                    var6 = var3[var4];
                    var3 = null;
                    if(!(var3 == var6)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 21;
                    var3 = var10[var3];
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.increment;
                    var3 = {};
                    var9 = _closure1_slot0;
                    var8 = 22;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.MetricEvents;
                    var8 = var8.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE;
                    var3['name'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = _closure1_slot19;
                    var2 = {};
                    var6 = global;
                    var8 = var6.Date;
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var2['setAt'] = var7;
                    var7 = var6.setTimeout;
                    var6 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = _closure3_slot0;
                            var4 = _closure1_slot24;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 15;
                            var3 = var1[var6];
                            var1 = undefined;
                            var3 = var7.bind(var1)(var3);
                            var3 = var3.TimeoutCancelSource;
                            var3 = var3.TIMEOUT;
                            var3 = var4.bind(var1)(var5, var3);
                            if(!var3) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                            var8 = _closure1_slot13;
                            var7 = var8.getMessage;
                            var4 = var5.channel_id;
                            var3 = var5.id;
                            var9 = var7.bind(var8)(var4, var3);
                            var3 = null;
                            if(!(var3 != var9)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var7 = 16;
                            var7 = var3[var7];
                            var8 = var4.bind(var1)(var7);
                            var7 = var8.getUnscannedMediaIds;
                            var7 = var7.bind(var8)(var9);
                            var8 = var7.attachmentIds;
                            var7 = var7.embedIds;
                            var3 = var3[var6];
                            var6 = var4.bind(var1)(var3);
                            var4 = var6.trackScanningTimedOut;
                            var3 = {};
                            var9 = var5.channel_id;
                            var3['channelId'] = var9;
                            var9 = var5.id;
                            var3['messageId'] = var9;
                            var3['attachmentIds'] = var8;
                            var3['embedIds'] = var7;
                            var3 = var4.bind(var6)(var3);
case 30:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 19;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT';
                            var2['type'] = var6;
                            var6 = var5.id;
                            var2['messageId'] = var6;
                            var5 = var5.channel_id;
                            var2['channelId'] = var5;
                            var2 = var3.bind(var4)(var2);
case 28:
                            return var1;
                        }
                    };
                    var5 = 3000;
                    var5 = var7.bind(var1)(var6, var5);
                    var2['timeout'] = var5;
                    var3[var4] = var2;
case 26:
                    return var1;
                }
            };
            var6 = var7.bind(var4)(var6);
            if(var5) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var6 = global;
            var8 = var6.Set;
            var7 = var4.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel_id;
                return var1;
            };
            var11 = var7.bind(var4)(var6);
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var6 = new var12[var8](var11, var10);
            var6 = var6 instanceof Object ? var6 : var7;
            var7 = var6.size;
            var6 = 1;
            var5 = var7 > var6;
case 32:
            var _closure2_slot1 = var5;
            if(var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var3 = _closure1_slot20;
            var3 = var3.bind(var1)(var4, var5);
            _fun0004_ip = 36; continue _fun0004;
case 34:
            var3 = global;
            var4 = var3.setTimeout;
            var5 = var3.Math;
            var3 = var5.random;
            var5 = var3.bind(var5)();
            var3 = 800;
            var3 = var3 * var5;
            var2 = function() {
                var4 = _closure2_slot0;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = _closure1_slot19;
                    var4 = _closure1_slot22;
                    var3 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var3)(var1);
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = _closure1_slot20;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var2 = var4.bind(var1)(var2, var3);
case 36:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function aggregateExplicitMediaCounts(arg1) {
        var5 = arg1;
        var3 = {};
        var _closure2_slot0 = var3;
        var2 = {};
        var _closure2_slot1 = var2;
        var4 = var5.forEach;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = var4.channel_id;
                var1 = var3[var1];
                var5 = null;
                if(!(var5 == var1)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                var7 = _closure2_slot0;
                var3 = var4.channel_id;
                var1 = {'numOfAttachments': 0, 'numOfAttachmentsPendingScan': 0, 'numOfEmbeds': 0, 'numOfEmbedsPendingScan': 0};
                var7[var3] = var1;
case 37:
                var3 = _closure2_slot1;
                var1 = var4.id;
                var1 = var3[var1];
                if(!(var5 == var1)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var7 = _closure2_slot1;
                var3 = var4.id;
                var1 = {'channelId': null, 'numOfAttachments': 0, 'numOfGoreAttachments': 0, 'numOfExplicitAttachments': 0, 'numOfEmbeds': 0, 'numOfGoreEmbeds': 0, 'numOfExplicitEmbeds': 0};
                var8 = var4.channel_id;
                var1['channelId'] = var8;
                var7[var3] = var1;
case 39:
                var3 = var4.attachments;
                var8 = var5 == var3;
                var1 = undefined;
                var7 = undefined;
                if(var8) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var7 = var3.length;
case 41:
                var8 = var5 != var7;
                var9 = 0;
                if(!var8) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var9 = var7;
case 43:
                var8 = var4.embeds;
                var10 = var5 == var8;
                var7 = undefined;
                if(var10) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var7 = var8.length;
case 45:
                var10 = var5 != var7;
                var8 = 0;
                if(!var10) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var8 = var7;
case 47:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 16;
                var7 = var11[var7];
                var10 = var10.bind(var1)(var7);
                var7 = var10.getUnscannedMediaIds;
                var7 = var7.bind(var10)(var4);
                var11 = var7.attachmentIds;
                var7 = var7.embedIds;
                var12 = _closure2_slot0;
                var10 = var4.channel_id;
                var10 = var12[var10];
                var12 = var10.numOfAttachments;
                var12 = var12 + var9;
                var10['numOfAttachments'] = var12;
                var12 = var10.numOfEmbeds;
                var12 = var12 + var8;
                var10['numOfEmbeds'] = var12;
                var12 = var10.numOfAttachmentsPendingScan;
                var11 = var11.length;
                var11 = var12 + var11;
                var10['numOfAttachmentsPendingScan'] = var11;
                var11 = var10.numOfEmbedsPendingScan;
                var7 = var7.length;
                var7 = var11 + var7;
                var10['numOfEmbedsPendingScan'] = var7;
                var7 = _closure2_slot1;
                var2 = var4.id;
                var2 = var7[var2];
                var7 = var2.numOfAttachments;
                var7 = var7 + var9;
                var2['numOfAttachments'] = var7;
                var7 = var2.numOfEmbeds;
                var7 = var7 + var8;
                var2['numOfEmbeds'] = var7;
                var10 = var4.attachments;
                var7 = var5 == var10;
                var8 = undefined;
                if(var7) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var9 = var10.filter;
                var7 = function(arg1) {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 16;
                    var1 = var8[var1];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var1);
                    var3 = var4.isMediaFlaggedForHarmType;
                    var1 = 17;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.ContentHarmType;
                    var2 = var1.EXPLICIT;
                    var1 = {};
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.ObscuredMediaTypes;
                    var5 = var5.Attachment;
                    var1['type'] = var5;
                    var5 = arg1;
                    var1['media'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var7 = var9.bind(var10)(var7);
                var8 = var7.length;
case 49:
                var9 = var5 != var8;
                var7 = 0;
                if(!var9) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var7 = var8;
case 51:
                var2['numOfExplicitAttachments'] = var7;
                var10 = var4.embeds;
                var7 = var5 == var10;
                var8 = undefined;
                if(var7) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var9 = var10.filter;
                var7 = function(arg1) {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 16;
                    var1 = var8[var1];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var1);
                    var3 = var4.isMediaFlaggedForHarmType;
                    var1 = 17;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.ContentHarmType;
                    var2 = var1.EXPLICIT;
                    var1 = {};
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.ObscuredMediaTypes;
                    var5 = var5.Embed;
                    var1['type'] = var5;
                    var5 = arg1;
                    var1['media'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var7 = var9.bind(var10)(var7);
                var8 = var7.length;
case 53:
                var9 = var5 != var8;
                var7 = 0;
                if(!var9) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var7 = var8;
case 55:
                var2['numOfExplicitEmbeds'] = var7;
                var10 = var4.attachments;
                var7 = var5 == var10;
                var8 = undefined;
                if(var7) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var9 = var10.filter;
                var7 = function(arg1) {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 16;
                    var1 = var8[var1];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var1);
                    var3 = var4.isMediaFlaggedForHarmType;
                    var1 = 17;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.ContentHarmType;
                    var2 = var1.GORE;
                    var1 = {};
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.ObscuredMediaTypes;
                    var5 = var5.Attachment;
                    var1['type'] = var5;
                    var5 = arg1;
                    var1['media'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var7 = var9.bind(var10)(var7);
                var8 = var7.length;
case 57:
                var9 = var5 != var8;
                var7 = 0;
                if(!var9) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var7 = var8;
case 59:
                var2['numOfGoreAttachments'] = var7;
                var8 = var4.embeds;
                var7 = var5 == var8;
                var4 = undefined;
                if(var7) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var7 = var8.filter;
                var6 = function(arg1) {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 16;
                    var1 = var8[var1];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var1);
                    var3 = var4.isMediaFlaggedForHarmType;
                    var1 = 17;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.ContentHarmType;
                    var2 = var1.GORE;
                    var1 = {};
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.ObscuredMediaTypes;
                    var5 = var5.Embed;
                    var1['type'] = var5;
                    var5 = arg1;
                    var1['media'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var4 = var6.length;
case 61:
                var5 = var5 != var4;
                var3 = 0;
                if(!var5) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                var3 = var4;
case 63:
                var2['numOfGoreEmbeds'] = var3;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1);
        var1 = {};
        var1['channelLookup'] = var3;
        var1['messageLookup'] = var2;
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function processMessagesFromAction(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = function getScanningAttributesForMessages(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.filter;
                    var1 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = arg1;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 23;
                            var1 = var6[var1];
                            var3 = undefined;
                            var2 = var5.bind(var3)(var1);
                            var1 = var2.hasAttachmentsEmbedsComponentsOrSnapshots;
                            var1 = var1.bind(var2)(var4);
                            var2 = 16;
                            var2 = var6[var2];
                            var3 = var5.bind(var3)(var2);
                            var2 = var3.getEnabledHarmTypesForMessage;
                            var3 = var2.bind(var3)(var4);
                            var2 = 0;
                            var2 = var2 !== var3;
                            if(!var1) { _fun0010_ip = 4; continue _fun0010 }
case 40:
                            var1 = var2;
case 4:
                            return var1;
                        }
                    };
                    var5 = var2.bind(var4)(var1);
                    var2 = var4.map;
                    var1 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = arg1;
                            var3 = null;
                            if(!(var3 != var1)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                            var2 = 'referenced_message';
                            var2 = var2 in var1;
                            if(!var2) { _fun0011_ip = 65; continue _fun0011 }
case 67:
                            var2 = var1.referenced_message;
                            if(!(var3 != var2)) { _fun0011_ip = 65; continue _fun0011 }
case 68:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 23;
                            var3 = var4[var3];
                            var4 = undefined;
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.hasAttachmentsEmbedsComponentsOrSnapshots;
                            var3 = var1.referenced_message;
                            var3 = var5.bind(var6)(var3);
                            if(!var3) { _fun0011_ip = 65; continue _fun0011 }
case 69:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 16;
                            var2 = var5[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.getEnabledHarmTypesForMessage;
                            var2 = var1.referenced_message;
                            var3 = var3.bind(var4)(var2);
                            var2 = 0;
                            if(!(var2 === var3)) { _fun0011_ip = 70; continue _fun0011 }
case 65:
                            var2 = undefined;
                            return var2;
case 70:
                            var1 = var1.referenced_message;
                            return var1;
                        }
                    };
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.filter;
                    var1 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var4 = var2.bind(var4)(var1);
                    var1 = var4.length;
                    var2 = 0;
                    var6 = var5;
                    if(!(var1 > var2)) { _fun0009_ip = 71; continue _fun0009 }
case 14:
                    var1 = new Array(0);
                    var9 = var1;
                    var8 = var5;
                    var7 = 0;
                    var7 = arraySpread(var9, var8, var7);
                    var9 = var1;
                    var8 = var4;
                    var2 = arraySpread(var9, var8, var7);
                    var6 = var1;
case 71:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var2);
                    var2 = function(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = arg1;
                            var2 = arg2;
                            var4 = var3.id;
                            var1 = var2.id;
                            var1 = var4 === var1;
                            if(!var1) { _fun0012_ip = 19; continue _fun0012 }
case 8:
                            var3 = var3.channel_id;
                            var2 = var2.channel_id;
                            var1 = var3 === var2;
case 19:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var4)(var6, var2);
                    var5 = var2.filter;
                    var3 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hasUnscannedMedia;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var2)(var3);
                    var1 = _closure1_slot27;
                    var2 = var1.bind(var4)(var2);
                    var1 = {};
                    var1['messagesPendingScan'] = var3;
                    var3 = var2.messageLookup;
                    var1['attributesByMessageId'] = var3;
                    var2 = var2.channelLookup;
                    var1['attributesByChannelId'] = var2;
                    return var1;
                }
            };
            var5 = undefined;
            var2 = arg1;
            var2 = var3.bind(var5)(var2);
            var4 = var2.messagesPendingScan;
            var10 = var2.attributesByChannelId;
            var7 = var2.attributesByMessageId;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = 25;
            var3 = var9[var8];
            var6 = var6.bind(var5)(var3);
            var3 = var6.entries;
            var10 = var3.bind(var6)(var10);
            var6 = var10.forEach;
            var3 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var5 = var4().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    var6 = undefined;
                    if(var3) { _fun0013_ip = 38; continue _fun0013 }
case 72:
                    var6 = var5;
case 38:
                    var5 = undefined;
                    if(var3) { _fun0013_ip = 23; continue _fun0013 }
case 73:
                    var7 = var4().value;
                    var4 = var2;
                    var4 = var4 === var1;
                    var5 = undefined;
                    var3 = var4;
                    if(var4) { _fun0013_ip = 23; continue _fun0013 }
case 74:
                    var5 = var7;
                    var3 = var4;
case 23:
                    if(var3) { _fun0013_ip = 75; continue _fun0013 }
case 29:
                    var2.return();
case 75:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackExplicitMediaRedactableMessagedLoaded;
                    var2 = {};
                    var2['channelId'] = var6;
                    var6 = var5.numOfAttachments;
                    var2['numOfAttachments'] = var6;
                    var6 = var5.numOfAttachmentsPendingScan;
                    var2['numOfAttachmentsPendingScan'] = var6;
                    var6 = var5.numOfEmbeds;
                    var2['numOfEmbeds'] = var6;
                    var5 = var5.numOfEmbedsPendingScan;
                    var2['numOfEmbedsPendingScan'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var6.bind(var10)(var3);
            var6 = _closure1_slot0;
            var3 = 26;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.isEligibleForObscuredMessageLoadExperiment;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var6 = var6.bind(var5)(var3);
            var3 = var6.entries;
            var6 = var3.bind(var6)(var7);
            var3 = var6.forEach;
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var5 = var4().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    var6 = undefined;
                    if(var3) { _fun0014_ip = 38; continue _fun0014 }
case 72:
                    var6 = var5;
case 38:
                    var5 = undefined;
                    if(var3) { _fun0014_ip = 23; continue _fun0014 }
case 73:
                    var7 = var4().value;
                    var4 = var2;
                    var4 = var4 === var1;
                    var5 = undefined;
                    var3 = var4;
                    if(var4) { _fun0014_ip = 23; continue _fun0014 }
case 74:
                    var5 = var7;
                    var3 = var4;
case 23:
                    if(var3) { _fun0014_ip = 75; continue _fun0014 }
case 29:
                    var2.return();
case 75:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackRedactableMessageLoaded;
                    var2 = {};
                    var2['messageId'] = var6;
                    var6 = var5.channelId;
                    var2['channelId'] = var6;
                    var6 = var5.numOfAttachments;
                    var2['numOfAttachments'] = var6;
                    var6 = var5.numOfGoreAttachments;
                    var2['numOfGoreAttachments'] = var6;
                    var6 = var5.numOfExplicitAttachments;
                    var2['numOfExplicitAttachments'] = var6;
                    var6 = var5.numOfEmbeds;
                    var2['numOfEmbeds'] = var6;
                    var6 = var5.numOfGoreEmbeds;
                    var2['numOfGoreEmbeds'] = var6;
                    var5 = var5.numOfExplicitEmbeds;
                    var2['numOfExplicitEmbeds'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var6)(var1);
case 76:
            var3 = var4.length;
            var1 = 0;
            var1 = var3 > var1;
            if(!var1) { _fun0008_ip = 30; continue _fun0008 }
case 78:
            var3 = _closure1_slot26;
            var2 = arg2;
            var2 = var3.bind(var5)(var4, var2);
            var1 = true;
case 30:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function processChannelMessagesFromAction(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = function getScanningAttributesForChannelMessages(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.filter;
                    var1 = function(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 23;
                            var1 = var5[var1];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var1);
                            var1 = var3.hasAttachmentsEmbedsComponentsOrSnapshots;
                            var1 = var1.bind(var3)(var4);
                            if(!var1) { _fun0017_ip = 79; continue _fun0017 }
case 80:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 16;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.getEnabledHarmTypesForMessage;
                            var3 = var2.bind(var3)(var4);
                            var2 = 0;
                            var1 = var2 !== var3;
case 79:
                            return var1;
                        }
                    };
                    var5 = var2.bind(var4)(var1);
                    var2 = var4.map;
                    var1 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure1_slot17;
                            var4 = var5.has;
                            var3 = var1.type;
                            var3 = var4.bind(var5)(var3);
                            if(!var3) { _fun0018_ip = 81; continue _fun0018 }
case 82:
                            var3 = var1.messageReference;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0018_ip = 81; continue _fun0018 }
case 83:
                            var5 = _closure1_slot8;
                            var3 = var5.getMessageByReference;
                            var1 = var1.messageReference;
                            var1 = var3.bind(var5)(var1);
                            var5 = var1.state;
                            var3 = _closure1_slot9;
                            var3 = var3.LOADED;
                            if(!(var5 === var3)) { _fun0018_ip = 81; continue _fun0018 }
case 84:
                            var3 = var1.message;
                            if(!(var4 != var3)) { _fun0018_ip = 81; continue _fun0018 }
case 85:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 23;
                            var3 = var4[var3];
                            var4 = undefined;
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.hasAttachmentsEmbedsComponentsOrSnapshots;
                            var3 = var1.message;
                            var3 = var5.bind(var6)(var3);
                            if(!var3) { _fun0018_ip = 81; continue _fun0018 }
case 86:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 16;
                            var2 = var5[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.getEnabledHarmTypesForMessage;
                            var2 = var1.message;
                            var3 = var3.bind(var4)(var2);
                            var2 = 0;
                            if(!(var2 === var3)) { _fun0018_ip = 87; continue _fun0018 }
case 81:
                            var2 = undefined;
                            return var2;
case 87:
                            var1 = var1.message;
                            return var1;
                        }
                    };
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.filter;
                    var1 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var4 = var2.bind(var4)(var1);
                    var1 = var4.length;
                    var2 = 0;
                    var6 = var5;
                    if(!(var1 > var2)) { _fun0016_ip = 71; continue _fun0016 }
case 14:
                    var1 = new Array(0);
                    var9 = var1;
                    var8 = var5;
                    var7 = 0;
                    var7 = arraySpread(var9, var8, var7);
                    var9 = var1;
                    var8 = var4;
                    var2 = arraySpread(var9, var8, var7);
                    var6 = var1;
case 71:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var2);
                    var2 = function(arg1, arg2) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            var3 = arg1;
                            var2 = arg2;
                            var4 = var3.id;
                            var1 = var2.id;
                            var1 = var4 === var1;
                            if(!var1) { _fun0019_ip = 19; continue _fun0019 }
case 8:
                            var3 = var3.channel_id;
                            var2 = var2.channel_id;
                            var1 = var3 === var2;
case 19:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var4)(var6, var2);
                    var5 = var2.filter;
                    var3 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hasUnscannedMedia;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var2)(var3);
                    var1 = _closure1_slot27;
                    var2 = var1.bind(var4)(var2);
                    var1 = {};
                    var1['messagesPendingScan'] = var3;
                    var3 = var2.channelLookup;
                    var1['attributesByChannelId'] = var3;
                    var2 = var2.messageLookup;
                    var1['attributesByMessageId'] = var2;
                    return var1;
                }
            };
            var4 = undefined;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var3 = var2.messagesPendingScan;
            var10 = var2.attributesByChannelId;
            var7 = var2.attributesByMessageId;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = 25;
            var5 = var9[var8];
            var6 = var6.bind(var4)(var5);
            var5 = var6.entries;
            var10 = var5.bind(var6)(var10);
            var6 = var10.forEach;
            var5 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var5 = var4().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    var6 = undefined;
                    if(var3) { _fun0020_ip = 38; continue _fun0020 }
case 72:
                    var6 = var5;
case 38:
                    var5 = undefined;
                    if(var3) { _fun0020_ip = 23; continue _fun0020 }
case 73:
                    var7 = var4().value;
                    var4 = var2;
                    var4 = var4 === var1;
                    var5 = undefined;
                    var3 = var4;
                    if(var4) { _fun0020_ip = 23; continue _fun0020 }
case 74:
                    var5 = var7;
                    var3 = var4;
case 23:
                    if(var3) { _fun0020_ip = 75; continue _fun0020 }
case 29:
                    var2.return();
case 75:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackExplicitMediaRedactableMessagedLoaded;
                    var2 = {};
                    var2['channelId'] = var6;
                    var6 = var5.numOfAttachments;
                    var2['numOfAttachments'] = var6;
                    var6 = var5.numOfAttachmentsPendingScan;
                    var2['numOfAttachmentsPendingScan'] = var6;
                    var6 = var5.numOfEmbeds;
                    var2['numOfEmbeds'] = var6;
                    var5 = var5.numOfEmbedsPendingScan;
                    var2['numOfEmbedsPendingScan'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var5 = var6.bind(var10)(var5);
            var6 = _closure1_slot0;
            var5 = 26;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.isEligibleForObscuredMessageLoadExperiment;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0015_ip = 76; continue _fun0015 }
case 77:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var6 = var6.bind(var4)(var5);
            var5 = var6.entries;
            var6 = var5.bind(var6)(var7);
            var5 = var6.forEach;
            var1 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var5 = var4().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    var6 = undefined;
                    if(var3) { _fun0021_ip = 38; continue _fun0021 }
case 72:
                    var6 = var5;
case 38:
                    var5 = undefined;
                    if(var3) { _fun0021_ip = 23; continue _fun0021 }
case 73:
                    var7 = var4().value;
                    var4 = var2;
                    var4 = var4 === var1;
                    var5 = undefined;
                    var3 = var4;
                    if(var4) { _fun0021_ip = 23; continue _fun0021 }
case 74:
                    var5 = var7;
                    var3 = var4;
case 23:
                    if(var3) { _fun0021_ip = 75; continue _fun0021 }
case 29:
                    var2.return();
case 75:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackRedactableMessageLoaded;
                    var2 = {};
                    var2['messageId'] = var6;
                    var6 = var5.channelId;
                    var2['channelId'] = var6;
                    var6 = var5.numOfAttachments;
                    var2['numOfAttachments'] = var6;
                    var6 = var5.numOfGoreAttachments;
                    var2['numOfGoreAttachments'] = var6;
                    var6 = var5.numOfExplicitAttachments;
                    var2['numOfExplicitAttachments'] = var6;
                    var6 = var5.numOfEmbeds;
                    var2['numOfEmbeds'] = var6;
                    var6 = var5.numOfGoreEmbeds;
                    var2['numOfGoreEmbeds'] = var6;
                    var5 = var5.numOfExplicitEmbeds;
                    var2['numOfExplicitEmbeds'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1);
case 76:
            var5 = var3.length;
            var1 = 0;
            var1 = var5 > var1;
            if(!var1) { _fun0015_ip = 88; continue _fun0015 }
case 78:
            var2 = _closure1_slot26;
            var2 = var2.bind(var4)(var3);
            var1 = true;
case 88:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function handleMessageUpdate(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var3 = var2.channel_id;
            var1 = null;
            if(!(var1 != var3)) { _fun0022_ip = 89; continue _fun0022 }
case 90:
            var3 = var2.id;
            if(!(var1 != var3)) { _fun0022_ip = 89; continue _fun0022 }
case 20:
            var3 = var2.author;
            var4 = var1 == var3;
            var5 = undefined;
            var6 = undefined;
            if(var4) { _fun0022_ip = 91; continue _fun0022 }
case 74:
            var6 = var3.id;
case 91:
            var7 = _closure1_slot10;
            var4 = var7.getId;
            var4 = var4.bind(var7)();
            if(!(var6 !== var4)) { _fun0022_ip = 89; continue _fun0022 }
case 92:
            var4 = var2.embeds;
            if(!(var1 == var4)) { _fun0022_ip = 93; continue _fun0022 }
case 94:
            var4 = var2.attachments;
            if(!(var1 == var4)) { _fun0022_ip = 93; continue _fun0022 }
case 95:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 15;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.hasMessageSnapshotsWithAttachmentsOrEmbeds;
            var4 = var4.bind(var6)(var2);
            if(var4) { _fun0022_ip = 93; continue _fun0022 }
case 96:
            var4 = false;
            return var4;
case 93:
            var6 = var2.embeds;
            var7 = var1 == var6;
            var4 = undefined;
            if(var7) { _fun0022_ip = 46; continue _fun0022 }
case 97:
            var4 = var6.length;
case 46:
            var6 = 0;
            if(!(var6 === var4)) { _fun0022_ip = 98; continue _fun0022 }
case 99:
            var7 = var2.attachments;
            var8 = var1 == var7;
            var4 = undefined;
            if(var8) { _fun0022_ip = 100; continue _fun0022 }
case 101:
            var4 = var7.length;
case 100:
            if(!(var6 === var4)) { _fun0022_ip = 98; continue _fun0022 }
case 102:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 15;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.hasMessageSnapshotsWithAttachmentsOrEmbeds;
            var4 = var4.bind(var6)(var2);
            if(var4) { _fun0022_ip = 98; continue _fun0022 }
case 103:
            var4 = false;
            return var4;
case 98:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 16;
            var4 = var4[var6];
            var7 = var7.bind(var5)(var4);
            var4 = var7.hasUnscannedMedia;
            var4 = var4.bind(var7)(var2);
            if(var4) { _fun0022_ip = 104; continue _fun0022 }
case 105:
            var9 = _closure1_slot13;
            var8 = var9.getMessage;
            var7 = var2.channel_id;
            var4 = var2.id;
            var7 = var8.bind(var9)(var7, var4);
            if(!(var1 == var7)) { _fun0022_ip = 106; continue _fun0022 }
case 107:
            var10 = _closure1_slot16;
            var9 = var10.getMessage;
            var8 = var2.id;
            var4 = var2.channel_id;
            var7 = var9.bind(var10)(var8, var4);
case 106:
            if(!(var1 == var7)) { _fun0022_ip = 108; continue _fun0022 }
case 109:
            var10 = _closure1_slot8;
            var9 = var10.getMessage;
            var8 = var2.channel_id;
            var4 = var2.id;
            var8 = var9.bind(var10)(var8, var4);
            var9 = var1 == var8;
            var4 = undefined;
            if(var9) { _fun0022_ip = 110; continue _fun0022 }
case 111:
            var4 = var8.message;
case 110:
            var7 = var4;
case 108:
            var4 = var1 == var7;
            if(var4) { _fun0022_ip = 112; continue _fun0022 }
case 113:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = var11[var6];
            var9 = var10.bind(var5)(var6);
            var8 = var9.hasUnscannedMedia;
            var6 = 27;
            var6 = var11[var6];
            var10 = var10.bind(var5)(var6);
            var6 = var10.updateMessageRecord;
            var6 = var6.bind(var10)(var7, var2);
            var4 = var8.bind(var9)(var6);
case 112:
            if(var4) { _fun0022_ip = 104; continue _fun0022 }
case 114:
            var6 = _closure1_slot24;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.TimeoutCancelSource;
            var4 = var4.UPDATE;
            var4 = var6.bind(var5)(var7, var4);
case 104:
            var6 = _closure1_slot14;
            var4 = var6.getChannelId;
            var7 = var4.bind(var6)();
            var6 = _closure1_slot11;
            var4 = var6.getCurrentSidebarChannelId;
            var6 = var4.bind(var6)(var7);
            var4 = var2.channel_id;
            if(!(var4 !== var7)) { _fun0022_ip = 115; continue _fun0022 }
case 116:
            var4 = var2.channel_id;
            if(!(var4 !== var6)) { _fun0022_ip = 115; continue _fun0022 }
case 117:
            var4 = false;
            return var4;
case 115:
            var7 = _closure1_slot13;
            var6 = var7.getMessage;
            var4 = var2.channel_id;
            var2 = var2.id;
            var2 = var6.bind(var7)(var4, var2);
            var1 = var1 != var2;
            if(!var1) { _fun0022_ip = 118; continue _fun0022 }
case 119:
            var4 = _closure1_slot28;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = {};
            var6 = true;
            var2['isMessageUpdate'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 118:
            return var1;
case 89:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function handleMessageCreate(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channelId;
            var1 = var2.message;
            var3 = var2.optimistic;
            var2 = var2.isPushNotification;
            if(var3) { _fun0023_ip = 120; continue _fun0023 }
case 82:
            if(var2) { _fun0023_ip = 120; continue _fun0023 }
case 19:
            var7 = null;
            if(!(var7 != var6)) { _fun0023_ip = 120; continue _fun0023 }
case 83:
            var2 = var1.author;
            var3 = var7 == var2;
            var4 = undefined;
            var5 = undefined;
            if(var3) { _fun0023_ip = 13; continue _fun0023 }
case 75:
            var5 = var2.id;
case 13:
            var8 = _closure1_slot10;
            var3 = var8.getId;
            var3 = var3.bind(var8)();
            if(!(var5 !== var3)) { _fun0023_ip = 120; continue _fun0023 }
case 31:
            var5 = _closure1_slot14;
            var3 = var5.getChannelId;
            var8 = var3.bind(var5)();
            var5 = _closure1_slot11;
            var3 = var5.getCurrentSidebarChannelId;
            var5 = var3.bind(var5)(var8);
            var9 = _closure1_slot12;
            var3 = var9.getChannel;
            var3 = var3.bind(var9)(var6);
            if(!(var6 !== var8)) { _fun0023_ip = 43; continue _fun0023 }
case 33:
            if(!(var6 === var5)) { _fun0023_ip = 121; continue _fun0023 }
case 43:
            var5 = var7 == var3;
            var6 = undefined;
            if(var5) { _fun0023_ip = 122; continue _fun0023 }
case 123:
            var5 = var3.isPrivate;
            var6 = var5.bind(var3)();
case 122:
            var5 = var7 == var6;
            if(var5) { _fun0023_ip = 48; continue _fun0023 }
case 124:
            var5 = var6;
case 48:
            var8 = var7 == var3;
            var6 = undefined;
            if(var8) { _fun0023_ip = 125; continue _fun0023 }
case 88:
            var6 = var3.memberCount;
case 125:
            var6 = var7 == var6;
            if(var6) { _fun0023_ip = 34; continue _fun0023 }
case 32:
            var8 = var7 == var3;
            var7 = undefined;
            if(var8) { _fun0023_ip = 126; continue _fun0023 }
case 127:
            var7 = var3.memberCount;
case 126:
            var3 = 100;
            var6 = var7 > var3;
case 34:
            var3 = _closure1_slot28;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = {};
            if(!var5) { _fun0023_ip = 128; continue _fun0023 }
case 129:
            var5 = var6;
case 128:
            var1['jitter'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 121:
            var1 = false;
            return var1;
case 120:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function handleMessagesLoad(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messages;
            var1 = null;
            if(!(var1 != var5)) { _fun0024_ip = 130; continue _fun0024 }
case 67:
            if(!(var1 != var4)) { _fun0024_ip = 130; continue _fun0024 }
case 72:
            var3 = _closure1_slot14;
            var1 = var3.getChannelId;
            var1 = var1.bind(var3)();
            var6 = _closure1_slot11;
            var3 = var6.getCurrentSidebarChannelId;
            var3 = var3.bind(var6)(var1);
            var1 = var5 === var1;
            if(var1) { _fun0024_ip = 131; continue _fun0024 }
case 75:
            var1 = var5 === var3;
case 131:
            if(!var1) { _fun0024_ip = 132; continue _fun0024 }
case 3:
            var3 = _closure1_slot28;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 132:
            return var1;
case 130:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function handleSearchMessagesSuccess(arg1) {
        var2 = arg1;
        var4 = var2.data;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var1 = arg1;
                var5 = var1.messages;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 28;
                var3 = var6[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.bind(var1)(var5);
                var3 = _closure1_slot28;
                var2 = 24;
                var2 = var6[var2];
                var4 = var4.bind(var1)(var2);
                var2 = function(arg1, arg2) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var3 = arg1;
                        var2 = arg2;
                        var4 = var3.id;
                        var1 = var2.id;
                        var1 = var4 === var1;
                        if(!var1) { _fun0026_ip = 19; continue _fun0026 }
case 8:
                        var3 = var3.channel_id;
                        var2 = var2.channel_id;
                        var1 = var3 === var2;
case 19:
                        return var1;
                    }
                };
                var2 = var4.bind(var1)(var5, var2);
                var3 = var3.bind(var1)(var2);
                if(var3) { _fun0025_ip = 130; continue _fun0025 }
case 133:
                var3 = _closure2_slot0;
case 130:
                _closure2_slot0 = var3;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function handleLoadPinnedMessages(arg1) {
        var1 = arg1;
        var4 = var1.pins;
        var3 = _closure1_slot28;
        var2 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.message;
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function handleForumPostsLoad(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var8 = var1.threads;
            var _closure2_slot0 = var8;
            var1 = null;
            var1 = var1 != var8;
            if(!var1) { _fun0027_ip = 134; continue _fun0027 }
case 135:
            var6 = _closure1_slot15;
            var2 = var6.getGuildId;
            var2 = var2.bind(var6)();
            var2 = var2 === var5;
            if(!var2) { _fun0027_ip = 39; continue _fun0027 }
case 9:
            var5 = _closure1_slot28;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 25;
            var6 = var6[var4];
            var4 = undefined;
            var7 = var7.bind(var4)(var6);
            var6 = var7.keys;
            var7 = var6.bind(var7)(var8);
            var6 = var7.map;
            var3 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var2[var1];
                var1 = var1.first_message;
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var2 = var5.bind(var4)(var3);
case 39:
            var1 = var2;
case 134:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function handleThreadsLoad(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.firstMessages;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0028_ip = 4; continue _fun0028 }
case 8:
            var5 = _closure1_slot15;
            var2 = var5.getGuildId;
            var2 = var2.bind(var5)();
            var4 = var2 !== var4;
            var2 = !var4;
            if(var4) { _fun0028_ip = 40; continue _fun0028 }
case 21:
            var5 = _closure1_slot28;
            var4 = {};
            var3 = true;
            var4['forceBatchScan'] = var3;
            var3 = undefined;
            var2 = var5.bind(var3)(var6, var4);
case 40:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function handleSidebarViewChannel(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0029_ip = 82; continue _fun0029 }
case 18:
            var3 = _closure1_slot41;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 82:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function handleChannelSelect(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 29;
            var1 = var4[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.isEligibleForSafetyXPHoldoutExperiment;
            var1 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0030_ip = 136; continue _fun0030 }
case 12:
            var6 = _closure1_slot14;
            var2 = var6.getChannelId;
            var2 = var2.bind(var6)();
            var6 = var5 !== var2;
            var2 = !var6;
            if(var6) { _fun0030_ip = 24; continue _fun0030 }
case 133:
            var3 = _closure1_slot41;
            var2 = var3.bind(var4)(var5);
case 24:
            var1 = var2;
case 136:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function handleUserSettingsUpdate(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var2 = arg1;
            var1 = var2.settings;
            var2 = var2.local;
            if(!var2) { _fun0031_ip = 133; continue _fun0031 }
case 137:
            var3 = var1.type;
            var1 = _closure1_slot18;
            var1 = var1.PRELOADED_USER_SETTINGS;
            if(!(var3 === var1)) { _fun0031_ip = 133; continue _fun0031 }
case 27:
            var3 = _closure1_slot14;
            var1 = var3.getChannelId;
            var4 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0031_ip = 4; continue _fun0031 }
case 75:
            var3 = _closure1_slot41;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 4:
            return var1;
case 133:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function handleVoiceChannelChatOpen(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var1 = var1.chatOpen;
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0032_ip = 19; continue _fun0032 }
case 8:
            var3 = _closure1_slot41;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 19:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function maybeScanMessagesForChannelId(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var4 = _closure1_slot13;
            var3 = var4.getMessages;
            var1 = arg1;
            var4 = var3.bind(var4)(var1);
            var3 = var4.length;
            var1 = 0;
            var1 = var1 !== var3;
            if(!var1) { _fun0033_ip = 83; continue _fun0033 }
case 138:
            var3 = _closure1_slot29;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 83:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypesWithLazyLoadedReferences;
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsTypes;
    var _closure1_slot18 = var4;
    var4 = {};
    var _closure1_slot19 = var4;
    var4 = function sendForScanning(arg1, arg2) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var3 = arg1;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0034_ip = 139; continue _fun0034 }
case 7:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var4 = arg2;
            if(var4) { _fun0034_ip = 24; continue _fun0034 }
case 140:
            var5 = var2.sendMessagesForScanning;
            var1 = var3[var1];
            var4 = var1.channel_id;
            var6 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var1 = var6.bind(var3)(var1);
            var1 = var5.bind(var2)(var4, var1);
            _fun0034_ip = 139; continue _fun0034;
case 24:
            var1 = var2.sendMultiChannelMessagesForScanning;
            var1 = var1.bind(var2)(var3);
case 139:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var4 = 30;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function ExplicitMediaManager(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot21;
                var1 = var1.bind(var4)();
                if(var1) { _fun0035_ip = 141; continue _fun0035 }
case 40:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0035_ip = 65; continue _fun0035;
case 141:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 65:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot32;
                var2['LOAD_MESSAGES_SUCCESS'] = var4;
                var4 = _closure1_slot35;
                var2['LOAD_FORUM_POSTS'] = var4;
                var4 = _closure1_slot36;
                var2['LOAD_THREADS_SUCCESS'] = var4;
                var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var4;
                var4 = _closure1_slot37;
                var2['SIDEBAR_VIEW_CHANNEL'] = var4;
                var4 = _closure1_slot31;
                var2['MESSAGE_CREATE'] = var4;
                var4 = _closure1_slot30;
                var2['MESSAGE_UPDATE'] = var4;
                var4 = _closure1_slot23;
                var2['LOGOUT'] = var4;
                var4 = _closure1_slot33;
                var2['SEARCH_MESSAGES_SUCCESS'] = var4;
                var2['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var4;
                var4 = _closure1_slot38;
                var2['CHANNEL_SELECT'] = var4;
                var4 = _closure1_slot34;
                var2['LOAD_PINNED_MESSAGES_SUCCESS'] = var4;
                var4 = _closure1_slot39;
                var2['USER_SETTINGS_PROTO_UPDATE'] = var4;
                var3 = _closure1_slot40;
                var2['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/ExplicitMediaManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 3000;
    var3['MESSAGE_SCAN_TIMEOUT'] = var2;
    var2 = 800;
    var3['MAX_TIMEOUT_FOR_JITTER'] = var2;
    return var1;
})();