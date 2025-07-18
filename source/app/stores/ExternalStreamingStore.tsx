// app/stores/ExternalStreamingStore.tsx
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
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function makeTwitchRequest(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var5 = global;
        var4 = var5.HermesInternal;
        var7 = var4.concat;
        var6 = 'https://api.twitch.tv/helix';
        var4 = arg1;
        var4 = var7.bind(var6)(var4);
        var1['url'] = var4;
        var4 = arg2;
        var1['query'] = var4;
        var4 = {};
        var6 = '33kozedd0zs6fbauka98psnc7zwom2s';
        var4['Client-ID'] = var6;
        var5 = var5.HermesInternal;
        var7 = var5.concat;
        var6 = 'Bearer ';
        var5 = arg3;
        var5 = var7.bind(var6)(var5);
        var4['Authorization'] = var5;
        var1['headers'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function _getTwitchGame() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 112; continue _fun0002 }
 10:
                    var2 = _closure1_slot19;
                    var2 = var2[var6];
                    var8 = null;
                    if(!(var8 == var2)) { _fun0002_ip = 109; continue _fun0002 }
 27:
                    var10 = _closure1_slot22;
                    var9 = {};
                    var9['id'] = var6;
                    var4 = undefined;
                    var7 = '/games';
                    var3 = arg2;
                    var3 = var10.bind(var4)(var7, var9, var3);
                    SaveGenerator(address=59);
 57:
                    return var3;
 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 106; continue _fun0002 }
 65:
                    var7 = var3.body;
                    var9 = var7.data;
                    var7 = 0;
                    var7 = var9[var7];
                    var8 = var8 == var7;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 95; continue _fun0002 }
 90:
                    var4 = var7.name;
 95:
                    var5 = _closure1_slot19;
                    var5[var6] = var4;
                    return var4;
 106:
                    return var3;
 109:
                    return var2;
 112:
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
    var1 = function streamerModeUpdate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot10;
            var1 = var1.enabled;
            var2 = _closure1_slot20;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
 19:
            var1 = var2.stop;
            var1 = var1.bind(var2)();
            _fun0003_ip = 40; continue _fun0003;
 31:
            var1 = var2.start;
            var1 = var1.bind(var2)();
 40:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var9 = 0;
    var8 = var6[var9];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var12 = 1;
    var8 = var6[var12];
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
    var10 = 5;
    var8 = var6[var10];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PlatformTypes;
    var _closure1_slot11 = var8;
    var8 = 9;
    var11 = var6[var8];
    var11 = var7.bind(var1)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var12 * var11;
    var _closure1_slot12 = var11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var8 = var10 * var8;
    var _closure1_slot13 = var8;
    var8 = /live_user_(.*)-\{width\}/;
    var _closure1_slot14 = var8;
    var8 = null;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var9;
    var _closure1_slot17 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot18 = var2;
    var2 = {};
    var _closure1_slot19 = var2;
    var2 = function() {
        var4 = _closure1_slot7;
        var3 = function StreamingPoller() {
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = false;
            var3['_started'] = var2;
            return var1;
        };
        var _closure2_slot2 = var3;
        var1 = {};
        var2 = 'start';
        var1['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var1 = var3._started;
                if(var1) { _fun0004_ip = 84; continue _fun0004 }
 12:
                var1 = true;
                var3['_started'] = var1;
                var4 = _closure1_slot9;
                var2 = var4.isFetching;
                var2 = var2.bind(var4)();
                if(var2) { _fun0004_ip = 52; continue _fun0004 }
 40:
                var2 = var3._check;
                var2 = var2.bind(var3)();
                _fun0004_ip = 84; continue _fun0004;
 52:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetch;
                var1 = var1.bind(var2)();
 84:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var5 = 'stop';
        var1['key'] = var5;
        var5 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = false;
                var2['_started'] = var1;
                var4 = null;
                _closure1_slot17 = var4;
                var3 = 0;
                _closure1_slot16 = var3;
                var3 = var2._nextCheck;
                if(!(var4 != var3)) { _fun0005_ip = 57; continue _fun0005 }
 36:
                var3 = global;
                var4 = var3.clearTimeout;
                var3 = var2._nextCheck;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
 57:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {'type': 'STREAMING_UPDATE', 'stream': null};
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var5 = {};
        var1 = '_checkTwitch';
        var5['key'] = var1;
        var9 = _closure1_slot8;
        var1 = undefined;
        var8 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 790; continue _fun0006 }
 18:
                    var9 = this;
                    var _closure4_slot0 = var9;
                    var6 = var4;
                    var _closure4_slot1 = var4;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0006_ip = 40; continue _fun0006 }
 38:
                    var2 = null;
 40:
                    var7 = var2;
                    var24 = undefined;
                    var17 = undefined;
                    var22 = undefined;
                    var20 = undefined;
                    var8 = undefined;
                    var16 = undefined;
                    var13 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var19 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    SaveGenerator(address=71);
 69:
                    return var9;
 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 787; continue _fun0006 }
 80:
                    var3 = var6;
                    var4 = var3.revoked;
                    var3 = null;
                    if(var4) { _fun0006_ip = 784; continue _fun0006 }
 97:
                    var4 = var7;
                    if(!(var3 == var4)) { _fun0006_ip = 115; continue _fun0006 }
 104:
                    var4 = var6;
                    var4 = var4.accessToken;
                    _fun0006_ip = 118; continue _fun0006;
 115:
                    var4 = var7;
 118:
                    var7 = var4;
                    if(!(var3 != var4)) { _fun0006_ip = 781; continue _fun0006 }
 128: // try_start_0
                    var25 = _closure1_slot22;
                    var23 = {};
                    var4 = var6;
                    var4 = var4.id;
                    var23['user_id'] = var4;
                    var21 = 1;
                    var23['first'] = var21;
                    var18 = var7;
                    var4 = '/streams';
                    var4 = var25.bind(var9)(var4, var23, var18);
                    SaveGenerator(address=178);
 176:
                    return var4;
 178:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=17);
                    if(var18) { _fun0006_ip = 671; continue _fun0006 }
 187:
                    var18 = var4.body;
                    var23 = var18.data;
                    var18 = 0;
                    var23 = var23[var18];
                    var22 = var23;
                    if(!(var3 != var23)) { _fun0006_ip = 635; continue _fun0006 }
 213:
                    var23 = var22;
                    var25 = var23.type;
                    var23 = 'live';
                    if(!(var23 === var25)) { _fun0006_ip = 635; continue _fun0006 }
 232:
                    var23 = var22.thumbnail_url;
                    var20 = var23;
                    var8 = var22.game_id;
                    var16 = var22.title;
                    var22 = {};
                    var25 = var3 != var23;
                    var23 = undefined;
                    if(!var25) { _fun0006_ip = 325; continue _fun0006 }
 265:
                    var26 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var25 = 13;
                    var25 = var27[var25];
                    var28 = var26.bind(var9)(var25);
                    var27 = var28.getAssetFromImageURL;
                    var25 = _closure1_slot11;
                    var26 = var25.TWITCH;
                    var25 = var20;
                    var25 = var27.bind(var28)(var26, var25);
                    var24 = var25;
                    var25 = var3 != var25;
                    var23 = undefined;
                    if(!var25) { _fun0006_ip = 325; continue _fun0006 }
 322:
                    var23 = var24;
 325:
                    var22['large_image'] = var23;
                    var13 = var22;
                    var23 = var8;
                    var22 = var7;
                    var8 = function getTwitchGame() {
                        var1 = undefined;
                        var4 = _closure1_slot23;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var8 = var8.bind(var9)(var23, var22);
                    SaveGenerator(address=354);
 352:
                    return var8;
 354:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=21);
                    if(var22) { _fun0006_ip = 632; continue _fun0006 }
 363:
                    var15 = var8;
                    var23 = _closure1_slot1;
                    var24 = _closure1_slot2;
                    var22 = 14;
                    var22 = var24[var22];
                    var24 = var23.bind(var9)(var22);
                    var23 = var24.get;
                    var22 = _closure1_slot11;
                    var22 = var22.TWITCH;
                    var14 = var23.bind(var24)(var22);
                    var22 = var20;
                    var20 = _closure1_slot14;
                    var10 = var20.exec;
                    var20 = var10.bind(var20)(var22);
                    var22 = var3 == var20;
                    var10 = undefined;
                    if(var22) { _fun0006_ip = 437; continue _fun0006 }
 433:
                    var10 = var20[var21];
 437:
                    var17 = var10;
                    if(!(var3 == var10)) { _fun0006_ip = 454; continue _fun0006 }
 444:
                    var10 = var6;
                    var10 = var10.name;
                    _fun0006_ip = 457; continue _fun0006;
 454:
                    var10 = var17;
 457:
                    var19 = var10;
                    var10 = var16;
                    var17 = var3 != var10;
                    var10 = undefined;
                    if(!var17) { _fun0006_ip = 502; continue _fun0006 }
 472:
                    var20 = var16;
                    var17 = '';
                    var10 = undefined;
                    if(!(var17 !== var20)) { _fun0006_ip = 502; continue _fun0006 }
 485:
                    var20 = var16;
                    var17 = var20.slice;
                    var16 = 128;
                    var10 = var17.bind(var20)(var18, var16);
 502:
                    var12 = var10;
                    var10 = var15;
                    var16 = var3 != var10;
                    var10 = undefined;
                    if(!var16) { _fun0006_ip = 547; continue _fun0006 }
 517:
                    var17 = var15;
                    var16 = '';
                    var10 = undefined;
                    if(!(var16 !== var17)) { _fun0006_ip = 547; continue _fun0006 }
 530:
                    var17 = var15;
                    var16 = var17.slice;
                    var15 = 128;
                    var10 = var16.bind(var17)(var18, var15);
 547:
                    var11 = var10;
                    var10 = {};
                    var15 = var14;
                    var15 = var15.getPlatformUserUrl;
                    var16 = var3 == var15;
                    var15 = undefined;
                    if(var16) { _fun0006_ip = 602; continue _fun0006 }
 570:
                    var18 = var14;
                    var17 = var18.getPlatformUserUrl;
                    var16 = {};
                    var20 = var6;
                    var20 = var20.id;
                    var16['id'] = var20;
                    var16['name'] = var19;
                    var15 = var17.bind(var18)(var16);
 602:
                    var10['url'] = var15;
                    var14 = var14.name;
                    var10['name'] = var14;
                    var10['assets'] = var13;
                    var10['details'] = var12;
                    var10['state'] = var11;
 629: // try_end0
                    return var10;
 632:
                    return var8;
 635: // try_start_1
                    var8 = global;
                    var11 = var8.Error;
                    var8 = var11.prototype;
                    var10 = Object.create(var8, {constructor: {value: var11}});
                    var31 = 'no stream';
                    var32 = var10;
                    var8 = new var32[var11](var31, var30);
                    var8 = var8 instanceof Object ? var8 : var10;
                    throw var8;
 671: // try_end1
                    return var4;
 674: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var10 = var4.status;
                    var8 = 401;
                    var4 = null;
                    if(!(var8 === var10)) { _fun0006_ip = 778; continue _fun0006 }
 693:
                    var7 = var3 == var7;
                    var4 = null;
                    if(!var7) { _fun0006_ip = 778; continue _fun0006 }
 702:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 11;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.refreshAccessToken;
                    var7 = var6.type;
                    var6 = var6.id;
                    var8 = var8.bind(var9)(var7, var6);
                    var7 = var8.then;
                    var6 = function(arg1) {
                        var4 = _closure4_slot0;
                        var3 = var4._checkTwitch;
                        var2 = _closure4_slot1;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.catch;
                    var5 = function() {
                        var1 = null;
                        return var1;
                    };
                    var4 = var6.bind(var7)(var5);
 778:
                    return var4;
 781:
                    return var3;
 784:
                    return var3;
 787:
                    return var2;
 790:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var8 = var9.bind(var1)(var8);
        var _closure2_slot1 = var8;
        var8 = function _checkTwitch() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var8;
        var2[2] = var5;
        var5 = {};
        var8 = '_checkYouTube';
        var5['key'] = var8;
        var8 = _closure1_slot8;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 720; continue _fun0007 }
 18:
                    var9 = this;
                    var _closure4_slot0 = var9;
                    var6 = var7;
                    var _closure4_slot1 = var7;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0007_ip = 40; continue _fun0007 }
 38:
                    var2 = null;
 40:
                    var8 = var2;
                    var17 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=57);
 55:
                    return var9;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 717; continue _fun0007 }
 66:
                    var3 = null;
                    _closure1_slot17 = var3;
                    var10 = var6;
                    var10 = var10.revoked;
                    if(var10) { _fun0007_ip = 714; continue _fun0007 }
 90:
                    var16 = _closure1_slot18;
                    var11 = var16.has;
                    var10 = var6;
                    var10 = var10.id;
                    var10 = var11.bind(var16)(var10);
                    if(var10) { _fun0007_ip = 714; continue _fun0007 }
 118: // try_start_0
                    var11 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 10;
                    var10 = var16[var10];
                    var10 = var11.bind(var9)(var10);
                    var18 = var10.HTTP;
                    var16 = var18.get;
                    var10 = {'url': 'https://www.googleapis.com/youtube/v3/liveBroadcasts', 'query': null, 'headers': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var11 = {'part': 'id,snippet', 'broadcastStatus': 'active', 'broadcastType': 'all'};
                    var10['query'] = var11;
                    var19 = {};
                    var11 = var8;
                    if(!(var3 == var11)) { _fun0007_ip = 202; continue _fun0007 }
 191:
                    var11 = var6;
                    var22 = var11.accessToken;
                    _fun0007_ip = 205; continue _fun0007;
 202:
                    var22 = var8;
 205:
                    var11 = global;
                    var20 = var11.HermesInternal;
                    var21 = var20.concat;
                    var20 = 'Bearer ';
                    var20 = var21.bind(var20)(var22);
                    var19['Authorization'] = var20;
                    var10['headers'] = var19;
                    var10 = var16.bind(var18)(var10);
                    SaveGenerator(address=249);
 247:
                    return var10;
 249:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=15);
                    if(var16) { _fun0007_ip = 568; continue _fun0007 }
 258:
                    var16 = var10.body;
                    var16 = var16.items;
                    var14 = var16;
                    var18 = var16.length;
                    var16 = 1;
                    if(!(!(var18 < var16))) { _fun0007_ip = 534; continue _fun0007 }
 287:
                    var18 = 0;
                    var14 = var14[var18];
                    var15 = var14.id;
                    var14 = var14.snippet;
                    var12 = var14.title;
                    var16 = var14.thumbnails;
                    var14 = {};
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 13;
                    var19 = var21[var19];
                    var21 = var20.bind(var9)(var19);
                    var20 = var21.getAssetFromImageURL;
                    var19 = _closure1_slot11;
                    var19 = var19.YOUTUBE;
                    var16 = var16.high;
                    var16 = var16.url;
                    var16 = var20.bind(var21)(var19, var16);
                    var17 = var16;
                    var19 = var3 != var16;
                    var16 = undefined;
                    if(!var19) { _fun0007_ip = 387; continue _fun0007 }
 384:
                    var16 = var17;
 387:
                    var14['large_image'] = var16;
                    var13 = var14;
                    var14 = var12;
                    var16 = var3 != var14;
                    var14 = undefined;
                    if(!var16) { _fun0007_ip = 437; continue _fun0007 }
 407:
                    var17 = var12;
                    var16 = '';
                    var14 = undefined;
                    if(!(var16 !== var17)) { _fun0007_ip = 437; continue _fun0007 }
 420:
                    var17 = var12;
                    var16 = var17.slice;
                    var12 = 128;
                    var14 = var16.bind(var17)(var18, var12);
 437:
                    var12 = {};
                    var17 = var15;
                    var15 = var11.HermesInternal;
                    var16 = var15.concat;
                    var15 = 'https://youtube.com/watch?v=';
                    var15 = var16.bind(var15)(var17);
                    var12['url'] = var15;
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var15 = 14;
                    var15 = var17[var15];
                    var17 = var16.bind(var9)(var15);
                    var16 = var17.get;
                    var15 = _closure1_slot11;
                    var15 = var15.YOUTUBE;
                    var15 = var16.bind(var17)(var15);
                    var15 = var15.name;
                    var12['name'] = var15;
                    var12['details'] = var14;
                    var12['assets'] = var13;
                    _closure1_slot17 = var12;
 531: // try_end0
                    return var12;
 534: // try_start_1
                    var13 = var11.Error;
                    var11 = var13.prototype;
                    var12 = Object.create(var11, {constructor: {value: var13}});
                    var24 = 'no stream';
                    var25 = var12;
                    var11 = new var25[var13](var24, var23);
                    var11 = var11 instanceof Object ? var11 : var12;
                    throw var11;
 568: // try_end1
                    return var10;
 571: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    var4 = var10;
                    var11 = var10.status;
                    var10 = 401;
                    if(!(var10 === var11)) { _fun0007_ip = 595; continue _fun0007 }
 591:
                    if(!(var3 != var8)) { _fun0007_ip = 638; continue _fun0007 }
 595:
                    var10 = var4.status;
                    var8 = 403;
                    var4 = null;
                    if(!(var8 === var10)) { _fun0007_ip = 711; continue _fun0007 }
 612:
                    var11 = _closure1_slot18;
                    var10 = var11.add;
                    var8 = var6;
                    var8 = var8.id;
                    var8 = var10.bind(var11)(var8);
                    var4 = null;
                    _fun0007_ip = 711; continue _fun0007;
 638:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 11;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.refreshAccessToken;
                    var7 = var6.type;
                    var6 = var6.id;
                    var8 = var8.bind(var9)(var7, var6);
                    var7 = var8.then;
                    var6 = function(arg1) {
                        var4 = _closure4_slot0;
                        var3 = var4._checkYouTube;
                        var2 = _closure4_slot1;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.catch;
                    var5 = function() {
                        var1 = null;
                        return var1;
                    };
                    var4 = var6.bind(var7)(var5);
 711:
                    return var4;
 714:
                    return var3;
 717:
                    return var2;
 720:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var7 = function _checkYouTube() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[3] = var5;
        var5 = {};
        var7 = '_check';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2._started;
                if(!var3) { _fun0008_ip = 219; continue _fun0008 }
 21:
                var5 = _closure1_slot9;
                var3 = var5.getAccounts;
                var5 = var3.bind(var5)();
                var6 = null;
                if(!(var6 != var5)) { _fun0008_ip = 219; continue _fun0008 }
 47:
                var3 = var2._nextCheck;
                if(!(var6 != var3)) { _fun0008_ip = 78; continue _fun0008 }
 57:
                var3 = global;
                var6 = var3.clearTimeout;
                var3 = var2._nextCheck;
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
 78:
                var2 = _closure1_slot11;
                var2 = var2.TWITCH;
                var8 = new Array(1);
                var8[0] = var2;
                var _closure3_slot1 = var8;
                var2 = global;
                var6 = var2.Date;
                var3 = var6.now;
                var6 = var3.bind(var6)();
                var3 = _closure1_slot16;
                if(!(var3 <= var6)) { _fun0008_ip = 157; continue _fun0008 }
 125:
                var7 = var8.push;
                var3 = _closure1_slot11;
                var3 = var3.YOUTUBE;
                var3 = var7.bind(var8)(var3);
                var3 = _closure1_slot13;
                var3 = var6 + var3;
                _closure1_slot16 = var3;
 157:
                var4 = var5.filter;
                var3 = function(arg1) {
                    var3 = _closure3_slot1;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.type;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var4 = arg1;
                        var2 = var4.type;
                        var1 = _closure1_slot11;
                        var1 = var1.TWITCH;
                        if(!(var2 !== var1)) { _fun0009_ip = 45; continue _fun0009 }
 25:
                        var2 = _closure3_slot0;
                        var1 = var2._checkYouTube;
                        var1 = var1.bind(var2)(var4);
                        _fun0009_ip = 63; continue _fun0009;
 45:
                        var3 = _closure3_slot0;
                        var2 = var3._checkTwitch;
                        var1 = var2.bind(var3)(var4);
 63:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var2.Promise;
                var2 = var3.allSettled;
                var3 = var2.bind(var3)(var4);
                var2 = var3.then;
                var1 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2._started;
                        if(!var2) { _fun0010_ip = 130; continue _fun0010 }
 19:
                        var3 = var4.find;
                        var2 = function(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                var2 = arg1;
                                var3 = var2.status;
                                var1 = 'fulfilled';
                                var1 = var1 === var3;
                                if(!var1) { _fun0011_ip = 32; continue _fun0011 }
 21:
                                var3 = var2.value;
                                var2 = null;
                                var1 = var2 != var3;
 32:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var6 = null;
                        var3 = var6 == var2;
                        var4 = undefined;
                        var5 = undefined;
                        if(var3) { _fun0010_ip = 54; continue _fun0010 }
 49:
                        var5 = var2.value;
 54:
                        var2 = var6 == var5;
                        if(!var2) { _fun0010_ip = 72; continue _fun0010 }
 61:
                        var3 = _closure1_slot17;
                        var2 = var6 != var3;
 72:
                        if(!var2) { _fun0010_ip = 82; continue _fun0010 }
 75:
                        var5 = _closure1_slot17;
 82:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 12;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'STREAMING_UPDATE';
                        var2['type'] = var6;
                        var2['stream'] = var5;
                        var2 = var3.bind(var4)(var2);
 130:
                        var2 = _closure3_slot0;
                        var1 = var2._scheduleCheck;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
 219:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var2[4] = var5;
        var5 = {};
        var7 = '_scheduleCheck';
        var5['key'] = var7;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2._started;
                if(!var3) { _fun0012_ip = 52; continue _fun0012 }
 18:
                var3 = global;
                var5 = var3.setTimeout;
                var4 = _closure1_slot12;
                var3 = undefined;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2._check;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var5.bind(var3)(var1, var4);
                var2['_nextCheck'] = var1;
 52:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var2[5] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot20 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ExternalStreamingStore() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if(var1) { _fun0013_ip = 69; continue _fun0013 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 105; continue _fun0013;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
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
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = _closure1_slot24;
            var1 = undefined;
            var3 = var4.bind(var1)();
            var6 = var5.waitFor;
            var3 = _closure1_slot9;
            var3 = var6.bind(var5)(var3);
            var3 = var5.syncWith;
            var6 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var6;
            var2 = var3.bind(var5)(var2, var4);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getStream';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ExternalStreamingStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function streamUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 15;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var2.stream;
            var4 = _closure1_slot15;
            var4 = var6.bind(var1)(var5, var4);
            if(var4) { _fun0014_ip = 71; continue _fun0014 }
 47:
            var4 = var2.stream;
            var2 = null;
            var5 = var2 != var4;
            if(!var5) { _fun0014_ip = 65; continue _fun0014 }
 62:
            var2 = var4;
 65:
            _closure1_slot15 = var2;
            return var1;
 71:
            var1 = false;
            return var1;
        }
    };
    var2['STREAMING_UPDATE'] = var9;
    var4 = function USER_CONNECTIONS_UPDATE() {
        var2 = _closure1_slot20;
        var1 = var2._check;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['USER_CONNECTIONS_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ExternalStreamingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();