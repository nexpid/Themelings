// app/modules/tti_analytics/native/TTIAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot23;
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
            var7 = _closure1_slot23;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var4 = function getDeviceMetadata() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot14;
            var2 = null;
            if(!(var2 == var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 11;
            var7 = var6[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var7);
            var7 = var8.getDeviceModel;
            var7 = var7.bind(var8)();
            var2['device_model'] = var7;
            var7 = var6[var3];
            var8 = var5.bind(var4)(var7);
            var7 = var8.getDeviceBrand;
            var7 = var7.bind(var8)();
            var2['device_brand'] = var7;
            var7 = var6[var3];
            var8 = var5.bind(var4)(var7);
            var7 = var8.getDeviceProduct;
            var7 = var7.bind(var8)();
            var2['device_product'] = var7;
            var7 = var6[var3];
            var8 = var5.bind(var4)(var7);
            var7 = var8.getDeviceManufacturer;
            var7 = var7.bind(var8)();
            var2['device_manufacturer'] = var7;
            var7 = var6[var3];
            var8 = var5.bind(var4)(var7);
            var7 = var8.getSmallestScreenWidth;
            var7 = var7.bind(var8)();
            var2['smallest_screen_width'] = var7;
            var8 = _closure1_slot1;
            var7 = 12;
            var7 = var6[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var2['device_performance_class'] = var7;
            var7 = var6[var3];
            var8 = var5.bind(var4)(var7);
            var7 = var8.getSocName;
            var7 = var7.bind(var8)();
            var2['soc_name'] = var7;
            var7 = var6[var3];
            var8 = var5.bind(var4)(var7);
            var7 = var8.getRamSize;
            var7 = var7.bind(var8)();
            var2['ram_size'] = var7;
            var3 = var6[var3];
            var4 = var5.bind(var4)(var3);
            var3 = var4.getMaxCpuFreq;
            var3 = var3.bind(var4)();
            var2['max_cpu_freq'] = var3;
            _closure1_slot14 = var2;
case 36:
            var1 = _closure1_slot14;
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var1 = function getRedesignScreenName() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var1 = var2[var1];
            var2 = undefined;
            var4 = var4.bind(var2)(var1);
            var1 = var4.getRootNavigationRef;
            var6 = var1.bind(var4)();
            var1 = null;
            var5 = var1 != var6;
            var4 = undefined;
            if(!var5) { _fun0005_ip = 38; continue _fun0005 }
case 2:
            var5 = var6.isReady;
            var5 = var5.bind(var6)();
            var4 = undefined;
            if(!var5) { _fun0005_ip = 38; continue _fun0005 }
case 7:
            var5 = var6.getCurrentRoute;
            var4 = var5.bind(var6)();
case 38:
            if(!(var1 != var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 16;
            var5 = var7[var5];
            var7 = var6.bind(var2)(var5);
            var6 = var7.isModalOpen;
            var5 = _closure1_slot11;
            var5 = var6.bind(var7)(var5);
            if(var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var6 = var4.name;
            var4 = var4.params;
            var5 = var1 == var4;
            var2 = undefined;
            if(var5) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var2 = var4.channelId;
case 43:
            var4 = 'channel';
            if(!(var4 === var6)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            if(!(var1 == var2)) { _fun0005_ip = 47; continue _fun0005 }
case 45:
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = 'redesign-';
            var4 = var5.bind(var4)(var6);
            return var4;
case 47:
            var5 = _closure1_slot12;
            var4 = var5.has;
            var4 = var4.bind(var5)(var2);
            if(var4) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var9 = var3.bind(var4)(var2);
            var4 = var1 != var9;
            var3 = 'unknown-channel';
            if(!var4) { _fun0005_ip = 6; continue _fun0005 }
case 50:
            var4 = var9.isThread;
            var5 = var4.bind(var9)();
            var4 = 'thread';
            if(var5) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var5 = var9.isPrivate;
            var6 = var5.bind(var9)();
            var5 = 'private_channel';
            if(var6) { _fun0005_ip = 53; continue _fun0005 }
case 24:
            var6 = var9.isGuildVocal;
            var7 = var6.bind(var9)();
            var6 = 'guild-voice';
            if(var7) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var7 = var9.isForumLikeChannel;
            var8 = var7.bind(var9)();
            var7 = 'guild-forum';
            if(var8) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var8 = var9.isDirectory;
            var9 = var8.bind(var9)();
            var8 = 'guild-text';
            if(!var9) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var8 = 'guild-directory';
case 58:
            var7 = var8;
case 56:
            var6 = var7;
case 54:
            var5 = var6;
case 53:
            var4 = var5;
case 51:
            var3 = var4;
case 6:
            return var3;
case 48:
            return var2;
case 41:
            var2 = 'invite';
            return var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function sharedProperties(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = {};
            var2 = _closure1_slot15;
            var1['load_id'] = var2;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var4 = var2.bind(var4)();
            var2 = arg3;
            var2 = var4 - var2;
            var1['duration_ms_since_app_opened'] = var2;
            var2 = arg1;
            var1['screen_name'] = var2;
            var2 = arg2;
            var1['has_cached_data'] = var2;
            var2 = _closure1_slot16;
            var4 = var2.length;
            var2 = 0;
            var4 = var4 > var2;
            var2 = null;
            if(!var4) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var2 = _closure1_slot16;
case 60:
            var1['manifest'] = var2;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _trackAppUIViewedAsync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var2 = arg3;
                    var _closure4_slot2 = var2;
                    var3 = undefined;
                    var _closure4_slot3 = var3;
                    var _closure4_slot4 = var3;
                    var5 = global;
                    var6 = var5.Date;
                    var2 = var6.now;
                    var8 = var2.bind(var6)();
                    _closure4_slot3 = var8;
                    var9 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 21;
                    var2 = var2[var7];
                    var9 = var9.bind(var3)(var2);
                    var2 = var9.getAppFirstVisibleTimestamp;
                    var2 = var2.bind(var9)();
                    SaveGenerator(address=101);
case 64:
                    return var2;
case 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                    if(var9) { _fun0007_ip = 66; continue _fun0007 }
case 13:
                    _closure4_slot4 = var2;
                    var8 = var8 - var2;
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = var9[var7];
                    var11 = var10.bind(var3)(var7);
                    var7 = var11.reportFullyDrawn;
                    var7 = var7.bind(var11)();
                    var7 = 17;
                    var11 = var9[var7];
                    var14 = var10.bind(var3)(var11);
                    var13 = var14.mark;
                    var12 = '❗';
                    var11 = 'Track app_ui_viewed';
                    var11 = var13.bind(var14)(var12, var11);
                    var11 = var9[var7];
                    var13 = var10.bind(var3)(var11);
                    var12 = var13.addDetail;
                    var11 = 'TTI';
                    var11 = var12.bind(var13)(var11, var8);
                    var7 = var9[var7];
                    var12 = var10.bind(var3)(var7);
                    var11 = var12.markAt;
                    var10 = '🏃';
                    var7 = 'app_opened';
                    var7 = var11.bind(var12)(var10, var7, var2);
                    var7 = _closure1_slot0;
                    var6 = 22;
                    var6 = var9[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.ttiRecorded;
                    var6 = var6.bind(var7)(var8);
                    var7 = var5.setTimeout;
                    var6 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure4_slot0;
                            var2 = null;
                            var2 = var2 != var3;
                            var7 = 'unknownn';
                            if(!var2) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                            var7 = _closure4_slot0;
case 67:
                            var11 = _closure4_slot1;
                            var10 = _closure4_slot2;
                            var9 = _closure4_slot3;
                            var8 = _closure4_slot4;
                            var2 = function logLegacyAppUiViewed() {
                                var1 = undefined;
                                var4 = _closure1_slot28;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            var1 = undefined;
                            var13 = undefined;
                            var12 = var7;
                            var2 = var13[var2](var12, var11, var10, var9, var8, var7);
                            var2 = !var2;
                            return var1;
                        }
                    };
                    var5 = 1000;
                    var5 = var7.bind(var3)(var6, var5);
                    var4 = function scheduleTrackAppUiViewed2() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var3 = _closure1_slot20;
                            var1 = null;
                            if(!(var1 == var3)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                            var1 = global;
                            var8 = var1.setTimeout;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 24;
                            var3 = var5[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.Millis;
                            var7 = var3.SECOND;
                            var3 = 15;
                            var7 = var3 * var7;
                            var3 = function() {
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 23;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var4.bind(var1)(var2);
                                var4 = var5.setTTICallback;
                                var2 = function() {
                                    var1 = true;
                                    return var1;
                                };
                                var2 = var4.bind(var5)(var2);
                                var2 = _closure1_slot29;
                                var2 = var2.bind(var1)();
                                var2 = null;
                                _closure1_slot20 = var2;
                                return var1;
                            };
                            var3 = var8.bind(var1)(var3, var7);
                            _closure1_slot20 = var3;
                            var3 = 23;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.setTTICallback;
                            var2 = function() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    var1 = _closure1_slot25;
                                    var5 = undefined;
                                    var6 = var1.bind(var5)();
                                    var8 = null;
                                    var1 = var8 == var6;
                                    var2 = false;
                                    if(var1) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                                    var7 = _closure1_slot19;
                                    var1 = var7.has;
                                    var1 = var1.bind(var7)(var6);
                                    if(!var1) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                                    var7 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var1 = 23;
                                    var1 = var9[var1];
                                    var1 = var7.bind(var5)(var1);
                                    var7 = var1.readySupplemental;
                                    var1 = var7.hasData;
                                    var1 = var1.bind(var7)();
                                    var2 = false;
                                    if(!var1) { _fun0010_ip = 71; continue _fun0010 }
case 73:
                                    var4 = _closure1_slot18;
                                    var1 = var4.has;
                                    var1 = var1.bind(var4)(var6);
                                    var2 = true;
                                    if(!var1) { _fun0010_ip = 71; continue _fun0010 }
case 13:
                                    var4 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var10 = 23;
                                    var1 = var1[var10];
                                    var1 = var4.bind(var5)(var1);
                                    var4 = var1.readySupplemental;
                                    var1 = var4.hasData;
                                    var1 = var1.bind(var4)();
                                    var4 = !var1;
                                    var1 = !var4;
                                    if(var4) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                                    var6 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var10];
                                    var4 = var6.bind(var5)(var4);
                                    var6 = var4.firstContentfulPaint;
                                    var4 = var6.hasData;
                                    var4 = var4.bind(var6)();
                                    var6 = !var4;
                                    var4 = !var6;
                                    if(!var6) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                                    var7 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var6 = var6[var10];
                                    var6 = var7.bind(var5)(var6);
                                    var7 = var6.renderLatestMessages;
                                    var6 = var7.hasData;
                                    var6 = var6.bind(var7)();
                                    var7 = !var6;
                                    var6 = !var7;
                                    if(!var7) { _fun0010_ip = 36; continue _fun0010 }
case 79:
                                    var9 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var7 = var7[var10];
                                    var7 = var9.bind(var5)(var7);
                                    var7 = var7.interstitial;
                                    var6 = var8 != var7;
case 36:
                                    var4 = var6;
case 77:
                                    var1 = var4;
case 75:
                                    var2 = var1;
case 71:
                                    var1 = !var2;
                                    var1 = !var1;
                                    if(!var2) { _fun0010_ip = 58; continue _fun0010 }
case 55:
                                    var2 = global;
                                    var4 = var2.clearTimeout;
                                    var3 = _closure1_slot20;
                                    var3 = var4.bind(var5)(var3);
                                    var4 = var2.setTimeout;
                                    var3 = function() {
                                        var2 = _closure1_slot29;
                                        var1 = undefined;
                                        var2 = var2.bind(var1)();
                                        var2 = null;
                                        _closure1_slot20 = var2;
                                        return var1;
                                    };
                                    var2 = 1000;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var1 = true;
case 58:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
case 69:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var4.bind(var3)();
                    return var3;
case 66:
                    return var2;
case 62:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _logLegacyAppUiViewed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var10 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                    var7 = _closure1_slot26;
                    var3 = undefined;
                    var6 = arg1;
                    var5 = arg3;
                    var2 = arg5;
                    var12 = var7.bind(var3)(var6, var5, var2);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 21;
                    var2 = var6[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.getJSBundleTimestamps;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=74);
case 82:
                    return var2;
case 83:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 84; continue _fun0011 }
case 85:
                    var11 = var2.JSBundleLoadedTimestamp;
                    var9 = var2.JSBundleParsedTimestamp;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var8 = var7[var5];
                    var14 = var6.bind(var3)(var8);
                    var13 = var14.markAt;
                    var15 = '🏃';
                    var8 = 'JS Bundle Loaded';
                    var8 = var13.bind(var14)(var15, var8, var11);
                    var8 = var7[var5];
                    var14 = var6.bind(var3)(var8);
                    var13 = var14.mark;
                    var8 = 'app_ui_viewed logged';
                    var8 = var13.bind(var14)(var15, var8);
                    var8 = var7[var5];
                    var15 = var6.bind(var3)(var8);
                    var14 = var15.addDetail;
                    var8 = var10 - var9;
                    var13 = var8 - 0;
                    var8 = 'Since Bundle Parsed';
                    var8 = var14.bind(var15)(var8, var13);
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var5 = global;
                    var13 = var5.Date;
                    var5 = var13.now;
                    var13 = var5.bind(var13)();
                    var5 = 20000;
                    var5 = var13 + var5;
                    var8['endTime'] = var5;
                    var5 = 19;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot10;
                    var6 = var5.APP_UI_VIEWED;
                    var5 = {};
                    var18 = var5;
                    var17 = var12;
                    var12 = copyDataProperties(var18, var17);
                    var12 = _closure1_slot24;
                    var17 = var12.bind(var3)();
                    var18 = var5;
                    var12 = copyDataProperties(var18, var17);
                    var12 = var10 - var11;
                    var11 = 'duration_ms_since_required_js_bundle_loaded';
                    var5[10] = var12;
                    var10 = var10 - var9;
                    var9 = 'duration_ms_since_required_js_bundle_parsed';
                    var5[8] = var10;
                    var4 = _closure1_slot6;
                    var9 = var4.theme;
                    var4 = 'theme';
                    var5[3] = var9;
                    var17 = arg2;
                    var18 = var5;
                    var4 = copyDataProperties(var18, var17);
                    var4 = {};
                    var9 = true;
                    var4['logEventProperties'] = var9;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    return var3;
case 84:
                    return var2;
case 80:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function trackAppUIViewed2() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _trackAppUIViewed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 86; continue _fun0012 }
case 63:
                    var4 = undefined;
                    var _closure4_slot0 = var4;
                    var _closure4_slot1 = var4;
                    var2 = _closure1_slot25;
                    var2 = var2.bind(var4)();
                    var10 = null;
                    var3 = var10 != var2;
                    var13 = 'unknown';
                    if(!var3) { _fun0012_ip = 5; continue _fun0012 }
case 2:
                    var13 = var2;
case 5:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var2 = var6[var2];
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.AppStartInfo;
                    var2 = var3.getAppStartInfo;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=89);
case 87:
                    return var2;
case 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                    var3 = var2.appCreatedTime;
                    _closure4_slot0 = var3;
                    var15 = var2.appFirstVisibleTime;
                    var8 = var2.extraProperties;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var9 = 21;
                    var3 = var3[var9];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.getAllNativeTimestamps;
                    var11 = var3.bind(var6)();
                    var6 = var11.then;
                    var3 = function(arg1) {
                        var5 = arg1;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 17;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var6 = var2.logGroups;
                        var2 = 0;
                        var2 = var6[var2];
                        var2['nativeLogs'] = var5;
                        var2 = 23;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.processNativeLogs;
                        var2 = _closure4_slot0;
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    };
                    var3 = var6.bind(var11)(var3);
                    SaveGenerator(address=171);
case 17:
                    return var3;
case 90:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0012_ip = 91; continue _fun0012 }
case 92:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 25;
                    var6 = var12[var6];
                    var11 = var11.bind(var4)(var6);
                    var6 = var11.getCumulativeCPUUsage;
                    var11 = var6.bind(var11)();
                    var12 = var10 == var11;
                    var6 = undefined;
                    if(var12) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                    var6 = var11.usage;
case 93:
                    var11 = var10 != var6;
                    var12 = null;
                    if(!var11) { _fun0012_ip = 95; continue _fun0012 }
case 21:
                    var12 = var6;
case 95:
                    var6 = {};
                    var11 = _closure1_slot24;
                    var17 = var11.bind(var4)();
                    var18 = var6;
                    var11 = copyDataProperties(var18, var17);
                    if(!(var10 == var8)) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                    var8 = {};
case 96:
                    var18 = var6;
                    var17 = var8;
                    var8 = copyDataProperties(var18, var17);
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 23;
                    var8 = var11[var8];
                    var14 = var10.bind(var4)(var8);
                    var8 = var14.serializeTTITracker;
                    var17 = var8.bind(var14)(var15);
                    var18 = var6;
                    var8 = copyDataProperties(var18, var17);
                    var14 = _closure1_slot15;
                    var8 = 'load_id';
                    var6[7] = var14;
                    var8 = 'screen_name';
                    var6[7] = var13;
                    var13 = _closure1_slot4;
                    var8 = var13.hasCache;
                    var13 = var8.bind(var13)();
                    var8 = 'has_cached_data';
                    var6[7] = var13;
                    var8 = 'startup_cpu_usage_cumulative';
                    var6[7] = var12;
                    var8 = _closure1_slot6;
                    var12 = var8.theme;
                    var8 = 'theme';
                    var6[7] = var12;
                    _closure4_slot1 = var6;
                    var8 = 17;
                    var8 = var11[var8];
                    var14 = var10.bind(var4)(var8);
                    var13 = var14.mark;
                    var12 = '❗';
                    var8 = 'Track app_ui_viewed2';
                    var8 = var13.bind(var14)(var12, var8);
                    var8 = 19;
                    var8 = var11[var8];
                    var12 = var10.bind(var4)(var8);
                    var11 = var12.track;
                    var8 = _closure1_slot10;
                    var10 = var8.APP_UI_VIEWED2;
                    var8 = {};
                    var13 = true;
                    var8['logEventProperties'] = var13;
                    var8 = var11.bind(var12)(var10, var6, var8);
                    _closure1_slot21 = var6;
                    var8 = _closure1_slot9;
                    var8 = var8.alertStartupMetrics;
                    if(!var8) { _fun0012_ip = 98; continue _fun0012 }
case 99:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 26;
                    var8 = var11[var8];
                    var11 = var10.bind(var4)(var8);
                    var10 = var11.openLazy;
                    var8 = {};
                    var12 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 28;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 27;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure6_slot0 = var2;
                            var1 = function(arg1) {
                                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                    var4 = _closure1_slot13;
                                    var3 = _closure6_slot0;
                                    var2 = {};
                                    var1 = 'App start times';
                                    var2['title'] = var1;
                                    var5 = _closure4_slot1;
                                    var17 = var5.time_first_contentful_paint;
                                    var5 = _closure4_slot1;
                                    var16 = var5.time_before_js_bundle_start;
                                    var5 = _closure4_slot1;
                                    var15 = var5.android_time_creation_to_create_main_activity;
                                    var5 = _closure4_slot1;
                                    var14 = var5.app_start_type;
                                    var5 = _closure4_slot1;
                                    var5 = var5.app_launch_scenario;
                                    var6 = null;
                                    var6 = var6 != var5;
                                    var13 = '-';
                                    if(!var6) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                                    var13 = var5;
case 100:
                                    var1 = _closure4_slot1;
                                    var19 = var1.time_display_messages_with_cache_end;
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var11 = var1.concat;
                                    var30 = '\nFirstContentfulPaint (TTI): ';
                                    var28 = 'ms\n  • App start → JS bundle start: ';
                                    var26 = 'ms\n  • MainAppl. → MainActivity start: ';
                                    var24 = 'ms\n    • Start type: ';
                                    var22 = '\n    • Launch scenario: ';
                                    var20 = '\n(legacy) Cached msg render: ';
                                    var18 = 'ms\n              ';
                                    var29 = var17;
                                    var27 = var16;
                                    var25 = var15;
                                    var23 = var14;
                                    var21 = var13;
                                    var5 = var30[var11](var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
                                    var1 = var5.trimStart;
                                    var1 = var1.bind(var5)();
                                    var2['body'] = var1;
                                    var28 = arg1;
                                    var29 = var2;
                                    var1 = copyDataProperties(var29, var28);
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var3, var2);
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var8['importer'] = var12;
                    var8 = var10.bind(var11)(var8);
case 98:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.runningTTIAutomation;
                    var7 = var7.bind(var8)();
                    if(!var7) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                    var5 = function logToDevice(arg1) {
                        var7 = {};
                        var10 = arg1;
                        var11 = var7;
                        var1 = copyDataProperties(var11, var10);
                        var3 = global;
                        var2 = var3.Date;
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var1 = 'logged_at';
                        var7[0] = var2;
                        var5 = _closure1_slot7;
                        var1 = var5.getId;
                        var5 = var1.bind(var5)();
                        var1 = 'user_id';
                        var7[0] = var5;
                        var5 = var3.Date;
                        var1 = var5.now;
                        var5 = var1.bind(var5)();
                        var _closure5_slot0 = var5;
                        var6 = _closure1_slot31;
                        var1 = undefined;
                        var9 = var6.bind(var1)(var7);
                        var8 = var9.forEach;
                        var7 = function(arg1) {
                            var1 = global;
                            var3 = var1.JSON;
                            var2 = var3.stringify;
                            var1 = {};
                            var6 = arg1;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var5 = 'app_ui_viewed';
                            var4 = 'type';
                            var1[3] = var5;
                            var5 = _closure5_slot0;
                            var4 = 'batch_id';
                            var1[3] = var5;
                            var4 = var2.bind(var3)(var1);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.logToDevice;
                            var2 = var2.bind(var3)(var4);
                            return var1;
                        };
                        var7 = var8.bind(var9)(var7);
                        var5 = var5 + 1;
                        _closure5_slot0 = var5;
                        var7 = _closure1_slot5;
                        var5 = var7.getAllExperimentAssignments;
                        var5 = var5.bind(var7)();
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.forEach;
                        var4 = function(arg1) {
                            var1 = global;
                            var3 = var1.JSON;
                            var2 = var3.stringify;
                            var1 = {};
                            var6 = arg1;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var5 = _closure5_slot0;
                            var4 = 'batch_id';
                            var1[3] = var5;
                            var5 = 'experiments';
                            var4 = 'type';
                            var1[3] = var5;
                            var4 = var2.bind(var3)(var1);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.logToDevice;
                            var2 = var2.bind(var3)(var4);
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
                        var5 = var3.JSON;
                        var4 = var5.stringify;
                        var3 = {};
                        var6 = 'finished';
                        var3['type'] = var6;
                        var7 = var4.bind(var5)(var3);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 21;
                        var5 = var4[var2];
                        var6 = var3.bind(var1)(var5);
                        var5 = var6.logToDevice;
                        var5 = var5.bind(var6)(var7);
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.trackTTILogged;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var5 = var5.bind(var4)(var6);
case 102:
                    return var4;
case 91:
                    return var3;
case 88:
                    return var2;
case 86:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function batchKeys(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var8 = arg1;
            var1 = global;
            var2 = var1.Object;
            var1 = var2.keys;
            var7 = var1.bind(var2)(var8);
            var1 = new Array(0);
            var2 = var7.length;
            var6 = 0;
            var2 = var6 < var2;
            var4 = 10;
            var3 = undefined;
            if(!var2) { _fun0014_ip = 104; continue _fun0014 }
case 105:
            var10 = {};
            var11 = _closure1_slot22;
            var2 = var7.slice;
            var9 = var6 + var4;
            var2 = var2.bind(var7)(var6, var9);
            var12 = var11.bind(var3)(var2);
            var11 = var12.bind(var3)();
            var2 = var11.done;
            if(var2) { _fun0014_ip = 106; continue _fun0014 }
case 61:
            var13 = var11.value;
            var2 = var8[var13];
            var10[var13] = var2;
            var13 = var12.bind(var3)();
            var2 = var13.done;
            var11 = var13;
            if(!var2) { _fun0014_ip = 61; continue _fun0014 }
case 106:
            var2 = var1.push;
            var2 = var2.bind(var1)(var10);
            var2 = var7.length;
            var6 = var9;
            if(var6 < var2) { _fun0014_ip = 105; continue _fun0014 }
case 104:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function _trackAppLaunchCompletedAsync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 107; continue _fun0015 }
case 108:
                    var7 = _closure1_slot26;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.getAppFirstVisibleTimestamp;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=50);
case 109:
                    return var2;
case 110:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0015_ip = 111; continue _fun0015 }
case 28:
                    var6 = arg1;
                    var5 = arg2;
                    var8 = var7.bind(var3)(var6, var5, var2);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.track;
                    var4 = _closure1_slot10;
                    var5 = var4.APP_LAUNCH_COMPLETED;
                    var4 = {};
                    var9 = true;
                    var4['logEventProperties'] = var9;
                    var4 = var6.bind(var7)(var5, var8, var4);
                    return var3;
case 111:
                    return var2;
case 107:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var8 = global;
    var11 = var8.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.StaticChannelRoutes;
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot13 = var5;
    var5 = null;
    var _closure1_slot14 = var5;
    var9 = 13;
    var9 = var7[var9];
    var10 = var6.bind(var1)(var9);
    var9 = var10.v4;
    var9 = var9.bind(var10)();
    var _closure1_slot15 = var9;
    var9 = 14;
    var10 = var7[var9];
    var9 = metroImportAll;
    var10 = var9.bind(var1)(var10);
    var9 = var10.getConstants;
    var9 = var9.bind(var10)();
    var9 = var9.Manifest;
    var _closure1_slot16 = var9;
    var9 = false;
    var _closure1_slot17 = var9;
    var11 = var8.Set;
    var9 = var11.prototype;
    var10 = Object.create(var9, {constructor: {value: var11}});
    var14 = ['private_channel', 'guild-forum', 'guild-directory', 'guild-text', 'thread', 'redesign-guilds', 'redesign-messages'];
    var15 = var10;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot18 = var9;
    var10 = var8.Set;
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var14 = ['friends_list', 'guild-voice', 'redesign-guild-voice', 'unknown-channel', 'redesign-unknown-channel', 'channel-list', 'other'];
    var15 = var9;
    var8 = new var15[var10](var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot19 = var8;
    var _closure1_slot20 = var5;
    var _closure1_slot21 = var5;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/tti_analytics/native/TTIAnalyticsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getDeviceMetadata'] = var4;
    var4 = function currentLoadId() {
        var1 = _closure1_slot15;
        return var1;
    };
    var3['currentLoadId'] = var4;
    var4 = function trackAppOpened(arg1) {
        var8 = arg1;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 17;
        var3 = var5[var1];
        var1 = undefined;
        var9 = var4.bind(var1)(var3);
        var7 = var9.mark;
        var6 = '🏃';
        var3 = 'Track app_opened';
        var3 = var7.bind(var9)(var6, var3);
        var3 = 18;
        var3 = var5[var3];
        var7 = var4.bind(var1)(var3);
        var6 = var7.addBreadcrumb;
        var3 = {'category': 'lifecycle', 'message': 'App opened'};
        var9 = {};
        var9['openFrom'] = var8;
        var3['data'] = var9;
        var3 = var6.bind(var7)(var3);
        var3 = 19;
        var3 = var5[var3];
        var6 = var4.bind(var1)(var3);
        var5 = var6.track;
        var3 = _closure1_slot10;
        var4 = var3.APP_OPENED;
        var3 = {};
        var7 = _closure1_slot24;
        var12 = var7.bind(var1)();
        var13 = var3;
        var7 = copyDataProperties(var13, var12);
        var7 = 'opened_from';
        var3[6] = var8;
        var8 = _closure1_slot15;
        var7 = 'load_id';
        var3[6] = var8;
        var2 = _closure1_slot6;
        var7 = var2.theme;
        var2 = 'theme';
        var3[1] = var7;
        var2 = {};
        var7 = true;
        var2['logEventProperties'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['trackAppOpened'] = var4;
    var4 = function trackAppUIViewed() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var5 = arguments[0];
            var4 = arguments[1];
            var3 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0016_ip = 67; continue _fun0016 }
case 70:
            var2 = _closure1_slot25;
            var5 = var2.bind(var1)();
case 67:
            if(!(var4 === var1)) { _fun0016_ip = 112; continue _fun0016 }
case 3:
            var4 = {};
case 112:
            if(!(var3 === var1)) { _fun0016_ip = 113; continue _fun0016 }
case 114:
            var6 = _closure1_slot4;
            var2 = var6.hasCache;
            var3 = var2.bind(var6)();
case 113:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var6 = var2.AppStartInfo;
            var2 = var6.getAppUIViewed;
            var2 = var2.bind(var6)();
            if(var2) { _fun0016_ip = 69; continue _fun0016 }
case 100:
            var2 = function trackAppUIViewedAsync() {
                var1 = undefined;
                var4 = _closure1_slot27;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var2.bind(var1)(var5, var4, var3);
case 69:
            return var1;
        }
    };
    var3['trackAppUIViewed'] = var4;
    var4 = function getLastTrackedAppUiViewed2Properties() {
        var1 = _closure1_slot21;
        return var1;
    };
    var3['getLastTrackedAppUiViewed2Properties'] = var4;
    var2 = function trackAppLaunchCompleted() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arguments[0];
            var4 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0017_ip = 31; continue _fun0017 }
case 63:
            var3 = _closure1_slot25;
            var2 = var3.bind(var1)();
case 31:
            if(!(var4 === var1)) { _fun0017_ip = 74; continue _fun0017 }
case 72:
            var5 = _closure1_slot4;
            var3 = var5.hasCache;
            var4 = var3.bind(var5)();
case 74:
            var3 = _closure1_slot17;
            if(var3) { _fun0017_ip = 115; continue _fun0017 }
case 116:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 17;
            var3 = var7[var3];
            var8 = var6.bind(var1)(var3);
            var7 = var8.mark;
            var6 = '🏃';
            var3 = 'Track app_launch';
            var3 = var7.bind(var8)(var6, var3);
            var3 = true;
            _closure1_slot17 = var3;
            var3 = null;
            var5 = var3 != var2;
            var3 = 'unknown';
            if(!var5) { _fun0017_ip = 117; continue _fun0017 }
case 118:
            var3 = var2;
case 117:
            var2 = function trackAppLaunchCompletedAsync() {
                var1 = undefined;
                var4 = _closure1_slot32;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var2.bind(var1)(var3, var4);
case 115:
            return var1;
        }
    };
    var3['trackAppLaunchCompleted'] = var2;
    return var1;
})();