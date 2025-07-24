// app/modules/tti_analytics/native/TTIAnalyticsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot23;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot23;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var4 = function getDeviceMetadata() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot15;
            var2 = null;
            if(!(var2 == var3)) { _fun0004_ip = 266; continue _fun0004 }
 16:
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
            _closure1_slot15 = var2;
 266:
            var1 = _closure1_slot15;
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var1 = function getRedesignScreenName() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.getRootNavigationRef;
            var5 = var1.bind(var2)();
            var1 = null;
            var3 = var1 != var5;
            var2 = undefined;
            if(!var3) { _fun0005_ip = 71; continue _fun0005 }
 46:
            var3 = var5.isReady;
            var3 = var3.bind(var5)();
            var2 = undefined;
            if(!var3) { _fun0005_ip = 71; continue _fun0005 }
 61:
            var3 = var5.getCurrentRoute;
            var2 = var3.bind(var5)();
 71:
            if(!(var1 != var2)) { _fun0005_ip = 807; continue _fun0005 }
 78:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 16;
            var3 = var3[var8];
            var6 = var5.bind(var7)(var3);
            var5 = var6.isModalOpen;
            var3 = _closure1_slot13;
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0005_ip = 801; continue _fun0005 }
 119:
            var5 = var2.name;
            var3 = 'panels';
            if(!(var3 !== var5)) { _fun0005_ip = 365; continue _fun0005 }
 137:
            var6 = var2.name;
            var3 = var2.params;
            var5 = var1 == var3;
            var2 = undefined;
            if(var5) { _fun0005_ip = 162; continue _fun0005 }
 157:
            var2 = var3.channelId;
 162:
            var3 = 'channel';
            if(!(var3 === var6)) { _fun0005_ip = 174; continue _fun0005 }
 170:
            if(!(var1 == var2)) { _fun0005_ip = 200; continue _fun0005 }
 174:
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var3 = 'redesign-';
            var3 = var5.bind(var3)(var6);
            return var3;
 200:
            var5 = _closure1_slot14;
            var3 = var5.has;
            var3 = var3.bind(var5)(var2);
            if(var3) { _fun0005_ip = 363; continue _fun0005 }
 220:
            var5 = _closure1_slot9;
            var3 = var5.getChannel;
            var12 = var3.bind(var5)(var2);
            var5 = var1 != var12;
            var3 = 'unknown-channel';
            if(!var5) { _fun0005_ip = 361; continue _fun0005 }
 247:
            var5 = var12.isThread;
            var6 = var5.bind(var12)();
            var5 = 'thread';
            if(var6) { _fun0005_ip = 358; continue _fun0005 }
 264:
            var6 = var12.isPrivate;
            var9 = var6.bind(var12)();
            var6 = 'private_channel';
            if(var9) { _fun0005_ip = 355; continue _fun0005 }
 283:
            var9 = var12.isGuildVocal;
            var10 = var9.bind(var12)();
            var9 = 'guild-voice';
            if(var10) { _fun0005_ip = 352; continue _fun0005 }
 302:
            var10 = var12.isForumLikeChannel;
            var11 = var10.bind(var12)();
            var10 = 'guild-forum';
            if(var11) { _fun0005_ip = 349; continue _fun0005 }
 321:
            var11 = var12.isDirectory;
            var12 = var11.bind(var12)();
            var11 = 'guild-text';
            if(!var12) { _fun0005_ip = 346; continue _fun0005 }
 340:
            var11 = 'guild-directory';
 346:
            var10 = var11;
 349:
            var9 = var10;
 352:
            var6 = var9;
 355:
            var5 = var6;
 358:
            var3 = var5;
 361:
            return var3;
 363:
            return var2;
 365:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.getHistory;
            var2 = var2.bind(var3)();
            var2 = var2.location;
            var2 = var2.pathname;
            var3 = _closure1_slot12;
            var3 = var3.INDEX;
            if(!(var2 === var3)) { _fun0005_ip = 430; continue _fun0005 }
 420:
            var3 = _closure1_slot10;
            var2 = var3.defaultRoute;
 430:
            var5 = var2.startsWith;
            var3 = _closure1_slot12;
            var3 = var3.LOGIN;
            var3 = var5.bind(var2)(var3);
            var5 = 'app_landing';
            var6 = var2;
            var2 = var5;
            if(var3) { _fun0005_ip = 799; continue _fun0005 }
 469:
            var9 = var6.startsWith;
            var3 = _closure1_slot12;
            var3 = var3.REGISTER;
            var3 = var9.bind(var6)(var3);
            var2 = var5;
            if(var3) { _fun0005_ip = 799; continue _fun0005 }
 499:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var8 = var5.bind(var7)(var3);
            var5 = var8.isModalOpen;
            var3 = _closure1_slot13;
            var3 = var5.bind(var8)(var3);
            var2 = 'invite';
            if(var3) { _fun0005_ip = 799; continue _fun0005 }
 541:
            var3 = _closure1_slot12;
            var3 = var3.FRIENDS;
            var2 = 'friends_list';
            if(!(var6 !== var3)) { _fun0005_ip = 799; continue _fun0005 }
 564:
            var5 = var6.startsWith;
            var3 = _closure1_slot12;
            var3 = var3.ME;
            var3 = var5.bind(var6)(var3);
            var2 = 'private_channel';
            if(var3) { _fun0005_ip = 799; continue _fun0005 }
 597:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 17;
            var3 = var8[var3];
            var5 = var5.bind(var7)(var3);
            var3 = var5.tryParseChannelPath;
            var3 = var3.bind(var5)(var6);
            var5 = var1 != var3;
            var2 = 'other';
            if(!var5) { _fun0005_ip = 799; continue _fun0005 }
 642:
            var5 = var3.channelId;
            var5 = var1 != var5;
            var2 = 'channel-list';
            if(!var5) { _fun0005_ip = 799; continue _fun0005 }
 663:
            var7 = _closure1_slot14;
            var6 = var7.has;
            var5 = var3.channelId;
            var5 = var6.bind(var7)(var5);
            if(var5) { _fun0005_ip = 794; continue _fun0005 }
 685:
            var6 = _closure1_slot9;
            var5 = var6.getChannel;
            var4 = var3.channelId;
            var8 = var5.bind(var6)(var4);
            var5 = var1 != var8;
            var4 = 'unknown-channel';
            if(!var5) { _fun0005_ip = 789; continue _fun0005 }
 717:
            var5 = var8.isGuildVocal;
            var6 = var5.bind(var8)();
            var5 = 'guild-voice';
            if(var6) { _fun0005_ip = 786; continue _fun0005 }
 736:
            var6 = var8.isForumLikeChannel;
            var7 = var6.bind(var8)();
            var6 = 'guild-forum';
            if(var7) { _fun0005_ip = 783; continue _fun0005 }
 755:
            var7 = var8.isDirectory;
            var8 = var7.bind(var8)();
            var7 = 'guild-text';
            if(!var8) { _fun0005_ip = 780; continue _fun0005 }
 774:
            var7 = 'guild-directory';
 780:
            var6 = var7;
 783:
            var5 = var6;
 786:
            var4 = var5;
 789:
            var2 = var4;
            _fun0005_ip = 799; continue _fun0005;
 794:
            var2 = var3.channelId;
 799:
            return var2;
 801:
            var2 = 'invite';
            return var2;
 807:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function sharedProperties(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = _closure1_slot4;
            var1 = var1.TTIManager;
            var4 = var1.AppOpenedTimestamp;
            var1 = {};
            var2 = _closure1_slot16;
            var1['load_id'] = var2;
            var2 = global;
            var5 = var2.Date;
            var2 = var5.now;
            var2 = var2.bind(var5)();
            var2 = var2 - var4;
            var1['duration_ms_since_app_opened'] = var2;
            var2 = arg1;
            var1['screen_name'] = var2;
            var2 = arg2;
            var1['has_cached_data'] = var2;
            var2 = _closure1_slot17;
            var4 = var2.length;
            var2 = 0;
            var4 = var4 > var2;
            var2 = null;
            if(!var4) { _fun0006_ip = 102; continue _fun0006 }
 98:
            var2 = _closure1_slot17;
 102:
            var1['manifest'] = var2;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _logLegacyAppUiViewed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var10 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 366; continue _fun0007 }
 13:
                    var6 = _closure1_slot26;
                    var3 = undefined;
                    var5 = arg1;
                    var2 = arg3;
                    var12 = var6.bind(var3)(var5, var2);
                    var2 = _closure1_slot4;
                    var5 = var2.TTIManager;
                    var2 = var5.getJSBundleTimestamps;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=60);
 58:
                    return var2;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 363; continue _fun0007 }
 69:
                    var11 = var2.JSBundleLoadedTimestamp;
                    var9 = var2.JSBundleParsedTimestamp;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 19;
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
                    var5 = 21;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot11;
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
                    var5[var11] = var12;
                    var10 = var10 - var9;
                    var9 = 'duration_ms_since_required_js_bundle_parsed';
                    var5[var9] = var10;
                    var4 = _closure1_slot7;
                    var9 = var4.theme;
                    var4 = 'theme';
                    var5[var4] = var9;
                    var17 = arg2;
                    var18 = var5;
                    var4 = copyDataProperties(var18, var17);
                    var4 = {};
                    var9 = true;
                    var4['logEventProperties'] = var9;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    return var3;
 363:
                    return var2;
 366:
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
    var1 = function trackAppUIViewed2() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function _trackAppUIViewed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 387; continue _fun0008 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var2 = _closure1_slot25;
                    var2 = var2.bind(var3)();
                    var8 = null;
                    var5 = var8 != var2;
                    var6 = 'unknown';
                    if(!var5) { _fun0008_ip = 45; continue _fun0008 }
 42:
                    var6 = var2;
 45:
                    var2 = _closure1_slot4;
                    var2 = var2.TTIManager;
                    var5 = var2.AppOpenedTimestamp;
                    _closure4_slot0 = var5;
                    var2 = _closure1_slot4;
                    var2 = var2.TTIManager;
                    var2 = var2.getAllNativeTimestamps;
                    var9 = var8 == var2;
                    var2 = undefined;
                    if(var9) { _fun0008_ip = 134; continue _fun0008 }
 90:
                    var9 = _closure1_slot4;
                    var10 = var9.TTIManager;
                    var9 = var10.getAllNativeTimestamps;
                    var10 = var9.bind(var10)();
                    var8 = var8 == var10;
                    var2 = undefined;
                    if(var8) { _fun0008_ip = 134; continue _fun0008 }
 119:
                    var9 = var10.then;
                    var8 = function(arg1) {
                        var5 = arg1;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 19;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var6 = var2.logGroups;
                        var2 = 0;
                        var2 = var6[var2];
                        var2['nativeLogs'] = var5;
                        var2 = 24;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.processNativeLogs;
                        var2 = _closure4_slot0;
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    };
                    var2 = var9.bind(var10)(var8);
 134:
                    SaveGenerator(address=138);
 136:
                    return var2;
 138:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 384; continue _fun0008 }
 147:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var8 = 19;
                    var8 = var14[var8];
                    var11 = var13.bind(var3)(var8);
                    var10 = var11.mark;
                    var9 = '❗';
                    var8 = 'Track app_ui_viewed2';
                    var8 = var10.bind(var11)(var9, var8);
                    var8 = 21;
                    var8 = var14[var8];
                    var12 = var13.bind(var3)(var8);
                    var11 = var12.track;
                    var8 = _closure1_slot11;
                    var10 = var8.APP_UI_VIEWED2;
                    var9 = {};
                    var8 = _closure1_slot24;
                    var16 = var8.bind(var3)();
                    var17 = var9;
                    var8 = copyDataProperties(var17, var16);
                    var8 = 24;
                    var8 = var14[var8];
                    var13 = var13.bind(var3)(var8);
                    var8 = var13.serializeTTITracker;
                    var16 = var8.bind(var13)(var5);
                    var17 = var9;
                    var8 = copyDataProperties(var17, var16);
                    var13 = _closure1_slot16;
                    var8 = 'load_id';
                    var9[var8] = var13;
                    var8 = 'screen_name';
                    var9[var8] = var6;
                    var13 = _closure1_slot5;
                    var8 = var13.hasCache;
                    var13 = var8.bind(var13)();
                    var8 = 'has_cached_data';
                    var9[var8] = var13;
                    var8 = _closure1_slot7;
                    var13 = var8.theme;
                    var8 = 'theme';
                    var9[var8] = var13;
                    var8 = {};
                    var13 = true;
                    var8['logEventProperties'] = var13;
                    var8 = var11.bind(var12)(var10, var9, var8);
                    var7 = _closure1_slot4;
                    var8 = var7.TTIManager;
                    var7 = var8.runningTTIAutomation;
                    var7 = var7.bind(var8)();
                    if(!var7) { _fun0008_ip = 381; continue _fun0008 }
 370:
                    var4 = function logToDevice(arg1, arg2) {
                        var7 = {};
                        var3 = _closure1_slot24;
                        var1 = undefined;
                        var10 = var3.bind(var1)();
                        var11 = var7;
                        var3 = copyDataProperties(var11, var10);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 24;
                        var3 = var6[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.serializeTTITracker;
                        var3 = arg1;
                        var10 = var5.bind(var6)(var3);
                        var11 = var7;
                        var3 = copyDataProperties(var11, var10);
                        var5 = _closure1_slot16;
                        var3 = 'load_id';
                        var7[var3] = var5;
                        var5 = arg2;
                        var3 = 'screen_name';
                        var7[var3] = var5;
                        var5 = _closure1_slot5;
                        var3 = var5.hasCache;
                        var5 = var3.bind(var5)();
                        var3 = 'has_cached_data';
                        var7[var3] = var5;
                        var3 = _closure1_slot7;
                        var5 = var3.theme;
                        var3 = 'theme';
                        var7[var3] = var5;
                        var3 = global;
                        var6 = var3.Date;
                        var5 = var6.now;
                        var6 = var5.bind(var6)();
                        var5 = 'logged_at';
                        var7[var5] = var6;
                        var6 = _closure1_slot8;
                        var5 = var6.getId;
                        var6 = var5.bind(var6)();
                        var5 = 'user_id';
                        var7[var5] = var6;
                        var6 = var3.Date;
                        var5 = var6.now;
                        var5 = var5.bind(var6)();
                        var _closure5_slot0 = var5;
                        var6 = _closure1_slot30;
                        var9 = var6.bind(var1)(var7);
                        var8 = var9.forEach;
                        var7 = function(arg1) {
                            var1 = _closure1_slot4;
                            var3 = var1.TTIManager;
                            var2 = var3.logToDevice;
                            var1 = global;
                            var5 = var1.JSON;
                            var4 = var5.stringify;
                            var1 = {};
                            var8 = arg1;
                            var9 = var1;
                            var6 = copyDataProperties(var9, var8);
                            var7 = 'app_ui_viewed';
                            var6 = 'type';
                            var1[var6] = var7;
                            var7 = _closure5_slot0;
                            var6 = 'batch_id';
                            var1[var6] = var7;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var7 = var8.bind(var9)(var7);
                        var5 = var5 + 1;
                        _closure5_slot0 = var5;
                        var7 = _closure1_slot6;
                        var5 = var7.getAllExperimentAssignments;
                        var5 = var5.bind(var7)();
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.forEach;
                        var4 = function(arg1) {
                            var1 = _closure1_slot4;
                            var3 = var1.TTIManager;
                            var2 = var3.logToDevice;
                            var1 = global;
                            var5 = var1.JSON;
                            var4 = var5.stringify;
                            var1 = {};
                            var8 = arg1;
                            var9 = var1;
                            var6 = copyDataProperties(var9, var8);
                            var7 = _closure5_slot0;
                            var6 = 'batch_id';
                            var1[var6] = var7;
                            var7 = 'experiments';
                            var6 = 'type';
                            var1[var6] = var7;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
                        var4 = _closure1_slot4;
                        var5 = var4.TTIManager;
                        var4 = var5.logToDevice;
                        var7 = var3.JSON;
                        var6 = var7.stringify;
                        var3 = {};
                        var8 = 'finished';
                        var3['type'] = var8;
                        var3 = var6.bind(var7)(var3);
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure1_slot4;
                        var3 = var2.TTIManager;
                        var2 = var3.trackTTILogged;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var4 = var4.bind(var3)(var5, var6);
 381:
                    return var3;
 384:
                    return var2;
 387:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function batchKeys(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
            if(!var2) { _fun0009_ip = 135; continue _fun0009 }
 47:
            var10 = {};
            var11 = _closure1_slot22;
            var2 = var7.slice;
            var9 = var6 + var4;
            var2 = var2.bind(var7)(var6, var9);
            var12 = var11.bind(var3)(var2);
            var11 = var12.bind(var3)();
            var2 = var11.done;
            if(var2) { _fun0009_ip = 113; continue _fun0009 }
 85:
            var13 = var11.value;
            var2 = var8[var13];
            var10[var13] = var2;
            var13 = var12.bind(var3)();
            var2 = var13.done;
            var11 = var13;
            if(!var2) { _fun0009_ip = 85; continue _fun0009 }
 113:
            var2 = var1.push;
            var2 = var2.bind(var1)(var10);
            var2 = var7.length;
            var6 = var9;
            if(var6 < var2) { _fun0009_ip = 47; continue _fun0009 }
 135:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.NativeModules;
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.AnalyticEvents;
    var _closure1_slot11 = var9;
    var8 = var8.Routes;
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot13 = var8;
    var8 = 10;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.StaticChannelRoutes;
    var _closure1_slot14 = var8;
    var8 = null;
    var _closure1_slot15 = var8;
    var8 = 13;
    var8 = var7[var8];
    var9 = var6.bind(var1)(var8);
    var8 = var9.v4;
    var8 = var8.bind(var9)();
    var _closure1_slot16 = var8;
    var8 = 14;
    var9 = var7[var8];
    var8 = native4;
    var9 = var8.bind(var1)(var9);
    var8 = var9.getConstants;
    var8 = var8.bind(var9)();
    var8 = var8.Manifest;
    var _closure1_slot17 = var8;
    var8 = false;
    var _closure1_slot18 = var8;
    var _closure1_slot19 = var8;
    var10 = var5.Set;
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var14 = ['private_channel', 'guild-forum', 'guild-directory', 'guild-text', 'thread', 'redesign-guilds', 'redesign-messages'];
    var15 = var9;
    var8 = new var15[var10](var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot20 = var8;
    var9 = var5.Set;
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var14 = ['friends_list', 'guild-voice', 'redesign-guild-voice', 'unknown-channel', 'redesign-unknown-channel', 'channel-list', 'other'];
    var15 = var8;
    var5 = new var15[var9](var14, var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot21 = var5;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/tti_analytics/native/TTIAnalyticsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getDeviceMetadata'] = var4;
    var4 = function currentLoadId() {
        var1 = _closure1_slot16;
        return var1;
    };
    var3['currentLoadId'] = var4;
    var4 = function trackAppOpened(arg1) {
        var8 = arg1;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 19;
        var3 = var5[var1];
        var1 = undefined;
        var9 = var4.bind(var1)(var3);
        var7 = var9.mark;
        var6 = '🏃';
        var3 = 'Track app_opened';
        var3 = var7.bind(var9)(var6, var3);
        var3 = 20;
        var3 = var5[var3];
        var7 = var4.bind(var1)(var3);
        var6 = var7.addBreadcrumb;
        var3 = {'category': 'lifecycle', 'message': 'App opened'};
        var9 = {};
        var9['openFrom'] = var8;
        var3['data'] = var9;
        var3 = var6.bind(var7)(var3);
        var3 = 21;
        var3 = var5[var3];
        var6 = var4.bind(var1)(var3);
        var5 = var6.track;
        var3 = _closure1_slot11;
        var4 = var3.APP_OPENED;
        var3 = {};
        var7 = _closure1_slot24;
        var12 = var7.bind(var1)();
        var13 = var3;
        var7 = copyDataProperties(var13, var12);
        var7 = 'opened_from';
        var3[var7] = var8;
        var8 = _closure1_slot16;
        var7 = 'load_id';
        var3[var7] = var8;
        var2 = _closure1_slot7;
        var7 = var2.theme;
        var2 = 'theme';
        var3[var2] = var7;
        var2 = {};
        var7 = true;
        var2['logEventProperties'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['trackAppOpened'] = var4;
    var4 = function trackAppUIViewed() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arguments[0];
            var4 = arguments[1];
            var3 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0010_ip = 28; continue _fun0010 }
 17:
            var6 = _closure1_slot25;
            var5 = var6.bind(var1)();
 28:
            var _closure2_slot0 = var5;
            if(!(var4 === var1)) { _fun0010_ip = 38; continue _fun0010 }
 36:
            var4 = {};
 38:
            var _closure2_slot1 = var4;
            if(!(var3 === var1)) { _fun0010_ip = 63; continue _fun0010 }
 46:
            var5 = _closure1_slot5;
            var4 = var5.hasCache;
            var3 = var4.bind(var5)();
 63:
            var _closure2_slot2 = var3;
            var _closure2_slot3 = var1;
            var4 = _closure1_slot18;
            if(var4) { _fun0010_ip = 291; continue _fun0010 }
 84:
            var4 = true;
            _closure1_slot18 = var4;
            var4 = _closure1_slot4;
            var4 = var4.TTIManager;
            var11 = var4.AppOpenedTimestamp;
            var4 = global;
            var6 = var4.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            _closure2_slot3 = var5;
            var7 = var5 - var11;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 19;
            var9 = var8[var5];
            var13 = var6.bind(var1)(var9);
            var12 = var13.mark;
            var10 = '❗';
            var9 = 'Track app_ui_viewed';
            var9 = var12.bind(var13)(var10, var9);
            var9 = var8[var5];
            var12 = var6.bind(var1)(var9);
            var10 = var12.addDetail;
            var9 = 'TTI';
            var9 = var10.bind(var12)(var9, var7);
            var5 = var8[var5];
            var10 = var6.bind(var1)(var5);
            var9 = var10.markAt;
            var6 = '🏃';
            var5 = 'app_opened';
            var5 = var9.bind(var10)(var6, var5, var11);
            var6 = _closure1_slot0;
            var5 = 22;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.ttiRecorded;
            var5 = var5.bind(var6)(var7);
            var4 = var4.setTimeout;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 88; continue _fun0011 }
 9:
                        var5 = _closure2_slot0;
                        var3 = null;
                        var3 = var3 != var5;
                        var8 = 'unknownn';
                        if(!var3) { _fun0011_ip = 35; continue _fun0011 }
 31:
                        var8 = _closure2_slot0;
 35:
                        var11 = _closure2_slot1;
                        var10 = _closure2_slot2;
                        var9 = _closure2_slot3;
                        var2 = function logLegacyAppUiViewed() {
                            var1 = undefined;
                            var4 = _closure1_slot27;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var3 = undefined;
                        var13 = undefined;
                        var12 = var8;
                        var2 = var13[var2](var12, var11, var10, var9, var8);
                        SaveGenerator(address=67);
 65:
                        return var2;
 67:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0011_ip = 85; continue _fun0011 }
 73:
                        var4 = function scheduleTrackAppUiViewed2() {
                            var1 = global;
                            var7 = var1.setTimeout;
                            var6 = _closure1_slot28;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 23;
                            var3 = var5[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.Millis;
                            var8 = var3.SECOND;
                            var3 = 15;
                            var3 = var3 * var8;
                            var3 = var7.bind(var1)(var6, var3);
                            var _closure5_slot0 = var3;
                            var3 = 24;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.setTTICallback;
                            var2 = function() {
                                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                    var1 = _closure1_slot25;
                                    var5 = undefined;
                                    var6 = var1.bind(var5)();
                                    var7 = null;
                                    var1 = var7 == var6;
                                    var3 = false;
                                    if(var1) { _fun0012_ip = 227; continue _fun0012 }
 27:
                                    var8 = _closure1_slot21;
                                    var1 = var8.has;
                                    var1 = var1.bind(var8)(var6);
                                    if(!var1) { _fun0012_ip = 88; continue _fun0012 }
 44:
                                    var8 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var1 = 24;
                                    var1 = var9[var1];
                                    var1 = var8.bind(var5)(var1);
                                    var8 = var1.readySupplemental;
                                    var1 = var8.hasData;
                                    var1 = var1.bind(var8)();
                                    var3 = false;
                                    if(!var1) { _fun0012_ip = 227; continue _fun0012 }
 88:
                                    var4 = _closure1_slot20;
                                    var1 = var4.has;
                                    var1 = var1.bind(var4)(var6);
                                    var3 = true;
                                    if(!var1) { _fun0012_ip = 227; continue _fun0012 }
 107:
                                    var4 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var9 = 24;
                                    var1 = var1[var9];
                                    var1 = var4.bind(var5)(var1);
                                    var4 = var1.readySupplemental;
                                    var1 = var4.hasData;
                                    var1 = var1.bind(var4)();
                                    var4 = !var1;
                                    var1 = !var4;
                                    if(var4) { _fun0012_ip = 224; continue _fun0012 }
 152:
                                    var6 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var9];
                                    var4 = var6.bind(var5)(var4);
                                    var6 = var4.renderLatestMessages;
                                    var4 = var6.hasData;
                                    var4 = var4.bind(var6)();
                                    var6 = !var4;
                                    var4 = !var6;
                                    if(!var6) { _fun0012_ip = 221; continue _fun0012 }
 194:
                                    var8 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var6 = var6[var9];
                                    var6 = var8.bind(var5)(var6);
                                    var6 = var6.interstitial;
                                    var4 = var7 != var6;
 221:
                                    var1 = var4;
 224:
                                    var3 = var1;
 227:
                                    var1 = !var3;
                                    var1 = !var1;
                                    if(!var3) { _fun0012_ip = 280; continue _fun0012 }
 236:
                                    var3 = global;
                                    var6 = var3.clearTimeout;
                                    var4 = _closure5_slot0;
                                    var4 = var6.bind(var5)(var4);
                                    var4 = var3.setTimeout;
                                    var3 = _closure1_slot28;
                                    var2 = 500;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var1 = true;
 280:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var4 = var4.bind(var3)();
                        return var3;
 85:
                        return var2;
 88:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var1)(var2);
            var2 = 1000;
            var2 = var4.bind(var1)(var3, var2);
 291:
            return var1;
        }
    };
    var3['trackAppUIViewed'] = var4;
    var2 = function trackAppLaunchCompleted() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var9 = arguments[0];
            var5 = arguments[1];
            var1 = undefined;
            if(!(var9 === var1)) { _fun0013_ip = 23; continue _fun0013 }
 12:
            var2 = _closure1_slot25;
            var9 = var2.bind(var1)();
 23:
            if(!(var5 === var1)) { _fun0013_ip = 44; continue _fun0013 }
 27:
            var3 = _closure1_slot5;
            var2 = var3.hasCache;
            var5 = var2.bind(var3)();
 44:
            var2 = _closure1_slot19;
            if(var2) { _fun0013_ip = 169; continue _fun0013 }
 54:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var10 = var4.bind(var1)(var2);
            var8 = var10.mark;
            var7 = '🏃';
            var2 = 'Track app_launch';
            var2 = var8.bind(var10)(var7, var2);
            var2 = 21;
            var2 = var6[var2];
            var8 = var4.bind(var1)(var2);
            var7 = var8.track;
            var2 = _closure1_slot11;
            var6 = var2.APP_LAUNCH_COMPLETED;
            var4 = _closure1_slot26;
            var2 = null;
            var10 = var2 != var9;
            var2 = 'unknown';
            if(!var10) { _fun0013_ip = 143; continue _fun0013 }
 140:
            var2 = var9;
 143:
            var5 = var4.bind(var1)(var2, var5);
            var4 = {};
            var2 = true;
            var4['logEventProperties'] = var2;
            var4 = var7.bind(var8)(var6, var5, var4);
            _closure1_slot19 = var2;
 169:
            return var1;
        }
    };
    var3['trackAppLaunchCompleted'] = var2;
    return var1;
})();