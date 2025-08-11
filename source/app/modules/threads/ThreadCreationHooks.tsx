// app/modules/threads/ThreadCreationHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var5 = function getIsPrivate(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot19;
            var2 = var1.PrivateOnly;
            var1 = arg2;
            var1 = var1 === var2;
            if(var1) { _fun0001_ip = 47; continue _fun0001 }
 23:
            var2 = arg1;
            var3 = var2.isPrivate;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 44; continue _fun0001 }
 41:
            var2 = var3;
 44:
            var1 = var2;
 47:
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var1 = function trimToLength(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var2 = var5.length;
            var1 = var5;
            if(!(var2 > var4)) { _fun0002_ip = 42; continue _fun0002 }
 18:
            var3 = var5.substring;
            var2 = 0;
            var3 = var3.bind(var5)(var2, var4);
            var2 = '...';
            var1 = var3 + var2;
 42:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = function getDefaultThreadName(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var8 = null;
            var1 = var8 == var5;
            var6 = null;
            if(var1) { _fun0003_ip = 41; continue _fun0003 }
 17:
            var4 = _closure1_slot9;
            var3 = var4.getMessage;
            var1 = var2.id;
            var6 = var3.bind(var4)(var1, var5);
 41:
            var3 = var8 == var6;
            var4 = undefined;
            var1 = undefined;
            if(var3) { _fun0003_ip = 88; continue _fun0003 }
 52:
            var5 = var6.embeds;
            var3 = var8 == var5;
            var1 = undefined;
            if(var3) { _fun0003_ip = 88; continue _fun0003 }
 67:
            var3 = 0;
            var3 = var5[var3];
            var5 = var8 == var3;
            var1 = undefined;
            if(var5) { _fun0003_ip = 88; continue _fun0003 }
 82:
            var1 = var3.rawTitle;
 88:
            var5 = var8 != var1;
            var10 = '';
            var3 = var10;
            if(!var5) { _fun0003_ip = 105; continue _fun0003 }
 102:
            var3 = var1;
 105:
            var5 = var8 == var6;
            var1 = undefined;
            if(var5) { _fun0003_ip = 149; continue _fun0003 }
 114:
            var5 = var6.poll;
            var7 = var8 == var5;
            var1 = undefined;
            if(var7) { _fun0003_ip = 149; continue _fun0003 }
 129:
            var5 = var5.question;
            var7 = var8 == var5;
            var1 = undefined;
            if(var7) { _fun0003_ip = 149; continue _fun0003 }
 144:
            var1 = var5.text;
 149:
            var7 = var8 != var1;
            var5 = var10;
            if(!var7) { _fun0003_ip = 162; continue _fun0003 }
 159:
            var5 = var1;
 162:
            if(!(var10 === var3)) { _fun0003_ip = 537; continue _fun0003 }
 169:
            if(!(var10 === var5)) { _fun0003_ip = 519; continue _fun0003 }
 176:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 12;
            var7 = var11[var7];
            var11 = var9.bind(var4)(var7);
            var7 = var11.unparse;
            var12 = var8 == var6;
            var9 = undefined;
            if(var12) { _fun0003_ip = 219; continue _fun0003 }
 214:
            var9 = var6.content;
 219:
            var12 = var8 != var9;
            var6 = var10;
            if(!var12) { _fun0003_ip = 232; continue _fun0003 }
 229:
            var6 = var9;
 232:
            var2 = var2.id;
            var9 = true;
            var11 = var7.bind(var11)(var6, var2, var9);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var11.split;
            var2 = '\n';
            var6 = var6.bind(var11)(var2);
            var2 = 0;
            var6 = var6[var2];
            var9 = var7.bind(var4)(var6, var9);
            var7 = var9.replace;
            var6 = /^[ #-]+/;
            var6 = var7.bind(var9)(var6, var10);
            var10 = new Array(0);
 321:
            var9 = var6.match;
            var7 = /(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,.\/])+/;
            var9 = var9.bind(var6)(var7);
            var7 = var6;
            if(!(var8 != var9)) { _fun0003_ip = 434; continue _fun0003 }
 353:
            var11 = var9.index;
            if(!(var8 != var11)) { _fun0003_ip = 434; continue _fun0003 }
 362:
            var12 = var10.push;
            var13 = var7.substring;
            var11 = var9.index;
            var11 = var13.bind(var7)(var2, var11);
            var11 = var12.bind(var10)(var11);
            var12 = var10.push;
            var11 = var9[var2];
            var11 = var12.bind(var10)(var11);
            var11 = var7.substring;
            var12 = var9.index;
            var9 = var9[var2];
            var9 = var9.length;
            var9 = var12 + var9;
            var6 = var11.bind(var7)(var9);
            _fun0003_ip = 321; continue _fun0003;
 434:
            var6 = var10.push;
            var6 = var6.bind(var10)(var7);
            var8 = var10[var2];
            var6 = var10.length;
            var9 = 1;
            var7 = var9 < var6;
            var6 = 40;
            var2 = var8;
            if(!var7) { _fun0003_ip = 507; continue _fun0003 }
 469:
            var7 = var10[var9];
            var11 = var8 + var7;
            var7 = var11.length;
            var2 = var8;
            if(!(!(var7 > var6))) { _fun0003_ip = 507; continue _fun0003 }
 489:
            var9 = var9 + 1;
            var7 = var10.length;
            var8 = var11;
            var2 = var8;
            if(var9 < var7) { _fun0003_ip = 469; continue _fun0003 }
 507:
            var1 = _closure1_slot21;
            var1 = var1.bind(var4)(var2, var6);
            return var1;
 519:
            var2 = _closure1_slot21;
            var1 = 80;
            var1 = var2.bind(var4)(var5, var1);
            return var1;
 537:
            var2 = _closure1_slot21;
            var1 = 40;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var1 = function createThread_() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function _createThread_() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var23 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 1952; continue _fun0004 }
 15:
                    var11 = var23;
                    var19 = arg2;
                    var16 = arg3;
                    var5 = arg4;
                    var6 = undefined;
                    var25 = undefined;
                    var _closure4_slot0 = var6;
                    var8 = undefined;
                    var9 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var22 = undefined;
                    var21 = undefined;
                    var7 = undefined;
                    var10 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    var3 = undefined;
                    var20 = var23.isForumLikeChannel;
                    var8 = var20.bind(var23)();
 71: // try_start_0
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=79);
 77:
                    return var5;
 79:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=19);
                    if(var20) { _fun0004_ip = 375; continue _fun0004 }
 88:
                    var25 = var5;
                    _closure4_slot0 = var5;
                    var23 = var5.body;
                    var20 = null;
                    if(!(var20 != var23)) { _fun0004_ip = 231; continue _fun0004 }
 109:
                    var23 = _closure1_slot1;
                    var24 = _closure1_slot2;
                    var20 = 27;
                    var26 = var24[var20];
                    var28 = var23.bind(var6)(var26);
                    var27 = var28.dispatch;
                    var26 = {};
                    var30 = 'SLOWMODE_RESET_COOLDOWN';
                    var26['type'] = var30;
                    var29 = _closure1_slot10;
                    var29 = var29.CreateThread;
                    var26['slowmodeType'] = var29;
                    var29 = var11;
                    var29 = var29.id;
                    var26['channelId'] = var29;
                    var26 = var27.bind(var28)(var26);
                    var20 = var24[var20];
                    var24 = var23.bind(var6)(var20);
                    var23 = var24.dispatch;
                    var20 = {};
                    var26 = 'THREAD_CREATE_LOCAL';
                    var20['type'] = var26;
                    var25 = var25.body;
                    var25 = var25.id;
                    var20['channelId'] = var25;
                    var20 = var23.bind(var24)(var20);
                    _fun0004_ip = 370; continue _fun0004;
 231:
                    var23 = _closure1_slot1;
                    var29 = _closure1_slot2;
                    var20 = 26;
                    var20 = var29[var20];
                    var24 = var23.bind(var6)(var20);
                    var23 = var24.show;
                    var20 = {};
                    var28 = _closure1_slot0;
                    var25 = 14;
                    var26 = var29[var25];
                    var26 = var28.bind(var6)(var26);
                    var30 = var26.intl;
                    var27 = var30.string;
                    var26 = var29[var25];
                    var26 = var28.bind(var6)(var26);
                    var26 = var26.t;
                    var26 = var26.j2d6Ki;
                    var26 = var27.bind(var30)(var26);
                    var20['title'] = var26;
                    var26 = var29[var25];
                    var26 = var28.bind(var6)(var26);
                    var27 = var26.intl;
                    var26 = var27.string;
                    var25 = var29[var25];
                    var25 = var28.bind(var6)(var25);
                    var25 = var25.t;
                    var25 = var25.fEptJC;
                    var25 = var26.bind(var27)(var25);
                    var20['body'] = var25;
                    var20 = var23.bind(var24)(var20);
 370: // try_end0
                    _fun0004_ip = 1827; continue _fun0004;
 375:
                    return var5;
 378: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = var5;
                    var _closure4_slot1 = var5;
                    var20 = var5.body;
                    var9 = var20;
                    var5 = null;
                    var20 = var5 == var20;
                    var23 = undefined;
                    if(var20) { _fun0004_ip = 411; continue _fun0004 }
 406:
                    var23 = var9.code;
 411:
                    var20 = _closure1_slot13;
                    var20 = var20.TOO_MANY_THREADS;
                    if(!(var23 !== var20)) { _fun0004_ip = 1644; continue _fun0004 }
 431:
                    var20 = var4;
                    var20 = var20.body;
                    var15 = var20;
                    var23 = var5 == var20;
                    var20 = undefined;
                    if(var23) { _fun0004_ip = 456; continue _fun0004 }
 451:
                    var20 = var15.code;
 456:
                    var15 = _closure1_slot13;
                    var15 = var15.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(var20 !== var15)) { _fun0004_ip = 1503; continue _fun0004 }
 473:
                    var15 = var4;
                    var15 = var15.body;
                    var14 = var15;
                    var20 = var5 == var15;
                    var15 = undefined;
                    if(var20) { _fun0004_ip = 498; continue _fun0004 }
 493:
                    var15 = var14.code;
 498:
                    var14 = _closure1_slot13;
                    var14 = var14.SLOWMODE_RATE_LIMITED;
                    if(!(var15 !== var14)) { _fun0004_ip = 1358; continue _fun0004 }
 515:
                    var14 = var4;
                    var15 = var14.status;
                    var14 = 429;
                    if(!(var14 !== var15)) { _fun0004_ip = 1186; continue _fun0004 }
 536:
                    var20 = _closure1_slot11;
                    var15 = var20.has;
                    var14 = var4;
                    var14 = var14.body;
                    var22 = var14;
                    var23 = var5 == var14;
                    var14 = undefined;
                    if(var23) { _fun0004_ip = 570; continue _fun0004 }
 565:
                    var14 = var22.code;
 570:
                    var14 = var15.bind(var20)(var14);
                    if(var14) { _fun0004_ip = 1181; continue _fun0004 }
 581:
                    var20 = _closure1_slot12;
                    var15 = var20.has;
                    var14 = var4;
                    var14 = var14.body;
                    var21 = var14;
                    var22 = var5 == var14;
                    var14 = undefined;
                    if(var22) { _fun0004_ip = 615; continue _fun0004 }
 610:
                    var14 = var21.code;
 615:
                    var14 = var15.bind(var20)(var14);
                    if(var14) { _fun0004_ip = 767; continue _fun0004 }
 626:
                    var15 = _closure1_slot1;
                    var25 = _closure1_slot2;
                    var14 = 26;
                    var14 = var25[var14];
                    var20 = var15.bind(var6)(var14);
                    var15 = var20.show;
                    var14 = {};
                    var24 = _closure1_slot0;
                    var21 = 14;
                    var22 = var25[var21];
                    var22 = var24.bind(var6)(var22);
                    var26 = var22.intl;
                    var23 = var26.string;
                    var22 = var25[var21];
                    var22 = var24.bind(var6)(var22);
                    var22 = var22.t;
                    var22 = var22.j2d6Ki;
                    var22 = var23.bind(var26)(var22);
                    var14['title'] = var22;
                    var22 = var25[var21];
                    var22 = var24.bind(var6)(var22);
                    var23 = var22.intl;
                    var22 = var23.string;
                    var21 = var25[var21];
                    var21 = var24.bind(var6)(var21);
                    var21 = var21.t;
                    var21 = var21.fEptJC;
                    var21 = var22.bind(var23)(var21);
                    var14['body'] = var21;
                    var14 = var15.bind(var20)(var14);
                    _fun0004_ip = 1827; continue _fun0004;
 767:
                    var14 = var16;
                    if(!(var5 != var14)) { _fun0004_ip = 1145; continue _fun0004 }
 777:
                    var14 = var4;
                    var14 = var14.body;
                    var13 = var14;
                    var15 = var5 == var14;
                    var14 = undefined;
                    if(var15) { _fun0004_ip = 802; continue _fun0004 }
 797:
                    var14 = var13.code;
 802:
                    var13 = _closure1_slot13;
                    var13 = var13.EXPLICIT_CONTENT;
                    if(!(var14 !== var13)) { _fun0004_ip = 960; continue _fun0004 }
 819:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 23;
                    var13 = var15[var13];
                    var15 = var14.bind(var6)(var13);
                    var14 = var15.handleUploadMessageAttachmentsErrors;
                    var13 = {};
                    var13['file'] = var16;
                    var20 = var11;
                    var16 = var20.getGuildId;
                    var16 = var16.bind(var20)();
                    var13['guildId'] = var16;
                    var16 = var19;
                    if(!(var5 == var16)) { _fun0004_ip = 882; continue _fun0004 }
 876:
                    var16 = new Array(0);
                    _fun0004_ip = 885; continue _fun0004;
 882:
                    var16 = var19;
 885:
                    var13['analyticsLocations'] = var16;
                    var16 = var4;
                    var16 = var16.body;
                    var18 = var16;
                    var19 = var5 == var16;
                    var16 = undefined;
                    if(var19) { _fun0004_ip = 915; continue _fun0004 }
 910:
                    var16 = var18.code;
 915:
                    var13['code'] = var16;
                    var16 = var4;
                    var16 = var16.body;
                    var17 = var16;
                    var18 = var5 == var16;
                    var16 = undefined;
                    if(var18) { _fun0004_ip = 945; continue _fun0004 }
 939:
                    var16 = var17.reason;
 945:
                    var13['reason'] = var16;
                    var13 = var14.bind(var15)(var13);
                    _fun0004_ip = 1145; continue _fun0004;
 960:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 29;
                    var13 = var15[var13];
                    var14 = var14.bind(var6)(var13);
                    var13 = var14.createNonce;
                    var12 = var13.bind(var14)();
                    var14 = var4;
                    var14 = var14.body;
                    var14 = var14.attachments;
                    var14 = var5 != var14;
                    var13 = var14;
                    if(!var14) { _fun0004_ip = 1039; continue _fun0004 }
 1014:
                    var14 = var4;
                    var14 = var14.body;
                    var14 = var14.attachments;
                    var15 = var14.length;
                    var14 = 0;
                    var13 = var15 > var14;
 1039:
                    if(!var13) { _fun0004_ip = 1145; continue _fun0004 }
 1042:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var13 = 27;
                    var13 = var16[var13];
                    var18 = var15.bind(var6)(var13);
                    var17 = var18.dispatch;
                    var13 = {};
                    var14 = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
                    var13['type'] = var14;
                    var14 = var12;
                    var13['messageId'] = var14;
                    var12 = var11;
                    var19 = var12.id;
                    var13['channelId'] = var19;
                    var19 = var4;
                    var19 = var19.body;
                    var19 = var19.attachments;
                    var13['attachments'] = var19;
                    var13 = var17.bind(var18)(var13);
                    var13 = 30;
                    var13 = var16[var13];
                    var13 = var15.bind(var6)(var13);
                    var12 = var12.id;
                    var12 = var13.bind(var6)(var12, var14);
 1145:
                    var12 = global;
                    var14 = var12.Promise;
                    var12 = var14.prototype;
                    var13 = Object.create(var12, {constructor: {value: var14}});
                    var32 = function(arg1, arg2) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = arg2;
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var _closure5_slot1 = var3;
                            var2 = _closure4_slot1;
                            var4 = var2.body;
                            var2 = null;
                            if(!(var2 == var4)) { _fun0005_ip = 40; continue _fun0005 }
 34:
                            var2 = undefined;
                            var2 = var3.bind(var2)();
 40:
                            var3 = _closure1_slot6;
                            var2 = var3.addConditionalChangeListener;
                            var1 = function() {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                    var4 = _closure1_slot6;
                                    var3 = var4.getAndDeleteMostRecentUserCreatedThreadId;
                                    var5 = var3.bind(var4)();
                                    var3 = null;
                                    if(!(var3 == var5)) { _fun0006_ip = 31; continue _fun0006 }
 27:
                                    var3 = undefined;
                                    return var3;
 31:
                                    var4 = _closure1_slot7;
                                    var3 = var4.getChannel;
                                    var3 = var3.bind(var4)(var5);
                                    var _closure6_slot0 = var3;
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 27;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var2 = var3.wait;
                                    var1 = function() {
                                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                            var3 = _closure6_slot0;
                                            var2 = null;
                                            if(!(var2 != var3)) { _fun0007_ip = 33; continue _fun0007 }
 13:
                                            var3 = _closure5_slot0;
                                            var2 = _closure6_slot0;
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var2);
                                            _fun0007_ip = 46; continue _fun0007;
 33:
                                            var2 = _closure5_slot1;
                                            var1 = undefined;
                                            var1 = var2.bind(var1)();
 46:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var1 = false;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var33 = var13;
                    var12 = new var33[var14](var32, var31);
                    var12 = var12 instanceof Object ? var12 : var13;
                    return var12;
 1181:
                    var12 = var4;
                    throw var12;
 1186:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 26;
                    var12 = var14[var12];
                    var14 = var13.bind(var6)(var12);
                    var13 = var14.show;
                    var12 = {};
                    var15 = var8;
                    var20 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var19 = 14;
                    var17 = var16[var19];
                    var17 = var20.bind(var6)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var16 = var16[var19];
                    var16 = var20.bind(var6)(var16);
                    var16 = var16.t;
                    if(var15) { _fun0004_ip = 1277; continue _fun0004 }
 1264:
                    var15 = var16.1KEdvL;
                    var15 = var17.bind(var18)(var15);
                    _fun0004_ip = 1288; continue _fun0004;
 1277:
                    var16 = var16.vWNFk5;
                    var15 = var17.bind(var18)(var16);
 1288:
                    var12['title'] = var15;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var16 = var15[var19];
                    var16 = var18.bind(var6)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var6)(var15);
                    var15 = var15.t;
                    var15 = var15.Whhv4+;
                    var15 = var16.bind(var17)(var15);
                    var12['body'] = var15;
                    var12 = var13.bind(var14)(var12);
                    _fun0004_ip = 1827; continue _fun0004;
 1358:
                    var4 = var4.body;
                    var4 = var4.retry_after;
                    var7 = var4;
                    var12 = var5 != var4;
                    var5 = 0;
                    var4 = 0;
                    if(!var12) { _fun0004_ip = 1386; continue _fun0004 }
 1383:
                    var4 = var7;
 1386:
                    var10 = var4;
                    if(!(var4 > var5)) { _fun0004_ip = 1827; continue _fun0004 }
 1396:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = 27;
                    var4 = var13[var4];
                    var7 = var12.bind(var6)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var14 = 'SLOWMODE_SET_COOLDOWN';
                    var4['type'] = var14;
                    var11 = var11.id;
                    var4['channelId'] = var11;
                    var11 = _closure1_slot10;
                    var11 = var11.CreateThread;
                    var4['slowmodeType'] = var11;
                    var11 = var10;
                    var10 = 28;
                    var10 = var13[var10];
                    var10 = var12.bind(var6)(var10);
                    var10 = var10.Millis;
                    var10 = var10.SECOND;
                    var10 = var11 * var10;
                    var4['cooldownMs'] = var10;
                    var4 = var5.bind(var7)(var4);
                    _fun0004_ip = 1827; continue _fun0004;
 1503:
                    var5 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var4 = 26;
                    var4 = var14[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.show;
                    var4 = {};
                    var13 = _closure1_slot0;
                    var10 = 14;
                    var11 = var14[var10];
                    var11 = var13.bind(var6)(var11);
                    var15 = var11.intl;
                    var12 = var15.string;
                    var11 = var14[var10];
                    var11 = var13.bind(var6)(var11);
                    var11 = var11.t;
                    var11 = var11.1KEdvL;
                    var11 = var12.bind(var15)(var11);
                    var4['title'] = var11;
                    var11 = var14[var10];
                    var11 = var13.bind(var6)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var6)(var10);
                    var10 = var10.t;
                    var10 = var10.jDMxz8;
                    var10 = var11.bind(var12)(var10);
                    var4['body'] = var10;
                    var4 = var5.bind(var7)(var4);
                    _fun0004_ip = 1827; continue _fun0004;
 1644:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 26;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.show;
                    var4 = {};
                    var10 = var8;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var13 = 14;
                    var12 = var11[var13];
                    var12 = var15.bind(var6)(var12);
                    var14 = var12.intl;
                    var12 = var14.string;
                    var11 = var11[var13];
                    var11 = var15.bind(var6)(var11);
                    var11 = var11.t;
                    if(var10) { _fun0004_ip = 1735; continue _fun0004 }
 1722:
                    var10 = var11.1KEdvL;
                    var10 = var12.bind(var14)(var10);
                    _fun0004_ip = 1746; continue _fun0004;
 1735:
                    var11 = var11.vWNFk5;
                    var10 = var12.bind(var14)(var11);
 1746:
                    var4['title'] = var10;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var10 = var9[var13];
                    var10 = var12.bind(var6)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var9[var13];
                    var9 = var12.bind(var6)(var9);
                    var9 = var9.t;
                    if(var8) { _fun0004_ip = 1807; continue _fun0004 }
 1794:
                    var8 = var9.P0wT5e;
                    var8 = var10.bind(var11)(var8);
                    _fun0004_ip = 1818; continue _fun0004;
 1807:
                    var9 = var9.KGaiEB;
                    var8 = var10.bind(var11)(var9);
 1818:
                    var4['body'] = var8;
                    var4 = var5.bind(var7)(var4);
 1827:
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var32 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = _closure4_slot0;
                            var3 = var2.body;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0008_ip = 36; continue _fun0008 }
 27:
                            var3 = arg2;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
 36:
                            var3 = _closure1_slot7;
                            var2 = var3.addConditionalChangeListener;
                            var1 = function() {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                    var5 = _closure1_slot7;
                                    var4 = var5.getChannel;
                                    var3 = _closure4_slot0;
                                    var3 = var3.body;
                                    var3 = var3.id;
                                    var4 = var4.bind(var5)(var3);
                                    var _closure6_slot0 = var4;
                                    var3 = null;
                                    if(!(var3 == var4)) { _fun0009_ip = 50; continue _fun0009 }
 46:
                                    var3 = undefined;
                                    return var3;
 50:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 27;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var2 = var3.wait;
                                    var1 = function() {
                                        var3 = _closure5_slot0;
                                        var2 = _closure6_slot0;
                                        var1 = undefined;
                                        var2 = var3.bind(var1)(var2);
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var1 = false;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var33 = var4;
                    var2 = new var33[var5](var32, var31);
                    var2 = var2 instanceof Object ? var2 : var4;
                    SaveGenerator(address=1864);
 1862:
                    return var2;
 1864:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 1949; continue _fun0004 }
 1870:
                    var3 = var2;
 1873: // try_start_1
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 25;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.fetchMessages;
                    var4 = {};
                    var8 = var3;
                    var8 = var8.id;
                    var4['channelId'] = var8;
                    var7 = _closure1_slot16;
                    var4['limit'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=1933);
 1931:
                    return var4;
 1933:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 1941; continue _fun0004 }
 1939: // try_end1
                    _fun0004_ip = 1946; continue _fun0004;
 1941:
                    return var4;
 1944: // catch_target1
                    CatchBlockStart(arg_register=3);
 1946:
                    return var3;
 1949:
                    return var2;
 1952:
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
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var12 = 1;
    var6 = var9[var12];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var11 = 2;
    var10 = var9[var11];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot5 = var6;
    var10 = 3;
    var6 = var9[var10];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.DraftType;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.SlowmodeType;
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.FORUM_POST_CREATION_AUTOMOD_ERRORS;
    var _closure1_slot11 = var7;
    var6 = var6.FORUM_POST_CREATION_UPLOAD_ERRORS;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.AbortCodes;
    var _closure1_slot13 = var7;
    var7 = var6.ChannelTypes;
    var _closure1_slot14 = var7;
    var7 = var6.Endpoints;
    var _closure1_slot15 = var7;
    var7 = var6.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot16 = var7;
    var6 = var6.MessageFlags;
    var _closure1_slot17 = var6;
    var6 = 10;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.MessageSendLocation;
    var _closure1_slot18 = var6;
    var6 = {};
    var6['Disabled'] = var12;
    var7 = 'Disabled';
    var6[var12] = var7;
    var6['Enabled'] = var11;
    var7 = 'Enabled';
    var6[var11] = var7;
    var6['PrivateOnly'] = var10;
    var7 = 'PrivateOnly';
    var6[var10] = var7;
    var _closure1_slot19 = var6;
    var7 = 31;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/threads/ThreadCreationHooks.tsx';
    var7 = var8.bind(var9)(var7);
    var3['PrivateThreadMode'] = var6;
    var6 = function usePrivateThreadMode(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var2 = var7[var1];
            var4 = undefined;
            var8 = var6.bind(var4)(var2);
            var2 = var8.useCanStartPublicThread;
            var2 = var2.bind(var8)(var5);
            var1 = var7[var1];
            var4 = var6.bind(var4)(var1);
            var1 = var4.useCanStartPrivateThread;
            var1 = var1.bind(var4)(var5);
            var3 = _closure1_slot19;
            if(var1) { _fun0010_ip = 74; continue _fun0010 }
 66:
            var1 = var3.Disabled;
            _fun0010_ip = 94; continue _fun0010;
 74:
            if(var2) { _fun0010_ip = 85; continue _fun0010 }
 77:
            var2 = var3.PrivateOnly;
            _fun0010_ip = 91; continue _fun0010;
 85:
            var2 = var3.Enabled;
 91:
            var1 = var2;
 94:
            return var1;
        }
    };
    var3['usePrivateThreadMode'] = var6;
    var3['getIsPrivate'] = var5;
    var3['getDefaultThreadName'] = var4;
    var4 = function useCreateThreadCommon(arg1) {
        var2 = arg1;
        var12 = var2.parentChannel;
        var _closure2_slot0 = var12;
        var11 = var2.parentMessageId;
        var _closure2_slot1 = var11;
        var10 = var2.threadSettings;
        var _closure2_slot2 = var10;
        var8 = var2.privateThreadMode;
        var _closure2_slot3 = var8;
        var7 = var2.location;
        var _closure2_slot4 = var7;
        var9 = var2.onThreadCreated;
        var _closure2_slot5 = var9;
        var6 = var2.useDefaultThreadName;
        var _closure2_slot6 = var6;
        var5 = var2.uploadHandler;
        var _closure2_slot7 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var2 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        StartGenerator();
                        var9 = arg1;
                        var8 = arg2;
                        var7 = arg3;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0011_ip = 680; continue _fun0011 }
 21:
                        var3 = undefined;
                        var _closure5_slot0 = var3;
                        var _closure5_slot1 = var3;
                        var _closure5_slot2 = var3;
                        var11 = _closure1_slot20;
                        var6 = _closure2_slot2;
                        var10 = _closure2_slot3;
                        var10 = var11.bind(var3)(var6, var10);
                        _closure5_slot0 = var10;
                        var12 = var6.name;
                        var10 = null;
                        var13 = var10 != var12;
                        var11 = '';
                        var6 = var11;
                        if(!var13) { _fun0011_ip = 87; continue _fun0011 }
 84:
                        var6 = var12;
 87:
                        _closure5_slot1 = var6;
                        if(!(var11 === var6)) { _fun0011_ip = 183; continue _fun0011 }
 95:
                        var6 = _closure2_slot6;
                        if(!var6) { _fun0011_ip = 183; continue _fun0011 }
 102:
                        var13 = _closure1_slot22;
                        var12 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var6 = var13.bind(var3)(var12, var6);
                        if(!(var11 === var6)) { _fun0011_ip = 179; continue _fun0011 }
 124:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var11 = 14;
                        var12 = var15[var11];
                        var12 = var14.bind(var3)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var15[var11];
                        var11 = var14.bind(var3)(var11);
                        var11 = var11.t;
                        var11 = var11.7Xm5QE;
                        var6 = var12.bind(var13)(var11);
 179:
                        _closure5_slot1 = var6;
 183:
                        var11 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var6 = 15;
                        var6 = var15[var6];
                        var11 = var11.bind(var3)(var6);
                        var6 = var11.getAutoArchiveDuration;
                        var13 = _closure2_slot0;
                        var6 = var6.bind(var11)(var13);
                        _closure5_slot2 = var6;
                        var12 = _closure1_slot7;
                        var11 = var12.getChannel;
                        var14 = _closure1_slot1;
                        var6 = 16;
                        var6 = var15[var6];
                        var15 = var14.bind(var3)(var6);
                        var14 = var15.castMessageIdAsChannelId;
                        var6 = _closure2_slot1;
                        var6 = var14.bind(var15)(var6);
                        var6 = var11.bind(var12)(var6);
                        var12 = _closure1_slot23;
                        var21 = new Array(0);
                        var19 = function() {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var2 = _closure2_slot1;
                                var1 = null;
                                if(!(var1 == var2)) { _fun0012_ip = 42; continue _fun0012 }
 13:
                                var3 = _closure1_slot15;
                                var2 = var3.CHANNEL_THREADS;
                                var1 = _closure2_slot0;
                                var1 = var1.id;
                                var4 = var2.bind(var3)(var1);
                                _fun0012_ip = 74; continue _fun0012;
 42:
                                var6 = _closure1_slot15;
                                var3 = var6.CHANNEL_MESSAGE_THREADS;
                                var1 = _closure2_slot0;
                                var2 = var1.id;
                                var1 = _closure2_slot1;
                                var4 = var3.bind(var6)(var2, var1);
 74:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 17;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var3 = var1.HTTP;
                                var2 = var3.post;
                                var1 = {};
                                var1['url'] = var4;
                                var4 = {};
                                var7 = _closure5_slot1;
                                var4['name'] = var7;
                                var7 = _closure5_slot0;
                                if(var7) { _fun0012_ip = 183; continue _fun0012 }
 136:
                                var7 = _closure2_slot0;
                                var9 = var7.type;
                                var7 = _closure1_slot14;
                                var7 = var7.GUILD_ANNOUNCEMENT;
                                if(!(var9 !== var7)) { _fun0012_ip = 171; continue _fun0012 }
 159:
                                var7 = _closure1_slot14;
                                var7 = var7.PUBLIC_THREAD;
                                _fun0012_ip = 181; continue _fun0012;
 171:
                                var9 = _closure1_slot14;
                                var7 = var9.ANNOUNCEMENT_THREAD;
 181:
                                _fun0012_ip = 193; continue _fun0012;
 183:
                                var8 = _closure1_slot14;
                                var7 = var8.PRIVATE_THREAD;
 193:
                                var4['type'] = var7;
                                var6 = _closure5_slot2;
                                var4['auto_archive_duration'] = var6;
                                var5 = _closure2_slot4;
                                var4['location'] = var5;
                                var1['body'] = var4;
                                var4 = false;
                                var1['rejectWithError'] = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            }
                        };
                        var23 = undefined;
                        var22 = var13;
                        var20 = undefined;
                        var2 = var23[var12](var22, var21, var20, var19, var18);
                        SaveGenerator(address=295);
 293:
                        return var2;
 295:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                        if(var11) { _fun0011_ip = 677; continue _fun0011 }
 304:
                        if(!(var2 !== var6)) { _fun0011_ip = 623; continue _fun0011 }
 311:
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var12 = 18;
                        var6 = var14[var12];
                        var18 = var13.bind(var3)(var6);
                        var17 = var18.clearDraft;
                        var11 = _closure2_slot0;
                        var16 = var11.id;
                        var6 = _closure1_slot8;
                        var15 = var6.ThreadSettings;
                        var15 = var17.bind(var18)(var16, var15);
                        var12 = var14[var12];
                        var13 = var13.bind(var3)(var12);
                        var12 = var13.clearDraft;
                        var11 = var11.id;
                        var6 = var6.FirstThreadMessage;
                        var6 = var12.bind(var13)(var11, var6);
                        var6 = _closure2_slot5;
                        if(!(var10 != var6)) { _fun0011_ip = 411; continue _fun0011 }
 402:
                        var6 = _closure2_slot5;
                        var6 = var6.bind(var3)(var2);
 411:
                        var6 = _closure2_slot7;
                        if(!(var10 != var6)) { _fun0011_ip = 437; continue _fun0011 }
 419:
                        if(!(var10 != var7)) { _fun0011_ip = 437; continue _fun0011 }
 423:
                        var12 = var7.length;
                        var11 = 0;
                        if(!(!(var12 > var11))) { _fun0011_ip = 605; continue _fun0011 }
 437:
                        if(!(var10 != var8)) { _fun0011_ip = 452; continue _fun0011 }
 441:
                        var11 = var8.length;
                        var10 = 0;
                        if(!(!(var11 > var10))) { _fun0011_ip = 540; continue _fun0011 }
 452:
                        var11 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var10 = 25;
                        var10 = var15[var10];
                        var14 = var11.bind(var3)(var10);
                        var13 = var14.sendMessage;
                        var12 = var2.id;
                        var10 = 12;
                        var10 = var15[var10];
                        var11 = var11.bind(var3)(var10);
                        var10 = var11.parse;
                        var21 = var10.bind(var11)(var2, var9);
                        var10 = {};
                        var15 = _closure1_slot18;
                        var15 = var15.THREAD_CREATION;
                        var10['location'] = var15;
                        var23 = var14;
                        var22 = var12;
                        var20 = undefined;
                        var19 = var10;
                        var10 = var23[var13](var22, var21, var20, var19, var18);
                        _fun0011_ip = 623; continue _fun0011;
 540:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 25;
                        var10 = var12[var10];
                        var13 = var11.bind(var3)(var10);
                        var12 = var13.sendStickers;
                        var22 = var2.id;
                        var10 = {};
                        var14 = _closure1_slot18;
                        var14 = var14.THREAD_CREATION;
                        var10['location'] = var14;
                        var23 = var13;
                        var21 = var8;
                        var20 = var9;
                        var19 = var10;
                        var10 = var23[var12](var22, var21, var20, var19, var18);
                        _fun0011_ip = 623; continue _fun0011;
 605:
                        var23 = undefined;
                        var22 = var2;
                        var21 = var7;
                        var20 = var9;
                        var19 = var8;
                        var6 = var23[var6](var22, var21, var20, var19, var18);
 623:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 19;
                        var6 = var8[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.clearAll;
                        var5 = _closure2_slot0;
                        var5 = var5.id;
                        var4 = _closure1_slot8;
                        var4 = var4.FirstThreadMessage;
                        var4 = var6.bind(var7)(var5, var4);
                        return var3;
 677:
                        return var2;
 680:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = new Array(8);
        var1[0] = var12;
        var1[1] = var11;
        var1[2] = var10;
        var1[3] = var9;
        var1[4] = var8;
        var1[5] = var7;
        var1[6] = var6;
        var1[7] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCreateThreadCommon'] = var4;
    var4 = function createThread(arg1, arg2, arg3, arg4, arg5) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = arg5;
        var _closure2_slot4 = var2;
        var4 = _closure1_slot23;
        var8 = new Array(0);
        var6 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.post;
            var1 = {};
            var7 = _closure1_slot15;
            var6 = var7.CHANNEL_THREADS;
            var4 = _closure2_slot0;
            var4 = var4.id;
            var4 = var6.bind(var7)(var4);
            var1['url'] = var4;
            var4 = {};
            var6 = _closure2_slot1;
            var4['name'] = var6;
            var6 = _closure2_slot2;
            var4['type'] = var6;
            var6 = _closure2_slot3;
            var4['auto_archive_duration'] = var6;
            var5 = _closure2_slot4;
            var4['location'] = var5;
            var1['body'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10 = undefined;
        var9 = var5;
        var7 = undefined;
        var1 = var10[var4](var9, var8, var7, var6, var5);
        return var1;
    };
    var3['createThread'] = var4;
    var2 = function useCreateForumPostCommon(arg1) {
        var2 = arg1;
        var10 = var2.parentChannel;
        var _closure2_slot0 = var10;
        var9 = var2.name;
        var _closure2_slot1 = var9;
        var8 = var2.appliedTags;
        var _closure2_slot2 = var8;
        var6 = var2.analyticsLocations;
        var _closure2_slot3 = var6;
        var7 = var2.onThreadCreated;
        var _closure2_slot4 = var7;
        var5 = var2.upload;
        var _closure2_slot5 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var2 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        StartGenerator();
                        var13 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0013_ip = 711; continue _fun0013 }
 15:
                        var4 = arg3;
                        var5 = undefined;
                        var11 = undefined;
                        var _closure5_slot0 = var5;
                        var12 = undefined;
                        var _closure5_slot1 = var5;
                        var7 = undefined;
                        var6 = undefined;
                        var10 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var9 = 20;
                        var9 = var14[var9];
                        var9 = var10.bind(var5)(var9);
                        var14 = var9.bind(var5)(var13);
                        var10 = _closure1_slot3;
                        var9 = 2;
                        var15 = var10.bind(var5)(var14, var9);
                        var14 = 0;
                        var9 = var15[var14];
                        var10 = 1;
                        var10 = var15[var10];
                        var16 = var13;
                        var17 = 0;
                        if(!var9) { _fun0013_ip = 143; continue _fun0013 }
 98:
                        var13 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var9 = 21;
                        var9 = var15[var9];
                        var15 = var13.bind(var5)(var9);
                        var13 = var15.addFlag;
                        var9 = _closure1_slot17;
                        var9 = var9.SUPPRESS_NOTIFICATIONS;
                        var17 = var13.bind(var15)(var14, var9);
                        var16 = var10;
 143:
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var9 = 15;
                        var9 = var13[var9];
                        var18 = var10.bind(var5)(var9);
                        var15 = var18.getAutoArchiveDuration;
                        var13 = _closure2_slot0;
                        var10 = null;
                        var15 = var15.bind(var18)(var13, var10);
                        var19 = _closure1_slot15;
                        var18 = var19.CHANNEL_THREADS;
                        var13 = var13.id;
                        var18 = var18.bind(var19)(var13);
                        var13 = '?use_nested_fields=true';
                        var13 = var18 + var13;
                        _closure5_slot0 = var13;
                        var13 = {};
                        var18 = _closure2_slot1;
                        var13['name'] = var18;
                        var13['auto_archive_duration'] = var15;
                        var15 = _closure2_slot2;
                        var13['applied_tags'] = var15;
                        var15 = {};
                        var15['content'] = var16;
                        var16 = arg2;
                        var15['sticker_ids'] = var16;
                        var16 = undefined;
                        if(!(var14 !== var17)) { _fun0013_ip = 265; continue _fun0013 }
 262:
                        var16 = var17;
 265:
                        var15['flags'] = var16;
                        var13['message'] = var15;
                        var12 = var13;
                        _closure5_slot1 = var13;
                        var13 = var4;
                        if(!(var10 != var13)) { _fun0013_ip = 359; continue _fun0013 }
 287:
                        var13 = var4;
                        var13 = var13.length;
                        if(!(var13 > var14)) { _fun0013_ip = 359; continue _fun0013 }
 299: // try_start_0
                        var13 = _closure2_slot5;
                        var4 = var13.bind(var5)(var4);
                        SaveGenerator(address=312);
 310:
                        return var4;
 312:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                        if(var13) { _fun0013_ip = 596; continue _fun0013 }
 321:
                        var11 = var4.uploaderFile;
                        var13 = var12.message;
                        var15 = var4.files;
                        var14 = var15.map;
                        var12 = function(arg1, arg2) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.getAttachmentPayload;
                            var2 = arg1;
                            var1 = arg2;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var12 = var14.bind(var15)(var12);
                        var13['attachments'] = var12;
 359: // try_end0
                        var14 = _closure1_slot23;
                        var23 = _closure2_slot0;
                        var22 = _closure2_slot3;
                        var21 = var11;
                        var20 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.HTTP;
                            var2 = var3.post;
                            var1 = {};
                            var5 = _closure5_slot0;
                            var1['url'] = var5;
                            var4 = _closure5_slot1;
                            var1['body'] = var4;
                            var4 = false;
                            var1['rejectWithError'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var24 = undefined;
                        var8 = var24[var14](var23, var22, var21, var20, var19);
                        SaveGenerator(address=389);
 387:
                        return var8;
 389:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                        if(var11) { _fun0013_ip = 593; continue _fun0013 }
 398:
                        var15 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var12 = 18;
                        var11 = var13[var12];
                        var19 = var15.bind(var5)(var11);
                        var18 = var19.clearDraft;
                        var14 = _closure2_slot0;
                        var17 = var14.id;
                        var11 = _closure1_slot8;
                        var16 = var11.ThreadSettings;
                        var16 = var18.bind(var19)(var17, var16);
                        var12 = var13[var12];
                        var18 = var15.bind(var5)(var12);
                        var17 = var18.clearDraft;
                        var16 = var14.id;
                        var12 = var11.FirstThreadMessage;
                        var12 = var17.bind(var18)(var16, var12);
                        var12 = 19;
                        var12 = var13[var12];
                        var16 = var15.bind(var5)(var12);
                        var15 = var16.clearAll;
                        var12 = var14.id;
                        var11 = var11.FirstThreadMessage;
                        var11 = var15.bind(var16)(var12, var11);
                        var12 = _closure1_slot0;
                        var11 = 24;
                        var11 = var13[var11];
                        var13 = var12.bind(var5)(var11);
                        var12 = var13.trackForumPostCreated;
                        var11 = {};
                        var15 = var14.guild_id;
                        var11['guildId'] = var15;
                        var14 = var14.id;
                        var11['channelId'] = var14;
                        var14 = var8.id;
                        var11['postId'] = var14;
                        var11 = var12.bind(var13)(var11);
                        var11 = _closure2_slot4;
                        if(!(var10 != var11)) { _fun0013_ip = 590; continue _fun0013 }
 581:
                        var11 = _closure2_slot4;
                        var11 = var11.bind(var5)(var8);
 590:
                        return var8;
 593:
                        return var8;
 596:
                        return var4;
 599: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = var4;
                        var8 = var4.file;
                        var7 = var4.code;
                        var6 = var4.reason;
                        var4 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 23;
                        var3 = var11[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.handleUploadMessageAttachmentsErrors;
                        var3 = {};
                        var3['file'] = var8;
                        var11 = _closure2_slot0;
                        var8 = var11.getGuildId;
                        var8 = var8.bind(var11)();
                        var3['guildId'] = var8;
                        var8 = _closure2_slot3;
                        if(!(var10 == var8)) { _fun0013_ip = 686; continue _fun0013 }
 680:
                        var8 = new Array(0);
                        _fun0013_ip = 690; continue _fun0013;
 686:
                        var8 = _closure2_slot3;
 690:
                        var3['analyticsLocations'] = var8;
                        var3['code'] = var7;
                        var3['reason'] = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 711:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = new Array(6);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1[5] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCreateForumPostCommon'] = var2;
    return var1;
})();